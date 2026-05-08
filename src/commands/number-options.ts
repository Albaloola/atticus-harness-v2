export interface NumberOptionRules {
  defaultValue?: number;
  integer?: boolean;
  min?: number;
  max?: number;
}

export function parseNumberOption(
  value: string | undefined,
  name: string,
  rules: NumberOptionRules = {},
): number {
  if (value === undefined || value === '') {
    if (rules.defaultValue !== undefined) return rules.defaultValue;
    throw new Error(`${name} is required`);
  }

  const parsed = Number(value);
  assertNumberOption(parsed, name, rules);
  return parsed;
}

export function parseOptionalNumberOption(
  value: string | undefined,
  name: string,
  rules: Omit<NumberOptionRules, 'defaultValue'> = {},
): number | undefined {
  if (value === undefined || value === '') return undefined;

  const parsed = Number(value);
  assertNumberOption(parsed, name, rules);
  return parsed;
}

function assertNumberOption(value: number, name: string, rules: NumberOptionRules): void {
  if (!Number.isFinite(value)) {
    throw new Error(`${name} must be a finite number`);
  }
  if (rules.integer && !Number.isInteger(value)) {
    throw new Error(`${name} must be an integer`);
  }
  if (rules.min !== undefined && value < rules.min) {
    throw new Error(`${name} must be at least ${rules.min}`);
  }
  if (rules.max !== undefined && value > rules.max) {
    throw new Error(`${name} must be at most ${rules.max}`);
  }
}
