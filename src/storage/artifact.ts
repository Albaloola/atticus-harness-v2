import { writeFile, readFile, readdir, mkdir } from 'fs/promises';
import { join, resolve, relative } from 'path';
import { getMatterPath } from './matter.js';
import type { Artifact } from '../types/artifact.js';
import { getReducerPacket } from '../state/reducer-packets.js';

export interface SaveArtifactOptions {
  canonicalWrite?: 'reducer';
  reducerPacketId?: string;
}

function assertSafeArtifactId(matterName: string, artifactId: string): void {
  if (artifactId.includes('/') || artifactId.includes('\\') || artifactId.includes('..')) {
    throw new Error(`Unsafe artifact id: ${artifactId}`);
  }
  const root = resolve(getMatterPath(matterName, '_artifacts'));
  const target = resolve(join(root, `${artifactId}.json`));
  const rel = relative(root, target);
  if (rel.startsWith('..') || rel === '' || rel.includes('..')) {
    throw new Error(`Unsafe artifact path: ${target}`);
  }
}

export async function saveArtifact(
  matterName: string,
  artifact: Artifact,
  options: SaveArtifactOptions = {},
): Promise<Artifact> {
  assertSafeArtifactId(matterName, artifact.id);
  const reducerPacketId = options.reducerPacketId ?? artifact.reducerPacketId;
  if (options.canonicalWrite !== 'reducer' || !reducerPacketId) {
    throw new Error('reducer-only canonical artifact writes are required; use acceptCandidate/promoteCandidateWithReducer');
  }
  const packet = getReducerPacket(matterName, reducerPacketId);
  if (!packet) {
    throw new Error(`reducer-only canonical artifact write rejected: reducer packet ${reducerPacketId} was not found`);
  }
  if (packet.decision !== 'accept') {
    throw new Error(`reducer-only canonical artifact write rejected: reducer packet ${reducerPacketId} decision is ${packet.decision}`);
  }
  if (packet.status !== 'decided') {
    throw new Error(`reducer-only canonical artifact write rejected: reducer packet ${reducerPacketId} is ${packet.status}`);
  }
  if (!packet.artifactId) {
    throw new Error(`reducer-only canonical artifact write rejected: reducer packet ${reducerPacketId} has no artifact target`);
  }
  if (packet.artifactId !== artifact.id) {
    throw new Error(`reducer-only canonical artifact write rejected: reducer packet ${reducerPacketId} targets ${packet.artifactId}, not ${artifact.id}`);
  }
  if (packet.candidateId !== artifact.acceptedFrom) {
    throw new Error(`reducer-only canonical artifact write rejected: reducer packet ${reducerPacketId} belongs to candidate ${packet.candidateId}, not ${artifact.acceptedFrom}`);
  }

  const canonicalArtifact: Artifact = {
    ...artifact,
    canonicalWrite: 'reducer',
    reducerPacketId,
  };
  const artifactDir = getMatterPath(matterName, '_artifacts');
  await mkdir(artifactDir, { recursive: true });
  const filePath = join(artifactDir, `${canonicalArtifact.id}.json`);
  await writeFile(filePath, JSON.stringify(canonicalArtifact, null, 2), 'utf-8');

  return canonicalArtifact;
}

export async function listArtifacts(matterName: string): Promise<Artifact[]> {
  const artifactDir = getMatterPath(matterName, '_artifacts');
  try {
    const files = await readdir(artifactDir);
    const artifacts: Artifact[] = [];
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const content = await readFile(join(artifactDir, file), 'utf-8');
      artifacts.push(JSON.parse(content) as Artifact);
    }
    return artifacts.sort((a, b) => a.accepted.localeCompare(b.accepted));
  } catch {
    return [];
  }
}

export function getArtifactPath(matterName: string, artifactId: string): string {
  return getMatterPath(matterName, '_artifacts', `${artifactId}.json`);
}
