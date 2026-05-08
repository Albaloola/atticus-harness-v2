import { getStateDb } from '../state/store.js';
import { listContradictions } from '../findings/contradiction-store.js';
import { listAllFindingCitations, listFindings } from '../findings/finding-store.js';
import {
  clearGraphProjection,
  listGraphEdges,
  listGraphNodes,
  recordGraphRebuild,
  stableSourceHash,
  upsertGraphEdge,
  upsertGraphNode,
  type GraphRebuildRecord,
} from './graph-store.js';

export interface GraphProjectionResult {
  rebuild: GraphRebuildRecord;
  nodeCount: number;
  edgeCount: number;
  sourceHash: string;
}

export function rebuildGraphProjection(matterName: string): GraphProjectionResult {
  const startedAt = new Date().toISOString();
  const source = readCanonicalProjectionInputs(matterName);
  const sourceHash = stableSourceHash(source);
  clearGraphProjection(matterName);

  const findingNodes = new Map<string, string>();
  for (const finding of source.findings) {
    const node = upsertGraphNode({
      matterName,
      objectType: 'finding',
      objectId: finding.findingId,
      label: finding.statement,
      canonical: true,
      sourceTable: 'findings',
      sourceHash: stableSourceHash(finding),
      metadata: {
        status: finding.status,
        criticality: finding.criticality,
        confidence: finding.confidence,
      },
    });
    findingNodes.set(finding.findingId, node.nodeId);
  }

  const evidenceNodes = new Map<string, string>();
  for (const citation of source.findingCitations) {
    const evidenceNode = evidenceNodes.get(citation.evidenceId) ?? upsertGraphNode({
      matterName,
      objectType: 'evidence',
      objectId: citation.evidenceId,
      label: `Evidence ${citation.evidenceId}`,
      canonical: true,
      sourceTable: 'evidence_items_v2',
      sourceHash: citation.sourceHash,
      metadata: { evidenceId: citation.evidenceId },
    }).nodeId;
    evidenceNodes.set(citation.evidenceId, evidenceNode);

    const citationNode = upsertGraphNode({
      matterName,
      objectType: 'finding_citation',
      objectId: citation.findingCitationId,
      label: citation.quote,
      canonical: true,
      sourceTable: 'finding_citations',
      sourceHash: stableSourceHash(citation),
      metadata: {
        findingId: citation.findingId,
        evidenceId: citation.evidenceId,
        pageId: citation.pageId,
        chunkId: citation.chunkId,
        status: citation.status,
      },
    });

    const findingNodeId = findingNodes.get(citation.findingId);
    if (findingNodeId) {
      upsertGraphEdge({
        matterName,
        fromNodeId: findingNodeId,
        toNodeId: citationNode.nodeId,
        edgeType: 'cites',
        sourceTable: 'finding_citations',
        sourceHash: stableSourceHash(citation),
        metadata: { findingCitationId: citation.findingCitationId },
      });
      upsertGraphEdge({
        matterName,
        fromNodeId: citationNode.nodeId,
        toNodeId: evidenceNode,
        edgeType: 'supports',
        sourceTable: 'finding_citations',
        sourceHash: stableSourceHash(citation),
        metadata: { evidenceId: citation.evidenceId },
      });
    }
  }

  for (const contradiction of source.contradictions) {
    const contradictionNode = upsertGraphNode({
      matterName,
      objectType: 'contradiction',
      objectId: contradiction.contradictionId,
      label: contradiction.rationale,
      canonical: true,
      sourceTable: 'contradictions',
      sourceHash: stableSourceHash(contradiction),
      metadata: { status: contradiction.status, severity: contradiction.severity },
    });
    const a = findingNodes.get(contradiction.findingIdA);
    const b = findingNodes.get(contradiction.findingIdB);
    for (const findingNodeId of [a, b].filter(Boolean) as string[]) {
      upsertGraphEdge({
        matterName,
        fromNodeId: findingNodeId,
        toNodeId: contradictionNode.nodeId,
        edgeType: 'contradicts',
        sourceTable: 'contradictions',
        sourceHash: stableSourceHash(contradiction),
        metadata: { contradictionId: contradiction.contradictionId },
      });
    }
  }

  for (const paragraph of source.draftParagraphs) {
    const paragraphNode = upsertGraphNode({
      matterName,
      objectType: 'draft_paragraph',
      objectId: paragraph.id,
      label: paragraph.text,
      canonical: paragraph.status === 'approved',
      sourceTable: 'draft_paragraphs',
      sourceHash: stableSourceHash(paragraph),
      metadata: {
        sectionId: paragraph.section_id,
        status: paragraph.status,
        traceStatus: paragraph.trace_status,
      },
    });
    const findingIds = JSON.parse(paragraph.finding_ids_json || '[]') as string[];
    for (const findingId of findingIds) {
      const findingNodeId = findingNodes.get(findingId);
      if (!findingNodeId) continue;
      upsertGraphEdge({
        matterName,
        fromNodeId: paragraphNode.nodeId,
        toNodeId: findingNodeId,
        edgeType: 'supports',
        sourceTable: 'draft_paragraphs',
        sourceHash: stableSourceHash({ paragraphId: paragraph.id, findingId }),
        metadata: { paragraphId: paragraph.id, findingId },
      });
    }
  }

  const nodes = listGraphNodes(matterName);
  const edges = listGraphEdges(matterName);
  const completedAt = new Date().toISOString();
  const rebuild = recordGraphRebuild({
    matterName,
    startedAt,
    completedAt,
    nodeCount: nodes.length,
    edgeCount: edges.length,
    sourceHash,
    metadata: { projectionOnly: true },
  });

  return { rebuild, nodeCount: nodes.length, edgeCount: edges.length, sourceHash };
}

function readCanonicalProjectionInputs(matterName: string): {
  findings: ReturnType<typeof listFindings>;
  findingCitations: ReturnType<typeof listAllFindingCitations>;
  contradictions: ReturnType<typeof listContradictions>;
  draftParagraphs: DraftParagraphRow[];
} {
  const db = getStateDb(matterName);
  const draftParagraphs = db.prepare(`
    SELECT dp.*
    FROM draft_paragraphs dp
    JOIN draft_sections ds ON ds.id = dp.section_id
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
    ORDER BY dp.id
  `).all(matterName) as DraftParagraphRow[];

  return {
    findings: listFindings(matterName),
    findingCitations: listAllFindingCitations(matterName),
    contradictions: listContradictions(matterName),
    draftParagraphs,
  };
}

interface DraftParagraphRow {
  id: string;
  section_id: string;
  ordinal: number;
  text: string;
  status: string;
  trace_status: string;
  finding_ids_json: string;
  draft_citation_ids_json: string;
  active_revision_id: string | null;
  metadata_json: string;
}
