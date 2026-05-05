import type { Tool, ToolResult, ToolDefinition, ToolUseContext } from '../types/tool.js';
import { ReadFileTool } from './read-file.tool.js';
import { WriteFileTool } from './write-file.tool.js';
import { SearchFilesTool } from './search-files.tool.js';
import { ExecSqliteTool } from './exec-sqlite.tool.js';
import { LlmCallTool } from './llm-call.tool.js';
import { EvidenceSearchTool } from './evidence-search.tool.js';
import { EvidenceChunkReadTool } from './evidence-chunk-read.tool.js';
import { DraftTool } from './draft.tool.js';
import { VerifyCitationsTool } from './verify-citations.tool.js';
import { EvidenceIngestTool } from './evidence-ingest.tool.js';
import { HostileReviewTool } from './hostile-review.tool.js';
import { QualityGateTool } from './quality-gate.tool.js';
import { WebSearchTool } from '../research/web-search.tool.js';
import { WebFetchTool } from '../research/web-fetch.tool.js';
import type { AutonomyPolicy } from '../config/schema.js';

export interface ToolRegistryOptions {
  allowedTools?: string[];
  enforcePolicy?: boolean;
  includeResearchTools?: boolean;
}

export class ToolRegistry {
  private tools: Map<string, Tool<any, unknown>> = new Map();
  private allowedTools?: Set<string>;
  private enforcePolicy: boolean;
  private includeResearchTools: boolean;

  constructor(options: ToolRegistryOptions = {}) {
    this.allowedTools = options.allowedTools ? new Set(options.allowedTools) : undefined;
    this.enforcePolicy = options.enforcePolicy ?? false;
    this.includeResearchTools =
      options.includeResearchTools ??
      Boolean(options.allowedTools?.some((tool) => tool === 'web_search' || tool === 'web_fetch'));
    this.registerDefaults();
  }

  private registerDefaults(): void {
    this.register(new ReadFileTool());
    this.register(new WriteFileTool());
    this.register(new SearchFilesTool());
    this.register(new ExecSqliteTool());
    this.register(new LlmCallTool());
    this.register(new EvidenceSearchTool());
    this.register(new EvidenceChunkReadTool());
    this.register(new DraftTool());
    this.register(new VerifyCitationsTool());
    this.register(new EvidenceIngestTool());
    this.register(new HostileReviewTool());
    this.register(new QualityGateTool());
    if (this.includeResearchTools) {
      this.register(new WebSearchTool());
      this.register(new WebFetchTool());
    }
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
    return tools.filter((tool) => this.allowedTools?.has(tool.name));
  }

  getAllDefinitions(): ToolDefinition[] {
    return this.getAll().map(t => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema,
    }));
  }

  async execute(name: string, args: Record<string, unknown>, context: ToolUseContext): Promise<ToolResult> {
    const started = Date.now();
    let result: ToolResult;

    if (this.allowedTools && !this.allowedTools.has(name)) {
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
          success: result.success,
          error: result.error,
          policyDecision,
          durationMs: Date.now() - started,
          args: redactArgs(args),
          output: result.output ? truncate(result.output, 500) : undefined,
        },
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
