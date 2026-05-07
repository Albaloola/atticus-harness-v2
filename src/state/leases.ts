import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import { appendEvent } from './events.js';
import { getTask, updateTask } from './tasks.js';
import type { TaskDagNode, TaskStatus } from '../types/state.js';

export type LeaseRole = 'worker' | 'reducer';
export type LeaseStatus = 'active' | 'completed' | 'expired' | 'released';

export interface TaskLease {
  id: string;
  leaseId: string;
  taskId: string;
  matterName: string;
  owner: string;
  role: LeaseRole;
  fencingToken: number;
  acquiredAt: string;
  heartbeatAt: string;
  renewedAt?: string;
  expiresAt: string;
  completedAt?: string;
  resultStatus?: string;
  reason?: string;
  status: LeaseStatus;
}

export interface AcquireTaskLeaseOptions {
  matterName: string;
  taskId: string;
  owner: string;
  role?: LeaseRole;
  ttlMs?: number;
  now?: Date;
}

export interface RenewTaskLeaseOptions {
  matterName: string;
  leaseId: string;
  ttlMs?: number;
  now?: Date;
}

export interface CompleteTaskLeaseOptions {
  matterName: string;
  taskId?: string;
  leaseId: string;
  taskStatus?: TaskStatus;
  reason?: string;
  now?: Date;
  data?: Record<string, unknown>;
}

export class LeaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LeaseError';
  }
}

const DEFAULT_LEASE_TTL_MS = 15 * 60 * 1000;

function instant(now?: Date): Date {
  return now ?? new Date();
}

function iso(now?: Date): string {
  return instant(now).toISOString();
}

function expires(now: Date, ttlMs: number): string {
  return new Date(now.getTime() + ttlMs).toISOString();
}

function isExpired(expiresAt?: string, now: Date = new Date()): boolean {
  return Boolean(expiresAt && new Date(expiresAt).getTime() <= now.getTime());
}

function nextStatusAfterExpiry(task: TaskDagNode): TaskStatus {
  if (task.status === 'completed' || task.status === 'failed') return task.status;
  return task.data.retryable === false ? 'blocked' : 'pending';
}

function ensureLeaseable(task: TaskDagNode, role: LeaseRole): void {
  if (task.status === 'completed' || task.status === 'failed') {
    throw new LeaseError(`Task ${task.id} is terminal (${task.status}); not leaseable`);
  }
  if (task.leaseId && !isExpired(task.leaseExpiresAt)) {
    throw new LeaseError(`Task ${task.id} is not leaseable; active lease ${task.leaseId} exists`);
  }
  if (role === 'worker' && task.status === 'in_progress') {
    throw new LeaseError(`Task ${task.id} is not leaseable from status ${task.status}`);
  }
  if (role === 'reducer' && task.status !== 'in_progress' && task.status !== 'pending' && task.status !== 'blocked') {
    throw new LeaseError(`Reducer lease cannot be acquired from status ${task.status}; not leaseable`);
  }
}

interface LeaseRow {
  id: string;
  task_id: string;
  matter_name: string;
  owner: string;
  role: string;
  status: string;
  fencing_token: number;
  acquired_at: string;
  renewed_at: string | null;
  expires_at: string;
  completed_at: string | null;
  result_status: string | null;
  reason: string | null;
}

function rowToLease(row: LeaseRow): TaskLease {
  return {
    id: row.id,
    leaseId: row.id,
    taskId: row.task_id,
    matterName: row.matter_name,
    owner: row.owner,
    role: row.role as LeaseRole,
    fencingToken: row.fencing_token,
    acquiredAt: row.acquired_at,
    heartbeatAt: row.renewed_at ?? row.acquired_at,
    renewedAt: row.renewed_at ?? undefined,
    expiresAt: row.expires_at,
    completedAt: row.completed_at ?? undefined,
    resultStatus: row.result_status ?? undefined,
    reason: row.reason ?? undefined,
    status: row.status as LeaseStatus,
  };
}

function getLeaseById(matterName: string, leaseId: string): TaskLease | null {
  const db = getStateDb(matterName);
  const row = db.prepare('SELECT * FROM task_leases WHERE matter_name = ? AND id = ?')
    .get(matterName, leaseId) as LeaseRow | undefined;
  return row ? rowToLease(row) : null;
}

export function listTaskLeases(matterName: string, options: { status?: LeaseStatus } = {}): TaskLease[] {
  const db = getStateDb(matterName);
  const params: string[] = [matterName];
  let sql = 'SELECT * FROM task_leases WHERE matter_name = ?';
  if (options.status) {
    sql += ' AND status = ?';
    params.push(options.status);
  }
  sql += ' ORDER BY acquired_at ASC';
  return (db.prepare(sql).all(...params) as LeaseRow[]).map(rowToLease);
}

