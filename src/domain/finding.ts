export type FindingStatus =
  | 'proposed'
  | 'citation_checked'
  | 'reviewed'
  | 'accepted'
  | 'rejected'
  | 'superseded';

export type FindingCriticality =
  | 'ordinary'
  | 'claim_dispositive'
  | 'time_dispositive'
  | 'jurisdiction_dispositive'
  | 'authority_dispositive'
  | 'contradiction_dispositive';

export interface Finding {
  findingId: string;
  matterName: string;
  statement: string;
  status: FindingStatus;
  criticality: FindingCriticality;
  confidence: number;
  createdAt: string;
  updatedAt: string;
  metadata: Record<string, unknown>;
}
