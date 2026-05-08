import { createHash, randomUUID } from 'crypto';
import { appendEvent } from '../state/events.js';
import { getStateDb } from '../state/store.js';
import type { InvestigationThread, InvestigationThreadStatus } from '../domain/investigation-thread.js';

export type InvestigationStopReason =
  | 'complete'
  | 'exhausted_evidence'
  | 'duplicate_scope'
  | 'budget_exhausted'
  | 'reviewer_blocked'
  | 'deadline_priority_shift'
  | 'over_depth'
  | 'policy_blocked';

export interface InvestigationThreadMetadata {
  claimElements?: string[];
  evidenceScope?: string[];
  scopeHash?: string;
  acceptedFindingIds?: string[];
  rejectedFindingIds?: string[];
  contradictionIds?: string[];
  blockers?: Array<{ objectId: string; reason: string; remediation: string }>;
  [key: string]: unknown;
}

export interface CreateInvestigationThreadInput {
  id?: string;
  matterName: string;
  parentThreadId?: string;
  objective: string;
  depth?: number;
  budgetUsd?: number;
  metadata?: InvestigationThreadMetadata;
}

export interface CompleteInvestigationThreadInput {
  matterName: string;
  threadId: string;
  stopReason?: InvestigationStopReason;
  acceptedFindingIds?: string[];
  rejectedFindingIds?: string[];
  contradictionIds?: string[];
  metadata?: Record<string, unknown>;
}

export interface BlockInvestigationThreadInput {
  matterName: string;
  threadId: string;
  stopReason: InvestigationStopReason;
  blocker: { objectId: string; reason: string; remediation: string };
  metadata?: Record<string, unknown>;
}

export function computeInvestigationScopeHash(input: {
  matterName: string;
  parentThreadId?: string;
  objective: string;
  claimElements?: string[];
  evidenceScope?: string[];
}): string {
  const payload = {
    matterName: input.matterName,
    parentThreadId: input.parentThreadId ?? null,
    objective: input.objective.trim().toLowerCase(),
    claimElements: [...(input.claimElements ?? [])].map((item) => item.trim().toLowerCase()).sort(),
    evidenceScope: [...(input.evidenceScope ?? [])].map((item) => item.trim()).sort(),
  };
  return createHash('sha256').update(JSON.stringify(payload)).digest('hex');
}

