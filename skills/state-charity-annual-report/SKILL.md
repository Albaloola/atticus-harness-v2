---
name: state-charity-annual-report [SCOTS]
language: en
description: Drafts Scottish charity annual return packages for OSCR (Office of the Scottish Charity Regulator) compliance. Use when preparing a Scottish charity annual return or renewal, OSCR monitoring return, charity accounts filing, or when converting financial data into form-field answers or an executive compliance briefing. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# OSCR Charity Annual Return [SCOTS]

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

Produces a filing-ready annual return for the Office of the Scottish Charity Regulator (OSCR) with verified requirements, attachments index, certification language, and filing instructions.

## Prerequisites

Gather before starting:

1. Governing regulator: OSCR (Office of the Scottish Charity Regulator)
2. Reporting period start/end and financial year end
3. Organisation legal name, Scottish Charity Number (SC-suffixed or SCO-suffixed), principal address
4. Annual accounts prepared in accordance with Charities SORP (FRS 102) and Charities Accounts (Scotland) Regulations
5. Board/officer roster with names and roles (trustee register)
6. Fundraising methods and any professional fundraiser / commercial participator contracts
7. Prior OSCR filings and correspondence (if available)

## Quick Start

1. Confirm filing status, organisation identity, reporting period, and output mode
2. Research OSCR-specific requirements from official sources (OSCR website, Charities SORP guidance)
3. Draft return sections using organisation data and accounts
4. Assemble attachments index and execution package
5. Run quality-control checklist before delivery

## Output Modes

| Mode | Use When | Delivers |
|---|---|---|
| Full Compliance Package | Default | Return sections, tables, exhibits index, certification, signatures, filing instructions |
| Form-Field Mode | OSCR Online portal requires field-by-field answers | Field answers with citations and optional narrative addendum |
| Executive Briefing | Board/leadership review before filing | 2-3 page compliance summary and open items |

## Intake Defaults

Apply these defaults when the user has not specified. Label each as `[ASSUMED]` in output.

- **Filing type**: OSCR annual return (monitoring return)
- **Reporting period**: Most recent completed 12-month financial year
- **Accounting basis**: Accrual if SORP-compliant accounts indicate accrual; otherwise receipts and payments
- **Professional fundraisers**: None
- **Commercial participators**: None
- **Cross-border registration**: Identify if also registered with Charity Commission for England and Wales (non-Scottish registration is separate)
- **Audit threshold**: Determine via OSCR published thresholds; label `[TO BE CONFIRMED]`
- **Currency**: GBP (£)

## Core Workflow

### 1. Resolve Open Items

Before drafting, confirm these with the user. Track each as `[OPEN]`, `[CONFIRMED]`, or `[TO BE CONFIRMED]`:

- Scottish Charity Number, Legal name, principal address, Reporting period dates, Total income (for threshold tier)
- Professional fundraiser / commercial participator use, Output mode, OSCR Online portal or paper filing

### 2. Research Requirements

- Use **official sources only**: OSCR website, Charities and Trustee Investment (Scotland) Act 2005, Charities Accounts (Scotland) Regulations, Charities SORP (FRS 102)
- Record each rule with source and last-updated date, If sources conflict: `[CONFLICT, VERIFY WITH SOLICITOR/ACCOUNTANT]`
- If unconfirmed: `[TO BE CONFIRMED]`
- If citation uncertain: `[VERIFY]`

Build a **Requirements Matrix** covering: return type, filing deadline (usually 9 months after FYE), extension availability, filing method, fee (OSCR returns generally no fee for basic return; check latest), audit threshold, independent examination threshold, required attachments, professional fundraiser disclosures, certification language, required signatories.

Each row must include: requirement text, applicability, organisation data needed, and source citation.

### 3. Draft Return Sections

Produce these sections with data from accounts and organisation records:

