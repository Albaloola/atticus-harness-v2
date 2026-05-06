import type {
  AutonomyPolicy,
  ToolPolicy,
  ToolCategory,
  ApprovalDecision,
  GlobalHarnessConfig,
  ProviderConfig,
} from './schema.js';

const TOOL_TO_CATEGORY: Record<string, ToolCategory> = {
  read_file: 'read_only',
  search_files: 'read_only',
  exec_sqlite: 'read_only',
  evidence_search: 'read_only',
  evidence_chunk_read: 'read_only',
  llm_call: 'agent_spawn',
  write_file: 'matter_write',
  draft: 'matter_write',
  verify_citations: 'read_only',
  quality_gate: 'read_only',
  hostile_review: 'agent_spawn',
  evidence_ingest: 'matter_write',
  web_search: 'network',
  web_fetch: 'network',
};

export function classifyToolCategory(toolName: string): ToolCategory {
  return TOOL_TO_CATEGORY[toolName] ?? 'matter_write';
}

export function evaluatePolicy(
  policy: ToolPolicy,
  toolName: string,
  _context?: { matterName?: string }
): ApprovalDecision {
  const category = classifyToolCategory(toolName);
  const categoryPolicy = policy[category];

  if (!categoryPolicy) {
    return 'ask';
  }

  // Check tool-level override first
  if (categoryPolicy.toolOverrides?.[toolName]) {
    return categoryPolicy.toolOverrides[toolName];
  }

  return categoryPolicy.defaultDecision;
}

export function evaluateAutonomyPolicy(
  autonomy: AutonomyPolicy,
  toolName: string,
  _context?: { matterName?: string }
): ApprovalDecision {
  const category = classifyToolCategory(toolName);

  if (autonomy.mode === 'full_local_autonomy') {
    return 'allow';
  }

  if (autonomy.mode === 'auto_internal') {
    if (category === 'read_only') return 'allow';
    if (category === 'network') return autonomy.autoApproveWeb ? 'allow_with_audit' : 'ask';
    if (category === 'matter_write' && autonomy.autoApproveFileWrites) return 'allow';
    if (category === 'matter_write') return 'allow_with_audit';
    if (category === 'external_action') return 'ask';
    if (category === 'agent_spawn') return 'allow_with_audit';
    if (category === 'config_change') return 'ask';
    return 'ask';
  }

  if (autonomy.mode === 'auto_accept_gated') {
    if (category === 'read_only') return 'allow';
    if (category === 'network') return autonomy.autoApproveWeb ? 'allow_with_audit' : 'ask';
    if (category === 'matter_write' && autonomy.autoApproveFileWrites) return 'allow';
    if (category === 'matter_write') return 'allow_with_audit';
    if (category === 'external_action') return autonomy.allowExternalDispatch ? 'ask' : 'deny';
    if (category === 'agent_spawn') return 'allow_with_audit';
    if (category === 'config_change') return 'ask';
    return 'ask';
  }

  if (autonomy.mode === 'custom') {
    return evaluatePolicy(autonomy as unknown as ToolPolicy, toolName, _context);
  }

  // operator_safe: use tool policy categories
  switch (category) {
    case 'read_only':
      return 'allow';
    case 'matter_write':
      return 'ask';
    case 'network':
      return autonomy.autoApproveWeb ? 'allow_with_audit' : 'ask';
    case 'external_action':
      return autonomy.externalActionMode === 'operator_required_to_send'
        ? 'ask'
        : autonomy.externalActionMode === 'prepare_only' || autonomy.externalActionMode === 'prepare_bundle_only'
          ? 'deny'
          : 'deny';
    case 'agent_spawn':
      return 'ask';
    case 'config_change':
      return 'ask';
    default:
      return 'ask';
  }
}

export function requiresAuditLog(
  policy: ToolPolicy,
  toolName: string
): boolean {
  const category = classifyToolCategory(toolName);
  const categoryPolicy = policy[category];
  return categoryPolicy?.requireAuditLog ?? false;
}

export interface ProviderPolicyValidationInput {
  config: GlobalHarnessConfig;
  providerName: string;
  provider: ProviderConfig;
  model: string;
}

export function validateProviderPolicy(input: ProviderPolicyValidationInput): void {
  const { config, providerName, provider, model } = input;
  const policy = config.providerPolicy;
  const configuredProvider = config.providers[providerName];

  if (!configuredProvider) {
    throw new Error(`Provider policy denied unknown provider "${providerName}"`);
  }

  const allowedProviders = policy.allowedProviders ?? [policy.defaultProvider];
  if (!allowedProviders.includes(providerName)) {
    throw new Error(`Provider policy denied provider "${providerName}"; allowed providers: ${allowedProviders.join(', ')}`);
  }

  if (provider.reserved) {
    throw new Error(`Provider policy denied reserved provider "${providerName}"`);
  }

  const allowedModels = new Set(Object.values(policy.models));
  if (!allowedModels.has(model)) {
    throw new Error(`Provider policy denied model "${model}"; model must be explicitly routed`);
  }

  if (provider.defaultModel && !allowedModels.has(provider.defaultModel)) {
    throw new Error(`Provider policy denied provider default model "${provider.defaultModel}"; model must be explicitly routed`);
  }

  if (provider.fallbackModel && !allowedModels.has(provider.fallbackModel)) {
    throw new Error(`Provider policy denied fallback model "${provider.fallbackModel}"; silent fallback is disabled`);
  }
}
