export type EvidenceFormat = 'pdf' | 'docx' | 'doc' | 'image' | 'text' | 'html' | 'unknown';
export type EvidenceStatus = 'pending' | 'extracting' | 'extracted' | 'failed';

export interface EvidenceRecord {
  id: string;
  matterName: string;
  originalPath: string;
  internalPath: string;
  sha256: string;
  mimeType: string;
  format: EvidenceFormat;
  status: EvidenceStatus;
  ingested: string;
  sizeBytes: number;
  metadata: Record<string, unknown>;
}
