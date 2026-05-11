import type { ModelDelegation, OpenRouterProviderRouting, ProviderPolicy, ProviderProfile } from '../config/schema.js';

export const OPENROUTER_DEEPSEEK_PROFILE_NAME = 'openrouter-deepseek';
export const DEEPSEEK_DIRECT_PROFILE_NAME = 'deepseek-direct';
export const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
export const DEEPSEEK_DIRECT_BASE_URL = 'https://api.deepseek.com';

export const DEEPSEEK_OPENROUTER_PROVIDER_SLUGS = ['DeepSeek', 'deepseek'] as const;
export const DEEPSEEK_MODEL_PREFIXES = ['deepseek/', 'deepseek-'] as const;

export function isDeepSeekModel(model: string | undefined): boolean {
  if (!model) {
    return false;
  }
  return DEEPSEEK_MODEL_PREFIXES.some((prefix) => model.startsWith(prefix));
}

export function isOpenRouterProfile(profile: Pick<ProviderProfile, 'baseUrl'> | undefined): boolean {
  return profile?.baseUrl.replace(/\/+$/, '') === OPENROUTER_BASE_URL;
}

export function isDeepSeekDirectProfile(profile: Pick<ProviderProfile, 'baseUrl' | 'name'> | undefined): boolean {
  if (!profile) {
    return false;
  }
  return profile.name === DEEPSEEK_DIRECT_PROFILE_NAME || profile.baseUrl.replace(/\/+$/, '') === DEEPSEEK_DIRECT_BASE_URL;
}

export function isDeepSeekProviderSlug(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  return DEEPSEEK_OPENROUTER_PROVIDER_SLUGS.some((slug) => slug.toLowerCase() === value.toLowerCase());
}

export function modelDelegationModels(models: ModelDelegation | undefined): string[] {
  return Object.values(models ?? {}).filter((model): model is string => Boolean(model));
}

export function allModelsAreDeepSeek(models: ModelDelegation | undefined, fallbackModel?: string): boolean {
  const values = [...modelDelegationModels(models), fallbackModel].filter((model): model is string => Boolean(model));
  return values.length > 0 && values.every(isDeepSeekModel);
}

export function routingOnlyAllowsDeepSeek(routing: OpenRouterProviderRouting | undefined): boolean {
  if (!routing) {
    return false;
  }

  const only = routing.only ?? [];
  const order = routing.order ?? [];
  const restrictedProviders = only.length > 0 ? only : order;

  if (restrictedProviders.length === 0) {
    return false;
  }
  return restrictedProviders.every(isDeepSeekProviderSlug);
}

export function isDeepSeekOnlyProfile(profile: ProviderProfile | undefined): boolean {
  if (!profile) {
    return false;
  }

  if (isDeepSeekDirectProfile(profile)) {
    return allModelsAreDeepSeek(profile.models, profile.fallbackModel);
  }

  if (!isOpenRouterProfile(profile)) {
    return false;
  }

  return profile.openRouterProviderRouting?.allowFallbacks === false
    && routingOnlyAllowsDeepSeek(profile.openRouterProviderRouting)
    && allModelsAreDeepSeek(profile.models, profile.fallbackModel);
}

export function providerPolicyModelsAreDeepSeekOnly(policy: ProviderPolicy | undefined): boolean {
  if (!policy) {
    return false;
  }

  const allowedModels = policy.allowedModels ?? [];
  const policyModels = [...modelDelegationModels(policy.models), ...allowedModels];
  const defaultProviderAllowed = !policy.allowedProviders
    || policy.allowedProviders.every((provider) => provider === OPENROUTER_DEEPSEEK_PROFILE_NAME || provider === DEEPSEEK_DIRECT_PROFILE_NAME);

  return defaultProviderAllowed
    && policy.defaultProvider === OPENROUTER_DEEPSEEK_PROFILE_NAME
    && policyModels.length > 0
    && policyModels.every(isDeepSeekModel)
    && policy.allowFallback !== true;
}
