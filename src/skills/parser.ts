import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import type { SkillDefinition, SkillFrontmatter } from './types.js';

export class SkillParseError extends Error {
  constructor(message: string, public readonly filePath: string) {
    super(message);
    this.name = 'SkillParseError';
  }
}

export async function parseSkillMd(filePath: string): Promise<SkillDefinition> {
  const content = await readFile(filePath, 'utf-8');
  return parseSkillContent(content, filePath);
}

export function parseSkillContent(content: string, sourcePath: string): SkillDefinition {
  const lines = content.split('\n');

  // Find the first ---
  const firstSep = lines.findIndex(l => l.trim() === '---');
  if (firstSep === -1) {
    // No frontmatter, entire content is body
    return {
      skillId: sourcePath.split('/').pop()?.replace('.md', '') || 'unknown',
      path: sourcePath,
      manifest: { name: 'unnamed', version: '0.0.0', description: '' },
      body: content.trim(),
      references: [],
      examples: [],
    };
  }

  // Find the second ---
  const secondSep = lines.findIndex((l, i) => i > firstSep && l.trim() === '---');
  if (secondSep === -1) {
    throw new SkillParseError('Unclosed YAML frontmatter: no closing --- found', sourcePath);
  }

  // Extract YAML frontmatter
  const yamlContent = lines.slice(firstSep + 1, secondSep).join('\n');
  let manifest: SkillFrontmatter;
  try {
    const parsed = yaml.load(yamlContent) as Record<string, unknown>;
    manifest = {
      name: String(parsed.name || 'unnamed'),
      version: String(parsed.version || '0.0.0'),
      description: String(parsed.description || ''),
      stage: parsed.stage ? String(parsed.stage) : undefined,
      taskTypes: Array.isArray(parsed.task_types) ? parsed.task_types.map(String) : undefined,
      allowedTools: Array.isArray(parsed['allowed-tools']) ? parsed['allowed-tools'].map(String) : undefined,
      tags: normalizeTags(parsed.tags),
      atticusRefined: typeof parsed.atticus_refined === 'boolean' ? parsed.atticus_refined : undefined,
      jurisdictionFocus: parsed.jurisdiction_focus ? String(parsed.jurisdiction_focus) : undefined,
      requiresLiveSourceVerification:
        typeof parsed.requires_live_source_verification === 'boolean'
          ? parsed.requires_live_source_verification
          : undefined,
      externalActionMode: parsed.external_action_mode ? String(parsed.external_action_mode) : undefined,
    };
  } catch (err) {
    throw new SkillParseError(
      `Failed to parse YAML frontmatter: ${err instanceof Error ? err.message : String(err)}`,
      sourcePath
    );
  }

  // Body is everything after the second ---
  const body = lines.slice(secondSep + 1).join('\n').trim();

  return {
    skillId: manifest.name || sourcePath.split('/').pop()?.replace('.md', '') || 'unknown',
    path: sourcePath,
    manifest,
    body,
    references: [], // Loaded separately
    examples: [],
  };
}

function normalizeTags(value: unknown): string[] | undefined {
  if (Array.isArray(value)) {
    const tags = value.flatMap((item) => String(item).split(',')).map((tag) => tag.trim()).filter(Boolean);
    return tags.length > 0 ? tags : undefined;
  }
  if (typeof value === 'string') {
    const tags = value.split(',').map((tag) => tag.trim()).filter(Boolean);
    return tags.length > 0 ? tags : undefined;
  }
  return undefined;
}

export function validateSkillFrontmatter(manifest: SkillFrontmatter): string[] {
  const errors: string[] = [];
  if (!manifest.name) errors.push('name is required');
  if (!manifest.version) errors.push('version is required');
  if (!manifest.description) errors.push('description is required');
  return errors;
}
