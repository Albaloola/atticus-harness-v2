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
import { createReducerPacket, listReducerPackets } from '../../src/state/reducer-packets.js';
import { closeStateDb, getStateDb } from '../../src/state/store.js';
import { initSchema } from '../../src/state/schema.js';
import { latestStateSchemaVersion } from '../../src/state/migrations.js';
import { resolveConfig } from '../../src/config/loader.js';
import { DEFAULTS } from '../../src/config/schema.js';
import { buildControlPanelSnapshot } from '../../src/commands/control-panel.js';

describe('reducer-only canonical writes', () => {
  const matterName = 'test-reducer';

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

    await expect(saveArtifact(matterName, {
      id: 'forged-artifact',
      matterName,
      type: 'draft',
      title: 'Forged write',
      content: 'bypass',
      accepted: new Date().toISOString(),
      acceptedFrom: 'direct-candidate',
      citations: [],
    }, { canonicalWrite: 'reducer', reducerPacketId: 'missing-packet' })).rejects.toThrow('reducer packet missing-packet was not found');

    const untargetedPacket = createReducerPacket({
      matterName,
      candidateId: 'candidate-untargeted',
      decision: 'accept',
    });
    await expect(saveArtifact(matterName, {
      id: 'untargeted-artifact',
      matterName,
      type: 'draft',
      title: 'Untargeted write',
      content: 'bypass',
      accepted: new Date().toISOString(),
      acceptedFrom: 'candidate-untargeted',
      citations: [],
    }, { canonicalWrite: 'reducer', reducerPacketId: untargetedPacket.id })).rejects.toThrow('has no artifact target');

    const rejectedPacket = createReducerPacket({
      matterName,
      candidateId: 'candidate-rejected-packet',
      artifactId: 'rejected-artifact',
      decision: 'reject',
    });
    await expect(saveArtifact(matterName, {
      id: 'rejected-artifact',
      matterName,
      type: 'draft',
      title: 'Rejected write',
      content: 'bypass',
      accepted: new Date().toISOString(),
      acceptedFrom: 'candidate-rejected-packet',
      citations: [],
    }, { canonicalWrite: 'reducer', reducerPacketId: rejectedPacket.id })).rejects.toThrow('decision is reject');

    const mismatchedCandidatePacket = createReducerPacket({
      matterName,
      candidateId: 'candidate-owner',
      artifactId: 'candidate-mismatch-artifact',
      decision: 'accept',
    });
    await expect(saveArtifact(matterName, {
      id: 'candidate-mismatch-artifact',
      matterName,
      type: 'draft',
      title: 'Candidate mismatch',
      content: 'bypass',
      accepted: new Date().toISOString(),
      acceptedFrom: 'different-candidate',
      citations: [],
    }, { canonicalWrite: 'reducer', reducerPacketId: mismatchedCandidatePacket.id })).rejects.toThrow('belongs to candidate candidate-owner');

    expect(() => createReducerPacket({
      matterName,
      candidateId: 'unsafe-candidate',
      artifactId: '../escape',
      decision: 'accept',
    })).toThrow('Unsafe reducer packet artifact id');

    const db = getStateDb(matterName);
    db.prepare(
      `INSERT INTO reducer_packets (
        id, matter_name, candidate_id, artifact_id, decision, status, reducer_name,
        rationale, created_at, decided_at, data_json, metadata_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      'unsafe-packet',
      matterName,
      'unsafe-candidate',
      '../escape',
      'accept',
      'decided',
      'test-reducer',
      'forged unsafe target',
      new Date().toISOString(),
      new Date().toISOString(),
      '{}',
      '{}',
    );
    await expect(saveArtifact(matterName, {
      id: '../escape',
      matterName,
      type: 'draft',
      title: 'Unsafe target',
      content: 'bypass',
      accepted: new Date().toISOString(),
      acceptedFrom: 'unsafe-candidate',
      citations: [],
    }, { canonicalWrite: 'reducer', reducerPacketId: 'unsafe-packet' })).rejects.toThrow('Unsafe artifact id');

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
    expect(packets[0].reducerName).toBe('accept-command-reducer');
    expect(packets[0].rationale).toBe('Accepted candidate through reducer-only canonical promotion path.');
    expect(packets[0].metadata.artifactId).toBe('candidate-1');
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

describe('task lease lifecycle', () => {
  const matterName = 'test-leases';

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

  it('rejects legacy complete calls when the task id does not own the lease', () => {
    const leasedTask = createTask({ matterName, type: 'analysis', title: 'Lease owner' });
    const otherTask = createTask({ matterName, type: 'analysis', title: 'Wrong task' });
    const lease = acquireTaskLease({ matterName, taskId: leasedTask.id, owner: 'worker-a', ttlMs: 1000, now: new Date('2026-05-06T12:00:00Z') });

    expect(() => completeTaskLease(matterName, otherTask.id, lease.id, 'completed')).toThrow(`Lease ${lease.id} is not active for task ${otherTask.id}`);
    expect(getTask(matterName, leasedTask.id)!.status).toBe('in_progress');
    expect(getTask(matterName, otherTask.id)!.status).toBe('pending');
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

  it('preserves reducer packet metadata compatibility when data_json is empty', () => {
    const db = getStateDb(matterName);
    db.prepare(
      `INSERT INTO reducer_packets (
        id, matter_name, candidate_id, artifact_id, decision, status, reducer_name,
        rationale, created_at, decided_at, data_json, metadata_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      'legacy-packet',
      matterName,
      'legacy-candidate',
      null,
      'accept',
      'decided',
      'legacy-reducer',
      'legacy rationale',
      '2026-05-06T12:00:00.000Z',
      '',
      '{}',
      JSON.stringify({ artifactId: 'legacy-artifact', preserved: true }),
    );

    const packet = listReducerPackets(matterName, { candidateId: 'legacy-candidate' })[0];
    expect(packet.reducerName).toBe('legacy-reducer');
    expect(packet.rationale).toBe('legacy rationale');
    expect(packet.artifactId).toBe('legacy-artifact');
    expect(packet.data.preserved).toBe(true);
    expect(packet.metadata.preserved).toBe(true);
  });
});

