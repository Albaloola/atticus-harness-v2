import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { appendEvent } from '../state/events.js';
import { listReducerPackets } from '../reducer/canonical-writer.js';
import { listArtifacts } from '../storage/artifact.js';
import { getMatterPath } from '../storage/matter.js';
import { listAllFindingCitations, listFindings } from '../findings/finding-store.js';
import { listReviewTasks } from '../review/review-store.js';
import { resolveBundleProfile } from './bundle-profile.js';
import { buildExportManifest } from './export-manifest.js';
import { getExportBundle, listExportSignoffs, updateExportBundle } from './export-store.js';
import { runPdfQc } from './pdf-qc.js';

export interface BundleBuildResult {
  bundled: boolean;
  exportId: string;
  outputPath?: string;
  manifestPath?: string;
  blockers: Array<{ objectId: string; reason: string; remediation: string }>;
}

export async function buildPrepareOnlyBundle(input: {
  matterName: string;
  exportId: string;
  profileId?: string;
  artifactId?: string;
}): Promise<BundleBuildResult> {
  const bundle = getExportBundle(input.matterName, input.exportId);
  if (!bundle) {
    throw new Error(`Export bundle "${input.exportId}" was not found`);
  }
  const blockers: BundleBuildResult['blockers'] = [];
  const signoff = listExportSignoffs(input.matterName, input.exportId)
    .find((candidate) => candidate.status === 'signed');
  const missingSignoff = !signoff;
  if (!signoff) {
    blockers.push({
      objectId: input.exportId,
      reason: 'Export has no operator signoff',
      remediation: 'Run export signoff before preparing the bundle.',
    });
  }

  const profile = resolveBundleProfile(input.profileId);
  const artifacts = await listArtifacts(input.matterName);
  const artifact = input.artifactId
    ? artifacts.find((item) => item.id === input.artifactId)
    : artifacts[artifacts.length - 1];
  if (!artifact) {
    blockers.push({
      objectId: input.artifactId ?? 'accepted-artifact',
      reason: 'No reducer-approved artifact is available for export',
      remediation: 'Assemble and accept a candidate through the reducer before bundling.',
    });
  }

  const pdfQc = await runPdfQc({ profileRequiresPdf: profile.includePdf });
  blockers.push(...pdfQc.blockers);

  if (blockers.length > 0 || !artifact || !signoff) {
    const status = missingSignoff && artifact && pdfQc.blockers.length === 0
      ? 'signoff_required'
      : 'failed';
    updateExportBundle(input.matterName, input.exportId, {
      status,
      metadata: { blockers, profileId: profile.profileId },
    });
    return { bundled: false, exportId: input.exportId, blockers };
  }

  const outputDir = getMatterPath(input.matterName, '_exports', input.exportId);
  await mkdir(outputDir, { recursive: true });
  const files: string[] = [];
  if (profile.includeMarkdown) {
    const markdownPath = join(outputDir, `${artifact.id}.md`);
    await writeFile(markdownPath, artifact.content, 'utf-8');
    files.push(markdownPath);
  }
  if (profile.includeJson) {
    const provenancePath = join(outputDir, 'provenance.json');
    const provenance = {
      artifact,
      reducerPackets: listReducerPackets(input.matterName).filter((packet) => packet.artifactId === artifact.id),
      findings: listFindings(input.matterName, { status: 'accepted' }),
      findingCitations: listAllFindingCitations(input.matterName, { status: 'verified_exact' }),
      reviewTasks: listReviewTasks(input.matterName),
      signoff,
      prepareOnly: true,
    };
    await writeFile(provenancePath, JSON.stringify(provenance, null, 2), 'utf-8');
    files.push(provenancePath);
  }

  const reducerPacket = listReducerPackets(input.matterName)
    .find((packet) => packet.artifactId === artifact.id);
  const manifest = await buildExportManifest({
    matterName: input.matterName,
    exportId: input.exportId,
    artifactId: artifact.id,
    reducerPacketId: reducerPacket?.id,
    files,
    provenance: {
      profileId: profile.profileId,
      signoffId: signoff.signoffId,
      prepareOnly: true,
    },
  });
  const manifestPath = join(outputDir, 'manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  const updated = updateExportBundle(input.matterName, input.exportId, {
    status: 'exported',
    outputPath: outputDir,
    manifestPath,
    metadata: { profileId: profile.profileId, artifactId: artifact.id, prepareOnly: true },
  });
  await appendEvent({
    matterName: input.matterName,
    type: 'export.qc_passed',
    data: { exportId: input.exportId, manifestPath, outputPath: outputDir },
    source: 'bundle-builder',
  });
  return {
    bundled: true,
    exportId: updated.exportId,
    outputPath: outputDir,
    manifestPath,
    blockers: [],
  };
}
