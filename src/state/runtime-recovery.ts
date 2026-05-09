import { appendEvent } from './events.js';
import { expireTaskLeases } from './leases.js';
import { cleanupStaleRuns, isRunLive, listRuns, type StaleRunRecovery } from './runs.js';
import { listTasks, updateTask } from './tasks.js';

export interface RuntimeRecoveryOptions {
  now?: Date;
  staleAfterMs?: number;
  preserveInterruptedTasks?: boolean;
}

export interface RuntimeRecoveryResult {
  staleRuns: StaleRunRecovery[];
  expiredLeases: number;
  failedTasks: string[];
  interruptedTasks: string[];
  recoveryDecisions: RuntimeRecoveryDecision[];
}

export type RecoveryOutcome =
  | 'retry_same_worker'
  | 'spawn_replacement'
  | 'continue_next_safe_phase'
  | 'morning_review_queue'
  | 'terminal_legal_blocker';

export interface RuntimeRecoveryDecision {
  recoveryOutcome: RecoveryOutcome;
  runId?: string;
  phaseId?: string;
  taskId?: string;
  workerId?: string;
  attemptId?: string;
  priorAttemptIds: string[];
  staleReason: string;
  heartbeatAgeMs?: number;
  lastEventId?: string;
  outputArtifactIds: string[];
  caseMemoryVersionBefore: string;
  caseMemoryVersionAfter: string;
  nextPhaseId?: string;
  reviewQueueId?: string;
  legalBlockerCode?: string;
  decisionReason: string;
  createdAt: string;
}

export async function recoverStaleRuntimeState(
  matterName: string,
  options: RuntimeRecoveryOptions = {},
): Promise<RuntimeRecoveryResult> {
  const now = options.now ?? new Date();
  const staleRuns = cleanupStaleRuns(matterName, { now, staleAfterMs: options.staleAfterMs });
  const runRecoveryDecisions = staleRuns.map((run) => buildRunRecoveryDecision(run, now));
  const expiredLeases = expireTaskLeases(matterName, { now });
  const activeRuns = listRuns(matterName, { status: 'running' })
    .filter((run) => isRunLive(run, now, options.staleAfterMs));
  const activeRunIds = new Set(activeRuns.map((run) => run.id));
  const staleRunIds = new Set(staleRuns.map((run) => run.runId));
  const failedTasks: string[] = [];
  const interruptedTasks: string[] = [];
  const taskRecoveryDecisions = new Map<string, RuntimeRecoveryDecision>();

  for (const task of listTasks(matterName, { status: 'in_progress' })) {
    if (hasLiveLease(task, now)) continue;
    if (task.runId && activeRunIds.has(task.runId)) continue;

    const reason = task.runId && staleRunIds.has(task.runId)
      ? `owning run ${task.runId} went stale`
      : task.runId
        ? `owning run ${task.runId} is not live`
        : 'task has no owning run';
    const decision = buildTaskRecoveryDecision(task, reason, now);
    updateTask(matterName, task.id, {
      status: options.preserveInterruptedTasks ? 'blocked' : 'failed',
      data: {
        runtimeRecovery: decision,
        interruptedByResume: options.preserveInterruptedTasks ? true : undefined,
      },
    });
    if (options.preserveInterruptedTasks) interruptedTasks.push(task.id);
    else failedTasks.push(task.id);
    taskRecoveryDecisions.set(task.id, decision);
  }

  await Promise.all([
    ...staleRuns.map((run, index) => appendEvent({
      matterName,
      type: 'agent.run.error' as const,
      runId: run.runId,
      source: 'system',
      data: {
        recovery: 'stale_run',
        role: run.role,
        reason: run.reason,
        ...runRecoveryDecisions[index],
      },
    }).catch((error: unknown) => reportRecoveryEventFailure('stale run', run.runId, error))),
    ...failedTasks.map((taskId) => appendEvent({
      matterName,
      type: 'agent.run.error' as const,
      taskId,
      source: 'system',
      data: {
        recovery: 'stale_task',
        reason: taskRecoveryDecisions.get(taskId)?.staleReason ?? 'in-progress task had no live agent run',
        ...taskRecoveryDecisions.get(taskId),
      },
    }).catch((error: unknown) => reportRecoveryEventFailure('stale task', taskId, error))),
    ...interruptedTasks.map((taskId) => appendEvent({
      matterName,
      type: 'agent.run.blocked' as const,
      taskId,
      source: 'system',
      data: {
        recovery: 'interrupted_task',
        reason: taskRecoveryDecisions.get(taskId)?.staleReason ?? 'in-progress task was interrupted before resume',
        interrupted: true,
        ...taskRecoveryDecisions.get(taskId),
      },
    }).catch((error: unknown) => reportRecoveryEventFailure('interrupted task', taskId, error))),
  ]);

  return {
    staleRuns,
    expiredLeases: expiredLeases.length,
    failedTasks,
    interruptedTasks,
    recoveryDecisions: [...runRecoveryDecisions, ...taskRecoveryDecisions.values()],
  };
}

