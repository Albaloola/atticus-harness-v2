---
name: ss4-ein-application
language: en
description: Guides HMRC and Companies House business registration in Scotland/UK, covering UTR registration, PAYE setup, VAT registration, and Corporation Tax activation. Use when registering a new business entity for tax purposes, applying for a Unique Taxpayer Reference (UTR), registering for payroll/PAYE, or preparing registration for a limited company, partnership, or sole trader. [Atticus UK/Scots refined]
tags:
- corporate, drafting, letter, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# HMRC / Companies House Business Registration, Scotland/UK

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

Prepares filing-ready business registration materials by extracting verified data from entity formation documents. Covers HMRC Corporation Tax registration, PAYE registration, VAT registration, and Companies House incorporation.

## Prerequisites

- **Formation documents** - Certificate of incorporation (Companies House), partnership agreement, or sole trader registration
- **Governing documents** - Articles of association, partnership agreement, shareholder agreements
- **Responsible person info** - National Insurance number, full legal name, role, contact details
- **Business details** - Registered office address (physical, not PO Box), trading address, SIC code, planned activities, employee projections

## Quick Start

1. Extract data from source documents per the extraction map below
2. Cross-reference legal name across all documents, flag any discrepancies before proceeding
3. Complete each registration section using verified data
4. Run consistency checks
5. Produce deliverables: HMRC registration forms, transmittal memo, preparation notes

## Document Extraction Map

| Source Document | Extract |
|---|---|
| Certificate of incorporation (Companies House) | Legal name (exact), company number, date of incorporation, registered office address |
| Articles of association | Director(s) details, share structure, registered address, accounting reference date |
| Partnership agreement | Partners' names, profit share, management authority |
| LLP agreement | Members' details, designated member, registered address |
| Board minutes | Signing authority, bank account resolutions |
| Business plan | SIC code, turnover projections, employee numbers |
| Lease agreements | Trading address for VAT registration |

## Line-by-Line Registration Guide

### 1. Companies House Incorporation (if not already registered)

Before registering for tax, the entity must be incorporated at Companies House (unless a sole trader or partnership):

- **Company name** - Check availability via Companies House name availability checker
- **Registered office address** - Must be a physical address in the UK (England, Wales, Scotland, or Northern Ireland)
- **SIC code** - 5-digit Standard Industrial Classification code matching principal business activity
- **Directors** - Minimum 1 natural director; name, service address, DOB, nationality, occupation
- **Persons with Significant Control (PSC)** - Anyone with >25% shares or voting rights
- **Memorandum and Articles of Association** - Model articles or bespoke articles

**[SCOTS: Note]** Scottish companies are incorporated at Companies House under the same UK Companies Act 2006 framework. The registered office may be in Scotland. Scottish limited partnerships (SLPs) have additional registration requirements with Companies House.

### 2. HMRC Corporation Tax Registration

Within 3 months of starting business (or incorporation for limited companies):

- **UTR (Unique Taxpayer Reference)** - 10-digit number issued by HMRC; required for Corporation Tax returns
- **Activation** - Online registration via HMRC Government Gateway; HMRC issues UTR within 10 working days
- **Accounting period** - First accounting period starts on date of incorporation
- **Accounting reference date** - From Companies House; must match

### 3. PAYE Registration (if hiring employees)

Before first pay date / 3 months before paying employees for the first time:

- **PAYE reference** - Issued by HMRC when employer registers
- **RTI (Real Time Information)** - Payroll data submitted to HMRC on or before each payday
- **Payslips** - Must be provided to employees per Employment Rights Act 1996
- **P45/P60** - Starters and leavers procedures

### 4. VAT Registration

Mandatory if annual taxable turnover exceeds £90,000 (2025/26 threshold). Voluntary registration available below threshold.

- **VAT registration number** - 9-digit number issued by HMRC
- **VAT scheme** - Standard, Flat Rate, Cash Accounting, Annual Accounting
- **VAT Return** - Usually quarterly; submitted via Making Tax Digital (MTD) compatible software

### 5. Registration for Self Assessment (Sole Traders / Partnerships)

- **UTR** - 10-digit number for self-assessment returns
- **Self Assessment** - Annual tax return (paper deadline 31 Oct; online 31 Jan)

### 6. Responsible Person

| Entity Type | Responsible Person / Relevant Officer |
|---|---|
| Sole trader | The individual |
| Ordinary partnership | One of the nominated partners |
| Limited company | Company director or company secretary |
| LLP | Designated member |

The responsible person provides their National Insurance number (or UTR if no NI number).

### 7. Authorisation & Signature

- **Online registration** - Via HMRC Government Gateway; requires authentication (GG ID or company authentication code)
- **Paper registration** - HMRC forms (e.g., CT41G for Corporation Tax) with authorised signatory
- **Agent authorisation** - Solicitors/accountants can register as tax agents via HMRC Agent Services

## Consistency Checks

Before finalising, verify:

- [ ] Legal name matches Companies House certificate
- [ ] Company number matches Companies House registration
- [ ] SIC code corresponds to business activity description
- [ ] Corporation Tax registration submitted within 3 months of incorporation
- [ ] PAYE registration complete if hiring employees
- [ ] VAT registration threshold checked; registered if exceeding £90,000
- [ ] Registered office address is physical (not PO Box)
- [ ] Director/PSC details match Companies House filings
- [ ] All addresses verified against source documents
- [ ] National Insurance number or UTR provided for responsible person
- [ ] Accounting reference date aligned with Companies House record

## Deliverables

1. **Completed HMRC/Companies House registration forms** - All sections completed per verified data
2. **Transmittal memo** - Entity name, responsible person, registration method, special circumstances
3. **Preparation notes** - Sources per section, assumptions, discrepancies resolved, recommended follow-up

## Pitfalls

- Never fabricate or assume entity details, extract only from verified source documents, Flag conflicts between formation documents (e.g., differing entity names) and resolve before registration, SIC codes change periodically, verify against current ONS classification, HMRC registration deadlines are strict, Corporation Tax within 3 months, PAYE before first payday, Making Tax Digital (MTD) requirements apply for VAT; ensure compatible software, The responsible person must be identifiable and contactable, flag if information is missing, Scottish limited partnerships (SLPs) have their own registration regime at Companies House

## Scotland/UK Adaptation

This skill replaces the US IRS Form SS-4 / EIN application process with the equivalent UK/Scottish business registration procedures. Key differences:

- **No EIN equivalent** - UK uses UTR (Unique Taxpayer Reference) for Corporation Tax / Self Assessment; PAYE reference for employer taxes; VAT number for VAT
- **HMRC** replaces the IRS as the tax authority
- **Companies House** registration replaces state-level incorporation filings
- **Standard Industrial Classification (SIC)** codes replace NAICS codes
- **National Insurance number** replaces SSN/ITIN for individuals
- **No perjury certification** - HMRC registrations are made under penalty but without formal SS-4 style certification
- **Government Gateway** is the primary online authentication system for HMRC services, GBP amounts apply instead of USD, Scottish entities follow the same UK framework except where Scottish partnership or property law provides alternatives

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
