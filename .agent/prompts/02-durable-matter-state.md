# Prompt 2 — Durable matter state, events, and status snapshots

Work in `/home/alba/atticus-harness-v2/`. Build the durable matter state layer needed for micro-orchestration. Keep backward compatibility with existing matter directories and commands.

## Goal
Add an event-sourced matter runtime store so Hermes/OpenClaw can inspect progress without interrupting active agents.

## Implementation

1. New `src/state/` modules:
   - `store.ts`: opens/initializes `matters/<matter>/_state/matter.sqlite` using better-sqlite3.
   - `schema.ts`: SQL migrations for tables: events, tasks, agent_runs, sources, citations, scheduler_jobs, runtime_kv. Preserve existing evidence/candidates/artifacts files; do not migrate all current storage yet.
   - `events.ts`: append event to SQLite and `_state/events.jsonl`.
   - `tasks.ts`: create/update/list task DAG nodes.
   - `runs.ts`: create/update/list agent run records.
   - `snapshot.ts`: derive `MatterRuntimeSnapshot` with status, current phase, active agents, task counts, latest findings/risks, candidates, costs, next actions.
   - `inbox.ts`: append/read operator/Hermes messages from `_state/inbox.jsonl` and events.
2. Ensure `initMatter` creates `_state/`, `events.jsonl`, `inbox.jsonl`, and initializes SQLite.
3. Modify existing `run`, `draft`, `verify`, `gate`, `review`, `accept`, `reject`, and `ingest` paths to append meaningful events.
4. Add CLI commands:
   - `harness status <matter> --json` uses snapshot
   - `harness events <matter> --tail <n> --follow --json`
   - `harness inbox <matter> send <message>`
   - `harness inbox <matter> list --json`
5. Add tests for migration, event append, snapshot derivation, and existing matter compatibility.

## Acceptance criteria
- Existing `_index.json` and `_config.json` still work.
- New state is created lazily for old matters.
- `status --json` is stable and machine-readable.
- `events --follow` can tail events without affecting a running process.
- Build/lint/tests pass.
