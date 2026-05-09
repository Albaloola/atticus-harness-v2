#!/usr/bin/env node
import { copyFile, mkdir, readdir, rename, stat, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import { extractText, hashFile } from '../../dist/extraction/index.js';
import { detectFormatByMagic, getMimeType } from '../../dist/extraction/detect.js';
import { getMatterPath, loadMatter, saveMatterIndex } from '../../dist/storage/matter.js';
import { listEvidence, registerEvidence, updateEvidenceRecord } from '../../dist/storage/evidence.js';
import { getDb, closeAllDbs } from '../../dist/storage/sqlite/index.js';
import { insertEvidence, updateEvidenceItemV2Status } from '../../dist/storage/sqlite/evidence.js';
import { chunkText, insertChunks } from '../../dist/storage/sqlite/chunks.js';
import { registerCopiedEvidenceV2, persistExtractionV2 } from '../../dist/ingestion/register-evidence.js';
import { appendEvent } from '../../dist/state/events.js';

const matterName = 'omer-elbushra-ultimate-benchmark';
const roots = [
  { label: 'case-file', path: '/home/alba/Documents/Case File' },
  { label: 'ordinary-action', path: '/home/alba/Documents/Ordinary Action' },
  { label: 'judicial-review', path: '/home/alba/Documents/Judicial Review' },
  { label: 'slcc-complaint', path: '/home/alba/Documents/SLCC Complaint' },
  { label: 'clarity-simplicity-files', path: '/home/alba/Documents/Clarity Simplicity Files' },
];

const benchmarkDir = dirname(fileURLToPath(import.meta.url));
const args = new Set(process.argv.slice(2));
const inventoryOnly = args.has('--inventory-only');
const retryFailed = args.has('--retry-failed');
const limit = readNumericArg('--limit');
const checkpointEvery = readNumericArg('--checkpoint-every') ?? 25;

const startedAt = new Date().toISOString();
const report = {
  matterName,
  startedAt,
  endedAt: null,
  sourceRoots: roots,
  totals: {
    filesInventoried: 0,
    bytesInventoried: 0,
    uniqueSha256: 0,
    alreadyIngested: 0,
    ingestedApproved: 0,
    ingestedQcFailed: 0,
    retriedIncomplete: 0,
    duplicateExact: 0,
    failed: 0,
    skippedByLimit: 0,
  },
  countsByExtension: {},
  countsByRoot: {},
  countsByCategory: {},
  countsByFormat: {},
  failuresByError: {},
  results: [],
};

await mkdir(benchmarkDir, { recursive: true });

try {
  await loadMatter(matterName);
  console.log(`[intake] matter: ${matterName}`);

  const files = await inventoryFiles();
  report.totals.filesInventoried = files.length;
  report.totals.bytesInventoried = files.reduce((sum, file) => sum + file.sizeBytes, 0);
  await writeInventoryArtifacts(files);

  if (inventoryOnly) {
    report.endedAt = new Date().toISOString();
    await writeJson('ingestion-report.json', report);
    console.log('[intake] inventory-only run complete');
    process.exit(0);
  }

  await ingestFiles(files);
  report.endedAt = new Date().toISOString();
  await writeJson('ingestion-report.json', report);
  console.log(`[intake] complete: approved=${report.totals.ingestedApproved} qc_failed=${report.totals.ingestedQcFailed} duplicates=${report.totals.duplicateExact} failed=${report.totals.failed}`);
} finally {
  closeAllDbs();
}

async function inventoryFiles() {
  const files = [];
  for (const root of roots) {
    await walkRoot(root, root.path, files);
  }

  files.sort((a, b) => a.path.localeCompare(b.path));
  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    file.inventoryIndex = index + 1;
    file.sha256 = await hashFile(file.path);
    bump(report.countsByExtension, file.extension || '[none]');
    bump(report.countsByRoot, file.sourceRootLabel);
    bump(report.countsByCategory, file.intakeCategory);
    if ((index + 1) % 100 === 0 || index + 1 === files.length) {
      console.log(`[inventory] hashed ${index + 1}/${files.length}`);
    }
  }

  report.totals.uniqueSha256 = new Set(files.map((file) => file.sha256)).size;
  return files;
}

