import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, rmSync, writeFileSync } from 'fs';
import { mkdtemp } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import Database = require('better-sqlite3');
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { saveCandidate, acceptCandidate, rejectCandidate } from '../../src/storage/candidate.js';
import { saveArtifact, listArtifacts } from '../../src/storage/artifact.js';
import { createTask, getTask } from '../../src/state/tasks.js';
import { acquireTaskLease, renewTaskLease, completeTaskLease, expireTaskLeases, listTaskLeases } from '../../src/state/leases.js';
import { listReducerPackets } from '../../src/state/reducer-packets.js';
import { closeStateDb, getStateDb } from '../../src/state/store.js';
import { initSchema } from '../../src/state/schema.js';
import { latestStateSchemaVersion } from '../../src/state/migrations.js';
import { resolveConfig } from '../../src/config/loader.js';
import { DEFAULTS } from '../../src/config/schema.js';
import { buildControlPanelSnapshot } from '../../src/commands/control-panel.js';

describe('V3 reducer-only canonical writes', () => {
  const matterName = 'test-v3-reducer';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('blocks direct artifact writes and promotes candidates through reducer packets only', async () => {
    await expect(saveArtifact(matterName, {
      id: 'direct-artifact',
      matterName,
      type: 'draft',
      title: 'Direct write',
      content: 'bypass',
      accepted: new Date().toISOString(),
      acceptedFrom: 'direct-candidate',
      citations: [],
    })).rejects.toThrow('reducer-only');

    await saveCandidate(matterName, {
      id: 'candidate-1',
      matterName,
      type: 'draft',
      title: 'Candidate one',
      content: 'canonical content',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: { citations: [] },
    });

    const artifact = await acceptCandidate(matterName, 'candidate-1');
    expect(artifact.canonicalWrite).toBe('reducer');
    expect(artifact.reducerPacketId).toBeTruthy();

    const artifacts = await listArtifacts(matterName);
    expect(artifacts).toHaveLength(1);
    expect(artifacts[0].acceptedFrom).toBe('candidate-1');

    const packets = listReducerPackets(matterName, { candidateId: 'candidate-1' });
    expect(packets).toHaveLength(1);
    expect(packets[0].decision).toBe('accept');
    expect(packets[0].status).toBe('written');
  });

  it('reject does not create a canonical artifact', async () => {
    await saveCandidate(matterName, {
      id: 'candidate-rejected',
      matterName,
      type: 'draft',
      title: 'Rejected candidate',
      content: 'not canonical',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: {},
    });

    await rejectCandidate(matterName, 'candidate-rejected', 'unsafe');
    expect(await listArtifacts(matterName)).toEqual([]);
  });
});

