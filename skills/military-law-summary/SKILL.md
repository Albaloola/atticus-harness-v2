---
name: military-law-summary [SCOTS]
language: en
description: Generates structured summaries of UK service law matters including court martial proceedings under the Armed Forces Act 2006, summary hearings, Service Civilian Court cases, administrative discharges, and appellate decisions. Trigger when a user needs a reference summary of a UK military justice proceeding, Court Martial Appeals Court decision, Summary Hearing, or service regulation issue for legal officers, command staff, or UK military legal practitioners. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Military Law Summary, UK/Scotland [SCOTS]

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

Produces a standalone structured summary of a UK military law matter, court martial, summary hearing, Service Civilian Court proceeding, regulatory issue, or appellate decision, for legal officers, command staff, and practitioners.

**Important distinction:** UK service law applies to all regular forces and reserves of the Royal Navy, Army, and Royal Air Force, and applies UK-wide including Scotland. The Armed Forces Act 2006 provides a single system of service law for all three services. Scottish criminal law applies to service offences committed in Scotland only where the Armed Forces Act 2006 does not have exclusive jurisdiction.

## Quick Start

1. Collect source materials: Court Martial decisions, Court Martial Appeal Court (CMAC) judgments, summary hearing records, Armed Forces Act 2006 provisions, Queen's Regulations for the relevant service branch, Manual of Service Law (MSL) guidance, administrative records.
2. Identify matter details: service branch, rank/status, proceeding type (summary hearing, Court Martial, Service Civilian Court, administrative discharge, appellate review).
3. Produce the summary using the output structure below.

## Output Structure

### 1. Header Block

| Field | Content |
|---|---|
| Matter | Case name or regulatory matter identifier (e.g., court martial listing number) |
| Service Branch | Royal Navy / Army / Royal Air Force / Strategic Command |
| Personnel | Rank, service number, role |
| Proceeding Type | Summary Hearing / Court Martial / Service Civilian Court / Administrative Discharge / Appellate Review / Regulatory |
| AFA 2006 Sections | Charged sections (e.g., s.42 (criminal conduct), s.20 (desertion), s.340 (disobedience)) |
| Disposition Date | Date of decision or action |
| Reviewing Authority | CMAC / Court Martial / Summary Hearing Officer / Convening Authority / Other |

### 2. Factual Background

- Core facts in chronological order, Relevant military context (unit, deployment status, operation name, command relationship)
- Nature of alleged offences or regulatory issues

### 3. Procedural History

- Charges preferred and referred (under s.121 AFA 2006)
- Mode of trial: summary hearing or Court Martial; plea entered, Findings by section and specification, Sentence imposed (types: custodial, dismissal, reduction in rank, fine, service detention, reprimand/severe reprimand, service community order)
- Post-trial action: confirmation of sentence, Commanding Officer action, Appellate history (Summary Appeal Court, CMAC, UK Supreme Court if applicable)

### 4. Legal Analysis

Per significant issue:

- **Issue**: Framed as a question
- **Standard of review**: Quashing conviction s.33 AFA 2006 (CMAC), appeal against finding/sentence
- **Controlling authority**: AFA 2006 section, MSL provisions, binding precedent (CMAC, UKSC)
- **Reasoning**: How authority was applied to facts
- **Holding**: Outcome (conviction quashed, sentence varied, appeal dismissed)
- **Dissents/concurrences**: Key reasoning if any

Note divergence from civilian criminal law where relevant, particularly in Scotland (where civilian criminal procedure differs from England, e.g., no 12-person jury; 15-person jury in High Court).

### 5. Elements and Evidence (Offence Cases)

| Element | Evidence Presented | Sufficiency |
|---|---|---|
| {Element} | {Key evidence} | Proved / Not proved |

### 6. Administrative Matters (If Applicable)

- Applicable standard (characterisation of service, administrative discharge, retention)
- Deference afforded to military decision-makers under AFA 2006
- Collateral consequences: pension, veteran status, employment impact

### 7. Practical Implications

- Effect on future practice and command guidance, Changes to established precedent within the service justice system, Unresolved questions or anticipated developments under the next Armed Forces Act renewal, Actionable takeaways for legal advisers and commanding officers

## Pitfalls and Checks

