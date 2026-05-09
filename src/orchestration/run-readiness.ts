import { readdir } from 'fs/promises';
import { extname } from 'path';
import type { LegalArtifactType } from '../legal/artifact-types.js';
import type { PhaseDefinition } from '../legal/workflow.js';
import { getDefaultPhases } from '../legal/workflow.js';
import { requiredOutputsForPhase, type RequiredOutput } from '../legal/phase-contracts.js';
import { evaluateLegalReadiness, type LegalReadinessResult } from '../gates/legal-readiness.js';
import { listCandidates } from '../storage/candidate.js';
import { listArtifacts } from '../storage/artifact.js';
import { loadMatter, getMatterPath } from '../storage/matter.js';
import type { PhaseResult } from './types.js';

export type ActivityStatus = 'completed' | 'partial' | 'failed' | 'aborted' | 'budget_exceeded';
export type ReadinessStatus = 'ready' | 'blocked' | 'not_evaluated';
export type ExportReadinessStatus = 'ready' | 'blocked' | 'not_required' | 'not_evaluated';
export type CourtReadyStatus = 'ready' | 'needs_followup' | 'not_applicable' | 'failed';

export interface PhaseReadiness {
  phaseId: string;
  phaseName: string;
  activityStatus: PhaseResult['status'] | 'not_run';
  requiredOutputs: RequiredOutput[];
  satisfiedOutputs: LegalArtifactType[];
  missingOutputs: MissingRequiredOutput[];
  courtReadyBlocked: boolean;
}

export interface MissingRequiredOutput {
  phaseId: string;
  outputType: LegalArtifactType;
  requiredFor: RequiredOutput['requiredFor'];
  minCount: number;
  acceptedArtifactRequired: boolean;
  severity: RequiredOutput['readinessBlockerSeverity'];
  reason: string;
}

export interface StoreSummary {
  indexCount: number;
  jsonCount: number;
  filesystemCount: number;
  nonJsonCount: number;
  ids: string[];
}

export interface TelemetryReconciliation {
  candidateDrift: number;
  artifactDrift: number;
  candidateNonJsonFiles: number;
  artifactNonJsonFiles: number;
  notes: string[];
}

export interface RunReadiness {
  activityStatus: ActivityStatus;
  legalStatus: ReadinessStatus;
  exportStatus: ExportReadinessStatus;
  courtReadyStatus: CourtReadyStatus;
  phaseReadiness: PhaseReadiness[];
  missingOutputs: MissingRequiredOutput[];
  notApplicableFindings: string[];
  legalReadinessResult?: LegalReadinessResult;
  candidateSummary: StoreSummary;
  artifactSummary: StoreSummary;
  telemetryReconciliation: TelemetryReconciliation;
  blockers: string[];
  checkedAt: string;
}

export async function evaluateRunReadiness(input: {
  matterName: string;
  phases?: PhaseDefinition[];
  phaseResults?: PhaseResult[];
  activityStatus?: ActivityStatus;
  requireAcceptedArtifact?: boolean;
  requireExportSignoff?: boolean;
}): Promise<RunReadiness> {
  const phases = input.phases ?? getDefaultPhases();
  const phaseResults = input.phaseResults ?? [];
  const candidates = await listCandidates(input.matterName);
  const artifacts = await listArtifacts(input.matterName);
  const candidateSummary = await summarizeStore(input.matterName, '_candidates', await safeIndexCount(input.matterName, 'candidateCount'), candidates.map((c) => c.id));
  const artifactSummary = await summarizeStore(input.matterName, '_artifacts', await safeIndexCount(input.matterName, 'artifactCount'), artifacts.map((a) => a.id));
  const legalReadinessResult = await evaluateLegalReadiness({
    matterName: input.matterName,
    requireAcceptedArtifact: input.requireAcceptedArtifact ?? true,
    requireExportSignoff: input.requireExportSignoff ?? false,
  });

  const phaseReadiness = phases.map((phase) => {
    const result = phaseResults.find((candidate) => candidate.phaseId === phase.id);
    const requiredOutputs = requiredOutputsForPhase(phase);
    const satisfiedOutputs = requiredOutputs
      .filter((output) => countMatchingAcceptedArtifacts(artifacts, output.outputType) >= output.minCount)
      .map((output) => output.outputType);
    const missingOutputs = requiredOutputs
      .filter((output) => output.acceptedArtifactRequired)
      .filter((output) => countMatchingAcceptedArtifacts(artifacts, output.outputType) < output.minCount)
      .map((output) => ({
        phaseId: phase.id,
        outputType: output.outputType,
        requiredFor: output.requiredFor,
        minCount: output.minCount,
        acceptedArtifactRequired: output.acceptedArtifactRequired,
        severity: output.readinessBlockerSeverity,
        reason: `Required accepted ${output.outputType} artifact is missing`,
      } satisfies MissingRequiredOutput));
    return {
      phaseId: phase.id,
      phaseName: phase.name,
      activityStatus: result?.status ?? 'not_run',
      requiredOutputs,
      satisfiedOutputs,
      missingOutputs,
      courtReadyBlocked: missingOutputs.length > 0,
    } satisfies PhaseReadiness;
  });

  const missingOutputs = phaseReadiness.flatMap((phase) => phase.missingOutputs);
  const activityStatus = input.activityStatus ?? inferActivityStatus(phaseReadiness);
  const telemetryReconciliation = reconcileTelemetry(candidateSummary, artifactSummary);
  const blockers = [
    ...missingOutputs.map((output) => `${output.phaseId}: ${output.reason}`),
    ...legalReadinessResult.blockers.map((blocker) => `${blocker.objectId}: ${blocker.reason}`),
    ...telemetryReconciliation.notes,
  ];
  const legalStatus: ReadinessStatus = legalReadinessResult.ready && missingOutputs.length === 0 ? 'ready' : 'blocked';
  const exportStatus: ExportReadinessStatus = input.requireExportSignoff
    ? legalReadinessResult.blockers.some((blocker) => blocker.blockerType === 'export_id') ? 'blocked' : 'ready'
    : 'not_required';
  const courtReadyStatus: CourtReadyStatus = activityStatus === 'failed'
    ? 'failed'
    : legalStatus === 'ready' && (exportStatus === 'ready' || exportStatus === 'not_required')
      ? 'ready'
      : 'needs_followup';

  return {
    activityStatus,
    legalStatus,
    exportStatus,
    courtReadyStatus,
    phaseReadiness,
    missingOutputs,
    notApplicableFindings: [],
    legalReadinessResult,
    candidateSummary,
    artifactSummary,
    telemetryReconciliation,
    blockers,
    checkedAt: new Date().toISOString(),
  };
}

