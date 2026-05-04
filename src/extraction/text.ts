import { readFile } from 'fs/promises';
import { hashText } from './hash.js';
import type { ExtractedText } from './types.js';

const ENCODINGS = ['utf-8', 'utf8', 'cp1252', 'latin1'] as const;

export async function extractPlainText(filePath: string, sourceId?: string): Promise<ExtractedText> {
  let text = '';
  let method: 'plain_text' | 'html_to_text' = 'plain_text';

  for (const encoding of ENCODINGS) {
    try {
      text = await readFile(filePath, encoding as BufferEncoding);
      break;
    } catch {
      continue;
    }
  }

  if (!text) {
    const buf = await readFile(filePath);
    text = buf.toString('latin1');
  }

  if (text.trim().toLowerCase().startsWith('<!doctype') || text.trim().toLowerCase().startsWith('<html')) {
    text = htmlToText(text);
    method = 'html_to_text';
  }

  return {
    sourceId: sourceId || filePath,
    text: text.trim(),
    method,
    confidence: method === 'plain_text' ? 0.95 : 0.85,
    sha256: hashText(text),
    extractedAt: new Date().toISOString(),
  };
}

function htmlToText(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}
