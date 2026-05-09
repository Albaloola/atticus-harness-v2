# Feature Request: Full Codex SDK Provider with Tool Support

**Date:** 2026-05-08
**Filed by:** Atticus (on instruction from Omar)
**Harness version:** v0.1.0
**Related:** Bug report 004 (openai-codex-oauth removal)

---

## Problem Statement

The harness currently has a `codex-sdk` provider profile, but it is deliberately tool-free. The `CodexSdkClient` declares `capabilities: { tools: false, jsonSchema: true }` and throws an error if any harness tool definitions are provided:

```
Provider codex-sdk does not support Harness-owned tool calls in this profile;
run with --no-tools or select a tool-capable provider profile.
```

This means the Codex SDK provider can only be used for `harness run <matter> --provider codex-sdk --no-tools` — a severely limited path that cannot run orchestration, case management, evidence-grounded drafting, citation verification, or any other harness functionality that depends on tool calling.

Meanwhile, Codex CLI runs with full tool capabilities natively:
- Command execution in a sandbox
- File read/write operations
- MCP tool calling
- Web search

The user can run Hermes Agent through Codex CLI (which gives Codex full agent capabilities), but cannot run the harness through Codex CLI or Codex SDK with tool support. This asymmetry is the core problem.

---

## Current Architecture

### How a standard provider works (e.g. OpenRouter, OpenAI API key)

```
Harness agent loop
  → Sends messages + tool definitions to LLM client
  → LLM client calls REST API (Chat Completions endpoint)
  → API returns response with tool_calls
  → Harness executes tools locally
  → Sends results back to LLM client
  → Loop continues
```

### How Codex SDK currently works

```
Harness agent loop
  → Sends messages (no tool definitions) to CodexSdkClient
  → CodexSdkClient starts a Codex thread via @openai/codex-sdk
  → Codex binary runs a sandboxed session internally
  → Codex executes actions natively (command_execution, file_change)
  → Codex returns agent_message text
  → CodexSdkClient returns the text as response
  → If any action items appear (mcp_tool_call, command_execution), they are rejected as errors
```

### The mismatch

| Aspect | Standard providers | Codex SDK |
|--------|-------------------|-----------|
| Tool ownership | Harness owns tool execution | Codex owns tool execution internally |
| Tool format | OpenAI tool definitions in API call | Codex runs sandbox, decides actions itself |
| Response format | Tool calls returned to harness for execution | Actions executed natively, text returned |
| Capabilities | Pure LLM + tool interface | Full agent with built-in sandbox, file ops, MCP |

The harness tries to fit Codex SDK into its standard LLM client interface, but Codex SDK is fundamentally an agent framework, not a pure LLM API. The harness needs a different integration pattern.

---

## Proposed Solution: Codex as a Native Agent Provider

Instead of forcing Codex SDK into the standard tool-calling pattern, the harness should support a **native agent provider** mode where Codex runs as its own agent with:
1. Its native sandbox for command execution and file operations
2. Harness tools exposed as MCP servers that Codex can discover and use
3. Direct matter state access (reading evidence, sources, existing artifacts)
4. Codex manages its own tool loop internally

### Architecture

```
Harness
  ├── Runs MCP server exposing internal tools:
  │     • evidence_search / evidence_list / evidence_get
  │     • source_fetch / source_search
  │     • draft / verify / gate / review
  │     • case_read / case_memory / case_events
  │     • search (FTS5 over evidence)
  │
  └── CodexSdkClient
        └── @openai/codex-sdk (Codex binary)
              ├── Sandbox (read-write workspace)
              ├── MCP client → Harness MCP server
              └── Native actions:
                    • command_execution
                    • file_change
                    • web_search
                    • mcp_tool_call → Harness tools
```

### Flow

1. User runs `harness orchestrate <matter> --provider codex-sdk` or `harness run <matter> --provider codex-sdk`
2. Harness starts an internal MCP server exposing its tool set (evidence, search, draft, verify, gate, case management)
3. Harness launches Codex SDK thread with:
   - `sandboxMode: 'workspace-write'` (read-write access to matter workspace)
   - `networkAccessEnabled: true` (for web search and MCP)
   - `approvalPolicy: 'never'` (autonomous, no approval prompts)
   - MCP server configuration via `CodexOptions.config` pointing to the harness's MCP server
