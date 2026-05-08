import { stat } from 'fs/promises';

export interface PdfQcResult {
  supported: boolean;
  passed: boolean;
  blockers: Array<{ objectId: string; reason: string; remediation: string }>;
}

export async function runPdfQc(input: {
  pdfPath?: string;
  profileRequiresPdf: boolean;
}): Promise<PdfQcResult> {
  if (!input.profileRequiresPdf) {
    return { supported: true, passed: true, blockers: [] };
  }
  if (!input.pdfPath) {
    return {
      supported: false,
      passed: false,
      blockers: [{
        objectId: 'pdf-profile',
        reason: 'PDF profile requested but no local PDF generator is configured',
        remediation: 'Use the markdown/json profile or configure a local PDF generation step.',
      }],
    };
  }
  const file = await stat(input.pdfPath).catch(() => null);
  if (!file || file.size === 0) {
    return {
      supported: true,
      passed: false,
      blockers: [{
        objectId: input.pdfPath,
        reason: 'PDF file is missing or empty',
        remediation: 'Regenerate the PDF locally before bundling.',
      }],
    };
  }
  return { supported: true, passed: true, blockers: [] };
}
