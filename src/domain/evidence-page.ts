export type EvidencePageTextStatus = 'pending' | 'native' | 'ocr' | 'mixed' | 'failed';

export interface EvidencePage {
  pageId: string;
  evidenceId: string;
  pageNumber: number;
  textStatus: EvidencePageTextStatus;
  imagePath?: string;
  dpi?: number;
  rotation?: number;
  blanknessScore?: number;
  ocrConfidence?: number;
  metadata: Record<string, unknown>;
}

