import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import type { SearchProvider } from './provider.js';

export interface WebSearchInput {
  query: string;
  maxResults?: number;
  sourceTypeFilter?: string;
}

export interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
  sourceType: string;
  sourceId?: number;
}

export class WebSearchTool implements Tool<WebSearchInput, WebSearchResult[]> {
  readonly name = 'web_search';
  readonly description = 'Search the web for sources matching a query. Saves results to the sources table for later citation.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'The search query' },
      maxResults: { type: 'number', description: 'Maximum number of results to return (default 10)' },
      sourceTypeFilter: { type: 'string', description: 'Filter by source type (e.g. statute, case_law, news)' },
    },
    required: ['query'],
  };

  private provider: SearchProvider | null;

  constructor(provider?: SearchProvider) {
    this.provider = provider ?? null;
  }

  setProvider(provider: SearchProvider): void {
    this.provider = provider;
  }

  isEnabled(): boolean {
    return this.provider !== null;
  }

  async call(args: WebSearchInput, context: ToolUseContext): Promise<ToolResult<WebSearchResult[]>> {
    if (!this.provider) {
      return { success: false, error: 'No search provider configured. Call setProvider() first.' };
    }

    const matterName = context.matterName ?? 'default';

    try {
      const results = await this.provider.search(args.query, {
        maxResults: args.maxResults ?? 10,
        sourceTypeFilter: args.sourceTypeFilter,
      });

      const { insertSource } = await import('./source-store.js');

      const webSearchResults: WebSearchResult[] = [];

      for (const r of results) {
        try {
          const source = insertSource({
            matterName,
            url: r.url,
            title: r.title,
            sourceType: r.sourceType,
            jurisdiction: r.jurisdiction,
            metadata: {
              snippet: r.snippet,
              query: args.query,
              searchMethod: 'web_search',
            },
          });

          webSearchResults.push({
            title: r.title,
            url: r.url,
            snippet: r.snippet,
            sourceType: r.sourceType,
            sourceId: source.id,
          });
        } catch {
          webSearchResults.push({
            title: r.title,
            url: r.url,
            snippet: r.snippet,
            sourceType: r.sourceType,
          });
        }
      }

      return {
        success: true,
        data: webSearchResults,
        output: `Found ${webSearchResults.length} results for query: "${args.query}"`,
      };
    } catch (err: unknown) {
      return {
        success: false,
        error: `Web search failed: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }
}
