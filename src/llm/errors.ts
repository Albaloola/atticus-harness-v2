export type LLMErrorCategory =
  | 'auth'
  | 'rate_limit'
  | 'provider_overload'
  | 'transient_network'
  | 'timeout'
  | 'invalid_request'
  | 'context_length'
  | 'content_policy'
  | 'malformed_response'
  | 'unknown';

export interface LLMErrorOptions {
  category?: LLMErrorCategory;
  code?: string;
  retryAfterMs?: number;
  retryable?: boolean;
}

export interface ClassifyErrorOptions {
  headers?: Headers | Record<string, string | undefined>;
  code?: string | number;
}

export class LLMError extends Error {
  public readonly category: LLMErrorCategory;
  public readonly code?: string;
  public readonly retryAfterMs?: number;
  public readonly retryable: boolean;

  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly provider?: string,
    options: LLMErrorOptions = {},
  ) {
    super(message);
    this.name = 'LLMError';
    this.category = options.category ?? 'unknown';
    this.code = options.code;
    this.retryAfterMs = options.retryAfterMs;
    this.retryable = options.retryable ?? false;
  }
}

export class RateLimitError extends LLMError {
  constructor(retryAfter?: number, provider = 'provider') {
    super(
      `Rate limited by ${provider}${retryAfter ? `, retry after ${retryAfter}s` : ''}`,
      429,
      provider,
      {
        category: 'rate_limit',
        code: 'rate_limit',
        retryAfterMs: retryAfter ? retryAfter * 1000 : undefined,
        retryable: true,
      },
    );
    this.name = 'RateLimitError';
  }
}

export class TokenLimitError extends LLMError {
  constructor(limit: number, actual: number, provider?: string) {
    super(`Token limit exceeded: ${actual} > ${limit}`, 413, provider, {
      category: 'context_length',
      code: 'context_length',
      retryable: false,
    });
    this.name = 'TokenLimitError';
  }
}

export class AuthError extends LLMError {
  constructor(provider = 'openrouter') {
    super(
      `API key not configured for ${provider}. Configure provider auth before running LLM calls.`,
      401,
      provider,
      { category: 'auth', code: 'auth', retryable: false },
    );
    this.name = 'AuthError';
  }
}

export class ProviderOverloadError extends LLMError {
  constructor(status = 529, body = 'provider overloaded', provider = 'provider') {
    super(`${provider} overloaded (${status}): ${body}`, status, provider, {
      category: 'provider_overload',
      code: 'provider_overload',
      retryable: true,
    });
    this.name = 'ProviderOverloadError';
  }
}

export class TransientNetworkError extends LLMError {
  constructor(message: string, provider = 'provider', code = 'network_error') {
    super(message, 0, provider, {
      category: 'transient_network',
      code,
      retryable: true,
    });
    this.name = 'TransientNetworkError';
  }
}

export class TimeoutError extends LLMError {
  constructor(timeoutMs: number, provider = 'provider') {
    super(`Request timed out after ${timeoutMs}ms`, 408, provider, {
      category: 'timeout',
      code: 'timeout',
      retryable: true,
    });
    this.name = 'TimeoutError';
  }
}

export class InvalidRequestError extends LLMError {
  constructor(status: number, body: string, provider = 'provider') {
    super(`${provider} invalid request (${status}): ${body}`, status, provider, {
      category: 'invalid_request',
      code: 'invalid_request',
      retryable: false,
    });
    this.name = 'InvalidRequestError';
  }
}

export class ContentPolicyError extends LLMError {
  constructor(status: number, body: string, provider = 'provider') {
    super(`${provider} content policy refusal (${status}): ${body}`, status, provider, {
      category: 'content_policy',
      code: 'content_policy',
      retryable: false,
    });
    this.name = 'ContentPolicyError';
  }
}

export class MalformedProviderResponseError extends LLMError {
  constructor(message: string, provider = 'provider') {
    super(message, 0, provider, {
      category: 'malformed_response',
      code: 'malformed_response',
      retryable: false,
    });
    this.name = 'MalformedProviderResponseError';
  }
}

