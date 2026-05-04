import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import type { EvidenceRecord } from '../types/evidence.js';

export default async function evidenceHandler(
  matterName: string,
  options: { filter?: string }
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

  let records: EvidenceRecord[];
  try {
    records = await listEvidence(matterName);
  } catch (err: unknown) {
    console.error(chalk.red('Error listing evidence:'), (err as Error).message);
    process.exit(1);
  }

  if (options.filter) {
    const filter = options.filter.toLowerCase();
    records = records.filter(r => r.format === filter || r.mimeType.includes(filter));
  }

  if (records.length === 0) {
    const filterMsg = options.filter ? ` matching "${options.filter}"` : '';
    console.log(chalk.yellow(`No evidence${filterMsg}.`));
    console.log(chalk.gray('Tip:'), chalk.cyan(`harness ingest ${matterName} <path>`), chalk.gray('to add documents.'));
    return;
  }

  console.log('');
  console.log(chalk.bold(`Evidence for ${chalk.cyan(matterName)}: ${records.length} file${records.length === 1 ? '' : 's'}`));
  console.log(chalk.gray('━'.repeat(60)));

  for (const r of records) {
    const statusColor: Record<string, (s: string) => string> = {
      extracted: chalk.green,
      extracting: chalk.yellow,
      pending: chalk.gray,
      failed: chalk.red,
    };
    const colorFn = statusColor[r.status] || chalk.white;

    console.log(`  ${chalk.bold(r.id)} ${colorFn(r.status)}`);
    console.log(`    File:   ${chalk.gray(r.originalPath.split('/').pop() || r.originalPath)}`);
    console.log(`    Format: ${chalk.cyan(r.format)}  Size: ${formatSize(r.sizeBytes)}`);
    console.log(`    SHA256: ${chalk.gray(r.sha256.substring(0, 16))}...`);
    console.log(`    Ingest: ${r.ingested.substring(0, 10)}`);
    console.log('');
  }

  console.log(chalk.gray('Tip:'), chalk.cyan(`harness search ${matterName} <query>`), chalk.gray('to search evidence text.'));
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