describe('provider policy fail-closed semantics', () => {
  let tmpHome: string;
  let originalHome: string | undefined;

  beforeEach(async () => {
    tmpHome = await mkdtemp(join(tmpdir(), 'harness-home-'));
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

describe('migration registry and control panel', () => {
  const matterName = 'test-control-panel';

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName).catch(() => undefined);
  });

  it('applies versioned state migrations idempotently', () => {
    const db = new Database(':memory:');
    initSchema(db);
    initSchema(db);

    const versions = db.prepare('SELECT version FROM schema_version ORDER BY version').all() as { version: number }[];
    expect(versions.map((row) => row.version)).toEqual([1, 2, 3, 4]);
    expect(versions.at(-1)!.version).toBe(latestStateSchemaVersion());

    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all() as { name: string }[];
    expect(tables.map((row) => row.name)).toEqual(expect.arrayContaining(['task_leases', 'reducer_packets']));
    db.close();
  });

  it('upgrades already-version-3 databases with durable lease and reducer compatibility schema', () => {
    const db = new Database(':memory:');
    initSchema(db);

    db.exec(`
      DELETE FROM schema_version WHERE version = 4;
      DELETE FROM schema_migrations WHERE version_to = 4;
      DROP TABLE task_leases;
      DROP TABLE reducer_packets;
      CREATE TABLE reducer_packets (
        id TEXT PRIMARY KEY,
        matter_name TEXT NOT NULL,
        candidate_id TEXT NOT NULL,
        artifact_id TEXT,
        decision TEXT NOT NULL,
        reducer_name TEXT NOT NULL,
        rationale TEXT NOT NULL DEFAULT '',
        created_at TEXT NOT NULL,
        metadata_json TEXT NOT NULL DEFAULT '{}'
      );
      INSERT INTO reducer_packets (
        id, matter_name, candidate_id, artifact_id, decision, reducer_name,
        rationale, created_at, metadata_json
      ) VALUES (
        'legacy-packet', 'legacy-matter', 'legacy-candidate', NULL, 'accept',
        'legacy-reducer', 'legacy rationale', '2026-05-06T12:00:00.000Z',
        '{"artifactId":"legacy-artifact","preserved":true}'
      );
      INSERT INTO tasks (
        id, matter_name, kind, type, title, status, created, updated,
        lease_id, lease_owner, lease_role, lease_fencing_token, lease_expires_at,
        lease_acquired_at, lease_heartbeat_at
      ) VALUES (
        'legacy-task', 'legacy-matter', '', 'analysis', 'Legacy leased task', 'in_progress',
        '2026-05-06T12:00:00.000Z', '2026-05-06T12:00:00.000Z',
        'lease-legacy', 'legacy-worker', 'worker', 7, '2026-05-06T12:15:00.000Z',
        '2026-05-06T12:00:00.000Z', '2026-05-06T12:00:01.000Z'
      );
    `);

    initSchema(db);

    const version = db.prepare('SELECT MAX(version) AS version FROM schema_version').get() as { version: number };
    expect(version.version).toBe(latestStateSchemaVersion());
    const reducerColumns = db.prepare('PRAGMA table_info(reducer_packets)').all() as Array<{ name: string }>;
    expect(reducerColumns.map((column) => column.name)).toEqual(expect.arrayContaining(['status', 'decided_at', 'lease_id', 'data_json']));
    const packet = db.prepare('SELECT data_json FROM reducer_packets WHERE id = ?').get('legacy-packet') as { data_json: string };
    expect(JSON.parse(packet.data_json)).toMatchObject({ artifactId: 'legacy-artifact', preserved: true });
    const lease = db.prepare('SELECT * FROM task_leases WHERE id = ?').get('lease-legacy') as { task_id: string; owner: string; fencing_token: number } | undefined;
    expect(lease).toMatchObject({ task_id: 'legacy-task', owner: 'legacy-worker', fencing_token: 7 });
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
