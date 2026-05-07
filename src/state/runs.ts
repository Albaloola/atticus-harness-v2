import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import type { AgentRun, AgentRunStatus } from '../types/state.js';

const DEFAULT_STALE_RUN_MS = 5 * 60 * 1000;

export interface CreateRunParams {
  matterName: string;
  model: string;
  parentRunId?: string;
  agentType?: string;
  role?: string;
  skill?: string;
  prompt?: string;
  id?: string;
}

export function createRun(params: CreateRunParams): AgentRun {
  const db = getStateDb(params.matterName);
  const id = params.id || randomUUID();
  const started = new Date().toISOString();

  const run: AgentRun = {
    id,
    matterName: params.matterName,
    parentRunId: params.parentRunId,
    agentType: params.agentType || 'worker',
    role: params.role || 'worker',
    status: 'running',
    model: params.model,
    skill: params.skill,
    prompt: params.prompt,
    started,
    heartbeatAt: started,
    pid: process.pid,
    turns: 0,
    costUsd: 0,
  };

  db.prepare(
    `INSERT INTO agent_runs (id, matter_name, parent_run_id, agent_type, role, status, model, skill, prompt, started, heartbeat_at, pid, turns, cost_usd)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    run.id, run.matterName, run.parentRunId ?? null, run.agentType, run.role,
    run.status, run.model, run.skill ?? null, run.prompt ?? null,
    run.started, run.heartbeatAt, run.pid ?? null, run.turns, run.costUsd
  );

  return run;
}

export function updateRun(
  matterName: string,
  runId: string,
  updates: { status?: AgentRunStatus; turns?: number; summary?: string; error?: string },
): AgentRun | null {
  const db = getStateDb(matterName);
  const existing = getRun(matterName, runId);
  if (!existing) return null;

  const now = new Date().toISOString();
  const ended = updates.status && updates.status !== 'running' ? now : existing.ended;
  const heartbeatAt = now;

  const updated: AgentRun = {
    ...existing,
    ...(updates.status ? { status: updates.status } : {}),
    ...(updates.turns !== undefined ? { turns: updates.turns } : {}),
    ...(updates.summary !== undefined ? { summary: updates.summary } : {}),
    ...(updates.error !== undefined ? { error: updates.error } : {}),
    heartbeatAt,
    ended,
  };

  db.prepare(
    `UPDATE agent_runs SET status = ?, turns = ?, summary = ?, error = ?, heartbeat_at = ?, ended = ?
     WHERE id = ? AND matter_name = ?`
  ).run(
    updated.status,
    updated.turns,
    updated.summary ?? null,
    updated.error ?? null,
    updated.heartbeatAt ?? null,
    updated.ended ?? null,
    runId,
    matterName,
  );

  return updated;
}

export function heartbeatRun(matterName: string, runId: string, now: Date = new Date()): AgentRun | null {
  const db = getStateDb(matterName);
  const existing = getRun(matterName, runId);
  if (!existing || existing.status !== 'running') return existing;
  const heartbeatAt = now.toISOString();
  db.prepare(
    `UPDATE agent_runs SET heartbeat_at = ? WHERE id = ? AND matter_name = ?`
  ).run(heartbeatAt, runId, matterName);
  return { ...existing, heartbeatAt };
}

export function getRun(matterName: string, runId: string): AgentRun | null {
  const db = getStateDb(matterName);
  const row = db.prepare(
    'SELECT * FROM agent_runs WHERE id = ? AND matter_name = ?'
  ).get(runId, matterName) as RunRow | undefined;

  if (!row) return null;
  return rowToRun(row);
}

export function listRuns(
  matterName: string,
  options?: { status?: AgentRunStatus; limit?: number },
): AgentRun[] {
  const db = getStateDb(matterName);
  const conditions: string[] = ['matter_name = ?'];
  const params: (string | number)[] = [matterName];

  if (options?.status) {
    conditions.push('status = ?');
    params.push(options.status);
  }

  let sql = `SELECT * FROM agent_runs WHERE ${conditions.join(' AND ')} ORDER BY started DESC`;
  if (options?.limit) {
    sql += ' LIMIT ?';
    params.push(options.limit);
  }

  const rows = db.prepare(sql).all(...params) as RunRow[];
  return rows.map(rowToRun);
}

export interface CleanupStaleRunsOptions {
  now?: Date;
  staleAfterMs?: number;
}

export interface StaleRunRecovery {
  runId: string;
  role: string;
  reason: string;
}

export function cleanupStaleRuns(
  matterName: string,
  options: CleanupStaleRunsOptions = {},
): StaleRunRecovery[] {
  const now = options.now ?? new Date();
  const staleAfterMs = options.staleAfterMs ?? DEFAULT_STALE_RUN_MS;
  const recovered: StaleRunRecovery[] = [];
  for (const run of listRuns(matterName, { status: 'running' })) {
    const reason = staleReason(run, now, staleAfterMs);
    if (!reason) continue;
    updateRun(matterName, run.id, {
      status: 'error',
      summary: `Run recovered as stale: ${reason}`,
      error: reason,
    });
    recovered.push({ runId: run.id, role: run.role, reason });
  }
  return recovered;
}

export function isRunLive(run: AgentRun, now: Date = new Date(), staleAfterMs = DEFAULT_STALE_RUN_MS): boolean {
  return run.status === 'running' && !staleReason(run, now, staleAfterMs);
}

function staleReason(run: AgentRun, now: Date, staleAfterMs: number): string | null {
  if (run.status !== 'running') return null;
  if (run.pid && !isProcessAlive(run.pid)) {
    return `owner process ${run.pid} is not alive`;
  }
  const heartbeatAt = run.heartbeatAt ?? run.started;
  const heartbeatMs = new Date(heartbeatAt).getTime();
  if (Number.isFinite(heartbeatMs) && now.getTime() - heartbeatMs > staleAfterMs) {
    return `heartbeat stale since ${heartbeatAt}`;
  }
  return null;
}

function isProcessAlive(pid: number): boolean {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    return code === 'EPERM';
  }
}

interface RunRow {
  id: string;
  matter_name: string;
  parent_run_id: string | null;
  agent_type: string;
  role: string;
  status: string;
  model: string;
  skill: string | null;
  prompt: string | null;
  started: string;
  heartbeat_at: string | null;
  pid: number | null;
  ended: string | null;
  turns: number;
  cost_usd: number;
  summary: string | null;
  error: string | null;
}

function rowToRun(row: RunRow): AgentRun {
  return {
    id: row.id,
    matterName: row.matter_name,
    parentRunId: row.parent_run_id ?? undefined,
    agentType: row.agent_type || 'worker',
    role: row.role || 'worker',
    status: row.status as AgentRunStatus,
    model: row.model,
    skill: row.skill ?? undefined,
    prompt: row.prompt ?? undefined,
    started: row.started,
    heartbeatAt: row.heartbeat_at ?? row.started,
    pid: row.pid ?? undefined,
    ended: row.ended ?? undefined,
    turns: row.turns,
    costUsd: row.cost_usd ?? 0,
    summary: row.summary ?? undefined,
    error: row.error ?? undefined,
  };
}
