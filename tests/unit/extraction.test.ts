import { describe, it, expect } from 'vitest';
import { hashText } from '../../src/extraction/hash.ts';
import { detectFormatByExtension, getMimeType } from '../../src/extraction/detect.ts';

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

describe('getMimeType', () => {
  it('returns correct MIME types', () => {
    expect(getMimeType('pdf')).toBe('application/pdf');
    expect(getMimeType('docx')).toBe('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    expect(getMimeType('image')).toBe('image/jpeg');
    expect(getMimeType('text')).toBe('text/plain');
    expect(getMimeType('unknown')).toBe('application/octet-stream');
  });
});
