# Prompt 3 — Refactor AgentLoop into reusable QueryLoop with structured outcomes

Work in `/home/alba/atticus-harness-v2/`. Refactor the current monolithic `src/agent/index.ts` without changing user-visible behavior yet.

## Goal
Split the current AgentLoop into reusable pieces that can later power master orchestrators, mini-orchestrators, and workers.

## Implementation
1. Create `src/agent/query-loop.ts`:
   - handles messages, LLM chatWithTools, tool execution, max turns, tool output truncation, transcript saving.
   - emits events through the new state event bus when available.
   - accepts `QueryLoopConfig` with model, temperature, maxTokens, maxTurns, systemPrompt, tools, matter context, runId, taskId, role.
2. Create `src/agent/result-schema.ts`:
   - structured result type with status, summary, findings, risks, proposedTasks, artifactIds, nextActions.
   - parser that attempts JSON parse when the model returns JSON, with safe fallback.
3. Keep `AgentLoop.run()` as a compatibility wrapper around QueryLoop.
4. Remove brittle blocked phrase detection from new QueryLoop; preserve old wrapper behavior only where necessary for compatibility.
5. Add tests with a fake LLM client and fake tool registry.
6. Do not implement subagents yet. This prompt is a refactor/foundation step.

## Acceptance criteria
- Existing `harness run` behavior remains compatible.
- QueryLoop can be invoked independently in tests.
- Tool execution still works.
- Events are emitted when a runId/matter is provided.
- Build/lint/tests pass.
