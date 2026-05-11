# Hermes ↔ Harness Protocol (Milestone 5)

This protocol defines the JSON command surface Hermes uses to interact with the case-management harness.

## Endpoint

Use `executeHermesCommand` from `src/hermes/commands.ts` with one of the commands below.

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
  - Start or re-open Hermes-driven case management.
  - Required: `matterName`, `instruction`.
  - Result includes status packet and revision metadata.

- `submit_user_instruction`
  - Record follow-up user instruction.
  - Required: `matterName`, `instruction`.

- `submit_user_answer`
  - Record an answer for a pending structured question.
  - Required: `matterName`, `questionId`, `answer`.
  - Intended to resume blocked obligations after answer.

- `get_case_status`
  - Return current ready/missing/blocked/unsafe summary and diagnostics.
  - Required: `matterName`.

- `get_pending_questions`
  - Return pending questions that Hermes should ask the user next.
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

