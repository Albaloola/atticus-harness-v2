import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { parseSkillMd, validateSkillFrontmatter, SkillParseError } from './parser.js';
import type { SkillDefinition } from './types.js';

export async function loadSkillsFromDir(dirPath: string): Promise<SkillDefinition[]> {
  const skills: SkillDefinition[] = [];

  try {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const skillDir = join(dirPath, entry.name);
      const skillMdPath = join(skillDir, 'SKILL.md');

      try {
        await stat(skillMdPath);
      } catch {
        continue; // No SKILL.md in this directory, skip
      }

      try {
        const skill = await parseSkillMd(skillMdPath);

        // Check for references/ and examples/ subdirectories
        try {
          const refDir = join(skillDir, 'references');
          const refStat = await stat(refDir);
          if (refStat.isDirectory()) {
            const refFiles = await readdir(refDir);
            skill.references = refFiles.map(f => f);
          }
        } catch {
          // No references dir
        }

        try {
          const exDir = join(skillDir, 'examples');
          const exStat = await stat(exDir);
          if (exStat.isDirectory()) {
            const exFiles = await readdir(exDir);
            skill.examples = exFiles.map(f => f);
          }
        } catch {
          // No examples dir
        }

        const errors = validateSkillFrontmatter(skill.manifest);
        if (errors.length > 0) {
          console.error(`[skills] Warning: ${skill.skillId} has validation errors: ${errors.join(', ')}`);
        }

        skills.push(skill);
      } catch (err) {
        if (err instanceof SkillParseError) {
          console.error(`[skills] Error parsing ${skillMdPath}: ${err.message}`);
        } else {
          console.error(`[skills] Unexpected error loading ${skillMdPath}:`, err);
        }
      }
    }
  } catch (err) {
    console.error(`[skills] Error reading directory ${dirPath}:`, err);
  }

  return skills;
}
