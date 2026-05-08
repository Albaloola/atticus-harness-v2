export type DraftParagraphStatus = 'draft' | 'blocked' | 'reviewed' | 'approved';
export type DraftTraceStatus = 'missing' | 'partial' | 'complete';

export interface DraftParagraph {
  paragraphId: string;
  sectionId: string;
  ordinal: number;
  text: string;
  status: DraftParagraphStatus;
  traceStatus: DraftTraceStatus;
  findingIds: string[];
  draftCitationIds: string[];
  activeRevisionId?: string;
  metadata: Record<string, unknown>;
}

