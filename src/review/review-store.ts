import { randomUUID } from 'crypto';
import { appendEvent } from '../state/events.js';
import { getStateDb } from '../state/store.js';
import type { ConsensusDecision } from '../domain/consensus-decision.js';
import type { ReviewFinding, ReviewTask, ReviewTaskStatus } from '../domain/review-task.js';

export type ReviewTargetType = ReviewTask['targetType'];

export interface CreateReviewTaskInput {
  id?: string;
  matterName: string;
  targetType: ReviewTargetType;
  targetId: string;
  reviewerRole: string;
  metadata?: Record<string, unknown>;
}

export interface AddReviewFindingInput {
  id?: string;
  matterName: string;
  reviewTaskId: string;
  severity: ReviewFinding['severity'];
  type: string;
  description: string;
  targetLocator: string;
  recommendedAction: string;
  metadata?: Record<string, unknown>;
}

export interface RecordConsensusDecisionInput {
  id?: string;
  matterName: string;
  targetType: ConsensusDecision['targetType'];
  targetId: string;
  decision: ConsensusDecision['decision'];
  requiredQuorum?: number;
  achievedQuorum?: number;
  adjudicatorRole?: string;
  metadata?: Record<string, unknown>;
}

export async function createReviewTask(input: CreateReviewTaskInput): Promise<ReviewTask> {
  const task: ReviewTask = {
    reviewTaskId: input.id ?? randomUUID(),
    matterName: input.matterName,
    targetType: input.targetType,
    targetId: input.targetId,
    reviewerRole: input.reviewerRole,
    status: 'queued',
    createdAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };

  getStateDb(input.matterName).prepare(`
    INSERT INTO review_tasks (
      id, matter_name, target_type, target_id, reviewer_role,
      status, created_at, completed_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    task.reviewTaskId,
    task.matterName,
    task.targetType,
    task.targetId,
    task.reviewerRole,
    task.status,
    task.createdAt,
    null,
    JSON.stringify(task.metadata),
  );

  await appendEvent({
    matterName: input.matterName,
    type: 'review.task_created',
    data: { reviewTaskId: task.reviewTaskId, targetType: task.targetType, targetId: task.targetId },
    source: 'review-store',
  });

  return task;
}

export function getReviewTask(matterName: string, reviewTaskId: string): ReviewTask | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM review_tasks WHERE matter_name = ? AND id = ?')
    .get(matterName, reviewTaskId) as ReviewTaskRow | undefined;
  return row ? rowToReviewTask(row) : undefined;
}

export function listReviewTasks(matterName: string, options?: {
  status?: ReviewTaskStatus;
  targetType?: ReviewTargetType;
  targetId?: string;
}): ReviewTask[] {
  let sql = 'SELECT * FROM review_tasks WHERE matter_name = ?';
  const params: string[] = [matterName];
  if (options?.status) {
    sql += ' AND status = ?';
    params.push(options.status);
  }
  if (options?.targetType) {
    sql += ' AND target_type = ?';
    params.push(options.targetType);
  }
  if (options?.targetId) {
    sql += ' AND target_id = ?';
    params.push(options.targetId);
  }
  sql += ' ORDER BY created_at DESC';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as ReviewTaskRow[];
  return rows.map(rowToReviewTask);
}

export async function addReviewFinding(input: AddReviewFindingInput): Promise<ReviewFinding> {
  const task = getReviewTask(input.matterName, input.reviewTaskId);
  if (!task) {
    throw new Error(`Review task "${input.reviewTaskId}" was not found`);
  }

  const finding: ReviewFinding = {
    reviewFindingId: input.id ?? randomUUID(),
    reviewTaskId: input.reviewTaskId,
    severity: input.severity,
    type: input.type,
    description: input.description,
    targetLocator: input.targetLocator,
    recommendedAction: input.recommendedAction,
    metadata: input.metadata ?? {},
  };

  getStateDb(input.matterName).prepare(`
    INSERT INTO review_findings (
      id, review_task_id, severity, type, description,
      target_locator, recommended_action, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    finding.reviewFindingId,
    finding.reviewTaskId,
    finding.severity,
    finding.type,
    finding.description,
    finding.targetLocator,
    finding.recommendedAction,
    JSON.stringify(finding.metadata),
  );

  return finding;
}

export function listReviewFindings(matterName: string, options?: {
  reviewTaskId?: string;
  targetId?: string;
  severity?: ReviewFinding['severity'];
}): ReviewFinding[] {
  let sql = `
    SELECT rf.*
    FROM review_findings rf
    JOIN review_tasks rt ON rt.id = rf.review_task_id
    WHERE rt.matter_name = ?
  `;
  const params: string[] = [matterName];
  if (options?.reviewTaskId) {
    sql += ' AND rf.review_task_id = ?';
    params.push(options.reviewTaskId);
  }
  if (options?.targetId) {
    sql += ' AND rt.target_id = ?';
    params.push(options.targetId);
  }
  if (options?.severity) {
    sql += ' AND rf.severity = ?';
    params.push(options.severity);
  }
  sql += ' ORDER BY rf.id';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as ReviewFindingRow[];
  return rows.map(rowToReviewFinding);
}

export async function completeReviewTask(
  matterName: string,
  reviewTaskId: string,
  metadataPatch?: Record<string, unknown>,
): Promise<ReviewTask> {
  const existing = getReviewTask(matterName, reviewTaskId);
  if (!existing) {
    throw new Error(`Review task "${reviewTaskId}" was not found`);
  }
  const completedAt = new Date().toISOString();
  const metadata = { ...existing.metadata, ...(metadataPatch ?? {}) };
  getStateDb(matterName).prepare(`
    UPDATE review_tasks
    SET status = 'completed', completed_at = ?, metadata_json = ?
    WHERE matter_name = ? AND id = ?
  `).run(completedAt, JSON.stringify(metadata), matterName, reviewTaskId);

  await appendEvent({
    matterName,
    type: 'review.task_completed',
    data: { reviewTaskId, targetType: existing.targetType, targetId: existing.targetId },
    source: 'review-store',
  });

  return { ...existing, status: 'completed', completedAt, metadata };
}

export async function recordConsensusDecision(
  input: RecordConsensusDecisionInput,
): Promise<ConsensusDecision> {
  const decision: ConsensusDecision = {
    consensusId: input.id ?? randomUUID(),
    matterName: input.matterName,
    targetType: input.targetType,
    targetId: input.targetId,
    decision: input.decision,
    requiredQuorum: input.requiredQuorum ?? 1,
    achievedQuorum: input.achievedQuorum ?? 0,
    adjudicatorRole: input.adjudicatorRole,
    createdAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };

  getStateDb(input.matterName).prepare(`
    INSERT INTO consensus_decisions (
      id, matter_name, target_type, target_id, decision, required_quorum,
      achieved_quorum, adjudicator_role, created_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    decision.consensusId,
    decision.matterName,
    decision.targetType,
    decision.targetId,
    decision.decision,
    decision.requiredQuorum,
    decision.achievedQuorum,
    decision.adjudicatorRole ?? null,
    decision.createdAt,
    JSON.stringify(decision.metadata),
  );

  await appendEvent({
    matterName: input.matterName,
    type: 'consensus.decision_recorded',
    data: {
      consensusId: decision.consensusId,
      targetType: decision.targetType,
      targetId: decision.targetId,
      decision: decision.decision,
    },
    source: 'review-store',
  });

  return decision;
}

export function listConsensusDecisions(matterName: string, options?: {
  targetType?: ConsensusDecision['targetType'];
  targetId?: string;
}): ConsensusDecision[] {
  let sql = 'SELECT * FROM consensus_decisions WHERE matter_name = ?';
  const params: string[] = [matterName];
  if (options?.targetType) {
    sql += ' AND target_type = ?';
    params.push(options.targetType);
  }
  if (options?.targetId) {
    sql += ' AND target_id = ?';
    params.push(options.targetId);
  }
  sql += ' ORDER BY created_at DESC';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as ConsensusDecisionRow[];
  return rows.map(rowToConsensusDecision);
}

interface ReviewTaskRow {
  id: string;
  matter_name: string;
  target_type: ReviewTargetType;
  target_id: string;
  reviewer_role: string;
  status: ReviewTaskStatus;
  created_at: string;
  completed_at: string | null;
  metadata_json: string;
}

interface ReviewFindingRow {
  id: string;
  review_task_id: string;
  severity: ReviewFinding['severity'];
  type: string;
  description: string;
  target_locator: string;
  recommended_action: string;
  metadata_json: string;
}

interface ConsensusDecisionRow {
  id: string;
  matter_name: string;
  target_type: ConsensusDecision['targetType'];
  target_id: string;
  decision: ConsensusDecision['decision'];
  required_quorum: number;
  achieved_quorum: number;
  adjudicator_role: string | null;
  created_at: string;
  metadata_json: string;
}

function rowToReviewTask(row: ReviewTaskRow): ReviewTask {
  return {
    reviewTaskId: row.id,
    matterName: row.matter_name,
    targetType: row.target_type,
    targetId: row.target_id,
    reviewerRole: row.reviewer_role,
    status: row.status,
    createdAt: row.created_at,
    completedAt: row.completed_at ?? undefined,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToReviewFinding(row: ReviewFindingRow): ReviewFinding {
  return {
    reviewFindingId: row.id,
    reviewTaskId: row.review_task_id,
    severity: row.severity,
    type: row.type,
    description: row.description,
    targetLocator: row.target_locator,
    recommendedAction: row.recommended_action,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToConsensusDecision(row: ConsensusDecisionRow): ConsensusDecision {
  return {
    consensusId: row.id,
    matterName: row.matter_name,
    targetType: row.target_type,
    targetId: row.target_id,
    decision: row.decision,
    requiredQuorum: row.required_quorum,
    achievedQuorum: row.achieved_quorum,
    adjudicatorRole: row.adjudicator_role ?? undefined,
    createdAt: row.created_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}
