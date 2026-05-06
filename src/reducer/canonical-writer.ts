import { randomUUID } from 'crypto';
import { writeFile } from 'fs/promises';
import { join, resolve, relative } from 'path';
import { getStateDb } from '../state/store.js';
import { appendEvent } from '../state/events.js';
import { getMatterPath, loadMatter, saveMatterIndex } from '../storage/matter.js';
import { listArtifacts } from '../storage/artifact.js';
import { listCandidates } from '../storage/candidate.js';
import type { Artifact, CandidateArtifact } from '../types/artifact.js';

export interface ReducerPacket {
  id: string;
  matterName: string;
  candidateId: string;
  artifactId?: string;
  decision: 'accept' | 'reject' | 'needs_review';
  reducerName: string;
  rationale: string;
  createdAt: string;
  metadata: Record<string, unknown>;
}

export interface PromoteCandidateOptions {
  reducerName?: string;
  rationale?: string;
  metadata?: Record<string, unknown>;
}

export class ReducerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ReducerError';
  }
}

function assertCanonicalArtifactPath(matterName: string, artifactId: string): string {
  if (artifactId.includes('/') || artifactId.includes('\\') || artifactId.includes('..')) {
    throw new ReducerError(`Unsafe artifact id: ${artifactId}`);
  }
  const root = resolve(getMatterPath(matterName, '_artifacts'));
  const target = resolve(join(root, `${artifactId}.json`));
  const rel = relative(root, target);
  if (rel.startsWith('..') || rel === '' || rel.includes('..')) {
    throw new ReducerError(`Canonical artifact path escapes matter root: ${target}`);
  }
  return target;
}

function recordReducerPacket(packet: ReducerPacket): void {
  const db = getStateDb(packet.matterName);
  db.prepare(
    `INSERT INTO reducer_packets (id, matter_name, candidate_id, artifact_id, decision, reducer_name, rationale, created_at, metadata_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    packet.id,
    packet.matterName,
    packet.candidateId,
    packet.artifactId ?? null,
    packet.decision,
    packet.reducerName,
    packet.rationale,
    packet.createdAt,
    JSON.stringify(packet.metadata),
  );
}

export function listReducerPackets(matterName: string): ReducerPacket[] {
  const db = getStateDb(matterName);
  const rows = db.prepare(
    'SELECT * FROM reducer_packets WHERE matter_name = ? ORDER BY created_at DESC'
  ).all(matterName) as Array<{
    id: string;
    matter_name: string;
    candidate_id: string;
    artifact_id: string | null;
    decision: string;
    reducer_name: string;
    rationale: string;
    created_at: string;
    metadata_json: string;
  }>;
  return rows.map((row) => ({
    id: row.id,
    matterName: row.matter_name,
    candidateId: row.candidate_id,
    artifactId: row.artifact_id ?? undefined,
    decision: row.decision as ReducerPacket['decision'],
    reducerName: row.reducer_name,
    rationale: row.rationale,
    createdAt: row.created_at,
    metadata: JSON.parse(row.metadata_json),
  }));
}

export async function promoteCandidateWithReducer(
  matterName: string,
  candidateId: string,
  options: PromoteCandidateOptions = {},
): Promise<Artifact> {
  const candidates = await listCandidates(matterName);
  const candidate = candidates.find((c) => c.id === candidateId);
  if (!candidate) {
    throw new ReducerError(`Candidate "${candidateId}" not found in "${matterName}"`);
  }

  const now = new Date().toISOString();
  const packetId = `red-${randomUUID()}`;
  const artifact: Artifact = {
    id: candidate.id,
    matterName: candidate.matterName,
    type: candidate.type,
    title: candidate.title,
    content: candidate.content,
    accepted: now,
    acceptedFrom: candidateId,
    citations: candidate.metadata.citations || [],
  };

  const artifactPath = assertCanonicalArtifactPath(matterName, artifact.id);
  const candidatePath = getMatterPath(matterName, '_candidates', `${candidateId}.json`);
  const acceptedCandidate: CandidateArtifact = {
    ...candidate,
    status: 'accepted',
    metadata: {
      ...candidate.metadata,
      reducerPacketId: packetId,
      reducerName: options.reducerName ?? 'canonical-reducer',
    },
  };

  await writeFile(candidatePath, JSON.stringify(acceptedCandidate, null, 2), 'utf-8');
  await writeFile(artifactPath, JSON.stringify({ ...artifact, reducerPacketId: packetId }, null, 2), 'utf-8');

  const packet: ReducerPacket = {
    id: packetId,
    matterName,
    candidateId,
    artifactId: artifact.id,
    decision: 'accept',
    reducerName: options.reducerName ?? 'canonical-reducer',
    rationale: options.rationale ?? 'Candidate promoted through reducer-only canonical write boundary.',
    createdAt: now,
    metadata: options.metadata ?? {},
  };
  recordReducerPacket(packet);
  await appendEvent({
    matterName,
    type: 'reducer.packet.recorded',
    data: { packetId, candidateId, artifactId: artifact.id, decision: 'accept' },
    source: 'reducer',
  });

  const index = await loadMatter(matterName);
  index.status = 'complete';
  index.artifactCount = (await listArtifacts(matterName)).length;
  await saveMatterIndex(matterName, index);

  return artifact;
}
