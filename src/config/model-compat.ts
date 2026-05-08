import type { ProviderProfile } from './schema.js';
import { MODEL_ROLES } from './presets.js';

export function assertModelCompatibleWithProfile(profile: ProviderProfile, model: string): void {
  const trimmed = model.trim();
  if (!trimmed) {
    throw new Error('Model id cannot be empty.');
  }

  const normalized = trimmed.toLowerCase();
  const baseUrl = profile.baseUrl.toLowerCase();
  const kind = profile.providerKind ?? 'openai-compatible';

  if (kind === 'local') return;

  if (kind === 'codex-sdk') {
    if (normalized.startsWith('gpt-') || normalized.includes('codex')) return;
    throw incompatibleModel(profile, model, 'Codex SDK profiles expect Codex-compatible OpenAI model ids such as gpt-*.');
  }

  if (kind === 'anthropic') {
    if (normalized.startsWith('claude-')) return;
    throw incompatibleModel(profile, model, 'Anthropic profiles expect claude-* model ids.');
  }

  if (profile.name === 'deepseek-direct' || baseUrl.includes('api.deepseek.com')) {
    if (normalized.startsWith('deepseek-')) return;
    throw incompatibleModel(profile, model, 'Direct DeepSeek profiles expect deepseek-* model ids.');
  }

  if (profile.name === 'openrouter-deepseek') {
    if (normalized.startsWith('deepseek/')) return;
    throw incompatibleModel(profile, model, 'Use openrouter-custom for non-DeepSeek OpenRouter model ids.');
  }

  if (profile.name.startsWith('openai') || baseUrl.includes('api.openai.com')) {
    if (normalized.startsWith('gpt-') || /^o\d/.test(normalized) || normalized.startsWith('chatgpt-')) return;
    throw incompatibleModel(profile, model, 'OpenAI API-key profiles expect OpenAI model ids such as gpt-* or o*.');
  }
}

export function validateProfileModelCompatibility(profile: ProviderProfile): void {
  for (const role of MODEL_ROLES) {
    assertModelCompatibleWithProfile(profile, profile.models[role]);
  }
  if (profile.fallbackModel) {
    assertModelCompatibleWithProfile(profile, profile.fallbackModel);
  }
}

function incompatibleModel(profile: ProviderProfile, model: string, detail: string): Error {
  return new Error(`Model "${model}" is not compatible with provider profile "${profile.name}". ${detail}`);
}
