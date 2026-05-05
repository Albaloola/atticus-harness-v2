export type ArtifactStatus = 'candidate' | 'accepted' | 'rejected';

export interface CandidateArtifact {
  id: string;
  matterName: string;
  type: ArtifactType;
  title: string;
  content: string;
  status: ArtifactStatus;
  created: string;
  metadata: CandidateMetadata;
}

export type ArtifactType =
  | 'draft'
  | 'review'
  | 'analysis'
  | 'extraction'
  | 'report'
  | 'email'
  | 'communication'
  | 'task'
  | 'case_management';

export interface CandidateMetadata {
  skill?: string;
  model?: string;
  citations?: CitationRef[];
  verificationResult?: string;
  rejectionReason?: string;
  source?: string;
  requestedType?: string;
  caseMemorySummary?: string;
  externalAction?: 'internal' | 'prepare_only' | 'requires_operator';
  [key: string]: unknown;
}

export interface CitationRef {
  citationId: string;
  evidenceId: string;
  quote?: string;
  quoteHash?: string;
  locator?: string;
}

export interface Artifact {
  id: string;
  matterName: string;
  type: ArtifactType;
  title: string;
  content: string;
  accepted: string;
  acceptedFrom: string;
  citations: CitationRef[];
}
