---
name: cip-policy
language: en
description: Drafts a UK Customer Due Diligence (CDD) / KYC policy compliant with the Money Laundering Regulations 2017 (SI 2017/692), POCA 2002, the Terrorism Act 2000, and FCA/JMLSG guidance. Covers identity collection, verification, sanctions screening (OFSI), beneficial ownership (PSC Register), recordkeeping, and governance. Trigger when the user needs to create or update a CDD/KYC policy, AML onboarding procedures, or FCA-exam-ready documentation applicable to Scotland and the UK. [Atticus UK/Scots refined]
tags:
- drafting, regulatory, AML, KYC, CDD, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# CDD / KYC Policy Drafting (UK/Scotland Adaptation)

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

Draft an exam-ready Customer Due Diligence / KYC policy covering identity collection, verification, screening (OFSI sanctions), recordkeeping, and governance under the Money Laundering Regulations 2017 (MLRs), POCA 2002, and FCA/JMLSG guidance.

[SCOTS: Note] - No direct UK equivalent of US PATRIOT Act Section 326 CIP. UK equivalents operate under the MLRs with FCA/JMLSG framework. Scotland is part of the single UK AML regime; no separate Scottish AML regime exists beyond the unified UK framework. Prosecution in Scotland is via COPFS.

## Prerequisites

Gather before drafting:

- **Institution profile** - FCA authorisation/permission type, products, channels, footprint, risk assessment
- **AML/CTF program** - related policies (CDD/EDD, SAR, sanctions screening)
- **Account/product taxonomy** - definitions of "customer" and product coverage
- **Onboarding procedures** - current workflows and system capabilities

## Quick Start

1. Collect institution profile and existing AML/CTF program details
2. Walk through each policy section below in order
3. Populate tables with institution-specific data
4. Tag uncertain regulatory citations as `[VERIFY]`
5. Route draft for MLRO (Money Laundering Reporting Officer) and board review

## Policy Sections

### 1. Header

Effective date, version, approving authority (Board/senior management), policy owner (MLRO).

### 2. Purpose and Authority

- Cite Money Laundering Regulations 2017 (SI 2017/692), Part 7 POCA 2002, Terrorism Act 2000 (as amended)
- State CDD is mandatory and integrated with AML/CTF program, Reference FCA Handbook (SYSC, MLR, FCG sections) and JMLSG Guidance

### 3. Scope and Definitions

- Covered accounts, channels, customer types, Narrowly defined exclusions with regulatory basis cited, Define "customer," "beneficial owner," "PSC" (Person with Significant Control), "Politically Exposed Person" (PEP)

### 4. Minimum Information Collection

| Customer Type | Required Data | Notes |
|---|---|---|
| Individual | Full legal name, DOB, residential address, nationality, ID number (passport/driving licence) | Residential address required |
| Entity | Legal name, registered address, Companies House registration number, SIC code, PSC register details | Identify directors and PSCs |
| Non-UK resident | Passport/foreign ID number + country of residence | EDD likely required |
| Trust | Trust name, governing law, trustees, settlor, protector, beneficiaries | Register of Trusts (if taxable) |

### 5. Verification Methods

| Method | When Used | Record |
|---|---|---|
| Documentary | Default | Doc type, issuer, number, expiry |
| Electronic verification | Acceptable where reliable (Credit reference agencies) | Source, date, result, analyst notes |

**Documentary checklist:** genuine/unaltered, photo matches, name/DOB/address match, unexpired (or approved exception).

**Electronic options:** Verification via credit reference agency (CIFAS, Experian, Equifax), electronic identity verification providers, government gateway checks.

### 6. Entity and Beneficial Ownership (PSC Regime)

- Verify legal existence (Companies House search, certificate of incorporation, UK establishment documents)
- Verify identity of directors and beneficial owners (PSCs)
- Collect/verify beneficial ownership per MLR 2017 Reg 28, identify any individual holding >25% shares/voting rights, or controlling the entity
- [SCOTS: Note] - Scottish Limited Partnerships (SLPs) have specific PSC disclosure requirements under The Scottish Partnership (Register of People with Significant Control) Regulations 2017

### 7. Discrepancy Resolution

- Document mismatch and remediation steps, Escalate unresolved discrepancies to MLRO, Refuse/restrict business relationship when identity unverifiable, Consider SAR referral when warranted (suspicion of money laundering or terrorist financing)

### 8. Sanctions Screening

- Screen against **OFSI consolidated list** (UK Sanctions Regime) **before** onboarding, Screen against HM Treasury sanctions lists (Russia, Iran, Syria, etc.)
- Document list sources, screening tool, match logic, clearance, Escalation and asset freezing for true matches (no notice to customer of sanctions match, required under UK law)
- [SCOTS: Note] - OFSI is the UK authority; no separate Scottish sanctions regime

### 9. Enhanced Due Diligence (EDD)

