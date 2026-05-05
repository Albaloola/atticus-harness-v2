import { describe, it, expect } from 'vitest';
import { parseSkillContent, SkillParseError } from '../../src/skills/parser.ts';
import { chooseHumanizerSkill } from '../../src/skills/humanizer.ts';

const BASIC_SKILL = `---
name: test-skill
version: 2026.01.01
description: A test skill
---

## Role
You are a test skill.

## Instructions
Do something.`;

const SKILL_WITH_TASKS = `---
name: citation-review
version: 2026.02.01
description: |
  Review citations in documents.
stage: S6
task_types:
  - verify_citations
  - hostile_review
allowed-tools:
  - Read
  - Grep
  - Search
---

## Role
You are a citation reviewer.`;

describe('parseSkillContent', () => {
  it('parses basic frontmatter', () => {
    const skill = parseSkillContent(BASIC_SKILL, 'test.md');
    expect(skill.skillId).toBe('test-skill');
    expect(skill.manifest.version).toBe('2026.01.01');
    expect(skill.manifest.description).toBe('A test skill');
  });

  it('extracts body after frontmatter', () => {
    const skill = parseSkillContent(BASIC_SKILL, 'test.md');
    expect(skill.body).toContain('## Role');
    expect(skill.body).toContain('Do something.');
  });

  it('parses optional fields', () => {
    const skill = parseSkillContent(SKILL_WITH_TASKS, 'test.md');
    expect(skill.manifest.stage).toBe('S6');
    expect(skill.manifest.taskTypes).toEqual(['verify_citations', 'hostile_review']);
    expect(skill.manifest.allowedTools).toEqual(['Read', 'Grep', 'Search']);
  });

  it('handles missing frontmatter gracefully', () => {
    const skill = parseSkillContent('Just body text', 'test.md');
    expect(skill.skillId).toBe('test');
    expect(skill.body).toBe('Just body text');
  });
});

describe('chooseHumanizerSkill', () => {
  it('chooses the regular humanizer for general prose', () => {
    expect(chooseHumanizerSkill({
      objective: 'Humanize this product update so it sounds less AI generated.',
      requestedType: 'report',
    })).toBe('humanizer');
  });

  it('chooses the Scots legal humanizer for Scottish legal drafts', () => {
    expect(chooseHumanizerSkill({
      objective: 'Humanise this simple procedure response for sheriff court.',
      requestedType: 'draft',
      jurisdiction: 'Scotland',
    })).toBe('scots-legal-humanizer');
  });

  it('does not use Scots legal terminology for generic legal prose without Scottish signals', () => {
    expect(chooseHumanizerSkill({
      objective: 'Humanize this legal update for a general audience.',
      requestedType: 'report',
    })).toBe('humanizer');
  });

  it('does not attach a humanizer for internal non-human-facing work', () => {
    expect(chooseHumanizerSkill({
      objective: 'Run evidence extraction and update internal task graph.',
      requestedType: 'case_management',
    })).toBeUndefined();
  });
});
