# Prompt 6 — Research/web/source store and legal source verification

Work in `/home/alba/atticus-harness-v2/`. Add internet/source research support behind provider keys and policy controls.

## Goal
The harness must search/fetch public web sources, save evidence-grade snapshots for citation verification.

## Implementation
1. New `src/research/`: provider.ts (interface), web-search.tool.ts, web-fetch.tool.ts, source-store.ts, source-normalizer.ts, source-citation.ts.
2. Add tool policy category `network` and respect autonomy policy.
3. Update orchestrator prompts to use source IDs from source store.
4. CLI: `harness source search|fetch|list <matter>`.
5. Tests with mock HTTP provider.
6. IMPORTANT: Use `import Database = require("better-sqlite3")` for SQLite, ESM for everything else.
