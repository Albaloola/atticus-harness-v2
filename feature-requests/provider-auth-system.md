# Feature: Multi-Provider Auth and Smart Model Delegation System

**Status:** Draft
**Author:** Omar / Atticus
**Date:** 2026-05-06
**Priority:** High
**Estimated engineering effort:** Medium-large (3-7 days focused)

---

## 1. Problem Statement

The harness currently only supports OpenRouter API keys (`OPENROUTER_API_KEY`) and hardcodes DeepSeek V4 Flash/Pro as the only models. This means:

- You cannot plug in a direct OpenAI API key, Anthropic API key, or DeepSeek API key
- You cannot use OAuth tokens from Codex CLI or Claude Code
- You cannot run local models via Ollama
- The model-to-task delegation (fast vs reasoning vs drafting vs reviewer vs citation vs cheap) is hardcoded and not user-configurable
- No visual control panel to switch providers or see what's configured
- No way to save your chosen setup permanently until you change it or reset

The config schema already has the bones (`defaultProvider: 'openrouter' | 'anthropic' | 'openai-compatible' | 'local'`, `ProviderConfig.apiKey`, `ProviderConfig.baseUrl`), but none of it is wired up.

---

## 2. Design Goals

1. **Provider profiles with smart presets** — choose a preset, get sensible model defaults per role
2. **Multiple auth types** — OAuth tokens (Codex, Claude Code), direct API keys (OpenAI, Anthropic, DeepSeek), or no auth (Ollama local)
3. **Per-task model delegation** — different models for fast tasks, reasoning, drafting, reviewing, citation checks, cheap passes
4. **"Preset vs Custom" indicator** — if you edit any model role, the profile shows as custom
5. **All keys in one place** — unified secrets/auth management via CLI
6. **Control panel is the central hub** — everything lives in the control panel: provider selection, model delegation, auth status
7. **Persistence** — settings are saved to disk until you change them or run a reset
8. **Reset to defaults** — one command restores the original `openrouter-deepseek` profile with DeepSeek V4 Flash/Pro
9. **Dynamic system prompts** — the agent system prompt is generated from the current provider + model delegation config, telling the agent loop which model to route each task type to. The agent does NOT get cost information — that is the operator's concern.
10. **Auth pre-flight check** — the harness MUST NOT start a run (orchestrate, run, draft, case manage, or any command that calls an LLM) unless it can resolve a valid API key or OAuth token for the active provider. Missing auth = immediate error. No silent fallback, no partial run, no "ran 40 tasks then failed on the first LLM call."

---

## 3. Provider Profiles

Each profile is a named configuration set that knows:
- What auth type it uses (api-key, oauth, none)
- How to build the API base URL
- What the sensible default models are per role
- Whether the user has customised any of the defaults

### Preset: `openrouter-deepseek` (DEFAULT — reset target)

| Setting | Value |
|---------|-------|
| Auth type | API key |
| Key name | `OPENROUTER_API_KEY` |
| Base URL | `https://openrouter.ai/api/v1` |
| fast | `deepseek/deepseek-v4-flash` |
| reasoning | `deepseek/deepseek-v4-pro` |
| drafting | `deepseek/deepseek-v4-pro` |
| reviewer | `deepseek/deepseek-v4-pro` |
| citation | `deepseek/deepseek-v4-flash` |
| cheap | `deepseek/deepseek-v4-flash` |
| fallback | `deepseek/deepseek-v4-pro` |

### Preset: `openai-codex-oauth`

| Setting | Value |
|---------|-------|
| Auth type | OAuth (Codex CLI token) |
| Source | `~/.codex/credentials` or `CODEX_TOKEN` env var |
| Base URL | `https://api.openai.com/v1` |
| fast | `gpt-5.5-medium` |
| reasoning | `gpt-5.5-xhigh` |
| drafting | `gpt-5.4-medium` |
| reviewer | `gpt-5.5-medium` |
| citation | `gpt-5.4-mini` |
| cheap | `gpt-5.4-mini` |
| fallback | `gpt-5.4-medium` |

