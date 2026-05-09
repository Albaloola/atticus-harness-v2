import { access, open } from 'fs/promises';
import type { ExtractedText, EvidenceFormat } from './types.js';
import { detectFormatByMagic, detectFormatByExtension } from './detect.js';
import { extractPdfText } from './pdf.js';
import { extractDocxText } from './docx.js';
import { extractDocText } from './doc.js';
import { extractMsgText } from './msg.js';
import { extractImageText } from './image.js';
import { extractPlainText } from './text.js';

export type { ExtractedText, PageExtraction, ExtractionMethod, EvidenceFormat } from './types.js';
export { hashFile, hashText } from './hash.js';

export interface ExtractOptions {
  sourceId?: string;
  mimeType?: string;
}

export class ExtractionError extends Error {
  constructor(message: string, public readonly filePath: string) {
    super(message);
    this.name = 'ExtractionError';
  }
}

export class UnsupportedFormatError extends ExtractionError {
  constructor(filePath: string, public readonly format: string) {
    super(`Unsupported file format: ${format}`, filePath);
    this.name = 'UnsupportedFormatError';
  }
}

export async function extractText(filePath: string, options?: ExtractOptions): Promise<ExtractedText> {
  const id = options?.sourceId || filePath;

  try {
    await access(filePath);
  } catch {
    throw new ExtractionError(`File not found: ${filePath}`, filePath);
  }

  let format: EvidenceFormat;
  if (options?.mimeType) {
    format = mapMimeType(options.mimeType);
  } else {
    format = await detectFormatByMagic(filePath);
  }

  switch (format) {
    case 'pdf':
      return extractPdfText(filePath, id);
    case 'docx':
      return extractDocxText(filePath, id);
    case 'doc':
      return extractDocText(filePath, id);
    case 'msg':
      return extractMsgText(filePath, id);
    case 'image':
      return extractImageText(filePath, id);
    case 'html':
    case 'text':
      return extractPlainText(filePath, id);
    default:
      break;
  }

  if (format === 'unknown' && await looksLikeTextFile(filePath)) {
    return extractPlainText(filePath, id);
  }

  throw new UnsupportedFormatError(filePath, format);
}

function mapMimeType(mime: string): EvidenceFormat {
  const map: Record<string, EvidenceFormat> = {
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/msword': 'doc',
    'application/vnd.ms-outlook': 'msg',
    'image/jpeg': 'image',
    'image/png': 'image',
    'image/tiff': 'image',
    'image/bmp': 'image',
    'image/webp': 'image',
    'text/plain': 'text',
    'text/html': 'html',
    'text/csv': 'text',
    'text/markdown': 'text',
  };
  return map[mime] || 'unknown';
}

async function looksLikeTextFile(filePath: string): Promise<boolean> {
  const fd = await open(filePath, 'r');
  try {
    const buffer = Buffer.alloc(4096);
    const { bytesRead } = await fd.read(buffer, 0, buffer.length, 0);
    if (bytesRead === 0) return true;

    const sample = buffer.subarray(0, bytesRead);
    let controlBytes = 0;
    for (const byte of sample) {
      if (byte === 0) return false;
      const isAllowedWhitespace = byte === 9 || byte === 10 || byte === 12 || byte === 13;
      if (byte < 32 && !isAllowedWhitespace) controlBytes += 1;
    }
    return controlBytes / bytesRead < 0.05;
  } finally {
    await fd.close();
  }
}
