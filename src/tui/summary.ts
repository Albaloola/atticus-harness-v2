import type { OperatorReadModel } from '../observability/read-model.js';

export function formatOperatorSummary(model: OperatorReadModel): string {
  const lines = [
    `Matter: ${model.matterName}`,
    `Status: ${model.snapshot.status}`,
    `Phase: ${model.snapshot.phase}`,
    `Legal blockers: ${model.legalBlockers.total}`,
    `Tasks: ${model.snapshot.taskCounts.total} total, ${model.snapshot.taskCounts.blocked} blocked`,
  ];
  if (model.nextActions[0]) {
    lines.push(`Next: ${model.nextActions[0]}`);
  }
  return lines.join('\n');
}
