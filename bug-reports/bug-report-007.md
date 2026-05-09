# Bug Report 007 — Codex Sandbox Blocks Network Access: Harness Orchestration Fails With "fetch failed"

**Reported by:** Hermes
**Date:** 2026-05-08
**Severity:** high
**Status:** Open

## Summary

When Codex CLI executes `harness orchestrate` inside its sandbox, the Harness runtime cannot reach the OpenRouter API. Every LLM call fails with `Fatal error: Network error: fetch failed`. This blocks the entire orchestration pipeline — no agents can run, no deliverables can be produced. The same `harness orchestrate` command works when run directly on the host (outside Codex sandbox).

## Context

- Matter: napier-accommodation-arrears
- Command or workflow: `harness orchestrate napier-accommodation-arrears --objective "..."` (run inside `codex exec --full-auto`)
- Provider/profile: openrouter-deepseek (auth OK, reachable from host)
- Run ID: none produced (orchestration never started)
- Task ID: N/A
- Candidate ID: N/A
- Artifact ID: N/A

## Steps To Reproduce

1. Ensure Codex CLI is logged in (`codex login status` shows "Logged in using ChatGPT")
2. Ensure Harness provider is openrouter-deepseek with valid auth (`harness control-panel status --json` shows auth OK)
3. Run: `codex exec --full-auto 'harness orchestrate napier-accommodation-arrears --objective "test"'` from `/home/alba/atticus-harness-v2`
4. Observe the harness output

## Expected Behavior

Harness orchestration should start, spawn the master orchestrator, and begin the 10-phase legal workflow with agent LLM calls reaching OpenRouter.

## Actual Behavior

Harness CLI starts but fails immediately when any agent attempts an LLM call:
```
Fatal error: Network error: fetch failed
```
No orchestration run is created. No tasks are spawned. No candidates are produced.

Additionally, `harness review napier-accommodation-arrears` fails with the same network error.

Note: `harness ingest` (file copy + hashing, no LLM calls) works fine inside the Codex sandbox. Only LLM-dependent commands fail.

## Evidence

- Codex run session: `proc_7bab2b1bc88e` (exited, 369s uptime)
- Codex output: "Orchestration blocker: network fetch failure, so the updated full case analysis and requested deliverables were not generated."
- Host-level verification: `harness control-panel status --json` works and shows auth OK when run directly (not through Codex)
- The Codex sandbox appears to block outbound HTTPS connections to `api.openrouter.ai`

## Safety Notes

- No duplicate runs created (orchestration never started)
- No data loss
- No external dispatch risk
- Evidence ingestion (file operations) was unaffected
- This blocks ALL LLM-dependent harness workflows when routed through Codex

## Suggested Next Action For Codex

1. Inspect the Codex sandbox network policy — does `--full-auto` allow outbound HTTPS?
2. Test with `--yolo` flag to bypass sandbox restrictions
3. If Codex sandbox cannot permit outbound API calls, document that Codex can only drive file-level harness commands (ingest, evidence list) and that LLM-dependent commands (orchestrate, run, case manage, draft, verify, review) must run directly on the host
4. Consider adding a `--no-sandbox` or equivalent flag if available in the Codex version
