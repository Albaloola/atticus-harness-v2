# Bug Report 011 - Orchestration Resets to Preflight/Analysis After Provider Switch, Ignoring Previous Run Progress

**Reported by:** Atticus (Omar via Telegram)
**Date:** 2026-05-09
**Severity:** high
**Status:** Open

## Summary

When switching providers mid-case (e.g. from codex-sdk/gpt-5.5 to openrouter-custom/deepseek), cancelling the old orchestration and launching a new one resets the master supervisor's checkpoint back to `preflight`, ignoring all completed phases from the previous run. The new orchestration starts from scratch in the `analysis` phase even though the matter had already progressed past analysis into the research stage with working mini-orchestrators.

The `--resume` flag partially addresses this (it gets past the preflight needs_followup loop) but still starts fresh at `analysis` rather than continuing from the phase the previous run was actually working on.

## Context

- **Matter:** anfal-napier-codex55-fixed
- **Original provider:** codex-sdk (gpt-5.5) via Codex CLI MCP
- **New provider:** openrouter-custom (deepseek/deepseek-v4-flash + pro)
- **Command attempted:** `harness orchestrate <matter> --resume --concurrency 10 --max-depth 3`

## Evidence

### Previous Run Progress (Codex Era, 18:00-18:54 UTC)

```
18:37:20  master_supervisor checkpoint=during_phase   ← working mid-phase
18:40:20  master_supervisor checkpoint=after_phase     ← completed a phase
18:41:44  mini_orchestrator SPAWNED                    ← delegating to sub-orchestrators
18:43:14  master_supervisor checkpoint=during_phase
18:46:15  master_supervisor checkpoint=during_phase
18:50:55  master_supervisor checkpoint=during_phase
18:52:49  master_supervisor checkpoint=after_phase
18:54:44  mini_orchestrator SPAWNED
```

- **32 master_supervisor runs completed** across during_phase/after_phase checkpoints
- **12 mini_orchestrator runs completed** — sub-orchestrators were working
- The matter had progressed past preflight, past analysis, into deeper phases with active mini-orchestrator delegation

### After Provider Switch to Deepseek

```
18:57:03  master_supervisor checkpoint=preflight       ← back to square one
18:58:01  master_supervisor checkpoint=preflight
18:58:02  master_supervisor checkpoint=final
18:59:50  RUN "0/10 phases completed"
19:00:01  master_supervisor checkpoint=preflight       ← retry loop
```

Even with `--resume`:
```
20:55     orchestrate --resume launched
...       phase=analysis, activeAgents=1-2, 0 in_progress tasks
```

The new orchestration starts at `analysis` phase but with **0 tasks in progress**. It's re-running analysis from scratch rather than continuing to the phase the previous run was actually working on (which was beyond analysis, with mini-orchestrators deployed).

### Task State Preservation (Partial)

| Metric | Before Cancel | After Resume |
|--------|---------------|--------------|
| Total tasks | 83 | 83 |
| Completed | 64 | 64 |
| Failed | 7 | 7 |
| Blocked | 12 | 12 |
| In progress | 3 | 0 |
| Candidates | 0 | 0 |
| Phase | analysis | analysis (restarted) |

The 64 completed tasks survive the pause/cancel/resume, but the checkpoint/phase position does not. The orchestrator knows work was done but not where to pick up from.

## Root Cause

The master supervisor determines its starting checkpoint based on:
1. The orchestration ledger/checkpoint persisted during the previous run
2. Whether the previous run was "paused" (clean stop) vs "cancelled" (forced stop)

When the orchestration is **cancelled** (which is required to stop a running Codex session), the checkpoint data is lost or invalidated. The new master supervisor can't tell that the previous run had reached `during_phase` at checkpoint "after analysis" — it only sees 64 completed tasks and 0 in-progress tasks, and interprets this as "the work was done but we never recorded which phase we were in."

Additionally, **cross-provider checkpoints may be rejected**. The orchestration framework may check the provider ID of the previous run's checkpoints and discard them when the provider changes, treating them as incompatible rather than resumable.

## Steps To Reproduce

1. Start an orchestration with codex-sdk (gpt-5.5) provider
2. Let it progress past preflight into analysis phase, spawning mini-orchestrators
3. Observe that master supervisor reaches `during_phase` or `after_phase` checkpoints
4. Cancel the orchestration mid-run
5. Switch provider to openrouter-custom (deepseek)
6. Run `harness orchestrate <matter> --resume`
7. New master supervisor starts at `analysis` phase with 0 in-progress tasks
8. Phases that were already completed on the Codex run are re-done

## Expected Behavior

When resuming an orchestration after a provider switch:
- The checkpoint/phase from the previous run should be preserved and resumed
- If the previous run had reached "during_phase" after completing analysis, the new run should continue from that point (e.g. start at the research phase)
- Mini-orchestrator output and findings from the previous run should be carried forward
- Provider compatibility should not invalidate checkpoint state

## Suggested Fix (Codex)

1. **Decouple checkpoint state from provider identity.** Checkpoints should track the phase position and completed phases, not the provider that produced them. A provider switch should not reset the checkpoint.

2. **Persist phase completion markers in the matter state.** Instead of relying on the in-memory orchestration ledger, write phase-completed markers to the matter's SQLite or events log so they survive provider changes.

3. **On `--resume`, scan completed tasks for phase mapping.** If 64 tasks are completed spanning multiple phases, infer the current phase from the highest-completed phase, don't default to `preflight`.

