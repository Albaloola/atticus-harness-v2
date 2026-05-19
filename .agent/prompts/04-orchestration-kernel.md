# Prompt 4 — Orchestration kernel: master, mini-orchestrators, workers

Work in `/home/alba/atticus-harness-v2/`. Implement the first real micro-orchestration layer.

## Goal
Add a master orchestrator that decomposes a legal matter into tasks, spawns mini-orchestrators/workers, records progress, and synthesizes results. CLI remains simple; no TUI.

## Implementation
1. New `src/orchestration/` modules:
   - `types.ts`: Master/Mini/Worker role types, `AgentSpawnInput`, `AgentStructuredResult`, `OrchestrationRunConfig`.
   - `prompts.ts`: master, mini-orchestrator, worker, reviewer, verifier prompts for legal casework. Prompts must emphasize evidence-backed findings, source IDs, and prepare-only external action.
   - `task-graph.ts`: helpers to create child tasks, list runnable tasks, mark complete/failed/blocked.
   - `worker.ts`: runs QueryLoop for a bounded task with selected tools.
   - `mini-orchestrator.ts`: decomposes a phase/issue into workers and synthesizes.
   - `master-orchestrator.ts`: creates/updates the matter plan, spawns mini-orchestrators, synthesizes final output.
   - `runtime.ts`: manages cancellation, concurrency limit, depth limit, run budget, and event emission.
2. Add an `AgentSpawnTool` or `DelegateTaskTool` to the tool registry, controlled by max depth and tool policy.
3. Add CLI: `harness orchestrate <matter> --objective <text> --background? --json? --max-depth? --concurrency?`
4. Add unit tests using fake LLM responses.
5. IMPORTANT: Use `import Database = require("better-sqlite3")` syntax for better-sqlite3 imports.
