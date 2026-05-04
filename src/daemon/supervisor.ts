import type { SupervisedRun } from '../types/state.js';

export class Supervisor {
  private runs = new Map<string, SupervisedRun>();

  trackRun(runId: string, matterName: string): SupervisedRun {
    const entry: SupervisedRun = {
      runId,
      matterName,
      startedAt: new Date().toISOString(),
      status: 'running',
      abortController: new AbortController(),
    };
    this.runs.set(runId, entry);
    return entry;
  }

  cancelRun(runId: string): boolean {
    const entry = this.runs.get(runId);
    if (!entry) return false;
    if (entry.status === 'cancelled') return false;
    entry.status = 'cancelled';
    entry.abortController?.abort();
    return true;
  }

  pauseRun(runId: string): boolean {
    const entry = this.runs.get(runId);
    if (!entry) return false;
    if (entry.status !== 'running') return false;
    entry.status = 'paused';
    return true;
  }

  resumeRun(runId: string): boolean {
    const entry = this.runs.get(runId);
    if (!entry) return false;
    if (entry.status !== 'paused') return false;
    entry.status = 'running';
    return true;
  }

  removeRun(runId: string): boolean {
    return this.runs.delete(runId);
  }

  getRun(runId: string): SupervisedRun | undefined {
    return this.runs.get(runId);
  }

  activeCount(): number {
    return this.runs.size;
  }

  listActive(): SupervisedRun[] {
    return Array.from(this.runs.values());
  }
}
