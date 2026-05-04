import chalk from 'chalk';

export default async function orchestrateHandler(
  matterName: string,
  options: { objective?: string; background?: boolean; json?: boolean; maxDepth?: string; concurrency?: string }
): Promise<void> {
  console.log(chalk.cyan(`Orchestrating ${matterName}...`));
  if (options.objective) console.log(chalk.gray(`  Objective: ${options.objective}`));
  console.log(chalk.gray(`  Max depth: ${options.maxDepth || '3'}`));
  console.log(chalk.gray(`  Concurrency: ${options.concurrency || '4'}`));

  try {
    const { MasterOrchestrator } = await import('../orchestration/master-orchestrator.js');
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: options.objective,
      maxDepth: parseInt(options.maxDepth || '3', 10),
      maxConcurrency: parseInt(options.concurrency || '4', 10),
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
