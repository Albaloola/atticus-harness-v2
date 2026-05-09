import { access, readdir, readFile } from 'fs/promises';
import { constants } from 'fs';
import { homedir } from 'os';
import { dirname, isAbsolute, join, relative, resolve } from 'path';
import { loadSkillsFromDir } from '../skills/loader.js';
import type { SkillDefinition } from '../skills/types.js';
import type { McpConfig, McpServerConfig } from '../mcp/types.js';
import { mergeMcpServerConfigs } from '../mcp/client.js';
import type { LoadedHarnessPlugin, PluginManifest, PluginSourceKind, PluginsConfig } from './types.js';
import {
  expandPluginPathReference,
  resolvePluginComponentPath,
  validatePluginManifest,
} from './validate.js';

const PLUGIN_MANIFEST_DIRS = ['.codex-plugin', '.claude-plugin'];

export interface PluginDiscoveryOptions {
  config?: PluginsConfig;
  cwd?: string;
  codexHome?: string;
  log?: (message: string) => void;
}

export async function discoverHarnessPlugins(options: PluginDiscoveryOptions = {}): Promise<LoadedHarnessPlugin[]> {
  const config = options.config;
  if (config?.enabled === false) return [];

  const roots = await pluginSearchRoots(options);
  const plugins: LoadedHarnessPlugin[] = [];
  const seen = new Set<string>();
  const enabled = config?.enabledPlugins ? new Set(config.enabledPlugins) : undefined;
  const disabled = new Set(config?.disabledPlugins ?? []);
  const log = options.log ?? (() => undefined);

  for (const root of roots) {
    for (const manifestPath of await findPluginManifestPaths(root).catch(() => [])) {
      if (seen.has(manifestPath)) continue;
      seen.add(manifestPath);
      try {
        const rootDir = dirname(dirname(manifestPath));
        const manifest = validatePluginManifest(JSON.parse(await readFile(manifestPath, 'utf-8')), rootDir);
        if (disabled.has(manifest.name)) continue;
        if (enabled && !enabled.has(manifest.name)) continue;
        const plugin = await hydratePlugin(manifestPath, manifest, options);
        plugins.push(plugin);
      } catch (error) {
        log(`[plugin] skipped ${manifestPath}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  return plugins.sort((a, b) => a.name.localeCompare(b.name));
}

export async function loadPluginSkillDefinitions(config?: PluginsConfig): Promise<SkillDefinition[]> {
  if (config?.enabled === false || config?.loadSkills === false) return [];
  const plugins = await discoverHarnessPlugins({ config });
  const skills: SkillDefinition[] = [];

  for (const plugin of plugins) {
    for (const skillsDir of plugin.skillsDirs) {
      const loaded = await loadSkillsFromDir(skillsDir);
      skills.push(...loaded.map((skill) => namespaceSkill(plugin.name, skill)));
    }
  }

  return skills;
}

export async function buildPluginMcpConfig(config?: PluginsConfig): Promise<McpConfig> {
  if (config?.enabled === false || config?.loadMcpServers === false) {
    return { enabled: true, servers: {}, defaultTimeoutMs: 60_000 };
  }

  const plugins = await discoverHarnessPlugins({ config });
  const servers: Record<string, McpServerConfig> = {};

  for (const plugin of plugins) {
    const configs = await readPluginMcpServers(plugin);
    for (const [serverName, serverConfig] of Object.entries(configs)) {
      servers[`${plugin.name}:${serverName}`] = resolveMcpServerPaths(serverConfig, plugin);
    }
  }

  return { enabled: true, servers: mergeMcpServerConfigs({ plugin: servers }), defaultTimeoutMs: 60_000 };
}

async function pluginSearchRoots(options: PluginDiscoveryOptions): Promise<string[]> {
  const cwd = options.cwd ?? process.cwd();
  const config = options.config;
  const roots = [
    ...normalizePathList(config?.directories ?? [], cwd),
    resolve(cwd, '.codex', 'plugins'),
    resolve(cwd, '.atticus', 'plugins'),
  ];

  if (config?.includeCodexCache ?? true) {
    const codexHome = options.codexHome ?? process.env.CODEX_HOME ?? join(process.env.HOME ?? homedir(), '.codex');
    roots.push(resolve(codexHome, 'plugins', 'cache'));
  }

  const existing: string[] = [];
  for (const root of roots) {
    if (await exists(root)) existing.push(root);
  }
  return Array.from(new Set(existing));
}

async function findPluginManifestPaths(root: string, depth = 0): Promise<string[]> {
  if (depth > 6) return [];
  const entries = await readdir(root, { withFileTypes: true });
  const manifests: string[] = [];

  for (const marker of PLUGIN_MANIFEST_DIRS) {
    const path = join(root, marker, 'plugin.json');
    if (await exists(path)) manifests.push(path);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
    manifests.push(...await findPluginManifestPaths(join(root, entry.name), depth + 1));
  }

  return manifests;
}

async function hydratePlugin(
  manifestPath: string,
  manifest: PluginManifest,
  options: PluginDiscoveryOptions,
): Promise<LoadedHarnessPlugin> {
  const rootDir = dirname(dirname(manifestPath));
  const source = inferPluginSource(rootDir, options);
  const skillsDirs = resolvePluginComponentPaths(manifest.skills ?? './skills', rootDir)
    .filter((path) => path.endsWith('skills') || path.includes('/skills'));
  const mcpPath = typeof manifest.mcpServers === 'string'
    ? resolvePluginComponentPath(manifest.mcpServers, rootDir)
    : await exists(join(rootDir, '.mcp.json')) ? join(rootDir, '.mcp.json') : undefined;
  const appPath = typeof manifest.apps === 'string'
    ? resolvePluginComponentPath(manifest.apps, rootDir)
    : await exists(join(rootDir, '.app.json')) ? join(rootDir, '.app.json') : undefined;

  return {
    name: manifest.name,
    version: manifest.version ?? 'unknown',
    source,
    provenance: { source, rootDir, manifestPath },
    rootDir,
    manifestPath,
    manifest,
    skillsDirs: await existingDirs(skillsDirs),
    mcpPath,
    appPath,
  };
}

async function readPluginMcpServers(plugin: LoadedHarnessPlugin): Promise<Record<string, McpServerConfig>> {
  if (typeof plugin.manifest.mcpServers === 'object' && plugin.manifest.mcpServers !== null) {
    return plugin.manifest.mcpServers.mcpServers ?? {};
  }
  if (!plugin.mcpPath || !await exists(plugin.mcpPath)) return {};
  const parsed = JSON.parse(await readFile(plugin.mcpPath, 'utf-8')) as { mcpServers?: Record<string, McpServerConfig> };
  validatePluginManifest({ name: plugin.name, mcpServers: parsed }, plugin.rootDir);
  return parsed.mcpServers ?? {};
}

function namespaceSkill(pluginName: string, skill: SkillDefinition): SkillDefinition {
  return {
    ...skill,
    skillId: `${pluginName}:${skill.skillId}`,
    manifest: {
      ...skill.manifest,
      name: `${pluginName}:${skill.manifest.name || skill.skillId}`,
    },
  };
}

function resolveMcpServerPaths(
  config: McpServerConfig,
  plugin: LoadedHarnessPlugin,
): McpServerConfig {
  const pluginRoot = plugin.rootDir;
  return {
    ...config,
    cwd: config.cwd ? resolvePluginComponentPath(config.cwd, pluginRoot) : config.cwd,
    args: config.args?.map((arg) => expandPluginPathReference(arg, pluginRoot)),
    env: config.env ? expandEnv(config.env, pluginRoot) : undefined,
    source: config.source ?? {
      kind: 'plugin',
      pluginName: plugin.name,
      pluginSource: plugin.source,
      manifestPath: plugin.manifestPath,
    },
  };
}

function resolvePluginComponentPaths(value: string | string[], pluginRoot: string): string[] {
  const values = Array.isArray(value) ? value : [value];
  return values.map((entry) => resolvePluginComponentPath(entry, pluginRoot));
}

function expandEnv(env: Record<string, string>, pluginRoot: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    result[key] = expandPluginPathReference(value, pluginRoot).replace(/\$\{([^}]+)\}|\$([A-Za-z_][A-Za-z0-9_]*)/g, (_match, braced, bare) => {
      const envKey = String(braced ?? bare);
      return process.env[envKey] ?? '';
    });
  }
  return result;
}

function inferPluginSource(rootDir: string, options: PluginDiscoveryOptions): PluginSourceKind {
  const cwd = resolve(options.cwd ?? process.cwd());
  const codexHome = resolve(options.codexHome ?? process.env.CODEX_HOME ?? join(process.env.HOME ?? homedir(), '.codex'));
  const root = resolve(rootDir);
  if (isWithin(root, resolve(cwd, 'src', 'plugins'))) return 'built-in';
  if (isWithin(root, resolve(cwd, '.codex', 'plugins', 'generated'))) return 'generated';
  if (isWithin(root, resolve(cwd, '.codex', 'plugins')) || isWithin(root, resolve(cwd, '.atticus', 'plugins'))) return 'workspace';
  if (isWithin(root, resolve(codexHome, 'plugins', 'marketplace'))) return 'marketplace';
  if (isWithin(root, resolve(codexHome, 'plugins', 'cache'))) return 'installed';
  if (isWithin(root, resolve(codexHome, 'plugins'))) return 'user-local';
  return 'future';
}

function isWithin(child: string, parent: string): boolean {
  const rel = relative(parent, child);
  return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}

function normalizePathList(paths: string[], cwd: string): string[] {
  return paths.map((path) => isAbsolute(path) ? path : resolve(cwd, path));
}

async function existingDirs(paths: string[]): Promise<string[]> {
  const result: string[] = [];
  for (const path of paths) {
    if (await exists(path)) result.push(path);
  }
  return result;
}

async function exists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
