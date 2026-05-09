import { chmodSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import {
  Codex,
  type CodexOptions,
  type ModelReasoningEffort,
  type ThreadEvent,
  type ThreadItem,
  type Usage,
} from '@openai/codex-sdk';
import { checkCodexLoginStatus } from '../config/codex-readiness.js';
import { LLMError } from './errors.js';
import type { LLMClient, LLMClientCapabilities } from './client.js';
import type { AutonomyPolicy, CodexToolStrategy } from '../config/schema.js';
import type { LLMNativeAction, LLMRequest, LLMResponse, LLMUsage, ReasoningEffort } from '../types/llm.js';
import type { LLMMessage, ToolCall } from '../types/message.js';
import type { ToolDefinition } from '../types/tool.js';

const CODEX_ENV_ALLOWLIST = [
  'HOME',
  'USER',
  'LOGNAME',
  'PATH',
  'SHELL',
  'TMPDIR',
  'TEMP',
  'TMP',
  'XDG_CONFIG_HOME',
  'XDG_CACHE_HOME',
  'XDG_DATA_HOME',
  'CODEX_HOME',
  'LANG',
  'LC_ALL',
  'LC_CTYPE',
  'SSL_CERT_FILE',
  'SSL_CERT_DIR',
  'NODE_EXTRA_CA_CERTS',
] as const;

const NATIVE_ACTION_TYPES = new Set([
  'command_execution',
  'file_change',
  'mcp_tool_call',
  'web_search',
]);

const DEFAULT_HARNESS_MCP_SERVER_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'mcp',
  'harness-server.js',
);

const HARNESS_TOOL_RESPONSE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    type: { type: 'string', enum: ['tool_calls', 'final'] },
    toolCalls: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          args: { type: 'object', additionalProperties: true },
        },
        required: ['name', 'args'],
      },
    },
    content: { type: 'string' },
    result: { type: 'object', additionalProperties: true },
  },
  required: ['type'],
} as const;

export interface CodexSdkClientOptions {
  providerName?: string;
  timeoutMs?: number;
  workingDirectory?: string;
  codexPathOverride?: string;
  harnessMcpServerPath?: string;
  matterName?: string;
  autonomy?: AutonomyPolicy;
  agentMode?: boolean;
  codexToolStrategy?: CodexToolStrategy;
  dangerouslyBypassApprovalsAndSandbox?: boolean;
}

export class CodexSdkClient implements LLMClient {
  readonly capabilities: LLMClientCapabilities;

  private readonly providerName: string;
  private readonly timeoutMs: number;
  private readonly workingDirectory: string;
  private readonly codexPathOverride?: string;
  private readonly harnessMcpServerPath: string;
  private readonly matterName?: string;
  private readonly autonomy?: AutonomyPolicy;
  private readonly agentMode: boolean;
  private readonly codexToolStrategy: CodexToolStrategy;
  private readonly dangerouslyBypassApprovalsAndSandbox: boolean;

