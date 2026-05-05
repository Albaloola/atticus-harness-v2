---
name: sam-reps-certs
language: en
description: Drafts Representations and Certifications documents for SAM.gov federal contractor registration. Use when registering entities in SAM.gov, updating annual registrations, preparing government contracting eligibility documents, or working with UEI, NAICS codes, business size determinations, and FAR compliance representations. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, drafting, regulatory, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# SAM.gov Representations and Certifications

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

Drafts the mandatory Reps & Certs document for SAM.gov registration and federal contracting eligibility. All statements are made under penalty of perjury per 18 U.S.C. § 1001.

## Prerequisites

Collect before drafting:

- **Entity info**: legal name, DBA(s), physical/mailing address, organizational structure, state of incorporation, fiscal year end, congressional district
- **Identifiers**: UEI (replaced DUNS April 2022), TIN, CAGE code (if assigned)
- **NAICS codes**: primary and secondary, with applicable SBA size standards
- **Size data**: revenue or employee count for size standard determination
- **Ownership/affiliation**: percentages, parent/subsidiary relationships per 13 CFR 121.103
- **Socioeconomic certs**: SBA certification numbers for any claimed status
- **Authorized signatory**: person with binding authority for the entity

## Document Sections

Draft six sequential sections matching SAM.gov portal structure.

### 1. Header

Title: "Representations and Certifications, SAM.gov Registration." Include entity name, submission date, one-year validity period, 60-day material change update obligation, and penalty of perjury notice (18 U.S.C. § 1001).

### 2. Entity Identification

Populate all SAM.gov fields: legal name, DBA(s), addresses, UEI, TIN, CAGE code (or "To be assigned"), NAICS codes, organizational structure, state of incorporation, fiscal year end, congressional district.

### 3. Business Size and Socioeconomic Representations

For each claimed category, state status and factual basis:

| Category | Reference | Required Support |
|----------|-----------|------------------|
| Small business | SBA size standard (primary NAICS) | Revenue or employee count |
| Small disadvantaged business | 13 CFR 124 | SBA 8(a) cert number |
| Women-owned small business | FAR 52.219-29 | Ownership % + WOSB cert |
| Economically disadvantaged WOSB | FAR 52.219-30 | EDWOSB cert |
| Veteran-owned small business | 38 U.S.C. § 8127 | VA CVE verification |
| Service-disabled veteran-owned | FAR 52.219-27 | VA CVE verification + disability docs |
| HUBZone | 13 CFR 126 | SBA HUBZone cert + principal office location |

Include affiliation analysis under 13 CFR 121.103 - list all parent companies, subsidiaries, and affiliates factoring into size determination.

### 4. FAR Compliance Representations

Number sequentially. For each, cite the FAR clause and state status: Compliant / Not Applicable / Explanation Attached.

| Representation | FAR Clause | Requirement |
|---------------|------------|-------------|
| Telecom/video surveillance | FAR 52.204-26 | No covered equipment per NDAA § 889 |
| Tax delinquency | [VERIFY] controlling FAR clause and threshold | No unpaid federal tax liability |
| Felony conviction | FAR 9-10.2 | None within 24 months |
| State sponsors of terrorism | FAR 52.225-13 | No business relationships |
| Equal opportunity | FAR 52.222-22 | Compliance certified |
| E-Verify | FAR 52.222-54 | Enrolled and participating |
| Davis-Bacon Act | FAR 52.222-6 | If construction, confirmed |
| Service Contract Act | FAR 52.222-41 | If services, confirmed |

### 5. Integrity and Compliance Certifications

Draft formal certifications:

- Not debarred, suspended, proposed for debarment, declared ineligible, or voluntarily excluded, No fraud conviction or civil judgment in public transactions within prior 3 years, Compliance with Title VI, Title IX, Section 504, Age Discrimination Act, Drug-Free Workplace Act of 1988 compliance, Lobbying restrictions per 31 U.S.C. § 1352 (Byrd Anti-Lobbying Amendment)
- Environmental compliance certifications, For high-value awards: verify the current FAR tax-delinquency/felony representation clause and applicable threshold before certification `[VERIFY]`

### 6. Attestation and Signature Block

Include: signatory name, title, certification under penalty of perjury (18 U.S.C. § 1001), acknowledgment of 60-day update obligation, signature/date lines, printed name, title, email, phone. Note ESIGN Act acceptance subject to SAM.gov authentication requirements.

## Pitfalls

- **Affiliation analysis**: understating affiliations is a common basis for False Claims Act liability, always perform thorough 13 CFR 121.103 analysis
- **Socioeconomic status**: never assume eligibility; each category requires formal SBA certification or verifiable facts
- **Penalty of perjury**: signatory must have actual knowledge of all statements; remind client of criminal liability
- **Annual renewal**: SAM.gov registrations expire after one year, flag renewal dates
- **60-day update rule**: material changes must be updated within 60 days
- **Verify FAR citations**: cross-check against current FAR at acquisition.gov; GSA field requirements change periodically

