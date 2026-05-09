import { describe, it, expect } from 'vitest';
import { mkdtemp, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { hashText } from '../../src/extraction/hash.ts';
import { detectFormatByExtension, detectFormatByMagic, getMimeType } from '../../src/extraction/detect.ts';
import { extractText, UnsupportedFormatError } from '../../src/extraction/index.ts';
import { normalizeExtractedText } from '../../src/extraction/normalize.ts';
import { shouldOcrPdfPage } from '../../src/extraction/pdf.ts';

describe('hashText', () => {
  it('returns consistent SHA-256 hex string', () => {
    const hash = hashText('hello world');
    expect(hash).toHaveLength(64);
    expect(hash).toMatch(/^[a-f0-9]{64}$/);
  });

  it('returns different hash for different inputs', () => {
    const hash1 = hashText('hello');
    const hash2 = hashText('world');
    expect(hash1).not.toBe(hash2);
  });

  it('returns same hash for same input', () => {
    const hash1 = hashText('test data');
    const hash2 = hashText('test data');
    expect(hash1).toBe(hash2);
  });
});

describe('detectFormatByExtension', () => {
  it('detects PDF by extension', () => {
    expect(detectFormatByExtension('document.pdf')).toBe('pdf');
  });

  it('detects DOCX by extension', () => {
    expect(detectFormatByExtension('document.docx')).toBe('docx');
  });

  it('detects MSG email files by extension', () => {
    expect(detectFormatByExtension('mail.msg')).toBe('msg');
  });

  it('detects image by extension', () => {
    expect(detectFormatByExtension('photo.jpeg')).toBe('image');
    expect(detectFormatByExtension('photo.jpg')).toBe('image');
    expect(detectFormatByExtension('photo.png')).toBe('image');
  });

  it('detects text by extension', () => {
    expect(detectFormatByExtension('notes.txt')).toBe('text');
    expect(detectFormatByExtension('notes.md')).toBe('text');
    expect(detectFormatByExtension('data.csv')).toBe('text');
  });

  it('returns unknown for unrecognized extensions', () => {
    expect(detectFormatByExtension('file.xyz')).toBe('unknown');
  });

  it('is case insensitive', () => {
    expect(detectFormatByExtension('DOCUMENT.PDF')).toBe('pdf');
    expect(detectFormatByExtension('Photo.JPG')).toBe('image');
  });
});

describe('detectFormatByMagic', () => {
  it('does not classify generic ZIP archives as DOCX', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'harness-extraction-'));
    try {
      const archivePath = join(dir, 'bundle.zip');
      await writeFile(archivePath, Buffer.from([0x50, 0x4b, 0x03, 0x04, 0x14, 0x00]));
      expect(await detectFormatByMagic(archivePath)).toBe('unknown');
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  it('treats EML and caption files as text by extension', () => {
    expect(detectFormatByExtension('message.eml')).toBe('text');
    expect(detectFormatByExtension('captions.vtt')).toBe('text');
  });
});

describe('extractText unknown fallback', () => {
  it('extracts extensionless text files after a text-like sample check', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'harness-extraction-'));
    try {
      const textPath = join(dir, 'README');
      await writeFile(textPath, 'plain extensionless text');
      const extracted = await extractText(textPath, { sourceId: 'TXT-1' });
      expect(extracted.text).toBe('plain extensionless text');
      expect(extracted.method).toBe('plain_text');
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  it('rejects unknown binary files instead of reading them as plain text', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'harness-extraction-'));
    try {
      const binaryPath = join(dir, 'recording.m4a');
      await writeFile(binaryPath, Buffer.from([0x00, 0x11, 0x22, 0x33, 0x44]));
      await expect(extractText(binaryPath, { sourceId: 'BIN-1' })).rejects.toBeInstanceOf(UnsupportedFormatError);
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
});

describe('extractText MSG fallback', () => {
  it('extracts low-confidence searchable strings from Outlook MSG files', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'harness-extraction-'));
    try {
      const msgPath = join(dir, 'mail.msg');
      await writeFile(msgPath, Buffer.concat([
        Buffer.from([0xd0, 0xcf, 0x11, 0xe0]),
        Buffer.from('Subject: Fitness to Practice Hearing\0\0Body: Meeting chronology evidence', 'utf16le'),
      ]));

      const extracted = await extractText(msgPath, { sourceId: 'MSG-1' });
      expect(extracted.method).toBe('msg_strings');
      expect(extracted.confidence).toBeLessThan(0.5);
      expect(extracted.text).toContain('Fitness to Practice Hearing');
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
});

describe('shouldOcrPdfPage', () => {
  it('does not OCR pages that already have a long searchable text line', () => {
    expect(shouldOcrPdfPage('User, Course, Module, Timestamp, Event, Origin, IP address')).toBe(false);
  });

  it('OCRs blank pages and tiny text artifacts', () => {
    expect(shouldOcrPdfPage('')).toBe(true);
    expect(shouldOcrPdfPage('Page 1')).toBe(true);
  });
});

describe('getMimeType', () => {
  it('returns correct MIME types', () => {
    expect(getMimeType('pdf')).toBe('application/pdf');
    expect(getMimeType('docx')).toBe('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    expect(getMimeType('msg')).toBe('application/vnd.ms-outlook');
    expect(getMimeType('image')).toBe('image/jpeg');
    expect(getMimeType('text')).toBe('text/plain');
    expect(getMimeType('unknown')).toBe('application/octet-stream');
  });
});

describe('normalizeExtractedText', () => {
  it('decomposes typographic ligatures into searchable text', () => {
    const text = 'O\uFB03ce con\uFB01rm a\uFB00ord \uFB02at';
    expect(normalizeExtractedText(text)).toBe('Office confirm afford flat');
  });

  it('repairs common mojibake ligature output from PDF extraction', () => {
    expect(normalizeExtractedText('Oï¬ƒce conï¬rm aï¬€ord')).toBe('Office confirm afford');
    expect(normalizeExtractedText('conâ¬ºrm')).toBe('confirm');
  });
});