describe('V3 task lease lifecycle', () => {
  const matterName = 'test-v3-leases';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('acquires, renews, completes, and fences duplicate leases', () => {
    const task = createTask({ matterName, type: 'analysis', title: 'Lease me' });
    const now = new Date('2026-05-06T12:00:00Z');
    const lease = acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-a', ttlMs: 1000, now });

    expect(lease.status).toBe('active');
    expect(lease.fencingToken).toBe(1);
    expect(getTask(matterName, task.id)!.status).toBe('in_progress');
    expect(() => acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-b', ttlMs: 1000, now })).toThrow('not leaseable');

    const renewed = renewTaskLease({ matterName, leaseId: lease.id, ttlMs: 5000, now: new Date('2026-05-06T12:00:00.500Z') });
    expect(new Date(renewed.expiresAt).getTime()).toBe(new Date('2026-05-06T12:00:05.500Z').getTime());

    const completed = completeTaskLease({ matterName, leaseId: lease.id, taskStatus: 'completed', reason: 'done', now: new Date('2026-05-06T12:00:01Z') });
    expect(completed.status).toBe('completed');
    expect(getTask(matterName, task.id)!.status).toBe('completed');
  });

  it('expires stale leases and lets a new owner reclaim with a higher fencing token', () => {
    const task = createTask({ matterName, type: 'analysis', title: 'Expire me' });
    const lease = acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-a', ttlMs: 1000, now: new Date('2026-05-06T12:00:00Z') });

    const expired = expireTaskLeases(matterName, { now: new Date('2026-05-06T12:00:02Z') });
    expect(expired.map((item) => item.id)).toContain(lease.id);
    expect(getTask(matterName, task.id)!.status).toBe('pending');

    const reclaimed = acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-b', ttlMs: 1000, now: new Date('2026-05-06T12:00:03Z') });
    expect(reclaimed.fencingToken).toBe(2);
    expect(listTaskLeases(matterName)).toHaveLength(2);
  });
});

describe('V3 provider policy fail-closed semantics', () => {
  let tmpHome: string;
  let originalHome: string | undefined;

  beforeEach(async () => {
    tmpHome = await mkdtemp(join(tmpdir(), 'harness-v3-home-'));
    originalHome = process.env.HOME;
    process.env.HOME = tmpHome;
    mkdirSync(join(tmpHome, '.atticus-harness'), { recursive: true });
  });

  afterEach(() => {
    if (originalHome === undefined) delete process.env.HOME;
    else process.env.HOME = originalHome;
    rmSync(tmpHome, { recursive: true, force: true });
  });

  it('denies unknown provider selection instead of silently falling back', async () => {
    await expect(resolveConfig({ providerName: 'missing-provider' })).rejects.toThrow('not configured');
  });

  it('denies unrouted default and fallback models', async () => {
    const config = structuredClone(DEFAULTS);
    config.providers.openrouter = {
      ...config.providers.openrouter,
      defaultModel: 'unrouted/default',
      fallbackModel: 'unrouted/fallback',
    };
    writeFileSync(join(tmpHome, '.atticus-harness', 'config.json'), JSON.stringify(config), 'utf-8');

    await expect(resolveConfig()).rejects.toThrow('Provider policy denied provider default model');
  });

  it('denies reserved providers even when configured', async () => {
    const config = structuredClone(DEFAULTS);
    config.providerPolicy.defaultProvider = 'anthropic';
    config.providerPolicy.allowedProviders = ['anthropic'];
    config.providers.anthropic = {
      baseUrl: 'https://example.invalid',
      defaultModel: config.providerPolicy.models.reasoning,
      reserved: true,
    };
    writeFileSync(join(tmpHome, '.atticus-harness', 'config.json'), JSON.stringify(config), 'utf-8');

    await expect(resolveConfig()).rejects.toThrow('reserved provider');
  });
});

describe('V3 migration registry and control panel', () => {
  const matterName = 'test-v3-control-panel';

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName).catch(() => undefined);
  });

  it('applies versioned state migrations idempotently', () => {
    const db = new Database(':memory:');
    initSchema(db);
    initSchema(db);

    const versions = db.prepare('SELECT version FROM schema_version ORDER BY version').all() as { version: number }[];
    expect(versions.map((row) => row.version)).toEqual([1, 2, 3]);
    expect(versions.at(-1)!.version).toBe(latestStateSchemaVersion());

    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all() as { name: string }[];
    expect(tables.map((row) => row.name)).toEqual(expect.arrayContaining(['task_leases', 'reducer_packets']));
    db.close();
  });

  it('builds a read-only control panel snapshot with leases and reducer queue state', async () => {
    await initMatter(matterName);
    const task = createTask({ matterName, type: 'analysis', title: 'Panel task' });
    acquireTaskLease({ matterName, taskId: task.id, owner: 'worker-panel', ttlMs: 60000 });

    const panel = await buildControlPanelSnapshot(matterName, { tail: 5 });
    expect(panel.matter.name).toBe(matterName);
    expect(panel.leases).toHaveLength(1);
    expect(panel.leases[0].owner).toBe('worker-panel');
    expect(panel.reducerPackets).toEqual([]);
    expect(panel.controls.pause).toBe(`harness pause ${matterName}`);
  });
});
