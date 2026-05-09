import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport, getDefaultEnvironment } from '@modelcontextprotocol/sdk/client/stdio.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import type { McpConfig, McpServerConfig, McpToolIdentity } from './types.js';

interface ConnectedMcpServer {
  name: string;
  config: McpServerConfig;
  client: Client;
  transport: Transport;
}

interface McpListedTool {
  name: string;
  description?: string;
  inputSchema?: Record<string, unknown>;
}

export interface McpToolRegistration {
  identity: McpToolIdentity;
  tool: Tool<Record<string, unknown>, unknown>;
}

export function mcpServerSignature(config: McpServerConfig): string {
  const type = config.type ?? (config.url ? 'http' : 'stdio');
  if (type === 'stdio') {
    return stableStringify({
      type,
      command: config.command ?? '',
      args: config.args ?? [],
      cwd: config.cwd ?? '',
      env: config.env ?? {},
    });
  }

  return stableStringify({
    type,
    url: config.url ?? '',
    headers: config.headers ?? {},
  });
}

export function mergeMcpServerConfigs(options: {
  direct?: Record<string, McpServerConfig>;
  plugin?: Record<string, McpServerConfig>;
  log?: (message: string) => void;
}): Record<string, McpServerConfig> {
  const direct = options.direct ?? {};
  const plugin = options.plugin ?? {};
  const log = options.log ?? (() => undefined);
  const merged: Record<string, McpServerConfig> = {};
  const seenSignatures = new Map<string, string>();

  for (const [name, config] of sortedEntries(direct)) {
    merged[name] = config;
    seenSignatures.set(mcpServerSignature(config), name);
  }

  for (const [name, config] of sortedEntries(plugin)) {
    if (merged[name]) {
      log(`[mcp] skipped plugin server ${name}: manual/direct server with same name is already configured`);
      continue;
    }
    const signature = mcpServerSignature(config);
    const duplicateOf = seenSignatures.get(signature);
    if (duplicateOf) {
      log(`[mcp] skipped plugin server ${name}: duplicate of ${duplicateOf}`);
      continue;
    }
    merged[name] = config;
    seenSignatures.set(signature, name);
  }

  return merged;
}

export class McpToolManager {
  private readonly servers = new Map<string, ConnectedMcpServer>();
  private readonly tools = new Map<string, { serverName: string; toolName: string }>();

  constructor(private readonly defaultTimeoutMs = 60_000) {}

  async connectConfigured(config: McpConfig | undefined, log: (message: string) => void = () => undefined): Promise<McpToolRegistration[]> {
    if (!config?.enabled) return [];
    const registrations: McpToolRegistration[] = [];
    const usedNames = new Set<string>();

    for (const [serverName, serverConfig] of Object.entries(config.servers ?? {})) {
      if (serverConfig.disabled) continue;
      try {
        const connected = await this.connectServer(serverName, serverConfig);
        const listed = await connected.client.listTools(
          undefined,
          { timeout: serverConfig.timeoutMs ?? config.defaultTimeoutMs ?? this.defaultTimeoutMs },
        );

        for (const remoteTool of listed.tools as McpListedTool[]) {
          const exposedName = uniqueToolName(`mcp__${sanitizeName(serverName)}__${sanitizeName(remoteTool.name)}`, usedNames);
          usedNames.add(exposedName);
          this.tools.set(exposedName, { serverName, toolName: remoteTool.name });
          registrations.push({
            identity: { serverName, toolName: remoteTool.name, exposedName },
            tool: new McpProxyTool({
              manager: this,
              identity: { serverName, toolName: remoteTool.name, exposedName },
              description: remoteTool.description,
              inputSchema: asJsonObjectSchema(remoteTool.inputSchema),
            }),
          });
        }
      } catch (error) {
        log(`[mcp] skipped ${serverName}: ${error instanceof Error ? error.message : String(error)}`);
        await this.closeServer(serverName).catch(() => undefined);
      }
    }

    return registrations;
  }

