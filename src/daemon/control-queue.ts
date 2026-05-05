import { appendFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { getConfigDir } from '../config/paths.js';

const RUNTIME_DIR = join(getConfigDir(), 'runtime');
const COMMANDS_FILE = join(RUNTIME_DIR, 'commands.jsonl');

export type ControlAction = 'pause' | 'resume' | 'cancel';

export interface ControlCommand {
  id: string;
  action: ControlAction;
  matterName: string;
  runId?: string;
  createdAt: string;
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
