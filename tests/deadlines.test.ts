import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { initMatter, deleteMatter } from '../src/storage/matter.js';
import { createCaseState, addDeadline } from '../src/case-state/mutations.js';
import { loadCaseStateDocument } from '../src/case-state/store.js';
import { buildCaseStateSnapshot } from '../src/case-state/snapshot.js';
import { executeHermesCommand } from '../src/hermes/commands.js';
import { calculateCaseDeadlines } from '../src/deadlines/engine.js';
import { isFinalDecisionDateMissing } from '../src/deadlines/questions.js';
import { syncQuestionsForMatter } from '../src/questions/generate.js';

describe('deadlines', () => {
  const matterName = 'deadline-test-matter';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('creates a critical question when final decision date is missing', async () => {
    const questions = await syncQuestionsForMatter({ matterName });

    expect(questions).toHaveLength(1);
    expect(questions[0]?.neededFor).toBe('final decision date');
    expect(questions[0]?.urgency).toBe('critical');
  });

  it('calculates Scottish judicial review urgency from known decision date', async () => {
    await addDeadline(matterName, {
      description: 'Final decision date provided',
      dueAt: '2026-01-01T00:00:00.000Z',
      critical: true,
      status: 'pending',
      source: 'unit-test',
    });

    const updated = await loadCaseStateDocument(matterName);
    const result = calculateCaseDeadlines({
      state: updated!.state,
      options: {
        jurisdiction: 'scotland',
        now: '2026-03-20T00:00:00.000Z',
      },
    });

    expect(result.calculated).toHaveLength(1);
    expect(result.calculated[0]?.category).toBe('judicial_review');
    expect(result.calculated[0]?.critical).toBe(true);
    expect(result.uncertaintyNotes).toHaveLength(0);
  });

  it('records a deadline from ingested email response language', async () => {
    const response = await executeHermesCommand({
      command: 'ingest_email',
      matterName,
      from: 'opponent@example.org',
      subject: 'Response required',
      body: 'Please provide the documentation by 2026-07-04.',
      source: 'hermes',
    });

    expect(response.ok).toBe(true);
    const document = await loadCaseStateDocument(matterName);
    expect(document?.state.deadlines.some((deadline) => /Email response deadline/.test(deadline.description))).toBe(true);
    expect(response.userMessage).toContain('Email ingested');
  });

  it('surfaces deadline uncertainty in case state snapshot and hermes handoff', async () => {
    const stateDocument = await loadCaseStateDocument(matterName);
    const snapshotBefore = buildCaseStateSnapshot(stateDocument!.state);
    expect(snapshotBefore.blocked.some((item) => item.includes('deadline uncertainty'))).toBe(true);
    expect(isFinalDecisionDateMissing(stateDocument!.state)).toBe(true);

    const command = await executeHermesCommand({
      command: 'get_case_status',
      matterName,
      source: 'hermes',
    });
    expect(command.ok).toBe(true);
    expect(command.summary.blocked.some((item) => item.includes('deadline uncertainty'))).toBe(true);
  });
});
