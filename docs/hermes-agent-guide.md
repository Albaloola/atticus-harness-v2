# Hermes Agent Guide

This guide tells Hermes how to operate Atticus Harness V2 as intended. Hermes is the operator-facing agent. The harness is the legal case-management engine. For case work, Hermes should route requests into the harness instead of trying to rebuild the case itself.

## Core Rule

Hermes should treat the harness main orchestrator as the system of record for each case.

Use the harness to:

- ingest and search evidence
- run investigation and legal analysis
- produce drafts, emails, communications, task lists, reports, and case documents
- verify citations and run gates
- accept or reject candidates according to policy
- inspect status, events, dashboard state, settings, and checkpoints
- resume case work after compaction or reset

Hermes can summarize, supervise, and relay operator instructions, but the case content should come from the harness whenever the request concerns an existing matter.

## Safety Boundary

The harness may prepare external communications and filing material, but it must not send, file, serve, pay, submit, or contact anyone externally.

Emails, letters, notices, forms, filing documents, and similar outputs are prepare-only candidates until the operator takes external action.

## First-Time Setup

Run this once on a new machine or profile:

```bash
cd /home/alba/atticus-harness-v2
npm run setup
harness config init
harness secrets set OPENROUTER_API_KEY <key>
harness policy preset operator-safe
```

Check setup:

```bash
harness config show --json
harness policy show --json
harness daemon status --json
```

Never print or paste secret values into chat, logs, events, or documents.

## Starting a Matter

Create the matter:

```bash
harness init <matter-name>
```

Ingest all available evidence:

```bash
harness ingest <matter-name> <path-to-file-or-folder>
harness evidence <matter-name>
harness search <matter-name> "<important phrase>"
```

After ingest, check state:

```bash
harness status <matter-name> --json
harness events <matter-name> --tail 50 --json
```

If evidence has no extracted text, do not assume the harness knows it. Re-ingest, OCR, or ask the operator for the readable source.

## Running Investigation and Analysis

Use hierarchical orchestration for the main legal work:

```bash
harness orchestrate <matter-name> --objective "<case objective>" --json
```

Use background mode for long runs:

```bash
harness orchestrate <matter-name> --objective "<case objective>" --background --json
harness watch <matter-name>
```

Hermes should inspect progress without interrupting active inference:

```bash
harness status <matter-name> --json
harness events <matter-name> --tail 100 --json
harness case resume <matter-name> --json
```

Do not rerun full orchestration just because the operator asks for a follow-up email, task, or document. Use the case-management lane below.

## Ongoing Case Management

After the main investigation or analysis exists, Hermes should send follow-up instructions to the main orchestrator:

```bash
harness case manage <matter-name> "<instruction>" --type <type> --source hermes --json
```

Supported types:

- `email`
- `communication`
- `task`
- `case_management`
- `draft`
- `report`

Examples:

```bash
harness case manage anfal "Draft an email to the university asking for an update on accommodation" --type email --source hermes --json
harness case manage anfal "Create tomorrow's case follow-up task list" --type task --source hermes --json
harness case manage anfal "Prepare a status report for the operator" --type report --source hermes --json
harness case manage anfal "Draft a document request to the accommodation office" --type communication --source hermes --json
```

The main orchestrator will rebuild the case from persisted memory: dashboard state, settings, autonomy policy, tool policy, acceptance settings, evidence, sources, accepted artifacts, candidate history, events, tasks, runs, and inbox messages.

This means Hermes should not ask the operator to restate the case unless the harness reports a real memory gap.

## Resuming After Compaction or Reset

When Hermes starts fresh, or after a context compaction, first inspect the persisted case memory:

```bash
harness case resume <matter-name> --json
harness case memory <matter-name> --json
harness status <matter-name> --json
```

If the orchestrator checkpoint is stale or confusing, reset only the checkpoint:

```bash
harness case reset <matter-name> --json
```

This does not delete evidence, artifacts, candidates, events, tasks, runs, inbox, or sources. It only clears the main-orchestrator checkpoint so the next instruction can be handled freshly from durable case memory.

## Candidate Review Flow

Most generation commands create candidates. Hermes should verify before asking the operator to rely on them:

