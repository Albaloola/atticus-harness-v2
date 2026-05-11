# Harness v2 - Legal Operations Agent CLI

Standalone terminal-native agent for legal work. Ingests evidence, runs unified agent-driven orchestration with tool-calling, drafts documents, verifies citations, manages matter workflows, schedules recurring jobs, and auto-accepts gated outputs. Built in TypeScript on Node.js.


## Current status and architecture research

Harness v2 is currently a CLI-first TypeScript legal operations agent with matter-scoped filesystem state, SQLite/JSONL audit trails, FTS5 evidence search, provider-routed tool-calling, hierarchical 11-phase orchestration, smart gap analysis, Phase 11 document output, source snapshotting, citation verification, quality gates, review quorum, reducer packets, fenced task leases, fail-closed provider policy, migration registry, daemon scheduling, read-only control-panel/monitor commands, 900+ bundled legal/writing skills, and harness-owned Scotland court corpora.

The newer case-management layer adds persistent case state, obligations, structured questions for missing information, Hermes command packets, prepare-only communications, external-action approval gates, durable runtime work-unit recovery, DeepSeek/OpenRouter capability checks, bounded vision fallback policy, and review-ready export contracts. The design goal is that Atticus/Hermes can manage an active case through Harness without asking the operator to supervise internal phases, while still refusing to send, file, serve, pay, or contact externally without explicit human action.

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

Hermes operators must treat the examples below as general operator/Codex CLI
examples, not as a Hermes execution allowlist. Hermes direct execution is
limited to the no-write inspection and briefing runbook in
[`.hermes/hermes-agent-guide.md`](.hermes/hermes-agent-guide.md); all mutating,
repairing, or long-running commands must be briefed to Codex or escalated as a
bug report. Briefing Codex is the operator workflow surface, not a provider
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

### Hierarchical orchestration

```bash
harness orchestrate my-case --objective "Analyze housing disrepair claim"
harness orchestrate my-case --objective "..." --max-depth 3 --concurrency 15
harness orchestrate my-case --background --json
harness orchestrate my-case --objective "..." --force --json
```

The orchestrator is a unified agent-driven loop (`UnifiedMasterOrchestrator`) that replaces the former split master-orchestrator + master-supervisor design. It wraps a single long-lived QueryLoop agent with orchestration tools (`run_phase`, `get_orchestration_state`), full harness editing authority (read/write/edit files, bash, grep, SQLite), and provider-agnostic JSON retry. The agent controls which phases to run, monitors worker output, detects harness bugs, and can patch harness source code when the harness itself is broken. It runs across all 11 legal workflow phases: intake, evidence, issue spotting, legal research, merits/risk, procedural planning, document production, verification, bundle assembly, operator handoff, and document output.

Smart gap analysis runs before production work. Existing fresh accepted artifacts and candidates satisfy matching requirements, stale work is flagged, and missing deliverables are produced. Use `--force` only when you intentionally want to reproduce existing deliverables.

### Smart gap analysis and Phase 11 output

Phase 11 turns reducer-accepted artifacts and accepted candidates into human-friendly files under `matters/<matter>/_output/`. It classifies the requested output as a letter, email, form, report, action plan, script, or reference guide, strips common AI prose artifacts, writes `.docx` or `.txt` files, archives superseded outputs, and records everything in `_output/manifest.json`.

```bash
harness export documents my-case --json
harness export documents my-case --objective "Produce a polished report for the operator" --json
harness export documents my-case --objective "Produce the exact ScotCourts witness statement form" --scotcourts-source-dir legal-corpora/scotcourts --json
harness export documents my-case --objective "Produce the exact ScotCourts witness statement form" --allow-remote-forms --json
```

The orchestrator can also choose the Phase 11 output contract when it calls `run_phase`. If an exact official form is requested, Phase 11 searches the local ScotCourts corpus first. If remote form lookup is explicitly allowed, it may download a matching official ScotCourts form into `_output/forms/`. If no exact form source can be resolved, Phase 11 reports a blocker instead of inventing a generic substitute. All outputs remain prepare-only.