export function acquireTaskLease(options: AcquireTaskLeaseOptions): TaskLease {
  const { matterName, taskId, owner } = options;
  const role = options.role ?? 'worker';
  const ttlMs = options.ttlMs ?? DEFAULT_LEASE_TTL_MS;
  const nowDate = instant(options.now);
  const now = nowDate.toISOString();
  const expiresAt = expires(nowDate, ttlMs);
  const db = getStateDb(matterName);

  const lease = db.transaction(() => {
    expireTaskLeases(matterName, { taskId, now: nowDate });
    const task = getTask(matterName, taskId);
    if (!task) throw new LeaseError(`Unknown task ${taskId}`);
    ensureLeaseable(task, role);

    const fencingToken = (task.leaseFencingToken ?? 0) + 1;
    const leaseId = `lease-${randomUUID()}`;

    db.prepare(
      `INSERT INTO task_leases (id, task_id, matter_name, owner, role, status, fencing_token, acquired_at, renewed_at, expires_at, metadata_json)
       VALUES (?, ?, ?, ?, ?, 'active', ?, ?, ?, ?, '{}')`
    ).run(leaseId, taskId, matterName, owner, role, fencingToken, now, now, expiresAt);

    db.prepare(
      `UPDATE tasks
       SET status = 'in_progress', lease_id = ?, lease_owner = ?, lease_role = ?,
           lease_fencing_token = ?, lease_expires_at = ?, lease_acquired_at = ?,
           lease_heartbeat_at = ?, attempt_count = COALESCE(attempt_count, 0) + 1,
           blocked_reason = NULL, updated = ?
       WHERE id = ? AND matter_name = ?`
    ).run(leaseId, owner, role, fencingToken, expiresAt, now, now, now, taskId, matterName);

    return getLeaseById(matterName, leaseId)!;
  })();

  void appendEvent({
    matterName,
    type: 'task.lease.acquired',
    taskId,
    data: { leaseId: lease.leaseId, owner, role, fencingToken: lease.fencingToken, expiresAt: lease.expiresAt },
    source: 'scheduler',
  }).catch(() => {});
  return lease;
}

export function requireActiveTaskLease(
  matterName: string,
  taskId: string,
  leaseId: string,
  role?: LeaseRole,
  now: Date = new Date(),
): TaskDagNode {
  expireTaskLeases(matterName, { taskId, now });
  const task = getTask(matterName, taskId);
  if (!task) throw new LeaseError(`Unknown task ${taskId}`);
  if (task.leaseId !== leaseId) throw new LeaseError(`Lease ${leaseId} is not active for task ${taskId}`);
  if (role && task.leaseRole !== role) throw new LeaseError(`Lease ${leaseId} is not a ${role} lease`);
  if (isExpired(task.leaseExpiresAt, now)) throw new LeaseError(`Lease ${leaseId} has expired`);
  return task;
}

function renewLease(options: RenewTaskLeaseOptions): TaskLease {
  const ttlMs = options.ttlMs ?? DEFAULT_LEASE_TTL_MS;
  const nowDate = instant(options.now);
  const now = nowDate.toISOString();
  const expiresAt = expires(nowDate, ttlMs);
  const existing = getLeaseById(options.matterName, options.leaseId);
  if (!existing || existing.status !== 'active') {
    throw new LeaseError(`Lease ${options.leaseId} is not active`);
  }
  requireActiveTaskLease(options.matterName, existing.taskId, options.leaseId, undefined, nowDate);
  const db = getStateDb(options.matterName);
  db.prepare('UPDATE task_leases SET renewed_at = ?, expires_at = ? WHERE matter_name = ? AND id = ?')
    .run(now, expiresAt, options.matterName, options.leaseId);
  db.prepare(
    `UPDATE tasks SET lease_heartbeat_at = ?, lease_expires_at = ?, updated = ?
     WHERE id = ? AND matter_name = ? AND lease_id = ?`
  ).run(now, expiresAt, now, existing.taskId, options.matterName, options.leaseId);
  return getLeaseById(options.matterName, options.leaseId)!;
}

export function renewTaskLease(options: RenewTaskLeaseOptions): TaskLease {
  return renewLease(options);
}

export function heartbeatTaskLease(matterName: string, taskId: string, leaseId: string, ttlMs = DEFAULT_LEASE_TTL_MS): TaskLease {
  const lease = getLeaseById(matterName, leaseId);
  if (!lease || lease.taskId !== taskId) throw new LeaseError(`Lease ${leaseId} is not active for task ${taskId}`);
  return renewLease({ matterName, leaseId, ttlMs });
}

function completeLease(options: CompleteTaskLeaseOptions): TaskDagNode {
  const lease = getLeaseById(options.matterName, options.leaseId);
  if (!lease || lease.status !== 'active') throw new LeaseError(`Lease ${options.leaseId} is not active`);
  if (options.taskId && lease.taskId !== options.taskId) {
    throw new LeaseError(`Lease ${options.leaseId} is not active for task ${options.taskId}`);
  }
  const task = requireActiveTaskLease(options.matterName, lease.taskId, options.leaseId, undefined, instant(options.now));
  const db = getStateDb(options.matterName);
  const now = iso(options.now);
  const taskStatus = options.taskStatus ?? 'completed';
  const updated = updateTask(options.matterName, lease.taskId, { status: taskStatus, data: options.data });
  if (!updated) throw new LeaseError(`Unknown task ${lease.taskId}`);
  db.prepare(
    `UPDATE tasks SET lease_id = NULL, lease_owner = NULL, lease_role = NULL,
       lease_expires_at = NULL, lease_acquired_at = NULL, lease_heartbeat_at = NULL,
       updated = ? WHERE id = ? AND matter_name = ?`
  ).run(now, lease.taskId, options.matterName);
  db.prepare(
    `UPDATE task_leases SET status = 'completed', completed_at = ?, result_status = ?, reason = ?
     WHERE matter_name = ? AND id = ?`
  ).run(now, taskStatus, options.reason ?? null, options.matterName, options.leaseId);
  void appendEvent({ matterName: options.matterName, type: 'task.lease.completed', taskId: lease.taskId, data: { leaseId: options.leaseId, role: task.leaseRole, status: taskStatus, reason: options.reason }, source: 'scheduler' }).catch(() => {});
  return getTask(options.matterName, lease.taskId) ?? updated;
}

