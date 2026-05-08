import { appendEvent } from './events.js';
import { expireTaskLeases } from './leases.js';
import { cleanupStaleRuns, isRunLive, listRuns, type StaleRunRecovery } from './runs.js';
import { listTasks, updateTask } from './tasks.js';

export interface RuntimeRecoveryOptions {
  now?: Date;
  staleAfterMs?: number;
}

export interface RuntimeRecoveryResult {
  staleRuns: StaleRunRecovery[];
  expiredLeases: number;
  failedTasks: string[];
}

export async function recoverStaleRuntimeState(
  matterName: string,
  options: RuntimeRecoveryOptions = {},
): Promise<RuntimeRecoveryResult> {
  const now = options.now ?? new Date();
  const staleRuns = cleanupStaleRuns(matterName, { now, staleAfterMs: options.staleAfterMs });
  const expiredLeases = expireTaskLeases(matterName, { now });
  const activeRuns = listRuns(matterName, { status: 'running' })
    .filter((run) => isRunLive(run, now, options.staleAfterMs));
  const activeRunIds = new Set(activeRuns.map((run) => run.id));
  const staleRunIds = new Set(staleRuns.map((run) => run.runId));
  const failedTasks: string[] = [];
  const failedTaskReasons = new Map<string, string>();

  for (const task of listTasks(matterName, { status: 'in_progress' })) {
    if (hasLiveLease(task, now)) continue;
    if (task.runId && activeRunIds.has(task.runId)) continue;

    const reason = task.runId && staleRunIds.has(task.runId)
      ? `owning run ${task.runId} went stale`
      : task.runId
        ? `owning run ${task.runId} is not live`
        : 'task has no owning run';
    updateTask(matterName, task.id, {
      status: 'failed',
      data: {
        runtimeRecovery: {
          reason,
          recoveredAt: now.toISOString(),
        },
      },
    });
    failedTasks.push(task.id);
    failedTaskReasons.set(task.id, reason);
  }

  await Promise.all([
    ...staleRuns.map((run) => appendEvent({
      matterName,
      type: 'agent.run.error' as const,
      runId: run.runId,
      source: 'system',
      data: { recovery: 'stale_run', role: run.role, reason: run.reason },
    }).catch(() => undefined)),
    ...failedTasks.map((taskId) => appendEvent({
      matterName,
      type: 'agent.run.error' as const,
      taskId,
      source: 'system',
      data: { recovery: 'stale_task', reason: failedTaskReasons.get(taskId) ?? 'in-progress task had no live agent run' },
    }).catch(() => undefined)),
  ]);

  return {
    staleRuns,
    expiredLeases: expiredLeases.length,
    failedTasks,
  };
}

function hasLiveLease(task: ReturnType<typeof listTasks>[number], now: Date): boolean {
  if (!task.leaseId || !task.leaseExpiresAt) return false;
  const expiresAtMs = new Date(task.leaseExpiresAt).getTime();
  return Number.isFinite(expiresAtMs) && expiresAtMs > now.getTime();
}
