export interface ConsensusDecision {
  consensusId: string;
  matterName: string;
  targetType: 'finding' | 'contradiction' | 'draft' | 'export';
  targetId: string;
  decision: 'approved' | 'rejected' | 'needs_work';
  requiredQuorum: number;
  achievedQuorum: number;
  adjudicatorRole?: string;
  createdAt: string;
  metadata: Record<string, unknown>;
}
