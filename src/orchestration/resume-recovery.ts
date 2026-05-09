import { loadOrchestrationCheckpoint } from './checkpoint.js';
import { listEvents } from '../state/events.js';
import { listRuns } from '../state/runs.js';
import type { AgentRun, MatterEvent } from '../types/state.js';
import type { PhaseDefinition } from '../legal/workflow.js';
import type { AgentStructuredResult } from './types.js';

export type ResumePlanSource = 'none' | 'checkpoint' | 'events' | 'ledger';

export interface ProviderAgnosticResumePlan {
  phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }>;
  startIndex: number;
  resumeFromRunId?: string;
  source: ResumePlanSource;
  diagnostics: {
    eventCount: number;
    afterPhaseCount: number;
    miniOrchestratorSpawnCount: number;
    lastCheckpoint?: string;
    lastCheckpointPhaseId?: string;
    lastCheckpointAt?: string;
    recoveredPhaseIds: string[];
  };
}

interface PhaseRecoveryRecord {
  phaseId: string;
  status: 'completed' | 'blocked' | 'failed';
  summary: string;
  support: string;
  timestamp: string;
  runId?: string;
}

export function buildProviderAgnosticResumePlan(input: {
  matterName: string;
  objective?: string;
  phases: PhaseDefinition[];
}): ProviderAgnosticResumePlan {
  const checkpointPlan = buildResumePlanFromCheckpoint(input.matterName, input.phases);
  const eventPlan = buildResumePlanFromEvents(input.matterName, input.phases);

  if (eventPlan.startIndex > checkpointPlan.startIndex) return eventPlan;
  if (checkpointPlan.startIndex > 0) return checkpointPlan;
  return eventPlan;
}

export function emptyProviderAgnosticResumePlan(): ProviderAgnosticResumePlan {
  return {
    phaseResults: [],
    startIndex: 0,
    source: 'none',
    diagnostics: {
      eventCount: 0,
      afterPhaseCount: 0,
      miniOrchestratorSpawnCount: 0,
      recoveredPhaseIds: [],
    },
  };
}

function buildResumePlanFromCheckpoint(
  matterName: string,
  phases: PhaseDefinition[],
): ProviderAgnosticResumePlan {
  const checkpoint = loadOrchestrationCheckpoint(matterName);
  if (!checkpoint?.phaseSummaries?.length) return emptyProviderAgnosticResumePlan();

  const phaseIndex = phaseIndexMap(phases);
  const records = new Map<string, PhaseRecoveryRecord>();
  for (const summary of checkpoint.phaseSummaries) {
    if (!phaseIndex.has(summary.phaseId)) continue;
    records.set(summary.phaseId, {
      phaseId: summary.phaseId,
      status: summary.status,
      summary: `Resumed from checkpoint: ${summary.summary}`,
      support: `checkpoint:${checkpoint.masterRunId ?? 'unknown'}`,
      timestamp: checkpoint.updatedAt,
      runId: checkpoint.masterRunId,
    });
  }

  const orderedSummaries = checkpoint.phaseSummaries
    .filter((summary) => phaseIndex.has(summary.phaseId))
    .sort((a, b) => phaseIndex.get(a.phaseId)! - phaseIndex.get(b.phaseId)!);
  const lastSummary = orderedSummaries[orderedSummaries.length - 1];
  const lastIndex = lastSummary ? phaseIndex.get(lastSummary.phaseId)! : -1;
  const startIndex = lastSummary?.status === 'completed'
    ? Math.max(checkpoint.currentPhaseIndex ?? 0, lastIndex + 1)
    : Math.max(0, Math.min(checkpoint.currentPhaseIndex ?? lastIndex, lastIndex));

  return makeResumePlan({
    phases,
    records,
    startIndex,
    source: 'checkpoint',
    resumeFromRunId: checkpoint.masterRunId,
    diagnostics: {
      eventCount: 0,
      afterPhaseCount: recordsWithStatus(records, 'completed').length,
      miniOrchestratorSpawnCount: 0,
      lastCheckpoint: checkpoint.status,
      lastCheckpointPhaseId: checkpoint.currentPhaseId,
      lastCheckpointAt: checkpoint.updatedAt,
    },
  });
}

