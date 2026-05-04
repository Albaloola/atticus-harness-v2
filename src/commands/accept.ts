import chalk from 'chalk';
import { acceptCandidate } from '../storage/candidate.js';
import { loadMatter } from '../storage/matter.js';
import { appendEvent } from '../state/events.js';

export default async function acceptHandler(
  matterName: string,
  candidateId: string
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
    const artifact = await acceptCandidate(matterName, candidateId);

    try {
      await appendEvent({ matterName, type: 'draft.accepted', data: { candidateId, artifactId: artifact.id }, source: 'tool' });
    } catch {}

    console.log(chalk.green('✓'), `Candidate "${chalk.bold(candidateId)}" accepted.`);
    console.log(`  Promoted to artifact: ${chalk.cyan(artifact.id)}`);
    console.log(`  Type: ${artifact.type}`);
    console.log(`  Title: ${artifact.title}`);
    console.log(`  Citations: ${artifact.citations.length}`);
    console.log('');
    console.log(chalk.gray('The output is now a canonical artifact.'));
  } catch (err: unknown) {
    console.error(chalk.red('Failed to accept:'), (err as Error).message);
    process.exit(1);
  }
}
