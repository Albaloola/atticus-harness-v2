---
name: taxpayer-correspondence
language: en
description: Atticus UK/Scots legal skill for taxpayer-correspondence. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Taxpayer Correspondence

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

Drafts structured correspondence summarizing tax records and financial information for authority responses, compliance check preparation, or advisor-client communication.

## Prerequisites

Gather before drafting:

- **Tax returns** - Self Assessment, PAYE, Corporation Tax for relevant years
- **Income documents** - P60s, P45s, P11Ds, interest certificates, dividend vouchers, partnership statements
- **Deduction/relief support** - receipts, bank statements, pension contribution statements, charitable gift aid declarations
- **Financial statements** - bank/brokerage statements, business accounts/profit & loss if applicable
- **Authority correspondence** - HMRC notices, compliance check letters, enquiry notices
- **Filing context** - filing status (single/joint, high-income child benefit charge), estimated payment history

## Quick Start

1. Collect all source documents for the relevant tax year(s)
2. Build the identification block with taxpayer info and purpose
3. Populate income, deductions, and reliefs, tie every figure to a source document
4. Summarise tax position (liability, tax deducted, balance due/repayment)
5. If responding to a compliance check or HMRC enquiry, add the authority response section
6. Run the compliance checklist
7. List next steps with deadlines bolded

## Output Structure

### 1. Identification Block

