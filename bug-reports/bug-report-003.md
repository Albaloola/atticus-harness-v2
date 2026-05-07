# Bug Report 003 — hermes-agent-guide.md Directs Hermes to Operate Harness CLI Directly, Contradicting Actual Multi-Agent Workflow

**Date:** 2026-05-07
**Reported by:** Atticus (Hermes agent for legal case work)
**Harness version:** v0.1.0
**Branch/Tag:** main

---

## Summary

The `docs/hermes-agent-guide.md` instructs Hermes (the operator-facing agent) to run harness CLI commands directly (`harness orchestrate`, `harness case manage`, `harness status`, `harness verify`, etc.). In the actual operational workflow, Hermes should NOT run these commands directly. Instead, Hermes briefs a Codex orchestrator (running on gpt-5.5 high), which then executes the harness CLI. Hermes's role is to monitor progress and report back to the human operator.

This disconnect caused Hermes to start a duplicate `harness orchestrate` run while the Codex orchestrator was already working, wasting compute and creating confusion.

---

## Bug Detail

### The Problem

When the human operator asks Hermes to rerun a case through the harness, the hermes-agent-guide says:

> Use hierarchical orchestration for the main legal work:
> ```
> harness orchestrate <matter-name> --objective "<case objective>" --json
> ```

And for follow-ups:

> ```
> harness case manage <matter-name> "<instruction>" --type <type> --source hermes --json
> ```

These instructions caused Hermes to call `harness orchestrate` directly via terminal. But this is not the intended workflow. The intended workflow is:

1. Hermes briefs the **Codex orchestrator** (running with gpt-5.5 high reasoning effort in a tmux/OMX session) on what needs doing
2. The Codex orchestrator reads `AGENTS.md` and the harness project files to know how to drive the CLI
3. Codex executes the harness commands itself
4. Hermes monitors progress and reports back to the operator

### Repro Steps

1. Operator says: "rerun the case through the harness from evidence suggestion and everything"
2. Hermes reads `docs/hermes-agent-guide.md`
3. Guide says `harness orchestrate <matter> --objective "..." --json`
4. Hermes runs that command directly via terminal
5. This duplicates work if a Codex orchestrator was already assigned to the task

### Expected Behaviour

The hermes-agent-guide should reflect the multi-agent architecture:

- **Hermes** = briefs Codex orchestrator, monitors progress, reports to operator
- **Codex orchestrator (gpt-5.5)** = reads AGENTS.md, runs harness CLI commands, produces deliverables
- **Harness CLI** = the tool that Codex operates

Hermes should NOT execute harness CLI commands directly. The guide should be rewritten to reflect this delegation chain.

### Actual Behaviour

The guide reads as if Hermes IS the direct operator of the harness CLI. It gives Hermes the full command reference (`harness orchestrate`, `harness case manage`, `harness verify`, `harness gate`, `harness review`, `harness accept`, etc.) and tells Hermes when to use each one.

### Root Cause

The hermes-agent-guide.md was written for a single-agent workflow where Hermes directly operates the harness. The actual workflow has evolved to a multi-agent architecture where:

- A Hermes-type skill (`atticus-harness-v2`) also existed containing the same CLI command details, which Hermes loaded. This duplicated the problem at the skill level.
- The Codex orchestrator reads `AGENTS.md` in the harness project root (which has the correct, minimal build/test/lint commands) but the full operational flow is documented in `hermes-agent-guide.md` and the deleted skill, neither of which is meant for Hermes.

### Related Files

- `docs/hermes-agent-guide.md` — the guide that needs updating
- `AGENTS.md` — the orchestrator's correct operating contract (build/test/architecture only)
- Deleted skill `legal/atticus-harness-v2` — contained the same CLI command reference meant for the orchestrator

---

## Severity

**HIGH** — Causes Hermes to operate the harness directly instead of delegating to Codex, leading to duplicate runs, wasted LLM costs, and operator confusion. When the human operator has a long-running Codex session already working the case, Hermes starting a separate harness orchestration on top of it is actively destructive.

## Recommendation

Rewrite `docs/hermes-agent-guide.md` to:

1. **Define the role boundary clearly:** Hermes briefs the Codex orchestrator. Codex runs the harness CLI. Hermes monitors and reports.

2. **Remove all direct CLI commands** from the guide. The full command reference belongs in `AGENTS.md` (which the Codex orchestrator reads) or in the project README.

3. **Replace with a briefing protocol:** Instead of `harness orchestrate ...`, the guide should say something like:
   > "Brief the Codex orchestrator with the case objective. The orchestrator will read AGENTS.md and execute the appropriate harness commands. Monitor progress with `harness status <matter> --json` and report updates to the operator."

4. **Add a section for how Hermes feeds instructions to Codex** — whether via tmux send-keys, codex exec, writing to an OMX inbox, or whatever the established communication channel is.

5. **Remove or isolate the attestation/certification process** — the guide currently has a section (lines 202+) about attestation and certification standards that also assumes Hermes is driving the work.

---

## Attachments

None.

## Status

**Open** — guide needs rewriting to match actual multi-agent workflow.
