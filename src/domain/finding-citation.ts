export type FindingCitationStatus = 'unchecked' | 'verified_exact' | 'verified_fuzzy' | 'failed';

export interface FindingCitation {
  findingCitationId: string;
  findingId: string;
  evidenceId: string;
  pageId: string;
  chunkId: string;
  quote: string;
  quoteHash: string;
  sourceHash: string;
  status: FindingCitationStatus;
  checkedAt: string;
  metadata: Record<string, unknown>;
}
