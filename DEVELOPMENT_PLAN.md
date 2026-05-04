# Harness v3 — Development Plan

## Standalone Legal Operations Agent (Claude Code Fork)

---

# Part 1: Project Overview

## 1.1 What We're Building

A standalone terminal-native legal operations agent built by forking Claude Code's TypeScript source and layering legal-specific functionality on top. The agent handles legal matters end-to-end: evidence ingestion, document drafting, citation verification, quality gates, and output acceptance. It supports sub-agent spawning with full drill-down visibility, persistent per-case chat sessions, and a library of 881+ legal skills organized by legal process stage (S0-S9).

## 1.2 Project Location

```
/home/alba/atticus-harness-v3/
```

## 1.3 Core Principles

1. **Fork Claude Code, don't rebuild** — Copy Claude Code's TypeScript source (~1900 files) and add legal layers on top. Do not rewrite what already works.
2. **Persistent per-case chats** — Each case gets its own independent chat session saved to disk. Closing and reopening resumes exactly where you left off.
3. **Stage-gated skills** — 881+ legal skills tagged by process stage (S0-S9). Only stage-appropriate skills are shown to the agent at each phase.
4. **Passive + Active skills** — Some skills modify the model's base behavior (Scots law, jurisdiction, tone). These are injected into the system prompt. Active skills are invoked on demand via the Skill tool.
5. **Sub-agent drill-down** — Users can zoom into any sub-agent's conversation, see their thinking, tool calls, and document edits in real-time.
6. **Legal guardrails** — Evidence hashing, citation verification, operator approval gates. All non-negotiable.
7. **Context compaction for legal** — Claude Code's auto-compact system adapted for legal work: longer document contexts, session memory with legal sections.

## 1.4 Technology Stack

| Component | Technology | Reason |
|-----------|------------|--------|
| Runtime | Node.js 18+ | Claude Code runs on Node |
| Language | TypeScript (ESM) | Claude Code is TS |
| TUI Framework | Ink (custom fork from Claude Code) | Terminal React rendering |
| State Management | Zustand (from Claude Code) | Already in Claude Code |
| CLI Framework | Commander (from Claude Code) | Already in Claude Code |
| LLM Provider | OpenRouter (DeepSeek V4 flash/pro) | Replaces Anthropic SDK |
| LLM Fallback | Anthropic SDK (keep for compatibility) | Keep Claude Code's original |
| Storage | Filesystem + SQLite (better-sqlite3) | Flat-file matter state + FTS5 evidence |
| Document Processing | pdftotext, tesseract, libreoffice | System tools |
| Skill File Format | YAML frontmatter + Markdown body | Same as Claude Code skills |
| Skill Search | SQLite FTS5 | Lightweight, no external dependency |

---

# Part 2: Source Code Organization

## 2.1 Directory Structure

```
/home/alba/atticus-harness-v3/
├── package.json                     # Combined Claude Code + legal deps
├── tsconfig.json                    # TypeScript config
├── .gitignore
├── AGENTS.md                        # Dev conventions
├── README.md                        # Install + usage
├── scripts/
│   └── setup.sh                     # One-command setup
├── src/
│   ├── cli.ts                       # CLI entry (overrides Claude Code's main.tsx)
│   │
│   ├── [CLAUDE CODE SOURCE]         # Copied verbatim (~1900 files)
│   │   ├── screens/
│   │   │   └── REPL.tsx             # Modified: per-case chat, stage display
│   │   ├── components/
│   │   │   ├── Messages.tsx         # Modified: legal document rendering
│   │   │   ├── Spinner.tsx          # Modified: case status in spinner
│   │   │   └── PromptInput/        # Modified: case switcher keybindings
│   │   ├── tools/
│   │   │   ├── AgentTool/          # Kept: sub-agent spawning
│   │   │   ├── SkillTool/           # Modified: stage-gated skill listing
│   │   │   └── TaskOutputTool/      # Kept: task output streaming
│   │   ├── utils/
│   │   │   ├── permissions/         # Kept: 15-step permission pipeline
│   │   │   ├── swarm/              # Kept: multi-agent coordination
│   │   │   └── thinking.ts         # Kept: toggleable thinking
│   │   ├── services/
│   │   │   └── compact/            # Modified: legal-specific thresholds
│   │   ├── keybindings/
│   │   │   └── defaultBindings.ts  # Modified: added legal keybindings
│   │   ├── types/
│   │   │   ├── command.ts           # Modified: added stage, mode fields
│   │   │   └── permissions.ts       # Kept
│   │   └── ink/                    # Kept: custom Ink fork
│   │
│   ├── legal/                       # NEW: all legal-specific additions
│   │   ├── extraction/             # From v2: OCR pipeline
│   │   ├── storage/
│   │   │   ├── matter.ts           # From v2: flat-file matter CRUD
│   │   │   └── sqlite/             # From v2: FTS5 evidence store
│   │   ├── tools/
│   │   │   ├── verify-citations.tool.ts  # From v2
│   │   │   ├── evidence-search.tool.ts   # From v2
│   │   │   ├── evidence-ingest.tool.ts   # From v2
│   │   │   ├── quality-gate.tool.ts      # From v2
│   │   │   └── skill-search.tool.ts      # NEW: cross-stage skill search
│   │   ├── llm/                    # From v2: OpenRouter client
│   │   ├── skills/
│   │   │   ├── parser.ts           # Modified: stage + mode parsing
│   │   │   └── classifier.ts       # NEW: auto-classify skill stages
│   │   ├── agent/
│   │   │   ├── stage-manager.ts    # NEW: S0-S9 stage tracking
│   │   │   └── context-builder.ts  # NEW: passive skill injection
│   │   ├── commands/
│   │   │   └── legal/              # CLI commands for legal operations
│   │   │       ├── init.ts
│   │   │       ├── status.ts
│   │   │       ├── ingest.ts
│   │   │       ├── evidence.ts
│   │   │       ├── search.ts
│   │   │       ├── draft.ts
│   │   │       ├── verify.ts
│   │   │       ├── gate.ts
│   │   │       ├── review.ts
│   │   │       ├── accept.ts
│   │   │       └── reject.ts
│   │   └── types/
│   │       ├── matter.ts
│   │       ├── evidence.ts
│   │       ├── stage.ts            # NEW: S0-S9 types
│   │       └── skill-legacy.ts     # Legal skill types
│   │
│   └── tui/                         # NEW: TUI additions
│       ├── LegalStatusBar.tsx       # Case info in footer
│       ├── StageIndicator.tsx       # Current stage display
│       ├── SkillListingIndicator.tsx # Active skill count
│       └── CaseSwitcher.tsx         # Multi-case navigation
│
├── matters/                         # Per-case persistent storage
│   └── .gitkeep
│
├── skills/                          # 881+ legal skills (casemark)
│   ├── scots-legal-humanizer/      # Passive: always on in S5-S9
│   ├── 30b6-corporate-rep/
│   ├── case-summary/
│   ├── ... (881 total)
│   └── _classifier-rules.json      # Stage classification mapping
│
└── tests/
    ├── unit/                        # From v2 (37 tests)
    └── integration/                 # NEW: integration tests
```