export function completeTaskLease(options: CompleteTaskLeaseOptions): TaskDagNode;
export function completeTaskLease(matterName: string, taskId: string, leaseId: string, status?: TaskStatus, data?: Record<string, unknown>): TaskDagNode;
export function completeTaskLease(
  first: CompleteTaskLeaseOptions | string,
  taskId?: string,
  leaseId?: string,
  status: TaskStatus = 'completed',
  data?: Record<string, unknown>,
): TaskDagNode {
  if (typeof first === 'object') return completeLease(first);
  if (!leaseId || !taskId) throw new LeaseError('completeTaskLease requires matterName, taskId, and leaseId');
  return completeLease({ matterName: first, taskId, leaseId, taskStatus: status, data });
}

export function blockTaskLease(
  matterName: string,
  taskId: string,
  leaseId: string,
  reason: string,
): TaskDagNode {
  requireActiveTaskLease(matterName, taskId, leaseId);
  const db = getStateDb(matterName);
  const now = new Date().toISOString();
  db.prepare(
    `UPDATE tasks SET status = 'blocked', blocked_reason = ?, lease_id = NULL,
       lease_owner = NULL, lease_role = NULL, lease_expires_at = NULL,
       lease_acquired_at = NULL, lease_heartbeat_at = NULL, updated = ?
     WHERE id = ? AND matter_name = ?`
  ).run(reason, now, taskId, matterName);
  db.prepare(
    `UPDATE task_leases SET status = 'released', completed_at = ?, reason = ? WHERE matter_name = ? AND id = ?`
  ).run(now, reason, matterName, leaseId);
  void appendEvent({ matterName, type: 'task.lease.blocked', taskId, data: { leaseId, reason }, source: 'scheduler' }).catch(() => {});
  return getTask(matterName, taskId)!;
}

export function expireTaskLeases(matterName: string, taskId?: string): string[];
export function expireTaskLeases(matterName: string, options: { taskId?: string; now?: Date }): TaskLease[];
export function expireTaskLeases(matterName: string, second?: string | { taskId?: string; now?: Date }): string[] | TaskLease[] {
  const db = getStateDb(matterName);
  const options = typeof second === 'object' ? second : { taskId: second };
  const returnLeases = typeof second === 'object';
  const nowDate = instant(options.now);
  const now = nowDate.toISOString();
  const params: string[] = [matterName];
  let sql = `SELECT * FROM tasks WHERE matter_name = ? AND lease_id IS NOT NULL`;
  if (options.taskId) {
    sql += ' AND id = ?';
    params.push(options.taskId);
  }
  const rows = db.prepare(sql).all(...params) as Array<Record<string, unknown>>;

  const expiredIds: string[] = [];
  const expiredLeases: TaskLease[] = [];
  for (const row of rows) {
    const expiresAt = row.lease_expires_at as string | null;
    if (!expiresAt || new Date(expiresAt).getTime() > nowDate.getTime()) continue;
    const id = String(row.id);
    const leaseId = String(row.lease_id);
    const task = getTask(matterName, id);
    const nextStatus = task ? nextStatusAfterExpiry(task) : 'pending';
    const reason = `lease expired: ${leaseId}`;
    db.prepare(
      `UPDATE tasks SET status = ?, lease_id = NULL, lease_owner = NULL, lease_role = NULL,
         lease_expires_at = NULL, lease_acquired_at = NULL, lease_heartbeat_at = NULL,
         blocked_reason = CASE WHEN ? = 'blocked' THEN ? ELSE blocked_reason END,
         updated = ? WHERE id = ? AND matter_name = ?`
    ).run(nextStatus, nextStatus, reason, now, id, matterName);
    db.prepare(
      `UPDATE task_leases SET status = 'expired', completed_at = ?, reason = ? WHERE matter_name = ? AND id = ? AND status = 'active'`
    ).run(now, reason, matterName, leaseId);
    const lease = getLeaseById(matterName, leaseId);
    if (lease) expiredLeases.push(lease);
    expiredIds.push(leaseId);
    void appendEvent({ matterName, type: 'task.lease.expired', taskId: id, data: { leaseId, nextStatus }, source: 'scheduler' }).catch(() => {});
  }
  return returnLeases ? expiredLeases : expiredIds;
}
