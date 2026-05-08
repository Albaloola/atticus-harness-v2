import type { LegalBlockerSummary } from '../observability/legal-blockers.js';

export function formatLegalBlockers(summary: LegalBlockerSummary): string {
  if (summary.total === 0) return 'No legal blockers.';
  return summary.topBlockers
    .map((blocker) => `${blocker.severity.toUpperCase()} ${blocker.objectId}: ${blocker.reason}`)
    .join('\n');
}
