import type { Finding, FindingCriticality } from '../domain/finding.js';
import { listFindingCitations } from '../findings/finding-store.js';
import { listConsensusDecisions, listReviewTasks } from './review-store.js';

export const CRITICAL_FINDING_CLASSES: FindingCriticality[] = [
  'claim_dispositive',
  'time_dispositive',
  'jurisdiction_dispositive',
  'authority_dispositive',
  'contradiction_dispositive',
];

export interface CriticalityGateResult {
  passed: boolean;
  requiredQuorum: number;
  achievedQuorum: number;
  blockers: Array<{
    objectType: string;
    objectId: string;
    reason: string;
    remediation: string;
  }>;
}

export function isCriticalFinding(finding: Finding): boolean {
  return CRITICAL_FINDING_CLASSES.includes(finding.criticality);
}

export function requiredReviewQuorumForFinding(finding: Finding): number {
  return isCriticalFinding(finding) ? 2 : 1;
}

export function evaluateFindingCriticalityGate(
  matterName: string,
  finding: Finding,
): CriticalityGateResult {
  const requiredQuorum = requiredReviewQuorumForFinding(finding);
  const completedReviews = listReviewTasks(matterName, {
    targetType: 'finding',
    targetId: finding.findingId,
  }).filter((task) => task.status === 'completed');
  const consensus = listConsensusDecisions(matterName, {
    targetType: 'finding',
    targetId: finding.findingId,
  }).find((decision) => decision.decision === 'approved');
  const achievedQuorum = Math.max(
    completedReviews.length,
    consensus?.achievedQuorum ?? 0,
  );
  const blockers: CriticalityGateResult['blockers'] = [];

  if (finding.status === 'accepted') {
    const hasExactCitation = listFindingCitations(matterName, finding.findingId)
      .some((citation) => citation.status === 'verified_exact');
    if (!hasExactCitation) {
      blockers.push({
        objectType: 'finding',
        objectId: finding.findingId,
        reason: 'Accepted finding lacks a verified exact citation',
        remediation: 'Attach and verify a page-bounded citation before relying on this finding.',
      });
    }
  }

  if (isCriticalFinding(finding) && achievedQuorum < requiredQuorum) {
    blockers.push({
      objectType: 'finding',
      objectId: finding.findingId,
      reason: `Critical finding has review quorum ${achievedQuorum}/${requiredQuorum}`,
      remediation: 'Complete another independent review or record senior adjudication.',
    });
  }

  return {
    passed: blockers.length === 0,
    requiredQuorum,
    achievedQuorum,
    blockers,
  };
}
