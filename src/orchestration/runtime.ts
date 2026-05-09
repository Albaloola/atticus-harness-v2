import { appendEvent } from '../state/events.js';
import { heartbeatRun } from '../state/runs.js';
import { DEFAULT_MAX_CONCURRENCY, DEFAULT_MAX_DEPTH, normalizePositiveInteger } from './limits.js';
import { ackControlCommand, listPendingControlCommands } from '../daemon/control-queue.js';

export class OrchestrationRuntime {
  private matterName: string;
  private maxDepth: number;
  private maxConcurrency: number;
  private maxBudgetUsd?: number;
  private running = new Set<string>();
  private runningWorkers = new Set<string>();
  private heartbeatTimers = new Map<string, NodeJS.Timeout>();
  private aborted = false;
  private paused = false;
  private depth = 0;
  private totalCost = 0;

  constructor(config: {
    matterName: string;
    maxDepth?: number;
    maxConcurrency?: number;
    maxBudgetUsd?: number;
  }) {
    this.matterName = config.matterName;
    this.maxDepth = normalizePositiveInteger(config.maxDepth, DEFAULT_MAX_DEPTH);
    this.maxConcurrency = normalizePositiveInteger(config.maxConcurrency, DEFAULT_MAX_CONCURRENCY);
    this.maxBudgetUsd = config.maxBudgetUsd;
  }

  canSpawnAgent(depth: number): boolean {
    if (this.aborted) return false;
    if (depth >= this.maxDepth) return false;
    if (this.maxBudgetUsd && this.totalCost >= this.maxBudgetUsd) return false;
    return this.runningWorkers.size < this.maxConcurrency;
  }

  trackRun(runId: string, options?: { worker?: boolean }): void {
    this.running.add(runId);
    if (options?.worker) this.runningWorkers.add(runId);
    this.depth = Math.max(this.depth, this.runningWorkers.size);
    heartbeatRun(this.matterName, runId);
    const timer = setInterval(() => {
      heartbeatRun(this.matterName, runId);
    }, 60_000);
    timer.unref?.();
    this.heartbeatTimers.set(runId, timer);
  }

  untrackRun(runId: string): void {
    this.running.delete(runId);
    this.runningWorkers.delete(runId);
    const timer = this.heartbeatTimers.get(runId);
    if (timer) clearInterval(timer);
    this.heartbeatTimers.delete(runId);
  }

  addCost(usd: number): void {
    this.totalCost += usd;
  }

  async applyControlCommands(runId?: string): Promise<void> {
    const commands = await listPendingControlCommands({ matterName: this.matterName, runId });
    for (const command of commands) {
      if (command.action === 'pause') {
        this.paused = true;
        await ackControlCommand(command.id, 'applied', `Paused ${runId ?? this.matterName}`);
        await this.emitControlEvent('paused', command.id, runId);
      } else if (command.action === 'resume') {
        this.paused = false;
        await ackControlCommand(command.id, 'applied', `Resumed ${runId ?? this.matterName}`);
        await this.emitControlEvent('resumed', command.id, runId);
      } else if (command.action === 'cancel') {
        this.abort('cancelled by control command');
        await ackControlCommand(command.id, 'applied', `Cancelled ${runId ?? this.matterName}`);
        await this.emitControlEvent('cancelled', command.id, runId);
      }
    }
  }

  async waitIfPaused(runId?: string): Promise<void> {
    while (this.paused && !this.aborted) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await this.applyControlCommands(runId);
    }
  }

  abort(reason = 'aborted', runId?: string): void {
    this.aborted = true;
    void appendEvent({
      matterName: this.matterName,
      type: 'run.partial',
      runId,
      data: { reason, runningAgents: this.running.size, status: 'aborted' },
      source: 'system',
    }).catch((error: unknown) => reportEventWriteFailure('abort event', error));
  }

  isAborted(): boolean {
    return this.aborted;
  }

  isPaused(): boolean {
    return this.paused;
  }

  getActiveCount(): number {
    return this.running.size;
  }

  getActiveWorkerCount(): number {
    return this.runningWorkers.size;
  }

  getTotalCost(): number {
    return this.totalCost;
  }

  isBudgetExceeded(): boolean {
    return this.maxBudgetUsd ? this.totalCost >= this.maxBudgetUsd : false;
  }

  async emitRunStarted(runId: string, objective?: string): Promise<void> {
    await appendEvent({
      matterName: this.matterName,
      type: 'run.started',
      runId,
      data: { objective: objective?.substring(0, 500) },
      source: 'system',
    });
  }

  async emitRunCompleted(
    runId: string,
    summary?: string,
    details: {
      status?: 'completed' | 'needs_followup' | 'failed' | 'aborted' | 'budget_exceeded';
      completedPhases?: number;
      totalPhases?: number;
    } = {},
  ): Promise<void> {
    const status = details.status ?? 'completed';
    await appendEvent({
      matterName: this.matterName,
      type: status === 'completed' ? 'run.completed' : 'run.partial',
      runId,
      data: {
        summary: summary?.substring(0, 500),
        totalCost: this.totalCost,
        status,
        completedPhases: details.completedPhases,
        totalPhases: details.totalPhases,
      },
      source: 'system',
    });
  }

  private async emitControlEvent(action: string, commandId: string, runId?: string): Promise<void> {
    await appendEvent({
      matterName: this.matterName,
      type: action === 'cancelled' ? 'agent.run.error' : 'agent.run.blocked',
      runId,
      data: { controlCommandId: commandId, action },
      source: 'system',
    }).catch((error: unknown) => reportEventWriteFailure('control event', error));
  }
}

function reportEventWriteFailure(eventName: string, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[orchestration] Failed to record ${eventName}: ${message}`);
}
