# Harness v2 - Legal Operations Agent CLI

Standalone terminal-native agent for legal work. Ingests evidence, runs unified agent-driven orchestration with tool-calling, drafts documents, verifies citations, manages matter workflows, schedules recurring jobs, and auto-accepts gated outputs. Built in TypeScript on Node.js.


## Current status and architecture research

Harness v2 is currently a CLI-first TypeScript legal operations agent with matter-scoped filesystem state, SQLite/JSONL audit trails, FTS5 evidence search, provider-routed tool-calling, dynamic Team-Based Agentic Architecture (specialized Intake, Evidence, Analysis, Communications, Litigation, and Review teams), smart gap analysis, document output pipeline, source snapshotting, citation verification, quality gates, review quorum, reducer packets, fenced task leases, fail-closed provider policy, migration registry, daemon scheduling, read-only control-panel/monitor commands, 900+ bundled legal/writing skills, and harness-owned Scotland court corpora.

The newer case-management layer adds persistent case state, obligations, structured questions for missing information, agent command packets, prepare-only communications, external-action approval gates, durable runtime work-unit recovery, DeepSeek/OpenRouter capability checks, bounded vision fallback policy, and review-ready export contracts. The design goal is that an external agent (such as Atticus/OpenClaw) can manage an active case through Harness without asking the operator to supervise internal tasks, while still refusing to send, file, serve, pay, or contact externally without explicit human action.

The architecture papers now separate the legacy control-plane reference from the current TypeScript agent architecture:

- [Atticus Harness V1 Architecture Research Paper](docs/architecture-v1-research-paper.md)
- [Atticus Harness V2 Architecture Research Paper](docs/architecture-v2-research-paper.md)

## Quick Install

```bash
git clone <repo-url> atticus-harness-v2
cd atticus-harness-v2
npm run setup
```

The setup script installs dependencies, builds, checks system tools, and registers the `harness` command globally.

### Prerequisites

| Tool | Required | Purpose |
|------|----------|---------|
| Node.js 18+ | Yes | Runtime |
| npm | Yes | Package management |
| `pdftotext` | Yes | PDF text extraction |
| `pdfinfo` | Yes | PDF metadata |
| `pdftoppm` | For OCR | Renders PDF pages to images |
| `tesseract` | For OCR | Image text recognition |
| `libreoffice` | For .doc | Legacy Word document conversion |

On Debian/Ubuntu:
```bash
sudo apt install poppler-utils tesseract-ocr libreoffice
```

### Set your API key

```bash
# Using the new config system (recommended)
harness config init
harness secrets set OPENROUTER_API_KEY sk-or-v1-...

# Or via environment variable (legacy)
export OPENROUTER_API_KEY=sk-or-v1-...
```

Harness defaults to DeepSeek through OpenRouter for legal reasoning, but the
provider layer is provider-agnostic. Select provider profiles with
`harness provider select <profile>` and inspect the active model roles with
`harness provider show`. Built-in profiles cover OpenRouter/DeepSeek, direct
DeepSeek, Anthropic OAuth/API key, OpenAI API key, OpenRouter custom,
local/Ollama, and delegated Codex SDK. Codex is supported through the
`codex-sdk` profile; it is not the default provider lane.

For the default `openrouter-deepseek` lane, OpenRouter provider routing must stay
pinned to DeepSeek with fallbacks disabled. DeepSeek is treated as a text/file
reasoning provider; the Harness must not send image/audio/video inputs to it. If
image processing is genuinely required beyond reasonable doubt, the only
approved non-DeepSeek escape hatch for that default lane is a bounded OpenRouter
Gemma vision step for image extraction only. Extracted image facts must be
written back to case state, then legal reasoning continues through the active
provider profile, which is DeepSeek by default unless the operator selected a
different supported provider.

Model-role edits are guarded by the active provider profile. Direct provider
profiles reject incompatible model ids instead of silently sending them to the
wrong API; use `openrouter-custom` when the intent is to route a mixed-provider
model id through OpenRouter.

Reasoning is also provider-profile driven. A single global or matter-level
`reasoningEffort` override (`none`, `minimal`, `low`, `medium`, `high`, or
`xhigh`) is translated into the selected provider's native control: OpenAI Chat
Completions get `reasoning_effort`, OpenRouter gets nested `reasoning`,
DeepSeek direct gets `thinking` plus DeepSeek's `reasoning_effort`, Anthropic
gets `thinking` budgets or adaptive thinking where required, Codex SDK gets
`modelReasoningEffort`, and local/model-routing profiles do not receive an
invented provider parameter. Configure the global setting with
`harness control-panel reasoning set <effort>` or reset to provider defaults
with `harness control-panel reasoning reset`.

DeepSeek is configurable rather than forced to maximum. OpenRouter DeepSeek ids
receive the requested `reasoning.effort` value. Direct DeepSeek maps Harness
levels to DeepSeek's native `high`/`max` controls (`xhigh` becomes `max`; lower
thinking efforts become `high`), and `none` disables direct DeepSeek thinking.

### Configure autonomy and policies

```bash
harness policy show                     # View current policy
harness policy preset operator-safe     # Maximum safety (default)
harness policy preset auto-internal     # Auto-approve internal tool use
harness policy preset auto-accept-gated # Auto-accept after gates pass
harness policy preset full-local-autonomy  # Full autonomy (prepare-only output)
```

