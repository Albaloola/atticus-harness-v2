# Bug Report 009 — Orchestration Stops at 3/10 Phases With "needs_followup" / "operator_handoff" Blocked

**Reported by:** Atticus (Omar via Telegram)
**Date:** 2026-05-08
**Severity:** medium
**Status:** Open

## Summary

When `harness orchestrate` runs on a well-populated matter (99 evidence files, 138 tasks), it completes only 3 of 10 phases before hitting the "operator_handoff" phase with "needs_followup" status. The orchestrator appears unable to autonomously decide what to do next and requires human intervention. This blocks overnight runs from completing without manual attention.

## Context

- Matter: napier-accommodation-arrears
- Command: background orchestration run
- Run ID: f74d8612-8a02-4323-892b-36648388f410
- Log: `/home/alba/.hermes/profiles/atticus/home/.atticus-harness/runtime/run-f74d8612-8a02-4323-892b-36648388f410.log`

## Steps To Reproduce

1. Ensure a matter has 90+ evidence files and 100+ tasks
2. Run: `harness orchestrate napier-accommodation-arrears --background --objective "<objective>"`
3. Wait for orchestration to complete
4. Check events: `harness events napier-accommodation-arrears`

## Expected Behavior

Orchestration should complete all 10 phases autonomously without requiring human intervention between phases. The operator_handoff phase should only fire when there's a genuine decision that the system cannot make (e.g., conflicting legal strategies, ethical boundaries) — not for routine progression through the analysis pipeline.

## Actual Behavior

The run completes 3/10 phases, then gets stuck:

```
agent.run.blocked  orchestration  {"status":"needs_followup","rawOutputSynthesized":true,"findingCount":1,"riskCount":...
agent.run.blocked  orchestration  {"role":"mini_orchestrator","phase":"operator_handoff","status":"blocked","findingCount":...
agent.output.synthesized  orchestration  {"title":"Summarize findings and status","status":"needs_followup","findingCount":...
run.completed  system  {"summary":"Completed 3/10 phases","totalCost":0}
```

The matter is left in "analyzing" phase with "needs-followup" status. The system considers itself "completed" but only did 30% of the work. No additional deliverables are produced. Starting a new orchestration run duplicates effort rather than continuing from phase 4.

## Evidence

- Run ID: f74d8612 (napier-accommodation-arrears)
- Events show: agent.run.completed × 3 (phases 1-3), then agent.run.blocked, then run.completed with "Completed 3/10 phases"
- The matter status remains "analyzing" indefinitely
- The 5 existing artifacts were from a previous (V1) run, not from this V2 orchestration
- A new orchestration (run ID 69521f02) had to be manually kicked off to attempt the remaining phases

## Safety Notes

- No data loss
- No duplicate outputs created
- The system does save intermediate findings before stopping
- The operator must manually kick a new orchestration, which re-analyses from scratch

## Suggested Fix (Codex)

1. Investigate why the orchestrator triggers operator_handoff at phase 3 rather than continuing — is it a model confidence issue on the deepseek-v4-flash profile?
2. Consider retrying with the reasoning model (deepseek-v4-pro) for the handoff decision to increase autonomy
3. Add a `--no-handoff` flag that tells the orchestrator to avoid operator_handoff unless the matter hits a genuine blocker (conflicting evidence, jurisdictional ambiguity)
4. If the orchestrator hits handoff, it should queue as a "morning review" and continue with phases that don't require human input
5. The run.completed event should distinguish between "fully completed all 10 phases" and "stopped at human handoff" more clearly
