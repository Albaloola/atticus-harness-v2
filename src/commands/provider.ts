import chalk from 'chalk';
import { loadGlobalConfig, saveGlobalConfig } from '../config/loader.js';
import { saveSecret, getSecret, getOAuthToken } from '../config/secrets.js';
import { resolveProviderAuth } from '../config/auth.js';
import { assertModelCompatibleWithProfile } from '../config/model-compat.js';
import type { GlobalHarnessConfig, ProviderProfile, ModelRole } from '../config/schema.js';
import {
  DEFAULT_ACTIVE_PROVIDER,
  DEFAULT_PROVIDER_PROFILES,
  MODEL_ROLES,
  cloneDefaultProviderProfiles,
  isLegacyCodexOAuthProfileName,
  legacyCodexOAuthMigrationMessage,
  isModelRole,
  policyForProfile,
} from '../config/presets.js';

type JsonOptions = { json?: boolean };

export interface ProviderPanelState {
  active: ProviderProfile;
  auth: {
    state: 'OK' | 'MISSING' | 'NONE' | 'UNSUPPORTED' | 'DELEGATED';
    detail: string;
  };
  profiles: ProviderProfile[];
}

export async function buildProviderPanelState(): Promise<ProviderPanelState> {
  const { config } = await loadGlobalConfig();
  const active = config.profiles[config.activeProvider];
  return {
    active,
    auth: await resolveAuthStatus(active),
    profiles: Object.values(config.profiles),
  };
}

export async function handleProviderList(options: JsonOptions = {}): Promise<void> {
  const state = await buildProviderPanelState();
  const rows = await Promise.all(state.profiles.map(async (profile) => ({
    name: profile.name,
    active: profile.name === state.active.name,
    preset: profile.isCustom ? 'custom' : profile.preset,
    providerKind: profile.providerKind ?? 'openai-compatible',
    toolSupport: toolSupportForProfile(profile),
    reasoningControl: reasoningControlForProfile(profile),
    authType: profile.authType,
    auth: (await resolveAuthStatus(profile)).state,
    baseUrl: profile.baseUrl,
  })));
  if (options.json) {
    console.log(JSON.stringify({ activeProvider: state.active.name, profiles: rows }, null, 2));
    return;
  }
  console.log(chalk.bold.cyan('Provider profiles'));
  for (const row of rows) {
    const marker = row.active ? chalk.green('*') : ' ';
    console.log(`${marker} ${row.name} (${row.preset}) ${chalk.gray(row.providerKind)} ${chalk.gray(row.toolSupport)} ${chalk.gray(`reasoning=${row.reasoningControl}`)} ${chalk.gray(row.authType)} ${chalk.gray(row.baseUrl)} auth=${row.auth}`);
  }
}

export async function handleProviderShow(name?: string, options: JsonOptions = {}): Promise<void> {
  if (isLegacyCodexOAuthProfileName(name)) {
    throw new Error(legacyCodexOAuthMigrationMessage(name));
  }
  const { config } = await loadGlobalConfig();
  const profile = name ? config.profiles[name] : config.profiles[config.activeProvider];
  if (!profile) {
    throw new Error(`Unknown provider profile: ${name}`);
  }
  const auth = await resolveAuthStatus(profile);
  const output = { profile, auth, active: profile.name === config.activeProvider };
  if (options.json) {
    console.log(JSON.stringify(output, null, 2));
    return;
  }
  printProviderProfile(profile, auth, output.active);
}

export async function handleProviderSelect(name: string): Promise<void> {
  if (isLegacyCodexOAuthProfileName(name)) {
    throw new Error(legacyCodexOAuthMigrationMessage(name));
  }
  const { config } = await loadGlobalConfig();
  const profile = config.profiles[name];
  if (!profile) {
    throw new Error(`Unknown provider profile: ${name}`);
  }
  applyActiveProfile(config, profile);
  await saveGlobalConfig(config);
  console.log(`Active provider set to ${name}`);
}

