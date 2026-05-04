import { join } from 'path';
import { getMatterPath } from '../storage/matter.js';
import type { MatterIndex } from '../types/matter.js';
import type { AgentConfig } from '../types/agent.js';

const DEFAULT_SYSTEM_PROMPT = `You are Harness, a legal operations AI agent. You work on legal matters by analyzing evidence, drafting documents, verifying citations, and managing case workflows.

## Available Tools
You have access to tools for:
- Reading and writing files
- Searching files with glob patterns
- Executing SQL queries on the evidence database
- Making LLM calls (for analysis, drafting, etc.)
- Searching indexed evidence with full-text search

## Operating Principles
1. Always verify your understanding before taking action
2. Cite evidence using [EVIDENCE_ID] format
3. When blocked, explain exactly what you need from the operator
4. Never take external legal action without operator approval
5. Check your work before reporting completion

## Output Style
- Be concise and precise
- Use legal terminology appropriately
- Structure complex responses with clear sections
- Flag uncertainties and assumptions`;

export async function buildSystemPrompt(
  matterName: string,
  matterIndex: MatterIndex,
  config: AgentConfig
): Promise<string> {
  const prompts: string[] = [DEFAULT_SYSTEM_PROMPT];

  prompts.push(
    `\n## Current Matter: ${matterName}` +
    `\nStatus: ${matterIndex.status}` +
    `\nEvidence: ${matterIndex.evidenceCount} files` +
    `\nCandidates: ${matterIndex.candidateCount}` +
    `\nArtifacts: ${matterIndex.artifactCount}` +
    `\nCreated: ${matterIndex.created}`
  );

  if (config.skillName) {
    try {
      const { SkillRegistry } = await import('../skills/index.js');
      const registry = new SkillRegistry();
      await registry.loadFromDir(join(process.cwd(), 'skills'));
      const skillPrompt = registry.getSystemPrompt(config.skillName);
      if (skillPrompt) {
        prompts.push(`\n## Active Skill: ${config.skillName}\n${skillPrompt}`);
      } else {
        prompts.push(`\n## Active Skill: ${config.skillName}\n(No system prompt found for this skill)`);
      }
    } catch {
      prompts.push(`\n## Active Skill: ${config.skillName}\n(Unable to load skill file)`);
    }
  }

  return prompts.join('\n');
}
