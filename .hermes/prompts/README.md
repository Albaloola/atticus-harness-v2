# Hermes Prompt Pack

This directory contains prompt artifacts for Atticus/Hermes and for the Harness
Unified Master Orchestrator handoff.

The historical numbered prompts `01` through `08` were implementation prompts for
building the original Harness layers. They are kept as project history and should
not be used as the live Hermes operating prompt.

Use these current prompts instead:

- `09-hermes-agent-system-prompt.md`: the operator-facing Hermes system prompt.
- `10-unified-master-orchestrator-handoff-template.md`: the mutating-work brief
  Hermes gives the Unified Master Orchestrator.
- `11-atticus-skill-update-checklist.md`: the checklist for updating Hermes
  skills/runbooks so Atticus can manage cases through Harness.

Keep these files aligned with:

- `.hermes/hermes-agent-guide.md`
- `.hermes/hermes-harness-protocol.md`
- `README.md`

Hermes must remain provider-agnostic. The Harness default profile is DeepSeek
through OpenRouter, but Codex SDK and other configured provider profiles are
supported through Harness provider policy.
