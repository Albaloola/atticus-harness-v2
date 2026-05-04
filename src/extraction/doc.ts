import { execFile } from 'child_process';
import { promisify } from 'util';
import { mkdtemp, readFile, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import { hashText } from './hash.js';
import type { ExtractedText } from './types.js';

const exec = promisify(execFile);

export async function extractDocText(filePath: string, sourceId?: string): Promise<ExtractedText> {
  const tmpDir = await mkdtemp(join(tmpdir(), 'harness-doc-'));

  try {
    await exec('libreoffice', [
      '--headless',
      '--convert-to', 'txt:Text',
      '--outdir', tmpDir,
      filePath,
    ]);

    const baseName = filePath.split('/').pop()?.replace(/\.[^.]+$/, '.txt') || 'output.txt';

    let text: string;
    try {
      text = await readFile(join(tmpDir, baseName), 'utf-8');
    } catch {
      const { stdout } = await exec('pandoc', [filePath, '-t', 'plain']);
      text = stdout;
    }

    return {
      sourceId: sourceId || filePath,
      text: text.trim(),
      method: 'libreoffice',
      confidence: 0.8,
      sha256: hashText(text),
      extractedAt: new Date().toISOString(),
    };
  } finally {
    await rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}