async function walkRoot(root, dir, files) {
  const entries = (await readdir(dir, { withFileTypes: true }))
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkRoot(root, path, files);
      continue;
    }
    if (!entry.isFile()) continue;

    const fileStat = await stat(path);
    const extension = extname(entry.name).toLowerCase() || '[none]';
    files.push({
      path,
      sourceRootLabel: root.label,
      sourceRootPath: root.path,
      sourceRelativePath: relative(root.path, path),
      fileName: entry.name,
      extension,
      sizeBytes: fileStat.size,
      intakeCategory: classifyIntakePath(root.label, path),
      sha256: null,
      inventoryIndex: null,
    });
  }
}

async function ingestFiles(files) {
  const db = getDb(matterName);
  const index = await loadMatter(matterName);
  const existingRecords = await listEvidence(matterName);
  const recordsBySha = new Map(existingRecords.map((record) => [record.sha256, record]));
  const recordsById = new Map(existingRecords.map((record) => [record.id, record]));
  const duplicatePathsById = new Map();
  let nextNum = nextEvidenceNumber(existingRecords);

  const selectedFiles = typeof limit === 'number' ? files.slice(0, limit) : files;
  report.totals.skippedByLimit = typeof limit === 'number' ? Math.max(files.length - selectedFiles.length, 0) : 0;

  for (let index = 0; index < selectedFiles.length; index += 1) {
    const file = selectedFiles[index];
    const existing = recordsBySha.get(file.sha256);
    if (existing) {
      const sameSource = existing.originalPath === file.path;
      if (sameSource && shouldResumeExisting(existing)) {
        const result = await completeRegisteredRecord(file, existing, db);
        report.results.push({ ...result, resumed: true });
        report.totals.retriedIncomplete += 1;
        if (result.status === 'approved') report.totals.ingestedApproved += 1;
        if (result.status === 'qc_failed') report.totals.ingestedQcFailed += 1;
        if (result.status === 'failed') report.totals.failed += 1;
        if (result.record) {
          recordsBySha.set(result.record.sha256, result.record);
          recordsById.set(result.record.id, result.record);
        }
        await maybeCheckpoint(index + 1);
        continue;
      }

      report.results.push({
        path: file.path,
        sha256: file.sha256,
        status: sameSource ? 'already_ingested' : 'duplicate_exact',
        duplicateOf: existing.id,
        sourceRootLabel: file.sourceRootLabel,
        intakeCategory: file.intakeCategory,
      });
      if (sameSource) {
        report.totals.alreadyIngested += 1;
      } else {
        report.totals.duplicateExact += 1;
        addDuplicatePath(duplicatePathsById, existing.id, file.path);
      }
      await maybeCheckpoint(index + 1);
      continue;
    }

    const evidenceId = allocateEvidenceId(nextNum, recordsById);
    nextNum += 1;
    const result = await ingestOneFile(file, evidenceId, db);
    report.results.push(result);

    if (result.status === 'approved' || result.status === 'qc_failed') {
      const record = result.record;
      recordsBySha.set(record.sha256, record);
      recordsById.set(record.id, record);
    }

    if (result.status === 'approved') report.totals.ingestedApproved += 1;
    if (result.status === 'qc_failed') report.totals.ingestedQcFailed += 1;
    if (result.status === 'failed') report.totals.failed += 1;

    await maybeCheckpoint(index + 1);
  }

  await updateDuplicateMetadata(duplicatePathsById, db);
  const finalRecords = await listEvidence(matterName);
  index.status = 'ingesting';
  index.evidenceCount = finalRecords.length;
  await saveMatterIndex(matterName, index);
  await writeJson('ingestion-report.json', report);
}

