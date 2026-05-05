---
name: witness-prep-session
language: en
description: Runs ethics-compliant witness preparation workflows for Scottish civil litigation. Use when preparing party, fact, expert, or corporate witnesses for proof (trial) in the Sheriff Court or Court of Session, including precognition briefing, affidavit review, vulnerability mapping, day-of logistics, and post-proof debrief. Covers intake through proof under Ordinary Cause Rules (OCR) and Court of Session Rules. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Witness Preparation (Scotland)

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

Ethics-compliant witness preparation workflow from intake through proof day. Scope is limited to precognition and memory-refresh, never script answers or feed facts.

## Quick Start

Gather before first session:

- Citation / summons or notice to lodge, Witness identity, role, type (party / fact / expert / corporate rep)
- Case management order: timetable, witness list, lodging dates, Precognitions on record, affidavits, productions, privilege boundaries, Case theories, weaknesses, and key adverse topics, Venue rules (OCR / RCS / Simple Procedure rules)

## Intake Packet

```
Case:
Court (Sheriff Court / Court of Session):
Proof date:
Witness name / role / type:
Risk topics:
Known documents:
Known contradictions:
Prior precognition sources:
Privilege-sensitive areas:
Corporate rep topics (if applicable):
Session length constraints:
```

## Session Model

| Profile | Sessions | Structure |
|---|---|---|
| Straightforward fact witness | 1 | 4 to 6 h consolidated |
| Standard matter (default) | 2 | 2×(2 to 4 h), 1 to 7 day gap |
| Complex or anxious witness | 3 | 2 to 3 h each, targeted coaching |
| Corporate representative | 2 to 3 | Topic-by-topic for each area of evidence |
| High-volume productions | 2 to 3 | Add dedicated document walkthrough |

## Core Workflow

### 1. Orientation and Document Review (Session 1)

- Set expectations: truth-only, no guessing, admit uncertainty, Explain proof mechanics: oath/affirmation, transcript, objections, judge or jury, Explain Scottish procedure: evidence on oath, productions lodged in process, examination-in-chief, cross-examination, re-examination, Establish behavioural rules: wait for full question, clarify if unclear, answer only what is asked, pause before answering, say "I don't know / recall" when true, Walk all core productions; record familiarity in a tracking table:

```
Doc | Production No. | Role (Author/Recipient/Ref) | Significance | Witness Understanding | Risks
```

- Map each topic: why it matters, what witness recalls, high-risk subtopics, Review precognition or affidavit for consistency, Assign homework: review flagged docs, note concerns

### 2. Mock Examination (Session 2)

- Recheck anxiety, document review completion, new recollections, Run mock examination with real productions and escalating pressure: warm-up, topic exploration, document confrontation, detail probing, commitment questions, impeachment setups, Coach live on common problems:

| Problem | Correction |
|---|---|
| Answers before question finishes | "Wait for the full question." |
| Volunteers extra facts | "Answer only what was asked." |
| Speculates | "Say you don't know if that's true." |
| Defensive tone | "Stay calm, short, direct." |

- Drill objection handling: objections are counsel's job; witness continues answering unless the judge intervenes

### 3. Day-of Support

- 30-min pre-proof check: stress level, final questions, logistics, During proof: narrow non-coaching observations only; break strategy without substantive coaching; monitor fatigue, Post-proof: emotional debrief only, no factual deconstruction until transcript review

## Deliverables

- **Witness Preparation Memo**: sessions held, docs reviewed, topics with risk ratings, vulnerable areas and mitigation, ethics compliance confirmation
- **Document Review List**: table of all reviewed productions with familiarity status
- **Topic Readiness Table**: strength, limitations, evidence anchors per topic
- **Day-of Checklist**: arrival, attire, productions, court logistics, breaks, lunch
- **Problem Areas Summary**: anticipated vulnerabilities, fallback strategies, rehabilitation viability

## Ethics Guardrails

- Preparation must stay within truth-telling coaching and recollection refresh, Use vulnerability mapping to prioritise difficult topics, not to script answers, Document all prep decisions for file hygiene and credibility, Never feed facts the witness does not independently know, Never suggest conforming testimony or tone-harmonising language to match other evidence, Never discuss privileged strategy beyond authorised scope, Legal anchors: Law Society of Scotland Practice Rules [VERIFY]; Ordinary Cause Rules ch. 29 to 30; Court of Session Rules ch. 36 to 38
- Prefer court-specific customs (Sheriff Court / Court of Session) over generic defaults for productions, affirmations, and privilege assertions

## Scotland/UK Adaptation

- **No US-style depositions**: Scotland uses precognitions (written witness statements taken by a solicitor, not sworn, not generally admissible) and affidavits (sworn written evidence). There is no equivalent of FRCP 30 deposition procedure.
- **Court terminology**: "Proof" replaces "trial" in civil cases. "Productions" replace "exhibits." "Process" replaces "docket/case file."
- **Witness citation**: Witnesses are called by citation (formal notice to attend) or by joint agreement. Failure to attend without justification may result in a warrant for apprehension.
- **Rule references**: Use Ordinary Cause Rules (SI 1993/1956, as amended) for Sheriff Court, and Rules of the Court of Session 1994 (SI 1994/1443, as amended) for Court of Session.
- **Corporate witnesses**: No direct equivalent of FRCP 30(b)(6). Corporate representatives give evidence on their own knowledge of company affairs.
- **Criminal procedure** (not covered here): separate precognition system under Criminal Procedure (Scotland) Act 1995.

[SCOTS: Note] There is no direct Scottish equivalent to the US deposition. The skill's core coaching methodology applies to proof preparation. Precognition differs from deposition in that it is not taken on oath and is not generally admissible as evidence; it serves as a solicitor's working document for case preparation.

## Related Skills

- `witness-statement-precognition` - precognition techniques under Scots law
- `witness-preparation-ethics` - ethical limits on witness preparation in Scotland
- `courtroom-advocacy-scotland` - examination techniques in Scottish courts
- `affidavit-drafting-scotland` - sworn written evidence preparation

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
