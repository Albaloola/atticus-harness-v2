import { describe, it, expect, afterEach } from 'vitest';
import { existsSync, rmSync } from 'fs';
import { readFile } from 'fs/promises';
import { initMatter, deleteMatter } from '../../src/storage/matter.ts';
import { closeStateDb } from '../../src/state/store.ts';
import {
  getResumeSummaryPath,
  readResumeSummary,
  writeResumeSummary,
} from '../../src/state/resume-summary.ts';

describe('resume summary state', () => {
  const created: string[] = [];

  afterEach(async () => {
    for (const matterName of created.splice(0)) {
      closeStateDb(matterName);
      await deleteMatter(matterName).catch(() => undefined);
    }
  });

  async function freshMatter(name: string): Promise<string> {
    created.push(name);
    await initMatter(name);
    return name;
  }

  it('writes and reads a redacted resume summary under matter state', async () => {
    const matterName = await freshMatter('resume-summary-redaction-test');

    const stored = await writeResumeSummary(matterName, {
      lastUserGoal: 'prepare source report',
      activePlan: ['inspect', 'implement'],
      pendingToolCalls: [
        {
          id: 'call-1',
          name: 'web_fetch',
          input: {
            url: 'https://example.test',
            apiKey: 'sk-secret-value-123456',
          },
          status: 'pending',
        },
      ],
      lastModelVisibleSummary: 'Used Bearer or-secret-value-1234567890 for a provider call.',
      artifactPaths: ['matters/resume-summary-redaction-test/_artifacts/report.json'],
      failedOperation: {
        name: 'provider-call',
        authorization: 'Bearer sk-another-secret-123456',
        detail: 'SEARCH_API_KEY=hidden-value failed',
      },
      updatedAt: '2026-05-09T12:00:00.000Z',
    });

    expect(getResumeSummaryPath(matterName)).toBe('matters/resume-summary-redaction-test/_state/resume-summary.json');
    expect(existsSync(getResumeSummaryPath(matterName))).toBe(true);
    expect(stored.updatedAt).toBe('2026-05-09T12:00:00.000Z');
    expect(JSON.stringify(stored)).not.toContain('sk-secret-value');
    expect(JSON.stringify(stored)).not.toContain('hidden-value');

    const raw = await readFile(getResumeSummaryPath(matterName), 'utf-8');
    expect(raw).toContain('"lastUserGoal": "prepare source report"');
    expect(raw).not.toContain('sk-another-secret');
    expect(raw).not.toContain('hidden-value');

    const read = await readResumeSummary(matterName);
    expect(read).toMatchObject({
      lastUserGoal: 'prepare source report',
      activePlan: ['inspect', 'implement'],
      artifactPaths: ['matters/resume-summary-redaction-test/_artifacts/report.json'],
      updatedAt: '2026-05-09T12:00:00.000Z',
    });
    expect(JSON.stringify(read)).not.toContain('or-secret-value');
    expect(JSON.stringify(read)).not.toContain('sk-another-secret');
  });

  it('returns null when no resume summary exists', async () => {
    const matterName = await freshMatter('resume-summary-missing-test');

    rmSync(getResumeSummaryPath(matterName), { force: true });

    await expect(readResumeSummary(matterName)).resolves.toBeNull();
  });
});
