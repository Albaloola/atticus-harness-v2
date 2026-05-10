# Bug Report: omer-elbushra-ultimate-benchmark Run dc81581f

**Date:** 2026-05-10
**Matter:** omer-elbushra-ultimate-benchmark
**Run ID:** dc81581f-f964-4375-a850-5cc9a5967d8b
**Objective:** Full reinvestigation producing Phase 11 documents (JR, OA, ICO, SPSO, GMC, SLCC complaints + master action plan)
**Result:** 0 accepted artifacts, 0 indexed candidates, 1 unindexed artifact file, 88 tasks, 14 blocked, 4 in-progress (no active agents)
**Estimated cost burned:** ~$18 (two orchestration runs combined)

---

## Bug 1: todo_write blocked by policy despite autoApproveFileWrites=true [SEV-HIGH]

**Evidence:** Events `534064bc` (03:41:47) and `62d28efe` (03:41:50) show two agents calling `todo_write` returning:

```
success=false, error='Tool "todo_write" blocked by policy decision: ask', policyDecision='ask'
```

Both agents were mid-lifecycle (turn 2-3) and had already successfully read evidence. After the `todo_write` block, they continued for 1-2 more turns then stalled. They never produced output.

**Root cause:** Policy has `matter_write.defaultDecision: "ask"` but autonomy says `autoApproveFileWrites: true`. Either `todo_write` maps to a different policy category than `matter_write`, or `autoApproveFileWrites` doesn't cover `todo_write`.

**Impact:** Directly caused agents to orphan their work. 4 tasks remain `in_progress` with no active agent — they'll never complete.

**Fix:** Investigate how `todo_write` maps to policy categories. If it uses `matter_write`, confirm that `autoApproveFileWrites` in autonomy config actually overrides the policy default. If not, either add a specific override or change the default decision to "allow".

---

## Bug 2: Phase lifecycle — orchestrator skipped Document Production (Phase 7) [SEV-CRITICAL]

**Evidence:** Event `e7b9dba8` (03:41:08) shows the master agent's todo list at turn 25:

```
- Phase 5: Merits and Risk Analysis [BLOCKED]
- Phase 6: Procedural Route Planning [BLOCKED]
- Phase 7: Document Production [BLOCKED]
- Phase 8: Verification and Hostile Review - hostile review report [completed]
- Phase 9: Bundle and War Room Assembly [in_progress]
```

Phases 5-7 are marked `[BLOCKED]` but also marked `status: completed` in the same todo. The orchestrator marked them done without actually running them, then jumped to verification of non-existent documents and bundle assembly with no documents to bundle.

The verification phase (8) ran and produced findings (14 findings, 7 risks) — but these were against analysis outputs from phases 1-4, not against actual legal documents, because no documents existed yet.

