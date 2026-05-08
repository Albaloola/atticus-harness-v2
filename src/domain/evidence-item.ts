import type { EvidenceFormat, EvidenceStatus } from '../types/evidence.js';

export interface EvidenceItem {
  evidenceId: string;
  matterName: string;
  sha256: string;
  originalPath: string;
  internalPath: string;
  originalFilename: string;
  canonicalFilename?: string;
  sourceType: 'upload' | 'email' | 'source_snapshot' | 'operator_note' | 'other';
  mimeType: string;
  format: EvidenceFormat;
  status: EvidenceStatus;
  ingestedAt: string;
  sizeBytes: number;
  metadata: Record<string, unknown>;
}

