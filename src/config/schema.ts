// ---------------------------------------------------------------------------
// Global control-panel types for Harness V2
// ---------------------------------------------------------------------------

import type { ReasoningEffort } from '../types/llm.js';
import type { McpConfig } from '../mcp/types.js';
import type { PluginsConfig } from '../plugins/types.js';

export type AutonomyMode =
  | 'operator_safe'
  | 'auto_internal'
  | 'auto_accept_gated'
  | 'full_local_autonomy'
  | 'custom';

export type ExternalActionMode =
  | 'disabled'
  | 'prepare_only'
  | 'prepare_bundle_only'
  | 'operator_required_to_send';

export type ApprovalDecision =
  | 'allow'
  | 'deny'
  | 'ask'
  | 'allow_with_audit';

export type ToolCategory =
  | 'read_only'
  | 'matter_write'
  | 'network'
  | 'external_action'
  | 'agent_spawn'
  | 'config_change';

export type ProviderKind = 'openai-compatible' | 'anthropic' | 'codex-sdk' | 'local';
export type ProviderAuthType = 'api-key' | 'oauth' | 'none' | 'delegated';
/** `codex` is retained only to reject stale on-disk OAuth configs. */
export type OAuthProvider = 'codex' | 'claude-code';
export type DelegatedAuthProvider = 'codex-cli';
export type CodexToolStrategy = 'harness' | 'mcp';
export type ReasoningControl =
  | 'none'
  | 'model-routing'
  | 'openai-reasoning'
  | 'openrouter-reasoning'
  | 'deepseek-thinking'
  | 'anthropic-thinking'
  | 'codex-sdk';
export type ModelRole = 'fast' | 'reasoning' | 'drafting' | 'reviewer' | 'citation' | 'cheap';
export type ModelDelegation = Record<ModelRole, string>;

// ---------------------------------------------------------------------------
// Tool policy — per-category approval rules
// ---------------------------------------------------------------------------
export interface ToolCategoryPolicy {
  /** Default approval decision for tools in this category */
  defaultDecision: ApprovalDecision;
  /** Specific tool name overrides */
  toolOverrides?: Record<string, ApprovalDecision>;
  /** Whether tools in this category require a reason in the audit log */
  requireAuditLog: boolean;
}

export type ToolPolicy = Partial<Record<ToolCategory, ToolCategoryPolicy>>;

// ---------------------------------------------------------------------------
// Autonomy policy
// ---------------------------------------------------------------------------
export interface AutonomyPolicy {
  mode: AutonomyMode;
  autoApproveTools: boolean;
  autoApproveReadOnly: boolean;
  autoApproveFileWrites: boolean;
  autoApproveShell: boolean;
  autoApproveWeb: boolean;
  autoAcceptCandidates: boolean;
  requireQualityGateForAcceptance: boolean;
  requireCitationVerificationForAcceptance: boolean;
  requireHostileReviewForAcceptance: boolean;
  minGateScoreForAutoAccept: number;
  externalActionMode: ExternalActionMode;
  allowExternalDispatch: boolean;
  maxConcurrentAgents: number;
  maxAgentDepth: number;
  maxMatterBudgetUsd?: number;
  maxRunBudgetUsd?: number;
  maxWallClockMinutes?: number;
  gateFeedback: GateFeedbackConfig;
}

export interface GateFeedbackConfig {
  enabled: boolean;
  maxWorkerRetries: number;
  maxMiniOrchestratorRetries: number;
  maxMasterOrchestratorRetries: number;
  feedbackLevel: 'summary' | 'check-level';
}

export interface ProviderPolicy {
  /** Explicit provider/profile that is allowed when failClosed is true. */
  defaultProvider: string;
  /** Explicit allow-list of provider names for policy-enforced routing. */
  allowedProviders?: string[];
  models: ModelDelegation;
  retries: number;
  timeoutMs: number;
  concurrentRequests: number;
  perProviderRateLimit?: Record<string, { rpm?: number; tpm?: number }>;
  /** Fail closed unless provider/model are explicitly permitted. Default: true. */
  failClosed?: boolean;
  /** Additional explicit allow-list beyond named route models. */
  allowedModels?: string[];
  /** Explicit deny-list for held, free, reserved, or unsafe models. */
  deniedModels?: string[];
  /** Silent fallback is denied unless this is true. Default: false. */
  allowFallback?: boolean;
  /** Require every network request to carry an explicit model. Default: true. */
  requireExplicitModel?: boolean;
}

