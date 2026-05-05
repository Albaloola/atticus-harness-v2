# Bug Report 001 — CLI Duplicate Commands, OCR Failures, PDF Encoding, API Key Resolution

**Date:** 2026-05-04
**Reported by:** Atticus (while running Anfal university case)
**Harness version:** v0.1.0
**Branch/Tag:** main (commit 550135c)

---

## Summary

During the first operational run of Harness V2 (the Anfal Elbushra university accommodation case), six distinct issues were encountered that blocked or degraded the workflow. This report covers all of them.

---

## Bug 1 — Duplicate `policy` CLI Command Registration

**Severity:** HIGH — CLI cannot start
**File:** `src/cli.ts`

### Description

Commander throws `Error: cannot add command 'policy' as already have command 'policy'` on startup. The `policy` command is registered twice:

1. **Line 237:** `.command('policy')` with `show` and `set` subcommands (proper structure)
2. **Line 262:** A second `.command('policy')` with a `preset` subcommand

This makes the entire CLI unusable — no command works.

### Root Cause

When the `policy preset` subcommand was added, it was registered as a new top-level `.command('policy')` instead of being added as a subcommand to the existing `policy` command. Commander does not allow duplicate top-level command names.

### Fix Applied

Moved the `preset` subcommand from the duplicate `program.command('policy')` at line 262 into the existing `policy` command at line 237 using `.addCommand(new Command('preset'))`.

---

## Bug 2 — Duplicate `accept` CLI Command Registration

**Severity:** HIGH — CLI cannot start
**File:** `src/cli.ts`

### Description

Commander throws `Error: cannot add command 'accept' as already have command 'accept'`. The `accept` command is registered twice:

1. **Line 148:** `program.command('accept <matter-name>')` (manual accept with positional matter-name argument)
2. **Line 284:** `program.command('accept')` with `auto` subcommand

Same class of bug as Bug 1 — two top-level commands with the same name.

### Root Cause

The original `accept <matter-name>` command (manual accept) was left in place when the `accept auto` subcommand was added as a separate registration. They should have been merged into one `accept` parent command with `manual` and `auto` subcommands.

### Fix Applied

Merged both into a single `program.command('accept')` with two subcommands:
- `accept manual <matter-name> <candidate-id>` — manual accept
- `accept auto <matter-name> <candidate-id>` — auto-accept

### Side Effect

The `reject` command (which was between the `accept` and `// Skills` comment) was accidentally removed during the fix. It was restored by re-adding `program.command('reject <matter-name>')` with its original arguments.

---

## Bug 3 — PDF Text Extraction: Temp File Cleanup Race

**Severity:** MEDIUM — evidence ingestion loses content
**File:** `src/extraction/` (OCR pipeline)

### Description

During `harness ingest`, several PDFs failed text extraction with:

```
Warning: Text extraction failed: ENOENT: no such file or directory,
open '/tmp/harness-ocr-XXXXXX/page-004-004.png'
```

The OCR pipeline creates temp PNG files for each PDF page, but the page files are being deleted before the OCR process reads them. This is a race condition in the temp file cleanup.

### Evidence Files Affected

- `Rental Arrears - Meeting 10-04-26 Summary.pdf` (registration succeeded, extraction failed)
- Multiple other PDFs during batch ingest

### Impact

Evidence is registered in the index but has no extracted text. This means FTS5 search will not find these documents, and the agent loop cannot read their content.

### Suggested Fix

The OCR pipeline should ensure temp files are held open until Tesseract completes. Options:
- Use a context manager / `with` statement for temp file lifecycle
- Add a `finally` block that waits for OCR subprocess before cleanup
- Capture OCR output to memory instead of temp files

---

## Bug 4 — OpenRouter API Key Not Resolved by `harness draft`

**Severity:** HIGH — agent loop and draft commands non-functional
**File:** `src/config/` (secrets resolution)

### Description

Running `harness draft` or `harness run` fails with:

```
Draft failed: OpenRouter API key not configured. Set OPENROUTER_API_KEY
environment variable.
```

Despite the key being set in `~/.hermes/.env` and available in the shell environment, the harness's own secrets system (`harness secrets set`) stores it separately at `~/.hermes/profiles/atticus/home/.atticus-harness/secrets.env`. The draft command does not fall back to checking the environment variable.

### Root Cause

The harness appears to read API keys from its own secrets store (`~/.atticus-harness/secrets.env`), not from `OPENROUTER_API_KEY` environment variable. Running `harness secrets set OPENROUTER_API_KEY <value>` fixed the issue, but the user would not know to do this.

### Fix Applied

`harness secrets set OPENROUTER_API_KEY <value>` using the key from `~/.hermes/.env`.

### Suggested Fix