  constructor(options: CodexSdkClientOptions = {}) {
    this.providerName = options.providerName ?? 'codex-sdk';
    this.timeoutMs = options.timeoutMs ?? 180_000;
    this.workingDirectory = options.workingDirectory ?? process.cwd();
    this.codexPathOverride = options.codexPathOverride;
    this.harnessMcpServerPath = options.harnessMcpServerPath ?? DEFAULT_HARNESS_MCP_SERVER_PATH;
    this.matterName = options.matterName;
    this.autonomy = options.autonomy;
    this.agentMode = options.agentMode ?? true;
    this.codexToolStrategy = options.codexToolStrategy ?? 'harness';
    this.dangerouslyBypassApprovalsAndSandbox = options.dangerouslyBypassApprovalsAndSandbox ?? false;
    this.capabilities = {
      tools: this.codexToolStrategy === 'harness',
      jsonSchema: true,
      agentMode: this.agentMode,
      nativeMcpTools: this.agentMode && this.codexToolStrategy === 'mcp',
    };
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    const usesHarnessToolLoop = Boolean(request.tools?.length && this.codexToolStrategy === 'harness');
    const usesMcpToolLoop = Boolean(request.tools?.length && this.agentMode && this.codexToolStrategy === 'mcp');
    const prompt = buildPrompt(
      request.messages,
      Boolean((request.config.jsonMode && !request.config.jsonSchema) || usesHarnessToolLoop),
      request.tools,
      usesHarnessToolLoop ? 'harness' : usesMcpToolLoop ? 'mcp' : 'none',
    );
    return this.withTimeout(async (signal) => {
      const codexConfig = this.buildCodexConfig(
        usesMcpToolLoop ? request.tools : undefined,
        request.config.mcpContext,
      );
      const nativeWebEnabled = usesMcpToolLoop && Boolean(this.autonomy?.autoApproveWeb);
      const codex = new Codex({
        codexPathOverride: this.codexExecutablePath(usesMcpToolLoop),
        env: buildCodexEnv(process.env),
        ...(codexConfig ? { config: codexConfig } : {}),
      });
      const thread = codex.startThread({
        model: request.config.model,
        sandboxMode: usesMcpToolLoop ? 'workspace-write' : 'read-only',
        workingDirectory: this.workingDirectory,
        modelReasoningEffort: mapReasoningEffort(request.config.reasoningEffort),
        networkAccessEnabled: nativeWebEnabled,
        webSearchMode: nativeWebEnabled ? 'live' : 'disabled',
        webSearchEnabled: nativeWebEnabled,
        approvalPolicy: 'never',
        additionalDirectories: [],
      });
      const outputSchema = usesHarnessToolLoop
        ? HARNESS_TOOL_RESPONSE_SCHEMA
        : request.config.jsonSchema?.schema;
      const { events } = await thread.runStreamed(prompt, {
        signal,
        ...(outputSchema ? { outputSchema } : {}),
      });

      let finalResponse = '';
      let usage: Usage | null = null;
      const nativeActions: LLMNativeAction[] = [];
      for await (const event of events) {
        const next = this.handleEvent(event);
        if (next.finalResponse !== undefined) {
          finalResponse = next.finalResponse;
        }
        if (next.usage !== undefined) {
          usage = next.usage;
        }
        if (next.nativeAction !== undefined) {
          nativeActions.push(next.nativeAction);
        }
      }

      if ((request.config.jsonSchema || request.config.jsonMode) && finalResponse.trim()) {
        this.validateJson(finalResponse);
      }

      if (usesHarnessToolLoop) {
        const completedNativeActions = nativeActions.filter((action) => action.status !== 'in_progress');
        if (completedNativeActions.length > 0) {
          const labels = completedNativeActions.map((action) => action.label ?? action.type).join(', ');
          throw new LLMError(
            `Codex SDK attempted native CLI action(s) in Harness-owned tool mode: ${labels}`,
            0,
            this.providerName,
          );
        }
      }

      const harnessToolResponse = usesHarnessToolLoop
        ? parseHarnessToolResponse(finalResponse)
        : undefined;
      if (usesHarnessToolLoop && !harnessToolResponse) {
        throw new LLMError(
          'Codex SDK returned an invalid Harness-owned tool response envelope',
          0,
          this.providerName,
        );
      }

      return {
        content: harnessToolResponse?.content ?? finalResponse,
        toolCalls: harnessToolResponse?.toolCalls,
        nativeActions: nativeActions.length ? nativeActions : undefined,
        usage: usage ? mapUsage(usage) : undefined,
        provider: this.providerName,
        model: request.config.model,
      };
    });
  }

  async healthCheck(): Promise<boolean> {
    const readiness = await checkCodexLoginStatus(Math.min(this.timeoutMs, 10_000));
    if (!readiness.ok) {
      throw new LLMError(readiness.message, readiness.status === 'missing' ? 401 : 0, this.providerName);
    }
    return true;
  }

  private buildCodexConfig(
    tools: ToolDefinition[] | undefined,
    mcpContext: Record<string, string> | undefined,
  ): CodexOptions['config'] | undefined {
    if (!this.agentMode || !tools?.length) return undefined;
    return {
      mcp_servers: {
        harness: {
          command: process.execPath,
          args: [this.harnessMcpServerPath],
          env: buildHarnessMcpEnv({
            workingDirectory: this.workingDirectory,
            matterName: this.matterName,
            autonomy: this.autonomy,
            tools,
            context: mcpContext,
          }),
        },
      },
    };
  }

  private handleEvent(event: ThreadEvent): { finalResponse?: string; usage?: Usage; nativeAction?: LLMNativeAction } {
    switch (event.type) {
      case 'item.started':
      case 'item.updated':
      case 'item.completed':
        return this.handleItem(event.item);
      case 'turn.completed':
        return { usage: event.usage };
      case 'turn.failed':
        throw new LLMError(event.error.message, 0, this.providerName);
      case 'error':
        throw new LLMError(event.message, 0, this.providerName);
      case 'thread.started':
      case 'turn.started':
        return {};
      default:
        throw new LLMError(`Unsupported Codex SDK event: ${(event as { type?: string }).type ?? 'unknown'}`, 0, this.providerName);
    }
  }

