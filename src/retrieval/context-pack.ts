import { listContradictions } from '../findings/contradiction-store.js';
import { listFindingCitations, listFindings } from '../findings/finding-store.js';
import { hybridSearch, type HybridSearchResult } from './hybrid-search.js';

export interface InvestigationContextPack {
  matterName: string;
  objective: string;
  claimElements: string[];
  acceptedFindings: Array<{
    findingId: string;
    statement: string;
    criticality: string;
    citations: Array<{
      findingCitationId: string;
      evidenceId: string;
      pageId: string;
      chunkId: string;
      quoteHash: string;
      sourceHash: string;
      status: string;
    }>;
  }>;
  contradictions: Array<{
    contradictionId: string;
    findingIdA: string;
    findingIdB: string;
    severity: string;
    status: string;
  }>;
  retrieval: HybridSearchResult[];
  unknowns: string[];
  remainingBudgetUsd?: number;
  provenance: {
    canonicalSources: string[];
    projectionSources: string[];
  };
}

export function buildInvestigationContextPack(input: {
  matterName: string;
  objective: string;
  claimElements?: string[];
  evidenceScope?: string[];
  remainingBudgetUsd?: number;
  topK?: number;
}): InvestigationContextPack {
  const acceptedFindings = listFindings(input.matterName, { status: 'accepted' })
    .filter((finding) => input.claimElements?.length
      ? input.claimElements.some((element) => finding.statement.toLowerCase().includes(element.toLowerCase()))
      : true)
    .map((finding) => ({
      findingId: finding.findingId,
      statement: finding.statement,
      criticality: finding.criticality,
      citations: listFindingCitations(input.matterName, finding.findingId)
        .filter((citation) => citation.status === 'verified_exact')
        .map((citation) => ({
          findingCitationId: citation.findingCitationId,
          evidenceId: citation.evidenceId,
          pageId: citation.pageId,
          chunkId: citation.chunkId,
          quoteHash: citation.quoteHash,
          sourceHash: citation.sourceHash,
          status: citation.status,
        })),
    }));

  const contradictions = listContradictions(input.matterName, { status: 'open' })
    .map((contradiction) => ({
      contradictionId: contradiction.contradictionId,
      findingIdA: contradiction.findingIdA,
      findingIdB: contradiction.findingIdB,
      severity: contradiction.severity,
      status: contradiction.status,
    }));

  const query = [
    input.objective,
    ...(input.claimElements ?? []),
    ...(input.evidenceScope ?? []),
  ].join(' ');
  const retrieval = hybridSearch(input.matterName, query, { topK: input.topK ?? 8 });
  const unknowns: string[] = [];
  for (const element of input.claimElements ?? []) {
    const hasFinding = acceptedFindings.some((finding) =>
      finding.statement.toLowerCase().includes(element.toLowerCase()));
    if (!hasFinding) {
      unknowns.push(`No accepted finding currently covers claim element: ${element}`);
    }
  }

  return {
    matterName: input.matterName,
    objective: input.objective,
    claimElements: input.claimElements ?? [],
    acceptedFindings,
    contradictions,
    retrieval,
    unknowns,
    remainingBudgetUsd: input.remainingBudgetUsd,
    provenance: {
      canonicalSources: ['findings', 'finding_citations', 'contradictions', 'evidence_search_projection'],
      projectionSources: retrieval.filter((result) => !result.canonical).map((result) => result.id),
    },
  };
}
