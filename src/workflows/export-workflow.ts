import { buildPrepareOnlyBundle } from '../export/bundle-builder.js';
import { recordExportSignoff } from '../export/export-store.js';
import { checkExportReadiness } from '../export/readiness.js';

export async function runExportWorkflow(input: {
  matterName: string;
  artifactId?: string;
  operatorId: string;
  profileId?: string;
}): Promise<{
  exportId: string;
  ready: boolean;
  bundled: boolean;
  outputPath?: string;
  manifestPath?: string;
  blockers: Array<{ objectId: string; reason: string; remediation: string }>;
}> {
  const readiness = await checkExportReadiness({
    matterName: input.matterName,
    artifactId: input.artifactId,
  });
  if (!readiness.ready) {
    return {
      exportId: readiness.exportId,
      ready: false,
      bundled: false,
      blockers: readiness.blockers.map((blocker) => ({
        objectId: blocker.objectId,
        reason: blocker.reason,
        remediation: blocker.remediation,
      })),
    };
  }
  await recordExportSignoff({
    matterName: input.matterName,
    exportId: readiness.exportId,
    operatorId: input.operatorId,
  });
  const bundle = await buildPrepareOnlyBundle({
    matterName: input.matterName,
    exportId: readiness.exportId,
    profileId: input.profileId,
    artifactId: input.artifactId,
  });
  return {
    exportId: readiness.exportId,
    ready: true,
    bundled: bundle.bundled,
    outputPath: bundle.outputPath,
    manifestPath: bundle.manifestPath,
    blockers: bundle.blockers,
  };
}
