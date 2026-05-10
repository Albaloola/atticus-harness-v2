# Bug Report: Orchestrator failed to self-diagnose and intervene during run dc81581f

**Date:** 2026-05-10
**Matter:** omer-elbushra-ultimate-benchmark
**Run ID:** dc81581f-f964-4375-a850-5cc9a5967d8b
**Total orchestration cost:** ~$18 (two runs, zero deliverables)
**Type:** Orchestrator metacognition / self-diagnosis failure

---

## Summary

The orchestrator ran 88 tasks across multiple agents, spending ~$18 in API compute, and produced zero usable documents. During the run, multiple critical failures occurred that the orchestrator should have detected and intervened upon. It did not. The orchestrator marked the run as "complete" and walked away.

This report catalogues every failure signal the orchestrator ignored, in chronological order of when it should have triggered intervention.

---

## Signal 1: Agent tool calls blocked by policy (turn 2-3 of Phase 9 agents)

**When:** 2026-05-10 03:41:47 to 03:41:50
**Event IDs:** `534064bc`, `62d28efe`
**What happened:** Two workers in Phase 9 (Bundle & War Room Assembly) called `todo_write` and got back:

```
success=false, error='Tool "todo_write" blocked by policy decision: ask'
```

**What the orchestrator should have done:**

The orchestrator has authority to edit harness configuration. When a worker tool call fails with `policyDecision: "ask"` -- especially in `auto_accept` mode -- that's a policy configuration error, not a runtime error. The orchestrator should have:

(a) Detected the policy block within 1-2 turns of it recurring
(b) Diagnosed the root cause: `toolPolicy.matter_write.defaultDecision: "ask"` is not compatible with `autonomy.mode: "auto_accept"`
(c) Either patched the policy on the fly via its harness editing tools, or paused the orchestration and reported the misconfiguration

**Why it matters:** This single failure cascaded into 4 orphaned tasks, 14 blocked tasks, and zero output from Phase 9. If caught and fixed at turn 2, the agents would have completed their work normally.

---

## Signal 2: Phases 5-7 marked [BLOCKED] but auto-completed

**When:** 2026-05-10 03:41:08
**Event ID:** `e7b9dba8`
**What happened:** The master agent's todo list showed:

```
Phase 5: Merits and Risk Analysis [BLOCKED]     -> status: completed
Phase 6: Procedural Route Planning [BLOCKED]    -> status: completed
Phase 7: Document Production [BLOCKED]           -> status: completed
```

The orchestrator self-reported that three phases were blocked, then immediately marked them completed and moved on to Phase 8 (Verification).

**What the orchestrator should have done:**

(a) Recognise that "BLOCKED" + "completed" is a contradiction -- a phase cannot be both
(b) Before marking a phase complete, verify its deliverables exist. Phase 7 was supposed to produce Judicial Review petitions, Ordinary Action pleadings, ICO/SPSO/GMC/SLCC complaints. Zero of these exist.
(c) When a phase is blocked, investigate why before skipping. The orchestrator has `run_phase` and `get_orchestration_state` tools -- it should have re-inspected the phase's task tree.
(d) Escalate to operator if a critical phase (especially Phase 7 -- Document Production, the entire point of the run) is being skipped.

**Why it matters:** This is the primary cause of zero deliverables. The orchestrator voluntarily skipped the only phase that produces documents. It then ran verification on nothing and bundle assembly on nothing. The entire run was wasted at this decision point.

---

## Signal 3: Verification phase produced findings against analysis, not documents

**When:** 2026-05-10 03:40:49
**Event ID:** `19d7ff09`
**What happened:** The Verification phase completed with `findingCount: 9, riskCount: 5`. The phase objective was to "stress-test all outputs as a hostile opponent would" and "verify every factual claim, legal citation, arithmetic calculation, and source reference."

But no documents existed. The verification was running against analysis outputs from phases 1-4 (intake summary, chronology, evidence matrix, fact extraction, issue map). Not against actual legal pleadings or complaints.

**What the orchestrator should have done:**

(a) Before launching Phase 8, check Phase 7's artifact output. Zero artifacts = zero documents to verify.
(b) Detect that the verification objective ("stress-test all outputs") cannot be satisfied when no outputs exist.
(c) Either block Phase 8 from starting until Phase 7 produces deliverables, or re-scope the verification objective and flag it to the operator.

**Why it matters:** The verification findings (14+7=21 items) gave false reassurance that the run was producing value. The orchestrator interpreted this as progress and continued to Phase 9 instead of recognising it as a hollow signal.

---

## Signal 4: 64 candidate files on disk but zero indexed

**When:** Throughout the run, culminating at 2026-05-10 04:40 (last transcript written)
**What happened:** The `_candidates/` directory contains 64 transcript `.md` files -- agent conversation dumps. Zero are JSON-structured candidates that the reducer can process into accepted artifacts.

The artifact store shows `candidateFilesystemDrift: 64` -- the store knows files exist on filesystem that it hasn't indexed.

**What the orchestrator should have done:**

(a) Periodically (every N agent turns) check candidate store health: `candidateSummary.indexCount vs filesystemCount`
(b) When drift exceeds threshold (>5 filesystem files with zero indexed), investigate why agents aren't producing structured candidates
(c) Ensure agents have and use a `submit_candidate` tool. If no such tool exists, the orchestrator should flag this as a missing capability before agent deployment.
(d) Attempt to promote or reconcile filesystem candidates that are stuck as telemetry

