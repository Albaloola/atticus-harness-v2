import { describe, expect, it, afterEach } from 'vitest';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { discoverHarnessPlugins, loadPluginSkillDefinitions, buildPluginMcpConfig } from '../../src/plugins/loader.ts';
import { mergeMcpServerConfigs } from '../../src/mcp/client.ts';

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
    expect(plugins[0].source).toBe('future');
    expect(plugins[0].provenance.manifestPath).toBe(join(pluginRoot, '.codex-plugin', 'plugin.json'));
    expect(plugins[0].skillsDirs).toEqual([join(pluginRoot, 'skills')]);

    const skills = await loadPluginSkillDefinitions(config);
    expect(skills[0].skillId).toBe('demo:demo-skill');
    expect(skills[0].manifest.name).toBe('demo:demo-skill');

    const mcp = await buildPluginMcpConfig(config);
    expect(mcp.servers['demo:local']).toMatchObject({
      type: 'stdio',
      command: 'node',
      args: [join(pluginRoot, 'server.mjs')],
      source: {
        kind: 'plugin',
        pluginName: 'demo',
        pluginSource: 'future',
      },
    });
  });

  it('rejects invalid manifests with a useful skipped-plugin log', async () => {
    const root = mkdtempSync(join(tmpdir(), 'harness-plugin-invalid-'));
    tmpDirs.push(root);
    const pluginRoot = join(root, 'bad-plugin');
    mkdirSync(join(pluginRoot, '.codex-plugin'), { recursive: true });
    writeFileSync(join(pluginRoot, '.codex-plugin', 'plugin.json'), JSON.stringify({
      version: '1.0.0',
      skills: './skills',
    }, null, 2));

    const logs: string[] = [];
    const plugins = await discoverHarnessPlugins({
      config: pluginConfig(root),
      log: (message) => logs.push(message),
    });

    expect(plugins).toEqual([]);
    expect(logs.join('\n')).toContain('skipped');
    expect(logs.join('\n')).toContain('name must be a non-empty string');
  });

  it('rejects plugin-declared path traversal in manifest and MCP path references', async () => {
    const root = mkdtempSync(join(tmpdir(), 'harness-plugin-traversal-'));
    tmpDirs.push(root);
    const pluginRoot = join(root, 'escape-plugin');
    mkdirSync(join(pluginRoot, '.codex-plugin'), { recursive: true });
    writeFileSync(join(pluginRoot, '.codex-plugin', 'plugin.json'), JSON.stringify({
      name: 'escape',
      skills: '../outside-skills',
      mcpServers: {
        mcpServers: {
          bad: {
            type: 'stdio',
            command: 'node',
            args: ['${PLUGIN_DIR}/../outside/server.mjs'],
            env: {
              SAFE_COMMAND_NAME: 'node',
              BAD_PATH: '../secrets/token',
            },
          },
        },
      },
    }, null, 2));

    const logs: string[] = [];
    const plugins = await discoverHarnessPlugins({
      config: pluginConfig(root),
      log: (message) => logs.push(message),
    });

    expect(plugins).toEqual([]);
    expect(logs.join('\n')).toContain('skills must stay inside plugin root');
    expect(logs.join('\n')).toContain('mcpServers.bad.args[0] must stay inside plugin root');
    expect(logs.join('\n')).toContain('mcpServers.bad.env.BAD_PATH must stay inside plugin root');
  });

  it('deduplicates duplicate plugin MCP servers deterministically', async () => {
    const root = mkdtempSync(join(tmpdir(), 'harness-plugin-dedupe-'));
    tmpDirs.push(root);
    writePluginWithInlineMcp(root, 'beta');
    writePluginWithInlineMcp(root, 'alpha');

    const mcp = await buildPluginMcpConfig(pluginConfig(root));

    expect(Object.keys(mcp.servers)).toEqual(['alpha:local']);
    expect(mcp.servers['alpha:local']).toMatchObject({
      command: 'node',
      args: ['server.mjs'],
    });
  });

  it('keeps manual direct MCP servers when plugin servers duplicate their signature or name', () => {
    const logs: string[] = [];
    const merged = mergeMcpServerConfigs({
      direct: {
        local: {
          type: 'stdio',
          command: 'node',
          args: ['server.mjs'],
          source: { kind: 'manual' },
        },
        named: {
          type: 'http',
          url: 'https://manual.example/mcp',
          source: { kind: 'manual' },
        },
      },
      plugin: {
        duplicateSignature: {
          type: 'stdio',
          command: 'node',
          args: ['server.mjs'],
          source: { kind: 'plugin', pluginName: 'demo' },
        },
        named: {
          type: 'http',
          url: 'https://plugin.example/mcp',
          source: { kind: 'plugin', pluginName: 'demo' },
        },
      },
      log: (message) => logs.push(message),
    });

    expect(Object.keys(merged)).toEqual(['local', 'named']);
    expect(merged.named.url).toBe('https://manual.example/mcp');
    expect(logs.join('\n')).toContain('duplicate of local');
    expect(logs.join('\n')).toContain('manual/direct server with same name');
  });
});

function pluginConfig(root: string) {
  return {
    enabled: true,
    loadSkills: true,
    loadMcpServers: true,
    includeCodexCache: false,
    directories: [root],
  };
}

function writePluginWithInlineMcp(root: string, name: string): void {
  const pluginRoot = join(root, `${name}-plugin`);
  mkdirSync(join(pluginRoot, '.codex-plugin'), { recursive: true });
  writeFileSync(join(pluginRoot, '.codex-plugin', 'plugin.json'), JSON.stringify({
    name,
    version: '1.0.0',
    mcpServers: {
      mcpServers: {
        local: {
          type: 'stdio',
          command: 'node',
          args: ['server.mjs'],
        },
      },
    },
  }, null, 2));
}
