# Bug Report 010 - Master Supervisor Stuck in Preflight Needs-Followup Loop with Non-JSON Output

**Reported by:** Atticus (Omar via Telegram)
**Date:** 2026-05-09
**Severity:** high
**Status:** Open

## Summary

The master supervisor (orchestrator agent) is stuck in an infinite retry loop. It starts, immediately hits the `preflight` checkpoint with `needs_followup`, transitions to the `final` checkpoint which also hits `needs_followup`, then restarts the cycle. The core problem is the master supervisor returns non-JSON output at the preflight checkpoint, which the harness interprets as a failure and schedules a retry, but the retry produces the identical result.

No phases execute (0/10), no mini-orchestrators are spawned, and no observer events exist in the log.

## Context

- **Matter:** anfal-napier-codex55-fixed
- **Command:** `harness orchestrate anfal-napier-codex55-fixed --objective "..." --max-depth 3 --concurrency 10 --background`
- **Provider:** openrouter-custom (deepseek/deepseek-v4-flash + deepseek/deepseek-v4-pro)
- **Previous provider:** codex-sdk (gpt-5.5) — matter was originally launched via Codex CLI with MCP
- **Run IDs (current loop):** 9c7d82a6, b42bd192, a4ce7afa, f1aa76e8
- **Previous state:** 83 tasks (64 completed, 7 failed, 12 blocked) from codex-sdk run

## Architecture Components Status

| Component | Status | Details |
|-----------|--------|---------|
| Master Supervisor (Orchestrator) | STUCK | Infinite preflight -> needs_followup -> final -> needs_followup -> restart loop |
| Mini-Orchestrators | NOT SPAWNED | Last spawned at 18:54 UTC during previous run; none in current deepseek cycle |
| Observer | ABSENT | Zero observer events in entire matter history |
| Workers | NOT SPAWNED | Master never clears preflight to delegate |

## Steps To Reproduce

1. Run a matter with codex-sdk (gpt-5.5) provider, producing some completed/blocked/failed tasks
2. Switch provider to openrouter-custom (deepseek) 
3. Run `harness orchestrate <matter> --objective "..." --concurrency 10 --background`
4. Master supervisor starts, hits preflight, returns non-JSON output
5. Harness schedules `retry_phase`, master restarts from preflight
6. Same result — infinite loop

## Event Log Evidence

```
18:58:01  master_supervisor  checkpoint=preflight  status=
18:58:02  master_supervisor  checkpoint=preflight  status=needs_followup
18:58:02  master_supervisor  checkpoint=final      status=
18:59:50  master_supervisor  checkpoint=final      status=needs_followup
18:59:50  run.partial  "0/10 phases completed. Master supervisor returned non-JSON output: ."
19:00:01  master_supervisor  checkpoint=preflight  status=needs_followup  [RESTART LOOP]
19:00:01  master_supervisor  checkpoint=final      status=
19:01:33  master_supervisor  checkpoint=final      status=needs_followup
19:01:33  run.partial  "Master supervisor returned non-JSON output: ."
```

Exact blocked event data:
```json
{"role":"master_supervisor","checkpoint":"final","status":"needs_followup",
 "recommendedRunAction":"retry_phase","patched":false,"requiresRestart":false,"issueCount":1}
```

Run partial summary:
```json
{"summary":"Orchestration needs_followup: 0/10 phases completed, 0 blocked. 0 findings, 2 risks. Court-ready: failed. Master supervision stopped because master supervisor recommended retry_phase: Master supervisor returned non-JSON output: . Master supervision flagged 2 checkpoint(s).",
 "totalCost":0,"status":"needs_followup","completedPhases":0,"totalPhases":10}
```

## Suspected Root Causes

1. **Provider transition left stale state.** The matter has 64 completed + 12 blocked + 7 failed tasks from the codex-sdk (gpt-5.5) run. When openrouter-custom (deepseek) runs the master supervisor, the preflight check sees this state but cannot parse or reconcile it, producing non-JSON output.

2. **Empty non-JSON output.** The message `Master supervisor returned non-JSON output: .` — note the trailing `.` with nothing before it. The master supervisor may be returning an empty string or whitespace instead of a JSON status, possibly because the deepseek model doesn't understand the preflight prompt format.

3. **Checkpoint conflict.** The master starts at `checkpoint=final` but immediately transitions to `checkpoint=preflight` which hits needs_followup. This suggests the orchestration framework tries to skip to final (because tasks exist from the previous run) but then runs preflight which fails.

## Attempted Fixes

- Provider switched from codex-sdk → openrouter-custom
- Concurrency increased from 2 → 10
- Matter cancelled and re-launched
- Orchestration uses standard start (not --resume flag, though --resume exists as an option)

## Suggested Fix (Codex)

1. **Check the master supervisor prompt template** at preflight. The deepseek model may be producing non-structured output because the prompt expects a different response format than what deepseek generates.

2. **Add a fallback parser** for master supervisor output — if non-JSON, attempt to extract structured data from free-text.

3. **Reset task state before re-orchestrating after a provider change.** Clear blocked/failed tasks from the previous provider's run so the new master supervisor starts with clean state.

4. **Try `--resume` flag** instead of standard orchestration — the `harness orchestrate --help` shows a `--resume` option that "Resumes from the latest completed/blocked orchestration checkpoint or ledger." This was not tried.

5. **Try a fresh matter** — create a new matter, re-ingest evidence, and orchestrate fresh with deepseek, avoiding the stale task state from the codex-sdk run.

## References

- Related to Bug Report 009 (orchestration stops at 3/10 with operator_handoff) — same needs_followup pattern, different checkpoint
- Known pattern P17 in legal-case-workflow skill
