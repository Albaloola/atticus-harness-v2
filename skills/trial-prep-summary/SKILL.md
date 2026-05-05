---
name: trial-prep-summary
language: en
description: Generates a structured courtroom-ready trial preparation summary synthesising procedural history, facts, legal issues, evidence, productions witnesses, and strategy into a quick-reference document for Scottish civil proceedings. Trigger when preparing trial (proof) binders, pre-proof review documents, courtroom reference materials, or proof strategy memos in Scottish civil litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Proof Preparation Summary (Scotland/UK Adaptation)

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

Synthesises case materials into a single courtroom-ready reference organised for rapid access during examination (examination-in-chief, cross-examination), submissions, and tactical decisions in Scottish civil proceedings. [SCOTS: Note] Civil trials in Scotland are called "proofs." Jury trials exist only in the Court of Session for specific actions (personal injury, defamation) - most civil cases are proof before a sheriff sitting alone or a judge alone.

## Required Inputs

1. **Pleadings** - initial writ/summons, defences (notice of intention to defend, defences), counterclaims (if any), adjustments and amendments
2. **Recovery of documents** - commission and diligence productions, specification of documents, recovered documents
3. **Precognitions / witness statements** - precognitions (written statements of evidence in Scottish practice) or formal witness statements
4. **Expert reports** - joint expert reports or party-appointed expert opinions
5. **Motions & orders** - procedural motions, preliminary pleas, rulings on relevancy, specification, or time bar
6. **Inventory of productions** - lodged productions with page numbers
7. **Witness list** - anticipated witnesses for both parties (pursuer and defender)

## Quick Start

1. Collect all inputs above
2. Build sections 1 to 9 below in order
3. Cite every assertion to production number, precognition cite, or page reference
4. Mark uncertain legal citations `[VERIFY]`
5. Use tables over prose throughout
6. [SCOTS: Note] Scottish practice distinguishes between "proof before answer" (where both relevancy and facts are at issue) and "proof" (facts only). Confirm which applies.

## Output Sections

### 1. Case Overview

| Field | Content |
|-------|---------|
| Caption | Full case caption (A.B. v C.D.) - use "Pursuer" and "Defender" |
| Court / Sheriff / Judge | Court (Sheriff Court / Court of Session), sheriff or judge name |
| Proof date | Date(s), estimated duration |
| Causes of action | Claims/pursuer's craves with statutory or delictual/common law basis |
| Burden of proof | Party bearing burden per crave/Defence |
| Relief sought | Damages figures, specific implement, declarator, interdict, expenses |

### 2. Procedural History

Reverse-chronological table of significant procedural steps:

| Date | Event | Order/Ruling | Impact on Proof |
|------|-------|--------------|-----------------|

Flag pending motions, unresolved late productions, deferred evidential rulings, and approaching deadlines (adjustment, lodging of productions, exchange of expert reports, pre-proof conference).

### 3. Factual Narrative

- **Chronology table** - date, event, source (production no., precognition cite), disputed/undisputed
- **Undisputed facts** - admissions on record (by adjustment procedure), agreed facts (joint minute of admissions)
- **Disputed facts** - competing versions with supporting evidence for each side
- [SCOTS: Note] In Scottish proof, facts are established by parole evidence (oral testimony) and productions (documentary evidence). There is no formal "request for admissions" equivalent (use adjustments to pleadings or joint minutes).

### 4. Element Mapping

One table per crave / defence (repeat for multi-crave cases):

| Element | Governing Law / Authority | Our Evidence | Their Evidence | Strength (1 to 5) |
|---------|--------------------------|--------------|----------------|-----------------|

Per crave, also note: burden of proof (balance of probabilities, or higher for certain matters: criminal standard applies to specific issues), authority for each element, key distinguishing cases.

### 5. Productions Inventory

| Production No. | Description | Proposer | Foundation / Authentication | Anticipated Objections | Competence & Relevancy Status |
|----------------|-------------|----------|----------------------------|------------------------|-------------------------------|

Flag productions needing formal adoption in evidence, business record authentication (Civil Evidence (Scotland) Act 1988 s.2 - hearsay provisions), or prior commission and diligence recovery.

[SCOTS: Note] Scottish productions are numbered consecutively by the party lodging them (e.g., P1 to P50 for Pursuer, D1 to D30 for Defender). All productions must be lodged in process within the timetable period. Late productions require a motion for leave.

### 6. Witness Summaries

Per witness:

| Field | Content |
|-------|---------|
| Name / Role | |
| Calling party | Pursuer / Defender / Joint |
| Key topics | |
| Favorable precognition cites | Precognition page/line |
| Impeachment material | Prior inconsistent statements (s.5 Civil Evidence (Scotland) Act 1988), prior convictions, bias, interest |
| Availability | Voluntary / citation / warrant for apprehension if required |
| Hearsay risks | If precognition includes hearsay, flag (s.2 Civil Evidence (Scotland) Act 1988 allows hearsay but weight is subject to challenge) |

Separate fact witnesses from expert witnesses. For experts add: opinions offered, expertise/professional qualifications, methodology, competing expert evidence.

[SCOTS: Note] In Scotland, precognitions are not typically lodged as evidence in their own right, they are working documents from which the witness gives oral evidence. The witness's precognition is not disclosed to the opposing party (confidential) unless the witness adopts it. Dual party experts are increasingly used in Court of Session personal injury actions.

