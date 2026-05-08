import { listFindingCitations } from '../findings/finding-store.js';
import { getFinding } from '../findings/finding-store.js';
import { runAdversarialReview } from '../review/adversarial-reviewer.js';
import { runCitationReview } from '../review/citation-reviewer.js';
import { evaluateFindingCriticalityGate } from '../review/criticality.js';
import { adjudicateTarget } from '../review/senior-adjudicator.js';

export interface ReviewWorkflowResult {
  targetType: 'finding' | 'draft' | 'document' | 'export';
  targetId: string;
  reviewTaskIds: string[];
  consensusDecisionId?: string;
  blockers: Array<{ objectType: string; objectId: string; reason: string; remediation: string }>;
}

export async function reviewFindingWorkflow(
  matterName: string,
  findingId: string,
): Promise<ReviewWorkflowResult> {
  const finding = getFinding(matterName, findingId);
  if (!finding) {
    throw new Error(`Finding "${findingId}" was not found`);
  }
  const citations = listFindingCitations(matterName, findingId);
  const adversarial = await runAdversarialReview({
    matterName,
    targetType: 'finding',
    targetId: findingId,
    content: finding.statement,
  });
  const citationReview = await runCitationReview({
    matterName,
    targetType: 'finding',
    targetId: findingId,
    citationIds: citations.map((citation) => citation.findingCitationId),
  });
  const gate = evaluateFindingCriticalityGate(matterName, finding);
  const consensus = gate.passed
    ? await adjudicateTarget({ matterName, targetType: 'finding', targetId: findingId })
    : undefined;

  return {
    targetType: 'finding',
    targetId: findingId,
    reviewTaskIds: [adversarial.reviewTaskId, citationReview.reviewTaskId],
    consensusDecisionId: consensus?.consensusId,
    blockers: gate.blockers,
  };
}