### Preset: `openai-api-key`

Same model defaults as `openai-codex-oauth`. Auth via `OPENAI_API_KEY`.

### Preset: `anthropic-oauth`

| Setting | Value |
|---------|-------|
| Auth type | OAuth (Claude Code token) |
| Source | `~/.claude/credentials` or `ANTHROPIC_AUTH_TOKEN` |
| Base URL | `https://api.anthropic.com/v1` |
| fast | `claude-sonnet-4` |
| reasoning | `claude-opus-4` |
| drafting | `claude-sonnet-4` |
| reviewer | `claude-opus-4` |
| citation | `claude-sonnet-4` |
| cheap | `claude-haiku-3.5` |
| fallback | `claude-sonnet-4` |

### Preset: `anthropic-api-key`

Same model defaults as `anthropic-oauth`. Auth via `ANTHROPIC_API_KEY`.

### Preset: `deepseek-direct`

| Setting | Value |
|---------|-------|
| Auth type | API key |
| Key name | `DEEPSEEK_API_KEY` |
| Base URL | `https://api.deepseek.com/v1` |
| fast | `deepseek-chat` |
| reasoning | `deepseek-reasoner` |
| drafting | `deepseek-chat` |
| reviewer | `deepseek-reasoner` |
| citation | `deepseek-chat` |
| cheap | `deepseek-chat` |
| fallback | `deepseek-chat` |

### Preset: `ollama-local`

| Setting | Value |
|---------|-------|
| Auth type | None |
| Base URL | `http://localhost:11434/v1` |
| API format | OpenAI-compatible (`/v1/chat/completions`) |
| fast | `llama3.2` |
| reasoning | `llama3.1:70b` |
| drafting | `llama3.2` |
| reviewer | `llama3.1:70b` |
| citation | `llama3.2:3b` |
| cheap | `llama3.2:3b` |
| fallback | `llama3.2` |

### Preset: `openrouter-custom`

No model defaults — user defines everything. Base URL: `https://openrouter.ai/api/v1`. Auth via `OPENROUTER_API_KEY`.

### State: custom

Any user-modified profile where at least one model role differs from its source preset. Shows as `custom` in the control panel.

---

## 4. Control Panel — Everything in One Place

The control panel (`harness control-panel` or `harness panel`) is the single hub for all provider and model configuration.

### `harness control-panel status`

```
╔═══════════════════════════════════════════════════╗
║           ATTI-CUS CONTROL PANEL                   ║
╠═══════════════════════════════════════════════════╣
║                                                    ║
║  PROVIDER                                           ║
║    Active:  openai-codex-oauth (preset)              ║
║    Auth:    OK (Codex CLI token found)               ║
║    API:     https://api.openai.com/v1                ║
║                                                    ║
║  MODEL DELEGATION                                    ║
║    [edit] each role individually                     ║
║    fast:       gpt-5.5-medium                        ║
║    reasoning:  gpt-5.5-xhigh                         ║
║    drafting:   gpt-5.4-medium                        ║
║    reviewer:   gpt-5.5-medium                        ║
║    citation:   gpt-5.4-mini                          ║
║    cheap:      gpt-5.4-mini                          ║
║                                                    ║
║  [edit model] [switch provider] [reset to defaults]  ║
║                                                    ║
╚═══════════════════════════════════════════════════╝
```

### `harness control-panel provider`

Switch provider or edit settings interactively:

```bash
harness control-panel provider               # Show current provider with interactive selector
harness control-panel provider list           # List all available providers
harness control-panel provider select <name>  # Switch to a provider
harness control-panel provider auth           # Configure auth for current provider
```

### `harness control-panel model`

Edit individual model roles (profile shows as `custom` after any edit):

