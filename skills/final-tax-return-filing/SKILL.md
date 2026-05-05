---
name: final-tax-return-filing
language: en
description: Atticus UK/Scots legal skill for final-tax-return-filing. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Final Tax Return Filing (UK)

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

Builds an HMRC-compliant final filing package to close taxpayer obligations at death or entity dissolution.

## Quick Start

1. Classify taxpayer: deceased individual's estate or dissolving entity (company, partnership, trust).
2. Establish final period end date (date of death or date of dissolution).
3. Verify legal authority (executor, administrator, trustee, or liquidator) with documentary proof.
4. Identify primary return form (SA100 Self Assessment, CT600 Company Tax Return, SA800 Partnership Return, SA900 Trust & Estate Return).
5. Determine if this is a short-period return and set reporting cutoff.

## Prerequisites

- Legal identifiers: full name, NI number / UTR / Company Registration Number, last known address, date of death or dissolution.
- Authority documentation: Grant of Confirmation / Letters of Administration (Scotland: Confirmation), corporate resolution, or winding-up order.
- Source records: prior-year returns, P60, P11D, interest certificates, dividend vouchers, bank/brokerage ledgers, partnership statements, balance sheet, asset transfer deeds.
- Extension status: confirm whether HMRC filing extension has been granted or is still available [VERIFY].

## Core Workflow

### 1. Intake and Status Setup

| Field | Value | Source |
|---|---|---|
| Taxpayer type | Deceased individual / dissolved entity / trust in administration | Death certificate (Scotland: extract of register), dissolution filing |
| Final period end date | Date of death or dissolution | Vital records, Companies House filing |
| Reporting date range | 6 April → date of death or CT accounting period end | HMRC guidance / financial records |
| Primary return form | SA100 / CT600 / SA800 / SA900 | Taxpayer type |
| Authority | Name + title + proof | Confirmation / Court order / corporate document |

### 2. Identity and Filing Status

1. Populate legal name, NI number, and UTR exactly as source documents show.
2. Add final-status indicators:
   - Individual: "Deceased" on Self Assessment return; include date of death.
   - Entity: "Final Return" designation with liquidation context on CT600 form.
3. Insert signer section reflecting legal authority title (Executor, Administrator, Liquidator).
4. Account for Scottish estate administration rules if applicable (see [SCOTS] Notes).

### 3. Income Capture

For each source: gross amount, timing test (pre-final-date only for deceased; pre-dissolution for companies), source doc, SA schedule / CT computation line, reclassification needs, review note.

Priority order:
1. Employment income (P60, P11D, PAYE settlement)
2. Savings and investment income (interest certificates, dividend vouchers) - include accrued interest to date of death
3. Business income/loss (Self Assessment sole trader or partnership, company trading account)
4. Capital gains (land, shares, business assets, held-over gains on death are generally exempt)
5. Other (trust distributions, settlements, cessation adjustments, post-cessation receipts)

### 4. Deductions and Reliefs

1. Apply personal allowance (pro-rated for short period if applicable).
2. Build applicable deductions: trading losses, charitable giving (Gift Aid), pension contributions.
3. Validate statutory caps and substantiation.
4. Build relief matrix: eligibility, availability rules, supporting schedules, filing-year limitations.
5. For companies: separate ordinary cessation expenses from non-deductible capital/distribution items.
6. Note: UK has no equivalent to US itemized deductions or SALT. Reliefs are specific and statutory.

### 5. Schedule and Attachment Matrix

| Trigger | Required Artifact | Completion Rule |
|---|---|---|
| Employment income | SA100 employment pages / P60 | P14 reconciliation |
| Self-employment | SA103S or SA103F | Accounts to date of death/dissolution |
| Partnership | SA104S or SA104F / Partnership Statement | Profit share to cessation date |
| Land and property | SA105 | Rental income to date of death |
| Capital gains | SA108 / CG computation pages | Disposals (pre-death) or trust disposals |
| Dividends | Dividend vouchers / SA107 | Accrued to date of death |
| Trust income | SA900 trust return | Estate administration period |
| Estate income (non-spouse) | Executor completes estate return | Form 900 / trust and estate pages [VERIFY] |
| Non-standard treatment | Written statement | Legal basis included (e.g. ESC, concession, or Tribunal ruling) |

### 6. Filing Mechanics

