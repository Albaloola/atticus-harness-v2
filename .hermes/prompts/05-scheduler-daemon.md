# Prompt 5 — Scheduler and daemon/background control

Work in `/home/alba/atticus-harness-v2/`. Add background runtime and scheduling so the harness can continue working while Hermes/OpenClaw checks status separately.

## Goal
Create a local daemon/background mode, durable scheduled jobs, and non-interrupting control.

## Implementation
1. New `src/daemon/`: daemon.ts (long-running process), ipc.ts (file-based command queue), supervisor.ts (track active runs).
2. New `src/scheduler/`: cron.ts (5-field parser), store.ts (scheduler_jobs table), loop.ts (check due jobs every minute).
3. CLI: `harness daemon start|stop|status`, `harness run --background`, `harness watch`, `harness pause/resume/cancel`, `harness schedule create|list|delete`.
4. Tests for cron parser, due job detection, daemon status, background enqueue.
5. IMPORTANT: Use `import Database = require("better-sqlite3")` for SQLite imports, ESM imports for everything else.
