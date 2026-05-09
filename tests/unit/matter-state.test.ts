import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdir, readFile, rm, writeFile } from 'fs/promises';
import { getStateDb, closeStateDb } from '../../src/state/index.js';
import { appendEvent, listEvents, getEventCount } from '../../src/state/events.js';
import { createTask, updateTask, getTask, listTasks } from '../../src/state/tasks.js';
import { acquireTaskLease, completeTaskLease, expireTaskLeases } from '../../src/state/leases.js';
import { createRun, updateRun, getRun, listRuns } from '../../src/state/runs.js';
import { deriveSnapshot } from '../../src/state/snapshot.js';
import { recoverStaleRuntimeState } from '../../src/state/runtime-recovery.js';
import { listRunnableTasks } from '../../src/orchestration/task-graph.js';
import { appendInboxMessage, listInboxMessages } from '../../src/state/inbox.js';
import { initMatter, deleteMatter, getMatterPath } from '../../src/storage/matter.js';
import { saveCandidate, acceptCandidate } from '../../src/storage/candidate.js';
import { listReducerPackets } from '../../src/reducer/canonical-writer.js';
import type { MatterEventType, TaskStatus, AgentRunStatus } from '../../src/types/state.js';

// ── Schema migration ───────────────────────────────────────────────
describe('Schema migration', () => {
  const matterName = 'test-state-schema';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('creates all tables on first getStateDb() call', () => {
    const db = getStateDb(matterName);
    const tables = db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
      .all() as { name: string }[];

    const tableNames = tables.map((r) => r.name);
    expect(tableNames).toContain('events');
    expect(tableNames).toContain('tasks');
    expect(tableNames).toContain('agent_runs');
    expect(tableNames).toContain('sources');
    expect(tableNames).toContain('citations');
    expect(tableNames).toContain('scheduler_jobs');
    expect(tableNames).toContain('runtime_kv');
    expect(tableNames).toContain('schema_version');
    expect(tableNames).toContain('schema_migrations');
    expect(tableNames).toContain('reducer_packets');
  });

  it('records schema migrations', () => {
    const db = getStateDb(matterName);
    const row = db.prepare('SELECT MAX(version) as version FROM schema_version').get() as {
      version: number;
    };
    expect(row).toBeTruthy();
    expect(row.version).toBe(7);
    const migrations = db.prepare('SELECT version_from, version_to FROM schema_migrations ORDER BY version_to').all() as Array<{ version_from: number; version_to: number }>;
    expect(migrations.map((m) => `${m.version_from}->${m.version_to}`)).toEqual(['0->1', '1->2', '2->3', '3->4', '4->5', '5->6', '6->7']);
  });

  it('can be called twice safely (idempotent)', () => {
    const db1 = getStateDb(matterName);
    const db2 = getStateDb(matterName);
    expect(db1).toBe(db2);

    const tables = db2
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
      .all() as { name: string }[];
    expect(tables.map((table) => table.name)).toEqual(expect.arrayContaining(['task_leases', 'reducer_packets', 'findings', 'finding_citations']));
    expect(tables.length).toBeGreaterThanOrEqual(25);
  });
});

// ── Event append ───────────────────────────────────────────────────
describe('Event append', () => {
  const matterName = 'test-state-events';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('writes event to SQLite and returns it', async () => {
    const event = await appendEvent({
      matterName,
      type: 'matter.created',
      data: { foo: 'bar' },
      source: 'operator',
    });

    expect(event.id).toBeTruthy();
    expect(event.type).toBe('matter.created');
    expect(event.matterName).toBe(matterName);
    expect(event.data).toEqual({ foo: 'bar' });
    expect(event.source).toBe('operator');
    expect(event.timestamp).toBeTruthy();

    const db = getStateDb(matterName);
    const row = db.prepare('SELECT * FROM events WHERE id = ?').get(event.id) as {
      id: string;
      type: string;
      matter_name: string;
      data_json: string;
      source: string;
    };
    expect(row).toBeTruthy();
    expect(row.type).toBe('matter.created');
    expect(JSON.parse(row.data_json)).toEqual({ foo: 'bar' });
  });

  it('writes event to _state/events.jsonl', async () => {
    const event = await appendEvent({
      matterName,
      type: 'agent.run.started',
      data: { skill: 'contract-review' },
    });

    const jsonlPath = getMatterPath(matterName, '_state', 'events.jsonl');
    const content = await readFile(jsonlPath, 'utf-8');
    const lines = content.trim().split('\n');
    const lastLine = JSON.parse(lines[lines.length - 1]) as { id: string; type: string };
    expect(lastLine.id).toBe(event.id);
    expect(lastLine.type).toBe('agent.run.started');
  });

  it('defaults source to operator when not provided', async () => {
    const event = await appendEvent({
      matterName,
      type: 'evidence.ingested',
    });

    expect(event.source).toBe('operator');
  });

  it('writes multiple events and jsonl grows', async () => {
    await appendEvent({ matterName, type: 'matter.created' });
    await appendEvent({ matterName, type: 'evidence.ingested' });

    const jsonlPath = getMatterPath(matterName, '_state', 'events.jsonl');
    const content = await readFile(jsonlPath, 'utf-8');
    const lines = content.trim().split('\n').filter(Boolean);
    expect(lines.length).toBe(2);
  });
});

