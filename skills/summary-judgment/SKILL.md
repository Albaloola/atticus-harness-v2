---
name: summary-judgment
language: en
description: Produces structured summaries of summary judgment motions, orders, and decisions under UK/Scottish civil procedure. [SCOTS] Adapted for Scottish courts, uses "summary decree" terminology. Use when the user needs to summarise a summary decree ruling, prepare a case status report, evaluate appeal posture, or brief a client on a dispositive motion outcome under Scottish civil procedure. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, motion, summarisation, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Summary Decree Analysis (Scotland)

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

Structured summary of a summary decree motion (Scotland/UK equivalent of summary judgment), order, or decision for rapid assessment without reading the full document.

[SCOTS: Note] In Scotland, the equivalent of US summary judgment is **summary decree** in ordinary cause proceedings (Rule 19, Ordinary Cause Rules 1993). The terminology, procedure, and legal tests differ from US FRCP 56. English law uses "summary judgment" under CPR Part 24 with different tests again. This skill is adapted for Scottish procedure.

## Required Inputs

1. Summary decree document (motion, opposition, reply, and/or court interlocutor/opinion)
2. Case caption and court reference number
3. Jurisdiction (Sheriff Court Ordinary Cause / Court of Session)

## Quick Start

1. Identify the motion type (Summary decree / Partial summary decree / Cross-motions), moving party, and disposition.
2. Extract undisputed material facts; flag genuine disputes.
3. Map each claim or defence to the court's ruling and reasoning.
4. Identify surviving issues for proof (trial).
5. Assess practical implications: appealability, proof scope, relief, deadlines, settlement impact.

## Output Structure

### 1. Executive Overview

| Field | Content |
|-------|---------|
| Case caption | Full caption with court reference number |
| Court | Sheriff Court (which sheriffdom) or Court of Session (Outer House) |
| Motion type | Summary decree motion / Partial summary decree / Cross-motions |
| Moving party | Name and role (pursuer or defender) |
| Disposition | Granted / Denied / Granted in part |
| Date | Date of interlocutor |

Follow with a 2 to 3 sentence plain-language summary of the ruling and its bottom-line effect.

### 2. Undisputed Material Facts

List facts the court deemed established (chronological or thematic). Flag:
- Genuine disputes → mark **DISPUTED**
- Evidentiary rulings excluding evidence, Credibility determinations that influenced the outcome

### 3. Claims/Defences Addressed

For each claim or defence ruled upon:

| Element | Detail |
|---------|--------|
| Claim/Defence | Name and legal basis |
| Legal standard | Statute, rule, or common-law test |
| Key authority | Primary cases/statutes relied on |
| Moving party's burden | How the court assessed the initial burden |
| Non-movant's response | Whether genuine issues of material fact were raised |
| Ruling | Granted/Denied with reasoning |

### 4. Surviving Issues

- Claims or defences remaining for proof (trial)
- Unresolved factual disputes, Conditions or limitations (e.g., leave to amend)

### 5. Practical Implications

| Question | Answer |
|----------|--------|
| Final/appealable? | Immediately appealable (sheriff principal / Sheriff Appeal Court / Inner House) or interim |
| Proof scope | Issues proceeding to proof |
| Relief granted | Dismissal, decree entry, damages, expenses (legal costs), interdict (injunction) |
| Deadlines/obligations | Immediate compliance requirements |
| Settlement impact | How the ruling shifts leverage |

## Pitfalls and Checks

- **Accuracy over brevity** - never mischaracterise holdings; distinguish undisputed facts from legal conclusions.
- **Burden-shifting** - always trace whether the movant met the initial burden (summary decree is granted only if no defence has a reasonable prospect of success, Rule 19.1 OCR).
- **Jurisdiction** - note Sheriff Court Ordinary Cause rules (OCR 1993) vs. Court of Session (RCS 1994); flag jurisdiction-specific standards.
- **Standard of review** - note the standard applied (all inferences to non-movant; "no real prospect of success" test under OCR 19.1/RCS 21.1).
- **No editorial opinions** - do not predict appeal outcomes or insert strategy unless specifically requested.
- **Ambiguity** - when the court's reasoning supports multiple interpretations, acknowledge rather than choose one.
- **Citations** - reference page/paragraph numbers or court roll/folio references from the source for quick verification.
- **Judicial expenses**: Scottish courts award expenses (costs) to the successful party. Note any expenses findings in the decree.

