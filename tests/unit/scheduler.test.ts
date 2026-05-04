import { describe, it, expect } from 'vitest';
import { parseCronExpr, cronMatchesNow, nextRunTime } from '../../src/scheduler/cron.js';

describe('parseCronExpr', () => {
  it('parses wildcard asterisk', () => {
    const result = parseCronExpr('* * * * *');
    expect(result.minute).toEqual(range(0, 59));
    expect(result.hour).toEqual(range(0, 23));
    expect(result.dayOfMonth).toEqual(range(1, 31));
    expect(result.month).toEqual(range(1, 12));
    expect(result.dayOfWeek).toEqual(range(0, 7));
  });

  it('parses step notation */N', () => {
    const result = parseCronExpr('*/5 */2 */3 */4 */6');
    expect(result.minute).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
    expect(result.hour).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]);
    expect(result.dayOfMonth).toEqual([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31]);
    expect(result.month).toEqual([1, 5, 9]);
    expect(result.dayOfWeek).toEqual([0, 6]);
  });

  it('parses range notation N-M', () => {
    const result = parseCronExpr('10-20 8-17 1-5 6-9 1-5');
    expect(result.minute).toEqual(range(10, 20));
    expect(result.hour).toEqual(range(8, 17));
    expect(result.dayOfMonth).toEqual([1, 2, 3, 4, 5]);
    expect(result.month).toEqual([6, 7, 8, 9]);
    expect(result.dayOfWeek).toEqual([1, 2, 3, 4, 5]);
  });

  it('parses list notation N,M,N', () => {
    const result = parseCronExpr('0,15,30,45 0,6,12,18 1,15 1,6,12 0,3,6');
    expect(result.minute).toEqual([0, 15, 30, 45]);
    expect(result.hour).toEqual([0, 6, 12, 18]);
    expect(result.dayOfMonth).toEqual([1, 15]);
    expect(result.month).toEqual([1, 6, 12]);
    expect(result.dayOfWeek).toEqual([0, 3, 6]);
  });

  it('parses specific numbers', () => {
    const result = parseCronExpr('30 14 15 5 3');
    expect(result.minute).toEqual([30]);
    expect(result.hour).toEqual([14]);
    expect(result.dayOfMonth).toEqual([15]);
    expect(result.month).toEqual([5]);
    expect(result.dayOfWeek).toEqual([3]);
  });

  it('handles mixed syntax in a single expression', () => {
    const result = parseCronExpr('*/10 0,12 1-5 * 1-5');
    expect(result.minute).toEqual([0, 10, 20, 30, 40, 50]);
    expect(result.hour).toEqual([0, 12]);
    expect(result.dayOfMonth).toEqual([1, 2, 3, 4, 5]);
    expect(result.month).toEqual(range(1, 12));
    expect(result.dayOfWeek).toEqual([1, 2, 3, 4, 5]);
  });

  it('rejects expressions without exactly 5 fields', () => {
    expect(() => parseCronExpr('* * * *')).toThrow('expected 5 fields');
    expect(() => parseCronExpr('* * * * * *')).toThrow('expected 5 fields');
    expect(() => parseCronExpr('')).toThrow('expected 5 fields');
  });

  it('handles extra whitespace', () => {
    const result = parseCronExpr('  0   12   *   *   1  ');
    expect(result.minute).toEqual([0]);
    expect(result.hour).toEqual([12]);
    expect(result.dayOfWeek).toEqual([1]);
  });

  it('supports sunday as both 0 and 7', () => {
    const result = parseCronExpr('0 0 * * 7');
    expect(result.dayOfWeek).toEqual([7]);
  });
});

