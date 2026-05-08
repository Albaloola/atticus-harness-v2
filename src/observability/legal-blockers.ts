import { evaluateLegalReadiness, type LegalReadinessBlocker } from '../gates/legal-readiness.js';
import { listExportBundles } from '../export/export-store.js';
import { listInvestigationThreads } from '../investigation/thread-store.js';

export interface LegalBlockerSummary {
  matterName: string;
  generatedAt: string;
  total: number;
  byType: Record<string, number>;
  topBlockers: LegalReadinessBlocker[];
  activeInvestigationThreadIds: string[];
  exportIds: string[];
}

export async function buildLegalBlockerSummary(matterName: string): Promise<LegalBlockerSummary> {
  const readiness = await evaluateLegalReadiness({ matterName });
  const exportBundles = listExportBundles(matterName);
  const blockers = [
    ...readiness.blockers,
    ...exportBundles.flatMap(exportReadinessBlockers),
  ];
  const byType: Record<string, number> = {};
  for (const blocker of blockers) {
    byType[blocker.blockerType] = (byType[blocker.blockerType] ?? 0) + 1;
  }
  return {
    matterName,
    generatedAt: new Date().toISOString(),
    total: blockers.length,
    byType,
    topBlockers: blockers.slice(0, 10),
    activeInvestigationThreadIds: listInvestigationThreads(matterName)
      .filter((thread) => ['queued', 'scoped', 'running', 'review_pending', 'consensus_pending'].includes(thread.status))
      .map((thread) => thread.threadId),
    exportIds: exportBundles.map((bundle) => bundle.exportId),
  };
}

function exportReadinessBlockers(bundle: ReturnType<typeof listExportBundles>[number]): LegalReadinessBlocker[] {
  const blockers = [
    ...coerceExportBlockers(bundle.metadata.readiness, bundle, 'Export readiness is blocked'),
    ...coerceExportBlockers(bundle.metadata.blockers, bundle, 'Export bundle is blocked'),
  ];

  if (
    bundle.status === 'signoff_required'
    && !blockers.some((blocker) => blocker.blockerType === 'export_id' && blocker.objectId === bundle.exportId)
  ) {
    blockers.unshift({
      blockerType: 'export_id',
      objectId: bundle.exportId,
      reason: 'Export is waiting for operator signoff',
      remediation: 'Run export signoff after confirming the readiness result.',
      severity: 'critical',
    });
  }
  if (bundle.status === 'readiness_blocked' && blockers.length === 0) {
    blockers.push({
      blockerType: 'export_id',
      objectId: bundle.exportId,
      reason: 'Export readiness is blocked',
      remediation: 'Run export readiness with JSON output for detailed blockers.',
      severity: 'critical',
    });
  }
  if (bundle.status === 'failed' && blockers.length === 0) {
    blockers.push({
      blockerType: 'export_id',
      objectId: bundle.exportId,
      reason: 'Export bundle failed',
      remediation: 'Inspect export metadata, resolve blockers, and rerun export readiness.',
      severity: 'critical',
    });
  }

  return dedupeBlockers(blockers);
}

function coerceExportBlockers(
  source: unknown,
  bundle: ReturnType<typeof listExportBundles>[number],
  defaultReason: string,
): LegalReadinessBlocker[] {
  const rawBlockers = Array.isArray(source)
    ? source
    : source && typeof source === 'object'
      ? (source as { blockers?: unknown }).blockers
      : undefined;
  if (!Array.isArray(rawBlockers)) return [];
  return rawBlockers.map((blocker) => {
    const typed = blocker as Partial<LegalReadinessBlocker>;
    return {
      blockerType: typed.blockerType ?? 'export_id',
      objectId: typed.objectId ?? bundle.exportId,
      reason: typed.reason ?? defaultReason,
      remediation: typed.remediation ?? 'Resolve export blockers before bundling.',
      severity: typed.severity ?? 'critical',
    };
  });
}

function dedupeBlockers(blockers: LegalReadinessBlocker[]): LegalReadinessBlocker[] {
  const seen = new Set<string>();
  const unique: LegalReadinessBlocker[] = [];
  for (const blocker of blockers) {
    const key = `${blocker.blockerType}:${blocker.objectId}:${blocker.reason}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(blocker);
  }
  return unique;
}
