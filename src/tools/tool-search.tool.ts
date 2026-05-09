import type { Tool, ToolDefinition, ToolResult, ToolUseContext } from '../types/tool.js';

export interface ToolSearchArgs {
  query: string;
  limit?: number;
}

export interface ToolSearchResult {
  matches: ToolDefinition[];
}

export class ToolSearchTool implements Tool<ToolSearchArgs, ToolSearchResult> {
  readonly name = 'tool_search';
  readonly executionKind = 'read' as const;
  readonly isConcurrencySafe = true;
  readonly description = 'Search the currently registered Harness tool catalog by name, description, or input schema.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Search terms, e.g. "read file", "shell", "notebook", "web"' },
      limit: { type: 'number', description: 'Maximum matching tools to return. Defaults to 8.' },
    },
    required: ['query'],
  };

  constructor(private readonly listTools: () => ToolDefinition[]) {}

  isEnabled(): boolean { return true; }

  async call(args: ToolSearchArgs, _context: ToolUseContext): Promise<ToolResult<ToolSearchResult>> {
    if (!args.query?.trim()) {
      return { success: false, error: 'tool_search requires a non-empty query' };
    }

    const terms = args.query.toLowerCase().split(/\s+/).filter(Boolean);
    const limit = normalizeLimit(args.limit, 8);
    const matches = this.listTools()
      .map((tool) => ({ tool, score: scoreTool(tool, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
      .slice(0, limit)
      .map((item) => item.tool);

    return {
      success: true,
      data: { matches },
      output: matches.length
        ? matches.map((tool) => `${tool.name}: ${tool.description}`).join('\n')
        : 'No matching tools found',
    };
  }
}

function scoreTool(tool: ToolDefinition, terms: string[]): number {
  const haystack = [
    tool.name,
    tool.description,
    JSON.stringify(tool.inputSchema),
  ].join(' ').toLowerCase();
  let score = 0;
  for (const term of terms) {
    if (tool.name.toLowerCase() === term) score += 8;
    else if (tool.name.toLowerCase().includes(term)) score += 4;
    else if (haystack.includes(term)) score += 1;
  }
  return score;
}

function normalizeLimit(value: number | undefined, fallback: number): number {
  if (value === undefined || !Number.isFinite(value) || value <= 0) return fallback;
  return Math.trunc(value);
}
