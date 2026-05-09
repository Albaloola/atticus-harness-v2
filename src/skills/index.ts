import { loadSkillsFromDir } from './loader.js';
import { loadPluginSkillDefinitions } from '../plugins/loader.js';
import { loadNativeSkillDefinitions } from './native.js';
import type { SkillDefinition } from './types.js';

export class SkillRegistry {
  private skills: Map<string, SkillDefinition> = new Map();
  private loaded = false;

  async loadFromDir(dirPath: string): Promise<void> {
    for (const skill of loadNativeSkillDefinitions()) {
      this.skills.set(skill.skillId, skill);
    }
    const skills = await loadSkillsFromDir(dirPath);
    for (const skill of skills) {
      this.skills.set(skill.skillId, skill);
    }
    for (const skill of await this.loadPluginSkills()) {
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

  private async loadPluginSkills(): Promise<SkillDefinition[]> {
    try {
      const { loadGlobalConfig } = await import('../config/loader.js');
      const { config } = await loadGlobalConfig();
      return loadPluginSkillDefinitions(config.plugins);
    } catch {
      return [];
    }
  }
}

export { parseSkillContent, parseSkillMd } from './parser.js';
export { loadSkillsFromDir } from './loader.js';
export { loadNativeSkillDefinitions, mergeSkillDefinitions } from './native.js';
export type { SkillDefinition, SkillFrontmatter } from './types.js';
