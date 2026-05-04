import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { appendInboxMessage, listInboxMessages } from '../state/inbox.js';

export async function inboxSendHandler(
  matterName: string,
  message: string,
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }

  try {
    const result = await appendInboxMessage(matterName, message);
    console.log(chalk.green('\u2713'), `Message sent to ${chalk.bold(matterName)} inbox.`);
    console.log(`  ID: ${chalk.gray(result.id)}`);
    console.log(`  Time: ${chalk.gray(result.timestamp)}`);
  } catch (err: unknown) {
    console.error(chalk.red('Failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function inboxListHandler(
  matterName: string,
  options: { json?: boolean; tail?: string },
): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }

  const tail = options.tail ? parseInt(options.tail, 10) : undefined;
  const messages = await listInboxMessages(matterName, { tail });

  if (options.json) {
    console.log(JSON.stringify(messages, null, 2));
    return;
  }

  if (messages.length === 0) {
    console.log(chalk.gray('No inbox messages.'));
    return;
  }

  console.log(chalk.cyan(`Inbox for "${matterName}" (${messages.length} messages):`));
  console.log(chalk.gray('━'.repeat(40)));

  const sorted = messages.reverse();
  for (const msg of sorted) {
    const ts = msg.timestamp.replace('T', ' ').substring(0, 19);
    const sourceColor = msg.source === 'operator' ? chalk.yellow : chalk.magenta;
    console.log(`  ${chalk.gray(ts)} ${sourceColor(`[${msg.source}]`)} ${msg.content.substring(0, 120)}`);
  }
}
