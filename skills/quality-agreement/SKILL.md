---
name: quality-agreement
language: en
description: Drafts Quality Agreements for pharmaceutical contract manufacturing. Assigns quality roles between product owners and CMOs under FDA cGMP (21 CFR 210/211), ICH Q7, and related guidance. Use when a user needs a quality agreement, CMO quality terms, or cGMP compliance agreement for contract manufacturing. [Atticus UK/Scots refined]
tags:
- agreement, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Quality Agreement for Contract Manufacturing

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

Drafts an enforceable Quality Agreement defining quality roles, responsibilities, and cGMP compliance obligations between a product owner and a contract manufacturing organization (CMO).

## Prerequisites

1. **Manufacturing/supply agreement** - commercial terms, product scope, facility details
2. **Regulatory identifiers** - FDA Establishment IDs, DUNS, DEA registrations (if controlled), ISO certs
3. **Product details** - dosage form, API/finished product, classification (Rx, OTC, biologic)
4. **Existing quality documents** - prior quality agreements, SOPs, inspection history (483s, warning letters)
5. **Specifications** - approved specs, analytical methods, stability protocols

Search user-uploaded documents for existing agreements, specs, and regulatory correspondence before drafting.

## Output Structure

| Section | Key Contents |
|---------|-------------|
| Parties & Scope | Legal names, regulatory IDs, product scope, exclusions, quality-over-commercial supremacy clause |
| Definitions | Regulatory terms, party-specific roles |
| Quality Unit Authority | Responsibility matrix (see below), independence provisions, escalation paths |
| Manufacturing & Documentation | Batch records, retention per 21 CFR 211.180, Part 11 compliance |
| Change Control | Categories, approval workflows, review timelines (see below) |
| Audit & Inspection | Routine/for-cause/unannounced rights, 483 response coordination |
| Quality Events & CAPA | Deviation reporting, investigation, CAPA approval, recall authority |
| Specifications & Release | Method validation (ICH Q2), OOS investigations, stability programs |
| Personnel & Training | Qualifications, training programs, key personnel change notice |
| Term & Termination | Duration, termination rights, transition obligations, survival clauses |
| Appendices | Change control forms, deviation templates, quality metrics, contacts |

### Quality Unit Responsibility Matrix

| Function | Product Owner | CMO |
|----------|:---:|:---:|
| Final batch disposition | ● | |
| In-process controls execution | | ● |
| Specification approval | ● | |
| Deviation investigation | | ● |
| Deviation report approval | ● | |
| Regulatory submissions | ● | |
| Environmental monitoring | | ● |
| Equipment qualification | | ● |
| Change control approval (major) | ● | |
| Complaint handling (mfg-related) | | ● |
| Recall decision authority | ● | |

### Notification Timelines

| Event | Deadline |
|-------|----------|
| Critical quality event (safety/regulatory) | 24 hours |
| Significant quality event | 72 hours |
| Routine quality event | 5 business days |
| Unannounced regulatory inspection | 4 hours |
| Announced regulatory inspection | 24 hours |
| Key personnel change | 30 days advance |

### Change Control Framework

| Category | Examples | Approval | Review Period |
|----------|----------|----------|---------------|
| Minor | Admin SOP updates, like-for-like equipment | CMO QU (notify owner) | 15 business days |
| Major | Critical process params, alt. suppliers, method revisions | Product owner QU written approval | 30 business days |
| Emergency | Immediate safety/compliance | CMO implements → retrospective owner approval | Immediate |

Change proposals must include: description, scientific justification, risk assessment (FMEA/ICH Q9), validation protocols if applicable, regulatory impact analysis, implementation timeline.

### Audit Rights

- **Pre-approval** - before manufacturing initiation
- **Routine** - ≤24-month intervals, 30 days advance notice
- **For-cause** - triggered by quality events or regulatory concerns
- **Unannounced** - preserved right for serious quality/regulatory concerns
- **Scope** - unrestricted access to batch records, validation reports, deviations, training records, personnel interviews, facility inspection
- **Post-audit** - report within 30 days; CMO CAPA response within 15 business days

### Batch Records & Documentation

- Contemporaneous recording (indelible ink or validated electronic systems)
- Complete material genealogy and traceability, CMO initial review: 5 to 10 business days post-batch completion, Product owner QU review: 10 to 15 additional business days before disposition, Retention: ≥1 year past expiry or 3 years post-distribution (whichever longer) per 21 CFR 211.180
- Part 11 compliance: system validation, audit trails, data integrity controls

### Termination & Transition

- **Non-renewal notice**: ≥180 days before term expiry
- **Material breach cure**: 60 days from written notice
- **Convenience termination**: 180 to 360 days advance notice
- **Post-termination**: CMO supports product through shelf life (stability, reserve samples, complaints, inspections)
- **Document transfer**: Complete batch records and quality documentation within 90 days
- **Survival**: Confidentiality (indefinite), record retention (regulatory periods), regulatory support (while product in distribution)

## Guidelines

