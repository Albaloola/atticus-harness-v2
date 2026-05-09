import { describe, expect, it } from 'vitest';
import { createHarnessMcpServer } from '../../src/mcp/harness-server.ts';
import { ToolRegistry } from '../../src/tools/index.ts';
import type { Tool, ToolResult, ToolUseContext } from '../../src/types/tool.ts';

class EchoTool implements Tool {
  readonly name = 'echo_tool';
  readonly description = 'Echo a value';
  readonly inputSchema = {
    type: 'object',
    properties: { value: { type: 'string' } },
    required: ['value'],
  };

  async call(args: Record<string, unknown>, context: ToolUseContext): Promise<ToolResult> {
    return {
      success: true,
      output: `matter=${context.matterName ?? 'none'} value=${String(args.value)}`,
      data: { value: args.value },
    };
  }

  isEnabled(): boolean {
    return true;
  }
}

describe('Harness MCP server', () => {
  it('exposes the full default Harness tool catalog over MCP', async () => {
    const server = createHarnessMcpServer({
      log: () => undefined,
    });

    const list = await server.handleMessage({ jsonrpc: '2.0', id: 1, method: 'tools/list' });
    const tools = (list?.result as { tools: Array<{ name: string }> }).tools;
    const names = new Set(tools.map((tool) => tool.name));

    for (const name of [
      'read_file',
      'write_file',
      'edit_file',
      'glob',
      'grep',
      'bash',
      'todo_write',
      'tool_search',
      'sleep',
      'notebook_edit',
      'web_search',
      'web_fetch',
    ]) {
      expect(names.has(name)).toBe(true);
    }
  });

  it('lists Harness tools and executes calls through the registry', async () => {
    const registry = new ToolRegistry({ registerDefaults: false });
    registry.register(new EchoTool());
    const server = createHarnessMcpServer({
      toolRegistry: registry,
      matterName: 'case-1',
      log: () => undefined,
    });

    const initialize = await server.handleMessage({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: { protocolVersion: '2025-03-26' },
    });
    expect(initialize?.result).toMatchObject({
      protocolVersion: '2025-03-26',
      capabilities: { tools: { listChanged: false } },
    });

    const list = await server.handleMessage({ jsonrpc: '2.0', id: 2, method: 'tools/list' });
    expect(list?.result).toMatchObject({
      tools: [{ name: 'echo_tool', description: 'Echo a value' }],
    });

    const call = await server.handleMessage({
      jsonrpc: '2.0',
      id: 3,
      method: 'tools/call',
      params: { name: 'echo_tool', arguments: { value: 'hello' } },
    });

    expect(call?.result).toMatchObject({
      content: [{ type: 'text', text: 'matter=case-1 value=hello' }],
      structuredContent: { success: true, data: { value: 'hello' }, output: 'matter=case-1 value=hello' },
      isError: false,
    });
  });

  it('ignores initialized notifications', async () => {
    const server = createHarnessMcpServer({ toolRegistry: new ToolRegistry({ registerDefaults: false }) });

    await expect(server.handleMessage({
      jsonrpc: '2.0',
      method: 'notifications/initialized',
    })).resolves.toBeUndefined();
  });
});
