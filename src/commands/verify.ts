import chalk from 'chalk';
import { readFile } from 'fs/promises';
import { loadMatter, getMatterPath } from '../storage/matter.js';
import { appendEvent } from '../state/events.js';
import { verifyCandidateCitations } from '../citation/verify.js';
import type { CandidateArtifact } from '../types/artifact.js';

export default async function verifyHandler(
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

  const candidatePath = getMatterPath(matterName, '_candidates', `${candidateId}.md`);
  let content: string;
  let candidate: Pick<CandidateArtifact, 'id' | 'content' | 'metadata'> | undefined;
  try {
    content = await readFile(candidatePath, 'utf-8');
    candidate = { id: candidateId, content, metadata: {} };
  } catch {
    try {
      const jsonPath = getMatterPath(matterName, '_candidates', `${candidateId}.json`);
      const parsed = JSON.parse(await readFile(jsonPath, 'utf-8')) as CandidateArtifact;
      content = parsed.content || '';
      candidate = parsed;
    } catch {
      console.error(chalk.red('Error:'), `Candidate "${candidateId}" not found in matter "${matterName}".`);
      process.exit(1);
    }
  }

  console.log(chalk.cyan(`Verifying citations in "${candidateId}"...`));

  const result = await verifyCandidateCitations(matterName, candidate || { id: candidateId, content, metadata: {} });
  const citations = result.checks.map((check) => check.citationId);

  if (citations.length === 0) {
    console.log(chalk.yellow('No citations found in format [PREFIX-SRC-NNNN].'));
    console.log(chalk.gray('Citation format: inline [EVIDENCE_ID] or candidate metadata.citations[].'));
    return;
  }

  const uniqueCitations = [...new Set(citations)];
  console.log(chalk.gray(`  Found ${citations.length} citation${citations.length === 1 ? '' : 's'} (${uniqueCitations.length} unique)`));
  console.log('');

  for (const check of result.checks) {
    const icon = check.status === 'supported'
      ? chalk.green('✓')
      : check.status === 'partially_supported'
        ? chalk.yellow('~')
        : chalk.red('✗');
    console.log(`  ${icon} ${chalk.bold(check.citationId)} — ${check.details}`);
    if (check.quote) console.log(`    ${chalk.gray(check.quote.slice(0, 140))}`);
  }

  const supported = result.summary.supported;
  const unsupported = result.summary.unsupported + result.summary.notChecked;
  const notFound = result.checks.filter((check) => /not found/i.test(check.details)).length;

  console.log('');
  console.log(chalk.gray('━'.repeat(40)));
  console.log(`  ${chalk.bold('Summary:')} ${supported} supported, ${unsupported} unverified, ${notFound} not found`);
  const allSupported = result.passed;
  console.log(`  ${allSupported ? chalk.green('PASS') : chalk.yellow('NEEDS REVIEW')}`);

  try {
    await appendEvent({ matterName, type: 'draft.verified', data: { candidateId, supported, unsupported, notFound, result }, source: 'tool' });
  } catch {}
}
