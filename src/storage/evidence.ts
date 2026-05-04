import { writeFile, readFile, unlink } from 'fs/promises';
import { getMatterPath } from './matter.js';
import type { EvidenceRecord } from '../types/evidence.js';

export async function registerEvidence(
  matterName: string,
  record: EvidenceRecord
): Promise<void> {
  const indexPath = getMatterPath(matterName, '_evidence', '_index.json');
  const records = await loadEvidenceIndex(matterName);

  const existing = records.find(r => r.sha256 === record.sha256);
  if (existing) {
    throw new Error(`Duplicate evidence: ${record.originalPath} matches existing ${existing.id} (same SHA-256)`);
  }

  records.push(record);
  await writeFile(indexPath, JSON.stringify(records, null, 2), 'utf-8');
}

export async function listEvidence(matterName: string): Promise<EvidenceRecord[]> {
  return loadEvidenceIndex(matterName);
}

export async function getEvidenceById(matterName: string, id: string): Promise<EvidenceRecord | undefined> {
  const records = await loadEvidenceIndex(matterName);
  return records.find(r => r.id === id);
}

export function getEvidencePath(matterName: string, evidenceId: string): string {
  return getMatterPath(matterName, '_evidence', evidenceId);
}

export function getExtractionPath(matterName: string, evidenceId: string): string {
  return getMatterPath(matterName, '_extractions', `${evidenceId}.txt`);
}

export async function removeEvidence(matterName: string, evidenceId: string): Promise<void> {
  const records = await loadEvidenceIndex(matterName);
  const filtered = records.filter(r => r.id !== evidenceId);
  const indexPath = getMatterPath(matterName, '_evidence', '_index.json');
  await writeFile(indexPath, JSON.stringify(filtered, null, 2), 'utf-8');

  try { await unlink(getEvidencePath(matterName, evidenceId)); } catch {}
  try { await unlink(getExtractionPath(matterName, evidenceId)); } catch {}
}

async function loadEvidenceIndex(matterName: string): Promise<EvidenceRecord[]> {
  const indexPath = getMatterPath(matterName, '_evidence', '_index.json');
  try {
    const content = await readFile(indexPath, 'utf-8');
    return JSON.parse(content) as EvidenceRecord[];
  } catch {
    return [];
  }
}
