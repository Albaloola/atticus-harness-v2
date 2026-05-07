# Bug Report 006 — Master Orchestrator Cannot Complete Full Pipeline: Processes Die, Tasks Block, Deliverables Never Finish

**Date:** 2026-05-07
**Reported by:** Atticus (after three failed orchestration runs on Anfal case)
**Harness version:** v0.1.0
**Branch/Tag:** main

---

## Summary

The Master Orchestrator consistently fails to complete the full 10-phase pipeline for any non-trivial case. Every run so far has produced partial output and then stalled or died. Across three attempts (two on `napier-accommodation-arrears` with 25 evidence items, one on `anfal-case-rerun` with 82 evidence items), the harness has never produced a complete set of deliverables. Processes die silently, tasks enter "blocked" state with no recovery path, and the orchestrator never transitions to "completed" status.

---

## Failure History

| Run | Evidence | Outcome |
|-----|----------|---------|
| 1. napier-accommodation-arrears (orchestrate) | 25 PDFs | 5 candidates produced but master never completed (status: "running" forever). 27/30 workers logged "completed but produced no structured output." Auto-accept-gated never triggered. |
| 2. napier-accommodation-arrears (orchestrate rerun) | 25 PDFs | Interrupted (duplicate run) |
| 3. anfal-case-rerun (orchestrate) | 82 files | 34/44 tasks completed then stalled. 7 blocked tasks. 0 deliverables. |
| 4. anfal-case-rerun (case manage) | 82 files | Produced 2 candidates (action plans) then stalled with 7 blocked tasks. Process died. |

---

## Bug 1 — ORCHESTRATOR NEVER COMPLETES (Critical)

### Description
After spawning all workers and completing their work, the master orchestrator process remains in "running" status indefinitely. It never transitions to "completed." The dashboard continues to show "ingesting" / "evidence-processing" phases even though all actual work is done.

This was confirmed by checking the SQLite task table directly:
```
sqlite3 matters/<name>/_state/matter.sqlite "SELECT COUNT(*), status FROM tasks GROUP BY status"
```
All tasks showed "completed" or "failed" but the master status remained "running."

### Root Cause (suspected)
The orchestrator's run loop does not have a proper termination condition. After all phase workers finish, the master does not check whether there is remaining work and does not close its own run. The `run()` method in `MasterOrchestrator` awaits spawned tasks but does not handle the case where all tasks complete successfully -- it appears to hang waiting for additional events.

### Evidence
```
Status: analyzing | Phase: needs-followup
Tasks: 34/44 completed, 0 in_progress, 0 failed, 7 blocked
No harness process running
```
The process is dead but the state file says "active agents: 3" and "in_progress: 3" even though no PID exists.

---

## Bug 2 — TASKS ENTER "BLOCKED" STATE WITH NO RECOVERY (Critical)

### Description
Tasks can enter "blocked" state (note: the state schema uses "blocked" not "blocked") but there is no mechanism to unblock them. Blocked tasks remain blocked forever. The orchestrator does not retry, skip, or fail blocked tasks.

In the anfal-case-rerun run, 7 of 44 tasks were "blocked" and the pipeline stalled completely. No new tasks were created. No progress was made. The orchestrator could not recover.

### Root Cause (suspected)
Tasks become blocked when they depend on a previous task that either failed or produced unexpected output. The dependency resolution in the orchestrator does not handle:
- Missing dependency outputs
- Dependency task failures
- Timeout of dependency tasks

Once a dependency chain breaks, all downstream tasks are permanently blocked.

---

## Bug 3 — AGENT COUNT IS STALE AFTER PROCESS DEATH (Medium)

### Description
After the harness process exits (crashes, is killed, or times out), the SQLite state continues to report "activeAgents" as a non-zero number and "in_progress" task count as non-zero. There is no heartbeat or liveness check. The state is never cleaned up.

This means `harness status` is untrustworthy -- it may show active work when nothing is actually happening. The operator cannot distinguish between "working" and "dead but state not updated."

### Root Cause
Active agent tracking is done in-memory only. When the process dies, there is no cleanup handler that marks agents as terminated. The SQLite state is only updated on graceful shutdown, which never happens when the process crashes or is killed.

---

## Bug 4 — CASE MANAGE TIMES OUT IN FOREGROUND (High)

### Description
`harness case manage` consistently times out when run in foreground mode. Even with a 180-second timeout, the command does not complete. The same command succeeds in `--background` mode.

### Root Cause (suspected)
The case manage command rebuilds the full case memory from SQLite (reading events, tasks, evidence metadata, artifact history) before making the LLM call. With 82 evidence items and hundreds of events, this rebuild is slow. Combined with the LLM call, it exceeds practical timeout limits.

In background mode, the rebuild and LLM call happen in a separate process without the foreground timeout constraint.

---

## Bug 5 — ORCHESTRATE WORKERS PRODUCE "NO STRUCTURED OUTPUT" (Medium)

### Description
In the first run, 27 of 30 workers logged "completed but produced no structured output." This means the workers completed their LLM turns but the output was not captured or stored in a usable format. The orchestration consumed LLM tokens and time but generated nothing actionable.

### Root Cause
The worker agent loop either:
- Produces output that is discarded if it doesn't match expected schema
- Or the tool call results are logged but not persisted to the candidate/artifact store
- Or the worker's context is too small to produce meaningful output after reading evidence

---

## Bug 6 — NO GRACEFUL SHUTDOWN / STATE CLEANUP (Medium)

### Description
When a harness process is killed (SIGTERM, SIGKILL, or crash), there is no signal handler that:
- Marks active tasks as failed
- Releases task leases
- Updates agent status to terminated
- Logs the reason for termination

This leaves the matter in an inconsistent state. Subsequent runs and status checks show stale data.

---

## Severity

**CRITICAL** — The harness cannot currently complete a full case analysis pipeline for any non-trivial matter. Every run so far has produced partial or incomplete output. This makes the harness unreliable for any real legal work.

---

## Recommendations

1. **Fix orchestrator termination** — After all phase workers complete, the master orchestrator must check completion conditions and transition to "completed" status. Add a maximum idle timeout after which the master auto-terminates.

2. **Fix blocked task recovery** — Add a mechanism to: (a) detect blocked tasks, (b) determine why they are blocked, (c) either retry the dependency, skip the task, or fail it with a clear reason. Blocked tasks should never be permanent.

3. **Add process heartbeat / liveness checks** — Agents should periodically update their status in SQLite. The monitor should detect stale agents (no heartbeat for N seconds) and auto-clean them.

4. **Fix state cleanup on shutdown** — Add signal handlers (SIGTERM, SIGINT, SIGUSR1) that gracefully mark in-progress tasks as failed and agent status as terminated. For crashes, add a startup recovery check that detects and cleans stale state.

5. **Speed up case manage** — Cache the case memory rebuild, or make it incremental. The rebuild should not require reading full event history every time.

6. **Capture worker output** — Ensure worker LLM calls that produce structured output are always persisted, even if the output schema doesn't match perfectly. Unstructured output is better than no output.

---

## Status

**Open**
