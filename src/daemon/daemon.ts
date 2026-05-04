import { writeFileSync, readFileSync, existsSync, unlinkSync } from 'fs';
import { mkdirSync } from 'fs';
import { join } from 'path';
import { getConfigDir } from '../config/paths.js';
import { Supervisor } from './supervisor.js';
import type { DaemonStatus } from '../types/state.js';

const RUNTIME_DIR = join(getConfigDir(), 'runtime');
const PID_FILE = join(RUNTIME_DIR, 'daemon.pid');
const STATUS_FILE = join(RUNTIME_DIR, 'daemon.json');

let supervisor: Supervisor | null = null;
let startedAt: string | null = null;

function ensureRuntimeDir(): void {
  mkdirSync(RUNTIME_DIR, { recursive: true });
}

export function startDaemon(): DaemonStatus {
  ensureRuntimeDir();

  if (existsSync(PID_FILE)) {
    const existingPid = parseInt(readFileSync(PID_FILE, 'utf-8').trim(), 10);
    if (isProcessAlive(existingPid)) {
      throw new Error(`Daemon is already running with PID ${existingPid}`);
    }
    unlinkSync(PID_FILE);
  }

  const pid = process.pid;
  const now = new Date();
  startedAt = now.toISOString();
  supervisor = new Supervisor();

  writeFileSync(PID_FILE, String(pid), 'utf-8');

  const status: DaemonStatus = {
    running: true,
    pid,
    startedAt: startedAt,
    uptime: 0,
    activeRuns: 0,
  };
  writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2), 'utf-8');
  return status;
}

export function stopDaemon(): void {
  ensureRuntimeDir();

  if (existsSync(PID_FILE)) {
    unlinkSync(PID_FILE);
  }

  if (existsSync(STATUS_FILE)) {
    unlinkSync(STATUS_FILE);
  }

  startedAt = null;
  supervisor = null;
}

export function getDaemonStatus(): DaemonStatus {
  const running = fileDaemonAlive();
  const pid = running ? readPidFromFile() : null;
  const uptime = running && startedAt ? Date.now() - new Date(startedAt).getTime() : null;
  const activeRuns = supervisor ? supervisor.activeCount() : 0;

  return {
    running,
    pid,
    startedAt,
    uptime,
    activeRuns,
  };
}

export function getSupervisor(): Supervisor | null {
  return supervisor;
}

function fileDaemonAlive(): boolean {
  if (!existsSync(PID_FILE)) return false;
  const pid = readPidFromFile();
  if (pid === null) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readPidFromFile(): number | null {
  try {
    return parseInt(readFileSync(PID_FILE, 'utf-8').trim(), 10);
  } catch {
    return null;
  }
}

function isProcessAlive(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
