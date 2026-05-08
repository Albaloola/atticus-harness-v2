import type { EvidenceMatrixRow } from './evidence-matrix.js';

export interface IssueMapEntry {
  claimElement: string;
  findingIds: string[];
  coverage: 'missing' | 'partial' | 'complete';
}

export function buildIssueMap(
  claimElements: string[],
  matrix: EvidenceMatrixRow[],
): IssueMapEntry[] {
  return claimElements.map((claimElement) => {
    const findingIds = matrix
      .filter((row) => row.usableForDrafting && row.claimElements.includes(claimElement))
      .map((row) => row.findingId);
    return {
      claimElement,
      findingIds,
      coverage: findingIds.length === 0 ? 'missing' : findingIds.length === 1 ? 'partial' : 'complete',
    };
  });
}
