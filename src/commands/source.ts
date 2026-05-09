import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { getBraveSearchApiKey, getSearchApiKey, getSecret, getTavilyApiKey, saveSecret } from '../config/secrets.js';
import { loadGlobalConfig, setConfigValue } from '../config/loader.js';
import { BRAVE_SEARCH_URL, hasConfiguredSearchProvider, TAVILY_SEARCH_URL } from '../research/provider.js';
import { WebSearchTool, type WebSearchInput } from '../research/web-search.tool.js';
import type { SearchProviderName } from '../config/schema.js';

export async function handleSourceSearch(
  matterName: string,
  query: string,
  options: {
    json?: boolean;
    maxResults?: string;
    sourceType?: string;
    jurisdiction?: string;
    includeDomain?: string[];
    excludeDomain?: string[];
    searchDepth?: WebSearchInput['searchDepth'];
    rawContent?: boolean;
    topic?: WebSearchInput['topic'];
    timeRange?: WebSearchInput['timeRange'];
  }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  if (!hasConfiguredSearchProvider()) {
    console.error(chalk.red('No legal web search key configured.'));
    console.error('Set with: harness control-panel search auth <key>');
    console.error('Or Brave:  harness control-panel search auth --provider brave <key>');
    process.exit(1);
  }

  console.log(chalk.cyan(`Searching for: ${query}...`));

  try {
    const maxResults = parsePositiveInt(options.maxResults, 10);
    const tool = new WebSearchTool();
    const result = await tool.call(
      {
        query,
        maxResults,
        sourceTypeFilter: options.sourceType,
        jurisdiction: options.jurisdiction,
        includeDomains: options.includeDomain,
        excludeDomains: options.excludeDomain,
        searchDepth: options.searchDepth,
        includeRawContent: options.rawContent ? 'markdown' : false,
        topic: options.topic,
        timeRange: options.timeRange,
      },
      {
        matterName,
        getEvidencePath: (_id: string) => '',
        getExtractionPath: (_id: string) => '',
        getConfig: () => ({}),
        log: () => {},
      },
    );

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Search failed without details');
    }

    if (options.json) {
      console.log(JSON.stringify(result.data, null, 2));
    } else {
      for (const r of result.data) {
        console.log(`  ${chalk.bold(r.title || 'Untitled')}`);
        console.log(`    ${chalk.gray(r.url)}`);
        if (r.sourceId) console.log(`    ${chalk.gray(`source #${r.sourceId}`)}`);
        if (r.snippet) console.log(`    ${r.snippet.substring(0, 120)}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Search failed:'), (err as Error).message);
    process.exit(1);
  }
}

export interface SearchPanelState {
  provider: 'tavily' | 'brave' | 'generic' | 'none';
  configuredProvider: SearchProviderName;
  ready: boolean;
  auth: {
    state: 'OK' | 'MISSING';
    detail: string;
  };
  api: string;
  project?: string;
  policy: {
    webTools: 'allowed' | 'blocked';
    detail: string;
  };
  setup: {
    authCommand: string;
    enableCommand: string;
    testCommand: string;
  };
}

export async function buildSearchPanelState(): Promise<SearchPanelState> {
  const { config } = await loadGlobalConfig();
  const configuredProvider = config.search?.provider ?? 'tavily';
  const tavilyKey = await getTavilyApiKey();
  const braveKey = await getBraveSearchApiKey();
  const legacySearchKey = await getSearchApiKey();
  const configuredKey = config.search?.keyName ? await getSecret(config.search.keyName) : undefined;
  const endpoint = process.env.SEARCH_ENDPOINT ?? config.search?.endpoint;
  const provider = providerForPanel(configuredProvider, endpoint);
  const hasAuth = Boolean(
    configuredKey ??
    (provider === 'brave' ? braveKey ?? legacySearchKey : undefined) ??
    (provider === 'tavily' ? tavilyKey ?? legacySearchKey : undefined) ??
    (provider === 'generic' ? legacySearchKey : undefined),
  );
  const webToolsAllowed = Boolean(config.autonomy.autoApproveWeb);

  return {
    provider: hasAuth ? provider : 'none',
    configuredProvider,
    ready: hasAuth && webToolsAllowed,
    auth: hasAuth
      ? { state: 'OK', detail: authDetail(provider, config.search?.keyName, Boolean(configuredKey), Boolean(tavilyKey), Boolean(braveKey), Boolean(legacySearchKey)) }
      : { state: 'MISSING', detail: `Set ${keyNameForProvider(provider)} with control-panel search auth` },
    api: endpoint ?? defaultEndpointForProvider(provider),
    project: process.env.TAVILY_PROJECT ?? config.search?.project,
    policy: {
      webTools: webToolsAllowed ? 'allowed' : 'blocked',
      detail: webToolsAllowed
        ? 'Harness agent loops may call web_search/web_fetch with audit events.'
        : 'Harness agent loops will block web_search/web_fetch until autoApproveWeb is enabled.',
    },
    setup: {
      authCommand: provider === 'brave'
        ? 'harness control-panel search auth --provider brave <brave-key>'
        : 'harness control-panel search auth <tavily-key>',
      enableCommand: 'harness control-panel search enable',
      testCommand: 'harness source search <matter> "site:caselaw.nationalarchives.gov.uk prorogation" --include-domain caselaw.nationalarchives.gov.uk --json',
    },
  };
}

export async function handleSearchPanelShow(options: { json?: boolean } = {}): Promise<void> {
  const state = await buildSearchPanelState();
  if (options.json) {
    console.log(JSON.stringify(state, null, 2));
    return;
  }
  printSearchPanel(state);
}

export async function handleSearchAuth(key?: string, options: { provider?: string } = {}): Promise<void> {
  const provider = normalizeSearchProviderName(options.provider);
  if (!key) {
    await handleSearchPanelShow();
    console.log(`Set Tavily with: ${chalk.cyan('harness control-panel search auth <tavily-key>')}`);
    console.log(`Set Brave with:  ${chalk.cyan('harness control-panel search auth --provider brave <brave-key>')}`);
    return;
  }
  const secretKey = keyNameForProvider(provider);
  await saveSecret(secretKey, key);
  console.log(`${providerLabel(provider)} auth saved as ${secretKey}`);
}

export async function handleSearchUse(providerName: string): Promise<void> {
  const provider = normalizeSearchProviderName(providerName);
  await setConfigValue('search.provider', provider);
  await setConfigValue('search.endpoint', defaultEndpointForProvider(provider));
  await setConfigValue('search.keyName', keyNameForProvider(provider));
  console.log(`Search provider set to ${providerLabel(provider)}.`);
}

export async function handleSearchEnable(): Promise<void> {
  await setConfigValue('autonomy.autoApproveWeb', true);
  console.log('Enabled web_search/web_fetch for Harness agent loops with audit events.');
}

export async function handleSearchDisable(): Promise<void> {
  await setConfigValue('autonomy.autoApproveWeb', false);
  console.log('Disabled automatic web_search/web_fetch in Harness agent loops.');
}

export function printSearchPanel(state: SearchPanelState): void {
  console.log(chalk.bold.cyan('Search'));
  console.log(`  Provider: ${state.provider}`);
  console.log(`  Config:   ${state.configuredProvider}`);
  console.log(`  Ready:    ${state.ready ? chalk.green('yes') : chalk.yellow('no')}`);
  console.log(`  Auth:     ${state.auth.state} — ${state.auth.detail}`);
  console.log(`  API:      ${state.api}`);
  if (state.project) console.log(`  Project:  ${state.project}`);
  console.log(`  Tools:    ${state.policy.webTools} — ${state.policy.detail}`);
  if (!state.ready) {
    console.log(`  Setup:    ${state.setup.authCommand}`);
    console.log(`            ${state.setup.enableCommand}`);
  }
}

function providerForPanel(provider: SearchProviderName, endpoint: string | undefined): SearchPanelState['provider'] {
  if (endpoint?.includes('api.search.brave.com')) return 'brave';
  if (endpoint && !endpoint.includes('api.tavily.com')) return 'generic';
  return provider;
}

function normalizeSearchProviderName(value: string | undefined): SearchProviderName {
  if (value === 'brave' || value === 'generic' || value === 'tavily') return value;
  return 'tavily';
}

function keyNameForProvider(provider: SearchProviderName | SearchPanelState['provider']): string {
  if (provider === 'brave') return 'BRAVE_SEARCH_API_KEY';
  if (provider === 'generic') return 'SEARCH_API_KEY';
  return 'TAVILY_API_KEY';
}

function defaultEndpointForProvider(provider: SearchProviderName | SearchPanelState['provider']): string {
  if (provider === 'brave') return BRAVE_SEARCH_URL;
  if (provider === 'generic') return process.env.SEARCH_ENDPOINT ?? 'https://api.search.example.com/v1';
  return TAVILY_SEARCH_URL;
}

function providerLabel(provider: SearchProviderName | SearchPanelState['provider']): string {
  if (provider === 'brave') return 'Brave Search';
  if (provider === 'generic') return 'Generic search';
  return 'Tavily';
}

function authDetail(
  provider: SearchPanelState['provider'],
  configuredKeyName: string | undefined,
  hasConfiguredKey: boolean,
  hasTavilyKey: boolean,
  hasBraveKey: boolean,
  hasLegacyKey: boolean,
): string {
  if (hasConfiguredKey && configuredKeyName) return `${configuredKeyName} configured`;
  if (provider === 'brave' && hasBraveKey) return 'BRAVE_SEARCH_API_KEY configured';
  if (provider === 'tavily' && hasTavilyKey) return 'TAVILY_API_KEY configured';
  if (hasLegacyKey) return 'SEARCH_API_KEY configured for compatibility';
  return 'configured';
}

export async function handleSourceFetch(
  matterName: string,
  url: string,
  options: { json?: boolean }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  console.log(chalk.cyan(`Fetching ${url}...`));

  try {
    const { WebFetchTool } = await import('../research/web-fetch.tool.js');
    const tool = new WebFetchTool();
    const result = await tool.call(
      { url, matterName },
      {
        matterName,
        getEvidencePath: (_id: string) => '',
        getExtractionPath: (_id: string) => '',
        getConfig: () => ({}),
        log: () => {},
      },
    );

    if (!result.success || !result.data) {
      console.error(chalk.red('Fetch failed:'), result.error || 'Unknown error');
      return;
    }

    if (options.json) {
      console.log(JSON.stringify(result.data, null, 2));
    } else {
      console.log(chalk.green('Fetched'), `SHA256: ${result.data.sha256.substring(0, 16)}...`);
      console.log(`  Title: ${result.data.title || 'Untitled'}`);
      console.log(`  Text length: ${result.data.textLength}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Fetch failed:'), (err as Error).message);
    process.exit(1);
  }
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export async function handleSourceList(
  matterName: string,
  options: { json?: boolean }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  try {
    const { listSources } = await import('../research/source-store.js');
    const sources = listSources(matterName);

    if (options.json) {
      console.log(JSON.stringify(sources, null, 2));
    } else if (sources.length === 0) {
      console.log(chalk.gray('No sources stored.'));
    } else {
      for (const s of sources) {
        console.log(`${chalk.bold(s.title || 'Untitled')}`);
        console.log(`  URL: ${chalk.gray(s.url)}`);
        console.log(`  Type: ${s.source_type}`);
        console.log(`  Fetched: ${s.fetched_at}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}
