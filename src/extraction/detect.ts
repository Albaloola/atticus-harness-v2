import type { EvidenceFormat } from './types.js';
import { open } from 'fs/promises';

const EXTENSION_MAP: Record<string, EvidenceFormat> = {
  '.pdf': 'pdf',
  '.docx': 'docx',
  '.dotx': 'docx',
  '.doc': 'doc',
  '.dot': 'doc',
  '.msg': 'msg',
  '.jpg': 'image',
  '.jpeg': 'image',
  '.png': 'image',
  '.tif': 'image',
  '.tiff': 'image',
  '.bmp': 'image',
  '.webp': 'image',
  '.txt': 'text',
  '.md': 'text',
  '.csv': 'text',
  '.json': 'text',
  '.xml': 'text',
  '.eml': 'text',
  '.vtt': 'text',
  '.html': 'html',
  '.htm': 'html',
  '.rtf': 'text',
};

export function detectFormatByExtension(filePath: string): EvidenceFormat {
  const lower = filePath.toLowerCase();
  for (const [ext, format] of Object.entries(EXTENSION_MAP)) {
    if (lower.endsWith(ext)) return format;
  }
  return 'unknown';
}

export async function detectFormatByMagic(filePath: string): Promise<EvidenceFormat> {
  const fd = await open(filePath, 'r');
  try {
    const buffer = Buffer.alloc(8);
    await fd.read(buffer, 0, 8, 0);

    // PDF: %PDF
    if (buffer.subarray(0, 4).toString() === '%PDF') return 'pdf';

    // PNG: 89 50 4E 47 0D 0A 1A 0A
    if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'image';

    // JPEG: FF D8 FF
    if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return 'image';

    // DOCX files are ZIP containers, but generic ZIP/XLSX/ODS archives should
    // not be approved as empty Word documents.
    if (buffer.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))) {
      return detectFormatByExtension(filePath) === 'docx' ? 'docx' : 'unknown';
    }

    // HTML: <html or <!DOCTYPE
    const start = buffer.subarray(0, 6).toString().toLowerCase();
    if (start.startsWith('<html') || start.startsWith('<!doctype')) return 'html';

    return detectFormatByExtension(filePath);
  } finally {
    await fd.close();
  }
}

export function getMimeType(format: EvidenceFormat): string {
  const map: Record<EvidenceFormat, string> = {
    pdf: 'application/pdf',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    msg: 'application/vnd.ms-outlook',
    image: 'image/jpeg',
    text: 'text/plain',
    html: 'text/html',
    unknown: 'application/octet-stream',
  };
  return map[format] ?? 'application/octet-stream';
}
