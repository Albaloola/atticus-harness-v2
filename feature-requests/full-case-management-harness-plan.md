# Atticus Harness Full Case Management Implementation Plan

## Purpose

Atticus Harness must become the durable execution system behind Atticus/Hermes for full litigation and case management. Hermes remains the conversational agent. The harness must own durable case state, evidence grounding, legal work production, deadline control, recovery, verification, and safe external-action preparation.

The current harness can orchestrate phases and recover better than before, but it is not yet a reliable case-management system. It still treats agent activity and candidate files as progress even when no legally meaningful work product exists. This plan replaces that with a case-state-first architecture where every autonomous action must update the case, satisfy an obligation, or produce a validated work product.

## Non-Negotiable Product Contract

A user should be able to manage a case through Hermes without touching the CLI.

The user/Hermes interaction should look like:

1. User gives Hermes a case or instruction.
2. Hermes sends a structured instruction to the harness.
3. The harness ingests evidence and updates the authoritative case state.
4. The harness identifies missing facts, legal questions, procedural routes, deadlines, documents, and communications.
5. The harness autonomously performs safe work.
6. When information is missing, the harness creates targeted questions for Hermes to ask the user.
7. Hermes returns answers to the harness.
8. The harness resumes from the exact blocked obligation, not from the beginning.
9. The harness produces review-ready legal work products and clear handoff packets.
10. The harness never marks the case, phase, document, or output complete unless the required artifact exists and passed the relevant gates.

The harness must be able to support:

- litigation planning
- fact finding
- legal/procedural research
- deadline monitoring
- evidence matrix and chronology production
- merits/risk analysis
- pleadings and complaint drafting
- email drafting and incoming email triage
- case task management
- user-question loops through Hermes
- pause/repair/resume after provider, network, process, or machine failure
- safe external-action preparation with explicit approval gates for sending/filing/submitting

## Current Failure Pattern To Design Against

Recent high-volume case-management runs exposed these architectural failures:

- phases were marked complete without usable deliverables
- blocked phases were treated as completed
- agent transcripts were dumped as candidates
- zero accepted artifacts were still treated as progress
- `_output` contained formatted fragments, not review-ready documents
- facts/legal analysis were fragmented across untrusted candidate files
- no authoritative case state existed
- missing information did not become structured Hermes questions
- the harness could not explain what was legally done, missing, unsafe, or ready
- restart/retry behavior was too expensive and insufficiently granular

This plan treats those failures as regression cases.

## Architecture Overview

The harness should be reorganized around these subsystems:

1. Case State
2. Work Products
3. Obligations
4. Questions
5. Evidence and Claims
6. Deadlines
7. Hermes Protocol
8. Autonomous Case Manager
9. Quality and Readiness Gates
10. External Action Control
11. Durable Runtime and Recovery
12. Provider Capability Routing
13. Review-Ready Export
14. Full Case Benchmark

Each subsystem must have tests before another expensive orchestration run is trusted.

## Milestone 1: Authoritative Case State

### Goal

Create a durable, structured case state that becomes the single source of truth for each matter. Candidates, tasks, transcripts, and artifacts are supporting data, not the case itself.

### Add

- `src/case-state/schema.ts`
- `src/case-state/store.ts`
- `src/case-state/mutations.ts`
- `src/case-state/snapshot.ts`
- `src/case-state/import-existing.ts`
- `tests/case-state.test.ts`

### Case State Fields

The case state should include:

- `matterName`
- `status`
- `posture`
- `parties`
- `representatives`
- `forums`
- `claims`
- `complaints`
- `legalRoutes`
- `remedies`
- `evidenceItems`
- `facts`
- `disputedFacts`
- `admissions`
- `legalIssues`
- `proceduralIssues`
- `deadlines`
- `risks`
- `openQuestions`
- `workProducts`
- `communications`
- `externalActions`
- `nextActions`
- `blockedObligations`
- `readiness`

### Required Behavior

- Case state updates must be append-only or audit-trailed.
- Every update must record source, timestamp, actor/run ID, and confidence.
- Generated work product must never become primary evidence.
- User answers through Hermes must be stored separately from primary documents but may support facts as user assertions.
- The case state must be restorable after process crash.

### Acceptance Tests

- Can create a case state for a new matter.
- Can import existing evidence/candidates without treating generated drafts as primary proof.
- Can update parties, facts, issues, risks, questions, deadlines, and work products.
- Can produce a snapshot that explains done/missing/blocked/unsafe.
- Crash/reload preserves state exactly.

