---
name: appeal-summary
language: en
description: Generates structured analytical summaries of appellate documents covering procedural posture, issues on appeal, standards of review, and strategic assessment. Use when onboarding to an appeal, preparing for oral argument, evaluating appellate risk, or summarizing the appellate record. [Atticus UK/Scots refined]
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Appeal Document Summarization

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

Produces a structured memorandum from appellate documents (notices of appeal, briefs, lower court decisions, transcripts, motions) as the primary reference for appellate counsel.

## Quick Start

Gather available documents: appellate filings, lower court decision(s), briefs, record materials, docket sheet. Produce a memorandum following the sections below. If documents are incomplete, note what is missing and adjust sections accordingly.

## Memorandum Sections

### 1. Case Overview

Table with: caption, lower court (court/judge/case no.), appellate court (court/case no.), appellant (name/role below), appellee (name/role below), cross-appeals, nature of action.

### 2. Procedural History

Chronological timeline from filing through notice of appeal. Flag:

- [ ] Timeliness of notice of appeal
- [ ] Proper record designation and transmission status
- [ ] Jurisdictional defects or concerns
- [ ] Pending motions (stay, expedited review, supplemental record)

### 3. Issues on Appeal

For each issue, specify:

- **Issue** - Framed as alleged lower court error
- **Standard of Review** - De novo / abuse of discretion / clear error / substantial evidence
- **Preservation** - Where and how raised below; waiver risk
- **Disposition Weight** - Dispositive / secondary / alternative ground

### 4. Factual Summary

- Organize chronologically or thematically based on which best illuminates the issues, Distinguish **established record facts** from **disputed facts**
- Cite record references (transcript pages, exhibit numbers) for each key assertion, Note gaps or weaknesses in the factual record

### 5. Legal Arguments

For each issue, compare appellant vs. appellee on: core argument, key authorities, strongest point, vulnerability.

Additionally flag: circuit splits, questions of first impression, novel precedent extensions, amicus participation.

### 6. Related Proceedings

If applicable: prior appeals or remands (law of the case), parallel litigation (res judicata / collateral estoppel), administrative proceedings below, consolidated matters.

### 7. Strategic Assessment

Assess: standard of review advantage (favors appellant / appellee / neutral), record quality (strong / adequate / weak), weight of authority, equitable considerations, settlement posture, oral argument priorities.

### 8. Next Steps & Deadlines

Track: briefing schedule, oral argument date, pending motions, outstanding research needs, strategic recommendations.

## Pitfalls

- **Record-bound** - Never incorporate facts outside the designated appellate record
- **Standard of review drives strategy** - Always distinguish de novo vs. deferential review; this is the central strategic calculus
- **Incomplete filings** - If briefs are not yet filed or documents are missing, note gaps and adjust sections
- **Unverified citations** - Mark any legal citation not drawn directly from provided documents with `[VERIFY]`
- **Objectivity** - Present both sides' positions fairly before assessing strengths and weaknesses
- **Citation format** - Use proper legal citation for cases, statutes, and record references

---

**Key changes made:**

- **Trimmed from 119 to 67 lines** - nearly half the token cost
- **Replaced verbose tables** (Case Overview, Issues on Appeal, Legal Arguments, Strategic Assessment, Next Steps) with compact inline descriptions, same information, far fewer tokens
- **Collapsed "Prerequisites" into Quick Start** - one sentence instead of a numbered list
- **Renamed "Guidelines" to "Pitfalls"** with terse `**bold** - dash` format per best practices
- **Removed empty-cell scaffold tables** (Legal Arguments comparison, Next Steps) that consumed tokens without adding instructional value
- **Kept all 8 memorandum sections and checklist items** - no domain accuracy lost
- **Frontmatter**: description tightened, kept third-person with clear trigger guidance

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
