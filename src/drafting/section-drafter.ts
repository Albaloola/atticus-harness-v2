import { listFindingCitations } from '../findings/finding-store.js';
import { buildEvidenceMatrix } from './evidence-matrix.js';
import {
  createDraftCitation,
  createDraftParagraph,
  getDraftSection,
  updateDraftSectionStatus,
} from './draft-store.js';

export interface DraftSectionResult {
  sectionId: string;
  paragraphIds: string[];
}

export function draftSectionFromFindings(input: {
  matterName: string;
  sectionId: string;
  claimElements?: string[];
  maxParagraphs?: number;
}): DraftSectionResult {
  const section = getDraftSection(input.matterName, input.sectionId);
  if (!section) {
    throw new Error(`Draft section "${input.sectionId}" was not found`);
  }
  const rows = buildEvidenceMatrix({
    matterName: input.matterName,
    claimElements: input.claimElements,
  }).filter((row) => row.usableForDrafting);
  const paragraphIds: string[] = [];
  const selectedRows = rows.slice(0, input.maxParagraphs ?? 3);

  selectedRows.forEach((row, index) => {
    const citations = listFindingCitations(input.matterName, row.findingId)
      .filter((citation) => citation.status === 'verified_exact');
    const paragraph = createDraftParagraph({
      matterName: input.matterName,
      sectionId: input.sectionId,
      ordinal: index + 1,
      text: `${row.statement} [${citations[0]?.findingCitationId ?? row.findingId}]`,
      findingIds: [row.findingId],
      metadata: { generatedFrom: 'accepted_finding' },
    });
    paragraphIds.push(paragraph.paragraphId);
    for (const citation of citations.slice(0, 2)) {
      createDraftCitation({
        matterName: input.matterName,
        paragraphId: paragraph.paragraphId,
        findingCitationId: citation.findingCitationId,
        renderForm: `[${citation.findingCitationId}]`,
        verificationStatus: 'verified',
      });
    }
  });

  updateDraftSectionStatus(input.matterName, input.sectionId, paragraphIds.length > 0 ? 'drafted' : 'expanded');
  return { sectionId: input.sectionId, paragraphIds };
}
