import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { describe, expect, it } from 'vitest';
import {
  assertCaseManagementBenchmark,
  type CaseManagementExpectation,
  type CaseManagementObservation,
  type CaseManagementWorkProductType,
} from './assertions/case-management.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('full case management benchmark', () => {
  it('passes only when a run produces the full case-management surface', async () => {
    const expectation = await loadFullCaseManagementExpectation();
    const result = assertCaseManagementBenchmark(expectation, completeObservation());

    expect(result.passed).toBe(true);
    expect(result.failures).toEqual([]);
    expect(result.metrics.legalDepth).toBeGreaterThanOrEqual(expectation.minMetricScores.legalDepth);
  });

  it('fails activity-style completion without case state, work products, review, handoff, and recovery', async () => {
    const expectation = await loadFullCaseManagementExpectation();
    const result = assertCaseManagementBenchmark(expectation, {
      matterName: expectation.matterName,
      caseState: {
        authoritative: false,
        jurisdictions: ['Scotland'],
        tracks: ['ordinary action'],
        primaryEvidenceSourceCount: 120,
        missingFactCount: 4,
      },
      workProducts: [{ type: 'draft_document', title: 'Thin draft', wordCount: 180, citationCount: 0, sourceIds: [] }],
      completion: { claimedComplete: true, readyForExternalAction: true },
      handoffReport: { completed: false, blockers: ['Missing primary evidence review'] },
      output: { junkFiles: ['debug.json'], reviewReadyFiles: [], rawCandidateFiles: ['candidate-wrapper.json'] },
      recovery: { interruptionSimulated: false },
      provider: { unsupportedToolCallCount: 1, jsonRetryRecovered: false },
      metrics: {
        legalDepth: 0.2,
        factualGrounding: 0.1,
        citationCoverage: 0,
        deadlineDetection: 0,
        questionQuality: 0,
        documentUsefulness: 0.1,
        recoveryCorrectness: 0,
        providerCompliance: 0,
        cost: 0.2,
      },
    });

    expect(result.passed).toBe(false);
    expect(result.failures).toEqual(
      expect.arrayContaining([
        'authoritative case state missing',
        'pending questions missing despite missing facts',
        'chronology missing or too thin',
        'evidence matrix missing or too thin',
        'issue map missing or too thin',
        'required work product missing: legal_research_memo',
        'required work product missing: procedural_route_memo',
        'required work product missing: merits_risk_memo',
        'work product too thin: draft_document',
        'hostile review missing',
        'handoff report missing',
        'false completion: completion claimed while blockers or questions remain',
        'false readiness: external action marked ready while blockers remain',
        'junk files present in _output',
        'raw candidate files present in _output',
        'interruption recovery was not exercised',
        'provider emitted unsupported tool calls',
      ]),
    );
  });

  it('fails when generated work product is used as primary evidence', async () => {
    const expectation = await loadFullCaseManagementExpectation();
    const observation = completeObservation();
    observation.caseState = {
      ...observation.caseState,
      generatedPrimaryEvidenceCount: 1,
    };
    observation.evidenceMatrix = [
      ...(observation.evidenceMatrix ?? []),
      {
        proposition: 'Generated draft proves the underlying factual dispute.',
        primarySourceIds: ['DRAFT-001'],
        generatedSourceIds: ['DRAFT-001'],
      },
    ];

    const result = assertCaseManagementBenchmark(expectation, observation);

    expect(result.passed).toBe(false);
    expect(result.failures).toEqual(
      expect.arrayContaining([
        'generated work product treated as primary evidence',
        'evidence matrix includes generated work product as evidence',
      ]),
    );
  });
});

async function loadFullCaseManagementExpectation(): Promise<CaseManagementExpectation> {
  const text = await readFile(join(__dirname, 'fixtures', 'full-case-management-expectations.json'), 'utf-8');
  return JSON.parse(text) as CaseManagementExpectation;
}

