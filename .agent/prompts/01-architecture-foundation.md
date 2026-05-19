# Prompt 1 — Architecture foundation and global control panel

You are Sisyphus working in `/home/alba/atticus-harness-v2/`. Implement the first foundation layer for Atticus Harness V2's orchestration redevelopment. Do not build a TUI. Keep the project CLI-first and TypeScript/Node-based.

## Context
- Current V2 is a simple legal operations CLI with a single AgentLoop and manual candidate acceptance.
- Reference repo for architectural inspiration only: `/home/alba/Claude-Code/`, especially the Rust crates under `kuberwastaken-rust/src-rust/crates` and the concepts of PermissionMode, query loop, AgentTool, coordinator, cron scheduler, hooks, and settings.
- Do not copy incompatible code. Implement clean TypeScript modules that fit this repo.

## Goal
Create a global control panel for API keys, provider config, autonomy toggles, and tool approval policy. It must be usable by Hermes/OpenClaw via CLI and JSON output.

## Implementation

1. New modules under `src/config/`:
   - `paths.ts`: resolves `~/.atticus-harness/config.json`, `secrets.env`, `providers.json`, policy files, and matter override paths.
   - `schema.ts`: TypeScript types for `GlobalHarnessConfig`, `ProviderPolicy`, `AutonomyPolicy`, `ToolPolicy`, `ExternalActionMode`, and defaults.
   - `loader.ts`: load/merge defaults + global config + env vars + matter overrides. Secrets must be redacted in display output.
   - `secrets.ts`: read/write `secrets.env` locally with file mode 0600 where supported. Include helpers to get `OPENROUTER_API_KEY`, search API keys, and provider keys. Do not commit secrets.
   - `policy.ts`: approval decision helper returning allow/deny/ask/allow_with_audit for tool categories.
2. New CLI commands in `src/cli.ts`:
   - `harness config show [matter] --json`
   - `harness config init --force?`
   - `harness config set <path> <value>` for non-secret config values
   - `harness secrets set <key> <value>`
   - `harness policy show [matter] --json`
   - `harness policy set <path> <value>`
3. Add defaults:
   - autonomy mode `operator_safe`
   - read-only auto-allowed
   - matter-local writes ask by default
   - autoAcceptCandidates false
   - externalActionMode `prepare_only`
   - allowExternalDispatch false
   - maxConcurrentAgents 4
   - maxAgentDepth 3
4. Update existing LLM config/client to use the new provider config/secrets while preserving `OPENROUTER_API_KEY` compatibility.
5. Add tests for config loading, env override, redaction, policy decisions, and CLI JSON output.

## Acceptance criteria
- `npm run build`, `npm run lint`, and `npm test` pass.
- Existing commands still work.
- No secret values appear in normal command output.
- The CLI can initialize config and show merged config in JSON.
- Include concise documentation in README or `docs/config.md` explaining setup for Hermes/OpenClaw.
