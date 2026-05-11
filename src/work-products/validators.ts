import type { UnknownWorkProduct, WorkProductReadiness } from './types.js';
import { getWorkProductContract } from './contracts.js';
import { evaluateWorkProductQualityGates } from '../quality/gate-report.js';
import { hasCriticalDeadlineGap } from '../quality/document-substance-gate.js';

export interface WorkProductValidationError {
  code: string;
  path: string;
  message: string;
}

export interface WorkProductValidationReport {
  valid: boolean;
  errors: WorkProductValidationError[];
}

export function validateWorkProductSchema(product: UnknownWorkProduct): WorkProductValidationReport {
  const errors: WorkProductValidationError[] = [];

  const requireTrimmed = (value: string | undefined, field: string, missing: string, empty: string): void => {
    if (!value) {
      errors.push({ code: missing, path: field, message: `${missing.replace(/_/g, ' ')}.` });
      return;
    }
    if (!value.trim()) {
      errors.push({ code: empty, path: field, message: `${field} cannot be empty.` });
    }
  };

  requireTrimmed(product.id, 'id', 'MISSING_ID', 'EMPTY_ID');
  requireTrimmed(product.matterName, 'matterName', 'MISSING_MATTER_NAME', 'EMPTY_MATTER_NAME');
  requireTrimmed(product.title, 'title', 'MISSING_TITLE', 'EMPTY_TITLE');
  requireTrimmed(product.content, 'content', 'MISSING_CONTENT', 'EMPTY_CONTENT');
  requireTrimmed(product.purpose, 'purpose', 'MISSING_PURPOSE', 'EMPTY_PURPOSE');
  requireTrimmed(product.audience, 'audience', 'MISSING_AUDIENCE', 'EMPTY_AUDIENCE');

  if (!product.sourceBasis || product.sourceBasis.length === 0) {
    errors.push({
      code: 'MISSING_SOURCE_BASIS',
      path: 'sourceBasis',
      message: 'Source basis must include at least one source.',
    });
  } else {
    product.sourceBasis.forEach((basis, index) => {
      if (!basis.sourceType || !basis.sourceType.trim()) {
        errors.push({
          code: 'MISSING_SOURCE_BASIS_TYPE',
          path: `sourceBasis[${index}].sourceType`,
          message: 'Source basis must include a type.',
        });
      }
      if (!basis.sourceId || !basis.sourceId.trim()) {
        errors.push({
          code: 'MISSING_SOURCE_BASIS_ID',
          path: `sourceBasis[${index}].sourceId`,
          message: 'Source basis must include an ID.',
        });
      }
      if (!basis.description || !basis.description.trim()) {
        errors.push({
          code: 'MISSING_SOURCE_BASIS_DESCRIPTION',
          path: `sourceBasis[${index}].description`,
          message: 'Source basis must include a description.',
        });
      }
    });
  }

  if (!Array.isArray(product.unresolvedGaps)) {
    errors.push({
      code: 'MISSING_UNRESOLVED_GAPS',
      path: 'unresolvedGaps',
      message: 'Unresolved gaps must be an array.',
    });
  }

  if (product.safetyStatus !== 'safe' && product.safetyStatus !== 'unsafe') {
    errors.push({
      code: 'INVALID_SAFETY_STATUS',
      path: 'safetyStatus',
      message: 'Safety status must be either safe or unsafe.',
    });
  }

  const payload = product.payload as Record<string, unknown>;
  const contract = getWorkProductContract(product.type);
  for (const field of contract.requiredPayloadFields) {
    const value = payload[field];
    if (value === undefined || value === null) {
      errors.push({
        code: 'MISSING_PAYLOAD_FIELD',
        path: `payload.${field}`,
        message: `Payload requires ${field}.`,
      });
      continue;
    }
    if (typeof value === 'string' && !value.trim()) {
      errors.push({
        code: 'EMPTY_PAYLOAD_FIELD',
        path: `payload.${field}`,
        message: `${field} cannot be empty.`,
      });
    }
    if (Array.isArray(value) && value.length === 0) {
      errors.push({
        code: 'EMPTY_PAYLOAD_ARRAY',
        path: `payload.${field}`,
        message: `${field} cannot be an empty list.`,
      });
    }
  }

  if (isLikelyJsonScaffold(product.content)) {
    errors.push({
      code: 'JSON_WRAPPER',
      path: 'content',
      message: 'Content looks like a JSON wrapper and is not a review-ready document body.',
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateWorkProductReadiness(
  product: UnknownWorkProduct,
  readiness: WorkProductReadiness,
): WorkProductValidationReport {
  const report = validateWorkProductSchema(product);
  const contract = getWorkProductContract(product.type);
  const payload = product.payload as Record<string, unknown>;

  if (product.content.trim().length < contract.minimumContentLength) {
    report.errors.push({
      code: 'INSUFFICIENT_CONTENT',
      path: 'content',
      message: `Readiness ${readiness} requires at least ${contract.minimumContentLength} characters of content.`,
    });
  }

  if (readiness !== 'raw' && readiness !== 'structured' && product.sourceBasis.length === 0) {
    report.errors.push({
      code: 'MISSING_SOURCE_BASIS',
      path: 'sourceBasis',
      message: `${readiness} requires source basis references.`,
    });
  }

  if (readiness === 'evidence_grounded' && !product.sourceBasis.some((entry) => entry.sourceType === 'evidence')) {
    report.errors.push({
      code: 'MISSING_EVIDENCE_BASIS',
      path: 'sourceBasis',
      message: 'Evidence-grounded products require at least one evidence source basis.',
    });
  }

  const requirements = contract.minimumReadinessRequirements[readiness] ?? {};
  const operatorReadyRequirements = contract.minimumReadinessRequirements.operator_review_ready ?? {};
  const requirementsWithFallback = readiness === 'operator_review_ready_with_critical_gap'
    ? { ...operatorReadyRequirements, ...requirements }
    : requirements;
  if (requirementsWithFallback?.minimumAuthorityCount !== undefined) {
    const authorityCount = countAuthorities(payload);
    if (authorityCount < requirementsWithFallback.minimumAuthorityCount) {
      report.errors.push({
        code: 'INSUFFICIENT_AUTHORITY',
        path: 'payload.authorities',
        message: `${readiness} requires at least ${requirementsWithFallback.minimumAuthorityCount} authority references.`,
      });
    }
  }

  if (requirementsWithFallback?.requiredForum) {
    if (typeof payload.forum !== 'string' || !String(payload.forum).trim()) {
      report.errors.push({
        code: 'MISSING_FORUM',
        path: 'payload.forum',
        message: `${readiness} requires forum.`,
      });
    }
  }

  if (requirementsWithFallback?.requiredPartiesMin !== undefined) {
    const parties = toStringArray(payload.parties);
    if (parties.length < requirementsWithFallback.requiredPartiesMin) {
      report.errors.push({
        code: 'INSUFFICIENT_PARTIES',
        path: 'payload.parties',
        message: `${readiness} requires at least ${requirementsWithFallback.requiredPartiesMin} parties.`,
      });
    }
  }

  if (requirementsWithFallback?.requiredRemediesMin !== undefined) {
    const remedies = toStringArray(payload.remedies);
    if (remedies.length < requirementsWithFallback.requiredRemediesMin) {
      report.errors.push({
        code: 'INSUFFICIENT_REMEDIES',
        path: 'payload.remedies',
        message: `${readiness} requires at least ${requirementsWithFallback.requiredRemediesMin} remedies.`,
      });
    }
  }

  const isCriticalGapLevel = readiness === 'operator_review_ready_with_critical_gap';
  if (isCriticalGapLevel && !hasCriticalDeadlineGap(product)) {
    report.errors.push({
      code: 'NO_CRITICAL_GAP_REQUIRED',
      path: 'unresolvedGaps',
      message: 'operator_review_ready_with_critical_gap requires unresolved critical gap(s).',
    });
  }

  if (readiness === 'execution_ready' && hasCriticalDeadlineGap(product)) {
    report.errors.push({
      code: 'CRITICAL_DEADLINE_GAP',
      path: 'unresolvedGaps',
      message: 'Critical unresolved gaps block execution readiness.',
    });
  }

  const quality = evaluateWorkProductQualityGates(product, readiness);
  if (!quality.valid) {
    for (const issue of quality.issues) {
      report.errors.push({
        code: issue.code,
        path: issue.path,
        message: `${issue.gate} gate: ${issue.message}`,
      });
    }
  }

  return {
    valid: report.errors.length === 0,
    errors: report.errors,
  };
}

function isLikelyJsonScaffold(content: string): boolean {
  const trimmed = content.trim();
  return (
    (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'))
  );
}

function countAuthorities(payload: Record<string, unknown>): number {
  if (Array.isArray(payload.authorities)) {
    return payload.authorities.length;
  }
  if (Array.isArray(payload.laws)) {
    return payload.laws.length;
  }
  return 0;
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}