function completeObservation(): CaseManagementObservation {
  return {
    matterName: 'full-case-management-regression',
    caseState: {
      authoritative: true,
      jurisdictions: ['Scotland', 'Court of Session', 'University of Glasgow', 'SLCC'],
      tracks: ['ordinary action', 'judicial review', 'fitness to practise', 'SAR/data protection', 'student union', 'regulatory complaint'],
      primaryEvidenceSourceCount: 2771,
      generatedPrimaryEvidenceCount: 0,
      missingFactCount: 2,
      activeDeadlines: [{ date: '2026-05-29', sourceIds: ['OME-SRC-2713'] }],
    },
    pendingQuestions: [
      {
        question: 'Confirm whether the Court of Session petition has been served and on whom.',
        reason: 'Service status controls immediate procedural steps.',
        blocks: ['procedural route memo finalisation', 'external-action readiness'],
        qualityScore: 0.92,
      },
      {
        question: 'Confirm whether any SLCC limitation correspondence post-dates the current bundle.',
        reason: 'Limitation position changes regulatory complaint advice.',
        blocks: ['merits/risk memo finalisation'],
        qualityScore: 0.88,
      },
    ],
    chronology: entries('chronology', 8).map((entry, index) => ({
      date: `2025-07-${String(index + 1).padStart(2, '0')}`,
      event: entry,
      sourceIds: [`OME-SRC-${String(2700 + index).padStart(4, '0')}`],
    })),
    evidenceMatrix: entries('proposition', 8).map((entry, index) => ({
      proposition: entry,
      primarySourceIds: [`OME-SRC-${String(2720 + index).padStart(4, '0')}`],
    })),
    issueMap: entries('issue', 6).map((entry, index) => ({
      issue: entry,
      route: index % 2 === 0 ? 'Court of Session' : 'regulatory complaint',
      supportingEvidenceIds: [`OME-SRC-${String(2740 + index).padStart(4, '0')}`],
      risks: ['Source conflict requires operator review'],
    })),
    workProducts: [
      memo('legal_research_memo', 'Scottish legal research memo', 1250, 18),
      memo('procedural_route_memo', 'Procedural route memo', 980, 12),
      memo('merits_risk_memo', 'Merits and risk memo', 1100, 15),
      memo('draft_document', 'Draft petition adjustment note', 1450, 20),
    ],
    hostileReview: {
      completed: true,
      findingCount: 7,
      unresolvedCriticalFindingCount: 0,
    },
    handoffReport: {
      completed: true,
      nextActions: ['Answer pending service question', 'Review draft document before use'],
      blockers: [],
    },
    completion: {
      claimedComplete: false,
      readyForExternalAction: false,
    },
    output: {
      junkFiles: [],
      reviewReadyFiles: ['handoff-report.md', 'draft-petition-adjustment-note.docx'],
      rawCandidateFiles: [],
    },
    recovery: {
      interruptionSimulated: true,
      resumedFromCheckpoint: true,
      duplicatedWorkProductCount: 0,
      lostState: false,
    },
    provider: {
      unsupportedToolCallCount: 0,
      jsonRetryRecovered: true,
    },
    metrics: {
      legalDepth: 0.91,
      factualGrounding: 0.94,
      citationCoverage: 0.9,
      deadlineDetection: 0.86,
      questionQuality: 0.9,
      documentUsefulness: 0.87,
      recoveryCorrectness: 1,
      providerCompliance: 1,
      cost: 0.76,
    },
  };
}

function memo(
  type: CaseManagementWorkProductType,
  title: string,
  wordCount: number,
  citationCount: number,
): NonNullable<CaseManagementObservation['workProducts']>[number] {
  return {
    type,
    title,
    wordCount,
    citationCount,
    sourceIds: entries('OME-SRC', citationCount).map((_, index) => `OME-SRC-${String(2500 + index).padStart(4, '0')}`),
  };
}

function entries(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) => `${prefix} ${index + 1}`);
}
