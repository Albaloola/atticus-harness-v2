import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export interface ExportManifestFile {
  path: string;
  sha256: string;
  sizeBytes: number;
}

export interface ExportManifest {
  manifestVersion: 1;
  matterName: string;
  exportId: string;
  artifactId: string;
  reducerPacketId?: string;
  createdAt: string;
  prepareOnly: true;
  files: ExportManifestFile[];
  provenance: Record<string, unknown>;
}

export async function buildExportManifest(input: {
  matterName: string;
  exportId: string;
  artifactId: string;
  reducerPacketId?: string;
  files: string[];
  provenance?: Record<string, unknown>;
}): Promise<ExportManifest> {
  const files: ExportManifestFile[] = [];
  for (const file of input.files) {
    const bytes = await readFile(file);
    files.push({
      path: file,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      sizeBytes: bytes.length,
    });
  }
  return {
    manifestVersion: 1,
    matterName: input.matterName,
    exportId: input.exportId,
    artifactId: input.artifactId,
    reducerPacketId: input.reducerPacketId,
    createdAt: new Date().toISOString(),
    prepareOnly: true,
    files,
    provenance: input.provenance ?? {},
  };
}
