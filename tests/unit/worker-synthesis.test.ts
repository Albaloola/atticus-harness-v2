import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { WorkerAgent } from '../../src/orchestration/worker.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { getDb, closeAllDbs } from '../../src/storage/sqlite/index.js';
import { insertEvidenceItemV2 } from '../../src/storage/sqlite/evidence.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { listEvents } from '../../src/state/events.js';
import { hashText } from '../../src/extraction/hash.js';
import type { QueryLoopConfig, QueryLoopResult } from '../../src/agent/query-loop.js';
import type { LLMRequest, LLMResponse } from '../../src/types/llm.js';

describe('WorkerAgent structured synthesis', () => {
  const matterName = 'test-worker-synthesis';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeAllDbs();
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

  it('marks weak completed synthesis as needs-followup when it has no reducer output', async () => {
    const synthesisClient = {
      chat: vi.fn(async (_request: LLMRequest): Promise<LLMResponse> => ({
        content: JSON.stringify({
          status: 'completed',
          summary: 'The transcript contains only process chatter and the task was not advanced beyond data retrieval.',
          findings: [],
          risks: [],
          proposedTasks: [],
          artifactIds: [],
          nextActions: [],
        }),
      })),
    };

    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-3',
        role: 'worker',
        title: 'Create master bundle index',
        objective: 'Build a production-ready bundle index from the matter evidence',
        allowedTools: [],
        phaseId: 'bundle_and_war_room_assembly',
      },
      model: 'deepseek/deepseek-v4-flash',
      quietMode: true,
      synthesisClient,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: 'Non-JSON notes.',
          status: 'completed',
          history: [
            { role: 'user', content: 'Create the bundle index' },
            { role: 'tool', toolName: 'matter_inventory', content: 'Returned 2771 evidence items.' },
          ],
        }),
      }),
    });

    const result = await worker.execute();
    const eventTypes = listEvents(matterName).map((event) => event.type);

    expect(result.status).toBe('needs_followup');
    expect(result.risks[0]?.risk).toContain('without reducer-usable findings');
    expect(result.nextActions[0]).toContain('Create master bundle index');
    expect(eventTypes).toContain('agent.run.blocked');
    expect(eventTypes).not.toContain('agent.run.completed');
  });

  it('marks weak directly parsed completed JSON as needs-followup before emitting completion events', async () => {
    const synthesisClient = {
      chat: vi.fn(async (_request: LLMRequest): Promise<LLMResponse> => ({
        content: JSON.stringify({
          status: 'completed',
          summary: 'This should not be called.',
          findings: [{ claim: 'unused', support: 'unused', confidence: 'low' }],
          risks: [],
          proposedTasks: [],
          artifactIds: [],
          nextActions: [],
        }),
      })),
    };

    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-4',
        role: 'worker',
        title: 'List next recommended actions',
        objective: 'Produce concrete next actions',
        allowedTools: [],
        phaseId: 'operator_handoff',
      },
      model: 'deepseek/deepseek-v4-flash',
      quietMode: true,
      synthesisClient,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: JSON.stringify({
            status: 'completed',
            summary: 'The transcript contains only process chatter and no substantive conclusions.',
            findings: [],
            risks: [],
            proposedTasks: [],
            artifactIds: [],
            nextActions: [],
          }),
          status: 'completed',
          history: [
            { role: 'user', content: 'List next recommended actions' },
            { role: 'tool', toolName: 'matter_inventory', content: 'Returned the manifest.' },
          ],
        }),
      }),
    });

    const result = await worker.execute();
    const eventTypes = listEvents(matterName).map((event) => event.type);

    expect(result.status).toBe('needs_followup');
    expect(result.summary).toContain('List next recommended actions');
    expect(synthesisClient.chat).not.toHaveBeenCalled();
    expect(eventTypes).toContain('agent.run.blocked');
    expect(eventTypes).not.toContain('agent.run.completed');
  });

  it('quarantines completed worker JSON when runtime policy violations are present', async () => {
    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-policy',
        role: 'worker',
        title: 'Research applicable legislation',
        objective: 'Research applicable legislation',
        allowedTools: [],
        phaseId: 'law_and_policy_research',
      },
      model: 'gpt-5.5',
      quietMode: true,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: JSON.stringify({
            status: 'completed',
            summary: 'Official legislation was checked live on legislation.gov.uk.',
            findings: [{ claim: 'Live official authority supports the route.', support: 'https://legislation.gov.uk/example', confidence: 'high' }],
            risks: [],
            proposedTasks: [],
            artifactIds: [],
            nextActions: ['Use live authority'],
          }),
          status: 'completed',
          history: [
            { role: 'user', content: 'Research applicable legislation' },
            { role: 'assistant', content: 'Official legislation was checked live on legislation.gov.uk.' },
          ],
          nativeActions: [{ type: 'web_search', status: 'completed', label: 'legislation.gov.uk' }],
          policyViolations: ['Native Codex web_search used while autonomy.autoApproveWeb=false (legislation.gov.uk)'],
        }),
      }),
    });

    const result = await worker.execute();
    const eventTypes = listEvents(matterName).map((event) => event.type);

    expect(result.status).toBe('needs_followup');
    expect(result.summary).toContain('quarantined');
    expect(result.risks.some((risk) => risk.severity === 'high')).toBe(true);
    expect(result.nextActions.join('\n')).toContain('Rerun worker task under policy supervision');
    expect(eventTypes).toContain('agent.run.blocked');
    expect(eventTypes).not.toContain('agent.run.completed');
  });

  it('quarantines primary findings supported only by case-preparation work product', async () => {
    const db = getDb(matterName);
    insertEvidenceItemV2(db, {
      evidenceId: 'ANF-SRC-0027',
      matterName,
      sha256: hashText('call-script'),
      originalPath: '/tmp/Atticus Call Script.pdf',
      internalPath: 'ANF-SRC-0027.pdf',
      originalFilename: 'Atticus call script.pdf',
      canonicalFilename: 'atticus-call-script.pdf',
      sourceType: 'upload',
      mimeType: 'application/pdf',
      format: 'pdf',
      status: 'approved',
      ingestedAt: new Date().toISOString(),
      sizeBytes: 123,
      metadata: {},
    });

    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-source-discipline',
        role: 'worker',
        title: 'Determine procedural deadline',
        objective: 'Determine procedural deadline',
        allowedTools: [],
        phaseId: 'procedural_route_planning',
      },
      model: 'gpt-5.5',
      quietMode: true,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: JSON.stringify({
            status: 'completed',
            summary: 'The procedural deadline was identified.',
            findings: [{
              kind: 'procedural_fact',
              claim: 'The complaint deadline is ten working days.',
              support: 'ANF-SRC-0027 says the complaint deadline is ten working days.',
              confidence: 'high',
            }],
            risks: [],
            proposedTasks: [],
            artifactIds: [],
            nextActions: ['Use the deadline'],
          }),
          status: 'completed',
          history: [
            { role: 'user', content: 'Determine procedural deadline' },
            { role: 'assistant', content: 'ANF-SRC-0027 says the complaint deadline is ten working days.' },
          ],
        }),
      }),
    });

    const result = await worker.execute();
    const eventTypes = listEvents(matterName).map((event) => event.type);

    expect(result.status).toBe('needs_followup');
    expect(result.summary).toContain('source-discipline');
    expect(result.risks.some((risk) => risk.risk.includes('work product'))).toBe(true);
    expect(result.nextActions.join('\n')).toContain('source-record-only support');
    expect(eventTypes).toContain('agent.run.blocked');
    expect(eventTypes).not.toContain('agent.run.completed');
  });

  it('marks instruction-only timeout synthesis as needs-followup', async () => {
    const synthesisClient = {
      chat: vi.fn(async (_request: LLMRequest): Promise<LLMResponse> => ({
        content: JSON.stringify({
          status: 'completed',
          summary: 'The transcript excerpt contains only task instructions and workflow constraints. It does not include any matter inventory output, evidence IDs, source IDs, dates, amounts, party statements, or substantive worker findings.',
          findings: [],
          risks: [],
          proposedTasks: [],
          artifactIds: [],
          nextActions: [],
        }),
      })),
    };

    const worker = new WorkerAgent({
      spawn: {
        matterName,
        parentRunId: 'master-1',
        taskId: 'task-5',
        role: 'worker',
        title: 'Extract key facts from evidence',
        objective: 'Extract key facts from evidence',
        allowedTools: [],
        phaseId: 'evidence_ingestion_and_fact_extraction',
      },
      model: 'deepseek/deepseek-v4-flash',
      quietMode: true,
      synthesisClient,
      queryLoopFactory: (_config: QueryLoopConfig) => ({
        run: async (): Promise<QueryLoopResult> => ({
          turns: [],
          finalContent: '',
          status: 'completed',
          history: [
            { role: 'user', content: 'Extract key facts from evidence' },
            { role: 'assistant', content: '' },
          ],
        }),
      }),
    });

    const result = await worker.execute();
    const eventTypes = listEvents(matterName).map((event) => event.type);

    expect(result.status).toBe('needs_followup');
    expect(result.summary).toContain('Extract key facts from evidence');
    expect(eventTypes).toContain('agent.run.blocked');
    expect(eventTypes).not.toContain('agent.run.completed');
  });
});
