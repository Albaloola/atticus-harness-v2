import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';

export default async function controlHandler(
  matterName: string,
  action: 'pause' | 'resume'
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  if (action === 'pause') {
    console.log(chalk.yellow(`Pausing ${matterName}...`));
  } else {
    console.log(chalk.green(`Resuming ${matterName}...`));
  }

  try {
    const { getSupervisor } = await import('../daemon/daemon.js');
    const { enqueueControlCommand } = await import('../daemon/control-queue.js');
    const supervisor = getSupervisor();
    const activeRunId = supervisor?.listActive().find((run) => run.matterName === matterName)?.runId;
    let applied = false;
    if (activeRunId) {
      if (action === 'pause') {
        applied = supervisor?.pauseRun(activeRunId) ?? false;
      } else {
        applied = supervisor?.resumeRun(activeRunId) ?? false;
      }
    }
    if (!applied) {
      const command = await enqueueControlCommand({ action, matterName, runId: activeRunId });
      console.log(chalk.yellow('Queued control command for daemon/runtime pickup'), chalk.gray(command.id));
    } else {
      console.log(chalk.green(`OK`));
    }
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleCancel(
  matterName: string,
  options: { run?: string }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  const target = options.run || matterName;
  console.log(chalk.red(`Cancelling ${target}...`));

  try {
    const { getSupervisor } = await import('../daemon/daemon.js');
    const { enqueueControlCommand } = await import('../daemon/control-queue.js');
    const supervisor = getSupervisor();
    const activeRunId = options.run ?? supervisor?.listActive().find((run) => run.matterName === matterName)?.runId;
    const applied = activeRunId ? (supervisor?.cancelRun(activeRunId) ?? false) : false;
    if (!applied) {
      const command = await enqueueControlCommand({ action: 'cancel', matterName, runId: options.run });
      console.log(chalk.yellow('Queued cancellation for daemon/runtime pickup'), chalk.gray(command.id));
    } else {
      console.log(chalk.green('Cancelled'));
    }
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}
