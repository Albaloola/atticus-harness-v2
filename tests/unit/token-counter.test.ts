import { describe, it, expect } from 'vitest';
import { estimateTokenCount, estimateMessageTokens } from '../../src/llm/token-counter.ts';

describe('estimateTokenCount', () => {
  it('returns at least 1 for any input', () => {
    expect(estimateTokenCount('')).toBe(1);
    expect(estimateTokenCount('a')).toBe(1);
  });

  it('estimates more tokens for longer text', () => {
    const short = estimateTokenCount('hello world');
    const long = estimateTokenCount('hello world this is a much longer sentence with many words in it');
    expect(long).toBeGreaterThan(short);
  });

  it('handles punctuation', () => {
    const tokens = estimateTokenCount('Hello, world! This is a test.');
    expect(tokens).toBeGreaterThanOrEqual(5);
  });
});

describe('estimateMessageTokens', () => {
  it('returns at least 4 for empty system message', () => {
    const tokens = estimateMessageTokens([{ role: 'system', content: '' }]);
    expect(tokens).toBeGreaterThanOrEqual(4);
  });

  it('adds overhead per message', () => {
    const one = estimateMessageTokens([{ role: 'system', content: 'hi' }]);
    const two = estimateMessageTokens([
      { role: 'system', content: 'hi' },
      { role: 'user', content: 'hi' },
    ]);
    expect(two).toBeGreaterThan(one);
  });
});
