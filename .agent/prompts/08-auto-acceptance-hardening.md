# Prompt 8 — Auto-acceptance, hostile review quorum, final hardening

Work in `/home/alba/atticus-harness-v2/`. Implement controlled auto-acceptance and harden the orchestration system.

## Goal
Allow the harness to auto-promote candidates to artifacts when policy allows and quality gates pass, while keeping external legal dispatch prepare-only.

## Implementation
1. New `src/acceptance/`: gate-score.ts, auto-accept.ts, review-quorum.ts.
2. Update acceptCandidate flow to record acceptance events and gate metadata.
3. Update orchestrator to call auto-accept when configured.
4. Add explicit external-action classifier.
5. CLI: `harness accept auto`, `harness policy preset <preset>`.
6. Hardening: budget checks, max depth, cancellation, event consistency, secret redaction in logs.
7. Tests for all gate/acceptance scenarios.
8. IMPORTANT: Use `import Database = require("better-sqlite3")` for SQLite, ESM for everything else.
