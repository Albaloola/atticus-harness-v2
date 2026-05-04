import type { MatterStatus } from './matter.js';

// ── Event types ──────────────────────────────────────────────

export type MatterEventType =
  | 'matter.created'
  | 'matter.status_changed'
  | 'evidence.ingested'
  | 'evidence.ingestion_failed'
  | 'agent.run.started'
  | 'agent.run.completed'
  | 'agent.run.blocked'
  | 'agent.run.error'
  | 'agent.run.max_turns'
  | 'agent.turn.completed'
  | 'tool.called'
  | 'draft.created'
  | 'draft.verified'
  | 'draft.gated'
  | 'draft.reviewed'
  | 'draft.accepted'
  | 'draft.rejected'
  | 'inbox.message.received';

export interface MatterEvent {
  id: string;
  timestamp: string;
  type: MatterEventType;
  matterName: string;
  data: Record<string, unknown>;
  source: string; // 'operator', 'hermes', 'agent', 'tool'
}

// ── Task DAG ─────────────────────────────────────────────────

export type TaskStatus =
  | 'pending'
  | 'in_progress'
  | 'completed'
  | 'failed'
  | 'blocked';

export interface TaskDagNode {
  id: string;
  matterName: string;
  type: string;
  status: TaskStatus;
  dependencies: string[];
  title: string;
  created: string;
  updated: string;
  data: Record<string, unknown>;
}

// ── Agent Run ────────────────────────────────────────────────

export type AgentRunStatus =
  | 'running'
  | 'completed'
  | 'blocked'
  | 'error'
  | 'max_turns';

export interface AgentRun {
  id: string;
  matterName: string;
  status: AgentRunStatus;
  model: string;
  skill?: string;
  prompt?: string;
  started: string;
  ended?: string;
  turns: number;
  summary?: string;
  error?: string;
}

// ── Runtime Snapshot ─────────────────────────────────────────

export interface MatterRuntimeSnapshot {
  matterName: string;
  timestamp: string;
  status: MatterStatus;
  phase: string;
  activeAgents: AgentRun[];
  taskCounts: TaskCounts;
  latestFindings: string[];
  latestRisks: string[];
  candidates: string[];
  costs: RuntimeCosts;
  nextActions: string[];
}

export interface TaskCounts {
  total: number;
  pending: number;
  in_progress: number;
  completed: number;
  failed: number;
  blocked: number;
}

export interface RuntimeCosts {
  estimatedTotal: number;
  lastRunCost: number;
}

// ── Citation & Source (scheduler schema) ─────────────────────

export interface RuntimeCitation {
  id: string;
  matterName: string;
  evidenceId: string;
  candidateId: string;
  supported: boolean;
  score: number;
  checkedAt: string;
}

export interface RuntimeSource {
  id: number;
  matterName: string;
  evidenceId: string;
  summary: string;
  addedAt: string;
}
