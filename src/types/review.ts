export type ReviewSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info';
export type ReviewFindingType =
  | 'factual_error'
  | 'legal_error'
  | 'omission'
  | 'ambiguity'
  | 'citation_issue'
  | 'structural'
  | 'risk';

export interface HostileReview {
  documentId: string;
  documentTitle: string;
  findings: ReviewFinding[];
  summary: string;
  overallRisk: ReviewSeverity;
  reviewedAt: string;
}

export interface ReviewFinding {
  id: string;
  type: ReviewFindingType;
  severity: ReviewSeverity;
  location: string;
  description: string;
  recommendation: string;
}