```bash
harness verify <matter-name> <candidate-id>
harness gate <matter-name> <candidate-id>
harness review <matter-name> <candidate-id>
```

Manual acceptance:

```bash
harness accept manual <matter-name> <candidate-id>
```

Policy-controlled auto-acceptance:

```bash
harness accept auto <matter-name> <candidate-id> --json
```

Reject unsuitable outputs:

```bash
harness reject <matter-name> <candidate-id> --reason "<reason>"
```

Hermes should not accept prepare-only external communications as sent. Acceptance means the artifact is ready for operator review/use inside the matter, not that anything external happened.

## Autonomy Settings

Use policy presets deliberately:

```bash
harness policy preset operator-safe
harness policy preset auto-internal
harness policy preset auto-accept-gated
harness policy preset full-local-autonomy
```

Recommended default:

```bash
harness policy preset operator-safe
```

Use `auto-accept-gated` only when the operator wants local candidate promotion after gates pass:

```bash
harness policy preset auto-accept-gated
harness case manage <matter-name> "<instruction>" --type draft --auto-accept --json
```

External dispatch remains prepare-only in every preset.

## Dashboard and Status Control

Hermes should use machine-readable commands whenever possible:

```bash
harness status <matter-name> --json
harness case resume <matter-name> --json
harness events <matter-name> --tail 100 --json
harness inbox <matter-name> list --json
harness schedule list <matter-name> --json
harness daemon status --json
```

Use the dashboard to decide whether the case is active, paused, blocked, waiting on evidence, waiting on review, or ready for operator handoff.

## Research and Sources

For public sources, fetch and snapshot them through the harness:

```bash
harness source search <matter-name> "<query>" --json
harness source fetch <matter-name> <url> --json
harness source list <matter-name> --json
```

Use stored source IDs in case outputs. Do not rely on bare URLs when the matter needs evidence-grade verification.

## Background Work and Scheduling

Start the daemon when ongoing monitoring or background work is needed:

```bash
harness daemon start
harness daemon status --json
```

Run case work in the background:

```bash
harness run <matter-name> --background
harness orchestrate <matter-name> --objective "<objective>" --background --json
harness case manage <matter-name> "<instruction>" --type report --background --json
```

Schedule recurring checks:

```bash
harness schedule create <matter-name> --cron "0 9 * * *" --prompt "Check deadlines and source updates" --recurring --durable
harness schedule list <matter-name> --json
```

Cancel or pause only when needed:

```bash
harness pause <matter-name>
harness resume <matter-name>
harness cancel <matter-name> --run <run-id>
```

## Hermes Decision Tree

1. If the operator asks about an existing case, run `harness case resume <matter-name> --json`.
2. If the operator asks for an email, reply, letter, task list, status report, or follow-up document, run `harness case manage`.
3. If the operator asks for a full new investigation or major re-analysis, run `harness orchestrate`.
4. If the operator asks whether something is ready, run `harness status`, then `verify`, `gate`, and `review` for the relevant candidate.
5. If the operator asks to promote a candidate, use `accept manual` or `accept auto` depending on policy.
6. If the case memory seems stale after compaction, run `case memory` and `case resume`; reset only the checkpoint if needed.
7. If the request would send, file, serve, pay, submit, or contact externally, stop at prepare-only output and tell the operator external action requires human execution.

## What Not To Do

- Do not draft case communications from Hermes memory alone when a matter exists.
- Do not ask the operator to repeat the case before checking `case resume` and `case memory`.
- Do not rerun full orchestration for small follow-up outputs.
- Do not bypass citation verification, gates, or hostile review for important artifacts.
- Do not expose secrets.
- Do not treat accepted prepare-only artifacts as sent, filed, served, or submitted.
- Do not delete matter state to recover from orchestrator confusion; use `harness case reset`.

## Minimum Correct Loop

For most case follow-ups, Hermes should do this:

```bash
harness case resume <matter-name> --json
harness case manage <matter-name> "<operator instruction>" --type <type> --source hermes --json
harness verify <matter-name> <candidate-id>
harness gate <matter-name> <candidate-id>
harness review <matter-name> <candidate-id>
```

Then report the candidate ID, summary, risks, and next operator action.

