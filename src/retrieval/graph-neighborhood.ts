import { getStateDb } from '../state/store.js';
import {
  getGraphNode,
  type GraphEdge,
  type GraphEdgeType,
  type GraphNode,
} from './graph-store.js';

export interface GraphNeighborhoodOptions {
  depth?: number;
  edgeTypes?: GraphEdgeType[];
  objectTypes?: string[];
}

export interface GraphNeighborhood {
  rootNodeId: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
  projectionOnly: true;
}

export function getGraphNeighbors(
  matterName: string,
  nodeId: string,
  options: GraphNeighborhoodOptions = {},
): GraphNeighborhood {
  const maxDepth = Math.max(0, options.depth ?? 1);
  const root = getGraphNode(matterName, nodeId);
  if (!root) {
    return { rootNodeId: nodeId, nodes: [], edges: [], projectionOnly: true };
  }

  const nodes = new Map<string, GraphNode>([[root.nodeId, root]]);
  const edges = new Map<string, GraphEdge>();
  const queue: Array<{ nodeId: string; depth: number }> = [{ nodeId, depth: 0 }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(`${current.nodeId}:${current.depth}`)) continue;
    visited.add(`${current.nodeId}:${current.depth}`);
    if (current.depth >= maxDepth) continue;

    for (const edge of listAdjacentEdges(matterName, current.nodeId, options.edgeTypes)) {
      edges.set(edge.edgeId, edge);
      const nextNodeId = edge.fromNodeId === current.nodeId ? edge.toNodeId : edge.fromNodeId;
      const nextNode = getGraphNode(matterName, nextNodeId);
      if (!nextNode) continue;
      if (options.objectTypes?.length && !options.objectTypes.includes(nextNode.objectType)) {
        continue;
      }
      nodes.set(nextNode.nodeId, nextNode);
      queue.push({ nodeId: nextNode.nodeId, depth: current.depth + 1 });
    }
  }

  return {
    rootNodeId: nodeId,
    nodes: [...nodes.values()].sort((a, b) => a.nodeId.localeCompare(b.nodeId)),
    edges: [...edges.values()].sort((a, b) => a.edgeId.localeCompare(b.edgeId)),
    projectionOnly: true,
  };
}

function listAdjacentEdges(
  matterName: string,
  nodeId: string,
  edgeTypes?: GraphEdgeType[],
): GraphEdge[] {
  let sql = `
    SELECT *
    FROM graph_edges
    WHERE matter_name = ?
      AND (from_node_id = ? OR to_node_id = ?)
  `;
  const params: string[] = [matterName, nodeId, nodeId];
  if (edgeTypes?.length) {
    sql += ` AND edge_type IN (${edgeTypes.map(() => '?').join(', ')})`;
    params.push(...edgeTypes);
  }
  const rows = getStateDb(matterName).prepare(sql).all(...params) as Array<{
    id: string;
    matter_name: string;
    from_node_id: string;
    to_node_id: string;
    edge_type: GraphEdgeType;
    source_table: string;
    source_hash: string;
    metadata_json: string;
  }>;
  return rows.map((row) => ({
    edgeId: row.id,
    matterName: row.matter_name,
    fromNodeId: row.from_node_id,
    toNodeId: row.to_node_id,
    edgeType: row.edge_type,
    sourceTable: row.source_table,
    sourceHash: row.source_hash,
    metadata: JSON.parse(row.metadata_json || '{}'),
  }));
}
