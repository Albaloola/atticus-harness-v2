import type { InputModality } from '../config/schema.js';
import { evaluateProviderCapabilityRequest } from '../providers/capability-matrix.js';

export const APPROVED_VISION_FALLBACK_PROVIDER = 'openrouter-gemma-vision';
export const APPROVED_VISION_FALLBACK_MODEL = 'google/gemma-4-31b';

export type VisionFallbackDecisionKind = 'primary' | 'fallback' | 'blocked';

export interface VisionFallbackPolicyInput {
  primaryProviderName: string;
  requestedModalities: readonly InputModality[];
  imageProcessingRequiredBeyondReasonableDoubt?: boolean;
  allowGemmaVisionFallback?: boolean;
  purpose: 'legal_reasoning' | 'image_extraction' | 'evidence_triage';
}

export interface VisionFallbackDecision {
  kind: VisionFallbackDecisionKind;
  providerName: string;
  model?: string;
  scope: 'full_request' | 'image_extraction_only' | 'none';
  reasons: string[];
}

export function decideVisionFallback(input: VisionFallbackPolicyInput): VisionFallbackDecision {
  const needsImage = input.requestedModalities.includes('image');
  if (!needsImage) {
    return {
      kind: 'primary',
      providerName: input.primaryProviderName,
      scope: 'full_request',
      reasons: ['No image modality requested.'],
    };
  }

  const primaryDecision = evaluateProviderCapabilityRequest({
    providerName: input.primaryProviderName,
    modalities: input.requestedModalities,
  });

  if (primaryDecision.allowed) {
    return {
      kind: 'primary',
      providerName: input.primaryProviderName,
      scope: 'full_request',
      reasons: ['Primary provider declares image support.'],
    };
  }

  if (input.purpose === 'legal_reasoning') {
    return {
      kind: 'blocked',
      providerName: input.primaryProviderName,
      scope: 'none',
      reasons: [
        'DeepSeek-only legal reasoning profile cannot receive image input.',
        'Extract image facts first, then return extracted text/facts to DeepSeek.',
      ],
    };
  }

  if (!input.imageProcessingRequiredBeyondReasonableDoubt) {
    return {
      kind: 'blocked',
      providerName: input.primaryProviderName,
      scope: 'none',
      reasons: [
        'Image processing was not marked genuinely required beyond reasonable doubt.',
        'Use existing OCR/text extraction or ask for missing information before spending fallback tokens.',
      ],
    };
  }

  if (!input.allowGemmaVisionFallback) {
    return {
      kind: 'blocked',
      providerName: input.primaryProviderName,
      scope: 'none',
      reasons: ['Approved Gemma vision fallback was not enabled for this request.'],
    };
  }

  return {
    kind: 'fallback',
    providerName: APPROVED_VISION_FALLBACK_PROVIDER,
    model: APPROVED_VISION_FALLBACK_MODEL,
    scope: 'image_extraction_only',
    reasons: [
      'Image extraction is genuinely required and DeepSeek cannot process the image input.',
      'Fallback scope is limited to extracting image facts; legal reasoning remains on DeepSeek.',
    ],
  };
}
