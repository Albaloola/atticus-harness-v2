---
name: 510k-premarket-notification
language: en
description: Drafts FDA 510(k) Premarket Notification submissions demonstrating substantial equivalence under 21 CFR Part 807. Supports Traditional, Special, and Abbreviated pathways. Use when preparing Class II medical device regulatory filings, substantial equivalence analyses, or FDA premarket submissions. [Atticus UK/Scots refined]
tags:
- drafting, letter, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# FDA 510(k) Premarket Notification

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

Drafts a complete 510(k) submission package demonstrating substantial equivalence to a predicate device under 21 CFR Part 807, Subpart E.

## Prerequisites

Gather before drafting:

1. **510(k) type** - Traditional, Special, or Abbreviated
2. **Predicate device** - trade name, manufacturer, K-number, clearance date
3. **Device classification** - product code, regulation number, panel, class
4. **Establishment registration** - FDA registration number; U.S. agent if foreign
5. **Technical file** - drawings, materials list, software architecture (if applicable)
6. **Performance data** - bench testing, biocompatibility (ISO 10993), clinical/literature evidence
7. **Proposed labeling** - IFU, package insert, patient materials, packaging artwork

## Submission Sections

### 1. Cover Letter

Address to appropriate CDRH division. Include device trade name + common name, 510(k) type, predicate (name, manufacturer, K-number), pathway justification (why 510(k) vs. PMA), submitter contact with establishment registration, and U.S. agent if foreign manufacturer.

### 2. FDA Form 3514

Complete all fields: applicant legal name and FDA registration number, trade name + common name, product code / regulation number / panel / class, submission type (original or resubmission with prior K-number), 510(k) type, disclosure election (Summary or Statement), contact info, and signature block with authorized representative.

### 3. Device Description

Enable reviewer comprehension without physical examination:

- Physical characteristics, size, weight, configuration, Materials, flag patient-contacting materials with ISO 10993 status, Operating principles and mechanism of action, Software/firmware, cybersecurity, AI/ML components (if applicable)
- Energy source and safety controls (if applicable)
- Sterility method and SAL (if sterile)
- Novel features, each must be addressed in SE comparison

Reference engineering drawings, cross-sections, and annotated photos.

### 4. Intended Use & Indications for Use

- **Intended use** - general purpose, broad clinical condition
- **Indications** - patient population, specific conditions, anatomical site, selection criteria
- **Contraindications** - patients/conditions where device should not be used

Critical: IU language must be identical across labeling, submission, and Form 3514. Any divergence from predicate IU requires justification. Every indication must be supported by performance data.

### 5. Substantial Equivalence Comparison

Present as side-by-side table comparing subject vs. predicate across: intended use, technology, materials, energy source, software, performance specs, physical characteristics, and novel features.

For each parameter, state Same or Different with analysis. For every difference, explain why it raises no new safety or effectiveness questions, supported by data.

**Split predicate**: If using multiple predicates, justify. At least one must share the same intended use.

### 6. Performance Data

Present in order:

1. **Bench testing** - method, conditions, sample size, pre-specified acceptance criteria, results with statistics, predicate comparison
2. **Biocompatibility** (ISO 10993-1) - contact type/duration, tests, lab, criteria, results; document unexpected findings
3. **Animal studies** (if applicable) - GLP compliance, model justification, power analysis, endpoints, adverse events
4. **Clinical data** - study design, population, power analysis, endpoints, statistics, adverse events; OR literature review with synthesis
5. **Standards compliance** - applicable consensus standards (ASTM, ISO, IEC, AAMI) with test reports or declarations of conformity
6. **FDA guidance compliance** - cite device-specific guidance documents followed

Each data set must link to a specific SE comparison point or IFU claim.

### 7. Labeling Package

Required components (21 CFR Part 801):

- IFU, setup, technique, troubleshooting, maintenance, Package insert, indications, contraindications, warnings, Patient labeling (if applicable) - lay language, Device/packaging labels, name, manufacturer, lot/serial, sterilization indicators, ISO 15223-1 symbols, storage, expiration, Rx statement if prescription device, Sterilization info if sterile, method, SAL, package integrity, Symbol glossary

IFU indications must exactly match submission indications.

### 8. Truthful and Accurate Statement

Per 21 CFR 807.87(k). Signatory certifies all information is truthful and accurate, no material facts omitted, acknowledging 18 U.S.C. § 1001 penalties. Include printed name, title, signature, and date. Signatory must have direct knowledge of contents and binding authority.

### 9. 510(k) Summary or Statement

**Summary** (21 CFR 807.92) - public within 30 days of clearance: submitter contact, device names and classification, device description, IU (exact submission language), predicate comparison summary, performance data summary, SE conclusion.

**Statement** (21 CFR 807.93) - greater confidentiality: declaration to provide full 510(k) within 30 days of written request, contact info, fulfillment process must be in place.

## Pitfalls and Checks

- Cross-reference all sections for consistency in device description, IU language, and performance claims, Verify predicate is currently legally marketed and not subject to Class III order, Consider Pre-Submission (Q-Sub) for novel aspects or pathway uncertainty, Electronic submissions must comply with 21 CFR Part 11 for signatures, Flag proprietary/trade-secret content when choosing Summary vs. Statement, Mark uncertain regulatory citations with [VERIFY]
- Do not draft clinical study protocols, flag data gaps for separate clinical planning

## Scotland/UK Adaptation

