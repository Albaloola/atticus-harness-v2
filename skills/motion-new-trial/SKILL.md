---
name: motion-new-trial
language: en
description: Drafts a post-verdict Motion for New Trial in criminal defense cases. Structures arguments around recognized grounds (weight-of-evidence, newly discovered evidence, prosecutorial misconduct, juror misconduct, IAC, judicial error) with record citations. Use when filing a motion for new trial, post-conviction motion, or requesting the court set aside a criminal verdict. [Atticus UK/Scots refined]
tags:
- drafting, litigation, motion, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Motion for New Trial

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

Drafts a motion asking the trial court to set aside a jury verdict and order a new trial, with ground-by-ground legal and factual support from the trial record.

## Required Inputs

1. **Verdict info** - date, charges of conviction, case number, court
2. **Trial transcripts** - page/line citations for key testimony, rulings, objections
3. **Exhibit list** - numbered trial exhibits
4. **Jury instructions** - as given and any refused defense instructions
5. **Applicable rule** - Fed. R. Crim. P. 33 or state equivalent
6. **Post-trial materials** (if any) - newly discovered evidence, affidavits, expert reports

## Quick Start

1. Collect verdict details, transcripts, and exhibit list.
2. Identify which grounds the record supports (see checklist below).
3. Draft each supported ground with record citations.
4. Compile into motion format with caption, introduction, grounds, memorandum, and prayer.

## Output Structure

### 1. Caption & Header

Standard jurisdiction-format caption. Include court name, case number, defendant's full legal name. Title: "DEFENDANT'S MOTION FOR NEW TRIAL."

### 2. Introduction (½-1 page)

| Element | Content |
|---|---|
| Procedural authority | Specific rule and statutory basis |
| Verdict date & charges | Conviction counts identified |
| Relief sought | New trial; evidentiary hearing if applicable |
| Thesis | One sentence on why the verdict should be set aside |

### 3. Grounds for New Trial

Draft each ground as a separate labeled section. Include only grounds supported by the record.

**Per-ground structure:**

- **Factual basis** - record citations (witness, transcript page:line), exhibit numbers, quoted rulings/testimony
- **Legal standard** - governing test from controlling authority; key cases granting relief
- **Application** - map facts to each element; show prejudice/effect on verdict
- **Anticipate rebuttal** - address harmless error, waiver, or procedural default arguments

**Grounds checklist** (assert only those supported):

| Ground | Key Elements | Standard |
|---|---|---|
| Weight of evidence | Miscarriage of justice despite jury deference | Unconscionable to let verdict stand |
| Newly discovered evidence | (1) Post-trial discovery, (2) due diligence, (3) material/not cumulative, (4) probably different result | All four prongs required |
| Prosecutorial misconduct | Specific acts depriving defendant of fair trial | Conduct undermined fundamental fairness |
| Juror misconduct | Extraneous info, improper communications, undisclosed bias | Reasonable possibility misconduct influenced verdict |
| IAC | (1) Below professional standards, (2) prejudice | Strickland v. Washington, 466 U.S. 668 (1984) |
| Judicial/legal error | Erroneous rulings affecting substantial rights | Abuse of discretion; not harmless beyond reasonable doubt |

### 4. Memorandum of Points and Authorities

For each ground: legal standard → controlling authority → application to facts. Bluebook citation format. Distinguish unfavorable precedent explicitly.

### 5. Prayer for Relief

- Set aside verdict on specified counts, Order new trial, Evidentiary hearing (for grounds involving facts outside the record, newly discovered evidence, juror misconduct, IAC)

### 6. Signature Block & Certificate of Service

## Pitfalls & Checks

- **Record-grounded** - every factual assertion must cite transcript page:line, exhibit number, or docket entry; never make unsupported claims
- **Preservation** - verify each issue was preserved at trial; if not, argue plain error or structural error
- **Timeliness** - note filing deadline (Fed. R. Crim. P. 33: 14 days post-verdict; 3 years for newly discovered evidence) [VERIFY against jurisdiction]
- **Local rules** - confirm page limits, formatting, and whether supporting briefs/affidavits file separately
- **No fabricated citations** - flag unknown authority with [VERIFY] and describe the legal principle
- **Trial court framing** - this motion addresses the trial court's discretion, not appellate review; frame arguments accordingly
- **Tone** - professional and measured, even when alleging misconduct; focus on legal merit over rhetoric

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
