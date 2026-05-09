import { describe, expect, it, vi } from 'vitest';

describe('Brave search provider', () => {
  it('calls Brave Web Search with subscription-token auth and domain operators', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        web: {
          results: [
            {
              title: 'Cherry judgment',
              url: 'https://caselaw.nationalarchives.gov.uk/uksc/2019/41',
              description: 'The prorogation was unlawful.',
              extra_snippets: ['The appeal was dismissed.'],
            },
            {
              title: 'Off-domain mirror',
              url: 'https://example.org/uksc-2019-41',
              description: 'This should not survive Harness domain filtering.',
            },
          ],
        },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const { braveSearchProvider } = await import('../../src/research/provider.js');
    const provider = braveSearchProvider({
      kind: 'brave',
      url: 'https://api.search.brave.com/res/v1/web/search',
      apiKey: 'brave-test',
    });

    const results = await provider.search('Cherry prorogation', {
      jurisdiction: 'Scotland',
      includeDomains: ['https://caselaw.nationalarchives.gov.uk/uksc'],
      excludeDomains: ['example.com/path'],
      maxResults: 5,
    });

    const calledUrl = new URL(fetchMock.mock.calls[0][0] as string);
    expect(calledUrl.origin + calledUrl.pathname).toBe('https://api.search.brave.com/res/v1/web/search');
    expect(calledUrl.searchParams.get('q')).toBe('Cherry prorogation (site:caselaw.nationalarchives.gov.uk) -site:example.com');
    expect(calledUrl.searchParams.get('count')).toBe('15');
    expect(calledUrl.searchParams.get('country')).toBe('gb');
    expect(fetchMock.mock.calls[0][1]).toMatchObject({
      method: 'GET',
      headers: {
        'X-Subscription-Token': 'brave-test',
      },
    });
    expect(results).toEqual([
      {
        title: 'Cherry judgment',
        url: 'https://caselaw.nationalarchives.gov.uk/uksc/2019/41',
        snippet: 'The prorogation was unlawful. [...] The appeal was dismissed.',
        sourceType: 'case_law',
        jurisdiction: 'Scotland',
        score: undefined,
        provider: 'brave',
      },
    ]);

    vi.unstubAllGlobals();
  });
});