---

# Part 3: Implementation Phases

## Phase 0: Fork Claude Code

### Objective
Copy Claude Code's TypeScript source and get it compiling as a standalone project.

### Tasks

#### T0.1: Copy Claude Code source
```
cp -r /home/alba/Claude-Code/alex000kim-original/src/ /home/alba/atticus-harness-v3/src/
```

**Files:** ~1900 TypeScript files copied from `/home/alba/Claude-Code/alex000kim-original/src/`

#### T0.2: Create project configuration

**package.json:**
```json
{
  "name": "harness-v3",
  "version": "0.1.0",
  "description": "Legal Operations Agent — Fork of Claude Code",
  "type": "module",
  "bin": { "harness": "./dist/cli.js" },
  "engines": { "node": ">=18" },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/cli.js",
    "test": "vitest run",
    "lint": "tsc --noEmit",
    "setup": "bash scripts/setup.sh"
  },
  "dependencies": {
    "better-sqlite3": "^11.0.0",
    "chalk": "^5.3.0",
    "commander": "^12.0.0",
    "ink": "^5.0.0",
    "react": "^18.0.0",
    "js-yaml": "^4.1.0",
    "jszip": "^3.10.1",
    "better-sqlite3": "^11.0.0"
  },
  "devDependencies": {
    "@types/better-sqlite3": "^7.6.0",
    "@types/js-yaml": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^18.0.0",
    "typescript": "^5.4.0",
    "vitest": "^2.0.0"
  }
}
```

Note: Claude Code's original `package.json` had Bun-specific build macros (`import { feature } from 'bun:bundle'`). These must be replaced with Node-compatible alternatives:
- `feature('FLAG')` → `process.env.FLAG === '1'` or a local feature flag module
- `MACRO.VERSION` → hardcoded version string
- `require()` → dynamic `import()` (or keep `require` with `createRequire` for CJS modules)

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "jsx": "react-jsx",
    "lib": ["ES2022"],
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

#### T0.3: Replace Bun-specific macros

Create `src/utils/featureFlags.ts`:
```typescript
// Replaces `import { feature } from 'bun:bundle'`
export function feature(flag: string): boolean {
  const envFlag = `FEATURE_${flag}`;
  return process.env[envFlag] === '1';
}
```

Replace in all files:
- `import { feature } from 'bun:bundle'` → `import { feature } from '../utils/featureFlags.js'`
- `MACRO.VERSION` → `'0.1.0'` (hardcoded string)

**File count:** ~500 files reference `feature()` or `MACRO`. Use `sed` or `ast-grep` for bulk replacement.

#### T0.4: Replace Anthropic SDK with OpenRouter

Claude Code uses `@anthropic-ai/sdk` as its primary LLM provider. We need to:
1. Keep the Anthropic SDK import as an optional fallback
2. Add OpenRouter client from v2 (`src/legal/llm/`)
3. Create a provider router that picks OpenRouter first, falls back to Anthropic

**File: `src/legal/llm/provider-router.ts`**
```typescript
// Routes LLM calls to the configured provider
export function getProvider(config: ProviderConfig): LLMProvider {
  if (process.env.OPENROUTER_API_KEY) {
    return new OpenRouterProvider(config);
  }
  // Fallback to Claude Code's native Anthropic provider
  return new AnthropicProvider(config);
}
```

**Verification:** `tsc --noEmit` passes with 0 errors. `npm run build` produces `dist/cli.js`.

### Deliverables
- Verbatim copy of Claude Code's source compiling under Node.js
- Feature flags converted from Bun macros to env vars
- OpenRouter client integrated but not yet active (wired in Phase 1)

---

## Phase 1: Core Infrastructure Integration

### Objective
Layer our legal backend (from v2) onto Claude Code's framework. Register legal tools, storage, extraction.

### Tasks

#### T1.1: Copy legal backend modules from v2

Copy these directories from `/home/alba/atticus-harness-v2/src/`:
```
cp -r extraction/   → src/legal/extraction/
cp -r storage/      → src/legal/storage/
cp -r llm/          → src/legal/llm/
cp -r skills/       → src/legal/skills/
cp -r tools/*.tool.ts → src/legal/tools/
```

