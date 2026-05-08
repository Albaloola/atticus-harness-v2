import { randomUUID } from 'crypto';
import { appendEvent } from '../state/events.js';
import { getStateDb } from '../state/store.js';
import type { ExportBundle, ExportBundleStatus } from '../domain/export-bundle.js';

export interface ExportSignoff {
  signoffId: string;
  matterName: string;
  exportId: string;
  operatorId: string;
  status: 'signed' | 'revoked';
  signedAt: string;
  metadata: Record<string, unknown>;
}

export interface CreateExportBundleInput {
  id?: string;
  matterName: string;
  bundleType: string;
  status?: ExportBundleStatus;
  outputPath?: string;
  manifestPath?: string;
  metadata?: Record<string, unknown>;
}

export function createExportBundle(input: CreateExportBundleInput): ExportBundle {
  const bundle: ExportBundle = {
    exportId: input.id ?? randomUUID(),
    matterName: input.matterName,
    bundleType: input.bundleType,
    status: input.status ?? 'draft',
    outputPath: input.outputPath,
    manifestPath: input.manifestPath,
    createdAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO export_bundles (
      id, matter_name, bundle_type, status, output_path,
      manifest_path, created_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    bundle.exportId,
    bundle.matterName,
    bundle.bundleType,
    bundle.status,
    bundle.outputPath ?? null,
    bundle.manifestPath ?? null,
    bundle.createdAt,
    JSON.stringify(bundle.metadata),
  );
  return bundle;
}

export function updateExportBundle(
  matterName: string,
  exportId: string,
  patch: Partial<Pick<ExportBundle, 'status' | 'outputPath' | 'manifestPath' | 'metadata'>>,
): ExportBundle {
  const existing = getExportBundle(matterName, exportId);
  if (!existing) {
    throw new Error(`Export bundle "${exportId}" was not found`);
  }
  const updated: ExportBundle = {
    ...existing,
    status: patch.status ?? existing.status,
    outputPath: patch.outputPath ?? existing.outputPath,
    manifestPath: patch.manifestPath ?? existing.manifestPath,
    metadata: { ...existing.metadata, ...(patch.metadata ?? {}) },
  };
  getStateDb(matterName).prepare(`
    UPDATE export_bundles
    SET status = ?, output_path = ?, manifest_path = ?, metadata_json = ?
    WHERE matter_name = ? AND id = ?
  `).run(
    updated.status,
    updated.outputPath ?? null,
    updated.manifestPath ?? null,
    JSON.stringify(updated.metadata),
    matterName,
    exportId,
  );
  return updated;
}

export function getExportBundle(matterName: string, exportId: string): ExportBundle | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM export_bundles WHERE matter_name = ? AND id = ?')
    .get(matterName, exportId) as ExportBundleRow | undefined;
  return row ? rowToExportBundle(row) : undefined;
}

export function listExportBundles(matterName: string, options?: {
  status?: ExportBundleStatus;
}): ExportBundle[] {
  let sql = 'SELECT * FROM export_bundles WHERE matter_name = ?';
  const params: string[] = [matterName];
  if (options?.status) {
    sql += ' AND status = ?';
    params.push(options.status);
  }
  sql += ' ORDER BY created_at DESC';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as ExportBundleRow[];
  return rows.map(rowToExportBundle);
}

export async function recordExportSignoff(input: {
  id?: string;
  matterName: string;
  exportId: string;
  operatorId: string;
  metadata?: Record<string, unknown>;
}): Promise<ExportSignoff> {
  const bundle = getExportBundle(input.matterName, input.exportId);
  if (!bundle) {
    throw new Error(`Export bundle "${input.exportId}" was not found`);
  }
  if (bundle.status !== 'signoff_required') {
    throw new Error(`Export bundle "${input.exportId}" is not ready for signoff: ${bundle.status}`);
  }
  const signoff: ExportSignoff = {
    signoffId: input.id ?? randomUUID(),
    matterName: input.matterName,
    exportId: input.exportId,
    operatorId: input.operatorId,
    status: 'signed',
    signedAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO export_signoffs (
      id, matter_name, export_id, operator_id, status, signed_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    signoff.signoffId,
    signoff.matterName,
    signoff.exportId,
    signoff.operatorId,
    signoff.status,
    signoff.signedAt,
    JSON.stringify(signoff.metadata),
  );
  updateExportBundle(input.matterName, input.exportId, {
    status: 'ready',
    metadata: { signoffId: signoff.signoffId, operatorId: signoff.operatorId },
  });
  await appendEvent({
    matterName: input.matterName,
    type: 'export.signoff_recorded',
    data: { exportId: input.exportId, signoffId: signoff.signoffId, operatorId: input.operatorId },
    source: 'export-store',
  });
  return signoff;
}

export function listExportSignoffs(matterName: string, exportId?: string): ExportSignoff[] {
  let sql = 'SELECT * FROM export_signoffs WHERE matter_name = ?';
  const params = [matterName];
  if (exportId) {
    sql += ' AND export_id = ?';
    params.push(exportId);
  }
  sql += ' ORDER BY signed_at DESC';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as ExportSignoffRow[];
  return rows.map(rowToExportSignoff);
}

interface ExportBundleRow {
  id: string;
  matter_name: string;
  bundle_type: string;
  status: ExportBundleStatus;
  output_path: string | null;
  manifest_path: string | null;
  created_at: string;
  metadata_json: string;
}

interface ExportSignoffRow {
  id: string;
  matter_name: string;
  export_id: string;
  operator_id: string;
  status: ExportSignoff['status'];
  signed_at: string;
  metadata_json: string;
}

function rowToExportBundle(row: ExportBundleRow): ExportBundle {
  return {
    exportId: row.id,
    matterName: row.matter_name,
    bundleType: row.bundle_type,
    status: row.status,
    outputPath: row.output_path ?? undefined,
    manifestPath: row.manifest_path ?? undefined,
    createdAt: row.created_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToExportSignoff(row: ExportSignoffRow): ExportSignoff {
  return {
    signoffId: row.id,
    matterName: row.matter_name,
    exportId: row.export_id,
    operatorId: row.operator_id,
    status: row.status,
    signedAt: row.signed_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}
