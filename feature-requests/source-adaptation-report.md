# alex000kim-original source adaptation report

Date: 2026-05-09

Source inspected: `/home/alba/Claude-Code/alex000kim-original/src/`

Harness target: `/home/alba/atticus-harness-v2`

This report summarizes the inspection of the requested source directories from
`alex000kim-original` and identifies what is useful to adapt into Harness v2.

The source inspection was read-only. This report file is the only artifact added
after the fact so the findings are not only in the conversation history.

## Scope

Requested directories inspected:

| Source directory | File count |
| --- | ---: |
| `/home/alba/Claude-Code/alex000kim-original/src/services` | 130 |
| `/home/alba/Claude-Code/alex000kim-original/src/tasks` | 12 |
| `/home/alba/Claude-Code/alex000kim-original/src/types` | 11 |
| `/home/alba/Claude-Code/alex000kim-original/src/utils` | 564 |
| `/home/alba/Claude-Code/alex000kim-original/src/outputStyles` | 1 |
| `/home/alba/Claude-Code/alex000kim-original/src/hooks` | 104 |
| `/home/alba/Claude-Code/alex000kim-original/src/coordinator` | 1 |
| `/home/alba/Claude-Code/alex000kim-original/src/constants` | 21 |
| `/home/alba/Claude-Code/alex000kim-original/src/plugins` | 2 |
| Total | 846 |

The inspection was split across multiple analysis lanes:

- Services: API client, retry handling, tools, analytics, MCP, plugins, settings sync, memory, diagnostics, and miscellaneous services.
- Utils A: shell, process input, file/path helpers, token helpers, queueing, truncation, serialization, and related low-level utilities.
- Utils B: plugins, settings, secure storage, task output, session restore, telemetry, swarm/team utilities, and tool result storage.
- Hooks/coordinator/output styles/plugins: React hooks, permission UI hooks, remote/bridge hooks, coordinator mode, output style loading, and built-in plugin registry.
- Tasks/types/constants: task abstractions, generated and non-generated types, prompt constants, tool limits, output style constants, and product constants.
- Harness fit: comparison with Harness source files such as `src/agent/query-loop.ts`, `src/tools/index.ts`, `src/types/tool.ts`, `src/llm/client.ts`, `src/llm/errors.ts`, `src/plugins/loader.ts`, `src/mcp/client.ts`, and config/state/orchestration modules.

Important user decision after the first summary: do not use the permissions
system from the source project. Therefore, permissions/shell-policy material is
excluded from the recommended implementation plan below. Some permission-related
files were observed during inspection, but they are not candidates for adoption.

## Executive summary

The source project has several mature ideas that can improve Harness without
importing its whole runtime. The useful parts are mostly infrastructure patterns:

1. Tool orchestration and concurrent-safe execution.
2. LLM retry, error classification, and context-overflow resilience.
3. Large tool-result persistence instead of simple truncation.
4. MCP/plugin validation, deduplication, and atomic configuration writes.
5. Settings layering, provenance, validation, and user-facing tips.
6. Output styles as Harness prompt profiles.
7. Secure storage abstraction for provider secrets.
8. Session restore and transcript/event continuity.
9. Coordinator and callback patterns, only if Harness later expands team/remote orchestration.

The main recommendation is selective adaptation. Do not copy broad modules
directly. Reimplement the ideas in Harness-native TypeScript and preserve the
current Harness architecture: provider-routed LLM clients, matter-centered state,
flat JSON/SQLite storage, tool registry, query loop, orchestration runtime, and
CLI commands.

## Recommendation ranking

### 1. Tool orchestration and concurrent-safe execution