**Files to move (from v2):**
| File | New location | Purpose |
|------|-------------|---------|
| `src/extraction/*` | `src/legal/extraction/` | OCR pipeline |
| `src/storage/matter.ts` | `src/legal/storage/matter.ts` | Flat-file matter CRUD |
| `src/storage/evidence.ts` | `src/legal/storage/evidence.ts` | Evidence index |
| `src/storage/candidate.ts` | `src/legal/storage/candidate.ts` | Candidate output mgmt |
| `src/storage/artifact.ts` | `src/legal/storage/artifact.ts` | Accepted artifact store |
| `src/storage/sqlite/*` | `src/legal/storage/sqlite/` | FTS5 evidence search |
| `src/llm/*` | `src/legal/llm/` | OpenRouter client |
| `src/skills/*` | `src/legal/skills/` | SKILL.md parser |
| `src/tools/verify-citations.tool.ts` | `src/legal/tools/` | Citation verification |
| `src/tools/evidence-search.tool.ts` | `src/legal/tools/` | Evidence search |
| `src/tools/evidence-ingest.tool.ts` | `src/legal/tools/` | Document ingestion |
| `src/tools/quality-gate.tool.ts` | `src/legal/tools/` | Quality checks |

**Not copied (replaced by Claude Code's versions):**
- `src/agent/` — Replaced by Claude Code's QueryEngine + AgentTool
- `src/tools/index.ts` — Replaced by Claude Code's tools.ts
- `src/tools/read-file.tool.ts` etc — Replaced by Claude Code's tools
- `src/commands/` — Replaced by Claude Code's command system
- `src/types/` — Types are added to Claude Code's existing types

#### T1.2: Update import paths

All legal module imports use the `../legal/` prefix:
```typescript
// From Claude Code's tools:
import { extractText } from '../legal/extraction/index.js';
import { searchEvidence } from '../legal/storage/sqlite/search.js';
import { loadMatter } from '../legal/storage/matter.js';
```

#### T1.3: Register legal tools in Claude Code's tool framework

Claude Code's `tools.ts` registers tools via `getAllBaseTools()`. Add legal tools:

**File: `src/tools.ts`** (modify)
```typescript
// Add after existing imports:
import { EvidenceSearchTool } from './legal/tools/evidence-search.tool.js';
import { EvidenceIngestTool } from './legal/tools/evidence-ingest.tool.js';
import { VerifyCitationsTool } from './legal/tools/verify-citations.tool.js';
import { QualityGateTool } from './legal/tools/quality-gate.tool.js';

// Add to getAllBaseTools():
function getAllBaseTools(): Tool[] {
  return [
    ...existingTools,
    new EvidenceSearchTool(),
    new EvidenceIngestTool(),
    new VerifyCitationsTool(),
    new QualityGateTool(),
  ];
}
```

**Tool input schemas** must match Claude Code's `ToolInputJSONSchema` type:
```typescript
// Example: EvidenceSearchTool inputSchema
{
  type: 'object',
  properties: {
    query: { type: 'string', description: 'Search query' },
    topK: { type: 'number', description: 'Max results' },
  },
  required: ['query'],
}
```

#### T1.4: Add legal types to Claude Code's type system

**File: `src/types/matter.ts`** (new)
```typescript
export type MatterStatus = 'pending' | 'ingesting' | 'analyzing' | 'drafting' | 'verifying' | 'complete' | 'archived';

export interface MatterIndex {
  name: string;
  created: string;
  updated: string;
  status: MatterStatus;
  evidenceCount: number;
  candidateCount: number;
  artifactCount: number;
  config: MatterConfig;
  chatDir?: string;     // Path to persistent chat session
  currentStage?: LegalStage; // Current S0-S9 stage
}
```

**File: `src/types/stage.ts`** (new)
```typescript
export const LEGAL_STAGES = {
  S0: 'Source Inventory',
  S1: 'Extraction',
  S2: 'Evidence Registry',
  S3: 'Production Status',
  S4: 'Baseline Chronology',
  S5: 'Issue Route Map',
  S6: 'Authority/Law Map',
  S7: 'Hostile Review',
  S8: 'Draft Preparation',
  S9: 'Final Quality Gate',
} as const;

export type LegalStage = keyof typeof LEGAL_STAGES;

export const STAGE_ORDER: LegalStage[] = ['S0','S1','S2','S3','S4','S5','S6','S7','S8','S9'];
```

### Deliverables
- All legal backend modules compiling under the Claude Code project
- Legal tools registered and visible in the tool framework
- `tsc --noEmit` passes

---

## Phase 2: Skill System with Stage Gating

### Objective
Integrate 881+ legal skills with stage-based filtering, passive/active modes, and auto-classification.

### Tasks

#### T2.1: Extend the Command/PromptCommand type

**File: `src/types/command.ts`** (modify)
```typescript
// Add to CommandBase:
export type CommandBase = {
  // ... existing fields ...
  
  // NEW FIELDS:
  stage?: LegalStage | LegalStage[];     // Which stage(s) this skill applies to
  mode?: 'active' | 'passive';          // How the skill is delivered
  practiceAreas?: string[];             // From SKILL.md metadata
  documentTypes?: string[];             // From SKILL.md metadata
  skillModes?: string[];               // From SKILL.md metadata
};
```

#### T2.2: Modify SKILL.md parser to extract new fields

**File: `src/legal/skills/parser.ts`** (modify from v2)
```typescript
export function parseSkillContent(content: string, sourcePath: string): SkillDefinition {
  // ... existing parsing ...
  
  const manifest: SkillFrontmatter = {
    name: String(parsed.name || 'unnamed'),
    version: parsed.metadata?.version || '0.0.0',
    description: String(parsed.description || ''),
    stage: parsed.stage || undefined,
    mode: parsed.mode || 'active',
    practiceAreas: parsed.metadata?.practice_areas || [],
    documentTypes: parsed.metadata?.document_types || [],
    skillModes: parsed.metadata?.skill_modes || [],
    stages: parsed.stages || [],
  };
  
  return skill;
}
```

**Note:** The 881 casemark skills don't have `stage` or `mode` fields. They have `metadata.practice_areas`, `metadata.document_types`, `metadata.skill_modes`. Classification happens via T2.3.

#### T2.3: Create stage auto-classifier

**File: `src/legal/skills/classifier.ts`**
```typescript
import { LegalStage } from '../../types/stage.js';

// Stage classification rules based on document_types, practice_areas, skill_modes
const STAGE_RULES: Array<{
  stages: LegalStage[];
  match: (skill: SkillDefinition) => boolean;
  priority: number; // Higher = wins on conflicts
}> = [
  // S0: Source Inventory — evidence gathering, intake
  {
    stages: ['S0'],
    priority: 5,
    match: (s) =>
      matchesAny(s.skillModes, ['Intake', 'Checklist']) &&
      matchesAny(s.practiceAreas, ['General', 'Litigation']),
  },
  // S1: Extraction — OCR, metadata, document processing
  {
    stages: ['S1'],
    priority: 5,
    match: (s) =>
      matchesAny(s.skillModes, ['Extraction', 'Analysis']) &&
      matchesAny(s.documentTypes, ['Discovery', 'Evidence']),
  },
  // S2: Evidence Registry — categorization, indexing, cross-reference
  {
    stages: ['S2'],
    priority: 5,
    match: (s) =>
      s.name?.includes('summary') ||
      s.name?.includes('index') ||
      s.name?.includes('registry'),
  },
  // S3: Production Status — tracking, chain of custody
  {
    stages: ['S3'],
    priority: 5,
    match: (s) =>
      matchesAny(s.documentTypes, ['Discovery', 'Subpoena', 'Deposition']),
  },
  // S4: Baseline Chronology — timelines, sequencing
  {
    stages: ['S4'],
    priority: 5,
    match: (s) =>
      s.name?.includes('chronology') ||
      s.name?.includes('timeline') ||
      matchesAny(s.skillModes, ['Sequencing']),
  },
  // S5: Issue Route Map — strategy, options, escalation
  {
    stages: ['S5'],
    priority: 5,
    match: (s) =>
      matchesAny(s.skillModes, ['Strategy', 'Planning']) ||
      matchesAny(s.practiceAreas, ['Litigation', 'Corporate']),
  },
  // S6: Authority/Law Map — statutes, case law, jurisdiction
  {
    stages: ['S6'],
    priority: 5,
    match: (s) =>
      matchesAny(s.practiceAreas, ['Regulatory', 'Compliance']) ||
      s.name?.includes('statute') ||
      s.name?.includes('regulation') ||
      s.name?.includes('compliance'),
  },
  // S7: Hostile Review — red-team, risk, gap analysis
  {
    stages: ['S7'],
    priority: 5,
    match: (s) =>
      matchesAny(s.skillModes, ['Review', 'Audit', 'Risk Assessment']) ||
      s.name?.includes('review') ||
      s.name?.includes('audit') ||
      s.name?.includes('risk'),
  },
  // S8: Draft Preparation — drafting, structure, citations
  {
    stages: ['S8'],
    priority: 10, // Higher priority: many skills are drafting
    match: (s) =>
      matchesAny(s.skillModes, ['Drafting', 'Template']) ||
      matchesAny(s.documentTypes, ['Contract', 'Agreement', 'Brief', 'Motion', 'Letter']),
  },
  // S9: Final Quality Gate — verify, finalize, audit
  {
    stages: ['S9'],
    priority: 5,
    match: (s) =>
      s.name?.includes('gate') ||
      s.name?.includes('verify') ||
      s.name?.includes('final') ||
      matchesAny(s.skillModes, ['Verification', 'Audit']),
  },
];

export function classifyStage(skill: SkillDefinition): LegalStage[] {
  const matched: Array<{ stage: LegalStage; priority: number }> = [];
  
  for (const rule of STAGE_RULES) {
    if (rule.match(skill)) {
      matched.push({ stage: rule.stages[0], priority: rule.priority });
    }
  }
  
  if (matched.length === 0) return ['S5']; // Default: Issue Route Map
  
  // Return in priority order
  return matched
    .sort((a, b) => b.priority - a.priority)
    .map(m => m.stage);
}

function matchesAny(arr: string[] | undefined, targets: string[]): boolean {
  if (!arr || arr.length === 0) return false;
  const lower = arr.map(a => a.toLowerCase());
  return targets.some(t => lower.includes(t.toLowerCase()));
}
```

**File: `skills/_classifier-rules.json`** — store the rules as a JSON config so they can be tuned without code changes.

#### T2.4: Copy all 881 skills

```bash
	cp -r "/home/alba/Documents/Legal Skills - Ready/"* /home/alba/atticus-harness-v3/skills/
```

Run the classifier on import:
```typescript
import { classifyStage } from './src/legal/skills/classifier.js';
import { parseSkillMd } from './src/legal/skills/parser.js';

// During skill loading:
const skill = await parseSkillMd(filePath);
const stages = classifyStage(skill);
skill.manifest.stage = stages[0]; // Primary stage
skill.manifest.stages = stages;   // All matched stages
```

#### T2.5: Modify getSkillToolCommands() for stage-gating

**File: `src/commands.ts`** (modify)

```typescript
export function getSkillToolCommands(
  cwd: string,
  stage?: LegalStage  // NEW: optional stage filter
): Command[] {
  const allCommands = getCommands(cwd);
  
  return allCommands.filter(cmd => {
    if (cmd.type !== 'prompt') return false;
    if (cmd.disableModelInvocation) return false;
    if (cmd.source === 'builtin') return false;
    
    // Stage filter: only show skills for current stage
    if (stage && cmd.stage) {
      const stages = Array.isArray(cmd.stage) ? cmd.stage : [cmd.stage];
      if (!stages.includes(stage)) return false;
    }
    
    return true;
  });
}
```

#### T2.6: Modify getSkillListingAttachments() for stage-filtered injection

**File: `src/utils/attachments.ts`** (modify)

The `getSkillListingAttachments()` function currently calls `getSkillToolCommands(cwd)` and renders all skills. Change it to:

```typescript
function getSkillListingAttachments(
  cwd: string,
  options: { stage?: LegalStage }
): Attachment[] {
  const stageSkills = getSkillToolCommands(cwd, options.stage);
  const skillList = formatCommandsWithinBudget(stageSkills);
  
  return [{
    type: 'skill_listing',
    content: skillList,
    skillCount: stageSkills.length,
    currentStage: options.stage,
  }];
}
```

The skill count per stage should be ~25-55 skills — well within Claude Code's 1% context budget for full descriptions.

#### T2.7: Passive skill injection into system prompt

**File: `src/legal/agent/context-builder.ts`** (new)

```typescript
import { LegalStage } from '../../types/stage.js';

// Skills tagged as passive and active for the current stage
export function getPassiveSkillPrompts(
  stage: LegalStage,
  allSkills: SkillDefinition[]
): string[] {
  return allSkills
    .filter(s => s.manifest.mode === 'passive')
    .filter(s => {
      const stages = s.manifest.stages?.length > 0 
        ? s.manifest.stages 
        : [s.manifest.stage];
      return stages.includes(stage);
    })
    .map(s => s.body);
}
```

**File: `src/constants/prompts.ts`** (modify)

In `getSystemPrompt()`, after the dynamic boundary section, inject passive skill prompts:

```typescript
import { getPassiveSkillPrompts } from '../legal/agent/context-builder.js';

// In getSystemPrompt():
const passivePrompts = getPassiveSkillPrompts(currentStage, allSkills);
if (passivePrompts.length > 0) {
  sections.push({
    heading: 'Legal Context',
    content: passivePrompts.join('\n\n'),
  });
}
```

#### T2.8: Track current stage in AppState

**File: `src/state/AppStateStore.ts`** (modify)

```typescript
// Add to AppState type:
export type AppState = {
  // ... existing fields ...
  
  // NEW:
  currentMatter: string | null;
  currentStage: LegalStage | null;
  matterStatus: Record<string, MatterStatus>;
  showDocumentPreview: boolean;
  activeSubAgentId: string | null;
};
```

**Stage transitions** happen when:
- Matter status changes (e.g., `ingesting` → S1, `drafting` → S8)
- User explicitly sets a stage: `set-stage S6`
- Agent detects stage completion and auto-advances

**File: `src/legal/agent/stage-manager.ts`** (new)
```typescript
export function stageForStatus(status: MatterStatus): LegalStage {
  const map: Record<MatterStatus, LegalStage> = {
    pending: 'S0',
    ingesting: 'S1',
    analyzing: 'S5',
    drafting: 'S8',
    verifying: 'S9',
    complete: 'S9',
    archived: 'S9',
  };
  return map[status] || 'S0';
}
```

### Deliverables
- All 881 skills copied and classified by stage
- `getSkillToolCommands()` filters by current stage
- `skill_listing` attachment only shows stage-appropriate skills
- Passive skills injected into system prompt
- `tsc --noEmit` passes

---

## Phase 3: Persistent Per-Case Chat

### Objective
Each case gets its own persistent chat session. Closing and reopening resumes the exact conversation. Multiple cases can be active.

### Tasks

#### T3.1: Chat session storage design

Each matter's chat is stored at:
```
matters/<case-name>/
├── _index.json           # Matter metadata
├── _chat/                # NEW: persistent chat session
│   ├── messages.ndjson   # All messages (append-only)
│   ├── compacted/        # Compacted segments
│   └── session.json      # Current session metadata
├── _evidence/
├── _extractions/
├── _candidates/
└── _artifacts/
```

**messages.ndjson format** (append-only JSONL):
```json
{"id":"msg_001","role":"user","content":"What evidence do we have?","timestamp":"2026-05-02T10:00:00Z"}
{"id":"msg_002","role":"assistant","content":"Let me check the evidence...","timestamp":"2026-05-02T10:00:05Z"}
{"id":"msg_003","role":"tool","name":"evidence_search","args":{"query":"tenancy agreement"},"result":"...","timestamp":"2026-05-02T10:00:06Z"}
```

**session.json format:**
```json
{
  "sessionId": "ses_abc123",
  "matterName": "napier-rent-arrears",
  "created": "2026-05-02T10:00:00Z",
  "lastActivity": "2026-05-02T15:30:00Z",
  "messageCount": 147,
  "currentStage": "S5",
  "compacted": false,
  "totalTokens": 45000
}
```

#### T3.2: Modify session storage path

Claude Code stores sessions at `~/.claude/sessions/`. Modify to store at `matters/<case>/_chat/`.

**File: `src/utils/sessionPath.ts`** (modify or create override)

```typescript
import { getMatterPath } from '../legal/storage/matter.js';

export function getSessionDir(matterName?: string): string {
  if (matterName) {
    return getMatterPath(matterName, '_chat');
  }
  // Fallback for non-case sessions
  return join(homedir(), '.claude', 'sessions');
}
```

#### T3.3: Modify session load/save

Claude Code's session system is in `src/utils/sessionHistory.ts` and `src/services/session/`. Modify to:

1. **On `harness tui <case>`**: Load messages from `matters/<case>/_chat/messages.ndjson`
2. **On message append**: Write to `messages.ndjson` (append, JSONL format)
3. **On crash recovery**: Read from `session.json` to restore last state
4. **On exit**: Write final session state to `session.json`

#### T3.4: Case switching in TUI

New keybinding: `ctrl+shift+c` opens case switcher.

**File: `src/tui/CaseSwitcher.tsx`** (new)

A React Ink component that:
1. Lists all matters (from `listMatters()`)
2. Shows current stage for each
3. Enter loads the selected case's chat session
4. Escape returns to current case

```typescript
interface CaseEntry {
  name: string;
  status: MatterStatus;
  stage: LegalStage;
  evidenceCount: number;
  lastActivity: string;
}
```

**Keybinding addition** in `src/keybindings/defaultBindings.ts`:
```typescript
{ key: 'C', ctrl: true, shift: true, action: 'app:switchCase' },
```

### Deliverables
- Chat sessions persist at `matters/<case>/_chat/`
- `harness tui <case>` resumes previous conversation
- `ctrl+shift+c` opens case switcher
- All chat history survives terminal close + reopen

---

## Phase 4: Sub-Agent Drill-Down

### Objective
Users can drill into any sub-agent's conversation, see their thinking, tool calls, and document edits.

### Tasks

#### T4.1: Add parent-child task linking

Claude Code's `AppState.tasks` is flat. Add parent linkage:

**File: `src/types/task.ts`** (modify)
```typescript
// Add to LocalAgentTaskState:
export type LocalAgentTaskState = {
  // ... existing fields ...
  
  // NEW:
  parentTaskId?: string;      // Links to parent agent's task
  childTaskIds: string[];     // Links to child agents' tasks
  taskDepth: number;          // 0 = root, 1 = sub-agent, 2 = sub-sub-agent
};
```

**In `AgentTool.tsx`** (modify):
```typescript
// When spawning a sub-agent:
const childTaskId = await registerAsyncAgent({
  ...agentConfig,
  parentTaskId: currentTaskId,  // Pass parent link
});

// Add child to parent's child list:
enqueueAppStateUpdate(state => {
  const parent = state.tasks[currentTaskId];
  if (parent && 'childTaskIds' in parent) {
    parent.childTaskIds.push(childTaskId);
  }
});
```

#### T4.2: ctrl+n drill-down navigation

**Files to modify:**
- `src/keybindings/defaultBindings.ts` — Add `ctrl+n` binding
- `src/hooks/useGlobalKeybindings.tsx` — Add handler
- `src/screens/REPL.tsx` — Add `viewingAgentTaskId` state

**Flow:**
1. User sees a sub-agent's progress line (`AgentProgressLine`)
2. Press `ctrl+n` — sets `viewingAgentTaskId` to that agent's taskId
3. REPL switches `displayedMessages` to the sub-agent's message array
4. Header shows breadcrumb: `Main → ResearchAgent → DocumentAnalysis`
5. Press `Escape` or `ctrl+c` — returns to parent agent's view

**REPL.tsx modification** (~line 4509–4520):
```typescript
const [viewingAgentTaskId, setViewingAgentTaskId] = useState<string | null>(null);

const displayedMessages = viewingAgentTaskId
  ? getAgentMessages(viewingAgentTaskId)  // Sub-agent's messages
  : mainConversationMessages;             // Main chat

// Breadcrumb:
const breadcrumb = viewingAgentTaskId
  ? buildBreadcrumb(viewingAgentTaskId)
  : null;

// In render:
<Box>
  {breadcrumb && <Breadcrumb trail={breadcrumb} />}
  <Messages messages={displayedMessages} />
</Box>
```

#### T4.3: Real-time sub-agent output streaming

Claude Code's `TaskOutputTool` already polls `getAppState().tasks[taskId]`. For real-time updates:
- Sub-agent tool calls appear as progress messages in the parent's stream
- AgentProgressLine component shows current activity
- TaskOutputTool can be used to fetch full output when drill-down is active

### Deliverables
- `ctrl+n` drills into sub-agent transcript
- Breadcrumb navigation shows agent tree path
- Real-time progress visible in AgentProgressLine
- Escape returns to parent agent

---

## Phase 5: Legal Guardrails & Permissions

### Objective
Legal-specific approval gates: evidence hashing, citation verification, operator approval before sensitive actions.

### Tasks

#### T5.1: Permission hook for legal approval

Claude Code's `PermissionRequest` hook fires before tool execution. Implement a legal hook:

**File: `src/legal/permissions/legal-approval-hook.ts`** (new)
```typescript
import type { PermissionRequestResult } from '../../types/hooks.js';

export async function legalApprovalHook(
  toolName: string,
  toolInput: Record<string, unknown>,
  context: ToolUseContext
): Promise<PermissionRequestResult | null> {
  // Return null to pass through (no legal gate needed)
  // Return { behavior: 'deny' } to require operator approval
  
  // Gate 1: Evidence ingestion requires approval
  if (toolName === 'evidence_ingest') {
    return {
      behavior: 'deny',
      message: `Legal review required: Ingest evidence into case "${context.matterName}"?
      
  File: ${toolInput.filePath}
  This will hash, OCR, and index the document.
  
  Approve? (Yes/No)`,
    };
  }
  
  // Gate 2: Final output accept requires dual approval
  if (toolName === 'accept') {
    return {
      behavior: 'deny',
      message: `Final output acceptance requires legal operator approval.
  
  This will mark output as a canonical artifact.
  Are you authorized to accept this?`,
    };
  }
  
  return null; // No legal gate, pass through
}
```

**Registration** in Claude Code's hook system (`src/utils/hooks.ts` or similar):
```typescript
registerPermissionRequestHook(legalApprovalHook);
```

#### T5.2: Force citation verification before accept

**File: `src/legal/tools/verify-citations.tool.ts`** (already exists from v2, ensure it's registered)

The verification tool:
1. Extracts `[EVIDENCE_ID]` citations from a draft
2. Reads source text from `_extractions/{id}.txt`
3. Normalizes both (casefold, collapse whitespace)
4. Exact substring match → `supported`
5. Term overlap ≥50% → `partially_supported`
6. Returns per-citation report with confidence

**Gate in `acceptCandidate()`:**
```typescript
// In src/legal/storage/candidate.ts
export async function acceptCandidate(matterName: string, candidateId: string): Promise<Artifact> {
  // Force citation verification before accept
  const candidate = await loadCandidate(matterName, candidateId);
  const verifyTool = new VerifyCitationsTool();
  const result = await verifyTool.call(
    { candidatePath: getCandidatePath(matterName, candidateId) },
    createContext(matterName)
  );
  
  if (!result.success || result.data?.checks?.some(c => c.status === 'unsupported')) {
    throw new Error('Cannot accept: citation verification failed. Run "harness verify" first.');
  }
  
  // Proceed with acceptance
  return promoteToArtifact(matterName, candidate);
}
```

#### T5.3: Evidence chain of custody

All evidence ingestion flows through a single path that enforces:
1. SHA-256 hashing on ingestion
2. Hash stored in evidence record and SQLite
3. Duplicate detection by hash (rejects re-ingestion)

**File: `src/legal/tools/evidence-ingest.tool.ts`** (from v2, already implements this)

### Deliverables
- Permission hook blocks evidence ingestion without approval
- Citation verification is required before acceptance
- Evidence chain of custody enforced on all ingestion paths

---

## Phase 6: TUI Enhancements

### Objective
Legal-specific TUI additions: case switcher, stage indicator, skill listing display.

### Tasks

#### T6.1: Case status in status bar

**File: `src/tui/LegalStatusBar.tsx`** (new)

Shows in the footer:
```
[Case: napier-rent-arrears] [Stage: S5 — Issue Route Map] [Skills: 42 active] [Evidence: 73 files]
```

Integrates with Claude Code's `PromptInputFooter` component.

#### T6.2: Stage indicator

**File: `src/tui/StageIndicator.tsx`** (new)

Shows current stage with color coding:
```
S0 ▸ S1 ▸ S2 ▸ S3 ▸ S4 ▸ S5 ◀ ▸ S6 ▸ S7 ▸ S8 ▸ S9
     [current stage highlighted in cyan]
```

Renders inline in the REPL's header area.

#### T6.3: Document preview toggle

**File: `src/tui/DocumentPreview.tsx`** (new)

When `ctrl+m` is pressed, shows a panel in the bottom slot:
```
┌─ Document Preview ──────────────────────────┐
│ dispute-letter.md                            │
│                                              │
│ [ADDED] paragraph 3:                         │
│  The tenant disputes the rent arrears        │
│  as set out in [NAP-SRC-0028]...             │
│                                              │
│ [CHANGED] paragraph 5:                       │
│  - This request is made pursuant to...       │
│  + This request is made under section 11...  │
└──────────────────────────────────────────────┘
```

Listens to `ProgressMessage` events from `FileEditTool` to get real-time diffs.

### Deliverables
- Status bar shows case name, stage, skill count
- Stage indicator with color-coded progress
- Document preview panel via `ctrl+m`

---

## Phase 7: Context Compaction for Legal

### Objective
Adapt Claude Code's compaction system for legal work: longer document retention, legal-specific session memory.

### Tasks

#### T7.1: Increase compaction thresholds

**File: `src/services/compact/autoCompact.ts`** (modify)

```typescript
// Legal matters keep more context
const AUTOCOMPACT_BUFFER_TOKENS = 25_000;  // Default: 13_000
const POST_COMPACT_MAX_FILES_TO_RESTORE = 10; // Default: 5
const POST_COMPACT_TOKEN_BUDGET = 100_000;    // Default: 50_000
```

#### T7.2: Legal session memory template

**File: `src/services/compact/sessionMemoryCompact.ts`** (modify system prompt)

Change the session memory summarization prompt to use legal sections:

```
Current Status → Case Status
  - Current stage, what was completed, what's pending

Key Technical Concepts → Legal Issues & Authorities
  - Statutes, regulations, case law cited
  - Jurisdictional considerations

Files and Code Sections → Evidence & Documents
  - Key evidence items and their status
  - Citations verified and pending

Errors and Fixes → Legal Risks & Deadlines
  - Statute of limitations
  - Filing deadlines
  - Procedural risks

Problem Solving → Legal Strategy
  - Arguments developed
  - Counter-arguments anticipated

Pending Tasks → Action Items
  - Next steps with priorities
  - Evidence still needed
```

#### T7.3: Post-compact file preservation

Modify `createPostCompactFileAttachments()` to preserve legal document context:
- Keep recently read legal documents in context (not just code files)
- Preserve citation maps across compaction boundaries
- Restore evidence search results for current stage

### Deliverables
- Auto-compact preserves legal document context
- Session memory template structured for legal work
- Post-compact restoration includes legal citations and evidence

---

## Phase 8: Integration & Testing

### Objective
End-to-end verification of all components.

### Tasks

#### T8.1: Unit tests from v2 (37 tests)

Copy from `/home/alba/atticus-harness-v2/tests/unit/`:
- `matter-storage.test.ts`
- `extraction.test.ts`
- `token-counter.test.ts`
- `skills-parser.test.ts`
- `citation-verification.test.ts`
- `llm-errors.test.ts`

#### T8.2: New integration tests

**File: `tests/integration/skill-classification.test.ts`**
```typescript
// Test that skills are properly classified by stage
describe('skill stage classification', () => {
  it('classifies contract drafting skills as S8', () => {
    const skill = mockSkill({ documentTypes: ['Contract'], skillModes: ['Drafting'] });
    const stages = classifyStage(skill);
    expect(stages).toContain('S8');
  });
  
  it('classifies deposition skills as S3', () => {
    const skill = mockSkill({ documentTypes: ['Deposition'] });
    const stages = classifyStage(skill);
    expect(stages).toContain('S3');
  });
  
  it('defaults unknown skills to S5', () => {
    const skill = mockSkill({});
    const stages = classifyStage(skill);
    expect(stages).toContain('S5');
  });
  
  it('classifies 881 real skills without errors', async () => {
    const skillsDir = join(__dirname, '../../skills');
    const skills = await loadSkillsFromDir(skillsDir);
    for (const skill of skills) {
      expect(() => classifyStage(skill)).not.toThrow();
    }
  });
});
```

**File: `tests/integration/citation-verification.test.ts`**
```typescript
// Test real citation matching
describe('citation verification', () => {
  it('detects exact quote match', () => {
    const source = 'the tenant shall pay rent of one thousand pounds';
    const quote = 'tenant shall pay rent';
    expect(verifyQuote(quote, source)).toBe('supported');
  });
  
  it('detects quote mismatch', () => {
    const source = 'the tenant shall pay rent of one thousand pounds';
    const quote = 'tenant shall pay fifty thousand pounds';
    expect(verifyQuote(quote, source)).toBe('unsupported');
  });
  
  it('handles punctuation differences', () => {
    const source = 'the tenant shall pay rent of one thousand pounds';
    const quote = 'the tenant shall pay rent of one thousand pounds.';
    expect(verifyQuote(quote, source)).toBe('supported');
  });
});
```

**File: `tests/integration/stage-filtering.test.ts`**
```typescript
describe('stage-gated skill filtering', () => {
  it('returns only S5 skills when stage is S5', async () => {
    const skills = await getSkillToolCommands(cwd, 'S5');
    expect(skills.every(s => s.stage === 'S5' || s.stage?.includes('S5')));
  });
  
  it('returns Scots law skill for all S5-S9 stages', () => {
    const scots = skills.find(s => s.name === 'scots-legal-humanizer');
    expect(scots?.stage).toContain('S5');
    expect(scots?.stage).toContain('S6');
    expect(scots?.stage).toContain('S7');
    expect(scots?.stage).toContain('S8');
    expect(scots?.stage).toContain('S9');
  });
});
```

#### T8.3: Build verification

```bash
npm run lint      # tsc --noEmit → 0 errors
npm run build     # tsc → dist/cli.js
npm test          # vitest run → all tests pass
node dist/cli.js --help  # All commands visible
```

### Deliverables
- All 37 v2 tests passing under v3
- Skill classification tests
- Citation verification tests
- Stage filtering tests
- `npm run build` produces working binary

---

## Part 4: Key Architecture Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Fork vs rebuild | Fork Claude Code | 1900+ files of working TUI, agent loop, permissions, compaction |
| Chat persistence | Per-case messages.ndjson | Survives terminal close, resumes exactly. Each case is independent. |
| Skill storage | Flat file, same dir structure | Claude Code already watches for changes via chokidar |
| Skill filtering | Stage-gated (S0-S9) | 881 skills ÷ 10 stages ≈ 88/stage. Within 1% context budget. |
| Passive skills | System prompt injection | Scots law must modify base behavior, not be invoked |
| Skill classification | Rule-based from metadata | 881 skills × 5 min each = 73 hours manual tagging. 20 rules = 2 hours. |
| Sub-agent TUI | ctrl+n drill-down | Claude Code already has the task infrastructure. Adding parent links + zoomed view. |
| Legal guardrails | PermissionRequest hooks | Claude Code's 15-step pipeline already exists. Adding legal-specific hooks. |
| OpenRouter | Primary provider | Replaces Anthropic SDK. Keep Anthropic as fallback. |
| Document preview | ProgressMessage streaming | Claude Code already streams tool results. Adding diff rendering component. |

---

## Part 5: Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Claude Code source has 500+ Bun-specific imports | High (blocks compile) | Bulk sed/ast-grep replacement, feature flag shim module |
| 881 skills have inconsistent frontmatter | Medium (classification errors) | Rule-based classifier with manual override for edge cases. Validate on import. |
| Stage classification rules miss some skills | Medium (wrong skills shown) | Default to S5 for unclassified. Add continuous improvement loop via SkillCreate. |
| Context compaction breaks legal document context | Medium (lost evidence) | Increased thresholds, legal-specific session memory, post-compact restoration of citations |
| Anthropic SDK removal breaks Claude-specific features | Medium | Keep Anthropic SDK as optional dependency. Provider router handles fallback. |
| 881 skills overwhelm file watcher | Low | Increase chokidar debounce. Skills are static — no runtime modifications. |

---

## Part 6: Future Considerations (Not in Scope)

1. **SkillCreate tool** — Agent generates new skills at runtime when it detects a recurring pattern not covered by existing skills. Saves to `matters/<case>/_generated-skills/`.
2. **Case template system** — Pre-configured case templates with stage-appropriate skill bundles for common case types (housing disrepair, personal injury, contract dispute).
3. **Multi-user collaboration** — Multiple operators on the same case via shared message store + permission escalation.
4. **Batch processing mode** — Headless batch processing of document sets through the extraction → analysis → draft pipeline without TUI.
