import chalk from 'chalk';

export async function handleDaemonStart(): Promise<void> {
  try {
    const { startDaemon } = await import('../daemon/daemon.js');
    const status = await startDaemon();
    console.log(chalk.green('Daemon started'), `PID: ${status.pid}`);
  } catch (err: unknown) {
    console.error(chalk.red('Failed to start daemon:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDaemonStop(): Promise<void> {
  try {
    const { stopDaemon } = await import('../daemon/daemon.js');
    await stopDaemon();
    console.log(chalk.green('Daemon stopped'));
  } catch (err: unknown) {
    console.error(chalk.red('Failed to stop daemon:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDaemonStatus(options: { json?: boolean }): Promise<void> {
  try {
    const { getDaemonStatus } = await import('../daemon/daemon.js');
    const status = await getDaemonStatus();
    if (options.json) {
      console.log(JSON.stringify(status, null, 2));
    } else {
      console.log(`Running: ${status.running ? chalk.green('yes') : chalk.red('no')}`);
      if (status.pid) console.log(`PID: ${status.pid}`);
      if (status.activeRuns > 0) {
        console.log(`Active runs: ${status.activeRuns}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Error:'), (err as Error).message);
    process.exit(1);
  }
}
