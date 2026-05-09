import { readFile } from 'fs/promises';
import { hashText } from './hash.js';
import { normalizeExtractedText } from './normalize.js';
import type { ExtractedText } from './types.js';

const MIN_STRING_LENGTH = 12;
const MAX_STRINGS = 800;

export async function extractMsgText(filePath: string, sourceId?: string): Promise<ExtractedText> {
  const buffer = await readFile(filePath);
  const strings = dedupe([
    ...extractUtf16LeStrings(buffer),
    ...extractAsciiStrings(buffer),
  ]).slice(0, MAX_STRINGS);

  const text = normalizeExtractedText(strings.join('\n')).trim();
  if (!text) {
    throw new Error('No readable MSG strings found');
  }

  return {
    sourceId: sourceId || filePath,
    text,
    method: 'msg_strings',
    confidence: 0.45,
    sha256: hashText(text),
    extractedAt: new Date().toISOString(),
  };
}

function extractUtf16LeStrings(buffer: Buffer): string[] {
  const strings: string[] = [];
  let current = '';

  for (let offset = 0; offset + 1 < buffer.length; offset += 2) {
    const code = buffer[offset] | (buffer[offset + 1] << 8);
    if (isReadableCodePoint(code)) {
      current += String.fromCharCode(code);
      continue;
    }

    flushString(strings, current);
    current = '';
  }

  flushString(strings, current);
  return strings;
}

function extractAsciiStrings(buffer: Buffer): string[] {
  const strings: string[] = [];
  let current = '';

  for (const byte of buffer) {
    const readable = byte === 9 || byte === 10 || byte === 13 || (byte >= 32 && byte <= 126);
    if (readable) {
      current += String.fromCharCode(byte);
      continue;
    }

    flushString(strings, current);
    current = '';
  }

  flushString(strings, current);
  return strings;
}

function isReadableCodePoint(code: number): boolean {
  return code === 9 || code === 10 || code === 13 || (code >= 32 && code <= 0xfffd);
}

function flushString(strings: string[], value: string): void {
  const compact = value.replace(/\s+/g, ' ').trim();
  if (compact.length >= MIN_STRING_LENGTH) {
    strings.push(compact);
  }
}

function dedupe(values: string[]): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const value of values) {
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(value);
  }

  return unique;
}