// ── Event listing ──────────────────────────────────────────────────
describe('Event listing', () => {
  const matterName = 'test-state-listev';

  beforeEach(async () => {
    await initMatter(matterName);
    await appendEvent({ matterName, type: 'matter.created', data: { step: 1 } });
    await appendEvent({ matterName, type: 'evidence.ingested', data: { step: 2 } });
    await appendEvent({ matterName, type: 'agent.run.started', data: { step: 3 } });
    await appendEvent({ matterName, type: 'tool.called', data: { step: 4, output: 'result' } });
    await appendEvent({ matterName, type: 'evidence.ingested', data: { step: 5 } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('lists all events ordered by timestamp DESC', () => {
    const events = listEvents(matterName);
    expect(events.length).toBe(5);
    for (let i = 1; i < events.length; i++) {
      expect(events[i - 1].timestamp >= events[i].timestamp).toBe(true);
    }
  });

  it('filters by type', () => {
    const ingested = listEvents(matterName, { type: 'evidence.ingested' });
    expect(ingested.length).toBe(2);
    for (const e of ingested) {
      expect(e.type).toBe('evidence.ingested');
    }
  });

  it('limits with tail option', () => {
    const tail = listEvents(matterName, { tail: 2 });
    expect(tail.length).toBe(2);
  });

  it('combines tail and type filter', () => {
    const filtered = listEvents(matterName, { type: 'evidence.ingested', tail: 1 });
    expect(filtered.length).toBe(1);
    expect(filtered[0].type).toBe('evidence.ingested');
  });

  it('getEventCount returns total', () => {
    const count = getEventCount(matterName);
    expect(count).toBe(5);
  });

  it('getEventCount returns 0 for matter with no events', () => {
    closeStateDb(matterName);
    const count = getEventCount('nonexistent-getcount-test');
    expect(count).toBe(0);
  });

  it('listEvents returns empty array for matter with no events', () => {
    const events = listEvents('nonexistent-listev-test');
    expect(events).toEqual([]);
  });
});

// ── Task CRUD ──────────────────────────────────────────────────────
describe('Task CRUD', () => {
  const matterName = 'test-state-tasks';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('createTask returns a task node with all fields', () => {
    const task = createTask({
      matterName,
      type: 'analysis',
      title: 'Analyze contract terms',
      dependencies: ['dep-1', 'dep-2'],
      data: { priority: 'high' },
    });

    expect(task.id).toBeTruthy();
    expect(task.matterName).toBe(matterName);
    expect(task.type).toBe('analysis');
    expect(task.status).toBe('pending');
    expect(task.dependencies).toEqual(['dep-1', 'dep-2']);
    expect(task.title).toBe('Analyze contract terms');
    expect(task.data).toEqual({ priority: 'high' });
    expect(task.created).toBeTruthy();
    expect(task.updated).toBeTruthy();
  });

  it('createTask with custom id', () => {
    const task = createTask({
      matterName,
      type: 'review',
      title: 'Review findings',
      id: 'custom-task-id',
    });

    expect(task.id).toBe('custom-task-id');
  });

  it('rejects missing parent task ids', () => {
    expect(() => createTask({
      matterName,
      type: 'review',
      title: 'Child with missing parent',
      parentId: 'missing-parent',
    })).toThrow('Parent task "missing-parent" was not found');
  });

  it('only lists tasks as runnable after dependencies complete', () => {
    const dependency = createTask({ matterName, type: 'analysis', title: 'Dependency' });
    const dependent = createTask({
      matterName,
      type: 'analysis',
      title: 'Dependent',
      dependencies: [dependency.id],
    });

    expect(listRunnableTasks(matterName).map((task) => task.id)).not.toContain(dependent.id);

    updateTask(matterName, dependency.id, { status: 'completed' });

    expect(listRunnableTasks(matterName).map((task) => task.id)).toContain(dependent.id);
  });

  it('getTask retrieves a created task', () => {
    const created = createTask({ matterName, type: 'drafting', title: 'Draft letter' });
    const fetched = getTask(matterName, created.id);
    expect(fetched).toBeTruthy();
    expect(fetched!.id).toBe(created.id);
    expect(fetched!.title).toBe('Draft letter');
  });

  it('getTask returns null for unknown task', () => {
    const result = getTask(matterName, 'nonexistent-task-id');
    expect(result).toBeNull();
  });

  it('updateTask changes status', () => {
    const created = createTask({ matterName, type: 'review', title: 'Review document' });
    const updated = updateTask(matterName, created.id, { status: 'in_progress' });
    expect(updated).toBeTruthy();
    expect(updated!.status).toBe('in_progress');
    expect(updated!.title).toBe('Review document');
  });

  it('updateTask changes title', () => {
    const created = createTask({ matterName, type: 'review', title: 'Old title' });
    const updated = updateTask(matterName, created.id, { title: 'New title' });
    expect(updated!.title).toBe('New title');
  });

  it('updateTask merges data', () => {
    const created = createTask({ matterName, type: 'review', title: 'T', data: { a: 1 } });
    const updated = updateTask(matterName, created.id, { data: { b: 2 } });
    expect(updated!.data).toEqual({ a: 1, b: 2 });
  });

  it('updateTask updates the updated timestamp', () => {
    const created = createTask({ matterName, type: 'review', title: 'T' });
    // Force a small delay to ensure different timestamps
    const start = Date.now();
    while (Date.now() - start < 2) { /* spin */ }
    const updated = updateTask(matterName, created.id, { status: 'completed' });
    expect(updated!.updated).not.toBe(created.updated);
  });

  it('updateTask returns null for nonexistent task', () => {
    const result = updateTask(matterName, 'nonexistent', { status: 'completed' });
    expect(result).toBeNull();
  });

  it('listTasks returns all tasks', () => {
    createTask({ matterName, type: 'a', title: 'Task A' });
    createTask({ matterName, type: 'b', title: 'Task B' });
    createTask({ matterName, type: 'c', title: 'Task C' });

    const tasks = listTasks(matterName);
    expect(tasks.length).toBe(3);
  });

  it('listTasks filters by status', () => {
    createTask({ matterName, type: 'x', title: 'Task X' });
    const task2 = createTask({ matterName, type: 'y', title: 'Task Y' });
    updateTask(matterName, task2.id, { status: 'completed' });

    const pending = listTasks(matterName, { status: 'pending' });
    expect(pending.length).toBe(1);
    expect(pending[0].title).toBe('Task X');

    const completed = listTasks(matterName, { status: 'completed' });
    expect(completed.length).toBe(1);
    expect(completed[0].title).toBe('Task Y');
  });

  it('listTasks filters by type', () => {
    createTask({ matterName, type: 'alpha', title: 'Alpha task' });
    createTask({ matterName, type: 'beta', title: 'Beta task' });

    const alpha = listTasks(matterName, { type: 'alpha' });
    expect(alpha.length).toBe(1);
    expect(alpha[0].title).toBe('Alpha task');
  });

  it('listTasks returns empty array for unknown matter', () => {
    const tasks = listTasks('nonexistent-list-tasks');
    expect(tasks).toEqual([]);
  });

  it('task lifecycle: pending → in_progress → completed', () => {
    const task = createTask({ matterName, type: 'lifecycle', title: 'Lifecycle test' });
    expect(task.status).toBe('pending');

    const inProgress = updateTask(matterName, task.id, { status: 'in_progress' });
    expect(inProgress!.status).toBe('in_progress');

    const completed = updateTask(matterName, task.id, { status: 'completed' });
    expect(completed!.status).toBe('completed');

    const refetched = getTask(matterName, task.id);
    expect(refetched!.status).toBe('completed');
  });
});


// ── Leases and reducer boundary ────────────────────────────────────────────
describe('Task leases and reducer boundary', () => {
  const matterName = 'test-governance';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('acquires and completes a fenced task lease', () => {
    const task = createTask({ matterName, type: 'analysis', title: 'Lease me' });
    const lease = acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-a', ttlMs: 60_000 });
    expect(lease.leaseId).toMatch(/^lease-/);

    const leasedTask = getTask(matterName, task.id)!;
    expect(leasedTask.status).toBe('in_progress');
    expect(leasedTask.leaseOwner).toBe('worker-a');
    expect(leasedTask.leaseFencingToken).toBe(1);
    expect(leasedTask.attemptCount).toBe(1);

    const completed = completeTaskLease(matterName, task.id, lease.leaseId, 'completed');
    expect(completed.status).toBe('completed');
    expect(completed.leaseId).toBeUndefined();
  });

  it('expires stale task leases back to pending', () => {
    const task = createTask({ matterName, type: 'analysis', title: 'Stale lease' });
    const lease = acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-a', ttlMs: 1 });
    const db = getStateDb(matterName);
    db.prepare("UPDATE tasks SET lease_expires_at = ? WHERE id = ? AND matter_name = ?").run('2000-01-01T00:00:00.000Z', task.id, matterName);

    const expired = expireTaskLeases(matterName, task.id);
    expect(expired).toEqual([lease.leaseId]);
    const refetched = getTask(matterName, task.id)!;
    expect(refetched.status).toBe('pending');
    expect(refetched.leaseId).toBeUndefined();
  });

  it('promotes candidates through reducer packets', async () => {
    await saveCandidate(matterName, {
      id: 'cand-reducer',
      matterName,
      type: 'analysis',
      title: 'Reducer candidate',
      content: 'Supported analysis.',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: { citations: [] },
    });

    const artifact = await acceptCandidate(matterName, 'cand-reducer');
    expect(artifact.id).toBe('cand-reducer');
    const packets = listReducerPackets(matterName);
    expect(packets).toHaveLength(1);
    expect(packets[0].decision).toBe('accept');
    expect(packets[0].artifactId).toBe('cand-reducer');
  });
});

// ── Agent run CRUD ─────────────────────────────────────────────────
describe('Agent run CRUD', () => {
  const matterName = 'test-state-runs';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('createRun returns a run with all fields', () => {
    const run = createRun({
      matterName,
      model: 'deepseek/deepseek-v4-flash',
      skill: 'contract-review',
      prompt: 'Review this contract',
    });

    expect(run.id).toBeTruthy();
    expect(run.matterName).toBe(matterName);
    expect(run.status).toBe('running');
    expect(run.model).toBe('deepseek/deepseek-v4-flash');
    expect(run.skill).toBe('contract-review');
    expect(run.prompt).toBe('Review this contract');
    expect(run.started).toBeTruthy();
    expect(run.turns).toBe(0);
    expect(run.ended).toBeUndefined();
  });

  it('createRun with custom id', () => {
    const run = createRun({ matterName, model: 'test', id: 'custom-run-id' });
    expect(run.id).toBe('custom-run-id');
  });

  it('createRun with optional fields omitted', () => {
    const run = createRun({ matterName, model: 'test-model' });
    expect(run.skill).toBeUndefined();
    expect(run.prompt).toBeUndefined();
  });

  it('getRun retrieves a created run', () => {
    const created = createRun({ matterName, model: 'test', prompt: 'Find issues' });
    const fetched = getRun(matterName, created.id);
    expect(fetched).toBeTruthy();
    expect(fetched!.id).toBe(created.id);
    expect(fetched!.prompt).toBe('Find issues');
  });

  it('getRun returns null for unknown run', () => {
    const result = getRun(matterName, 'nonexistent-run-id');
    expect(result).toBeNull();
  });

  it('updateRun changes status to completed and sets ended', () => {
    const created = createRun({ matterName, model: 'test' });
    const updated = updateRun(matterName, created.id, { status: 'completed', turns: 12 });
    expect(updated!.status).toBe('completed');
    expect(updated!.turns).toBe(12);
    expect(updated!.ended).toBeTruthy();
  });

  it('updateRun keeps ended when re-updating to running', () => {
    const created = createRun({ matterName, model: 'test' });
    updateRun(matterName, created.id, { status: 'completed', turns: 5, summary: 'Done' });
    const running = updateRun(matterName, created.id, { status: 'running' });
    expect(running!.status).toBe('running');
    expect(running!.ended).toBeDefined();
  });

  it('updateRun sets summary and error', () => {
    const created = createRun({ matterName, model: 'test' });
    const updated = updateRun(matterName, created.id, {
      status: 'error',
      summary: 'Failed after 3 turns',
      error: 'API rate limit exceeded',
    });
    expect(updated!.summary).toBe('Failed after 3 turns');
    expect(updated!.error).toBe('API rate limit exceeded');
    expect(updated!.status).toBe('error');
  });

  it('updateRun returns null for nonexistent run', () => {
    const result = updateRun(matterName, 'nonexistent', { status: 'completed' });
    expect(result).toBeNull();
  });

  it('listRuns returns all runs', () => {
    createRun({ matterName, model: 'model-a' });
    createRun({ matterName, model: 'model-b' });
    createRun({ matterName, model: 'model-c' });

    const runs = listRuns(matterName);
    expect(runs.length).toBe(3);
  });

  it('listRuns filters by status', () => {
    createRun({ matterName, model: 'm1' });
    const run2 = createRun({ matterName, model: 'm2' });
    updateRun(matterName, run2.id, { status: 'completed' });

    const running = listRuns(matterName, { status: 'running' });
    expect(running.length).toBe(1);

    const completed = listRuns(matterName, { status: 'completed' });
    expect(completed.length).toBe(1);
  });

  it('listRuns respects limit option', () => {
    createRun({ matterName, model: 'a' });
    createRun({ matterName, model: 'b' });
    createRun({ matterName, model: 'c' });

    const limited = listRuns(matterName, { limit: 2 });
    expect(limited.length).toBe(2);
  });

  it('listRuns returns empty array for unknown matter', () => {
    const runs = listRuns('nonexistent-list-runs');
    expect(runs).toEqual([]);
  });

  it('run lifecycle: running → completed', () => {
    const run = createRun({ matterName, model: 'lifecycle-model' });
    expect(run.status).toBe('running');

    const completed = updateRun(matterName, run.id, {
      status: 'completed',
      turns: 42,
      summary: 'All tasks done',
    });
    expect(completed!.status).toBe('completed');
    expect(completed!.turns).toBe(42);
    expect(completed!.ended).toBeTruthy();

    const refetched = getRun(matterName, run.id);
    expect(refetched!.status).toBe('completed');
    expect(refetched!.summary).toBe('All tasks done');
  });
});

// ── Snapshot ───────────────────────────────────────────────────────
describe('Snapshot', () => {
  const matterName = 'test-state-snapshot';

  beforeEach(async () => {
    await initMatter(matterName);
    createTask({ matterName, type: 'analysis', title: 'Task 1' });
    createTask({ matterName, type: 'analysis', title: 'Task 2' });
    const task3 = createTask({ matterName, type: 'review', title: 'Task 3' });
    updateTask(matterName, task3.id, { status: 'completed' });
    createRun({ matterName, model: 'test-model' });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('returns snapshot with all expected top-level fields', async () => {
    const snapshot = await deriveSnapshot(matterName);

    expect(snapshot.matterName).toBe(matterName);
    expect(snapshot.timestamp).toBeTruthy();
    expect(snapshot.status).toBe('pending');
    expect(snapshot.phase).toBeTruthy();
    expect(Array.isArray(snapshot.activeAgents)).toBe(true);
    expect(snapshot.taskCounts).toBeTruthy();
    expect(snapshot.latestFindings).toBeInstanceOf(Array);
    expect(snapshot.latestRisks).toBeInstanceOf(Array);
    expect(snapshot.candidates).toBeInstanceOf(Array);
    expect(snapshot.costs).toBeTruthy();
    expect(snapshot.nextActions).toBeInstanceOf(Array);
  });

  it('phase is intake for new matter with no evidence', async () => {
    const snapshot = await deriveSnapshot(matterName);
    expect(snapshot.phase).toBe('intake');
  });

  it('taskCounts reflect actual task numbers', async () => {
    const snapshot = await deriveSnapshot(matterName);
    expect(snapshot.taskCounts.total).toBe(3);
    expect(snapshot.taskCounts.pending).toBe(2);
    expect(snapshot.taskCounts.completed).toBe(1);
  });



  it('reports candidate/artifact store telemetry without counting transcripts as candidates', async () => {
    await saveCandidate(matterName, {
      id: 'candidate-json-1',
      matterName,
      type: 'draft',
      title: 'JSON candidate',
      content: 'candidate content',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: {},
    });
    await writeFile(getMatterPath(matterName, '_candidates', 'transcript-2026-05-09.md'), 'agent transcript', 'utf-8');
    await mkdir(getMatterPath(matterName, '_artifacts'), { recursive: true });
    await writeFile(getMatterPath(matterName, '_artifacts', 'notes.md'), 'non-json artifact sidecar', 'utf-8');

    const snapshot = await deriveSnapshot(matterName);

    expect(snapshot.storeTelemetry?.candidateSummary.jsonCount).toBe(1);
    expect(snapshot.storeTelemetry?.candidateSummary.transcriptCount).toBe(1);
    expect(snapshot.storeTelemetry?.candidateSummary.nonJsonCount).toBe(1);
    expect(snapshot.storeTelemetry?.artifactSummary.nonJsonCount).toBe(1);
    expect(snapshot.storeTelemetry?.reconciliation.notes).toEqual(
      expect.arrayContaining([expect.stringContaining('transcript file')]),
    );
  });

  it('costs have expected shape', async () => {
    const snapshot = await deriveSnapshot(matterName);
    expect(typeof snapshot.costs.estimatedTotal).toBe('number');
    expect(typeof snapshot.costs.lastRunCost).toBe('number');
  });

  it('nextActions includes recommended commands', async () => {
    const snapshot = await deriveSnapshot(matterName);
    expect(snapshot.nextActions.length).toBeGreaterThan(0);
    expect(snapshot.nextActions).toEqual(
      expect.arrayContaining([expect.stringContaining('harness')])
    );
  });

  it('activeAgents reflects running runs', async () => {
    const snapshot = await deriveSnapshot(matterName);
    expect(snapshot.activeAgents.length).toBe(1);
    expect(snapshot.activeAgents[0].status).toBe('running');
  });

  it('recovers stale dead runs and orphaned in-progress tasks before reporting snapshot', async () => {
    const run = listRuns(matterName, { status: 'running' })[0];
    const task = createTask({ matterName, type: 'stale', title: 'Orphaned task', runId: run.id });
    updateTask(matterName, task.id, { status: 'in_progress' });
    const db = getStateDb(matterName);
    db.prepare('UPDATE agent_runs SET pid = ?, heartbeat_at = ? WHERE id = ? AND matter_name = ?')
      .run(99999999, '2000-01-01T00:00:00.000Z', run.id, matterName);

    const snapshot = await deriveSnapshot(matterName);

    expect(snapshot.activeAgents).toHaveLength(0);
    expect(getRun(matterName, run.id)?.status).toBe('error');
    const recoveredTask = getTask(matterName, task.id);
    expect(recoveredTask?.status).toBe('failed');
    expect(recoveredTask?.data.runtimeRecovery).toMatchObject({
      recoveryOutcome: 'spawn_replacement',
      runId: run.id,
      taskId: task.id,
      caseMemoryVersionBefore: 'unknown',
      caseMemoryVersionAfter: 'unknown',
      decisionReason: expect.stringContaining('went stale'),
    });
    expect(listEvents(matterName, { type: 'agent.run.error' }).some((event) =>
      event.taskId === task.id &&
      event.data.recoveryOutcome === 'spawn_replacement' &&
      event.data.recovery === 'stale_task'
    )).toBe(true);
    expect(listEvents(matterName, { type: 'agent.run.error' }).some((event) =>
      event.runId === run.id &&
      event.data.recoveryOutcome === 'morning_review_queue' &&
      event.data.reviewQueueId === `review-${run.id}`
    )).toBe(true);
  });

  it('records recovery outcome decisions from stale task context', async () => {
    const run = listRuns(matterName, { status: 'running' })[0];
    const task = createTask({
      matterName,
      type: 'stale',
      title: 'Recoverable task',
      runId: run.id,
      data: {
        artifactIds: ['artifact-1'],
        retryCount: 1,
        maxRecoveryRetries: 3,
        priorAttemptIds: ['attempt-0'],
        caseMemoryVersion: 'memory-v1',
      },
    });
    updateTask(matterName, task.id, { status: 'in_progress' });
    const db = getStateDb(matterName);
    db.prepare('UPDATE agent_runs SET pid = ?, heartbeat_at = ? WHERE id = ? AND matter_name = ?')
      .run(99999999, '2000-01-01T00:00:00.000Z', run.id, matterName);

    const result = await recoverStaleRuntimeState(matterName);
    const decision = result.recoveryDecisions.find((entry) => entry.taskId === task.id);

    expect(decision).toMatchObject({
      recoveryOutcome: 'retry_same_worker',
      runId: run.id,
      taskId: task.id,
      priorAttemptIds: ['attempt-0'],
      outputArtifactIds: ['artifact-1'],
      caseMemoryVersionBefore: 'memory-v1',
      caseMemoryVersionAfter: 'memory-v1',
      decisionReason: expect.stringContaining('retry the same worker'),
    });
    expect(getTask(matterName, task.id)?.data.runtimeRecovery).toMatchObject({
      recoveryOutcome: 'retry_same_worker',
      caseMemoryVersionBefore: 'memory-v1',
      caseMemoryVersionAfter: 'memory-v1',
    });
  });

  it('recovers orphaned in-progress tasks even while an unrelated run is live', async () => {
    const terminalRun = createRun({ matterName, model: 'terminal-owner' });
    updateRun(matterName, terminalRun.id, { status: 'completed' });
    const terminalOwnedTask = createTask({ matterName, type: 'stale', title: 'Terminal-owned task', runId: terminalRun.id });
    const ownerlessTask = createTask({ matterName, type: 'stale', title: 'Ownerless task' });
    updateTask(matterName, terminalOwnedTask.id, { status: 'in_progress' });
    updateTask(matterName, ownerlessTask.id, { status: 'in_progress' });

    const snapshot = await deriveSnapshot(matterName);

    expect(snapshot.activeAgents).toHaveLength(1);
    expect(getTask(matterName, terminalOwnedTask.id)?.status).toBe('failed');
    expect(getTask(matterName, ownerlessTask.id)?.status).toBe('failed');
  });

  it('snapshot for unknown matter throws', async () => {
    await expect(deriveSnapshot('nonexistent-snapshot')).rejects.toThrow();
  });
});

// ── Inbox ──────────────────────────────────────────────────────────
describe('Inbox', () => {
  const matterName = 'test-state-inbox';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('appendInboxMessage returns a message with all fields', async () => {
    const message = await appendInboxMessage(matterName, 'Urgent: please review this document');

    expect(message.id).toBeTruthy();
    expect(message.timestamp).toBeTruthy();
    expect(message.source).toBe('operator');
    expect(message.content).toBe('Urgent: please review this document');
    expect(message.matterName).toBe(matterName);
  });

  it('appendInboxMessage with custom source', async () => {
    const message = await appendInboxMessage(matterName, 'Hello from outside', 'external');

    expect(message.source).toBe('external');
    expect(message.content).toBe('Hello from outside');
  });

  it('appendInboxMessage writes to _state/inbox.jsonl', async () => {
    const message = await appendInboxMessage(matterName, 'Test message');

    const inboxPath = getMatterPath(matterName, '_state', 'inbox.jsonl');
    const content = await readFile(inboxPath, 'utf-8');
    const parsed = JSON.parse(content.trim()) as { id: string; content: string };
    expect(parsed.id).toBe(message.id);
    expect(parsed.content).toBe('Test message');
  });

  it('appendInboxMessage also creates an inbox.message.received event', async () => {
    await appendInboxMessage(matterName, 'Trigger an event');

    const events = listEvents(matterName, { type: 'inbox.message.received' });
    expect(events.length).toBe(1);
    expect(events[0].data).toHaveProperty('messageId');
    expect(events[0].data).toHaveProperty('content');
  });

  it('listInboxMessages returns messages sorted newest first', async () => {
    const msg1 = await appendInboxMessage(matterName, 'First message');
    await new Promise((r) => setTimeout(r, 10));
    const msg2 = await appendInboxMessage(matterName, 'Second message');

    const messages = await listInboxMessages(matterName);
    expect(messages.length).toBe(2);
    expect(messages[0].content).toBe('Second message');
    expect(messages[1].content).toBe('First message');
  });

  it('listInboxMessages with tail option limits results', async () => {
    await appendInboxMessage(matterName, 'Msg 1');
    await appendInboxMessage(matterName, 'Msg 2');
    await appendInboxMessage(matterName, 'Msg 3');

    const tail = await listInboxMessages(matterName, { tail: 2 });
    expect(tail.length).toBe(2);
    expect(tail[0].content !== 'Msg 1').toBe(true);
    expect(tail[1].content !== 'Msg 1').toBe(true);
  });

  it('listInboxMessages returns empty array for matter with no inbox', async () => {
    const messages = await listInboxMessages('nonexistent-inbox-test');
    expect(messages).toEqual([]);
  });
});

// ── Backward compatibility ─────────────────────────────────────────
describe('Backward compatibility', () => {
  const matterName = 'test-state-compat';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('works when _state/ directory is deleted and recreated lazily', async () => {
    closeStateDb(matterName);
    const stateDir = getMatterPath(matterName, '_state');
    await rm(stateDir, { recursive: true, force: true });

    const db = getStateDb(matterName);
    const tables = db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
      .all() as { name: string }[];
    expect(tables.length).toBeGreaterThanOrEqual(7);
  });

  it('can append events after state recreation', async () => {
    closeStateDb(matterName);
    const stateDir = getMatterPath(matterName, '_state');
    await rm(stateDir, { recursive: true, force: true });

    const event = await appendEvent({ matterName, type: 'matter.created' });
    expect(event.id).toBeTruthy();
    expect(event.type).toBe('matter.created');

    const events = listEvents(matterName);
    expect(events.length).toBe(1);
  });

  it('can CRUD tasks after state recreation', async () => {
    closeStateDb(matterName);
    const stateDir = getMatterPath(matterName, '_state');
    await rm(stateDir, { recursive: true, force: true });

    const task = createTask({ matterName, type: 'compat', title: 'Compat task' });
    expect(task.id).toBeTruthy();

    const fetched = getTask(matterName, task.id);
    expect(fetched).toBeTruthy();

    const updated = updateTask(matterName, task.id, { status: 'completed' });
    expect(updated!.status).toBe('completed');
  });

  it('can CRUD runs after state recreation', async () => {
    closeStateDb(matterName);
    const stateDir = getMatterPath(matterName, '_state');
    await rm(stateDir, { recursive: true, force: true });

    const run = createRun({ matterName, model: 'compat-model' });
    expect(run.id).toBeTruthy();

    const fetched = getRun(matterName, run.id);
    expect(fetched).toBeTruthy();

    const updated = updateRun(matterName, run.id, { status: 'completed', turns: 1 });
    expect(updated!.status).toBe('completed');
  });

  it('can use inbox after state recreation', async () => {
    closeStateDb(matterName);
    const stateDir = getMatterPath(matterName, '_state');
    await rm(stateDir, { recursive: true, force: true });

    const msg = await appendInboxMessage(matterName, 'Compat inbox message');
    expect(msg.id).toBeTruthy();

    const messages = await listInboxMessages(matterName);
    expect(messages.length).toBe(1);
    expect(messages[0].content).toBe('Compat inbox message');
  });

  it('can derive snapshot after state recreation', async () => {
    closeStateDb(matterName);
    const stateDir = getMatterPath(matterName, '_state');
    await rm(stateDir, { recursive: true, force: true });

    const snapshot = await deriveSnapshot(matterName);
    expect(snapshot.matterName).toBe(matterName);
    expect(snapshot.status).toBeTruthy();
  });
});
