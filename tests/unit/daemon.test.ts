import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { startDaemon, stopDaemon, getDaemonStatus, getSupervisor } from '../../src/daemon/daemon.js';
import { Supervisor } from '../../src/daemon/supervisor.js';
import { existsSync, readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { getConfigDir } from '../../src/config/paths.js';
import { isSchedulerRunning } from '../../src/scheduler/loop.js';

const RUNTIME_DIR = join(getConfigDir(), 'runtime');
const PID_FILE = join(RUNTIME_DIR, 'daemon.pid');
const STATUS_FILE = join(RUNTIME_DIR, 'daemon.json');

function cleanRuntime(): void {
  try { unlinkSync(PID_FILE); } catch {}
  try { unlinkSync(STATUS_FILE); } catch {}
}

describe('Supervisor', () => {
  let supervisor: Supervisor;

  beforeEach(() => {
    supervisor = new Supervisor();
  });

  it('trackRun creates a supervised run entry', () => {
    const entry = supervisor.trackRun('run-1', 'test-matter');
    expect(entry.runId).toBe('run-1');
    expect(entry.matterName).toBe('test-matter');
    expect(entry.status).toBe('running');
    expect(entry.abortController).toBeDefined();
    expect(supervisor.activeCount()).toBe(1);
  });

  it('cancelRun sets status to cancelled and aborts', () => {
    const entry = supervisor.trackRun('run-1', 'test-matter');
    const signal = entry.abortController!.signal;

    const result = supervisor.cancelRun('run-1');
    expect(result).toBe(true);
    expect(supervisor.getRun('run-1')!.status).toBe('cancelled');
    expect(signal.aborted).toBe(true);
  });

  it('cancelRun returns false for unknown run', () => {
    expect(supervisor.cancelRun('nonexistent')).toBe(false);
  });

  it('cancelRun returns false for already cancelled run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    supervisor.cancelRun('run-1');
    expect(supervisor.cancelRun('run-1')).toBe(false);
  });

  it('pauseRun pauses a running run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    const result = supervisor.pauseRun('run-1');
    expect(result).toBe(true);
    expect(supervisor.getRun('run-1')!.status).toBe('paused');
  });

  it('pauseRun returns false for unknown run', () => {
    expect(supervisor.pauseRun('nonexistent')).toBe(false);
  });

  it('pauseRun returns false for already paused run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    supervisor.pauseRun('run-1');
    expect(supervisor.pauseRun('run-1')).toBe(false);
  });

  it('pauseRun returns false for cancelled run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    supervisor.cancelRun('run-1');
    expect(supervisor.pauseRun('run-1')).toBe(false);
  });

  it('resumeRun resumes a paused run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    supervisor.pauseRun('run-1');
    const result = supervisor.resumeRun('run-1');
    expect(result).toBe(true);
    expect(supervisor.getRun('run-1')!.status).toBe('running');
  });

  it('resumeRun returns false for unknown run', () => {
    expect(supervisor.resumeRun('nonexistent')).toBe(false);
  });

  it('resumeRun returns false for running run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    expect(supervisor.resumeRun('run-1')).toBe(false);
  });

  it('removeRun removes a tracked run', () => {
    supervisor.trackRun('run-1', 'test-matter');
    expect(supervisor.activeCount()).toBe(1);
    supervisor.removeRun('run-1');
    expect(supervisor.activeCount()).toBe(0);
  });

  it('getRun returns undefined for unknown run', () => {
    expect(supervisor.getRun('nonexistent')).toBeUndefined();
  });

  it('activeCount reflects tracked runs', () => {
    expect(supervisor.activeCount()).toBe(0);
    supervisor.trackRun('run-1', 'test-matter');
    supervisor.trackRun('run-2', 'test-matter');
    expect(supervisor.activeCount()).toBe(2);
  });

  it('listActive returns all tracked runs', () => {
    supervisor.trackRun('run-1', 'matter-a');
    supervisor.trackRun('run-2', 'matter-b');
    const active = supervisor.listActive();
    expect(active.length).toBe(2);
    expect(active.map((r) => r.runId).sort()).toEqual(['run-1', 'run-2']);
  });

  it('full lifecycle: track -> pause -> resume -> cancel', () => {
    const entry = supervisor.trackRun('lifecycle-run', 'lifecycle-matter');
    expect(entry.status).toBe('running');
    expect(entry.abortController).toBeDefined();

    supervisor.pauseRun('lifecycle-run');
    expect(supervisor.getRun('lifecycle-run')!.status).toBe('paused');

    supervisor.resumeRun('lifecycle-run');
    expect(supervisor.getRun('lifecycle-run')!.status).toBe('running');

    supervisor.cancelRun('lifecycle-run');
    expect(supervisor.getRun('lifecycle-run')!.status).toBe('cancelled');
    expect(entry.abortController!.signal.aborted).toBe(true);
  });
});

describe('Daemon', () => {
  beforeEach(() => {
    cleanRuntime();
  });

  afterEach(() => {
    stopDaemon();
    cleanRuntime();
  });

  it('startDaemon writes PID file', () => {
    startDaemon();
    expect(existsSync(PID_FILE)).toBe(true);
    const pidContent = readFileSync(PID_FILE, 'utf-8').trim();
    expect(parseInt(pidContent, 10)).toBe(process.pid);
  });

  it('startDaemon writes status file', () => {
    startDaemon();
    expect(existsSync(STATUS_FILE)).toBe(true);
    const statusRaw = readFileSync(STATUS_FILE, 'utf-8');
    const status = JSON.parse(statusRaw) as { running: boolean; pid: number; activeRuns: number };
    expect(status.running).toBe(true);
    expect(status.pid).toBe(process.pid);
    expect(status.activeRuns).toBe(0);
  });

  it('getDaemonStatus returns correct status after start', () => {
    startDaemon();
    const status = getDaemonStatus();
    expect(status.running).toBe(true);
    expect(status.pid).toBe(process.pid);
    expect(status.activeRuns).toBe(0);
    expect(status.schedulerRunning).toBe(true);
  });

  it('stopDaemon removes PID and status files', () => {
    startDaemon();
    expect(existsSync(PID_FILE)).toBe(true);
    stopDaemon();
    expect(existsSync(PID_FILE)).toBe(false);
    expect(existsSync(STATUS_FILE)).toBe(false);
  });

  it('getDaemonStatus returns running:false after stop', () => {
    startDaemon();
    stopDaemon();
    const status = getDaemonStatus();
    expect(status.running).toBe(false);
    expect(status.pid).toBeNull();
    expect(status.schedulerRunning).toBe(false);
  });

  it('getSupervisor returns supervisor instance after start', () => {
    startDaemon();
    const sv = getSupervisor();
    expect(sv).toBeInstanceOf(Supervisor);
  });

  it('starts and stops scheduler loop with daemon lifecycle', () => {
    startDaemon();
    expect(isSchedulerRunning()).toBe(true);

    stopDaemon();
    expect(isSchedulerRunning()).toBe(false);
  });

  it('getSupervisor returns null after stop', () => {
    startDaemon();
    stopDaemon();
    expect(getSupervisor()).toBeNull();
  });

  it('daemon status includes uptime', () => {
    startDaemon();
    const status = getDaemonStatus();
    expect(status.uptime).toBeGreaterThanOrEqual(0);
  });

  it('startDaemon twice without stop is allowed when no PID file exists', () => {
    startDaemon();
    stopDaemon();
    expect(() => startDaemon()).not.toThrow();
  });
});
