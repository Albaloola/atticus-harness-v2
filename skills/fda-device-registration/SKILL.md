---
name: fda-device-registration
language: en
description: Atticus UK/Scots legal skill for fda-device-registration. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# MHRA Medical Device Registration & Listing [SCOTS]

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

Drafts a Medical Devices Regulations 2002 (UK MDR 2002) registration and device listing submission structured for MHRA submission via the Device Registration system (PARD / DORS).

> **[SCOTS: Note]** This skill has been adapted from the US FDA medical device registration system (21 CFR Part 807, FDA Form 2830, FURLS) to the UK MHRA system. See the Scotland/UK Adaptation section at the end for the cross-reference table.

## Prerequisites

1. **Establishment details** - legal name, registered address, contact details, business activities
2. **UK Responsible Person (if non-UK manufacturer)** - name, address, phone, email, written agreement
3. **Device inventory** - device names, GMDN codes/terms, classification (Class I, IIa, IIb, III, IVD), intended purpose
4. **Conformity evidence** - UKCA or CE marking certificates, UK Declaration of Conformity, Notified Body details
5. **Prior submissions** - previous MHRA registration numbers, prior UKCA/CE certificates, QMS certificates (ISO 13485)

## Output Structure

### Document Header

| Field | Content |
|-------|---------|
| Title | MHRA Medical Device Registration and Listing |
| Regulatory basis | Medical Devices Regulations 2002 (SI 2002 No. 618, as amended) |
| MHRA system | Device Registration Online System (DORS) |
| Preparation date | [Date] |
| Filing type | Initial Registration / Listing Update |

### 1. Manufacturer / Responsible Person Information

- Legal entity name (must match Companies House / corporate records)
- Registered address and UK establishment address (if different)
- Phone, email, contact person, Business activities: Manufacturer, Authorised Representative (UKRP), Importer, Distributor, EORI number (if importing)

### 2. UK Responsible Person (Non-UK Manufacturers)

If the manufacturer is outside the UK:
- UKRP company name and registered address, UKRP responsible person details, Written agreement confirming UKRP obligations per UK MDR 2002
- UKRP must be established in the UK

### 3. Device Listing

For each device:

| Field | Requirement |
|-------|-------------|
| Device name | Trade name / proprietary name |
| GMDN code | Global Medical Device Nomenclature code |
| Classification | Class I, IIa, IIb, III (or IVD classification) |
| Intended purpose | Technical description as per labelling |
| MHRA registration number | If previously assigned |
| UKCA / CE certificate number | With Notified Body reference |
| UK Declaration of Conformity | Reference number and date |
| QMS standard | ISO 13485 certificate body and expiry |
| Conformity route | Annex II (EC/UKCA Declaration) / Annex III (Type Examination) etc. |
| UKRP | Name and reference (non-UK manufacturers) |

### 4. Compliance Certifications

- [ ] Medical Devices Regulations 2002 (SI 2002/618, as amended) requirements met
- [ ] UKCA marking applied (Great Britain market) or CE marking (where still recognised)
- [ ] UK Declaration of Conformity current and complete
- [ ] ISO 13485 / MDR QMS compliance (where applicable)
- [ ] UK Responsible Person designated (non-UK manufacturers)
- [ ] Device classifications correctly determined per UK MDR 2002 Schedule
- [ ] UK vigilance (MIR) reporting obligations acknowledged (SI 2002/618 Part 5)
- [ ] Clinical evaluation (MEDDEV 2.7/1 Rev.4 / UK equivalent) complete

### 5. Non-UK Manufacturers, UK Responsible Person

If applicable:
- UKRP company name, address, phone, email, Written agreement scope confirming UKRP responsibilities (registration, vigilance, incident reporting)
- UKRP must be registered with MHRA

### 6. Signatures & Attestations

- Printed name, title, date, signature line, Attestation: accuracy/completeness of information, For non-UK manufacturers: UKRP or company officer signatory, Authority to bind the manufacturer

## Guidelines