Confidence: high

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/services/tools/toolOrchestration.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/tools/toolExecution.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/tools/toolHooks.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/tools/StreamingToolExecutor.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`
- `/home/alba/atticus-harness-v2/src/tools/index.ts`
- `/home/alba/atticus-harness-v2/src/types/tool.ts`

What the source project does well:

- It distinguishes concurrency-safe tools from context-mutating tools.
- It can run independent read-like tools together.
- It serializes tools that alter context or may conflict with sibling calls.
- It treats streaming tool execution as a scheduling problem, not merely a loop.
- It tracks aborts, sibling failures, synthetic errors, and ordered progress.
- It centralizes execution hooks around a single tool path.

Current Harness shape:

- Harness has a `Tool<I, O>` interface with `call()` and `inputSchema`.
- Harness has a `ToolRegistry` that resolves tools, checks basic policy, executes
  calls, emits events, and redacts basic metadata.
- The agent query loop currently executes tool calls sequentially.
- This is simpler and easier to reason about, but leaves performance on the
  table for read-heavy turns such as search, grep, read-file, inventory, and
  evidence lookup.

Recommended Harness implementation:

- Extend `src/types/tool.ts` with optional metadata:
  - `executionKind?: "read" | "write" | "state" | "network" | "shell" | "mcp"`
  - `isConcurrencySafe?: boolean`
  - `modifiesContext?: boolean`
  - `maxConcurrencyGroup?: string`
- Add `src/tools/executor.ts` or `src/tools/orchestration.ts`.
- Partition tool calls into:
  - safe concurrent calls,
  - serial state-changing calls,
  - serial unknown calls.
- Start conservatively:
  - mark `read-file`, `grep`, `glob`, search, inventory, and evidence-read tools
    as concurrency-safe;
  - keep edit, notebook edit, bash, sleep, todo-write, MCP mutation, and state
    mutation tools serial.
- Update `src/agent/query-loop.ts` to delegate tool-call execution to the new
  executor.
- Keep the executor independent from React, terminal UI, or source-project hook
  patterns.

Suggested tests:

- Multiple read tools run in parallel and return all results.
- Write tools remain serial.
- Mixed read/write batches preserve safe ordering.
- A failed read tool does not cancel unrelated read tools unless configured.
- A failed write tool stops later dependent write tools.
- Tool events still include call id, name, duration, success/failure, and redacted input metadata.

Expected payoff:

- Faster read-heavy agent turns.
- Cleaner execution semantics.
- Better future support for streaming tools and background tasks.

### 2. LLM retry, error classification, and context resilience

Confidence: high

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/services/api/withRetry.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/api/errors.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/api/client.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/api/claude.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/api/bootstrap.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/llm/client.ts`
- `/home/alba/atticus-harness-v2/src/llm/errors.ts`
- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`
- `/home/alba/atticus-harness-v2/src/llm/config.ts`

What the source project does well:

- It separates transient retryable errors from hard errors.
- It has source-aware retry behavior, for example different behavior for
  foreground versus background actions.
- It handles provider overload and rate limit cases explicitly.
- It uses retry-after/backoff logic.
- It has context-overflow and max-token adjustment behavior.
- It can emit progress while waiting/retrying.

Current Harness shape:

- Harness has provider-routed LLM clients.
- Harness already supports OpenAI-compatible providers, OpenRouter/DeepSeek-like
  flows, Anthropic, Codex SDK, and local profiles.
- Harness has basic `LLMError`, `RateLimitError`, `TokenLimitError`, and
  `AuthError` classification.
- Harness applies a timeout wrapper and parses responses, but retry behavior is
  still relatively thin.

Recommended Harness implementation:

- Add `src/llm/retry.ts`.
- Introduce an explicit `RetryPolicy` type:
  - `maxAttempts`
  - `baseDelayMs`
  - `maxDelayMs`
  - `jitter`
  - `respectRetryAfter`
  - `retryableStatuses`
  - `retryableErrorCodes`
  - `source?: "interactive" | "daemon" | "worker" | "background"`
- Expand `src/llm/errors.ts` to classify:
  - auth failure,
  - rate limit,
  - provider overload,
  - transient network failure,
  - timeout,
  - invalid request,
  - context length,
  - content policy refusal,
  - malformed provider response.
- Wire retry handling in `src/llm/client.ts` around provider calls, not inside
  each provider branch.
- On context overflow, call into the existing query-loop history compaction path
  rather than merely failing.
- Emit events for retry attempt, retry delay, final failure, and context recovery.

Suggested tests:

- 429 with retry-after delays and retries.
- 529/overload retries according to policy.
- Auth failure does not retry.
- Invalid request does not retry.
- Timeout retries only when policy permits.
- Context length error triggers compaction path.
- Retry events are persisted.

Expected payoff:

- Fewer failed long-running tasks.
- More consistent behavior across providers.
- Better daemon/orchestration reliability.

### 3. Large tool-result persistence

Confidence: high

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/utils/toolResultStorage.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/task/diskOutput.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/task/TaskOutput.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/task/framework.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`
- `/home/alba/atticus-harness-v2/src/state/events.ts`
- `/home/alba/atticus-harness-v2/src/agent/recorder.ts`
- `/home/alba/atticus-harness-v2/src/tools/index.ts`

