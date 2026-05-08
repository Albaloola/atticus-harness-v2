export type InvestigationThreadStatus =
  | 'queued'
  | 'scoped'
  | 'running'
  | 'review_pending'
  | 'consensus_pending'
  | 'complete'
  | 'blocked'
  | 'exhausted'
  | 'cancelled';

export interface InvestigationThread {
  threadId: string;
  matterName: string;
  parentThreadId?: string;
  objective: string;
  status: InvestigationThreadStatus;
  depth: number;
  budgetUsd?: number;
  stopReason?: string;
  createdAt: string;
  updatedAt: string;
  metadata: Record<string, unknown>;
}
