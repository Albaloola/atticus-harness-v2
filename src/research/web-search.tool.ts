import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { hasConfiguredSearchProvider, resolveConfiguredSearchProvider, type SearchOptions, type SearchProvider } from './provider.js';

export interface WebSearchInput {
  query: string;
  maxResults?: number;
  sourceTypeFilter?: string;
  jurisdiction?: string;
  includeDomains?: string[];
  excludeDomains?: string[];
  searchDepth?: SearchOptions['searchDepth'];
  includeRawContent?: SearchOptions['includeRawContent'];
  topic?: SearchOptions['topic'];
  timeRange?: SearchOptions['timeRange'];
}

export interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
  sourceType: string;
  sourceId?: number;
  rawContent?: string;
  score?: number;
  provider?: string;
}

export interface WebSearchToolOptions {
  autoConfigure?: boolean;
}

export class WebSearchTool implements Tool<WebSearchInput, WebSearchResult[]> {
  readonly name = 'web_search';
  readonly description = 'Search Tavily/legal web sources for a query. Supports legal domain filters and saves results to the sources table for later citation.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'The search query' },
      maxResults: { type: 'number', description: 'Maximum number of results to return (default 10)' },
      sourceTypeFilter: { type: 'string', description: 'Filter by source type (e.g. statute, case_law, news)' },
      jurisdiction: { type: 'string', description: 'Optional jurisdiction hint, e.g. Scotland, UK, United States' },
      includeDomains: {
        type: 'array',
        items: { type: 'string' },
        description: 'Restrict results to these domains, e.g. caselaw.nationalarchives.gov.uk, scotcourts.gov.uk, legislation.gov.uk',
      },
      excludeDomains: {
        type: 'array',
        items: { type: 'string' },
        description: 'Exclude these domains from results',
      },
      searchDepth: {
        type: 'string',
        enum: ['basic', 'advanced', 'fast', 'ultra-fast'],
        description: 'Tavily search depth. Use advanced for source-critical legal research.',
      },
      includeRawContent: {
        oneOf: [
          { type: 'boolean' },
          { type: 'string', enum: ['markdown', 'text'] },
        ],
        description: 'Ask Tavily to return cleaned page content for each result.',
      },
      topic: { type: 'string', enum: ['general', 'news', 'finance'], description: 'Tavily topic, default general' },
      timeRange: { type: 'string', enum: ['day', 'week', 'month', 'year', 'd', 'w', 'm', 'y'], description: 'Optional recency filter' },
    },
    required: ['query'],
  };

  private provider: SearchProvider | null;
  private autoConfigure: boolean;

  constructor(provider?: SearchProvider, options: WebSearchToolOptions = {}) {
    this.provider = provider ?? null;
    this.autoConfigure = options.autoConfigure ?? true;
  }

  setProvider(provider: SearchProvider): void {
    this.provider = provider;
  }

  isEnabled(): boolean {
    return this.provider !== null || (this.autoConfigure && hasConfiguredSearchProvider());
  }

  async call(args: WebSearchInput, context: ToolUseContext): Promise<ToolResult<WebSearchResult[]>> {
    const matterName = context.matterName ?? 'default';

    try {
      const provider = await this.resolveProvider();
      const results = await provider.search(args.query, {
        maxResults: args.maxResults ?? 10,
        sourceTypeFilter: args.sourceTypeFilter,
        jurisdiction: args.jurisdiction,
        includeDomains: args.includeDomains,
        excludeDomains: args.excludeDomains,
        searchDepth: args.searchDepth,
        includeRawContent: args.includeRawContent,
        topic: args.topic,
        timeRange: args.timeRange,
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
              rawContent: r.rawContent,
              score: r.score,
              provider: r.provider,
              query: args.query,
              searchMethod: 'web_search',
              includeDomains: args.includeDomains,
              excludeDomains: args.excludeDomains,
            },
          });

          webSearchResults.push({
            title: r.title,
            url: r.url,
            snippet: r.snippet,
            sourceType: r.sourceType,
            sourceId: source.id,
            rawContent: r.rawContent,
            score: r.score,
            provider: r.provider,
          });
        } catch {
          webSearchResults.push({
            title: r.title,
            url: r.url,
            snippet: r.snippet,
            sourceType: r.sourceType,
            rawContent: r.rawContent,
            score: r.score,
            provider: r.provider,
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

  private async resolveProvider(): Promise<SearchProvider> {
    if (this.provider) return this.provider;
    if (!this.autoConfigure) {
      throw new Error('No search provider configured. Call setProvider() first.');
    }
    this.provider = await resolveConfiguredSearchProvider();
    return this.provider;
  }
}
