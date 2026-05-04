import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';

export async function handleScheduleCreate(
  matterName: string,
  options: { cron?: string; prompt?: string; recurring?: boolean; durable?: boolean }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  if (!options.cron) {
    console.error(chalk.red('--cron is required'));
    process.exit(1);
  }
  if (!options.prompt) {
    console.error(chalk.red('--prompt is required'));
    process.exit(1);
  }

  try {
    const { createScheduledJob } = await import('../scheduler/store.js');
    const job = createScheduledJob({
      matterName,
      cron: options.cron,
      prompt: options.prompt,
      recurring: options.recurring ?? false,
      durable: options.durable ?? false,
    });
    console.log(chalk.green('Job created'), `ID: ${job.id}`);
    console.log(`  Cron: ${job.cron}`);
    console.log(`  Prompt: ${chalk.gray(job.prompt.substring(0, 80))}`);
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScheduleList(
  matterName: string,
  options: { json?: boolean }
): Promise<void> {
  try {
    const { listScheduledJobs } = await import('../scheduler/store.js');
    const jobs = listScheduledJobs(matterName);

    if (options.json) {
      console.log(JSON.stringify(jobs, null, 2));
    } else if (jobs.length === 0) {
      console.log(chalk.gray('No scheduled jobs.'));
    } else {
      for (const job of jobs) {
        const statusIcon = job.enabled ? chalk.green('✓') : chalk.gray('○');
        console.log(`${statusIcon} ${chalk.bold(job.id)}`);
        console.log(`  Cron: ${job.cron}`);
        console.log(`  ${job.recurring ? 'Recurring' : 'One-shot'}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScheduleDelete(
  matterName: string,
  jobId: string
): Promise<void> {
  try {
    const { deleteScheduledJob } = await import('../scheduler/store.js');
    const success = deleteScheduledJob(matterName, jobId);
    if (success) {
      console.log(chalk.green('Job deleted'), jobId);
    } else {
      console.error(chalk.red('Job not found'), jobId);
      process.exit(1);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}
