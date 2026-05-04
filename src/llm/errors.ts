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
  constructor(retryAfter?: number) {
    super(
      `Rate limited by OpenRouter${retryAfter ? `, retry after ${retryAfter}s` : ''}`,
      429,
    );
    this.name = 'RateLimitError';
  }
}

export class TokenLimitError extends LLMError {
  constructor(limit: number, actual: number) {
    super(`Token limit exceeded: ${actual} > ${limit}`, 413);
    this.name = 'TokenLimitError';
  }
}

export class AuthError extends LLMError {
  constructor() {
    super(
      'OpenRouter API key not configured. Set OPENROUTER_API_KEY environment variable.',
      401,
    );
    this.name = 'AuthError';
  }
}

export function classifyError(status: number, body: string): LLMError {
  if (status === 401 || status === 403) return new AuthError();
  if (status === 429) return new RateLimitError();
  if (
    status === 413 ||
    body.includes('context length') ||
    body.includes('too many tokens')
  ) {
    return new TokenLimitError(0, 0);
  }
  if (status >= 500)
    return new LLMError(`OpenRouter server error: ${body}`, status);
  return new LLMError(`OpenRouter error (${status}): ${body}`, status);
}