async function ingestOneFile(file, evidenceId, db) {
  try {
    const format = await detectFormatByMagic(file.path);
    const mimeType = getMimeType(format);
    bump(report.countsByFormat, format);

    const evidenceDir = getMatterPath(matterName, '_evidence');
    await mkdir(evidenceDir, { recursive: true });
    const internalPath = join(evidenceDir, `${evidenceId}_${safeFileName(file.fileName)}`);
    await copyFile(file.path, internalPath);

    const now = new Date().toISOString();
    const record = {
      id: evidenceId,
      matterName,
      originalPath: file.path,
      internalPath,
      sha256: file.sha256,
      mimeType,
      format,
      status: 'copied_unindexed',
      ingested: now,
      sizeBytes: file.sizeBytes,
      metadata: {
        originalFileName: file.fileName,
        sourceRootLabel: file.sourceRootLabel,
        sourceRootPath: file.sourceRootPath,
        sourceRelativePath: file.sourceRelativePath,
        intakeCategory: file.intakeCategory,
        inventoryIndex: file.inventoryIndex,
      },
    };

    await registerEvidence(matterName, record);
    insertEvidence(db, record);
    registerCopiedEvidenceV2(db, record);
    await appendSafe('evidence.copied_unindexed', { evidenceId, fileName: file.fileName, sha256: file.sha256 });

    return await extractAndIndexRegisteredRecord(file, record, db, format, mimeType);
  } catch (err) {
    const message = errorMessage(err);
    bump(report.failuresByError, message);
    return {
      path: file.path,
      sha256: file.sha256,
      evidenceId,
      status: 'failed',
      sourceRootLabel: file.sourceRootLabel,
      intakeCategory: file.intakeCategory,
      error: message,
    };
  }
}

async function completeRegisteredRecord(file, record, db) {
  try {
    await stat(record.internalPath).catch(async () => {
      await mkdir(dirname(record.internalPath), { recursive: true });
      await copyFile(file.path, record.internalPath);
    });
    const format = record.format || await detectFormatByMagic(file.path);
    const mimeType = record.mimeType || getMimeType(format);
    bump(report.countsByFormat, format);
    return await extractAndIndexRegisteredRecord(file, record, db, format, mimeType);
  } catch (err) {
    const message = errorMessage(err);
    bump(report.failuresByError, message);
    return {
      path: file.path,
      sha256: file.sha256,
      evidenceId: record.id,
      status: 'failed',
      sourceRootLabel: file.sourceRootLabel,
      intakeCategory: file.intakeCategory,
      error: message,
    };
  }
}

async function extractAndIndexRegisteredRecord(file, record, db, format, mimeType) {
  clearExtractionRows(db, record.id);

  let extracted;
  try {
    extracted = await extractText(record.internalPath, { sourceId: record.id });
  } catch (err) {
    const message = errorMessage(err);
    const updated = await updateEvidenceRecord(matterName, record.id, {
      status: 'qc_failed',
      metadata: {
        extractionError: message,
        extractionStage: 'extractText',
      },
    });
    insertEvidence(db, updated);
    updateEvidenceItemV2Status(db, record.id, 'qc_failed', updated.metadata);
    await appendSafe('evidence.ingestion_failed', { evidenceId: record.id, fileName: file.fileName, error: message });
    bump(report.failuresByError, message);

    return {
      path: file.path,
      sha256: file.sha256,
      evidenceId: record.id,
      status: 'qc_failed',
      format,
      mimeType,
      error: message,
      record: updated,
    };
  }

  const extractionDir = getMatterPath(matterName, '_extractions');
  await mkdir(extractionDir, { recursive: true });
  await writeFile(join(extractionDir, `${record.id}.txt`), extracted.text, 'utf-8');

  const chunks = chunkText(record.id, extracted.text, extracted.confidence);
  const approvedRecord = await updateEvidenceRecord(matterName, record.id, {
    status: 'approved',
    metadata: {
      extractionMethod: extracted.method,
      extractionConfidence: extracted.confidence,
      extractionTextSha256: extracted.sha256,
      pageCount: extracted.pageCount,
      chunkCount: chunks.length,
    },
  });
  insertEvidence(db, approvedRecord);
  insertChunks(db, chunks);
  persistExtractionV2(db, record.id, extracted, chunks);
  await appendSafe('evidence.ingested', { evidenceId: record.id, fileName: file.fileName, format, sha256: file.sha256 });

  return {
    path: file.path,
    sha256: file.sha256,
    evidenceId: record.id,
    status: 'approved',
    format,
    mimeType,
    extractionMethod: extracted.method,
    extractionConfidence: extracted.confidence,
    chunkCount: chunks.length,
    pageCount: extracted.pageCount,
    record: approvedRecord,
  };
}

