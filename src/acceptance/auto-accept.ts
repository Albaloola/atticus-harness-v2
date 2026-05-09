import { acceptCandidate, saveCandidate } from '../storage/candidate.js';
import type { CandidateArtifact } from '../types/artifact.js';
import type { AutonomyPolicy } from '../config/schema.js';
import type { ReviewSeverity } from '../types/review.js';
import { computeGateScore, type GateResult, type GateScoringContext } from './gate-score.js';
import { buildGateFeedbackPacket, type GateFeedbackPacket } from './gate-feedback.js';
import {
  findStandingGateException,
  reuseStandingGateException,
  type StandingGateExceptionMatch,
} from './gate-exceptions.js';
import { hasQuorum, aggregateFindings, getQuorumDecision, type QuorumContext } from './review-quorum.js';
import { stateDbExists } from '../state/store.js';
import { appendEvent } from '../state/events.js';
import { listFindings } from '../findings/finding-store.js';
import { evaluateFindingCriticalityGate, isCriticalFinding } from '../review/criticality.js';

export interface AutoAcceptResult {
  accepted: boolean;
  reason?: string;
  artifactId?: string;
  gateScore?: number;
  prepareOnly?: boolean;
  gateFeedback?: GateFeedbackPacket;
  acceptedWithGateExceptions?: boolean;
  exceptionIds?: string[];
}

const EXTERNAL_ACTION_TERMS = [
  'letter', 'form', 'filing', 'complaint', 'motion', 'notice',
  'subpoena', 'service', 'demand', 'correspondence',
  'payment', 'invoice', 'settlement',
];

function isExternalActionArtifact(candidate: CandidateArtifact): boolean {
  const searchText = `${candidate.title} ${candidate.type} ${candidate.content}`.toLowerCase();
  return EXTERNAL_ACTION_TERMS.some(term => searchText.includes(term));
}

export function requiresOperator(candidate: CandidateArtifact): boolean {
  return isExternalActionArtifact(candidate);
}

export function checkGates(candidate: CandidateArtifact, context: GateScoringContext): GateResult {
  return computeGateScore(candidate, context);
}

export interface TryAutoAcceptContext {
  citationResult?: GateScoringContext['citationResult'];
  reviewSeverity?: ReviewSeverity;
  reviewFindings?: number;
  evidenceDates?: string[];
  requiredFields?: string[];
  operatorHandoffNotes?: string;
  storedReviews?: QuorumContext['storedReviews'];
}

export async function tryAutoAccept(
  candidate: CandidateArtifact,
  matterName: string,
  policy: AutonomyPolicy,
  context?: TryAutoAcceptContext
): Promise<AutoAcceptResult> {
  if (!policy.autoAcceptCandidates) {
    return { accepted: false, reason: 'Auto-accept is disabled in autonomy policy' };
  }

  if (isExternalActionArtifact(candidate)) {
    if (policy.externalActionMode === 'disabled') {
      return { accepted: false, reason: 'External action artifacts are disabled by policy' };
    }
    if (!policy.allowExternalDispatch) {
      if (policy.externalActionMode === 'prepare_only' || policy.externalActionMode === 'prepare_bundle_only') {
        return await doAccept(candidate, matterName, policy, context, true);
      }

      return { accepted: false, reason: 'External action artifacts require operator dispatch by policy' };
    }
  }

  return await doAccept(candidate, matterName, policy, context, false);
}

async function doAccept(
  candidate: CandidateArtifact,
  matterName: string,
  policy: AutonomyPolicy,
  context: TryAutoAcceptContext | undefined,
  prepareOnly: boolean,
): Promise<AutoAcceptResult> {
  if (policy.requireHostileReviewForAcceptance) {
    if (!context?.reviewSeverity) {
      return { accepted: false, reason: 'Hostile review required but not performed' };
    }
    if (context.reviewSeverity === 'critical') {
      return { accepted: false, reason: 'Hostile review severity is critical — cannot auto-accept' };
    }
    if (prepareOnly && context.reviewSeverity === 'high') {
      return { accepted: false, reason: 'Hostile review severity is high — operator review needed for external artifact' };
    }
  }

  if (policy.requireCitationVerificationForAcceptance) {
    if (!context?.citationResult || !context.citationResult.passed) {
      return { accepted: false, reason: 'Citation verification required but not passed' };
    }
  }

  let gateScore: number | undefined;
  if (policy.requireQualityGateForAcceptance) {
    const gateCtx: GateScoringContext = {
      citationResult: context?.citationResult,
      reviewSeverity: context?.reviewSeverity,
      reviewFindings: context?.reviewFindings,
      evidenceDates: context?.evidenceDates,
      requiredFields: context?.requiredFields,
      operatorHandoffNotes: context?.operatorHandoffNotes,
    };
    const gateResult = computeGateScore(candidate, gateCtx);
    gateScore = gateResult.score;

    if (gateResult.score < policy.minGateScoreForAutoAccept) {
      return await handleGateFailure(candidate, matterName, policy, gateResult, prepareOnly);
    }
  }

  const criticalLegalBlocker = getCriticalAutoAcceptBlocker(matterName);
  if (criticalLegalBlocker) {
    return { accepted: false, reason: criticalLegalBlocker };
  }

  try {
    const artifact = await acceptCandidate(matterName, candidate.id);
    return {
      accepted: true,
      reason: prepareOnly ? 'Accepted as prepare-only (external action artifact)' : 'All gates and checks passed',
      artifactId: artifact.id,
      gateScore,
      prepareOnly,
    };
  } catch (err: unknown) {
    return { accepted: false, reason: `Accept failed: ${(err as Error).message}` };
  }
}

