import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { deleteMatter } from '../src/storage/matter.js';
import { initMatter } from '../src/storage/matter.js';
import { closeStateDb } from '../src/state/store.js';
import { addWorkProductReference, createCaseState } from '../src/case-state/mutations.js';
import { loadCaseStateDocument } from '../src/case-state/store.js';
import { promoteWorkProduct, canPromoteWorkProduct } from '../src/work-products/promote.js';
import { upsertWorkProduct } from '../src/work-products/store.js';
import { validateWorkProductSchema, validateWorkProductReadiness } from '../src/work-products/validators.js';
import type { UnknownWorkProduct } from '../src/work-products/types.js';

describe('work-products', () => {
  const matterName = 'work-product-test';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('rejects invalid work product schema inputs', () => {
    const invalid: UnknownWorkProduct = {
      id: '',
      matterName,
      type: 'chronology',
      title: '',
      content: '{\"events\":[]}',
      readiness: 'raw',
      purpose: 'Chronology test',
      audience: 'Operator',
      sourceBasis: [],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: { events: [] },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const report = validateWorkProductSchema(invalid);
    expect(report.valid).toBe(false);
    expect(report.errors.some((error) => error.code === 'MISSING_ID')).toBe(true);
  });

  it('promotes a valid chronology and updates case state', async () => {
    const now = new Date().toISOString();
    const chronology: UnknownWorkProduct = {
      id: 'wp-chrono',
      matterName,
      type: 'chronology',
      title: 'Chronology',
      content: 'Chronology of events was prepared with dates and evidence references pulled from admitted notices and correspondence. Dates were verified against service confirmations and corroborated by all available exhibits, and the timeline now reflects a complete sequence from the first warning through the appeal window with responsible parties and filing milestones noted for downstream risk analysis and review.',
      readiness: 'raw',
      purpose: 'Case timeline preparation',
      audience: 'Operator',
      sourceBasis: [{
        sourceType: 'evidence',
        sourceId: 'EV-1',
        description: 'Email notice',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        events: [
          { date: '2026-01-01', event: 'Notice issued', sourceIds: ['EV-1'] },
        ],
      },
      createdAt: now,
      updatedAt: now,
    };

    const promoted = promoteWorkProduct(chronology, 'case_integrated');
    expect(promoted.readiness).toBe('case_integrated');

    await upsertWorkProduct(matterName, promoted);
    await addWorkProductReference(matterName, {
      workProductId: promoted.id,
      type: promoted.type,
      readiness: promoted.readiness,
      source: 'unit-test',
    });

    const document = await loadCaseStateDocument(matterName);
    expect(document?.state.workProducts.some((item) => item.workProductId === 'wp-chrono')).toBe(true);
    const readState = validateWorkProductReadiness(promoted, 'operator_review_ready');
    expect(readState.valid).toBe(true);
    expect(readState.errors).toHaveLength(0);
  });

  it('blocks legal memo promotion without authorities', () => {
    const memo: UnknownWorkProduct = {
      id: 'wp-legal',
      matterName,
      type: 'legal_research_memo',
      title: 'Legal memo',
      content: 'Legal memorandum on rights to appeal with statute interpretation, case comparison, and practical outcomes for process, forum, remedies, and evidence strategy. The analysis sets out the factual matrix, identifies the governing legal framework, and maps how each issue interacts with available primary source material. It includes preliminary conclusions and alternative pathways while highlighting uncertainty where precedent is thin, and recommends a practical litigation path that keeps statutory and procedural deadlines in view.',
      readiness: 'structured',
      purpose: 'Assess viability',
      audience: 'Operator',
      sourceBasis: [{
        sourceType: 'law',
        sourceId: 'LAW-1',
        description: 'primary authority map',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        legalQuestion: 'Whether procedural grounds exist for appeal',
        forum: 'Scottish Administrative Court',
        facts: ['Notice received on date'],
        laws: ['Human Rights Act'],
        analysis: 'The case appears to raise procedural fairness concerns.',
        conclusion: 'Potential route exists.',
        uncertainties: ['Whether authority confirms'],
        risks: ['Tight timeline'],
        nextActions: ['File within time'],
        authorities: [],
      },
      createdAt: now(),
      updatedAt: now(),
    };

    const result = canPromoteWorkProduct(memo, 'legally_reviewed');
    expect(result.ok).toBe(false);
    expect(result.errors.some((error) => error.code === 'INSUFFICIENT_AUTHORITY')).toBe(true);
  });

  it('blocks pleading promotion when forum, parties, and remedies are incomplete', () => {
    const pleading: UnknownWorkProduct = {
      id: 'wp-plea',
      matterName,
      type: 'draft_pleading',
      title: 'Pleading',
      content: 'Pleas document summarizing claim structure and relief sought. This analysis includes the material facts, procedural chronology, and a proposed statement of grounds. It also references applicable forum rules and the relief pathways that align with the requested remedy outcomes. This text is intentionally long enough to satisfy substance thresholds for this promotion test while still being incomplete in mandatory payload fields.',
      readiness: 'structured',
      purpose: 'Draft pleadings',
      audience: 'Counsel',
      sourceBasis: [{
        sourceType: 'case_artifact',
        sourceId: 'CA-1',
        description: 'Evidence bundle',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        forum: '',
        parties: [],
        remedies: [],
        relief: 'Specific relief sought',
      },
      createdAt: now(),
      updatedAt: now(),
    };

    expect(() => promoteWorkProduct(pleading, 'operator_review_ready')).toThrow(/requires forum|at least 1/);
  });

  it('rejects very short generic documents at readiness gates', () => {
    const shortEmail: UnknownWorkProduct = {
      id: 'wp-short',
      matterName,
      type: 'draft_email',
      title: 'Short email',
      content: 'Hi.',
      readiness: 'structured',
      purpose: 'Send update',
      audience: 'User',
      sourceBasis: [{
        sourceType: 'user_statement',
        sourceId: 'USR-1',
        description: 'User-supplied instruction',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        to: 'client@example.org',
        subject: 'Status update',
      },
      createdAt: now(),
      updatedAt: now(),
    };

    const result = validateWorkProductReadiness(shortEmail, 'operator_review_ready');
    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === 'INSUFFICIENT_CONTENT')).toBe(true);
  });

  it('rejects a long generic complaint when requested as a full pleading document', () => {
    const complaint: UnknownWorkProduct = {
      id: 'wp-complaint-generic',
      matterName,
      type: 'draft_complaint',
      title: 'Pleading draft',
      content: 'This document is a very long complaint narrative that recounts the facts and mentions the parties and events again and again. It does not include section headings, structured legal reasoning blocks, remedies breakdown, or a clear application of law to fact. The same themes are repeated across many paragraphs to reach an expected review-length while still lacking meaningful pleading architecture. It mentions grievance, delay, and hardship and tries to state the case in broad strokes. The account continues with additional background context, generic chronology, and summary commentary but no formal structure for legal grounds, legal basis, or requested remedy sequencing. The narrative remains unformatted and incomplete for filing because there is no clear legal structure in it, no explicit factual matrix, and no distinct procedural stage-by-stage analysis.',
      readiness: 'structured',
      purpose: 'Produce a full complaint pack for judicial review and ordinary action routes.',
      audience: 'Counsel',
      sourceBasis: [{
        sourceType: 'evidence',
        sourceId: 'EV-1',
        description: 'Initial notice and correspondence',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        forum: 'Scottish Tribunal',
        parties: ['Plaintiff', 'Agency'],
        remedies: ['Set aside decision'],
        relief: 'Reinstate procedural rights and award costs.',
      },
      createdAt: now(),
      updatedAt: now(),
    };

    const result = validateWorkProductReadiness(complaint, 'operator_review_ready');
    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === 'SUBSTANCE_NO_STRUCTURE')).toBe(true);
  });

  it('rejects JSON-looking exported content by formatting gate', () => {
    const jsonDoc: UnknownWorkProduct = {
      id: 'wp-json',
      matterName,
      type: 'review_ready_output_bundle',
      title: 'JSON-shaped export draft',
      content: '{\"items\": [\"a\", \"b\", \"c\"], \"note\": \"raw payload\"}',
      readiness: 'structured',
      purpose: 'Create a review-ready bundle',
      audience: 'Operator',
      sourceBasis: [{
        sourceType: 'case_artifact',
        sourceId: 'CA-1',
        description: 'Pre-existing artifact index',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        manifest: [{ file: 'bundle.md', purpose: 'bundle' }],
        workProductIds: ['wp-1'],
      },
      createdAt: now(),
      updatedAt: now(),
    };

    const result = validateWorkProductReadiness(jsonDoc, 'operator_review_ready');
    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === 'FORMAT_JSON_SCaffold' || error.code === 'JSON_WRAPPER')).toBe(true);
  });

  it('requires draft evidence citations before operator review readiness', () => {
    const pleadingWithoutCitations: UnknownWorkProduct = {
      id: 'wp-plea-no-cites',
      matterName,
      type: 'draft_pleading',
      title: 'Draft pleading without citation',
      content: '## Facts\nThe applicant disputes the procedural fairness of the decision and seeks redress.\n## Grounds\nThe decision lacks proper process and should be revisited.\n## Relief\nThe applicant requests the court to set aside the refusal and grant a rehearing.',
      readiness: 'case_integrated',
      purpose: 'Prepare a court-ready pleading draft.',
      audience: 'Counsel',
      sourceBasis: [{
        sourceType: 'user_statement',
        sourceId: 'USR-1',
        description: 'User instruction only',
      }],
      unresolvedGaps: [],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        forum: 'Court of Session',
        parties: ['Applicant', 'Authority'],
        remedies: ['Rehearing'],
        relief: 'Set aside and fresh consideration.',
      },
      createdAt: now(),
      updatedAt: now(),
    };

    const result = validateWorkProductReadiness(pleadingWithoutCitations, 'operator_review_ready');
    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === 'SUBSTANCE_NO_EVIDENCE_CITATION')).toBe(true);
  });

  it('allows critical-gap operator-review level but blocks execution readiness', () => {
    const longDraft: UnknownWorkProduct = {
      id: 'wp-critical-gap',
      matterName,
      type: 'draft_pleading',
      title: 'Pleading with critical deadline gap',
      content: '## Facts\nThe applicant received the contested decision on 1 January and provided response evidence immediately. The record establishes a sequence of key events with responsible offices, representations, and missed procedural opportunities.\n## Legal basis\nThe complaint is based on process fairness obligations and proportionate appeal rights under applicable rules.\n## Application\nApplying the facts to the claims, each branch of the case has a plausible remedy pathway with a practical filing plan and a clear list of documents to file.\n## Remedies\nThe remedies include: (1) set aside the decision, (2) grant of rehearing, (3) corrective order for procedural fairness.',
      readiness: 'operator_review_ready',
      purpose: 'Produce a review-ready pleading that is ready for hostile review if timing permits.',
      audience: 'Counsel',
      sourceBasis: [{
        sourceType: 'evidence',
        sourceId: 'EV-7',
        description: 'Service notice and acknowledgment trail',
      }],
      unresolvedGaps: ['Critical: unresolved final decision deadline affects filing and response windows'],
      safetyStatus: 'safe',
      metadata: {},
      payload: {
        forum: 'Scottish Civil Court',
        parties: ['Applicant', 'Authority'],
        remedies: ['Set aside decision'],
        relief: 'Order for reconsideration and costs.',
      },
      createdAt: now(),
      updatedAt: now(),
    };

    const criticalGapResult = validateWorkProductReadiness(longDraft, 'operator_review_ready_with_critical_gap');
    expect(criticalGapResult.valid).toBe(true);

    const executionResult = validateWorkProductReadiness(longDraft, 'execution_ready');
    expect(executionResult.valid).toBe(false);
    expect(executionResult.errors.some((error) => error.code === 'CRITICAL_DEADLINE_GAP')).toBe(true);
  });
});

function now(): string {
  return new Date().toISOString();
}
