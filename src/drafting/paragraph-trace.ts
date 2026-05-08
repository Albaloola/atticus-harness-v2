import { appendEvent } from '../state/events.js';
import { listContradictions } from '../findings/contradiction-store.js';
import { getFinding, getFindingCitation } from '../findings/finding-store.js';
import {
  getDraftCitation,
  getDraftParagraph,
  updateDraftParagraph,
} from './draft-store.js';

export interface ParagraphTraceBlocker {
  objectId: string;
  reason: string;
  remediation: string;
}

export interface ParagraphTraceResult {
  paragraphId: string;
  approved: boolean;
  traceStatus: 'missing' | 'partial' | 'complete';
  blockers: ParagraphTraceBlocker[];
}

export async function evaluateParagraphTrace(
  matterName: string,
  paragraphId: string,
): Promise<ParagraphTraceResult> {
  const paragraph = getDraftParagraph(matterName, paragraphId);
  if (!paragraph) {
    throw new Error(`Draft paragraph "${paragraphId}" was not found`);
  }
  const blockers: ParagraphTraceBlocker[] = [];

  if (paragraph.findingIds.length === 0) {
    blockers.push({
      objectId: paragraphId,
      reason: 'Paragraph has no accepted finding link',
      remediation: 'Attach at least one accepted finding before approving this paragraph.',
    });
  }

  for (const findingId of paragraph.findingIds) {
    const finding = getFinding(matterName, findingId);
    if (!finding) {
      blockers.push({
        objectId: findingId,
        reason: 'Linked finding does not exist',
        remediation: 'Remove the stale finding link or create the finding.',
      });
      continue;
    }
    if (finding.status !== 'accepted') {
      blockers.push({
        objectId: findingId,
        reason: `Linked finding is not accepted: ${finding.status}`,
        remediation: 'Accept or replace the finding before paragraph approval.',
      });
    }
  }

  if (paragraph.draftCitationIds.length === 0) {
    blockers.push({
      objectId: paragraphId,
      reason: 'Paragraph has no draft citations',
      remediation: 'Attach at least one verified exact finding citation.',
    });
  }

  for (const draftCitationId of paragraph.draftCitationIds) {
    const draftCitation = getDraftCitation(matterName, draftCitationId);
    if (!draftCitation) {
      blockers.push({
        objectId: draftCitationId,
        reason: 'Draft citation does not exist',
        remediation: 'Remove stale citation IDs from the paragraph trace.',
      });
      continue;
    }
    const findingCitation = getFindingCitation(matterName, draftCitation.findingCitationId);
    if (!findingCitation || findingCitation.status !== 'verified_exact') {
      blockers.push({
        objectId: draftCitation.findingCitationId,
        reason: `Finding citation is not exact verified: ${findingCitation?.status ?? 'missing'}`,
        remediation: 'Replace fuzzy, failed, or missing citations with exact page-bounded citations.',
      });
      continue;
    }
    if (!paragraph.findingIds.includes(findingCitation.findingId)) {
      blockers.push({
        objectId: draftCitation.findingCitationId,
        reason: `Draft citation belongs to unlinked finding ${findingCitation.findingId}`,
        remediation: 'Link the cited accepted finding to the paragraph or replace the citation.',
      });
    }
    if (draftCitation.verificationStatus !== 'verified') {
      blockers.push({
        objectId: draftCitation.draftCitationId,
        reason: `Draft citation verification is ${draftCitation.verificationStatus}`,
        remediation: 'Mark the draft citation verified only after exact quote verification passes.',
      });
    }
  }

  for (const findingId of paragraph.findingIds) {
    const openContradictions = listContradictions(matterName, { status: 'open', findingId });
    for (const contradiction of openContradictions) {
      blockers.push({
        objectId: contradiction.contradictionId,
        reason: 'Linked finding has an unresolved contradiction',
        remediation: 'Resolve or adjudicate the contradiction before using this paragraph.',
      });
    }
  }

  const traceStatus = blockers.length === 0
    ? 'complete'
    : paragraph.findingIds.length > 0 || paragraph.draftCitationIds.length > 0
      ? 'partial'
      : 'missing';
  const approved = blockers.length === 0;
  updateDraftParagraph(matterName, paragraphId, {
    status: approved ? 'approved' : 'blocked',
    traceStatus,
    metadata: { traceCheckedAt: new Date().toISOString(), blockers },
  });

  await appendEvent({
    matterName,
    type: approved ? 'draft.paragraph_approved' : 'draft.paragraph_blocked',
    data: { paragraphId, blockers },
    source: 'paragraph-trace',
  });

  return { paragraphId, approved, traceStatus, blockers };
}
