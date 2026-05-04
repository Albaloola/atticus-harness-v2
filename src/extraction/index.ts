import { access } from 'fs/promises';
import type { ExtractedText, EvidenceFormat } from './types.js';
import { detectFormatByMagic, detectFormatByExtension } from './detect.js';
import { extractPdfText } from './pdf.js';
import { extractDocxText } from './docx.js';
import { extractDocText } from './doc.js';
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
    case 'image':
      return extractImageText(filePath, id);
    case 'html':
    case 'text':
      return extractPlainText(filePath, id);
    default:
      break;
  }

  // Fallbacks for unknown formats
  try {
    return await extractPlainText(filePath, id);
  } catch {
    try {
      return await extractDocText(filePath, id);
    } catch {
      throw new UnsupportedFormatError(filePath, format);
    }
  }
}

function mapMimeType(mime: string): EvidenceFormat {
  const map: Record<string, EvidenceFormat> = {
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/msword': 'doc',
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
