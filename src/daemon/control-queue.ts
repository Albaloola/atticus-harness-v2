import { existsSync, readFileSync } from 'fs';
import { appendFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { getConfigDir } from '../config/paths.js';

const RUNTIME_DIR = join(getConfigDir(), 'runtime');
const COMMANDS_FILE = join(RUNTIME_DIR, 'commands.jsonl');
const ACKS_FILE = join(RUNTIME_DIR, 'commands-applied.jsonl');

export type ControlAction = 'pause' | 'resume' | 'cancel';

export interface ControlCommand {
  id: string;
  action: ControlAction;
  matterName: string;
  runId?: string;
  createdAt: string;
}

export interface ControlCommandAck {
  commandId: string;
  appliedAt: string;
  outcome: 'applied' | 'ignored' | 'failed';
  message?: string;
}

export async function enqueueControlCommand(params: {
  action: ControlAction;
  matterName: string;
  runId?: string;
}): Promise<ControlCommand> {
  await mkdir(RUNTIME_DIR, { recursive: true });
  const command: ControlCommand = {
    id: randomUUID(),
    action: params.action,
    matterName: params.matterName,
    runId: params.runId,
    createdAt: new Date().toISOString(),
  };
  await appendFile(COMMANDS_FILE, JSON.stringify(command) + '\n', 'utf-8');
  return command;
}

export async function listControlCommands(): Promise<ControlCommand[]> {
  try {
    const content = await readFile(COMMANDS_FILE, 'utf-8');
    return content
      .split('\n')
      .filter(Boolean)
      .map((line) => JSON.parse(line) as ControlCommand);
  } catch {
    return [];
  }
}

export async function listControlCommandAcks(): Promise<ControlCommandAck[]> {
  try {
    const content = await readFile(ACKS_FILE, 'utf-8');
    return parseJsonl<ControlCommandAck>(content);
  } catch {
    return [];
  }
}

export async function listPendingControlCommands(filter?: {
  matterName?: string;
  runId?: string;
  createdAfter?: Date;
}): Promise<ControlCommand[]> {
  const [commands, acks] = await Promise.all([listControlCommands(), listControlCommandAcks()]);
  return filterPending(commands, new Set(acks.map((ack) => ack.commandId)), filter);
}

export async function ackControlCommand(
  commandId: string,
  outcome: ControlCommandAck['outcome'] = 'applied',
  message?: string,
): Promise<ControlCommandAck> {
  await mkdir(RUNTIME_DIR, { recursive: true });
  const ack: ControlCommandAck = {
    commandId,
    appliedAt: new Date().toISOString(),
    outcome,
    message,
  };
  await appendFile(ACKS_FILE, JSON.stringify(ack) + '\n', 'utf-8');
  return ack;
}

export function getPendingControlCommandCount(): number {
  try {
    if (!existsSync(COMMANDS_FILE)) return 0;
    const commands = parseJsonl<ControlCommand>(readFileSync(COMMANDS_FILE, 'utf-8'));
    const acks = existsSync(ACKS_FILE)
      ? parseJsonl<ControlCommandAck>(readFileSync(ACKS_FILE, 'utf-8'))
      : [];
    return filterPending(commands, new Set(acks.map((ack) => ack.commandId))).length;
  } catch {
    return 0;
  }
}

function filterPending(
  commands: ControlCommand[],
  appliedIds: Set<string>,
  filter?: { matterName?: string; runId?: string; createdAfter?: Date },
): ControlCommand[] {
  return commands.filter((command) => {
    if (appliedIds.has(command.id)) return false;
    if (filter?.matterName && command.matterName !== filter.matterName) return false;
    if (filter?.createdAfter && Date.parse(command.createdAt) < filter.createdAfter.getTime()) return false;
    if (filter?.runId && command.runId && command.runId !== filter.runId) return false;
    return true;
  });
}

function parseJsonl<T>(content: string): T[] {
  return content
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line) as T);
}