function clearExtractionRows(db, evidenceId) {
  db.prepare('DELETE FROM extraction_chunks WHERE evidence_id = ?').run(evidenceId);
  db.prepare('DELETE FROM evidence_chunks_v2 WHERE evidence_id = ?').run(evidenceId);
  db.prepare('DELETE FROM evidence_pages WHERE evidence_id = ?').run(evidenceId);
  db.prepare('DELETE FROM extraction_quality_reports WHERE evidence_id = ?').run(evidenceId);
}

async function updateDuplicateMetadata(duplicatePathsById, db) {
  for (const [evidenceId, duplicatePaths] of duplicatePathsById.entries()) {
    const updated = await updateEvidenceRecord(matterName, evidenceId, {
      metadata: {
        duplicateCount: duplicatePaths.length + 1,
        duplicateOriginalPaths: duplicatePaths,
      },
    });
    insertEvidence(db, updated);
    updateEvidenceItemV2Status(db, evidenceId, updated.status, updated.metadata);
  }
}

async function writeInventoryArtifacts(files) {
  const duplicateGroups = Array.from(groupBy(files, (file) => file.sha256).values())
    .filter((group) => group.length > 1)
    .map((group) => ({
      sha256: group[0].sha256,
      count: group.length,
      totalBytesAcrossCopies: group.reduce((sum, file) => sum + file.sizeBytes, 0),
      canonicalPath: group[0].path,
      paths: group.map((file) => file.path),
    }))
    .sort((a, b) => b.count - a.count || a.canonicalPath.localeCompare(b.canonicalPath));

  const variantCandidates = Array.from(groupBy(files, variantKey).entries())
    .filter(([key, group]) => key && group.length > 1 && new Set(group.map((file) => file.sha256)).size > 1)
    .map(([key, group]) => ({
      key,
      count: group.length,
      distinctSha256: new Set(group.map((file) => file.sha256)).size,
      paths: group.map((file) => file.path),
    }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));

  const emailThreadCandidates = Array.from(groupBy(
    files.filter((file) => file.extension === '.msg' || file.extension === '.eml'),
    emailThreadKey,
  ).entries())
    .filter(([key, group]) => key && group.length > 1)
    .map(([key, group]) => ({
      key,
      count: group.length,
      paths: group.map((file) => file.path),
    }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));

  const classificationSummary = {
    generatedAt: new Date().toISOString(),
    totals: report.totals,
    countsByExtension: report.countsByExtension,
    countsByRoot: report.countsByRoot,
    countsByCategory: report.countsByCategory,
    duplicateGroupCount: duplicateGroups.length,
    variantCandidateGroupCount: variantCandidates.length,
    emailThreadCandidateGroupCount: emailThreadCandidates.length,
  };

  await writeJson('inventory.json', { generatedAt: new Date().toISOString(), sourceRoots: roots, files });
  await writeJson('duplicate-groups.json', duplicateGroups);
  await writeJson('variant-candidates.json', variantCandidates);
  await writeJson('email-thread-candidates.json', emailThreadCandidates);
  await writeJson('classification-summary.json', classificationSummary);
}

async function maybeCheckpoint(processed) {
  if (processed % checkpointEvery !== 0) return;
  await writeJson('ingestion-report.json', report);
  console.log(`[ingest] processed ${processed}: approved=${report.totals.ingestedApproved} qc_failed=${report.totals.ingestedQcFailed} duplicates=${report.totals.duplicateExact} failed=${report.totals.failed}`);
}

async function appendSafe(type, data) {
  try {
    await appendEvent({ matterName, type, data, source: 'benchmark-intake' });
  } catch {
  }
}

