import { describe, expect, it } from 'vitest';
import { executeToolCalls, partitionToolCalls } from '../../src/tools/executor.ts';
import { ToolRegistry } from '../../src/tools/index.ts';
import type { Tool, ToolResult, ToolUseContext } from '../../src/types/tool.ts';
import type { ToolCall } from '../../src/types/message.ts';

class TimedTool implements Tool {
  readonly description = 'timed test tool';
  readonly inputSchema = {};
  readonly executionKind: Tool['executionKind'];
  readonly isConcurrencySafe: boolean;
  readonly modifiesContext: boolean;
  calls = 0;

  constructor(
    readonly name: string,
    private readonly options: {
      delayMs?: number;
      success?: boolean;
      onStart?: () => void;
      onEnd?: () => void;
      executionKind?: Tool['executionKind'];
      isConcurrencySafe?: boolean;
      modifiesContext?: boolean;
    } = {},
  ) {
    this.executionKind = options.executionKind ?? 'read';
    this.isConcurrencySafe = options.isConcurrencySafe ?? this.executionKind === 'read';
    this.modifiesContext = options.modifiesContext ?? this.executionKind !== 'read';
  }

  async call(_args: Record<string, unknown>, _context: ToolUseContext): Promise<ToolResult> {
    this.calls += 1;
    this.options.onStart?.();
    await new Promise((resolve) => setTimeout(resolve, this.options.delayMs ?? 0));
    this.options.onEnd?.();
    return this.options.success === false
      ? { success: false, error: `${this.name} failed` }
      : { success: true, output: `${this.name} ok` };
  }

  isEnabled(): boolean {
    return true;
  }
}

function call(id: string, name: string): ToolCall {
  return { id, name, args: {} };
}

function context(): ToolUseContext {
  return {
    getEvidencePath: (id) => id,
    getExtractionPath: (id) => id,
    getConfig: () => ({}),
    log: () => undefined,
  };
}

describe('tool executor', () => {
  it('partitions adjacent read tools into concurrent batches and writes into serial batches', () => {
    const registry = new ToolRegistry({ registerDefaults: false });
    registry.register(new TimedTool('safe_a', { executionKind: 'read' }));
    registry.register(new TimedTool('safe_b', { executionKind: 'read' }));
    registry.register(new TimedTool('write_a', { executionKind: 'write' }));
    registry.register(new TimedTool('safe_c', { executionKind: 'read' }));

    const batches = partitionToolCalls(registry, [
      call('1', 'safe_a'),
      call('2', 'safe_b'),
      call('3', 'write_a'),
      call('4', 'safe_c'),
    ]);

    expect(batches.map((batch) => ({ kind: batch.kind, names: batch.calls.map((toolCall) => toolCall.name) }))).toEqual([
      { kind: 'concurrent', names: ['safe_a', 'safe_b'] },
      { kind: 'serial', names: ['write_a'] },
      { kind: 'concurrent', names: ['safe_c'] },
    ]);
  });

  it('runs concurrency-safe read tools in parallel', async () => {
    const registry = new ToolRegistry({ registerDefaults: false });
    let active = 0;
    let maxActive = 0;
    const onStart = () => {
      active += 1;
      maxActive = Math.max(maxActive, active);
    };
    const onEnd = () => {
      active -= 1;
    };
    registry.register(new TimedTool('safe_a', { delayMs: 25, executionKind: 'read', onStart, onEnd }));
    registry.register(new TimedTool('safe_b', { delayMs: 25, executionKind: 'read', onStart, onEnd }));

    const results = await executeToolCalls({
      registry,
      toolCalls: [call('1', 'safe_a'), call('2', 'safe_b')],
      createContext: context,
    });

    expect(results.map((result) => result.result.success)).toEqual([true, true]);
    expect(maxActive).toBeGreaterThan(1);
  });

  it('serializes unsafe tools and skips later serial calls after failure', async () => {
    const registry = new ToolRegistry({ registerDefaults: false });
    const first = new TimedTool('write_a', { executionKind: 'write', success: false });
    const second = new TimedTool('write_b', { executionKind: 'write' });
    registry.register(first);
    registry.register(second);

    const results = await executeToolCalls({
      registry,
      toolCalls: [call('1', 'write_a'), call('2', 'write_b')],
      createContext: context,
    });

    expect(results[0].result.success).toBe(false);
    expect(results[1].result.success).toBe(false);
    expect(results[1].skipped).toBe(true);
    expect(second.calls).toBe(0);
  });

  it('still runs later safe read batches after a failed serial tool', async () => {
    const registry = new ToolRegistry({ registerDefaults: false });
    const write = new TimedTool('write_a', { executionKind: 'write', success: false });
    const read = new TimedTool('safe_read', { executionKind: 'read' });
    const laterWrite = new TimedTool('write_b', { executionKind: 'write' });
    registry.register(write);
    registry.register(read);
    registry.register(laterWrite);

    const results = await executeToolCalls({
      registry,
      toolCalls: [
        call('1', 'write_a'),
        call('2', 'safe_read'),
        call('3', 'write_b'),
      ],
      createContext: context,
    });

    expect(results[0].result.success).toBe(false);
    expect(results[1].result.success).toBe(true);
    expect(results[1].skipped).toBeUndefined();
    expect(read.calls).toBe(1);
    expect(results[2].result.success).toBe(false);
    expect(results[2].skipped).toBe(true);
    expect(laterWrite.calls).toBe(0);
  });
});
