import { addReviewFinding, completeReviewTask, createReviewTask } from './review-store.js';

const RISK_TERMS = [
  'unsupported',
  'assume',
  'unclear',
  'contradict',
  'deadline',
  'jurisdiction',
  'must be filed',
];

export async function runAdversarialReview(input: {
  matterName: string;
  targetType: 'finding' | 'draft' | 'document' | 'export';
  targetId: string;
  content: string;
}): Promise<{ reviewTaskId: string; findingCount: number }> {
  const task = await createReviewTask({
    matterName: input.matterName,
    targetType: input.targetType,
    targetId: input.targetId,
    reviewerRole: 'adversarial-reviewer',
    metadata: { deterministic: true },
  });

  let findingCount = 0;
  const lower = input.content.toLowerCase();
  for (const term of RISK_TERMS) {
    if (!lower.includes(term)) continue;
    await addReviewFinding({
      matterName: input.matterName,
      reviewTaskId: task.reviewTaskId,
      severity: term === 'deadline' || term === 'jurisdiction' ? 'high' : 'medium',
      type: 'risk',
      description: `Potential legal risk signal detected: ${term}`,
      targetLocator: input.targetId,
      recommendedAction: 'Resolve or cite the risk signal before approval.',
      metadata: { term },
    });
    findingCount++;
  }

  await completeReviewTask(input.matterName, task.reviewTaskId, { findingCount });
  return { reviewTaskId: task.reviewTaskId, findingCount };
}
