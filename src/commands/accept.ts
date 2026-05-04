import chalk from 'chalk';
import { acceptCandidate, listCandidates } from '../storage/candidate.js';
import { loadMatter } from '../storage/matter.js';
import { appendEvent } from '../state/events.js';
import type { CandidateArtifact } from '../types/artifact.js';

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

export async function handleAcceptAuto(
  matterName: string,
  candidateId: string,
  options: { json?: boolean }
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
    const { tryAutoAccept } = await import('../acceptance/auto-accept.js');
    const { resolveConfig } = await import('../config/loader.js');
    const config = await resolveConfig({ matterName });

    const candidates = await listCandidates(matterName);
    const candidate = candidates.find(c => c.id === candidateId);
    if (!candidate) {
      console.error(chalk.red('Error:'), `Candidate "${candidateId}" not found.`);
      process.exit(1);
    }

    const result = await tryAutoAccept(candidate, matterName, config.autonomy);

    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      if (result.accepted) {
        console.log(chalk.green('✓'), 'Candidate auto-accepted');
        if (result.artifactId) console.log(`  Artifact: ${chalk.cyan(result.artifactId)}`);
      } else {
        console.log(chalk.yellow('✗'), `Not accepted: ${result.reason}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Auto-accept failed:'), (err as Error).message);
    process.exit(1);
  }
}
