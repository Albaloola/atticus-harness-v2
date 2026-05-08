import { listArtifacts } from '../storage/artifact.js';
import { listCandidates } from '../storage/candidate.js';
import { listEvidence } from '../storage/evidence.js';
import { listContradictions } from '../findings/contradiction-store.js';
import { listAllFindingCitations, listFindings } from '../findings/finding-store.js';
import { evaluateFindingCriticalityGate } from '../review/criticality.js';
import { listReviewTasks } from '../review/review-store.js';
import { listDraftParagraphs } from '../drafting/draft-store.js';
import { listExportBundles } from '../export/export-store.js';

export type LegalReadinessBlockerType =
  | 'evidence_id'
  | 'finding_id'
  | 'finding_citation_id'
  | 'contradiction_id'
  | 'review_task_id'
  | 'draft_paragraph_id'
  | 'candidate_id'
  | 'artifact_id'
  | 'export_id';

export interface LegalReadinessBlocker {
  blockerType: LegalReadinessBlockerType;
  objectId: string;
  reason: string;
  remediation: string;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
}

export interface LegalReadinessResult {
  matterName: string;
  targetId?: string;
  ready: boolean;
  blockerCount: number;
  blockers: LegalReadinessBlocker[];
  checkedAt: string;
}

export async function evaluateLegalReadiness(input: {
  matterName: string;
  targetId?: string;
  requireAcceptedArtifact?: boolean;
  requireExportSignoff?: boolean;
}): Promise<LegalReadinessResult> {
  const blockers: LegalReadinessBlocker[] = [];
  const evidence = await listEvidence(input.matterName);
  for (const record of evidence) {
    if (['failed', 'qc_failed', 'copied_unindexed', 'excluded'].includes(record.status)) {
      blockers.push({
        blockerType: 'evidence_id',
        objectId: record.id,
        reason: `Evidence is not court-ready: ${record.status}`,
        remediation: 'Re-ingest, approve, or explicitly exclude this evidence before relying on it.',
        severity: record.status === 'excluded' ? 'medium' : 'high',
      });
    }
  }

  const findings = listFindings(input.matterName);
  for (const finding of findings) {
    if (finding.status === 'proposed' || finding.status === 'citation_checked') {
      blockers.push({
        blockerType: 'finding_id',
        objectId: finding.findingId,
        reason: `Finding is not accepted: ${finding.status}`,
        remediation: 'Review, verify citations, and accept or reject the finding.',
        severity: 'high',
      });
    }
    const criticality = evaluateFindingCriticalityGate(input.matterName, finding);
    for (const blocker of criticality.blockers) {
      blockers.push({
        blockerType: 'finding_id',
        objectId: blocker.objectId,
        reason: blocker.reason,
        remediation: blocker.remediation,
        severity: 'critical',
      });
    }
  }

  for (const citation of listAllFindingCitations(input.matterName)) {
    if (citation.status !== 'verified_exact') {
      blockers.push({
        blockerType: 'finding_citation_id',
        objectId: citation.findingCitationId,
        reason: `Finding citation is not exact verified: ${citation.status}`,
        remediation: 'Run exact quote verification and replace fuzzy/failed locators.',
        severity: 'critical',
      });
    }
  }

  for (const contradiction of listContradictions(input.matterName, { status: 'open' })) {
    blockers.push({
      blockerType: 'contradiction_id',
      objectId: contradiction.contradictionId,
      reason: `Open contradiction remains: ${contradiction.severity}`,
      remediation: 'Resolve, dismiss, or adjudicate the contradiction before final use.',
      severity: contradiction.severity === 'critical' ? 'critical' : 'high',
    });
  }

  for (const task of listReviewTasks(input.matterName)) {
    if (task.status !== 'completed') {
      blockers.push({
        blockerType: 'review_task_id',
        objectId: task.reviewTaskId,
        reason: `Review task is ${task.status}`,
        remediation: 'Complete or explicitly block the review task.',
        severity: 'high',
      });
    }
  }

  for (const paragraph of listDraftParagraphs(input.matterName)) {
    if (paragraph.status !== 'approved' || paragraph.traceStatus !== 'complete') {
      blockers.push({
        blockerType: 'draft_paragraph_id',
        objectId: paragraph.paragraphId,
        reason: `Draft paragraph is ${paragraph.status} with ${paragraph.traceStatus} trace`,
        remediation: 'Attach accepted findings and exact citations, then approve the paragraph.',
        severity: 'critical',
      });
    }
  }

  if (input.requireAcceptedArtifact || input.targetId) {
    const artifacts = await listArtifacts(input.matterName);
    const hasArtifact = input.targetId
      ? artifacts.some((artifact) => artifact.id === input.targetId)
      : artifacts.length > 0;
    if (!hasArtifact) {
      const candidates = await listCandidates(input.matterName);
      blockers.push({
        blockerType: input.targetId && candidates.some((candidate) => candidate.id === input.targetId)
          ? 'candidate_id'
          : 'artifact_id',
        objectId: input.targetId ?? 'accepted-artifact',
        reason: 'No reducer-approved artifact exists for the target',
        remediation: 'Promote an assembled candidate through the reducer-only acceptance path.',
        severity: 'critical',
      });
    }
  }

  if (input.requireExportSignoff) {
    const unsignedExports = listExportBundles(input.matterName)
      .filter((bundle) => !['ready', 'exported'].includes(bundle.status));
    for (const bundle of unsignedExports) {
      blockers.push({
        blockerType: 'export_id',
        objectId: bundle.exportId,
        reason: `Export bundle is not signed off: ${bundle.status}`,
        remediation: 'Run export readiness and operator signoff before bundling.',
        severity: 'critical',
      });
    }
  }

  return {
    matterName: input.matterName,
    targetId: input.targetId,
    ready: blockers.length === 0,
    blockerCount: blockers.length,
    blockers,
    checkedAt: new Date().toISOString(),
  };
}