export async function createInvestigationThread(
  input: CreateInvestigationThreadInput,
): Promise<InvestigationThread> {
  const now = new Date().toISOString();
  const metadata = input.metadata ?? {};
  const thread: InvestigationThread = {
    threadId: input.id ?? randomUUID(),
    matterName: input.matterName,
    parentThreadId: input.parentThreadId,
    objective: input.objective,
    status: 'scoped',
    depth: input.depth ?? 0,
    budgetUsd: input.budgetUsd,
    createdAt: now,
    updatedAt: now,
    metadata,
  };

  getStateDb(input.matterName).prepare(`
    INSERT INTO investigation_threads (
      id, matter_name, parent_thread_id, objective, status, depth,
      budget_usd, stop_reason, created_at, updated_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    thread.threadId,
    thread.matterName,
    thread.parentThreadId ?? null,
    thread.objective,
    thread.status,
    thread.depth,
    thread.budgetUsd ?? null,
    thread.stopReason ?? null,
    thread.createdAt,
    thread.updatedAt,
    JSON.stringify(thread.metadata),
  );

  await appendEvent({
    matterName: input.matterName,
    type: 'investigation.thread_started',
    data: { threadId: thread.threadId, parentThreadId: input.parentThreadId, depth: thread.depth },
    source: 'investigation-store',
  });

  return thread;
}

export function getInvestigationThread(
  matterName: string,
  threadId: string,
): InvestigationThread | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM investigation_threads WHERE matter_name = ? AND id = ?')
    .get(matterName, threadId) as InvestigationThreadRow | undefined;
  return row ? rowToInvestigationThread(row) : undefined;
}

export function listInvestigationThreads(matterName: string, options?: {
  status?: InvestigationThreadStatus;
  parentThreadId?: string;
}): InvestigationThread[] {
  let sql = 'SELECT * FROM investigation_threads WHERE matter_name = ?';
  const params: string[] = [matterName];
  if (options?.status) {
    sql += ' AND status = ?';
    params.push(options.status);
  }
  if (options?.parentThreadId) {
    sql += ' AND parent_thread_id = ?';
    params.push(options.parentThreadId);
  }
  sql += ' ORDER BY created_at DESC';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as InvestigationThreadRow[];
  return rows.map(rowToInvestigationThread);
}

export async function completeInvestigationThread(
  input: CompleteInvestigationThreadInput,
): Promise<InvestigationThread> {
  const existing = requireThread(input.matterName, input.threadId);
  const now = new Date().toISOString();
  const metadata: InvestigationThreadMetadata = {
    ...existing.metadata,
    ...(input.metadata ?? {}),
    acceptedFindingIds: input.acceptedFindingIds ?? (existing.metadata.acceptedFindingIds as string[] | undefined) ?? [],
    rejectedFindingIds: input.rejectedFindingIds ?? (existing.metadata.rejectedFindingIds as string[] | undefined) ?? [],
    contradictionIds: input.contradictionIds ?? (existing.metadata.contradictionIds as string[] | undefined) ?? [],
  };
  const stopReason = input.stopReason ?? 'complete';
  getStateDb(input.matterName).prepare(`
    UPDATE investigation_threads
    SET status = 'complete', stop_reason = ?, updated_at = ?, metadata_json = ?
    WHERE matter_name = ? AND id = ?
  `).run(stopReason, now, JSON.stringify(metadata), input.matterName, input.threadId);

  await appendEvent({
    matterName: input.matterName,
    type: 'investigation.thread_completed',
    data: { threadId: input.threadId, stopReason },
    source: 'investigation-store',
  });

  return { ...existing, status: 'complete', stopReason, updatedAt: now, metadata };
}

export async function blockInvestigationThread(
  input: BlockInvestigationThreadInput,
): Promise<InvestigationThread> {
  const existing = requireThread(input.matterName, input.threadId);
  const now = new Date().toISOString();
  const blockers = [
    ...((existing.metadata.blockers as InvestigationThreadMetadata['blockers']) ?? []),
    input.blocker,
  ];
  const metadata = {
    ...existing.metadata,
    ...(input.metadata ?? {}),
    blockers,
  };
  getStateDb(input.matterName).prepare(`
    UPDATE investigation_threads
    SET status = 'blocked', stop_reason = ?, updated_at = ?, metadata_json = ?
    WHERE matter_name = ? AND id = ?
  `).run(input.stopReason, now, JSON.stringify(metadata), input.matterName, input.threadId);

  await appendEvent({
    matterName: input.matterName,
    type: 'investigation.thread_blocked',
    data: { threadId: input.threadId, stopReason: input.stopReason, blocker: input.blocker },
    source: 'investigation-store',
  });

  return { ...existing, status: 'blocked', stopReason: input.stopReason, updatedAt: now, metadata };
}

function requireThread(matterName: string, threadId: string): InvestigationThread {
  const existing = getInvestigationThread(matterName, threadId);
  if (!existing) {
    throw new Error(`Investigation thread "${threadId}" was not found`);
  }
  return existing;
}

interface InvestigationThreadRow {
  id: string;
  matter_name: string;
  parent_thread_id: string | null;
  objective: string;
  status: InvestigationThreadStatus;
  depth: number;
  budget_usd: number | null;
  stop_reason: string | null;
  created_at: string;
  updated_at: string;
  metadata_json: string;
}

function rowToInvestigationThread(row: InvestigationThreadRow): InvestigationThread {
  return {
    threadId: row.id,
    matterName: row.matter_name,
    parentThreadId: row.parent_thread_id ?? undefined,
    objective: row.objective,
    status: row.status,
    depth: row.depth,
    budgetUsd: row.budget_usd ?? undefined,
    stopReason: row.stop_reason ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}
