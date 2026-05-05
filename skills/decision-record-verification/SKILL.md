---
name: decision-record-verification
language: en
description: Cross-references a judge's decision, court opinion, or final order against one or more hearing/trial/deposition transcripts to verify whether the record supports each finding. Produces strict dual-citation blocks with document names, page/line references, and verbatim quotes from both sources. Use when preparing appellate review, post-trial motions, record discrepancy audits, or transcript-based fact checks of judicial findings. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Decision Record Verification

## Atticus UK/Scots Legal Excellence Overlay

Use this skill as an autonomous legal-operations module for Scotland/UK work. Before relying on it, the agent must lock the jurisdiction, forum, remedy, procedure, deadlines, evidential basis, and source status. Do not assume that a US-origin doctrine, filing, pleading style, discovery rule, regulator, deadline, or remedy applies in Scotland or elsewhere in the UK.

### Mandatory operating rules

1. **Jurisdiction lock.** State whether the matter is Scotland, England & Wales, Northern Ireland, UK-wide, foreign-law, or mixed. If Scotland is plausible, distinguish sheriff court, Court of Session, tribunals, regulators, ombudsmen, and internal institutional processes.
2. **Official-source hierarchy.** Prefer legislation.gov.uk, Scottish Courts and Tribunals Service rules/forms, Court of Session and sheriff court rules, tribunal/regulator guidance, UK Supreme Court materials, GOV.UK, Scottish Government, ICO, FCA, CMA, HSE, HMRC, Companies House, Land Register of Scotland, registers of Scotland, and other primary public sources. Treat secondary commentary as orientation only.
3. **Live verification.** Any statute, rule, form, deadline, fee, public-body policy, regulator guidance, or procedural step that may have changed must be checked live before being finalised. Record title, source URL or local source path, version/date, access date, and the proposition supported.
4. **Evidence discipline.** Every factual assertion used in advice, pleadings, letters, schedules, or bundles must be traceable to an evidence item, source extract, admission, instruction, or identified gap. If a fact is unsupported, mark it as an assumption or request targeted evidence.
5. **Element-by-element reasoning.** Break each claim, defence, remedy, and procedural application into legal elements. Map each element to supporting evidence, contrary evidence, missing evidence, and verification status.
6. **Autonomous depth.** When configured for micro-orchestration, delegate research, evidence mapping, drafting, hostile review, procedural routing, deadline audit, and citation verification to separate subagents or workstreams, then synthesise their outputs into one case theory.
7. **External-action boundary.** Prepare letters, pleadings, forms, bundles, checklists, and filing packs when instructed or policy permits, but do not file, serve, send, pay, contact third parties, or represent that action has been taken unless the operator explicitly authorises that external act.
8. **Uncertainty handling.** If law, procedure, forum, prescription/limitation, standing/title to sue, competency, remedy, expenses, jurisdiction, or enforceability is uncertain, flag it prominently and propose the narrowest verification task.

### Expected work product

Where proportionate, produce a chronology, issue map, source log, evidence matrix, merits/risk table, remedy/damages table, procedural route note, draft document, bundle index, service/filing checklist, and operator handoff note. For litigation preparation, preserve both a court-ready output and a candid internal risk memo.

Cross-reference a court decision against transcripts and surface record alignments, discrepancies, and gaps with exact dual-source citations.

## Prerequisites

- **Decision document** - opinion/order/judgment to test against the record
- **Transcript set** - one or more sessions (trial, hearing, or deposition) with page/line numbering when available
- **Session labels** - clear names for each transcript file (for example, `Day 1 AM`, `Day 1 PM`)
- **Scope confirmation** - identify whether review is full-document or limited to specific findings/issues

If required documents are missing or unlabeled, request them before analysis.

## Quick Start

1. Read the decision in full and extract each factual finding, credibility determination, and testimony-dependent legal conclusion.
2. Convert each finding into a verification claim.
3. Review transcripts in session order and capture support/conflict passages for each claim.
4. Write one citation block per match using exact quotes and pinpoint citations.
5. Finish with a findings summary: alignments, discrepancies, and record gaps.

## Workflow

### 1. Anchor the Decision

