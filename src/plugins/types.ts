import type { McpServerConfig } from '../mcp/types.js';

export interface PluginAuthor {
  name?: string;
  email?: string;
  url?: string;
}

export interface PluginManifest {
  name: string;
  version?: string;
  description?: string;
  author?: PluginAuthor;
  homepage?: string;
  repository?: string;
  license?: string;
  keywords?: string[];
  skills?: string | string[];
  apps?: string | Record<string, unknown>;
  mcpServers?: string | { mcpServers?: Record<string, McpServerConfig> };
}

export interface LoadedHarnessPlugin {
  name: string;
  version: string;
  rootDir: string;
  manifestPath: string;
  manifest: PluginManifest;
  skillsDirs: string[];
  mcpPath?: string;
  appPath?: string;
}

export interface PluginsConfig {
  enabled: boolean;
  loadSkills: boolean;
  loadMcpServers: boolean;
  includeCodexCache: boolean;
  directories: string[];
  enabledPlugins?: string[];
  disabledPlugins?: string[];
}
