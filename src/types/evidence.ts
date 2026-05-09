export type EvidenceFormat = 'pdf' | 'docx' | 'doc' | 'msg' | 'image' | 'text' | 'html' | 'unknown';
export type EvidenceStatus =
  | 'pending'
  | 'discovered'
  | 'registered'
  | 'hashed'
  | 'typed'
  | 'copied_unindexed'
  | 'extracting'
  | 'extracted'
  | 'ocr_required'
  | 'ocr_running'
  | 'qc_pending'
  | 'qc_failed'
  | 'indexed'
  | 'approved'
  | 'excluded'
  | 'failed';

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
