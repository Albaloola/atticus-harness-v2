import { existsSync, readFileSync } from 'fs';
import { tavily, type TavilySearchOptions } from '@tavily/core';
import { loadGlobalConfig } from '../config/loader.js';
import { getBraveSearchApiKey, getSearchApiKey, getSecret, getTavilyApiKey } from '../config/secrets.js';
import { getSecretsPath } from '../config/paths.js';
import type { SearchProviderName } from '../config/schema.js';

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  sourceType: string;
  jurisdiction?: string;
  rawContent?: string;
  score?: number;
  provider?: string;
}

export interface SearchOptions {
  maxResults?: number;
  sourceTypeFilter?: string;
  jurisdiction?: string;
  includeDomains?: string[];
  excludeDomains?: string[];
  searchDepth?: 'basic' | 'advanced' | 'fast' | 'ultra-fast';
  includeRawContent?: boolean | 'markdown' | 'text';
  topic?: 'general' | 'news' | 'finance';
  timeRange?: 'day' | 'week' | 'month' | 'year' | 'd' | 'w' | 'm' | 'y';
  country?: string;
  includeAnswer?: boolean | 'basic' | 'advanced';
}

export interface SearchProvider {
  search(query: string, options?: SearchOptions): Promise<SearchResult[]>;
}

export interface SearchEndpointConfig {
  kind?: 'generic' | 'tavily' | 'brave';
  url: string;
  apiKey?: string;
  defaultMaxResults?: number;
  defaultSourceType?: string;
  projectId?: string;
}

export const TAVILY_SEARCH_URL = 'https://api.tavily.com/search';
export const BRAVE_SEARCH_URL = 'https://api.search.brave.com/res/v1/web/search';
export const TAVILY_PROJECT_ENV = 'TAVILY_PROJECT';

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

export async function resolveConfiguredSearchProvider(): Promise<SearchProvider> {
  const searchConfig = await loadSearchConfig();
  const providerName = normalizeSearchProviderName(process.env.SEARCH_PROVIDER ?? searchConfig.provider);
  const searchEndpoint = process.env.SEARCH_ENDPOINT ?? searchConfig.endpoint;
  const keyName = searchConfig.keyName ?? keyNameForProvider(providerName);

  if (providerName === 'brave' || (searchEndpoint && isBraveEndpoint(searchEndpoint))) {
    const braveKeyName = providerName === 'brave' ? keyName : 'BRAVE_SEARCH_API_KEY';
    const apiKey = await getKeyByName(braveKeyName) ?? await getBraveSearchApiKey() ?? await getSearchApiKey();
    if (!apiKey) {
      throw new Error('No Brave Search API key configured. Set it with: harness control-panel search auth --provider brave <key>');
    }
    return braveSearchProvider({
      kind: 'brave',
      url: searchEndpoint || BRAVE_SEARCH_URL,
      apiKey,
      defaultMaxResults: searchConfig.defaultMaxResults,
    });
  }

  if (providerName === 'generic' || (searchEndpoint && !isTavilyEndpoint(searchEndpoint))) {
    const genericKeyName = providerName === 'generic' ? keyName : 'SEARCH_API_KEY';
    const apiKey = await getKeyByName(genericKeyName) ?? await getSearchApiKey();
    if (!apiKey) {
      throw new Error('No SEARCH_API_KEY configured for SEARCH_ENDPOINT. Set it with: harness secrets set SEARCH_API_KEY <key>');
    }
    return fetchProvider({
      kind: 'generic',
      url: searchEndpoint || 'https://api.search.example.com/v1',
      apiKey,
      defaultMaxResults: searchConfig.defaultMaxResults,
    });
  }

  const apiKey = await getKeyByName(keyName) ?? await getTavilyApiKey() ?? await getSearchApiKey();
  if (!apiKey) {
    throw new Error('No Tavily API key configured. Set it with: harness control-panel search auth <key> or export TAVILY_API_KEY=<key>');
  }

  return tavilySearchProvider({
    kind: 'tavily',
    url: searchEndpoint || TAVILY_SEARCH_URL,
    apiKey,
    projectId: process.env[TAVILY_PROJECT_ENV] ?? searchConfig.project,
    defaultMaxResults: searchConfig.defaultMaxResults,
  });
}

