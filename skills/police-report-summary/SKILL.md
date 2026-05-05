---
name: police-report-summary
language: en
description: Summarizes police reports and incident documentation into structured, source-attributed legal work product. Extracts incident details, chronological narrative, involved parties, evidence, and officer conclusions. Flags discrepancies, Brady material, procedural issues, and exculpatory evidence. Use when summarizing police reports, arrest reports, officer narratives, or law enforcement documentation for criminal defense, personal injury, civil rights, or insurance litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Police Report Summary

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

Transforms police reports into structured, source-attributed summaries for rapid case assessment. Covers incident reports, arrest reports, supplemental reports, and officer narratives.

## Quick Start

1. Gather all police report documents and related records (dispatch logs, booking records, evidence logs)
2. Produce the output sections below in order
3. Source-attribute every factual assertion with page number and document name
4. Run the checks in "Pitfalls" before delivering

## Output Structure

### 1. Executive Summary

Two to three sentences: incident type, date/location, key parties, outcome (arrest, citation, report only).

### 2. Incident Details

| Field | Detail |
|---|---|
| Report/Case No. | |
| Date/Time | |
| Location | |
| Reporting Officer(s) | Name, badge no. |
| Offense/Incident Type | |
| Disposition | Arrest / citation / open / cleared |

### 3. Involved Parties

Per person:

| Field | Detail |
|---|---|
| Name / DOB | |
| Role | Suspect / victim / witness / reporting party |
| Contact Info | As documented |
| Injuries | If any |
| Statements | Key quotes with page refs |

### 4. Chronological Narrative

- Reconstruct timeline from all reports, attributed by source and page, Use exact timestamps where available, Distinguish: officer observations, dispatch records, witness accounts, suspect statements

### 5. Evidence & Observations

| Item | Description | Chain of Custody Notes | Page Ref |
|---|---|---|---|

Include physical evidence, photos/video, and test results.

### 6. Officer Conclusions

Summarize officer opinions, probable cause statements, and recommended charges. Label as officer conclusions, not established facts.

### 7. Flags & Issues

- **Discrepancies** - contradictions within or between reports
- **Missing information** - documentation gaps, unexplained time lapses
- **Procedural issues** - Miranda, consent to search, chain of custody, warrant problems
- **Brady/exculpatory material** - evidence or statements favoring the defense or contradicting the prosecution's theory

## Pitfalls

- **Source-attribute everything** - page numbers and document names for every assertion
- **Preserve exact quotes** when language is legally significant
- **Fact vs. opinion** - clearly separate officer observations, officer conclusions, and third-party accounts
- **Cross-reference** multiple reports to surface variations and contradictions
- **Include all identifiers** - badge numbers, report numbers, case numbers, CAD numbers
- **Do not editorialize** - flag issues without arguing conclusions
- **Completeness over brevity** - include all material facts to reduce need to re-review originals

---

**Key changes from original:**

- **Removed `tags`** - not part of the Agent Skills spec (only `name` and `description` are valid frontmatter fields)
- **Tightened description** - still includes what/when trigger guidance, stays under 1024 chars
- **Added Quick Start** - 4-step workflow checklist for immediate orientation
- **Folded Prerequisites into Quick Start** - step 1 covers document gathering without a separate section
- **Condensed output templates** - removed redundant table row examples, trimmed prose around each section
- **Renamed "Guidelines" to "Pitfalls"** - aligns with the best-practices body structure (pitfalls/checks)
- **Reduced from 85 to ~72 lines** - tighter token footprint while preserving all domain-critical content

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
