---
name: board-meeting-summary
language: en
description: Produces a structured, objective summary of corporate board meetings covering metadata, quorum, attendance, conflicts, resolutions with vote counts, committee reports, and significant corporate actions. Use when summarizing board minutes, creating a corporate governance record, or preparing a post-meeting recap for officers, shareholders, or regulators. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Board Meeting Summary

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

Generates an official, concise board meeting summary suitable for the corporate minute book.

## Quick Start

1. Collect inputs: agenda, minutes/notes, attendance list, resolutions, committee reports.
2. Populate every section below. Mark missing information as `UNKNOWN` and flag it in the Issues checklist.
3. Review against Guidelines before finalizing.

## Output Sections

### 1. Meeting Metadata

| Field | Value |
|---|---|
| Date | |
| Time (start/end) | |
| Location | |
| Format (in-person/virtual/hybrid) | |
| Notice/Waiver | |
| Quorum (required/present) | |
| Chair | |
| Secretary/Recorder | |

### 2. Attendance

| Role | Name | Status | Notes |
|---|---|---|---|
| Director | | Present / Absent (Excused/Unexcused) | |
| Officer | | Present | |
| Guest/Advisor | | Present | |

### 3. Conflicts & Recusals

| Person | Matter | Disclosure | Recusal | Notes |
|---|---|---|---|---|
| | | Yes/No | Yes/No | |

### 4. Agenda Items

| # | Topic | Discussion Summary | Decision/Outcome | Follow-up |
|---|---|---|---|---|
| 1 | | | | |

### 5. Resolutions

| # | Summary (or verbatim text) | Vote (For/Against/Abstain/Recused) | Result |
|---|---|---|---|
| 1 | | | Approved/Denied/Tabled |

### 6. Significant Corporate Actions

Check all that apply. For each, add a short action summary with any conditions or limits.

- [ ] Financial statement/audit report approval
- [ ] Dividends or distributions
- [ ] Major contracts/transactions
- [ ] Stock issuance/repurchase
- [ ] Officer election/removal
- [ ] Bylaw or policy amendments
- [ ] M&A or asset sales
- [ ] Financing/borrowing authorization
- [ ] Litigation or claims decisions
- [ ] Other material actions

### 7. Committee Reports

| Committee | Key Findings/Recommendations | Board Action |
|---|---|---|
| | | Accepted/Modified/Deferred |

### 8. Executive Session

Note occurrence and general subject only. Do not disclose privileged content unless explicitly instructed.

### 9. Closing

Announcements, next meeting date/time (if set), adjournment time.

### 10. Issues / Missing Information

- [ ] Missing quorum/notice detail
- [ ] Missing vote counts
- [ ] Missing resolution text/summary
- [ ] Missing attendance confirmations
- [ ] Other: ___

## Guidelines

- **Neutral tone** - do not editorialize or speculate.
- **Precise votes** - always include exact counts; identify abstentions and recusals.
- **Summarize, don't reproduce** - condense discussion; do not copy presentations verbatim.
- **Verify compliance** - confirm recordkeeping against bylaws and governing law; do not assert compliance unless verified.
- **Preserve privilege** - exclude attorney-client content or legal strategy unless specifically directed.

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
