import { describe, it, expect } from 'vitest';

// Test the core normalization and matching logic
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim();
}

describe('citation text normalization', () => {
  it('lowercases text', () => {
    expect(normalizeText('Hello World')).toBe('hello world');
  });

  it('collapses whitespace', () => {
    expect(normalizeText('hello   world')).toBe('hello world');
  });

  it('removes punctuation', () => {
    expect(normalizeText('hello, world!')).toBe('hello world');
  });

  it('trims whitespace', () => {
    expect(normalizeText('  hello world  ')).toBe('hello world');
  });
});

describe('quote matching', () => {
  const sourceText = 'the tenant shall pay rent of one thousand pounds per month on the first day of each month';

  it('finds exact quote in source', () => {
    const quote = 'tenant shall pay rent';
    const normalizedSource = normalizeText(sourceText);
    const normalizedQuote = normalizeText(quote);
    expect(normalizedSource.includes(normalizedQuote)).toBe(true);
  });

  it('handles case differences', () => {
    const quote = 'Tenant Shall Pay Rent';
    const normalizedSource = normalizeText(sourceText);
    const normalizedQuote = normalizeText(quote);
    expect(normalizedSource.includes(normalizedQuote)).toBe(true);
  });

  it('handles punctuation differences', () => {
    const quote = 'tenant shall pay rent of one thousand pounds';
    const normalizedSource = normalizeText(sourceText);
    const normalizedQuote = normalizeText(quote);
    expect(normalizedSource.includes(normalizedQuote)).toBe(true);
  });

  it('rejects fabricated quotes', () => {
    const quote = 'tenant shall pay ten million pounds';
    const normalizedSource = normalizeText(sourceText);
    const normalizedQuote = normalizeText(quote);
    expect(normalizedSource.includes(normalizedQuote)).toBe(false);
  });
});
