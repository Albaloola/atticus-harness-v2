import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import statusHandler from '../../src/commands/status.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeAllStateDbs } from '../../src/state/store.js';

describe('status command telemetry and readiness', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-status-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    closeAllStateDbs();
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('emits runReadiness and legal blocker fields in json mode', async () => {
    const matterName = 'status-json-readiness';
    await initMatter(matterName);

    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    await statusHandler(matterName, { json: true });
    const rawOutput = String(log.mock.calls.at(-1)?.[0]);
    log.mockRestore();

    const output = JSON.parse(rawOutput);

    expect(output.runReadiness).toMatchObject({
      courtReadyStatus: expect.any(String),
      activityStatus: expect.any(String),
      legalStatus: expect.any(String),
      exportStatus: expect.any(String),
    });
    expect(output.legalBlockers).toMatchObject({
      total: expect.any(Number),
      byType: expect.any(Object),
      topBlockers: expect.any(Array),
    });
  });

  it('exposes store telemetry and counters in json mode', async () => {
    const matterName = 'status-json-telemetry';
    await initMatter(matterName);

    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    await statusHandler(matterName, { json: true });
    const rawOutput = String(log.mock.calls.at(-1)?.[0]);
    log.mockRestore();

    const output = JSON.parse(rawOutput);

    expect(output).toHaveProperty('storeTelemetry');
    expect(output.storeTelemetry).toMatchObject({
      candidateSummary: expect.any(Object),
      artifactSummary: expect.any(Object),
      reconciliation: expect.any(Object),
    });
    expect(typeof output.candidateCount).toBe('number');
    expect(typeof output.artifactCount).toBe('number');
  });
});
