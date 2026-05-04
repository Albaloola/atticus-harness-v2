import type { CronField } from '../types/state.js';

function parseField(field: string, min: number, max: number): number[] {
  if (field === '*') {
    const values: number[] = [];
    for (let i = min; i <= max; i++) values.push(i);
    return values;
  }

  const stepMatch = field.match(/^\*\/(\d+)$/);
  if (stepMatch) {
    const step = parseInt(stepMatch[1], 10);
    if (step < 1) return [];
    const values: number[] = [];
    for (let i = min; i <= max; i += step) values.push(i);
    return values;
  }

  const rangeMatch = field.match(/^(\d+)-(\d+)$/);
  if (rangeMatch) {
    const start = parseInt(rangeMatch[1], 10);
    const end = parseInt(rangeMatch[2], 10);
    if (start < min || end > max || start > end) return [];
    const values: number[] = [];
    for (let i = start; i <= end; i++) values.push(i);
    return values;
  }

  if (field.includes(',')) {
    const parts = field.split(',');
    const values: number[] = [];
    for (const part of parts) {
      const num = parseInt(part, 10);
      if (num >= min && num <= max) values.push(num);
    }
    return [...new Set(values)].sort((a, b) => a - b);
  }

  const num = parseInt(field, 10);
  if (num >= min && num <= max) return [num];

  return [];
}

export function parseCronExpr(expr: string): CronField {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) {
    throw new Error(`Invalid cron expression "${expr}": expected 5 fields, got ${parts.length}`);
  }

  return {
    minute: parseField(parts[0], 0, 59),
    hour: parseField(parts[1], 0, 23),
    dayOfMonth: parseField(parts[2], 1, 31),
    month: parseField(parts[3], 1, 12),
    dayOfWeek: parseField(parts[4], 0, 7),
  };
}

export function cronMatchesNow(cron: string, date?: Date): boolean {
  const fields = parseCronExpr(cron);
  const d = date || new Date();

  if (!fields.minute.includes(d.getMinutes())) return false;
  if (!fields.hour.includes(d.getHours())) return false;
  if (!fields.dayOfMonth.includes(d.getDate())) return false;
  if (!fields.month.includes(d.getMonth() + 1)) return false;

  const dow = d.getDay();
  if (!fields.dayOfWeek.includes(dow) && !(dow === 0 && fields.dayOfWeek.includes(7))) {
    return false;
  }

  if (partsEqual(fields.dayOfMonth, allInRange(1, 31)) && !partsEqual(fields.dayOfWeek, allInRange(0, 7))) {
    return true;
  }

  if (!partsEqual(fields.dayOfWeek, allInRange(0, 7)) && !partsEqual(fields.dayOfMonth, allInRange(1, 31))) {
    return fields.dayOfMonth.includes(d.getDate()) || fields.dayOfWeek.includes(dow) || (dow === 0 && fields.dayOfWeek.includes(7));
  }

  return true;
}

export function nextRunTime(cron: string, from?: Date): Date {
  const fields = parseCronExpr(cron);
  const candidate = new Date(from || new Date());
  candidate.setSeconds(0, 0);
  candidate.setMinutes(candidate.getMinutes() + 1);

  const maxIterations = 525600;

  for (let i = 0; i < maxIterations; i++) {
    if (
      fields.month.includes(candidate.getMonth() + 1) &&
      fields.dayOfMonth.includes(candidate.getDate()) &&
      fields.hour.includes(candidate.getHours()) &&
      fields.minute.includes(candidate.getMinutes())
    ) {
      const dow = candidate.getDay();
      if (fields.dayOfWeek.includes(dow) || (dow === 0 && fields.dayOfWeek.includes(7))) {
        return candidate;
      }
    }

    candidate.setMinutes(candidate.getMinutes() + 1);
  }

  throw new Error(`Could not find next run time for cron "${cron}"`);
}

function allInRange(min: number, max: number): number[] {
  const values: number[] = [];
  for (let i = min; i <= max; i++) values.push(i);
  return values;
}

function partsEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
