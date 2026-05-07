import { appendEvent } from '../state/events.js';
import { heartbeatRun } from '../state/runs.js';
import { DEFAULT_MAX_CONCURRENCY, DEFAULT_MAX_DEPTH, normalizePositiveInteger } from './limits.js';

export class OrchestrationRuntime {
  private matterName: string;
  private maxDepth: number;
  private maxConcurrency: number;
  private maxBudgetUsd?: number;
  private running = new Set<string>();
  private runningWorkers = new Set<string>();
  private heartbeatTimers = new Map<string, NodeJS.Timeout>();
  private aborted = false;
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

  abort(): void {
    this.aborted = true;
    appendEvent({
      matterName: this.matterName,
      type: 'run.completed',
      data: { reason: 'aborted', runningAgents: this.running.size },
      source: 'system',
    }).catch(() => {});
  }

  isAborted(): boolean {
    return this.aborted;
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

  async emitRunCompleted(runId: string, summary?: string): Promise<void> {
    await appendEvent({
      matterName: this.matterName,
      type: 'run.completed',
      runId,
      data: { summary: summary?.substring(0, 500), totalCost: this.totalCost },
      source: 'system',
    });
  }
}
