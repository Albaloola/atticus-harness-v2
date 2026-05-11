import type { ProviderPolicy, ProviderProfile } from '../config/schema.js';
import {
  isDeepSeekModel,
  isDeepSeekOnlyProfile,
  isOpenRouterProfile,
  providerPolicyModelsAreDeepSeekOnly,
  routingOnlyAllowsDeepSeek,
} from './deepseek-profile.js';

export interface OpenRouterProviderLockInput {
  providerName: string;
  profile?: ProviderProfile;
  providerPolicy?: ProviderPolicy;
}

export interface OpenRouterProviderLockDecision {
  locked: boolean;
  providerName: string;
  reasons: string[];
}

export function validateOpenRouterDeepSeekLock(input: OpenRouterProviderLockInput): OpenRouterProviderLockDecision {
  const reasons: string[] = [];
  const profile = input.profile;

  if (!profile) {
    reasons.push(`Provider profile ${input.providerName} was not supplied.`);
  } else {
    if (!isOpenRouterProfile(profile)) {
      reasons.push(`${input.providerName} is not an OpenRouter profile.`);
    }
    if (!isDeepSeekOnlyProfile(profile)) {
      reasons.push(`${input.providerName} is not locked to DeepSeek models.`);
    }
    if (profile.openRouterProviderRouting?.allowFallbacks !== false) {
      reasons.push('OpenRouter provider fallbacks must be disabled.');
    }
    if (!routingOnlyAllowsDeepSeek(profile.openRouterProviderRouting)) {
      reasons.push('OpenRouter provider routing must use only DeepSeek.');
    }
  }

  if (input.providerPolicy) {
    if (!providerPolicyModelsAreDeepSeekOnly(input.providerPolicy)) {
      reasons.push('Provider policy is not fail-closed to the OpenRouter DeepSeek route.');
    }
    if (input.providerPolicy.requireExplicitModel === false) {
      reasons.push('Provider policy must require explicit models.');
    }
    if (input.providerPolicy.allowFallback === true) {
      reasons.push('Provider policy must deny silent fallback.');
    }
    if (!input.providerPolicy.deniedModels?.includes('openrouter/auto')) {
      reasons.push('Provider policy must deny openrouter/auto.');
    }
  }

  return {
    locked: reasons.length === 0,
    providerName: input.providerName,
    reasons,
  };
}

export function assertOpenRouterDeepSeekLock(input: OpenRouterProviderLockInput): OpenRouterProviderLockDecision {
  const decision = validateOpenRouterDeepSeekLock(input);
  if (!decision.locked) {
    throw new Error(decision.reasons.join(' '));
  }
  return decision;
}
