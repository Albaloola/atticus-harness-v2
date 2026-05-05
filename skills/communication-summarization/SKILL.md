---
name: communication-summarization
language: en
description: Generates structured memorandum-style summaries of legal communications (email threads, meeting notes, correspondence, negotiation records). Captures decisions, commitments, deadlines, party positions, and legally significant language. Triggers when the user asks to summarize communication chains for corporate matters, discovery review, settlement negotiations, or matter file management. [Atticus UK/Scots refined]
tags:
- corporate, memo, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Communication Summarization

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

Distills legal communication chains into a structured memorandum capturing decisions, commitments, deadlines, and legally significant elements.

## Quick Start

1. Collect source communications (email threads, meeting notes, transcripts)
2. Gather matter context if available (contracts, prior agreements, party relationships)
3. Produce memorandum following the output structure below

## Output Structure

### Header Block

| Field | Content |
|---|---|
| To | [Requesting attorney / matter file] |
| From | CaseMark |
| Date | [Today's date] |
| Re | Communication Summary - [Matter/Subject] |
| Sources | [All documents/threads reviewed] |

### 1. Executive Overview

2 to 3 sentences: purpose of communications, period covered, key outcome or current status.

### 2. Background and Context

- Parties involved (names, roles, organizations)
- Communication period (date range)
- Subject matter / transaction / dispute

### 3. Key Decisions and Agreements

| Date | Parties | Decision / Agreement | Source |
|---|---|---|---|

Flag agreements that modify existing contracts, could constitute acceptance/waiver/novation, or contain representations/admissions.

### 4. Commitments and Deadlines

| Date | Party | Commitment / Obligation | Source |
|---|---|---|---|

### 5. Outstanding Issues

- Unresolved disputes or open questions, Conflicting party positions, Gaps in the communication record

### 6. Legally Significant Language

Flag and quote verbatim (with source and date) any:
- Notice language (contractual or statutory)
- Admissions or representations, Document/information requests, References to contracts, statutes, or legal authorities, Language that could toll deadlines or trigger obligations

### 7. Action Items

| Priority | Action | Responsible Party | Due Date | Source |
|---|---|---|---|---|

## Pitfalls and Checks

- **Attribution required** - every factual claim must cite source document, sender, and date; never synthesize without attribution
- **Neutral tone** - report what parties said; do not characterize beyond what the source explicitly states
- **Superseding communications** - when later messages modify or override earlier ones, explicitly note the relationship
- **Multi-party matters** - organize by party or topic when three or more distinct parties are involved
- **Gaps** - flag missing correspondence or ambiguities; may indicate spoliation issues or areas needing clarification
- **Jurisdiction** - US default; flag references to non-US law or cross-border obligations for separate review

---

Key changes:
- **Description** rewritten in third-person with explicit trigger guidance ("Triggers when...")
- **Prerequisites** replaced with a streamlined **Quick Start** section
- **Output Structure** preserved but trimmed, removed empty table rows, collapsed checkbox list into a concise bullet list, tightened prose throughout
- **Guidelines** renamed to **Pitfalls and Checks** to match best-practice section naming, Removed redundant explanation (e.g. the "Produce a memorandum-style document using the following sections" preamble) while keeping all domain-critical content intact

It looks like I don't have write permissions to the file. Would you like to grant write access so I can save it, or would you prefer to copy the content above manually?

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
