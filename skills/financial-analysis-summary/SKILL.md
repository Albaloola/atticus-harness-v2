---
name: financial-analysis-summary
language: en
description: Generates structured summaries of financial analyses for commercial litigation. Use when summarizing expert financial reports, economic damages analyses, lost profits calculations, business valuations, or financial dispute evidence for litigation support. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Financial Analysis Summary

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

Distills forensic accounting reports, economic damage studies, and expert financial findings into structured litigation summaries.

## Prerequisites

- **Source analysis** - expert reports, forensic accounting workpapers, or damage studies
- **Financial records** - statements, tax returns, transaction ledgers relied upon by the expert
- **Case context** - dispute type, relevant time period, jurisdiction, intended use (settlement, trial, appellate)

## Quick Start

1. Identify the dispute type and damage theory
2. Extract principal conclusions and dollar figures from the expert report
3. Map each conclusion to its methodology and supporting evidence
4. Build the summary following the output structure below
5. Calibrate tone to the target audience (jury, judge, opposing counsel)

## Output Structure

### 1. Executive Overview

Table with: nature of dispute, examination time period, principal conclusions (top-line damages or valuation range), expert name/credentials/scope.

### 2. Methodology

For each analytical approach, document:

- Method name and plain-language explanation, Why selected for this case, Applicable standards (GAAP, AICPA, ASA, NACVA)
- Key assumptions and inputs

Reference by claim type:

| Claim Type | Typical Methods |
|---|---|
| Lost profits | Before-and-after, yardstick, sales projection |
| Business valuation | DCF, market multiples, asset-based |
| Economic damages | But-for analysis, mitigation offset |
| Fraud/disgorgement | Tracing, net equity analysis |

### 3. Key Financial Findings

Present in causal sequence:

1. **Wrongful act** - financial impact chain
2. **Quantification** - calculations with stated assumptions
3. **Supporting evidence** - source documents, corroborating data
4. **Damage period** - start/end dates with rationale
5. **Total damages/valuation** - breakdown by component

Use tabular format: damage component, amount, method, period.

### 4. Data Sources & Limitations

- List each source with reliability assessment, Identify record gaps and how addressed (interpolation, proxy data, conservative assumptions)
- Note documents requested but not produced

### 5. Sensitivity Analysis

Table comparing scenarios: base case, conservative, aggressive, and opposing expert position, each showing variable changed and resulting range.

### 6. Visual Exhibits

Include where they clarify analysis: trend charts, actual-vs-projected tables, waterfall charts, timeline diagrams. Number sequentially and cross-reference in text.

### 7. Summary of Opinions

Restate each conclusion in clear, quotable language with dollar amounts and basis.

## Pitfalls & Checks

- **Daubert/Frye readiness** - confirm methods are generally accepted and reliably applied to case facts; flag the jurisdiction's admissibility standard
- **Audience calibration** - settlement: leverage points and ranges; trial: clarity for lay jurors; appellate: methodological soundness
- **Objectivity** - present persuasively within the bounds of evidence; never overstate certainty
- **Precision** - all dollar amounts at appropriate precision; always include time periods and qualifications
- **Citations** - reference source documents, expert report page numbers, and supporting financial records for each conclusion
- **Competing experts** - acknowledge opposing methodologies and explain divergence points
- **Jurisdiction** - U.S.-focused by default; adapt admissibility standards and professional frameworks for non-U.S. matters

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