describe('cronMatchesNow', () => {
  it('matches a fully wildcard cron', () => {
    expect(cronMatchesNow('* * * * *')).toBe(true);
  });

  it('matches when date matches exactly', () => {
    const date = new Date('2025-06-15T14:30:00');
    expect(cronMatchesNow('30 14 15 6 *', date)).toBe(true);
  });

  it('does not match when minute differs', () => {
    const date = new Date('2025-06-15T14:31:00');
    expect(cronMatchesNow('30 14 15 6 *', date)).toBe(false);
  });

  it('does not match when hour differs', () => {
    const date = new Date('2025-06-15T15:30:00');
    expect(cronMatchesNow('30 14 15 6 *', date)).toBe(false);
  });

  it('does not match when day of month differs', () => {
    const date = new Date('2025-06-16T14:30:00');
    expect(cronMatchesNow('30 14 15 6 *', date)).toBe(false);
  });

  it('does not match when month differs', () => {
    const date = new Date('2025-07-15T14:30:00');
    expect(cronMatchesNow('30 14 15 6 *', date)).toBe(false);
  });

  it('matches step notation', () => {
    const date = new Date('2025-06-15T14:20:00');
    expect(cronMatchesNow('*/10 * * * *', date)).toBe(true);

    const date2 = new Date('2025-06-15T14:23:00');
    expect(cronMatchesNow('*/10 * * * *', date2)).toBe(false);
  });

  it('matches list notation', () => {
    const date = new Date('2025-06-15T14:15:00');
    expect(cronMatchesNow('0,15,30,45 * * * *', date)).toBe(true);

    const date2 = new Date('2025-06-15T14:10:00');
    expect(cronMatchesNow('0,15,30,45 * * * *', date2)).toBe(false);
  });

  it('matches range notation', () => {
    const date = new Date('2025-06-15T14:15:00');
    expect(cronMatchesNow('10-20 * * * *', date)).toBe(true);

    const date2 = new Date('2025-06-15T14:25:00');
    expect(cronMatchesNow('10-20 * * * *', date2)).toBe(false);
  });

  it('handles day-of-week matching', () => {
    const sunday = new Date('2025-06-15T10:00:00');
    expect(cronMatchesNow('0 10 * * 0', sunday)).toBe(true);
    expect(cronMatchesNow('0 10 * * 7', sunday)).toBe(true);

    const monday = new Date('2025-06-16T10:00:00');
    expect(cronMatchesNow('0 10 * * 0', monday)).toBe(false);
  });
});

describe('nextRunTime', () => {
  it('returns next matching minute for simple cron', () => {
    const from = new Date('2025-06-15T14:00:00');
    const next = nextRunTime('30 * * * *', from);
    expect(next.getMinutes()).toBe(30);
    expect(next.getHours()).toBe(14);
  });

  it('returns next matching hour when minute has passed', () => {
    const from = new Date('2025-06-15T14:45:00');
    const next = nextRunTime('30 * * * *', from);
    expect(next.getMinutes()).toBe(30);
    expect(next.getHours()).toBe(15);
  });

  it('advances to next day when needed', () => {
    const from = new Date('2025-01-01T23:00:00');
    const next = nextRunTime('0 2 * * *', from);
    expect(next.getMinutes()).toBe(0);
    expect(next.getHours()).toBe(2);
    expect(next.getDate()).toBe(2);
  });

  it('returns a date in the future', () => {
    const now = new Date();
    const next = nextRunTime('* * * * *');
    expect(next.getTime()).toBeGreaterThan(now.getTime());
  });

  it('handles specific day-of-month', () => {
    const from = new Date('2025-01-01T00:00:00');
    const next = nextRunTime('0 0 15 * *', from);
    expect(next.getDate()).toBe(15);
    expect(next.getMonth()).toBe(0);
  });

  it('returns valid future date by default when no from argument', () => {
    const next = nextRunTime('* * * * *');
    expect(next.getTime()).toBeGreaterThan(Date.now() - 1000);
  });

  it('rejects invalid cron with empty fields', () => {
    expect(() => nextRunTime('63 0 1 1 1', new Date('2025-01-01T00:00:00'))).toThrow('Could not find next run time');
  });
});

function range(start: number, end: number): number[] {
  const values: number[] = [];
  for (let i = start; i <= end; i++) values.push(i);
  return values;
}
