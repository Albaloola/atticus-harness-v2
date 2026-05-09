import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync, readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { QueryLoop } from '../../src/agent/query-loop.ts';
import { ToolRegistry } from '../../src/tools/index.ts';
import type { Tool, ToolResult, ToolUseContext } from '../../src/types/tool.ts';
import type { LLMResponse, LLMRequest } from '../../src/types/llm.ts';
import { initMatter, deleteMatter } from '../../src/storage/matter.ts';
import { closeAllStateDbs } from '../../src/state/store.ts';
import { TokenLimitError } from '../../src/llm/errors.ts';

class FakeLLMClient {
  capabilities?: { tools: boolean; jsonSchema?: boolean; agentMode?: boolean; nativeMcpTools?: boolean };
  requests: LLMRequest[] = [];
  private responses: Array<LLMResponse | Error>;
  private index = 0;

  constructor(responses: Array<LLMResponse | Error>, capabilities?: { tools: boolean; jsonSchema?: boolean; agentMode?: boolean; nativeMcpTools?: boolean }) {
    this.responses = responses;
    this.capabilities = capabilities;
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    this.requests.push(request);
    const r = this.responses[this.index];
    if (r === undefined) throw new Error('No more fake responses');
    this.index++;
    if (r instanceof Error) throw r;
    return r;
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async healthCheck(): Promise<boolean> {
    return true;
  }
}

class FakeTool implements Tool {
  readonly name: string;
  readonly description = 'Fake test tool';
  readonly inputSchema = {};
  private result: ToolResult;

  constructor(name: string, result: ToolResult) {
    this.name = name;
    this.result = result;
  }

  async call(_args: Record<string, unknown>, _context: ToolUseContext): Promise<ToolResult> {
    return this.result;
  }