function buildResumePlanFromEvents(
  matterName: string,
  phases: PhaseDefinition[],
): ProviderAgnosticResumePlan {
  const events = listEvents(matterName).sort(compareEventsOldestFirst);
  const runs = listRuns(matterName).sort(compareRunsOldestFirst);
  if (events.length === 0 && runs.length === 0) return emptyProviderAgnosticResumePlan();

  const phaseIndex = phaseIndexMap(phases);
  const runById = new Map(runs.map((run) => [run.id, run]));
  const phaseByMiniRun = phaseByMiniRunId(events);
  const records = new Map<string, PhaseRecoveryRecord>();
  let progressStartIndex = 0;
  let resumeFromRunId: string | undefined;
  let lastCheckpoint: string | undefined;
  let lastCheckpointPhaseId: string | undefined;
  let lastCheckpointAt: string | undefined;
  let afterPhaseCount = 0;
  let miniOrchestratorSpawnCount = 0;

  for (const event of events) {
    if (event.type === 'agent.spawned' && event.data.role === 'mini_orchestrator') {
      miniOrchestratorSpawnCount += 1;
      if (event.runId) resumeFromRunId = rootRunIdFor(runById, event.runId) ?? resumeFromRunId;
    }

    if (!isMasterSupervisorCheckpointEvent(event)) continue;
    const checkpoint = stringValue(event.data.checkpoint);
    const phaseId = stringValue(event.data.phaseId);
    if (checkpoint && checkpoint !== 'preflight' && checkpoint !== 'final') {
      lastCheckpoint = checkpoint;
      lastCheckpointPhaseId = phaseId;
      lastCheckpointAt = event.timestamp;
      resumeFromRunId = rootRunIdFor(runById, event.runId) ?? resumeFromRunId;
    }
    if (!phaseId || !phaseIndex.has(phaseId)) continue;

    if (event.type !== 'agent.run.completed') continue;
    if (checkpoint === 'after_phase' && event.data.recommendedRunAction === 'continue') {
      afterPhaseCount += 1;
      setRecordIfNewer(records, {
        phaseId,
        status: 'completed',
        summary: runById.get(event.runId ?? '')?.summary ?? `Phase ${phaseId} accepted by after-phase supervisor.`,
        support: `event:${event.id}`,
        timestamp: event.timestamp,
        runId: event.runId,
      });
      progressStartIndex = Math.max(progressStartIndex, phaseIndex.get(phaseId)! + 1);
    } else if (checkpoint === 'blocked_phase') {
      setRecordIfNewer(records, {
        phaseId,
        status: 'blocked',
        summary: runById.get(event.runId ?? '')?.summary ?? `Phase ${phaseId} reached blocked-phase supervision.`,
        support: `event:${event.id}`,
        timestamp: event.timestamp,
        runId: event.runId,
      });
      progressStartIndex = Math.max(progressStartIndex, phaseIndex.get(phaseId)!);
    }
  }

  for (const run of runs) {
    if (run.role !== 'mini_orchestrator') continue;
    const phaseId = phaseByMiniRun.get(run.id);
    if (!phaseId || !phaseIndex.has(phaseId)) continue;
    if (run.status === 'running') continue;
    const rootRunId = rootRunIdFor(runById, run.id);
    const timestamp = run.ended ?? run.heartbeatAt ?? run.started;
    const status = run.status === 'completed'
      ? 'completed'
      : run.status === 'blocked' || run.status === 'max_turns'
        ? 'blocked'
        : 'failed';
    setRecordIfNewer(records, {
      phaseId,
      status,
      summary: `Resumed from prior run ${rootRunId ?? run.id}: ${run.summary ?? `Mini-orchestrator ${run.id} ended with status ${run.status}.`}`,
      support: `mini_orchestrator:${run.id}`,
      timestamp,
      runId: run.id,
    });
    if (status === 'completed') {
      progressStartIndex = Math.max(progressStartIndex, phaseIndex.get(phaseId)! + 1);
    } else if (progressStartIndex <= phaseIndex.get(phaseId)!) {
      progressStartIndex = Math.max(progressStartIndex, phaseIndex.get(phaseId)!);
    }
    resumeFromRunId = rootRunId ?? resumeFromRunId;
  }

  return makeResumePlan({
    phases,
    records,
    startIndex: progressStartIndex,
    source: progressStartIndex > 0 ? 'events' : 'none',
    resumeFromRunId,
    diagnostics: {
      eventCount: events.length,
      afterPhaseCount,
      miniOrchestratorSpawnCount,
      lastCheckpoint,
      lastCheckpointPhaseId,
      lastCheckpointAt,
    },
  });
}

