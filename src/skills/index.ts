import { loadSkillsFromDir } from './loader.js';
import type { SkillDefinition } from './types.js';

export class SkillRegistry {
  private skills: Map<string, SkillDefinition> = new Map();
  private loaded = false;

  async loadFromDir(dirPath: string): Promise<void> {
    const skills = await loadSkillsFromDir(dirPath);
    for (const skill of skills) {
      this.skills.set(skill.skillId, skill);
    }
    this.loaded = true;
  }

  getSkill(name: string): SkillDefinition | undefined {
    return this.skills.get(name);
  }

  listSkills(): SkillDefinition[] {
    return Array.from(this.skills.values());
  }

  getSystemPrompt(name: string): string | undefined {
    const skill = this.skills.get(name);
    return skill?.body;
  }

  hasSkill(name: string): boolean {
    return this.skills.has(name);
  }

  get count(): number {
    return this.skills.size;
  }
}

export { parseSkillContent, parseSkillMd } from './parser.js';
export { loadSkillsFromDir } from './loader.js';
export type { SkillDefinition, SkillFrontmatter } from './types.js';
