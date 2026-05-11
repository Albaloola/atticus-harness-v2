import type { ClaimContradiction, ClaimRecord } from './schema.js';
import type { SourceClass } from '../evidence/source-classification.js';
import { isDisallowedPrimarySource, isPrimaryEvidenceSource, isGeneratedOrDraftSource } from '../evidence/source-classification.js';

export interface ClaimGroundingError {
  code: string;
  claimId: string;
  path: string;
  message: string;
}

export interface ClaimGroundingReport {
  valid: boolean;
  errors: ClaimGroundingError[];
}

export interface VerificationInput {
  claims: ClaimRecord[];
  contradictions?: ClaimContradiction[];
}

export interface VerificationResult extends ClaimGroundingReport {
  updatedClaims: ClaimRecord[];
}

const MIN_AUTHORITY_COUNT_FOR_LAW = 1;

export function verifyClaimGrounding(input: VerificationInput): VerificationResult {
  const now = new Date().toISOString();
  const workingClaims = structuredClone(input.claims);
  const contradictions = input.contradictions ?? [];
  const contradictionMap = buildOpenContradictionMap(contradictions);
  const updatedClaims = workingClaims.map((claim) => {
    const errors = validateClaim(claim);
    const hasContradiction = contradictionMap.has(claim.claimId);
    if (hasContradiction) {
      return {
        ...claim,
        status: 'disputed' as const,
        evidenceBasisNote: `${claim.evidenceBasisNote ?? ''} Contradicted by active review path.`.trim(),
        updatedAt: now,
      };
    }
    return errors.length > 0
      ? { ...claim, status: 'unsupported' as const, updatedAt: now }
      : { ...claim, status: 'supported' as const, updatedAt: now };
  });

  const errors = updatedClaims.flatMap((claim) => validateClaim(claim)).concat(
    collectContradictionErrors(updatedClaims, contradictionMap),
  );
  const unsupportedCount = updatedClaims.filter((claim) => claim.status === 'unsupported' || claim.status === 'disputed').length;

  return {
    valid: errors.length === 0 && unsupportedCount === 0,
    errors,
    updatedClaims,
  };
}

export function validateClaim(claim: ClaimRecord): ClaimGroundingError[] {
  const errors: ClaimGroundingError[] = [];
  if (!claim.statement.trim()) {
    errors.push({
      code: 'EMPTY_STATEMENT',
      claimId: claim.claimId,
      path: 'statement',
      message: 'Claim statements cannot be empty.',
    });
  }

  if (claim.category === 'fact' || claim.category === 'inference' || claim.category === 'user_assertion' || claim.category === 'risk') {
    const supportSources = factLikeSourceIds(claim);
    if (supportSources.length === 0) {
      errors.push({
        code: 'MISSING_FACT_SUPPORT',
        claimId: claim.claimId,
        path: 'sourceReferences',
        message: 'Factual claims require at least one source reference or must be explicitly marked unsupported.',
      });
    } else if (!supportSources.some(isPrimaryEvidenceSource)) {
      errors.push({
        code: 'INSUFFICIENT_PRIMARY_SUPPORT',
        claimId: claim.claimId,
        path: 'sourceReferences',
        message: 'Factual claims require primary evidence-class support; generated drafts and user assertions are not primary proof.',
      });
    }

    if (claim.sourceReferences.some((item) => isDisallowedPrimarySource(item.sourceClass))) {
      errors.push({
        code: 'NON_PRIMARY_SOURCE_DOMINANT',
        claimId: claim.claimId,
        path: 'sourceReferences',
        message: 'Primary proof currently relies on unsupported source classes.',
      });
    }
  }

  if (claim.category === 'law') {
    if (claim.authorityRefs.length < MIN_AUTHORITY_COUNT_FOR_LAW) {
      errors.push({
        code: 'MISSING_AUTHORITY',
        claimId: claim.claimId,
        path: 'authorityRefs',
        message: 'Legal claims require authority references.',
      });
    }

    const legalSource = claim.sourceReferences.some((item) => ['legal_authority', 'official_policy_or_rule', 'court_or_tribunal_record'].includes(item.sourceClass));
    if (!legalSource) {
      errors.push({
        code: 'INSUFFICIENT_LEGAL_SOURCE_CLASS',
        claimId: claim.claimId,
        path: 'sourceReferences',
        message: 'Legal claims require court, authority, or policy source references.',
      });
    }
  }

  return errors;
}

function factLikeSourceIds(claim: ClaimRecord): SourceClass[] {
  return claim.sourceReferences
    .filter((reference) => !!reference.sourceId)
    .map((reference) => reference.sourceClass);
}

function buildOpenContradictionMap(
  contradictions: ClaimContradiction[],
): Map<string, string[]> {
  const open = contradictions.filter((item) => item.status === 'open');
  const map = new Map<string, string[]>();
  for (const contradiction of open) {
    const entryA = map.get(contradiction.claimIdA) ?? [];
    const entryB = map.get(contradiction.claimIdB) ?? [];
    entryA.push(contradiction.claimIdB);
    entryB.push(contradiction.claimIdA);
    map.set(contradiction.claimIdA, entryA);
    map.set(contradiction.claimIdB, entryB);
  }
  return map;
}

function collectContradictionErrors(
  claims: ClaimRecord[],
  contradictionMap: Map<string, string[]>,
): ClaimGroundingError[] {
  const errors: ClaimGroundingError[] = [];
  const claimIds = new Set(claims.map((claim) => claim.claimId));

  for (const [claimId, conflicting] of contradictionMap.entries()) {
    if (!claimIds.has(claimId)) continue;
    for (const conflictingClaimId of conflicting) {
      if (!claimIds.has(conflictingClaimId)) continue;
      errors.push({
        code: 'CONTRADICTION',
        claimId,
        path: 'sourceReferences',
        message: `Claim ${claimId} is contradicted by ${conflictingClaimId}.`,
      });
    }
  }

  return errors;
}

export function isGeneratedDraftClaim(claim: ClaimRecord): boolean {
  return claim.sourceReferences.some((reference) => isGeneratedOrDraftSource(reference.sourceClass));
}
