# Codex Handoff Template For Hermes

Use this template when Hermes needs Codex to run mutating Harness work.

```markdown
Matter: <matter-name>
Source: Hermes
Operator request: <exact user instruction>

Current inspected state:
- Resume/checkpoint: <status, phase, blockers, updatedAt>
- Agent packet: <status, activeAgents, leases, task counts>
- Recent events: <relevant event IDs or summaries>
- Relevant artifacts/candidates/questions/actions: <IDs>

Provider/profile constraints:
- Active provider profile: <profile name from Harness status>
- Default expectation: provider-agnostic Harness behavior.
- If using the default OpenRouter profile, keep it DeepSeek-only.
- Do not use image processing unless genuinely needed beyond reasonable doubt.
- If vision is required, use the approved bounded fallback and return to the
  active provider profile afterward.

Requested Harness action:
```bash
<exact harness command or Hermes protocol action>
```

Execution requirements:
- Use persisted case memory and accepted artifacts before asking the operator to
  restate facts.
- Do not rerun the full investigation unless foundational work is missing or the
  operator explicitly asked for a full rerun.
- Prefer the smallest resumable work unit.
- If the run is stuck or interrupted, use runtime recovery, checkpoint, work-unit
  ledger, and orphan reaper. Pause, repair, and resume instead of restarting a
  whole phase where possible.
- Preserve prepare-only external-action limits. Do not send, file, serve, pay,
  submit, or contact externally.

Success criteria:
- <specific deliverable or state transition>
- Output is reducer-visible or review-ready where required.
- Manifest/source map/blockers are present for document export.
- Fresh status packet confirms no orphaned active work.

Expected result back to Hermes:
- Command/protocol result JSON.
- Candidate/artifact/question/action IDs created or changed.
- Review/gate status and blockers.
- Tests/build/verification run, if Harness repair was needed.
- Any remaining operator question, using Harness's exact pending question text.
```

Hermes must not invent missing IDs or fill in Codex results from memory.