## Milestone 2: Typed Work Products

### Goal

Replace loose candidate blobs with typed work products that have schemas, validation, readiness levels, and explicit links back to case state.

### Add

- `src/work-products/types.ts`
- `src/work-products/contracts.ts`
- `src/work-products/store.ts`
- `src/work-products/validators.ts`
- `src/work-products/promote.ts`
- `tests/work-products.test.ts`

### Work Product Types

Implement at least:

- `intake_summary`
- `chronology`
- `evidence_matrix`
- `fact_finding_report`
- `issue_map`
- `authority_map`
- `legal_research_memo`
- `procedural_route_memo`
- `case_theory`
- `merits_opinion`
- `risk_register`
- `draft_pleading`
- `draft_complaint`
- `draft_letter`
- `draft_email`
- `witness_statement`
- `schedule_of_loss`
- `draft_order`
- `bundle_index`
- `war_room_pack`
- `operator_handoff`
- `review_ready_output_bundle`

### Readiness Levels

Use staged readiness:

- `raw`
- `structured`
- `case_integrated`
- `evidence_grounded`
- `legally_reviewed`
- `hostile_reviewed`
- `operator_review_ready`
- `execution_ready`
- `file_ready`

`file_ready` must be exceptional and must never be inferred from model confidence alone.

### Required Behavior

- A work product cannot be promoted unless it satisfies its schema.
- A work product cannot be exported unless it reaches `operator_review_ready`.
- A draft communication can be prepared autonomously but cannot be sent without explicit approval.
- A work product must declare its purpose, audience, source basis, unresolved gaps, and safety status.

### Acceptance Tests

- Invalid work product is rejected with actionable errors.
- A valid chronology can update case state.
- A legal memo without authorities cannot reach `legally_reviewed`.
- A draft pleading without forum/parties/remedies cannot reach `operator_review_ready`.
- A short generic document fails the document substance gate.

## Milestone 3: Obligation Engine

### Goal

Stop orchestrating by static phases alone. The harness must manage case obligations derived from the current case state.

### Add

- `src/case-manager/obligation-types.ts`
- `src/case-manager/obligation-engine.ts`
- `src/case-manager/work-selector.ts`
- `src/case-manager/obligation-store.ts`
- `tests/obligation-engine.test.ts`

### Obligation Examples

- `identify_parties`
- `extract_key_dates`
- `build_chronology`
- `build_evidence_matrix`
- `identify_legal_issues`
- `research_authorities`
- `assess_judicial_review_route`
- `assess_ordinary_action_route`
- `assess_complaint_route`
- `calculate_deadline`
- `ask_missing_fact`
- `draft_document`
- `verify_document`
- `prepare_email`
- `triage_incoming_email`
- `update_action_plan`
- `export_review_bundle`

### Required Behavior

- Obligations are generated from case state.
- Obligations have status: `pending`, `ready`, `running`, `blocked`, `satisfied`, `failed`, `cancelled`.
- Obligations list dependencies and blockers.
- If missing information blocks an obligation, create a question instead of vague failure.
- Completed obligations must point to case state updates or validated work products.
- The orchestrator must select the next cheapest useful work, not rerun everything.

### Acceptance Tests

- Missing final decision date generates a deadline question.
- Missing evidence matrix creates an evidence matrix obligation.
- Existing accepted chronology prevents unnecessary chronology rerun.
- A blocked obligation resumes after a user answer.
- Static phase completion cannot satisfy an obligation without an artifact/update.

## Milestone 4: Hermes Question Queue

### Goal

Make missing information a structured, resumable conversation with the user through Hermes.

### Add

- `src/questions/schema.ts`
- `src/questions/store.ts`
- `src/questions/generate.ts`
- `src/questions/answers.ts`
- `src/questions/resume.ts`
- `tests/questions.test.ts`

### Question Shape

Each question must include:

- `questionId`
- `matterName`
- `neededFor`
- `question`
- `whyNeeded`
- `urgency`
- `answerType`
- `allowedFormats`
- `canProceedWithoutAnswer`
- `consequenceIfUnknown`
- `blockedObligationIds`
- `status`

### Required Behavior

- The harness asks Hermes only when missing information materially affects case progress, deadline/risk, or document quality.
- Questions should be batched intelligently but not hidden.
- User answers update case state as user assertions.
- Answering a question unblocks related obligations.
- The harness can continue around non-critical questions.

### Acceptance Tests

