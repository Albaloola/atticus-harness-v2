---
name: divorce-settlement-summary
language: en
description: Produces structured summaries of U.S. divorce settlement agreements (MSAs), extracting material terms across property, custody, support, taxes, insurance, fees, and deadlines. Triggers on requests for divorce settlement summary, MSA summary, marital settlement agreement, property division, child custody, parenting plan, child support, or alimony extraction. [Atticus UK/Scots refined]
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Divorce Settlement Summary

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

Neutral, litigation-ready summary of a divorce settlement agreement extracting all material terms and action items.

## Quick Start

Collect before summarizing:
- Executed or draft settlement agreement (with attachments/exhibits/schedules)
- Case identifiers (parties, case number, court/jurisdiction, settlement date)
- Parenting plan / custody exhibit (if separate)
- Financial schedules (asset/debt lists, QDRO details, support worksheets)

## Output Template

Fill every applicable section. Omit only sections the agreement does not address.

### 1) Identifying Information, Parties, Case number, Court/jurisdiction (state + county)
- Agreement date / effective date, Status (executed / draft / contingent on approval)
- Incorporation into judgment (yes/no; conditions)

### 2) Marital Property Division

Short narrative, then table by asset class:

| Asset Class | Specific Asset | Value / Valuation Date | Awarded To | Transfer Mechanics | Deadline / Conditions |
|---|---|---|---|---|---|

Asset classes: real property, financial accounts (bank/brokerage/crypto), retirement (401(k)/IRA/pension, note QDRO), business interests, vehicles/titled property, personal property, IP/royalties, other (stock options, windfalls, claims).

### 3) Debts and Liabilities

| Debt Type | Creditor / Account | Balance / Date | Responsibility | Refinance / Indemnity | Deadline |
|---|---|---|---|---|---|

### 4) Child Custody and Parenting Plan, Legal custody (sole/joint; decision domains)
- Physical custody / timesharing (% if stated)
- Regular schedule, holiday schedule, vacation/travel, Transportation / exchange logistics, Communication protocols (methods, notice periods)
- Relocation / modification clauses, Supervision / restrictions, Tie-breaker / dispute mechanism

### 5) Child Support, Guideline basis (state guideline / deviation)
- Obligor → obligee; amount and frequency, Start date, duration, termination triggers, Health insurance (who, plan, cost split)
- Unreimbursed medical (allocation %, thresholds)
- Childcare / education / extracurricular allocations, Payment method (wage assignment / direct)
- Arrears treatment

### 6) Spousal Support / Alimony, Type (temporary / rehabilitative / permanent / lump sum)
- Amount, frequency, start date, duration, Termination / modification triggers, Tax treatment (if stated)
- Security (life insurance, liens, guarantees)

### 7) Taxes, Filing status allocations, Dependency exemptions / credits, Refund / liability allocation, Property transfer tax responsibilities, Retirement transfer treatment

### 8) Insurance and Benefits, Life insurance securing support (amount, beneficiary, duration)
- Health insurance obligations, COBRA / continuation coverage

### 9) Attorney's Fees and Costs, Fee responsibility and any reimbursement/offsets

### 10) Dispute Resolution and Enforcement, Mediation / arbitration requirements, Venue / forum selection, Enforcement / contempt provisions

### 11) Confidentiality / Non-Disparagement, Scope and exceptions (court filings, legal advice, compliance)

### 12) Deadlines and Action Items

| Action | Responsible Party | Deadline | Proof Required |
|---|---|---|---|

Cover: deed transfers, refinancing, QDRO submission, account rollovers, title changes, document deliveries.

### 13) Exhibits and Attachments

List each exhibit with a one-line description. Do not reproduce contents.

### 14) Ambiguities / Inconsistencies

Identify unclear or conflicting terms factually.

## Pitfalls and Checks

- **Neutrality**: No fairness analysis or advocacy language.
- **Precision**: Use exact figures, dates, and percentages from the agreement.
- **Gaps**: Flag missing data or cross-referenced schedules as "not provided."
- **Jurisdiction**: Note state-specific terms without redefining them; custody and support rules vary by state.
- **Citations**: Mark uncertain legal citations as `[VERIFY]`.

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
