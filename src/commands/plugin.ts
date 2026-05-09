import chalk from 'chalk';
import { loadGlobalConfig } from '../config/loader.js';
import { discoverHarnessPlugins, buildPluginMcpConfig } from '../plugins/loader.js';
import { ToolRegistry } from '../tools/index.js';

type JsonOptions = { json?: boolean };

export async function handlePluginList(options: JsonOptions = {}): Promise<void> {
  const { config } = await loadGlobalConfig();
  const plugins = await discoverHarnessPlugins({ config: config.plugins });
  const rows = plugins.map((plugin) => ({
    name: plugin.name,
    version: plugin.version,
    description: plugin.manifest.description,
    rootDir: plugin.rootDir,
    skills: plugin.skillsDirs.length,
    mcp: Boolean(plugin.mcpPath || plugin.manifest.mcpServers),
    app: Boolean(plugin.appPath || plugin.manifest.apps),
  }));

  if (options.json) {
    console.log(JSON.stringify({ plugins: rows }, null, 2));
    return;
  }

  console.log(chalk.bold.cyan(`Plugins: ${rows.length}`));
  for (const row of rows) {
    console.log(`${chalk.bold(row.name)} ${chalk.gray(row.version)} ${row.mcp ? chalk.cyan('mcp') : chalk.gray('no-mcp')} ${row.app ? chalk.cyan('app') : chalk.gray('no-app')} skills=${row.skills}`);
    if (row.description) console.log(`  ${row.description}`);
    console.log(`  ${chalk.gray(row.rootDir)}`);
  }
}

export async function handleMcpList(options: JsonOptions & { tools?: boolean } = {}): Promise<void> {
  const { config } = await loadGlobalConfig();
  const pluginMcp = await buildPluginMcpConfig(config.plugins);
  const servers = {
    ...(config.mcp.enabled ? config.mcp.servers : {}),
    ...pluginMcp.servers,
  };
  const rows = Object.entries(servers).map(([name, server]) => ({
    name,
    type: server.type ?? (server.url ? 'http' : 'stdio'),
    disabled: server.disabled === true,
    command: server.command,
    url: server.url,
    cwd: server.cwd,
    note: server.note,
  }));

  if (!options.tools) {
    if (options.json) {
      console.log(JSON.stringify({ servers: rows }, null, 2));
      return;
    }
    console.log(chalk.bold.cyan(`MCP servers: ${rows.length}`));
    for (const row of rows) {
      const target = row.url ?? [row.command, ...(servers[row.name]?.args ?? [])].filter(Boolean).join(' ');
      console.log(`${chalk.bold(row.name)} ${chalk.gray(row.type)}${row.disabled ? chalk.yellow(' disabled') : ''}`);
      if (target) console.log(`  ${target}`);
      if (row.note) console.log(`  ${row.note}`);
    }
    return;
  }

  const registry = new ToolRegistry({ registerDefaults: false });
  await registry.registerConfiguredMcpTools({
    mcp: config.mcp,
    plugins: config.plugins,
    log: (message) => {
      if (!options.json) console.warn(chalk.yellow(message));
    },
  });
  const tools = registry.getAllDefinitions();
  await registry.close();

  if (options.json) {
    console.log(JSON.stringify({ servers: rows, tools }, null, 2));
    return;
  }
  console.log(chalk.bold.cyan(`MCP tools: ${tools.length}`));
  for (const tool of tools) {
    console.log(`${chalk.bold(tool.name)} ${chalk.gray(tool.description)}`);
  }
}
