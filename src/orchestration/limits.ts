export const DEFAULT_MAX_DEPTH = 3;
export const DEFAULT_MAX_CONCURRENCY = 4;

export function normalizePositiveInteger(value: number | undefined, fallback: number): number {
  if (!Number.isFinite(value)) return fallback;
  const normalized = Math.floor(value as number);
  return normalized > 0 ? normalized : fallback;
}

export function remainingDepth(value: number | undefined, fallback = DEFAULT_MAX_DEPTH): number {
  return Math.max(0, normalizePositiveInteger(value, fallback) - 1);
}
