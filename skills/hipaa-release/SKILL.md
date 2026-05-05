---
name: hipaa-release
language: en
description: Drafts a consent to disclose medical/health information form compliant with UK GDPR / Data Protection Act 2018 and the Common Law Duty of Confidentiality, equivalent to a HIPAA release authorisation. Covers subject access requests, nominated person access, welfare attorney access under Adults with Incapacity (Scotland) Act 2000, and third-party medical report consent. Use when drafting patient consent to share health records, medical information release forms, or authorisations alongside welfare powers of attorney in Scotland. [Atticus UK/Scots refined]
tags:
- SCOTS healthcare, consent, data-protection, medical-records, UK-GDPR, AWI, Scotland, SCOTS, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Consent to Disclose Medical Information, Scotland/UK

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

[SCOTS: Note] This skill adapts a US HIPAA release authorisation (45 CFR § 164.508) for the UK legal framework. There is no direct UK equivalent to the HIPAA authorisation form. Instead, medical records release in Scotland is governed by: (1) UK GDPR / Data Protection Act 2018 (Subject Access Requests, Art 15 UK GDPR); (2) Common Law Duty of Confidentiality; (3) Access to Health Records Act 1990 (deceased patients); (4) Adults with Incapacity (Scotland) Act 2000 (welfare attorneys); and (5) Access to Medical Reports Act 1988 (insurance/employment reports). The output is a single execution-ready consent form with all patient-specific fields marked in `[BRACKETS]`.

Drafts a consent-to-disclose form for medical health information, typically executed alongside a welfare power of attorney or advance directive under Scots law.

## Prerequisites

Gather before drafting:

1. **Patient info** - full legal name, DOB (or CHI number in Scotland), address
2. **Authorised person(s)** - names and relationships (primary + successor); note whether they hold welfare power of attorney
3. **Cross-reference document** - Welfare Power of Attorney certificate number (if applicable, registered with Office of the Public Guardian Scotland)
4. **Jurisdiction** - Scotland / England / Wales / NI (different incapacity laws)
5. **Scope instructions** - categories of information to include/exclude; whether to include mental health (as defined by Mental Health (Scotland) Act 2003), sexual health, genetic information
6. **Purpose of disclosure** - healthcare decision-making, litigation support, insurance report, family access

## Form Sections

Generate all sections in order:

| # | Section | Key Content |
|---|---------|-------------|
| 1 | Title | "Consent to Release / Disclose Medical Information" |
| 2 | Patient Identification | Full legal name, DOB, CHI number, address; statement: "I consent to the disclosure of my medical/personal health information as described in this form." |
| 3 | Authorised Recipients | Each person by name and relationship: `[Name], [relationship, e.g., spouse, welfare attorney]`; include successors and specific authority basis (e.g., Welfare Power of Attorney Act reference) |
| 4 | Disclosing Parties | "Any health professional, GP practice, hospital, clinic, NHS Health Board in Scotland, laboratory, pharmacy, or other healthcare provider that holds my medical records or has provided treatment or services to me." |
| 5 | Scope of Information | Default comprehensive: complete medical records, clinical notes, correspondence, test results, imaging, prescribing records, GP records, hospital discharge summaries, and specialist reports. Option to specify limitations. |
| 6 | Special Category Information | [SCOTS: Note] In the UK, mental health records, sexual health, abortion-related information, and genetic information may require explicit specific consent beyond general health records. Flag Scotland-specific rules. |
| 7 | Purpose | "To enable my nominated person(s) / welfare attorney(s) to make informed decisions about my healthcare on my behalf, communicate with my healthcare providers, and access all information necessary to execute their duties." |
| 8 | Duration | Effective from date of signing until: (a) written revocation; (b) specific end date; or (c) death (Access to Health Records Act 1990 applies post-death for personal representatives). State whether authority continues during incapacity. |
| 9 | Revocation Rights | Patient may revoke consent at any time in writing. Revocation does not affect disclosures made in good faith before receipt of revocation. |
| 10 | Additional Statements | Right to refuse to sign (treatment not conditional on this consent unless required by law); right to a copy of the signed consent form; right to access own records via Subject Access Request (Art 15 UK GDPR) |
| 11 | Execution Block | Patient signature, printed name, date. Personal representative / welfare attorney block (name, OPG registration number, signature, date). Witness lines if required (recommended for welfare attorney consent forms). |

## UK GDPR / Data Protection Act 2018 Compliance Notes

Unlike the US HIPAA authorisation with six mandatory statements, the UK framework relies on the following principles:

- **Lawful basis for processing**: Consent (Art 6(1)(a) UK GDPR) or Legitimate Interests (Art 6(1)(f)) - consent is the safer basis for third-party access to medical records
- **Special Category Data (Art 9)** - health data processing requires explicit consent (Art 9(2)(a)) or substantial public interest (Art 9(2)(g))
- **Individual rights**: Art 15 (right of access), Art 17 (right to erasure), Art 18 (right to restriction)
- **Record of processing**: health records must be maintained with access logs under DPA 2018
- **Data Protection Officer (DPO)**: NHS Scotland health boards; contact via patient services

