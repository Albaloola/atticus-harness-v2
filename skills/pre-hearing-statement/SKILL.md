---
name: pre-hearing-statement [SCOTS]
language: en
description: Drafts a Pre-Hearing Statement of Proof for personal injury litigation in Scotland. Use when preparing pre-hearing statements, statements of proof, or evidentiary summaries for proof hearings in the Sheriff Court (Simple Procedure or Ordinary Cause), All-Scotland Personal Injury Court, or the Court of Session. [Atticus UK/Scots refined]
tags:
- SCOTS, brief, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Pre-Hearing Statement of Proof, Scotland [SCOTS]

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

Produces a numbered-paragraph pre-hearing submission presenting evidentiary foundation, witness summaries, and legal arguments for a personal injury matter in the Scottish civil courts.

**Applicable tracks:**
- **Simple Procedure** (Sheriff Court) - claims up to £5,000; Personal Injury case cap applies under SI 2016/839 [VERIFY]
- **Ordinary Cause** (Sheriff Court) - claims over £5,000; most personal injury claims
- **All-Scotland Personal Injury Court** - specialist court with jurisdiction over PI claims regardless of value
- **Court of Session (Outer House)** - high-value/complex personal injury actions
- **Personal Injuries Sheriff Court** - dedicated PI procedure under Chapter 36 of the Sheriff Court Ordinary Cause Rules 1993 (as amended)

## Required Inputs

1. **Case identifiers** - name, court case number (Sheriff Court/Court of Session), hearing date (proof/hearing), submitting party (pursuer/defender)
2. **Chronological facts** - key dates, events, parties, relationships
3. **Witness list** - names, contact info, relationship, expected testimony
4. **Documentary evidence** - medical records, photos, correspondence, reports
5. **Medical records** - providers, diagnoses, treatment history, causation opinions
6. **Damages** - itemised breakdown by category and time period (solatium, past/future wage loss, services, expenses)

## Quick Start

1. Gather all required inputs above.
2. Draft each section below using numbered paragraphs throughout.
3. Tie every factual assertion to identified evidence, no unsupported claims.
4. Mark uncertain citations with `[VERIFY]`.
5. Review against the Pitfalls checklist before finalising.
6. Ensure compliance with the relevant Chapter of the Court Rules (OCR 1993 / RCS 1994 / Simple Procedure Rules).

## Document Sections

### I. Introduction

| Element | Content |
|---|---|
| Caption | Case name, court, case number |
| Hearing date | Date, time, location |
| Submitting party | Name, role (pursuer/defender) |
| Nature of claim | Concise description of the dispute (delict / personal injury) |
| Legal basis | Statutes, regulations, or common law grounds, e.g., delict of negligence (Donoghue v Stevenson [1932] AC 562); Occupiers' Liability (Scotland) Act 1960; Road Traffic Act 1988 |
| Remedy sought | Specific remedy or damages (solatium for pain and suffering, past/future wage loss, services, expenses) |

### II. Statement of Facts

- Strict chronological order, Identify all parties and relationships (pursuer, defender, witnesses, employers, medical practitioners)
- Every assertion tied to evidence to be presented at proof, Objective tone building factual foundation for legal position

### III. Issues for Determination

- Frame each disputed question as a precise issue statement, Order logically for the sheriff or judge, Distinguish legal questions from factual disputes, In personal injury cases, include: breach of duty of care; causation; contributory negligence; quantification of damages

### IV. Witness Summary

Per witness:

| Field | Content |
|---|---|
| Name | Full name |
| Contact | Address, phone |
| Relationship | Connection to case |
| Expected testimony | Key facts/opinions to establish |
| Purpose | How testimony supports position |

For **expert witnesses**, add: qualifications, area of expertise, substance of opinions. Note that in Scottish personal injury procedure, expert reports are generally exchanged before proof and may require a joint report under Chapter 36 rule 36.7D (Ordinary Cause) [VERIFY].

### V. Exhibit List (Productions/Inventory)

| Production | Description | Relevance |
|---|---|---|
| 1, 2, 3… | Document type | What it proves |

In Scottish civil procedure, documents are listed in an **Inventory of Productions** and lodged with the court. Organise chronologically or by category. Assign production numbers (not letters). Use Form G10 (OCR) or approved format.

### VI. Medical Proof

- All treating/evaluating medical practitioners, Diagnoses and treatment history (GP records, hospital records, consultant reports)
- Opinions on **causation** and **impairment/disability** - note the distinction between medical and legal causation, Connect to the applicable standard for assessment of solatium (Judicial College Guidelines for Scotland / Scottish Courts guidelines for solatium)
- Persuasive but accurate tone favouring the submitting party, If pursuer: address pre-existing conditions and the "thin skull" rule (*fragile claimant*)

### VII. Legal Argument

- Cite applicable statutes, regulations, case law, delict of negligence, Occupiers' Liability (Scotland) Act 1960, Road Traffic Act 1988, Employer's Liability (Defective Equipment) Act 1969, Damages (Scotland) Act 2011
- Show how evidence satisfies each legal element (duty of care, breach, causation, remoteness of damage)
- Anticipate and rebut likely opposing arguments (e.g., contributory negligence under the Law Reform (Contributory Negligence) Act 1945)
- Reference Schedule of Damages for quantification

### VIII. Damages / Relief Sought

For personal injury in Scotland, itemise:

