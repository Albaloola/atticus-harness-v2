import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { searchEvidence } from '../storage/sqlite/search.js';

export class EvidenceSearchTool implements Tool<{ query: string; topK?: number }, unknown[]> {
  readonly name = 'evidence_search';
  readonly description = 'Search indexed evidence using full-text search. Returns ranked snippets and chunk indexes; call evidence_chunk_read for full chunk content.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Search query' },
      topK: { type: 'number', description: 'Max results (default: 10)' },
    },
    required: ['query'],
  };

  async call(args: { query: string; topK?: number }, context: ToolUseContext): Promise<ToolResult<unknown[]>> {
    if (!context.matterName) {
      return { success: false, error: 'No matter context available' };
    }

    try {
      const results = searchEvidence(context.matterName, args.query, { topK: args.topK || 10 });
      const output = results.length === 0
        ? 'No matching evidence found'
        : `Found ${results.length} results:\n${results.map((r, i) => `  ${i + 1}. [${r.evidenceId}] chunk ${r.chunkIndex ?? 0} (score: ${r.score.toFixed(2)})\n     ${r.snippet}\n     Read more: evidence_chunk_read({ "evidenceId": "${r.evidenceId}", "chunkIndex": ${r.chunkIndex ?? 0} })`).join('\n')}`;
      return { success: true, data: results, output };
    } catch (err: unknown) {
      return { success: false, error: `Search failed: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
