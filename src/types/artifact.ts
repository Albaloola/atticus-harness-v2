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

export type ArtifactType = 'draft' | 'review' | 'analysis' | 'extraction' | 'report';

export interface CandidateMetadata {
  skill?: string;
  model?: string;
  citations?: CitationRef[];
  verificationResult?: string;
  rejectionReason?: string;
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
