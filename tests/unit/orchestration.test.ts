import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { writeFile } from 'fs/promises';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { loadMatter } from '../../src/storage/matter.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { listRuns } from '../../src/state/runs.js';
import { listTasks } from '../../src/state/tasks.js';
import { listEvents } from '../../src/state/events.js';
import { deriveSnapshot } from '../../src/state/snapshot.js';
import { getMatterConfigPath } from '../../src/config/paths.js';
import { getDefaultPhases } from '../../src/legal/workflow.js';
import { allowedToolsForPhase } from '../../src/orchestration/phase-tools.js';
import { DEFAULT_MAX_CONCURRENCY } from '../../src/orchestration/limits.js';
import { ToolRegistry } from '../../src/tools/index.js';

vi.mock('../../src/llm/client.js', () => ({
  OpenRouterClient: vi.fn().mockImplementation(() => ({
    chatWithTools: vi.fn().mockResolvedValue({
      content: JSON.stringify({
        status: 'completed',
        summary: 'Fake worker completed.',
        findings: [{ claim: 'Fake worker completed reducer-usable work.', support: 'TEST-SRC-0001', confidence: 'medium' }],
        risks: [],
        proposedTasks: [],
        artifactIds: [],
        nextActions: ['Use fake worker output'],
      }),
      toolCalls: undefined,
    }),
    chat: vi.fn().mockResolvedValue({ content: '{"status":"completed","summary":"Fake synthesis completed.","findings":[{"claim":"Fake synthesis completed reducer-usable work.","support":"TEST-SRC-0001","confidence":"medium"}],"risks":[],"proposedTasks":[],"artifactIds":[],"nextActions":["Use fake synthesis output"]}' }),
    healthCheck: vi.fn().mockResolvedValue(true),
  })),
  createLLMClient: vi.fn(() => ({
    chatWithTools: vi.fn().mockResolvedValue({
      content: JSON.stringify({
        status: 'completed',
        summary: 'Fake worker completed.',
        findings: [{ claim: 'Fake worker completed reducer-usable work.', support: 'TEST-SRC-0001', confidence: 'medium' }],
        risks: [],
        proposedTasks: [],
        artifactIds: [],
        nextActions: ['Use fake worker output'],
      }),
      toolCalls: undefined,
    }),
    chat: vi.fn().mockResolvedValue({ content: '{"status":"completed","summary":"Fake synthesis completed.","findings":[{"claim":"Fake synthesis completed reducer-usable work.","support":"TEST-SRC-0001","confidence":"medium"}],"risks":[],"proposedTasks":[],"artifactIds":[],"nextActions":["Use fake synthesis output"]}' }),
    healthCheck: vi.fn().mockResolvedValue(true),
  })),
}));

import { OpenRouterClient, createLLMClient } from '../../src/llm/client.js';
import type { OrchestratorConfig } from '../../src/orchestration/master-orchestrator.js';
import { MasterOrchestrator } from '../../src/orchestration/master-orchestrator.js';
import { WorkerAgent } from '../../src/orchestration/worker.js';

describe('phase tool contracts', () => {
  it('keeps evidence search follow-up tools available to every worker phase', () => {
    for (const phase of getDefaultPhases()) {
      const tools = allowedToolsForPhase(phase.id);
      expect(tools).toContain('evidence_search');
      expect(tools).toContain('evidence_chunk_read');
      expect(tools).toContain('matter_inventory');
      expect(new Set(tools).size).toBe(tools.length);
    }
  });

  it('defaults orchestration concurrency to fifteen worker lanes', () => {
    expect(DEFAULT_MAX_CONCURRENCY).toBe(15);
  });

  it('exposes stage-specific tools needed by the stage contract', () => {
    expect(allowedToolsForPhase('evidence_ingestion_and_fact_extraction')).toEqual(expect.arrayContaining([
      'evidence_ingest',
      'evidence_chunk_read',
    ]));
    expect(allowedToolsForPhase('law_and_policy_research')).toEqual(expect.arrayContaining([
      'web_search',
      'web_fetch',
    ]));
    expect(allowedToolsForPhase('verification_and_hostile_review')).toEqual(expect.arrayContaining([
      'hostile_review',
      'quality_gate',
      'verify_citations',
    ]));
  });

  it('only exposes registered tools in every phase contract', () => {
    for (const phase of getDefaultPhases()) {
      const allowedTools = allowedToolsForPhase(phase.id);
      const registry = new ToolRegistry({ allowedTools });
      const registeredNames = new Set(registry.getAll().map((tool) => tool.name));

      expect(registeredNames).toEqual(new Set(allowedTools));
    }
  });

  it('passes phase context and inventory guidance into worker user messages', async () => {
    const matterName = 'worker-context-pack-test';
    await initMatter(matterName);
    let capturedMessage = '';
    let capturedSystemPrompt = '';

    try {
      const worker = new WorkerAgent({
        spawn: {
          matterName,
          title: 'Create retrospective bundle index',
          objective: 'Create retrospective bundle index',
          role: 'worker',
          allowedTools: [],
          contextPack: 'Retrospective appellate context marker.',
        },
        model: 'test-model',
        queryLoopFactory: (config) => ({
          run: async (userMessage) => {
            capturedMessage = userMessage;
            capturedSystemPrompt = config.systemPrompt;
            return {
              turns: [],
              history: [],
              finalContent: JSON.stringify({
                status: 'completed',
                summary: 'Done',
                findings: [{ claim: 'Context guidance was present.', support: 'TEST-SRC-0001', confidence: 'medium' }],
                risks: [],
                proposedTasks: [],
                artifactIds: [],
                nextActions: ['Use captured prompt'],
              }),
              status: 'completed',
            };
          },
        }),
      });

      await worker.execute();

      expect(capturedMessage).toContain('Retrospective appellate context marker.');
      expect(capturedMessage).toContain('Use matter_inventory before exec_sqlite');
      expect(capturedMessage).toContain('keep paging evidence_chunk_read/read_file');
      expect(capturedMessage).toContain('write_file mode "append" and expectedContentHash');
      expect(capturedMessage).toContain('Each finding should include kind');
      expect(capturedMessage).toContain('Write the summary, findings, risks, proposed tasks, and next actions in English');
      expect(capturedSystemPrompt).toContain('write_file append mode and expectedContentHash');
      expect(capturedSystemPrompt).toContain('Write all operator-facing prose and structured JSON string values in English');
    } finally {
      closeAllStateDbs();
      await deleteMatter(matterName);
    }
  });
});

