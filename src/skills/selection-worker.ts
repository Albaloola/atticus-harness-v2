import { join } from 'path';
import { loadSkillsFromDir } from './loader.js';
import { selectSkills, type MatterMetadata } from '../legal/skills-router.js';
import { getPhaseByName, type PhaseDefinition } from '../legal/workflow.js';
import type { SkillDefinition } from './types.js';
import { buildCourtOfSessionRuleContext } from '../rules/court-session-rules.js';
import { buildSheriffCourtRuleContext } from '../rules/sheriff-court-rules.js';
import { buildScotCourtsCorpusContext } from '../rules/scotcourts-corpus.js';
import { loadPluginSkillDefinitions } from '../plugins/loader.js';
import { loadNativeSkillDefinitions, mergeSkillDefinitions } from './native.js';

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
    const skillIds = selectedSkills.map(({ skill }) => skill.skillId);
    const ruleContext = await buildCourtOfSessionRuleContext({
      query: input.objective,
      phaseId: input.phaseId,
      skillIds,
      matterMeta: input.matterMeta,
      limit: 6,
    }).catch((err: unknown) => formatCorpusContextWarning('Court of Session rules', err));
    const sheriffRulesContext = await buildSheriffCourtRuleContext({
      query: input.objective,
      phaseId: input.phaseId,
      skillIds,
      matterMeta: input.matterMeta,
      limit: 6,
    }).catch((err: unknown) => formatCorpusContextWarning('Sheriff Court rules', err));
    const scotCourtsContext = shouldAttachBroadScotCourtsContext(skillIds)
      ? await buildScotCourtsCorpusContext({
        query: input.objective,
        phaseId: input.phaseId,
        skillIds,
        matterMeta: input.matterMeta,
        includeSnippets: false,
        limit: 6,
      }).catch((err: unknown) => formatCorpusContextWarning('ScotCourts corpus', err))
      : '';

    if (selectedSkills.length === 0 && !ruleContext && !sheriffRulesContext && !scotCourtsContext) {
      return { selectedSkills, promptSection: '' };
    }

    const skillSection = selectedSkills.length > 0
      ? [
        '## Selected Harness Skills',
        'Use only these selected skill instructions where they match the assigned task. If no selected skill fits, proceed without forcing one.',
        'Do not load the entire skill catalog into context. Request a narrower follow-up if a referenced form/template is needed.',
        'If context becomes tight, preserve the task objective, selected skill names, evidence IDs, conclusions, blockers, and next actions in the final structured output.',
        '',
        ...selectedSkills.map(({ skill, score }) => formatSkill(skill, score, maxBodyChars)),
      ].join('\n')
      : '';
    const promptSection = [skillSection, ruleContext, sheriffRulesContext, scotCourtsContext].filter(Boolean).join('\n\n');

    return { selectedSkills, promptSection };
  }
}

export function clearSkillCatalogCache(): void {
  catalogCache.clear();
}

export async function loadSkillCatalog(skillsDir = join(process.cwd(), 'skills')): Promise<SkillDefinition[]> {
  const cached = catalogCache.get(skillsDir);
  if (cached) return cached;
  const promise = loadSkillsWithPlugins(skillsDir);
  catalogCache.set(skillsDir, promise);
  return promise;
}

async function loadSkillsWithPlugins(skillsDir: string): Promise<SkillDefinition[]> {
  const localSkills = await loadSkillsFromDir(skillsDir);
  const nativeSkills = loadNativeSkillDefinitions();
  try {
    const { loadGlobalConfig } = await import('../config/loader.js');
    const { config } = await loadGlobalConfig();
    const pluginSkills = await loadPluginSkillDefinitions(config.plugins);
    return mergeSkillDefinitions([nativeSkills, localSkills, pluginSkills]);
  } catch {
    return mergeSkillDefinitions([nativeSkills, localSkills]);
  }
}

function formatSkill(skill: SkillDefinition, score: number, maxBodyChars: number): string {
  const manifest = skill.manifest;
  const meta = [
    `Skill: ${skill.skillId}`,
    `Score: ${score.toFixed(1)}`,
    `Description: ${manifest.description}`,
    manifest.whenToUse ? `When to use: ${manifest.whenToUse}` : undefined,
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

function formatCorpusContextWarning(corpusName: string, err: unknown): string {
  const message = err instanceof Error ? err.message : String(err);
  return `## ${corpusName} Context Warning\nUnable to load ${corpusName} context: ${message}`;
}

function shouldAttachBroadScotCourtsContext(skillIds: string[]): boolean {
  return !skillIds.includes('atticus-sheriff-court-rules') || skillIds.includes('atticus-scotcourts-corpus');
}
