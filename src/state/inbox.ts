import { appendFile, readFile, mkdir } from 'fs/promises';
import { randomUUID } from 'crypto';
import { getMatterPath } from '../storage/matter.js';
import { appendEvent, type AppendEventParams } from './events.js';

export interface InboxMessage {
  id: string;
  timestamp: string;
  source: string;
  content: string;
  matterName: string;
}

export async function appendInboxMessage(
  matterName: string,
  content: string,
  source: string = 'operator',
): Promise<InboxMessage> {
  const stateDir = getMatterPath(matterName, '_state');
  await mkdir(stateDir, { recursive: true });

  const message: InboxMessage = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    source,
    content,
    matterName,
  };

  const inboxPath = getMatterPath(matterName, '_state', 'inbox.jsonl');
  await appendFile(inboxPath, JSON.stringify(message) + '\n', 'utf-8');

  const eventParams: AppendEventParams = {
    matterName,
    type: 'inbox.message.received',
    data: {
      messageId: message.id,
      content: content.substring(0, 500),
      source,
    },
    source: source === 'operator' ? 'operator' : 'hermes',
  };
  await appendEvent(eventParams);

  return message;
}

export async function listInboxMessages(
  matterName: string,
  options?: { tail?: number },
): Promise<InboxMessage[]> {
  try {
    const inboxPath = getMatterPath(matterName, '_state', 'inbox.jsonl');
    const content = await readFile(inboxPath, 'utf-8');
    const lines = content.trim().split('\n').filter(Boolean);

    let messages = lines.map((line) => JSON.parse(line) as InboxMessage);
    messages.sort((a, b) => b.timestamp.localeCompare(a.timestamp));

    if (options?.tail) {
      messages = messages.slice(0, options.tail);
    }

    return messages;
  } catch {
    return [];
  }
}
