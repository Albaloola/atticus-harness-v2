import { getDueJobs, markJobRunning, markJobCompleted } from './store.js';
import { createRun } from '../state/runs.js';

let schedulerInterval: ReturnType<typeof setInterval> | null = null;

export function startSchedulerLoop(): void {
  if (schedulerInterval) return;
  schedulerInterval = setInterval(processDueJobs, 30000);
  processDueJobs();
}

export function stopSchedulerLoop(): void {
  if (schedulerInterval) {
    clearInterval(schedulerInterval);
    schedulerInterval = null;
  }
}

export function isSchedulerRunning(): boolean {
  return schedulerInterval !== null;
}

function processDueJobs(): void {
  const dueJobs = getDueJobs();
  for (const job of dueJobs) {
    try {
      markJobRunning(job.matterName, job.id);
      createRun({
        matterName: job.matterName,
        model: 'deepseek/deepseek-v4-flash',
        prompt: job.prompt,
      });
      markJobCompleted(job.matterName, job.id, job.cron, job.recurring);
    } catch {
      markJobCompleted(job.matterName, job.id, job.cron, job.recurring);
    }
  }
}