This skill is drafted for the US FDA 510(k) Premarket Notification pathway under 21 CFR Part 807. The UK (including Scotland) has a substantially different medical device regulatory framework.

### Core Concept Conversion

| US Concept | UK/Scottish Equivalent |
|---|---|
| FDA (Food and Drug Administration) - CDRH | **MHRA** (Medicines and Healthcare products Regulatory Agency) - Devices Division |
| 510(k) Premarket Notification | **UKCA marking** (UK Conformity Assessed) for medical devices; **MHRA registration** of devices placed on Great Britain market |
| 21 CFR Part 807 (establishment registration and device listing) | **Medical Devices Regulations 2002 (SI 2002/618)** as amended, retained EU Medical Devices Directive (MDD)/Active Implantable Medical Devices Directive (AIMDD). Transitioning to UK MDR 2025 regime |
| PMA (Premarket Approval) - Class III | **UK MDR conformity assessment** - Notified Body review (UK Approved Bodies) |
| Predicate device / substantial equivalence | No direct equivalent, UKCA route requires **conformity assessment** against **General Safety and Performance Requirements (GSPRs)** |
| FDA Form 3514 | No direct equivalent, MHRA uses **device registration portal** (via MHRA Submissions Portal) |
| 21 CFR Part 11 (electronic records) | **UK GMP Annex 11** / **MHRA guidance on software and AI as a medical device** |
| Q-Sub (Pre-Submission) | **MHRA Innovation Accelerator** / **Early Access to Medicines Scheme (EAMS)** for devices |
| ISO 10993 (biocompatibility) | **ISO 10993** - same standard applies (international), but MHRA may expect UK-specific interpretation |
| IS0 15223-1 (symbols) | **ISO 15223-1** - same international standard |
| 18 U.S.C. § 1001 (false statements) | **Fraud Act 2006** / **Regulatory Enforcement and Sanctions Act 2008** - MHRA enforcement powers |

### UK Medical Devices Regulatory Framework (for Scotland)

1. **Post-Brexit**: The UK established its own medical device regulatory regime. The **Medical Devices Regulations 2002 (SI 2002/618)** remain in effect (retained EU law), with amendments.
2. **UKCA marking**: From 2025 (delayed), medical devices placed on the Great Britain market must bear UKCA marking (UKNI marking for Northern Ireland). Currently, CE marked devices continue to be accepted.
3. **UK Approved Bodies**: Unlike the US, the UK uses **Notified Bodies (UK Approved Bodies)** for conformity assessment of medium/high-risk devices.
4. **MHRA registration**: Manufacturers must register their devices and themselves with the MHRA via the MHRA submissions portal.
5. **Scotland-specific**: There is no separate Scottish medical device regulator. MHRA is UK-wide. However, **NHS Scotland** (Health Boards) may have local processes for device adoption and procurement. **NHS National Services Scotland (NSS)** manages procurement.

### Key Differences for Practitioners

| Aspect | US (510k) | UK (UKCA / MDR 2002) |
|--------|-----------|----------------------|
| **Pathway** | Demonstrate substantial equivalence to a predicate device | Conformity assessment against GSPRs; Notified Body review for Class IIa/IIb/III |
| **Submission format** | eCopy / CDRH Portal | MHRA Submissions Portal / DITEX |
| **Review timeline** | 90 calendar days (510(k)) from acceptance | Up to 60 days for registration review; conformity assessment timelines vary by UK Approved Body |
| **Clinical evidence** | Performance data as needed for SE | Clinical evaluation per **MEDDEV 2.7/1 Rev.4** / UK equivalent guidance |
| **Quality system** | 21 CFR 820 / ISO 13485 (transitioning) | **ISO 13485** + UK MDR Annex IX/X/XI requirements |
| **Post-market surveillance** | 21 CFR Part 803 (MDR), Part 806 (corrections/removals) | **UK PMS** (Post Market Surveillance) under MDR 2002; **MHRA adverse incident reporting** |
| **Fees** | FDA user fees (small business discounts) | MHRA registration fees (lower than FDA for most device types) |
| **Labeling** | 21 CFR Part 801 | UK MDR Annex I (GSPRs on labeling) / UK EHRC accessibility requirements |

### Clinical Trial / Investigation Requirements

| US Term | UK Equivalent |
|---------|---------------|
| IDE (Investigational Device Exemption) | **MHRA Clinical Investigation Notification** for investigational devices under UK MDR |
| IRB approval | **REC (Research Ethics Committee)** approval via HRA / NRES Scotland |
| Informed consent (research) | **The Medicines for Human Use (Clinical Trials) Regulations 2004** / **HRA consent framework** |

### Recommended Approach

- Use this skill's **structural methodology** (assembling submission components, ensuring consistency, tracing claims to evidence) but convert every US FDA reference to MHRA / UK MDR 2002 equivalents.
- Replace all FDA form references with MHRA submissions portal requirements.
- **The substantial equivalence model does not exist in the UK** - the framework is conformity assessment against GSPRs. This skill's predicate-analysis methodology is not directly transferable.
- For UKCA marking, the skill's approach to performance data, labeling, and quality documentation is broadly transferable, but the regulatory gateway is different.
- All financial references should be in **GBP (£)**.
- Mark all statutory citations as `[VERIFY]` - UK MDR regulations are in transition (2025 new regime) and may be amended.
- Scotland-specific: **Scottish Health Boards** (NHS Scotland) use the **Scottish Health Technologies Group (SHTG)** for health technology assessment, which is relevant for device adoption in the Scottish NHS.

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
