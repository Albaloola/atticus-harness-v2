import type { Command } from 'commander';

const LLM_PRECHECK_ROUTES = new Set([
  'run',
  'orchestrate',
  'draft',
  'review',
  'case manage',
]);

export function getCommandRoute(command: Command): string {
  const names: string[] = [];
  let current: Command | null | undefined = command;

  while (current) {
    const name = current.name();
    if (name && name !== 'harness') names.unshift(name);
    current = current.parent;
  }

  return names.join(' ');
}

export function requiresLlmPrecheck(command: Command): boolean {
  return LLM_PRECHECK_ROUTES.has(getCommandRoute(command));
}

export function getActionMatterName(command: Command): string | undefined {
  const matterName = command.args[0];
  return typeof matterName === 'string' ? matterName : undefined;
}

export function getActionProviderName(command: Command): string | undefined {
  const options = command.opts<{ provider?: unknown }>();
  return typeof options.provider === 'string' ? options.provider : undefined;
}
