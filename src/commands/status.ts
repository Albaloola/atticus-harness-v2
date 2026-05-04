import chalk from 'chalk';
import { loadMatter, getMatterPath } from '../storage/matter.js';

export default async function statusHandler(
  matterName: string,
  options: { json?: boolean }
): Promise<void> {
  try {
    const index = await loadMatter(matterName);

    if (options.json) {
      console.log(JSON.stringify(index, null, 2));
      return;
    }

    const statusColors: Record<string, (s: string) => string> = {
      pending: chalk.yellow,
      ingesting: chalk.blue,
      analyzing: chalk.cyan,
      drafting: chalk.magenta,
      verifying: chalk.yellow,
      complete: chalk.green,
      archived: chalk.gray,
    };
    const colorFn = statusColors[index.status] || chalk.white;

    console.log('');
    console.log(chalk.bold('Matter:'), chalk.cyan(index.name));
    console.log(chalk.gray('━'.repeat(40)));
    console.log(`  Status:     ${colorFn(index.status)}`);
    console.log(`  Created:    ${formatDate(index.created)}`);
    console.log(`  Updated:    ${formatDate(index.updated)}`);
    console.log('');
    console.log(`  Evidence:   ${chalk.bold(String(index.evidenceCount))} files`);
    console.log(`  Candidates: ${chalk.bold(String(index.candidateCount))} outputs`);
    console.log(`  Artifacts:  ${chalk.bold(String(index.artifactCount))} accepted`);
    console.log('');
    console.log(`  Model:      ${chalk.gray(index.config.model || 'deepseek/deepseek-v4-flash')}`);
    console.log(`  Path:       ${chalk.gray(getMatterPath(matterName))}`);
    console.log('');

    const nextAction = getNextAction(index.status);
    if (nextAction) {
      console.log(chalk.cyan('Suggested next action:'), nextAction);
    }
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
      console.log(chalk.gray('Tip: Run'), chalk.cyan(`harness init ${matterName}`), chalk.gray('to create it.'));
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

function getNextAction(status: string): string | null {
  const actions: Record<string, string> = {
    pending: 'Ingest evidence documents: harness ingest ',
    ingesting: 'Wait for ingestion to complete, then run: harness run ',
    analyzing: 'Continue analysis: harness run ',
    drafting: 'Complete drafting: harness draft ',
    verifying: 'Verify citations: harness verify ',
  };
  return actions[status] || null;
}
