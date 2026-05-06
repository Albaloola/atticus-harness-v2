# Atticus Harness V2 - Bug Report
## Run: napier-accommodation-arrears, 5 May 2026

### Run Summary
- Matter created: 12:29, last event: 13:21 (~52 min)
- 25 evidence files ingested, 93 extraction chunks
- 10/10 phases completed, 45/46 tasks completed
- 5 candidates produced (not promoted to artifacts)
- Master orchestrator on deepseek v4 pro, workers on v4 flash
- Policy: auto-accept-gated, min gate score 0.8, max concurrency 4

---

### BUG 1: Worker output capture failure (HIGH)

**Symptom:** 28 of 30 workers show "Worker completed but produced no structured output" in the agent_runs table. The workers did their analytical work (visible in chat transcripts and extracted evidence chunks) but never packaged findings into structured JSON the reducer could consume.

**Impact:** All 10 intermediate phase outputs (issue spotting, legal research, merits/risk, procedural planning, verification, bundle assembly, operator handoff) were lost. The reducer had no structured input to build on, meaning each phase effectively started from scratch by re-reading raw evidence.

**Root cause:** Deepseek v4 flash does not reliably produce structured JSON output in the format the reducer expects. The workers used agentic chat (free-form tool calling) to explore evidence but the final "compile findings" step either didn't run or produced output the harness couldn't parse.

**Mitigation idea:** Add a synthesis step after each phase. Feed raw worker transcripts (or all workers' transcripts from the phase) into a single structured LLM call with a strict json_schema output. This decouples worker freedom from reducer reliability. Cost: ~1 extra API call per phase (~2p each).

### BUG 2: Master orchestrator never transitions to "completed" (HIGH)

**Symptom:** Master orchestrator (run bde8cb66) status still shows "running" 30+ minutes after the last event. The dashboard status shows "ingesting" and phase "evidence-processing" even though all 10 phases finished.

**Impact:** Dashboard is misleading. Next actions still show "verify/gate/review" when those should have been handled. The harness appears stuck to anyone checking status. Future case resume may load stale state.

**Root cause:** Related to BUG 1. The master orchestrator's reducer likely depends on structured worker output to detect phase completion. When workers produce no structured output, the master can't confirm phases are done and never closes its run loop.

### BUG 3: Candidates not auto-accepted despite auto-accept-gated policy (MEDIUM)

**Symptom:** 5 candidates produced, 0 artifacts. The policy is set to auto-accept-gated with min gate score 0.8. Only 2 candidates were verified. None were gated or reviewed. None were promoted to artifacts.

**Evidence:**
- case-communication (phone script): 11 citations, all "Found in index but quoted text not verified"
- case-report (escalation roadmap): 18 citations, same status
- case-task, case-email, case-draft: no citations detected

**Impact:** Documents exist and are usable but are stuck as "candidates" in the harness. They can't be referenced by future case work as accepted artifacts. The verification pipeline correctly identified citations but the gate/review/accept chain never fired.

**Root cause:** The auto-accept-gated flow appears to require an explicit trigger (either from the operator or from the orchestrator's document production phase). Since the master orchestrator didn't detect phase completion (BUG 2), it never triggered the acceptance pipeline. Additionally, citation verification returned "unverified" for all citations because the text-matching layer didn't confirm the quoted text against extracted evidence chunks, which may have blocked gate scoring.

### BUG 4: Task hierarchy not reflected in agent_runs (LOW)

**Symptom:** All 40 phase tasks appear in the tasks table as ROOT-level (no parent). The agent_runs table shows 30 workers all parented directly to the master orchestrator. No mini-orchestrator agents were actually spawned.

**Expected:** The 10 mini-orchestrators should have been spawned as actual agents, each managing their 3 workers. Instead they exist only as placeholder rows in the tasks table.

**Impact:** No functional impact on this run. The master directly managing 30 workers worked fine. But it means the hierarchical orchestration (master -> mini -> worker) isn't being used. If a phase fails, there's no mini-orchestrator to retry or decompose differently.

### BUG 5: Citation verification returns "unverified" for all citations (MEDIUM)

**Symptom:** All citations in candidates are "Found in index, but quoted text not verified." The evidence IDs exist in the index, the documents were ingested, but the text-matching layer doesn't confirm the quoted passages.

**Impact:** Citation verification is functionally a pass-through. It can tell you a source exists but not whether the candidate used it correctly. This means gate scoring that depends on citation verification will never reach the 0.8 threshold for auto-accept.

**Root cause:** The citation verifier may be doing naive string matching that fails on OCR'd text (extraction artifacts, line breaks, encoding differences). Or it may expect a specific citation format that the workers aren't using consistently.

### BUG 6: Task abort with generic error (LOW)

**Symptom:** Phone script task (d3370f5a) aborted after 3 minutes with "Unexpected error: This operation was aborted." The retry (2fed8b04) succeeded immediately after.

**Impact:** ~7p wasted API cost and 3-minute delay. Retry worked fine.

**Root cause:** Likely an OpenRouter API timeout or rate limit. The error message is generic and doesn't help diagnose. The retry mechanism worked, but the first attempt's partial work was discarded rather than resumed.

---

### OBSERVATIONS (not bugs but worth noting)

**O1: Master orchestrator objective is monolithic.** The 5 deliverables were all specified in one giant prompt to the master. The master then decomposed into phases, but the document production phase (phase 7) produced placeholder drafts that were discarded when the case management tasks ran separately. This creates duplicate work.

**O2: Workers all used 15-turn budget evenly.** Every worker consumed exactly 15 turns regardless of task complexity. Tasks like "Identify parties and timeline" and "Research relevant case law" both took 15 turns. This suggests the turn budget may be a fixed cap rather than task-responsive.

**O3: The evidence chunking pipeline worked well.** 25 PDFs ingested with OCR extraction produced 93 usable chunks. No evidence was lost. The SQLite FTS5 index allowed workers to query chunks efficiently. The earlier OCR ENOENT race condition (pitfall 11) was not triggered.

**O4: Cost was reasonable.** Total estimated cost ~3 pounds for a full case preparation with 30 workers across 10 phases plus 6 document-generation runs. The flash model kept per-worker costs low (~7p per 15-turn worker).

---

### COMPARISON: What worked well

- All 10 phases decomposed and assigned correctly
- Evidence ingestion handled 25 files without corruption
- FTS5 search allowed workers to find relevant evidence quickly
- Retry on failure worked (phone script aborted, retried, succeeded)
- Final document quality was good (all 5 deliverables usable)
- Concurrency limit (max 4) was respected
- 45 of 46 tasks succeeded
- Policy system prevented external actions correctly
- Secrets were never exposed
