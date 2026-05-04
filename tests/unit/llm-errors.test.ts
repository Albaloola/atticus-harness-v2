import { describe, it, expect } from 'vitest';
import { LLMError, RateLimitError, TokenLimitError, AuthError, classifyError } from '../../src/llm/errors.ts';

describe('LLMError types', () => {
  it('classifyError returns AuthError for 401', () => {
    const err = classifyError(401, 'unauthorized');
    expect(err).toBeInstanceOf(AuthError);
    expect(err.name).toBe('AuthError');
  });

  it('classifyError returns AuthError for 403', () => {
    const err = classifyError(403, 'forbidden');
    expect(err).toBeInstanceOf(AuthError);
    expect(err.name).toBe('AuthError');
  });

  it('classifyError returns RateLimitError for 429', () => {
    const err = classifyError(429, 'rate limited');
    expect(err).toBeInstanceOf(RateLimitError);
    expect(err.name).toBe('RateLimitError');
  });

  it('classifyError returns TokenLimitError for 413', () => {
    const err = classifyError(413, 'too many tokens');
    expect(err).toBeInstanceOf(TokenLimitError);
  });

  it('classifyError returns LLMError for 500', () => {
    const err = classifyError(500, 'server error');
    expect(err).toBeInstanceOf(LLMError);
    expect(err.statusCode).toBe(500);
  });

  it('classifyError returns LLMError for unknown codes', () => {
    const err = classifyError(418, "I'm a teapot");
    expect(err).toBeInstanceOf(LLMError);
    expect(err.statusCode).toBe(418);
  });
});
