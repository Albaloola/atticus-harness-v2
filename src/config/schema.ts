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
  defaultProvider: 'openrouter' | 'anthropic' | 'openai-compatible' | 'local';
  models: {
    fast: string;
    reasoning: string;
    drafting: string;
    reviewer: string;
    citation: string;
    cheap: string;
  };
  retries: number;
  timeoutMs: number;
  concurrentRequests: number;
  perProviderRateLimit?: Record<string, { rpm?: number; tpm?: number }>;
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
}

export interface ProvidersConfig {
  openrouter?: ProviderConfig;
  [key: string]: ProviderConfig | undefined;
}

// ---------------------------------------------------------------------------
// Global configuration (written to ~/.atticus-harness/config.json)
// ---------------------------------------------------------------------------
export interface GlobalHarnessConfig {
  version: string;
  defaultModel: string;
  providers: ProvidersConfig;
  providerPolicy: ProviderPolicy;
  autonomy: AutonomyPolicy;
  toolPolicy: ToolPolicy;
}

export interface ResolvedHarnessConfig {
  /** The final provider configuration after merging */
  provider: ProviderConfig;
  /** Which provider was selected ('openrouter' by default) */
  providerName: string;
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

// ---------------------------------------------------------------------------
// Merged / resolved config (returned by loader)
// ---------------------------------------------------------------------------
export interface ResolvedHarnessConfig {
  /** The final provider configuration after merging */
  provider: ProviderConfig;
  /** Which provider was selected ('openrouter' by default) */
  providerName: string;
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
// Defaults (always applied first in the merge chain)
// ---------------------------------------------------------------------------
export const DEFAULTS: GlobalHarnessConfig = {
  version: '2.0.0',
  defaultModel: 'deepseek/deepseek-v4-flash',
  providers: {
    openrouter: {
      baseUrl: 'https://openrouter.ai/api/v1',
      defaultModel: 'deepseek/deepseek-v4-flash',
      fallbackModel: 'deepseek/deepseek-v4-pro',
      timeoutMs: 180_000,
      maxRetries: 3,
    },
  },
  providerPolicy: {
    defaultProvider: 'openrouter',
    models: {
      fast: 'deepseek/deepseek-v4-flash',
      reasoning: 'deepseek/deepseek-v4-pro',
      drafting: 'deepseek/deepseek-v4-pro',
      reviewer: 'deepseek/deepseek-v4-pro',
      citation: 'deepseek/deepseek-v4-flash',
      cheap: 'deepseek/deepseek-v4-flash',
    },
    retries: 3,
    timeoutMs: 180_000,
    concurrentRequests: 4,
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
