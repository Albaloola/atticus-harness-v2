import chalk from 'chalk';
import { spawn } from 'child_process';
import { openSync } from 'fs';
import { join } from 'path';

export async function handleDaemonStart(): Promise<void> {
  try {
    const { getDaemonStatus, getRuntimeDir } = await import('../daemon/daemon.js');
    const current = getDaemonStatus();
    if (current.running) {
      console.log(chalk.green('Daemon already running'), `PID: ${current.pid}`);
      return;
    }

    const runtimeDir = getRuntimeDir();
    const logPath = join(runtimeDir, 'daemon.log');
    const out = openSync(logPath, 'a');
    const err = openSync(logPath, 'a');
    const child = spawn(process.execPath, [process.argv[1]!, 'daemon', 'serve'], {
      detached: true,
      stdio: ['ignore', out, err],
      env: { ...process.env, ATTICUS_DAEMON_CHILD: '1' },
    });
    child.unref();

    const status = await waitForDaemonStart();
    console.log(chalk.green('Daemon started'), `PID: ${status.pid ?? child.pid ?? 'unknown'}`);
    console.log(`  Log: ${chalk.gray(logPath)}`);
  } catch (err: unknown) {
    console.error(chalk.red('Failed to start daemon:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDaemonStop(): Promise<void> {
  try {
    const { getDaemonPid, stopDaemon } = await import('../daemon/daemon.js');
    const pid = getDaemonPid();
    if (pid && pid !== process.pid) {
      try {
        process.kill(pid, 'SIGTERM');
      } catch {
        // The pid file may be stale; stopDaemon will clean the runtime files.
      }
    }
    stopDaemon();
    console.log(chalk.green('Daemon stopped'));
  } catch (err: unknown) {
    console.error(chalk.red('Failed to stop daemon:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDaemonServe(): Promise<void> {
  const { startDaemon, stopDaemon } = await import('../daemon/daemon.js');
  startDaemon();

  const shutdown = () => {
    stopDaemon();
    process.exit(0);
  };
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);

  // Keep the scheduler/supervisor process alive; actual work is driven by loops.
  setInterval(() => {}, 60_000);
}

async function waitForDaemonStart(): Promise<Awaited<ReturnType<typeof import('../daemon/daemon.js').getDaemonStatus>>> {
  const { getDaemonStatus } = await import('../daemon/daemon.js');
  const deadline = Date.now() + 2000;
  let last = getDaemonStatus();
  while (!last.running && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    last = getDaemonStatus();
  }
  return last;
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
