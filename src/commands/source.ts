import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { getSearchApiKey } from '../config/secrets.js';
import type { SearchEndpointConfig } from '../research/provider.js';

export async function handleSourceSearch(
  matterName: string,
  query: string,
  options: { json?: boolean }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  const apiKey = await getSearchApiKey();
  if (!apiKey) {
    console.error(chalk.red('No SEARCH_API_KEY configured. Set with: harness secrets set SEARCH_API_KEY <key>'));
    process.exit(1);
  }

  console.log(chalk.cyan(`Searching for: ${query}...`));

  try {
    const config: SearchEndpointConfig = {
      url: process.env.SEARCH_ENDPOINT || 'https://api.search.example.com/v1',
      apiKey,
    };
    const { fetchProvider } = await import('../research/provider.js');
    const provider = fetchProvider(config);
    const results = await provider.search(query, { maxResults: 10 });

    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
    } else {
      for (const r of results) {
        console.log(`  ${chalk.bold(r.title || 'Untitled')}`);
        console.log(`    ${chalk.gray(r.url)}`);
        if (r.snippet) console.log(`    ${r.snippet.substring(0, 120)}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Search failed:'), (err as Error).message);
    process.exit(1);
  }
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
