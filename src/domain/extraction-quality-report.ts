export type ExtractionQualityStatus = 'passed' | 'qc_hold' | 'failed';

export interface ExtractionQualityReport {
  reportId: string;
  evidenceId: string;
  status: ExtractionQualityStatus;
  textDensity: number;
  averageConfidence: number;
  pageCount: number;
  warnings: string[];
  createdAt: string;
  metadata: Record<string, unknown>;
}