- Use mandatory language ("shall," "must") - never aspirational ("should," "will")
- Include explicit quality-over-commercial supremacy clause; quality decisions independent from commercial considerations, Align with FDA 2016 Guidance: Contract Manufacturing Arrangements for Drugs: Quality Agreements [VERIFY]
- Address data integrity per FDA 2018 Data Integrity and Compliance with Drug CGMP guidance [VERIFY]
- For international markets, incorporate ICH Q7, EU GMP Annex 11, WHO guidelines as applicable, Include cybersecurity provisions for manufacturing systems and confidential regulatory data, Quality agreement governs all quality matters; ensure no conflict with underlying supply agreement, If user provides 483s or warning letters, incorporate preventive measures addressing cited deficiencies

## Scotland/UK Adaptation

This skill is drafted for FDA-regulated US pharmaceutical manufacturing. When adapting for the UK (including Scotland), apply the following conversions:

### Regulatory Framework

| US Concept | UK Equivalent |
|---|---|
| FDA (Food and Drug Administration) | **MHRA** (Medicines and Healthcare products Regulatory Agency) |
| FDA Establishment ID / DUNS | **MIA (Manufacturer's/Importer's Licence)** number; UK site master file references |
| DEA registration (controlled substances) | **Home Office** Controlled Drugs Licence; Advisory Council on the Misuse of Drugs |
| 21 CFR 210/211 (cGMP) | **SI 2012/1916** (Human Medicines Regulations 2012) and **EU GMP Guide** (Volume 4, EudraLex) as retained UK law; **MHRA GMP Standards** |
| 21 CFR Part 11 (electronic records) | **UK GMP Annex 11** (Computerised Systems) - retained version with MHRA guidance on data integrity |
| FDA 483 / Warning Letter | **MHRA Critical/Major/Other** inspection findings; **MHRA Notice of Non-Compliance** |
| FDA recall authority | **MHRA recall and suspension powers** under Human Medicines Regulations 2012; coordinated via **MRHA** regional teams |
| EPA (environmental) | **SEPA** (Scottish Environment Protection Agency) or **EA** (England/Environment Agency) |

### Batch Documentation & Retention

| US Requirement | UK/Scottish Equivalent |
|---|---|
| Retention: 1 yr past expiry or 3 yrs post-distribution (21 CFR 211.180) | UK: retain for **5 years post-expiry** (or longer for biological/immediate release products per MHRA guidance) |
| Part 11 data integrity | UK: MHRA Data Integrity Guidance (2016); GMP Annex 11 on computerised systems applies |

### Licensing & Authorisation

| US Concept | UK Equivalent |
|---|---|
| FDA drug application (NDA/ANDA) | **UK Marketing Authorisation (MA)** via MHRA (national) or via EU procedures (centralised/decentralised pre-Brexit) |
| FDA Establishment registration | **Manufacturer's Licence (MIA)** for UK manufacture; **Wholesale Dealer's Licence (WDA)** for distribution |
| Investigational product (IND) | **Clinical Trial Authorisation (CTA)** via MHRA; **Health Research Authority** (HRA) for ethics |
| Qualified Person (QP) - not US-specific | **QP certification** per SI 2012/1916 - mandatory for UK batch release; QP is a legal requirement in the UK, distinct from US practice |

### Post-Brexit Considerations, EU GMP Annex 16 (QP certification) no longer directly applicable; UK maintains its own QP certification regime
- **MHRA International Recognition Procedure (IRP)** - may rely on inspections by certain comparable regulators, UK now operates an independent Mutual Recognition Agreement (MRA) framework with EU/EEA for GMP inspections, Scotland-specific: MHRA Scotland (Edinburgh / Glasgow) offices; SEPA for environmental compliance

### Inspection & Audit
| US Term | UK/Scottish Equivalent |
|---|---|
| FDA inspection | MHRA GMP inspection; frequency risk-based (typically 2-3 yearly) |
| 483 response timeline (15 days) | MHRA: response within **10-15 working days** for Critical findings; "Notice of Remedial Action" expected |
| Warning Letter | MHRA Notice of Non-Compliance / Suspension/Cancellation of Licence |
| Regulatory meeting (FDA type A/B/C) | MHRA regulatory advice meetings; scientific advice |

### Key Practitioner Differences
1. UK agreements must reference **UK GMP** (retained EU GMP) rather than 21 CFR.
2. A **Qualified Person (QP)** is a mandatory UK role for batch certification and release, include QP responsibilities explicitly in the Quality Unit Responsibility Matrix.
3. MHRA inspections are increasingly unannounced (initiative introduced 2023-2024). Contract language should permit unannounced or short-notice MHRA inspections.
4. The quality agreement should designate UK version of ICH Q9/Q10/Q12 as applicable (retained EU versions).
5. Scottish courts (Sheriff Court / Court of Session) would govern disputes; choose Scottish governing law if the CMO or product owner is Scotland-based.
6. For UK-wide agreements, MHRA is the single regulator. Scotland does not have a separate medicines regulator.

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