```bash
harness control-panel model set reasoning gpt-5.5-xhigh    # Change one role
harness control-panel model set fast gpt-5.4-mini           # Change another
harness control-panel model show                            # View current delegation
harness control-panel model reset                           # Back to preset defaults
```

### `harness control-panel reset`

Reset everything back to factory defaults:

```bash
harness control-panel reset
# Resets to: openrouter-deepseek profile with preset defaults
# Clears any custom profiles, keeps API keys in secrets file
```

This resets the config to `openrouter-deepseek` profile with DeepSeek V4 Flash/Pro defaults. Auth keys in the secrets file are preserved so the harness still works immediately after reset.

---

## 5. Persistence

All settings are saved to `~/.atticus-harness/config.json` immediately when changed:

| What changes | Persisted as |
|--------------|-------------|
| Active provider | `config.activeProvider` |
| All provider profiles | `config.profiles` |
| Model role overrides | `config.profiles[name].models.{role}` |
| Custom profiles | `config.profiles[name]` |
| Auth keys | `~/.atticus-harness/secrets.env` (separate file) |

The file is written atomically after every change. On next harness launch, settings are loaded and applied. Only explicit `harness control-panel reset` changes them back.

**Backward compatibility:** On first run after upgrade, the harness detects a legacy flat config and auto-creates an `openrouter-deepseek` profile with the existing models. The old `providers.openrouter` block is still read for migration but writes go to the new profile format.

---

## 6. Dynamic System Prompt Generation

The agent loop generates a system prompt that includes the current provider and model delegation config. This tells the agent which model to use for each task type.

### Injected prompt section

```plaintext
## Available Models

This harness is configured with: openai-codex-oauth (preset)
API endpoint: https://api.openai.com/v1

Model delegation (use the appropriate model for each task type):
- fast:       gpt-5.5-medium     — Quick responses, simple lookups
- reasoning:  gpt-5.5-xhigh      — Deep legal reasoning, complex analysis
- drafting:   gpt-5.4-medium     — Document generation (emails, letters, complaints)
- reviewer:   gpt-5.5-medium     — Hostile review, quality gate scoring
- citation:   gpt-5.4-mini       — Citation verification, source checks
- cheap:      gpt-5.4-mini       — Low-priority, bulk, high-volume tasks
```

**The agent does NOT get cost information.** Cost is the operator's concern. The agent only sees which models are available for each task type.

### How the agent uses this

The agent loop task creation code selects the model:

```typescript
// During task creation in the agent loop:
const model = selectModel(task.type, activeProfile);
```

The system prompt is re-generated whenever the provider config changes and is cached in the matter state. This means:

- The agent always knows which models are available
- The agent can make intelligent decisions about whether to use `reasoning` (better quality) vs `fast` (faster) for a given subtask
- Switching provider updates the prompt for the next run

### Prompt generation function

```typescript
function buildModelDelegationPrompt(profile: ProviderProfile): string {
  return `
## Available Models

This harness is configured with: ${profile.label}
API endpoint: ${profile.baseUrl}

Model delegation (use the appropriate model for each task type):
${Object.entries(profile.models).map(([role, model]) => {
  const description = MODEL_ROLE_DESCRIPTIONS[role];
  return `- ${role.padEnd(12)} ${model.padEnd(20)} — ${description}`;
}).join('\n')}
`;
}
```

**Rule:** The prompt text MUST NOT contain dollar signs, pricing, cost estimates, or any currency information. The agent never needs to think about money.

---

## 7. Auth Resolution

### API Key Resolution Order

