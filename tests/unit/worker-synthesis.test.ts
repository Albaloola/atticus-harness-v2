import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { WorkerAgent } from '../../src/orchestration/worker.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { listEvents } from '../../src/state/events.js';
import type { QueryLoopConfig, QueryLoopResult } from '../../src/agent/query-loop.js';
import type { LLMRequest, LLMResponse } from '../../src/types/llm.js';

describe('WorkerAgent structured synthesis fallback', () => {
  const matterName = 'test-worker-synthesis';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeAllStateDbs();
    await deleteMatter(matterName);
  });

  it('turns free-form worker output into reducer-readable JSON', async () => {
    const synthesisClient = {
      chat: vi.fn(async (_request: LLMRequest): Promise<LLMResponse> => ({
        content: JSON.stringify({
          status: 'completed',
          summary: 'Synthesized worker findings from raw transcript.',
          findings: [{ claim: 'The rent account was disputed.', support: 'NAP-SRC-0001', confidence: 'high' }],
          risks: [],
          proposedTasks: [],
          artifactIds: [],
          nextActions: ['Use finding in phase reducer'],
        }),
      })),
    };

    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-1',
        role: 'worker',
        title: 'Identify arrears dispute',
        objective: 'Find evidence about the rent account dispute',
        allowedTools: [],
        phaseId: 'issue_spotting',
      },
      model: 'deepseek/deepseek-v4-flash',
      quietMode: true,
      synthesisClient,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: 'I found the relevant evidence in NAP-SRC-0001 but did not emit JSON.',
          status: 'completed',
          history: [
            { role: 'system', content: 'system' },
            { role: 'user', content: 'Find evidence' },
            { role: 'assistant', content: 'I found the relevant evidence in NAP-SRC-0001 but did not emit JSON.' },
            { role: 'tool', toolName: 'evidence_search', content: 'NAP-SRC-0001 says the rent account was disputed.' },
          ],
        }),
      }),
    });

    const result = await worker.execute();

    expect(result.findings).toHaveLength(1);
    expect(result.findings[0].support).toBe('NAP-SRC-0001');
    expect(synthesisClient.chat).toHaveBeenCalledOnce();
    expect(synthesisClient.chat.mock.calls[0]?.[0].messages[0]?.content).toContain('Write every JSON string value in English');
    expect(listEvents(matterName).map((event) => event.type)).toContain('agent.output.synthesized');
  });

  it('marks max-turn fallback synthesis as blocked instead of completed', async () => {
    const synthesisClient = {
      chat: vi.fn(async (_request: LLMRequest): Promise<LLMResponse> => ({
        content: JSON.stringify({
          status: 'needs_followup',
          summary: 'Worker hit the turn budget before final synthesis.',
          findings: [],
          risks: [{ risk: 'Turn budget exhausted', severity: 'medium', mitigation: 'Run a focused follow-up worker' }],
          proposedTasks: [],
          artifactIds: [],
          nextActions: ['Run focused follow-up worker'],
        }),
      })),
    };

    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-2',
        role: 'worker',
        title: 'Research limitation',
        objective: 'Assess limitation and procedural risk',
        allowedTools: [],
        phaseId: 'procedural_route_planning',
      },
      model: 'deepseek/deepseek-v4-flash',
      quietMode: true,
      synthesisClient,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: 'Partial notes without JSON.',
          status: 'max_turns',
          history: [
            { role: 'user', content: 'Assess limitation' },
            { role: 'assistant', content: 'Partial notes without JSON.' },
          ],
        }),
      }),
    });

    const result = await worker.execute();
    const eventTypes = listEvents(matterName).map((event) => event.type);

    expect(result.status).toBe('needs_followup');
    expect(eventTypes).toContain('agent.run.blocked');
    expect(eventTypes).not.toContain('agent.run.completed');
  });
});