function mockWorkerStatus(status: 'completed' | 'blocked' | 'needs_followup' | 'failed'): void {
  const fakeClient = {
    chatWithTools: vi.fn().mockResolvedValue({
      content: JSON.stringify({
        status,
        summary: `Fake worker ${status}.`,
        findings: status === 'completed'
          ? [{ claim: 'Fake worker completed reducer-usable work.', support: 'TEST-SRC-0001', confidence: 'medium' }]
          : [],
        risks: [],
        proposedTasks: [],
        artifactIds: [],
        nextActions: status === 'completed' ? ['Use fake worker output'] : [],
      }),
      toolCalls: undefined,
    }),
    chat: vi.fn().mockResolvedValue({
      content: JSON.stringify({
        status,
        summary: `Fake worker ${status}.`,
        findings: status === 'completed'
          ? [{ claim: 'Fake worker completed reducer-usable work.', support: 'TEST-SRC-0001', confidence: 'medium' }]
          : [],
        risks: [],
        proposedTasks: [],
        artifactIds: [],
        nextActions: status === 'completed' ? ['Use fake worker output'] : [],
      }),
    }),
    healthCheck: vi.fn().mockResolvedValue(true),
  };
  vi.mocked(OpenRouterClient).mockImplementation(() => fakeClient as unknown as InstanceType<typeof OpenRouterClient>);
  vi.mocked(createLLMClient).mockReturnValue(fakeClient as ReturnType<typeof createLLMClient>);
}