For `api-key` type, resolve the key in this order:
1. `harness secrets` file (`~/.atticus-harness/secrets.env`) — specific key name
2. Environment variable — `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `DEEPSEEK_API_KEY`
3. Prompt user if not found (interactive mode)

### OAuth Token Resolution

For `oauth` type:

**Codex CLI OAuth:**
1. Check `CODEX_TOKEN` env var
2. Check `~/.codex/credentials` for OAuth session token
3. Fall back to OpenAI API key with `api-key` type warning

**Claude Code OAuth:**
1. Check `ANTHROPIC_AUTH_TOKEN` env var
2. Check `~/.claude/credentials.json` for session token
3. Check `ANTHROPIC_API_KEY` as fallback
4. Fall back to prompting user

### Ollama (no auth)
- No auth required
- Verify connection by hitting `GET ${baseUrl}/api/tags` on startup
- Warn if Ollama not running

### Auth Pre-Flight Check

Before any command that calls an LLM (orchestrate, run, draft, case manage, verify, gate, review, source search, source fetch), the harness must verify that the active provider has valid auth credentials **and can reach its API endpoint**.

**Check sequence:**
1. Resolve the API key or OAuth token for the active profile (using the resolution order above)
2. For `api-key` type: if no key is found in secrets, env vars, or any source → error immediately
3. For `oauth` type: if no token is found → error immediately
4. For `none` type (Ollama): run `healthCheck()` by hitting the Ollama API → if unreachable, warn but allow (user may start Ollama manually)
5. If key/token exists, run a lightweight `healthCheck()` (GET base URL or minimal API call) to verify:
   - The endpoint is reachable (no DNS/network error)
   - The auth is accepted (no 401/403 response)
   - The provider is not returning server errors (no 5xx)

**Error messages:**

| Scenario | Error |
|----------|-------|
| No API key found | `Error: No API key configured for provider "anthropic-api-key". Set one with: harness control-panel provider auth or export ANTHROPIC_API_KEY=<key>` |
| No OAuth token found | `Error: No OAuth token found for provider "openai-codex-oauth". Authenticate with Codex CLI first, or set CODEX_TOKEN env var.` |
| API endpoint unreachable | `Error: Provider "ollama-local" is unreachable at http://localhost:11434/v1. Is Ollama running? Start with: ollama serve` |
| Auth rejected (401) | `Error: Provider "openai-api-key" rejected the API key at https://api.openai.com/v1. Check your key is valid and has credits.` |
| Server error (5xx) | `Error: Provider "openrouter-custom" returned a server error. The provider may be experiencing an outage.` |

**Implementation:**
- `resolveConfig()` gains a `strict: boolean` option. When `true` (used before runs), it verifies auth and health.
- `healthCheck()` is added to the `LLMClient` interface. Default implementation hits `{baseUrl}/models` or similar lightweight endpoint.
- Pre-flight is called from each command handler (orchestrate, run, draft, etc.) via a shared helper: `async function assertProviderReady(config: ResolvedHarnessConfig): Promise<void>`

**Control panel indicator:**

The control panel status display shows the auth state:

```
║  PROVIDER                                           ║
║    Active:  openai-codex-oauth (preset)              ║
║    Auth:    OK (Codex CLI token found)               ║
║    API:     https://api.openai.com/v1                ║
```

vs

```
║  PROVIDER                                           ║
║    Active:  anthropic-api-key (preset)               ║
║    Auth:    MISSING — configure with:                ║
║             harness control-panel provider auth      ║
║             or export ANTHROPIC_API_KEY=<key>        ║
║    API:     https://api.anthropic.com/v1             ║
```

vs

```
║  PROVIDER                                           ║
║    Active:  ollama-local (preset)                    ║
║    Auth:    UNREACHABLE — ollama serve not running   ║
║    API:     http://localhost:11434/v1                ║
```

This gives the operator a clear path to fix the problem before trying to run anything.

---

## 8. CLI Commands (full reference)

### `harness control-panel` (the hub)

| Subcommand | Description |
|------------|-------------|
| `harness control-panel status [--json]` | Full panel display with provider, auth, models |
| `harness control-panel provider` | Interactive provider selection |
| `harness control-panel provider list` | List available providers |
| `harness control-panel provider select <name>` | Switch active provider |
| `harness control-panel provider auth [key]` | Set auth for current provider |
| `harness control-panel model show` | Show current model delegation |
| `harness control-panel model set <role> <model>` | Set a specific role |
| `harness control-panel model reset` | Reset to preset defaults |
| `harness control-panel reset` | Factory reset (openrouter-deepseek) |