function countMatchingAcceptedArtifacts(artifacts: Array<{ title: string; type: string; content?: string }>, outputType: LegalArtifactType): number {
  const token = outputType.replace(/_/g, ' ');
  return artifacts.filter((artifact) =>
    artifact.type === outputType ||
    artifact.title.toLowerCase().includes(outputType) ||
    artifact.title.toLowerCase().includes(token) ||
    (artifact.content ?? '').toLowerCase().includes(`artifact_type: ${outputType}`)
  ).length;
}

function inferActivityStatus(phaseReadiness: PhaseReadiness[]): ActivityStatus {
  if (phaseReadiness.some((phase) => phase.activityStatus === 'failed')) return 'failed';
  if (phaseReadiness.length === 0 || phaseReadiness.some((phase) => phase.activityStatus === 'not_run' || phase.activityStatus === 'blocked')) return 'partial';
  return 'completed';
}

async function safeIndexCount(matterName: string, key: 'candidateCount' | 'artifactCount'): Promise<number> {
  try {
    const index = await loadMatter(matterName);
    return index[key];
  } catch {
    return 0;
  }
}

async function summarizeStore(matterName: string, store: '_candidates' | '_artifacts', indexCount: number, ids: string[]): Promise<StoreSummary> {
  let filesystemCount = 0;
  let nonJsonCount = 0;
  try {
    const entries = await readdir(getMatterPath(matterName, store), { withFileTypes: true });
    filesystemCount = entries.filter((entry) => entry.isFile()).length;
    nonJsonCount = entries.filter((entry) => entry.isFile() && extname(entry.name) !== '.json').length;
  } catch {
    filesystemCount = 0;
    nonJsonCount = 0;
  }
  return { indexCount, jsonCount: ids.length, filesystemCount, nonJsonCount, ids };
}

function reconcileTelemetry(candidateSummary: StoreSummary, artifactSummary: StoreSummary): TelemetryReconciliation {
  const notes: string[] = [];
  const candidateDrift = candidateSummary.indexCount - candidateSummary.jsonCount;
  const artifactDrift = artifactSummary.indexCount - artifactSummary.jsonCount;
  if (candidateDrift !== 0) notes.push(`candidate index/json drift: ${candidateDrift}`);
  if (artifactDrift !== 0) notes.push(`artifact index/json drift: ${artifactDrift}`);
  if (candidateSummary.nonJsonCount > 0) notes.push(`${candidateSummary.nonJsonCount} non-JSON candidate files are not counted as candidates`);
  if (artifactSummary.nonJsonCount > 0) notes.push(`${artifactSummary.nonJsonCount} non-JSON artifact files are not counted as artifacts`);
  return {
    candidateDrift,
    artifactDrift,
    candidateNonJsonFiles: candidateSummary.nonJsonCount,
    artifactNonJsonFiles: artifactSummary.nonJsonCount,
    notes,
  };
}
