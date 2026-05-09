import { loadMatter } from '../storage/matter.js';
import { listCandidates } from '../storage/candidate.js';
import { listArtifacts } from '../storage/artifact.js';
import { listTasks } from '../state/tasks.js';
import { listEvents } from '../state/events.js';
import { buildMatterStoreTelemetry, type StoreFileSummary } from '../observability/store-telemetry.js';
import { evaluateLegalReadiness, type LegalReadinessResult } from '../gates/legal-readiness.js';
import type { PhaseResult } from './types.js';
import type { PhaseDefinition } from '../legal/workflow.js';

export interface RunReadinessBlocker {
  blockerType: string;
  objectId: string;
  reason: string;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
}

export interface RunReadiness {
  matterName: string;
  activityStatus: 'completed' | 'partial' | 'failed' | 'aborted' | 'budget_exceeded';
  legalStatus: 'ready' | 'blocked' | 'not_evaluated';
  exportStatus: 'ready' | 'blocked' | 'not_required' | 'not_evaluated';
  courtReadyStatus: 'ready' | 'needs_followup' | 'not_applicable' | 'failed';
  phaseReadiness: Array<{ phaseId: string; status: 'satisfied' | 'missing_outputs' | 'blocked' | 'not_applicable'; missingOutputs: string[] }>;
  missingOutputs: string[];
  notApplicableFindings: string[];
  legalReadinessResult?: LegalReadinessResult;
  candidateSummary: StoreFileSummary & { drift: number };
  artifactSummary: StoreFileSummary & { drift: number };
  telemetryReconciliation: { surface: string; expected: number; actual: number; status: 'match' | 'drift' }[] & { notes: string[] };
  blockers: RunReadinessBlocker[];
  checkedAt: string;
}

export async function evaluateRunReadiness(input: {
  matterName: string;
  phaseResults?: PhaseResult[];
  stoppedReason?: 'aborted' | 'budget_exceeded';
  activityStatus?: RunReadiness['activityStatus'];
  phases?: PhaseDefinition[];
  requireAcceptedArtifact?: boolean;
  requireExportSignoff?: boolean;
}): Promise<RunReadiness> {
  const index = await loadMatter(input.matterName);
  const tasks = listTasks(input.matterName);
  const candidates = await listCandidates(input.matterName);
  const artifacts = await listArtifacts(input.matterName);
  const storeTelemetry = await buildMatterStoreTelemetry(input.matterName);
  const candidateSummary = {
    ...storeTelemetry.candidateSummary,
    drift: Math.abs(index.candidateCount - candidates.length) + storeTelemetry.candidateSummary.transcriptCount,
  };
  const artifactSummary = {
    ...storeTelemetry.artifactSummary,
    drift: Math.abs(index.artifactCount - artifacts.length),
  };
  const phaseReadiness = (input.phaseResults ?? []).map((phase) => ({
    phaseId: phase.phaseId,
    status: phase.status === 'completed' && phase.artifactIds.length > 0 ? 'satisfied' as const : phase.status === 'completed' ? 'missing_outputs' as const : 'blocked' as const,
    missingOutputs: phase.status === 'completed' && phase.artifactIds.length === 0 ? [`${phase.phaseId}:accepted_artifact`] : [],
  }));
  const missingOutputs = phaseReadiness.flatMap((phase) => phase.missingOutputs);
  const activityStatus = input.activityStatus ?? deriveActivityStatus(tasks, input.stoppedReason);
  const legalReadinessResult = await evaluateLegalReadiness({
    matterName: input.matterName,
    requireAcceptedArtifact: input.requireAcceptedArtifact ?? true,
    requireExportSignoff: input.requireExportSignoff ?? false,
  }).catch(() => undefined);
  const blockers: RunReadinessBlocker[] = [];

  for (const missing of missingOutputs) {
    blockers.push({ blockerType: 'required_output', objectId: missing, reason: 'Required phase output has no accepted artifact id', severity: 'critical' });
  }
  if (candidateSummary.drift > 0) {
    blockers.push({ blockerType: 'telemetry', objectId: 'candidate_summary', reason: 'Candidate index count differs from candidate store or transcript files exist outside JSON candidates', severity: 'medium' });
  }
  if (artifactSummary.drift > 0) {
    blockers.push({ blockerType: 'telemetry', objectId: 'artifact_summary', reason: 'Artifact index count differs from canonical artifact store', severity: 'high' });
  }
  for (const blocker of legalReadinessResult?.blockers ?? []) {
    blockers.push({ blockerType: blocker.blockerType, objectId: blocker.objectId, reason: blocker.reason, severity: blocker.severity });
  }

  const legalStatus = legalReadinessResult ? legalReadinessResult.ready && missingOutputs.length === 0 ? 'ready' : 'blocked' : 'not_evaluated';
  const exportStatus = input.requireExportSignoff ? legalStatus === 'ready' ? 'ready' : 'blocked' : 'not_required';
  const courtReadyStatus = activityStatus === 'failed' ? 'failed' : legalStatus === 'ready' && exportStatus !== 'blocked' && blockers.length === 0 ? 'ready' : 'needs_followup';

  return {
    matterName: input.matterName,
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
    telemetryReconciliation: withTelemetryNotes([
      { surface: 'candidates', expected: index.candidateCount, actual: candidates.length, status: index.candidateCount === candidates.length && candidateSummary.transcriptCount === 0 ? 'match' : 'drift' },
      { surface: 'artifacts', expected: index.artifactCount, actual: artifacts.length, status: index.artifactCount === artifacts.length ? 'match' : 'drift' },
      { surface: 'events', expected: 0, actual: listEvents(input.matterName, { tail: 1 }).length, status: 'match' },
    ], storeTelemetry.reconciliation.notes),
    blockers,
    checkedAt: new Date().toISOString(),
  };
}

function deriveActivityStatus(tasks: ReturnType<typeof listTasks>, stoppedReason?: 'aborted' | 'budget_exceeded'): RunReadiness['activityStatus'] {
  if (stoppedReason) return stoppedReason;
  if (tasks.some((task) => task.status === 'failed')) return 'failed';
  if (tasks.some((task) => task.status === 'blocked' || task.status === 'pending' || task.status === 'in_progress')) return 'partial';
  return 'completed';
}

function withTelemetryNotes<T extends { surface: string; expected: number; actual: number; status: 'match' | 'drift' }>(items: T[], notes: string[]): T[] & { notes: string[] } {
  return Object.assign(items, { notes });
}
