import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import { appendEvent } from './events.js';
import { getTask, updateTask } from './tasks.js';
import type { TaskDagNode, TaskStatus } from '../types/state.js';

export type LeaseRole = 'worker' | 'reducer';
export type LeaseStatus = 'active' | 'completed' | 'expired' | 'released';

export interface TaskLease {
  leaseId: string;
  taskId: string;
  matterName: string;
  owner: string;
  role: LeaseRole;
  fencingToken: number;
  acquiredAt: string;
  heartbeatAt: string;
  expiresAt: string;
  status: LeaseStatus;
}

export interface AcquireTaskLeaseOptions {
  matterName: string;
  taskId: string;
  owner: string;
  role?: LeaseRole;
  ttlMs?: number;
}

export class LeaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LeaseError';
  }
}

const DEFAULT_LEASE_TTL_MS = 15 * 60 * 1000;

function isExpired(expiresAt?: string): boolean {
  return Boolean(expiresAt && new Date(expiresAt).getTime() <= Date.now());
}

function nextStatusAfterExpiry(task: TaskDagNode): TaskStatus {
  if (task.status === 'completed' || task.status === 'failed') return task.status;
  return task.data.retryable === false ? 'blocked' : 'pending';
}

function ensureLeaseable(task: TaskDagNode, role: LeaseRole): void {
  if (task.status === 'completed' || task.status === 'failed') {
    throw new LeaseError(`Task ${task.id} is terminal (${task.status})`);
  }
  if (role === 'reducer' && task.status !== 'in_progress' && task.status !== 'pending' && task.status !== 'blocked') {
    throw new LeaseError(`Reducer lease cannot be acquired from status ${task.status}`);
  }
}

export function acquireTaskLease(options: AcquireTaskLeaseOptions): TaskLease {
  const { matterName, taskId, owner } = options;
  const role = options.role ?? 'worker';
  const ttlMs = options.ttlMs ?? DEFAULT_LEASE_TTL_MS;
  const db = getStateDb(matterName);

  const tx = db.transaction(() => {
    expireTaskLeases(matterName, taskId);
    const task = getTask(matterName, taskId);
    if (!task) throw new LeaseError(`Unknown task ${taskId}`);
    ensureLeaseable(task, role);
    if (task.leaseId && !isExpired(task.leaseExpiresAt)) {
      throw new LeaseError(`Task ${taskId} already has active lease ${task.leaseId}`);
    }

    const now = new Date().toISOString();
    const expiresAt = new Date(Date.now() + ttlMs).toISOString();
    const fencingToken = (task.leaseFencingToken ?? 0) + 1;
    const leaseId = `lease-${randomUUID()}`;

    db.prepare(
      `UPDATE tasks
       SET status = 'in_progress', lease_id = ?, lease_owner = ?, lease_role = ?,
           lease_fencing_token = ?, lease_expires_at = ?, lease_acquired_at = ?,
           lease_heartbeat_at = ?, attempt_count = COALESCE(attempt_count, 0) + 1,
           blocked_reason = NULL, updated = ?
       WHERE id = ? AND matter_name = ?`
    ).run(leaseId, owner, role, fencingToken, expiresAt, now, now, now, taskId, matterName);

    return {
      leaseId,
      taskId,
      matterName,
      owner,
      role,
      fencingToken,
      acquiredAt: now,
      heartbeatAt: now,
      expiresAt,
      status: 'active' as const,
    };
  });

  const lease = tx();
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
): TaskDagNode {
  expireTaskLeases(matterName, taskId);
  const task = getTask(matterName, taskId);
  if (!task) throw new LeaseError(`Unknown task ${taskId}`);
  if (task.leaseId !== leaseId) throw new LeaseError(`Lease ${leaseId} is not active for task ${taskId}`);
  if (role && task.leaseRole !== role) throw new LeaseError(`Lease ${leaseId} is not a ${role} lease`);
  if (isExpired(task.leaseExpiresAt)) throw new LeaseError(`Lease ${leaseId} has expired`);
  return task;
}

export function heartbeatTaskLease(matterName: string, taskId: string, leaseId: string, ttlMs = DEFAULT_LEASE_TTL_MS): TaskLease {
  const task = requireActiveTaskLease(matterName, taskId, leaseId);
  const db = getStateDb(matterName);
  const now = new Date().toISOString();
  const expiresAt = new Date(Date.now() + ttlMs).toISOString();
  db.prepare(
    `UPDATE tasks SET lease_heartbeat_at = ?, lease_expires_at = ?, updated = ?
     WHERE id = ? AND matter_name = ? AND lease_id = ?`
  ).run(now, expiresAt, now, taskId, matterName, leaseId);
  return {
    leaseId,
    taskId,
    matterName,
    owner: task.leaseOwner ?? '',
    role: (task.leaseRole as LeaseRole) ?? 'worker',
    fencingToken: task.leaseFencingToken ?? 0,
    acquiredAt: task.leaseAcquiredAt ?? now,
    heartbeatAt: now,
    expiresAt,
    status: 'active',
  };
}

export function completeTaskLease(
  matterName: string,
  taskId: string,
  leaseId: string,
  status: TaskStatus = 'completed',
  data?: Record<string, unknown>,
): TaskDagNode {
  const task = requireActiveTaskLease(matterName, taskId, leaseId);
  const db = getStateDb(matterName);
  const now = new Date().toISOString();
  const updated = updateTask(matterName, taskId, { status, data });
  if (!updated) throw new LeaseError(`Unknown task ${taskId}`);
  db.prepare(
    `UPDATE tasks SET lease_id = NULL, lease_owner = NULL, lease_role = NULL,
       lease_expires_at = NULL, lease_acquired_at = NULL, lease_heartbeat_at = NULL,
       updated = ? WHERE id = ? AND matter_name = ?`
  ).run(now, taskId, matterName);
  void appendEvent({ matterName, type: 'task.lease.completed', taskId, data: { leaseId, role: task.leaseRole, status }, source: 'scheduler' }).catch(() => {});
  return getTask(matterName, taskId) ?? updated;
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
  void appendEvent({ matterName, type: 'task.lease.blocked', taskId, data: { leaseId, reason }, source: 'scheduler' }).catch(() => {});
  return getTask(matterName, taskId)!;
}

export function expireTaskLeases(matterName: string, taskId?: string): string[] {
  const db = getStateDb(matterName);
  const now = new Date().toISOString();
  const rows = db.prepare(
    `SELECT * FROM tasks WHERE matter_name = ? AND lease_id IS NOT NULL${taskId ? ' AND id = ?' : ''}`
  ).all(...(taskId ? [matterName, taskId] : [matterName])) as Array<Record<string, unknown>>;

  const expired: string[] = [];
  for (const row of rows) {
    const expiresAt = row.lease_expires_at as string | null;
    if (!expiresAt || new Date(expiresAt).getTime() > Date.now()) continue;
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
    expired.push(leaseId);
    void appendEvent({ matterName, type: 'task.lease.expired', taskId: id, data: { leaseId, nextStatus }, source: 'scheduler' }).catch(() => {});
  }
  return expired;
}
