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
  const staleRunIds = new Set(staleRuns.map((run) => run.runId));
  const failedTasks: string[] = [];

  for (const task of listTasks(matterName, { status: 'in_progress' })) {
    const runWentStale = Boolean(task.runId && staleRunIds.has(task.runId));
    if (activeRuns.length > 0 && !runWentStale) continue;

    const reason = runWentStale
      ? `owning run ${task.runId} went stale`
      : 'no live agent run remains for in-progress task';
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
      data: { recovery: 'stale_task', reason: 'in-progress task had no live agent run' },
    }).catch(() => undefined)),
  ]);

  return {
    staleRuns,
    expiredLeases: expiredLeases.length,
    failedTasks,
  };
}
