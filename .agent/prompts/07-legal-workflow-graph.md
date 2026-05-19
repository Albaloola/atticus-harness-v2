# Prompt 7 — Legal workflow graph, skills router, artifact templates

Work in `/home/alba/atticus-harness-v2/`. Add legal-stage intelligence so the orchestrator systematically covers the full case lifecycle.

## Goal
Encode a legal workflow graph and skills selection mechanism so the master orchestrator doesn't miss phases.

## Implementation
1. New `src/legal/`: workflow.ts (phase definitions), artifact-types.ts, templates.ts (skeleton templates), skills-router.ts.
2. Update master orchestrator to create phase tasks from workflow.ts.
3. Update DraftTool to use artifact templates.
4. Add quality gate checks for artifact type requirements.
5. Tests for phase generation, skills selection, template rendering.
6. IMPORTANT: Use `import Database = require("better-sqlite3")` for SQLite, ESM for everything else.
