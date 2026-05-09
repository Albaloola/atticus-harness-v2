import type { ProviderPolicy } from './schema.js';

export type ModelRoute = keyof ProviderPolicy['models'];

export interface ModelTaskContext {
  role?: string;
  phaseId?: string;
  title?: string;
  objective?: string;
  providerPolicy: ProviderPolicy;
}

const REVIEW_RE = /review|hostile|red[- ]?team|adversarial/i;
const CITATION_RE = /citation|cite|verify|verification|source integrity|factual accuracy/i;
const DRAFT_RE = /draft|document|letter|email|pleading|witness|bundle/i;
const REASONING_RE = /master|mini|orchestrator|case[_ -]?manager|analysis|research|merits|risk|route|planning/i;
const LIGHTWEIGHT_RE = /status|summary|extract|normalization|intake|triage/i;

export function selectModelRouteForTask(input: Omit<ModelTaskContext, 'providerPolicy'>): ModelRoute {
  const role = input.role ?? '';
  const phaseId = input.phaseId ?? '';
  const text = [role, phaseId, input.title, input.objective].filter(Boolean).join(' ');

  if (CITATION_RE.test(text) || role === 'verifier') return 'citation';
  if (REVIEW_RE.test(text) || role === 'reviewer') return 'reviewer';
  if (DRAFT_RE.test(text)) return 'drafting';
  if (REASONING_RE.test(text)) return 'reasoning';
  if (LIGHTWEIGHT_RE.test(text)) return 'fast';
  return role === 'worker' ? 'fast' : 'reasoning';
}

export function selectModelForTask(input: ModelTaskContext): string {
  const route = selectModelRouteForTask(input);
  return input.providerPolicy.models[route];
}

export function buildModelDelegationPrompt(providerPolicy: ProviderPolicy): string {
  const routeLines = [
    ['fast', 'Routine extraction, triage, status, and concise worker tasks'],
    ['reasoning', 'Planning, research synthesis, master orchestration (UnifiedMasterOrchestrator), and complex analysis'],
    ['drafting', 'Legal drafting, correspondence, document production, and bundle text'],
    ['reviewer', 'Hostile review, adversarial quality checks, and risk challenge'],
    ['citation', 'Citation verification, source integrity checks, and factual accuracy checks'],
  ] as const;

  const lines = [
    'Model routing is explicit and policy controlled.',
    `Default provider: ${providerPolicy.defaultProvider}`,
    'Use the named route that matches the task; do not silently substitute another model.',
    ...routeLines.map(([route, purpose]) => `- ${route}: ${providerPolicy.models[route]} — ${purpose}`),
    `- lightweight: ${providerPolicy.models.cheap} — Short low-complexity helper tasks when explicitly selected by policy`,
    'If the requested provider/model is not explicitly allowed, stop and report the policy blocker before any network call.',
  ];

  return lines.join('\n');
}
