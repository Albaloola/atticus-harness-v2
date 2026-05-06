import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import type { ReducerPacket } from '../types/state.js';

export interface CreateReducerPacketParams {
  matterName: string;
  candidateId: string;
  decision: 'accept' | 'reject';
  leaseId?: string;
  data?: Record<string, unknown>;
}

export function createReducerPacket(params: CreateReducerPacketParams): ReducerPacket {
  const db = getStateDb(params.matterName);
  const now = new Date().toISOString();
  const packet: ReducerPacket = {
    id: randomUUID(),
    matterName: params.matterName,
    candidateId: params.candidateId,
    decision: params.decision,
    status: 'decided',
    createdAt: now,
    decidedAt: now,
    leaseId: params.leaseId,
    data: params.data ?? {},
  };
  db.prepare(
    `INSERT INTO reducer_packets (id, matter_name, candidate_id, decision, status, created_at, decided_at, lease_id, data_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    packet.id,
    packet.matterName,
    packet.candidateId,
    packet.decision,
    packet.status,
    packet.createdAt,
    packet.decidedAt,
    packet.leaseId ?? null,
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
  decision: 'accept' | 'reject';
  status: 'decided' | 'written' | 'blocked';
  created_at: string;
  decided_at: string;
  lease_id: string | null;
  data_json: string;
}

function rowToPacket(row: ReducerPacketRow): ReducerPacket {
  return {
    id: row.id,
    matterName: row.matter_name,
    candidateId: row.candidate_id,
    decision: row.decision,
    status: row.status,
    createdAt: row.created_at,
    decidedAt: row.decided_at,
    leaseId: row.lease_id ?? undefined,
    data: JSON.parse(row.data_json),
  };
}