export function classifyError(
  status: number,
  body: string,
  provider = 'provider',
  options: ClassifyErrorOptions = {},
): LLMError {
  const code = normalizeErrorCode(options.code ?? extractErrorCode(body));
  const lowerBody = body.toLowerCase();
  const retryAfterSeconds = parseRetryAfterSeconds(options.headers);

  if (status === 401 || status === 403) return new AuthError(provider);
  if (status === 429) return new RateLimitError(retryAfterSeconds, provider);
  if (isContentPolicyFailure(status, lowerBody, code)) {
    return new ContentPolicyError(status, body, provider);
  }
  if (
    status === 413 ||
    lowerBody.includes('context length') ||
    lowerBody.includes('context_length') ||
    lowerBody.includes('maximum context') ||
    lowerBody.includes('too many tokens')
  ) {
    return new TokenLimitError(0, 0, provider);
  }
  if (isInvalidRequest(status, lowerBody, code)) {
    return new InvalidRequestError(status, body, provider);
  }
  if (isProviderOverload(status, lowerBody, code)) {
    return new ProviderOverloadError(status, body, provider);
  }
  if (status === 408 || status === 504 || code === 'timeout') {
    return new TimeoutError(0, provider);
  }
  if (status >= 500) {
    return new LLMError(`${provider} server error: ${body}`, status, provider, {
      category: 'transient_network',
      code: code ?? 'server_error',
      retryable: true,
    });
  }
  return new LLMError(`${provider} error (${status}): ${body}`, status, provider, {
    category: 'unknown',
    code,
    retryable: false,
  });
}

export function classifyThrownError(error: unknown, provider = 'provider', timeoutMs?: number): LLMError {
  if (error instanceof LLMError) return error;
  const err = error as Error;
  const message = err?.message ?? String(error);
  if (err?.name === 'AbortError' || /abort|aborted|timeout|timed out/i.test(message)) {
    return new TimeoutError(timeoutMs ?? 0, provider);
  }
  if (
    error instanceof TypeError ||
    /fetch failed|network|econnreset|enotfound|econnrefused|socket|temporarily unavailable/i.test(message)
  ) {
    return new TransientNetworkError(`Network error: ${message}`, provider);
  }
  return new LLMError(`Unexpected error: ${message}`, 0, provider, {
    category: 'unknown',
    retryable: false,
  });
}

function parseRetryAfterSeconds(headers?: Headers | Record<string, string | undefined>): number | undefined {
  if (!headers) return undefined;
  const value = isHeaders(headers)
    ? headers.get('retry-after')
    : headers['retry-after'] ?? headers['Retry-After'];
  if (!value) return undefined;

  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds;

  const retryAt = Date.parse(value);
  if (Number.isNaN(retryAt)) return undefined;
  return Math.max(0, Math.ceil((retryAt - Date.now()) / 1000));
}

function isHeaders(headers: Headers | Record<string, string | undefined>): headers is Headers {
  return typeof (headers as Headers).get === 'function';
}

function normalizeErrorCode(code: string | number | undefined): string | undefined {
  return code === undefined ? undefined : String(code).toLowerCase();
}

function extractErrorCode(body: string): string | undefined {
  try {
    const parsed = JSON.parse(body) as { error?: { code?: string | number; type?: string }; code?: string | number };
    return normalizeErrorCode(parsed.error?.code ?? parsed.error?.type ?? parsed.code);
  } catch {
    return undefined;
  }
}

function isInvalidRequest(status: number, body: string, code?: string): boolean {
  return status === 400 ||
    status === 422 ||
    code === 'invalid_request' ||
    code === 'invalid_request_error' ||
    body.includes('invalid request');
}

function isContentPolicyFailure(status: number, body: string, code?: string): boolean {
  return status === 451 ||
    code === 'content_policy' ||
    code === 'content_policy_violation' ||
    code === 'safety' ||
    body.includes('content policy') ||
    body.includes('safety policy') ||
    body.includes('policy violation') ||
    body.includes('refused');
}

function isProviderOverload(status: number, body: string, code?: string): boolean {
  return status === 529 ||
    status === 503 ||
    code === 'overloaded' ||
    code === 'provider_overloaded' ||
    body.includes('overload') ||
    body.includes('temporarily unavailable') ||
    body.includes('capacity');
}
