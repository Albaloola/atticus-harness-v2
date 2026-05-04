import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import type { AgentRun, AgentRunStatus } from '../types/state.js';

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
    started: new Date().toISOString(),
    turns: 0,
    costUsd: 0,
  };

  db.prepare(
    `INSERT INTO agent_runs (id, matter_name, parent_run_id, agent_type, role, status, model, skill, prompt, started, turns, cost_usd)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    run.id, run.matterName, run.parentRunId ?? null, run.agentType, run.role,
    run.status, run.model, run.skill ?? null, run.prompt ?? null,
    run.started, run.turns, run.costUsd
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

  const updated: AgentRun = {
    ...existing,
    ...(updates.status ? { status: updates.status } : {}),
    ...(updates.turns !== undefined ? { turns: updates.turns } : {}),
    ...(updates.summary !== undefined ? { summary: updates.summary } : {}),
    ...(updates.error !== undefined ? { error: updates.error } : {}),
    ended,
  };

  db.prepare(
    `UPDATE agent_runs SET status = ?, turns = ?, summary = ?, error = ?, ended = ?
     WHERE id = ? AND matter_name = ?`
  ).run(
    updated.status,
    updated.turns,
    updated.summary ?? null,
    updated.error ?? null,
    updated.ended ?? null,
    runId,
    matterName,
  );

  return updated;
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
    ended: row.ended ?? undefined,
    turns: row.turns,
    costUsd: row.cost_usd ?? 0,
    summary: row.summary ?? undefined,
    error: row.error ?? undefined,
  };
}