### Key differences from HIPAA:

| HIPAA | UK Law |
|---|---|
| Six mandatory § 164.508 statements | No statutory form; rely on UK GDPR Art 7 conditions for consent |
| Right to revoke in writing (same) | Same, plus right to erasure under Art 17 |
| Re-disclosure not federally protected | Re-disclosure restricted by common law confidentiality + DPA 2018 |
| Treatment not conditioned on authorisation | Treatment not conditional on consent unless required by law |
| Respond to revocation quickly | Respond within 1 month (standard SAR timeline) |

## Special Category Considerations (Scotland)

| Category | Legal Basis | Additional Requirements |
|----------|-------------|------------------------|
| Mental Health (Scotland) | Mental Health (Care and Treatment) (Scotland) Act 2003 | Nominated person has access rights; specific consent recommended |
| Sexual health / abortion | Common law confidentiality; Gillick competence | Explicit consent strongly recommended; consider separate form |
| Genetic information | UK GDPR Art 9; Human Tissue (Scotland) Act 2006 | Explicit consent needed; note for insurance/life decisions |
| HIV status | Common law; professional guidance | Explicit specific consent recommended |
| Substance use | No equivalent to 42 CFR Part 2 in UK | Common law governs; explicit consent recommended |
| Deceased patient records | Access to Health Records Act 1990 | Personal representatives may access; will be bound by confidentiality |
| Incapacitated adult | Adults with Incapacity (Scotland) Act 2000 | Welfare attorney appointed under AWI Act 2000 may access; must act in adult's best interests |

## Drafting Rules

- All placeholders use `[BRACKETS]` with descriptive labels, Cross-reference welfare attorney details against OPG Scotland register, Plain language with legal precision; use numbered sections, Include welfare attorney certificate/registration reference field if applicable (AWI Act 2000)
- Footer: "This is a legal document. Independent legal advice is recommended before execution."
- For Scotland-specific forms, reference the Adults with Incapacity (Scotland) Act 2000 and the Office of the Public Guardian, Do not include regulatory explanations in the form itself, keep it execution-ready, If jurisdiction known, tailor witness requirements; if unknown, include optional blocks with guidance notes

## Scotland/UK Adaptation

This skill has been adapted from a US HIPAA Release Authorization form.

### Key changes

| US (HIPAA) | UK/Scotland |
|---|---|
| HIPAA Privacy Rule (45 CFR § 164.508) | UK GDPR / Data Protection Act 2018 |
| Protected Health Information (PHI) | Personal Data / Special Category Health Data |
| Covered Entity | Data Controller (NHS Health Board, GP practice) |
| Business Associate | Data Processor |
| HHS Secretary oversight | ICO (Information Commissioner's Office) |
| Psychotherapy notes (separate authorisation) | Mental health records, Mental Health (Scotland) Act 2003 |
| 42 CFR Part 2 (substance abuse) | No equivalent; common law confidentiality governs |
| HIPAA authorisation for healthcare agent(s) | Welfare Power of Attorney (AWI Act 2000); Nominated Person (MH Act 2003) |
| HIPAA authorisation survives incapacity | Welfare Power of Attorney continues during incapacity by operation of law |
| HIPAA mandatory six statements | No equivalent; consent conditions per UK GDPR Art 7 |
| Federal law governs | Scots law / UK GDPR |
| Notary / witnesses per state law | Witnessing recommended but not required (unless POA deed) |

### Key Scottish Legislation

| Legislation | Role |
|---|---|
| Data Protection Act 2018 / UK GDPR | Primary data protection framework |
| Adults with Incapacity (Scotland) Act 2000 (asp 4) | Welfare powers of attorney; medical treatment decisions |
| Mental Health (Care and Treatment) (Scotland) Act 2003 (asp 13) | Nominated person; mental health records access |
| Access to Health Records Act 1990 (c 23) | Access to records of deceased patients |
| Access to Medical Reports Act 1988 (c 28) | Insurance/employment medical report consent |
| Human Tissue (Scotland) Act 2006 (asp 4) | Genetic information, tissue use |
| Patient Rights (Scotland) Act 2011 (asp 5) | Patient feedback and rights |
| Age of Legal Capacity (Scotland) Act 1991 (c 50) | Gillick competence for minors |

### Forms / Guidance

Download relevant Scottish medical records consent forms into `scots-forms/`:
- **NHS Scotland GP Practice Consent to Share Information templates** - via NHS Inform
- **Office of the Public Guardian Scotland (OPG)** - https://www.publicguardian-scotland.gov.uk/
- **Mental Welfare Commission for Scotland** - https://www.mwcscot.org.uk/
- **Access to Health Records (Scotland)** - NHS Scotland guidance
- **BMA Scotland consent templates** - https://www.bma.org.uk/
- **Scottish Government welfare power of attorney forms** - https://www.gov.scot/

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
