import { listContradictions } from '../findings/contradiction-store.js';
import { listFindings } from '../findings/finding-store.js';
import { buildInvestigationContextPack } from '../retrieval/context-pack.js';
import { appendEvent } from '../state/events.js';
import {
  blockInvestigationThread,
  completeInvestigationThread,
  createInvestigationThread,
  type InvestigationStopReason,
} from '../investigation/thread-store.js';
import { evaluateInvestigationPolicy } from '../investigation/thread-policy.js';

export interface RunInvestigationInput {
  matterName: string;
  objective: string;
  parentThreadId?: string;
  claimElements?: string[];
  evidenceScope?: string[];
  maxDepth?: number;
  depth?: number;
  budgetUsd?: number;
  estimatedCostUsd?: number;
}

export async function runInvestigationWorkflow(input: RunInvestigationInput): Promise<{
  threadId: string;
  status: string;
  stopReason?: InvestigationStopReason;
  acceptedFindingIds: string[];
  rejectedFindingIds: string[];
  contradictionIds: string[];
  blockers: Array<{ objectId: string; reason: string; remediation: string }>;
  contextPack: ReturnType<typeof buildInvestigationContextPack>;
}> {
  const policy = evaluateInvestigationPolicy({
    matterName: input.matterName,
    parentThreadId: input.parentThreadId,
    objective: input.objective,
    claimElements: input.claimElements,
    evidenceScope: input.evidenceScope,
    requestedDepth: input.depth ?? 0,
    maxDepth: input.maxDepth ?? 3,
    budgetUsd: input.budgetUsd,
    estimatedCostUsd: input.estimatedCostUsd,
  });

  const thread = await createInvestigationThread({
    matterName: input.matterName,
    parentThreadId: input.parentThreadId,
    objective: input.objective,
    depth: input.depth ?? 0,
    budgetUsd: input.budgetUsd,
    metadata: {
      claimElements: input.claimElements ?? [],
      evidenceScope: input.evidenceScope ?? [],
      scopeHash: policy.scopeHash,
    },
  });

  const contextPack = buildInvestigationContextPack({
    matterName: input.matterName,
    objective: input.objective,
    claimElements: input.claimElements,
    evidenceScope: input.evidenceScope,
    remainingBudgetUsd: input.budgetUsd,
  });

  if (!policy.allowed && policy.blocker && policy.stopReason) {
    const blocked = await blockInvestigationThread({
      matterName: input.matterName,
      threadId: thread.threadId,
      stopReason: policy.stopReason,
      blocker: policy.blocker,
      metadata: { contextPack },
    });
    return {
      threadId: blocked.threadId,
      status: blocked.status,
      stopReason: policy.stopReason,
      acceptedFindingIds: [],
      rejectedFindingIds: [],
      contradictionIds: [],
      blockers: [policy.blocker],
      contextPack,
    };
  }

  const acceptedFindingIds = listFindings(input.matterName, { status: 'accepted' })
    .map((finding) => finding.findingId);
  const rejectedFindingIds = listFindings(input.matterName, { status: 'rejected' })
    .map((finding) => finding.findingId);
  const contradictionIds = listContradictions(input.matterName)
    .map((contradiction) => contradiction.contradictionId);
  const stopReason: InvestigationStopReason = contextPack.retrieval.length === 0
    ? 'exhausted_evidence'
    : 'complete';

  const completed = await completeInvestigationThread({
    matterName: input.matterName,
    threadId: thread.threadId,
    stopReason,
    acceptedFindingIds,
    rejectedFindingIds,
    contradictionIds,
    metadata: { contextPack },
  });

  await appendEvent({
    matterName: input.matterName,
    type: 'tool.called',
    data: { tool: 'investigation-workflow', threadId: completed.threadId, stopReason },
    source: 'investigation-workflow',
  });

  return {
    threadId: completed.threadId,
    status: completed.status,
    stopReason,
    acceptedFindingIds,
    rejectedFindingIds,
    contradictionIds,
    blockers: [],
    contextPack,
  };
}
