import { describe, it, expect } from 'vitest';
import { collectCitationCandidates, normalizeText, scoreQuoteAgainstSource } from '../../src/citation/verify.js';

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

  it('decomposes PDF ligatures before matching', () => {
    expect(normalizeText('Of\uFB01ce con\uFB01rmed repairs')).toContain('office confirmed repairs');
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

  it('supports OCR-tolerant fuzzy quote verification', () => {
    const result = scoreQuoteAgainstSource(
      'The accommodation office confirmed that the arrears meeting would review repairs and rent.',
      'Accommodation Office confirmed the arrears meeting would review repair issues, rent account entries, and next steps.',
    );

    expect(result.status).toBe('supported');
    expect(result.confidence).toBeGreaterThanOrEqual(0.72);
  });
});

describe('citation collection', () => {
  it('accepts generic evidence IDs as well as -SRC- IDs', () => {
    const citations = collectCitationCandidates({
      content: 'This sentence cites [EV-001] and this one cites [NAP-SRC-0001].',
      metadata: {},
    });

    expect(citations.map((citation) => citation.evidenceId)).toEqual(['EV-001', 'NAP-SRC-0001']);
  });
});
