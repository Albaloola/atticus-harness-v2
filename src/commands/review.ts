import chalk from 'chalk';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { loadMatter, saveMatterIndex, getMatterPath } from '../storage/matter.js';
import { createLLMClient } from '../llm/client.js';
import { resolveConfig } from '../config/loader.js';
import { listEvidence } from '../storage/evidence.js';
import { appendEvent } from '../state/events.js';
import { listCandidates } from '../storage/candidate.js';
import { runAdversarialReview } from '../review/adversarial-reviewer.js';
import { listReviewFindings, listReviewTasks } from '../review/review-store.js';
import { reviewFindingWorkflow } from '../workflows/review-workflow.js';

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
    const resolvedConfig = await resolveConfig({ matterName });
    const client = createLLMClient(resolvedConfig);
    const review = await client.chat({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Please review this legal document:\n\n---\n${content.substring(0, 15000)}${content.length > 15000 ? '\n\n...[document truncated at 15000 chars]' : ''}` },
      ],
      config: {
        model: resolvedConfig.providerPolicy.models.reviewer ?? resolvedConfig.model,
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

export async function handleReviewFinding(
  matterName: string,
  findingId: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await reviewFindingWorkflow(matterName, findingId);
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(chalk.green('✓'), 'Finding review recorded');
    console.log(`  Finding: ${chalk.cyan(findingId)}`);
    console.log(`  Review tasks: ${result.reviewTaskIds.length}`);
    console.log(`  Blockers: ${result.blockers.length}`);
    for (const blocker of result.blockers) {
      console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Finding review failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleReviewDraft(
  matterName: string,
  candidateId: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const candidate = (await listCandidates(matterName)).find((item) => item.id === candidateId);
    if (!candidate) {
      throw new Error(`Candidate "${candidateId}" not found`);
    }
    const result = await runAdversarialReview({
      matterName,
      targetType: 'draft',
      targetId: candidateId,
      content: candidate.content,
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(chalk.green('✓'), 'Draft review recorded');
    console.log(`  Candidate: ${chalk.cyan(candidateId)}`);
    console.log(`  Review task: ${chalk.cyan(result.reviewTaskId)}`);
    console.log(`  Findings: ${result.findingCount}`);
  } catch (err: unknown) {
    console.error(chalk.red('Draft review failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleReviewQueue(
  matterName: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const tasks = listReviewTasks(matterName);
    const output = tasks.map((task) => ({
      ...task,
      findings: listReviewFindings(matterName, { reviewTaskId: task.reviewTaskId }),
    }));
    if (options.json) {
      console.log(JSON.stringify(output, null, 2));
      return;
    }
    console.log(chalk.cyan(`Review queue for ${matterName}`));
    for (const task of output) {
      console.log(`  - ${task.reviewTaskId}: ${task.status} ${task.targetType}/${task.targetId} (${task.findings.length} findings)`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Review queue failed:'), (err as Error).message);
    process.exit(1);
  }
}
