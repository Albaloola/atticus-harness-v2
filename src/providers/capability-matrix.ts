import type { InputModality, ProviderProfile } from '../config/schema.js';
import { isDeepSeekOnlyProfile } from './deepseek-profile.js';

export type ProviderCapabilityFeature =
  | 'text'
  | 'file'
  | 'image'
  | 'audio'
  | 'video'
  | 'json_mode'
  | 'tool_calling'
  | 'prompt_caching'
  | 'structured_output';

export type ProviderCapabilitySupport = 'native' | 'harness' | 'unsupported' | 'unknown';

export interface ProviderCapabilityProfile {
  providerName: string;
  modelFamily: 'deepseek' | 'gemma-vision' | 'unknown';
  modalities: readonly InputModality[];
  features: Readonly<Record<ProviderCapabilityFeature, ProviderCapabilitySupport>>;
  notes: readonly string[];
}

export interface ProviderCapabilityRequest {
  providerName: string;
  profile?: ProviderProfile;
  modalities: readonly InputModality[];
  requireNativeJsonMode?: boolean;
  requireToolCalling?: boolean;
}

export interface ProviderCapabilityDecision {
  allowed: boolean;
  providerName: string;
  reasons: string[];
  profile: ProviderCapabilityProfile;
}

const deepSeekFeatures: Readonly<Record<ProviderCapabilityFeature, ProviderCapabilitySupport>> = {
  text: 'native',
  file: 'harness',
  image: 'unsupported',
  audio: 'unsupported',
  video: 'unsupported',
  json_mode: 'native',
  tool_calling: 'native',
  prompt_caching: 'unknown',
  structured_output: 'harness',
};

const gemmaVisionFeatures: Readonly<Record<ProviderCapabilityFeature, ProviderCapabilitySupport>> = {
  text: 'native',
  file: 'harness',
  image: 'native',
  audio: 'unsupported',
  video: 'unsupported',
  json_mode: 'harness',
  tool_calling: 'unknown',
  prompt_caching: 'unknown',
  structured_output: 'harness',
};

const unknownFeatures: Readonly<Record<ProviderCapabilityFeature, ProviderCapabilitySupport>> = {
  text: 'unknown',
  file: 'unknown',
  image: 'unknown',
  audio: 'unknown',
  video: 'unknown',
  json_mode: 'unknown',
  tool_calling: 'unknown',
  prompt_caching: 'unknown',
  structured_output: 'unknown',
};

export const BUILT_IN_PROVIDER_CAPABILITIES: Record<string, ProviderCapabilityProfile> = {
  'openrouter-deepseek': {
    providerName: 'openrouter-deepseek',
    modelFamily: 'deepseek',
    modalities: ['text', 'file'],
    features: deepSeekFeatures,
    notes: [
      'OpenRouter routing must be pinned to DeepSeek with fallback disabled.',
      'Images are not sent to DeepSeek; use OCR/text extraction or the approved vision fallback for extraction only.',
    ],
  },
  'deepseek-direct': {
    providerName: 'deepseek-direct',
    modelFamily: 'deepseek',
    modalities: ['text', 'file'],
    features: deepSeekFeatures,
    notes: [
      'DeepSeek direct is text-first; file handling is harness-side extraction before model calls.',
      'Images are not assumed supported.',
    ],
  },
  'openrouter-gemma-vision': {
    providerName: 'openrouter-gemma-vision',
    modelFamily: 'gemma-vision',
    modalities: ['text', 'image', 'file'],
    features: gemmaVisionFeatures,
    notes: [
      'Approved only for bounded image extraction when image evidence is genuinely required.',
      'Legal reasoning returns to the DeepSeek profile after extracted image facts are recorded.',
    ],
  },
};

export function getProviderCapabilityProfile(
  providerName: string,
  profile?: ProviderProfile,
): ProviderCapabilityProfile {
  const builtIn = BUILT_IN_PROVIDER_CAPABILITIES[providerName];
  if (builtIn) {
    return builtIn;
  }

  if (profile && isDeepSeekOnlyProfile(profile)) {
    return {
      ...BUILT_IN_PROVIDER_CAPABILITIES['openrouter-deepseek']!,
      providerName,
      modalities: profile.inputModalities ?? ['text', 'file'],
    };
  }

  return {
    providerName,
    modelFamily: 'unknown',
    modalities: profile?.inputModalities ?? [],
    features: unknownFeatures,
    notes: ['Provider capabilities are not declared; fail closed for autonomous case work.'],
  };
}

export function providerSupportsModality(
  providerName: string,
  modality: InputModality,
  profile?: ProviderProfile,
): boolean {
  return getProviderCapabilityProfile(providerName, profile).modalities.includes(modality);
}

export function evaluateProviderCapabilityRequest(input: ProviderCapabilityRequest): ProviderCapabilityDecision {
  const capabilityProfile = getProviderCapabilityProfile(input.providerName, input.profile);
  const reasons: string[] = [];

  for (const modality of input.modalities) {
    if (!capabilityProfile.modalities.includes(modality)) {
      reasons.push(`${input.providerName} does not support ${modality} input in the declared harness profile.`);
    }
  }

  if (input.requireNativeJsonMode && capabilityProfile.features.json_mode !== 'native') {
    reasons.push(`${input.providerName} does not declare native JSON mode support.`);
  }

  if (input.requireToolCalling && capabilityProfile.features.tool_calling !== 'native') {
    reasons.push(`${input.providerName} does not declare native tool-calling support.`);
  }

  if (capabilityProfile.modelFamily === 'unknown') {
    reasons.push(`${input.providerName} has no approved capability matrix entry.`);
  }

  return {
    allowed: reasons.length === 0,
    providerName: input.providerName,
    reasons,
    profile: capabilityProfile,
  };
}

export function assertProviderCanHandleRequest(input: ProviderCapabilityRequest): ProviderCapabilityDecision {
  const decision = evaluateProviderCapabilityRequest(input);
  if (!decision.allowed) {
    throw new Error(decision.reasons.join(' '));
  }
  return decision;
}
