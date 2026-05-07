export class LLMError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly provider?: string,
  ) {
    super(message);
    this.name = 'LLMError';
  }
}

export class RateLimitError extends LLMError {
  constructor(retryAfter?: number, provider = 'provider') {
    super(
      `Rate limited by ${provider}${retryAfter ? `, retry after ${retryAfter}s` : ''}`,
      429,
      provider,
    );
    this.name = 'RateLimitError';
  }
}

export class TokenLimitError extends LLMError {
  constructor(limit: number, actual: number, provider?: string) {
    super(`Token limit exceeded: ${actual} > ${limit}`, 413, provider);
    this.name = 'TokenLimitError';
  }
}

export class AuthError extends LLMError {
  constructor(provider = 'openrouter') {
    super(
      `API key not configured for ${provider}. Configure provider auth before running LLM calls.`,
      401,
      provider,
    );
    this.name = 'AuthError';
  }
}

export function classifyError(status: number, body: string, provider = 'provider'): LLMError {
  if (status === 401 || status === 403) return new AuthError(provider);
  if (status === 429) return new RateLimitError(undefined, provider);
  if (
    status === 413 ||
    body.includes('context length') ||
    body.includes('too many tokens')
  ) {
    return new TokenLimitError(0, 0, provider);
  }
  if (status >= 500)
    return new LLMError(`${provider} server error: ${body}`, status, provider);
  return new LLMError(`${provider} error (${status}): ${body}`, status, provider);
}
