import { readdir } from 'fs/promises';
import { extname } from 'path';
import { listArtifacts } from '../storage/artifact.js';
import { listCandidates } from '../storage/candidate.js';
import { getMatterPath, loadMatter } from '../storage/matter.js';

export interface StoreFileSummary {
  indexCount: number;
  jsonCount: number;
  filesystemCount: number;
  nonJsonCount: number;
  transcriptCount: number;
  ids: string[];
  nonJsonFiles: string[];
  transcriptFiles: string[];
}

export interface StoreTelemetryReconciliation {
  candidateDrift: number;
  artifactDrift: number;
  candidateFilesystemDrift: number;
  artifactFilesystemDrift: number;
  notes: string[];
}

export interface MatterStoreTelemetry {
  candidateSummary: StoreFileSummary;
  artifactSummary: StoreFileSummary;
  reconciliation: StoreTelemetryReconciliation;
}

export async function buildMatterStoreTelemetry(matterName: string): Promise<MatterStoreTelemetry> {
  const [index, candidates, artifacts] = await Promise.all([
    loadMatter(matterName),
    listCandidates(matterName).catch(() => []),
    listArtifacts(matterName).catch(() => []),
  ]);

  const candidateSummary = await summarizeStore({
    matterName,
    store: '_candidates',
    indexCount: index.candidateCount,
    ids: candidates.map((candidate) => candidate.id),
  });
  const artifactSummary = await summarizeStore({
    matterName,
    store: '_artifacts',
    indexCount: index.artifactCount,
    ids: artifacts.map((artifact) => artifact.id),
  });

  return {
    candidateSummary,
    artifactSummary,
    reconciliation: reconcileStoreTelemetry(candidateSummary, artifactSummary),
  };
}

async function summarizeStore(input: {
  matterName: string;
  store: '_candidates' | '_artifacts';
  indexCount: number;
  ids: string[];
}): Promise<StoreFileSummary> {
  let files: string[] = [];
  try {
    const entries = await readdir(getMatterPath(input.matterName, input.store), { withFileTypes: true });
    files = entries.filter((entry) => entry.isFile()).map((entry) => entry.name).sort();
  } catch {
    files = [];
  }

  const nonJsonFiles = files.filter((file) => extname(file) !== '.json');
  const transcriptFiles = nonJsonFiles.filter((file) => /^transcript-.*\.md$/i.test(file));

  return {
    indexCount: input.indexCount,
    jsonCount: input.ids.length,
    filesystemCount: files.length,
    nonJsonCount: nonJsonFiles.length,
    transcriptCount: transcriptFiles.length,
    ids: input.ids,
    nonJsonFiles,
    transcriptFiles,
  };
}

function reconcileStoreTelemetry(
  candidateSummary: StoreFileSummary,
  artifactSummary: StoreFileSummary,
): StoreTelemetryReconciliation {
  const candidateDrift = candidateSummary.indexCount - candidateSummary.jsonCount;
  const artifactDrift = artifactSummary.indexCount - artifactSummary.jsonCount;
  const candidateFilesystemDrift = candidateSummary.filesystemCount - candidateSummary.jsonCount;
  const artifactFilesystemDrift = artifactSummary.filesystemCount - artifactSummary.jsonCount;
  const notes: string[] = [];

  if (candidateDrift !== 0) notes.push(`candidate index/json drift: ${candidateDrift}`);
  if (artifactDrift !== 0) notes.push(`artifact index/json drift: ${artifactDrift}`);
  if (candidateSummary.transcriptCount > 0) {
    notes.push(`${candidateSummary.transcriptCount} transcript file(s) in _candidates are telemetry, not JSON candidates`);
  }
  const otherCandidateNonJson = candidateSummary.nonJsonCount - candidateSummary.transcriptCount;
  if (otherCandidateNonJson > 0) notes.push(`${otherCandidateNonJson} other non-JSON candidate file(s) are not counted as candidates`);
  if (artifactSummary.nonJsonCount > 0) notes.push(`${artifactSummary.nonJsonCount} non-JSON artifact file(s) are not counted as accepted artifacts`);

  return {
    candidateDrift,
    artifactDrift,
    candidateFilesystemDrift,
    artifactFilesystemDrift,
    notes,
  };
}
