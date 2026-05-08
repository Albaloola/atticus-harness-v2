import { createHash, randomUUID } from 'crypto';
import { getStateDb } from '../state/store.js';

export type GraphObjectType =
  | 'evidence'
  | 'finding'
  | 'finding_citation'
  | 'contradiction'
  | 'review_task'
  | 'consensus_decision'
  | 'draft_paragraph'
  | 'export_bundle';

export type GraphEdgeType =
  | 'supports'
  | 'contradicts'
  | 'cites'
  | 'mentions'
  | 'duplicates'
  | 'supersedes'
  | 'relates_to';

export interface GraphNode {
  nodeId: string;
  matterName: string;
  objectType: GraphObjectType;
  objectId: string;
  label: string;
  canonical: boolean;
  sourceTable: string;
  sourceHash: string;
  metadata: Record<string, unknown>;
}

export interface GraphEdge {
  edgeId: string;
  matterName: string;
  fromNodeId: string;
  toNodeId: string;
  edgeType: GraphEdgeType;
  sourceTable: string;
  sourceHash: string;
  metadata: Record<string, unknown>;
}

export interface GraphRebuildRecord {
  rebuildId: string;
  matterName: string;
  startedAt: string;
  completedAt: string;
  nodeCount: number;
  edgeCount: number;
  sourceHash: string;
  metadata: Record<string, unknown>;
}

export function stableGraphId(prefix: string, parts: string[]): string {
  return `${prefix}-${createHash('sha256').update(parts.join('\u001f')).digest('hex').slice(0, 24)}`;
}

export function stableSourceHash(value: unknown): string {
  return createHash('sha256').update(JSON.stringify(sortValue(value))).digest('hex');
}

export function clearGraphProjection(matterName: string): void {
  const db = getStateDb(matterName);
  db.prepare('DELETE FROM graph_edges WHERE matter_name = ?').run(matterName);
  db.prepare('DELETE FROM graph_nodes WHERE matter_name = ?').run(matterName);
}

export function upsertGraphNode(input: Omit<GraphNode, 'nodeId'> & { nodeId?: string }): GraphNode {
  const node: GraphNode = {
    ...input,
    nodeId: input.nodeId ?? stableGraphId('node', [input.matterName, input.objectType, input.objectId]),
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO graph_nodes (
      id, matter_name, object_type, object_id, label, canonical,
      source_table, source_hash, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(matter_name, object_type, object_id) DO UPDATE SET
      label = excluded.label,
      canonical = excluded.canonical,
      source_table = excluded.source_table,
      source_hash = excluded.source_hash,
      metadata_json = excluded.metadata_json
  `).run(
    node.nodeId,
    node.matterName,
    node.objectType,
    node.objectId,
    node.label,
    node.canonical ? 1 : 0,
    node.sourceTable,
    node.sourceHash,
    JSON.stringify(node.metadata),
  );
  return node;
}

export function upsertGraphEdge(input: Omit<GraphEdge, 'edgeId'> & { edgeId?: string }): GraphEdge {
  const edge: GraphEdge = {
    ...input,
    edgeId: input.edgeId ?? stableGraphId('edge', [
      input.matterName,
      input.fromNodeId,
      input.toNodeId,
      input.edgeType,
    ]),
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO graph_edges (
      id, matter_name, from_node_id, to_node_id, edge_type,
      source_table, source_hash, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(matter_name, from_node_id, to_node_id, edge_type) DO UPDATE SET
      source_table = excluded.source_table,
      source_hash = excluded.source_hash,
      metadata_json = excluded.metadata_json
  `).run(
    edge.edgeId,
    edge.matterName,
    edge.fromNodeId,
    edge.toNodeId,
    edge.edgeType,
    edge.sourceTable,
    edge.sourceHash,
    JSON.stringify(edge.metadata),
  );
  return edge;
}

export function listGraphNodes(matterName: string): GraphNode[] {
  const rows = getStateDb(matterName)
    .prepare('SELECT * FROM graph_nodes WHERE matter_name = ? ORDER BY id')
    .all(matterName) as GraphNodeRow[];
  return rows.map(rowToGraphNode);
}

export function listGraphEdges(matterName: string): GraphEdge[] {
  const rows = getStateDb(matterName)
    .prepare('SELECT * FROM graph_edges WHERE matter_name = ? ORDER BY id')
    .all(matterName) as GraphEdgeRow[];
  return rows.map(rowToGraphEdge);
}

export function getGraphNode(matterName: string, nodeId: string): GraphNode | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM graph_nodes WHERE matter_name = ? AND id = ?')
    .get(matterName, nodeId) as GraphNodeRow | undefined;
  return row ? rowToGraphNode(row) : undefined;
}

export function getGraphNodeByObject(
  matterName: string,
  objectType: GraphObjectType,
  objectId: string,
): GraphNode | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM graph_nodes WHERE matter_name = ? AND object_type = ? AND object_id = ?')
    .get(matterName, objectType, objectId) as GraphNodeRow | undefined;
  return row ? rowToGraphNode(row) : undefined;
}

export function recordGraphRebuild(input: Omit<GraphRebuildRecord, 'rebuildId'> & {
  rebuildId?: string;
}): GraphRebuildRecord {
  const record: GraphRebuildRecord = {
    ...input,
    rebuildId: input.rebuildId ?? randomUUID(),
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO graph_rebuilds (
      id, matter_name, started_at, completed_at, node_count,
      edge_count, source_hash, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    record.rebuildId,
    record.matterName,
    record.startedAt,
    record.completedAt,
    record.nodeCount,
    record.edgeCount,
    record.sourceHash,
    JSON.stringify(record.metadata),
  );
  return record;
}

interface GraphNodeRow {
  id: string;
  matter_name: string;
  object_type: GraphObjectType;
  object_id: string;
  label: string;
  canonical: number;
  source_table: string;
  source_hash: string;
  metadata_json: string;
}

interface GraphEdgeRow {
  id: string;
  matter_name: string;
  from_node_id: string;
  to_node_id: string;
  edge_type: GraphEdgeType;
  source_table: string;
  source_hash: string;
  metadata_json: string;
}

function rowToGraphNode(row: GraphNodeRow): GraphNode {
  return {
    nodeId: row.id,
    matterName: row.matter_name,
    objectType: row.object_type,
    objectId: row.object_id,
    label: row.label,
    canonical: row.canonical === 1,
    sourceTable: row.source_table,
    sourceHash: row.source_hash,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToGraphEdge(row: GraphEdgeRow): GraphEdge {
  return {
    edgeId: row.id,
    matterName: row.matter_name,
    fromNodeId: row.from_node_id,
    toNodeId: row.to_node_id,
    edgeType: row.edge_type,
    sourceTable: row.source_table,
    sourceHash: row.source_hash,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function sortValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, inner]) => [key, sortValue(inner)]),
  );
}