  isEnabled(): boolean {
    return true;
  }
}

function makeResponse(overrides: Partial<LLMResponse> = {}): LLMResponse {
  return {
    content: 'Test response',
    ...overrides,
  };
}

function makeSuccessToolResult(output: string): ToolResult {
  return { success: true, output };
}

function makeToolCallResponse(toolName: string): LLMResponse {
  return {
    content: '',
    toolCalls: [{ id: 'call_1', name: toolName, args: {} }],
  };
}

describe('QueryLoop', () => {
  describe('no tool calls', () => {
    it('completes successfully with a plain response', async () => {
      const toolRegistry = new ToolRegistry();
      const fakeClient = new FakeLLMClient([makeResponse({ content: 'Hello, world!' })]);

      const loop = new QueryLoop(
        {
          systemPrompt: 'You are a test agent.',
          tools: toolRegistry,
          quietMode: true,
        },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Hello');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe('Hello, world!');
      expect(result.turns).toHaveLength(0);
      expect(result.error).toBeUndefined();
    });

    it('returns full history', async () => {
      const toolRegistry = new ToolRegistry();
      const fakeClient = new FakeLLMClient([makeResponse({ content: 'Done' })]);

      const loop = new QueryLoop(
        { systemPrompt: 'Be helpful.', tools: toolRegistry, quietMode: true },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('User message');

      expect(result.history).toHaveLength(3);
      expect(result.history[0].role).toBe('system');
      expect(result.history[0].content).toBe('Be helpful.');
      expect(result.history[1].role).toBe('user');
      expect(result.history[1].content).toBe('User message');
      expect(result.history[2].role).toBe('assistant');
      expect(result.history[2].content).toBe('Done');
    });

    it('disables tool definitions when toolMode is disabled', async () => {
      const toolRegistry = new ToolRegistry();
      const fakeClient = new FakeLLMClient(
        [makeResponse({ content: 'Tool-free answer' })],
        { tools: false, jsonSchema: true },
      );

      const loop = new QueryLoop(
        {
          systemPrompt: 'Be helpful.',
          tools: toolRegistry,
          toolMode: 'disabled',
          quietMode: true,
        },
        fakeClient,
      );

      const result = await loop.run('User message');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe('Tool-free answer');
    });
  });

  describe('tool calls', () => {
    it('fails before a model request when the client does not support tools', async () => {
      const toolRegistry = new ToolRegistry();
      const fakeClient = new FakeLLMClient([], { tools: false, jsonSchema: true });

      const loop = new QueryLoop(
        { systemPrompt: 'Use tools.', tools: toolRegistry, providerName: 'codex-sdk', quietMode: true },
        fakeClient,
      );

      const result = await loop.run('Find data');

      expect(result.status).toBe('error');
      expect(result.error).toContain('does not support Harness-owned tool calls in this profile');
      expect(result.error).toContain('tool-capable provider profile');
      expect(result.error).not.toContain('OpenAI-compatible');
      expect(result.turns).toHaveLength(0);
    });

    it('allows native-agent providers to receive tool definitions without Harness-owned execution', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('search_tool', makeSuccessToolResult('found results')));
      const fakeClient = new FakeLLMClient(
        [makeResponse({ content: 'Native agent handled it' })],
        { tools: false, jsonSchema: true, agentMode: true, nativeMcpTools: true },
      );

      const loop = new QueryLoop(
        { systemPrompt: 'Use tools.', tools: toolRegistry, providerName: 'codex-sdk', quietMode: true },
        fakeClient,
      );

      const result = await loop.run('Find data');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe('Native agent handled it');
      expect(result.turns).toHaveLength(0);
      expect(fakeClient.requests[0].tools?.some((tool) => tool.name === 'search_tool')).toBe(true);
    });

    it('executes tool calls and continues the loop', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('search_tool', makeSuccessToolResult('found results')));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('search_tool'),
        makeResponse({ content: 'Final answer based on results' }),
      ]);

      const loop = new QueryLoop(
        { systemPrompt: 'Use tools.', tools: toolRegistry, quietMode: true },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Find data');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe('Final answer based on results');
      expect(result.turns).toHaveLength(1);
    });

    it('includes tool results in history', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('search_tool', makeSuccessToolResult('found results')));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('search_tool'),
        makeResponse({ content: 'Summary' }),
      ]);

      const loop = new QueryLoop(
        { systemPrompt: 'Use tools.', tools: toolRegistry, quietMode: true },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Search');

      expect(result.turns).toHaveLength(1);
      expect(result.turns[0].toolCalls).toHaveLength(1);
      expect(result.turns[0].toolCalls![0].toolName).toBe('search_tool');
      expect(result.turns[0].toolCalls![0].result.success).toBe(true);

      const toolMessage = result.history.find(m => m.role === 'tool');
      expect(toolMessage).toBeDefined();
      expect(toolMessage!.content).toContain('found results');
    });

    it('does not clip ordinary large read outputs before the model can inspect them', async () => {
      const largeOutput = `START\n${'x'.repeat(6500)}\nTAIL-MARKER`;
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('large_read_tool', makeSuccessToolResult(largeOutput)));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('large_read_tool'),
        makeResponse({ content: 'Summary' }),
      ]);

      const loop = new QueryLoop(
        { systemPrompt: 'Use tools.', tools: toolRegistry, quietMode: true },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Read the file');
      const secondRequest = fakeClient.requests[1];
      expect(secondRequest).toBeDefined();
      const toolMessage = secondRequest!.messages.find((message) => message.role === 'tool');

      expect(result.status).toBe('completed');
      expect(toolMessage?.content).toContain('TAIL-MARKER');
      expect(toolMessage?.content).not.toContain('... [truncated]');
    });

    it('persists oversized tool outputs and returns a bounded preview', async () => {
      const tmpDir = mkdtempSync(join(tmpdir(), 'qloop-tool-results-'));
      const originalCwd = process.cwd();
      process.chdir(tmpDir);
      try {
        const largeOutput = `START\n${'x'.repeat(5000)}\nTAIL-MARKER`;
        const toolRegistry = new ToolRegistry();
        toolRegistry.register(new FakeTool('large_read_tool', makeSuccessToolResult(largeOutput)));
        const fakeClient = new FakeLLMClient([
          makeToolCallResponse('large_read_tool'),
          makeResponse({ content: 'Summary' }),
        ]);

        const loop = new QueryLoop(
          {
            systemPrompt: 'Use tools.',
            tools: toolRegistry,
            runId: 'run-oversized',
            maxToolOutputChars: 500,
            quietMode: true,
          },
          fakeClient as unknown as FakeLLMClient & typeof fakeClient,
        );

        const result = await loop.run('Read the file');
        const stored = result.turns[0].toolCalls?.[0].result.storedResult;
        const secondRequest = fakeClient.requests[1];
        const toolMessage = secondRequest!.messages.find((message) => message.role === 'tool');

        expect(result.status).toBe('completed');
        expect(stored).toBeDefined();
        expect(stored!.storedResultPath).toContain('tool-results');
        expect(existsSync(stored!.storedResultPath)).toBe(true);
        expect(toolMessage?.content).toContain('storedResultPath=');
        expect(toolMessage?.content).not.toContain('TAIL-MARKER');
        const record = JSON.parse(readFileSync(stored!.storedResultPath, 'utf-8'));
        expect(record.output).toContain('TAIL-MARKER');
      } finally {
        process.chdir(originalCwd);
        rmSync(tmpDir, { recursive: true, force: true });
      }
    });
  });

  describe('maxTurns', () => {
    it('respects the maxTurns limit', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('loop_tool', makeSuccessToolResult('ok')));
      const toolResponse = makeToolCallResponse('loop_tool');
      const fakeClient = new FakeLLMClient([toolResponse, toolResponse, toolResponse, toolResponse]);

      const loop = new QueryLoop(
        { systemPrompt: 'x', tools: toolRegistry, maxTurns: 3, quietMode: true },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Go');

      expect(result.status).toBe('max_turns');
      expect(result.turns).toHaveLength(3);
      expect(result.finalContent).toBe('');
    });
  });

  describe('history compaction', () => {
    it('keeps workers alive by summarizing older tool context when history grows', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('large_tool', makeSuccessToolResult('important evidence EV-001 '.repeat(80))));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('large_tool'),
        makeToolCallResponse('large_tool'),
        makeToolCallResponse('large_tool'),
        makeToolCallResponse('large_tool'),
        makeToolCallResponse('large_tool'),
        makeToolCallResponse('large_tool'),
        makeResponse({ content: 'Final answer after compaction' }),
      ]);

      const loop = new QueryLoop(
        {
          systemPrompt: 'Use tools and preserve evidence IDs.',
          tools: toolRegistry,
          maxTurns: 10,
          maxHistoryChars: 1200,
          quietMode: true,
        },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Analyze the large record');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe('Final answer after compaction');
      expect(result.history.some((message) => message.content.includes('## Compacted Prior Context'))).toBe(true);
      expect(result.history.some((message) => message.content.includes('EV-001'))).toBe(true);
    });

    it('recovers from context length errors by compacting history and retrying once', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('large_tool', makeSuccessToolResult('important evidence EV-CTX '.repeat(80))));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('large_tool'),
        new TokenLimitError(0, 0, 'test-provider'),
        makeResponse({ content: 'Recovered after compaction' }),
      ]);

      const loop = new QueryLoop(
        {
          systemPrompt: 'Use tools and preserve evidence IDs.',
          tools: toolRegistry,
          maxTurns: 3,
          maxHistoryChars: 100_000,
          quietMode: true,
        },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Analyze the large record');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe('Recovered after compaction');
      expect(fakeClient.requests).toHaveLength(3);
      expect(fakeClient.requests[2].messages.some((message) => message.content.includes('context_overflow'))).toBe(true);
      expect(fakeClient.requests[2].messages.some((message) => message.content.includes('EV-CTX'))).toBe(true);
    });
  });

  describe('events (matterName)', () => {
    let tmpDir: string;
    let originalCwd: string;
    const matterName = 'test-matter-events';

    beforeEach(async () => {
      tmpDir = mkdtempSync(join(tmpdir(), 'qloop-events-'));
      originalCwd = process.cwd();
      process.chdir(tmpDir);
      await initMatter(matterName);
    });

    afterEach(() => {
      process.chdir(originalCwd);
      closeAllStateDbs();
      rmSync(tmpDir, { recursive: true, force: true });
    });

    it('emits agent.turn.completed events when matterName is provided', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('event_tool', makeSuccessToolResult('ok')));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('event_tool'),
        makeResponse({ content: 'Done with analysis' }),
      ]);

      const loop = new QueryLoop(
        {
          systemPrompt: 'x',
          tools: toolRegistry,
          matterName,
          runId: 'run-1',
          taskId: 'task-1',
          quietMode: true,
        },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Analyze');

      expect(result.status).toBe('completed');

      const eventsPath = join('matters', matterName, '_state', 'events.jsonl');
      const eventsContent = readFileSync(eventsPath, 'utf-8');
      const lines = eventsContent.trim().split('\n').filter(Boolean);
      expect(lines.length).toBeGreaterThanOrEqual(1);

      const events = lines.map((line) => JSON.parse(line));
      expect(events.some((event) => event.type === 'tool.called')).toBe(true);
      const event = events.find((e) => e.type === 'agent.turn.completed');
      expect(event).toBeDefined();
      expect(event!.type).toBe('agent.turn.completed');
      expect(event!.source).toBe('agent');
      expect(event!.data.turnNumber).toBe(1);
    });

    it('emits context compaction events when recovering from provider context limits', async () => {
      const toolRegistry = new ToolRegistry();
      toolRegistry.register(new FakeTool('large_tool', makeSuccessToolResult('important evidence EV-EVENT '.repeat(80))));
      const fakeClient = new FakeLLMClient([
        makeToolCallResponse('large_tool'),
        new TokenLimitError(0, 0, 'test-provider'),
        makeResponse({ content: 'Recovered with event' }),
      ]);

      const loop = new QueryLoop(
        {
          systemPrompt: 'x',
          tools: toolRegistry,
          matterName,
          runId: 'run-context',
          taskId: 'task-context',
          maxTurns: 3,
          quietMode: true,
        },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Analyze');

      expect(result.status).toBe('completed');
      const eventsPath = join('matters', matterName, '_state', 'events.jsonl');
      const events = readFileSync(eventsPath, 'utf-8')
        .trim()
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line));
      const event = events.find((entry) => entry.type === 'llm.context.compacted');
      expect(event).toBeDefined();
      expect(event.runId).toBe('run-context');
      expect(event.taskId).toBe('task-context');
      expect(event.data.reason).toBe('context_length');
      expect(event.data.compacted).toBe(true);
    });
  });

  describe('transcript', () => {
    let tmpDir: string;
    let originalCwd: string;
    const matterName = 'test-matter-transcript';

    beforeEach(async () => {
      tmpDir = mkdtempSync(join(tmpdir(), 'qloop-trans-'));
      originalCwd = process.cwd();
      process.chdir(tmpDir);
      await initMatter(matterName);
    });

    afterEach(() => {
      process.chdir(originalCwd);
      closeAllStateDbs();
      rmSync(tmpDir, { recursive: true, force: true });
    });

    it('saves transcript when matterName is provided', async () => {
      const toolRegistry = new ToolRegistry();
      const fakeClient = new FakeLLMClient([makeResponse({ content: 'Final transcript content' })]);

      const loop = new QueryLoop(
        {
          systemPrompt: 'x',
          tools: toolRegistry,
          matterName,
          quietMode: true,
        },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Hello');

      expect(result.transcriptPath).toBeDefined();
      expect(result.transcriptPath).toContain('_candidates');
      expect(result.transcriptPath).toContain('transcript-');
      expect(existsSync(result.transcriptPath!)).toBe(true);

      const content = readFileSync(result.transcriptPath!, 'utf-8');
      expect(content).toContain('SYSTEM');
      expect(content).toContain('USER');
      expect(content).toContain('ASSISTANT');
      expect(content).toContain('Final transcript content');
    });
  });

  describe('error handling', () => {
    it('handles LLM errors gracefully', async () => {
      const toolRegistry = new ToolRegistry();
      const fakeClient = new FakeLLMClient([]) as unknown as FakeLLMClient & typeof fakeClient;

      const loop = new QueryLoop(
        { systemPrompt: 'x', tools: toolRegistry, quietMode: true },
        new (class ThrowingClient {
          async chatWithTools() {
            throw new Error('API quota exceeded');
          }
          async chat() {
            throw new Error('API quota exceeded');
          }
        })(),
      );

      const result = await loop.run('Hello');

      expect(result.status).toBe('error');
      expect(result.error).toContain('API quota exceeded');
      expect(result.finalContent).toBe('');
    });
  });

  describe('blocked phrases', () => {
    it('does NOT detect blocked phrases - passes them through as completed', async () => {
      const toolRegistry = new ToolRegistry();
      const blockedContent = 'I cannot proceed without your input on this matter';
      const fakeClient = new FakeLLMClient([makeResponse({ content: blockedContent })]);

      const loop = new QueryLoop(
        { systemPrompt: 'x', tools: toolRegistry, quietMode: true },
        fakeClient as unknown as FakeLLMClient & typeof fakeClient,
      );

      const result = await loop.run('Do it');

      expect(result.status).toBe('completed');
      expect(result.finalContent).toBe(blockedContent);
      expect((result as Record<string, unknown>).status).not.toBe('blocked');
    });
  });
});
