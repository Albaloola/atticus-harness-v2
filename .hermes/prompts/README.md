# Hermes Prompt Pack

This directory contains prompt artifacts for Atticus/Hermes and for Codex agents
working on Harness.

The historical numbered prompts `01` through `08` were implementation prompts for
building the original Harness layers. They are kept as project history and should
not be used as the live Hermes operating prompt.

Use these current prompts instead:

- `09-hermes-agent-system-prompt.md`: the operator-facing Hermes system prompt.
- `10-codex-handoff-template.md`: the mutating-work brief Hermes gives Codex.
- `11-atticus-skill-update-checklist.md`: the checklist for updating Hermes
  skills/runbooks so Atticus can manage cases through Harness.

Keep these files aligned with:

- `docs/hermes-agent-guide.md`
- `docs/hermes-harness-protocol.md`
- `README.md`

Hermes must remain provider-agnostic. The Harness default profile is DeepSeek
through OpenRouter, but Codex SDK and other configured provider profiles are
supported through Harness provider policy.
