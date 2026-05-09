import { dirname, resolve } from 'path';
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
import type { AutonomyPolicy } from '../config/schema.js';
import type { LLMNativeAction, LLMRequest, LLMResponse, LLMUsage, ReasoningEffort } from '../types/llm.js';
import type { LLMMessage } from '../types/message.js';
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

export interface CodexSdkClientOptions {
  providerName?: string;
  timeoutMs?: number;
  workingDirectory?: string;
  codexPathOverride?: string;
  harnessMcpServerPath?: string;
  matterName?: string;
  autonomy?: AutonomyPolicy;
  agentMode?: boolean;
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

  constructor(options: CodexSdkClientOptions = {}) {
    this.providerName = options.providerName ?? 'codex-sdk';
    this.timeoutMs = options.timeoutMs ?? 180_000;
    this.workingDirectory = options.workingDirectory ?? process.cwd();
    this.codexPathOverride = options.codexPathOverride;
    this.harnessMcpServerPath = options.harnessMcpServerPath ?? DEFAULT_HARNESS_MCP_SERVER_PATH;
    this.matterName = options.matterName;
    this.autonomy = options.autonomy;
    this.agentMode = options.agentMode ?? true;
    this.capabilities = {
      tools: false,
      jsonSchema: true,
      agentMode: this.agentMode,
      nativeMcpTools: this.agentMode,
    };
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    const prompt = buildPrompt(
      request.messages,
      Boolean(request.config.jsonMode && !request.config.jsonSchema),
      request.tools,
      this.agentMode,
    );
    return this.withTimeout(async (signal) => {
      const codexConfig = this.buildCodexConfig(request.tools);
      const codex = new Codex({
        codexPathOverride: this.codexPathOverride,
        env: buildCodexEnv(process.env),
        ...(codexConfig ? { config: codexConfig } : {}),
      });
      const thread = codex.startThread({
        model: request.config.model,
        sandboxMode: this.agentMode ? 'workspace-write' : 'read-only',
        workingDirectory: this.workingDirectory,
        modelReasoningEffort: mapReasoningEffort(request.config.reasoningEffort),
        networkAccessEnabled: this.agentMode,
        webSearchMode: this.agentMode ? 'live' : 'disabled',
        webSearchEnabled: this.agentMode,
        approvalPolicy: 'never',
        additionalDirectories: [],
      });
      const outputSchema = request.config.jsonSchema?.schema;
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

      return {
        content: finalResponse,
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

  private buildCodexConfig(tools: ToolDefinition[] | undefined): CodexOptions['config'] | undefined {
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
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await operation(controller.signal);
    } catch (error) {
      if (error instanceof LLMError) throw error;
      const err = error as Error;
      if (err.name === 'AbortError' || /abort|aborted/i.test(err.message)) {
        throw new LLMError(`Request timed out after ${this.timeoutMs}ms`, 408, this.providerName);
      }
      throw new LLMError(`Codex SDK error: ${err.message}`, 0, this.providerName);
    } finally {
      clearTimeout(timeoutId);
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
}

function buildPrompt(
  messages: LLMMessage[],
  forceJsonInstruction: boolean,
  tools: ToolDefinition[] | undefined,
  agentMode: boolean,
): string {
  const body = messages.map((message) => {
    const label = message.toolName ? `${message.role}:${message.toolName}` : message.role;
    const toolCalls = message.toolCalls?.length
      ? `\nTool calls requested by prior assistant message: ${message.toolCalls.map((tool) => tool.name).join(', ')}`
      : '';
    return `## ${label.toUpperCase()}\n${message.content}${toolCalls}`;
  }).join('\n\n');

  const toolSection = agentMode && tools?.length
    ? `\n\n## HARNESS MCP TOOLS\nThe Harness exposes case tools through the MCP server named "harness". Use those MCP tools directly when they are useful. Do not emit OpenAI-style function calls; Codex owns tool execution in this provider mode.\n\n${JSON.stringify(tools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })), null, 2)}`
    : '';

  return forceJsonInstruction
    ? `${body}${toolSection}\n\nReturn only valid JSON.`
    : `${body}${toolSection}`;
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
  tools: ToolDefinition[];
}): Record<string, string> {
  const env: Record<string, string> = {
    ATTICUS_HARNESS_MCP: '1',
    ATTICUS_HARNESS_CWD: input.workingDirectory,
    ATTICUS_HARNESS_MCP_TOOLS: JSON.stringify(input.tools.map((tool) => tool.name)),
  };
  if (input.matterName) {
    env.ATTICUS_HARNESS_MATTER_NAME = input.matterName;
  }
  if (input.autonomy) {
    env.ATTICUS_HARNESS_MCP_AUTONOMY = JSON.stringify(input.autonomy);
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