| Factor | Action |
|---|---|
| PEP status | Enhanced verification, source of wealth/funds, senior approval |
| Complex/opaque ownership | Identify all beneficial owners, source of funds |
| High-risk jurisdiction (FATF/UK list) | Additional verification, senior approval, transaction limits |
| Non-face-to-face onboarding | Strengthened verification, first payment trace |
| Correspondent banking | Enhanced checks per JMLSG guidance |

### 10. Simplified Due Diligence

Permitted only where low-risk assessed (Reg 37 MLRs 2017). Examples: UK central/ local government, listed companies (regulated market), certain regulated entities. Document rationale in each case.

### 11. Recordkeeping

- Retain CDD records **5 years after end of business relationship** (Reg 40 MLRs 2017)
- Maintain retrievable records for FCA/OPBAS/HMRC examination or law enforcement, Define storage format and custody responsibility

### 12. Customer Notice

Provide CDD notice at or before account opening. Sample (adapt per channel):

> To help combat money laundering and terrorist financing, UK law requires financial institutions to verify the identity of their customers. We will ask for your name, address, date of birth, and identification documents (e.g. passport, driving licence). We may also verify your identity using electronic verification services. Your personal data will be processed in accordance with UK GDPR and our privacy notice.

### 13. Reliance on Third Parties

- Written agreement confirming CDD obligations met (Reg 39 MLRs 2017)
- Ongoing monitoring and audit rights, Institution retains ultimate responsibility
- [SCOTS: Note] - Reliance on introducers is subject to same standards as direct onboarding

### 14. Suspicious Activity Reports (SARs)

- MLRO designated as responsible for SAR submissions (National Crime Agency SAR Online)
- Internal escalation procedure for knowledge or suspicion of ML/TF, Non-tipping off obligations (s.333A POCA 2002, s.21A Terrorism Act 2000)

### 15. Training and Governance

- Initial and annual AML/CTF training for relevant staff, MLRO duties and Board-level reporting, Independent audit/testing cadence and board reporting, Risk assessment (Business Risk Assessment, BRA) documented

### 16. Review and Change Control

- Annual review minimum, Board approval for material changes, Version history and distribution log

## Pitfalls

- **Exemption creep** - do not expand simplified due diligence beyond regulatory text; document rationale for each
- **Verification timing** - must complete before (or during if risk-based) establishment of business relationship; document timelines
- **Stale citations** - confirm all regulatory references are current; MLRs amended frequently (SI 2017/692 as amended); tag uncertain sources `[VERIFY]`
- **Policy isolation** - align with broader AML, sanctions, and CDD policies; cross-reference where applicable
- **UK GDPR** - ensure data retention and processing comply with UK GDPR / Data Protection Act 2018
- **OPBAS registration** - if supervised by a Professional Body, ensure MLR compliance per OPBAS standards
- [SCOTS: Note] - Scotland COPFS prosecutes AML offences; no substantive difference from England & Wales

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced USA PATRIOT Act Section 326 / 31 CFR 1020.220 with Money Laundering Regulations 2017 (SI 2017/692)
- Replaced OFAC screening with OFSI (Office of Financial Sanctions Implementation) consolidated UK sanctions list, Replaced FinCEN / CDD Rule with FCA Handbook / JMLSG Guidance, Replaced IRS EIN/TIN with UK National Insurance number / Companies House registration number, Replaced "SAR" (Suspicious Activity Report) context from FinCEN to NCA SAR Online, Replaced state-by-state deviations with single UK-wide regulatory framework, Added PSC Register (People with Significant Control) under Companies House regime, Added UK GDPR / Data Protection Act 2018 obligations, Added PEP definition per MLRs 2017 / FCA guidance, Updated recordkeeping: 5 years from end of relationship (vs. US 5 years from account closure)
- Removed specific USD references; amounts generalised, Replaced "CIP notice" with CDD privacy notice under UK legal framework, Updated training and governance to reference MLRO (Money Laundering Reporting Officer)
- Added COPFS (Crown Office and Procurator Fiscal Service) for Scottish prosecutions, Added Scottish Limited Partnership PSC disclosure references

**Key Scottish/UK considerations:**
- No direct US CIP equivalent, UK CDD operates under the MLRs 2017, POCA 2002, and Terrorism Act 2000
- Single UK AML regime applies to Scotland, no separate Scottish AML framework, OFSI sanctions regime is UK-wide; no separate Scottish sanctions lists, PSC Register (Companies House) is the beneficial ownership framework; Scottish Limited Partnerships have specific additional requirements, FCA registration for most financial institutions; HMRC supervises some sectors (money service businesses, high-value dealers)
- SARs filed via NCA SAR Online; the Scottish approach to prosecution is via COPFS, JMLSG guidance is the primary industry guidance (not law but practically binding for FCA expectations)
- MLRO appointment is required for FCA-authorised firms, UK GDPR compliance is essential for all data processing

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
