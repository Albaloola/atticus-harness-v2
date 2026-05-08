import { describe, expect, it } from 'vitest';
import { tmpdir } from 'os';
import { join } from 'path';
import {
  SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  buildHarnessSystemPrompt,
} from '../../src/agent/system-prompt.js';
import { buildSystemPrompt } from '../../src/agent/context.js';
import { buildWorkerPrompt } from '../../src/orchestration/prompts.js';
import { DEFAULTS } from '../../src/config/schema.js';
import type { AgentConfig } from '../../src/types/agent.js';
import type { MatterIndex } from '../../src/types/matter.js';

describe('system prompt assembly', () => {
  it('keeps cacheable harness policy before dynamic matter and settings context', () => {
    const prompt = buildHarnessSystemPrompt('agent_loop', 'Role-specific instruction.', {
      matterName: 'anfal',
      model: 'deepseek/deepseek-v4-pro',
      providerName: 'openrouter',
      providerPolicy: DEFAULTS.providerPolicy,
      autonomy: DEFAULTS.autonomy,
      toolPolicy: DEFAULTS.toolPolicy,
      skillSection: '## Active Skill: legal-humanizer\nMake the legal draft clear and natural.',
    });

    expect(prompt).toContain('You are Atticus Harness V2');
    expect(prompt).toContain('# Legal Operating Principles');
    expect(prompt).toContain(SYSTEM_PROMPT_DYNAMIC_BOUNDARY);
    expect(prompt).toContain('Model note: this harness uses explicit provider-policy routes and fails closed');
    expect(prompt).toContain('# Model Delegation');
    expect(prompt).toContain('Matter: anfal');
    expect(prompt).toContain('Autonomy mode: operator_safe');
    expect(prompt).toContain('Active Skill: legal-humanizer');
    expect(prompt.indexOf('# System')).toBeLessThan(prompt.indexOf(SYSTEM_PROMPT_DYNAMIC_BOUNDARY));
    expect(prompt.indexOf(SYSTEM_PROMPT_DYNAMIC_BOUNDARY)).toBeLessThan(prompt.indexOf('# Environment'));
  });

  it('wraps orchestration role prompts with the same harness prompt contract', () => {
    const prompt = buildWorkerPrompt({
      matterName: 'test-matter',
      skillSection: '## Selected Skill\nUse this bounded skill context only when relevant.',
    });

    expect(prompt).toContain('Role: worker');
    expect(prompt).toContain('You are a specialized Worker Agent');
    expect(prompt).toContain('The conversation or worker history may be compacted');
    expect(prompt).toContain('Selected Skill');
  });

  it('does not attach Scots court corpora just because any skill is active', async () => {
    const prompt = await buildSystemPrompt('test-matter', makeMatterIndex('test-matter'), makeAgentConfig('contract-review'));

    expect(prompt).toContain('Active Skill: contract-review');
    expect(prompt).not.toContain('ScotCourts Corpus');
    expect(prompt).not.toContain('Court of Session Rules Corpus');
  });

  it('attaches the ScotCourts corpus for Scots corpus skills', async () => {
    const prompt = await buildSystemPrompt(
      'test-matter',
      makeMatterIndex('test-matter'),
      makeAgentConfig('atticus-scotcourts-corpus'),
    );

    expect(prompt).toContain('Active Skill: atticus-scotcourts-corpus');
    expect(prompt).toContain('ScotCourts Corpus');
  });

  it('attaches focused Sheriff Court rules without broad ScotCourts context for the Sheriff skill', async () => {
    const prompt = await buildSystemPrompt(
      'test-matter',
      makeMatterIndex('test-matter'),
      makeAgentConfig('atticus-sheriff-court-rules'),
    );

    expect(prompt).toContain('Active Skill: atticus-sheriff-court-rules');
    expect(prompt).toContain('Sheriff Court Rules Corpus');
    expect(prompt).not.toContain('ScotCourts Corpus');
    expect(prompt).not.toContain('Court of Session Rules Corpus');
  });

  it('surfaces Scots corpus load failures instead of silently dropping context', async () => {
    const previousSourceDir = process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR;
    process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR = join(tmpdir(), 'missing-atticus-scotcourts-corpus');

    try {
      const prompt = await buildSystemPrompt(
        'test-matter',
        makeMatterIndex('test-matter'),
        makeAgentConfig('atticus-scotcourts-corpus'),
      );

      expect(prompt).toContain('ScotCourts corpus Context Warning');
      expect(prompt).toContain('Unable to load ScotCourts corpus context');
    } finally {
      if (previousSourceDir === undefined) {
        delete process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR;
      } else {
        process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR = previousSourceDir;
      }
    }
  });
});

function makeMatterIndex(name: string): MatterIndex {
  return {
    name,
    created: '2026-05-08T00:00:00.000Z',
    updated: '2026-05-08T00:00:00.000Z',
    status: 'pending',
    evidenceCount: 0,
    candidateCount: 0,
    artifactCount: 0,
    config: {},
  };
}

function makeAgentConfig(skillName: string): AgentConfig {
  return {
    maxTurns: 3,
    model: 'test-model',
    temperature: 0,
    skillName,
    quietMode: true,
    verbose: false,
  };
}
