import { describe, expect, it } from 'vitest';
import { parseNumberOption, parseOptionalNumberOption } from '../../src/commands/number-options.js';

describe('CLI number option parsing', () => {
  it('uses defaults only when the option is absent', () => {
    expect(parseNumberOption(undefined, '--depth', { defaultValue: 1, integer: true, min: 0 })).toBe(1);
    expect(() => parseNumberOption('nope', '--depth', { defaultValue: 1, integer: true, min: 0 }))
      .toThrow('--depth must be a finite number');
  });

  it('enforces integer and range constraints', () => {
    expect(parseNumberOption('3', '--max-depth', { integer: true, min: 0 })).toBe(3);
    expect(() => parseNumberOption('2.5', '--max-depth', { integer: true, min: 0 }))
      .toThrow('--max-depth must be an integer');
    expect(() => parseNumberOption('-1', '--max-depth', { integer: true, min: 0 }))
      .toThrow('--max-depth must be at least 0');
  });

  it('validates optional numeric flags when present', () => {
    expect(parseOptionalNumberOption(undefined, '--budget', { min: 0 })).toBeUndefined();
    expect(parseOptionalNumberOption('0.75', '--coverage-threshold', { min: 0, max: 1 })).toBe(0.75);
    expect(() => parseOptionalNumberOption('1.5', '--coverage-threshold', { min: 0, max: 1 }))
      .toThrow('--coverage-threshold must be at most 1');
  });
});
