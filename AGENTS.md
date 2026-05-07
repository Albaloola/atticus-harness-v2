# Harness v2 — Agent Conventions

## Build & Test
- Build: `npm run build` (tsc)
- Dev: `npm run dev` (tsc --watch)  
- Test: `npm test` (vitest)
- Lint: `npm run lint` (tsc --noEmit)

## Code Style
- TypeScript with strict mode
- ESM modules (.js extension in imports)
- 2-space indentation
- Async/await preferred over raw promises
- Named exports, no default exports
- Error types use `extends Error` pattern

## Architecture
- CLI: commander (not yargs)
- Storage: flat file JSON + better-sqlite3 for FTS
- LLM: provider-routed clients for OpenAI-compatible/OpenRouter/DeepSeek direct, Anthropic, Codex SDK, and local profiles; use structured output, tool calling, and provider-native reasoning controls according to the selected provider profile
- Tools: Tool<I,O> interface with call() + inputSchema
- Agent: single loop, reads state from disk each turn
- Tests: vitest with real fixtures
