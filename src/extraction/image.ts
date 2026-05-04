import { execFile } from 'child_process';
import { promisify } from 'util';
import { hashText } from './hash.js';
import type { ExtractedText } from './types.js';

const exec = promisify(execFile);

export async function extractImageText(filePath: string, sourceId?: string): Promise<ExtractedText> {
  const { stdout } = await exec('tesseract', [filePath, 'stdout']);
  const text = stdout.trim();

  return {
    sourceId: sourceId || filePath,
    text,
    method: 'tesseract_ocr',
    confidence: 0.65,
    sha256: hashText(text),
    extractedAt: new Date().toISOString(),
  };
}
