---
name: bail-hearing-summary [SCOTS]
language: en
description: Generates structured bail hearing summaries from transcripts and case documents, extracting charges, arguments, conditions, and rulings. Use when summarising bail hearings, remand decisions, bail appeals, or release condition orders in Scottish criminal procedure. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bail Hearing Summary [SCOTS]

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

Produces a structured summary of a bail hearing for quick reference by defence agent, Crown, or judiciary. Extracts charges, Crown/defence arguments, bail conditions, risk factors, and the court's ruling. Adapted for Scottish criminal procedure under the Criminal Procedure (Scotland) Act 1995.

## Prerequisites

1. Charging documents, complaint (summary) or indictment (solemn procedure) with statutory citations
2. Hearing transcript, minute, or sheriff's note
3. Accused background, criminal history, previous bail breaches, previous failure to appear
4. Party submissions, Crown and defence bail arguments, if available

## Quick Start

1. Gather all source documents (complaint/indictment, transcript, submissions)
2. Build the header block with case identifiers
3. Extract charges into the charges table
4. Summarise Crown and defence arguments by category
5. Document the court's ruling, bail conditions (if granted), or remand to custody
6. Note upcoming diets and pending motions

## Output Structure

### Header Block

| Field | Content |
|---|---|
| Case Name | *HM Advocate v. [Accused]* |
| Court | High Court of Justiciary / Sheriff Court (solemn or summary) |
| Case Number | Court reference / PF reference |
| Hearing Date | |
| Judicial Officer | Sheriff / Judge |
| Crown Counsel | Procurator Fiscal depute / Advocate Depute |
| Defence Agent | Solicitor / Advocate / Solicitor-Advocate |

### Charges

| Count | Statutory provision | Offence | Type | Venue |
|---|---|---|---|---|
| 1 | e.g. s.47 Criminal Justice and Licensing (Scotland) Act 2010 | | Summary / Solemn | |

### Crown Arguments

Organise under these categories:

- **Flight / failure to appear risk** - previous bail breaches, out-of-Scotland connections, travel documents, financial resources
- **Risk of offending while on bail** - s.23(3) Criminal Procedure (Scotland) Act 1995; nature of charges, previous convictions
- **Risk of interference with witnesses/jury** - s.23(3)(b) - threats, contact with complainers, attempted influence
- **Bail request** - conditions sought (standard, enhanced, special) or Crown opposition to bail (remand motion)

### Defence Arguments

Organise under these categories:

- **Community ties** - residence stability in Scotland, employment, family responsibilities
- **Mitigating factors** - limited record, cooperation with police, health conditions, age, dependency
- **Proposed conditions** - standard conditions, enhanced, special conditions as alternative to remand
- **Bail request** - specific conditions offered; application for bail under s.23

### Court Ruling

| Element | Detail |
|---|---|
| Bail granted / remanded in custody | |
| Conditions (if granted) | List below |
| Court's stated reasoning | |
| Judicial finding on exceptional circumstances (if applicable) | |

**Bail conditions (standard)** - implied by s.23(8):
- Appear at every diet, Not commit any offence while on bail, Not interfere with witnesses or otherwise obstruct the course of justice

**Bail conditions (enhanced/standard)** - court may also impose:
- Reporting requirements (to police station)
- Travel restrictions / curfew, Electronic monitoring (tagging)
- No-contact orders (complainer, witnesses, co-accused)
- Residence requirement or exclusion zone, Surrender of passport / travel documents, Deposit or caution (financial security)
- Other special conditions as court sees fit

If bail **refused** - note remand to custody and reasoning (e.g. risk of failure to appear, offending on bail, witness interference). Note whether appeal to High Court is available or pending.

### Upcoming Dates & Procedural Notes

- Next diet and purpose (e.g. first examination / intermediate diet / trial)
- Filing deadlines, Bail appeal pending (to High Court of Justiciary)
- Application for review of bail conditions (s.30)

## Pitfalls & Checks

- **No advocacy** - present facts and arguments as stated; do not draw legal conclusions
- **Quote key statements** - use direct quotes for significant judicial findings or counsel statements
- **Attribute all facts** - tie every assertion to its source document
- **Jurisdiction awareness** - verify which statutory provisions applied (Criminal Procedure (Scotland) Act 1995 ss.23-32; note recent amendments). **Never assume English jurisdiction.**
- **Length** - target 2 to 4 pages depending on hearing complexity
- **Scannability** - use headings, tables, and bullet lists throughout
- **Bail appeal** - note that a bail decision by a sheriff may be appealed to the High Court by the accused or the Crown (s.32)

---

## Scotland/UK Adaptation

This skill is adapted from US bail hearing procedure to Scottish criminal procedure:

| US Concept | Scottish Equivalent |
|------------|-------------------|
| People/State/United States v. [Defendant] | HM Advocate v. [Accused] |
| Bail Reform Act 18 U.S.C. § 3142 | Criminal Procedure (Scotland) Act 1995 ss.23-32 |
| Pretrial detention / bond | Remand in custody / bail with caution |
| Indictment / information | Indictment (solemn) or complaint (summary) |
| Prosecution counsel | Procurator Fiscal depute / Advocate Depute |
| Defense counsel | Defence agent / solicitor / advocate / solicitor-advocate |
| Release on recognizance (ROR) | No direct equivalent; bail may be granted on written undertaking |
| Surety / Bail bondsman | Caution (financial deposit paid to court) - no commercial bondsman |
| Conditions (e.g. GPS monitoring) | Enhanced / special conditions (electronic monitoring, exclusion zones) |
| FTA (failure to appear) | Breach of bail under s.27 (offence) |
| USD | GBP (£) |
| Federal vs. state courts | High Court of Justiciary / Sheriff Court / Sheriff Appeal Court |
| FRE 3142 factors | Statutory bail tests under s.23(3) - risk of: FTA, offending, interference |

## Concepts with No Direct Scottish Equivalent [FLAGGED]

- **Bail bondsmen / commercial surety** - not permitted in Scotland; caution deposited with court
- **ROR (release on recognizance)** - no equivalent concept; Scottish system grants bail with or without conditions
- **Bail Reform Act factors** - replaced by different statutory tests under the 1995 Act
- **Pre-trial services / bail supervision agencies** - limited equivalents; CJSW bail supervision in some areas
- **Deposition** - no Scottish equivalent; precognition interview instead

**[SCOTS] All US statutes, court structures, terminology, and procedures replaced with Scottish equivalents under the Criminal Procedure (Scotland) Act 1995.**

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
