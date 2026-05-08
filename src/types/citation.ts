export type CitationSupportStatus =
  | 'supported'
  | 'partially_supported'
  | 'unsupported'
  | 'contradicted'
  | 'not_checked';

export interface CitationCheck {
  findingId: string;
  citationId: string;
  evidenceId: string;
  pageId?: string;
  chunkId?: string;
  quote: string;
  quoteHash: string;
  sourceHash?: string;
  exact?: boolean;
  status: CitationSupportStatus;
  confidence: number;
  details: string;
  checkedAt?: string;
}

export interface CitationResult {
  candidateId: string;
  checks: CitationCheck[];
  summary: {
    total: number;
    supported: number;
    unsupported: number;
    contradicted: number;
    notChecked: number;
  };
  passed: boolean;
}
