import { addReviewFinding, completeReviewTask, createReviewTask } from './review-store.js';

export async function runCitationReview(input: {
  matterName: string;
  targetType: 'finding' | 'draft' | 'document';
  targetId: string;
  citationIds: string[];
}): Promise<{ reviewTaskId: string; findingCount: number }> {
  const task = await createReviewTask({
    matterName: input.matterName,
    targetType: input.targetType,
    targetId: input.targetId,
    reviewerRole: 'citation-reviewer',
    metadata: { citationIds: input.citationIds },
  });

  let findingCount = 0;
  if (input.citationIds.length === 0) {
    await addReviewFinding({
      matterName: input.matterName,
      reviewTaskId: task.reviewTaskId,
      severity: 'critical',
      type: 'citation_issue',
      description: 'No citations are attached to the reviewed object.',
      targetLocator: input.targetId,
      recommendedAction: 'Attach verified exact citations before approval.',
    });
    findingCount++;
  }

  await completeReviewTask(input.matterName, task.reviewTaskId, { findingCount });
  return { reviewTaskId: task.reviewTaskId, findingCount };
}
