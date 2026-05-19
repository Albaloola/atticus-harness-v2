# Harness Architecture Rethink — Deep Legal Analysis & Drafting Pipeline

**Author:** Atticus (capturing Omar's vision)
**Date:** 2026-05-07
**Context:** After running the previous accommodation arrears reference case, the current harness architecture was found to be too shallow for serious legal work. This document captures the operational requirements and architectural vision for a fundamentally stronger system.

---

## 1. Evidence Ingestion — Quality-Controlled & Court-Ready

### Current Problem
The harness ingests files with a single pass: hash → detect format → extract text → index. No quality checking, no OCR verification, no intelligent organisation.

### Requirements

**1.1 OCR Quality Assurance**
- After extraction, the harness must VERIFY the output quality
- If text extraction confidence is low (< 90%), flag for re-OCR
- Re-OCR should use the best available tool (tesseract, marker-pdf, or cloud OCR) with configurable fallback chain
- After re-OCR, compare output against expected format (e.g. does it contain coherent sentences? Are email headers recognisable?)
- Log OCR confidence scores per document so the operator knows which evidence is reliable

**1.2 Evidence Organisation for Court Use**
- Evidence must be organised with clear, consistent naming conventions suitable for court bundles
- Each piece of evidence should be classified by type: contract, correspondence, financial record, medical record, court document, etc.
- Evidence should be tagged with relevance to legal issues (e.g. "Equality Act disability", "arrears timeline", "guarantor financial position")
- A master evidence index should be generated that maps document IDs to file names, dates, parties, and key content summaries
- Bundle preparation should be automated — pagination, tabbed sections, exhibit lists

**1.3 Evidence Integrity Checks**
- Verify that extracted text matches the source document (spot-check key data points)
- Flag documents where the extraction pipeline produced garbled output
- For scanned documents, verify that OCR captured all pages (compare page count)
- Maintain chain of custody: who ingested, when, from where, hash verification

---

## 2. Investigation & Analysis — Deep, Recursive, Exhaustive

### Current Problem
Single agents analyse evidence superficially. The analysis phase is unstructured — it "just does whatever." There is no mechanism for drilling deeper when something interesting is found.

### Requirements

**2.1 Recursive Sub-Agent Investigation**
- Analysis should NOT be done by one agent looking at all evidence
- Instead: the master/mini orchestrator decomposes the case into investigation threads
- Each thread spawns its own sub-agents (and sub-sub-agents) that drill into specific evidence items
- If a sub-agent finds something that needs deeper investigation, it REQUESTS a new thread from the orchestrator, which spawns expert workers
- This creates an unlimited-depth investigation tree — every lead is followed until exhausted

**2.2 Multi-Perspective Analysis**
- Each piece of evidence should be analysed from multiple angles:
  - What does this document say? (plain reading)
  - What legal issues does it raise? (legal relevance)
  - What does the other side say about this? (adversarial view)
  - What are we missing? (gaps and inferences)
- Each perspective can be handled by a separate sub-agent with appropriate expertise

**2.3 Micro-Detail Extraction**
- Every detail matters — dates, names, phone numbers, email subjects, meeting summaries, specific wording
- Agents must extract and QUOTE exact language from evidence, not paraphrase
- Every finding must include a citation: evidence ID, page/chunk reference, exact quote
- Multiple passes: first pass extracts obvious facts, second pass finds connections, third pass identifies inconsistencies or gaps

**2.4 Evidence Cross-Referencing**
- Agents must cross-reference across evidence items:
  - Does the bank statement match what the meeting summary says?
  - Does the Notice to Quit date align with the email timeline?
  - Are there contradictions between what the university said in February vs April?
- Cross-reference findings are stored as relationships in the evidence graph

**2.5 Graded Findings**
- Not all findings are equally important. Each finding should be graded:
  - **Critical** — directly determines case outcome (e.g. disability disclosure date)
  - **Important** — significantly affects a legal argument (e.g. guarantor financial position)
  - **Supporting** — adds weight but isn't decisive (e.g. counselling closure timeline)
  - **Contextual** — background information (e.g. university charity number)
- This grading feeds into the drafting phase to determine what gets emphasised

---

## 3. Quality Control — Review Loops at Every Stage

### Current Problem
Analysis findings pass through without review. There is no critical examination of the quality of the work.

### Requirements

**3.1 Adversarial Review of Findings**
- Every analysis output should be reviewed by a separate agent playing "devil's advocate"
- The reviewer should:
  - Check citations — does the evidence actually say what the agent claims?
  - Check reasoning — is the inference logically sound?
  - Check completeness — was anything missed?
  - Flag weaknesses — what could the other side argue?
- If the reviewer finds problems, the work goes back to the analysis agent for revision

**3.2 Multi-Agent Consensus**
- For critical findings, require agreement from 2+ independent agents
- If agents disagree, a senior reviewer (using higher reasoning effort) adjudicates
- The adjudication and its reasoning are recorded

**3.3 Quality Gates Before Drafting**
- Before any drafting begins, the investigation outputs must pass quality gates:
  - All evidence items have been analysed (no gaps)
  - Each finding has at least one citation
  - Cross-references between related evidence have been checked
  - Contradictions have been flagged and noted
- If gates fail, the orchestrator spawns additional workers to fill the gaps

---

## 4. Drafting — Outline → Detail → Section Writing → Assembly → Review

### Current Problem
Drafting is done by a single agent in one pass. Limited by context window. No structural depth.

### Requirements

**4.1 Phase 1: Legal Outline**
- Before any writing, the system produces a detailed legal outline
- The outline identifies:
  - The legal claims and defences
  - The evidence supporting each element
  - The structure of the argument (chronological, issue-by-issue, etc.)
  - Case law and statutory provisions to cite
- The outline is reviewed and approved before drafting begins

**4.2 Phase 2: Detailed Expansion**
- Each section of the outline is expanded with full reasoning by dedicated agents
- Each expansion agent has access to ALL the investigation findings (not just their section)
- Expansions include every relevant piece of evidence quoted in full with citations
- Expansions anticipate counter-arguments and pre-emptively address them

**4.3 Phase 3: Section Drafting (Parallel)**
- Multiple drafting agents work on different sections simultaneously
- Each agent writes their section on maximum reasoning effort (xhigh)
- Each claim in the draft is cited to specific evidence (evidence ID + chunk + quote)
- Agents can work independently IF sections are self-contained
- OR agents work sequentially IF sections depend on earlier ones (e.g. facts section feeds into legal arguments section)

**4.4 Phase 4: Assembly & Coherence Check**
- All sections are assembled into a single coherent document
- A dedicated review agent checks for:
  - Consistent language and tone across sections
  - No duplication or contradiction between sections
  - Logical flow from section to section
  - All cross-references within the document are correct
- The coherence checker can request section rewrites if needed

**4.5 Phase 5: Legal Review (Adversarial)**
- The complete draft is reviewed by a "hostile reviewer" — an agent tasked with finding every possible weakness
- The reviewer checks:
  - Is every factual claim supported by the evidence cited?
  - Are there legal errors or omissions?
  - What would the other side's best response be?
  - Are the remedies sought properly justified?
- If issues are found, the relevant drafting agent revises, and the review loops until clean

**4.6 Phase 6: Final Polish & Formatting**
- Citation formatting consistent (pinpoint references, exhibit references)
- Court-appropriate formatting (headers, page numbers, bundle references)
- Clean, human-readable language (plain English, not legalese)
- Final sign-off from the operator before external use

---

## 5. Context & Token Management

### Requirements
- Individual agents write their own sections to avoid context window limitations
- Each agent has focused context: just the evidence relevant to their section + the outline + the investigation findings
- The orchestrator manages what context each agent needs and provides it efficiently
- Investigation findings are stored in a structured format (not free text) so they can be retrieved precisely
- The evidence graph allows agents to find related evidence without loading everything

---

## 6. Orchestrator Role

### Requirements
- The master/mini orchestrator must UNDERSTAND what each agent is doing and why
- It tracks the state of the entire investigation tree: which threads are complete, which are pending, which need deeper work
- When an agent requests deeper investigation, the orchestrator spawns appropriate expert workers
- The orchestrator manages dependencies: section B can't start drafting until section A is reviewed
- The orchestrator keeps a live dashboard of progress that the operator can check

---

## 7. All Work is Saved & Reusable

### Requirements
- Every investigation finding, cross-reference, review result, draft version, and revision is saved
- Nothing is thrown away — the full chain of reasoning is preserved
- If the operator asks "why did you write this paragraph?" the system can trace back through the investigation to the specific evidence that supports it
- The saved work feeds into ALL subsequent phases — drafting uses investigation findings, not re-analysis

---

## Status

**Draft — to be reviewed by a stronger reasoning agent for optimal architecture design.**
