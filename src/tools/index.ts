import type { Tool, ToolResult, ToolDefinition, ToolUseContext } from '../types/tool.js';
import { ReadFileTool } from './read-file.tool.js';
import { WriteFileTool } from './write-file.tool.js';
import { SearchFilesTool } from './search-files.tool.js';
import { ExecSqliteTool } from './exec-sqlite.tool.js';
import { LlmCallTool } from './llm-call.tool.js';
import { EvidenceSearchTool } from './evidence-search.tool.js';
import { DraftTool } from './draft.tool.js';
import { VerifyCitationsTool } from './verify-citations.tool.js';
import { EvidenceIngestTool } from './evidence-ingest.tool.js';
import { HostileReviewTool } from './hostile-review.tool.js';
import { QualityGateTool } from './quality-gate.tool.js';

export class ToolRegistry {
  private tools: Map<string, Tool> = new Map();

  constructor() {
    this.registerDefaults();
  }

  private registerDefaults(): void {
    this.register(new ReadFileTool());
    this.register(new WriteFileTool());
    this.register(new SearchFilesTool());
    this.register(new ExecSqliteTool());
    this.register(new LlmCallTool());
    this.register(new EvidenceSearchTool());
    this.register(new DraftTool());
    this.register(new VerifyCitationsTool());
    this.register(new EvidenceIngestTool());
    this.register(new HostileReviewTool());
    this.register(new QualityGateTool());
  }

  register(tool: Tool): void {
    this.tools.set(tool.name, tool);
  }

  get(name: string): Tool | undefined {
    return this.tools.get(name);
  }

  getAll(): Tool[] {
    return Array.from(this.tools.values());
  }

  getAllDefinitions(): ToolDefinition[] {
    return this.getAll().map(t => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema,
    }));
  }

  async execute(name: string, args: Record<string, unknown>, context: ToolUseContext): Promise<ToolResult> {
    const tool = this.tools.get(name);
    if (!tool) {
      return { success: false, error: `Tool "${name}" not found. Available: ${Array.from(this.tools.keys()).join(', ')}` };
    }
    if (!tool.isEnabled()) {
      return { success: false, error: `Tool "${name}" is disabled` };
    }
    try {
      context.log(`[tool] ${name}(${JSON.stringify(args)})`);
      const result = await tool.call(args, context);
      context.log(`[tool] ${name} → ${result.success ? 'ok' : 'error'}: ${result.output || result.error || ''}`);
      return result;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      context.log(`[tool] ${name} → exception: ${msg}`);
      return { success: false, error: msg };
    }
  }
}
