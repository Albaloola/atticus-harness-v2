import chalk from 'chalk';
import { initMatter, loadMatter } from '../storage/matter.js';

export default async function initHandler(
  matterName: string,
  options: { yes?: boolean }
): Promise<void> {
  if (!/^[a-zA-Z0-9_-]+$/.test(matterName)) {
    console.error(
      chalk.red('Error:'),
      `Invalid matter name "${matterName}". Use letters, numbers, hyphens, and underscores only.`
    );
    process.exit(1);
  }

  try {
    await loadMatter(matterName);
    console.error(chalk.red('Error:'), `Matter "${matterName}" already exists.`);
    process.exit(1);
  } catch (err: unknown) {
    const msg = (err instanceof Error ? err.message : String(err));
    if (!msg.includes('not found')) {
      console.error(chalk.red('Unexpected error:'), msg);
      process.exit(1);
    }
  }

  try {
    const index = await initMatter(matterName);

    console.log(chalk.green('✓'), `Matter "${chalk.bold(matterName)}" created.`);
    console.log(`  Name:    ${chalk.bold(index.name)}`);
    console.log(`  Status:  ${chalk.yellow(index.status)}`);
    console.log(`  Created: ${index.created}`);
    console.log(`  Path:    ${chalk.cyan('matters/' + matterName + '/')}`);
    console.log('');
    console.log(chalk.gray('Next:'), `harness ingest ${chalk.cyan(matterName)} ${chalk.gray('<path>')}`);
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}
