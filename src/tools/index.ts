import type { Tool, ToolResult, ToolDefinition, ToolUseContext } from '../types/tool.js';
import { ReadFileTool } from './read-file.tool.js';
import { WriteFileTool } from './write-file.tool.js';
import { SearchFilesTool } from './search-files.tool.js';
import { EditFileTool } from './edit-file.tool.js';
import { GlobTool } from './glob.tool.js';
import { GrepTool } from './grep.tool.js';
import { BashTool } from './bash.tool.js';
import { TodoWriteTool } from './todo-write.tool.js';
import { SleepTool } from './sleep.tool.js';
import { NotebookEditTool } from './notebook-edit.tool.js';
import { ToolSearchTool } from './tool-search.tool.js';
import { ReadToolResultTool } from './read-tool-result.tool.js';
import { ExecSqliteTool } from './exec-sqlite.tool.js';
import { LlmCallTool } from './llm-call.tool.js';
import { EvidenceSearchTool } from './evidence-search.tool.js';
import { EvidenceChunkReadTool } from './evidence-chunk-read.tool.js';
import { MatterInventoryTool } from './matter-inventory.tool.js';
import { DraftTool } from './draft.tool.js';
import { VerifyCitationsTool } from './verify-citations.tool.js';
import { EvidenceIngestTool } from './evidence-ingest.tool.js';
import { HostileReviewTool } from './hostile-review.tool.js';
import { QualityGateTool } from './quality-gate.tool.js';
import { SubmitCandidateTool } from './submit-candidate.tool.js';
import { WebSearchTool } from '../research/web-search.tool.js';
import { WebFetchTool } from '../research/web-fetch.tool.js';
import { createChronologyAddTool } from './chronology-add.tool.js';
import { createChronologyUpdateTool } from './chronology-update.tool.js';
import { createChronologyListTool } from './chronology-list.tool.js';
import { createSubmitMatterOutcomeTool } from './submit-matter-outcome.tool.js';
import { createDelegateTaskTool } from './delegate-task.tool.js';
import { createEntityAddTool } from './entity-add.tool.js';
import { createEntityListTool } from './entity-list.tool.js';
import { createBreachAddTool } from './breach-add.tool.js';
import { createBreachListTool } from './breach-list.tool.js';
import { createRelationshipAddTool } from './relationship-add.tool.js';
import { createRelationshipListTool } from './relationship-list.tool.js';
import { createCaseCitationAddTool } from './case-citation-add.tool.js';
import { createCaseCitationListTool } from './case-citation-list.tool.js';
import type { AutonomyPolicy } from '../config/schema.js';
import { McpToolManager, mergeMcpServerConfigs } from '../mcp/client.js';
import type { McpConfig } from '../mcp/types.js';
import { buildPluginMcpConfig } from '../plugins/loader.js';
import type { PluginsConfig } from '../plugins/types.js';

export interface ToolRegistryOptions {
  allowedTools?: string[];
  enforcePolicy?: boolean;
  includeResearchTools?: boolean;
  registerDefaults?: boolean;
}

export class ToolRegistry {
  private tools: Map<string, Tool<any, unknown>> = new Map();
  private allowedTools?: Set<string>;
  private enforcePolicy: boolean;
  private includeResearchTools: boolean;
  private mcpManagers: McpToolManager[] = [];

  constructor(options: ToolRegistryOptions = {}) {
    this.allowedTools = options.allowedTools ? new Set(options.allowedTools) : undefined;
    this.enforcePolicy = options.enforcePolicy ?? false;
    this.includeResearchTools =
      options.includeResearchTools ??
      true;
    if (options.registerDefaults ?? true) {
      this.registerDefaults();
    }
  }

  private registerDefaults(): void {
    this.register(new ReadFileTool());
    this.register(new WriteFileTool());
    this.register(new SearchFilesTool());
    this.register(new EditFileTool());
    this.register(new GlobTool());
    this.register(new GrepTool());
    this.register(new BashTool());
    this.register(new TodoWriteTool());
    this.register(new SleepTool());
    this.register(new NotebookEditTool());
    this.register(new ReadToolResultTool());
    this.register(new ExecSqliteTool());
    this.register(new LlmCallTool());
    this.register(new EvidenceSearchTool());
    this.register(new EvidenceChunkReadTool());
    this.register(new MatterInventoryTool());
    this.register(new DraftTool());
    this.register(new VerifyCitationsTool());
    this.register(new EvidenceIngestTool());
    this.register(new HostileReviewTool());
    this.register(new QualityGateTool());
    this.register(new SubmitCandidateTool());
    if (this.includeResearchTools) {
      this.register(new WebSearchTool());
      this.register(new WebFetchTool());
    }
    this.register(createChronologyAddTool());
    this.register(createChronologyUpdateTool());
    this.register(createChronologyListTool());
    this.register(createSubmitMatterOutcomeTool());
    this.register(createDelegateTaskTool());
    this.register(createEntityAddTool());
    this.register(createEntityListTool());
    this.register(createBreachAddTool());
    this.register(createBreachListTool());
    this.register(createRelationshipAddTool());
    this.register(createRelationshipListTool());
    this.register(createCaseCitationAddTool());
    this.register(createCaseCitationListTool());
    this.register(new ToolSearchTool(() => this.getAllDefinitions()));
  }

  register(tool: Tool<any, unknown>): void {
    this.tools.set(tool.name, tool);
  }

  get(name: string): Tool<any, unknown> | undefined {
    return this.tools.get(name);
  }

