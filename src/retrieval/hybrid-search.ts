import { searchEvidence } from '../storage/sqlite/search.js';
import { listFindings } from '../findings/finding-store.js';
import { getGraphNeighbors } from './graph-neighborhood.js';
import { rerankByTermOverlap, type RerankableResult } from './rerank.js';

export interface HybridSearchOptions {
  topK?: number;
  includeGraphNeighborsOf?: string;
  graphDepth?: number;
}

export interface HybridSearchResult extends RerankableResult {
  canonical: boolean;
}

export function hybridSearch(
  matterName: string,
  query: string,
  options: HybridSearchOptions = {},
): HybridSearchResult[] {
  const topK = options.topK ?? 10;
  const evidenceResults: HybridSearchResult[] = searchEvidence(matterName, query, { topK })
    .map((result) => ({
      id: `evidence:${result.evidenceId}:${result.chunkIndex ?? 'unknown'}`,
      text: result.snippet,
      score: result.score,
      source: 'evidence_fts',
      canonical: true,
      metadata: {
        evidenceId: result.evidenceId,
        originalPath: result.originalPath,
        sha256: result.sha256,
        chunkIndex: result.chunkIndex,
      },
    }));

  const acceptedFindings: HybridSearchResult[] = listFindings(matterName, { status: 'accepted' })
    .map((finding) => ({
      id: `finding:${finding.findingId}`,
      text: finding.statement,
      score: 0.72 + finding.confidence / 10,
      source: 'accepted_findings',
      canonical: true,
      metadata: { findingId: finding.findingId, criticality: finding.criticality },
    }));

  const graphResults: HybridSearchResult[] = options.includeGraphNeighborsOf
    ? getGraphNeighbors(matterName, options.includeGraphNeighborsOf, {
      depth: options.graphDepth ?? 1,
    }).nodes.map((node) => ({
      id: `graph:${node.nodeId}`,
      text: node.label,
      score: 0.42,
      source: 'graph_projection',
      canonical: false,
      metadata: {
        objectType: node.objectType,
        objectId: node.objectId,
        projectionOnly: true,
      },
    }))
    : [];

  return rerankByTermOverlap(query, [...evidenceResults, ...acceptedFindings, ...graphResults], topK)
    .map((result) => ({
      ...result,
      canonical: (result as HybridSearchResult).canonical,
    }));
}
