import { randomUUID } from 'crypto';
import { getStateDb } from './store.js';
import type { TaskDagNode, TaskStatus } from '../types/state.js';

export interface CreateTaskParams {
  matterName: string;
  kind?: string;
  type: string;
  title: string;
  parentId?: string;
  runId?: string;
  priority?: string;
  depth?: number;
  assignedAgent?: string;
  dependencies?: string[];
  data?: Record<string, unknown>;
  id?: string;
}

export function createTask(params: CreateTaskParams): TaskDagNode {
  const db = getStateDb(params.matterName);
  const now = new Date().toISOString();
  const id = params.id || randomUUID();

  const node: TaskDagNode = {
    id,
    matterName: params.matterName,
    parentId: params.parentId,
    runId: params.runId,
    kind: params.kind || params.type,
    type: params.type,
    status: 'pending',
    priority: params.priority || 'medium',
    depth: params.depth ?? 0,
    assignedAgent: params.assignedAgent,
    dependencies: params.dependencies || [],
    title: params.title,
    created: now,
    updated: now,
    data: params.data || {},
  };

  db.prepare(
    `INSERT INTO tasks (id, matter_name, parent_id, run_id, kind, type, status, priority, depth, assigned_agent, dependencies_json, title, created, updated, data_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    node.id,
    node.matterName,
    node.parentId ?? null,
    node.runId ?? null,
    node.kind,
    node.type,
    node.status,
    node.priority,
    node.depth,
    node.assignedAgent ?? null,
    JSON.stringify(node.dependencies),
    node.title,
    node.created,
    node.updated,
    JSON.stringify(node.data),
  );

  return node;
}

export function updateTask(
  matterName: string,
  taskId: string,
  updates: { status?: TaskStatus; title?: string; data?: Record<string, unknown> },
): TaskDagNode | null {
  const db = getStateDb(matterName);
  const existing = getTask(matterName, taskId);
  if (!existing) return null;

  const now = new Date().toISOString();
  const updated: TaskDagNode = {
    ...existing,
    ...(updates.status ? { status: updates.status } : {}),
    ...(updates.title !== undefined ? { title: updates.title } : {}),
    ...(updates.data ? { data: { ...existing.data, ...updates.data } } : {}),
    updated: now,
  };

  db.prepare(
    `UPDATE tasks SET status = ?, title = ?, data_json = ?, updated = ? WHERE id = ? AND matter_name = ?`
  ).run(updated.status, updated.title, JSON.stringify(updated.data), updated.updated, taskId, matterName);

  return updated;
}

export function getTask(matterName: string, taskId: string): TaskDagNode | null {
  const db = getStateDb(matterName);
  const row = db.prepare(
    'SELECT * FROM tasks WHERE id = ? AND matter_name = ?'
  ).get(taskId, matterName) as TaskRow | undefined;

  if (!row) return null;
  return rowToTask(row);
}

export function listTasks(
  matterName: string,
  options?: { status?: TaskStatus; type?: string },
): TaskDagNode[] {
  const db = getStateDb(matterName);
  const conditions: string[] = ['matter_name = ?'];
  const params: string[] = [matterName];

  if (options?.status) {
    conditions.push('status = ?');
    params.push(options.status);
  }
  if (options?.type) {
    conditions.push('type = ?');
    params.push(options.type);
  }

  const rows = db.prepare(
    `SELECT * FROM tasks WHERE ${conditions.join(' AND ')} ORDER BY created DESC`
  ).all(...params) as TaskRow[];

  return rows.map(rowToTask);
}

interface TaskRow {
  id: string;
  matter_name: string;
  parent_id: string | null;
  run_id: string | null;
  kind: string;
  type: string;
  status: string;
  priority: string;
  depth: number;
  assigned_agent: string | null;
  dependencies_json: string;
  title: string;
  created: string;
  updated: string;
  data_json: string;
}

function rowToTask(row: TaskRow): TaskDagNode {
  return {
    id: row.id,
    matterName: row.matter_name,
    parentId: row.parent_id ?? undefined,
    runId: row.run_id ?? undefined,
    kind: row.kind || row.type,
    type: row.type,
    status: row.status as TaskStatus,
    priority: row.priority || 'medium',
    depth: row.depth ?? 0,
    assignedAgent: row.assigned_agent ?? undefined,
    dependencies: JSON.parse(row.dependencies_json),
    title: row.title,
    created: row.created,
    updated: row.updated,
    data: JSON.parse(row.data_json),
  };
}
