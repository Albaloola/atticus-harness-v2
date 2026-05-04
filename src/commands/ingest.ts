import chalk from 'chalk';
import { stat, copyFile, mkdir, writeFile } from 'fs/promises';
import { basename, join } from 'path';
import { loadMatter, saveMatterIndex, getMatterPath } from '../storage/matter.js';
import { registerEvidence } from '../storage/evidence.js';
import { getDb } from '../storage/sqlite/index.js';
import { insertEvidence, getEvidenceCount } from '../storage/sqlite/evidence.js';
import { chunkText, insertChunks } from '../storage/sqlite/chunks.js';
import { extractText, hashFile } from '../extraction/index.js';
import { detectFormatByMagic, getMimeType } from '../extraction/detect.js';
import type { EvidenceRecord } from '../types/evidence.js';

export default async function ingestHandler(
  matterName: string,
  filePath: string,
  options: { force?: boolean }
): Promise<void> {
  let index;
  try {
    index = await loadMatter(matterName);
  } catch (err: unknown) {
    console.error(chalk.red('Error:'), `Matter "${matterName}" not found. Run "harness init ${matterName}" first.`);
    process.exit(1);
  }

  let fileStat;
  try {
    fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      console.error(chalk.red('Error:'), `"${filePath}" is not a file.`);
      process.exit(1);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Error:'), `File not found: "${filePath}".`);
    process.exit(1);
  }

  const fileName = basename(filePath);
  console.log(chalk.cyan('Ingesting:'), chalk.bold(fileName));

  console.log(chalk.gray('  Hashing...'));
  const sha256 = await hashFile(filePath);

  console.log(chalk.gray('  Detecting format...'));
  const format = await detectFormatByMagic(filePath);
  const mimeType = getMimeType(format);

  const evidenceCount = await getEvidenceCount(matterName);
  const nextNum = evidenceCount + 1;
  const prefix = matterName.substring(0, 3).toUpperCase();
  const evidenceId = `${prefix}-SRC-${String(nextNum).padStart(4, '0')}`;

  const evidenceDir = getMatterPath(matterName, '_evidence');
  await mkdir(evidenceDir, { recursive: true });
  const internalPath = join(evidenceDir, `${evidenceId}_${fileName}`);

  await copyFile(filePath, internalPath);

  const record: EvidenceRecord = {
    id: evidenceId,
    matterName,
    originalPath: filePath,
    internalPath,
    sha256,
    mimeType,
    format,
    status: 'extracting',
    ingested: new Date().toISOString(),
    sizeBytes: fileStat.size,
    metadata: { originalFileName: fileName },
  };

  await registerEvidence(matterName, record);

  console.log(chalk.gray('  Extracting text...'));
  let extracted;
  try {
    extracted = await extractText(filePath, { sourceId: evidenceId });
    console.log(chalk.gray(`    Method: ${extracted.method}, Confidence: ${Math.round(extracted.confidence * 100)}%`));
  } catch (err: unknown) {
    console.error(chalk.yellow('  Warning:'), `Text extraction failed: ${(err as Error).message}`);
    record.status = 'failed';
    const db = getDb(matterName);
    insertEvidence(db, { ...record, status: 'failed' });

    index.status = 'ingesting';
    index.evidenceCount = evidenceCount + 1;
    await saveMatterIndex(matterName, index);

    console.log(chalk.yellow('\u26A0'), `Evidence registered but extraction failed.`);
    return;
  }

  record.status = 'extracted';

  const extractionDir = getMatterPath(matterName, '_extractions');
  await mkdir(extractionDir, { recursive: true });
  const extractionPath = join(extractionDir, `${evidenceId}.txt`);
  await writeFile(extractionPath, extracted.text, 'utf-8');

  const db = getDb(matterName);
  insertEvidence(db, record);

  const chunks = chunkText(evidenceId, extracted.text, extracted.confidence);
  insertChunks(db, chunks);
  console.log(chalk.gray(`    ${chunks.length} text chunks indexed for search`));

  index.status = 'ingesting';
  index.evidenceCount = evidenceCount + 1;
  await saveMatterIndex(matterName, index);

  console.log(chalk.green('\u2713'), `Ingested "${fileName}" as ${chalk.bold(evidenceId)}`);
  console.log(`  Format:  ${chalk.cyan(format)}`);
  console.log(`  Size:    ${formatFileSize(fileStat.size)}`);
  console.log(`  SHA256:  ${chalk.gray(sha256.substring(0, 16))}...`);
  console.log(`  Chunks:  ${chunks.length}`);
  console.log('');
  console.log(chalk.gray('Next:'), chalk.cyan('harness search'), chalk.cyan(matterName), chalk.gray('<query>'));
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
