import chalk from 'chalk';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { loadMatter, getMatterPath } from '../storage/matter.js';
import { searchEvidence } from '../storage/sqlite/search.js';
import { getDb } from '../storage/sqlite/index.js';
import { appendEvent } from '../state/events.js';

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
  try {
    content = await readFile(candidatePath, 'utf-8');
  } catch {
    try {
      const jsonPath = getMatterPath(matterName, '_candidates', `${candidateId}.json`);
      content = JSON.parse(await readFile(jsonPath, 'utf-8')).content || '';
    } catch {
      console.error(chalk.red('Error:'), `Candidate "${candidateId}" not found in matter "${matterName}".`);
      process.exit(1);
    }
  }

  console.log(chalk.cyan(`Verifying citations in "${candidateId}"...`));

  const citationRegex = /\[([A-Z]+-SRC-\d+)\]/g;
  const citations: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = citationRegex.exec(content)) !== null) {
    citations.push(match[1]);
  }

  if (citations.length === 0) {
    console.log(chalk.yellow('No citations found in format [PREFIX-SRC-NNNN].'));
    console.log(chalk.gray('Citation format: [EVIDENCE_ID] (e.g., [NAP-SRC-0001])'));
    return;
  }

  const uniqueCitations = [...new Set(citations)];
  console.log(chalk.gray(`  Found ${citations.length} citation${citations.length === 1 ? '' : 's'} (${uniqueCitations.length} unique)`));
  console.log('');

  const db = getDb(matterName);
  let supported = 0;
  let unsupported = 0;
  let notFound = 0;

  for (const cid of uniqueCitations) {
    const row = db.prepare('SELECT id, original_path, sha256 FROM evidence WHERE id = ?').get(cid) as { id: string; original_path: string; sha256: string } | undefined;

    if (!row) {
      console.log(`  ${chalk.red('✗')} ${chalk.bold(cid)} — Evidence not found in index`);
      notFound++;
      continue;
    }

    const citationContext = extractCitationContext(content, cid);
    if (citationContext) {
      const searchResult = searchEvidence(matterName, citationContext, { topK: 1 });
      if (searchResult.length > 0 && searchResult[0].evidenceId === cid) {
        console.log(`  ${chalk.green('✓')} ${chalk.bold(cid)} — Supported (match score: ${Math.round(searchResult[0].score * 100)}%)`);
        supported++;
      } else {
        console.log(`  ${chalk.yellow('?')} ${chalk.bold(cid)} — Found in index, but quoted text not verified`);
        console.log(`    ${chalk.gray(row.original_path.split('/').pop())}`);
        unsupported++;
      }
    } else {
      console.log(`  ${chalk.yellow('?')} ${chalk.bold(cid)} — Evidence exists but no quote context`);
      console.log(`    ${chalk.gray(row.original_path.split('/').pop())}`);
      unsupported++;
    }
  }

  console.log('');
  console.log(chalk.gray('━'.repeat(40)));
  console.log(`  ${chalk.bold('Summary:')} ${supported} supported, ${unsupported} unverified, ${notFound} not found`);
  const allSupported = unsupported === 0 && notFound === 0;
  console.log(`  ${allSupported ? chalk.green('PASS') : chalk.yellow('NEEDS REVIEW')}`);

  try {
    await appendEvent({ matterName, type: 'draft.verified', data: { candidateId, supported, unsupported, notFound }, source: 'tool' });
  } catch {}
}

function extractCitationContext(content: string, citationId: string): string | null {
  const regex = new RegExp(`.{0,100}\\[${citationId}\\].{0,100}`, 's');
  const match = regex.exec(content);
  if (!match) return null;
  return match[0].replace(`[${citationId}]`, '').trim();
}