| Field | Content |
|-------|---------|
| Taxpayer Name | Full legal name |
| NI Number | Last four only (AB XX ####) |
| UTR | Last four digits |
| Tax Year(s) | All years covered (6 April to 5 April) |
| Filing Basis | Self Assessment / PAYE only / Corporation Tax |
| Purpose | Response to [HMRC notice] / Compliance check / Filing support / Advisory summary |
| Reference No. | HMRC notice or enquiry case number if applicable |

### 2. Income Summary

Organise by statutory category. Reconcile each line to source documents. Flag discrepancies between reported income and return amounts.

| Category | Amount | Source Document |
|----------|--------|-----------------|
| Employment Income | £ | P60/P45 from [employer] |
| Self-Employment (Trading Income) | £ | Accounts, business records |
| Interest (non-ISA) | £ | Bank/certificate of deposit interest statements |
| Dividends (UK) | £ | Dividend vouchers, company records |
| Property Income | £ | Tenancy agreements, rent records |
| Pension Income | £ | P60 from pension provider |
| Other Income | £ | [specify] |
| **Adjusted Net Income** | **£** | |

### 3. Deductions & Reliefs

**Reliefs:**

| Relief | Amount | Authority | Documentation |
|--------|--------|-----------|---------------|
| Personal Allowance | £ | ITA 2007 | Eligibility check |
| Marriage Allowance | £ | ITA 2007 §55 | Transfer of 10% of personal allowance |
| Pension Contributions (relief at source) | £ | ITEPA 2003, FA 2004 | Scheme statements |
| Charitable Donations (Gift Aid) | £ | ITA 2007 §413 to 430 | Gift aid declarations, receipts |
| Trading/Property Allowances | £ | ITTOIA 2005 | £1,000 per year per source |
| Rent-a-Room Relief | £ | ITTOIA 2005 §768 to 782 | £7,500 per year |
| Employment Expenses | £ | ITEPA 2003 §336 to 343 | Receipts, mileage logs (HMRC-approved rates) |
| EIS/SEIS/VCT Relief | £ | ITA 2007 | Share certificates, compliance statements |

**Tax Reductions:**

| Credit/Reduction | Amount | Authority | Eligibility Basis |
|------------------|--------|-----------|-------------------|
| Marriage Allowance Transfer | £ | ITA 2007 §55 | Spouse not using full allowance |
| Dividend Allowance | £ | ITTOIA 2005 | First £1,000 (2024/25) / £500 (2025/26+) at 0% |
| Personal Savings Allowance | £ | ITTOIA 2005 | Up to £1,000 (£500 for higher rate) at 0% |
| Blind Person's Allowance | £ | ITA 2007 §38 to 41 | Registered blind or severely sight-impaired |
| R&D Tax Credits (companies) | £ | CTA 2009 | Qualifying R&D expenditure |

### 4. Tax Position Summary

| Item | Amount |
|------|--------|
| Total Tax Liability | £ |
| Tax Deducted at Source (PAYE, interest, dividends) | £ |
| Payments on Account (SA) | £ |
| CGT Liability (if applicable) | £ |
| Student Loan Repayments (SA) | £ |
| **Balance Due / (Repayment)** | **£** |

Include: prior-year loss relief (trading losses, capital losses), amended return history, and open enquiry periods (12 months from filing for SA; 4 years for careless inaccuracies; 6 years for deliberate; 20 years for deliberate concealed, FA 2007 Sch 24).

### 5. Authority Response Section

_Include only when responding to HMRC compliance check or enquiry._

- **Notice/Issue Identification** - restate each item questioned
- **Position & Support** - for each item: taxpayer's position, legal authority (ITA 2007, ITTOIA 2005, CTA 2009/2010, HMRC Manuals, case law), and supporting documentation
- **Penalty Mitigation** - reasonable excuse (FA 2007 Sch 24), prompted/unprompted disclosure, HMRC compliance history

### 6. Compliance Checklist

- [ ] Filing status appropriate and documented
- [ ] All income reconciled to source documents and HMRC records
- [ ] Payments on account meet requirements (31 January mid-year; 31 July year-end)
- [ ] Penalties considered: late filing (£100 fixed + daily if >3 months), late payment (2.75% + 4% surcharge), inaccuracy penalties (FA 2007 Sch 24)
- [ ] Record retention met (5 years from 31 January filing deadline for SA; 6 years for companies)

### 7. Recommendations & Next Steps

Prioritise time-sensitive items with **bold deadlines**. Include actions required, documents to gather, payments on account due, and planning opportunities. Flag enquiry window or appeal deadlines prominently.

## Pitfalls & Checks

- **Privacy** - never include full NI number or UTR; last four digits only
- **Reconciliation** - tie every figure to a source document; note unresolved discrepancies explicitly
- **No fabrication** - identify document gaps; never estimate or fabricate figures
- **Uncertainty** - disclose reasoning and uncertainty level for ambiguous positions
- **Audience tone** - plain language for clients; precise statutory terminology for HMRC responses
- **Agent standards** - comply with HMRC Agent Standards and Professional Conduct in Relation to Taxation (PCRT); do not facilitate tax evasion
- **HMRC Charter** - taxpayer rights under the HMRC Charter apply

## Scotland/UK Adaptation

This skill has been adapted from US federal and state tax correspondence to the UK tax system.

### Key Adaptations

- **Authority**: HMRC replaces IRS; Self Assessment replaces US federal/state filing; ITA 2007/ITTOIA 2005/CTA 2009-2010 replace IRC
- **Income documents**: P60/P45 replace W-2; bank interest certificates and dividend vouchers replace 1099-INT/DIV; no US-style 1099-NEC/K-1 system
- **Filing year**: UK tax year runs 6 April to 5 April (not calendar year)
- **Filing status**: No MFJ/MFS/HOH concept; personal allowance is individual; marriage allowance permits limited transfer (10% of personal allowance)
- **Estimated payments**: UK uses Payments on Account (31 Jan and 31 July) rather than quarterly estimated payments; safe harbour not statutorily defined as in US
- **Statute of limitations**: HMRC enquiry window is 12 months from filing (not 3-year US window); FA 2007 Sch 24 defines extended periods for careless (4yr), deliberate (6yr), deliberate concealed (20yr)
- **Penalties**: UK system under FA 2007/2008 schedules with reasonable excuse defence (not US §6662/§6664(c))
- **Agent regulation**: PCRT/HMRC Agent Standards replace Circular 230; no US-style tax practitioner privilege
- **Currency**: All amounts in GBP (£), not USD ($)
- **State taxes**: No UK equivalent of US state income tax; Scotland has Scottish Rate of Income Tax (SRIT) set by Scottish Parliament
- **No SALT deduction**: No equivalent of US state and local tax deduction
- **Pension/tax-advantaged accounts**: ISAs replace HSAs/401(k)s as primary tax wrapper; no US-style Roth vs Traditional distinction; pension tax relief operates differently (relief at source or net pay)
- **Student loans**: Repayments collected through SA for self-employed (not US-style)
- **CGT**: Separate Capital Gains Tax (not bundled with income tax as in US)
- **Benefits in kind**: Reported via P11D forms (not included in W-2 style)

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
