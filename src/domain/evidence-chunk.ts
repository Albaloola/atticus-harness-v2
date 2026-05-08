export interface EvidenceChunk {
  chunkId: string;
  evidenceId: string;
  pageId: string;
  chunkIndex: number;
  content: string;
  contentHash: string;
  confidence: number;
  charStart?: number;
  charEnd?: number;
  metadata: Record<string, unknown>;
}

