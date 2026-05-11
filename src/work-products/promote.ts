import { READINESS_ORDER } from './contracts.js';
import type { UnknownWorkProduct, WorkProductReadiness } from './types.js';
import { validateWorkProductReadiness } from './validators.js';

export interface WorkProductPromotionError {
  code: string;
  message: string;
}

export interface WorkProductPromotionResult {
  ok: boolean;
  errors: WorkProductPromotionError[];
}

export function canPromoteWorkProduct(product: UnknownWorkProduct, target: WorkProductReadiness): WorkProductPromotionResult {
  const readinessIndex = READINESS_ORDER.indexOf(product.readiness);
  const targetIndex = READINESS_ORDER.indexOf(target);
  if (readinessIndex < 0 || targetIndex < 0) {
    return {
      ok: false,
      errors: [{ code: 'INVALID_READINESS', message: 'Unknown readiness level.' }],
    };
  }
  if (targetIndex < readinessIndex) {
    return {
      ok: false,
      errors: [{
        code: 'READINESS_REGRESSION',
        message: `Cannot demote readiness from ${product.readiness} to ${target}.`,
      }],
    };
  }

  const report = validateWorkProductReadiness(product, target);
  if (!report.valid) {
    return {
      ok: false,
      errors: report.errors.map((error) => ({
        code: error.code,
        message: `${error.path}: ${error.message}`,
      })),
    };
  }
  return {
    ok: true,
    errors: [],
  };
}

export function promoteWorkProduct(
  product: UnknownWorkProduct,
  targetReadiness: WorkProductReadiness,
): UnknownWorkProduct {
  const result = canPromoteWorkProduct(product, targetReadiness);
  if (!result.ok) {
    throw new Error(`Work product ${product.id} cannot be promoted: ${result.errors.map((error) => error.message).join('; ')}`);
  }
  return {
    ...product,
    readiness: targetReadiness,
    updatedAt: new Date().toISOString(),
  };
}