1. **Organisational Identity** - Legal name, SC/SC0 number, principal address, website/solicitation channels, reporting period, FYE, material changes (change of purposes, governing document, trustees)
2. **Governance** - Trustee register: name, role/office, term dates, compensation/expenses (note: trustees may not be paid except as permitted by governing document or with OSCR consent), independence notes
3. **Financial Position** - Current and prior year: total incoming resources (income), gains/losses, total resources expended (expenditure, charitable activities, fundraising, governance), total assets, total liabilities, funds (restricted, unrestricted, endowment). Include notes on SORP-compliant accounting basis.
4. **Programmes and Impact** - Per public benefit activity/charitable purpose: purpose, geography, beneficiaries, outputs/outcomes, resources expended, volunteer hours. Must demonstrate public benefit (required by Charities and Trustee Investment (Scotland) Act 2005 s.8).
5. **Fundraising and Compliance** - By method (online, direct mail, events, major gifts, planned giving): gross raised, direct costs, net proceeds. Include professional fundraiser / commercial participator table: entity, role, contract dates, amounts paid/raised, OSCR registration ID, contract attachment status.

### 4. Assemble Attachments Index

Index all exhibits: annual accounts (with trustees' annual report, auditor/independent examiner's report), relevant SORP disclosures, fundraiser/commercial participator contracts, trustee board minutes (if required). Track each exhibit's date, whether required, whether included, and notes.

### 5. Build Execution Package

- **Certification language**: Default: "I confirm that to the best of my knowledge the information given in this return and any attachments is correct and complete. I understand that knowingly providing false information may lead to investigation by OSCR and potential removal of charitable status." Label `[TO BE CONFIRMED]` until verified.
- **Signature blocks**: Role, printed name, signature line, date (authorised person, usually chair or treasurer)
- **Filing instructions**: Deadline, extension options, method (OSCR Online / paper), signature requirements, copies needed, cover letter (if paper)

## Quality-Control Checklist

Run before delivery:

- [ ] All open items resolved or labelled `[TO BE CONFIRMED]`
- [ ] Requirements matrix complete with official sources and dates
- [ ] Deadline calculated from FYE
- [ ] Audit/independent examination tier applied correctly
- [ ] Identity data consistent across sections and attachments
- [ ] Financial totals reconcile to accounts
- [ ] All required attachments indexed and referenced
- [ ] Certification language matches OSCR requirements
- [ ] Signatory identification correct (authorised person)
- [ ] All placeholders labelled, no unlabelled blanks remain

## Pitfalls

- **Do not conflate** the OSCR annual return with a Companies House annual return (separate filing for charitable companies).
- **Public benefit** is a distinct Scottish requirement under s.8 of the 2005 Act; must be demonstrable.
- Use **Form-Field Mode** when OSCR Online portal is mandatory.
- State all compliance requirements as "requirement + organisation response."
- Use consistent date and GBP currency formats across all sections.
- Keep tone professional, factual, and regulator-facing.
- **Charitable companies**: also file accounts/confirmation with Companies House.
- **SCIOs** (Scottish Charitable Incorporated Organisations): registered with OSCR only; no Companies House filing.

---

## Scotland/UK Adaptation

This skill is adapted from US state charity bureau filings to Scottish regulation:

| US Concept | Scottish Equivalent |
|------------|-------------------|
| State charity bureau / AG / Secretary of State | OSCR (Office of the Scottish Charity Regulator) |
| IRS Form 990 / 990-EZ / 990-PF | Annual accounts under Charities SORP (FRS 102); OSCR Annual Return |
| EIN | Scottish Charity Number (SC- / SCO-) |
| Form RRF-1 (NY / CA etc.) | No equivalent; single OSCR return for Scotland |
| Independent audit threshold (state-specific) | OSCR audit and independent examination thresholds |
| Professional fundraiser (state-registered) | Professional fundraiser / commercial participator (regulated under Charities (Disclosure) (Scotland) Regulations) |
| State-by-state filing | Single OSCR registration in Scotland; cross-border with Charity Commission for England and Wales if applicable |
| USD | GBP (£) |
| Notarisation | Not generally required for OSCR returns |

## Concepts with No Direct Scottish Equivalent [FLAGGED]

- **Form RRF-1 (New York) or similar** - no UK equivalent; replaced by SORP-compliant accounts and OSCR annual return
- **Multi-state registration (e.g. CA, NY, FL)** - not applicable for Scotland-only charities; charities operating in England/Wales may need dual registration
- **Secretary of State corporate annual report** - separate filing for charitable companies at Companies House
- **Bureau-level filing fees (varying per state)** - OSCR returns generally do not attract filing fees (check latest OSCR guidance)

**[SCOTS] All US statutes, regulators, forms, and procedures replaced with Scottish equivalents. All dollar references converted to GBP. Single OSCR regulator replaces multi-state filing model.**

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
