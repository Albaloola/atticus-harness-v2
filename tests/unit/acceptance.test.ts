import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { computeGateScore, type GateScoringContext } from '../../src/acceptance/gate-score.js';
import { hasQuorum, aggregateFindings, getQuorumDecision } from '../../src/acceptance/review-quorum.js';
import { appendGateException, findStandingGateException, listGateExceptions, reuseStandingGateException } from '../../src/acceptance/gate-exceptions.js';
import type { CandidateArtifact, CandidateMetadata } from '../../src/types/artifact.js';
import type { AutonomyPolicy, ExternalActionMode } from '../../src/config/schema.js';
import type { HostileReview, ReviewSeverity, ReviewFindingType } from '../../src/types/review.js';
import { closeStateDb } from '../../src/state/store.js';
import { listEvents } from '../../src/state/events.js';
import { deleteMatter, initMatter } from '../../src/storage/matter.js';

vi.mock('../../src/storage/candidate.js', () => ({
  acceptCandidate: vi.fn(),
  listCandidates: vi.fn(),
  saveCandidate: vi.fn(),
}));

import { acceptCandidate, saveCandidate } from '../../src/storage/candidate.js';
import { tryAutoAccept, checkGates, requiresOperator, buildGateExceptionPolicyVersion } from '../../src/acceptance/auto-accept.js';

function makeCandidate(overrides: Partial<CandidateArtifact> = {}): CandidateArtifact {
  return {
    id: 'cand-001',
    matterName: 'test-matter',
    type: 'draft',
    title: 'Test Document',
    content: 'This is the full content of a test legal document. It references [EXH-SRC-001] and [EXH-SRC-002].',
    status: 'candidate',
    created: '2025-01-15T10:00:00.000Z',
    metadata: {
      citations: [
        { citationId: 'EXH-SRC-001', evidenceId: 'ev-001', quote: 'test quote', quoteHash: 'abc' },
        { citationId: 'EXH-SRC-002', evidenceId: 'ev-002', quote: 'test quote 2', quoteHash: 'def' },
      ],
    },
    ...overrides,
  };
}

function makePolicy(overrides: Partial<AutonomyPolicy> = {}): AutonomyPolicy {
  return {
    mode: 'auto_accept_gated',
    autoApproveTools: false,
    autoApproveReadOnly: true,
    autoApproveFileWrites: false,
    autoApproveShell: false,
    autoApproveWeb: false,
    autoAcceptCandidates: true,
    requireQualityGateForAcceptance: true,
    requireCitationVerificationForAcceptance: true,
    requireHostileReviewForAcceptance: true,
    minGateScoreForAutoAccept: 0.8,
    externalActionMode: 'prepare_only',
    allowExternalDispatch: false,
    maxConcurrentAgents: 15,
    maxAgentDepth: 3,
    gateFeedback: {
      enabled: true,
      maxWorkerRetries: 3,
      maxMiniOrchestratorRetries: 2,
      maxMasterOrchestratorRetries: 1,
      feedbackLevel: 'check-level',
    },
    ...overrides,
  };
}

const DEFAULT_POLICY = makePolicy();

function makeHostileReview(overrides: Partial<HostileReview> = {}): HostileReview {
  return {
    documentId: 'cand-001',
    documentTitle: 'Test Document',
    findings: [
      {
        id: 'f-1',
        type: 'ambiguity' as ReviewFindingType,
        severity: 'low' as ReviewSeverity,
        location: 'paragraph 1',
        description: 'Ambiguous wording',
        recommendation: 'Clarify',
      },
    ],
    summary: 'Minor issues only',
    overallRisk: 'low' as ReviewSeverity,
    reviewedAt: '2025-01-16T10:00:00.000Z',
    ...overrides,
  };
}

