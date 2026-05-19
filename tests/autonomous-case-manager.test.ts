import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { addDeadline, addFact, addLegalIssue, addParty, addWorkProductReference, createCaseState } from '../src/case-state/mutations.js';
import { initMatter, deleteMatter } from '../src/storage/matter.js';
import { loadCaseStateDocument } from '../src/case-state/store.js';
import { listWorkProducts } from '../src/work-products/store.js';
import { listPendingQuestionsFromStore } from '../src/questions/generate.js';
import { submitQuestionAnswer } from '../src/questions/answers.js';
import { runAutonomousCaseManagerLoop } from '../src/case-manager/autonomous-loop.js';
import * as executor from '../src/case-manager/executor.js';

describe('autonomous case manager loop', () => {
  const matterName = 'autonomous-case-manager-test';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
    vi.restoreAllMocks();
  });

  it('creates chronology and evidence matrix from raw evidence obligations', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Notice of final decision dated 2026-01-10 and appeal filed on 10 January 2026.',
      status: 'accepted',
      evidenceItemIds: [],
    });

    const result = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 4,
      maxObligationsPerIteration: 6,
    });

    expect(result.obligations.obligations.some((obligation) => obligation.type === 'build_chronology')).toBe(true);
    const executedObligationTypes = new Set(result.executed.map((entry) => entry.obligationType));
    expect(executedObligationTypes).toContain('build_chronology');
    expect(executedObligationTypes).toContain('build_evidence_matrix');

    const state = await loadCaseStateDocument(matterName);
    const products = await listWorkProducts(matterName);
    expect(state?.state.workProducts.some((product) => product.type === 'chronology')).toBe(true);
    expect(state?.state.workProducts.some((product) => product.type === 'evidence_matrix')).toBe(true);
    expect(products.some((product) => product.type === 'chronology')).toBe(true);
    expect(products.some((product) => product.type === 'evidence_matrix')).toBe(true);
  });

  it('continues independent work while blocked by a critical missing date', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addLegalIssue(matterName, 'Potential procedural fairness breach');
    await addFact(matterName, {
      statement: 'The authority issued a final decision in early 2026.',
      status: 'accepted',
      evidenceItemIds: [],
    });

    const result = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 4,
      maxObligationsPerIteration: 6,
    });

    expect(result.status).toBe('blocked');
    expect(result.statusReport.pendingQuestionCount).toBe(1);
    expect(result.executed.map((entry) => entry.obligationType)).toContain('research_authorities');
    expect(result.executed.map((entry) => entry.obligationType)).toContain('build_chronology');
  });

  it('resumes after the user answers a missing-date blocker', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'The authority issued a decision in early 2026.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addDeadline(matterName, {
      description: 'Initial triage date',
      dueAt: '2026-01-05T00:00:00.000Z',
      critical: false,
      status: 'met',
      source: 'unit-test',
    });
    await addLegalIssue(matterName, 'Potential procedural fairness breach');
    await addWorkProductReference(matterName, {
      workProductId: 'memo-prepared',
      type: 'legal_research_memo',
      readiness: 'legally_reviewed',
      source: 'unit-test',
    });

    const first = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 3,
      maxObligationsPerIteration: 6,
    });

    expect(first.status).toBe('blocked');
    const pending = await listPendingQuestionsFromStore(matterName);
    expect(pending).toHaveLength(1);

    await submitQuestionAnswer({
      matterName,
      questionId: pending[0]?.questionId ?? 'missing',
      answer: '2026-01-15',
      source: 'agent',
    });

    const resumed = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 3,
      maxObligationsPerIteration: 6,
    });

    const afterQuestions = await listPendingQuestionsFromStore(matterName);
    expect(afterQuestions).toHaveLength(0);
    expect(resumed.status).toBe('managed');
  });

  it('retries a failed core obligation and does not mark progress on completed ones', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addLegalIssue(matterName, 'Potential procedural fairness breach');
    await addFact(matterName, {
      statement: 'A notice was issued on 2026-01-10 with service details.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addDeadline(matterName, {
      description: 'Final decision date provided by user',
      dueAt: '2026-01-10T00:00:00.000Z',
      critical: false,
      status: 'met',
      source: 'unit-test',
    });
    await addWorkProductReference(matterName, {
      workProductId: 'matrix-completed',
      type: 'evidence_matrix',
      readiness: 'case_integrated',
      source: 'unit-test',
    });
    await addWorkProductReference(matterName, {
      workProductId: 'memo-completed',
      type: 'legal_research_memo',
      readiness: 'legally_reviewed',
      source: 'unit-test',
    });

    const executeSpy = vi.spyOn(executor, 'executeObligation');
    let attempt = 0;
    executeSpy.mockImplementation(async (input) => {
      attempt += 1;
      if (input.obligation.type === 'build_chronology' && attempt === 1) {
        return {
          status: 'failed',
          error: 'temporary failure while generating chronology',
        };
      }
      return {
        status: 'satisfied',
      };
    });

    const first = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 1,
      maxObligationsPerIteration: 1,
    });
    const second = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 1,
      maxObligationsPerIteration: 1,
    });

    expect(first.executed.some((entry) => entry.obligationType === 'build_chronology')).toBe(true);
    expect(first.executed.find((entry) => entry.obligationType === 'build_chronology')?.status).toBe('failed');
    expect(second.executed.some((entry) => entry.obligationType === 'build_chronology')).toBe(true);
    expect(second.executed.find((entry) => entry.obligationType === 'build_chronology')?.status).toBe('satisfied');
    expect(first.executed.filter((entry) => entry.obligationType === 'build_chronology')).toHaveLength(1);
    expect(second.executed.filter((entry) => entry.obligationType === 'build_chronology')).toHaveLength(1);
    expect(executeSpy).toHaveBeenCalledTimes(2);
  });

  it('reports managed status and avoids rerunning satisfied obligations', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addLegalIssue(matterName, 'Potential procedural fairness breach');
    await addFact(matterName, {
      statement: 'A notice was issued on 2026-01-10.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addDeadline(matterName, {
      description: 'Final decision date provided by user',
      dueAt: '2026-01-10T00:00:00.000Z',
      critical: false,
      status: 'met',
      source: 'unit-test',
    });
    await addWorkProductReference(matterName, {
      workProductId: 'chrono-completed',
      type: 'chronology',
      readiness: 'case_integrated',
      source: 'unit-test',
    });
    await addWorkProductReference(matterName, {
      workProductId: 'matrix-completed',
      type: 'evidence_matrix',
      readiness: 'case_integrated',
      source: 'unit-test',
    });
    await addWorkProductReference(matterName, {
      workProductId: 'memo-completed',
      type: 'legal_research_memo',
      readiness: 'legally_reviewed',
      source: 'unit-test',
    });

    const executeSpy = vi.spyOn(executor, 'executeObligation');
    const first = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 3,
      maxObligationsPerIteration: 5,
    });
    executeSpy.mockClear();

    const second = await runAutonomousCaseManagerLoop({
      matterName,
      maxIterations: 3,
      maxObligationsPerIteration: 5,
    });

    expect(first.status).toBe('managed');
    expect(second.status).toBe('managed');
    expect(first.executed).toHaveLength(0);
    expect(second.executed).toHaveLength(0);
    expect(executeSpy).not.toHaveBeenCalled();
  });
});
