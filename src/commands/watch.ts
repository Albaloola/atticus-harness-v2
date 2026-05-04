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
    const { deriveSnapshot } = await import('../state/snapshot.js');
    const snapshot = await deriveSnapshot(matterName);
    console.log(JSON.stringify(snapshot, null, 2));
  } else {
    const { deriveSnapshot } = await import('../state/snapshot.js');
    const snapshot = await deriveSnapshot(matterName);
    console.log(`Status: ${chalk.yellow(snapshot.status)}`);
    console.log(`Phase:  ${snapshot.phase}`);
    console.log(`Active agents: ${snapshot.activeAgents.length}`);
    if (snapshot.nextActions.length > 0) {
      console.log(`Next actions: ${snapshot.nextActions.join(', ')}`);
    }
  }
}