describe('gate-score', () => {
  describe('computeGateScore', () => {
    it('returns score 0.0 to 1.0 range', () => {
      const candidate = makeCandidate();
      const result = computeGateScore(candidate, {});
      expect(result.score).toBeGreaterThanOrEqual(0);
      expect(result.score).toBeLessThanOrEqual(1.0);
    });

    it('produces 10 gate checks', () => {
      const candidate = makeCandidate();
      const result = computeGateScore(candidate, {});
      expect(result.checks).toHaveLength(10);
    });

    it('has all required gate categories', () => {
      const candidate = makeCandidate();
      const result = computeGateScore(candidate, {});
      const names = result.checks.map(c => c.name);
      expect(names).toContain('Citation coverage');
      expect(names).toContain('Quote verification');
      expect(names).toContain('Evidence contradiction');
      expect(names).toContain('Dates/deadlines');
      expect(names).toContain('Jurisdiction/procedure');
      expect(names).toContain('Required fields');
      expect(names).toContain('Adversarial review');
      expect(names).toContain('Source freshness');
      expect(names).toContain('Hallucination sensitivity');
      expect(names).toContain('Operator handoff');
    });

    it('scores low for no citations', () => {
      const candidate = makeCandidate({
        content: 'No citations here at all in this document text with many words to pass length requirements for a full legal draft that has sufficient body text.',
        metadata: { citations: [] },
      });
      const result = computeGateScore(candidate, {});
      const citationCheck = result.checks.find(c => c.name === 'Citation coverage')!;
      expect(citationCheck.passed).toBe(false);
      expect(citationCheck.score).toBeLessThan(0.5);
    });

    it('scores high with dense citations', () => {
      const candidate = makeCandidate({
        content: 'Text with [EXH-SRC-001] many [EXH-SRC-002] citations [EXH-SRC-001] spread [EXH-SRC-002] throughout. Some additional [EXH-SRC-001] content [EXH-SRC-002] here [EXH-SRC-001] to fill [EXH-SRC-002] out more.',
      });
      const result = computeGateScore(candidate, {});
      const citationCheck = result.checks.find(c => c.name === 'Citation coverage')!;
      expect(citationCheck.score).toBeGreaterThanOrEqual(0.5);
    });

    it('full score for fully verified citations', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = {
        citationResult: {
          passed: true,
          summary: { total: 5, supported: 5, unsupported: 0, contradicted: 0, notChecked: 0 },
        },
      };
      const result = computeGateScore(candidate, context);
      const quoteCheck = result.checks.find(c => c.name === 'Quote verification')!;
      expect(quoteCheck.score).toBe(1.0);
      expect(quoteCheck.passed).toBe(true);
    });

    it('penalizes contradicted citations severely', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = {
        citationResult: {
          passed: false,
          summary: { total: 5, supported: 2, unsupported: 1, contradicted: 2, notChecked: 0 },
        },
      };
      const result = computeGateScore(candidate, context);
      const quoteCheck = result.checks.find(c => c.name === 'Quote verification')!;
      expect(quoteCheck.score).toBeLessThan(0.5);
      expect(quoteCheck.passed).toBe(false);
    });

    it('zero score for all-contradicted citations', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = {
        citationResult: {
          passed: false,
          summary: { total: 4, supported: 0, unsupported: 0, contradicted: 4, notChecked: 0 },
        },
      };
      const result = computeGateScore(candidate, context);
      const contradiction = result.checks.find(c => c.name === 'Evidence contradiction')!;
      expect(contradiction.score).toBe(0);
    });

    it('dates/deadlines check detects deadlines', () => {
      const candidate = makeCandidate({
        content: 'The filing deadline is 15 Jan 2025. The response is due on 1 February 2025. The court entered judgment on 15 March 2025.',
      });
      const result = computeGateScore(candidate, {});
      const dateCheck = result.checks.find(c => c.name === 'Dates/deadlines')!;
      expect(dateCheck.score).toBeGreaterThan(0.5);
      expect(dateCheck.passed).toBe(true);
    });

    it('dates/deadlines fails with no dates', () => {
      const candidate = makeCandidate({
        content: 'This document has no dates whatsoever in it and no references to any timeline whatsoever either.',
      });
      const result = computeGateScore(candidate, {});
      const dateCheck = result.checks.find(c => c.name === 'Dates/deadlines')!;
      expect(dateCheck.score).toBeLessThan(0.5);
    });

    it('jurisdiction check detects legal references', () => {
      const candidate = makeCandidate({
        content: 'Pursuant to Federal Rule of Civil Procedure 12(b)(6), this Court has jurisdiction under 28 U.S.C. § 1331. Venue is proper in this district under 28 U.S.C. § 1391. Per Local Rule 7.1, the party files this motion.',
      });
      const result = computeGateScore(candidate, {});
      const jdxCheck = result.checks.find(c => c.name === 'Jurisdiction/procedure')!;
      expect(jdxCheck.score).toBeGreaterThanOrEqual(0.4);
      expect(jdxCheck.passed).toBe(true);
    });

    it('jurisdiction check fails with no legal references', () => {
      const candidate = makeCandidate({
        content: 'This is a simple document without any legal references. It just describes events informally.',
      });
      const result = computeGateScore(candidate, {});
      const jdxCheck = result.checks.find(c => c.name === 'Jurisdiction/procedure')!;
      expect(jdxCheck.passed).toBe(false);
      expect(jdxCheck.score).toBeLessThan(0.5);
    });

    it('adversarial review — critical is zero score', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = { reviewSeverity: 'critical' };
      const result = computeGateScore(candidate, context);
      const reviewCheck = result.checks.find(c => c.name === 'Adversarial review')!;
      expect(reviewCheck.score).toBe(0);
      expect(reviewCheck.passed).toBe(false);
    });

    it('adversarial review — high is low score', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = { reviewSeverity: 'high' };
      const result = computeGateScore(candidate, context);
      const reviewCheck = result.checks.find(c => c.name === 'Adversarial review')!;
      expect(reviewCheck.score).toBeLessThan(0.5);
    });

    it('adversarial review — low is good score', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = { reviewSeverity: 'low' };
      const result = computeGateScore(candidate, context);
      const reviewCheck = result.checks.find(c => c.name === 'Adversarial review')!;
      expect(reviewCheck.score).toBeGreaterThanOrEqual(0.8);
      expect(reviewCheck.passed).toBe(true);
    });

    it('adversarial review — not performed is zero', () => {
      const candidate = makeCandidate();
      const result = computeGateScore(candidate, {});
      const reviewCheck = result.checks.find(c => c.name === 'Adversarial review')!;
      expect(reviewCheck.score).toBe(0);
    });

    it('hallucination check passes with clean content', () => {
      const candidate = makeCandidate({
        content: 'The witness testified that the agreement was signed on the specified date. All claims are supported by submitted evidence.',
      });
      const result = computeGateScore(candidate, {});
      const hallucCheck = result.checks.find(c => c.name === 'Hallucination sensitivity')!;
      expect(hallucCheck.score).toBe(1.0);
      expect(hallucCheck.passed).toBe(true);
    });

    it('hallucination check detects hallucination signals', () => {
      const candidate = makeCandidate({
        content: 'The plaintiff made an unverified assumption about the contract terms. According to sources that do not exist, the defendant agreed.',
      });
      const result = computeGateScore(candidate, {});
      const hallucCheck = result.checks.find(c => c.name === 'Hallucination sensitivity')!;
      expect(hallucCheck.score).toBeLessThanOrEqual(0.6);
      expect(hallucCheck.passed).toBe(false);
    });

    it('operator handoff check detects action items', () => {
      const candidate = makeCandidate({
        content: 'Action items:\n1. File this document with the clerk\n2. Serve on opposing counsel\n3. Send copy to client\nNext steps: operator must dispatch within 7 days.',
      });
      const result = computeGateScore(candidate, {});
      const handoffCheck = result.checks.find(c => c.name === 'Operator handoff')!;
      expect(handoffCheck.score).toBeGreaterThanOrEqual(0.5);
    });

    it('source freshness scores high for recent evidence', () => {
      const candidate = makeCandidate();
      const recentDate = new Date();
      const context: GateScoringContext = {
        evidenceDates: [
          recentDate.toISOString(),
          new Date(recentDate.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        ],
      };
      const result = computeGateScore(candidate, context);
      const freshnessCheck = result.checks.find(c => c.name === 'Source freshness')!;
      expect(freshnessCheck.score).toBeGreaterThanOrEqual(0.7);
      expect(freshnessCheck.passed).toBe(true);
    });

    it('source freshness penalizes stale evidence', () => {
      const candidate = makeCandidate();
      const context: GateScoringContext = {
        evidenceDates: ['2010-01-01T00:00:00.000Z', '2012-01-01T00:00:00.000Z'],
      };
      const result = computeGateScore(candidate, context);
      const freshnessCheck = result.checks.find(c => c.name === 'Source freshness')!;
      expect(freshnessCheck.score).toBeLessThan(0.5);
    });

    it('required fields check detects document structure', () => {
      const candidate = makeCandidate({
        content: '# Document Title\n\n## Section One\n\nThis section contains substantial body text that provides the necessary content for a proper legal document with sufficient length to meet basic requirements for word counting purposes in testing.\n\n## Section Two\n\nAdditional body text here for completeness and to ensure we have more than fifty words in total so the check passes properly.\n\n## Section Three\n\nEven more text content to really make sure the word count threshold is met without any doubt whatsoever.',
      });
      const result = computeGateScore(candidate, {});
      const fieldsCheck = result.checks.find(c => c.name === 'Required fields')!;
      expect(fieldsCheck.score).toBeGreaterThanOrEqual(0.6);
      expect(fieldsCheck.passed).toBe(true);
    });

    it('required fields — custom fields checked', () => {
      const candidate = makeCandidate({
        content: 'This document has a case caption and a signature block.',
      });
      const context: GateScoringContext = {
        requiredFields: ['caption', 'signature'],
      };
      const result = computeGateScore(candidate, context);
      const fieldsCheck = result.checks.find(c => c.name === 'Required fields')!;
      expect(fieldsCheck.score).toBeGreaterThanOrEqual(0.5);
    });

    it('near-perfect gate score with everything passing', () => {
      const candidate = makeCandidate({
        content: 'The filing deadline is 15 Jan 2025 in the District Court under FRCP Rule 56. [EXH-SRC-001] supports this claim [EXH-SRC-002]. Action: file with clerk. Next steps: 1. File document 2. Serve opposing counsel.',
      });
      const recentDate = new Date().toISOString();
      const context: GateScoringContext = {
        citationResult: {
          passed: true,
          summary: { total: 5, supported: 5, unsupported: 0, contradicted: 0, notChecked: 0 },
        },
        reviewSeverity: 'low',
        reviewFindings: 2,
        evidenceDates: [recentDate],
      };
      const result = computeGateScore(candidate, context);
      expect(result.score).toBeGreaterThanOrEqual(0.7);
    });
  });
});

