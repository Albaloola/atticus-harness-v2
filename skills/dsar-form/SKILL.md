---
name: dsar-form
language: en
description: Drafts a GDPR-, UK GDPR-, and Data Protection Act 2018-compliant Data Subject Access Request (DSAR) intake form for collecting requester information and processing privacy rights under UK and Scottish jurisdiction. Use when drafting DSAR forms, privacy rights request templates, or data subject rights workflows for UK-regulated organisations. [Atticus UK/Scots refined]
tags:
- drafting, regulatory, SCOTS, scotland, uk, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# DSAR Form

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

Drafts a legally compliant DSAR intake form enabling individuals to exercise privacy rights under UK GDPR (Arts. 15 to 22), the Data Protection Act 2018, and GDPR (Arts. 15 to 22).

[SCOTS: Note] CCPA (California Consumer Privacy Act) references have been removed from the main body. This skill now focuses on the UK and Scottish legal framework.

## Prerequisites

Gather before drafting:

1. **Jurisdiction scope** - UK GDPR, DPA 2018, GDPR, or additional
2. **Organization identity** - legal name, DPO/Privacy Officer contact, submission channels
3. **Supervisory authority** - relevant regulator: ICO (Information Commissioner's Office) for UK organisations
4. **Submission infrastructure** - secure email, upload portal, or postal address
5. **Fee policy** - whether org charges for manifestly unfounded/excessive requests

## Quick Start

Draft the form in six sections in this order: Introduction, Requester Info, Request Details, Identity Verification, Declaration, Submission Instructions.

## Form Sections

### 1 - Introduction & Purpose

State in plain language:

- Legal basis: UK GDPR Arts. 15 to 22; Data Protection Act 2018; GDPR Arts. 15 to 22
- Rights covered (list request types from Section 3)
- Response timelines (see Response Deadlines)
- Fee conditions for excessive/manifestly unfounded requests, Right to complain to the ICO (Information Commissioner's Office)

### 2 - Requester Information

| Field | Req | Notes |
|---|---|---|
| Full legal name | Yes | As on ID |
| Email address | Yes | Primary contact |
| Phone number | No | Optional |
| Postal address | Yes | Written response option |
| Date of birth | Yes | Identity verification |
| Account/customer ID | No | If applicable |
| Relationship to org | Yes | Customer / Employee / Former employee / Visitor / Representative |
| Alternative names used | No | If interacted under different name |
| Scottish CHI number | No | If applicable (NHS/health data context) |

For **authorized representatives**: require proof of authority (power of attorney, parental responsibility docs, or equivalent). Under Scottish law, a formal power of attorney registered with the Office of the Public Guardian in Scotland may be relied upon.

### 3 - Request Details

**Request type** (checkbox, select all that apply):

- Right of access (Art. 15 UK GDPR) - all personal data held, Right of access (Art. 15 UK GDPR) - specific categories only (describe)
- Right to rectification (Art. 16 UK GDPR)
- Right to erasure (Art. 17 UK GDPR) - right to be forgotten, Right to restriction of processing (Art. 18 UK GDPR)
- Right to data portability (Art. 20 UK GDPR) - machine-readable format, Right to object to processing (Art. 21 UK GDPR)
- Rights in relation to automated decision-making (Art. 22 UK GDPR)

[SCOTS: Note] CCPA-specific rights (opt-out of sale/sharing, right to correct under CPRA) are not included. These are California-specific and do not apply in UK/Scottish law.

**Scope fields:**

| Field | Notes |
|---|---|
| Data description / categories sought | Encourage specificity; overly broad requests may need clarification |
| Relevant time period | Date range if applicable |
| Preferred response format | PDF / CSV / Secure portal / Encrypted email |
| Additional context | Details to help locate records |

Include a note: rights may be limited where data is legally privileged, retention is required by law, or disclosure would adversely affect third-party rights. The DPA 2018 includes specific exemptions (e.g., Schedule 2 - crime and taxation; Schedule 3 - immigration; Schedule 4 - legal proceedings).

### 4 - Identity Verification

Proportionate to data sensitivity (per ICO guidance and DPA 2018, s. 45(5)):

**Tier 1 - Standard requests:**
- UK passport or photocard driving licence, One proof of address (utility bill, bank statement, within 3 months)

**Tier 2 - Sensitive data (UK GDPR Art. 9):**
- Two forms of photo ID, or, Photo ID + proof of address (as above)

Acceptable ID documents in a UK/Scottish context: UK passport, UK photocard driving licence (DVLA), Scottish National Entitlement Card (NEC), biometric residence permit. Non-UK identity documents should be accepted for individuals without UK documentation.

Verification documents: submit via encrypted email or secure portal. Used solely for DSAR processing, securely destroyed upon completion. Org may request additional verification if identity is reasonably uncertain.

### 5 - Declaration & Consent

Include declaration that the requester:

1. Certifies they are the data subject or authorized representative
2. Confirms all information is true and accurate
3. Understands false statements may result in denial and legal consequences
4. Consents to processing of submitted data for verification and fulfillment only

Add signature line, printed name, and date.

### 6 - Submission Instructions

| Channel | Details |
|---|---|
| Email | [dpo@organisation.com] - subject: "DSAR Submission" |
| Secure portal | [URL] |
| Post | Data Protection Officer, [Address] |

- Acknowledgment: within [3 to 5 business days]
- Substantive response: within statutory deadline (see below)
- Complaint to ICO: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF; ico.org.uk / 0303 123 1113

## Response Deadlines

| Regulation | Standard | Extension | Trigger |
|---|---|---|---|
| UK GDPR / DPA 2018 | 30 calendar days | +60 days (90 total) | Complex or numerous requests |
| GDPR | 30 days | +60 days (90 total) | Complex or numerous requests |

**Fees (UK GDPR):**
- Free by default; reasonable fee or refusal for manifestly unfounded or excessive requests (Art. 12(5) UK GDPR; DPA 2018, s. 56A)
- Fee may be charged for repeat copies (DPA 2018, s. 56(6))

## Pitfalls

- **Do not** create unnecessary barriers (e.g., requiring specific form wording or notarised documents for routine requests)
- **Do not** use verification data for any purpose other than DSAR processing
- **Do not** delay acknowledgment pending full response
- **Do** minimize data collected to what is strictly necessary
- **Do** clearly mark mandatory vs. optional fields
- **Do** adapt jurisdiction-specific language to data subject and org location
- **Do** ensure compliance with the Data (Use and Access) Act 2025 when applicable

## Jurisdiction Notes

- **UK GDPR** (retained EU GDPR as amended by the Data Protection Act 2018 and post-Brexit regulations) applies across the UK including Scotland
- **Data Protection Act 2018** supplements UK GDPR with UK-specific exemptions, age-verification provisions, and processing rules
- **Scotland-specific**: The Scottish Government, Scottish Parliament, and Scottish public authorities (e.g., SEPA, Police Scotland, NHS Scotland, local councils) are subject to the same UK GDPR / DPA 2018 framework but must also comply with the Scottish Public Sector Data Policy and Scottish-specific FOI rules
- **Data (Use and Access) Act 2025** (DUAA) came into law on 19 June 2025 and amends the UK data protection landscape, verify current ICO guidance for updated SAR procedures
- **GDPR** (EU regime) applies to EU/EEA residents, if your organisation handles EU data subjects, separate GDPR compliance is still required, ICO remains the UK's independent supervisory authority; complaints from Scottish data subjects go to the ICO (not a separate Scottish body)

---

## Scotland/UK Adaptation

This skill has been adapted from a US/California-focused DSAR form to the UK and Scottish legal framework.

### Key changes from original

- **Replaced CCPA/CPRA references** with UK GDPR (Arts. 15 to 22) and Data Protection Act 2018
- **Replaced "state AG"** with "ICO (Information Commissioner's Office)" as the relevant supervisory authority
- **Updated identity verification** to UK-accepted documents (UK passport, DVLA driving licence, National Entitlement Card)
- **Updated fee policy** to UK GDPR fee rules
- **Removed CCPA-only rights** (opt-out of sale/sharing, right to limit use of sensitive PI)
- **Added Schedule exemptions** under DPA 2018 for lawful refusal (crime/taxation, immigration, legal proceedings)
- **Added Scottish-specific notes** for CHI numbers, public authority context, and power of attorney under Scottish law
- **Updated response deadlines** to UK GDPR 30-calendar-day standard
- **Added Data (Use and Access) Act 2025** reference for currency

### Sources and forms

The following UK and Scottish DSAR forms were downloaded as reference material:

| Source | Format | Description |
|---|---|---|
| gov.scot (Scottish Government) | DOCX | Official SAR form for Scottish Government data subjects |
| SEPA (Scottish Environment Protection Agency) | DOCX | DSAR form, Scottish public body example |
| UK Government (assets.publishing.service.gov.uk) | PDF | Official UK government SAR form template (OFFICIAL SENSITIVE) |
| King's College London | DOCX | University DSAR form, UK higher education example |
| Abbeyfield Dales | DOCX | Care sector DSAR form, UK organisation example |

These forms are stored in `scots-forms/` for developer reference when adapting the skill's output to specific UK/Scottish organisational needs.

### ICO guidance

The ICO recommends that organisations provide a DSAR form as a helpful tool but not as a mandatory requirement, data subjects may make valid SARs by any means, including verbally or via social media. The form in this skill should be offered as an option, not a barrier.

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
