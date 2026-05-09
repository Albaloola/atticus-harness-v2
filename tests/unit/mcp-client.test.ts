import { describe, expect, it, afterEach } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { McpToolManager } from '../../src/mcp/client.ts';
import type { ToolUseContext } from '../../src/types/tool.ts';

describe('McpToolManager', () => {
  const tmpDirs: string[] = [];

  afterEach(() => {
    for (const dir of tmpDirs.splice(0)) {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('lists and calls stdio MCP tools as Harness tools', async () => {
    const tmpDir = mkdtempSync(join(tmpdir(), 'harness-mcp-client-'));
    tmpDirs.push(tmpDir);
    const serverPath = join(tmpDir, 'server.mjs');
    writeFileSync(serverPath, fakeMcpServerScript(), 'utf-8');

    const manager = new McpToolManager(5_000);
    const registrations = await manager.connectConfigured({
      enabled: true,
      defaultTimeoutMs: 5_000,
      servers: {
        demo: {
          type: 'stdio',
          command: process.execPath,
          args: [serverPath],
        },
      },
    });

    try {
      expect(registrations).toHaveLength(1);
      expect(registrations[0].identity).toEqual({
        serverName: 'demo',
        toolName: 'echo',
        exposedName: 'mcp__demo__echo',
      });

      const result = await registrations[0].tool.call({ value: 'hello' }, makeContext());
      expect(result).toMatchObject({
        success: true,
        output: 'echo: hello',
        data: { value: 'hello' },
      });
    } finally {
      await manager.close();
    }
  });
});

function makeContext(): ToolUseContext {
  return {
    getEvidencePath: (id) => id,
    getExtractionPath: (id) => id,
    getConfig: () => ({}),
    log: () => undefined,
  };
}

function fakeMcpServerScript(): string {
  return `
let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  buffer += chunk;
  drain();
});

function drain() {
  while (buffer.includes('\\n')) {
    const index = buffer.indexOf('\\n');
    const line = buffer.slice(0, index).trim();
    buffer = buffer.slice(index + 1);
    if (!line) continue;
    handle(JSON.parse(line));
  }
}

function send(id, result) {
  process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, result }) + '\\n');
}

function handle(message) {
  if (message.method === 'initialize') {
    send(message.id, {
      protocolVersion: message.params?.protocolVersion ?? '2025-03-26',
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: 'fake', version: '1.0.0' }
    });
    return;
  }
  if (message.method === 'notifications/initialized') return;
  if (message.method === 'tools/list') {
    send(message.id, {
      tools: [{
        name: 'echo',
        description: 'Echo a value',
        inputSchema: { type: 'object', properties: { value: { type: 'string' } } }
      }]
    });
    return;
  }
  if (message.method === 'tools/call') {
    const value = message.params?.arguments?.value ?? '';
    send(message.id, {
      content: [{ type: 'text', text: 'echo: ' + value }],
      structuredContent: { value },
      isError: false
    });
  }
}
`;
}
