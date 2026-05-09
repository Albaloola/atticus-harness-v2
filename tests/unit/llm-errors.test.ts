import { describe, it, expect } from 'vitest';
import {
  AuthError,
  ContentPolicyError,
  InvalidRequestError,
  LLMError,
  MalformedProviderResponseError,
  ProviderOverloadError,
  RateLimitError,
  TimeoutError,
  TokenLimitError,
  TransientNetworkError,
  classifyError,
  classifyThrownError,
} from '../../src/llm/errors.ts';

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
    const err = classifyError(429, 'rate limited', 'openai', {
      headers: { 'retry-after': '3' },
    });
    expect(err).toBeInstanceOf(RateLimitError);
    expect(err.name).toBe('RateLimitError');
    expect(err.category).toBe('rate_limit');
    expect(err.retryAfterMs).toBe(3000);
    expect(err.retryable).toBe(true);
  });

  it('classifyError returns TokenLimitError for 413', () => {
    const err = classifyError(413, 'too many tokens');
    expect(err).toBeInstanceOf(TokenLimitError);
    expect(err.category).toBe('context_length');
    expect(err.retryable).toBe(false);
  });

  it('classifyError returns TokenLimitError for context length 400s', () => {
    const err = classifyError(400, 'context length exceeded');
    expect(err).toBeInstanceOf(TokenLimitError);
  });

  it('classifyError returns ProviderOverloadError for overload statuses', () => {
    const err = classifyError(529, 'overloaded', 'anthropic');
    expect(err).toBeInstanceOf(ProviderOverloadError);
    expect(err.category).toBe('provider_overload');
    expect(err.retryable).toBe(true);
  });

  it('classifyError returns InvalidRequestError for invalid requests', () => {
    const err = classifyError(400, 'invalid request');
    expect(err).toBeInstanceOf(InvalidRequestError);
    expect(err.category).toBe('invalid_request');
    expect(err.retryable).toBe(false);
  });

  it('classifyError returns ContentPolicyError for refusals', () => {
    const err = classifyError(400, 'content policy violation');
    expect(err).toBeInstanceOf(ContentPolicyError);
    expect(err.category).toBe('content_policy');
    expect(err.retryable).toBe(false);
  });

  it('classifyError returns LLMError for 500', () => {
    const err = classifyError(500, 'server error');
    expect(err).toBeInstanceOf(LLMError);
    expect(err.statusCode).toBe(500);
    expect(err.category).toBe('transient_network');
    expect(err.retryable).toBe(true);
  });

  it('classifyError returns LLMError for unknown codes', () => {
    const err = classifyError(418, "I'm a teapot");
    expect(err).toBeInstanceOf(LLMError);
    expect(err.statusCode).toBe(418);
    expect(err.retryable).toBe(false);
  });

  it('classifyThrownError returns TimeoutError for aborted requests', () => {
    const err = classifyThrownError(Object.assign(new Error('aborted'), { name: 'AbortError' }), 'provider', 250);
    expect(err).toBeInstanceOf(TimeoutError);
    expect(err.category).toBe('timeout');
  });

  it('classifyThrownError returns TransientNetworkError for fetch failures', () => {
    const err = classifyThrownError(new TypeError('fetch failed'), 'provider');
    expect(err).toBeInstanceOf(TransientNetworkError);
    expect(err.category).toBe('transient_network');
  });

  it('MalformedProviderResponseError is non-retryable', () => {
    const err = new MalformedProviderResponseError('bad json');
    expect(err.category).toBe('malformed_response');
    expect(err.retryable).toBe(false);
  });
});
