import type { ToolCall } from '../types/message.js';
import type { ToolExecutionKind, ToolResult, ToolUseContext } from '../types/tool.js';
import type { ToolRegistry } from './index.js';

export interface ExecutedToolCall {
  toolCall: ToolCall;
  result: ToolResult;
  durationMs: number;
  skipped?: boolean;
}

export interface ToolExecutionBatch {
  kind: 'concurrent' | 'serial';
  calls: ToolCall[];
}

export interface ExecuteToolCallsOptions {
  registry: ToolRegistry;
  toolCalls: ToolCall[];
  createContext: (toolCall: ToolCall) => ToolUseContext;
  log?: (message: string) => void;
  stopSerialAfterFailure?: boolean;
}

interface ToolExecutionMetadata {
  executionKind: ToolExecutionKind;
  isConcurrencySafe: boolean;
  modifiesContext: boolean;
  maxConcurrencyGroup?: string;
}

const READ_TOOL_NAMES = new Set([
  'read_file',
  'read_tool_result',
  'grep',
  'glob',
  'search_files',
  'tool_search',
  'evidence_search',
  'evidence_chunk_read',
  'matter_inventory',
  'submit_candidate',
]);

export async function executeToolCalls(options: ExecuteToolCallsOptions): Promise<ExecutedToolCall[]> {
  const batches = partitionToolCalls(options.registry, options.toolCalls);
  const results = new Map<string, ExecutedToolCall>();
  let serialFailure: ExecutedToolCall | undefined;

  for (const batch of batches) {
    if (serialFailure && options.stopSerialAfterFailure !== false && batch.kind === 'serial') {
      for (const toolCall of batch.calls) {
        results.set(toolCall.id, skippedResult(toolCall, serialFailure));
      }
      continue;
    }

    if (batch.kind === 'concurrent') {
      const settled = await Promise.all(batch.calls.map((toolCall) => executeOne(options, toolCall)));
      for (const item of settled) {
        results.set(item.toolCall.id, item);
      }
      continue;
    }

    for (const toolCall of batch.calls) {
      if (serialFailure && options.stopSerialAfterFailure !== false) {
        results.set(toolCall.id, skippedResult(toolCall, serialFailure));
        continue;
      }
      const item = await executeOne(options, toolCall);
      results.set(toolCall.id, item);
      if (!item.result.success) {
        serialFailure = item;
      }
    }
  }

  return options.toolCalls.map((toolCall) => {
    const result = results.get(toolCall.id);
    if (!result) return skippedResult(toolCall, serialFailure);
    return result;
  });
}

export function partitionToolCalls(registry: ToolRegistry, toolCalls: ToolCall[]): ToolExecutionBatch[] {
  const batches: ToolExecutionBatch[] = [];
  let currentConcurrent: ToolCall[] = [];

  for (const toolCall of toolCalls) {
    const metadata = getExecutionMetadata(registry, toolCall.name);
    if (metadata.isConcurrencySafe && !metadata.modifiesContext) {
      currentConcurrent.push(toolCall);
      continue;
    }

    if (currentConcurrent.length > 0) {
      batches.push({ kind: 'concurrent', calls: currentConcurrent });
      currentConcurrent = [];
    }
    batches.push({ kind: 'serial', calls: [toolCall] });
  }

  if (currentConcurrent.length > 0) {
    batches.push({ kind: 'concurrent', calls: currentConcurrent });
  }

  return batches;
}

export function getExecutionMetadata(registry: ToolRegistry, name: string): ToolExecutionMetadata {
  const tool = registry.get(name);
  const inferredKind = inferExecutionKind(name);
  return {
    executionKind: tool?.executionKind ?? inferredKind,
    isConcurrencySafe: tool?.isConcurrencySafe ?? (inferredKind === 'read'),
    modifiesContext: tool?.modifiesContext ?? inferredKind !== 'read',
    maxConcurrencyGroup: tool?.maxConcurrencyGroup,
  };
}

async function executeOne(options: ExecuteToolCallsOptions, toolCall: ToolCall): Promise<ExecutedToolCall> {
  const started = Date.now();
  const result = await options.registry.execute(
    toolCall.name,
    toolCall.args,
    options.createContext(toolCall),
  );
  return {
    toolCall,
    result,
    durationMs: Date.now() - started,
  };
}

function skippedResult(toolCall: ToolCall, failure: ExecutedToolCall | undefined): ExecutedToolCall {
  return {
    toolCall,
    durationMs: 0,
    skipped: true,
    result: {
      success: false,
      error: failure
        ? `Skipped because prior serial tool "${failure.toolCall.name}" failed: ${failure.result.error ?? 'unknown error'}`
        : 'Skipped because tool execution was cancelled',
    },
  };
}

function inferExecutionKind(name: string): ToolExecutionKind {
  if (READ_TOOL_NAMES.has(name)) return 'read';
  if (name.startsWith('mcp__')) return 'mcp';
  if (name === 'bash') return 'shell';
  if (name.includes('web_')) return 'network';
  if (name.includes('write') || name.includes('edit') || name.includes('draft') || name.includes('ingest')) return 'write';
  if (name.includes('todo') || name.includes('quality') || name.includes('review') || name.includes('verify')) return 'state';
  return 'state';
}
