import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { deleteMatter, initMatter } from '../src/storage/matter.js';
import {
  addClaimContradiction,
  addClaim,
  getClaimsDocument,
  listClaims,
} from '../src/claims/store.js';
import { extractClaimsFromContent } from '../src/claims/extract.js';
import { verifyClaimGrounding } from '../src/claims/verify.js';
import { isGeneratedDraftClaim } from '../src/claims/verify.js';

describe('claim-grounding', () => {
  const matterName = 'claim-grounding-test';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('prevents generated draft-only evidence from passing primary proof checks', () => {
    const { claims } = extractClaimsFromContent({
      matterName,
      sourceType: 'draft',
      sourceId: 'draft-candidate-1',
      content: 'The tribunal denied notice on 4 March 2026 and this decision was unlawful. The user is seeking urgent review.',
    });
    expect(claims.length).toBeGreaterThan(0);

    const claim = {
      ...claims[0]!,
      category: 'fact' as const,
      sourceReferences: [{
        sourceClass: 'generated_work_product',
        sourceId: 'draft-candidate-1',
      }],
    };

    const result = verifyClaimGrounding({ claims: [claim] });
    expect(result.valid).toBe(false);
    expect(result.updatedClaims[0]!.status).toBe('unsupported');
    expect(isGeneratedDraftClaim(result.updatedClaims[0]!)).toBe(true);
    expect(result.errors.some((item) => item.code === 'INSUFFICIENT_PRIMARY_SUPPORT')).toBe(true);
  });

  it('fails unsupported factual claims with no sources', () => {
    const report = verifyClaimGrounding({
      claims: [{
        claimId: 'claim-no-source',
        matterName,
        category: 'fact',
        statement: 'The authority failed to provide any response.',
        status: 'proposed',
        confidence: 0.5,
        sourceReferences: [],
        authorityRefs: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }],
    });

    expect(report.valid).toBe(false);
    expect(report.errors.some((item) => item.code === 'MISSING_FACT_SUPPORT')).toBe(true);
  });

  it('marks contradictory claims as disputed facts', async () => {
    const first = await addClaim(matterName, {
      matterName,
      category: 'fact',
      statement: 'The decision was issued on 10 January.',
      status: 'supported',
      confidence: 0.8,
      sourceReferences: [{
        sourceClass: 'primary_evidence',
        sourceId: 'EV-001',
      }],
      authorityRefs: [],
      evidenceBasisNote: 'From primary notice',
    });
    const second = await addClaim(matterName, {
      matterName,
      category: 'fact',
      statement: 'The decision was not issued on 10 January.',
      status: 'supported',
      confidence: 0.8,
      sourceReferences: [{
        sourceClass: 'primary_evidence',
        sourceId: 'EV-002',
      }],
      authorityRefs: [],
      evidenceBasisNote: 'From primary notice',
    });

    await addClaimContradiction(matterName, {
      matterName,
      claimIdA: first.claimId,
      claimIdB: second.claimId,
      description: 'Conflicting dates are mutually exclusive.',
      status: 'open',
    });

    const claims = await listClaims(matterName);
    const result = verifyClaimGrounding({
      claims,
      contradictions: (await getClaimsDocument(matterName)).contradictions,
    });

    expect(result.valid).toBe(false);
    expect(result.updatedClaims.every((claim) => claim.status === 'disputed')).toBe(true);
    expect(result.errors.some((item) => item.code === 'CONTRADICTION')).toBe(true);
  });

  it('requires legal authority references for legal claims', () => {
    const report = verifyClaimGrounding({
      claims: [{
        claimId: 'claim-law',
        matterName,
        category: 'law',
        statement: 'The procedure did not follow fair hearing requirements.',
        status: 'proposed',
        confidence: 0.8,
        sourceReferences: [{
          sourceClass: 'primary_evidence',
          sourceId: 'EV-100',
        }],
        authorityRefs: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }],
    });

    expect(report.valid).toBe(false);
    expect(report.errors.some((item) => item.code === 'MISSING_AUTHORITY')).toBe(true);
  });
});