function makeResumePlan(input: {
  phases: PhaseDefinition[];
  records: Map<string, PhaseRecoveryRecord>;
  startIndex: number;
  source: ResumePlanSource;
  resumeFromRunId?: string;
  diagnostics: Omit<ProviderAgnosticResumePlan['diagnostics'], 'recoveredPhaseIds'>;
}): ProviderAgnosticResumePlan {
  const startIndex = clampIndex(input.startIndex, input.phases.length);
  const phaseResults: ProviderAgnosticResumePlan['phaseResults'] = [];

  for (let index = 0; index < startIndex; index += 1) {
    const phase = input.phases[index];
    const record = input.records.get(phase.id) ?? {
      phaseId: phase.id,
      status: 'blocked' as const,
      summary: `Phase position was recovered past ${phase.id}, but no phase summary was available in checkpoint or events.`,
      support: 'resume_recovery:inferred_missing_phase_summary',
      timestamp: new Date(0).toISOString(),
    };
    phaseResults.push({ phase, result: recordToStructuredResult(record) });
  }

  return {
    phaseResults,
    startIndex,
    resumeFromRunId: input.resumeFromRunId,
    source: input.source,
    diagnostics: {
      ...input.diagnostics,
      recoveredPhaseIds: phaseResults.map(({ phase }) => phase.id),
    },
  };
}

function recordToStructuredResult(record: PhaseRecoveryRecord): AgentStructuredResult {
  return {
    status: record.status === 'completed' ? 'completed' : record.status === 'failed' ? 'failed' : 'blocked',
    summary: record.summary,
    findings: [{
      claim: record.summary,
      support: record.support,
      confidence: 'medium',
      kind: 'procedural_fact',
    }],
    risks: record.status === 'completed'
      ? []
      : [{
          risk: `Recovered prior phase ${record.phaseId} as ${record.status}; resume will continue from the latest durable phase position without replaying it.`,
          severity: record.status === 'failed' ? 'high' : 'medium',
          mitigation: 'Inspect recovered phase outputs before external use; rerun the phase explicitly only if the recovered output is inadequate.',
        }],
    proposedTasks: [],
    artifactIds: [],
    nextActions: [],
  };
}

function isMasterSupervisorCheckpointEvent(event: MatterEvent): boolean {
  return event.data.role === 'master_supervisor' && typeof event.data.checkpoint === 'string';
}

function phaseByMiniRunId(events: MatterEvent[]): Map<string, string> {
  const phases = new Map<string, string>();
  for (const event of events) {
    if (!event.runId) continue;
    if (event.type === 'agent.spawned' && event.data.role === 'mini_orchestrator') {
      const phase = stringValue(event.data.phase) ?? stringValue(event.data.phaseId);
      if (phase) phases.set(event.runId, phase);
    }
    if ((event.type === 'agent.run.completed' || event.type === 'agent.run.blocked' || event.type === 'agent.run.error') &&
      event.data.role === 'mini_orchestrator') {
      const phase = stringValue(event.data.phase) ?? stringValue(event.data.phaseId);
      if (phase) phases.set(event.runId, phase);
    }
  }
  return phases;
}

function rootRunIdFor(runs: Map<string, AgentRun>, runId: string | undefined): string | undefined {
  if (!runId) return undefined;
  let current = runs.get(runId);
  let last = current;
  const seen = new Set<string>();
  while (current?.parentRunId && !seen.has(current.id)) {
    seen.add(current.id);
    last = current;
    current = runs.get(current.parentRunId);
  }
  return current?.id ?? last?.id ?? runId;
}

function setRecordIfNewer(records: Map<string, PhaseRecoveryRecord>, record: PhaseRecoveryRecord): void {
  const existing = records.get(record.phaseId);
  if (!existing || new Date(record.timestamp).getTime() >= new Date(existing.timestamp).getTime()) {
    records.set(record.phaseId, record);
  }
}

function phaseIndexMap(phases: PhaseDefinition[]): Map<string, number> {
  return new Map(phases.map((phase, index) => [phase.id, index]));
}

function recordsWithStatus(records: Map<string, PhaseRecoveryRecord>, status: PhaseRecoveryRecord['status']): PhaseRecoveryRecord[] {
  return [...records.values()].filter((record) => record.status === status);
}

function stringValue(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

function compareEventsOldestFirst(a: MatterEvent, b: MatterEvent): number {
  return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
}

function compareRunsOldestFirst(a: AgentRun, b: AgentRun): number {
  return new Date(a.started).getTime() - new Date(b.started).getTime();
}

function clampIndex(index: number, length: number): number {
  if (!Number.isFinite(index) || index <= 0) return 0;
  return Math.min(Math.floor(index), length);
}