4. **Don't reset checkpoint on cancel.** Currently, `harness cancel` appears to clear the orchestration checkpoint. Consider making cancel preserve checkpoint data, with a separate `harness reset --hard` for full reset.

## Resume Logic — Exact Reconstruction Approach

The fix isn't just "persist one number." The events log has 3,516 timestamped entries with enough detail to reconstruct the exact phase position regardless of provider. The resume logic should:

### What to Look At

The events log (`_state/events.jsonl`) records every checkpoint transition with provider metadata:

```
18:37:20  agent.run.started  role=master_supervisor  checkpoint=during_phase  provider=codex-sdk
18:40:20  agent.run.completed role=master_supervisor  checkpoint=after_phase   provider=codex-sdk
18:41:44  agent.spawned      role=mini_orchestrator                          provider=codex-sdk
```

Each event already has `provider` (or the runId maps to a provider). The data structure for recovery is:

| Field | Source | Example |
|-------|--------|---------|
| Last successful checkpoint | Last `agent.run.completed` with checkpoint != preflight | `after_phase` |
| Phase count | Count of `agent.run.completed` per phase type | 22 during_phase, 6 after_phase |
| Provider lineage | trace runId → first `run.started` event for that runId | codex-sdk |
| Mini-orchestrators deployed | `agent.spawned` with role=mini_orchestrator | 21 total |
| Blocked phases | `agent.run.blocked` with role=master_supervisor | 2 blocked_phase |
| Tasks completed | `taskCounts.completed` in status JSON | 64 |
| Last active checkpoint timestamp | Max timestamp where checkpoint != preflight and role=master_supervisor | 18:52:49 UTC |

### Resume Logic Implementation

The resume function at `harness orchestrate --resume` should:

1. Scan events.jsonl for the last non-failed, non-preflight `agent.run.completed` event with role=master_supervisor.
   - Ignore provider string entirely — checkpoint validity is phase-based, not provider-based.
   - If no non-preflight checkpoint found, fall back to preflight (current behaviour).

2. Reconstruct the phase stack from all `agent.run.completed` events where checkpoint is `during_phase` or `after_phase`, ordered by timestamp. This gives the exact sequence of phases completed.

3. Identify the current phase as the phase after the last `after_phase` completion. E.g. if the last `after_phase` was at checkpoint "analysis", the next phase is "research".

4. Mark in-progress tasks from the previous run as "interrupted" rather than "failed" — they were stopped by an external cancel, not by a logic error. This prevents the new run from treating them as hard failures.

5. Carry forward any spawned mini-orchestrator contexts. If 12 mini-orchestrators completed before cancel, their findings should be loaded into the new master supervisor's context rather than re-generated.

6. Provider identity check: do NOT filter checkpoints by provider. A checkpoint from codex-sdk is still a valid checkpoint when running on deepseek or back on codex-sdk. The phase is phase regardless of which LLM produced it.

### Edge Cases

| Scenario | How Resume Should Handle It |
|----------|----------------------------|
| Switch provider mid-case (codex-sdk → deepseek) | Scan events for last good checkpoint ignoring provider filter |
| Switch back to original provider (deepseek → codex-sdk) | Same logic — events have all provider history |
| Same provider, cancel then resume | Events log has the exact checkpoint chain, just pick up from last `during_phase` or `after_phase` |
| No previous run exists (fresh matter) | Default to preflight (current behaviour, unchanged) |
| Previous run ended in blocked_phase | Resume from the phase BEFORE the block, re-route around the blocker |
| Previous run had no completed phases (all preflight) | Default to preflight (no non-preflight checkpoint to resume from) |
| Events log has gap (e.g. manual state edits) | Fall back to scanning taskCounts: if completed > 0 and in_progress = 0, infer phase from highest-completed task type |

### Why Current `--resume` Fails

Currently, `--resume`:
- Checks for a persisted "latest checkpoint" value that gets cleared on `cancel`
- Filters checkpoints by the current provider, discarding any from a different provider
- Starts at `preflight` if no matching provider checkpoint is found even when the events log has 22 `during_phase` entries from the previous run

The fix is two-fold:
- Don't clear the checkpoint marker on `cancel` (or reconstruct it from events)
- Don't filter by provider when scanning for checkpoints

### Verification

After implementing, verify with the existing events log at `matters/anfal-napier-codex55-fixed/_state/events.jsonl` (3,516 lines):
- Should reconstruct that the last active phase was `during_phase` at ~18:52 UTC
- Should identify that 6 `after_phase` completions happened before the cancel
- Should detect that 21 mini-orchestrators were spawned across the run
- Should resume from the phase after the last `after_phase`, not from `preflight`

### Source Data Location

```
matters/anfal-napier-codex55-fixed/_state/events.jsonl  (3,516 lines)
matters/anfal-napier-codex55-fixed/_state/matter.sqlite  (better-sqlite3, has task tables)
```

## References

- Bug Report 010 — same matter, different bug (master supervisor non-JSON output at preflight)
- Bug Report 009 — orchestration stops at 3/10 phases with operator_handoff (related needs_followup pattern)
- The `--resume` flag was introduced to solve this exact problem but doesn't work across provider transitions
- The matter at `matters/anfal-napier-codex55-fixed/` has the full event history (3,516 event lines)
- Events log schema: each line is JSON with {id, timestamp, type, matterName, runId, data, source}
