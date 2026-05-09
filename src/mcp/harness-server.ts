import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { ToolRegistry } from '../tools/index.js';
import type { AutonomyPolicy } from '../config/schema.js';
import type { ToolResult, ToolUseContext } from '../types/tool.js';

type JsonRpcId = string | number | null;

interface JsonRpcMessage {
  jsonrpc?: '2.0';
  id?: JsonRpcId;
  method?: string;
  params?: unknown;
}

interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
}

interface JsonRpcResponse {
  jsonrpc: '2.0';
  id: JsonRpcId;
  result?: unknown;
  error?: JsonRpcError;
}

export interface HarnessMcpServerOptions {
  toolRegistry?: ToolRegistry;
  allowedTools?: string[];
  workingDirectory?: string;
  matterName?: string;
  runId?: string;
  taskId?: string;
  masterRunId?: string;
  maxDepth?: number;
  maxConcurrency?: number;
  resume?: boolean;
  autonomy?: AutonomyPolicy;
  log?: (message: string) => void;
}

export interface HarnessMcpServer {
  handleMessage(message: JsonRpcMessage): Promise<JsonRpcResponse | undefined>;
}

export function createHarnessMcpServer(options: HarnessMcpServerOptions = {}): HarnessMcpServer {
  const registry = options.toolRegistry ?? new ToolRegistry({
    allowedTools: options.allowedTools,
    enforcePolicy: Boolean(options.autonomy),
  });
  const log = options.log ?? ((message: string) => process.stderr.write(`${message}\n`));

  return {
    async handleMessage(message: JsonRpcMessage): Promise<JsonRpcResponse | undefined> {
      const id = hasId(message) ? message.id ?? null : null;
      const method = typeof message.method === 'string' ? message.method : '';
      const isNotification = !hasId(message);

      try {
        if (!method) {
          return isNotification ? undefined : errorResponse(id, -32600, 'Invalid JSON-RPC request');
        }

        if (method.startsWith('notifications/') || method === 'initialized') {
          return undefined;
        }

        switch (method) {
          case 'initialize':
            return isNotification ? undefined : successResponse(id, {
              protocolVersion: protocolVersion(message.params),
              capabilities: { tools: { listChanged: false } },
              serverInfo: { name: 'atticus-harness', version: '0.1.0' },
            });
          case 'ping':
            return isNotification ? undefined : successResponse(id, {});
          case 'tools/list':
            return isNotification ? undefined : successResponse(id, {
              tools: registry.getAllDefinitions().map((tool) => ({
                name: tool.name,
                description: tool.description,
                inputSchema: tool.inputSchema,
              })),
            });
          case 'tools/call':
            return isNotification
              ? undefined
              : successResponse(id, await callTool(message.params, registry, {
                  workingDirectory: options.workingDirectory,
                  matterName: options.matterName,
                  runId: options.runId,
                  taskId: options.taskId,
                  autonomy: options.autonomy,
                  log,
                }));
          default:
            return isNotification ? undefined : errorResponse(id, -32601, `Method not found: ${method}`);
        }
      } catch (error) {
        const messageText = error instanceof Error ? error.message : String(error);
        return isNotification ? undefined : errorResponse(id, -32603, messageText);
      }
    },
  };
}

export async function createConfiguredHarnessMcpServer(options: HarnessMcpServerOptions = {}): Promise<HarnessMcpServer> {
  if (options.toolRegistry) return createHarnessMcpServer(options);
  const registry = new ToolRegistry({
    allowedTools: options.allowedTools,
    enforcePolicy: Boolean(options.autonomy),
  });
  const log = options.log ?? ((message: string) => process.stderr.write(`${message}\n`));

  try {
    const { loadGlobalConfig } = await import('../config/loader.js');
    const { config } = await loadGlobalConfig();
    await registry.registerConfiguredMcpTools({
      mcp: config.mcp,
      plugins: config.plugins,
      log,
    });
  } catch (error) {
    log(`[mcp] unable to load configured MCP/plugin tools: ${error instanceof Error ? error.message : String(error)}`);
  }

  await registerOrchestrationTools(registry, options, log);

  return createHarnessMcpServer({ ...options, toolRegistry: registry });
}

