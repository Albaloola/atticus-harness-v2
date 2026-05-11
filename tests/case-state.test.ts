import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { deleteMatter, getMatterPath, initMatter } from '../src/storage/matter.js';
import { registerEvidence } from '../src/storage/evidence.js';
import { saveCandidate } from '../src/storage/candidate.js';
import { addFact, addLegalIssue, addParty, addQuestion, addDeadline, addWorkProductReference, addRisk, createCaseState } from '../src/case-state/mutations.js';
import { buildCaseStateSnapshot } from '../src/case-state/snapshot.js';
import { importExistingMatterInputs } from '../src/case-state/import-existing.js';
import { loadCaseStateDocument } from '../src/case-state/store.js';
import type { EvidenceRecord } from '../src/types/evidence.js';
import type { CandidateArtifact } from '../src/types/artifact.js';

describe('case-state', () => {
  const matterName = 'case-state-test';
  let currentDir: string;

  beforeEach(async () => {
    currentDir = process.cwd();
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
    process.chdir(currentDir);
  });

  it('creates a new case state and reads it back', async () => {
    const created = await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
    const loaded = await loadCaseStateDocument(matterName);
    expect(created.matterName).toBe(matterName);
    expect(loaded).toBeTruthy();
    expect(created.state.status).toBe('new');
    expect(created.state.posture).toBe('unknown');
    expect(loaded?.revision).toBeGreaterThanOrEqual(0);
  });

  it('imports existing evidence and candidates as support-only updates', async () => {
    const now = new Date().toISOString();
    const evidenceOne: EvidenceRecord = {
      id: 'EV-100',
      matterName,
      originalPath: getMatterPath(matterName, '_evidence', 'EV-100.pdf'),
      internalPath: getMatterPath(matterName, '_evidence', 'EV-100.pdf'),
      sha256: 'sha256:100',
      mimeType: 'application/pdf',
      format: 'pdf',
      status: 'approved',
      ingested: now,
      sizeBytes: 1200,
      metadata: { note: 'primary evidence uploaded by user' },
    };
    const evidenceTwo: EvidenceRecord = {
      id: 'EV-200',
      matterName,
      originalPath: getMatterPath(matterName, '_evidence', 'EV-200.pdf'),
      internalPath: getMatterPath(matterName, '_evidence', 'EV-200.pdf'),
      sha256: 'sha256:200',
      mimeType: 'application/pdf',
      format: 'pdf',
      status: 'failed',
      ingested: now,
      sizeBytes: 1200,
      metadata: {},
    };
    await registerEvidence(matterName, evidenceOne);
    await registerEvidence(matterName, evidenceTwo);

    const candidateOne: CandidateArtifact = {
      id: 'CND-1',
      matterName,
      type: 'draft',
      title: 'Draft chronology',
      content: 'Draft draft draft',
      status: 'candidate',
      created: now,
      metadata: {
        source: 'prior run',
        requestedType: 'chronology',
      },
    };
    const candidateTwo: CandidateArtifact = {
      id: 'CND-2',
      matterName,
      type: 'draft',
      title: 'Accepted draft',
      content: 'Accepted but still unverified',
      status: 'accepted',
      created: now,
      metadata: {
        source: 'prior run',
        requestedType: 'fact_finding_report',
      },
    };
    const candidateThree: CandidateArtifact = {
      id: 'CND-3',
      matterName,
      type: 'draft',
      title: 'Rejected draft',
      content: 'Rejected',
      status: 'rejected',
      created: now,
      metadata: {
        source: 'prior run',
      },
    };

    await saveCandidate(matterName, candidateOne);
    await saveCandidate(matterName, candidateTwo);
    await saveCandidate(matterName, candidateThree);

    const summary = await importExistingMatterInputs({ matterName, source: 'unit-test', actor: 'unit-test' });

    expect(summary.importedEvidenceItems).toBe(2);
    expect(summary.importedCandidateItems).toBe(3);
    expect(summary.linkedCandidateProducts).toBe(2);

    const document = await loadCaseStateDocument(matterName);
    expect(document?.state.evidenceItems.length).toBe(5);
    const generatedDraft = document?.state.evidenceItems.find((item) => item.sourceReference === 'CND-1');
    expect(generatedDraft?.isPrimaryEvidence).toBe(false);
    expect(generatedDraft?.status).toBe('pending');
    const failedPrimary = document?.state.evidenceItems.find((item) => item.sourceReference === 'EV-200');
    expect(failedPrimary?.status).toBe('rejected');
    const acceptedDraft = document?.state.evidenceItems.find((item) => item.sourceReference === 'CND-2');
    expect(acceptedDraft?.isPrimaryEvidence).toBe(false);
    expect(acceptedDraft?.status).toBe('pending');
  });

  it('tracks updates to core case fields and produces snapshots', async () => {
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });

    await addParty(matterName, {
      name: 'Jane Student',
      role: 'student',
    });
    await addFact(matterName, {
      statement: 'Notice received on 1 January 2025.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addLegalIssue(matterName, 'Potential breach of contract');
    await addRisk(matterName, 'Risk: key email delayed');
    await addQuestion(matterName, {
      question: 'What is the final appeal deadline?',
      neededFor: 'deadlines',
      urgency: 'high',
      status: 'pending',
      canProceedWithoutAnswer: false,
      blockedObligationIds: [],
    });
    await addDeadline(matterName, {
      description: 'Final appeal deadline',
      dueAt: '2026-06-01T12:00:00.000Z',
      critical: true,
      status: 'pending',
      source: 'Imported',
    });
    await addWorkProductReference(matterName, {
      workProductId: 'wp-001',
      type: 'draft_pleading',
      readiness: 'operator_review_ready',
      source: 'test',
    });

    const document = await loadCaseStateDocument(matterName);
    expect(document?.state.parties).toHaveLength(1);
    expect(document?.state.facts).toHaveLength(1);
    expect(document?.state.legalIssues).toHaveLength(1);
    expect(document?.state.risks).toHaveLength(1);
    expect(document?.state.openQuestions).toHaveLength(1);
    expect(document?.state.deadlines).toHaveLength(1);
    expect(document?.state.workProducts).toHaveLength(1);

    const snapshot = buildCaseStateSnapshot(document!);
    expect(snapshot.missing.length).toBe(0);
    expect(snapshot.done).toContain('parties identified');
    expect(snapshot.done).toContain('facts captured');
    expect(snapshot.done).toContain('issues identified');
    expect(snapshot.blocked).toContain('critical deadline pending');
    expect(snapshot.blocked).toContain('1 critical question(s) pending');
  });
});