### Ongoing case management

```bash
harness case manage my-case "Draft an email to the university asking for an update" --type email
harness case manage my-case "Create tomorrow's follow-up task list" --type task --json
harness case memory my-case --json
harness case resume my-case --json
harness case reset my-case
```

Hermes should treat these as Codex-orchestrator command templates, not as
permission to mutate the Harness directly. Case-related emails, communications,
task lists, status reports, and follow-up documents go through
`harness case manage`; Hermes inspects read-only state, briefs Codex to execute
the mutating command, and reports the result.

The case-management implementation is stateful rather than phase-only. It
persists case state, legal/factual obligations, missing-information questions,
work-product references, communications, proposed external actions, and runtime
work units. A follow-up should resume from persisted obligations and work-unit
ledger entries instead of rerunning every phase. If provider credit, network
stall, interruption, or orphaned worker state is detected, recovery should pause
or resume from the last checkpoint rather than restart the whole case.

The main orchestrator rebuilds the case from persisted matter memory,
dashboard/status, accepted artifacts, candidate history, evidence, sources,
inbox, tasks, runs, autonomy policy, tool policy, and acceptance settings. It
produces prepare-only candidates; it does not send, file, serve, or contact
externally.

Before running LLM-backed case work, Hermes should check provider readiness with
`harness control-panel status --json`. Missing or rejected auth is a setup error:
do not fall back silently or start a partial run. Accepted artifacts are also
governed by reducer-only promotion; Codex should use `harness accept manual` or
`harness accept auto` after Hermes briefs the action. Hermes must never write
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

Hermes (Atticus) operators must follow the read-only/briefing runbook in
[`.hermes/hermes-agent-guide.md`](.hermes/hermes-agent-guide.md).

### Hermes integration surface

Hermes/Atticus integrations should prefer the structured protocol in
[`.hermes/hermes-harness-protocol.md`](.hermes/hermes-harness-protocol.md) over
filesystem edits. The implementation entry point is `executeHermesCommand` in
`src/hermes/commands.ts`; it returns status packets, pending questions,
diagnostics, draft identifiers, external-action identifiers, and plain-English
messages for the operator.

### Updating the Hermes agent

Use the prompt pack in [`.hermes/prompts/`](.hermes/prompts/) as the install
source for Hermes. The old numbered prompts `01` through `08` are historical
Harness implementation prompts; do not install them as the live Hermes prompt.

There is no hidden automatic installer in this repository that can safely modify
an external Hermes agent. Updating Hermes means mirroring these files into the
Hermes/Atticus agent configuration:

1. Pull the latest Harness repository on the machine where Hermes can read it:

   ```bash
   cd /home/alba/atticus-harness-v2
   git pull origin main
   npm install
   npm run build
   ```

2. Replace or update Hermes's main system prompt with:

   ```text
   /home/alba/atticus-harness-v2/.hermes/prompts/09-hermes-agent-system-prompt.md
   ```

3. Add Hermes's Codex handoff template from:

   ```text
   /home/alba/atticus-harness-v2/.hermes/prompts/10-codex-handoff-template.md
   ```

   Hermes should use this whenever the operator asks for mutating Harness work:
   orchestration, case management, ingestion, drafting, export, recovery,
   provider repair, acceptance, rejection, verification, or review.

4. Update Hermes/Atticus skills and runbooks using:

   ```text
   /home/alba/atticus-harness-v2/.hermes/prompts/11-atticus-skill-update-checklist.md
   ```

   Hermes must have, at minimum, these skill surfaces:

   - `case-status`: inspect `case resume`, `agent-packet`, and recent events.
   - `missing-information`: ask exact Harness pending questions and submit
     answers back through Harness/Hermes protocol.
   - `communications`: ingest received emails and request prepare-only replies.
   - `external-actions`: approve/reject/record external actions only from human
     instruction and Harness state.
   - `recovery`: detect stuck runs, provider credit/network stalls, stale
     leases, orphaned tasks, and brief Codex to pause/repair/resume.
   - `provider-readiness`: inspect the active provider profile and capability
     matrix; keep the default OpenRouter profile DeepSeek-only.
   - `review-ready-export`: require manifest, source map, quality/readability
     gate, and blockers before presenting documents as useful legal output.

