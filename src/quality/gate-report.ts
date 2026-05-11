import type { UnknownWorkProduct, WorkProductReadiness } from '../work-products/types.js';
import { evaluateDocumentSubstanceGate } from './document-substance-gate.js';
import { evaluateFormattingGate } from './formatting-gate.js';
import { evaluateLegalMeaningfulnessGate } from './legal-meaningfulness-gate.js';

export interface WorkProductQualityIssue {
  gate: 'formatting' | 'document-substance' | 'legal-meaningfulness';
  code: string;
  path: string;
  message: string;
}

export interface WorkProductQualityReport {
  valid: boolean;
  issues: WorkProductQualityIssue[];
}

export function evaluateWorkProductQualityGates(
  product: UnknownWorkProduct,
  readiness: WorkProductReadiness,
): WorkProductQualityReport {
  const issues: WorkProductQualityIssue[] = [];

  const formatting = evaluateFormattingGate(product);
  for (const issue of formatting.issues) {
    issues.push({
      gate: 'formatting',
      code: issue.code,
      path: issue.path,
      message: issue.message,
    });
  }

  const substance = evaluateDocumentSubstanceGate(product, readiness);
  for (const issue of substance.issues) {
    issues.push({
      gate: 'document-substance',
      code: issue.code,
      path: issue.path,
      message: issue.message,
    });
  }

  const legalMeaningfulness = evaluateLegalMeaningfulnessGate(product, readiness);
  for (const issue of legalMeaningfulness.issues) {
    issues.push({
      gate: 'legal-meaningfulness',
      code: issue.code,
      path: issue.path,
      message: issue.message,
    });
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
