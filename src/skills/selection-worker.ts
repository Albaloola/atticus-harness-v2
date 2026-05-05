import { join } from 'path';
import { loadSkillsFromDir } from './loader.js';
import { selectSkills, type MatterMetadata } from '../legal/skills-router.js';
import { getPhaseByName, type PhaseDefinition } from '../legal/workflow.js';
import type { SkillDefinition } from './types.js';

const DEFAULT_SKILL_LIMIT = 4;
const DEFAULT_BODY_CHARS = 1800;
const catalogCache = new Map<string, Promise<SkillDefinition[]>>();

export interface SkillSelectionInput {
  objective: string;
  matterMeta?: MatterMetadata;
  phaseId?: string;
  requestedType?: string;
  limit?: number;
  maxBodyChars?: number;
  excludeSkillIds?: string[];
}

export interface SelectedSkill {
  skill: SkillDefinition;
  score: number;
}

export interface SkillContextPack {
  selectedSkills: SelectedSkill[];
  promptSection: string;
}

export class SkillSelectionWorker {
  constructor(private readonly skillsDir = join(process.cwd(), 'skills')) {}

  async select(input: SkillSelectionInput): Promise<SelectedSkill[]> {
    const skills = await loadSkillCatalog(this.skillsDir);
    const phase = input.phaseId ? getPhaseByName(input.phaseId) : undefined;
    const metadata = {
      ...input.matterMeta,
      documentType: input.requestedType ?? input.matterMeta?.documentType,
    };
    const excluded = new Set(input.excludeSkillIds ?? []);

    return selectSkills(skills, input.objective, metadata, phase as PhaseDefinition | undefined, input.limit ?? DEFAULT_SKILL_LIMIT)
      .filter((item) => !excluded.has(item.skill.skillId) && item.score > 0)
      .map((item) => ({ skill: item.skill, score: item.score }));
  }

  async buildContext(input: SkillSelectionInput): Promise<SkillContextPack> {
    const selectedSkills = await this.select(input);
    const maxBodyChars = input.maxBodyChars ?? DEFAULT_BODY_CHARS;

    if (selectedSkills.length === 0) {
      return { selectedSkills, promptSection: '' };
    }

    const promptSection = [
      '## Selected Harness Skills',
      'Use only these selected skill instructions where they match the assigned task. If no selected skill fits, proceed without forcing one.',
      'Do not load the entire skill catalog into context. Request a narrower follow-up if a referenced form/template is needed.',
      'If context becomes tight, preserve the task objective, selected skill names, evidence IDs, conclusions, blockers, and next actions in the final structured output.',
      '',
      ...selectedSkills.map(({ skill, score }) => formatSkill(skill, score, maxBodyChars)),
    ].join('\n');

    return { selectedSkills, promptSection };
  }
}

export function clearSkillCatalogCache(): void {
  catalogCache.clear();
}

export async function loadSkillCatalog(skillsDir = join(process.cwd(), 'skills')): Promise<SkillDefinition[]> {
  const cached = catalogCache.get(skillsDir);
  if (cached) return cached;
  const promise = loadSkillsFromDir(skillsDir);
  catalogCache.set(skillsDir, promise);
  return promise;
}

function formatSkill(skill: SkillDefinition, score: number, maxBodyChars: number): string {
  const manifest = skill.manifest;
  const meta = [
    `Skill: ${skill.skillId}`,
    `Score: ${score.toFixed(1)}`,
    `Description: ${manifest.description}`,
    manifest.tags?.length ? `Tags: ${manifest.tags.join(', ')}` : undefined,
    manifest.jurisdictionFocus ? `Jurisdiction focus: ${manifest.jurisdictionFocus}` : undefined,
    manifest.requiresLiveSourceVerification ? 'Requires live/source verification: true' : undefined,
    manifest.externalActionMode ? `External action mode: ${manifest.externalActionMode}` : undefined,
  ].filter(Boolean).join('\n');

  return [
    meta,
    'Instructions excerpt:',
    truncate(skill.body, maxBodyChars),
    '',
  ].join('\n');
}

function truncate(value: string, maxChars: number): string {
  if (value.length <= maxChars) return value;
  return value.slice(0, maxChars) + '\n... [skill excerpt truncated]';
}

