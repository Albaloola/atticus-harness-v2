import { appendEvent } from '../state/events.js';
import { evaluateLegalReadiness, type LegalReadinessResult } from '../gates/legal-readiness.js';
import { createExportBundle, getExportBundle, updateExportBundle } from './export-store.js';

export interface ExportReadinessResult extends LegalReadinessResult {
  exportId: string;
}

export async function checkExportReadiness(input: {
  matterName: string;
  exportId?: string;
  artifactId?: string;
  bundleType?: string;
}): Promise<ExportReadinessResult> {
  const bundle = input.exportId
    ? getExportBundle(input.matterName, input.exportId)
    : createExportBundle({
      matterName: input.matterName,
      bundleType: input.bundleType ?? 'court-ready',
      status: 'draft',
      metadata: { artifactId: input.artifactId },
    });
  if (!bundle) {
    throw new Error(`Export bundle "${input.exportId}" was not found`);
  }

  const readiness = await evaluateLegalReadiness({
    matterName: input.matterName,
    targetId: input.artifactId,
    requireAcceptedArtifact: true,
  });
  const status = readiness.ready ? 'signoff_required' : 'readiness_blocked';
  updateExportBundle(input.matterName, bundle.exportId, {
    status,
    metadata: {
      artifactId: input.artifactId,
      readiness,
      readinessCheckedAt: readiness.checkedAt,
    },
  });

  await appendEvent({
    matterName: input.matterName,
    type: 'export.readiness_checked',
    data: { exportId: bundle.exportId, ready: readiness.ready, blockerCount: readiness.blockerCount },
    source: 'export-readiness',
  });

  return { ...readiness, exportId: bundle.exportId };
}
