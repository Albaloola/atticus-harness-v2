import type { EvidenceFormat } from '../types/evidence.js';

export function classifyEvidenceFormat(format: EvidenceFormat): string {
  if (format === 'pdf') return 'document/pdf';
  if (format === 'doc' || format === 'docx') return 'document/word';
  if (format === 'image') return 'image';
  if (format === 'text' || format === 'html') return 'text';
  return 'unknown';
}

