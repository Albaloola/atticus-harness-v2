# Harness v2 — Legal Operations Agent CLI

Standalone terminal-native agent for legal work. Ingests evidence, runs an agentic loop with tool-calling, drafts documents, verifies citations, and manages matter workflows. Built in TypeScript on Node.js.

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
export OPENROUTER_API_KEY=sk-or-v1-...
```

## Usage

### 1. Create a matter

```bash
harness init my-case
```

Creates the directory structure under `matters/my-case/`.

### 2. Ingest evidence

```bash
harness ingest my-case ~/documents/contract.pdf
```

Copies the file, computes SHA-256, runs OCR/extraction, indexes text into SQLite FTS5 for search.

Supports: PDF, DOCX, DOC, JPEG, PNG, TXT, HTML

### 3. Search evidence

```bash
harness search my-case "tenancy agreement"
```

Full-text search across all ingested evidence with relevance scoring.

### 4. List evidence

```bash
harness evidence my-case
```

### 5. Run the agent loop

```bash
harness run my-case
```

The agent loads matter context, calls OpenRouter, executes tools, and loops until the task is done or blocked. State is saved to disk — crash and re-run to resume.

```bash
harness run my-case --skill contract-review    # Load a specific skill
harness run my-case --quiet                    # Suppress verbose output
```

### 6. Draft a document

```bash
harness draft my-case "Draft a letter disputing the rent arrears"
```

Generates a legal document using evidence context. Saves to `_candidates/`.

### 7. Verify citations

```bash
harness verify my-case draft-1234567890
```

Extracts citations like `[NAP-SRC-0001]` from the draft and verifies quoted text against source evidence.

### 8. Quality gate

```bash
harness gate my-case draft-1234567890
```

Checks: citations present, content length, document structure, date present, citation validity.

### 9. Hostile review

```bash
harness review my-case draft-1234567890
```

Runs an adversarial legal review via LLM, identifying weaknesses and risks.

### 10. Accept or reject

```bash
harness accept my-case draft-1234567890   # Promotes to artifact
harness reject my-case draft-1234567890 --reason "needs more citations"
```

### 11. Skills

```bash
harness skill list                         # List all 26 skills
harness skill use contract-review-anthropic  # Display a skill's prompt
```

## Workflow

```
init → ingest (×N) → search → run → draft → verify → gate → review → accept
```

The agent loop handles the middle pipeline autonomously: it assesses the matter state, gathers evidence, drafts documents, and checks its own work.

## Architecture

```
src/
├── cli.ts              # Commander entry point (14 commands)
├── agent/              # Agent loop (load → assess → plan → execute → record → check → loop)
├── commands/           # Command implementations
├── extraction/         # PDF/DOCX/DOC/image/text extraction pipeline
├── llm/                # OpenRouter client (DeepSeek V4 flash/pro)
├── storage/            # Flat-file matter storage + SQLite FTS5 evidence store
├── tools/              # 11 tools registered for agent use
├── types/              # Shared TypeScript interfaces
└── skills/             # SKILL.md parser and loader
skills/                 # 26 bundled SKILL.md files
tests/                  # 37 unit tests
```

## Development

```bash
npm run build        # Compile TypeScript
npm run lint         # Type-check (tsc --noEmit)
npm test             # Run tests (vitest)
npm run dev          # Watch mode
```

## What it doesn't do

- No TUI, no web UI, no daemon — pure CLI
- No scheduler, no micro-orchestration — single agentic loop
- No auto-acceptance — operator must explicitly accept/reject
- No external legal action without operator approval
