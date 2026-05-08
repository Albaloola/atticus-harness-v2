export type OCRRunStatus = 'not_required' | 'queued' | 'running' | 'completed' | 'failed';

export interface OCRRun {
  ocrRunId: string;
  evidenceId: string;
  engine: 'native' | 'ocrmypdf' | 'tesseract' | 'docling' | 'manual' | 'other';
  status: OCRRunStatus;
  startedAt: string;
  completedAt?: string;
  confidence?: number;
  outputPath?: string;
  error?: string;
  metadata: Record<string, unknown>;
}

