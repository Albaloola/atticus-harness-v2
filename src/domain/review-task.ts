export type ReviewTaskStatus = 'queued' | 'running' | 'completed' | 'blocked';

export interface ReviewTask {
  reviewTaskId: string;
  matterName: string;
  targetType: 'finding' | 'section' | 'draft' | 'document' | 'export';
  targetId: string;
  reviewerRole: string;
  status: ReviewTaskStatus;
  createdAt: string;
  completedAt?: string;
  metadata: Record<string, unknown>;
}

export interface ReviewFinding {
  reviewFindingId: string;
  reviewTaskId: string;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
  type: string;
  description: string;
  targetLocator: string;
  recommendedAction: string;
  metadata: Record<string, unknown>;
}