async function handleGateFailure(
  candidate: CandidateArtifact,
  matterName: string,
  policy: AutonomyPolicy,
  gateResult: GateResult,
  prepareOnly: boolean,
): Promise<AutoAcceptResult> {
  const threshold = policy.minGateScoreForAutoAccept;
  const reasonSuffix = prepareOnly ? ' for prepare-only external artifact' : '';
  const gateFeedback = buildGateFeedbackPacket(candidate, matterName, gateResult, threshold);
  candidate.metadata.gateFeedback = gateFeedback;

  if (stateDbExists(matterName)) {
    await saveCandidate(matterName, candidate);
    await appendEvent({
      matterName,
      type: 'case.quality_gate.feedback_created',
      source: 'auto-accept',
      data: {
        candidateId: candidate.id,
        feedbackId: gateFeedback.feedbackId,
        achievedScore: gateFeedback.achievedScore,
        threshold,
        policyVersion: buildGateExceptionPolicyVersion(policy),
        gateFeedback,
        failedChecks: gateFeedback.failedChecks.map((check) => check.name),
        priorAttemptIds: gateFeedback.priorAttemptIds,
        supersedesCandidateId: gateFeedback.supersedesCandidateId,
      },
    });
  }

  const reusableExceptions = await findReusableExceptionsForFeedback(matterName, policy, gateFeedback);
  if (reusableExceptions.length === gateFeedback.failedChecks.length && reusableExceptions.length > 0) {
    const criticalLegalBlocker = getCriticalAutoAcceptBlocker(matterName);
    if (criticalLegalBlocker) {
      return {
        accepted: false,
        reason: criticalLegalBlocker,
        gateScore: gateResult.score,
        gateFeedback,
        exceptionIds: reusableExceptions.map((match) => match.exception.exceptionId),
      };
    }

    const exceptionIds: string[] = [];
    for (const match of reusableExceptions) {
      await reuseStandingGateException(matterName, {
        candidateId: candidate.id,
        authorisedBy: 'master_orchestrator',
        gateCheckFailed: match.exception.gateCheckFailed,
        policyVersion: match.exception.match.policyVersion,
        evidenceRefs: match.exception.match.evidenceRefs,
        citationRefs: match.exception.match.citationRefs,
        locations: match.exception.match.locations,
      });
      exceptionIds.push(match.exception.exceptionId);
    }

    try {
      const artifact = await acceptCandidate(matterName, candidate.id);
      return {
        accepted: true,
        reason: `Accepted with standing gate exception${exceptionIds.length === 1 ? '' : 's'}`,
        artifactId: artifact.id,
        gateScore: gateResult.score,
        prepareOnly,
        gateFeedback,
        acceptedWithGateExceptions: true,
        exceptionIds,
      };
    } catch (err: unknown) {
      return {
        accepted: false,
        reason: `Accept failed: ${(err as Error).message}`,
        gateScore: gateResult.score,
        gateFeedback,
        exceptionIds,
      };
    }
  }

  return {
    accepted: false,
    reason: `Gate score ${gateResult.score} below minimum ${threshold}${reasonSuffix}`,
    gateScore: gateResult.score,
    gateFeedback,
  };
}

export function buildGateExceptionPolicyVersion(policy: AutonomyPolicy): string {
  return [
    'quality-gate:v1',
    `mode=${policy.mode}`,
    `min=${policy.minGateScoreForAutoAccept}`,
    `quality=${policy.requireQualityGateForAcceptance}`,
    `citation=${policy.requireCitationVerificationForAcceptance}`,
    `hostile=${policy.requireHostileReviewForAcceptance}`,
  ].join(';');
}

async function findReusableExceptionsForFeedback(
  matterName: string,
  policy: AutonomyPolicy,
  gateFeedback: GateFeedbackPacket,
): Promise<StandingGateExceptionMatch[]> {
  if (!stateDbExists(matterName) || gateFeedback.failedChecks.length === 0) return [];

  const policyVersion = buildGateExceptionPolicyVersion(policy);
  const matches: StandingGateExceptionMatch[] = [];
  for (const failedCheck of gateFeedback.failedChecks) {
    const match = await findStandingGateException(matterName, {
      gateCheckFailed: failedCheck.name,
      policyVersion,
      evidenceRefs: gateFeedback.evidenceRefs,
      citationRefs: gateFeedback.citationRefs,
      locations: gateFeedback.locations,
    });
    if (!match) return [];
    matches.push(match);
  }
  return matches;
}

function getCriticalAutoAcceptBlocker(matterName: string): string | undefined {
  if (!stateDbExists(matterName)) return undefined;
  const criticalFindings = listFindings(matterName).filter(isCriticalFinding);
  for (const finding of criticalFindings) {
    const gate = evaluateFindingCriticalityGate(matterName, finding);
    if (!gate.passed) {
      return `Critical finding ${finding.findingId} is blocked: ${gate.blockers.map((blocker) => blocker.reason).join('; ')}`;
    }
  }
  return undefined;
}
