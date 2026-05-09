import type { ReasoningEffort } from '../types/llm.js';

export const REASONING_EFFORTS: readonly ReasoningEffort[] = [
  'none',
  'minimal',
  'low',
  'medium',
  'high',
  'xhigh',
];

export function isReasoningEffort(value: unknown): value is ReasoningEffort {
  return typeof value === 'string' && REASONING_EFFORTS.includes(value as ReasoningEffort);
}

export function assertReasoningEffort(value: unknown, source = 'reasoningEffort'): ReasoningEffort {
  if (isReasoningEffort(value)) return value;
  throw new Error(`Invalid ${source}: ${String(value)}. Valid reasoningEffort values: ${REASONING_EFFORTS.join(', ')}`);
}

export function normalizeReasoningEffort(
  value: unknown,
  source = 'reasoningEffort',
): ReasoningEffort | undefined {
  if (value === undefined) return undefined;
  return assertReasoningEffort(value, source);
}

export function formatReasoningEffort(effort: ReasoningEffort | undefined): string {
  return effort ?? 'provider default';
}
