# Bug Report 005 — No Way to Set Reasoning Effort / Thinking Budget for Model Calls

**Date:** 2026-05-07
**Reported by:** Atticus (while running Anfal case on DeepSeek V4 Pro)
**Harness version:** v0.1.0
**Branch/Tag:** main

---

## Summary

The harness has no mechanism to set reasoning effort (or thinking budget) when calling LLMs. The `LLMConfig` interface and `buildPayload()` in the LLM client only handle `reasoning.effort = 'none'` when thinking is disabled. There is no way to set it to `'low'`, `'medium'`, `'high'`, or `'xhigh'` for models that support configurable reasoning depth (DeepSeek V4 Pro, OpenAI o-series, etc.).

This means the harness always uses the model's default reasoning effort, which may be too shallow for complex legal analysis.

---

## Bug Detail

### The Problem

When configured with `deepseek/deepseek-v4-pro` on OpenRouter (or any model that supports configurable reasoning effort), the harness sends:

```json
{
  "model": "deepseek/deepseek-v4-pro",
  "messages": [...],
  "temperature": 0.1,
  "max_tokens": 4096
}
```

The only time `reasoning` appears in the payload is when thinking is disabled:

```typescript
// src/llm/client.ts line 291-294
if (request.config.disableThinking) {
  payload.thinking = { type: 'disabled' };
  payload.reasoning = { effort: 'none', exclude: true };
}
```

There is no corresponding code to set `reasoning.effort` to `'high'` or `'xhigh'` when the operator wants deeper reasoning.

### Root Cause

The `LLMConfig` interface in `src/types/llm.ts` does not include a `reasoningEffort` field:

```typescript
export interface LLMConfig {
  model: string;
  maxTokens?: number;
  temperature?: number;
  // no reasoningEffort field
}
```

And `buildPayload()` in `src/llm/client.ts` never adds `reasoning.effort` to the outgoing payload except in the disabled case.

### Impact

- Complex legal analysis (multi-factor weighing, statutory interpretation, procedural strategy) runs at the model's default reasoning depth
- For DeepSeek V4 Pro, this means it may not fully reason through Equality Act arguments, disproportionate enforcement analysis, or charity fiduciary duty considerations
- The operator cannot tell the harness "I want extra reasoning effort on this case" without a code change
- Models like OpenAI o1/o3/o4, DeepSeek V4 Pro, and Claude Opus with thinking budgets all support configurable reasoning depth, but the harness ignores this

### Affected Files

- `src/types/llm.ts` — `LLMConfig` interface missing `reasoningEffort` field
- `src/llm/client.ts` — `buildPayload()` only handles reasoning effort for the disabled case (line 291-294)
- `src/llm/anthropic.ts` — may also need thinking budget support

### Suggested Fix

1. Add `reasoningEffort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh'` to `LLMConfig` in `src/types/llm.ts`

2. Update `buildPayload()` in `src/llm/client.ts` to pass reasoning effort when set:

   ```typescript
   // After the disableThinking block, add:
   if (request.config.reasoningEffort && request.config.reasoningEffort !== 'medium') {
     if (request.config.reasoningEffort === 'none') {
       payload.reasoning = { effort: 'none', exclude: true };
     } else {
       payload.reasoning = { effort: request.config.reasoningEffort };
     }
   }
   ```

3. For Anthropic models (`src/llm/anthropic.ts`), map reasoning effort to `thinking.budget_tokens` — e.g. 'low' = 2048, 'medium' = 8192, 'high' = 16384, 'xhigh' = 32768.

4. Expose as a matter config field or harness CLI flag so the operator can set it per-case or per-run.

### Workaround

- Manually set `temperature` very low (0.05) and `maxTokens` high (8192+) in matter config to encourage deeper reasoning, though this is not a substitute for actual reasoning effort control
- Use a model that has higher default reasoning (e.g. switch from flash to pro variants)

---

## Severity

**MEDIUM** — The harness works fine for standard analysis, but for high-stakes legal case work where the operator specifically wants maximum reasoning depth (xhigh), there is no way to configure it without modifying source code.

---

## Status

**Open**
