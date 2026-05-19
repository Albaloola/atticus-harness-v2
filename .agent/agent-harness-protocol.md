# Agent Harness Protocol (OpenClaw & Atticus)

This protocol defines the JSON command surface the operator-facing Agent (supporting OpenClaw, Atticus, etc.) uses to interact with the case-management harness. The Agent should use this protocol for integration work instead of editing matter files or inventing state transitions.

## Endpoint

Use `executeAgentCommand` from `src/agent-protocol/commands.ts` (the underlying implementation remains compatible) with one of the commands below.

Each command returns:

- `ok`: success/failure flag.
- `command`: command name.
- `runId`: correlation identifier.
- `summary`: user-facing progress state (`done`, `missing`, `blocked`, `unsafe`, and next actions).
- `diagnostics`: internal metrics for orchestration and support visibility.
- `userMessage`: concise plain-English status.
- `data`: optional command-specific payload.

## Commands

- `start_case_management`
  - Start or re-open Agent-driven case management.
  - Required: `matterName`, `instruction`.
  - Result includes status packet, revision metadata, obligations, blockers, and pending questions where available.

- `submit_user_instruction`
  - Record follow-up user instruction.
  - Required: `matterName`, `instruction`.

- `submit_user_answer`
  - Record an answer for a pending structured question.
  - Required: `matterName`, `questionId`, `answer`.
  - Intended to resume blocked obligations after answer.
  - The Agent must ask the operator the exact pending question; do not paraphrase a different factual request.

- `get_case_status`
  - Return current ready/missing/blocked/unsafe summary and diagnostics.
  - Required: `matterName`.

- `get_pending_questions`
  - Return pending questions that the Agent should ask the user next.
  - Required: `matterName`.

- `get_next_actions`
  - Return next non-blocked obligations recommended by the obligation engine.
  - Required: `matterName`.

- `request_document`
  - Request a typed work product.
  - Required: `matterName`, `documentType`.

- `request_email_draft`
  - Request a draft email.
  - Required: `matterName`, `to`, `subject`.
  - Returns the draft work-product identifier plus an external action id.
  - Does not send email.

- `ingest_email`
  - Ingest an inbound email message and extract dates where possible.
  - Required: `matterName`, `subject`, `body`.

- `record_sent_email`
  - Record a sent email against a pre-approved external action.
  - Required: `matterName`, `externalActionId`, `to`, `subject`.
  - Will fail unless approval status is explicit.

- `record_received_email`
  - Record a received email and extract dates where possible.
  - Required: `matterName`, `from`, `subject`, `body`.

- `approve_external_action`
  - Move an external action to `approved`.
  - Required: `matterName`, `actionId`.

- `reject_external_action`
  - Move an external action to `rejected`.
  - Required: `matterName`, `actionId`.

- `pause_case`
  - Mark case status as `blocked`.
  - Required: `matterName`.

- `resume_case`
  - Mark case status as `active`.
  - Required: `matterName`.

## Safety Rule

- No outbound email/filing action is recorded without an explicit `approved` external action.
- The Agent must never use a draft work-product id as proof that an external action happened.
- Generated work products, draft emails, and review-ready exports are not primary evidence unless separately supported by primary evidence/source IDs.

## Provider And Media Rules

- Default legal reasoning uses `openrouter-deepseek`, but Harness is provider-agnostic and Codex SDK plus other supported profiles may be selected.
- OpenRouter provider routing for the default DeepSeek-only profile must allow only DeepSeek and must not allow silent fallbacks.
- DeepSeek must not receive image/audio/video inputs.
- If image processing is genuinely required beyond reasonable doubt and the active profile cannot process images, the Agent may brief the Lead Counsel Orchestrator for the approved Gemma vision fallback for `image_extraction` only. Extracted facts return to case state; legal reasoning returns to the active provider profile.
- JSON mode, tool calling, prompt caching, and structured output assumptions must come from the provider capability matrix, not from Agent memory.

## Recovery Semantics

The Agent should expect long-running Harness work to be recoverable:

- Work units are recorded with obligation id, task id, run id, provider/model, state hash, partial outputs, applied updates, work products, questions, retry count, failure reason, cost, and status.
- Runtime checkpoints can be `running`, `paused`, `resumed`, `resumable`, `completed`, or `failed`.
- Provider-credit exhaustion should pause for repair.
- Network stalls should not mark a case complete.
- Stale running work with no active worker should be marked orphaned and linked obligations should become retryable/failed with `agent_orphaned` evidence.

When the Agent sees a stuck run, it should ask the Lead Counsel Orchestrator to recover from the ledger and checkpoint. It should not instruct a fresh full rerun unless the operator explicitly requests that cost.

## Review-Ready Export Semantics

Review-ready output is not the same as "some files exist in `_output/`". The Agent should require:

- typed work products at least `operator_review_ready`
- safe status
- manifest
- source map
- unresolved-gap report
- readable Markdown/DOCX rendering
- blockers for rejected or unsafe products

If export produces only a readiness failure report, the Agent should tell the operator what is blocking review rather than presenting the folder as useful legal output.