export async function handleProviderAuth(nameOrKey?: string, maybeKey?: string): Promise<void> {
  if (isLegacyCodexOAuthProfileName(nameOrKey)) {
    throw new Error(legacyCodexOAuthMigrationMessage(nameOrKey));
  }
  const { config } = await loadGlobalConfig();
  const explicitProfile = nameOrKey && config.profiles[nameOrKey] ? config.profiles[nameOrKey] : undefined;
  const profile = explicitProfile ?? config.profiles[config.activeProvider];
  const key = explicitProfile ? maybeKey : nameOrKey;
  const secretKey = authSecretKey(profile);
  const resolved = await resolveProviderAuth(profile);
  if (resolved.status === 'unsupported') {
    console.log(`Auth for ${profile.name}: UNSUPPORTED — ${resolved.message}`);
    return;
  }

  if (!secretKey) {
    if (profile.authType === 'delegated') {
      console.log(`Provider ${profile.name} uses delegated Codex CLI auth. ${resolved.message}`);
      console.log('Authenticate with: codex login');
      return;
    }
    console.log(`Provider ${profile.name} does not require stored auth.`);
    return;
  }
  if (!key) {
    const status = await resolveAuthStatus(profile);
    console.log(`Auth for ${profile.name}: ${status.state} — ${status.detail}`);
    console.log(`Set with: harness provider auth ${profile.name} <token>`);
    return;
  }
  await saveSecret(secretKey, key);
  console.log(`Auth saved for ${profile.name} as ${secretKey}`);
}

export async function handleProviderReset(): Promise<void> {
  const { config } = await loadGlobalConfig();
  config.activeProvider = DEFAULT_ACTIVE_PROVIDER;
  config.profiles = cloneDefaultProviderProfiles();
  applyActiveProfile(config, config.profiles[DEFAULT_ACTIVE_PROVIDER]);
  await saveGlobalConfig(config);
  console.log('Provider profiles reset to factory defaults; secrets were preserved.');
}

export async function handleProviderModelShow(options: JsonOptions = {}): Promise<void> {
  const state = await buildProviderPanelState();
  if (options.json) {
    console.log(JSON.stringify({ provider: state.active.name, models: state.active.models }, null, 2));
    return;
  }
  printModels(state.active);
}

export async function handleProviderModelSet(role: string, model: string): Promise<void> {
  if (!isModelRole(role)) {
    throw new Error(`Invalid model role: ${role}. Valid roles: ${MODEL_ROLES.join(', ')}`);
  }
  const { config } = await loadGlobalConfig();
  const profile = config.profiles[config.activeProvider];
  assertModelCompatibleWithProfile(profile, model);
  profile.models[role] = model;
  profile.isCustom = isProfileCustom(profile);
  applyActiveProfile(config, profile);
  await saveGlobalConfig(config);
  console.log(`Set ${profile.name} ${role} model to ${model}`);
}

export async function handleProviderModelReset(): Promise<void> {
  const { config } = await loadGlobalConfig();
  const active = config.profiles[config.activeProvider];
  const preset = DEFAULT_PROVIDER_PROFILES[active.preset] ?? DEFAULT_PROVIDER_PROFILES[active.name];
  if (!preset) {
    throw new Error(`No preset defaults available for ${active.name}`);
  }
  config.profiles[active.name] = structuredClone(preset);
  applyActiveProfile(config, config.profiles[active.name]);
  await saveGlobalConfig(config);
  console.log(`Model delegation reset for ${active.name}`);
}

export function printProviderPanel(state: ProviderPanelState): void {
  console.log(chalk.bold.cyan('Provider'));
  console.log(`  Active: ${state.active.name} (${state.active.isCustom ? 'custom' : 'preset'})`);
  console.log(`  Kind:   ${state.active.providerKind ?? 'openai-compatible'} / ${toolSupportForProfile(state.active)}`);
  console.log(`  Reason: ${reasoningControlForProfile(state.active)}`);
  console.log(`  Auth:   ${state.auth.state} — ${state.auth.detail}`);
  console.log(`  API:    ${state.active.baseUrl}`);
  printModels(state.active);
}