- **Citations**: Use standard UK format, Armed Forces Act 2006 sections (s.42, AFA 2006), Manual of Service Law (MSL Ch. 6), Court Martial Appeal Court judgments (*R v Smith* [2020] EWCA Crim 123, or *H v Ministry of Defence* UKSC). Mark unverified citations with `[VERIFY]`.
- **Do not conflate with civilian procedure**: UK service law is a distinct framework. Flag where service law diverges from UK civilian criminal procedure (commanding officer role, summary hearings, no jury in Court Martial unless directed).
- **Phase awareness**: Identify pre-charge, summary hearing, Court Martial, or appellate posture and tailor analysis accordingly.
- **Constitutional rights in the service context**: Address s.4 AFA 2006 (arrest powers), s.113 (custody without charge, limited to 48 hrs then 96 hrs by Commanding Officer), s.2 Human Rights Act 1998 compatibility, limitations on civilian rights for service personnel (e.g., restrictions on association, movement, expression).
- **Scotland-specific**: If the alleged offence occurred in Scotland or involves Scottish service personnel:
  - Note the interaction between the Armed Forces Act 2006 and the Criminal Procedure (Scotland) Act 1995
  - Court Martial Appeals from Scotland are heard by the CMAC sitting with Scottish judicial representation
  - Service police in Scotland operate under the same PACE-equivalent safeguards modified by service regulations
- **Neutral posture**: Do not advocate; summarise analytically.
- **Standalone completeness**: Summary must be usable without the underlying source documents.

## Scotland/UK Adaptation

### Terminology

| US Term | UK/Scotland Equivalent |
|---|---|
| UCMJ | Armed Forces Act 2006 (AFA 2006) |
| Manual for Courts-Martial (MCM) | Manual of Service Law (MSL) |
| JAG Corps (separate corps) | Army Legal Services / RN Legal / RAF Legal / MOD Legal Advisers |
| CAAF (Court of Appeals for the Armed Forces) | Court Martial Appeal Court (CMAC) |
| Service CCA | No separate Service CCA; CMAC hears all three services |
| Article 15 (NJP) | Summary Hearing (s.118 to 119 AFA 2006) |
| Article 32 hearing (investigation) | Commanding Officer investigation / s.115 AFA 2006 |
| Summary Court-Martial | Abolished; summary hearings handled by Commanding Officer |
| Special Court-Martial | Court Martial (s.154 AFA 2006) |
| General Court-Martial | Court Martial (s.154 AFA 2006) - single tier system |
| Convening Authority | Convening Authority (s.121 AFA 2006) - Judge Advocate General's role |
| Preferral of charges | Charges preferred by Commanding Officer (s.120 AFA 2006) |
| Art. 31(b) rights (military Miranda) | s.4 AFA 2006 / s.48 (right to legal advice) |
| Pre-sentence | Pre-sentence report; no equivalent to "post-trial convening action" |
| Appellate review (CCA → CAAF) | Summary Appeal Court → CMAC → UK Supreme Court |
| Supreme Court (US) | UK Supreme Court (hears CMAC appeals on points of law of general public importance) |
| Flag officer / General officer | Commanding Officer / Senior Officer |
| Unlawful command influence | No equivalent specific doctrine; CO's dual role engaged by Article 6 ECHR / Human Rights Act 1998 |

### Key UK/Scottish Legal Framework

- **Armed Forces Act 2006**: The single-system code for all UK service law. It replaced the three separate service discipline acts (Army Act 1955, Air Force Act 1955, Naval Discipline Act 1957).
- **Manual of Service Law**: Administrative guidance on the operation of the service justice system, the equivalent of the US MCM.
- **Court Martial Appeal Court**: Established by s.28 AFA 2006, hears appeals from the Court Martial (equivalent to CAAF in the US).
- **Summary Appeal Court**: Hears appeals from summary hearings (equivalent to the US appeal from Article 15 NJP, but broader in scope since the UK summary hearing is more formal than NJP).
- **Service Civilian Court**: Handles cases against civilians subject to service discipline (civilians accompanying the forces overseas).
- **Age of service personnel**: UK minimum recruitment age is 16 (with parental consent), and 18 for deployment to operations, relevant for youth justice considerations.
- **Quinquennial renewal**: The Armed Forces Act must be renewed by Parliament every 5 years (s.1 AFA 2006).
- **Scotland-specific**: Service offences alleged to have been committed within Scotland may raise interaction with the Criminal Procedure (Scotland) Act 1995. The Judge Advocate General may direct a Court Martial to sit in Scotland. Scots civilian criminal procedure (solemn/summary) differs from England and Wales.

### Citation Check

Every reference to US military law provisions (UCMJ articles, MCM rules, CAAF opinions) has been replaced with UK/Scottish equivalents (AFA 2006 sections, MSL, CMAC judgments). Mark any unverified UK references with `[VERIFY]`. Flag any US concepts that cannot be cleanly adapted with `[SCOTS: Note]`.

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
