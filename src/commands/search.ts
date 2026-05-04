import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { searchEvidence } from '../storage/sqlite/search.js';

export default async function searchHandler(
  matterName: string,
  query: string,
  options: { top?: string }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }

  if (!query || query.trim().length === 0) {
    console.error(chalk.red('Error:'), 'Search query cannot be empty.');
    process.exit(1);
  }

  const topK = Math.min(Math.max(parseInt(options.top || '10', 10) || 10, 1), 100);

  try {
    const results = searchEvidence(matterName, query, { topK });

    if (results.length === 0) {
      console.log(chalk.yellow('No results found for:'), chalk.bold(query));
      console.log(chalk.gray('Try different search terms or check that evidence has been ingested.'));
      return;
    }

    console.log('');
    console.log(chalk.cyan('Search results for:'), chalk.bold(query));
    console.log(chalk.gray(`Found ${results.length} match${results.length === 1 ? '' : 'es'}`));
    console.log(chalk.gray('━'.repeat(50)));

    for (let i = 0; i < results.length; i++) {
      const r = results[i];
      const pct = Math.round(r.score * 100);
      const scoreColor = pct >= 70 ? chalk.green : pct >= 40 ? chalk.yellow : chalk.gray;

      console.log(`\n${chalk.bold(String(i + 1))}. ${chalk.cyan(r.evidenceId)} ${scoreColor(`(${pct}%)`)}`);
      console.log(`   ${chalk.gray(r.originalPath.split('/').pop() || r.originalPath)}`);
      console.log(`   ${chalk.gray('>')} ${highlightSnippet(r.snippet, query)}`);
    }

    console.log('');
    console.log(chalk.gray('Tip: Use'), chalk.cyan(`harness evidence ${matterName}`), chalk.gray('to see all evidence.'));
  } catch (err: unknown) {
    console.error(chalk.red('Search failed:'), (err as Error).message);
    process.exit(1);
  }
}

function highlightSnippet(snippet: string, query: string): string {
  // FTS5 snippet() wraps hits in <<...>> markers
  let highlighted = snippet
    .replace(/<{2}/g, chalk.bold(chalk.yellow('')))
    .replace(/>{2}/g, chalk.reset(''));

  if (!snippet.includes('<<')) {
    const terms = query.split(/\s+/).filter(t => t.length > 2);
    for (const term of terms) {
      const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
      highlighted = highlighted.replace(regex, chalk.bold(chalk.yellow('$1')));
    }
  }

  return highlighted.length > 200 ? highlighted.substring(0, 200) + '...' : highlighted;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