| Category | Description |
|---|---|
| **Solatium** (pain and suffering) | Past and future; use the Scottish Courts' guidelines / Judicial College for Scotland |
| **Past wage loss** | Net earnings lost to date; deduct benefits |  
| **Future wage loss** | Multiplier/multiplicand method or *Smith v Manchester* / *Blamire* approach |
| **Services** | Services provided by relatives (s.6 Damages (Scotland) Act 2011) / professional care |
| **Expenses** | Medical expenses, travel, adaptations, legal fees |
| **Interest** | Interest on solatium and past losses (Judicial rate varies, currently 8% for past losses, 4% for future solatium, as at June 2025 [VERIFY]) |

Show calculation methodology and time periods. Use **Schedule of Damages** format (Chapter 36 rule 36.8 OCR [VERIFY]).

For non-monetary relief, specify action requested and legal basis.

### IX. Admissions and Agreed Facts

- Facts agreed by both parties (minute of admissions / joint minute)
- Productions admitted without objection, Any narrowing of issues (either by joint minute or judicial case management)

### X. Procedural History

- Prior hearings or procedural steps (options hearings, case management conference, preliminary pleas)
- Relevant commission and diligence / disclosure conducted
- **Never reference settlement discussions** (inadmissible per s.27 Arbitration (Scotland) Act 2010 and common law privilege protecting without-prejudice negotiations)

## Pitfalls

- **Unsupported facts** - every assertion needs identified evidence; no speculation
- **Settlement references** - exclude all without-prejudice communications (inadmissible in Scottish civil proceedings)
- **Unverified citations** - tag with `[VERIFY]`; do not present uncertain authority as definitive
- **Local rule non-compliance** - incorporate the correct Chapter of the Sheriff Court Ordinary Cause Rules 1993, Simple Procedure Rules, or Rules of the Court of Session 1994
- **Missing numbered paragraphs** - all sections must use numbered paragraphs for easy reference
- **No reference to medical records still to be obtained** - only list records already lodged or produced
- **Do not refer to awards in other cases** - solatium is assessed on the facts of this case, not by reference to other awards (though the Judicial College Guidelines for Scotland are used as general guidance)
- **Correct form of action** - confirm whether the claim is by way of personal injuries action under Chapter 36 PI rules or a general ordinary cause

## Scotland/UK Adaptation

### Terminology

| US Term | Scotland/UK Equivalent |
|---|---|
| Plaintiff | Pursuer |
| Defendant | Defender |
| Complaint | Initial Writ (Court of Session) / Summons (Sheriff Court) |
| Answer / Response | Notice of Intention to Defend / Defences |
| Discovery | Commission and diligence / specification of documents |
| Trial (civil) | Proof (civil); Proof hearing |
| Damages | Damages (same term); solatium (pain and suffering) |
| Verdict | Verdict (Court of Session jury) / Interlocutor (sheriff's decision) |
| Motion | Motion (same term, different rules under OCR Chapter 15 / RCS Chapter 23) |
| Summary judgment | Summary Decree (OCR Chapter 17 / RCS Chapter 21) [VERIFY] |
| File (with court) | Lodge / Enroll |
| Settlement agreement | Minute of tender and acceptance / Joint minute |
| Pre-trial conference | Pre-proof conference / Case management conference |
| Exhibit (lettered) | Production (numbered in an Inventory of Productions) |
| Interrogatories | Written questions under commission procedure (rare) |
| Deposition | Evidence on commission (Scots law: examination of witness before court) |

### Key Scottish Statutory Framework

- **Damages (Scotland) Act 2011** - codifies the structure of personal injury damages in Scotland
- **Law Reform (Contributory Negligence) Act 1945** - apportions damages where pursuer contributed to injury
- **Prescription and Limitation (Scotland) Act 1973** - triennium for personal injury (3 years from date of injury / date of knowledge from date of knowledge); 20-year long-stop for latent injury; s.19A judicial discretion to override time bar
- **Occupiers' Liability (Scotland) Act 1960** - duty of care owed by occupiers
- **Employer's Liability (Defective Equipment) Act 1969** - employer liability for defective equipment
- **Requirements of Writing (Scotland) Act 1995** - formal validity of documents (if settlement or evidence is being recorded)
- **Civil Witnesses and Evidence (Scotland) Act 2002** - modernisation of civil evidence rules
- **Personal Injuries (NHS Charges) Regulations 2006** (SI 2006/3309) - recovery of NHS costs (equivalent to US Medicare/Medicaid recovery)
- **Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018** - group proceedings and expenses reform for PI claims in Scotland

### Scottish Court Rules

- **OCR 1993** - Sheriff Court Ordinary Cause Rules (as amended) - Chapter 36 for personal injury actions
- **RCS 1994** - Rules of the Court of Session 1994 - Chapter 43 for personal injury actions, Chapter 42A for All-Scotland Personal Injury Court
- **SSPR 2016** - Simple Procedure Rules (Sheriff Court)
- **Act of Sederunt** - court rules made by the Court of Session

### Citation Check

Every reference to US civil procedure (FRE 408, state-court rules, FED rules, state equivalents) has been replaced with Scottish equivalents (OCR 1993, RCS 1994, Civil Evidence (Scotland) Act 1988, s.27 Arbitration (Scotland) Act 2010). Mark any unverified Scottish references with `[VERIFY]`. Ensure all references to US-specific legal concepts (FRE, Cal. Code Civ. Proc., FED rules) are replaced.

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
