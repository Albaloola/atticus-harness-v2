import type { CandidateArtifact } from '../types/artifact.js';
import type { HostileReview, ReviewSeverity, ReviewFindingType } from '../types/review.js';

export interface AggregatedFindings {
  totalFindings: number;
  bySeverity: Record<ReviewSeverity, number>;
  byType: Record<ReviewFindingType, number>;
  highestSeverity: ReviewSeverity;
  reviews: HostileReview[];
}

export type QuorumDecision = 'accept' | 'reject' | 'needs_more_review';

export interface QuorumContext {
  storedReviews?: HostileReview[];
}

export function hasQuorum(candidate: CandidateArtifact, requiredReviewers: number, context?: QuorumContext): boolean {
  const reviews = context?.storedReviews || [];
  return reviews.length >= requiredReviewers;
}

export function aggregateFindings(reviews: HostileReview[]): AggregatedFindings {
  const bySeverity: Record<ReviewSeverity, number> = { critical: 0, high: 0, medium: 0, low: 0, info: 0 };
  const byType: Record<ReviewFindingType, number> = {
    factual_error: 0,
    legal_error: 0,
    omission: 0,
    ambiguity: 0,
    citation_issue: 0,
    structural: 0,
    risk: 0,
  };
  let totalFindings = 0;
  let highestSeverity: ReviewSeverity = 'info';

  const severityRank: Record<ReviewSeverity, number> = { critical: 4, high: 3, medium: 2, low: 1, info: 0 };

  for (const review of reviews) {
    for (const finding of review.findings) {
      totalFindings++;
      bySeverity[finding.severity]++;
      byType[finding.type] = (byType[finding.type] || 0) + 1;
    }

    if (severityRank[review.overallRisk] > severityRank[highestSeverity]) {
      highestSeverity = review.overallRisk;
    }
  }

  return { totalFindings, bySeverity, byType, highestSeverity, reviews };
}

export function getQuorumDecision(findings: AggregatedFindings, threshold: number): QuorumDecision {
  if (findings.bySeverity.critical > 0) {
    return 'reject';
  }

  if (findings.bySeverity.high > threshold) {
    return 'reject';
  }

  if (findings.highestSeverity === 'critical') {
    return 'reject';
  }

  if (findings.highestSeverity === 'high' && (findings.bySeverity.high + findings.bySeverity.medium) > threshold * 2) {
    return 'needs_more_review';
  }

  if (findings.bySeverity.high > 0) {
    return 'needs_more_review';
  }

  return 'accept';
}
