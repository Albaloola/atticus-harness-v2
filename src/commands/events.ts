import chalk from 'chalk';
import { readFile } from 'fs/promises';
import { loadMatter, getMatterPath } from '../storage/matter.js';
import { listEvents, getEventCount } from '../state/events.js';
import { createInterface } from 'readline';
import { watch } from 'fs';

export default async function eventsHandler(
  matterName: string,
  options: { tail?: string; follow?: boolean; json?: boolean },
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

  const tail = options.tail ? parseInt(options.tail, 10) || 10 : 10;

  const printEvents = () => {
    const events = listEvents(matterName, { tail });
    const sorted = events.reverse();

    for (const event of sorted) {
      if (options.json) {
        console.log(JSON.stringify(event));
      } else {
        const ts = event.timestamp.replace('T', ' ').substring(0, 19);
        const typeColor = event.type.includes('error') || event.type.includes('failed')
          ? chalk.red
          : event.type.includes('completed') || event.type.includes('accepted')
            ? chalk.green
            : chalk.cyan;
        console.log(
          `${chalk.gray(ts)}  ${typeColor(event.type.padEnd(24))} ${chalk.gray(event.source.padEnd(8))} ${JSON.stringify(event.data).substring(0, 80)}`,
        );
      }
    }
  };

  printEvents();

  if (options.follow) {
    const eventsPath = getMatterPath(matterName, '_state', 'events.jsonl');
    let lastSize = 0;

    try {
      const { size } = await import('fs/promises').then((fs) => fs.stat(eventsPath));
      lastSize = size;
    } catch {
    }

    const watcher = watch(getMatterPath(matterName, '_state'), (eventType, filename) => {
      if (filename === 'events.jsonl' && eventType === 'change') {
        import('fs/promises').then((fs) =>
          fs.stat(eventsPath).then((stat) => {
            if (stat.size > lastSize) {
              readFile(eventsPath, 'utf-8').then((content) => {
                const lines = content.trim().split('\n').filter(Boolean);
                const newLines = lines.slice(-1);
                for (const line of newLines) {
                  try {
                    const event = JSON.parse(line);
                    if (options.json) {
                      console.log(JSON.stringify(event));
                    } else {
                      const ts = event.timestamp.replace('T', ' ').substring(0, 19);
                      const typeColor = event.type.includes('error') || event.type.includes('failed')
                        ? chalk.red
                        : event.type.includes('completed') || event.type.includes('accepted')
                          ? chalk.green
                          : chalk.cyan;
                      console.log(
                        `${chalk.gray(ts)}  ${typeColor(event.type.padEnd(24))} ${chalk.gray(event.source.padEnd(8))} ${JSON.stringify(event.data).substring(0, 80)}`,
                      );
                    }
                  } catch {
                  }
                }
                lastSize = stat.size;
              }).catch(() => {});
            }
          }).catch(() => {}),
        );
      }
    });

    process.on('SIGINT', () => {
      watcher.close();
      process.exit(0);
    });

    await new Promise<void>(() => {});
  }
}
