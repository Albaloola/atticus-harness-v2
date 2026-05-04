import chalk from 'chalk';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { loadMatter, saveMatterIndex, getMatterPath } from '../storage/matter.js';
import { OpenRouterClient } from '../llm/client.js';
import { listEvidence } from '../storage/evidence.js';
import { appendEvent } from '../state/events.js';

export default async function reviewHandler(
  matterName: string,
  candidateId: string
): Promise<void> {
  let matterIndex;
  try {
    matterIndex = await loadMatter(matterName);
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
      const data = JSON.parse(await readFile(jsonPath, 'utf-8'));
      content = data.content || '';
    } catch {
      console.error(chalk.red('Error:'), `Candidate "${candidateId}" not found.`);
      process.exit(1);
    }
  }

  const evidence = await listEvidence(matterName);

  console.log(chalk.cyan(`Running hostile review on "${candidateId}"...`));
  console.log(chalk.gray(`  Document: ${content.length} chars, ${content.split(/\s+/).length} words`));
  console.log(chalk.gray(`  Evidence: ${evidence.length} files available`));
  console.log('');

  const systemPrompt = `You are a red-team legal reviewer. Your job is to stress-test the following legal document, identify weaknesses, find unsupported claims, and flag risks.

Evidence available in this matter: ${evidence.map(e => `[${e.id}] ${e.originalPath.split('/').pop()}`).join(', ') || 'No evidence indexed.'}

Critique the document on:
1. Factual accuracy — are claims supported by evidence?
2. Legal reasoning — are the legal arguments sound?
3. Completeness — are there gaps or missing elements?
4. Risk — what are the vulnerabilities if challenged?
5. Citation quality — are citations accurate and sufficient?

For each finding, rate severity: CRITICAL, HIGH, MEDIUM, LOW, or INFO.`;

  try {
    const client = new OpenRouterClient();
    const review = await client.chat({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Please review this legal document:\n\n---\n${content.substring(0, 15000)}${content.length > 15000 ? '\n\n...[document truncated at 15000 chars]' : ''}` },
      ],
      config: {
        model: 'deepseek/deepseek-v4-pro',
        temperature: 0.3,
        jsonMode: false,
        maxTokens: 4096,
      },
    });

    const reviewId = `review-${candidateId}`;
    const candidatesDir = getMatterPath(matterName, '_candidates');
    await mkdir(candidatesDir, { recursive: true });
    const reviewPath = join(candidatesDir, `${reviewId}.md`);
    await writeFile(reviewPath, review.content, 'utf-8');

    matterIndex.candidateCount++;
    await saveMatterIndex(matterName, matterIndex);

    try {
      await appendEvent({ matterName, type: 'draft.reviewed', data: { candidateId, reviewId }, source: 'tool' });
    } catch {}

    console.log(chalk.green('✓'), 'Review complete');
    console.log('');
    console.log(review.content);
    console.log('');
    console.log(chalk.gray('Review saved:'), chalk.cyan(reviewPath));
  } catch (err: unknown) {
    console.error(chalk.red('Review failed:'), (err as Error).message);
    process.exit(1);
  }
}
