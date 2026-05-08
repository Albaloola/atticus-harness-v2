export type ContradictionStatus = 'open' | 'reviewing' | 'resolved' | 'dismissed';

export interface Contradiction {
  contradictionId: string;
  matterName: string;
  findingIdA: string;
  findingIdB: string;
  status: ContradictionStatus;
  severity: 'low' | 'medium' | 'high' | 'critical';
  rationale: string;
  createdAt: string;
  metadata: Record<string, unknown>;
}
