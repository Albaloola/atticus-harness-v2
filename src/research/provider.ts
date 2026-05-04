export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  sourceType: string;
  jurisdiction?: string;
}

export interface SearchOptions {
  maxResults?: number;
  sourceTypeFilter?: string;
  jurisdiction?: string;
}

export interface SearchProvider {
  search(query: string, options?: SearchOptions): Promise<SearchResult[]>;
}

export interface SearchEndpointConfig {
  url: string;
  apiKey?: string;
  defaultMaxResults?: number;
  defaultSourceType?: string;
}

export class MockSearchProvider implements SearchProvider {
  private results: SearchResult[];

  constructor(results?: SearchResult[]) {
    this.results = results ?? [];
  }

  setResults(results: SearchResult[]): void {
    this.results = results;
  }

  async search(query: string, options?: SearchOptions): Promise<SearchResult[]> {
    const filtered = this.results.filter((r) => {
      const matchesFilter =
        !options?.sourceTypeFilter ||
        r.sourceType === options.sourceTypeFilter;
      const matchesJurisdiction =
        !options?.jurisdiction ||
        r.jurisdiction === options?.jurisdiction;
      const matchesQuery =
        !query ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.snippet.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesJurisdiction && matchesQuery;
    });

    const max = options?.maxResults ?? filtered.length;
    return filtered.slice(0, max);
  }
}

export function fetchProvider(config: SearchEndpointConfig): SearchProvider {
  const { url, apiKey, defaultMaxResults, defaultSourceType } = config;

  return {
    async search(query: string, options?: SearchOptions): Promise<SearchResult[]> {
      const maxResults = options?.maxResults ?? defaultMaxResults ?? 10;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            query,
            maxResults,
            sourceTypeFilter: options?.sourceTypeFilter ?? defaultSourceType,
            jurisdiction: options?.jurisdiction,
          }),
        });

        if (!response.ok) {
          throw new Error(`Search endpoint returned ${response.status}: ${response.statusText}`);
        }

        const data = (await response.json()) as { results?: SearchResult[] };
        const results = data.results ?? [];

        return results.map((r) => ({
          title: r.title ?? '',
          url: r.url ?? '',
          snippet: r.snippet ?? '',
          sourceType: r.sourceType ?? defaultSourceType ?? 'web',
          jurisdiction: r.jurisdiction,
        }));
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        throw new Error(`Search failed: ${message}`);
      }
    },
  };
}