// ---------------------------------------------------------------------------
// Provider configuration
// ---------------------------------------------------------------------------
export interface ProviderConfig {
  apiKey?: string;
  baseUrl?: string;
  defaultModel?: string;
  fallbackModel?: string;
  timeoutMs?: number;
  maxRetries?: number;
  /** Whether to prefer the secrets.env value over env vars */
  preferSecrets?: boolean;
  /** Mark this provider as reserved (not available for general use). */
  reserved?: boolean;
  /** Provider transport/client kind. */
  providerKind?: ProviderKind;
  /** Auth scheme used after resolving profile credentials. */
  authType?: ProviderAuthType;
  /** Secret/env key name for API-key providers. */
  keyName?: string;
  /** OAuth token provider for OAuth-backed profiles. */
  oauthProvider?: OAuthProvider;
  /** Delegated local auth provider for non-token brokered profiles. */
  delegatedAuthProvider?: DelegatedAuthProvider;
  /** API path suffix for chat completions/messages clients. */
  apiPath?: string;
  /** Use Anthropic Messages API request/response format. */
  anthropicFormat?: boolean;
  /** Provider-native reasoning control strategy. */
  reasoningControl?: ReasoningControl;
  /** Whether this provider can run a native agent loop instead of Harness-owned tool calls. */
  agentCapable?: boolean;
  /** Tool execution strategy for the delegated Codex SDK transport. */
  codexToolStrategy?: CodexToolStrategy;
  /** Codex CLI exec workaround: required for native MCP tool calls while the CLI approval bug is present. */
  codexDangerouslyBypassApprovalsAndSandbox?: boolean;
}

export interface ProvidersConfig {
  openrouter?: ProviderConfig;
  [key: string]: ProviderConfig | undefined;
}

export interface ProviderProfile {
  /** Unique profile name */
  name: string;
  /** Human-readable label */
  label: string;
  /** Which preset this was derived from, or 'custom' if edited */
  preset: string;
  /** Auth type determines how keys are resolved */
  authType: ProviderAuthType;
  /** Provider transport/client kind */
  providerKind?: ProviderKind;
  /** Environment variable / secrets key name (for api-key type) */
  keyName?: string;
  /** OAuth provider name (for oauth type) */
  oauthProvider?: OAuthProvider;
  /** Delegated local auth provider (for delegated type) */
  delegatedAuthProvider?: DelegatedAuthProvider;
  /** API base URL */
  baseUrl: string;
  /** API path suffix */
  apiPath?: string;
  /** Anthropic-specific: use Messages API format */
  anthropicFormat?: boolean;
  /** Provider-native reasoning control strategy */
  reasoningControl?: ReasoningControl;
  /** Whether this provider can run a native agent loop instead of Harness-owned tool calls. */
  agentCapable?: boolean;
  /** Tool execution strategy for the delegated Codex SDK transport. */
  codexToolStrategy?: CodexToolStrategy;
  /** Codex CLI exec workaround: required for native MCP tool calls while the CLI approval bug is present. */
  codexDangerouslyBypassApprovalsAndSandbox?: boolean;
  /** Model delegation per task role */
  models: ModelDelegation;
  /** Fallback model (optional) */
  fallbackModel?: string;
  /** Whether user has customised any model role (deviates from preset) */
  isCustom: boolean;
}

export type SearchProviderName = 'tavily' | 'brave' | 'generic';

export interface SearchConfig {
  /** Preferred external legal web search provider. */
  provider: SearchProviderName;
  /** Optional endpoint override. Brave uses its web-search endpoint; Tavily uses its API base/search endpoint. */
  endpoint?: string;
  /** Optional secret/env key override. Defaults to TAVILY_API_KEY or BRAVE_SEARCH_API_KEY by provider. */
  keyName?: string;
  /** Optional usage tracking project id for providers that support it. */
  project?: string;
  defaultMaxResults?: number;
}

