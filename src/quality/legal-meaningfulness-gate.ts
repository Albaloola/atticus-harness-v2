import type { UnknownWorkProduct, WorkProductReadiness } from '../work-products/types.js';

export interface LegalMeaningfulnessIssue {
  code: string;
  path: string;
  message: string;
}

export interface LegalMeaningfulnessReport {
  valid: boolean;
  issues: LegalMeaningfulnessIssue[];
}

type LegalMeaningfulnessApplicableType =
  | 'legal_research_memo'
  | 'procedural_route_memo'
  | 'merits_opinion'
  | 'case_theory'
  | 'risk_register';

const LEGAL_TYPES = new Set<LegalMeaningfulnessApplicableType>([
  'legal_research_memo',
  'procedural_route_memo',
  'merits_opinion',
  'case_theory',
  'risk_register',
]);

const LEGAL_SECTIONS_BY_TYPE: Record<LegalMeaningfulnessApplicableType, string[]> = {
  legal_research_memo: [
    'legal question',
    'jurisdiction',
    'forum',
    'facts',
    'law',
    'analysis',
    'conclusion',
    'uncertainties',
    'risks',
    'next actions',
    'authorities',
  ],
  procedural_route_memo: [
    'forum',
    'routes',
    'authorities',
    'recommendation',
    'risks',
    'next action',
  ],
  merits_opinion: [
    'merits',
    'downside',
    'relief',
    'risks',
    'conclusion',
    'evidence',
    'uncertainty',
  ],
  case_theory: [
    'theory',
    'assumptions',
    'evidence',
    'application',
  ],
  risk_register: [
    'risk',
    'impact',
    'mitigation',
    'next step',
  ],
};

function hasKeywordCoverage(content: string, words: string[]): boolean {
  const normalized = content.toLowerCase();
  const matches = words.filter((word) => normalized.includes(word.toLowerCase()));
  return matches.length >= Math.max(1, Math.ceil(words.length * 0.7));
}

export function appliesLegalMeaningfulnessGate(type: string): type is LegalMeaningfulnessApplicableType {
  return LEGAL_TYPES.has(type as LegalMeaningfulnessApplicableType);
}

export function evaluateLegalMeaningfulnessGate(
  product: UnknownWorkProduct,
  readiness: WorkProductReadiness,
): LegalMeaningfulnessReport {
  const issues: LegalMeaningfulnessIssue[] = [];

  if (!appliesLegalMeaningfulnessGate(product.type)) {
    return { valid: true, issues };
  }

  const appliesAtReadiness = readiness === 'legally_reviewed' || readiness === 'hostile_reviewed' || readiness === 'operator_review_ready' || readiness === 'operator_review_ready_with_critical_gap' || readiness === 'execution_ready' || readiness === 'file_ready';
  if (!appliesAtReadiness) {
    return { valid: true, issues };
  }

  const requiredTerms = LEGAL_SECTIONS_BY_TYPE[product.type];
  if (!hasKeywordCoverage(product.content, requiredTerms)) {
    issues.push({
      code: 'LEGAL_MEANINGFULNESS_CONTENT',
      path: 'content',
      message: `Legal ${product.type} is missing core legal reasoning coverage (${requiredTerms.join(', ')})`,
    });
  }

  const payload = product.payload as Record<string, unknown>;
  for (const term of requiredTerms) {
    if (term.includes(' ')) {
      continue;
    }
    const key = term === 'facts' ? 'facts' : term.replace(/\s+/g, '');
    const value = payload[key];
    if (value === undefined || value === null) {
      issues.push({
        code: 'LEGAL_MEANINGFULNESS_PAYLOAD',
        path: `payload.${key}`,
        message: `Legal work product is missing required legal payload field: ${key}`,
      });
      continue;
    }
    if (typeof value === 'string' && !value.trim()) {
      issues.push({
        code: 'LEGAL_MEANINGFULNESS_PAYLOAD',
        path: `payload.${key}`,
        message: `Legal payload field ${key} cannot be empty.`,
      });
    }
  }

  if (Array.isArray(payload.authorities) && payload.authorities.length > 0) {
    const authorityCoverage = payload.authorities
      .map((item) => String(item).trim())
      .filter(Boolean).length;
    if (authorityCoverage === 0) {
      issues.push({
        code: 'LEGAL_MEANINGFULNESS_AUTHORITIES',
        path: 'payload.authorities',
        message: 'Legal analysis includes no usable authority references.',
      });
    }
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