export function hasConfiguredSearchProvider(): boolean {
  const searchEndpoint = process.env.SEARCH_ENDPOINT;
  if (searchEndpoint && isBraveEndpoint(searchEndpoint)) {
    return Boolean(process.env.BRAVE_SEARCH_API_KEY || process.env.SEARCH_API_KEY || readSecretSync('BRAVE_SEARCH_API_KEY') || readSecretSync('SEARCH_API_KEY'));
  }
  if (process.env.SEARCH_PROVIDER === 'brave') {
    return Boolean(process.env.BRAVE_SEARCH_API_KEY || readSecretSync('BRAVE_SEARCH_API_KEY'));
  }
  if (searchEndpoint && !isTavilyEndpoint(searchEndpoint)) {
    return Boolean(process.env.SEARCH_API_KEY || process.env.BRAVE_SEARCH_API_KEY || readSecretSync('SEARCH_API_KEY') || readSecretSync('BRAVE_SEARCH_API_KEY'));
  }
  return Boolean(
    process.env.TAVILY_API_KEY ||
    process.env.BRAVE_SEARCH_API_KEY ||
    process.env.SEARCH_API_KEY ||
    readSecretSync('TAVILY_API_KEY') ||
    readSecretSync('BRAVE_SEARCH_API_KEY') ||
    readSecretSync('SEARCH_API_KEY'),
  );
}

export function fetchProvider(config: SearchEndpointConfig): SearchProvider {
  const { url, apiKey, defaultMaxResults, defaultSourceType } = config;
  if (config.kind === 'brave' || isBraveEndpoint(url)) {
    return braveSearchProvider(config);
  }
  if (config.kind === 'tavily' || isTavilyEndpoint(url)) {
    return tavilySearchProvider(config);
  }

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
        const mapped = results.map((r) => ({
          title: r.title ?? '',
          url: r.url ?? '',
          snippet: r.snippet ?? '',
          sourceType: r.sourceType ?? defaultSourceType ?? 'web',
          jurisdiction: r.jurisdiction,
        }));
        return applyResultDomainFilters(mapped, options).slice(0, maxResults);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        throw new Error(`Search failed: ${message}`);
      }
    },
  };
}

export function tavilySearchProvider(config: SearchEndpointConfig): SearchProvider {
  const { apiKey, defaultMaxResults, defaultSourceType, projectId, url } = config;
  if (!apiKey) {
    throw new Error('Tavily API key is required');
  }
  const client = tavily({
    apiKey,
    apiBaseURL: tavilyApiBaseUrl(url),
    projectId,
    clientName: 'atticus-harness-v2',
  });

  return {
    async search(query: string, options?: SearchOptions): Promise<SearchResult[]> {
      const maxResults = options?.maxResults ?? defaultMaxResults ?? 10;
      const searchOptions: TavilySearchOptions = {
        searchDepth: options?.searchDepth ?? 'advanced',
        maxResults,
        topic: options?.topic ?? 'general',
        includeDomains: cleanDomains(options?.includeDomains),
        excludeDomains: cleanDomains(options?.excludeDomains),
        includeRawContent: normalizeRawContent(options?.includeRawContent),
        timeRange: options?.timeRange,
        country: options?.country ?? countryFromJurisdiction(options?.jurisdiction),
        includeAnswer: options?.includeAnswer,
        includeUsage: true,
      };

      try {
        const data = await client.search(query, searchOptions);
        const mapped = (data.results ?? []).map((result) => ({
          title: result.title ?? '',
          url: result.url ?? '',
          snippet: result.content ?? '',
          rawContent: result.rawContent,
          sourceType: options?.sourceTypeFilter ?? defaultSourceType ?? inferLegalSourceType(result.url),
          jurisdiction: options?.jurisdiction,
          score: result.score,
          provider: 'tavily',
        }));
        return applyResultDomainFilters(mapped, options).slice(0, maxResults);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        throw new Error(`Tavily search failed: ${message}`);
      }
    },
  };
}

