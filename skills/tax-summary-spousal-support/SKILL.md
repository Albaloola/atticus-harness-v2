---
name: tax-summary-spousal-support
language: en
description: Produces structured financial summaries from tax returns, W-2s, 1099s, K-1s, and business filings for spousal support proceedings. Trigger when preparing income analyses for alimony discovery, settlement negotiations, pre-trial, or court filings in family law matters. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Tax Summary for Spousal Support

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

Extracts income sources, deductions, tax liabilities, and multi-year trends from tax records to assess financial capacity, ability to pay, or need for support.

## Prerequisites

- **Tax returns** - Federal (1040) and state for 2 to 3 most recent years minimum
- **Income documents** - W-2s, 1099s (all types), K-1s, Schedules C/E/F
- **Business returns** - 1065, 1120-S, or 1120 if party owns business interests
- **Party identification** - Petitioner, respondent, or both
- **Jurisdiction** - State governing support calculation (affects income definitions)

## Quick Start

1. Collect all available tax documents and identify gaps
2. Determine party and jurisdiction
3. Follow the output structure below, citing form and line for every figure
4. Flag support-relevant adjustments where tax income diverges from economic income

## Output Structure

### 1. Executive Overview

Multi-year table with: gross income, AGI, taxable income, total tax liability (fed + state), effective tax rate, net after-tax income, and trend direction (↑/↓/→) for each metric.

### 2. Income Source Breakdown

Per year, itemize each source with amount, percentage of total, and form/line reference:
- Wages (W-2), self-employment (Sch C), business distributions (K-1), rental (Sch E), interest/dividends (Sch B), capital gains (Sch D), retirement distributions, other

### 3. Tax Liability Analysis

- Federal and state obligations separately, Effective vs. marginal rates, Significant credits (child tax, earned income, etc.)
- Withholding and estimated payment patterns, AMT exposure if applicable

### 4. Deductions and Adjustments

Flag support-relevance for each deduction:
- **Retirement contributions** - reduces cash but builds assets
- **Health insurance (self-employed)** - mandatory expense
- **Business expenses** - review for personal benefit
- **Mortgage interest** - lifestyle indicator
- **Charitable contributions** - discretionary capacity
- **Depreciation** - not actual cash outflow; courts often add back

### 5. Business Income Reconciliation

If self-employed or business owner, reconcile reported taxable income vs. actual economic benefit:
- Add back: depreciation, amortization, one-time write-offs, personal expenses through business, Identify owner perks: vehicle, travel, meals, insurance, entity-funded retirement, Compare retained earnings + distributions vs. salary, Determine cash flow available vs. tax-reported income

### 6. Multi-Year Trend Analysis

- Income trajectory (growth, decline, volatility)
- Filing status changes and tax impact, Income composition shifts (e.g., W-2 to 1099)
- Marital standard of living indicators from expenditure patterns

### 7. Observations and Flags

- Income/lifestyle inconsistencies, Unusual or suddenly changed deduction patterns, Underreported income indicators, Hidden income through entity structures, Need for forensic accounting or expert testimony, Documentation gaps

## Pitfalls and Checks

- **Tax income ≠ support income** - Depreciation, accelerated deductions, and pre-tax retirement may be added back for support calculations. Flag explicitly.
- **Source attribution** - Cite tax year, form, and line for every figure (e.g., "2024 Form 1040, Line 9: $185,000").
- **Filing status transitions** - Quantify tax liability difference from MFJ to MFS/Single/HoH; directly affects disposable income post-separation.
- **Imputed income** - If voluntarily underemployed or income appears suppressed, note basis but do not calculate; flag for attorney review.
- **Limitations** - State unavailable documents and how gaps affect analysis. Recommend specific documents that would strengthen the summary.
- **Neutral tone** - Present findings objectively. Advocacy framing is counsel's role.

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