---

## Scotland/UK Adaptation

### No Direct Equivalent to SAM.gov

The US SAM.gov system for federal contractor registration has **no direct equivalent** in the UK/Scotland. Public procurement is governed by different regimes.

| US System | UK/Scottish Equivalent |
|---|---|
| SAM.gov | **Public Procurement Gateway** (Scotland) / Find a Tender (FTS) |
| UEI (Unique Entity ID) | **Companies House registration number** / UK VAT registration number |
| CAGE code | No equivalent |
| NAICS codes | **SIC codes** / CPV codes for procurement |
| SBA size standards | **SME definition** (Companies Act 2006 / EU recommendation 2003/361) |
| FAR (Federal Acquisition Regulation) | **Public Contracts (Scotland) Regulations 2015** / PCR 2015 (UK) / Procurement Reform (Scotland) Act 2014 |
| GSA | **Scottish Procurement** (Scottish Government) / Crown Commercial Service (UK) |

### Key UK/Scottish Procurement Frameworks

| Regulation | Scope |
|---|---|
| Public Contracts (Scotland) Regulations 2015 (SSI 2015/112) | Above-threshold procurement in Scotland |
| Procurement Reform (Scotland) Act 2014 | Below-threshold procurement; sustainable procurement duty |
| Public Contracts Regulations 2015 (SI 2015/102) | England, Wales, Northern Ireland (above threshold) |
| Concession Contracts (Scotland) Regulations 2016 | Concession contracts in Scotland |
| Utilities Contracts (Scotland) Regulations 2016 | Utilities procurement in Scotland |

### Supplier Registration (Scottish Equivalent)

| US SAM.gov | UK/Scottish Equivalent |
|---|---|
| System for Award Management | **Public Contracts Scotland (PCS)** portal, Scottish Government's e-procurement platform |
| Requires annual renewal | Registration is ongoing; updates required as needed |
| Reps & Certs | **Supplier Journey** / **Supplier Information Database (SID)** - key supplier profiles |
| DUNS (previous) → UEI | **Companies House number** is the primary entity identifier |

### What to Draft Instead

For Scottish/UK public procurement, produce:
1. **Selection Questionnaire (SQ)** - equivalent to SAM reps and certs: statements on grounds for exclusion, economic/financial standing, technical capability
2. **SPD (Standard Procurement Document)** - Single Procurement Document (Scotland) incorporating ESPD (European Single Procurement Document now assimilated law)
3. **Supplier Registration Profile** - registration details for PCS / supplier databases
4. **Bidder Declaration** - under PCR 2015, declarations concerning exclusion grounds (bribery, fraud, tax evasion, conflicts)
5. **Subcontracting Plan** - where the contract value and nature require it

### Exclusion Grounds (UK vs US)

| US Federal Ground | UK Equivalent |
|---|---|
| Debarment / suspension | **Mandatory exclusion** (Public Contracts Regulations 2015, reg. 57) - conviction for bribery, fraud, money laundering, etc. |
| Tax delinquency | **Non-payment of taxes** - HMRC tax debt > £3,000 for 3+ months |
| Felony conviction within 24 months | Mandatory exclusion for certain criminal convictions (no time limit) |
| False claims / FCA | Fraud Act 2006 / Bribery Act 2010 convictions |
| NDAA 889 (Huawei/ZTE) | **Telecom security** - Telecommunications (Security) Act 2021; NCSC guidance |

### Key Differences for Practitioners

1. **No SAM.gov**: Scottish suppliers register on Public Contracts Scotland (PCS) - not a centralised equivalent of SAM.gov.
2. **Companies House**: Primary entity identifier is the Companies House number (for limited companies).
3. **No CAGE code**: UK entities use VAT numbers and company registration numbers.
4. **SME definition**: UK uses Companies Act 2006 definitions (small: turnover ≤ £10.2m, balance sheet ≤ £5.1m, ≤ 50 employees; medium: ≤ £36m, ≤ £18m, ≤ 250).
5. **No socioeconomic set-asides**: UK procurement law does not have US-style set-asides for small, disadvantaged, veteran-owned, or HUBZone businesses. Social value may be evaluated but not through reserved contracts.
6. **Modern slavery statement**: UK suppliers above £36m turnover must produce a modern slavery statement, no US equivalent.
7. **FOI/Section 26**: Under PCR 2015, procurement documents are subject to Freedom of Information (Scotland) Act 2002.

[SCOTS: Replace all SAM.gov/FAR/US references with the Scottish/UK public procurement framework. The general structure (entity identification → eligibility → declarations → attestation) transfers, but every substantive legal standard, identifier, exclusion ground, and certification requirement must be rewritten.]

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
