# Bug Report 004 — openai-codex-oauth Provider Profile Cannot Authenticate Against OpenAI API

**Date:** 2026-05-07
**Reported by:** Atticus (while configuring harness for Anfal case)
**Harness version:** v0.1.0
**Branch/Tag:** main

---

## Summary

The `openai-codex-oauth` provider profile exists in the control panel preset list, but it cannot authenticate. It stores the Codex CLI OAuth token (`CODEX_TOKEN` from `~/.codex/auth.json`) and attempts to use it as a `Bearer` token against `https://api.openai.com/v1/models`. This fails because the Codex CLI OAuth token is a ChatGPT session access token, which the OpenAI REST API rejects (401/403).

There should be a working path to use Codex's authenticated session as a harness model provider.

---

## Bug Detail

### The Problem

The `openai-codex-oauth` preset is configured as:

```
Name:          openai-codex-oauth
Auth type:     oauth
OAuth provider: codex
Base URL:      https://api.openai.com/v1
Models:        gpt-5.5-xhigh, gpt-5.5-medium, gpt-5.4-mini, etc.
```

When the user selects this provider and saves the Codex access token:

1. `resolveProviderAuth()` calls `getOAuthToken('codex')` which reads `CODEX_TOKEN` from secrets
2. Returns status `ok` — token is found
3. `healthCheckProfile()` then does `GET https://api.openai.com/v1/models` with `Authorization: Bearer <chatgpt-oauth-token>`
4. OpenAI API gateway returns **401 Unauthorized** — ChatGPT OAuth tokens are not valid for the REST API
5. The health check reports `rejected`
6. Any harness command fails with: `Fatal error: Provider "openai-codex-oauth" rejected or is missing credentials`

### Root Cause

There are two separate auth systems at play:

- **OpenAI REST API** uses API keys (`sk-...`) at `api.openai.com/v1`. OAuth bearer tokens are not accepted.
- **Codex CLI** authenticates via ChatGPT OAuth (device code flow). Codex uses an internal proxy/routing layer to make API calls with this OAuth session — it does NOT hit `api.openai.com/v1` directly.

The harness preset treats the Codex OAuth token as a direct API credential, which it isn't. The Codex CLI binary mediates between the OAuth token and the OpenAI API, but the harness has no such mediation layer.

### Repro Steps

1. `harness control-panel provider select openai-codex-oauth`
2. `export CODEX_TOKEN=$(python3 -c "import json; print(json.load(open('/home/alba/.codex/auth.json'))['tokens']['access_token'])")`
3. Control panel shows auth OK
4. `harness orchestrate any-matter --objective "test" --json`
5. Error: `Fatal error: Provider "openai-codex-oauth" rejected or is missing credentials`

### Expected Behaviour

The user should be able to use Codex's authenticated session (ChatGPT login) as a model provider for the harness. Options include:

1. **Codex exec proxy**: Configure the harness to send LLM requests through `codex exec` subprocess calls (e.g., `codex exec -m gpt-5.5 "prompt"`) instead of hitting OpenAI API directly. This would use Codex's own auth and model routing.

2. **Codex local API server**: If Codex exposes a local HTTP proxy (like `localhost:<port>/v1`) that accepts OpenAI-compatible requests and proxies them through Codex's auth, configure the harness to use that as the base URL.

3. **Extract API key from Codex**: If Codex stores or can derive an OpenAI API key from its session, surface that key so the harness can use `openai-api-key` profile instead.

4. **Token exchange**: If the ChatGPT OAuth token can be exchanged for a short-lived OpenAI API key (sk-...), do the exchange and use the resulting key.

### Current Workarounds

- Use `openrouter-deepseek` provider with DeepSeek models (this is what's currently working)
- Use the `openai-api-key` preset with a manually configured OpenAI API key (requires separate API key, not the Codex OAuth token)
- Run Codex CLI directly to drive the harness, instead of having the harness call the LLM itself

### Related Files

- `src/config/auth.ts` — `resolveProviderAuth()` and `healthCheckProfile()` where the auth check and health check happen
- `src/config/presets.ts` — defines the `openai-codex-oauth` preset
- `src/config/secrets.ts` — `getCodexToken()` and `getOAuthToken()` token resolution
- `src/config/loader.ts` — provider config loading and auth resolution
- `src/commands/provider.ts` — control panel provider commands
- `~/.codex/auth.json` — Codex CLI's stored auth (ChatGPT OAuth tokens)

---

## Severity

**MEDIUM** — The preset exists in the UI and shows "OK" auth status, but cannot actually make any LLM calls. This is misleading for operators who select it expecting it to work. There is no clear error path that explains *why* it fails.

## Recommendation

Either:

1. **Remove the preset** if Codex OAuth tokens can never work against the OpenAI REST API directly, and document that Codex-authenticated users should use the `openai-api-key` profile with a proper API key.

2. **Implement a Codex exec proxy** that wraps LLM calls through `codex exec` subprocess invocations, using Codex's own auth and model routing. This is the more ambitious but fully integrated solution.

3. **Add a clear error message** in `resolveProviderAuth()` for the Codex OAuth path that explains the token type mismatch and suggests alternatives (API key profile, OpenRouter profile).

---

## Status

**Open**
