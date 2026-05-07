import { describe, expect, it } from 'vitest';
import { normalizeCodexLoginOutput } from '../../src/config/codex-readiness.ts';

describe('Codex CLI readiness output', () => {
  it('keeps auth guidance without leaking helper-path warnings', () => {
    const output = normalizeCodexLoginOutput(
      '',
      'WARNING: proceeding, even though we could not update PATH: Refusing to create helper binaries under temporary dir "/tmp"\nNot logged in Run: codex login',
    );

    expect(output).toBe('Not logged in Run: codex login');
  });

  it('preserves normal readiness output', () => {
    const output = normalizeCodexLoginOutput('Logged in using ChatGPT\n', '');

    expect(output).toBe('Logged in using ChatGPT');
  });
});