Agent operators must treat the examples below as general operator/Harness CLI
examples, not as an execution allowlist. Agent direct execution is
limited to the no-write inspection and briefing runbook in the
[Agent Guide](#agent-guide-openclaw--atticus) section; all mutating,
repairing, or long-running commands must be briefed to the Lead Counsel Orchestrator or escalated as a
bug report. Briefing the Lead Counsel Orchestrator is the operator workflow surface, not a provider
selection instruction. The Harness remains provider-agnostic and the active
Harness provider profile decides the model lane unless the operator explicitly
asks to change or test a provider.

## Usage

### Matter lifecycle

```bash
harness init my-case                           # Create a new matter
harness status my-case                         # Show matter state and next actions
harness status my-case --json                  # Machine-readable status
harness events my-case --tail 100 --follow     # Tail event log
harness watch my-case                          # Watch matter progress in real time
```

### Evidence ingestion and search

```bash
harness ingest my-case ~/documents/contract.pdf   # Ingest and OCR a document
harness evidence my-case                           # List evidence index
harness evidence my-case --filter pdf              # Filter by format
harness search my-case "tenancy agreement"         # Full-text FTS5 search
```

### Agentic loop

```bash
harness run my-case                              # Run agent loop
harness run my-case --skill contract-review      # Load a specific skill
harness run my-case --quiet                      # Suppress verbose output
harness run my-case --background                 # Run asynchronously
```

### Team-Based Agentic Orchestration

```bash
harness orchestrate my-case --objective "Analyze housing disrepair claim"
harness orchestrate my-case --objective "..." --max-depth 3 --concurrency 15
harness orchestrate my-case --background --json
harness orchestrate my-case --objective "..." --force --json
```

The orchestrator is a unified agent-driven loop (`UnifiedMasterOrchestrator`) that replaces the former rigid phase-based split design with a Lead Counsel Orchestrator. It wraps a single long-lived QueryLoop agent with orchestration tools (`delegate_task`, `submit_matter_outcome`), full harness editing authority (read/write/edit files, bash, grep, SQLite), and provider-agnostic JSON retry. The Lead Counsel delegates tasks dynamically to specialized legal teams (Intake, Evidence, Analysis, Communications, Litigation, and Review) via a dynamic task queue. Fact gathering and extraction are recorded into a global SQLite "Source of Truth" living chronology. 

To ensure complete reliability across different LLM providers, the harness strictly enforces native tool calling via `submit_matter_outcome` for task completion, avoiding brittle raw JSON blocks or text parsing.

Smart gap analysis runs before production work. Existing fresh accepted artifacts satisfy matching requirements, stale work is flagged, and missing deliverables are produced. Use `--force` only when you intentionally want to reproduce existing deliverables.

### Smart gap analysis and document output pipeline

The document output pipeline turns reducer-accepted artifacts and accepted candidates into human-friendly files under `matters/<matter>/_output/`. It classifies the requested output as a letter, email, form, report, action plan, script, or reference guide, strips common AI prose artifacts, writes `.docx` or `.txt` files, archives superseded outputs, and records everything in `_output/manifest.json`.

```bash
harness export documents my-case --json
harness export documents my-case --objective "Produce a polished report for the operator" --json
harness export documents my-case --objective "Produce the exact ScotCourts witness statement form" --scotcourts-source-dir legal-corpora/scotcourts --json
harness export documents my-case --objective "Produce the exact ScotCourts witness statement form" --allow-remote-forms --json
```

The orchestrator can also choose the document output pipeline contract when it calls `run_phase`. If an exact official form is requested, the output pipeline searches the local ScotCourts corpus first. If remote form lookup is explicitly allowed, it may download a matching official ScotCourts form into `_output/forms/`. If no exact form source can be resolved, the pipeline reports a blocker instead of inventing a generic substitute. All outputs remain prepare-only.

### Ongoing case management

```bash
harness case manage my-case "Draft an email to the university asking for an update" --type email
harness case manage my-case "Create tomorrow's follow-up task list" --type task --json
harness case memory my-case --json
harness case resume my-case --json
harness case reset my-case
```

Agent implementations (supporting Atticus, OpenClaw, etc.) should treat these as Lead Counsel Orchestrator command templates, not as
permission to mutate the Harness directly. Case-related emails, communications,
task lists, status reports, and follow-up documents go through
`harness case manage`; the agent inspects read-only state, briefs the Lead Counsel Orchestrator to execute
the mutating command, and reports the result.

The case-management implementation is stateful rather than phase-only. It
persists case state, legal/factual obligations, missing-information questions,
work-product references, communications, proposed external actions, and runtime
work units. A follow-up should resume from persisted obligations and work-unit
ledger entries instead of restarting the case. If provider credit, network
stall, interruption, or orphaned worker state is detected, recovery should pause
or resume from the last checkpoint.

The Lead Counsel Orchestrator rebuilds the case from persisted matter memory,
dashboard/status, accepted artifacts, candidate history, evidence, sources,
inbox, tasks, runs, autonomy policy, tool policy, and acceptance settings. It
produces prepare-only candidates; it does not send, file, serve, or contact
externally.

Before running LLM-backed case work, agents should check provider readiness with
`harness control-panel status --json`. Missing or rejected auth is a setup error:
do not fall back silently or start a partial run. Accepted artifacts are also
governed by reducer-only promotion; the Lead Counsel Orchestrator should use `harness accept manual` or
`harness accept auto` after the agent briefs the action. The agent must never write
directly to `_artifacts`.

Codex/ChatGPT-authenticated local runs use the `codex-sdk` provider. Authenticate
outside the harness with `codex login`; do not paste `CODEX_TOKEN` or Codex cache
contents into Harness secrets. The Codex SDK profile runs as a native Codex
agent with workspace-write sandboxing, network/web search enabled, and Harness
tools exposed through an internal MCP server:
`harness run <matter> --provider codex-sdk`. Use `--no-tools` only when you want
a deliberately tool-free Codex run.

Harness can also act as an MCP client. Configure stdio, Streamable HTTP, or SSE
servers under `mcp.servers`; remote tools are registered as
`mcp__<server>__<tool>` and remain governed by the normal tool policy. Codex and
Claude-style plugins are discovered from configured plugin directories, project
plugin folders, and the Codex plugin cache; plugin skills are namespaced as
`<plugin>:<skill>`, and plugin MCP servers are exposed through the same MCP tool
bridge. Inspect the loaded plugin and MCP surface with:

```bash
harness plugin list
harness mcp list --tools
```

Agent implementations (like Atticus or OpenClaw) must follow the read-only/briefing runbook in the
[Agent Guide](#agent-guide-openclaw--atticus) section.

### Agent integration surface

Agent/OpenClaw integrations should prefer the structured protocol in
[`.agent/agent-harness-protocol.md`](.agent/agent-harness-protocol.md) over
filesystem edits. The implementation entry point is `executeAgentCommand` in
`src/agent-protocol/commands.ts`; it returns status packets, pending questions,
diagnostics, draft identifiers, external-action identifiers, and plain-English
messages for the operator.

### Updating the Agent prompts

Use the prompt pack in [`.agent/prompts/`](.agent/prompts/) as the install
source for your agent. The old numbered prompts `01` through `08` are historical
Harness implementation prompts; do not install them as the live Agent prompt.

There is no hidden automatic installer in this repository that can safely modify
an external Agent. Updating the Agent configuration means mirroring these files:

1. Pull the latest Harness repository on the machine where the Agent can read it:

   ```bash
   cd /home/alba/atticus-harness-v2
   git pull origin main
   npm install
   npm run build
   ```

2. Replace or update the main system prompt with:

   ```text
   /home/alba/atticus-harness-v2/.agent/prompts/09-agent-system-prompt.md
   ```

3. Add the Lead Counsel Orchestrator handoff template from:

   ```text
   /home/alba/atticus-harness-v2/.agent/prompts/10-unified-master-orchestrator-handoff-template.md
   ```

   The agent should use this whenever the operator asks for mutating Harness work:
   orchestration, case management, ingestion, drafting, export, recovery,
   provider repair, acceptance, rejection, verification, or review.

4. Update the agent skills and runbooks using:

   ```text
   /home/alba/atticus-harness-v2/.agent/prompts/11-agent-skill-update-checklist.md
   ```

   The agent must have, at minimum, these skill surfaces:

   - `case-status`: inspect `case resume`, `agent-packet`, and recent events.
   - `missing-information`: ask exact Harness pending questions and submit
     answers back through Harness/Agent protocol.
   - `communications`: ingest received emails and request prepare-only replies.
   - `external-actions`: approve/reject/record external actions only from human
     instruction and Harness state.
   - `recovery`: detect stuck runs, provider credit/network stalls, stale
     leases, orphaned tasks, and brief the Lead Counsel Orchestrator to pause/repair/resume.
   - `provider-readiness`: inspect the active provider profile and capability
     matrix; keep the default OpenRouter profile DeepSeek-only.
   - `review-ready-export`: require manifest, source map, quality/readability
     gate, and blockers before presenting documents as useful legal output.

5. Ensure the agent can run only the no-write inspection commands documented in the
   [Agent Guide](#agent-guide-openclaw--atticus) section. Mutating commands
   must be briefed to the Lead Counsel Orchestrator, not executed directly.

6. Smoke-test the agent with an existing matter. It should inspect state before
   answering and should not start duplicate long-running work:

   ```bash
   harness case resume <matter-name> --json
   harness control-panel agent-packet <matter-name> --json
   harness events <matter-name> --tail 100 --json
   harness provider show --json
   ```

7. Ask these checks after updating:

   - "What is the current status of `<matter-name>`?"
   - "What question does Harness need me to answer next?"
   - "Draft a follow-up email for `<matter-name>`."
   - "The run looks stuck; what should happen next?"
   - "Can DeepSeek process images in the default profile?"

   Correct behavior: The agent inspects state, asks only Harness-surfaced missing
   questions, briefs the Lead Counsel Orchestrator for mutating work, preserves prepare-only external
   action limits, and says DeepSeek is text/file only in the default Harness
   capability policy.

The agent must keep its own skills/runbooks aligned with these Harness capabilities:

- Case-status skill: inspect case state, obligations, pending questions,
  blockers, and next safe actions.
- Question-answer skill: ask the operator only for material missing information,
  then submit structured answers so blocked obligations can resume.
- Communication skill: ingest received emails, draft replies as work products,
  and create proposed external actions without sending.
- External-action skill: require explicit approval before recording any sent
  email, filing, complaint submission, payment, concession, withdrawal, or
  third-party contact.
- Recovery skill: detect provider-credit exhaustion, network stalls,
  interrupted runs, and orphaned workers; pause for repair or resume from the
  work-unit ledger rather than restarting.
- Provider skill: verify the active provider profile and capability matrix. For
  the default `openrouter-deepseek` profile, verify DeepSeek-only routing,
  fallback denial, JSON/tool-calling assumptions, and the narrow Gemma vision
  extraction exception.
- Export skill: request review-ready outputs only after work products are at
  least `operator_review_ready`; report manifest/source-map paths and blockers
  instead of presenting raw `_output` files as useful legal documents.

### Draft, verify, review, gate

```bash
harness draft my-case "Draft a letter disputing the rent arrears"
harness verify my-case draft-1234567890          # Verify citations
harness gate my-case draft-1234567890            # Run quality gates
harness review my-case draft-1234567890          # Hostile adversarial review
```

### Accept or reject

```bash
harness accept manual my-case draft-1234567890   # Manual accept
harness accept auto my-case draft-1234567890     # Auto-accept (respects policy)
harness reject my-case draft-1234567890 --reason "needs more citations"
```

### Source research

```bash
harness source search my-case "Housing Act 1988 section 21"   # Search web sources
harness source search my-case "prorogation UKSC 41" --include-domain caselaw.nationalarchives.gov.uk --json
harness source fetch my-case https://example.com/statute      # Fetch and snapshot a URL
harness source list my-case                                    # List stored sources
```

`source search` uses the control-panel search provider. Tavily is the default
legal web search backend; Brave Search can be selected as a fallback or generic
endpoint provider. `source fetch` stores hashed snapshots under the matter so
later verification works from saved text, not bare URLs.

Beginner setup:

```bash
harness control-panel search auth <tavily-key>
harness control-panel search enable
harness control-panel search --json
```

To use Brave Search instead:

```bash
harness control-panel search auth --provider brave <brave-key>
harness control-panel search use brave
harness control-panel search enable
```

Environment-variable equivalents are `TAVILY_API_KEY`,
`BRAVE_SEARCH_API_KEY`, `SEARCH_PROVIDER=brave`, and
`SEARCH_ENDPOINT=https://api.search.brave.com/res/v1/web/search`.

### Scotland court corpora

The broad ScotCourts corpus is copied into the harness under
`legal-corpora/scotcourts`. It contains Scotland court forms, civil and criminal
procedure rules, and court guidance across sheriff court, sheriff appeal, Court
of Session, and criminal procedure categories. Form originals stay in their
official file formats. Rules/procedure/guidance materials are normalised to
Markdown for text-native retrieval. Court of Session rules live inside the broad
corpus at `legal-corpora/scotcourts/court-of-session-rules`; the
`court-session` commands and `atticus-court-of-session-rules` skill are focused
access surfaces over that category, not a second physical corpus.

Models must not load the whole Scotland corpus into prompt context. Use the
metadata index and scoped `search`/`context` commands to select a small ranked
shortlist, then open or extract only the specific documents needed for the task.

```bash
harness rules scotcourts list --limit 20 --json
harness rules scotcourts search "simple procedure claim form" --phase document_production --json
harness rules scotcourts context "ordinary cause defences sheriff court" --phase procedural_route_planning
harness rules scotcourts index --json
harness rules scotcourts normalize --json

harness rules sheriff-court list --json
harness rules sheriff-court search "ordinary cause defences sheriff court" --phase procedural_route_planning --json
harness rules sheriff-court context "simple procedure claim response" --phase document_production

harness rules court-session list --json
harness rules court-session search "judicial review petition time limit" --phase procedural_route_planning --json
harness rules court-session context "productions recovery proof" --phase evidence_ingestion_and_fact_extraction
harness rules court-session index --json
harness rules court-session normalize --json
```

`list`, `search`, and `context` are no-write lookup commands. The ScotCourts
`index` command writes the shared metadata cache at
`.atticus/rules/scotcourts-corpus.index.json`; add `--extract-text
--max-text-docs <n>` only for a deliberately bounded text cache. The Court of
Session `index` command is a focused wrapper over the same ScotCourts cache: it
refreshes ScotCourts metadata and extracts text only for Court of Session rule
documents. The `normalize` commands are mutating maintenance commands: they
convert rules/procedure originals to Markdown and delete only successfully
converted non-form originals.

Scots workflow phases automatically add `atticus-scotcourts-corpus` and focused
`atticus-sheriff-court-rules` / `atticus-court-of-session-rules` skill context
so procedural route planning, drafting, verification, proof/evidence work,
bundle checks, operator handoff, and the document output pipeline receive only the
relevant local document shortlist. Exact official form output uses the same
corpus before falling back to an explicitly enabled remote official form lookup.

### Scheduling

```bash
harness schedule create my-case --cron "0 9 * * *" --prompt "Check deadlines"
harness schedule create my-case --cron "0 */6 * * *" --prompt "..." --recurring --durable
harness schedule list my-case --json
harness schedule delete my-case <job-id>
```

Scheduler and task execution use durable leases with owner, heartbeat, expiry, blocked-reason, and fencing-token metadata so stale background workers cannot silently overwrite newer work.

### Daemon and control-panel commands

```bash
harness daemon start                  # Start background daemon
harness daemon status --json          # Check daemon status
harness daemon stop                   # Stop daemon
harness control-panel status my-case  # Read-only operator control panel
harness control-panel agent-packet my-case --json # Agent handoff packet
harness monitor my-case               # Control-panel status alias
harness pause my-case                 # Pause active run
harness resume my-case                # Resume paused run
harness cancel my-case --run <run-id> # Cancel a run
```

### Configuration

```bash
harness config show                   # View merged configuration
harness config show my-case --json    # With matter overrides
harness config init --force           # Reset to defaults
harness config set defaultModel deepseek/deepseek-v4-pro
harness secrets set OPENROUTER_API_KEY sk-or-v1-...
harness policy show --json
harness policy set autonomy.maxAgentDepth 5
harness policy set autonomy.gateFeedback.maxWorkerRetries 5
```

### Skills

```bash
harness skill list                         # List all skills
harness skill use contract-review-anthropic  # Display a skill's prompt
```

## Workflow

```
init → ingest (×N) → search → run/orchestrate → draft → verify → gate → review → accept → export documents
```

For full orchestration:
```
orchestrate → [intake → evidence → issue-spot → research → merits → procedure → draft → verify → bundle → handoff → output]
               └── master → mini-orchestrators → workers (parallel, depth-limited)
```

## Architecture

For the legacy safety reference, see [the V1 architecture paper](docs/architecture-v1-research-paper.md). For the current TypeScript CLI architecture, governance model, and diagrams, see [the V2 architecture paper](docs/architecture-v2-research-paper.md). The summary below describes the current V2 repository layout.

```
src/
├── cli.ts              # Commander entry point (30+ commands)
├── agent/              # QueryLoop + AgentLoop wrapper + structured results
├── commands/           # Command handlers
├── config/             # Global control panel (providers, autonomy, secrets, fail-closed provider policy)
├── state/              # Event-sourced matter store (SQLite + JSONL, leases, reducer packets, migrations)
├── orchestration/      # Master → Mini → Worker hierarchical pipeline
├── scheduler/          # 5-field cron parser + leased scheduled job loop
├── daemon/             # Background process manager, supervisor, control queue
├── research/           # Web search/fetch, source snapshots, citation verification
├── rules/              # Local legal rule corpus discovery, indexing, search, and prompt context
├── export/             # Prepare-only bundles and document output pipeline
├── legal/              # Team-based agentic workflow, 25 artifact types, templates, skills router
├── acceptance/         # 10-gate scoring, auto-acceptance, review quorum
├── reducer/            # Reducer packets + canonical writer boundary
├── extraction/         # PDF/DOCX/DOC/image/text extraction pipeline
├── llm/                # Provider clients (OpenAI-compatible, Anthropic, Codex SDK)
├── storage/            # Flat-file matter storage + SQLite FTS5 evidence store
├── tools/              # Policy-aware tools registered for agent use
├── types/              # Shared TypeScript interfaces
├── skills/             # SKILL.md parser and loader
└── permissions/        # Approval decision engine (plan)
skills/                 # 900+ bundled SKILL.md files
legal-corpora/          # Harness-owned local legal corpora, including broad ScotCourts forms and Markdown rule/procedure corpora
tests/                  # Unit coverage for CLI, state, tools, orchestration, extraction
```

### Key architecture principles

- **Event-sourced**: Every agent thought, tool call, candidate, gate, reviewer result, source snapshot, reducer decision, lease transition, and acceptance decision is recorded as an event or durable state row. Status is derived from state, not inferred from model output.
- **Hierarchical**: Unified Master Orchestrator wraps a single long-lived QueryLoop agent with orchestration tools (`run_phase`, `get_orchestration_state`) and full harness editing authority. The agent controls mini-orchestrator spawns, inspects worker output, and coordinates phases across the legal workflow stages. Depth-limited recursion with configurable concurrency.
- **Autonomy-configurable**: Safety is policy, not hard-coded. Five autonomy modes from `operator_safe` to `full_local_autonomy`. External dispatch is always prepare-only in this version.
- **Daemon-capable, CLI-controlled**: Run work asynchronously, inspect state without interrupting inference, and use `control-panel`/`monitor` for read-only supervision.
- **Reducer-governed**: Candidate artifacts cross an explicit reducer packet and canonical writer boundary before becoming accepted artifacts.
- **Lease-fenced**: Tasks and scheduler jobs use durable leases, heartbeats, expiry, blocked reasons, and fencing tokens to protect concurrent/background execution.
- **Fail-closed provider policy**: Provider/model routes require explicit allow-list configuration; silent fallback, denied models, and unknown routes are rejected by default.
- **Migration-registered**: State schema evolution is represented in versioned migration registries and schema records.

## Development

```bash
npm run build        # Compile TypeScript
npm run lint         # Type-check (tsc --noEmit)
npm test             # Run tests (vitest)
npm run dev          # Watch mode
```

## What it does

- ✅ CLI-first, daemon-capable, event-sourced legal orchestration
- ✅ Unified master orchestrator (agent-driven, self-healing) replacing the former split design
- ✅ Mini-orchestrator → worker hierarchical pipeline with orchestrator oversight
- ✅ Smart gap analysis that skips fresh existing deliverables unless `--force` is used
- ✅ Scheduled recurring/one-shot jobs with cron expressions
- ✅ Non-interrupting status snapshots and event streaming
- ✅ Evidence-grade web research with source snapshots and citation verification
- ✅ Harness-owned Scotland court corpora with stage/skill-scoped lookup
- ✅ Team-based dynamic legal workflow (intake through document output)
- ✅ Court-ready human-friendly `.docx`/`.txt` output with official form source checks
- ✅ 10-gate quality scoring with policy-controlled auto-acceptance
- ✅ Review quorum with hostile reviewer agent
- ✅ 900+ bundled legal and writing skills, including UK/Scots refined skills
- ✅ SQLite + JSONL dual persistence for audit trails
- ✅ Reducer packets and canonical writer boundary for accepted artifacts
- ✅ Task and scheduler leases with fencing tokens, heartbeat/expiry tracking, and blocked reasons
- ✅ Fail-closed provider policy with explicit allow/deny model routing and no silent fallback
- ✅ MCP client tools and Codex/Claude-style plugin discovery
- ✅ State migration registry and read-only control-panel/monitor snapshots

## What it doesn't do

- No web UI - operator supervision remains CLI-first through status, watch, control-panel, and monitor commands
- No external legal dispatch - all outputs are prepare-only
- No cloud bridge, no remote sessions
- No plugin marketplace install UI

## Recent Architecture Changes

### Lead Counsel & Team-Based Agentic Architecture (2026-05-19)

Replaced the rigid, linear 11-phase pipeline with a dynamic **Team-Based Agentic Architecture** modeled after a real-world law firm:

- **Lead Counsel Orchestrator**: Replaced the sequential phase loops in `UnifiedMasterOrchestrator` with a long-lived Lead Counsel agent managing a dynamic task queue.
- **Task Delegation**: The Lead Counsel uses a `delegate_task` tool to spawn constrained, localized `QueryLoop` instances for specialized legal teams (`Intake`, `Evidence`, `Analysis`, `Communications`, `Litigation`, `Review`).
- **Living Chronology**: Fact gathering and case timeline updates are written globally to a shared `chronology_events` SQLite database, establishing a unified Source of Truth across all sub-agents.
- **Strict Structured Outcomes**: Spawned sub-agents and the main Lead Counsel Orchestrator must terminate execution via native tool calling using `submit_matter_outcome`, which enforces strict JSON outputs and prevents token-heavy formatting failures.
- **Provider-Agnostic Retries**: Leverages a robust retry mechanism to work seamlessly across OpenAI, Anthropic, DeepSeek, local profiles, and OpenRouter without relying on fragile text block parsing.
- **Generic Agent Support (.agent)**: Renamed all `.hermes` configuration guidelines, handoff templates, and skill checklists to `.agent` to genericize integration and fully support other agents (like OpenClaw) along with Atticus/Hermes.

### Smart Gap Analysis And Document Output

The orchestrator inventories accepted artifacts, candidate history, and evidence freshness before producing new work. When existing fresh deliverables satisfy the objective, matching tasks are skipped.

The document output pipeline can infer output shape from accepted work products or accept an orchestrator-selected objective, then produce polished operator-ready files in `_output/`. Exact official form requests are source-checked against `legal-corpora/scotcourts`; missing exact forms block rather than falling back to a generic form layout.

---

## Agent Guide (OpenClaw & Atticus)

This guide is the operating contract for the operator-facing Agent (such as OpenClaw or Atticus). The Agent is not the Harness implementation agent. The Agent does not repair source code, edit config files by hand, patch matter state, or improvise around Harness failures.

The prompt artifacts that should be installed or mirrored into the Agent configuration live next to this guide under `.agent/prompts/`:

- `.agent/prompts/09-agent-system-prompt.md` is the live Agent system prompt.
- `.agent/prompts/10-unified-master-orchestrator-handoff-template.md` is the handoff brief the Agent uses for mutating Harness work.
- `.agent/prompts/11-agent-skill-update-checklist.md` is the skill/runbook update checklist.

The Agent has four jobs:

1. Understand the operator's request and map it to the correct Harness workflow.
2. Inspect persisted Harness state using commands that are documented as no-write inspection commands.
3. Ask the operator only for material missing information that Harness has surfaced as a structured pending question.
4. Brief the Lead Counsel Orchestrator to run any mutating Harness work, then report the evidence-backed result to the operator.

If the Agent finds a Harness defect, missing command, confusing state, provider problem, test failure, or any issue it cannot confidently resolve through the documented operator workflow, it must write a bug report and stop. It must not change source code to fix it.

### Non-Negotiable Boundaries

The Agent must obey these rules even when the operator is in a hurry:

- The Agent must not edit files under `src/`, `tests/`, `skills/`, `package.json`, `package-lock.json`, `README.md`, `AGENTS.md`, or other implementation docs.
- The Agent must not run source-control repair commands such as `git checkout`, `git reset`, `git clean`, rebase commands, or destructive history commands.
- The Agent must not edit matter JSON, SQLite databases, event logs, artifacts, reducer packets, task leases, checkpoints, or scheduler state by hand.
- The Agent must not bypass Harness commands by directly writing `_artifacts`, `_candidates`, `_events`, `_runs`, `_tasks`, or `.atticus-harness` files.
- The Agent must not paste, print, summarize, or store API keys, OAuth tokens, Codex session tokens, environment secrets, or secret-file contents.
- The Agent must not silently switch providers or models after an auth failure.
- The Agent must not send, file, serve, submit, pay, contact, or externally dispatch anything. Harness outputs are prepare-only until a human performs the external action.
- The Agent must not invent case facts, citations, procedural history, deadlines, evidence IDs, source IDs, candidate IDs, artifact IDs, Harness commands, CLI flags, JSON fields, provider capabilities, workflows, state transitions, or recovery behavior.
- The Agent must not start duplicate long-running case work. Always inspect status, events, and run state before briefing the Lead Counsel Orchestrator to start work.

The only repository write the Agent may make is a new Markdown bug report under `bug-reports/`. That exception exists so the Agent can preserve evidence when the Harness is broken.

### Role Model

The intended chain is:

```text
Human operator -> Agent (OpenClaw/Atticus) -> Lead Counsel Orchestrator -> Harness CLI / Agent protocol -> persisted matter state
```

The Agent is responsible for the operator conversation and supervision. The Lead Counsel Orchestrator is responsible for running mutating Harness workflows. Harness is the system of record for case state.

**Orchestrator Architecture**: The harness uses a `UnifiedMasterOrchestrator` acting as the **Lead Counsel Orchestrator**. The Lead Counsel runs as a single long-lived `QueryLoop` agent with orchestration tools (`delegate_task`, `submit_matter_outcome`), full harness editing authority, and provider-agnostic JSON retry. The agent controls task execution dynamically by delegating to specialized legal teams (Intake, Evidence, Analysis, Communications, Litigation, and Review) via a dynamic task queue, and writes facts and entities to a global SQLite "Source of Truth" (containing the living chronology, offender & party entity registers, breaches, relationship maps, and precedent case citations). There is no separate "observer" role: the Lead Counsel IS the observer.

The Lead Counsel Orchestrator also performs smart gap analysis before production work. It skips fresh existing deliverables unless `--force` is requested. Exact official form requests must resolve a local or official remote form source before output is produced.

The Agent may run no-write inspection commands directly. It must brief the Lead Counsel Orchestrator for commands that create, change, repair runtime state, accept, reject, schedule, pause, resume, cancel, reset, ingest, fetch, draft, verify, review, gate, or orchestrate.

### What Changed For Full Case Management

Harness is no longer only a batch orchestrator that runs phases and leaves files behind. It now has a case-management contract that the Agent must understand:

- `case-state`: persistent parties and entities/offenders (via `entity_add`/`entity_list`), breaches/actions (via `breach_add`/`breach_list`), relationship mapping (via `relationship_add`/`relationship_list`), precedent case citations (via `case_citation_add`/`case_citation_list`), facts, issues, deadlines, communications, work-product references, open questions, and proposed external actions.
- `case-manager`: obligations, work selection, replanning, autonomous execution records, and status packets.
- `questions`: structured missing-information prompts that the Agent can ask the operator and submit back to unblock work.
- `communications` and `external-actions`: prepare-only email drafting and approval gates for anything external.
- `runtime`: work-unit ledger, checkpoint, orphan reaper, and recovery planner for pause/repair/resume without restarting whole tasks.
- `providers` and `media`: DeepSeek/OpenRouter capability validation and bounded vision fallback policy.
- `export`: review-ready output gates, manifest/source map, and DOCX readability verification.

The Agent should treat these as the required skill surfaces to mirror in the client agent:

| Agent skill/runbook | Harness capability it must use |
| --- | --- |
| Case status and next action | `get_case_status`, `get_next_actions`, `harness case resume`, `agent-packet` |
| Missing information interview | `get_pending_questions`, `submit_user_answer` |
| Email/communication handling | `ingest_email`, `request_email_draft`, `record_received_email` |
| External action approval | `approve_external_action`, `reject_external_action`, `record_sent_email` |
| Recovery and stuck-run handling | runtime checkpoint, work-unit ledger, orphan reaper, recovery plan |
| Provider readiness | `control-panel status`, `provider show`, DeepSeek capability lock |
| Review-ready output | review-ready export manifest/source map and blockers |

The Agent should not ask the operator to manage phases manually. The Agent should ask for missing facts only when Harness reports a material question. Otherwise it should brief the Lead Counsel Orchestrator to continue the next safe obligation.

### Allowed Direct Commands

The Agent may run these commands directly because they must not change Harness business state, recovery state, leases, runs, events, schemas, config, runtime files, or matter data. If any documented inspection command is found to write state, the Agent must create a bug report and stop using that command directly.

```bash
cd /home/alba/atticus-harness-v2
harness events <matter-name> --tail 100 --json
harness case resume <matter-name> --json
harness case memory <matter-name> --json
harness control-panel status --json
harness control-panel status <matter-name> --json
harness control-panel agent-packet <matter-name> --json
harness provider list --json
harness provider show [provider-name] --json
harness provider reasoning show --json
harness control-panel provider list --json
harness control-panel model show --json
harness control-panel reasoning show --json
harness control-panel search --json
harness config show [matter-name] --json
harness policy show [matter-name] --json
harness daemon status --json
harness schedule list <matter-name> --json
harness evidence <matter-name>
harness search <matter-name> "<query>"
harness inbox <matter-name> list --json
harness source list <matter-name> --json
harness rules scotcourts list --limit 20 --json
harness rules scotcourts search "<form or procedural query>" --phase <phase-id> --json
harness rules scotcourts context "<objective>" --phase <phase-id>
harness rules sheriff-court list --json
harness rules sheriff-court search "<procedural query>" --phase <phase-id> --json
harness rules sheriff-court context "<objective>" --phase <phase-id>
harness rules court-session list --json
harness rules court-session search "<procedural query>" --phase <phase-id> --json
harness rules court-session context "<objective>" --phase <phase-id>
```

The Agent may also use ordinary shell read commands for orientation:

```bash
pwd
ls
rg "<text>" <path>
sed -n '<start>,<end>p' <file>
git status --short
```

These shell commands are for inspection only. Finding a problem in source code does not authorize the Agent to edit source code.

### Forbidden Direct Commands

The Agent must not run these directly. It should put the exact command in a brief to the Lead Counsel Orchestrator instead:

```bash
harness init <matter-name>
harness status <matter-name> --json
harness ingest <matter-name> <path>
harness run <matter-name> [...]
harness orchestrate <matter-name> [...]
harness case manage <matter-name> [...]
harness export documents <matter-name> [...]
harness case reset <matter-name> [...]
harness draft <matter-name> [...]
harness verify <matter-name> <candidate-id>
harness gate <matter-name> <candidate-id>
harness review <matter-name> <candidate-id>
harness accept manual <matter-name> <candidate-id>
harness accept auto <matter-name> <candidate-id> --json
harness reject <matter-name> <candidate-id> --reason "<reason>"
harness source search <matter-name> "<query>" --json
harness source fetch <matter-name> <url> --json
harness rules scotcourts index --json
harness rules scotcourts index --extract-text --max-text-docs <n> --json
harness rules scotcourts normalize --json
harness rules court-session index --json
harness rules court-session normalize --json
harness provider select <provider-name>
harness provider auth [...]
harness provider reset
harness control-panel provider select <provider-name>
harness control-panel provider auth [...]
harness control-panel model set <role> <model>
harness control-panel model reset
harness control-panel reasoning set <effort>
harness control-panel reasoning reset
harness control-panel search auth [...]
harness control-panel search use <tavily|brave|generic>
harness control-panel search enable
harness control-panel search disable
harness control-panel reset
harness config init [...]
harness config set <path> <value>
harness secrets set <key> <value>
harness policy set <path> <value>
harness policy preset <preset>
harness daemon start
harness daemon stop
harness daemon serve
harness pause <matter-name>
harness resume <matter-name>
harness cancel <matter-name> [...]
harness schedule create <matter-name> [...]
harness schedule delete <matter-name> <job-id>
harness watch <matter-name> [...]
harness events <matter-name> --follow [...]
```

The Agent must also not run implementation commands to repair the Harness:

```bash
npm install
npm audit fix
npm run build
npm run lint
npm test
```

If a build, lint, or test is needed to diagnose a defect, the Agent should brief the Lead Counsel Orchestrator to run it. If the Lead Counsel Orchestrator reports a failure, the Agent records it in a bug report.

### Standard Start Sequence

When the operator asks about an existing matter, the Agent should inspect before answering:

```bash
cd /home/alba/atticus-harness-v2
harness control-panel agent-packet <matter-name> --json
harness case resume <matter-name> --json
harness events <matter-name> --tail 50 --json
```

The Agent should then answer only from the inspected data. If the data is missing or contradictory, it should say what is missing and either brief the Lead Counsel Orchestrator for the next Harness action or write a bug report.

### Provider Rules

The Harness default legal-reasoning provider path is OpenRouter with DeepSeek models:

- Default provider profile: `openrouter-deepseek`
- Default fast model: `deepseek/deepseek-v4-flash`
- Default reasoning/drafting/reviewer model: `deepseek/deepseek-v4-pro`

The Agent must stay provider-agnostic in wording and behavior. For ordinary legal reasoning and drafting, preserve the active Harness provider profile; on a fresh default install, that means `openrouter-deepseek`. If the operator explicitly selects Codex SDK, direct DeepSeek, Anthropic, OpenAI-compatible/custom, local, or another supported profile, the Agent should describe and use that selected profile accurately.

For the default OpenRouter/DeepSeek lane, OpenRouter routing must be pinned to DeepSeek with provider fallbacks disabled. The Agent must treat `openrouter/auto`, free DeepSeek variants, or non-DeepSeek OpenRouter fallbacks as policy violations for that DeepSeek-only lane.

DeepSeek is text/file only in Harness capability policy. The Agent must not send image/audio/video content to DeepSeek or imply that DeepSeek can process images. If image processing is genuinely required beyond reasonable doubt while the active profile cannot process images, the Agent should brief the Lead Counsel Orchestrator for a bounded image-extraction step using the approved `openrouter-gemma-vision`/Gemma fallback policy. That fallback is not a legal reasoning provider. Extracted image facts must be returned to case state, then legal reasoning resumes on the active provider profile, which is DeepSeek by default unless the operator selected another supported profile.

Other profiles remain supported for explicit setup, testing, or operator-chosen use. The Agent must keep provider language precise and must not imply that Codex SDK replaces OpenRouter, DeepSeek, Anthropic, OpenAI-compatible/custom profiles, local profiles, or direct DeepSeek profiles. Codex SDK is supported; it is not the default.

The harness architecture is provider-agnostic: the unified orchestrator's `retryNonJson` feature works through prompt feedback rather than provider-specific API parameters (`response_format`, `outputSchema`). All supported provider profiles work with the unified orchestrator without code changes.

The Agent should brief the Lead Counsel Orchestrator as the execution supervisor, not as a provider choice. Normal briefs should ask the Lead Counsel Orchestrator to run the Harness command without adding `--provider`. The active Harness profile decides whether the run uses DeepSeek, OpenRouter, Anthropic, OpenAI-compatible/custom, local, or Codex SDK. Include `--provider <name>` only when the operator explicitly asks to use that provider, or when the task is provider setup, diagnosis, or verification.

Provider profile facts the Agent must preserve:

- The operator-selected profile controls client kind, auth method, base URL, and model-role delegation.
- Model-role edits must stay compatible with the active provider profile. Direct provider profiles fail closed on incompatible model ids; mixed-provider OpenRouter model ids belong under `openrouter-custom`.
- The operator-selected profile also controls reasoning translation. The Agent should describe the generic Harness knob as `reasoningEffort`, then preserve the provider-native strategy reported by `harness provider show --json`.
- Global reasoning effort is controlled through `harness control-panel reasoning show|set|reset`; matter-level `_config.json` can still override it for one matter.
- OpenRouter, direct DeepSeek, OpenAI-compatible/custom, and Anthropic profiles are full Harness tool-loop profiles when configured with working auth and compatible models.
- Direct DeepSeek uses the OpenAI-compatible transport with DeepSeek's own base URL and model names. Direct DeepSeek V4 thinking mode uses `thinking` plus DeepSeek's `reasoning_effort`; the Agent must not describe it as OpenRouter, OpenAI, Anthropic, or Codex behavior.
- DeepSeek reasoning is operator configurable. OpenRouter DeepSeek ids preserve the requested `reasoningEffort`; direct DeepSeek maps Harness levels onto DeepSeek's native `high`/`max` efforts and treats `none` as non-thinking mode.
- OpenAI API-key profiles use OpenAI Chat Completions `reasoning_effort`.
- OpenRouter profiles use OpenRouter's nested `reasoning` object.
- Anthropic profiles use Anthropic `thinking` controls. For newer adaptive thinking models, the Harness may use adaptive thinking instead of manual token budgets.
- Codex SDK profiles use Codex SDK `modelReasoningEffort`.
- Local/Ollama profiles do not require stored auth; tool behavior depends on the local server and selected model. The Agent must not claim a local model supports a reasoning toggle unless the configured local server/model does.
- Codex SDK is a separate delegated-auth profile with native Harness-owned tool support. `--no-tools` is the deliberate tool-free lane.

Before any LLM-backed Harness work, the Agent should inspect provider readiness:

```bash
harness control-panel status --json
harness provider list --json
harness provider show --json
```

If auth is missing, rejected, or unreachable:

1. Do not run case work.
2. Do not switch providers.
3. Do not ask the model to proceed with partial context.
4. Brief the Lead Counsel Orchestrator to handle provider setup only if the operator explicitly wants provider setup work.
5. If the failure looks like a Harness defect, write a bug report.

If provider credit is exhausted or the network stalls during a run, the Agent should not restart the case. It should brief the Lead Counsel Orchestrator to pause/recover using the runtime checkpoint and work-unit ledger, then resume incomplete obligations when the operator has repaired credit/network/config.

#### Codex SDK Provider

Codex/ChatGPT-authenticated local runs use the `codex-sdk` provider. This is a separate provider kind from OpenRouter, Anthropic, OpenAI-compatible/custom, direct DeepSeek, and local profiles.

Codex SDK facts the Agent must preserve:

- Auth is delegated to the local Codex CLI.
- The setup command is `codex login`, outside Harness secrets.
- The Agent must never paste `CODEX_TOKEN` or Codex cache contents into Harness.
- Codex SDK is native in Harness through the Codex SDK provider.
- Codex SDK can run with Harness-owned tools through the native MCP/tool bridge.
- When Codex SDK itself is the requested provider, use `--provider codex-sdk` for the native tool-capable lane.
- Use `--provider codex-sdk --no-tools` only when the operator explicitly wants a tool-free Codex run.
- Full Harness tool loops can use OpenRouter, OpenAI-compatible/custom, Anthropic, direct DeepSeek, or Codex SDK when the selected profile is configured and authenticated.
- The removed legacy profile name is `openai-codex-oauth`; the Agent must not tell anyone to use it.

Codex SDK command templates, only when the operator explicitly selects Codex SDK or the task is Codex SDK provider testing:

```bash
harness run <matter-name> --provider codex-sdk --prompt "<prompt>"
harness run <matter-name> --provider codex-sdk --no-tools --prompt "<prompt>"
```

The Agent must brief the Lead Counsel Orchestrator with the appropriate template rather than running it directly. For ordinary case work, prefer the provider-neutral Harness command and let the selected Harness provider profile decide the model lane.

### How To Brief the Lead Counsel Orchestrator

When a mutating Harness action is needed, the Agent should produce a concise brief for the Lead Counsel Orchestrator with these fields:

```text
Matter: <matter-name>
Operator request: <exact user request>
Current inspected state: <status/events/case resume summary with IDs>
Required Harness action: <one command or workflow>
Suggested command: <exact command template>
Safety constraints:
- Do not send/file/serve/contact externally.
- Preserve provider/model policy.
- Do not add `--provider` unless the operator requested a provider or the task is provider setup/diagnosis.
- Do not edit Harness source from the Agent. If the Lead Counsel Orchestrator reports a source-code defect it cannot safely repair, create a bug report.
- If the Harness command fails because of a product issue, write a bug report.
Expected output back to the Agent:
- Candidate IDs, artifact IDs, run IDs, event IDs, status, risks, next operator action.
```

The Agent should then report the Lead Counsel Orchestrator's result to the operator with the same IDs and status evidence. It must not fill in missing results from memory.

### Matter Lifecycle Map

Use this table to decide what to brief the Lead Counsel Orchestrator to do.

| Operator intent | Agent direct inspection first | Harness action to brief the Lead Counsel Orchestrator for |
| --- | --- | --- |
| New matter | `harness control-panel status --json` | `harness init <matter-name>` |
| Add evidence | `harness control-panel agent-packet <matter-name> --json` | `harness ingest <matter-name> <path>` |
| Check evidence | `harness evidence <matter-name>` and `harness search <matter-name> "<query>"` | Usually none |
| Case Orchestration | `harness control-panel agent-packet`, `harness events`, `harness case resume` | `harness orchestrate <matter-name> --objective "<objective>" --json` |
| Long Orchestration | Same as case orchestration | `harness orchestrate <matter-name> --objective "<objective>" --background --json` |
| Force full reproduction | Same as case orchestration | `harness orchestrate <matter-name> --objective "<objective>" --force --json` |
| Continue case management | `harness case resume`, pending questions, recent events | Brief the Lead Counsel Orchestrator to continue non-blocked obligations; do not restart from scratch |
| Missing user fact | `get_pending_questions` or `harness case resume` | Ask the operator the exact structured question, then brief/submit `submit_user_answer` |
| Follow-up email | `harness case resume <matter-name> --json` | `harness case manage <matter-name> "<instruction>" --type email --source agent --json` |
| Letter or communication | `harness case resume <matter-name> --json` | `harness case manage <matter-name> "<instruction>" --type communication --source agent --json` |
| Task list | `harness case resume <matter-name> --json` | `harness case manage <matter-name> "<instruction>" --type task --source agent --json` |
| Status report | `harness case resume <matter-name> --json` | `harness case manage <matter-name> "<instruction>" --type report --source agent --json` |
| Legal draft | `harness case resume <matter-name> --json` | `harness case manage <matter-name> "<instruction>" --type draft --source agent --json` |
| Candidate readiness | `harness control-panel agent-packet` and `harness events` | `harness verify`, `harness gate`, and `harness review` for the candidate |
| Promote candidate | Inspect candidate ID and gates first | `harness accept manual` or `harness accept auto` |
| Reject candidate | Inspect candidate ID and reason first | `harness reject <matter-name> <candidate-id> --reason "<reason>"` |
| Human-friendly document outputs | `harness case resume`, `harness events`, accepted candidate/artifact IDs, work-product readiness | `harness export documents <matter-name> --objective "<output request>" --json` or review-ready export once exposed |
| Exact official court form output | `harness rules scotcourts search "<form name or purpose>" --phase document_output_pipeline --json` | `harness export documents <matter-name> --objective "<exact form request>" --scotcourts-source-dir legal-corpora/scotcourts --json` |
| Stuck/interrupted run | `agent-packet`, `events`, `case resume`, daemon status | Brief the Lead Counsel Orchestrator to use runtime recovery; pause/repair/resume |
| Case memory stale | `harness case memory`, `harness case resume`, `harness events` | Only the Lead Counsel Orchestrator may run `harness case reset` if needed |
| Background progress | `harness control-panel agent-packet`, `harness events`, `harness daemon status` | Usually none |
| Schedule monitoring | `harness schedule list <matter-name> --json` | `harness schedule create` or `harness schedule delete` |
| Research source list | `harness source list <matter-name> --json` | `harness source search` or `harness source fetch` |

### Case Management Types

When briefing `harness case manage`, use exactly one type:

- `email` for prepare-only email drafts.
- `communication` for letters, notices, document requests, or message drafts.
- `task` for task lists and next-action plans.
- `case_management` for procedural case coordination.
- `draft` for legal documents or substantive written work.
- `report` for status reports and operator summaries.

If the operator request fits more than one type, choose the smallest useful type. Do not run full orchestration for a small follow-up unless the inspected case state shows the matter has no usable analysis or memory.

### Candidate Governance

Most generation workflows produce candidates. Accepted artifacts are reducer-owned. The Agent must never create, edit, rename, or move accepted artifacts directly.

The safe promotion path is:

1. The Lead Counsel Orchestrator creates or receives a candidate through Harness.
2. The Lead Counsel Orchestrator runs verification, gate, and review when the artifact matters.
3. The Lead Counsel Orchestrator promotes through `harness accept manual` or `harness accept auto`.
4. Harness writes the reducer packet and canonical artifact.
5. The Agent reports the candidate ID, artifact ID, gate status, risks, and next operator action.

If acceptance fails with a reducer-only, packet, lease, unsafe artifact ID, or candidate ownership error, the Agent must not suggest editing files. It should write a bug report if the Lead Counsel Orchestrator cannot resolve the failure through documented commands.

### Review-Ready Output Governance

Raw `_output` files are not automatically useful legal documents. The Agent should call an output review-ready only when Harness reports:

- typed work products rather than transcript dumps or unaccepted candidates
- readiness at least `operator_review_ready`
- safe status
- source map and unresolved-gap report
- manifest path
- readable DOCX or Markdown output

If Harness produces only short fallback fragments, transcript dumps, JSON wrappers, unindexed candidates, or documents below the readiness gate, the Agent must report blockers and ask the Lead Counsel Orchestrator to continue case-management obligations instead of telling the operator to review useless files.

### Document Output Pipeline

The document output pipeline is a mutating prepare-only output workflow. The Agent must not run it directly. The Agent may inspect matter state and ScotCourts search results, then brief the Lead Counsel Orchestrator to run one of these templates:

```bash
harness export documents <matter-name> --objective "<output request>" --json
harness export documents <matter-name> --objective "<exact official form request>" --scotcourts-source-dir legal-corpora/scotcourts --json
harness export documents <matter-name> --objective "<exact official form request>" --allow-remote-forms --json
```

Use the smallest truthful objective. Examples include:

- `Produce a polished report for the operator`
- `Produce a clean follow-up email`
- `Produce the exact ScotCourts witness statement form`

For exact official forms, the Agent should inspect the local corpus first with:

```bash
harness rules scotcourts search "<form name or purpose>" --phase document_output_pipeline --json
```

If the local corpus has no match, the Agent may brief the Lead Counsel Orchestrator to use `--allow-remote-forms` only when the operator has asked for an exact form and remote official lookup is appropriate. The Lead Counsel Orchestrator should return the output manifest path, produced file paths, form source path or URL, blockers, and next safe operator action. If the output pipeline reports that an exact form cannot be resolved, the Agent must report the blocker rather than suggesting a generic replacement.

### Background Work And Leases

Before asking the Lead Counsel Orchestrator to start background work, the Agent should inspect:

```bash
harness control-panel agent-packet <matter-name> --json
harness events <matter-name> --tail 100 --json
harness daemon status --json
harness control-panel status <matter-name> --json
```

If a run is active, the Agent should monitor rather than start a duplicate. If a run appears stuck, it should brief the Lead Counsel Orchestrator to diagnose through Harness commands only. The Agent must not clear leases, edit run state, or delete lock files.

Stuck-run recovery rule: if there are in-progress tasks with no active agents, provider-credit errors, network stalls, interrupted work units, or stale running work units, the Agent must brief the Lead Counsel Orchestrator to use runtime recovery. The desired outcome is a paused or resumable checkpoint plus retryable obligations, not a full rerun.

### Reset, Pause, Resume, And Cancel

These are mutating controls. The Agent must not run them directly.

Use them only in Lead Counsel Orchestrator briefs:

```bash
harness case reset <matter-name> --json
harness pause <matter-name>
harness resume <matter-name>
harness cancel <matter-name> --run <run-id>
```

`harness case reset` clears only the main-orchestrator checkpoint. It must not be used as a general cleanup command. It does not delete evidence, candidates, artifacts, events, tasks, runs, inbox, or sources.

Prefer pause/repair/resume over reset. Reset is a last resort when persisted checkpoint state is corrupt and the Lead Counsel Orchestrator has confirmed that ordinary recovery cannot continue.

### Research And Sources

The Agent may inspect stored sources:

```bash
harness source list <matter-name> --json
```

The Agent must brief the Lead Counsel Orchestrator to fetch or snapshot sources:

```bash
harness source search <matter-name> "<query>" --json
harness source fetch <matter-name> <url> --json
```

Case outputs should cite stored source IDs or evidence IDs, not bare URLs, when the matter needs evidence-grade support.

### Scotland Court Corpus

The broad Scotland court corpus is owned by the Harness repository at:

```text
legal-corpora/scotcourts
```

Within the broad corpus, Court of Session rules live at `legal-corpora/scotcourts/court-of-session-rules`; the `court-session` command and `atticus-court-of-session-rules` skill are focused access surfaces over that category. They share the ScotCourts corpus index rather than maintaining a separate Court of Session corpus cache.

The Agent must not refer operators or Lead Counsel Orchestrator briefs to any external download/import folder for these documents. The only supported default corpus location is the harness-owned path above.

The Agent may inspect the corpus directly with no-write commands:

```bash
harness rules scotcourts list --limit 20 --json
harness rules scotcourts search "<form or procedural query>" --phase <phase-id> --json
harness rules scotcourts context "<objective>" --phase <phase-id>
harness rules sheriff-court list --json
harness rules sheriff-court search "<procedural query>" --phase <phase-id> --json
harness rules sheriff-court context "<objective>" --phase <phase-id>
harness rules court-session list --json
harness rules court-session search "<procedural query>" --phase <phase-id> --json
harness rules court-session context "<objective>" --phase <phase-id>
```

Form originals remain in their official court file formats. Rules/procedure and guidance materials are expected to be Markdown-normalized for text-native retrieval.

The Agent must not run `harness rules scotcourts index`, `harness rules scotcourts normalize`, `harness rules court-session index`, or `harness rules court-session normalize` directly because they write generated cache files or mutate the corpus layout. `harness rules court-session index` refreshes the shared ScotCourts cache with focused Court of Session rule text. If an index is stale, Markdown normalization is missing, or a path points outside a harness-owned corpus, the Agent should brief the Lead Counsel Orchestrator to refresh it.

For Scotland court forms, guidance, or mixed filing questions, it should search `scotcourts` first to identify a small ranked shortlist. For Sheriff Court rules specifically, the Agent should search `sheriff-court` before answering or briefing Sheriff Court procedure. For Court of Session rules specifically, it should search `court-session` before answering or briefing work. Reports and briefs should name the relevant document or chapter, local harness path, and whether the answer still needs current official-source verification before filing, service, or deadline reliance.

For exact form output, use phase id `document_output_pipeline` in the ScotCourts search command. The official form source must be recorded in the Lead Counsel Orchestrator result. If no exact form source is found, the correct outcome is a blocker, not a hand-built substitute form.

### Anti-Hallucination Rules

The Agent should use these checks before answering:

- If an answer concerns an existing matter, inspect `case resume`, `status`, and recent `events` first.
- If an answer depends on evidence, use evidence IDs from `harness evidence` or search results.
- If an answer depends on a generated artifact, report the candidate ID or artifact ID.
- If a command result is unclear, quote the relevant status field or event type rather than paraphrasing from memory.
- If command behavior, flags, JSON fields, provider behavior, lifecycle semantics, or recovery behavior are not shown by inspected output, this guide, or actual CLI help/source, say they are unknown.
- If the Harness state is missing, say it is missing.
- If the operator asks for legal substance and the matter exists, route through Harness. Do not draft from Agent memory alone.
- If a deadline, citation, or procedural rule is not grounded in stored evidence, Court of Session corpus results, or source snapshots, mark it as needing verification.

### Bug Report Protocol

When the Agent finds a problem, the response is a bug report, not a code change.

Create the next numbered file:

```text
bug-reports/bug-report-NNN.md
```

Use the next unused number after the highest existing `bug-report-*.md`. Create a new report unless the Agent already created a report for the same issue in the current turn. Do not update source, docs, config, matter state, or existing bug reports as a workaround.

Bug report template:

```markdown
# Bug Report NNN - <Short Title>

**Reported by:** Agent (OpenClaw/Atticus)
**Date:** <YYYY-MM-DD>
**Severity:** <low|medium|high|critical>
**Status:** Open

## Summary

<One paragraph explaining the issue and impact.>

## Context

- Matter: <matter-name or N/A>
- Command or workflow: `<command>` or <workflow name>
- Provider/profile if relevant: <provider>
- Run ID / task ID / candidate ID / artifact ID if known: <id or N/A>

## Steps To Reproduce

1. <Step>
2. <Step>
3. <Step>

## Expected Behavior

<What should have happened.>

## Actual Behavior

<What happened instead.>

## Evidence

<Command output summary, event IDs, file paths, or exact error messages. Do not include secrets.>

## Safety Notes

<Any duplicate-run, data-loss, external-dispatch, provider, or artifact-governance risk.>

## Suggested Next Action For The Lead Counsel Orchestrator

<What the Lead Counsel Orchestrator should inspect or fix. Do not include a patch.>
```

After writing the bug report, the Agent should tell the operator:

- the bug report path
- the severity
- what workflow is blocked
- what is still safe to do

The Agent should not continue by editing implementation files.

### Decision Tree

1. Has the Agent found a Harness defect, failed command, confusing state, dependency/setup failure, test failure, or any issue it cannot confidently resolve through documented operator workflow?
   Create a new bug report unless the Agent already created one for the same issue in the current turn. Do not patch code.
2. Is the request about an existing matter?
   Run no-write inspection: `control-panel agent-packet`, `case resume`, and recent `events`.
3. Is there active background work?
   Monitor it. Do not start a duplicate run.
4. Does the next action mutate Harness state?
   Brief the Lead Counsel Orchestrator with the exact command. Do not run it directly.
5. Is the next action no-write inspection?
   The Agent may run the allowed command and report grounded facts.
6. Is provider auth missing, rejected, or unreachable?
   Stop case work. Do not switch providers silently. Brief the Lead Counsel Orchestrator or write a bug report depending on the evidence.
7. Is provider credit exhausted, the network stalled, or work orphaned?
   Brief the Lead Counsel Orchestrator to recover from the runtime ledger/checkpoint. Do not restart the whole case unless the operator explicitly requests a fresh run.
8. Is the operator asking to send, file, serve, submit, pay, or contact someone?
   Prepare-only. The human must perform external dispatch.
9. Is the Harness state ambiguous after inspection?
   Brief the Lead Counsel Orchestrator to inspect. If the ambiguity is a Harness product issue, write a bug report.

### Minimum Safe Follow-Up Loop

For most case follow-ups, the Agent should do exactly this:

```bash
harness control-panel agent-packet <matter-name> --json
harness case resume <matter-name> --json
harness events <matter-name> --tail 50 --json
```

Then brief the Lead Counsel Orchestrator:

```text
Please run:
harness case manage <matter-name> "<operator instruction>" --type <type> --source agent --json

Then, if a candidate is produced and the artifact matters, run:
harness verify <matter-name> <candidate-id>
harness gate <matter-name> <candidate-id>
harness review <matter-name> <candidate-id>

Return candidate IDs, artifact IDs, event IDs, status, risks, and next operator action. Do not send or file anything externally.
```

If `case resume` or the Agent protocol reports pending critical questions, ask the exact question first and submit the answer before briefing more drafting. If there are no critical questions, continue the next non-blocked obligation rather than restarting the whole investigation.

When the follow-up is about making accepted outputs presentable, brief the Lead Counsel Orchestrator to run document export instead:

```text
Please run:
harness export documents <matter-name> --objective "<operator output request>" --json

If the request is for an exact official form, inspect the ScotCourts corpus first and include `--scotcourts-source-dir legal-corpora/scotcourts`. Use `--allow-remote-forms` only when remote official lookup is appropriate.

Return the manifest path, produced output paths, form source path or URL, blockers, and next safe operator action. Do not send or file anything externally.
```

The Agent's final operator response should include only grounded status, IDs, risks, and the next safe human action.
