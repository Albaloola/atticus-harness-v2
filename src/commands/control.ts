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
    const { Supervisor } = await import('../daemon/supervisor.js');
    const supervisor = new Supervisor();
    if (action === 'pause') {
      supervisor.pauseRun(matterName);
    } else {
      supervisor.resumeRun(matterName);
    }
    console.log(chalk.green(`OK`));
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
    const { Supervisor } = await import('../daemon/supervisor.js');
    const supervisor = new Supervisor();
    supervisor.cancelRun(target);
    console.log(chalk.green('Cancelled'));
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}
