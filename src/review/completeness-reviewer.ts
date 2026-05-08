import { addReviewFinding, completeReviewTask, createReviewTask } from './review-store.js';

export async function runCompletenessReview(input: {
  matterName: string;
  targetType: 'draft' | 'document' | 'export';
  targetId: string;
  requiredSections: string[];
  content: string;
}): Promise<{ reviewTaskId: string; missingSections: string[] }> {
  const task = await createReviewTask({
    matterName: input.matterName,
    targetType: input.targetType,
    targetId: input.targetId,
    reviewerRole: 'completeness-reviewer',
    metadata: { requiredSections: input.requiredSections },
  });

  const lower = input.content.toLowerCase();
  const missingSections = input.requiredSections.filter((section) =>
    !lower.includes(section.toLowerCase()));

  for (const section of missingSections) {
    await addReviewFinding({
      matterName: input.matterName,
      reviewTaskId: task.reviewTaskId,
      severity: 'high',
      type: 'omission',
      description: `Required section is missing: ${section}`,
      targetLocator: input.targetId,
      recommendedAction: `Add and trace the required section: ${section}.`,
      metadata: { section },
    });
  }

  await completeReviewTask(input.matterName, task.reviewTaskId, {
    missingSections,
    findingCount: missingSections.length,
  });

  return { reviewTaskId: task.reviewTaskId, missingSections };
}