export function braveSearchProvider(config: SearchEndpointConfig): SearchProvider {
  const { apiKey, defaultMaxResults, defaultSourceType, url } = config;
  if (!apiKey) {
    throw new Error('Brave Search API key is required');
  }
  return {
    async search(query: string, options?: SearchOptions): Promise<SearchResult[]> {
      const maxResults = Math.min(options?.maxResults ?? defaultMaxResults ?? 10, 20);
      const requestCount = hasDomainFilters(options)
        ? Math.min(Math.max(maxResults * 3, maxResults), 20)
        : maxResults;
      const searchUrl = new URL(url || BRAVE_SEARCH_URL);
      searchUrl.searchParams.set('q', applyDomainOperators(query, options));
      searchUrl.searchParams.set('count', String(requestCount));
      searchUrl.searchParams.set('search_lang', 'en');
      const country = braveCountryFromJurisdiction(options?.country ?? options?.jurisdiction);
      if (country) searchUrl.searchParams.set('country', country);

      try {
        const response = await fetch(searchUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Accept-Encoding': 'gzip',
            'X-Subscription-Token': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`Brave Search returned ${response.status}: ${response.statusText}`);
        }

        const data = (await response.json()) as BraveSearchResponse;
        const results = data.web?.results ?? data.results ?? [];
        const mapped = results.map((result) => ({
          title: result.title ?? '',
          url: result.url ?? '',
          snippet: [result.description, ...(result.extra_snippets ?? [])].filter(Boolean).join(' [...] '),
          sourceType: options?.sourceTypeFilter ?? defaultSourceType ?? inferLegalSourceType(result.url ?? ''),
          jurisdiction: options?.jurisdiction,
          score: result.score,
          provider: 'brave',
        }));
        return applyResultDomainFilters(mapped, options).slice(0, maxResults);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        throw new Error(`Brave search failed: ${message}`);
      }
    },
  };
}

interface BraveSearchResponse {
  web?: { results?: BraveSearchResult[] };
  results?: BraveSearchResult[];
}

interface BraveSearchResult {
  title?: string;
  url?: string;
  description?: string;
  extra_snippets?: string[];
  score?: number;
}

function isTavilyEndpoint(url: string): boolean {
  return url.includes('api.tavily.com');
}

function isBraveEndpoint(url: string): boolean {
  return url.includes('api.search.brave.com');
}

function cleanDomains(domains: string[] | undefined): string[] | undefined {
  if (!domains) return undefined;
  const cleaned = domains
    .map((domain) => domain.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, ''))
    .filter(Boolean);
  return cleaned.length > 0 ? Array.from(new Set(cleaned)) : undefined;
}

function normalizeRawContent(value: SearchOptions['includeRawContent']): false | 'markdown' | 'text' {
  if (value === true) return 'markdown';
  if (value === 'markdown' || value === 'text') return value;
  return false;
}

function tavilyApiBaseUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (!isTavilyEndpoint(url)) return undefined;
  return url.replace(/\/search\/?$/, '');
}

function countryFromJurisdiction(jurisdiction: string | undefined): string | undefined {
  if (!jurisdiction) return undefined;
  const normalized = jurisdiction.toLowerCase();
  if (['scotland', 'uk', 'united kingdom', 'england', 'wales'].includes(normalized)) {
    return 'united kingdom';
  }
  if (['us', 'usa', 'united states'].includes(normalized)) {
    return 'united states';
  }
  return undefined;
}

function braveCountryFromJurisdiction(jurisdiction: string | undefined): string | undefined {
  if (!jurisdiction) return undefined;
  const normalized = jurisdiction.toLowerCase();
  if (['scotland', 'uk', 'united kingdom', 'england', 'wales', 'great britain', 'gb'].includes(normalized)) {
    return 'gb';
  }
  if (['us', 'usa', 'united states'].includes(normalized)) {
    return 'us';
  }
  return normalized.length === 2 ? normalized : undefined;
}