5. Ensure Hermes can run only the no-write inspection commands documented in
   [`.hermes/hermes-agent-guide.md`](.hermes/hermes-agent-guide.md). Mutating commands
   must be briefed to Codex, not executed directly by Hermes.

6. Smoke-test Hermes with an existing matter. Hermes should inspect state before
   answering and should not start duplicate long-running work:

   ```bash
   harness case resume <matter-name> --json
   harness control-panel agent-packet <matter-name> --json
   harness events <matter-name> --tail 100 --json
   harness provider show --json
   ```

7. Ask Hermes these checks after updating it:

   - "What is the current status of `<matter-name>`?"
   - "What question does Harness need me to answer next?"
   - "Draft a follow-up email for `<matter-name>`."
   - "The run looks stuck; what should happen next?"
   - "Can DeepSeek process images in the default profile?"

   Correct behavior: Hermes inspects state, asks only Harness-surfaced missing
   questions, briefs Codex for mutating work, preserves prepare-only external
   action limits, and says DeepSeek is text/file only in the default Harness
   capability policy.

Hermes must keep its own skills/runbooks aligned with these Harness capabilities:

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
  work-unit ledger rather than restarting a phase.
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
bundle checks, operator handoff, and Phase 11 document output receive only the
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
├── export/             # Prepare-only bundles and Phase 11 document output
├── legal/              # 11-phase workflow, 25 artifact types, templates, skills router
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
- **Hierarchical**: Unified Master Orchestrator wraps a single long-lived QueryLoop agent with orchestration tools (`run_phase`, `get_orchestration_state`) and full harness editing authority. The agent controls mini-orchestrator spawns, inspects worker output, and runs phases across all 11 legal workflow stages. Depth-limited recursion with configurable concurrency.
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
- ✅ 11-phase legal workflow (intake through document output)
- ✅ Phase 11 human-friendly `.docx`/`.txt` output with official form source checks
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

### Unified Master Orchestrator (2026-05-09)

The former split design of `MasterOrchestrator` (deterministic phase loop) + `MasterSupervisor` (stateless checkpointer) has been merged into a single `UnifiedMasterOrchestrator`. The unified orchestrator:

- Runs as a single long-lived `QueryLoop` agent with 60-turn capacity
- Uses `run_phase` and `get_orchestration_state` as agent-callable tools
- Has full harness editing authority (file writes, bash, SQLite, grep)
- Can detect harness bugs and patch source code when the harness itself is broken
- Uses provider-agnostic JSON retry (`retryNonJson` on QueryLoop) - works with DeepSeek, GPT, Claude, and all supported provider profiles without relying on provider-specific `response_format` parameters
- Replaces the deterministic `parseMasterSupervisorResult` trap that caused infinite `retry_phase` loops on non-JSON output

The old `MasterOrchestrator` and `MasterSupervisor` classes are preserved for backward compatibility (tests still use them directly) but marked as deprecated. The CLI `harness orchestrate` command now routes through `UnifiedMasterOrchestrator`.

### Smart Gap Analysis And Phase 11 Output (2026-05-10)

The orchestrator now inventories accepted artifacts, accepted candidates, evidence freshness, and the Phase 11 output manifest before producing new work. When existing fresh deliverables satisfy the objective, matching phases are skipped. `--force` overrides that skip behavior.

Phase 11 adds a deterministic document output pipeline. It can infer output shape from accepted work products or accept an orchestrator-selected objective, then produce polished operator-ready files in `_output/`. Exact official form requests are source-checked against `legal-corpora/scotcourts`; missing exact forms block rather than falling back to a generic form layout.
