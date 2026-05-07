import { describe, expect, it } from 'vitest';
import {
  buildModelDelegationPrompt,
  selectModelForTask,
  selectModelRouteForTask,
} from '../../src/config/model-routing.js';
import { DEFAULTS } from '../../src/config/schema.js';
import { buildWorkerPrompt } from '../../src/orchestration/prompts.js';

describe('model routing policy', () => {
  it('builds a delegation prompt without cost or currency language', () => {
    const prompt = buildModelDelegationPrompt(DEFAULTS.providerPolicy);

    expect(prompt).toContain('Model routing is explicit and policy controlled.');
    expect(prompt).toContain(`Default provider: ${DEFAULTS.providerPolicy.defaultProvider}`);
    expect(prompt).toContain(DEFAULTS.providerPolicy.models.fast);
    expect(prompt).toContain(DEFAULTS.providerPolicy.models.reasoning);
    expect(prompt).not.toMatch(/\b(cost|price|pricing|currency|budget|cheap|expensive|usd|gbp|eur)\b/i);
    expect(prompt).not.toContain('$');
    expect(prompt).not.toContain('£');
    expect(prompt).not.toContain('€');
  });

  it('selects provider-policy models by task role and content', () => {
    expect(selectModelRouteForTask({ role: 'worker', title: 'Extract key facts from evidence' })).toBe('fast');
    expect(selectModelRouteForTask({ role: 'worker', title: 'Draft key documents' })).toBe('drafting');
    expect(selectModelRouteForTask({ role: 'reviewer', title: 'Run hostile review' })).toBe('reviewer');
    expect(selectModelRouteForTask({ role: 'verifier', title: 'Verify all citations' })).toBe('citation');
    expect(selectModelRouteForTask({ role: 'master_orchestrator', objective: 'Plan matter phases' })).toBe('reasoning');

    expect(selectModelForTask({
      providerPolicy: DEFAULTS.providerPolicy,
      role: 'reviewer',
      title: 'Run hostile review',
    })).toBe(DEFAULTS.providerPolicy.models.reviewer);
  });

  it('injects model delegation guidance into orchestration worker prompts', () => {
    const prompt = buildWorkerPrompt({
      matterName: 'test-matter',
      model: DEFAULTS.providerPolicy.models.fast,
      providerName: DEFAULTS.providerPolicy.defaultProvider,
      providerPolicy: DEFAULTS.providerPolicy,
    });

    expect(prompt).toContain('# Model Delegation');
    expect(prompt).toContain('do not silently substitute another model');
    expect(prompt).toContain(DEFAULTS.providerPolicy.models.citation);
    expect(prompt).not.toMatch(/\b(cost|price|pricing|currency|budget|cheap|expensive|usd|gbp|eur)\b/i);
  });
});