4. Codex runs its internal agent loop, calling MCP tools on the harness server as needed
5. CodexSdkClient streams events and returns the final agent_message

---

## Implementation Plan

### Phase 1: CodexSdkClient Capability Upgrade (minimal)

**Goal:** Allow Codex SDK to run with its native tools without the harness rejecting action items.

**Changes needed in `src/llm/codex-sdk.ts`:**

1. Remove `tools: false` from capabilities — replace with a new capability flag like `agentMode: true` that signals the harness to not pass tool definitions and instead let Codex handle tools internally

2. In `chatWithTools()`:
   - If tools ARE provided but the provider is `codex-sdk`, don't throw — warn and ignore them (Codex doesn't use harness tool definitions)
   - Relax thread configuration:
     ```
     sandboxMode: 'workspace-write',
     networkAccessEnabled: true,
     approvalPolicy: 'never',
     ```

3. In `handleItem()` and `handleEvent()`:
   - Remove the `NATIVE_ACTION_TYPES` rejection that throws on `command_execution`, `file_change`, `mcp_tool_call`, `web_search`
   - Instead, track these items as side effects (log them, record in usage metadata)
   - Only throw on `error` items and `turn.failed` events

4. Pass matter working directory as the Codex thread's `workingDirectory`

### Phase 2: Harness Internal MCP Server

**Goal:** Expose harness tools as an MCP server that Codex SDK can call.

**New file:** `src/mcp/harness-server.ts` (or similar)

- Implements a local MCP server that starts on a random available port
- Exposes harness tools as MCP tool resources:
  - `evidence_search(query, filter?)` → search evidence database
  - `evidence_list()` → list all evidence items  
  - `source_fetch(url)` → fetch and snapshot a web source
  - `source_search(query)` → search stored sources
  - `draft(matter, instruction)` → create a draft
  - `verify(matter, draftId)` → verify citations
  - `case_read(matter)` → get matter state
  - `search(matter, query)` → FTS5 search
- Server lifecycle: started before Codex SDK thread, stopped after thread completes
- Authentication: local socket, no external network exposure

### Phase 3: MCP Server Configuration in Codex SDK

**Goal:** Pass the MCP server endpoint to Codex SDK so it can call harness tools.

The `@openai/codex-sdk` SDK supports `CodexOptions.config` which passes `--config key=value` overrides to the Codex CLI binary. The Codex CLI supports `--config mcp_servers.<name>.command`, `--config mcp_servers.<name>.args`, etc.

In `CodexSdkClient`, configure the Codex instance with:

```typescript
const codex = new Codex({
  codexPathOverride: this.codexPathOverride,
  env: buildCodexEnv(process.env),
  config: {
    'mcp_servers.harness.command': 'node',
    'mcp_servers.harness.args': JSON.stringify([mcpServerPath, '--port', port.toString()]),
    'mcp_servers.harness.env': JSON.stringify({ /* pass relevant env vars */ }),
  },
});
```

**Note:** The exact config key format for MCP servers in Codex CLI needs verification. If `--config` doesn't support MCP server definitions, alternative approaches:

- Write a temporary `mcp.json` or `claude_desktop_config.json` for Codex to discover
- Use `CODEX_MCP_CONFIG` environment variable
- Pass `--mcp-servers` CLI flags via `codexPathOverride` with wrapper script

### Phase 4: Harness Agent Loop Adaptation

**Goal:** When using `codex-sdk` provider, adapt the harness agent loop to account for Codex's native agent behavior.

**Changes needed in the orchestration and run commands:**

1. When provider is `codex-sdk`:
   - Do NOT pass tool definitions in the LLM request
   - Do NOT attempt to execute tool calls from the response
   - Do NOT enter the standard tool-result feedback loop
   - Instead, build a comprehensive prompt that includes:
     - Matter context (evidence summary, state, objectives)
     - Available MCP tools description (so Codex knows what it can call)
     - Expected output format

2. After Codex responds:
   - Extract the final text (agent_message)
   - Record any side effects from action items (files written, searches performed)
   - Proceed with normal post-processing (gate, verify, etc.) as needed

### Phase 5: Provider Profile & Documentation