### `harness provider` (advanced management)

| Subcommand | Description |
|------------|-------------|
| `harness provider list` | List all available provider profiles |
| `harness provider show [name]` | Show profile details including model delegation |
| `harness provider select <name>` | Switch active provider profile |
| `harness provider auth <name> [key]` | Set auth key for a provider |
| `harness provider create <name>` | Create a custom profile (wizard) |
| `harness provider delete <name>` | Delete a profile |
| `harness provider reset` | Restore default profiles |

---

## 9. Data Model Changes

### New: `ProviderProfile` type

```typescript
export interface ProviderProfile {
  /** Unique profile name */
  name: string;
  /** Human-readable label */
  label: string;
  /** Which preset this was derived from, or 'custom' if edited */
  preset: string;
  /** Auth type determines how keys are resolved */
  authType: 'api-key' | 'oauth' | 'none';
  /** Environment variable / secrets key name (for api-key type) */
  keyName?: string;
  /** OAuth provider name (for oauth type): 'codex' | 'claude-code' */
  oauthProvider?: string;
  /** API base URL */
  baseUrl: string;
  /** API path suffix (defaults to /v1/chat/completions for OpenAI-compatible) */
  apiPath?: string;
  /** Anthropic-specific: use Messages API format */
  anthropicFormat?: boolean;
  /** Model delegation per task role */
  models: {
    fast: string;
    reasoning: string;
    drafting: string;
    reviewer: string;
    citation: string;
    cheap: string;
  };
  /** Fallback model (optional) */
  fallbackModel?: string;
  /** Whether user has customised any model role (deviates from preset) */
  isCustom: boolean;
}
```

### Updated: `GlobalHarnessConfig`

```typescript
export interface GlobalHarnessConfig {
  version: string;
  /** Active provider profile name */
  activeProvider: string;
  /** Available provider profiles */
  profiles: Record<string, ProviderProfile>;
  /** Legacy flat provider config (for backward compat) */
  providers: ProvidersConfig;
  providerPolicy: ProviderPolicy;
  autonomy: AutonomyPolicy;
  toolPolicy: ToolPolicy;
}
```

---

## 10. LLM Client Refactoring

### Current architecture (hardcoded)

```
OpenRouterClient (class)
  - apiKey: from OPENROUTER_API_KEY
  - baseUrl: https://openrouter.ai/api/v1
  - chat() / chatWithTools() -> POST /v1/chat/completions
```

### Target architecture (pluggable)

```
LLMClient (interface)
  + chat(request: LLMRequest): Promise<LLMResponse>
  + chatWithTools(request: LLMRequest): Promise<LLMResponse>
  + healthCheck(): Promise<boolean>          — NEW

OpenAICompatibleClient (implements LLMClient)
  - Works for: OpenRouter, OpenAI, DeepSeek, Ollama, any OpenAI-compatible endpoint
  - Sends: POST {baseUrl}/v1/chat/completions
  - Auth: Bearer {apiKey} | none (Ollama)

AnthropicClient (implements LLMClient)
  - Works for: Anthropic (direct or OAuth)
  - Sends: POST {baseUrl}/messages  (Anthropic Messages API)
  - Auth: x-api-key header or Bearer OAuth token
  - Translates OpenAI chat format to Anthropic Messages format
  - System prompt is separate field
```

### Model routing in agent loop

