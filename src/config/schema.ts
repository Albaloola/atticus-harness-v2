// ---------------------------------------------------------------------------
// Global control-panel types for Harness V2
// ---------------------------------------------------------------------------

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

export type ProviderAuthType = 'api-key' | 'oauth' | 'none';
export type OAuthProvider = 'codex' | 'claude-code';
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
  /** Auth scheme used after resolving profile credentials. */
  authType?: ProviderAuthType;
  /** Secret/env key name for API-key providers. */
  keyName?: string;
  /** OAuth token provider for OAuth-backed profiles. */
  oauthProvider?: OAuthProvider;
  /** API path suffix for chat completions/messages clients. */
  apiPath?: string;
  /** Use Anthropic Messages API request/response format. */
  anthropicFormat?: boolean;
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
  /** Environment variable / secrets key name (for api-key type) */
  keyName?: string;
  /** OAuth provider name (for oauth type) */
  oauthProvider?: OAuthProvider;
  /** API base URL */
  baseUrl: string;
  /** API path suffix */
  apiPath?: string;
  /** Anthropic-specific: use Messages API format */
  anthropicFormat?: boolean;
  /** Model delegation per task role */
  models: ModelDelegation;
  /** Fallback model (optional) */
  fallbackModel?: string;
  /** Whether user has customised any model role (deviates from preset) */
  isCustom: boolean;
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
  /** Legacy default model, preserved for compatibility. */
  defaultModel: string;
  /** Legacy flat provider config (for backward compat) */
  providers: ProvidersConfig;
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
  /** Resolved autonomy policy */
  autonomy: AutonomyPolicy;
  /** Resolved tool approval policy */
  toolPolicy: ToolPolicy;
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
export interface MatterConfigOverride {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  autonomy?: Partial<AutonomyPolicy>;
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
  authType: 'api-key',
  keyName: 'OPENROUTER_API_KEY',
  baseUrl: 'https://openrouter.ai/api/v1',
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
      authType: 'api-key',
      keyName: 'OPENROUTER_API_KEY',
    },
    'openrouter-deepseek': {
      baseUrl: 'https://openrouter.ai/api/v1',
      defaultModel: 'deepseek/deepseek-v4-flash',
      fallbackModel: 'deepseek/deepseek-v4-pro',
      timeoutMs: 180_000,
      maxRetries: 3,
      authType: 'api-key',
      keyName: 'OPENROUTER_API_KEY',
    },
  },
  providerPolicy: {
    defaultProvider: 'openrouter',
    models: DEFAULT_MODEL_DELEGATION,
    retries: 3,
    timeoutMs: 180_000,
    concurrentRequests: 4,
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
    maxConcurrentAgents: 4,
    maxAgentDepth: 3,
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
