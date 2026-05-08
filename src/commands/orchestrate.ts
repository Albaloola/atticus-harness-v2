import chalk from 'chalk';

export default async function orchestrateHandler(
  matterName: string,
  options: { objective?: string; background?: boolean; json?: boolean; maxDepth?: string; concurrency?: string }
): Promise<void> {
  try {
    const maxDepth = parsePositiveIntegerOption('max depth', options.maxDepth, 3);
    const concurrency = parsePositiveIntegerOption('concurrency', options.concurrency, 4);

    console.log(chalk.cyan(`Orchestrating ${matterName}...`));
    if (options.objective) console.log(chalk.gray(`  Objective: ${options.objective}`));
    console.log(chalk.gray(`  Max depth: ${maxDepth}`));
    console.log(chalk.gray(`  Concurrency: ${concurrency}`));

    if (options.background) {
      const { spawnBackgroundHarness } = await import('../daemon/background.js');
      const { appendEvent } = await import('../state/events.js');
      const args = ['orchestrate', matterName, '--max-depth', String(maxDepth), '--concurrency', String(concurrency)];
      if (options.objective) args.push('--objective', options.objective);
      const background = spawnBackgroundHarness(args);
      await appendEvent({
        matterName,
        type: 'run.started',
        runId: background.runId,
        source: 'tool',
        data: {
          background: true,
          runId: background.runId,
          pid: background.pid,
          logPath: background.logPath,
          objective: options.objective,
        },
      });
      if (options.json) {
        console.log(JSON.stringify(background, null, 2));
      } else {
        console.log(chalk.green('Background orchestration started'), `PID: ${background.pid ?? 'unknown'}`);
        console.log(`  Log: ${chalk.gray(background.logPath)}`);
      }
      return;
    }

    const { MasterOrchestrator } = await import('../orchestration/master-orchestrator.js');
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: options.objective,
      maxDepth,
      maxConcurrency: concurrency,
    });
    const result = await orchestrator.run();

    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(chalk.green('\nOrchestration complete:'), result.summary);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Orchestration failed:'), (err as Error).message);
    process.exit(1);
  }
}

function parsePositiveIntegerOption(name: string, value: string | undefined, fallback: number): number {
  if (value === undefined) return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) {
    throw new Error(`${name} must be a positive integer`);
  }
  return parsed;
}
