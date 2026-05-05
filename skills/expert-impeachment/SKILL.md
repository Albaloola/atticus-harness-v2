---
name: expert-impeachment
language: en
description: Surfaces inconsistencies, opinion shifts, methodological flaws, and credential discrepancies across expert reports, transcripts, CVs, and publications for impeachment, cross-examination, and exclusion motions. Trigger when the user references expert impeachment, expert report analysis, Daubert or Frye challenges, deposition prep against an expert, or credibility attacks on opposing expert witnesses. [Atticus UK/Scots refined]
tags:
- analysis, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Witness Impeachment

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

Builds a citation-ready inconsistency map to challenge expert credibility, reliability, and admissibility.

## Quick Start

1. Collect all expert materials: reports, supplements, rebuttals, deposition/trial transcripts, declarations, CV, publications, prior testimony, data/appendices.
2. Confirm page/line or Bates-citable versions of each source.
3. Identify the case theory, key disputed issues, and governing admissibility standard (Daubert, Frye, or local rule).
4. Proceed through the workflow steps below in order.

## Workflow

### 1. Source Inventory

Build a table of every source document with columns: Source, Date, Type, Citation Format, Notes.

### 2. Opinion Chronology

Map the expert's opinions over time with columns: Date, Document/Testimony, Key Opinion Statement, Cite. Track how positions evolved across filings.

### 3. Inconsistency Log

For each inconsistency found, log:
- **ID** - unique identifier
- **Category** - one of: `Opinion Change`, `Methodology`, `Facts/Assumptions`, `Credentials`, `Scope Creep`, `Prior Testimony Conflict`, `Publication Conflict`, `Math/Calculation Error`
- **Statement A** and **Statement B** - exact quotes with pinpoint cites
- **Delta** - nature of the conflict
- **Materiality** - H/M/L
- **Admissibility Impact** - Reliability, Fit, Qualifications, or combination
- **Explanation Offered** - any justification on record
- **Cross-Exam Hook** - suggested line of questioning

### 4. Methodology Audit

- Identify each dataset, test, model, or protocol relied upon.
- Confirm consistent application across reports and testimony.
- Flag changes in assumptions, variables, or inputs without explanation.
- Flag conclusions not supported by stated method.
- Note departures from the expert's own published standards or prior testimony.
- Record concessions on limitations, error rates, or missing data.

### 5. Credentials & Bias Check

Verify each claimed credential. Log: Claim, Source, Verification Status, Conflict, Materiality. Flag financial bias, repeat retention patterns, and advocacy history.

### 6. Materiality & Strategy Ranking

Rank each inconsistency ID by: relevance to core issues, expected defense, backfire risk, and recommended use (Motion / Cross / Both). Prioritize contradictions tied to disputed issues or damages.

### 7. Cross-Examination Questions

For each high-priority ID, draft 3 to 6 tight questions following this pattern:
- Lock in Statement A (cite)
- Confirm Statement B (cite)
- Force the inconsistency, Tie to reliability/fit, Obtain concession on impact to opinion

### 8. Admissibility Analysis

- Map high-priority inconsistencies to governing standard elements (reliability, relevance/fit, qualifications).
- Note curative explanations and whether the record supports them.
- Draft a motion-ready paragraph per high-priority ID.

## Pitfalls

- Always use exact quotes with pinpoint citations; paraphrasing undermines impeachment value.
- Treat evolving opinions as impeachment only when unsupported by new data or analysis.
- Do not assume Daubert applies, verify the governing standard and local rules.
- Separate peripheral inconsistencies from motion-worthy defects; over-inclusion dilutes impact.
- Flag any legal citations or standards with `[VERIFY]` if uncertain.
- Avoid character attacks; focus strictly on record-supported reliability and fit.

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
