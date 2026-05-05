---
name: spoliation-letter
language: en
description: Drafts evidence preservation demand letters for civil litigation in Scotland. Generates case-specific evidence itemisation, preservation demands, compliance deadlines, and sanctions warnings. Use when sending preservation demands, litigation hold notices, or spoliation letters in pre-litigation or early commission and diligence phases in Scottish civil proceedings. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, letter, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Preservation Letter (Scotland/UK Adaptation)

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

Generates a formal letter establishing the opposing party's duty to preserve evidence and creating a record supporting future applications for sanctions or adverse inferences in Scottish civil proceedings. [SCOTS: Note] Scots law does not recognise an independent tort of spoliation. The concept is adapted to the Scottish framework: the court's inherent power to draw adverse inferences from failure to preserve evidence, and the duty of disclosure/loyalty owed to the court (including sanctions under the court's nobile officium in limited circumstances).

## Prerequisites

Gather before drafting:

- **Parties** - full legal names, addresses, known agents/solicitors
- **Incident** - date (DD/MM/YYYY), location, nature of incident and injuries
- **Known evidence** - specific items already identified (CCTV, vehicles, products, records, productions)
- **Case type** - personal injury (pursuer), property damage, professional negligence, or other civil subcategory
- **Jurisdiction** - Sheriff Court or Court of Session (determines procedure and available sanctions)

## Quick Start

1. Collect party and incident details from intake documents
2. Identify case type to select evidence categories
3. Draft letter following the required sections below
4. Tailor evidence itemisation with case-specific items from documents
5. Send via recorded delivery (Royal Mail Signed For); concurrent email if address known
6. [SCOTS: Note] In Scotland, pre-litigation preservation demands are typically sent by a solicitor to the proposed defender or their insurers. A formal specification of documents (order for commission and diligence) may follow if preservation is refused.

## Required Letter Sections

### 1. Opening, Representation & Notice

- Identify solicitor/firm and client, State date, location, and general nature of incident, Do NOT disclose work product or litigation strategy
- [SCOTS: Note] Use "Pursuer" for your client and "Defender" for the opposing party if litigation is anticipated

### 2. Legal Duty to Preserve

- Demand preservation of all relevant evidence, State the duty arises once litigation is reasonably anticipated (the Scottish courts recognise a duty not to destroy relevant evidence once proceedings are in contemplation)
- Require immediate suspension of routine destruction/retention policies, Require litigation hold across all custodians
- [SCOTS: Note] While there is no Scottish statutory spoliation regime, the court may draw adverse inferences from the destruction of evidence (Lord President Hope in *McGlinn v. Clark* 1993 and subsequent case law). The court also has inherent powers to sanction a party who destroys evidence in breach of a duty to preserve.

### 3. Evidence Itemisation (Case-Type Specific)

Select and tailor from applicable categories:

| Case Type | Key Categories |
|---|---|
| **Personal injury (Accident)** | CCTV footage (camera locations + time window), incident/accident reports, maintenance/inspection logs, prior complaints, repair records, photographs, health & safety policies, risk assessments, personal protective equipment (PPE) records |
| **Road traffic accident** | Dashcam footage, vehicle maintenance records, driver logs/driver's hours, employment/training records, mobile phone records, GPS data, tachograph data, MOT/test records |
| **Product liability** | Product and exemplars, design specs, testing/QA records, prior complaints/recalls, modification history, marketing materials, regulatory submissions (MHRA where applicable) |
| **Professional negligence** | Files, correspondence, attendance notes, advices, instructions, time records, relevant documents held by the professional or their firm |
| **All cases** | Emails, texts, instant messages, social media, internal communications, photographs/video, insurance files, personnel/training files, policies and procedures, financial and business records |

Always append catch-all: "any other documents, data, or tangible items potentially relevant to [Pursuer's] claims."

### 4. Electronic Evidence Specifics

- Demand preservation of metadata, backup systems, cloud storage, archived data, Name specific systems/platforms if known, Require preservation in native or load-ready format
- [SCOTS: Note] E-disclosure in Scottish litigation is governed by the Court of Session Practice Note No. 1 of 2020 (Electronic Disclosure in Commercial Actions). The Sheriff Court has less formalised e-disclosure practice.

### 5. Consequences of Non-Compliance

[SCOTS: Note] Scots law does not provide for punitive sanctions in the US spoliation sense. State the following consequences available to the Scottish courts:

- The court may draw adverse inferences from the destruction or failure to preserve relevant evidence, The court may grant a commission and diligence for recovery of documents if preservation is refused, The court has inherent power to sanction parties for abuse of process or conduct prejudicing the fair administration of justice, Failure to preserve may found an application for expenses (costs sanction) against the non-complying party, In extreme cases, the court may dismiss defences or grant decree in default, Non-compliance with a court order for recovery of documents may constitute contempt of court

### 6. Compliance Demand

- Written confirmation within **14 days** (adjust for urgency)
- Must identify: (a) preservation steps taken, (b) persons responsible for compliance, (c) scope of preservation hold

### 7. Closing & Signature Block

- Solicitor/advocate name, firm, address, phone, email, practising certificate number
- [SCOTS: Note] Include the solicitor's practising certificate number and the firm's regulatory details (Law Society of Scotland registration number)

## Letter Template

```
[DATE]

Via Recorded Delivery
[Also via email: ___]

[RECIPIENT NAME]
[TITLE]
[COMPANY/ENTITY]
[ADDRESS]

Re: Duty to Preserve Evidence - [PURSUER] v. [DEFENDER]
    Date of Incident: [DD/MM/YYYY]
    Location: [LOCATION]

Dear Sirs,

[OPENING, representation, incident identification]

[LEGAL DUTY, preservation obligation in contemplation of litigation]

[EVIDENCE LIST, case-specific itemisation]

[ELECTRONIC EVIDENCE, ESI-specific demands]

[CONSEQUENCES, available court sanctions]

[COMPLIANCE DEADLINE - 14 days, written confirmation]

Please note that we are authorised by our client to raise proceedings in the [Sheriff Court at ___ / Court of Session] if this matter cannot be resolved.

Yours faithfully,

[SOLICITOR NAME]
[FIRM NAME]
[ADDRESS]
[TEL] | [EMAIL]
[Practising Certificate No.]
[Firm Regulation No. / Law Society of Scotland Registration]
```

## Pitfalls and Checks

- **No work product disclosure** - never reveal legal theories, damages calculations, or strategy
- **No independent spoliation tort** - [SCOTS: Note] Unlike some US states, Scotland does not recognise an independent civil cause of action for spoliation. The remedy lies in adverse inferences and court sanctions, not in a standalone claim.
- **Specificity drives sanctions** - supplement generic categories with case-specific items from documents; broad enough for coverage, specific enough for clear notice
- **Tone** - professional and firm, not adversarial or threatening
- **Timing** - send as early as possible; delay weakens any application for court sanction
- **Multiple custodians** - if evidence is held by multiple entities (e.g., property owner + managing agent + insurer), send separate letters to each
- **Proof of service** - use Royal Mail Recorded Delivery / Signed For; concurrent email recommended
- **Commission and diligence** - if preservation efforts fail, the next step is to apply for a specification of documents and commission and diligence for recovery of documents (Court of Session / Sheriff Court procedure)
- **Data protection** - ensure preservation demands do not breach UK GDPR/Data Protection Act 2018 (legitimate interest or legal proceedings exemption likely applies)
- **Legal professional privilege** - be careful not to demand privileged documents inadvertently; mark any privileged material excluded

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law

**Changes made:**
- Replaced entire US spoliation tort framework with Scottish law: no independent spoliation tort; remedies through adverse inferences, court's inherent power, and commission and diligence, Replaced FRE/Federal Rules references with Scottish evidence practice, Replaced US state-specific spoliation standards with uniform Scottish approach (with Sheriff Court/Court of Session distinction)
- Replaced US case type categories with Scottish personal injury/property/professional negligence equivalents, Replaced certified mail with Royal Mail Recorded Delivery / Signed For, Replaced bar number with Scottish practising certificate number and firm regulatory details, Replaced US sanctions (adverse inference instruction, dismissal, default, independent tort, punitive damages) with Scottish-equivalent sanctions (adverse inferences, decree in default, expenses sanction, contempt of court)
- Added reference to Court of Session Practice Note on electronic disclosure, Replaced FRE 803(6) business records foundation with Scottish law of evidence (best evidence rule, hearsay under the Civil Evidence (Scotland) Act 1988)
- Added UK GDPR/data protection considerations, Added specification of documents / commission and diligence procedure as follow-up remedy

**Key Scottish/UK considerations:**
- No independent tort of spoliation in Scots law, remedies are through court's inherent power and adverse inferences, The Civil Evidence (Scotland) Act 1988 relaxed some hearsay rules but best evidence principles still apply to documentary productions, Commission and diligence is the Scottish equivalent of US discovery of documents, applied for after proceedings commence, Practice Note No. 1 of 2020 governs e-disclosure in the Court of Session Commercial Court, Data protection considerations under UK GDPR/Data Protection Act 2018 apply to preservation demands, Legal professional privilege in Scotland is analogous but has distinct rules (privilege against self-incrimination narrower in civil proceedings)
- Expenses (costs) sanctions are more commonly used than in the US system, No punitive damages available

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
