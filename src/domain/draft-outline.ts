export type DraftOutlineStatus = 'draft' | 'review' | 'approved' | 'superseded';

export interface DraftOutline {
  outlineId: string;
  matterName: string;
  documentType: string;
  version: number;
  status: DraftOutlineStatus;
  createdAt: string;
  metadata: Record<string, unknown>;
}
