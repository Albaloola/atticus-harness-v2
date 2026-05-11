import type { UnknownWorkProduct } from '../work-products/types.js';

export interface FormattingGateIssue {
  code: string;
  path: string;
  message: string;
}

export interface FormattingGateReport {
  valid: boolean;
  issues: FormattingGateIssue[];
}

const GENERIC_FALLBACK_MARKERS: RegExp[] = [
  /\bI cannot provide legal advice\b/i,
  /\bI do not have enough information\b/i,
  /\bas an AI language model\b/i,
  /\bplease provide me with\b/i,
  /\bgeneric placeholder\b/i,
];

const JSON_LIKE_PATTERNS: RegExp[] = [
  /^\s*{\s*".+?"\s*:\s*.+\}\s*$/s,
  /^\s*\[\s*{\s*".+?"\s*:\s*.+}\s*\]\s*$/s,
  /^\s*```(?:json|javascript|js|ts)\s*\n[\s\S]*```/i,
];

export function evaluateFormattingGate(product: UnknownWorkProduct): FormattingGateReport {
  const issues: FormattingGateIssue[] = [];
  const content = product.content?.trim() ?? '';

  if (content.length === 0) {
    issues.push({
      code: 'FORMAT_EMPTY',
      path: 'content',
      message: 'Content is required and cannot be empty.',
    });
    return { valid: false, issues };
  }

  if (JSON_LIKE_PATTERNS.some((pattern) => pattern.test(content))) {
    issues.push({
      code: 'FORMAT_JSON_SCaffold',
      path: 'content',
      message: 'Content looks like a JSON scaffold instead of a substantive document body.',
    });
  }

  if (GENERIC_FALLBACK_MARKERS.some((pattern) => pattern.test(content))) {
    issues.push({
      code: 'FORMAT_GENERIC_FALLBACK',
      path: 'content',
      message: 'Content contains generic fallback language instead of substantive legal analysis.',
    });
  }

  if (content.length >= 1200 && /[{}[\]]{4,}/.test(content)) {
    issues.push({
      code: 'FORMAT_STRUCTURAL_ARTIFACT',
      path: 'content',
      message: 'Long document contains unresolved structural artifact markers that may indicate raw extraction output.',
    });
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
