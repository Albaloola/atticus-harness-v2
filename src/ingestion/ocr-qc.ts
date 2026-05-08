import type { ExtractionQualityReport } from '../domain/extraction-quality-report.js';

export function isQualityReportBlocking(report: ExtractionQualityReport): boolean {
  return report.status === 'failed' || report.status === 'qc_hold';
}
