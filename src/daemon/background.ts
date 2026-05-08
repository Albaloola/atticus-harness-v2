import { spawn } from 'child_process';
import { openSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';
import { getConfigDir } from '../config/paths.js';

export interface BackgroundRun {
  runId: string;
  pid: number | undefined;
  logPath: string;
}

export function spawnBackgroundHarness(args: string[]): BackgroundRun {
  const runId = randomUUID();
  const runtimeDir = join(getConfigDir(), 'runtime');
  mkdirSync(runtimeDir, { recursive: true });

  const cliPath = resolveCliPath();
  const logPath = join(runtimeDir, `run-${runId}.log`);
  const out = openSync(logPath, 'a');
  const err = openSync(logPath, 'a');

  const child = spawn(process.execPath, [cliPath, ...args], {
    detached: true,
    stdio: ['ignore', out, err],
    cwd: process.cwd(),
    env: {
      ...process.env,
      ATTICUS_RUN_ID: runId,
      ATTICUS_BACKGROUND_RUN_ID: runId,
    },
  });
  child.unref();

  return { runId, pid: child.pid, logPath };
}

function resolveCliPath(): string {
  const currentFile = fileURLToPath(import.meta.url);
  const distCli = join(dirname(currentFile), '..', 'cli.js');
  return distCli;
}
