---
name: billing-summary
language: en
description: Produces privilege-safe U.S. corporate legal billing summaries from time and expense data. Converts entries into client-friendly narratives with categorized hours, rates, expenses, and milestones while enforcing engagement-letter rules and ethical billing safeguards. Use when asked to create a billing summary, invoice narrative, timekeeper breakdown, expense summary, or fee narrative. [Atticus UK/Scots refined]
tags:
- corporate, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Billing Summary

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

Generate a client-ready billing narrative that explains fees and expenses clearly while preserving privilege.

## Required Inputs

1. Billing period (start/end dates), matter name, client name
2. Time entries: timekeeper, rate, hours, description, date
3. Expense entries: date, vendor, description, amount
4. Engagement letter or billing guidelines (rates, caps, task codes, prohibited expenses)
5. Milestones or phase labels (if any)
6. Write-downs, discounts, or adjustments (if any)

## Output Structure

Populate every section below.

### 1. Header

Matter | Client | Billing Period | Responsible Attorneys | Billing Guidelines Reference

### 2. Executive Overview

3-6 sentences on the period's major workstreams and outcomes, plus a totals table:

| Metric | Amount |
| --- | --- |
| Fees | $ |
| Expenses | $ |
| Total | $ |
| Discount/Write-down | $ |
| Net Total | $ |

### 3. Timekeeper Summary

| Timekeeper | Role | Rate | Hours | Fees | Notes |
| --- | --- | --- | --- | --- | --- |

Notes column: explain scope (e.g., "board governance research," "drafted consent resolutions").

### 4. Task Category Breakdown

Default categories (override with client task codes if provided):

- Research and Analysis, Drafting and Document Production, Client Communications, Internal Strategy and Case Management, Negotiation and Counterparty Communications, Regulatory/Compliance Work, Filings and Formalities, Other (define clearly)

| Category | Hours | Fees | Narrative |
| --- | --- | --- | --- |

Narrative: explain purpose and outcome in plain English; never reveal legal advice or strategy.

### 5. Phase View (optional, recommended for long periods)

| Phase / Milestone | Dates | Key Work Performed | Fees |
| --- | --- | --- | --- |

### 6. Expenses

| Date | Category | Vendor | Description | Amount | Justification |
| --- | --- | --- | --- | --- | --- |

Include subtotals for material categories (filing fees, expert/consultant, travel).

### 7. Adjustments and Compliance

- List write-downs, caps applied, or policy-driven exclusions.
- Note block-billed entries and how they were separated.
- Confirm compliance with client billing guidelines.

### 8. Forward Look (optional)

2-4 sentences on expected next-period activities and cost drivers.

## Privilege and Billing Safeguards

- **Protect privilege**: never include legal advice, mental impressions, or litigation strategy.
- **Be specific**: avoid vague phrases like "legal research" - always name the topic.
- **Tie work to objectives**: connect entries to matter goals or compliance requirements.
- **Show policy compliance**: rates, caps, task codes, approved expenses.
- **Flag anomalies**: unusual expenses, staffing changes, large time spikes.
- **No duplicate billing**: do not overlap timekeeper entries for the same task without explanation.
- **No administrative padding**: exclude admin tasks unless guidelines permit.
- **Stay consistent**: narrative must match time entry descriptions and invoice totals.

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
