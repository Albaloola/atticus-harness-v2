import { appendEvent } from '../state/events.js';

export class OrchestrationRuntime {
  private matterName: string;
  private maxDepth: number;
  private maxConcurrency: number;
  private maxBudgetUsd?: number;
  private running = new Set<string>();
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
    this.maxDepth = config.maxDepth ?? 3;
    this.maxConcurrency = config.maxConcurrency ?? 4;
    this.maxBudgetUsd = config.maxBudgetUsd;
  }

  canSpawnAgent(depth: number): boolean {
    if (this.aborted) return false;
    if (depth >= this.maxDepth) return false;
    if (this.maxBudgetUsd && this.totalCost >= this.maxBudgetUsd) return false;
    return this.running.size < this.maxConcurrency;
  }

  trackRun(runId: string): void {
    this.running.add(runId);
    this.depth = Math.max(this.depth, this.running.size);
  }

  untrackRun(runId: string): void {
    this.running.delete(runId);
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
