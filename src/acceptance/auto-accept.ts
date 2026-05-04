import { acceptCandidate } from '../storage/candidate.js';
import type { CandidateArtifact, Artifact } from '../types/artifact.js';
import type { AutonomyPolicy } from '../config/schema.js';
import type { ReviewSeverity } from '../types/review.js';
import { computeGateScore, type GateResult, type GateScoringContext } from './gate-score.js';
import { hasQuorum, aggregateFindings, getQuorumDecision, type QuorumContext } from './review-quorum.js';

export interface AutoAcceptResult {
  accepted: boolean;
  reason?: string;
  artifactId?: string;
  gateScore?: number;
  prepareOnly?: boolean;
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

interface TryAutoAcceptContext {
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
          if (gateResult.score < policy.minGateScoreForAutoAccept) {
            return {
              accepted: false,
              reason: `Gate score ${gateResult.score} below minimum ${policy.minGateScoreForAutoAccept} for prepare-only external artifact`,
              gateScore: gateResult.score,
            };
          }
        }

        if (policy.requireCitationVerificationForAcceptance && context?.citationResult && !context.citationResult.passed) {
          return { accepted: false, reason: 'Citation verification required but not passed for external artifact' };
        }

        if (policy.requireHostileReviewForAcceptance && context?.reviewSeverity) {
          if (context.reviewSeverity === 'critical') {
            return { accepted: false, reason: 'Hostile review severity is critical — cannot auto-accept' };
          }
          if (context.reviewSeverity === 'high') {
            return { accepted: false, reason: 'Hostile review severity is high — operator review needed for external artifact' };
          }
        }
      }

      return await doAccept(candidate, matterName, policy, context, true);
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
      return {
        accepted: false,
        reason: `Gate score ${gateResult.score} below minimum ${policy.minGateScoreForAutoAccept}`,
        gateScore: gateResult.score,
      };
    }
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
