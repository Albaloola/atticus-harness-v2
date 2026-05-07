import { join, resolve, relative } from 'path';
import { appendEvent } from '../state/events.js';
import { createReducerPacket, markReducerPacketWritten, listReducerPackets as listStateReducerPackets } from '../state/reducer-packets.js';
import { getMatterPath, loadMatter, saveMatterIndex } from '../storage/matter.js';
import { listArtifacts, saveArtifact } from '../storage/artifact.js';
import { listCandidates } from '../storage/candidate.js';
import type { Artifact, CandidateArtifact } from '../types/artifact.js';
import type { ReducerPacket } from '../types/state.js';
import { writeFile } from 'fs/promises';

export type { ReducerPacket } from '../types/state.js';

export interface PromoteCandidateOptions {
  reducerName?: string;
  rationale?: string;
  metadata?: Record<string, unknown>;
}

const DEFAULT_REDUCER_NAME = 'canonical-reducer';
const DEFAULT_REDUCER_RATIONALE = 'Candidate promoted through reducer-only canonical write boundary.';

export class ReducerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ReducerError';
  }
}

function assertCanonicalArtifactPath(matterName: string, artifactId: string): void {
  if (artifactId.includes('/') || artifactId.includes('\\') || artifactId.includes('..')) {
    throw new ReducerError(`Unsafe artifact id: ${artifactId}`);
  }
  const root = resolve(getMatterPath(matterName, '_artifacts'));
  const target = resolve(join(root, `${artifactId}.json`));
  const rel = relative(root, target);
  if (rel.startsWith('..') || rel === '' || rel.includes('..')) {
    throw new ReducerError(`Canonical artifact path escapes matter root: ${target}`);
  }
}

export function listReducerPackets(matterName: string): ReducerPacket[] {
  return listStateReducerPackets(matterName);
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

  assertCanonicalArtifactPath(matterName, candidate.id);
  const reducerName = options.reducerName ?? DEFAULT_REDUCER_NAME;
  const rationale = options.rationale ?? DEFAULT_REDUCER_RATIONALE;
  const packet = createReducerPacket({
    matterName,
    candidateId,
    artifactId: candidate.id,
    decision: 'accept',
    reducerName,
    rationale,
    data: {
      ...(options.metadata ?? {}),
      artifactId: candidate.id,
      reducerName,
      rationale,
    },
  });

  const now = new Date().toISOString();
  const artifact: Artifact = {
    id: candidate.id,
    matterName: candidate.matterName,
    type: candidate.type,
    title: candidate.title,
    content: candidate.content,
    accepted: now,
    acceptedFrom: candidateId,
    citations: candidate.metadata.citations || [],
    canonicalWrite: 'reducer',
    reducerPacketId: packet.id,
  };

  const candidatePath = getMatterPath(matterName, '_candidates', `${candidateId}.json`);
  const acceptedCandidate: CandidateArtifact = {
    ...candidate,
    status: 'accepted',
    metadata: {
      ...candidate.metadata,
      reducerPacketId: packet.id,
      reducerName,
    },
  };

  await writeFile(candidatePath, JSON.stringify(acceptedCandidate, null, 2), 'utf-8');
  const saved = await saveArtifact(matterName, artifact, { canonicalWrite: 'reducer', reducerPacketId: packet.id });
  markReducerPacketWritten(matterName, packet.id);
  await appendEvent({
    matterName,
    type: 'reducer.packet.recorded',
    data: { packetId: packet.id, candidateId, artifactId: artifact.id, decision: 'accept' },
    source: 'reducer',
  });

  const index = await loadMatter(matterName);
  index.status = 'complete';
  index.artifactCount = (await listArtifacts(matterName)).length;
  await saveMatterIndex(matterName, index);

  return saved;
}
