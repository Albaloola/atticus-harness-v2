import { describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  search: vi.fn(),
}));

vi.mock('@tavily/core', () => ({
  tavily: vi.fn(() => ({
    search: mocks.search,
  })),
}));

describe('Tavily search provider', () => {
  it('maps Harness legal search options to Tavily SDK options and normalizes results', async () => {
    mocks.search.mockResolvedValueOnce({
      results: [
        {
          title: 'Miller / Cherry',
          url: 'https://caselaw.nationalarchives.gov.uk/uksc/2019/41',
          content: 'The prorogation was unlawful.',
          rawContent: '# Judgment',
          score: 0.97,
        },
        {
          title: 'Off-domain commentary',
          url: 'https://example.org/miller-cherry',
          content: 'This should not survive Harness domain filtering.',
          score: 0.1,
        },
      ],
    });

    const { tavilySearchProvider } = await import('../../src/research/provider.js');
    const provider = tavilySearchProvider({
      kind: 'tavily',
      url: 'https://api.tavily.com/search',
      apiKey: 'tvly-test',
      projectId: 'atticus-test',
    });

    const results = await provider.search('Cherry prorogation', {
      jurisdiction: 'Scotland',
      includeDomains: ['https://caselaw.nationalarchives.gov.uk/uksc'],
      excludeDomains: ['example.com/path'],
      searchDepth: 'advanced',
      includeRawContent: true,
      sourceTypeFilter: 'case_law',
      maxResults: 3,
    });

    expect(mocks.search).toHaveBeenCalledWith('Cherry prorogation', {
      searchDepth: 'advanced',
      maxResults: 3,
      topic: 'general',
      includeDomains: ['caselaw.nationalarchives.gov.uk'],
      excludeDomains: ['example.com'],
      includeRawContent: 'markdown',
      timeRange: undefined,
      country: 'united kingdom',
      includeAnswer: undefined,
      includeUsage: true,
    });
    expect(results).toEqual([
      {
        title: 'Miller / Cherry',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2019/41',
        snippet: 'The prorogation was unlawful.',
        rawContent: '# Judgment',
        sourceType: 'case_law',
        jurisdiction: 'Scotland',
        score: 0.97,
        provider: 'tavily',
      },
    ]);
  });
});
