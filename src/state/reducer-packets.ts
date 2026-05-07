import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import type { ReducerPacket } from '../types/state.js';

export interface CreateReducerPacketParams {
  matterName: string;
  candidateId: string;
  decision: 'accept' | 'reject';
  artifactId?: string;
  reducerName?: string;
  rationale?: string;
  leaseId?: string;
  data?: Record<string, unknown>;
}

function assertSafeArtifactId(artifactId: string): void {
  if (artifactId.includes('/') || artifactId.includes('\\') || artifactId.includes('..')) {
    throw new Error(`Unsafe reducer packet artifact id: ${artifactId}`);
  }
}

export function createReducerPacket(params: CreateReducerPacketParams): ReducerPacket {
  if (params.artifactId) assertSafeArtifactId(params.artifactId);
  const db = getStateDb(params.matterName);
  const now = new Date().toISOString();
  const reducerName = params.reducerName ?? (typeof params.data?.reducerName === 'string' ? params.data.reducerName : 'canonical-reducer');
  const rationale = params.rationale ?? (typeof params.data?.rationale === 'string' ? params.data.rationale : '');
  const data = params.data ?? {};
  const packet: ReducerPacket = {
    id: randomUUID(),
    matterName: params.matterName,
    candidateId: params.candidateId,
    artifactId: params.artifactId,
    decision: params.decision,
    reducerName,
    rationale,
    status: 'decided',
    createdAt: now,
    decidedAt: now,
    leaseId: params.leaseId,
    data,
    metadata: data,
  };
  db.prepare(
    `INSERT INTO reducer_packets (
       id, matter_name, candidate_id, artifact_id, decision, status, reducer_name,
       rationale, created_at, decided_at, lease_id, data_json, metadata_json
     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    packet.id,
    packet.matterName,
    packet.candidateId,
    packet.artifactId ?? null,
    packet.decision,
    packet.status,
    packet.reducerName,
    packet.rationale,
    packet.createdAt,
    packet.decidedAt,
    packet.leaseId ?? null,
    JSON.stringify(packet.data),
    JSON.stringify(packet.data),
  );
  return packet;
}

export function markReducerPacketWritten(matterName: string, packetId: string): ReducerPacket | null {
  const db = getStateDb(matterName);
  db.prepare('UPDATE reducer_packets SET status = ? WHERE id = ? AND matter_name = ?')
    .run('written', packetId, matterName);
  return getReducerPacket(matterName, packetId);
}

export function getReducerPacket(matterName: string, packetId: string): ReducerPacket | null {
  const db = getStateDb(matterName);
  const row = db.prepare('SELECT * FROM reducer_packets WHERE matter_name = ? AND id = ?')
    .get(matterName, packetId) as ReducerPacketRow | undefined;
  return row ? rowToPacket(row) : null;
}

export function listReducerPackets(matterName: string, options: { candidateId?: string } = {}): ReducerPacket[] {
  const db = getStateDb(matterName);
  let sql = 'SELECT * FROM reducer_packets WHERE matter_name = ?';
  const params: string[] = [matterName];
  if (options.candidateId) {
    sql += ' AND candidate_id = ?';
    params.push(options.candidateId);
  }
  sql += ' ORDER BY created_at DESC';
  return (db.prepare(sql).all(...params) as ReducerPacketRow[]).map(rowToPacket);
}

interface ReducerPacketRow {
  id: string;
  matter_name: string;
  candidate_id: string;
  artifact_id: string | null;
  decision: 'accept' | 'reject';
  reducer_name?: string | null;
  rationale?: string | null;
  status: 'decided' | 'written' | 'blocked';
  created_at: string;
  decided_at: string | null;
  lease_id: string | null;
  data_json: string | null;
  metadata_json?: string | null;
}

function rowToPacket(row: ReducerPacketRow): ReducerPacket {
  const metadata = JSON.parse(row.metadata_json || '{}') as Record<string, unknown>;
  const dataJson = JSON.parse(row.data_json || '{}') as Record<string, unknown>;
  const data = { ...metadata, ...dataJson };
  const reducerName = row.reducer_name || (typeof data.reducerName === 'string' ? data.reducerName : 'canonical-reducer');
  const rationale = row.rationale || (typeof data.rationale === 'string' ? data.rationale : '');
  return {
    id: row.id,
    matterName: row.matter_name,
    candidateId: row.candidate_id,
    artifactId: row.artifact_id ?? (typeof data.artifactId === 'string' ? data.artifactId : undefined),
    decision: row.decision,
    reducerName,
    rationale,
    status: row.status,
    createdAt: row.created_at,
    decidedAt: row.decided_at || row.created_at,
    leaseId: row.lease_id ?? undefined,
    data,
    metadata,
  };
}
