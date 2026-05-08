import type { EvidenceStatus } from '../types/evidence.js';

export const INGESTION_STATES = [
  'discovered',
  'registered',
  'hashed',
  'typed',
  'copied_unindexed',
  'extracted',
  'ocr_required',
  'ocr_running',
  'qc_pending',
  'qc_failed',
  'indexed',
  'approved',
  'excluded',
] as const satisfies readonly EvidenceStatus[];

export type IngestionState = typeof INGESTION_STATES[number];

export interface IngestionTransition {
  evidenceId: string;
  from?: IngestionState;
  to: IngestionState;
  reason?: string;
  occurredAt: string;
  metadata: Record<string, unknown>;
}

export function isSearchableEvidenceStatus(status: EvidenceStatus): boolean {
  return status === 'extracted' || status === 'indexed' || status === 'approved';
}
