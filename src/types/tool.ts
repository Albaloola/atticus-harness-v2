export interface Tool<I = Record<string, unknown>, O = unknown> {
  readonly name: string;
  readonly description: string;
  readonly inputSchema: Record<string, unknown>;
  call(args: I, context: ToolUseContext): Promise<ToolResult<O>>;
  isEnabled(): boolean;
}

export interface ToolUseContext {
  matterName?: string;
  getEvidencePath: (id: string) => string;
  getExtractionPath: (id: string) => string;
  getConfig: () => Record<string, unknown>;
  log: (msg: string) => void;
}

export interface ToolResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  output?: string;
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}
