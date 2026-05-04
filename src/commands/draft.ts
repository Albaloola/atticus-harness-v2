import chalk from 'chalk';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { loadMatter, saveMatterIndex, getMatterPath } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import { searchEvidence } from '../storage/sqlite/search.js';
import { DraftTool } from '../tools/draft.tool.js';
import { getDb } from '../storage/sqlite/index.js';

export default async function draftHandler(
  matterName: string,
  brief: string,
  options: { type?: string }
): Promise<void> {
  let matterIndex;
  try {
    matterIndex = await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }

  const evidence = await listEvidence(matterName);
  if (evidence.length === 0) {
    console.log(chalk.yellow('Warning:'), 'No evidence ingested yet. Draft may lack citations.');
    console.log(chalk.gray('Tip:'), chalk.cyan(`harness ingest ${matterName} <path>`));
  }

  console.log(chalk.cyan(`Drafting ${options.type || 'document'} for "${matterName}"...`));
  console.log(chalk.gray(`  Brief: ${brief.substring(0, 100)}${brief.length > 100 ? '...' : ''}`));
  console.log(chalk.gray(`  Evidence available: ${evidence.length} files`));
  console.log('');

  try {
    const tool = new DraftTool();
    const result = await tool.call({
      matterName,
      brief,
      docType: options.type,
    }, {
      matterName,
      getEvidencePath: (id: string) => join('matters', matterName, '_evidence', id),
      getExtractionPath: (id: string) => join('matters', matterName, '_extractions', `${id}.txt`),
      getConfig: () => ({}),
      log: (msg: string) => { if (msg.includes('[draft]')) console.log(chalk.gray(`  ${msg}`)); },
    });

    if (!result.success) {
      console.error(chalk.red('Draft failed:'), result.error);
      process.exit(1);
    }

    const candidateId = `draft-${Date.now()}`;
    const candidatesDir = getMatterPath(matterName, '_candidates');
    await mkdir(candidatesDir, { recursive: true });
    const candidatePath = join(candidatesDir, `${candidateId}.md`);

    const docType = options.type || 'legal-document';
    const candidateContent = `# ${docType}: ${matterName}\n\nDate: ${new Date().toISOString().substring(0, 10)}\nMatter: ${matterName}\nBrief: ${brief}\n\n---\n\n${result.data}`;

    await writeFile(candidatePath, candidateContent, 'utf-8');

    matterIndex.status = 'drafting';
    matterIndex.candidateCount++;
    await saveMatterIndex(matterName, matterIndex);

    console.log(chalk.green('✓'), `Draft saved as ${chalk.bold(candidateId)}`);
    console.log(`  Path: ${chalk.cyan(candidatePath)}`);
    console.log(`  Size: ${formatSize(candidateContent.length)}`);
    console.log('');
    console.log(chalk.gray('Next:'), chalk.cyan(`harness verify ${matterName} ${candidateId}`));
    console.log(chalk.gray('      '), chalk.cyan(`harness gate ${matterName} ${candidateId}`));
  } catch (err: unknown) {
    console.error(chalk.red('Draft error:'), (err as Error).message);
    process.exit(1);
  }
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
