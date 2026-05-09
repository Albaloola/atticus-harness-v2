# Bug Report 008 — Case Manager Stale Heartbeat: Background Runs Die Overnight With No Recovery

**Reported by:** Atticus (Omar via Telegram)
**Date:** 2026-05-08
**Severity:** high
**Status:** Open

## Summary

When a `case manage` or `orchestrate` run is left to run overnight in background mode, the case manager and its spawned sub-tasks die with stale heartbeat errors. The system logs `agent.run.error` events with `recovery: "stale_run"` and `recovery: "stale_task"` but does not actually recover — the matter stays in a zombie state requiring manual intervention. The heartbeat timeout appears too short for overnight runs, and the recovery mechanism fails to restart the run.

## Context

- Matter: anfal-case-rerun
- Command: `harness case manage anfal-case-rerun "Produce an action plan for tomorrow"` (run via Codex CLI at ~04:44 UTC on 2026-05-07)
- Run produced: `case-task-1778129106631` (candidate, gate score 0.68, not auto-accepted)
- Events: case.instruction.received, case.memory.loaded, case.output.created, case.auto_accept.evaluated (all OK)
- Then ~6.5 hours of silence, followed by stale heartbeat errors

## Steps To Reproduce

1. Run `harness case manage <matter> "some instruction"` or `harness orchestrate <matter> --background` with a matter containing 80+ evidence files
2. Leave the system overnight (6+ hours)
3. Check events the next day with `harness events <matter>`

## Expected Behavior

The case manager should either:
- Complete its work within a reasonable time
- Or fail gracefully with a clear error stating why it couldn't finish
- Or have a recovery mechanism that actually restarts the run rather than just logging the stale heartbeat

## Actual Behavior

Multiple stale heartbeat errors logged at 11:09 UTC:

```
agent.run.error  system  {"recovery":"stale_run","role":"case_manager","reason":"heartbeat stale since 20...
agent.run.error  system  {"recovery":"stale_run","role":"case_manager","reason":"heartbeat stale since 20...
agent.run.error  system  {"recovery":"stale_task","reason":"owning run c1ec863f-c0f7-4564-aa8e-e2681bdf5d...
agent.run.error  system  {"recovery":"stale_task","reason":"owning run d21ff820-7ad9-4950-9305-57c4d2f2d9...
agent.run.error  system  {"recovery":"stale_task","reason":"owning run 26f77b55-2574-4a21-8f7e-195c47b0c4...
```

Three separate case_managers all died with stale heartbeats. The matter remains in "analyzing" / "needs-followup" state with no active agent, but also no way to auto-recover. The `harness resume` command says "Resume paused matter run" but the matter is not paused — it's in analyzing state, so resume does nothing. Manual run required.

## Evidence

- Matter: anfal-case-rerun (events show running from 04:44, stale at 11:09)
- Three stale_case_manager events with three different stale_task IDs
- The case output (action plan) WAS produced before the crash (gate score 0.68) but was not auto-accepted
- The spawned sub-tasks (c1ec863f, d21ff820, 26f77b55) are orphaned

## Safety Notes

- No data loss (the candidate was saved before the crash)
- No duplicate runs
- Matter state is recoverable with manual `harness orchestrate` restart
- The candidate output is still accessible but not accepted

## Suggested Fix (Codex)

1. Investigate the heartbeat timeout threshold — it may be too aggressive for long-running orchestration with 80+ evidence files
2. Implement a real recovery pathway: when a stale_run is detected, the system should attempt to restart the case manager or escalate to a re-orchestration
3. Add a "zombie cleanup" routine that either completes or cancels orphaned tasks rather than leaving them in limbo
4. Consider adding a daemon-based scheduler that can relaunch stalled orchestration runs automatically
