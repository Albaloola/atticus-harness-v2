import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { runInvestigationWorkflow } from '../workflows/investigation-workflow.js';
import { parseNumberOption, parseOptionalNumberOption } from './number-options.js';

export interface InvestigateOptions {
  claimElement?: string[];
  evidence?: string[];
  parentThread?: string;
  maxDepth?: string;
  budget?: string;
  estimatedCost?: string;
  json?: boolean;
}

export default async function investigateHandler(
  matterName: string,
  objective: string,
  options: InvestigateOptions = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await runInvestigationWorkflow({
      matterName,
      objective,
      parentThreadId: options.parentThread,
      claimElements: options.claimElement ?? [],
      evidenceScope: options.evidence ?? [],
      maxDepth: parseNumberOption(options.maxDepth, '--max-depth', {
        defaultValue: 3,
        integer: true,
        min: 0,
      }),
      budgetUsd: parseOptionalNumberOption(options.budget, '--budget', { min: 0 }),
      estimatedCostUsd: parseOptionalNumberOption(options.estimatedCost, '--estimated-cost', { min: 0 }),
    });

    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    const statusColor = result.status === 'complete' ? chalk.green : chalk.yellow;
    console.log(chalk.green('✓'), 'Investigation thread recorded');
    console.log(`  Thread: ${chalk.cyan(result.threadId)}`);
    console.log(`  Status: ${statusColor(result.status)}`);
    console.log(`  Stop reason: ${result.stopReason ?? 'none'}`);
    console.log(`  Accepted findings: ${result.acceptedFindingIds.length}`);
    console.log(`  Contradictions: ${result.contradictionIds.length}`);
    if (result.blockers.length > 0) {
      console.log(chalk.yellow('  Blockers:'));
      for (const blocker of result.blockers) {
        console.log(`    - ${blocker.objectId}: ${blocker.reason}`);
      }
    }
  } catch (err: unknown) {
    console.error(chalk.red('Investigation failed:'), (err as Error).message);
    process.exit(1);
  }
}
