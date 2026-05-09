# Harness v2 — Legal Operations Agent CLI

Standalone terminal-native agent for legal work. Ingests evidence, runs hierarchical orchestration with tool-calling, drafts documents, verifies citations, manages matter workflows, schedules recurring jobs, and auto-accepts gated outputs. Built in TypeScript on Node.js.


## Current status and architecture research

Harness v2 is currently a CLI-first TypeScript legal operations agent with matter-scoped filesystem state, SQLite/JSONL audit trails, FTS5 evidence search, provider-routed tool-calling, hierarchical 10-phase orchestration, source snapshotting, citation verification, quality gates, review quorum, reducer packets, fenced task leases, fail-closed provider policy, migration registry, daemon scheduling, read-only control-panel/monitor commands, 900+ bundled legal/writing skills, and harness-owned Scotland court corpora.

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

OpenRouter with DeepSeek is the default profile, not a hard-coded provider
boundary. Select provider profiles with `harness provider select <profile>` and
inspect the active model roles with `harness provider show`. Built-in profiles
cover OpenRouter/DeepSeek, direct DeepSeek, Anthropic OAuth/API key, OpenAI API
key, OpenRouter custom, local/Ollama, and delegated Codex SDK.

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
[`docs/hermes-agent-guide.md`](docs/hermes-agent-guide.md); all mutating,
repairing, or long-running commands must be briefed to Codex or escalated as a
bug report.

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
```

The orchestrator runs a master→mini→worker pipeline across all 10 legal workflow phases: intake, evidence, issue spotting, legal research, merits/risk, procedural planning, document production, verification, bundle assembly, and operator handoff.

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
the mutating command, and reports the result. The main orchestrator rebuilds the
case from persisted matter memory, dashboard/status, accepted artifacts,
candidate history, evidence, sources, inbox, tasks, runs, autonomy policy, tool
policy, and acceptance settings. It produces prepare-only candidates; it does not
send, file, serve, or contact externally.

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

Hermes (Atticus) operators must follow the read-only/briefing runbook in
[`docs/hermes-agent-guide.md`](docs/hermes-agent-guide.md).

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
bundle checks, and operator handoff receive only the relevant local document
shortlist.

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
init → ingest (×N) → search → run/orchestrate → draft → verify → gate → review → accept
```

For full orchestration:
```
orchestrate → [intake → evidence → issue-spot → research → merits → procedure → draft → verify → bundle → handoff]
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
├── legal/              # 10-phase workflow, 24 artifact types, templates, skills router
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
- **Hierarchical**: Master orchestrator decomposes matters into mini-orchestrators, which spawn workers for bounded tasks. Depth-limited recursion with configurable concurrency.
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
- ✅ Master → mini-orchestrator → worker hierarchical pipeline
- ✅ Scheduled recurring/one-shot jobs with cron expressions
- ✅ Non-interrupting status snapshots and event streaming
- ✅ Evidence-grade web research with source snapshots and citation verification
- ✅ Harness-owned Scotland court corpora with stage/skill-scoped lookup
- ✅ 10-phase legal workflow (intake through operator handoff)
- ✅ 10-gate quality scoring with policy-controlled auto-acceptance
- ✅ Review quorum with hostile reviewer agent
- ✅ 900+ bundled legal and writing skills, including UK/Scots refined skills
- ✅ SQLite + JSONL dual persistence for audit trails
- ✅ Reducer packets and canonical writer boundary for accepted artifacts
- ✅ Task and scheduler leases with fencing tokens, heartbeat/expiry tracking, and blocked reasons
- ✅ Fail-closed provider policy with explicit allow/deny model routing and no silent fallback
- ✅ State migration registry and read-only control-panel/monitor snapshots

## What it doesn't do

- No web UI — operator supervision remains CLI-first through status, watch, control-panel, and monitor commands
- No external legal dispatch — all outputs are prepare-only
- No cloud bridge, no remote sessions
- No MCP or plugin marketplace