function printProviderProfile(profile: ProviderProfile, auth: ProviderPanelState['auth'], active: boolean): void {
  console.log(chalk.bold.cyan(`Provider: ${profile.name}${active ? ' (active)' : ''}`));
  console.log(`  Label:  ${profile.label}`);
  console.log(`  Preset: ${profile.isCustom ? 'custom' : profile.preset}`);
  console.log(`  Kind:   ${profile.providerKind ?? 'openai-compatible'} / ${toolSupportForProfile(profile)}`);
  console.log(`  Reason: ${reasoningControlForProfile(profile)}`);
  console.log(`  Auth:   ${auth.state} — ${auth.detail}`);
  console.log(`  API:    ${profile.baseUrl}`);
  printModels(profile);
}

function toolSupportForProfile(profile: ProviderProfile): string {
  switch (profile.providerKind ?? 'openai-compatible') {
    case 'codex-sdk':
      return 'tool-free; use --no-tools';
    case 'local':
      return 'tool-capable when the local server supports tool calls';
    case 'anthropic':
    case 'openai-compatible':
      return 'tool-capable';
  }
}

function reasoningControlForProfile(profile: ProviderProfile): string {
  return profile.reasoningControl ?? 'none';
}

function printModels(profile: ProviderProfile): void {
  console.log(chalk.bold.cyan('Model delegation'));
  for (const role of MODEL_ROLES) {
    console.log(`  ${role.padEnd(10)} ${profile.models[role]}`);
  }
}

async function resolveAuthStatus(profile: ProviderProfile): Promise<ProviderPanelState['auth']> {
  if (profile.authType === 'none') {
    return { state: 'NONE', detail: 'no auth required' };
  }
  const resolved = await resolveProviderAuth(profile);
  if (resolved.status === 'unsupported') {
    return { state: 'UNSUPPORTED', detail: resolved.message };
  }
  if (profile.authType === 'delegated') {
    return {
      state: resolved.status === 'ok' ? 'DELEGATED' : 'MISSING',
      detail: resolved.status === 'ok'
        ? `Codex CLI delegated auth ready: ${resolved.message}`
        : `${resolved.message} Run: codex login`,
    };
  }
  if (profile.authType === 'oauth') {
    const token = profile.oauthProvider ? await getOAuthToken(profile.oauthProvider) : undefined;
    if (token) {
      return { state: 'OK', detail: `${profile.oauthProvider ?? 'oauth'} token found` };
    }
    return { state: 'MISSING', detail: `set ANTHROPIC_AUTH_TOKEN or run harness provider auth ${profile.name} <token>` };
  }

  const keyName = profile.keyName ?? authSecretKey(profile);
  if (keyName && (await getSecret(keyName))) {
    return { state: 'OK', detail: `${keyName} found in secrets` };
  }
  if (keyName && process.env[keyName]) {
    return { state: 'OK', detail: `${keyName} found in environment` };
  }
  return { state: 'MISSING', detail: `set with harness provider auth ${profile.name} <key> or export ${keyName}=<key>` };
}

function authSecretKey(profile: ProviderProfile): string | undefined {
  if (profile.authType === 'api-key') return profile.keyName;
  if (profile.authType === 'oauth') {
    return profile.oauthProvider === 'claude-code' ? 'ANTHROPIC_AUTH_TOKEN' : undefined;
  }
  return undefined;
}

function applyActiveProfile(config: GlobalHarnessConfig, profile: ProviderProfile): void {
  config.activeProvider = profile.name;
  config.defaultModel = profile.models.fast;
  config.providerPolicy = policyForProfile(profile, config.providerPolicy);
  config.providers[profile.name] = {
    ...(config.providers[profile.name] ?? {}),
    baseUrl: profile.baseUrl,
    defaultModel: profile.models.fast,
    fallbackModel: profile.fallbackModel,
    providerKind: profile.providerKind,
    authType: profile.authType,
    keyName: profile.keyName,
    oauthProvider: profile.oauthProvider,
    delegatedAuthProvider: profile.delegatedAuthProvider,
    apiPath: profile.apiPath,
    anthropicFormat: profile.anthropicFormat,
    reasoningControl: profile.reasoningControl,
  };
}

function isProfileCustom(profile: ProviderProfile): boolean {
  const preset = DEFAULT_PROVIDER_PROFILES[profile.preset] ?? DEFAULT_PROVIDER_PROFILES[profile.name];
  if (!preset) return true;
  return MODEL_ROLES.some((role: ModelRole) => profile.models[role] !== preset.models[role]);
}