Add fallback logic: if the secrets store has no key, check `OPENROOTER_API_KEY` environment variable before failing. Or, document that `harness secrets set` must be run as a setup step.

---

## Bug 5 — PDF Output Contains Ligatures (fi/fl/ffi) Causing Encoding Glitches

**Severity:** MEDIUM — PDF text extraction and viewing shows garbled characters
**File:** Not a source file bug — affects all PDF output from the project

### Description

All PDFs generated from markdown (via weasyprint, LibreOffice, or groff) contain typographic ligatures where `f` + `i` are merged into a single glyph (U+FB01 LATIN SMALL LIGATURE FI). When pdftotext or certain PDF viewers extract the text, these ligatures appear as:

- `â` (U+00E2) + `¬` (U+00AC) + `º` (U+00BA) sequence
- Or as a single unrecognised character

This affects ALL text that contains "fi", "fl", "ff", or "ffi" sequences. In the Anfal documents, common words like "Office", "confirm", "afford", "identification" are all rendered with ligatures.

### Affected Systems

| Converter | Ligature Issue | Other Issues |
|-----------|---------------|-------------|
| weasyprint (HTML→PDF) | Yes — curly quotes + ligatures | Slow |
| LibreOffice (ODT→PDF) | Yes — ligatures | Very slow, config-dependent |
| groff → PDF | Yes — ligatures | Fast |

### Root Cause

PDF rendering engines automatically substitute the `fi` character sequence with a single ligature glyph from the font. This is standard typographic behaviour in most PDF renderers and is by design in fonts like Times, Helvetica, and Courier.

The ligature is problematic because:
- pdftotext extracts U+FB01 as a single character
- Some PDF viewers and text extractors do not map U+FB01 to "fi" during extraction
- The extracted text shows as garbled or missing characters

### Suggested Fix

The project's PDF generation pipeline should either:
(a) Use a font that does not contain ligature glyphs (e.g. Courier, or a custom font with ligatures disabled)
(b) Post-process the generated PDF to decompose ligatures
(c) Insert zero-width break characters between `f` and `i` in the source text before PDF generation
(d) Use a PDF library (like ReportLab) that gives full control over font encoding

### Workaround

The markdown source files are 100% clean ASCII. Opening them directly in a text editor or markdown viewer shows correct text. The PDF conversion is the only affected step.

---

## Bug 6 — Pre-Existing TypeScript Lint Errors (tsc --noEmit)

**Severity:** LOW — does not block `npm run build`, but blocks `npm run lint`
**Files:** Multiple `src/` files

### Description

Running `npm run lint` (which runs `tsc --noEmit`) reports 12 type errors:

```
src/commands/gate.ts(74,24): error TS2802: Type 'Set<string>' can only be
  iterated through when using the '--downlevelIteration' flag
src/extraction/docx.ts(2,8): error TS1259: Module 'jszip' can only be
  default-imported using the 'esModuleInterop' flag
src/skills/parser.ts(2,8): error TS1192: Module 'js-yaml' has no default export
src/state/store.ts(32,24): error TS2802: Type 'Map<string, Database>' ...
  (downlevelIteration)
src/storage/sqlite/*.ts: multiple: Module 'better-sqlite3' can only be
  default-imported using the 'esModuleInterop' flag
--- 12 errors total ---
```

### Root Cause

`tsconfig.json` needs `"downlevelIteration": true` and `"esModuleInterop": true` in `compilerOptions`. These are standard settings for TypeScript projects using ESM with Node.js. Without them, `tsc --noEmit` (lint) fails on:
- Iteration over `Set` and `Map` types (downlevelIteration)
- Default imports from CommonJS modules like `better-sqlite3`, `jszip`, `js-yaml` (esModuleInterop)

### Impact

`npm run build` works because `tsc` for build has different settings than `tsc --noEmit`. But CI pipelines or pre-commit hooks that run `npm run lint` will fail.

### Suggested Fix

Add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "downlevelIteration": true,
    "esModuleInterop": true
  }
}
```

---

## Appendix: Quick Reference

| Bug | File | Blocking? | Fixed? |
|-----|------|-----------|--------|
| 1 — Duplicate policy | `src/cli.ts:237,262` | Yes — CLI dead | Yes — merged preset into parent |
| 2 — Duplicate accept | `src/cli.ts:148,284` | Yes — CLI dead | Yes — merged manual + auto |
| 3 — OCR temp file race | `src/extraction/` | Partially — evidence ingested but empty | No |
| 4 — API key not resolved | `src/config/secrets` | Yes — draft/run fail | Workaround — `harness secrets set` |
| 5 — PDF ligature encoding | All PDF output | Med — documents look garbled | No |
| 6 — Pre-existing lint errors | Multiple | Low — build works | No |