1. Compute due date for final return: 31 January following the tax year of death for Self Assessment; 12 months after CT period end for companies.
2. Choose HMRC online filing vs paper (paper generally required for first return after death if not previously registered for online).
3. Confirm payment/refund routing (estate bank account, executor, HMRC repayment).
4. Assemble filing packet and proof list (Grant of Confirmation where required).
5. File only after quality controls pass.

### 7. Final Quality Controls (Mandatory)

- [ ] Recompute all arithmetic and schedule rollups
- [ ] Trace each line to a source document
- [ ] Reconcile PAYE, tax deducted at source, and estimated payments
- [ ] Verify final return designation appears consistently (box 3 of SA100 or declaration page)
- [ ] Confirm no post-cessation income included in final return (separate return may be needed)
- [ ] Check signatory authority and signature block (executor must sign where taxpayer deceased)
- [ ] Produce exception list for unresolved items
- [ ] Confirm Confirmation (Scotland) or Grant of Probate (EW) issued if required to access assets

## Pitfalls and Checks

- **Scope**: UK HMRC returns only; Scottish rate of income tax is set by Scottish Parliament but collected by HMRC alongside UK rates, ensure correct coding in software.
- **Date sensitivity**: All due dates and HMRC addresses are year-dependent, verify from current HMRC manuals [VERIFY].
- **Authority**: Never infer from informal communications; require explicit legal proof (Confirmation for Scotland, Grant of Probate for England & Wales) before final signature.
- **Capital gains on death**: Death is not a disposal for UK capital gains tax purposes, assets pass at probate value (no CGT charge). Do not apply US step-up basis rules.
- **Inheritance Tax interaction**: IHT may need to be reported and paid before Confirmation can issue. File IHT400 before final income tax return if applicable.
- **Conservative classification**: Use conservative treatment for cessation adjustments and estate administration expenses; document arguable positions explicitly.
- **Escalation triggers**: Significant valuation disputes, complex estate structures, cross-border estate elements, or substantial tax-risk interpretations.
- **Retention**: Retain filing proof for at least 12 months after final return; HMRC can enquire up to 12 months after filing (longer if deliberate error).
- **Prescription/limitation**: HMRC has up to 20 years for deliberate non-compliance, 6 years standard, 4 years for innocent error. Keep records accordingly.

## Scotland/UK Adaptation

### Key Adaptations, Converted from US IRS framework to HMRC / UK tax framework, Replaced IRS → HMRC, Replaced 1040 → SA100 Self Assessment tax return, Replaced 1120 → CT600 Company Tax Return, Replaced 1120S → Close company / small company rules (no direct S-Corp equivalent)
- Replaced 1065 → SA800 Partnership Tax Return, Replaced SSN → NI number, Replaced EIN → UTR (Unique Taxpayer Reference) / Company Registration Number, Replaced W-2 → P60; 1099 → P60, P11D, interest certificates (various)
- Replaced K-1 → Partnership Statement, Replaced Schedule A/C/B/D → SA schedules (SA103, SA104, SA105, SA108)
- Replaced Form 1310 → No equivalent; executors handle estate returns under normal SA rules, Replaced e-file → HMRC online filing / commercial software, Replaced IRS publications → HMRC manuals and guidance, Replaced state/itemised deductions → No direct equivalent; UK tax reliefs are specific and statutory, Replaced SALT → No equivalent in UK

### [SCOTS] Notes, Scottish rates of income tax (set by Scottish Parliament) apply to non-savings, non-dividend income for Scottish taxpayers. HMRC administers both Scottish and UK rates. Must correctly identify Scottish taxpayer status.
- Confirmation in Scotland is the equivalent to Grant of Probate in England & Wales, issued by the Sheriff Court or Court of Session.
- Scottish estate administration follows different trust law rules than England & Wales (trusts are governed by the Trusts (Scotland) Act 1921 and Trusts and Succession (Scotland) Act 2024).
- No separate Scottish income tax return, all returns go to HMRC with appropriate Scottish taxpayer designation.
- For dissolving entities registered in Scotland, Companies House and HMRC processes apply with no separate Scottish entity.
- Scottish partnership dissolution rules differ in some respects (Partnership Act 1890 applies).

### [VERIFY] Items Before Use, Current HMRC manuals and guidance for the relevant tax year, Whether Scottish taxpayer status needs to be confirmed on the return, Current tax bands and personal allowance applicable at date of death, Any HMRC concessions, extra-statutory concessions, or published settlement opportunities, Interaction with Inheritance Tax: whether IHT400 is required before Confirmation can issue, Any COVID-19 or post-pandemic reliefs still in effect that may affect final return

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
