# Feature Request: Gate Feedback Loop Architecture — Quality-Driven Resubmission Instead of Pass/Fail

**Date:** 2026-05-08
**Filed by:** Atticus (on instruction from Omar)
**Harness version:** v0.1.0
**Priority:** HIGH
**Related:** Current autonomy auto_accept_gated / auto_accept modes

---

## Problem Statement

The harness currently has two modes for handling candidates at the quality gate:

1. **auto_accept_gated**: Runs the gate, and if the score is below `minGateScoreForAutoAccept`, the candidate is rejected and sits there waiting for manual intervention. The agents that produced it never learn why it failed.

2. **auto_accept**: Lowers or removes the gate requirement entirely, allowing low-quality work through.

Neither of these is the correct behaviour. The gate is meant to **enforce quality**, not to be bypassed or to dead-end the workflow. When work fails the gate, the system should:
- Tell the agent WHY it failed (specific, structured feedback)
- Let the agent fix and resubmit
- Loop until quality is met
- Only escalate to higher-level agents if repeated failures occur
- Only skip the gate in specifically logged exceptional circumstances

## Current Behaviour

Currently when a candidate fails the gate:
- Event is logged: `case.auto_accept.evaluated {"accepted": false, "reason": "Gate score X below minimum Y"}`
- The candidate sits in the candidates folder
- No agent is notified
- No resubmission happens
- The human operator sees "Suggested next actions: harness verify | gate | review" — i.e., manual intervention required
- The operator either manually accepts (bypassing quality) or lowers the threshold (degrading quality)

There is **no feedback loop** from gate → agent.

## Proposed Design

### Core Loop: Worker → Gate → Feedback → Worker (repeat)

```
Worker agent produces candidate
  → Gate evaluates (all checks: quality, citations, structure, hostile review)
  → If PASS: candidate accepted as artifact. Done.
  → If FAIL: structured feedback packet generated containing:
      - Which specific checks failed (e.g., "citations missing for para 3, 7, 12")
      - Why they failed (e.g., "evidence_id NAP-SRC-XXXX was referenced but does not contain the quoted text")
      - What the passing threshold was vs what was achieved
      - Suggested improvements
  → Feedback packet sent back to the SAME worker agent
  → Worker receives feedback as context for its next turn
  → Worker revises the candidate and resubmits
  → Gate evaluates again
  → Repeat until PASS or max_retries hit
```

### Retry Escalation Chain

Each level has a configurable max_retries (defaults suggested):

1. **Worker level** (default max_retries: 3)
   - Worker gets feedback, fixes, resubmits
   - If still failing after max_retries → notify mini-orchestrator

2. **Mini-orchestrator level** (default max_retries: 2)
   - Mini-orchestrator can:
     - Spawn a fresh/different agent for the same task
     - Split the task into smaller subtasks
     - Change the model/reasoning level for the task
     - Provide additional evidence context
   - If still failing after max_retries → notify master orchestrator

3. **Master orchestrator level** (default max_retries: 1)
   - Master orchestrator can:
     - Re-assess whether the task is feasible
     - Change the overall approach/strategy
     - Decide to log a specific exception (see below)
     - Escalate to human operator as absolute last resort

### Exception Handling: Logged Gate Bypass

A candidate should NEVER skip the gate without a **permanent, traceable, cited reason**. The only way to bypass is:

1. Master orchestrator determines this is a genuine edge case (e.g., the evidence genuinely doesn't support a citation format the gate expects, but the legal reasoning is sound)
2. Master orchestrator logs a structured exception record containing:
   - `exception_id`: unique ID
   - `candidate_id`: which candidate triggered this
   - `matter_name`: which matter
   - `gate_check_failed`: which specific check was bypassed
   - `reason`: natural language explanation of why this is a valid exception
   - `authorised_by`: which agent level authorised it (master_orchestrator / human)
   - `timestamp`: when it was logged
   - `permanent_rule`: whether this creates a standing rule for future candidates
3. The exception is stored in the matter's state (e.g., `_exceptions.jsonl`) — append-only, never deleted
4. Future candidates that fail the same gate check can reference existing exceptions

This creates a **growing knowledge base** of edge cases so the harness gets smarter over time rather than silently lowering quality.

### Changes Required

1. **Gate output**: Currently returns a pass/fail score. Needs to return structured feedback: which checks failed, why, what was expected vs received, specific location in the document.

2. **Agent message loop**: After gate failure, the agent needs to receive the feedback packet as part of its context for the next turn. This may require changes to how the agent loop reads state.

3. **Orchestrator notification system**: When retry limits are hit at one level, the next level up needs to be notified with the failure history.

4. **Exceptions subsystem**: New data structure (append-only log) for permanent gate bypass records. New CLI commands: `harness exceptions list <matter>`, `harness exceptions show <exception-id>`.

5. **Config**: New config keys:
   - `autonomy.gateFeedback.enabled` (default: true)
   - `autonomy.gateFeedback.maxWorkerRetries` (default: 3)
   - `autonomy.gateFeedback.maxMiniOrchRetries` (default: 2)
   - `autonomy.gateFeedback.maxMasterOrchRetries` (default: 1)
   - `autonomy.gateFeedback.feedbackLevel` (check-level / summary) — how detailed the feedback is

### What This Replaces

This entirely replaces the current `auto_accept` / `auto_accept_gated` dichotomy. The mode should just be one mode: `quality_loop`. The concept of "auto-accept" goes away — work is accepted automatically when it passes the gate, and that is the ONLY path to acceptance (except logged exceptions).

### Anti-Patterns (what this explicitly prevents)

- ❌ Lowering the gate score threshold to let more candidates through
- ❌ Manual accept bypassing the gate entirely
- ❌ Silent gate skips with no logged reason
- ❌ Workers producing the same failing work repeatedly with no feedback
- ❌ Quality degradation over time due to exception creep (exceptions are permanent and traceable)

---

## Example Flow

1. Worker agent drafts complaint letter
2. Gate runs: "Citations check: FAIL — paragraph 3 references 'safeguarding referral' but no evidence_id is cited. Content length: PASS. Structure: PASS."
3. Feedback packet sent to worker: "Paragraph 3 needs a citation. The safeguarding referral CRM:00380000000541 is in evidence NAP-SRC-0083. Add citation and resubmit."
4. Worker finds NAP-SRC-0083, adds citation, resubmits
5. Gate runs: "Citations check: PASS. Content length: PASS. Structure: PASS. Hostile review: PASS."
6. Candidate accepted as artifact.

If instead the worker fails 3 times:
1. Mini-orchestrator notified: "Worker failed complaint letter 3 times. Gate reasons: [list]. Investigating."
2. Mini-orchestrator spawns a fresh agent with additional context
3. New agent succeeds on first try
4. Logged: "Worker 1 failed 3 times. Mini-orch reassigned to Worker 2. Success."

If mini-orch also fails:
1. Master orchestrator notified
2. Master orch assesses: "This evidence set genuinely does not have enough to support the requested complaint structure. Exception logged: 'gate.citations — evidence set lacks source for para 7 claim'."
3. Candidate is accepted with logged exception
4. Note added to matter: "Evidence gap identified: no source for university's counselling referral process"
