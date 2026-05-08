import type { ConsensusDecision } from '../domain/consensus-decision.js';
import { listReviewFindings, recordConsensusDecision } from './review-store.js';

export async function adjudicateTarget(input: {
  matterName: string;
  targetType: ConsensusDecision['targetType'];
  targetId: string;
  adjudicatorRole?: string;
}): Promise<ConsensusDecision> {
  const findings = listReviewFindings(input.matterName, { targetId: input.targetId });
  const criticalOrHigh = findings.filter((finding) =>
    finding.severity === 'critical' || finding.severity === 'high');
  const decision: ConsensusDecision['decision'] = criticalOrHigh.length > 0 ? 'needs_work' : 'approved';
  return recordConsensusDecision({
    matterName: input.matterName,
    targetType: input.targetType,
    targetId: input.targetId,
    decision,
    requiredQuorum: 1,
    achievedQuorum: 1,
    adjudicatorRole: input.adjudicatorRole ?? 'senior-adjudicator',
    metadata: {
      reviewFindingIds: findings.map((finding) => finding.reviewFindingId),
      rationale: criticalOrHigh.length > 0
        ? 'High-impact review findings require remediation before approval.'
        : 'No high-impact review findings remain unresolved.',
    },
  });
}