describe('auto-accept', () => {
  describe('tryAutoAccept', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it('rejects when autoAcceptCandidates is false', async () => {
      const candidate = makeCandidate();
      const policy = makePolicy({ autoAcceptCandidates: false });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(false);
      expect(result.reason).toContain('disabled');
    });

    it('rejects external action when disabled', async () => {
      const candidate = makeCandidate({
        title: 'Demand Letter to Defendant',
        content: 'This is a demand letter that must be served on the defendant. It includes a filing reference.',
      });
      const policy = makePolicy({ externalActionMode: 'disabled' });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(false);
      expect(result.reason).toContain('disabled');
    });

    it('rejects external action when operator required', async () => {
      const candidate = makeCandidate({
        title: 'Complaint Filing',
        content: 'This document is a complaint to be filed with the court. Contains motion and filing references.',
      });
      const policy = makePolicy({
        externalActionMode: 'operator_required_to_send',
        allowExternalDispatch: false,
      });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(false);
    });

    it('rejects when hostile review is critical', async () => {
      const candidate = makeCandidate();
      const policy = makePolicy({ requireHostileReviewForAcceptance: true });
      const result = await tryAutoAccept(candidate, 'test-matter', policy, {
        reviewSeverity: 'critical',
        citationResult: {
          passed: true,
          summary: { total: 5, supported: 5, unsupported: 0, contradicted: 0, notChecked: 0 },
        },
      });
      expect(result.accepted).toBe(false);
      expect(result.reason).toContain('critical');
    });

    it('rejects when gate score below minimum', async () => {
      const candidate = makeCandidate({
        content: 'minimal',
        metadata: { citations: [] },
      });
      const policy = makePolicy({
        minGateScoreForAutoAccept: 0.9,
        requireHostileReviewForAcceptance: false,
        requireCitationVerificationForAcceptance: false,
      });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(false);
      expect(result.gateScore).toBeDefined();
      expect(result.gateScore!).toBeLessThan(0.9);
    });

    it('returns structured gate feedback when gate score is below minimum', async () => {
      const candidate = makeCandidate({
        content: 'minimal',
        metadata: {
          citations: [
            { citationId: 'EXH-SRC-404', evidenceId: 'ev-missing', quote: 'unsupported' },
          ],
          priorAttemptIds: ['cand-prev'],
          supersedesCandidateId: 'cand-prev',
        },
      });
      const policy = makePolicy({
        minGateScoreForAutoAccept: 0.9,
        requireHostileReviewForAcceptance: false,
        requireCitationVerificationForAcceptance: false,
      });

      const result = await tryAutoAccept(candidate, 'test-matter', policy);

      expect(result.accepted).toBe(false);
      expect(result.gateFeedback).toMatchObject({
        candidateId: 'cand-001',
        threshold: 0.9,
        achievedScore: result.gateScore,
        priorAttemptIds: ['cand-prev'],
        supersedesCandidateId: 'cand-prev',
        evidenceRefs: ['ev-missing'],
        citationRefs: ['EXH-SRC-404'],
      });
      expect(result.gateFeedback?.failedChecks.length).toBeGreaterThan(0);
      expect(result.gateFeedback?.locations.length).toBeGreaterThan(0);
      expect(candidate.metadata.gateFeedback).toEqual(result.gateFeedback);
    });

    it('persists gate feedback and emits an event when matter state exists', async () => {
      const matterName = 'test-gate-feedback';
      await initMatter(matterName);
      try {
        const candidate = makeCandidate({
          matterName,
          content: 'minimal',
          metadata: { citations: [] },
        });
        const policy = makePolicy({
          minGateScoreForAutoAccept: 0.9,
          requireHostileReviewForAcceptance: false,
          requireCitationVerificationForAcceptance: false,
        });

        const result = await tryAutoAccept(candidate, matterName, policy);

        expect(result.accepted).toBe(false);
        expect(saveCandidate).toHaveBeenCalledWith(
          matterName,
          expect.objectContaining({
            metadata: expect.objectContaining({
              gateFeedback: result.gateFeedback,
            }),
          }),
        );
        const feedbackEvents = listEvents(matterName, { type: 'case.quality_gate.feedback_created' });
        expect(feedbackEvents).toHaveLength(1);
        expect(feedbackEvents[0].data).toMatchObject({
          candidateId: candidate.id,
          feedbackId: result.gateFeedback?.feedbackId,
          achievedScore: result.gateFeedback?.achievedScore,
          threshold: 0.9,
          gateFeedback: result.gateFeedback,
        });
      } finally {
        closeStateDb(matterName);
        await deleteMatter(matterName);
      }
    });

    it('accepts a below-threshold candidate only when all failed checks have exact standing exceptions', async () => {
      const matterName = 'test-gate-exception-accept';
      await initMatter(matterName);
      try {
        const candidate = makeCandidate({
          matterName,
          content: 'minimal',
          metadata: { citations: [] },
        });
        const policy = makePolicy({
          minGateScoreForAutoAccept: 0.9,
          requireHostileReviewForAcceptance: false,
          requireCitationVerificationForAcceptance: false,
        });

        const firstAttempt = await tryAutoAccept(candidate, matterName, policy);
        expect(firstAttempt.accepted).toBe(false);
        expect(firstAttempt.gateFeedback?.failedChecks.length).toBeGreaterThan(0);

        for (const failedCheck of firstAttempt.gateFeedback!.failedChecks) {
          await appendGateException(matterName, {
            candidateId: candidate.id,
            gateCheckFailed: failedCheck.name,
            reason: `Standing exception for ${failedCheck.name}`,
            authorisedBy: 'master_orchestrator',
            permanentRule: true,
            match: {
              policyVersion: buildGateExceptionPolicyVersion(policy),
              evidenceRefs: firstAttempt.gateFeedback!.evidenceRefs,
              citationRefs: firstAttempt.gateFeedback!.citationRefs,
              locations: firstAttempt.gateFeedback!.locations,
            },
          });
        }
        vi.mocked(acceptCandidate).mockResolvedValue({
          id: 'artifact-with-exceptions',
          matterName,
          type: 'draft',
          title: 'Accepted With Exceptions',
          content: 'content',
          accepted: '2025-01-16T10:00:00.000Z',
          acceptedFrom: candidate.id,
          citations: [],
        });

        const secondAttempt = await tryAutoAccept(candidate, matterName, policy);

        expect(secondAttempt.accepted).toBe(true);
        expect(secondAttempt.acceptedWithGateExceptions).toBe(true);
        expect(secondAttempt.exceptionIds).toHaveLength(firstAttempt.gateFeedback!.failedChecks.length);
        expect(listEvents(matterName, { type: 'case.quality_gate.exception_reused' }))
          .toHaveLength(firstAttempt.gateFeedback!.failedChecks.length);
      } finally {
        closeStateDb(matterName);
        await deleteMatter(matterName);
      }
    });

    it('rejects when citation verification not passed', async () => {
      const candidate = makeCandidate();
      const policy = makePolicy({ requireCitationVerificationForAcceptance: true, requireQualityGateForAcceptance: false, requireHostileReviewForAcceptance: false });
      const result = await tryAutoAccept(candidate, 'test-matter', policy, {
        citationResult: { passed: false, summary: { total: 3, supported: 1, unsupported: 2, contradicted: 0, notChecked: 0 } },
      });
      expect(result.accepted).toBe(false);
      expect(result.reason).toContain('Citation verification');
    });

    it('rejects when hostile review not performed', async () => {
      const candidate = makeCandidate();
      const policy = makePolicy({ requireHostileReviewForAcceptance: true, requireQualityGateForAcceptance: false, requireCitationVerificationForAcceptance: false });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(false);
      expect(result.reason).toContain('Hostile review');
    });

    it('accepts when all conditions met', async () => {
      vi.mocked(acceptCandidate).mockResolvedValue({
        id: 'cand-001',
        matterName: 'test-matter',
        type: 'draft',
        title: 'Accepted Document',
        content: 'content',
        accepted: '2025-01-16T10:00:00.000Z',
        acceptedFrom: 'cand-001',
        citations: [],
      });

      const candidate = makeCandidate({
        content: 'This is a standard legal analysis document. It references [EXH-SRC-001] and [EXH-SRC-002].',
      });
      const policy = makePolicy({
        requireQualityGateForAcceptance: false,
        requireCitationVerificationForAcceptance: false,
        requireHostileReviewForAcceptance: false,
      });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(true);
      expect(result.artifactId).toBe('cand-001');
      expect(result.prepareOnly).toBe(false);
    });

    it('marks external action as prepareOnly', async () => {
      vi.mocked(acceptCandidate).mockResolvedValue({
        id: 'cand-001',
        matterName: 'test-matter',
        type: 'draft',
        title: 'Service Letter',
        content: 'content',
        accepted: '2025-01-16T10:00:00.000Z',
        acceptedFrom: 'cand-001',
        citations: [],
      });

      const candidate = makeCandidate({
        title: 'Letter to Opposing Counsel',
        content: 'This letter must be served on the opposing party.',
      });
      const policy = makePolicy({
        externalActionMode: 'prepare_only',
        allowExternalDispatch: false,
        requireQualityGateForAcceptance: false,
        requireCitationVerificationForAcceptance: false,
        requireHostileReviewForAcceptance: false,
      });
      const result = await tryAutoAccept(candidate, 'test-matter', policy);
      expect(result.accepted).toBe(true);
      expect(result.prepareOnly).toBe(true);
    });
  });

  describe('requiresOperator', () => {
    it('detects letters as external action', () => {
      const candidate = makeCandidate({ title: 'Demand Letter' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects filings as external action', () => {
      const candidate = makeCandidate({ title: 'Court Filing' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects complaints as external action', () => {
      const candidate = makeCandidate({ title: 'Verified Complaint' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects motions as external action', () => {
      const candidate = makeCandidate({ title: 'Motion for Summary Judgment' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects notices as external action', () => {
      const candidate = makeCandidate({ title: 'Notice of Appearance' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects subpoenas as external action', () => {
      const candidate = makeCandidate({ title: 'Subpoena Duces Tecum' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects settlement as external action', () => {
      const candidate = makeCandidate({ title: 'Settlement Agreement' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('detects invoice as external action', () => {
      const candidate = makeCandidate({ title: 'Legal Invoice' });
      expect(requiresOperator(candidate)).toBe(true);
    });

    it('does not flag analysis as external', () => {
      const candidate = makeCandidate({ title: 'Legal Analysis Memo', type: 'analysis' });
      expect(requiresOperator(candidate)).toBe(false);
    });

    it('does not flag report as external', () => {
      const candidate = makeCandidate({ title: 'Case Status Report', type: 'report' });
      expect(requiresOperator(candidate)).toBe(false);
    });
  });

  describe('checkGates', () => {
    it('returns a GateResult from computeGateScore', () => {
      const candidate = makeCandidate();
      const result = checkGates(candidate, {});
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('checks');
      expect(result).toHaveProperty('passed');
      expect(result.checks).toHaveLength(10);
    });
  });
});

describe('gate exceptions', () => {
  const matterName = 'test-gate-exceptions';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('stores append-only exception records and reuses only exact standing matches', async () => {
    const locations = [{ kind: 'candidate' as const, path: 'candidate:cand-001', label: 'Citation coverage' }];
    const exception = await appendGateException(matterName, {
      candidateId: 'cand-001',
      gateCheckFailed: 'Citation coverage',
      reason: 'Evidence set lacks the expected citation format but source support is present.',
      authorisedBy: 'master_orchestrator',
      permanentRule: true,
      match: {
        policyVersion: 'v1',
        evidenceRefs: ['ev-001'],
        citationRefs: ['EXH-SRC-001'],
        locations,
      },
    });

    const stored = await listGateExceptions(matterName);
    expect(stored).toHaveLength(1);
    expect(stored[0].exceptionId).toBe(exception.exceptionId);

    const exact = await findStandingGateException(matterName, {
      gateCheckFailed: 'Citation coverage',
      policyVersion: 'v1',
      evidenceRefs: ['ev-001'],
      citationRefs: ['EXH-SRC-001'],
      locations,
    });
    expect(exact?.exception.exceptionId).toBe(exception.exceptionId);
    expect(exact?.nonMatchingFields).toEqual([]);

    const reused = await reuseStandingGateException(matterName, {
      candidateId: 'cand-002',
      authorisedBy: 'master_orchestrator',
      gateCheckFailed: 'Citation coverage',
      policyVersion: 'v1',
      evidenceRefs: ['ev-001'],
      citationRefs: ['EXH-SRC-001'],
      locations,
    });
    expect(reused?.exception.exceptionId).toBe(exception.exceptionId);
    const reuseEvents = listEvents(matterName, { type: 'case.quality_gate.exception_reused' });
    expect(reuseEvents).toHaveLength(1);
    expect(reuseEvents[0].data).toMatchObject({
      exceptionId: exception.exceptionId,
      candidateId: 'cand-002',
      gateCheckFailed: 'Citation coverage',
      authorisedBy: 'master_orchestrator',
      matchingFields: ['matterName', 'gateCheckFailed', 'policyVersion', 'evidenceRefs', 'citationRefs', 'locations'],
      nonMatchingFields: [],
    });

    const partial = await findStandingGateException(matterName, {
      gateCheckFailed: 'Citation coverage',
      policyVersion: 'v1',
      evidenceRefs: ['ev-001'],
      citationRefs: ['EXH-SRC-999'],
      locations,
    });
    expect(partial).toBeNull();

    const partialReuse = await reuseStandingGateException(matterName, {
      candidateId: 'cand-003',
      authorisedBy: 'master_orchestrator',
      gateCheckFailed: 'Citation coverage',
      policyVersion: 'v1',
      evidenceRefs: ['ev-001'],
      citationRefs: ['EXH-SRC-999'],
      locations,
    });
    expect(partialReuse).toBeNull();
    expect(listEvents(matterName, { type: 'case.quality_gate.exception_reused' })).toHaveLength(1);
  });
});

describe('review-quorum', () => {
  describe('hasQuorum', () => {
    it('returns false with no reviews', () => {
      const candidate = makeCandidate();
      expect(hasQuorum(candidate, 1)).toBe(false);
    });

    it('returns false when reviews below threshold', () => {
      const candidate = makeCandidate();
      const context = {
        storedReviews: [makeHostileReview()],
      };
      expect(hasQuorum(candidate, 2, context)).toBe(false);
    });

    it('returns true when reviews meet threshold', () => {
      const candidate = makeCandidate();
      const context = {
        storedReviews: [makeHostileReview(), makeHostileReview()],
      };
      expect(hasQuorum(candidate, 2, context)).toBe(true);
    });

    it('returns true when reviews exceed threshold', () => {
      const candidate = makeCandidate();
      const context = {
        storedReviews: [makeHostileReview(), makeHostileReview(), makeHostileReview()],
      };
      expect(hasQuorum(candidate, 2, context)).toBe(true);
    });
  });

  describe('aggregateFindings', () => {
    it('aggregates empty reviews', () => {
      const result = aggregateFindings([]);
      expect(result.totalFindings).toBe(0);
      expect(result.highestSeverity).toBe('info');
    });

    it('counts findings by severity', () => {
      const reviews: HostileReview[] = [
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'factual_error' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p1', description: 'Error', recommendation: 'Fix' },
            { id: 'f2', type: 'omission' as ReviewFindingType, severity: 'medium' as ReviewSeverity, location: 'p2', description: 'Gap', recommendation: 'Fill' },
          ],
        }),
      ];
      const result = aggregateFindings(reviews);
      expect(result.totalFindings).toBe(2);
      expect(result.bySeverity.high).toBe(1);
      expect(result.bySeverity.medium).toBe(1);
    });

    it('aggregates findings from multiple reviews', () => {
      const reviews: HostileReview[] = [
        makeHostileReview({
          findings: [
            { id: 'a1', type: 'ambiguity' as ReviewFindingType, severity: 'low' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
          ],
          overallRisk: 'low' as ReviewSeverity,
        }),
        makeHostileReview({
          findings: [
            { id: 'b1', type: 'citation_issue' as ReviewFindingType, severity: 'medium' as ReviewSeverity, location: 'p2', description: 'x', recommendation: 'y' },
            { id: 'b2', type: 'risk' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p3', description: 'x', recommendation: 'y' },
          ],
          overallRisk: 'high' as ReviewSeverity,
        }),
      ];
      const result = aggregateFindings(reviews);
      expect(result.totalFindings).toBe(3);
      expect(result.highestSeverity).toBe('high');
      expect(result.bySeverity.low).toBe(1);
      expect(result.bySeverity.medium).toBe(1);
      expect(result.bySeverity.high).toBe(1);
    });

    it('tracks highest severity across reviews', () => {
      const reviews: HostileReview[] = [
        makeHostileReview({ overallRisk: 'medium' as ReviewSeverity }),
        makeHostileReview({ overallRisk: 'critical' as ReviewSeverity }),
        makeHostileReview({ overallRisk: 'low' as ReviewSeverity }),
      ];
      const result = aggregateFindings(reviews);
      expect(result.highestSeverity).toBe('critical');
    });

    it('counts findings by type', () => {
      const reviews: HostileReview[] = [
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'factual_error' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
            { id: 'f2', type: 'legal_error' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p2', description: 'x', recommendation: 'y' },
            { id: 'f3', type: 'factual_error' as ReviewFindingType, severity: 'medium' as ReviewSeverity, location: 'p3', description: 'x', recommendation: 'y' },
          ],
        }),
      ];
      const result = aggregateFindings(reviews);
      expect(result.byType.factual_error).toBe(2);
      expect(result.byType.legal_error).toBe(1);
    });
  });

  describe('getQuorumDecision', () => {
    it('rejects when critical findings present', () => {
      const findings = aggregateFindings([
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'risk' as ReviewFindingType, severity: 'critical' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
          ],
        }),
      ]);
      expect(getQuorumDecision(findings, 2)).toBe('reject');
    });

    it('rejects when high findings exceed threshold', () => {
      const findings = aggregateFindings([
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'risk' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
            { id: 'f2', type: 'risk' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p2', description: 'x', recommendation: 'y' },
            { id: 'f3', type: 'risk' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p3', description: 'x', recommendation: 'y' },
          ],
        }),
      ]);
      expect(getQuorumDecision(findings, 2)).toBe('reject');
    });

    it('needs more review when high findings exist', () => {
      const findings = aggregateFindings([
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'risk' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
          ],
        }),
      ]);
      expect(getQuorumDecision(findings, 2)).toBe('needs_more_review');
    });

    it('accepts when only low/info findings', () => {
      const findings = aggregateFindings([
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'ambiguity' as ReviewFindingType, severity: 'low' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
            { id: 'f2', type: 'structural' as ReviewFindingType, severity: 'info' as ReviewSeverity, location: 'p2', description: 'x', recommendation: 'y' },
          ],
          overallRisk: 'low' as ReviewSeverity,
        }),
      ]);
      expect(getQuorumDecision(findings, 2)).toBe('accept');
    });

    it('needs more review for high+medium combo above threshold', () => {
      const findings = aggregateFindings([
        makeHostileReview({
          findings: [
            { id: 'f1', type: 'risk' as ReviewFindingType, severity: 'high' as ReviewSeverity, location: 'p1', description: 'x', recommendation: 'y' },
            { id: 'f2', type: 'risk' as ReviewFindingType, severity: 'medium' as ReviewSeverity, location: 'p2', description: 'x', recommendation: 'y' },
            { id: 'f3', type: 'risk' as ReviewFindingType, severity: 'medium' as ReviewSeverity, location: 'p3', description: 'x', recommendation: 'y' },
            { id: 'f4', type: 'risk' as ReviewFindingType, severity: 'medium' as ReviewSeverity, location: 'p4', description: 'x', recommendation: 'y' },
          ],
          overallRisk: 'high' as ReviewSeverity,
        }),
      ]);
      const result = getQuorumDecision(findings, 1);
      expect(result).toBe('needs_more_review');
    });
  });
});
