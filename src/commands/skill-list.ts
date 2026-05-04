import chalk from 'chalk';
import { SkillRegistry } from '../skills/index.js';
import { join } from 'path';

export default async function skillListHandler(): Promise<void> {
  try {
    const registry = new SkillRegistry();
    await registry.loadFromDir(join(process.cwd(), 'skills'));

    const skills = registry.listSkills();

    if (skills.length === 0) {
      console.log(chalk.yellow('No skills found.'));
      console.log(chalk.gray('Skills directory:'), chalk.cyan('skills/'));
      return;
    }

    console.log('');
    console.log(chalk.bold(`Available skills: ${skills.length}`));
    console.log(chalk.gray('━'.repeat(60)));

    for (const skill of skills) {
      console.log(`  ${chalk.bold(skill.skillId)}  ${chalk.gray('v' + skill.manifest.version)}`);
      console.log(`    ${skill.manifest.description.split('\n')[0]}`);
      if (skill.manifest.stage) {
        console.log(`    Stage: ${chalk.cyan(skill.manifest.stage)}`);
      }
      if (skill.manifest.taskTypes && skill.manifest.taskTypes.length > 0) {
        console.log(`    Tasks: ${chalk.gray(skill.manifest.taskTypes.join(', '))}`);
      }
      console.log('');
    }

    console.log(chalk.gray('Tip:'), chalk.cyan('harness skill use <name>'), chalk.gray('to display a skill\'s prompt.'));
  } catch (err: unknown) {
    console.error(chalk.red('Failed to list skills:'), (err as Error).message);
    process.exit(1);
  }
}