function applyDomainOperators(query: string, options?: SearchOptions): string {
  const includeDomains = cleanDomains(options?.includeDomains);
  const excludeDomains = cleanDomains(options?.excludeDomains);
  const includeClause = includeDomains && includeDomains.length > 0
    ? `(${includeDomains.map((domain) => `site:${domain}`).join(' OR ')})`
    : '';
  const excludeClause = excludeDomains && excludeDomains.length > 0
    ? excludeDomains.map((domain) => `-site:${domain}`).join(' ')
    : '';
  return [query, includeClause, excludeClause].filter(Boolean).join(' ').trim();
}

function applyResultDomainFilters(results: SearchResult[], options?: SearchOptions): SearchResult[] {
  const includeDomains = cleanDomains(options?.includeDomains);
  const excludeDomains = cleanDomains(options?.excludeDomains);
  if (!includeDomains?.length && !excludeDomains?.length) return results;

  return results.filter((result) => {
    const hostname = hostnameFromUrl(result.url);
    if (!hostname) return false;
    if (includeDomains?.length && !includeDomains.some((domain) => hostnameMatchesDomain(hostname, domain))) {
      return false;
    }
    if (excludeDomains?.some((domain) => hostnameMatchesDomain(hostname, domain))) {
      return false;
    }
    return true;
  });
}

function hasDomainFilters(options?: SearchOptions): boolean {
  return Boolean(cleanDomains(options?.includeDomains)?.length || cleanDomains(options?.excludeDomains)?.length);
}

function hostnameFromUrl(url: string): string | undefined {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    return undefined;
  }
}

function hostnameMatchesDomain(hostname: string, domain: string): boolean {
  const normalizedDomain = domain.toLowerCase().replace(/^www\./, '');
  return hostname === normalizedDomain || hostname.endsWith(`.${normalizedDomain}`);
}

function inferLegalSourceType(url: string): string {
  const lower = url.toLowerCase();
  if (
    lower.includes('caselaw.nationalarchives.gov.uk') ||
    lower.includes('bailii.org') ||
    lower.includes('supremecourt.uk') ||
    lower.includes('scotcourts.gov.uk')
  ) {
    return 'case_law';
  }
  if (
    lower.includes('legislation.gov.uk') ||
    lower.includes('gov.scot') ||
    lower.includes('parliament.scot')
  ) {
    return 'legal_authority';
  }
  return 'web';
}

async function loadSearchConfig(): Promise<{
  provider: SearchProviderName;
  endpoint?: string;
  keyName?: string;
  project?: string;
  defaultMaxResults?: number;
}> {
  try {
    const { config } = await loadGlobalConfig();
    return {
      provider: config.search?.provider ?? 'tavily',
      endpoint: config.search?.endpoint,
      keyName: config.search?.keyName,
      project: config.search?.project,
      defaultMaxResults: config.search?.defaultMaxResults,
    };
  } catch {
    return { provider: 'tavily', endpoint: TAVILY_SEARCH_URL, keyName: 'TAVILY_API_KEY' };
  }
}

function normalizeSearchProviderName(value: string | undefined): SearchProviderName {
  if (value === 'brave' || value === 'generic' || value === 'tavily') return value;
  return 'tavily';
}

function keyNameForProvider(provider: SearchProviderName): string {
  if (provider === 'brave') return 'BRAVE_SEARCH_API_KEY';
  if (provider === 'generic') return 'SEARCH_API_KEY';
  return 'TAVILY_API_KEY';
}

async function getKeyByName(keyName: string | undefined): Promise<string | undefined> {
  if (!keyName) return undefined;
  return process.env[keyName] ?? await getSecret(keyName);
}

function readSecretSync(key: string): string | undefined {
  try {
    const path = getSecretsPath();
    if (!existsSync(path)) return undefined;
    const raw = readFileSync(path, 'utf-8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) continue;
      const entryKey = trimmed.slice(0, eqIdx).trim();
      if (entryKey !== key) continue;
      let value = trimmed.slice(eqIdx + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      return value;
    }
  } catch {
    return undefined;
  }
  return undefined;
}
