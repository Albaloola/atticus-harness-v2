export type DraftSectionStatus = 'todo' | 'expanded' | 'drafted' | 'reviewed' | 'approved';

export interface DraftSection {
  sectionId: string;
  outlineId: string;
  heading: string;
  purpose: string;
  status: DraftSectionStatus;
  ordinal: number;
  metadata: Record<string, unknown>;
}