**Why it matters:** Even if agents had produced useful analysis, it would be stranded as unindexed markdown. The reducer never sees it. The export pipeline has nothing to export. This is a structural issue the orchestrator should detect on every cycle.

---

## Signal 5: 4 in_progress tasks with 0 active agents (orphaned tasks)

**When:** From ~03:42 onwards, persisting at final check (04:45)
**What happened:** Agent-packet shows `in_progress: 4` but `activeAgents: []` and `leases: []`. Four tasks are in-progress but no agent is assigned to them. They will never complete.

**What the orchestrator should have done:**

(a) Track task leases. A task with `in_progress` status that has no lease for >2-3 minutes is orphaned.
(b) Detect orphaned tasks and either reassign them, retry them, or mark them `failed` and create replacement tasks.
(c) Report orphaned tasks to operator with the agent's last known turn and tool call.

**Why it matters:** Task counts become permanently inaccurate. The matter shows "complete" with 4 dangling tasks that will never resolve. Any future resume or inspection will see phantom in-progress work.

---

## Signal 6: 14 blocked tasks with empty reasons

**When:** Throughout the run, persisting at final check
**What happened:** 14 tasks show `reason: "blocked"` with no structured data (no type, objectId, remediation, severity). Compare with `legalBlockers` which has full structured information.

**What the orchestrator should have done:**

(a) When a task is blocked, immediately record the blocking cause (policy decision, dependency chain, missing evidence, etc.)
(b) If the orchestrator can't determine the cause, it should investigate by reading the task's turn history
(c) Attempt automatic unblocking where possible (e.g., retry with different tool if policy block, reconfigure if config error)

**Why it matters:** Blocked tasks are opaque. The orchestrator cannot triage them, the operator cannot triage them, and they accumulate forever.

---

## Signal 7: Checkpoint state contradicts live state

**When:** Checkpoint last updated 2026-05-10 03:08:21, final inspection at 04:43
**What happened:** Two views of the same matter give contradictory statuses:

- `case resume` (checkpoint): status="blocked", completedPhaseIds=[]
- `control-panel agent-packet`: status="complete"

**What the orchestrator should have done:**

(a) On wind-down (no active agents, no leases), trigger a final checkpoint reconciliation
(b) Ensure checkpoint state matches live state
(c) If phases were skipped (completedPhaseIds empty), record the blocking phase and reason in the checkpoint rather than leaving it empty

**Why it matters:** Anyone reading `case resume` sees "blocked" and thinks the system is actively working or needs help. It's not -- it's silently stopped with incomplete output.

---

## Signal 8: Agents guessing filesystem paths and hitting ENOENT

**When:** 2026-05-10 03:42:00
**Event IDs:** `b36811a2`, `646bc2c6`, `b1b78d35`
**What happened:** Three agents tried to read files using hardcoded paths:

- `read_file('/home/alba/atticus-harness-v2/CIVIL_CASE_WRIT_ACTION_PLAN.md')` -> ENOENT (file is in `_evidence/`)
- `read_file('/home/alba/atticus-harness-v2/CASE_MASTER_INDEX_Omer_Elbushra.md')` -> ENOENT
- `search_files(path='/home/alba/atticus-harness-v2/_candidates')` -> ENOENT (no `_candidates` at harness root)

**What the orchestrator should have done:**

(a) Detect the ENOENT pattern across multiple agents -- it indicates a systemic tool-usage training gap
(b) When ENOENT occurs on file paths within the harness directory, intercept and provide the correct evidence API access pattern
(c) Consider that if one agent can't find a path, others will have the same problem -- proactively broadcast correct evidence access instructions

**Why it matters:** Agents wasted 2-3 turns each on path-guessing before giving up. For agents on time-limited runs, this is 25-50% of their productive capacity burned on tool misuse.

---

## Root cause analysis

The orchestrator has no self-diagnosis loop. It has:

- **No periodic health check** -- at no point did the orchestrator inspect its own task counts, candidate drift, policy errors, or phase dependencies
- **No failure pattern detection** -- when `todo_write` failed for one agent, it failed silently. When it failed for a second agent, the orchestrator should have recognised the pattern
- **No dependency enforcement** -- the orchestrator ran phases in arbitrary order (8 before 7) and marked blocked phases done
- **No artifact output verification** -- phases are marked complete based on the master agent's todo list, not on actual artifact production
- **No wind-down reconciliation** -- when agents finish, the orchestrator doesn't finalise state or verify completeness

The orchestrator needs a self-diagnosis layer that runs every N turns and checks:

1. Are any agents hitting policy blocks? (if so, fix policy or flag)
2. Is candidate drift > 0? (if so, investigate)
3. Are any tasks orphaned? (if so, resolve)
4. Do phase dependencies form a valid chain? (if not, block invalid ordering)
5. Did the last completed phase produce verified artifacts? (if not, don't advance)
6. Does the checkpoint match live state? (if not, reconcile)

Without this, every autonomous run risks repeating the same failure pattern: agents work hard, orchestrator marks everything complete, zero deliverables.

---

## Severity: CRITICAL

This is a harder bug to fix than the individual agent-level issues because it's architectural. But without it, even fixing all other bugs (todo_write policy, candidate submission, path-guessing) won't prevent the orchestrator from skipping phases or missing agent failures in future runs.
