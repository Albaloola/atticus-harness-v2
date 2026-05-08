import { appendEvent } from '../state/events.js';
import { saveCandidate } from '../storage/candidate.js';
import type { CandidateArtifact } from '../types/artifact.js';
import {
  getDraftOutline,
  listDraftCitations,
  listDraftParagraphs,
  listDraftSections,
} from './draft-store.js';

export interface DraftAssemblyResult {
  assembled: boolean;
  candidateId?: string;
  blockers: Array<{ objectId: string; reason: string; remediation: string }>;
}

export async function assembleDraftCandidate(input: {
  matterName: string;
  outlineId: string;
  title?: string;
  coverageThreshold?: number;
}): Promise<DraftAssemblyResult> {
  const outline = getDraftOutline(input.matterName, input.outlineId);
  if (!outline) {
    throw new Error(`Draft outline "${input.outlineId}" was not found`);
  }

  const sections = listDraftSections(input.matterName, input.outlineId);
  const paragraphs = listDraftParagraphs(input.matterName, { outlineId: input.outlineId });
  const blockers: DraftAssemblyResult['blockers'] = [];
  const requiredThreshold = input.coverageThreshold ?? 1;
  const approvedParagraphs = paragraphs.filter((paragraph) =>
    paragraph.status === 'approved' && paragraph.traceStatus === 'complete');
  const coverage = paragraphs.length === 0 ? 0 : approvedParagraphs.length / paragraphs.length;

  if (sections.length === 0) {
    blockers.push({
      objectId: input.outlineId,
      reason: 'Outline has no sections',
      remediation: 'Create at least one section before assembly.',
    });
  }
  if (paragraphs.length === 0) {
    blockers.push({
      objectId: input.outlineId,
      reason: 'Outline has no paragraphs',
      remediation: 'Draft and trace paragraphs before assembly.',
    });
  }
  for (const paragraph of paragraphs) {
    if (paragraph.status !== 'approved' || paragraph.traceStatus !== 'complete') {
      blockers.push({
        objectId: paragraph.paragraphId,
        reason: `Paragraph is ${paragraph.status} with ${paragraph.traceStatus} trace`,
        remediation: 'Run draft trace and resolve all blockers before assembly.',
      });
    }
  }
  if (coverage < requiredThreshold) {
    blockers.push({
      objectId: input.outlineId,
      reason: `Approved paragraph coverage ${coverage.toFixed(2)} is below threshold ${requiredThreshold}`,
      remediation: 'Approve enough fully traced paragraphs to meet the coverage threshold.',
    });
  }

  if (blockers.length > 0) {
    return { assembled: false, blockers };
  }

  const content = sections.map((section) => {
    const sectionParagraphs = approvedParagraphs
      .filter((paragraph) => paragraph.sectionId === section.sectionId)
      .sort((a, b) => a.ordinal - b.ordinal)
      .map((paragraph) => paragraph.text)
      .join('\n\n');
    return `## ${section.heading}\n\n${sectionParagraphs || section.purpose}`;
  }).join('\n\n');

  const candidateId = `assembled-${Date.now()}`;
  const draftCitations = listDraftCitations(input.matterName);
  const candidate: CandidateArtifact = {
    id: candidateId,
    matterName: input.matterName,
    type: 'draft',
    title: input.title ?? `${outline.documentType} draft`,
    content: `# ${input.title ?? `${outline.documentType} draft`}\n\n${content}`,
    status: 'candidate',
    created: new Date().toISOString(),
    metadata: {
      source: 'draft-assembly',
      outlineId: input.outlineId,
      paragraphIds: approvedParagraphs.map((paragraph) => paragraph.paragraphId),
      findingIds: [...new Set(approvedParagraphs.flatMap((paragraph) => paragraph.findingIds))],
      citationIds: draftCitations.map((citation) => citation.draftCitationId),
      findingCitationIds: draftCitations.map((citation) => citation.findingCitationId),
      gateResult: { coverage, threshold: requiredThreshold },
    },
  };
  await saveCandidate(input.matterName, candidate);
  await appendEvent({
    matterName: input.matterName,
    type: 'draft.created',
    data: { candidateId, outlineId: input.outlineId, source: 'draft-assembly' },
    source: 'draft-assembly',
  });
  return { assembled: true, candidateId, blockers: [] };
}
