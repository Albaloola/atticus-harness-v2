---
name: appeal-document-summary
language: en
description: 'Produces structured U.S. appellate document summaries mapping procedural posture, issues on appeal, standards of review, and competing arguments into memo-ready format. Use when summarizing appellate briefs, notices of appeal, records on appeal, or preparing for oral argument. Triggers: appeal, appellate, notice of appeal, standard of review, cross-appeal, appellate brief intake, record on appeal synthesis. [Atticus UK/Scots refined]'
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Appeal Document Summary

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

Generates a record-grounded, issue-driven appellate summary with standard-of-review analysis for each issue on appeal.

## Prerequisites

Collect before starting:

1. **Record set** - lower court orders/judgment, briefs, transcripts, docket, exhibits
2. **Party posture** - appellant/appellee, cross-appeals, consolidated matters
3. **Procedural timeline** - judgment date, notice of appeal, briefing schedule
4. **Jurisdictional context** - appellate court, originating court, applicable rules

## Quick Start

Build the memo in this order. Cite the record for every factual assertion or mark the gap explicitly.

1. Identify parties, courts, and appeal type
2. Map procedural posture and jurisdictional basis
3. List each issue on appeal with its standard of review
4. Summarize record-bound facts (disputed facts labeled)
5. Present each side's arguments with authorities
6. Assess dispositive issues and risk
7. Note related proceedings, pending motions, and deadlines
8. Flag research gaps and record supplement needs

## Memo Structure

### Section Outline

1. Case Caption and Courts, parties, originating court, appellate court, appeal type (as of right / discretionary / interlocutory)
2. Procedural Posture and Jurisdiction, judgment/order on appeal, notice of appeal date, timeliness, jurisdictional basis, preservation status
3. Issues on Appeal and Standards of Review, use Table 1
4. Factual Background (Record-Bound) - chronology, key record cites, disputed facts
5. Arguments and Authorities, appellant position, appellee position, conflicts or issues of first impression
6. Dispositive Issues and Risk Assessment, strongest/weakest points, standard-of-review sensitivity
7. Related Proceedings and Collateral Effects, prior appeals, parallel cases, preclusion risks, amicus/public interest
8. Pending Motions and Deadlines, motions, briefing schedule, oral argument date
9. Next Steps and Research Gaps, research tasks, record supplement needs

### Required Tables

**Table 1 - Issues and Standards**

| Issue | Appellant Claim of Error | Appellee Response | Standard of Review | Record Support | Dispositive? |
|-------|--------------------------|-------------------|--------------------|----------------|--------------|

**Table 2 - Key Orders and Rulings**

| Date | Court | Order/Ruling | Impact on Appeal | Record Cite |
|------|-------|--------------|------------------|-------------|

**Table 3 - Authorities Map**

| Issue | Primary Authorities | Opposing Authorities | Conflicts/Novelty |
|-------|---------------------|----------------------|-------------------|

**Table 4 - Record Gaps**

| Topic | Missing/Weak Record Support | Risk | Suggested Remedy |
|-------|----------------------------|------|------------------|

## Pitfalls and Checks

- **Record-binding**: Every fact must cite the record. If unsupported or disputed, label it, never infer facts not in the record.
- **Preservation**: Flag preservation defects and waiver risks in Section 2; these can be dispositive.
- **Jurisdictional defects**: Surface timeliness and jurisdictional issues early, they moot all other analysis.
- **Standard-of-review impact**: For each issue, state the standard and explain in one sentence how it affects the outcome.
- **Relief beyond record**: Note any requested relief that exceeds what the record or standard of review supports.
- **Tone**: Neutral and analytic, assess both sides without advocacy.

---

Key changes from the original:

- **Description** tightened, third-person, includes clear trigger keywords, removed redundant keyword list
- **Eliminated the full markdown template** - the section outline + tables convey the same structure at ~40% of the tokens. The template was largely a repetition of the outline with blank fields.
- **Collapsed "Narrative Rules" and "Guidelines" into "Pitfalls and Checks"** - single section, no repeated advice
- **Added "Quick Start"** - gives the core workflow as an ordered checklist per best practices
- **Overview sentence** kept to one line, Claude already knows what appellate summaries are
- **Total line count** dropped from ~123 to ~73 while preserving all domain-critical content (tables, section structure, record-binding rules, preservation/jurisdictional flags)

It looks like the file write permission was denied. Would you like to approve the write so I can save this to disk?

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
