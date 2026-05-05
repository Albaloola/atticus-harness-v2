import { describe, it, expect } from 'vitest';
import { classifyToolCategory, evaluateAutonomyPolicy } from '../../src/config/policy.ts';
import { DEFAULTS } from '../../src/config/schema.ts';
import { ToolRegistry } from '../../src/tools/index.ts';
import type { ToolUseContext } from '../../src/types/tool.ts';

describe('tool policy classification', () => {
  it('treats evidence chunk reads as read-only deep review access', () => {
    expect(classifyToolCategory('evidence_chunk_read')).toBe('read_only');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'evidence_chunk_read')).toBe('allow');
  });

  it('classifies web research as network-gated work', () => {
    expect(classifyToolCategory('web_fetch')).toBe('network');
    expect(classifyToolCategory('web_search')).toBe('network');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'web_fetch')).toBe('ask');
  });

  it('blocks tools outside a worker allow-list before execution', async () => {
    const registry = new ToolRegistry({ allowedTools: ['read_file'] });
    const result = await registry.execute('write_file', { path: '/tmp/x', content: 'nope' }, makeContext());

    expect(result.success).toBe(false);
    expect(result.error).toContain('not allowed');
  });

  it('blocks policy ask decisions when policy enforcement is enabled', async () => {
    const registry = new ToolRegistry({ enforcePolicy: true });
    const result = await registry.execute('write_file', { path: '/tmp/x', content: 'nope' }, makeContext());

    expect(result.success).toBe(false);
    expect(result.error).toContain('policy decision: ask');
  });
});

function makeContext(): ToolUseContext {
  return {
    getEvidencePath: (id: string) => id,
    getExtractionPath: (id: string) => id,
    getConfig: () => ({ autonomy: DEFAULTS.autonomy }),
    log: () => {},
  };
}
