import chalk from 'chalk';
import { SkillRegistry } from '../skills/index.js';
import { join } from 'path';

export default async function skillUseHandler(name: string): Promise<void> {
  try {
    const registry = new SkillRegistry();
    await registry.loadFromDir(join(process.cwd(), 'skills'));

    const skill = registry.getSkill(name);

    if (!skill) {
      console.error(chalk.red('Error:'), `Skill "${name}" not found.`);
      console.log(chalk.gray('Run'), chalk.cyan('harness skill list'), chalk.gray('to see available skills.'));
      process.exit(1);
    }

    console.log('');
    console.log(chalk.bold(`Skill: ${skill.skillId}`));
    console.log(chalk.gray(`Version: ${skill.manifest.version}`));
    if (skill.manifest.stage) console.log(chalk.gray(`Stage: ${skill.manifest.stage}`));
    if (skill.manifest.taskTypes) console.log(chalk.gray(`Task types: ${skill.manifest.taskTypes.join(', ')}`));
    console.log(chalk.gray('━'.repeat(50)));
    console.log('');
    console.log(skill.body);
  } catch (err: unknown) {
    console.error(chalk.red('Failed to load skill:'), (err as Error).message);
    process.exit(1);
  }
}
