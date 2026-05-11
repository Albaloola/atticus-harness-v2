# Atticus/Hermes Skill Update Checklist

Use this checklist when updating Atticus/Hermes skills or runbooks so the agent
can manage cases through Harness without asking the operator to supervise
internal phases.

## Required Skills/Runbooks

- Case status and next action:
  - Inspect `harness case resume <matter> --json`.
  - Inspect `harness control-panel agent-packet <matter> --json`.
  - Inspect recent events before answering or starting new work.
- Missing information interview:
  - Fetch pending Harness questions.
  - Ask the operator the exact question text.
  - Submit the answer back through Harness/Hermes protocol.
- Communications:
  - Ingest received emails into case state.
  - Request prepare-only email/letter drafts.
  - Record sent/received emails only when the human has actually sent or
    received them.
- External actions:
  - Surface approval/rejection actions to the operator.
  - Never claim an external action happened unless Harness has a recorded past
    fact proving it.
- Recovery:
  - Detect active runs, leases, orphaned tasks, stale checkpoints, and provider
    failures.
  - Brief Codex to pause, repair, and resume from the checkpoint/work-unit ledger.
- Provider readiness:
  - Inspect active provider profile.
  - Preserve DeepSeek-only routing for the default OpenRouter profile.
  - Treat JSON mode, tool calling, prompt caching, reasoning, and vision as
    capability-policy facts, not assumptions.
- Review-ready output:
  - Require source map, manifest, quality/readability gate, and blockers.
  - Tell the operator when `_output/` contains only diagnostic or failed-readiness
    material.

## Skills Must Not Do

- Do not write matter files, artifacts, candidates, logs, leases, checkpoints, or
  source code by hand.
- Do not run mutating Harness commands directly from Hermes.
- Do not start duplicate long-running runs.
- Do not use DeepSeek for images.
- Do not switch provider/model silently.
- Do not ask the operator to manage Harness phases manually.
- Do not present short placeholder documents as legally useful work.

## Minimum Operator Answer Shape

Every Hermes answer about a matter should include:

- Current Harness status grounded in inspected state.
- What work is ready, missing, blocked, or unsafe.
- Exact IDs for relevant questions, artifacts, candidates, external actions, or
  run events.
- The next Harness/Codex action if work remains.
- Any operator question only when Harness surfaced a material missing-information
  question.

## Alignment Sources

Keep this checklist aligned with:

- `docs/hermes-agent-guide.md`
- `docs/hermes-harness-protocol.md`
- `.hermes/prompts/09-hermes-agent-system-prompt.md`
- `.hermes/prompts/10-codex-handoff-template.md`
