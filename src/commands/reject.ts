import chalk from 'chalk';
import { rejectCandidate } from '../storage/candidate.js';
import { loadMatter } from '../storage/matter.js';

export default async function rejectHandler(
  matterName: string,
  candidateId: string,
  options: { reason?: string }
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

  try {
    await rejectCandidate(matterName, candidateId, options.reason);

    console.log(chalk.yellow('○'), `Candidate "${chalk.bold(candidateId)}" rejected.`);
    if (options.reason) {
      console.log(`  Reason: ${chalk.gray(options.reason)}`);
    } else {
      console.log(chalk.gray('  No reason provided. Use --reason to add one.'));
    }
    console.log('');
    console.log(chalk.gray('The candidate remains in _candidates/ for reference.'));
  } catch (err: unknown) {
    console.error(chalk.red('Failed to reject:'), (err as Error).message);
    process.exit(1);
  }
}
