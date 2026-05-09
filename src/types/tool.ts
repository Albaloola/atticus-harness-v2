export interface Tool<I = Record<string, unknown>, O = unknown> {
  readonly name: string;
  readonly description: string;
  readonly inputSchema: Record<string, unknown>;
  readonly executionKind?: ToolExecutionKind;
  readonly isConcurrencySafe?: boolean;
  readonly modifiesContext?: boolean;
  readonly maxConcurrencyGroup?: string;
  call(args: I, context: ToolUseContext): Promise<ToolResult<O>>;
  isEnabled(): boolean;
}

export type ToolExecutionKind = 'read' | 'write' | 'state' | 'network' | 'shell' | 'mcp';

export interface ToolUseContext {
  matterName?: string;
  runId?: string;
  taskId?: string;
  toolCallId?: string;
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
  storedResult?: StoredToolResultMetadata;
}

export interface StoredToolResultMetadata {
  preview: string;
  truncated: true;
  storedResultPath: string;
  originalByteLength: number;
  contentType: string;
  toolCallId: string;
  toolName: string;
  sha256: string;
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}
