export type ModelDelegationRole = 'fast' | 'reasoning' | 'drafting' | 'reviewer' | 'citation' | 'cheap';

export interface ModelDelegationProfile {
  name?: string;
  label?: string;
  preset?: string;
  baseUrl?: string;
  models: Record<ModelDelegationRole, string>;
  fallbackModel?: string;
  isCustom?: boolean;
}

export const MODEL_ROLE_DESCRIPTIONS: Record<ModelDelegationRole, string> = {
  fast: 'Quick responses and simple lookups',
  reasoning: 'Deep reasoning and complex analysis',
  drafting: 'Document generation and drafting',
  reviewer: 'Adversarial review and quality gates',
  citation: 'Citation verification and source checks',
  cheap: 'Low-priority bulk extraction passes',
};

const ROLE_ORDER: ModelDelegationRole[] = [
  'fast',
  'reasoning',
  'drafting',
  'reviewer',
  'citation',
  'cheap',
];

export function buildModelDelegationPrompt(profile: ModelDelegationProfile): string {
  const label = profile.label ?? profile.name ?? 'custom provider';
  const presetState = profile.isCustom ? 'custom' : (profile.preset ?? 'preset');
  const endpointLine = profile.baseUrl ? `API endpoint: ${profile.baseUrl}\n\n` : '';
  const roles = ROLE_ORDER.map((role) => {
    const model = profile.models[role];
    return `- ${role.padEnd(10)} ${model.padEnd(20)} — ${MODEL_ROLE_DESCRIPTIONS[role]}`;
  }).join('\n');

  return `## Available Models\n\nThis harness is configured with: ${label} (${presetState})\n${endpointLine}Model delegation (use the appropriate model for each task type):\n${roles}\n`;
}

export function selectModelForTask(taskType: string, profile: ModelDelegationProfile): string {
  const normalized = taskType.toLowerCase();
  if (['fast', 'lookup', 'search', 'summarise', 'summarize'].includes(normalized)) {
    return profile.models.fast;
  }
  if (['reasoning', 'analysis', 'research', 'strategy'].includes(normalized)) {
    return profile.models.reasoning;
  }
  if (['draft', 'drafting', 'email', 'letter', 'complaint'].includes(normalized)) {
    return profile.models.drafting;
  }
  if (['review', 'hostile-review', 'adversarial', 'quality-gate'].includes(normalized)) {
    return profile.models.reviewer;
  }
  if (['verify', 'verification', 'citation', 'source-check'].includes(normalized)) {
    return profile.models.citation;
  }
  if (['cheap', 'bulk', 'extract', 'extraction'].includes(normalized)) {
    return profile.models.cheap;
  }
  return profile.fallbackModel ?? profile.models.fast;
}