1. Update `codex-sdk` profile in `src/config/presets.ts`:
   - Add `providerKind: 'codex-sdk'` with a new `agentCapable: true` flag
   - Keep same model delegation (gpt-5.5 for all roles)
   - Document that this profile runs Codex as a native agent, not a tool-calling LLM

2. Update `src/llm/client.ts` — `createLLMClient()`:
   - For `codex-sdk`, create `CodexSdkClient` with `agentMode: true`
   - The agent flag allows the harness to adapt its loop behavior

3. Update `src/commands/provider.ts`:
   - Change `toolSupportForProfile()` from `'tool-free; use --no-tools'` to `'agent (native MCP tools)'`

4. Update README:
   - Remove the `--no-tools` restriction for codex-sdk
   - Document that codex-sdk runs with native agent capabilities including MCP tool access to harness functionality

---

## Benefits

1. **Symmetry**: Codex SDK becomes a first-class provider with the same capabilities as when running Hermes through Codex CLI
2. **Lower cost**: Using Codex SDK with ChatGPT OAuth means no separate API key needed — the user's ChatGPT subscription covers it
3. **Richer agent**: Codex's native sandbox adds command execution, file operations, and web search on top of harness tools
4. **No credential sharing**: The ChatGPT OAuth token stays in Codex's credential store — no API keys to paste into harness secrets
5. **Future-proof**: As Codex SDK gains more capabilities (vision, multi-modal, etc.), the harness automatically benefits

---

## Risks and Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Codex SDK thread options don't support `danger-full-access` sandbox across platforms | Medium | Test on Linux first (primary platform). Fall back to `workspace-write` with restricted dirs. |
| MCP server config keys in Codex CLI are undocumented or change between SDK versions | High | Pin SDK version. Add discovery script to test MCP config format at setup time. |
| Performance overhead from running local MCP server per request | Low | MCP server uses same Node.js process; minimal overhead for local IPC. |
| Codex native actions (command_execution) could be destructive | Medium | Start with `workspace-write` sandbox; only escalate to `danger-full-access` if needed and user-opted-in. |
| Harness loop semantics differ between standard and Codex providers | Medium | Isolate provider-specific loop logic behind a strategy pattern. Keep standard providers unchanged. |

---

## Open Questions

1. **What is the correct Codex CLI config key for MCP server definitions?** Needs investigation into `codex --help`, Codex CLI docs, and SDK source.

2. **Should Codex be allowed to execute arbitrary shell commands?** The `workspace-write` sandbox allows file changes but command execution via sandbox could be a security concern. Initial implementation should keep sandbox read-only for commands, using MCP tools for safe operations.

3. **How should harness tools map to MCP tools?** Each harness tool (evidence_search, source_fetch, draft, etc.) would be an MCP tool resource. The tool implementation would call the existing harness tool code.

4. **Should Codex SDK threads be resumable?** Codex SDK supports `resumeThread()` by thread ID. If a Codex run is interrupted, the harness could save the thread ID and allow resumption. This would require thread ID persistence in matter state.

5. **Can Codex SDK use MCP without a separate server process?** Some MCP implementations support in-process servers over stdin/stdout. This would avoid the port allocation and process management overhead.

---

## Related Files

- `src/llm/codex-sdk.ts` — Current CodexSdkClient (tool-free, rejects action items)
- `src/llm/client.ts` — `createLLMClient()` and `LLMClientCapabilities`
- `src/config/presets.ts` — `codex-sdk` provider profile definition
- `src/config/auth.ts` — Auth resolution for delegated providers
- `src/commands/provider.ts` — Provider panel (tool support display)
- `README.md` — Current documentation marking codex-sdk as tool-free
- `node_modules/@openai/codex-sdk/dist/index.d.ts` — Codex SDK types

---

## Status

**Draft** — Not yet implemented.

## Priority

**HIGH** — This blocks the primary use case the harness was built for: running legal case work using Codex-authenticated models (ChatGPT subscription) without needing a separate API key. The user currently must use DeepSeek via OpenRouter (which works) but cannot use Codex as a full provider for orchestration, case management, or evidence-grounded drafting. Given that Codex CLI powers Hermes Agent with full tool support, the harness should offer equivalent capability.
