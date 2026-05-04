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
  quote: string;
  quoteHash: string;
  status: CitationSupportStatus;
  confidence: number;
  details: string;
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
