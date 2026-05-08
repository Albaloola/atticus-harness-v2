import chalk from 'chalk';
import { readFile } from 'fs/promises';
import { loadMatter, getMatterPath } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import { appendEvent } from '../state/events.js';
import { evaluateLegalReadiness } from '../gates/legal-readiness.js';

export default async function gateHandler(
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
      const data = JSON.parse(await readFile(jsonPath, 'utf-8'));
      content = data.content || '';
    } catch {
      console.error(chalk.red('Error:'), `Candidate "${candidateId}" not found.`);
      process.exit(1);
    }
  }

  const evidence = await listEvidence(matterName);

  console.log(chalk.cyan(`Running quality gates on "${candidateId}"...`));
  console.log('');

  const checks: Array<{ name: string; passed: boolean; message: string }> = [];

  const citationCount = (content.match(/\[[A-Z][A-Z0-9_-]*-\d+\]/g) || []).length;
  checks.push({
    name: 'Citations present',
    passed: citationCount > 0,
    message: citationCount > 0 ? `${citationCount} citations found` : 'No citations found',
  });

  const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
  checks.push({
    name: 'Content length',
    passed: wordCount >= 50,
    message: `${wordCount} words${wordCount < 50 ? ' (too short)' : ''}`,
  });

  const hasSections = /^#{1,3}\s/m.test(content);
  checks.push({
    name: 'Document structure',
    passed: hasSections,
    message: hasSections ? 'Has section headings' : 'No section headings found',
  });

  const hasDate = /\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}|\d{4}-\d{2}-\d{2}/.test(content);
  checks.push({
    name: 'Date present',
    passed: hasDate,
    message: hasDate ? 'Date found' : 'No date found',
  });

  const evidenceIds = evidence.map(e => e.id);
  const citedIds = [...new Set(content.match(/\[([A-Z][A-Z0-9_-]*-\d+)\]/g) || [])].map(c => c.replace(/[\[\]]/g, ''));
  const validCitations = citedIds.filter(id => evidenceIds.includes(id));
  const invalidCitations = citedIds.filter(id => !evidenceIds.includes(id));
  checks.push({
    name: 'Citation validity',
    passed: invalidCitations.length === 0,
    message: invalidCitations.length > 0
      ? `${invalidCitations.length} invalid: ${invalidCitations.join(', ')}`
      : `All ${validCitations.length} citations reference known evidence`,
  });

  const passed = checks.filter(c => c.passed).length;
  const failed = checks.filter(c => !c.passed).length;

  for (const check of checks) {
    const icon = check.passed ? chalk.green('✓') : chalk.yellow('○');
    console.log(`  ${icon} ${chalk.bold(check.name)}`);
    console.log(`    ${check.passed ? chalk.green(check.message) : chalk.yellow(check.message)}`);
    console.log('');
  }

  console.log(chalk.gray('━'.repeat(40)));
  const status = failed === 0 ? chalk.green('PASS') : failed <= 2 ? chalk.yellow('CONDITIONAL PASS') : chalk.red('FAIL');
  console.log(`  ${status}: ${passed}/${checks.length} checks passed`);

  try {
    await appendEvent({ matterName, type: 'draft.gated', data: { candidateId, passed, failed, totalChecks: String(checks.length) }, source: 'tool' });
  } catch {}
}

export async function handleLegalGate(
  matterName: string,
  options: { target?: string; json?: boolean; requireAcceptedArtifact?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await evaluateLegalReadiness({
      matterName,
      targetId: options.target,
      requireAcceptedArtifact: options.requireAcceptedArtifact ?? Boolean(options.target),
    });
    await appendEvent({
      matterName,
      type: 'draft.gated',
      data: {
        targetId: options.target,
        ready: result.ready,
        blockerCount: result.blockerCount,
        legalReadiness: true,
      },
      source: 'legal-readiness',
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(result.ready ? chalk.green('PASS') : chalk.red('FAIL'));
    console.log(`  Legal blockers: ${result.blockerCount}`);
    for (const blocker of result.blockers.slice(0, 20)) {
      console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
      console.log(`    ${chalk.gray(blocker.remediation)}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Legal gate failed:'), (err as Error).message);
    process.exit(1);
  }
}