  getAll(): Tool<any, unknown>[] {
    const tools = Array.from(this.tools.values());
    if (!this.allowedTools) return tools;
    return tools.filter((tool) => this.isAllowed(tool.name));
  }

  getAllDefinitions(): ToolDefinition[] {
    return this.getAll().filter(t => t.isEnabled()).map(t => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema,
    }));
  }

  async execute(name: string, args: Record<string, unknown>, context: ToolUseContext): Promise<ToolResult> {
    const started = Date.now();
    let result: ToolResult;

    if (this.allowedTools && !this.isAllowed(name)) {
      result = {
        success: false,
        error: `Tool "${name}" is not allowed in this agent context`,
      };
      await this.emitToolEvent(name, args, result, context, started, 'not_allowed');
      return result;
    }

    const tool = this.tools.get(name);
    if (!tool) {
      result = { success: false, error: `Tool "${name}" not found. Available: ${Array.from(this.tools.keys()).join(', ')}` };
      await this.emitToolEvent(name, args, result, context, started, 'missing_tool');
      return result;
    }
    if (!tool.isEnabled()) {
      result = { success: false, error: `Tool "${name}" is disabled` };
      await this.emitToolEvent(name, args, result, context, started, 'disabled');
      return result;
    }

    const decision = await this.policyDecision(name, context);
    if (decision === 'deny' || decision === 'ask') {
      result = {
        success: false,
        error: `Tool "${name}" blocked by policy decision: ${decision}`,
      };
      await this.emitToolEvent(name, args, result, context, started, decision);
      return result;
    }

    try {
      context.log(`[tool] ${name}(${JSON.stringify(args)})`);
      result = await tool.call(args, context);
      context.log(`[tool] ${name} → ${result.success ? 'ok' : 'error'}: ${result.output || result.error || ''}`);
      await this.emitToolEvent(name, args, result, context, started, decision);
      return result;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      context.log(`[tool] ${name} → exception: ${msg}`);
      result = { success: false, error: msg };
      await this.emitToolEvent(name, args, result, context, started, decision);
      return result;
    }
  }

  async registerConfiguredMcpTools(input: {
    mcp?: McpConfig;
    plugins?: PluginsConfig;
    log?: (message: string) => void;
  }): Promise<void> {
    const directServers = input.mcp?.enabled === false ? {} : markDirectMcpServers(input.mcp?.servers ?? {});
    const pluginMcp = await buildPluginMcpConfig(input.plugins);
    const servers = mergeMcpServerConfigs({
      direct: directServers,
      plugin: pluginMcp.servers,
      log: input.log,
    });
    if (Object.keys(servers).length === 0) return;

    const defaultTimeoutMs = input.mcp?.defaultTimeoutMs ?? pluginMcp.defaultTimeoutMs ?? 60_000;
    const manager = new McpToolManager(defaultTimeoutMs);
    const registrations = await manager.connectConfigured(
      { enabled: true, servers, defaultTimeoutMs },
      input.log,
    );
    if (registrations.length === 0) {
      await manager.close();
      return;
    }

    this.mcpManagers.push(manager);
    for (const registration of registrations) {
      this.register(registration.tool);
    }
  }

  async close(): Promise<void> {
    const managers = this.mcpManagers;
    this.mcpManagers = [];
    await Promise.all(managers.map((manager) => manager.close().catch(() => undefined)));
  }

  private isAllowed(name: string): boolean {
    if (!this.allowedTools) return true;
    if (this.allowedTools.has(name)) return true;
    for (const allowed of this.allowedTools) {
      if (allowed.endsWith('*') && name.startsWith(allowed.slice(0, -1))) return true;
    }
    return false;
  }

  private async policyDecision(name: string, context: ToolUseContext): Promise<string> {
    if (!this.enforcePolicy) return 'allow';
    const config = context.getConfig();
    const autonomy = (config.autonomy ?? (config.config as Record<string, unknown> | undefined)?.autonomy) as
      | AutonomyPolicy
      | undefined;

    if (!autonomy) return 'allow';

    const { evaluateAutonomyPolicy } = await import('../config/policy.js');
    return evaluateAutonomyPolicy(autonomy, name, { matterName: context.matterName });
  }

  private async emitToolEvent(
    name: string,
    args: Record<string, unknown>,
    result: ToolResult,
    context: ToolUseContext,
    started: number,
    policyDecision: string,
  ): Promise<void> {
    if (!context.matterName) return;
    try {
      const { appendEvent } = await import('../state/events.js');
      await appendEvent({
        matterName: context.matterName,
        type: 'tool.called',
        source: 'tool',
        data: {
          tool: name,
          toolCallId: context.toolCallId,
          success: result.success,
          error: result.error,
          policyDecision,
          durationMs: Date.now() - started,
          args: redactArgs(args),
          output: result.output ? truncate(result.output, 500) : undefined,
          storedResult: result.storedResult,
        },
        runId: context.runId,
        taskId: context.taskId,
      });
    } catch {
    }
  }
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max) + '\n... [truncated]';
}

function redactArgs(args: Record<string, unknown>): Record<string, unknown> {
  const redacted: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(args)) {
    redacted[key] = /key|token|secret|password/i.test(key) ? '[REDACTED]' : value;
  }
  return redacted;
}

function markDirectMcpServers(servers: Record<string, import('../mcp/types.js').McpServerConfig>): Record<string, import('../mcp/types.js').McpServerConfig> {
  const marked: Record<string, import('../mcp/types.js').McpServerConfig> = {};
  for (const [name, server] of Object.entries(servers)) {
    marked[name] = {
      ...server,
      source: server.source ?? { kind: 'manual' },
    };
  }
  return marked;
}