## Scotland/UK Adaptation

**Status**: Done, fully adapted for Scottish civil procedure.

### Key Changes from US Version

| US Term | Scottish Equivalent |
|---|---|
| Summary Judgment | Summary Decree |
| Motion for Summary Judgment (MSJ) | Motion for Summary Decree |
| Federal Rule of Civil Procedure 56 | Ordinary Cause Rule 19 (Sheriff Court) / Rule of Court of Session 21.1 |
| Moving party / Non-movant | Pursuer / Defender (or "moving party" and "responding party") |
| Trial | Proof |
| Judgment | Decree / Interlocutor |
| Plaintiff / Defendant | Pursuer / Defender |
| Complaint / Answer | Initial Writ / Defences |
| Discovery | Commission and diligence / Disclosure |
| Attorneys' fees | Judicial expenses (follow success - "loser pays" rule) |
| Punitive / treble damages | Not available in Scots law |
| Federal court | Court of Session (supreme civil court) / Sheriff Court |
| District court | Sheriff Court (with sheriffdoms: Glasgow & Strathkelvin, Grampian Highlands, Lothian & Borders, etc.) |
| Court of Appeals | Sheriff Appeal Court / Inner House |
| US Supreme Court | UK Supreme Court (final appeal for civil cases) |
| Celotex / Anderson / Matsushita trilogy | Context v Bannigan [2008] CSOH 10; Jamieson v HNA [2011] CSOH; Rayner v DAS [2014] CSOH)
| No evidence / insufficient evidence | "No real prospect of success" test (OCR 19.1 / RCS 21.2(1)(a)) |
| Affidavits | Written statements / affidavits (same term, but procedural differences on lodging and cross-examination) |
| Evidentiary hearing | Hearing on motion (usually on papers, oral hearing discretionary) |

### Summary Decree Procedure (Scotland)

**Sheriff Court Ordinary Cause** (OCR Rule 19):
- A party may apply for summary decree at any time after defences have been lodged, Court grants decree if it appears that the defender has **no defence to the claim, or no defence other than as to the amount of damages** (OCR 19.1)
- Test: "no real prospect of success" - similar to UK CPR Part 24 test, Supporting affidavit (or written statement) required, If dispute only as to quantum, decree can be granted for liability with a proof on quantum

**Court of Session** (RCS Rule 21.1):
- Same test as OCR: "no real prospect of success"
- Applications enrolled by motion to the Outer House judge, May be granted on the whole or part of the claim

**Differences from US FRCP 56:**
- No formal "burden-shifting" framework (Celotex trilogy)
- Scottish test is whether defence has "no real prospect" - broader discretion, No discovery equivalent before summary decree in Scotland (commission and diligence is more limited)
- Evidentiary standard is lower, court looks at pleadings and any supporting statements

### Appeals

| Court | Route |
|---|---|
| Sheriff Court summary decree | Appeal to Sheriff Appeal Court (or sheriff principal for procedural/interlocutory matters) |
| Court of Session summary decree | Reclaiming motion to Inner House → UK Supreme Court (with permission) |
| Appeal test: Sheriff Appeal Court / Inner House reviews sheriff's exercise of discretion, must show error of law or procedural irregularity |

### Forms

- See `scots-forms/` directory for:
  - Scottish Courts and Tribunals Service, Ordinary Cause Forms index
  - ScotCourts Simple Procedure Forms (Form 3A claim, Form 3B response) - for reference on Scottish civil procedure format
  - [SCOTS: Note] Summary decree motions use Form Oxx series (OCR) - specific motion forms filed online via Scottish Courts portal

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