What the source project does well:

- It avoids pushing huge tool results directly into the model context.
- It persists large outputs on disk.
- It returns a preview and a reference instead of only truncating.
- It handles task output incrementally.
- It keeps output storage session-stable.

Current Harness shape:

- Harness caps tool output size inside the query loop.
- That avoids context blowups but loses data.
- For legal/research workflows, losing the tail of a large search, inventory, or
  evidence result can be expensive.

Recommended Harness implementation:

- Add `src/tools/tool-result-store.ts`.
- Store large outputs under the current matter/run directory, for example:
  - `.harness/runs/<run-id>/tool-results/<tool-call-id>.json`
  - or the existing matter artifact area if one is already preferred.
- Return a structured result:
  - `preview`
  - `truncated: true`
  - `storedResultPath`
  - `originalByteLength`
  - `contentType`
- Add a tool or command path for reading persisted results.
- Emit storage events into `src/state/events.ts`.
- Keep a hard cap on model-visible content even when persistence succeeds.

Suggested tests:

- Small output returns inline.
- Large output stores to disk and returns preview.
- Stored result can be read back.
- Failed storage falls back to safe truncation.
- Stored result metadata is included in the transcript/event stream.

Expected payoff:

- Better evidence retention.
- Lower context pressure.
- More trustworthy legal/research workflows.

### 4. MCP/plugin validation, deduplication, and atomic config handling

