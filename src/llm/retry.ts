import { LLMError } from './errors.js';

export type RetrySource = 'interactive' | 'daemon' | 'worker' | 'background';

export interface RetryPolicy {
  maxAttempts: number;
  baseDelayMs: number;
  maxDelayMs: number;
  jitter?: boolean | number;
  respectRetryAfter?: boolean;
  retryableStatuses?: ReadonlySet<number> | readonly number[];
  retryableErrorCodes?: ReadonlySet<string> | readonly string[];
  retryTimeouts?: boolean;
  source?: RetrySource;
}

export interface RetryAttempt {
  attempt: number;
  delayMs: number;
  error: LLMError;
  source?: RetrySource;
}

export interface RetryFailure {
  attempts: number;
  error: LLMError;
  source?: RetrySource;
  exhausted: boolean;
}

export interface WithRetryOptions {
  sleep?: (delayMs: number) => Promise<void>;
  random?: () => number;
  onRetry?: (attempt: RetryAttempt) => void | Promise<void>;
  onFailure?: (failure: RetryFailure) => void | Promise<void>;
}

const DEFAULT_RETRYABLE_STATUSES = new Set([408, 429, 500, 502, 503, 504, 529]);
const DEFAULT_RETRYABLE_CODES = new Set([
  'rate_limit',
  'provider_overload',
  'server_error',
  'timeout',
  'network_error',
  'transient_network',
  'econnreset',
  'enotfound',
  'econnrefused',
]);

export const defaultRetryPolicy: RetryPolicy = {
  maxAttempts: 3,
  baseDelayMs: 500,
  maxDelayMs: 8_000,
  jitter: true,
  respectRetryAfter: true,
  retryableStatuses: DEFAULT_RETRYABLE_STATUSES,
  retryableErrorCodes: DEFAULT_RETRYABLE_CODES,
  retryTimeouts: true,
  source: 'interactive',
};

export async function withRetry<T>(
  operation: (attempt: number) => Promise<T>,
  policy: RetryPolicy = defaultRetryPolicy,
  options: WithRetryOptions = {},
): Promise<T> {
  const resolved = resolvePolicy(policy);
  let lastError: unknown;

  for (let attempt = 1; attempt <= resolved.maxAttempts; attempt += 1) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;
      const retryable = error instanceof LLMError && isRetryableError(error, resolved);
      if (!(error instanceof LLMError) || attempt >= resolved.maxAttempts || !retryable) {
        if (error instanceof LLMError && retryable && attempt >= resolved.maxAttempts) {
          await options.onFailure?.({
            attempts: attempt,
            error,
            source: resolved.source,
            exhausted: true,
          });
        }
        throw error;
      }

      const delayMs = calculateRetryDelayMs(error, attempt, resolved, options.random);
      await options.onRetry?.({ attempt, delayMs, error, source: resolved.source });
      await (options.sleep ?? sleep)(delayMs);
    }
  }

  throw lastError;
}

export function isRetryableError(error: LLMError, policy: RetryPolicy = defaultRetryPolicy): boolean {
  if (isNeverRetryable(error)) return false;
  const resolved = resolvePolicy(policy);
  if (error.category === 'timeout' && !resolved.retryTimeouts) return false;
  if (error.retryable) return true;
  if (error.statusCode !== undefined && hasValue(resolved.retryableStatuses, error.statusCode)) return true;
  return Boolean(error.code && hasValue(resolved.retryableErrorCodes, error.code.toLowerCase()));
}

export function calculateRetryDelayMs(
  error: LLMError,
  failedAttempt: number,
  policy: RetryPolicy = defaultRetryPolicy,
  random: () => number = Math.random,
): number {
  const resolved = resolvePolicy(policy);
  const retryAfterMs = resolved.respectRetryAfter ? error.retryAfterMs : undefined;
  if (retryAfterMs !== undefined) {
    return Math.min(retryAfterMs, resolved.maxDelayMs);
  }

  const exponentialDelay = Math.min(
    resolved.maxDelayMs,
    resolved.baseDelayMs * 2 ** Math.max(0, failedAttempt - 1),
  );
  const jitter = resolved.jitter;
  if (!jitter) return exponentialDelay;

  const jitterRatio = typeof jitter === 'number' ? jitter : 0.2;
  const spread = exponentialDelay * Math.max(0, jitterRatio);
  const offset = (random() * 2 - 1) * spread;
  return Math.max(0, Math.round(exponentialDelay + offset));
}

function resolvePolicy(policy: RetryPolicy): Required<Omit<RetryPolicy, 'source'>> & { source?: RetrySource } {
  return {
    maxAttempts: policy.maxAttempts,
    baseDelayMs: policy.baseDelayMs,
    maxDelayMs: policy.maxDelayMs,
    jitter: policy.jitter ?? false,
    respectRetryAfter: policy.respectRetryAfter ?? true,
    retryableStatuses: policy.retryableStatuses ?? DEFAULT_RETRYABLE_STATUSES,
    retryableErrorCodes: policy.retryableErrorCodes ?? DEFAULT_RETRYABLE_CODES,
    retryTimeouts: policy.retryTimeouts ?? true,
    source: policy.source,
  };
}

function isNeverRetryable(error: LLMError): boolean {
  return error.category === 'auth' ||
    error.category === 'invalid_request' ||
    error.category === 'content_policy' ||
    error.category === 'malformed_response';
}

function hasValue<T>(values: ReadonlySet<T> | readonly T[], value: T): boolean {
  return values instanceof Set ? values.has(value) : (values as readonly T[]).includes(value);
}

function sleep(delayMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}