```typescript
// Called when creating any task in the agent loop
function selectModelForTask(taskType: string, profile: ProviderProfile): string {
  switch (taskType) {
    case 'fast':
    case 'lookup':
    case 'search':
    case 'summarise':
      return profile.models.fast;
    case 'reasoning':
    case 'analysis':
    case 'research':
    case 'strategy':
      return profile.models.reasoning;
    case 'draft':
    case 'drafting':
    case 'email':
    case 'letter':
    case 'complaint':
      return profile.models.drafting;
    case 'review':
    case 'hostile-review':
    case 'adversarial':
      return profile.models.reviewer;
    case 'verify':
    case 'citation':
      return profile.models.citation;
    case 'cheap':
    case 'bulk':
    case 'extract':
      return profile.models.cheap;
    default:
      return profile.models.fast;
  }
}
```

---

## 11. Implementation Plan

### Phase 1: Foundation (days 1-2)

1. **Define `ProviderProfile` type** in `src/config/schema.ts`
2. **Define `LLMClient` interface** in `src/llm/client.ts` with `healthCheck()`
3. **Refactor `OpenRouterClient`** to implement `LLMClient` as `OpenAICompatibleClient`
4. **Add preset definitions** as a static map in `src/config/presets.ts`
5. **Update `GlobalHarnessConfig`** to include `activeProvider` and `profiles`
6. **Add migration** from legacy flat config to profile-based config

### Phase 2: Auth + Control Panel (days 2-4)

1. **Implement auth resolution** for all key types and OAuth providers
2. **Implement `harness control-panel` model commands**
3. **Update the control panel display** to show provider, auth status with MISSING/UNREACHABLE indicators, model delegation
4. **Implement persistence** — save on every change, load on startup
5. **Implement `harness control-panel reset`** — restore openrouter-deepseek
6. **Implement `assertProviderReady()`** — shared pre-flight check called from every LLM-using command
7. **Add `LLMClient.healthCheck()`** to the interface with per-provider implementations

### Phase 3: LLM Clients + System Prompt (days 3-5)

1. **Implement `AnthropicClient`** with message format translation
2. **Add Ollama health check** (GET /api/tags)
3. **Update LLM config** to select client based on active profile
4. **Wire model selection** into agent loop task creation
5. **Implement `buildModelDelegationPrompt()`** and inject into agent system prompt
6. **Regenerate prompt on config change** and cache in matter state

### Phase 4: Provider Profile Management (days 5-7)

1. **Implement `harness provider` commands** (list, show, create, delete, reset)
2. **Add `harness control-panel provider` interactive sub-commands**
3. **Add preset vs custom visual indicator** in panel
4. **Edge case handling** (OAuth expiry, offline fallback, Anthropic format quirks)
5. **System prompt injection in agent loop**

---

## 12. Files to Change

| File | Change |
|------|--------|
| `src/config/schema.ts` | Add `ProviderProfile` type, update `GlobalHarnessConfig` |
| `src/config/loader.ts` | Update `resolveConfig()`, `buildProviderConfig()`, `saveGlobalConfig()`; add `strict` option for auth pre-flight |
| `src/config/presets.ts` | **NEW** — static preset profile definitions |
| `src/config/secrets.ts` | Add `getOAuthToken()`, `getCodexToken()`, `getClaudeToken()`, `verifyAuth()` |
| `src/config/auth.ts` | **NEW** — `assertProviderReady()` shared pre-flight check, per-provider `healthCheck()` integration |
| `src/llm/client.ts` | Extract `LLMClient` interface, refactor to `OpenAICompatibleClient`, add `healthCheck()` |
| `src/llm/anthropic.ts` | **NEW** — Anthropic Messages API client |
| `src/llm/ollama.ts` | **NEW** — Ollama health check and client config |
| `src/llm/config.ts` | Update to select client based on active profile |
| `src/llm/prompt-builder.ts` | **NEW** — `buildModelDelegationPrompt()` function |
| `src/commands/control-panel.ts` | Add model, provider, reset sub-commands |
| `src/commands/provider.ts` | **NEW** — `harness provider` CLI commands |
| `src/cli.ts` | Register new command groups |
| `src/agent/` | Inject model delegation prompt into agent system prompt |
| `src/state/migrations.ts` | Add migration for profile-based config schema |
| `src/orchestration/` | Wire `selectModelForTask()` into task creation |
| `tests/unit/governance.test.ts` | Update provider policy tests for profile system |
| `tests/unit/presets.test.ts` | **NEW** — tests for preset definitions |