Confidence: high

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/services/mcp/config.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/mcp/client.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/plugins/pluginOperations.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/plugins/pluginLoader.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/plugins/validatePlugin.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/plugins/installedPluginsManager.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/plugins/marketplaceManager.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/plugins/builtinPlugins.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/plugins/loader.ts`
- `/home/alba/atticus-harness-v2/src/mcp/client.ts`
- `/home/alba/atticus-harness-v2/src/mcp/types.ts`
- `/home/alba/atticus-harness-v2/src/tools/index.ts`
- `/home/alba/atticus-harness-v2/src/commands/plugin.ts`

What the source project does well:

- It validates plugin manifests more deeply.
- It checks for path traversal in plugin-declared files.
- It separates built-in, installed, marketplace, and manually configured sources.
- It deduplicates MCP servers by stable command/url-like signatures.
- It prefers explicit manual user configuration over plugin-provided duplicates.
- It writes config atomically.

Current Harness shape:

- Harness has a plugin loader and MCP client.
- It can discover plugin skills and plugin-provided MCP config.
- It can register MCP tools into the tool registry.
- The current shape is functional, but validation/provenance/dedup can be made stronger.

Recommended Harness implementation:

- Add a plugin manifest validator.
- Add path traversal checks for plugin skill, command, MCP, and asset paths.
- Add plugin source metadata:
  - built-in,
  - workspace,
  - user-local,
  - installed,
  - generated,
  - marketplace/future.
- Add MCP server signature calculation:
  - command + args + cwd + env subset for stdio,
  - url + headers/profile for HTTP/SSE.
- Deduplicate plugin-provided MCP servers against user-provided servers.
- Preserve user/manual MCP servers when conflicts occur.
- Use atomic file writes for any plugin/MCP config mutation.

Suggested tests:

- Invalid plugin manifest is rejected with useful errors.
- Path traversal in plugin files is rejected.
- Duplicate MCP server from plugin does not override manual config.
- Two plugin MCP servers with same signature dedupe deterministically.
- Atomic write does not corrupt existing config on write failure.

Expected payoff:

- Safer plugin ecosystem.
- Clearer debug output.
- Less accidental duplicate MCP tool registration.

### 5. Settings provenance, validation, and repair tips

Confidence: medium-high

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/utils/settings/settings.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/settings/constants.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/settings/validation.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/settings/validationTips.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/settingsSync/index.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/services/remoteManagedSettings/index.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/config/loader.ts`
- `/home/alba/atticus-harness-v2/src/config/schema.ts`
- `/home/alba/atticus-harness-v2/src/config/index.ts`
- `/home/alba/atticus-harness-v2/src/config/presets.ts`
- `/home/alba/atticus-harness-v2/src/commands/config.ts`

What the source project does well:

- It treats settings as layered data.
- It tracks source and precedence.
- It can validate settings and return targeted tips.
- It distinguishes managed settings from local/user settings.
- It avoids unnecessary writes when config has not changed.

Current Harness shape:

- Harness has schema/config loading and presets.
- Harness has provider and config commands.
- What is less clear is per-value provenance and user-facing repair guidance.

Recommended Harness implementation:

- Extend config loading to return both:
  - effective config,
  - config provenance map.
- Add `harness config explain <key>` or enrich existing config output.
- Add validation tips for:
  - missing provider key,
  - invalid provider/model pairing,
  - invalid MCP transport,
  - bad plugin manifest,
  - invalid matter path,
  - disabled tool requested by skill.
- Keep remote managed settings and sync out of scope unless cloud/team config
  becomes a real requirement.

Suggested tests:

- User config overrides default.
- Workspace config overrides default but not explicit CLI flag.
- Invalid config key reports source path and suggestion.
- Secret-derived values do not leak.
- Config write is skipped if no effective change.

Expected payoff:

- Easier user debugging.
- Safer config evolution.
- Better support for complex Harness setups.

### 6. Output styles as Harness prompt profiles

Confidence: medium-high

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/outputStyles/loadOutputStylesDir.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/outputStyles.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/agent/system-prompt.ts`
- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`
- `/home/alba/atticus-harness-v2/src/config/schema.ts`

What the source project does well:

- It stores output styles as markdown.
- It parses frontmatter.
- It merges built-in, plugin, user, project, and managed styles.
- It caches style loading and exposes invalidation.

Harness fit:

This is especially useful for a legal/research harness. Harness could support
distinct answer modes without hardcoding every style into the system prompt.

Recommended Harness profiles:

- `default`
- `legal-brief`
- `citation-heavy`
- `court-prep`
- `research-memo`
- `client-email`
- `audit`
- `implementation-plan`
- `code-review`

Recommended Harness implementation:

- Add `src/output-styles/loader.ts`.
- Add built-in styles under a small data directory or TypeScript constant.
- Support user/workspace markdown style files.
- Parse frontmatter fields:
  - `name`
  - `description`
  - `appliesTo`
  - `priority`
  - `modelHints`
- Add `outputStyle` to config schema.
- Inject selected style into `src/agent/system-prompt.ts`.

Suggested tests:

- Loads built-in style.
- Loads workspace style.
- Workspace style overrides built-in style by name.
- Invalid frontmatter reports useful error.
- Selected style affects generated system prompt.

