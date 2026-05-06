import { randomUUID } from 'crypto';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { getStateDb } from '../state/store.js';
import { nextRunTime } from './cron.js';
import type { ScheduledJob } from '../types/state.js';

export interface CreateScheduledJobParams {
  matterName: string;
  cron: string;
  prompt: string;
  recurring?: boolean;
  durable?: boolean;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
  id?: string;
}

export function createScheduledJob(params: CreateScheduledJobParams): ScheduledJob {
  const db = getStateDb(params.matterName);
  const id = params.id || randomUUID();
  const now = new Date().toISOString();
  const nextRun = nextRunTime(params.cron);

  const job: ScheduledJob = {
    id,
    matterName: params.matterName,
    cron: params.cron,
    prompt: params.prompt,
    recurring: params.recurring || false,
    durable: params.durable || false,
    enabled: params.enabled !== undefined ? params.enabled : true,
    status: 'pending',
    createdAt: now,
    nextRunAt: nextRun.toISOString(),
    lastRunAt: null,
    metadata: params.metadata || {},
  };

  db.prepare(
    `INSERT INTO scheduler_jobs (id, matter_name, cron, prompt, recurring, durable, enabled, status, created_at, next_run_at, last_run_at, metadata_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    job.id,
    job.matterName,
    job.cron,
    job.prompt,
    job.recurring ? 1 : 0,
    job.durable ? 1 : 0,
    job.enabled ? 1 : 0,
    job.status,
    job.createdAt,
    job.nextRunAt,
    job.lastRunAt,
    JSON.stringify(job.metadata),
  );

  return job;
}

export function listScheduledJobs(
  matterName: string,
  options?: { enabled?: boolean; status?: string },
): ScheduledJob[] {
  const db = getStateDb(matterName);
  const conditions: string[] = ['matter_name = ?'];
  const params: (string | number)[] = [matterName];

  if (options?.enabled !== undefined) {
    conditions.push('enabled = ?');
    params.push(options.enabled ? 1 : 0);
  }
  if (options?.status) {
    conditions.push('status = ?');
    params.push(options.status);
  }

  const rows = db.prepare(
    `SELECT * FROM scheduler_jobs WHERE ${conditions.join(' AND ')} ORDER BY created_at DESC`
  ).all(...params) as JobRow[];

  return rows.map(rowToJob);
}

export function deleteScheduledJob(matterName: string, jobId: string): boolean {
  const db = getStateDb(matterName);
  const result = db.prepare(
    'DELETE FROM scheduler_jobs WHERE id = ? AND matter_name = ?'
  ).run(jobId, matterName);
  return result.changes > 0;
}

export function getDueJobs(): ScheduledJob[] {
  expireSchedulerJobLeases();
  const now = new Date().toISOString();
  const matters = listMattersSync();
  const results: ScheduledJob[] = [];

  for (const matterName of matters) {
    const db = getStateDb(matterName);
    const rows = db.prepare(
      "SELECT * FROM scheduler_jobs WHERE enabled = 1 AND next_run_at IS NOT NULL AND next_run_at <= ? AND status = 'pending'"
    ).all(now) as JobRow[];
    results.push(...rows.map(rowToJob));
  }

  return results;
}

export function markJobRunning(matterName: string, jobId: string, owner = 'scheduler', ttlMs = 15 * 60 * 1000): ScheduledJob | null {
  const db = getStateDb(matterName);
  const now = new Date().toISOString();
  const leaseId = `job-lease-${randomUUID()}`;
  const expiresAt = new Date(Date.now() + ttlMs).toISOString();
  const result = db.prepare(
    `UPDATE scheduler_jobs
     SET status = 'running', last_run_at = ?, lease_id = ?, lease_owner = ?,
         lease_fencing_token = COALESCE(lease_fencing_token, 0) + 1,
         lease_expires_at = ?, lease_acquired_at = ?, lease_heartbeat_at = ?,
         attempt_count = COALESCE(attempt_count, 0) + 1, blocked_reason = NULL
     WHERE id = ? AND matter_name = ? AND (lease_id IS NULL OR lease_expires_at <= ?)`
  ).run(now, leaseId, owner, expiresAt, now, now, jobId, matterName, now);
  if (result.changes === 0) return null;
  return getScheduledJob(matterName, jobId);
}

export function markJobCompleted(matterName: string, jobId: string, cron: string, recurring: boolean): void {
  const db = getStateDb(matterName);
  if (recurring) {
    const nextRun = nextRunTime(cron);
    db.prepare(
      `UPDATE scheduler_jobs SET status = 'pending', next_run_at = ?, lease_id = NULL,
       lease_owner = NULL, lease_expires_at = NULL, lease_acquired_at = NULL,
       lease_heartbeat_at = NULL WHERE id = ? AND matter_name = ?`
    ).run(nextRun.toISOString(), jobId, matterName);
  } else {
    db.prepare(
      `UPDATE scheduler_jobs SET status = 'completed', next_run_at = NULL, lease_id = NULL,
       lease_owner = NULL, lease_expires_at = NULL, lease_acquired_at = NULL,
       lease_heartbeat_at = NULL WHERE id = ? AND matter_name = ?`
    ).run(jobId, matterName);
  }
}

export function getScheduledJob(matterName: string, jobId: string): ScheduledJob | null {
  const db = getStateDb(matterName);
  const row = db.prepare('SELECT * FROM scheduler_jobs WHERE id = ? AND matter_name = ?').get(jobId, matterName) as JobRow | undefined;
  return row ? rowToJob(row) : null;
}

export function expireSchedulerJobLeases(): string[] {
  const now = new Date().toISOString();
  const expired: string[] = [];
  for (const matterName of listMattersSync()) {
    const db = getStateDb(matterName);
    const rows = db.prepare(
      `SELECT id, lease_id FROM scheduler_jobs
       WHERE lease_id IS NOT NULL AND lease_expires_at IS NOT NULL AND lease_expires_at <= ?`
    ).all(now) as Array<{ id: string; lease_id: string }>;
    for (const row of rows) {
      db.prepare(
        `UPDATE scheduler_jobs SET status = 'pending', lease_id = NULL, lease_owner = NULL,
         lease_expires_at = NULL, lease_acquired_at = NULL, lease_heartbeat_at = NULL,
         blocked_reason = ?, next_run_at = COALESCE(next_run_at, ?) WHERE id = ? AND matter_name = ?`
      ).run(`lease expired: ${row.lease_id}`, now, row.id, matterName);
      expired.push(row.lease_id);
    }
  }
  return expired;
}

function listMattersSync(): string[] {
  try {
    return listMattersSyncCached();
  } catch {
    return [];
  }
}

let mattersCache: string[] | null = null;
let mattersCacheTime = 0;
const MATTERS_CACHE_TTL = 30000;

function listMattersSyncCached(): string[] {
  if (mattersCache && Date.now() - mattersCacheTime < MATTERS_CACHE_TTL) {
    return mattersCache;
  }
  const MATTERS_ROOT = 'matters';
  const INDEX_FILE = '_index.json';
  try {
    const entries = readdirSync(MATTERS_ROOT, { withFileTypes: true });
    const matters: string[] = [];
    for (const entry of entries) {
      if (entry.isDirectory()) {
        try {
          readFileSync(join(MATTERS_ROOT, entry.name, INDEX_FILE), 'utf-8');
          matters.push(entry.name);
        } catch {
        }
      }
    }
    mattersCache = matters.sort();
    mattersCacheTime = Date.now();
    return mattersCache!;
  } catch {
    return [];
  }
}

interface JobRow {
  id: string;
  matter_name: string;
  cron: string;
  prompt: string;
  recurring: number;
  durable: number;
  enabled: number;
  status: string;
  created_at: string;
  next_run_at: string | null;
  last_run_at: string | null;
  metadata_json: string;
  lease_id?: string | null;
  lease_owner?: string | null;
  lease_fencing_token?: number | null;
  lease_expires_at?: string | null;
  blocked_reason?: string | null;
  attempt_count?: number | null;
}

function rowToJob(row: JobRow): ScheduledJob {
  return {
    id: row.id,
    matterName: row.matter_name,
    cron: row.cron,
    prompt: row.prompt,
    recurring: row.recurring === 1,
    durable: row.durable === 1,
    enabled: row.enabled === 1,
    status: row.status,
    createdAt: row.created_at,
    nextRunAt: row.next_run_at,
    lastRunAt: row.last_run_at,
    metadata: JSON.parse(row.metadata_json),
    leaseId: row.lease_id ?? undefined,
    leaseOwner: row.lease_owner ?? undefined,
    leaseFencingToken: row.lease_fencing_token ?? undefined,
    leaseExpiresAt: row.lease_expires_at ?? undefined,
    blockedReason: row.blocked_reason ?? undefined,
    attemptCount: row.attempt_count ?? 0,
  };
}