- Use MHRA-recognised device descriptions and GMDN codes, never paraphrase, Verify any prior registration numbers against the MHRA Public Access Registration Database (PARD)
- All device classifications must align with the UK MDR 2002 classification rules (Schedule 2)
- Structure output to facilitate transfer into the MHRA Device Registration Online System (DORS)
- Do not fabricate GMDN codes, registration numbers, or certificate references, flag missing data with `[REQUIRED, obtain from client]`
- Mark unverified citations with `[VERIFY]`
- Note: For the Northern Ireland market, separate arrangements apply (EU MDR/IVDR conformity)

## Troubleshooting

- **Missing MHRA registration number** - flag as `[REQUIRED, obtain from client or check PARD]`; do not guess or generate
- **Unrecognised GMDN term** - check the current MHRA GMDN database (available via DORS) and flag with `[VERIFY]`
- **Non-UK manufacturer without UKRP** - halt drafting and request UK Responsible Person designation details
- **Registration updates** - registration information must be kept up to date; manufacturers must inform MHRA of changes within 28 days
- **Transition period arrangements** - check current MHRA guidance on transitional arrangements for CE-marked devices (post-Brexit grace periods)
- **Northern Ireland** - separate regime applies under the Northern Ireland Protocol / Windsor Framework; this skill covers Great Britain market only

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from the US FDA 21 CFR Part 807 Establishment Registration and Device Listing system (FDA Form 2830, FURLS) to the UK MHRA medical device registration system under the Medical Devices Regulations 2002 (SI 2002 No. 618, as amended).

### Key Differences from the US Original

| US Concept | UK Equivalents |
|-------------|-----------------|
| FDA (Food and Drug Administration) | MHRA (Medicines and Healthcare products Regulatory Agency) |
| 21 CFR Part 807 | Medical Devices Regulations 2002 (SI 2002/618) |
| FDA Form 2830 | MHRA Device Registration Online System (DORS) |
| FURLS | PARD (Public Access Registration Database) |
| FEI Number | MHRA Registration Number (assigned by MHRA) |
| 510(k) premarket notification | UKCA / CE conformity assessment (Notified Body) |
| FDA Product Classification Database | GMDN (Global Medical Device Nomenclature) |
| QSR (21 CFR Part 820) | ISO 13485 (harmonised standard) |
| US Agent (foreign establishments) | UK Responsible Person (UKRP) |
| 21 CFR Part 803 MDR | UK Vigilance / Adverse Incident Reporting (SI 2002/618 Part 5) |
| PMA (Premarket Approval) | UKCA Certificate (Notified Body assessment) |
| Medical Device Listing | MHRA Device Registration |
| Establishment Registration (annual, Oct-Dec) | MHRA Registration (continuous; updates within 28 days of changes) |
| Class I, II, III | Class I, IIa, IIb, III (different classification rules) |

### Scottish / UK-Specific Context, Scotland follows UK-wide MHRA regulatory framework medical device regulation, no devolved Scottish variation for medical devices, The MHRA is the UK-wide competent authority; SEPA is not involved in medical device regulation, Post-Brexit: UKCA (UK Conformity Assessed) marking for Great Britain; CE marking still recognised under transitional arrangements, Notified Bodies in the UK are approved by MHRA (e.g., BSI, SGS, UL International)
- Clinical investigations of medical devices require MHRA authorisation (separate from REC/HRA review)

### Key UK Legislation, Medical Devices Regulations 2002 (SI 2002/618), as amended by The Medical Devices (Amendment etc.) (EU Exit) Regulations 2019, 2020, 2021
- Human Medicines Regulations 2012 (for borderline products)
- UK Medical Devices (Post-market Surveillance) Regulations

### Forms and Guidance, MHRA device registration guidance: https://www.gov.uk/guidance/register-medical-devices-to-place-on-the-market, MHRA Device Registration Online System (DORS): via MHRA website, PARD (Public Access Registration Database): https://pard.mhra.gov.uk/
- UK MDR 2002 (legislation): https://www.legislation.gov.uk/uksi/2002/618/contents/made, ISO 13485:2016 (medical devices QMS)

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