---

## 13. Edge Cases and Considerations

### Backward compatibility
- Existing configs with flat `providers.openrouter` auto-migrate to `openrouter-deepseek` profile on first load
- `harness config set` paths that match old patterns still work (warn and redirect to `harness control-panel`)
- `OPENROUTER_API_KEY` env var still honoured even without running `harness provider auth`

### Reset semantics
- `harness control-panel reset` does NOT clear the secrets file — only the config.json
- After reset, the harness immediately works because the existing OpenRouter API key is still in secrets
- To fully reset everything including keys: `harness secrets set OPENROUTER_API_KEY ""` then `harness control-panel reset`

### OAuth token expiry
- Codex CLI tokens expire after N hours/days
- Claude Code tokens expire after session
- `healthCheck()` catches 401 and reports it as auth failure before any LLM work starts
- Show warning in control panel when token is stale/expired (auth status: EXPIRED)
- Prompt re-auth flow for OAuth providers — `Error: OAuth token for "provider" has expired. Re-authenticate and try again.`

### Offline/fallback
- If primary API is unreachable, try fallback model from same provider
- If provider is completely down, warn user and suggest switching in the panel
- For Ollama: if not running, suggest `ollama serve` command

### Anthropic API format caveats
- `/v1/messages` uses different request/response format than OpenAI:
  - No `tool_choice` field — uses `tool_choice.type`
  - System prompt is a separate field, not in messages array
  - Response uses `content` array with type blocks
  - Rate limits measured in TPM, not RPM
- The `AnthropicClient` must translate the internal OpenAI-compatible request format

### Ollama caveats
- OpenAI-compatible mode may not support tool calling on all models
- Model availability varies per machine (no `llama3.1:70b` on a laptop)
- Show available models from `ollama list` in control panel
- No caching, no fallback — if Ollama is down, nothing works

### Security
- API keys stored in `~/.atticus-harness/secrets.env` with mode 0600
- OAuth tokens stored in same secrets file with mode 0600
- API keys/OAuth tokens never logged or exposed in control panel (redacted)
- Warn if secrets file has permissive permissions

### System prompt injection
- Model delegation prompt is cached in matter state so regenerating it doesn't hit the API
- Prompt is invalidated when provider or model delegation changes
- The agent sees the current model choices and can self-regulate (use reasoning for hard problems, fast for routine ones)
- **The prompt MUST NOT contain cost/pricing information** — agents never need to think about money

---

## 14. Open Questions

1. Should OAuth tokens be stored **in** the harness secrets file or referenced **from** the source tool's credential file (e.g. `~/.codex/credentials`)?
2. How should Claude Code credentials be read if they're in a session-scoped temp file?
3. For OAuth providers, should we support an interactive `oauth login` flow (browser-based) or only pre-existing tokens?
4. Should Ollama be detected automatically on startup or only when explicitly selected?
5. Per-matter provider override — should individual matters be able to select a different provider profile?
6. When switching provider, should in-progress agent runs be cancelled or allowed to finish with the old provider?

---

## 15. Future Extensions (out of scope for v1)

- Browser-based OAuth login flow (PKCE)
- Multi-provider fallback chains (try OpenAI, fall back to Anthropic, then Ollama)
- Provider cost tracking from real API responses (operator-only, never in agent prompt)
- Model benchmarking (measure latency/quality per model per task type)
- Proxy support for enterprise environments
- AWS Bedrock / GCP Vertex AI provider profiles
- GPU-aware Ollama model selection (use available VRAM to pick model size)
- Per-matter provider override
