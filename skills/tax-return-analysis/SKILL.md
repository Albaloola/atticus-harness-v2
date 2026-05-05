---
name: tax-return-analysis
language: en
description: Produces litigation-ready financial memoranda from multi-year tax returns, covering income trends, filing status changes, deduction patterns, red flags, and trustee considerations. Use when reviewing Form 1040s for bankruptcy means testing, family law support calculations, personal injury damages, or financial discovery analysis. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Tax Return Analysis

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

Generates a structured financial assessment memorandum from one or more years of tax returns for litigation use.

## Prerequisites

- **Tax returns** - Form 1040 with all schedules per year
- **Legal context** - proceeding type (bankruptcy, family law, personal injury, other) and taxpayer's role
- **Jurisdiction** - state/court for applicable thresholds (e.g., median income for means testing)
- **Optional** - bank statements, K-1s, business records for cross-reference

## Memorandum Sections

Produce each section in order:

### 1. Executive Overview

2 to 3 paragraphs covering: taxpayer profile (individual vs. couple, occupation), income trajectory (growing/declining/volatile), significant life events reflected in returns, and bottom-line framing for the attorney.

### 2. Multi-Year Comparison Table

| Tax Year | Filing Status | Total Income | AGI | Tax Liability | Refund/(Owed) | Key Observations |
|---|---|---|---|---|---|---|
| *per year* | *status* | *amount* | *amount* | *amount* | *amount* | *notable changes* |

Follow with narrative interpreting year-over-year trends.

### 3. Taxpayer Identification & Status

- Names, last four SSN digits for all filers, Filing status per year, flag changes (e.g., MFJ→MFS may signal marital discord)
- Dependents: name (last four SSN), age, relationship, status, Note relevance to support obligations, means testing, or custody

### 4. Income Analysis

Address each category with context, not just amounts:

| Category | Address |
|---|---|
| W-2 wages | Employer, stability, year-over-year changes |
| Schedule C | Business nature, gross receipts, net profit/loss, expense ratio |
| Investment income | Interest, dividends, capital gains, asset base implications |
| Retirement distributions | Regular vs. premature; financial distress indicators |
| Social Security | **Exclude from bankruptcy means test calculations** |
| Other (K-1, rental, alimony) | Source, consistency, legal significance |

Conclude with AGI compared to applicable median income standards.

### 5. Deductions, Credits & Tax Position

- **Standard vs. itemized** - what the choice reveals
- **Itemized**: mortgage interest (debt level), SALT, charitable (flag large pre-filing donations)
- **Schedule C deductions** - reasonableness; flag expense-to-income ratios above 70%
- **Credits** - child tax credit, EITC, education credits and significance
- **Refund/balance due** - large refunds suggest overwithholding; balances owed suggest cash flow issues

### 6. Red Flags

Flag each with legal significance:

| Category | Watch For |
|---|---|
| Income discrepancies | Reported vs. lifestyle; unreported sources |
| Deduction anomalies | Excessive/undocumented deductions; luxury items as business expenses |
| Timing patterns | Income drops or deduction spikes near filing/litigation dates |
| Bankruptcy-specific | Large charitable gifts pre-petition; losses inconsistent with continued operations |
| Family law-specific | Cash underreporting; inflated expenses; hidden assets |
| Fraud indicators | Inconsistent schedules; missing forms; round-number patterns |

### 7. Proceeding-Specific Considerations

Tailor to the legal context:

- **Bankruptcy** - means test positioning, above/below median income, disposable income impact, carryover losses affecting future tax positions
- **Family law** - income available for support beyond AGI, imputed income arguments, lifestyle inconsistencies
- **Personal injury** - pre-injury vs. post-injury earning capacity, lost income quantification

Explain *why* each issue matters legally, not just what it is.

### 8. Information Gaps

For each gap: (1) what is missing, (2) what question it leaves unanswered, (3) legal significance, (4) specific document to request.

### 9. Conclusion

1 to 2 paragraphs: synthesize key findings, assess reliability of returns, prioritize concerns requiring immediate attention, recommend next steps.

## Critical Rules

- **Tone**: objective, analytical, this is a professional memorandum
- **Social Security**: always flag exclusion from bankruptcy means test
- **Charitable contributions**: scrutinize gifts 1 to 2 years pre-petition as potential preferential transfers
- **No legal conclusions** - identify issues and explain significance for the attorney to evaluate
- **Unverifiable figures**: mark with `[VERIFY]`
- **Fewer than 2 years**: note trend analysis limitations and recommend obtaining additional years

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