export async function runHarnessMcpServer(options = optionsFromEnv()): Promise<void> {
  if (options.workingDirectory) {
    process.chdir(options.workingDirectory);
  }

  const server = await createConfiguredHarnessMcpServer(options);
  let buffer = '';
  let draining = false;
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk: string) => {
    buffer += chunk;
    scheduleDrain();
  });

  function scheduleDrain(): void {
    if (draining) return;
    draining = true;
    void drainBuffer().finally(() => {
      draining = false;
      if (buffer.includes('\n')) scheduleDrain();
    });
  }

  async function drainBuffer(): Promise<void> {
    while (true) {
      const newline = buffer.indexOf('\n');
      if (newline === -1) return;
      const line = buffer.slice(0, newline).replace(/\r$/, '').trim();
      buffer = buffer.slice(newline + 1);
      if (!line) continue;

      let message: JsonRpcMessage;
      try {
        message = JSON.parse(line) as JsonRpcMessage;
      } catch (error) {
        const parseError = error instanceof Error ? error.message : String(error);
        writeResponse(errorResponse(null, -32700, `Parse error: ${parseError}`));
        continue;
      }

      const response = await server.handleMessage(message);
      if (response) {
        writeResponse(response);
      }
    }
  }
}

async function callTool(
  params: unknown,
  registry: ToolRegistry,
  contextOptions: {
    workingDirectory?: string;
    matterName?: string;
    runId?: string;
    taskId?: string;
    autonomy?: AutonomyPolicy;
    log: (message: string) => void;
  },
): Promise<Record<string, unknown>> {
  const call = paramsObject(params);
  const name = typeof call.name === 'string' ? call.name : '';
  if (!name) {
    throw new Error('tools/call requires params.name');
  }
  const args = isObject(call.arguments) ? call.arguments : {};
  const result = await registry.execute(name, args, makeToolContext(contextOptions));
  const text = toolResultText(result);
  return {
    content: [{ type: 'text', text }],
    structuredContent: {
      success: result.success,
      data: result.data,
      output: result.output,
      error: result.error,
    },
    isError: !result.success,
  };
}

function makeToolContext(options: {
  workingDirectory?: string;
  matterName?: string;
  runId?: string;
  taskId?: string;
  autonomy?: AutonomyPolicy;
  log: (message: string) => void;
}): ToolUseContext {
  const matterPath = options.matterName ? join('matters', options.matterName) : '';
  return {
    matterName: options.matterName,
    runId: options.runId,
    taskId: options.taskId,
    getEvidencePath: (id: string) => join(matterPath, '_evidence', id),
    getExtractionPath: (id: string) => join(matterPath, '_extractions', `${id}.txt`),
    getConfig: () => ({
      autonomy: options.autonomy,
      workingDirectory: options.workingDirectory,
      matterName: options.matterName,
    }),
    log: options.log,
  };
}

function optionsFromEnv(): HarnessMcpServerOptions {
  return {
    allowedTools: parseStringArray(process.env.ATTICUS_HARNESS_MCP_TOOLS),
    workingDirectory: process.env.ATTICUS_HARNESS_CWD,
    matterName: process.env.ATTICUS_HARNESS_MATTER_NAME,
    runId: process.env.ATTICUS_HARNESS_RUN_ID,
    taskId: process.env.ATTICUS_HARNESS_TASK_ID,
    masterRunId: process.env.ATTICUS_HARNESS_MASTER_RUN_ID,
    maxDepth: parsePositiveInteger(process.env.ATTICUS_HARNESS_MAX_DEPTH),
    maxConcurrency: parsePositiveInteger(process.env.ATTICUS_HARNESS_MAX_CONCURRENCY),
    resume: process.env.ATTICUS_HARNESS_RESUME === '1',
    autonomy: parseJson(process.env.ATTICUS_HARNESS_MCP_AUTONOMY) as AutonomyPolicy | undefined,
  };
}

