import { isAbsolute, relative, resolve } from 'path';
import type { McpServerConfig } from '../mcp/types.js';
import type { PluginManifest } from './types.js';

export class PluginManifestValidationError extends Error {
  constructor(readonly errors: string[]) {
    super(`invalid plugin manifest: ${errors.join('; ')}`);
    this.name = 'PluginManifestValidationError';
  }
}

export function validatePluginManifest(value: unknown, pluginRoot: string): PluginManifest {
  const errors: string[] = [];
  if (!isRecord(value)) {
    throw new PluginManifestValidationError(['manifest must be an object']);
  }

  if (!isNonEmptyString(value.name)) errors.push('name must be a non-empty string');
  validateOptionalString(value, 'version', errors);
  validateOptionalString(value, 'description', errors);
  validateOptionalString(value, 'homepage', errors);
  validateOptionalString(value, 'repository', errors);
  validateOptionalString(value, 'license', errors);

  if (value.author !== undefined && !isRecord(value.author)) {
    errors.push('author must be an object when provided');
  }
  if (value.keywords !== undefined && (!Array.isArray(value.keywords) || !value.keywords.every((entry) => typeof entry === 'string'))) {
    errors.push('keywords must be an array of strings when provided');
  }

  validatePathList(value.skills, 'skills', pluginRoot, errors);
  validateApps(value.apps, pluginRoot, errors);
  validateMcpServers(value.mcpServers, pluginRoot, errors);

  if (errors.length > 0) throw new PluginManifestValidationError(errors);
  return value as unknown as PluginManifest;
}

export function assertPluginPath(value: string, field: string, pluginRoot: string): void {
  const resolved = resolvePluginPathReference(value, pluginRoot);
  if (!resolved) return;
  if (!isInside(pluginRoot, resolved)) {
    throw new PluginManifestValidationError([`${field} must stay inside plugin root`]);
  }
}

export function resolvePluginComponentPath(value: string, pluginRoot: string): string {
  assertPluginPath(value, 'plugin path', pluginRoot);
  return isAbsolute(value) ? resolve(value) : resolve(pluginRoot, value);
}

export function expandPluginPathReference(value: string, pluginRoot: string): string {
  const expanded = value.replace(/\$\{PLUGIN_DIR\}|\$PLUGIN_DIR/g, pluginRoot);
  assertPluginPath(expanded, 'plugin path reference', pluginRoot);
  return expanded;
}

function validatePathList(value: unknown, field: string, pluginRoot: string, errors: string[]): void {
  if (value === undefined) return;
  const entries = Array.isArray(value) ? value : [value];
  if (!entries.every((entry) => typeof entry === 'string')) {
    errors.push(`${field} must be a string or an array of strings`);
    return;
  }
  for (const entry of entries) {
    collectPathError(entry, field, pluginRoot, errors);
  }
}

function validateApps(value: unknown, pluginRoot: string, errors: string[]): void {
  if (value === undefined) return;
  if (typeof value === 'string') {
    collectPathError(value, 'apps', pluginRoot, errors);
    return;
  }
  if (!isRecord(value)) errors.push('apps must be a string or object when provided');
}

function validateMcpServers(value: unknown, pluginRoot: string, errors: string[]): void {
  if (value === undefined) return;
  if (typeof value === 'string') {
    collectPathError(value, 'mcpServers', pluginRoot, errors);
    return;
  }
  if (!isRecord(value)) {
    errors.push('mcpServers must be a string or object when provided');
    return;
  }
  if (value.mcpServers !== undefined && !isRecord(value.mcpServers)) {
    errors.push('mcpServers.mcpServers must be an object when provided');
    return;
  }
  const servers = value.mcpServers;
  if (!isRecord(servers)) return;
  for (const [serverName, serverConfig] of Object.entries(servers)) {
    if (!isRecord(serverConfig)) {
      errors.push(`mcpServers.${serverName} must be an object`);
      continue;
    }
    validateMcpServerConfig(serverConfig as McpServerConfig, `mcpServers.${serverName}`, pluginRoot, errors);
  }
}

function validateMcpServerConfig(config: McpServerConfig, field: string, pluginRoot: string, errors: string[]): void {
  const type = config.type ?? (config.url ? 'http' : 'stdio');
  if (!['stdio', 'http', 'sse'].includes(type)) errors.push(`${field}.type must be stdio, http, or sse`);
  if (config.command !== undefined && typeof config.command !== 'string') errors.push(`${field}.command must be a string`);
  if (config.url !== undefined && typeof config.url !== 'string') errors.push(`${field}.url must be a string`);
  if (config.cwd !== undefined && typeof config.cwd !== 'string') errors.push(`${field}.cwd must be a string`);
  if (config.args !== undefined && (!Array.isArray(config.args) || !config.args.every((entry) => typeof entry === 'string'))) {
    errors.push(`${field}.args must be an array of strings`);
  }
  if (config.env !== undefined && (!isRecord(config.env) || !Object.values(config.env).every((entry) => typeof entry === 'string'))) {
    errors.push(`${field}.env must be an object of string values`);
  }

  if (typeof config.command === 'string') collectPathError(config.command, `${field}.command`, pluginRoot, errors);
  if (typeof config.cwd === 'string') collectPathError(config.cwd, `${field}.cwd`, pluginRoot, errors);
  for (const [index, arg] of (config.args ?? []).entries()) {
    collectPathError(arg, `${field}.args[${index}]`, pluginRoot, errors);
  }
  for (const [key, envValue] of Object.entries(config.env ?? {})) {
    collectPathError(envValue, `${field}.env.${key}`, pluginRoot, errors);
  }
}

function collectPathError(value: string, field: string, pluginRoot: string, errors: string[]): void {
  try {
    assertPluginPath(value, field, pluginRoot);
  } catch (error) {
    if (error instanceof PluginManifestValidationError) errors.push(...error.errors);
    else errors.push(`${field} is invalid`);
  }
}

function resolvePluginPathReference(value: string, pluginRoot: string): string | undefined {
  if (isUrl(value)) return undefined;
  const expanded = value.replace(/\$\{PLUGIN_DIR\}|\$PLUGIN_DIR/g, pluginRoot);
  const hasPluginReference = expanded !== value || value.includes('PLUGIN_DIR');
  if (hasPluginReference) return resolve(expanded);
  if (isAbsolute(value)) return resolve(value);
  if (value.startsWith('./') || value.startsWith('../') || hasTraversalSegment(value)) {
    return resolve(pluginRoot, value);
  }
  return undefined;
}

function hasTraversalSegment(value: string): boolean {
  return value.split(/[\\/]+/).includes('..');
}

function isInside(root: string, target: string): boolean {
  const rel = relative(resolve(root), resolve(target));
  return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}

function validateOptionalString(value: Record<string, unknown>, field: string, errors: string[]): void {
  if (value[field] !== undefined && typeof value[field] !== 'string') errors.push(`${field} must be a string when provided`);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isUrl(value: string): boolean {
  return /^[a-z][a-z0-9+.-]*:\/\//i.test(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
