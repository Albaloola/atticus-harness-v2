import { join } from 'path';
import { getMatterPath } from '../storage/matter.js';
import type { MatterIndex } from '../types/matter.js';
import type { AgentConfig } from '../types/agent.js';
import { buildHarnessSystemPrompt } from './system-prompt.js';
import { resolveConfig } from '../config/loader.js';
import { buildCourtOfSessionRuleContext } from '../rules/court-session-rules.js';
import { buildSheriffCourtRuleContext } from '../rules/sheriff-court-rules.js';
import { buildScotCourtsCorpusContext } from '../rules/scotcourts-corpus.js';

const AGENT_ROLE_INSTRUCTIONS = `You work on legal matters by analyzing evidence, drafting documents, verifying citations, running review/gates, and managing case workflows.

Available tool capabilities include reading and writing matter files, searching files, querying evidence SQLite, making LLM calls, searching indexed evidence, drafting candidates, verification, ingestion, hostile review, and quality gates.

When blocked, explain exactly what is missing from the case record or operator. Do not treat a blocker as permission to invent facts.`;

export async function buildSystemPrompt(
  matterName: string,
  matterIndex: MatterIndex,
  config: AgentConfig
): Promise<string> {
  const prompts: string[] = [];

  if (config.skillName) {
    try {
      const { SkillRegistry } = await import('../skills/index.js');
      const registry = new SkillRegistry();
      await registry.loadFromDir(join(process.cwd(), 'skills'));
      const skillPrompt = registry.getSystemPrompt(config.skillName);
      if (skillPrompt) {
        prompts.push(`## Active Skill: ${config.skillName}\n${skillPrompt}`);
      } else {
        prompts.push(`## Active Skill: ${config.skillName}\n(No system prompt found for this skill)`);
      }
    } catch {
      prompts.push(`## Active Skill: ${config.skillName}\n(Unable to load skill file)`);
    }
    const skillIds = [config.skillName];
    const rulesContext = await buildCourtOfSessionRuleContext({
      query: config.skillName,
      skillIds,
      forceAttach: config.skillName === 'atticus-court-of-session-rules',
      limit: 6,
    }).catch((err: unknown) => formatCorpusContextWarning('Court of Session rules', err));
    if (rulesContext) prompts.push(rulesContext);
    const sheriffRulesContext = await buildSheriffCourtRuleContext({
      query: config.skillName,
      skillIds,
      limit: 6,
    }).catch((err: unknown) => formatCorpusContextWarning('Sheriff Court rules', err));
    if (sheriffRulesContext) prompts.push(sheriffRulesContext);
    if (shouldAttachBroadScotCourtsContext(skillIds)) {
      const scotCourtsContext = await buildScotCourtsCorpusContext({
        query: config.skillName,
        skillIds,
        includeSnippets: false,
        limit: 6,
      }).catch((err: unknown) => formatCorpusContextWarning('ScotCourts corpus', err));
      if (scotCourtsContext) prompts.push(scotCourtsContext);
    }
  }

  const resolved = await resolveConfig({ matterName }).catch(() => undefined);
  return buildHarnessSystemPrompt('agent_loop', AGENT_ROLE_INSTRUCTIONS, {
    matterName,
    matter: matterIndex,
    model: config.model || resolved?.model,
    providerName: resolved?.providerName,
    providerPolicy: resolved?.providerPolicy,
    autonomy: resolved?.autonomy,
    toolPolicy: resolved?.toolPolicy,
    skillSection: prompts.filter(Boolean).join('\n\n') || undefined,
  });
}

function formatCorpusContextWarning(corpusName: string, err: unknown): string {
  const message = err instanceof Error ? err.message : String(err);
  return `## ${corpusName} Context Warning\nUnable to load ${corpusName} context: ${message}`;
}

function shouldAttachBroadScotCourtsContext(skillIds: string[]): boolean {
  return !skillIds.includes('atticus-sheriff-court-rules') || skillIds.includes('atticus-scotcourts-corpus');
}