function hasLiveLease(task: ReturnType<typeof listTasks>[number], now: Date): boolean {
  if (!task.leaseId || !task.leaseExpiresAt) return false;
  const expiresAtMs = new Date(task.leaseExpiresAt).getTime();
  return Number.isFinite(expiresAtMs) && expiresAtMs > now.getTime();
}

function buildTaskRecoveryDecision(
  task: ReturnType<typeof listTasks>[number],
  reason: string,
  now: Date,
): RuntimeRecoveryDecision {
  const outputArtifactIds = Array.isArray(task.data.artifactIds)
    ? task.data.artifactIds.filter((id): id is string => typeof id === 'string')
    : [];
  const priorAttemptIds = Array.isArray(task.data.priorAttemptIds)
    ? task.data.priorAttemptIds.filter((id): id is string => typeof id === 'string')
    : [];
  const retryCount = typeof task.data.retryCount === 'number'
    ? task.data.retryCount
    : task.attemptCount ?? 0;
  const maxRecoveryRetries = typeof task.data.maxRecoveryRetries === 'number'
    ? task.data.maxRecoveryRetries
    : 3;
  const heartbeatAgeMs = task.leaseHeartbeatAt
    ? now.getTime() - new Date(task.leaseHeartbeatAt).getTime()
    : undefined;
  const nextPhaseId = typeof task.data.nextPhaseId === 'string' ? task.data.nextPhaseId : undefined;
  const legalBlockerCode = typeof task.data.legalBlockerCode === 'string' ? task.data.legalBlockerCode : undefined;
  const caseMemoryVersionBefore = stringData(task.data, 'caseMemoryVersion');
  const caseMemoryVersionAfter = stringData(task.data, 'caseMemoryVersionAfter', caseMemoryVersionBefore);
  const recoveryOutcome = chooseTaskRecoveryOutcome({
    outputArtifactIds,
    retryCount,
    maxRecoveryRetries,
    hasLegalBlocker: Boolean(legalBlockerCode),
    hasSafeNextPhase: Boolean(nextPhaseId && task.data.dependenciesSatisfied === true),
  });

  return {
    recoveryOutcome,
    runId: task.runId,
    phaseId: typeof task.data.phaseId === 'string' ? task.data.phaseId : task.type,
    taskId: task.id,
    workerId: task.assignedAgent,
    attemptId: typeof task.data.attemptId === 'string' ? task.data.attemptId : undefined,
    priorAttemptIds,
    staleReason: reason,
    ...(Number.isFinite(heartbeatAgeMs) ? { heartbeatAgeMs } : {}),
    lastEventId: typeof task.data.lastEventId === 'string' ? task.data.lastEventId : undefined,
    outputArtifactIds,
    caseMemoryVersionBefore,
    caseMemoryVersionAfter,
    nextPhaseId,
    reviewQueueId: typeof task.data.reviewQueueId === 'string' ? task.data.reviewQueueId : undefined,
    legalBlockerCode,
    decisionReason: taskRecoveryReason(recoveryOutcome, reason),
    createdAt: now.toISOString(),
  };
}

function buildRunRecoveryDecision(run: StaleRunRecovery, now: Date): RuntimeRecoveryDecision {
  return {
    recoveryOutcome: 'morning_review_queue',
    runId: run.runId,
    priorAttemptIds: [],
    staleReason: run.reason,
    outputArtifactIds: [],
    caseMemoryVersionBefore: 'unknown',
    caseMemoryVersionAfter: 'unknown',
    reviewQueueId: `review-${run.runId}`,
    decisionReason: 'Stale run needs orchestration review before continuation',
    createdAt: now.toISOString(),
  };
}

function stringData(data: Record<string, unknown>, key: string, fallback = 'unknown'): string {
  const value = data[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
}

function reportRecoveryEventFailure(scope: string, id: string, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[runtime-recovery] Failed to record ${scope} recovery event for ${id}: ${message}`);
}

function chooseTaskRecoveryOutcome(input: {
  outputArtifactIds: string[];
  retryCount: number;
  maxRecoveryRetries: number;
  hasLegalBlocker: boolean;
  hasSafeNextPhase: boolean;
}): RecoveryOutcome {
  if (input.hasLegalBlocker) return 'terminal_legal_blocker';
  if (input.hasSafeNextPhase && input.outputArtifactIds.length > 0) return 'continue_next_safe_phase';
  if (input.outputArtifactIds.length > 0 && input.retryCount < input.maxRecoveryRetries) return 'retry_same_worker';
  return 'spawn_replacement';
}

function taskRecoveryReason(outcome: RecoveryOutcome, staleReason: string): string {
  switch (outcome) {
    case 'retry_same_worker':
      return `${staleReason}; retry the same worker with recovered output context`;
    case 'continue_next_safe_phase':
      return `${staleReason}; continue at the next safe phase using completed outputs`;
    case 'terminal_legal_blocker':
      return `${staleReason}; stop because a legal blocker prevents automatic recovery`;
    case 'spawn_replacement':
      return `${staleReason}; spawn a replacement before continuing this task`;
    case 'morning_review_queue':
      return `${staleReason}; queue for operator review before continuation`;
  }
}
