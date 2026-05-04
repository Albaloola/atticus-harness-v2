import { writeFile, readFile, readdir, mkdir } from 'fs/promises';
import { join } from 'path';
import { getMatterPath, saveMatterIndex, loadMatter } from './matter.js';
import { saveArtifact, listArtifacts } from './artifact.js';
import type { CandidateArtifact, Artifact } from '../types/artifact.js';

export async function saveCandidate(
  matterName: string,
  candidate: CandidateArtifact
): Promise<string> {
  const candidateDir = getMatterPath(matterName, '_candidates');
  await mkdir(candidateDir, { recursive: true });

  const filePath = join(candidateDir, `${candidate.id}.json`);
  await writeFile(filePath, JSON.stringify(candidate, null, 2), 'utf-8');

  const index = await loadMatter(matterName);
  index.candidateCount = (await listCandidates(matterName)).length;
  await saveMatterIndex(matterName, index);

  return candidate.id;
}

export async function listCandidates(matterName: string): Promise<CandidateArtifact[]> {
  const candidateDir = getMatterPath(matterName, '_candidates');
  try {
    const files = await readdir(candidateDir);
    const candidates: CandidateArtifact[] = [];
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const content = await readFile(join(candidateDir, file), 'utf-8');
      candidates.push(JSON.parse(content) as CandidateArtifact);
    }
    return candidates.sort((a, b) => a.created.localeCompare(b.created));
  } catch {
    return [];
  }
}

export async function getCandidatePath(matterName: string, candidateId: string): Promise<string | null> {
  const candidates = await listCandidates(matterName);
  const found = candidates.find(c => c.id === candidateId);
  if (!found) return null;
  return getMatterPath(matterName, '_candidates', `${candidateId}.json`);
}

export async function acceptCandidate(matterName: string, candidateId: string): Promise<Artifact> {
  const candidates = await listCandidates(matterName);
  const candidate = candidates.find(c => c.id === candidateId);
  if (!candidate) {
    throw new Error(`Candidate "${candidateId}" not found in "${matterName}"`);
  }

  candidate.status = 'accepted';

  const candidatePath = getMatterPath(matterName, '_candidates', `${candidateId}.json`);
  await writeFile(candidatePath, JSON.stringify(candidate, null, 2), 'utf-8');

  const artifact = await saveArtifact(matterName, {
    id: candidate.id,
    matterName: candidate.matterName,
    type: candidate.type,
    title: candidate.title,
    content: candidate.content,
    accepted: new Date().toISOString(),
    acceptedFrom: candidateId,
    citations: candidate.metadata.citations || [],
  });

  const index = await loadMatter(matterName);
  index.status = 'complete';
  index.artifactCount = (await listArtifacts(matterName)).length;
  await saveMatterIndex(matterName, index);

  return artifact;
}

export async function rejectCandidate(
  matterName: string,
  candidateId: string,
  reason?: string
): Promise<void> {
  const candidates = await listCandidates(matterName);
  const candidate = candidates.find(c => c.id === candidateId);
  if (!candidate) {
    throw new Error(`Candidate "${candidateId}" not found in "${matterName}"`);
  }

  candidate.status = 'rejected';
  if (reason) {
    candidate.metadata.rejectionReason = reason;
  }

  const candidatePath = getMatterPath(matterName, '_candidates', `${candidateId}.json`);
  await writeFile(candidatePath, JSON.stringify(candidate, null, 2), 'utf-8');
}
