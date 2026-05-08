import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { rebuildGraphProjection } from '../retrieval/graph-projection.js';
import { getGraphNeighbors } from '../retrieval/graph-neighborhood.js';
import { getGraphNodeByObject } from '../retrieval/graph-store.js';
import { parseNumberOption } from './number-options.js';

export async function handleGraphRebuild(
  matterName: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = rebuildGraphProjection(matterName);
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(chalk.green('✓'), 'Graph projection rebuilt');
    console.log(`  Nodes: ${result.nodeCount}`);
    console.log(`  Edges: ${result.edgeCount}`);
    console.log(`  Rebuild: ${chalk.cyan(result.rebuild.rebuildId)}`);
  } catch (err: unknown) {
    console.error(chalk.red('Graph rebuild failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleGraphNeighbors(
  matterName: string,
  nodeId: string,
  options: { depth?: string; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = getGraphNeighbors(matterName, nodeId, {
      depth: parseNumberOption(options.depth, '--depth', {
        defaultValue: 1,
        integer: true,
        min: 0,
      }),
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(chalk.cyan(`Neighbors for ${nodeId}`));
    console.log(`  Nodes: ${result.nodes.length}`);
    console.log(`  Edges: ${result.edges.length}`);
    for (const node of result.nodes.slice(0, 10)) {
      console.log(`  - ${node.nodeId}: ${node.objectType}/${node.objectId}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Graph query failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleGraphExplain(
  matterName: string,
  objectType: string,
  objectId: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const node = getGraphNodeByObject(matterName, objectType as never, objectId);
    const result = node
      ? getGraphNeighbors(matterName, node.nodeId, { depth: 1 })
      : { node, neighbors: undefined };
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    if (!node) {
      console.log(chalk.yellow('No graph node found for object:'), `${objectType}/${objectId}`);
      return;
    }
    console.log(chalk.cyan(`${objectType}/${objectId}`));
    console.log(`  Node: ${node.nodeId}`);
    console.log(`  Projection only: ${chalk.green('yes')}`);
    const neighbors = result as ReturnType<typeof getGraphNeighbors>;
    console.log(`  Neighbor nodes: ${neighbors.nodes.length}`);
  } catch (err: unknown) {
    console.error(chalk.red('Graph explain failed:'), (err as Error).message);
    process.exit(1);
  }
}
