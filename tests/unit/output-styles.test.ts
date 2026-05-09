import { mkdtemp, mkdir, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import { describe, expect, it } from 'vitest';
import {
  loadOutputStyles,
  resolveOutputStyle,
} from '../../src/output-styles/loader.js';

describe('output style loader', () => {
  it('loads built-in Harness output styles', async () => {
    const styles = await loadOutputStyles({
      userDir: join(tmpdir(), 'missing-atticus-user-styles'),
      workspaceDir: join(tmpdir(), 'missing-atticus-workspace-styles'),
    });

    expect(styles.map((style) => style.name)).toEqual(expect.arrayContaining([
      'default',
      'legal-brief',
      'citation-heavy',
      'court-prep',
      'research-memo',
      'client-email',
      'audit',
      'implementation-plan',
      'code-review',
    ]));
  });

  it('loads user and workspace markdown styles', async () => {
    const root = await mkdtemp(join(tmpdir(), 'atticus-output-styles-'));
    const userDir = join(root, 'user');
    const workspaceDir = join(root, 'workspace');
    await mkdir(userDir);
    await mkdir(workspaceDir);
    await writeFile(join(userDir, 'client.md'), [
      '---',
      'name: settlement-email',
      'description: Settlement update email',
      'appliesTo: [client-communication, settlement]',
      'priority: 20',
      'modelHints:',
      '  drafting: deepseek/deepseek-v4-pro',
      '---',
      'Write a concise settlement update for the client.',
    ].join('\n'));
    await writeFile(join(workspaceDir, 'hearing.md'), [
      '---',
      'name: hearing-note',
      'description: Hearing note',
      'appliesTo:',
      '  - court',
      '  - note',
      'priority: 5',
      '---',
      'Focus on hearing logistics and proof points.',
    ].join('\n'));

    const styles = await loadOutputStyles({ userDir, workspaceDir });

    expect(styles.find((style) => style.name === 'settlement-email')).toMatchObject({
      source: 'user',
      description: 'Settlement update email',
      appliesTo: ['client-communication', 'settlement'],
      priority: 20,
      modelHints: { drafting: 'deepseek/deepseek-v4-pro' },
      body: 'Write a concise settlement update for the client.',
    });
    expect(styles.find((style) => style.name === 'hearing-note')).toMatchObject({
      source: 'workspace',
      appliesTo: ['court', 'note'],
    });
  });

  it('lets workspace styles override built-ins by name', async () => {
    const root = await mkdtemp(join(tmpdir(), 'atticus-output-styles-'));
    const workspaceDir = join(root, 'workspace');
    await mkdir(workspaceDir);
    await writeFile(join(workspaceDir, 'default.md'), [
      '---',
      'name: default',
      'description: Workspace default',
      'priority: 99',
      '---',
      'Use the workspace default style.',
    ].join('\n'));

    const style = await resolveOutputStyle('default', {
      userDir: join(root, 'missing-user'),
      workspaceDir,
    });

    expect(style.source).toBe('workspace');
    expect(style.description).toBe('Workspace default');
    expect(style.body).toBe('Use the workspace default style.');
  });

  it('reports useful frontmatter errors', async () => {
    const root = await mkdtemp(join(tmpdir(), 'atticus-output-styles-'));
    const workspaceDir = join(root, 'workspace');
    await mkdir(workspaceDir);
    await writeFile(join(workspaceDir, 'broken.md'), [
      '---',
      'name: broken',
      'priority: high',
      '---',
      'Invalid priority.',
    ].join('\n'));

    await expect(loadOutputStyles({
      userDir: join(root, 'missing-user'),
      workspaceDir,
    })).rejects.toThrow(/broken\.md.*"priority" must be a number/);
  });
});