Expected payoff:

- More controllable Harness behavior.
- Easier legal-domain specialization.
- Less system-prompt sprawl.

### 7. Secure storage abstraction

Confidence: medium

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/utils/secureStorage/index.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/secureStorage/plainTextStorage.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/secureStorage/macOsKeychainStorage.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/config/secrets.ts`
- `/home/alba/atticus-harness-v2/src/commands/provider.ts`
- `/home/alba/atticus-harness-v2/src/llm/config.ts`

What the source project does well:

- It hides storage backend choice behind a small interface.
- It can use plaintext fallback.
- It has room for platform-native secure storage.

Current Harness shape:

- Harness already supports provider secrets and environment fallbacks.
- Local secret files are reasonable for development.
- A backend interface would make the system easier to extend.

Recommended Harness implementation:

- Add `src/config/secure-storage.ts`.
- Define interface:
  - `get(key)`
  - `set(key, value)`
  - `delete(key)`
  - `list()`
  - `describeBackend()`
- Start with existing plaintext file behavior.
- Preserve env var precedence.
- Add native keychain only when platform support is deliberate.

Suggested tests:

- Existing secret loading still works.
- Env vars override stored values where intended.
- Backend description never leaks secret values.
- Plaintext backend writes with restrictive permissions.

Expected payoff:

- Cleaner provider-secret story.
- Future keychain support without changing commands.

### 8. Session restore and transcript continuity

Confidence: medium

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/utils/sessionStorage.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/sessionRestore.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/transcript.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/sdkEventQueue.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/utils/telemetry/sessionTracing.ts`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/state/events.ts`
- `/home/alba/atticus-harness-v2/src/state/runtime-recovery.ts`
- `/home/alba/atticus-harness-v2/src/state/leases.ts`
- `/home/alba/atticus-harness-v2/src/agent/recorder.ts`
- `/home/alba/atticus-harness-v2/src/orchestration/runtime.ts`

What the source project does well:

- It treats sessions as recoverable objects.
- It stores metadata needed to resume.
- It separates event queueing from event sink availability.
- It has tracing concepts that explain what happened during a session.

Current Harness shape:

- Harness already has runs, leases, recovery, and event persistence.
- This means Claude's full session system should not be ported wholesale.
- The useful idea is stronger continuity around agent turns and resumable summaries.

Recommended Harness implementation:

- Store a `resume-summary.md` or structured `resume.json` per run.
- Include:
  - last user goal,
  - active plan,
  - pending tool calls,
  - last model-visible summary,
  - artifact paths,
  - failed/retryable operation.
- Extend status output to show recoverable sessions.
- Add event queue buffering if daemon startup can emit events before the store is ready.

Suggested tests:

- Interrupted run can be summarized.
- Runtime recovery marks stale tasks correctly.
- Resume summary does not include secrets.
- Event queue drains once sink/storage is available.

Expected payoff:

- Better long-running orchestration.
- Easier debugging after interruption.

### 9. Coordinator and async callback patterns

Confidence: medium

Source evidence:

- `/home/alba/Claude-Code/alex000kim-original/src/coordinator/coordinatorMode.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useSwarmPermissionPoller.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useDirectConnect.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useMailboxBridge.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useRemoteSession.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/LocalAgentTask/LocalAgentTask.tsx`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/RemoteAgentTask/RemoteAgentTask.tsx`

Harness comparison:

- `/home/alba/atticus-harness-v2/src/orchestration/runtime.ts`
- `/home/alba/atticus-harness-v2/src/orchestration/master-orchestrator.ts`
- `/home/alba/atticus-harness-v2/src/orchestration/worker.ts`
- `/home/alba/atticus-harness-v2/src/orchestration/worker-synthesis.ts`

What the source project does well:

- It separates coordinator context from worker context.
- It has task abstractions for local, remote, shell, and teammate work.
- It has callback/poller patterns for asynchronous remote responses.
- It can route decisions through different handlers depending on mode.