  async callTool(exposedName: string, args: Record<string, unknown>, timeoutMs?: number): Promise<ToolResult> {
    const mapping = this.tools.get(exposedName);
    if (!mapping) {
      return { success: false, error: `MCP tool "${exposedName}" is not registered` };
    }
    const server = this.servers.get(mapping.serverName);
    if (!server) {
      return { success: false, error: `MCP server "${mapping.serverName}" is not connected` };
    }

    try {
      const result = await server.client.callTool(
        { name: mapping.toolName, arguments: args },
        undefined,
        { timeout: timeoutMs ?? server.config.timeoutMs ?? this.defaultTimeoutMs },
      );
      return mcpResultToToolResult(result);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  async close(): Promise<void> {
    await Promise.all([...this.servers.keys()].map((name) => this.closeServer(name).catch(() => undefined)));
  }

  private async connectServer(name: string, config: McpServerConfig): Promise<ConnectedMcpServer> {
    const existing = this.servers.get(name);
    if (existing) return existing;

    const transport = createTransport(config);
    const client = new Client({ name: 'atticus-harness', version: '0.1.0' });
    await client.connect(transport, { timeout: config.timeoutMs ?? this.defaultTimeoutMs });
    const connected = { name, config, client, transport };
    this.servers.set(name, connected);
    return connected;
  }

  private async closeServer(name: string): Promise<void> {
    const server = this.servers.get(name);
    if (!server) return;
    this.servers.delete(name);
    await server.client.close();
  }
}

class McpProxyTool implements Tool<Record<string, unknown>, unknown> {
  readonly name: string;
  readonly description: string;
  readonly inputSchema: Record<string, unknown>;
  readonly executionKind = 'mcp' as const;
  readonly isConcurrencySafe = false;
  readonly modifiesContext = true;

  constructor(private readonly options: {
    manager: McpToolManager;
    identity: McpToolIdentity;
    description?: string;
    inputSchema: Record<string, unknown>;
  }) {
    this.name = options.identity.exposedName;
    this.description = [
      options.description || `MCP tool ${options.identity.toolName}`,
      `(MCP server: ${options.identity.serverName}; remote tool: ${options.identity.toolName})`,
    ].join(' ');
    this.inputSchema = options.inputSchema;
  }

  async call(args: Record<string, unknown>, _context: ToolUseContext): Promise<ToolResult> {
    return this.options.manager.callTool(this.name, args);
  }

  isEnabled(): boolean {
    return true;
  }
}

function createTransport(config: McpServerConfig): Transport {
  const type = config.type ?? (config.url ? 'http' : 'stdio');
  if (type === 'stdio') {
    if (!config.command) throw new Error('stdio MCP server requires command');
    return new StdioClientTransport({
      command: config.command,
      args: config.args ?? [],
      cwd: config.cwd,
      env: config.env ? { ...getDefaultEnvironment(), ...config.env } : undefined,
      stderr: 'pipe',
    });
  }

  if (!config.url) throw new Error(`${type} MCP server requires url`);
  const headers = config.headers;
  const requestInit = headers ? { headers } : undefined;
  if (type === 'sse') {
    return new SSEClientTransport(new URL(config.url), { requestInit });
  }
  return new StreamableHTTPClientTransport(new URL(config.url), { requestInit });
}

function asJsonObjectSchema(schema: unknown): Record<string, unknown> {
  if (!isRecord(schema)) return { type: 'object', properties: {} };
  return {
    type: schema.type === 'object' ? 'object' : 'object',
    ...schema,
  };
}

function mcpResultToToolResult(result: unknown): ToolResult {
  if (!isRecord(result)) {
    return { success: true, data: result, output: String(result) };
  }

  const isError = result.isError === true;
  const output = formatMcpContent(result.content);
  const data = result.structuredContent ?? result.toolResult ?? result;
  return {
    success: !isError,
    data,
    output: output || (isError ? undefined : JSON.stringify(data, null, 2)),
    error: isError ? (output || 'MCP tool returned an error') : undefined,
  };
}

function formatMcpContent(content: unknown): string | undefined {
  if (!Array.isArray(content)) return undefined;
  const parts = content.map((part) => {
    if (!isRecord(part)) return '';
    if (part.type === 'text' && typeof part.text === 'string') return part.text;
    if (part.type === 'resource' && isRecord(part.resource)) {
      if (typeof part.resource.text === 'string') return part.resource.text;
      if (typeof part.resource.uri === 'string') return `[resource: ${part.resource.uri}]`;
    }
    if (part.type === 'image') return '[image content]';
    if (part.type === 'audio') return '[audio content]';
    if (part.type === 'resource_link' && typeof part.uri === 'string') return `[resource: ${part.uri}]`;
    return JSON.stringify(part);
  }).filter(Boolean);
  return parts.length ? parts.join('\n') : undefined;
}

function sanitizeName(name: string): string {
  const sanitized = name.replace(/[^A-Za-z0-9_]/g, '_').replace(/^_+|_+$/g, '');
  return sanitized || 'unnamed';
}

function uniqueToolName(base: string, used: Set<string>): string {
  if (!used.has(base)) return base;
  let index = 2;
  while (used.has(`${base}_${index}`)) index++;
  return `${base}_${index}`;
}

function sortedEntries<T>(record: Record<string, T>): [string, T][] {
  return Object.entries(record).sort(([a], [b]) => a.localeCompare(b));
}

function stableStringify(value: unknown): string {
  return JSON.stringify(sortStable(value));
}

function sortStable(value: unknown): unknown {
  if (Array.isArray(value)) return value.map((entry) => sortStable(entry));
  if (!isRecord(value)) return value;
  const sorted: Record<string, unknown> = {};
  for (const key of Object.keys(value).sort()) {
    sorted[key] = sortStable(value[key]);
  }
  return sorted;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
