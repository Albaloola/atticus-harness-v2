---
name: expert-omissions-analysis
language: en
description: Analyzes expert witness reports against complete medical record sets to identify omissions, bias patterns, and methodology gaps. Generates impeachment-ready reports with pin-cited findings and strategic recommendations. Triggers when the user needs to review opposing expert reports, prepare cross-examination, support Daubert/Frye motions, or retain rebuttal experts in personal injury or medical malpractice litigation. [Atticus UK/Scots refined]
tags:
- analysis, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Omissions Analysis

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

Cross-references expert materials against the full medical record set to surface omitted records, classify their impact, and produce a structured impeachment report.

## Prerequisites

- **Complete medical record set** - Bates-stamped or indexed, all discovery-produced records
- **Expert materials** - report(s), deposition transcript(s), CV, supplemental declarations
- **Expert's materials-reviewed list** - extracted from report or deposition
- **Case chronology** - treatment timeline, injuries, key medical events

## Workflow

### 1. Inventory and Cross-Reference

Build a comparison matrix with columns: Record ID/Bates range, date of service, provider/facility, record type, cited by expert (Yes/No/Partial), and expert cite location (report page or depo page:line).

Flag every record where cited = No or Partial.

### 2. Classify Omissions

Assign priority to each flagged record:

| Priority | Criteria |
|---|---|
| **Critical** | Contradicts opinion, shows alternative causation, or reveals undisclosed pre-existing condition |
| **High** | Fills chronology gap or documents unaddressed treatment decisions |
| **Moderate** | Qualifies or weakens conclusions |
| **Low** | Cumulative or unlikely to affect opinion foundation |

### 3. Evaluate Methodology

Assess the expert's review process:

- Did the expert provide a complete materials-reviewed list?
- Does the expert's chronology match the actual medical timeline?
- Are factual assertions contradicted by records the expert claims to have reviewed?
- Did the expert acknowledge and explain gaps?
- Does the methodology satisfy Daubert/Frye reliability factors?

### 4. Identify Bias Patterns

Flag systematic omission patterns:

- Omissions cluster around records supporting opposing theory, Pre-existing conditions consistently excluded, Unfavorable imaging/labs ignored while favorable ones cited, Selective quotation (partial citation)
- Temporal gaps obscuring intervening causes

### 5. Generate Report

Structure output as:

**I. Executive Summary** - total records, count not cited, critical/high omission count, key finding (1 to 2 sentences)

**II. Omissions Table** - matrix from Step 1 filtered to omitted records, sorted by priority

**III. Critical Omissions Detail** - for each Critical/High item: omitted record ID, content summary, expert's statement (quote + cite), impact on opinion foundation

**IV. Methodology Deficiencies** - Step 3 findings with supporting citations

**V. Bias Pattern Analysis** - Step 4 patterns with statistical support where available

**VI. Strategic Recommendations** - cross-examination questions (numbered, pin-cited), Daubert/Frye challenge points, rebuttal expert focus areas, deposition follow-up topics if discovery is ongoing

## Pitfalls and Checks

- **Pin-cite everything** - every assertion references a Bates number, depo page:line, or report page
- **Do not overstate minor gaps** - flag low-priority items but distinguish them from genuine impeachment material
- **Note defensible omissions** - record may be cumulative or irrelevant to the specific opinion rendered
- **Daubert factors**: testability, peer review, error rate, general acceptance, fit to facts [VERIFY: *Daubert v. Merrell Dow Pharmaceuticals*, 509 U.S. 579 (1993)]
- **Frye jurisdictions**: standard is general acceptance only; flag when applicable [VERIFY: *Frye v. United States*, 293 F. 1013 (D.C. Cir. 1923)]
- **Adapt for either side** - plaintiff (challenging defense IME expert) or defense (challenging treating physician or plaintiff's retained expert)
- **Do not render medical opinions** - identify what records say and what the expert missed, not whether the medical conclusion is correct

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