Current Harness shape:

- Harness already has a purpose-built orchestration runtime.
- It has master/worker concepts, leases, runtime recovery, and phase tools.
- Claude's React/task model is not a natural direct fit.

Recommended Harness implementation:

- Do not port the React task components.
- Borrow the role/context split idea for orchestrator prompts.
- Borrow callback registry design only if Harness adds remote worker callbacks.
- Keep Harness's current orchestration state as the source of truth.

Suggested tests:

- Worker context does not include leader-only instructions.
- Coordinator context includes phase goal and constraints.
- Remote callback timeout marks task recoverable or failed deterministically.

Expected payoff:

- Cleaner multi-agent boundaries if Harness expands team execution.

## Area-by-area notes

### Services

File count: 130

High-value groups:

- `services/api`: retry behavior, API error normalization, provider client setup,
  request construction, bootstrap/config fetch.
- `services/tools`: tool orchestration, streaming tool execution, hook lifecycle,
  centralized tool execution.
- `services/mcp`: MCP config normalization, deduplication, policy filtering,
  env expansion, atomic writes, richer client errors.
- `services/plugins`: plugin install/update/remove orchestration.
- `services/analytics`: event sink abstraction and startup queueing pattern.

Medium-value groups:

- `settingsSync`
- `remoteManagedSettings`
- `teamMemorySync`
- `SessionMemory`
- `extractMemories`

These are useful only if Harness grows cloud sync, team-managed config, or
durable team memory.

Low-value groups:

- `PromptSuggestion`
- `MagicDocs`
- `tips`
- `voice`
- `awaySummary`
- `toolUseSummary`
- `diagnosticTracking`
- `lsp`
- `policyLimits`
- provider-specific billing/rate-limit UX

These are mostly product/UI/provider-specific and should not be carried over.

### Utils

File count: 564

High-value groups:

- `plugins`: plugin discovery, installed plugin manager, marketplace manager,
  validation helpers, installation helpers.
- `settings`: layered config, validation, constants, validation tips.
- `secureStorage`: backend abstraction for secrets.
- `task`: disk output and task output framework.
- `session`: session storage and restore concepts.
- `telemetry`: queueing/tracing ideas.
- `toolResultStorage.ts`: persistent large result storage.
- `toolSearch.ts`: richer tool discovery modes.
- `tokenBudget.ts`: prompt-based budget directives.
- serialization helpers: JSON, XML, YAML, zod-to-json-schema.

Explicitly not recommended after user direction:

- permission pipeline modules.
- shell permission hardening modules.

Low-value or defer:

- `swarm`: tightly coupled to terminal/team runtime.
- `teleport`: remote session product feature.
- `suggestions`: interactive CLI completion UX.
- `theme` and `status`: product UI.
- broad PowerShell support unless Windows parity becomes a goal.

### Hooks

File count: 104

Most hooks are React/Ink UI concerns. They should not be ported directly into
Harness unless Harness gains a comparable interactive frontend.

Useful concepts:

- event bus rather than direct UI side effects;
- plugin lifecycle notifications;
- dynamic config refresh;
- queued command processing;
- remote callback polling;
- coordinator/worker split.

Useful files as references:

- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useCommandQueue.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useQueueProcessor.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useDynamicConfig.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useManagePlugins.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useSwarmPermissionPoller.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useRemoteSession.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/hooks/useMailboxBridge.ts`

Do not port directly:

- text input hooks,
- typeahead hooks,
- virtual scroll hooks,
- voice hooks,
- notification UI hooks,
- IDE-specific hooks,
- clipboard/render placeholder hooks.

### Coordinator

File count: 1

Useful file:

- `/home/alba/Claude-Code/alex000kim-original/src/coordinator/coordinatorMode.ts`

Useful ideas:

- explicit coordinator mode detection;
- different context strings for leader versus worker;
- generated system prompt sections for delegated work;
- session mode matching.

Harness fit:

- Adapt conceptually into orchestrator prompt construction.
- Do not port source runtime assumptions.

### Output styles

File count: 1

Useful file:

- `/home/alba/Claude-Code/alex000kim-original/src/outputStyles/loadOutputStylesDir.ts`

Useful ideas:

- markdown-based style definitions;
- frontmatter;
- user/project/plugin/managed precedence;
- cache clearing.

Harness fit:

- Strong candidate for prompt profiles.

### Plugins

File count: 2

Useful files:

- `/home/alba/Claude-Code/alex000kim-original/src/plugins/builtinPlugins.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/plugins/bundled/index.ts`

Useful ideas:

- built-in plugin registry;
- plugin availability predicate;
- user preference around built-ins;
- skill commands exposed by plugins.

Harness fit:

- Adapt into Harness plugin loader if built-ins become a first-class concept.

### Tasks

File count: 12

Useful files:

- `/home/alba/Claude-Code/alex000kim-original/src/tasks/types.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/LocalMainSessionTask.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/LocalShellTask/LocalShellTask.tsx`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/LocalShellTask/killShellTasks.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/LocalAgentTask/LocalAgentTask.tsx`
- `/home/alba/Claude-Code/alex000kim-original/src/tasks/RemoteAgentTask/RemoteAgentTask.tsx`

Harness fit:

- Mostly conceptual.
- Harness already has orchestration runtime and worker concepts.
- Do not port React task components.
- Borrow lifecycle ideas:
  - start,
  - stop,
  - cancel,
  - kill child process,
  - task label,
  - task output,
  - final state.

### Types

File count: 11

Useful files:

- `/home/alba/Claude-Code/alex000kim-original/src/types/command.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/types/hooks.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/types/logs.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/types/plugin.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/types/ids.ts`

Harness fit:

- `plugin.ts` is the most useful reference for richer plugin metadata.
- `logs.ts` is useful for event schema ideas.
- `command.ts` is useful only if Harness expands slash/command surfaces.
- Generated protobuf files should be ignored.

### Constants

File count: 21

Useful files:

- `/home/alba/Claude-Code/alex000kim-original/src/constants/apiLimits.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/files.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/system.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/systemPromptSections.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/toolLimits.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/tools.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/outputStyles.ts`
- `/home/alba/Claude-Code/alex000kim-original/src/constants/xml.ts`

Harness fit:

- Tool limits and output style constants are useful.
- System prompt section caching is useful.
- File type predicates are useful if Harness expands binary/text handling.
- Product, OAuth, GitHub app, provider beta constants are mostly source-product
  specific and should not be adopted directly.

## Proposed Harness implementation order

### Phase 1: Tool execution upgrade

Target files:

- `/home/alba/atticus-harness-v2/src/types/tool.ts`
- `/home/alba/atticus-harness-v2/src/tools/index.ts`
- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`
- new `/home/alba/atticus-harness-v2/src/tools/executor.ts`

Deliverables:

- Tool metadata.
- Concurrent-safe executor.
- Sequential fallback for unsafe/unknown tools.
- Events that preserve current observability.

### Phase 2: Large result persistence

Target files:

- new `/home/alba/atticus-harness-v2/src/tools/tool-result-store.ts`
- `/home/alba/atticus-harness-v2/src/tools/index.ts`
- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`
- `/home/alba/atticus-harness-v2/src/state/events.ts`

Deliverables:

- Persist oversized outputs.
- Return previews and artifact paths.
- Keep context bounded.

### Phase 3: LLM resilience

Target files:

- new `/home/alba/atticus-harness-v2/src/llm/retry.ts`
- `/home/alba/atticus-harness-v2/src/llm/errors.ts`
- `/home/alba/atticus-harness-v2/src/llm/client.ts`
- `/home/alba/atticus-harness-v2/src/agent/query-loop.ts`

