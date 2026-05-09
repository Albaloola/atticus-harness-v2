import { describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import {
  SkillRegistry,
  loadNativeSkillDefinitions,
  mergeSkillDefinitions,
} from '../../src/skills/index.ts';

describe('native Harness skills', () => {
  it('includes the Claude Code default skills adapted for Harness', () => {
    const skills = loadNativeSkillDefinitions();
    const ids = new Set(skills.map((skill) => skill.skillId));

    for (const id of [
      'batch',
      'claude-api',
      'claude-in-chrome',
      'debug',
      'keybindings-help',
      'loop',
      'lorem-ipsum',
      'remember',
      'schedule',
      'simplify',
      'skillify',
      'stuck',
      'update-config',
      'verify',
    ]) {
      expect(ids.has(id)).toBe(true);
    }

    const simplify = skills.find((skill) => skill.skillId === 'simplify');
    expect(simplify?.manifest.whenToUse).toContain('cleanup');
    expect(simplify?.path).toBe('native://claude-code-default/simplify');
  });

  it('lets local file skills override native skills with the same id', async () => {
    const root = mkdtempSync(join(tmpdir(), 'harness-native-skills-'));
    try {
      const skillsDir = join(root, 'skills');
      mkdirSync(join(skillsDir, 'simplify'), { recursive: true });
      writeFileSync(join(skillsDir, 'simplify', 'SKILL.md'), [
        '---',
        'name: simplify',
        'version: 1.0.0',
        'description: Local simplify override',
        '---',
        'Use the local simplify behavior.',
      ].join('\n'));

      const registry = new SkillRegistry();
      await registry.loadFromDir(skillsDir);

      const skill = registry.getSkill('simplify');
      expect(skill?.manifest.description).toBe('Local simplify override');
      expect(skill?.body).toBe('Use the local simplify behavior.');
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('deduplicates skill groups with later groups taking precedence', () => {
    const [nativeSimplify] = loadNativeSkillDefinitions().filter((skill) => skill.skillId === 'simplify');
    const localSimplify = {
      ...nativeSimplify,
      manifest: {
        ...nativeSimplify.manifest,
        description: 'Local value',
      },
    };

    const merged = mergeSkillDefinitions([[nativeSimplify], [localSimplify]]);
    expect(merged).toHaveLength(1);
    expect(merged[0].manifest.description).toBe('Local value');
  });
});
