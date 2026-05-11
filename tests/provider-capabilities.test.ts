import { describe, expect, it } from 'vitest';
import { DEFAULTS } from '../src/config/schema.js';
import { evaluateProviderCapabilityRequest } from '../src/providers/capability-matrix.js';
import { isDeepSeekOnlyProfile } from '../src/providers/deepseek-profile.js';
import { validateOpenRouterDeepSeekLock } from '../src/providers/openrouter-provider-lock.js';
import { APPROVED_VISION_FALLBACK_MODEL, decideVisionFallback } from '../src/media/vision-fallback-policy.js';

describe('provider capability routing', () => {
  it('declares the default OpenRouter profile as DeepSeek-only', () => {
    const profile = DEFAULTS.profiles['openrouter-deepseek'];

    expect(isDeepSeekOnlyProfile(profile)).toBe(true);
    const decision = validateOpenRouterDeepSeekLock({
      providerName: 'openrouter-deepseek',
      profile,
      providerPolicy: DEFAULTS.providerPolicy,
    });
    expect(decision.reasons).toEqual([]);
    expect(decision).toMatchObject({ locked: true });
  });

  it('rejects OpenRouter fallback or non-DeepSeek model drift', () => {
    const profile = {
      ...DEFAULTS.profiles['openrouter-deepseek']!,
      openRouterProviderRouting: {
        only: ['DeepSeek'],
        allowFallbacks: true,
      },
      models: {
        ...DEFAULTS.profiles['openrouter-deepseek']!.models,
        reasoning: 'openrouter/auto',
      },
    };

    const decision = validateOpenRouterDeepSeekLock({
      providerName: 'openrouter-deepseek',
      profile,
      providerPolicy: {
        ...DEFAULTS.providerPolicy,
        models: {
          ...DEFAULTS.providerPolicy.models,
          reasoning: 'openrouter/auto',
        },
      },
    });

    expect(decision.locked).toBe(false);
    expect(decision.reasons.join(' ')).toContain('fallback');
    expect(decision.reasons.join(' ')).toContain('DeepSeek');
  });

  it('allows DeepSeek text/file work but rejects images', () => {
    expect(evaluateProviderCapabilityRequest({
      providerName: 'openrouter-deepseek',
      modalities: ['text', 'file'],
      requireNativeJsonMode: true,
      requireToolCalling: true,
    })).toMatchObject({ allowed: true });

    const imageDecision = evaluateProviderCapabilityRequest({
      providerName: 'openrouter-deepseek',
      modalities: ['text', 'image'],
    });

    expect(imageDecision.allowed).toBe(false);
    expect(imageDecision.reasons.join(' ')).toContain('image');
  });

  it('limits Gemma vision fallback to image extraction only', () => {
    expect(decideVisionFallback({
      primaryProviderName: 'openrouter-deepseek',
      requestedModalities: ['text', 'image'],
      purpose: 'legal_reasoning',
      imageProcessingRequiredBeyondReasonableDoubt: true,
      allowGemmaVisionFallback: true,
    })).toMatchObject({
      kind: 'blocked',
      scope: 'none',
    });

    expect(decideVisionFallback({
      primaryProviderName: 'openrouter-deepseek',
      requestedModalities: ['text', 'image'],
      purpose: 'image_extraction',
      imageProcessingRequiredBeyondReasonableDoubt: true,
      allowGemmaVisionFallback: true,
    })).toMatchObject({
      kind: 'fallback',
      providerName: 'openrouter-gemma-vision',
      model: APPROVED_VISION_FALLBACK_MODEL,
      scope: 'image_extraction_only',
    });
  });

  it('blocks vision fallback when the need is not beyond reasonable doubt', () => {
    const decision = decideVisionFallback({
      primaryProviderName: 'openrouter-deepseek',
      requestedModalities: ['image'],
      purpose: 'image_extraction',
      imageProcessingRequiredBeyondReasonableDoubt: false,
      allowGemmaVisionFallback: true,
    });

    expect(decision.kind).toBe('blocked');
    expect(decision.reasons.join(' ')).toContain('beyond reasonable doubt');
  });
});