Deliverables:

- Retry policy.
- Better classification.
- Context-overflow recovery.
- Retry events.

### Phase 4: Plugin and MCP hardening

Target files:

- `/home/alba/atticus-harness-v2/src/plugins/loader.ts`
- `/home/alba/atticus-harness-v2/src/mcp/client.ts`
- `/home/alba/atticus-harness-v2/src/mcp/types.ts`
- `/home/alba/atticus-harness-v2/src/commands/plugin.ts`
- new `/home/alba/atticus-harness-v2/src/plugins/validate.ts`

Deliverables:

- Manifest validation.
- Path traversal checks.
- MCP deduplication.
- Plugin source provenance.
- Atomic config writes where mutation exists.

### Phase 5: Config provenance and output profiles

Target files:

- `/home/alba/atticus-harness-v2/src/config/loader.ts`
- `/home/alba/atticus-harness-v2/src/config/schema.ts`
- `/home/alba/atticus-harness-v2/src/commands/config.ts`
- `/home/alba/atticus-harness-v2/src/agent/system-prompt.ts`
- new `/home/alba/atticus-harness-v2/src/output-styles/loader.ts`

Deliverables:

- Explainable config.
- Validation tips.
- Markdown output styles.
- Prompt-profile selection.

## Candidate matrix

| Candidate | Usefulness | Complexity | Harness fit | Recommendation |
| --- | --- | ---: | --- | --- |
| Tool orchestration | Very high | Medium | Direct | Implement first |
| Streaming tool executor ideas | High | Medium-high | Partial | Adapt selectively |
| Tool result persistence | Very high | Medium | Direct | Implement early |
| LLM retry policy | Very high | Medium | Direct | Implement early |
| Error classification | High | Low-medium | Direct | Implement early |
| MCP dedup/config write | High | Medium | Direct | Implement after tool work |
| Plugin manifest validation | High | Medium | Direct | Implement after tool work |
| Settings provenance | Medium-high | Medium | Direct | Implement when config UX matters |
| Output styles | Medium-high | Low-medium | Direct | Good small feature |
| Secure storage interface | Medium | Low-medium | Direct | Implement when provider command is revisited |
| Session restore summaries | Medium | Medium | Partial | Adapt to current run model |
| Coordinator mode | Medium | Medium | Partial | Use for orchestrator prompts only |
| Async callback registry | Medium | Medium-high | Future | Defer until remote/team callbacks |
| React hooks | Low | High | Poor | Do not port |
| Voice features | Low | High | Poor | Ignore |
| IDE/LSP features | Low | High | Poor unless IDE integration is planned | Ignore for now |
| Remote managed settings | Low-medium | High | Future | Defer |
| Team memory sync | Low-medium | High | Future | Defer |
| Generated protobuf types | Low | Low | Poor | Ignore |
| Product/OAuth constants | Low | Low | Poor | Ignore |

## Explicit exclusions

The following areas were inspected but should not be implemented from this source
for Harness right now:

- Permission pipeline.
- Shell permission hardening.
- React/Ink UI hooks.
- Voice input.
- Claude-specific onboarding/tips/prompt suggestions.
- IDE/LSP integration.
- Product/billing/provider-limit UX.
- Remote managed settings.
- Team memory sync.
- Full swarm/teleport runtime.
- Generated telemetry protobuf types.
- OAuth/GitHub app/product constants tied to the source product.

## Final recommendation

The strongest import/adaptation path is:

1. Add Harness-native concurrent-safe tool execution.
2. Add persisted large tool results.
3. Add robust provider retry/error handling.
4. Improve plugin/MCP validation and deduplication.
5. Add config provenance and output profiles.
6. Add session resume summaries once the above infrastructure is stable.

This order improves Harness functionality without dragging in the source
project's UI-heavy runtime. It also respects the decision not to take the
permissions system from the source project.