  private handleItem(item: ThreadItem): { finalResponse?: string; nativeAction?: LLMNativeAction } {
    if (NATIVE_ACTION_TYPES.has(item.type)) {
      return { nativeAction: mapNativeAction(item) };
    }

    switch (item.type) {
      case 'agent_message':
        return { finalResponse: item.text };
      case 'reasoning':
      case 'todo_list':
        return {};
      case 'error':
        throw new LLMError(item.message, 0, this.providerName);
      default:
        throw new LLMError(`Unsupported Codex SDK item: ${(item as { type?: string }).type ?? 'unknown'}`, 0, this.providerName);
    }
  }

  private async withTimeout<T>(operation: (signal: AbortSignal) => Promise<T>): Promise<T> {
    const controller = new AbortController();
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const operationPromise = operation(controller.signal);
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => {
        controller.abort();
        reject(new LLMError(`Request timed out after ${this.timeoutMs}ms`, 408, this.providerName));
      }, this.timeoutMs);
    });
    operationPromise.catch(() => {});

    try {
      return await Promise.race([operationPromise, timeoutPromise]);
    } catch (error) {
      if (error instanceof LLMError) throw error;
      const err = error as Error;
      if (err.name === 'AbortError' || /abort|aborted/i.test(err.message)) {
        throw new LLMError(`Request timed out after ${this.timeoutMs}ms`, 408, this.providerName);
      }
      throw new LLMError(`Codex SDK error: ${err.message}`, 0, this.providerName);
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  }

  private validateJson(text: string): void {
    try {
      JSON.parse(text);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new LLMError(`Codex SDK returned invalid JSON for structured output: ${message}`, 0, this.providerName);
    }
  }

  private codexExecutablePath(usesMcpToolLoop: boolean): string | undefined {
    if (!usesMcpToolLoop || !this.dangerouslyBypassApprovalsAndSandbox) return this.codexPathOverride;
    return ensureDangerousBypassWrapper(resolveCodexExecutable(this.codexPathOverride, this.workingDirectory));
  }
}

type CodexPromptToolMode = 'none' | 'harness' | 'mcp';

function buildPrompt(
  messages: LLMMessage[],
  forceJsonInstruction: boolean,
  tools: ToolDefinition[] | undefined,
  toolMode: CodexPromptToolMode,
): string {
  const body = messages.map((message) => {
    const label = message.toolName ? `${message.role}:${message.toolName}` : message.role;
    const toolCalls = message.toolCalls?.length
      ? `\nTool calls requested by prior assistant message:\n${message.toolCalls.map((tool) => `  - ${tool.name}(${JSON.stringify(tool.args)})`).join('\n')}`
      : '';
    return `## ${label.toUpperCase()}\n${message.content}${toolCalls}`;
  }).join('\n\n');

  const serializedTools = tools?.length
    ? JSON.stringify(tools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })), null, 2)
    : '';

  const toolSection = toolMode === 'mcp' && tools?.length
    ? `\n\n## HARNESS MCP TOOLS\nThe Harness exposes case tools through the MCP server named "harness". Use those MCP tools directly when they are useful. Do not emit OpenAI-style function calls; Codex owns tool execution in this provider mode.\n\nDo not use Codex native web/search, shell commands, or direct file edits as substitutes for Harness tools. If a Harness MCP tool is blocked by policy or unavailable, report that as a gap instead of bypassing the Harness policy surface.\n\n${serializedTools}`
    : toolMode === 'harness' && tools?.length
      ? `\n\n## HARNESS-OWNED TOOL PROTOCOL\nHarness owns tool execution in this provider mode. Do not run shell commands, make MCP calls, edit files, or use native web/search tools. Request Harness tools only by returning one valid JSON object.\n\nAvailable Harness tools:\n${serializedTools}\n\nWhen you need tool output, return exactly:\n{"type":"tool_calls","toolCalls":[{"name":"tool_name","args":{}}]}\n\nWhen your task is complete, return exactly:\n{"type":"final","content":"final answer"}\n\nIf the required final answer is itself a JSON object, put that object in "result" instead of stringifying it:\n{"type":"final","result":{"status":"completed","summary":"..."}}`
    : '';

  return forceJsonInstruction
    ? `${body}${toolSection}\n\nReturn only valid JSON.`
    : `${body}${toolSection}`;
}

function parseHarnessToolResponse(text: string): { content: string; toolCalls?: ToolCall[] } | undefined {
  const parsed = parseJsonObject(text);
  if (!parsed) return undefined;

  if (parsed.type === 'tool_calls') {
    const calls = Array.isArray(parsed.toolCalls) ? parsed.toolCalls : [];
    const toolCalls = calls.flatMap((call, index): ToolCall[] => {
      if (!isRecord(call) || typeof call.name !== 'string') return [];
      return [{
        id: typeof call.id === 'string' && call.id ? call.id : `codex_tool_${index + 1}`,
        name: call.name,
        args: isRecord(call.args) ? call.args : {},
      }];
    });
    return { content: '', toolCalls };
  }

  if (parsed.type === 'final') {
    if (parsed.result !== undefined) {
      return { content: JSON.stringify(parsed.result) };
    }
    return { content: typeof parsed.content === 'string' ? parsed.content : '' };
  }

  if (typeof parsed.status === 'string' && typeof parsed.summary === 'string') {
    return { content: JSON.stringify(parsed) };
  }

  return undefined;
}