### 7. Preliminary Pleas / Motions Tracker

| Plea/Motion | Raised By | Subject | Status | Impact if Sustained | Impact if Repelled |
|-------------|-----------|---------|--------|---------------------|--------------------|

[SCOTS: Note] Scottish procedure uses "pleas-in-law" - legal propositions stated at the end of the pleadings. Typical preliminary pleas: no jurisdiction, time bar (prescription), irrelevancy, lack of specification. These may be heard as a preliminary proof ("proof before answer").

### 8. Damages / Relief Analysis

- **Damages model** - judicial guidelines (Judicial College Guidelines for Scotland for PI), existing valuations (actuarial reports); supporting productions
- **Solatium / past loss / future loss** - [SCOTS: Note] Scottish PI damages are structured as: (1) solatium (pain and suffering, one award covering past and future), (2) past wage loss (patrimonial loss), (3) future wage loss (multiplied by actuarial multiplier), (4) services (nursing, personal care), (5) other outlays
- **Damages table** - head of claim, amount claimed, evidence, vulnerabilities
- **Specific implement / interdict** - terms sought, legal standard, factual predicates
- **Expenses** - basis of expenses (judicial expenses follow success); time-based account or fixed costs; summary cause / simple procedure fixed costs
- **[SCOTS: Note]** No punitive damages. Aggravated damages available in delict for conduct injuring dignity; exemplary damages very limited

### 9. Strategic Assessment

- **Case theory** - one-paragraph narrative for the sheriff/judge
- **Strongest arguments** - ranked with supporting productions/citations
- **Key vulnerabilities** - candid weaknesses with mitigation strategies
- **Anticipated opposing themes** - defender's narrative and rebuttal points
- **Proof flow** - suggested witness order, examination-in-chief priorities, cross-examination targets
- **Contingencies** - if-then scenarios for adverse evidential rulings ("no case to answer" motion), unexpected testimony, or late productions
- **[SCOTS: Note]** Be prepared for the "no case to answer" submission at close of pursuer's evidence (principle from *McDonald v. Western* 2004 - sheriff may sustain submission if insufficient evidence in law)

## Pitfalls

- **Unsourced assertions** - every fact must cite production number, precognition page/line, or agreed minute paragraph
- **Stale citations** - mark all legal citations `[VERIFY]` unless confirmed current and jurisdictionally on-point (Scots law changes, check for recent Inner House or UKSC decisions)
- **Advocacy creep** - maintain neutral analytical tone; flag weaknesses candidly
- **General legal summaries** - skip principles the advocate/solicitor already knows; focus on case-specific application
- **Missing evidence challenges** - always note whether a best evidence objection, hearsay challenge, or competence objection is pending or viable
- **Terminology** - use Scots legal terminology throughout (pursuer/defender, craves, condescendence, pleas-in-law, productions, precognitions, proof, expenses, reclaiming motion)
- **No punitive damages** - never include punitive/exemplary damages in relief analysis

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law

**Changes made:**
- Replaced all US court terminology with Scottish equivalents (proof for trial, pursuer/defender, crave, condescendence, pleas-in-law, productions, precognitions)
- Replaced complaint/answer with initial writ/summons and defences, Replaced FRCP/evidence references with Scottish civil procedure rules (Court of Session Rules 1994, Ordinary Cause Rules)
- Replaced Daubert standard with Scottish expert evidence rules (no formal Daubert, admissibility on competence and relevancy; weight is matter for the court)
- Replaced FRE 803(6) business records with Civil Evidence (Scotland) Act 1988 hearsay provisions, Replaced interrogatories/RFP with specification of documents and commission and diligence, Replaced motions in limine with preliminary pleas-in-law and procedural motions, Replaced jury instructions with Scottish jury practice (limited to Court of Session) and judge-alone procedure, Replaced damages structure with Scottish solatium/patrimonial loss framework, Replaced attorneys' fees with judicial expenses (costs follow success)
- Replaced US-style discovery plan with Scottish adjustment/production timetables, Replaced exhibit lists with inventories of productions, Replaced default judgment with decree in default, Added Scottish "no case to answer" submission at close of pursuer's case, Converted all US dollar amounts to GBP

**Key Scottish/UK considerations:**
- Civil proof procedures differ between Sheriff Court (Ordinary Cause/Simple Procedure) and Court of Session (Chapter 42/43 rules) - ensure the skill matches the correct court, Jury trials only available in Court of Session for personal injury, defamation, and certain other actions, not in Sheriff Court civil proofs, No punitive damages; limited aggravated/exemplary damages, Precognitions are confidential (not disclosed to opponent) - distinct from US deposition transcripts, Productions must be lodged within timetable deadlines, late productions require a motion and may be refused, Expenses (costs) follow success, the losing party pays the successful party's judicial expenses, taxed by the Auditor of Court, Prescriptive periods: 5 years for delict (3 years for personal injury) under Prescription and Limitation (Scotland) Act 1973
- Standard of proof: balance of probabilities (civil); beyond reasonable doubt applies only to criminal matters (but note: some civil matters like fraud may require higher degree of probability)
- Hearsay is admissible under s.2 Civil Evidence (Scotland) Act 1988 but its weight is a matter for the court, In the Court of Session, Inner House appeals are by reclaiming motion; Sheriff Appeal Court hears appeals from Sheriff Court

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
