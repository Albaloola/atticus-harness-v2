// ---------------------------------------------------------------------------
// Global control-panel types for Harness V2
// ---------------------------------------------------------------------------

export type AutonomyMode = 'operator_safe' | 'semi_autonomous' | 'full_autonomy';

export type ExternalActionMode =
  | 'prepare_only'
  | 'operator_approval'
  | 'auto';

export type ApprovalDecision =
  | 'allow'
  | 'deny'
  | 'ask'
  | 'allow_with_audit';

export type ToolCategory =
  | 'read_only'
  | 'matter_write'
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
  autoAcceptCandidates: boolean;
  externalActionMode: ExternalActionMode;
  allowExternalDispatch: boolean;
  maxConcurrentAgents: number;
  maxAgentDepth: number;
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
  autonomy: AutonomyPolicy;
  toolPolicy: ToolPolicy;
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
  autonomy: {
    mode: 'operator_safe',
    autoAcceptCandidates: false,
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
