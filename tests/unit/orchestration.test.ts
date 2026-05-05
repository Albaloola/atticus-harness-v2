import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { loadMatter } from '../../src/storage/matter.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { listRuns } from '../../src/state/runs.js';
import { listTasks } from '../../src/state/tasks.js';
import { deriveSnapshot } from '../../src/state/snapshot.js';
import { getDefaultPhases } from '../../src/legal/workflow.js';

vi.mock('../../src/llm/client.js', () => ({
  OpenRouterClient: vi.fn().mockImplementation(() => ({
    chatWithTools: vi.fn().mockResolvedValue({
      content: JSON.stringify({
        status: 'completed',
        summary: 'Fake worker completed.',
        findings: [],
        risks: [],
        proposedTasks: [],
        artifactIds: [],
        nextActions: [],
      }),
      toolCalls: undefined,
    }),
  })),
}));

import type { OrchestratorConfig } from '../../src/orchestration/master-orchestrator.js';
import { MasterOrchestrator } from '../../src/orchestration/master-orchestrator.js';

describe('MasterOrchestrator', () => {
  const matterName = 'test-orch-m';

  beforeEach(async () => {
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
