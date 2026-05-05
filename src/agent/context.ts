import { join } from 'path';
import { getMatterPath } from '../storage/matter.js';
import type { MatterIndex } from '../types/matter.js';
import type { AgentConfig } from '../types/agent.js';
import { buildHarnessSystemPrompt } from './system-prompt.js';
import { resolveConfig } from '../config/loader.js';

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
