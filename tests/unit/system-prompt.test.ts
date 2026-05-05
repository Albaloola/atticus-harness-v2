import { describe, expect, it } from 'vitest';
import {
  SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  buildHarnessSystemPrompt,
} from '../../src/agent/system-prompt.js';
import { buildWorkerPrompt } from '../../src/orchestration/prompts.js';
import { DEFAULTS } from '../../src/config/schema.js';

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
    expect(prompt).toContain('Model note: this harness is currently configured around DeepSeek V4 Flash and DeepSeek V4 Pro');
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
});
