import type { ProviderPolicy, ProvidersConfig } from './schema.js';

export interface ProviderPolicyDecision {
  allowed: boolean;
  providerName: string;
  model: string;
  reason: string;
}

export class ProviderPolicyError extends Error {
  readonly decision: ProviderPolicyDecision;

  constructor(decision: ProviderPolicyDecision) {
    super(`Provider policy denied ${decision.providerName}/${decision.model}: ${decision.reason}`);
    this.name = 'ProviderPolicyError';
    this.decision = decision;
  }
}

export function configuredPolicyModels(policy: ProviderPolicy): Set<string> {
  const models = new Set(Object.values(policy.models).filter(Boolean));
  for (const model of policy.allowedModels ?? []) models.add(model);
  return models;
}

export function canonicalProviderPolicy(policy: ProviderPolicy): ProviderPolicy {
  const allowedModels = Array.from(configuredPolicyModels(policy)).sort();
  const deniedModels = Array.from(new Set(policy.deniedModels ?? [])).sort();
  return {
    ...policy,
    allowedModels,
    deniedModels,
    failClosed: policy.failClosed ?? true,
    allowFallback: policy.allowFallback ?? false,
    requireExplicitModel: policy.requireExplicitModel ?? true,
  };
}

export function evaluateProviderPolicy(params: {
  policy: ProviderPolicy;
  providers: ProvidersConfig;
  providerName: string;
  model?: string;
  requestedFallback?: boolean;
}): ProviderPolicyDecision {
  const policy = canonicalProviderPolicy(params.policy);
  const providerName = params.providerName || policy.defaultProvider;
  const providerConfig = params.providers[providerName];
  const model = params.model || '';

  if (!providerConfig) {
    return { allowed: false, providerName, model, reason: 'provider is not explicitly configured' };
  }
  if (policy.failClosed !== false && policy.defaultProvider !== providerName) {
    return { allowed: false, providerName, model, reason: 'provider is not the explicit default provider' };
  }
  if (policy.requireExplicitModel !== false && !model) {
    return { allowed: false, providerName, model, reason: 'model is not explicit' };
  }
  const roleModels = new Set(Object.values(policy.models).filter(Boolean));
  const selectedModelIsPrimary = roleModels.has(model);
  if (
    params.requestedFallback ||
    (!policy.allowFallback && providerConfig.fallbackModel && model === providerConfig.fallbackModel && !selectedModelIsPrimary)
  ) {
    return { allowed: false, providerName, model, reason: 'fallback model is not explicitly allowed' };
  }
  if ((policy.deniedModels ?? []).includes(model)) {
    return { allowed: false, providerName, model, reason: 'model is denied/reserved by policy' };
  }
  const allowedModels = configuredPolicyModels(policy);
  if (policy.failClosed !== false && !allowedModels.has(model)) {
    return { allowed: false, providerName, model, reason: 'model is not in explicit provider policy allow-list' };
  }
  return { allowed: true, providerName, model, reason: 'explicit provider policy allow-list match' };
}

export function assertProviderPolicyAllowed(params: {
  policy: ProviderPolicy;
  providers: ProvidersConfig;
  providerName: string;
  model?: string;
  requestedFallback?: boolean;
}): ProviderPolicyDecision {
  const decision = evaluateProviderPolicy(params);
  if (!decision.allowed) throw new ProviderPolicyError(decision);
  return decision;
}
