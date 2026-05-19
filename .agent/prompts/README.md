# Agent Prompt Pack (OpenClaw & Atticus)

This directory contains prompt artifacts for the operator-facing Agent (supporting OpenClaw, Atticus, etc.) and for the Harness Lead Counsel Orchestrator handoff.

The historical numbered prompts `01` through `08` were implementation prompts for building the original Harness layers. They are kept as project history and should not be used as the live Agent operating prompt.

Use these current prompts instead:

- `09-agent-system-prompt.md`: the operator-facing Agent system prompt.
- `10-unified-master-orchestrator-handoff-template.md`: the mutating-work brief the Agent gives the Lead Counsel Orchestrator.
- `11-agent-skill-update-checklist.md`: the checklist for updating Agent skills/runbooks so it can manage cases through Harness.

Keep these files aligned with:

- `.agent/agent-guide.md`
- `.agent/agent-harness-protocol.md`
- `README.md`

The Agent must remain provider-agnostic. The Harness default profile is DeepSeek through OpenRouter, but Codex SDK and other configured provider profiles are supported through Harness provider policy.
