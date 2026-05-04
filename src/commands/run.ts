import chalk from 'chalk';
import { loadMatter, saveMatterIndex } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import { AgentLoop } from '../agent/index.js';

export default async function runHandler(
  matterName: string,
  options: { prompt?: string; skill?: string; quiet?: boolean }
): Promise<void> {
  let matterIndex;
  try {
    matterIndex = await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found. Run "harness init ${matterName}" first.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }

  const evidence = await listEvidence(matterName).catch(() => []);
  const quietMode = options.quiet ?? false;

  if (!quietMode) {
    console.log(chalk.cyan('Harness Agent Loop'));
    console.log(chalk.gray('━'.repeat(40)));
    console.log(`  Matter: ${chalk.bold(matterName)}`);
    console.log(`  Status: ${chalk.yellow(matterIndex.status)}`);
    console.log(`  Evidence: ${evidence.length} files`);
    if (options.skill) console.log(`  Skill: ${chalk.cyan(options.skill)}`);
    if (options.prompt) console.log(`  Prompt: ${chalk.gray(options.prompt)}`);
    console.log('');
    console.log(chalk.gray('Starting agent loop...'));
    console.log('');
  }

  try {
    const loop = new AgentLoop({
      maxTurns: 25,
      model: matterIndex.config.model || 'deepseek/deepseek-v4-flash',
      temperature: matterIndex.config.temperature ?? 0.1,
      skillName: options.skill,
      quietMode,
      verbose: !quietMode,
    });

    const result = await loop.run(matterName, options.prompt);

    if (!quietMode) {
      console.log('');
      const statusColor: Record<string, (s: string) => string> = {
        completed: chalk.green,
        blocked: chalk.yellow,
        error: chalk.red,
        max_turns: chalk.yellow,
      };
      const colorFn = statusColor[result.status] || chalk.white;
      console.log(`  Status: ${colorFn(result.status.toUpperCase())}`);
      console.log(`  Turns:  ${result.turns.length}`);
      console.log(`  Summary: ${chalk.gray(result.summary.substring(0, 200))}`);
      console.log('');
      console.log(chalk.gray('Transcript saved to _candidates/transcript-*.md'));
    }

    if (result.status === 'error') {
      console.error(chalk.red('\nAgent loop encountered an error:'), result.summary);
      process.exit(1);
    }
  } catch (err: unknown) {
    console.error(chalk.red('\nFatal error:'), (err as Error).message);
    process.exit(1);
  }
}