// ---------------------------------------------------------------------------
// Global configuration (written to ~/.atticus-harness/config.json)
// ---------------------------------------------------------------------------
export interface GlobalHarnessConfig {
  version: string;
  /** Active provider profile name. */
  activeProvider: string;
  /** Available provider profiles. */
  profiles: Record<string, ProviderProfile>;
  /** Optional global reasoning effort applied to all provider profiles unless matter config overrides it. */
  reasoningEffort?: ReasoningEffort;
  /** Legacy default model, preserved for compatibility. */
  defaultModel: string;
  /** Legacy flat provider config (for backward compat) */
  providers: ProvidersConfig;
  search: SearchConfig;
  /** Direct Model Context Protocol servers exposed as Harness tools. */
  mcp: McpConfig;
  /** Codex/Claude-style plugin discovery and component loading. */
  plugins: PluginsConfig;
  /** Selected output style prompt profile. */
  outputStyle?: string;
  providerPolicy: ProviderPolicy;
  autonomy: AutonomyPolicy;
  toolPolicy: ToolPolicy;
}

export interface ResolvedHarnessConfig {
  /** The final provider configuration after merging */
  provider: ProviderConfig;
  /** Which provider profile was selected */
  providerName: string;
  /** Active provider profile with resolved defaults, never raw secrets */
  profile: ProviderProfile;
  /** Backward-compatible alias for profile. */
  activeProfile?: ProviderProfile;
  /** Provider routing policy */
  providerPolicy: ProviderPolicy;
  /** Resolved model name */
  model: string;
  /** Optional per-matter generation overrides */
  temperature?: number;
  maxTokens?: number;
  reasoningEffort?: ReasoningEffort;
  /** Resolved autonomy policy */
  autonomy: AutonomyPolicy;
  /** Resolved tool approval policy */
  toolPolicy: ToolPolicy;
  /** External legal web search configuration */
  search: SearchConfig;
  /** Direct Model Context Protocol server configuration. */
  mcp: McpConfig;
  /** Plugin discovery and loading configuration. */
  plugins: PluginsConfig;
  /** Selected output style prompt profile. */
  outputStyle?: string;
  /** Whether config was loaded from disk vs defaults only */
  fromDisk: boolean;
  /** Matter name, if one was specified */
  matterName?: string;
  /** Redacted copy for display — never contains raw secrets */
  redacted?(): Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Per-matter override (written to matters/<name>/_config.json)
// ---------------------------------------------------------------------------
export type AutonomyPolicyOverride = Omit<Partial<AutonomyPolicy>, 'gateFeedback'> & {
  gateFeedback?: Partial<GateFeedbackConfig>;
};

export interface MatterConfigOverride {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  reasoningEffort?: ReasoningEffort;
  outputStyle?: string;
  autonomy?: AutonomyPolicyOverride;
  toolPolicy?: ToolPolicy;
}

export const DEFAULT_MODEL_DELEGATION: ModelDelegation = {
  fast: 'deepseek/deepseek-v4-flash',
  reasoning: 'deepseek/deepseek-v4-pro',
  drafting: 'deepseek/deepseek-v4-pro',
  reviewer: 'deepseek/deepseek-v4-pro',
  citation: 'deepseek/deepseek-v4-flash',
  cheap: 'deepseek/deepseek-v4-flash',
};

export const DEFAULT_OPENROUTER_PROFILE: ProviderProfile = {
  name: 'openrouter-deepseek',
  label: 'OpenRouter DeepSeek',
  preset: 'openrouter-deepseek',
  providerKind: 'openai-compatible',
  authType: 'api-key',
  keyName: 'OPENROUTER_API_KEY',
  baseUrl: 'https://openrouter.ai/api/v1',
  reasoningControl: 'openrouter-reasoning',
  models: DEFAULT_MODEL_DELEGATION,
  fallbackModel: 'deepseek/deepseek-v4-pro',
  isCustom: false,
};

// ---------------------------------------------------------------------------
// Defaults (always applied first in the merge chain)
// ---------------------------------------------------------------------------
export const DEFAULTS: GlobalHarnessConfig = {
  version: '2.0.0',
  activeProvider: 'openrouter-deepseek',
  profiles: {
    'openrouter-deepseek': DEFAULT_OPENROUTER_PROFILE,
  },
  defaultModel: 'deepseek/deepseek-v4-flash',
  providers: {
    openrouter: {
      baseUrl: 'https://openrouter.ai/api/v1',
      defaultModel: 'deepseek/deepseek-v4-flash',
      fallbackModel: 'deepseek/deepseek-v4-pro',
      timeoutMs: 180_000,
      maxRetries: 3,
      providerKind: 'openai-compatible',
      authType: 'api-key',
      keyName: 'OPENROUTER_API_KEY',
      reasoningControl: 'openrouter-reasoning',
    },
    'openrouter-deepseek': {
      baseUrl: 'https://openrouter.ai/api/v1',
      defaultModel: 'deepseek/deepseek-v4-flash',
      fallbackModel: 'deepseek/deepseek-v4-pro',
      timeoutMs: 180_000,
      maxRetries: 3,
      providerKind: 'openai-compatible',
      authType: 'api-key',
      keyName: 'OPENROUTER_API_KEY',
      reasoningControl: 'openrouter-reasoning',
    },
  },
  search: {
    provider: 'tavily',
    endpoint: 'https://api.tavily.com/search',
    keyName: 'TAVILY_API_KEY',
    defaultMaxResults: 10,
  },
  mcp: {
    enabled: true,
    servers: {},
    defaultTimeoutMs: 60_000,
  },
  plugins: {
    enabled: true,
    loadSkills: true,
    loadMcpServers: true,
    includeCodexCache: true,
    directories: [],
  },
  outputStyle: 'default',
  providerPolicy: {
    defaultProvider: 'openrouter',
    models: DEFAULT_MODEL_DELEGATION,
    retries: 3,
    timeoutMs: 180_000,
    concurrentRequests: 15,
    failClosed: true,
    allowedModels: [
      'deepseek/deepseek-v4-flash',
      'deepseek/deepseek-v4-pro',
    ],
    deniedModels: [
      'anthropic/claude-opus-4.1',
      'openrouter/auto',
      'deepseek/deepseek-v4-flash:free',
      'deepseek/deepseek-v4-pro:free',
    ],
    allowFallback: false,
    requireExplicitModel: true,
  },
  autonomy: {
    mode: 'operator_safe',
    autoApproveTools: false,
    autoApproveReadOnly: true,
    autoApproveFileWrites: false,
    autoApproveShell: false,
    autoApproveWeb: false,
    autoAcceptCandidates: false,
    requireQualityGateForAcceptance: true,
    requireCitationVerificationForAcceptance: true,
    requireHostileReviewForAcceptance: true,
    minGateScoreForAutoAccept: 0.8,
    externalActionMode: 'prepare_only',
    allowExternalDispatch: false,
    maxConcurrentAgents: 15,
    maxAgentDepth: 3,
    gateFeedback: {
      enabled: true,
      maxWorkerRetries: 3,
      maxMiniOrchestratorRetries: 2,
      maxMasterOrchestratorRetries: 1,
      feedbackLevel: 'check-level',
    },
  },
  toolPolicy: {
    read_only: {
      defaultDecision: 'allow',
      requireAuditLog: false,
    },
    matter_write: {
      defaultDecision: 'ask',
      requireAuditLog: true,
    },
    network: {
      defaultDecision: 'ask',
      requireAuditLog: true,
    },
    external_action: {
      defaultDecision: 'ask',
      requireAuditLog: true,
    },
    agent_spawn: {
      defaultDecision: 'ask',
      requireAuditLog: true,
    },
    config_change: {
      defaultDecision: 'ask',
      requireAuditLog: true,
    },
  },
};
