import { describe, expect, it } from 'vitest';
import {
  AuthError,
  ContentPolicyError,
  InvalidRequestError,
  LLMError,
  MalformedProviderResponseError,
  ProviderOverloadError,
  RateLimitError,
  TimeoutError,
  TransientNetworkError,
} from '../../src/llm/errors.ts';
import {
  calculateRetryDelayMs,
  isRetryableError,
  type RetryPolicy,
  withRetry,
} from '../../src/llm/retry.ts';

const noJitterPolicy: RetryPolicy = {
  maxAttempts: 3,
  baseDelayMs: 100,
  maxDelayMs: 5_000,
  jitter: false,
  respectRetryAfter: true,
  retryTimeouts: true,
  source: 'worker',
};

describe('LLM retry policy', () => {
  it('retries rate limits and respects retry-after with injected sleep', async () => {
    const delays: number[] = [];
    let attempts = 0;

    const result = await withRetry(
      async () => {
        attempts += 1;
        if (attempts < 2) throw new RateLimitError(2, 'openai');
        return 'ok';
      },
      noJitterPolicy,
      { sleep: async (delayMs) => { delays.push(delayMs); } },
    );

    expect(result).toBe('ok');
    expect(attempts).toBe(2);
    expect(delays).toEqual([2000]);
  });

  it('retries overload, transient network, and timeout errors', () => {
    expect(isRetryableError(new ProviderOverloadError(529, 'overloaded'), noJitterPolicy)).toBe(true);
    expect(isRetryableError(new TransientNetworkError('Network error: fetch failed'), noJitterPolicy)).toBe(true);
    expect(isRetryableError(new TimeoutError(1000), noJitterPolicy)).toBe(true);
  });

  it('can disable timeout retries by policy', () => {
    expect(isRetryableError(new TimeoutError(1000), { ...noJitterPolicy, retryTimeouts: false })).toBe(false);
  });

  it('does not retry auth, invalid request, content policy, or malformed responses', async () => {
    const errors = [
      new AuthError('openai'),
      new InvalidRequestError(400, 'invalid request'),
      new ContentPolicyError(400, 'refused'),
      new MalformedProviderResponseError('bad response'),
    ];

    for (const error of errors) {
      expect(isRetryableError(error, noJitterPolicy)).toBe(false);
    }

    let attempts = 0;
    await expect(withRetry(
      async () => {
        attempts += 1;
        throw new AuthError('openai');
      },
      noJitterPolicy,
      { sleep: async () => undefined },
    )).rejects.toBeInstanceOf(AuthError);
    expect(attempts).toBe(1);
  });

  it('uses deterministic exponential delays when jitter is disabled', () => {
    const error = new LLMError('server error', 500, 'provider', {
      category: 'transient_network',
      code: 'server_error',
      retryable: true,
    });

    expect(calculateRetryDelayMs(error, 1, noJitterPolicy)).toBe(100);
    expect(calculateRetryDelayMs(error, 2, noJitterPolicy)).toBe(200);
    expect(calculateRetryDelayMs(error, 7, noJitterPolicy)).toBe(5000);
  });

  it('applies deterministic jitter when random is injected', () => {
    const error = new ProviderOverloadError(503, 'busy');
    const delay = calculateRetryDelayMs(error, 1, {
      ...noJitterPolicy,
      jitter: 0.5,
      respectRetryAfter: false,
    }, () => 1);

    expect(delay).toBe(150);
  });

  it('stops after maxAttempts and reports retry metadata', async () => {
    const retryEvents: Array<{ attempt: number; delayMs: number; source?: string }> = [];
    const failures: Array<{ attempts: number; exhausted: boolean; source?: string }> = [];
    let attempts = 0;

    await expect(withRetry(
      async () => {
        attempts += 1;
        throw new ProviderOverloadError(503, 'busy');
      },
      { ...noJitterPolicy, maxAttempts: 2 },
      {
        sleep: async () => undefined,
        onRetry: ({ attempt, delayMs, source }) => {
          retryEvents.push({ attempt, delayMs, source });
        },
        onFailure: ({ attempts: failedAttempts, exhausted, source }) => {
          failures.push({ attempts: failedAttempts, exhausted, source });
        },
      },
    )).rejects.toBeInstanceOf(ProviderOverloadError);

    expect(attempts).toBe(2);
    expect(retryEvents).toEqual([{ attempt: 1, delayMs: 100, source: 'worker' }]);
    expect(failures).toEqual([{ attempts: 2, exhausted: true, source: 'worker' }]);
  });
});
