export type McpTransportType = 'stdio' | 'http' | 'sse';

export interface McpServerConfig {
  type?: McpTransportType;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
  url?: string;
  headers?: Record<string, string>;
  disabled?: boolean;
  timeoutMs?: number;
  note?: string;
}

export interface McpConfig {
  enabled: boolean;
  servers: Record<string, McpServerConfig>;
  defaultTimeoutMs: number;
}

export interface McpToolIdentity {
  serverName: string;
  toolName: string;
  exposedName: string;
}