- Treat the decision as the baseline source.
- Extract only claims that depend on testimony or the trial/hearing record.
- Keep each claim atomic (one proposition per claim) to avoid mixed citations.

### 2. Cross-Reference Transcripts

- Review each transcript session in chronological order.
- Tag each matched passage as:
  - **`[ALIGNMENT]`** - transcript directly supports the decision's characterization
  - **`[DISCREPANCY]`** - transcript contradicts, materially differs from, or fails to contain what the decision attributes to the record

### 3. Build Citation Blocks

Use this exact field order for every block:

- **`[ALIGNMENT]` or `[DISCREPANCY]`**
- **Document Name (Decision):** full decision filename/title
- **Location (Decision):** `Page X, Line Y` (or paragraph/section when line numbers do not exist)
- **Decision Quote:** exact verbatim excerpt
- **Document Name (Transcript):** full transcript filename/session label
- **Location (Transcript):** `Page X, Line Y`
- **Transcript Quote:** exact verbatim excerpt
- **Note:** optional 1-2 sentence explanation of why the pair is support or divergence

### 4. Summarize Findings

After all citation blocks, provide:

- **Primary Alignments** - highest-impact ways the record supports the decision
- **Primary Discrepancies** - highest-impact ways the record diverges from the decision
- **Record Gaps** - decision findings with no located supporting/opposing transcript passage

## Output Order

1. **Header block** listing all reviewed documents and transcript session labels
2. **Citation blocks** grouped by session, in session order
3. Within each session group: list **`[ALIGNMENT]`** blocks first, then **`[DISCREPANCY]`** blocks
4. **Large-corpus override:** if the corpus is very large or the user requests priority triage, list **`[DISCREPANCY]`** blocks first, then **`[ALIGNMENT]`** blocks
5. **Summary of Findings**

## Quality Controls

- Quote verbatim in both `Decision Quote` and `Transcript Quote`; do not paraphrase those fields.
- Never invent page/line references.
- If pinpoint location cannot be determined, write:
  - `Page/Line unavailable, approximate location: <section or paragraph description>`
- Do not treat similar language as equivalent to an exact statement.
- If a decision paraphrases testimony, flag that in `Note`.
- Flag sessions with zero relevant passages; absence can be material.
- Mark uncertain citations or interpretations with `[VERIFY]`.

## Edge Cases

- **Multi-session transcripts**: treat each file as a distinct source and keep session label in every block.
- **Incomplete/redacted transcripts**: record the limitation under `Record Gaps`.
- **Privileged or sealed material**: do not reproduce protected excerpts; flag and advise handling under governing order.
- **Non-U.S. records**: adapt pinpoint format to the jurisdiction's transcript citation convention.

## Foreign-Law / US-Origin Guardrail

This skill may contain inherited US terminology. For Scotland/UK use, translate rather than copy. Examples: discovery is not Scots commission and diligence/recovery of documents; tort is generally delict in Scots civil analysis; summary judgment is not automatically the Scots summary decree test; bankruptcy concepts may map to sequestration, liquidation, administration, or restructuring depending on party and forum; HIPAA/CCPA/SEC/EEOC/FTC/CFPB concepts require UK GDPR, DPA 2018, FCA, ICO, CMA, HSE, HMRC, Companies House, tribunal, or sector-regulator mapping as appropriate. If the matter is genuinely US or foreign-law, quarantine the foreign-law analysis and warn that local counsel/source verification is required.

## Final Quality Gate (Mandatory)

Before marking the task complete, confirm:

- Jurisdiction/forum/procedure have been identified and are not imported from the wrong legal system.
- Current law, rules, forms, fees, deadlines, and public-body guidance have been verified from official sources where necessary.
- Every material factual assertion is tied to evidence, a source, an admission, an instruction, or a clearly labelled assumption.
- Prescription, limitation, time bar, appeal periods, service rules, competency, standing/title to sue, expenses/costs exposure, and enforcement have been considered where relevant.
- The output separates client-facing conclusions from internal risk analysis.
- Drafts include placeholders only where evidence or instructions are genuinely missing; no fabricated citations, authorities, quotes, dates, forms, or procedural steps are allowed.
- A hostile reviewer could reconstruct the reasoning from the evidence matrix and source log.