**Root cause:** Unknown. Possibly agents assigned to phases 5-7 encountered policy blocks (related to Bug 1) and the orchestrator interpreted this as "blocked, skip it." Or the orchestrator's phase sequencing logic doesn't enforce dependency ordering (Phase 8-9 shouldn't run before Phase 7).

**Impact:** Zero legal documents produced. The entire point of the run (actual working documents for an unrepresented litigant) was defeated. ~$18 in API costs burned with no usable output.

**Fix:** Phase sequencing must enforce that Phase 7 (document production) completes and produces accepted artifacts before Phase 8 (verification) or Phase 9 (bundle assembly) can begin. Tasks marked as [BLOCKED] should trigger escalation, not auto-completion. The orchestrator should not mark phases complete just because its internal todo says so — the phase lifecycle should be gated on actual artifact production.

---

## Bug 3: Tasks stuck in-progress with no active agent (orphaned tasks) [SEV-HIGH]

**Evidence:** Agent-packet shows `in_progress: 4` but `activeAgents: []`, `leases: []`. Four worker tasks have no running agent, no lease, no deadline — they will remain `in_progress` forever.

The orphaned tasks (from Phase 9 — Bundle and War Room Assembly) are:

1. `fc4ca401` — "Cross-reference evidence and facts" (run `d325727c`) — last turn 3, read evidence successfully, then `todo_write` blocked at turn 2
2. `caffc5ef` — "Prepare filing checklist" (run `6f46426e`) — last turn 4, explored evidence but found no filing documents, then stalled
3. `2f387045` — "Create master bundle index" (run `7a91f1fc`) — last turn 3, explored evidence, ENOENT on path guess, then stalled
4. A fourth task ID not visible in the 50 recent events

**Root cause:** When an agent run completes (because the orchestrator thinks the phase is done, or the agent exits without properly completing), the task it was assigned remains `in_progress`. There's no lifecycle check that "task in_progress must have an active agent or lease."

**Impact:** Task counts are permanently misleading. 4 tasks are dead but not counted as failed or blocked. The matter shows as "complete" with dangling work.

**Fix:** Add a daemon watchdog or scheduler sweep that detects `in_progress` tasks with no active lease for >5 minutes and marks them `failed` with reason `agent_orphaned`. Or better: when an agent run terminates (whatever exit condition), its assigned task should be resolved to completed, failed, or needs_followup — never left dangling.

---

## Bug 4: Task blocked reasons are empty strings [SEV-MEDIUM]

**Evidence:** 14 tasks show `reason: "blocked"` with no structured data:

```
{"taskId": "d3c2e3b6-...", "reason": "blocked"}
```

Compare with `legalBlockers` which has structured severity, remediation steps, and object IDs. Task blockers have none of that.

**Root cause:** The task blocker system captures "blocked" as a status label but doesn't propagate the blocking cause (policy decision, dependency chain, missing evidence, etc.).

**Impact:** Can't triage blocked tasks without replaying event logs. Blocked tasks are opaque. If the operator wants to unblock manually, there's no indication of what to fix.

**Fix:** When a task becomes blocked, capture the blocking reason with the same structure as legalBlockers: type, objectId, reason, remediation, severity. At minimum, surface the policy decision that caused it or the dependency taskId that's holding it up.

---

## Bug 5: Agent path-guessing returns ENOENT instead of using evidence API [SEV-MEDIUM]

**Evidence:** Run `6f46426e` agent at turn 3-4 called:

```
read_file('/home/alba/atticus-harness-v2/CIVIL_CASE_WRIT_ACTION_PLAN.md')   → ENOENT
read_file('/home/alba/atticus-harness-v2/CASE_MASTER_INDEX_Omer_Elbushra.md') → ENOENT
```

Both files exist in `matters/omer-elbushra-ultimate-benchmark/_evidence/` as OME-SRC-0025 and OME-SRC-0026. The agent should have used `evidence_chunk_read` or `evidence_search` instead of guessing filesystem paths.

Run `7a91f1fc` agent attempted:
```
search_files(pattern='**/*.md', path='/home/alba/atticus-harness-v2/_candidates') → ENOENT
```
The `_candidates` directory is at `matters/omer-elbushra-ultimate-benchmark/_candidates/`, not at the harness root.

**Root cause:** Agent LLM training doesn't reinforce the correct tool usage pattern for evidence access. Agents instinctively use `read_file` with guessed paths instead of calling `evidence_chunk_read` with known evidence IDs.

**Impact:** Wasted agent turns (3-4 turns per agent doing path-guessing before giving up), incomplete analysis because agents couldn't find key documents.

**Fix:** Either: (a) reinforce in the agent system prompt that evidence must be accessed through `matter_inventory` -> `evidence_chunk_read`, never through filesystem paths; or (b) provide a `evidence_find_by_name` tool that resolves filenames to evidence IDs; or (c) at minimum, include evidence ID-to-filename mappings in the task context so agents can directly call `evidence_chunk_read`.

---

## Bug 6: Evidence FTS returns "No matching evidence found" for filename-relevant queries [SEV-LOW]

**Evidence:** Run `6f46426e` agent at turn 3 called:

```
evidence_search(query="writ summons initial pleading filing sheriff court Glasgow claim form", topK=15)
→ "No matching evidence found"
```

But `OME-SRC-0026` is `CIVIL_CASE_WRIT_ACTION_PLAN.md` — a document about writs and civil case action. The FTS search didn't find it.

**Root cause:** Evidence FTS searches against chunked text content (extraction_chunks / evidence_chunks_v2), not against filenames. Documents that were ingested but have no extracted text content (or chunks not yet built) are invisible to search. The WRIT_ACTION_PLAN document may not have been chunked yet.

**Impact:** Agents can't discover relevant evidence through semantic search. They have to guess file paths (see Bug 5) or browse the full manifest.

**Fix:** Either (a) include filename as a searchable field in FTS, or (b) when "No matching evidence found" is returned and the manifest contains candidate documents, surface the discrepancy (e.g., "0 results in chunks but 1 filename in manifest matches these keywords").

---

## Bug 7: Checkpoint state contradicts agent-packet state [SEV-MEDIUM]

**Evidence:**

Agent-packet:
- phase: "complete", status: "complete"
- runReadiness: { status: "ready", ready: true, phase: "complete" }

Checkpoint (from `case resume`):
- status: "blocked"
- completedPhaseIds: []
- blockedPhaseIds: []
- updatedAt: "2026-05-10T03:08:21.600Z"

Two views of the same matter state disagree on the fundamental status value. The checkpoint last updated at 03:08 but agent-packet generated at 04:43 — so the checkpoint hasn't been updated in over 90 minutes while the agent-packet reflects current state. But both should be consistent.

**Root cause:** The checkpoint is a cached/snapshotted view that doesn't get refreshed when the orchestrator winds down. The agent-packet is computed fresh from live state. If the orchestrator never properly finalized (because phases were skipped/dangling), the checkpoint never got the final "all phases completed" update.

**Impact:** Any operator reading `case resume` sees a "blocked" status and may think the system is still working or needs attention, when actually it's stopped with incomplete output.

**Fix:** When the orchestrator threads all wind down (no active agents, no leases), trigger a final checkpoint update that reconciles task counts and phase state. If any phase was skipped, record it in the checkpoint with reason rather than leaving completedPhaseIds empty.

---

## Bug 8: _candidates populated with telemetry transcripts, not structured candidates [SEV-LOW]

**Evidence:** `storeTelemetry.candidateSummary` shows:
- indexCount: 0, jsonCount: 0
- filesystemCount: 64, transcriptCount: 64
- candidateFilesystemDrift: 64

64 files in `_candidates/` are all `transcript-*.md` files — agent conversation transcripts dumped as telemetry. Zero are structured JSON candidates that the reducer could process into accepted artifacts.

The artifact store has 1 file (`strategy-memorandum-part1.md`) but it's also non-JSON and not indexed — `artifactFilesystemDrift: 1`.

**Root cause:** Agents produce outputs by writing markdown conversation transcripts. The orchestrator treats the _candidates directory as a telemetry dump rather than enforcing a structured output format. There's no tool for agents to submit structured JSON candidates for reducer processing.

**Impact:** Even when agents produce useful analysis (like strategy-memorandum-part1.md, which is a substantive legal document), it can't be promoted to an accepted artifact. The reducer never sees it. The Phase 11 export pipeline has nothing to export.

**Fix:** Either (a) give agents a `submit_candidate(json_structure)` tool that writes structured JSON to _candidates and indexes it, or (b) add a post-run reducer sweep that scans non-JSON files in _candidates, attempts to validate and index them, and surfaces them for operator approval.

---

## Summary

| Bug | Severity | Blocking delivery? | Root cause area |
|-----|----------|--------------------|-----------------|
| 1. todo_write policy block | HIGH | Yes | Policy/autonomy alignment |
| 2. Phase 7 skipped (Doc Production) | CRITICAL | Yes | Orchestrator phase sequencing |
| 3. Orphaned in_progress tasks | HIGH | Indirect | Agent lifecycle tracking |
| 4. Empty blocked reasons | MED | No | Task blocker capture |
| 5. Agent path-guessing | MED | Indirect | Agent prompt design |
| 6. FTS misses filenames | LOW | Indirect | Evidence search config |
| 7. Checkpoint/state inconsistency | MED | No | State reconciliation |
| 8. Candidates not structured | LOW | Yes | Agent output format |

**Primary blocker:** Bug 2 (Phase 7 skipped) + Bug 1 (todo_write blocked) combined to produce zero usable documents despite $18 in compute.

**Quickest path to working output:** Fix Bug 1 (allow `todo_write` in autonomous mode) and add a `submit_candidate` tool (Bug 8) so agents have a reliable output pathway. Then relaunch with `--force`.
