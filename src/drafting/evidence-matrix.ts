import { listContradictions } from '../findings/contradiction-store.js';
import { listFindingCitations, listFindings } from '../findings/finding-store.js';

export interface EvidenceMatrixRow {
  findingId: string;
  statement: string;
  claimElements: string[];
  citationIds: string[];
  contradictionIds: string[];
  reviewStatus: 'ready' | 'needs_review';
  usableForDrafting: boolean;
}

export function buildEvidenceMatrix(input: {
  matterName: string;
  claimElements?: string[];
}): EvidenceMatrixRow[] {
  const contradictions = listContradictions(input.matterName);
  return listFindings(input.matterName, { status: 'accepted' }).map((finding) => {
    const citations = listFindingCitations(input.matterName, finding.findingId)
      .filter((citation) => citation.status === 'verified_exact');
    const relatedContradictions = contradictions
      .filter((contradiction) =>
        contradiction.findingIdA === finding.findingId || contradiction.findingIdB === finding.findingId)
      .filter((contradiction) => contradiction.status === 'open');
    const claimElements = (input.claimElements ?? []).filter((element) =>
      finding.statement.toLowerCase().includes(element.toLowerCase()));
    return {
      findingId: finding.findingId,
      statement: finding.statement,
      claimElements,
      citationIds: citations.map((citation) => citation.findingCitationId),
      contradictionIds: relatedContradictions.map((contradiction) => contradiction.contradictionId),
      reviewStatus: finding.status === 'accepted' ? 'ready' : 'needs_review',
      usableForDrafting: citations.length > 0 && relatedContradictions.length === 0,
    };
  });
}