- Missing date creates one targeted date question.
- Answering the date updates case state and deadline obligations.
- Non-critical missing detail does not stop unrelated work.
- Hermes can fetch pending questions as JSON.

## Milestone 5: Hermes-Harness Protocol

### Goal

Create a stable API/command protocol so Hermes can manage cases through the harness without being the orchestrator.

### Add

- `docs/hermes-harness-protocol.md`
- `src/hermes/protocol.ts`
- `src/hermes/commands.ts`
- `src/hermes/status-packets.ts`
- `tests/hermes-protocol.test.ts`

### Commands

Implement protocol handlers for:

- `start_case_management`
- `submit_user_instruction`
- `submit_user_answer`
- `get_case_status`
- `get_pending_questions`
- `get_next_actions`
- `request_document`
- `request_email_draft`
- `ingest_email`
- `record_sent_email`
- `record_received_email`
- `approve_external_action`
- `reject_external_action`
- `pause_case`
- `resume_case`

### Required Behavior

- Hermes can submit instructions without knowing internal phase names.
- Harness returns concise status packets suitable for conversation.
- Harness must separate user-visible summary from internal diagnostics.
- Harness must never require the user to inspect `_candidates`, `_artifacts`, or `_output` directly to understand progress.

### Acceptance Tests

- Hermes can start a case and receive current status.
- Hermes can submit an answer and trigger resume.
- Hermes can request a document and receive a work product ID/status.
- Hermes cannot accidentally approve sending/filing without explicit external action approval.

## Milestone 6: Evidence And Claim Grounding

### Goal

Make facts and legal claims traceable. Prevent generated Atticus/Harness work product from becoming evidence.

### Add

- `src/evidence/source-classification.ts`
- `src/claims/schema.ts`
- `src/claims/store.ts`
- `src/claims/extract.ts`
- `src/claims/verify.ts`
- `tests/claim-grounding.test.ts`

### Source Classes

- `primary_evidence`
- `court_or_tribunal_record`
- `official_policy_or_rule`
- `legal_authority`
- `user_statement`
- `transcript`
- `generated_work_product`
- `draft`
- `unknown`

### Required Behavior

- Every factual claim has source references or is marked unsupported.
- Every legal claim has authority references or is marked unsupported.
- Claim records distinguish fact, law, inference, user assertion, and risk.
- Contradictions are tracked.
- Evidence IDs and page/time/section references are preferred where available.

### Acceptance Tests

- Generated draft cannot satisfy primary proof requirement.
- Unsupported factual claim fails evidence-grounding gate.
- Contradictory evidence creates a disputed fact.
- Legal memo cannot pass legal gate with no authorities.

## Milestone 7: Deadline And Procedural Control

### Goal

Add a deadline engine that detects urgent or missing procedural information and drives case obligations.

### Add

- `src/deadlines/schema.ts`
- `src/deadlines/engine.ts`
- `src/deadlines/rules/scotland.ts`
- `src/deadlines/questions.ts`
- `tests/deadlines.test.ts`

### Required Behavior

Track:

- limitation/prescription
- judicial review time limits
- university/internal appeal deadlines
- ombudsman/complaint escalation windows
- court service deadlines
- response deadlines from emails/letters
- user-created reminders

### Acceptance Tests

- Missing final decision date creates a critical question.
- Known decision date calculates possible JR urgency.
- Incoming email with response deadline creates a deadline.
- Deadline uncertainty appears in case status and handoff.

## Milestone 8: Legal Meaningfulness Gates

### Goal

Prevent shallow, generic, or malformed documents from being treated as useful.

### Add

- `src/quality/legal-meaningfulness-gate.ts`
- `src/quality/document-substance-gate.ts`
- `src/quality/formatting-gate.ts`
- `src/quality/gate-report.ts`
- `tests/legal-meaningfulness-gate.test.ts`

### Analysis Gates

Legal analysis must include:

- legal question
- jurisdiction/forum
- relevant facts
- relevant law/procedure
- application to facts
- conclusion
- uncertainty
- risks
- next action
- citations/authorities

### Document Gates

Documents must include:

- intended audience
- procedural purpose
- complete structure
- facts tied to evidence
- legal/procedural basis where relevant
- remedies/outcome requested
- unresolved gaps
- no JSON wrappers
- no generic fallback disclaimers as substitute for substance
- minimum substantive length appropriate to document type

### Acceptance Tests

