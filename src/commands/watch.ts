import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';

export default async function watchHandler(
  matterName: string,
  options: { json?: boolean }
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    process.exit(1);
  }

  console.log(chalk.cyan(`Watching ${matterName}...`));
  console.log(chalk.gray('Press Ctrl+C to stop'));

  if (options.json) {
    const { buildOperatorReadModel } = await import('../observability/read-model.js');
    const model = await buildOperatorReadModel(matterName);
    console.log(JSON.stringify(model, null, 2));
  } else {
    const { buildOperatorReadModel } = await import('../observability/read-model.js');
    const { formatOperatorSummary } = await import('../tui/summary.js');
    const { formatLegalBlockers } = await import('../tui/blockers.js');
    const model = await buildOperatorReadModel(matterName);
    console.log(formatOperatorSummary(model));
    if (model.legalBlockers.total > 0) {
      console.log(formatLegalBlockers(model.legalBlockers));
    }
  }
}
