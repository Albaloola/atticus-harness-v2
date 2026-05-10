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

  it('treats matter inventory as read-only manifest access', () => {
    expect(classifyToolCategory('matter_inventory')).toBe('read_only');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'matter_inventory')).toBe('allow');
  });

  it('classifies web research as network-gated work', () => {
    expect(classifyToolCategory('web_fetch')).toBe('network');
    expect(classifyToolCategory('web_search')).toBe('network');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'web_fetch')).toBe('ask');
  });

  it('treats draft generation as a local prepare-only tool', () => {
    expect(classifyToolCategory('draft')).toBe('read_only');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'draft')).toBe('allow');
  });

  it('allows todo and candidate writes when autonomous file writes are enabled', () => {
    const autonomy = {
      ...DEFAULTS.autonomy,
      autoApproveFileWrites: true,
    };

    expect(classifyToolCategory('todo_write')).toBe('matter_write');
    expect(classifyToolCategory('submit_candidate')).toBe('matter_write');
    expect(evaluateAutonomyPolicy(autonomy, 'todo_write')).toBe('allow');
    expect(evaluateAutonomyPolicy(autonomy, 'submit_candidate')).toBe('allow');
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

  it('omits disabled tools from model-facing definitions', () => {
    const registry = new ToolRegistry({ registerDefaults: false });
    registry.register({
      name: 'disabled_probe',
      description: 'A deliberately disabled tool for registry exposure tests',
      inputSchema: { type: 'object', properties: {} },
      isEnabled: () => false,
      call: async () => ({ success: false, error: 'disabled' }),
    });

    const registeredNames = registry.getAll().map((tool) => tool.name);
    const definitionNames = registry.getAllDefinitions().map((tool) => tool.name);

    expect(registeredNames).toContain('disabled_probe');
    expect(definitionNames).not.toContain('disabled_probe');
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