- 3-page generic “complaint” fails when a full pleading/complaint pack was requested.
- JSON-looking exported content fails formatting gate.
- Draft with no evidence citations fails readiness.
- Long document with unresolved critical deadline can only be `operator_review_ready_with_critical_gap`, not execution ready.

## Milestone 9: Autonomous Case Manager Loop

### Goal

Build the central loop that manages the case from obligations rather than blindly executing phases.

### Add

- `src/case-manager/autonomous-loop.ts`
- `src/case-manager/executor.ts`
- `src/case-manager/status.ts`
- `src/case-manager/replanner.ts`
- `tests/autonomous-case-manager.test.ts`

### Loop

The loop should:

1. Load case state.
2. Generate/update obligations.
3. Select ready obligations.
4. Execute safe work autonomously.
5. Validate outputs.
6. Promote work products if gates pass.
7. Update case state.
8. Create Hermes questions for blockers.
9. Pause only when blocked by missing critical user input, budget/provider failure, safety, or external approval.
10. Resume from exact obligation.

### Required Behavior

- It must not ask the user to review every small internal artifact.
- It must continue around non-critical gaps.
- It must not export or label junk as review-ready.
- It must produce an honest status at all times.

### Acceptance Tests

- Can start from raw evidence and create chronology/evidence matrix obligations.
- Can block on one critical missing date while continuing independent research.
- Can resume after user answer.
- Can detect a failed work product and retry that obligation only.
- Can complete to a managed-state status without rerunning completed work.

## Milestone 10: Email And External Action Control

### Goal

Support litigation management and Hermes automation around emails and external actions.

### Add

- `src/communications/email-ingest.ts`
- `src/communications/email-draft.ts`
- `src/communications/email-triage.ts`
- `src/external-actions/schema.ts`
- `src/external-actions/gate.ts`
- `tests/communications.test.ts`

### Allowed Autonomously

- ingest email
- summarize email
- extract deadlines
- update case state
- draft response
- prepare attachments
- create proposed action

### Requires Explicit Approval

- send email
- file court document
- submit complaint
- contact third party
- pay fee
- concede position
- withdraw claim
- accept settlement

### Acceptance Tests

- Incoming email updates case state and creates deadline.
- Harness drafts a response but does not send it.
- Explicit approval is required before external dispatch.
- Rejected external action remains archived with reason.

## Milestone 11: Durable Runtime And Recovery

### Goal

Make pause/repair/resume granular and cheap.

### Add

- `src/runtime/work-unit-ledger.ts`
- `src/runtime/recovery.ts`
- `src/runtime/orphan-reaper.ts`
- `src/runtime/checkpoint.ts`
- `tests/runtime-recovery.test.ts`

### Required Behavior

Every work unit records:

- input case-state hash
- obligation ID
- worker/run ID
- provider/model
- started/updated timestamps
- partial outputs
- applied case updates
- work products created
- questions created
- retry count
- failure reason
- cost estimate if available

On crash/restart:

- recover active work
- mark orphaned work
- preserve useful partial output
- resume from last unsatisfied obligation
- avoid rerunning satisfied obligations

### Acceptance Tests

- SIGINT saves paused checkpoint.
- Restart resumes from obligation ledger.
- Orphaned running work is reaped.
- Provider credit exhaustion pauses instead of corrupting state.
- Network stall does not mark case complete.

## Milestone 12: Provider Capability Routing

### Goal

Ensure DeepSeek-only through OpenRouter is respected, while unsupported modalities are handled deliberately.

### Add

- `src/providers/capability-matrix.ts`
- `src/providers/openrouter-provider-lock.ts`
- `src/providers/deepseek-profile.ts`
- `src/media/vision-fallback-policy.ts`
- `tests/provider-capabilities.test.ts`

### Rules

- Default reasoning/text work uses DeepSeek through OpenRouter.
- OpenRouter provider routing must force/allow only DeepSeek unless an explicit fallback is configured.
- DeepSeek image capability must not be assumed.
- If image processing is genuinely required beyond reasonable doubt, route only the image extraction step to the approved fallback, e.g. Gemma 4 31B through OpenRouter.
- Extracted image facts return to normal text/legal reasoning path.
- Tool calling, JSON mode, prompt caching, and structured output behavior must be represented in provider profile capabilities.

### Acceptance Tests

- Text work routes to DeepSeek/OpenRouter.
- Provider selection rejects non-DeepSeek providers unless explicit fallback applies.
- Image evidence does not get sent to DeepSeek if unsupported.
- Vision fallback produces extracted facts tagged with source and provider.
- JSON/tool-call fallback parser works when native support is absent or unreliable.