function parseJsonObject(text: string): Record<string, unknown> | undefined {
  const trimmed = text.trim();
  if (!trimmed) return undefined;
  try {
    const parsed = JSON.parse(trimmed);
    return isRecord(parsed) ? parsed : undefined;
  } catch {
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (!fenced) return undefined;
    try {
      const parsed = JSON.parse(fenced[1].trim());
      return isRecord(parsed) ? parsed : undefined;
    } catch {
      return undefined;
    }
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function mapReasoningEffort(effort: ReasoningEffort | undefined): ModelReasoningEffort | undefined {
  if (!effort || effort === 'none') return undefined;
  return effort;
}

function mapUsage(usage: Usage): LLMUsage {
  return {
    promptTokens: usage.input_tokens,
    completionTokens: usage.output_tokens,
    totalTokens: usage.input_tokens + usage.output_tokens,
    cacheHitTokens: usage.cached_input_tokens,
    reasoningOutputTokens: usage.reasoning_output_tokens,
  };
}

function mapNativeAction(item: ThreadItem): LLMNativeAction {
  const record = item as unknown as Record<string, unknown>;
  const data = { ...record };
  delete data.id;
  delete data.type;
  const status = typeof record.status === 'string' ? record.status : undefined;
  return {
    id: typeof record.id === 'string' ? record.id : undefined,
    type: item.type,
    status,
    label: nativeActionLabel(item.type, record),
    data,
  };
}

function nativeActionLabel(type: string, item: Record<string, unknown>): string | undefined {
  switch (type) {
    case 'command_execution':
      return typeof item.command === 'string' ? item.command : undefined;
    case 'mcp_tool_call': {
      const server = typeof item.server === 'string' ? item.server : 'mcp';
      const tool = typeof item.tool === 'string' ? item.tool : 'tool';
      return `${server}.${tool}`;
    }
    case 'web_search':
      return typeof item.query === 'string' ? item.query : undefined;
    case 'file_change': {
      const changes = Array.isArray(item.changes) ? item.changes.length : 0;
      return `${changes} file change${changes === 1 ? '' : 's'}`;
    }
    default:
      return undefined;
  }
}

function buildHarnessMcpEnv(input: {
  workingDirectory: string;
  matterName?: string;
  autonomy?: AutonomyPolicy;
  tools?: ToolDefinition[];
  context?: Record<string, string>;
}): Record<string, string> {
  const env: Record<string, string> = {
    ATTICUS_HARNESS_MCP: '1',
    ATTICUS_HARNESS_CWD: input.workingDirectory,
    ...(input.context ?? {}),
  };
  if (input.matterName) {
    env.ATTICUS_HARNESS_MATTER_NAME = input.matterName;
  }
  if (input.autonomy) {
    env.ATTICUS_HARNESS_MCP_AUTONOMY = JSON.stringify(input.autonomy);
  }
  if (input.tools?.length) {
    env.ATTICUS_HARNESS_MCP_TOOLS = JSON.stringify(input.tools.map((tool) => tool.name));
  }
  return env;
}

function buildCodexEnv(env: NodeJS.ProcessEnv): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of CODEX_ENV_ALLOWLIST) {
    const value = env[key];
    if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

function resolveCodexExecutable(codexPathOverride: string | undefined, workingDirectory: string): string {
  if (codexPathOverride) return codexPathOverride;
  const localCodex = resolve(workingDirectory, 'node_modules', '.bin', process.platform === 'win32' ? 'codex.cmd' : 'codex');
  return existsSync(localCodex) ? localCodex : 'codex';
}

function ensureDangerousBypassWrapper(realCodexPath: string): string {
  const dir = join(tmpdir(), 'atticus-harness-codex');
  mkdirSync(dir, { recursive: true });
  const wrapperPath = join(dir, 'codex-dangerous-bypass-wrapper.sh');
  const script = [
    '#!/usr/bin/env bash',
    'set -euo pipefail',
    `exec ${shellQuote(realCodexPath)} --dangerously-bypass-approvals-and-sandbox "$@"`,
    '',
  ].join('\n');
  writeFileSync(wrapperPath, script, { mode: 0o700 });
  chmodSync(wrapperPath, 0o700);
  return wrapperPath;
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}
