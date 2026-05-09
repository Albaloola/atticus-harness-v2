import { describe, expect, it, afterEach } from 'vitest';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { discoverHarnessPlugins, loadPluginSkillDefinitions, buildPluginMcpConfig } from '../../src/plugins/loader.ts';

describe('plugin loader', () => {
  const tmpDirs: string[] = [];

  afterEach(() => {
    for (const dir of tmpDirs.splice(0)) {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('discovers Codex plugin manifests, namespaces skills, and resolves MCP paths', async () => {
    const root = mkdtempSync(join(tmpdir(), 'harness-plugin-'));
    tmpDirs.push(root);
    const pluginRoot = join(root, 'demo-plugin');
    mkdirSync(join(pluginRoot, '.codex-plugin'), { recursive: true });
    mkdirSync(join(pluginRoot, 'skills', 'demo-skill'), { recursive: true });
    writeFileSync(join(pluginRoot, '.codex-plugin', 'plugin.json'), JSON.stringify({
      name: 'demo',
      version: '1.2.3',
      description: 'Demo plugin',
      skills: './skills',
    }, null, 2));
    writeFileSync(join(pluginRoot, 'skills', 'demo-skill', 'SKILL.md'), [
      '---',
      'name: demo-skill',
      'version: 0.1.0',
      'description: Demo skill',
      '---',
      'Use the demo skill.',
    ].join('\n'));
    writeFileSync(join(pluginRoot, '.mcp.json'), JSON.stringify({
      mcpServers: {
        local: {
          type: 'stdio',
          command: 'node',
          args: ['${PLUGIN_DIR}/server.mjs'],
        },
      },
    }, null, 2));

    const config = {
      enabled: true,
      loadSkills: true,
      loadMcpServers: true,
      includeCodexCache: false,
      directories: [root],
    };

    const plugins = await discoverHarnessPlugins({ config });
    expect(plugins.map((plugin) => plugin.name)).toEqual(['demo']);
    expect(plugins[0].skillsDirs).toEqual([join(pluginRoot, 'skills')]);

    const skills = await loadPluginSkillDefinitions(config);
    expect(skills[0].skillId).toBe('demo:demo-skill');
    expect(skills[0].manifest.name).toBe('demo:demo-skill');

    const mcp = await buildPluginMcpConfig(config);
    expect(mcp.servers['demo:local']).toMatchObject({
      type: 'stdio',
      command: 'node',
      args: [join(pluginRoot, 'server.mjs')],
    });
  });
});