## Milestone 13: Review-Ready Export

### Goal

Stop `_output` from containing garbage. Export only review-ready bundles with manifest and warnings.

### Add

- `src/export/review-ready-export.ts`
- `src/export/output-manifest.ts`
- `src/export/docx-render-verify.ts`
- `tests/review-ready-export.test.ts`

### Required Output

Each export bundle should include:

- review order
- work product files
- manifest
- readiness report
- unresolved gaps report
- citation/source map
- unsafe/not-ready list
- generated timestamp and run IDs

### Required Behavior

- No work product enters `_output` unless it passed export gates.
- Exported DOCX/MD files must be human-readable.
- No JSON scaffolding, raw candidate wrappers, transcript dumps, or fallback fragments.
- If nothing is review-ready, export a status report explaining why, not fake documents.

### Acceptance Tests

- Unaccepted candidates are not exported as review-ready docs.
- Thin fallback document fails export.
- Valid memo exports with manifest and source map.
- If no docs pass, `_output` contains only a failure/readiness report.

## Milestone 14: Benchmark Replacement

### Goal

Replace activity-based benchmark success with case-management success.

### Add

- `benchmarks/full-case-management.spec.ts`
- `benchmarks/fixtures/generic-expectations.json`
- `benchmarks/assertions/case-management.ts`

### Benchmark Must Fail Unless It Produces

- authoritative case state
- pending questions where facts are missing
- chronology
- evidence matrix
- issue map
- legal research memo
- procedural route memo
- merits/risk memo
- at least one substantial draft document if enough information exists
- hostile review
- handoff report
- no false completion
- no junk `_output`
- no generated work product treated as primary evidence
- recovery behavior under interruption

### Metrics

- legal depth
- factual grounding
- citation coverage
- deadline detection
- question quality
- document usefulness
- recovery correctness
- provider compliance
- cost
- time
- concurrency stability

## Case Recovery Path

Do not rerun the whole matter until the milestones above are implemented enough to avoid another wasteful run.

When ready:

1. Import existing useful candidates into case state as unverified/supporting work.
2. Mark prior `_output` as failed/export-junk.
3. Generate missing question queue.
4. Produce authoritative chronology.
5. Produce evidence matrix.
6. Produce issue map.
7. Produce legal/procedural research memo.
8. Produce procedural route memo covering relevant legal avenues.
9. Produce merits/risk memo.
10. Produce document set only after analysis passes gates.
11. Hostile review.
12. Export review-ready bundle.

The case must not be called complete unless those outputs exist or are explicitly marked not applicable with reasons.

## Implementation Sequence

Build in this order:

1. Case state schema/store
2. Typed work products and readiness levels
3. Obligation engine
4. Hermes question queue
5. Hermes protocol
6. Evidence/claim grounding
7. Deadline engine
8. Legal/document quality gates
9. Autonomous case manager loop
10. Email/external action control
11. Durable work-unit recovery
12. Provider capability routing
13. Review-ready export
14. Benchmark replacement
15. Case recovery run

Do not spend more money on full autonomous runs before at least milestones 1-4 and 8 are working. Otherwise the harness will continue to confuse activity with progress.

## Definition Of Done

The harness is working for its intended purpose only when all of this is true:

- Hermes can manage a case without the user touching CLI internals.
- Harness asks targeted missing-info questions through Hermes.
- Harness resumes after answers without restarting completed work.
- Harness produces substantial, legally meaningful work products.
- Harness tracks deadlines, risks, unresolved facts, and next actions.
- Harness can draft emails and documents safely.
- Harness never sends/files/submits without explicit approval.
- Harness never exports junk as review-ready.
- Harness can pause, repair, and resume after provider/network/process failures.
- Harness can run at 15 max concurrency without corrupting state.
- Harness can explain what is done, missing, blocked, unsafe, and ready.
- Benchmark success requires accepted work products and review-ready documents, not task counts.

## Immediate Next Agent Task

The next implementation agent should start with Milestone 1 and Milestone 2 only.

Recommended first PR scope:

1. Add case state schema/store/mutations.
2. Add typed work product schema/store/validators.
3. Add readiness levels.
4. Add importer that reads existing candidates as unverified support.
5. Add tests proving generated drafts cannot become primary evidence or accepted legal work.

Do not touch orchestration prompts first. Prompts are not the root problem. The root problem is absence of a durable case-state and work-product contract.