async function registerOrchestrationTools(
  registry: ToolRegistry,
  options: HarnessMcpServerOptions,
  log: (message: string) => void,
): Promise<void> {
  if (!options.matterName || (!wantsTool(options.allowedTools, 'run_phase') && !wantsTool(options.allowedTools, 'get_orchestration_state'))) {
    return;
  }

  try {
    const [
      { createGetOrchestrationStateTool, createRunPhaseTool },
      { OrchestrationRuntime },
      { buildProviderAgnosticResumePlan },
      { getDefaultPhases },
      { resolveConfig },
    ] = await Promise.all([
      import('../orchestration/orchestration-tools.js'),
      import('../orchestration/runtime.js'),
      import('../orchestration/resume-recovery.js'),
      import('../legal/workflow.js'),
      import('../config/loader.js'),
    ]);

    const matterName = options.matterName;
    const phases = getDefaultPhases();
    const maxDepth = options.maxDepth ?? 1;
    const maxConcurrency = options.maxConcurrency ?? 1;
    const resolvedConfig = await resolveConfig({ matterName });
    const resumePlan = options.resume
      ? buildProviderAgnosticResumePlan({ matterName, phases })
      : undefined;
    const runtime = new OrchestrationRuntime({
      matterName,
      maxDepth,
      maxConcurrency,
    });
    const phaseToolsConfig = {
      matterName,
      masterRunId: options.masterRunId ?? options.runId ?? 'mcp-master-run',
      maxDepth,
      maxConcurrency,
      autonomy: options.autonomy ?? resolvedConfig.autonomy,
      providerPolicy: resolvedConfig.providerPolicy,
      runtime,
      resumePlan,
    };

    registry.register(createRunPhaseTool(phaseToolsConfig));
    registry.register(createGetOrchestrationStateTool(phaseToolsConfig));
  } catch (error) {
    log(`[mcp] unable to register orchestration tools: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function wantsTool(allowedTools: string[] | undefined, name: string): boolean {
  if (!allowedTools) return true;
  return allowedTools.includes(name) || allowedTools.includes('*');
}

function parsePositiveInteger(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

function paramsObject(params: unknown): Record<string, unknown> {
  if (!isObject(params)) return {};
  return params;
}

function protocolVersion(params: unknown): string {
  const value = isObject(params) ? params.protocolVersion : undefined;
  return typeof value === 'string' ? value : '2024-11-05';
}

function toolResultText(result: ToolResult): string {
  if (result.output) return result.output;
  if (result.data !== undefined) return JSON.stringify(result.data, null, 2);
  if (result.error) return `Error: ${result.error}`;
  return result.success ? 'ok' : 'Error: tool call failed';
}

function parseStringArray(value: string | undefined): string[] | undefined {
  const parsed = parseJson(value);
  if (!Array.isArray(parsed)) return undefined;
  const result = parsed.filter((item): item is string => typeof item === 'string');
  return result.length ? result : undefined;
}

function parseJson(value: string | undefined): unknown {
  if (!value) return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}

function hasId(message: JsonRpcMessage): boolean {
  return Object.prototype.hasOwnProperty.call(message, 'id');
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function successResponse(id: JsonRpcId, result: unknown): JsonRpcResponse {
  return { jsonrpc: '2.0', id, result };
}

function errorResponse(id: JsonRpcId, code: number, message: string, data?: unknown): JsonRpcResponse {
  return { jsonrpc: '2.0', id, error: { code, message, data } };
}

function writeResponse(response: JsonRpcResponse): void {
  process.stdout.write(`${JSON.stringify(response)}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  void runHarnessMcpServer();
}