describe('MasterOrchestrator', () => {
  const matterName = 'test-orch-m';

  beforeEach(async () => {
    mockWorkerStatus('completed');
    try { await initMatter(matterName); } catch {}
  });

  afterEach(async () => {
    closeAllStateDbs();
    try { await deleteMatter(matterName); } catch {}
  });

  it('completes orchestration across all 10 phases', async () => {
    const config: OrchestratorConfig = {
      matterName,
      objective: 'Test full orchestration',
      maxDepth: 1,
      maxConcurrency: 1,
    };

    const orchestrator = new MasterOrchestrator(config);
    const result = await orchestrator.run();

    expect(result.matterName).toBe(matterName);
    expect(result.summary).toBeTruthy();
    expect(result.status).toMatch(/completed|needs_followup|failed/);
    expect(Array.isArray(result.artifacts)).toBe(true);
    expect(Array.isArray(result.findings)).toBe(true);
    expect(Array.isArray(result.risks)).toBe(true);
    expect(Array.isArray(result.phaseResults)).toBe(true);
    expect(result.phaseResults.length).toBe(10);
  }, 30000);

  it('closes master and mini runs and preserves task hierarchy', async () => {
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Hierarchy test',
      maxDepth: 2,
      maxConcurrency: 2,
    });

    await orchestrator.run();

    const runs = listRuns(matterName);
    expect(runs.filter((run) => run.role === 'master' && run.status === 'running')).toHaveLength(0);
    expect(runs.filter((run) => run.role === 'mini_orchestrator')).toHaveLength(10);
    const miniRunIds = new Set(runs.filter((run) => run.role === 'mini_orchestrator').map((run) => run.id));
    expect(runs.some((run) => run.role === 'worker' && run.parentRunId && miniRunIds.has(run.parentRunId))).toBe(true);

    const tasks = listTasks(matterName);
    expect(tasks.some((task) => task.kind === 'worker' && task.parentId)).toBe(true);
    expect((await loadMatter(matterName)).status).toBe('complete');
    const snapshot = await deriveSnapshot(matterName);
    expect(snapshot.phase).toBe('complete');
    expect(snapshot.activeAgents).toHaveLength(0);
    expect(orchestrator.getActiveRunCount()).toBe(0);
  }, 30000);

  it('returns OrchestratorResult with correct fields', async () => {
    const config: OrchestratorConfig = {
      matterName,
      objective: 'Verify shape',
      maxDepth: 1,
      maxConcurrency: 1,
    };

    const orchestrator = new MasterOrchestrator(config);
    const result = await orchestrator.run();

    expect(result).toHaveProperty('matterName');
    expect(result).toHaveProperty('summary');
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('artifacts');
    expect(result).toHaveProperty('findings');
    expect(result).toHaveProperty('risks');
    expect(result).toHaveProperty('phaseResults');
  }, 30000);

  it('creates phase results for each workflow phase', async () => {
    const phases = getDefaultPhases();
    expect(phases.length).toBe(10);

    const config: OrchestratorConfig = {
      matterName,
      objective: 'Phase test',
      maxDepth: 1,
      maxConcurrency: 1,
    };

    const orchestrator = new MasterOrchestrator(config);
    const result = await orchestrator.run();

    expect(result.phaseResults.length).toBe(10);
    for (const pr of result.phaseResults) {
      expect(pr.phaseId).toBeTruthy();
      expect(pr.phaseName).toBeTruthy();
      expect(['completed', 'failed', 'blocked']).toContain(pr.status);
    }
  }, 30000);

  it('honors configured phase subsets for staged repair runs', async () => {
    const phases = getDefaultPhases().slice(0, 2);
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Subset phase test',
      maxDepth: 1,
      maxConcurrency: 1,
      phases,
    });

    const result = await orchestrator.run();

    expect(result.status).toBe('completed');
    expect(result.phaseResults.map((phase) => phase.phaseId)).toEqual(phases.map((phase) => phase.id));
    expect(listRuns(matterName).filter((run) => run.role === 'mini_orchestrator')).toHaveLength(2);
    expect(listTasks(matterName).filter((task) => task.kind === 'mini_orchestrator')).toHaveLength(2);

    const masterRun = listRuns(matterName).find((run) => run.role === 'master')!;
    const masterEvents = listEvents(matterName).filter((event) => event.runId === masterRun.id);
    expect(masterEvents.some((event) =>
      event.type === 'run.completed' &&
      event.data.completedPhases === 2 &&
      event.data.totalPhases === 2
    )).toBe(true);
  }, 30000);

  it('does not mark an aborted orchestration as completed', async () => {
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Abort before work starts',
      maxDepth: 2,
      maxConcurrency: 2,
    });

    orchestrator.abort();
    const result = await orchestrator.run();

    expect(result.status).toBe('needs_followup');
    expect(result.summary).toContain('aborted');
    expect(result.phaseResults).toHaveLength(0);
    expect((await loadMatter(matterName)).status).toBe('analyzing');
    expect(orchestrator.getActiveRunCount()).toBe(0);
    const masterRun = listRuns(matterName).find((run) => run.role === 'master')!;
    const events = listEvents(matterName);
    expect(events.some((event) => event.type === 'run.completed')).toBe(false);
    const masterEvents = events.filter((event) => event.runId === masterRun.id);
    expect(masterEvents.some((event) =>
      event.type === 'run.partial' &&
      event.data.status === 'aborted' &&
      event.data.completedPhases === 0 &&
      event.data.totalPhases === 10
    )).toBe(true);
  }, 30000);

  it('surfaces blocked phase work as needs-followup instead of completed', async () => {
    mockWorkerStatus('blocked');
    const phases = getDefaultPhases().slice(0, 2);
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Blocked worker test',
      maxDepth: 2,
      maxConcurrency: 2,
      phases,
    });

    const result = await orchestrator.run();

    expect(result.status).toBe('needs_followup');
    expect(result.phaseResults).toHaveLength(phases.length);
    expect(result.phaseResults.every((phase) => phase.status === 'blocked')).toBe(true);
    expect(listTasks(matterName, { status: 'blocked' }).length).toBeGreaterThan(0);
    const retryTasks = listTasks(matterName).filter((task) => task.kind === 'worker_retry');
    expect(retryTasks.length).toBeGreaterThan(0);
    expect(retryTasks[0].data).toMatchObject({
      recoveryOutcome: 'spawn_replacement',
      maxRecoveryRetries: 3,
    });
    const masterRun = listRuns(matterName).find((run) => run.role === 'master')!;
    const masterEvents = listEvents(matterName).filter((event) => event.runId === masterRun.id);
    expect(masterEvents.some((event) => event.type === 'run.completed')).toBe(false);
    expect(masterEvents.some((event) =>
      event.type === 'run.partial' &&
      event.data.status === 'needs_followup' &&
      event.data.completedPhases === 0 &&
      event.data.totalPhases === phases.length
    )).toBe(true);
    expect((await loadMatter(matterName)).status).toBe('analyzing');
    expect(orchestrator.getActiveRunCount()).toBe(0);
  }, 30000);

  it('surfaces needs-followup worker results as blocked phase work', async () => {
    mockWorkerStatus('needs_followup');
    const phases = getDefaultPhases().slice(0, 2);
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Follow-up worker test',
      maxDepth: 2,
      maxConcurrency: 2,
      phases,
    });

    const result = await orchestrator.run();

    expect(result.status).toBe('needs_followup');
    expect(result.phaseResults).toHaveLength(phases.length);
    expect(result.phaseResults.every((phase) => phase.status === 'blocked')).toBe(true);
    expect(listTasks(matterName, { status: 'blocked' }).length).toBeGreaterThan(0);
    const retryTasks = listTasks(matterName).filter((task) => task.kind === 'worker_retry');
    expect(retryTasks.length).toBeGreaterThan(0);
    expect(retryTasks[0].data.retryOf).toEqual(expect.any(String));
    expect(retryTasks[0].data.retryReason).toContain('needs_followup');
    expect((await loadMatter(matterName)).status).toBe('analyzing');
  }, 30000);

  it('uses configured gate-feedback worker retry limits in recovery tasks', async () => {
    mockWorkerStatus('needs_followup');
    await writeFile(
      getMatterConfigPath(matterName),
      JSON.stringify({ autonomy: { gateFeedback: { maxWorkerRetries: 5 } } }),
      'utf-8',
    );

    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Configured recovery retry test',
      maxDepth: 2,
      maxConcurrency: 2,
      phases: getDefaultPhases().slice(0, 1),
    });

    const result = await orchestrator.run();

    expect(result.status).toBe('needs_followup');
    const retryTasks = listTasks(matterName).filter((task) => task.kind === 'worker_retry');
    expect(retryTasks.length).toBeGreaterThan(0);
    expect(retryTasks[0].data).toMatchObject({
      recoveryOutcome: 'spawn_replacement',
      maxRecoveryRetries: 5,
    });
    const blockedWorkers = listTasks(matterName, { status: 'blocked' }).filter((task) => task.kind === 'worker');
    expect(blockedWorkers[0].data.maxRecoveryRetries).toBe(5);
  }, 30000);

  it('normalizes invalid concurrency instead of stalling the batch loop', async () => {
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Invalid concurrency test',
      maxDepth: 2,
      maxConcurrency: 0,
    });

    const result = await orchestrator.run();

    expect(result.phaseResults).toHaveLength(10);
    expect(result.status).toBe('completed');
    expect(orchestrator.getActiveRunCount()).toBe(0);
  }, 30000);

  it('uses retrospective appellate production and bundle tasks for concluded case trials', async () => {
    const phases = getDefaultPhases().filter((phase) =>
      phase.id === 'document_production' || phase.id === 'bundle_and_war_room_assembly'
    );
    const orchestrator = new MasterOrchestrator({
      matterName,
      objective: 'Retrospective concluded UKSC Cherry prorogation case trial with known outcome and downloaded court documents',
      maxDepth: 2,
      maxConcurrency: 3,
      phases,
    });

    const result = await orchestrator.run();
    const workerTitles = listTasks(matterName)
      .filter((task) => task.kind === 'worker')
      .map((task) => task.title);

    expect(result.status).toBe('completed');
    expect(workerTitles).toContain('Select a compact production set using matter_inventory production candidates, distinguishing holdings from submissions');
    expect(workerTitles).toContain('Create retrospective appellate bundle index from matter_inventory production candidates');
    expect(workerTitles).not.toContain('Draft key documents');
    expect(workerTitles).not.toContain('Create master bundle index');
  }, 30000);
});

describe('Orchestrator types', () => {
  it('AgentSpawnInput type accepts valid fields', () => {
    const spawn = {
      matterName: 'test',
      title: 'Test task',
      objective: 'Test objective',
      role: 'worker',
      maxDepth: 1,
      allowedTools: ['read_file'],
      maxTurns: 5,
    };
    expect(spawn.matterName).toBe('test');
    expect(spawn.role).toBe('worker');
  });

  it('has all 10 workflow phases', () => {
    const phases = getDefaultPhases();
    expect(phases.length).toBe(10);
  });
});
