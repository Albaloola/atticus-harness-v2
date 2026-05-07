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
  | 'agent.output.synthesized'
  | 'agent.spawned'
  | 'agent.completed'
  | 'tool.called'
  | 'task.created'
  | 'run.started'
  | 'run.completed'
  | 'draft.created'
  | 'draft.verified'
  | 'draft.gated'
  | 'draft.reviewed'
  | 'draft.accepted'
  | 'draft.rejected'
  | 'inbox.message.received'
  | 'case.instruction.received'
  | 'case.memory.loaded'
  | 'case.output.created'
  | 'case.auto_accept.evaluated'
  | 'task.lease.acquired'
  | 'task.lease.completed'
  | 'task.lease.blocked'
  | 'task.lease.expired'
  | 'reducer.packet.recorded';

export interface MatterEvent {
  id: string;
  timestamp: string;
  type: MatterEventType;
  matterName: string;
  runId?: string;
  taskId?: string;
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
  parentId?: string;
  runId?: string;
  kind: string;
  type: string;
  status: TaskStatus;
  priority: string;
  depth: number;
  assignedAgent?: string;
  dependencies: string[];
  title: string;
  created: string;
  updated: string;
  data: Record<string, unknown>;
  leaseId?: string;
  leaseOwner?: string;
  leaseRole?: 'worker' | 'reducer';
  leaseFencingToken?: number;
  leaseExpiresAt?: string;
  leaseAcquiredAt?: string;
  leaseHeartbeatAt?: string;
  blockedReason?: string;
  attemptCount?: number;
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
  parentRunId?: string;
  agentType: string;
  role: string;
  status: AgentRunStatus;
  model: string;
  skill?: string;
  prompt?: string;
  started: string;
  heartbeatAt?: string;
  pid?: number;
  ended?: string;
  turns: number;
  costUsd: number;
  summary?: string;
  error?: string;
}

export interface ReducerPacket {
  id: string;
  matterName: string;
  candidateId: string;
  artifactId?: string;
  decision: 'accept' | 'reject';
  reducerName: string;
  rationale: string;
  status: 'decided' | 'written' | 'blocked';
  createdAt: string;
  decidedAt: string;
  leaseId?: string;
  data: Record<string, unknown>;
  metadata: Record<string, unknown>;
}

// ── Runtime Snapshot ─────────────────────────────────────────

export interface MatterRuntimeSnapshot {
  matterName: string;
  timestamp: string;
  status: MatterStatus;
  phase: string;
  activeRunId?: string;
  currentPhase?: string;
  activeAgents: Array<{ runId: string; role: string; title: string; status: string; lastEventAt: string }>;
  taskCounts: TaskCounts;
  latestFindings: string[];
  latestRisks: string[];
  candidates: string[];
  costs: RuntimeCosts;
  nextActions: string[];
  leases?: Array<{ taskId: string; leaseId: string; owner?: string; role?: string; expiresAt?: string; stale: boolean }>;
  blockedReasons?: Array<{ taskId: string; reason: string }>;
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

export interface DaemonStatus {
  running: boolean;
  pid: number | null;
  startedAt: string | null;
  uptime: number | null;
  activeRuns: number;
  pendingCommands?: number;
  schedulerRunning?: boolean;
}

// ── Scheduler ─────────────────────────────────────────────────

export interface ScheduledJob {
  id: string;
  matterName: string;
  cron: string;
  prompt: string;
  recurring: boolean;
  durable: boolean;
  enabled: boolean;
  status: string;
  createdAt: string;
  nextRunAt: string | null;
  lastRunAt: string | null;
  metadata: Record<string, unknown>;
  leaseId?: string;
  leaseOwner?: string;
  leaseFencingToken?: number;
  leaseExpiresAt?: string;
  blockedReason?: string;
  attemptCount?: number;
}

export interface CronField {
  minute: number[];
  hour: number[];
  dayOfMonth: number[];
  month: number[];
  dayOfWeek: number[];
}

export interface SupervisedRun {
  runId: string;
  matterName: string;
  startedAt: string;
  status: 'running' | 'paused' | 'cancelled';
  abortController?: AbortController;
}

// ── Scheduler ─────────────────────────────────────────────────