function classifyIntakePath(rootLabel, filePath) {
  const lower = `${rootLabel}/${filePath}`.toLowerCase();
  const ext = extname(filePath).toLowerCase();
  if (ext === '.msg' || ext === '.eml') return 'email';
  if (['.mp3', '.m4a', '.wav', '.mp4', '.mkv'].includes(ext)) return 'recording-media';
  if (lower.includes('transcript') || ext === '.vtt') return 'transcript';
  if (lower.includes('production') || lower.includes('bundle') || lower.includes('inventory')) return 'production';
  if (rootLabel === 'ordinary-action' || rootLabel === 'judicial-review' || /court|petition|summons|writ|plead|motion|interlocutor|sheriff|judicial review/.test(lower)) return 'court-procedure';
  if (rootLabel === 'slcc-complaint' || /slcc|complaint|fitness|practise|practice/.test(lower)) return 'complaint-regulatory';
  if (/correspondence|letter|email|reply|response/.test(lower)) return 'correspondence';
  if (/chronology|timeline|minute|meeting|note/.test(lower)) return 'chronology-notes';
  return 'document';
}

function variantKey(file) {
  const stem = basename(file.fileName, extname(file.fileName))
    .toLowerCase()
    .replace(/\b(re|fw|fwd)\s*[:_-]\s*/g, '')
    .replace(/\b(copy|draft|final|signed|redacted|clean|version|v\d+)\b/g, '')
    .replace(/\(\d+\)|\[\d+\]/g, '')
    .replace(/\b\d{4}[-_.]\d{1,2}[-_.]\d{1,2}\b/g, '')
    .replace(/\b\d{1,2}[-_.]\d{1,2}[-_.]\d{2,4}\b/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
  return stem.length >= 8 ? stem : '';
}

function emailThreadKey(file) {
  if (file.extension !== '.msg' && file.extension !== '.eml') return '';
  return variantKey(file).replace(/\b(re|fw|fwd)\b/g, '').trim();
}

function groupBy(values, keyFn) {
  const groups = new Map();
  for (const value of values) {
    const key = keyFn(value);
    const group = groups.get(key) ?? [];
    group.push(value);
    groups.set(key, group);
  }
  return groups;
}

function bump(record, key) {
  record[key] = (record[key] ?? 0) + 1;
}

function addDuplicatePath(map, evidenceId, filePath) {
  const paths = map.get(evidenceId) ?? [];
  paths.push(filePath);
  map.set(evidenceId, paths);
}

function shouldResumeExisting(record) {
  if (['copied_unindexed', 'extracting', 'extracted', 'indexed'].includes(record.status)) return true;
  return retryFailed && ['qc_failed', 'failed'].includes(record.status);
}

function nextEvidenceNumber(records) {
  let max = records.length;
  for (const record of records) {
    const match = record.id.match(/-SRC-(\d+)$/);
    if (match) max = Math.max(max, Number(match[1]));
  }
  return max + 1;
}

function allocateEvidenceId(nextNum, recordsById) {
  const prefix = matterName.substring(0, 3).toUpperCase();
  let candidate = `${prefix}-SRC-${String(nextNum).padStart(4, '0')}`;
  while (recordsById.has(candidate)) {
    nextNum += 1;
    candidate = `${prefix}-SRC-${String(nextNum).padStart(4, '0')}`;
  }
  return candidate;
}

function safeFileName(fileName) {
  const cleaned = fileName.replace(/[^\w .()[\]{}@+=,-]/g, '_').replace(/\s+/g, ' ').trim();
  if (!cleaned) return 'source-file';
  if (cleaned.length <= 160) return cleaned;
  const ext = extname(cleaned);
  return `${cleaned.slice(0, 160 - ext.length)}${ext}`;
}

function readNumericArg(name) {
  const prefix = `${name}=`;
  const value = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  if (!value) return undefined;
  const parsed = Number(value.slice(prefix.length));
  return Number.isFinite(parsed) ? parsed : undefined;
}

function errorMessage(err) {
  return err instanceof Error ? err.message : String(err);
}

async function writeJson(name, value) {
  const path = join(benchmarkDir, name);
  const tmpPath = `${path}.tmp`;
  await writeFile(tmpPath, `${JSON.stringify(value, null, 2)}\n`, 'utf-8');
  await rename(tmpPath, path);
}
