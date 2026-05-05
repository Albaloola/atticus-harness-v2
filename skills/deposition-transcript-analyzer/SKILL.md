---
name: deposition-transcript-analyzer
language: en
description: 'Analyses proofs, affidavits, commission and diligence examinations, and precognitions to extract litigation work product including executive summaries, testimony indexes, admission compilations, impeachment maps, credibility assessments, summary decree/trial designations, and follow-up checklists. Use when reviewing witness statements, precognitions, or court-ordered examinations for case strategy, summary decree preparation, proof preparation, or post-examination analysis in Scottish civil litigation. Triggers: witness statement analysis, transcript review, precognition analysis, testimony index, admissions, impeachment, proof designations, commission and diligence examination review. [Atticus UK/Scots refined]'
tags:
- drafting, analysis, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Witness Statement / Transcript Analyzer, Scotland

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

Extracts and organises witness testimony, from precognitions, affidavits, commission and diligence examinations, and court-ordered interrogatories, into structured work product for summary decree motions, proof (trial), and case strategy in Scottish civil litigation.

**[SCOTS: Note]** Scottish civil procedure does not use US-style oral depositions as of right. Evidence gathering uses different mechanisms:
- **Precognition** - informal solicitor interview of prospective witness (privileged work product)
- **Affidavit** - sworn written statement used in summary decree, family, and judicial review proceedings
- **Commission and diligence** - court-ordered recovery of documents and examination of witnesses (usually post-proof hearing)
- **Interrogatories** - written questions (limited use in Scotland; more common in Simple Procedure via written statements)
- **Proof** - the trial/hearing at which oral evidence is led

This skill adapts the US deposition analysis workflow for these Scottish equivalents.

## Prerequisites

1. Completed witness statement, precognition, affidavit, or commission/diligence examination transcript
2. Witness identity and role (pursuer/defender/third-party)
3. Claims and defences at issue (per pleadings/record)
4. Prior statements or documents for impeachment comparison (optional)

## Quick Start

Collect prerequisites, then run phases 1 to 7 sequentially. For time-limited review, run Phase 1 only and flag key admissions and impeachment points inline.

## Workflow

### Phase 1 - Executive Summary

Produce a structured summary covering:

- **Header**: Witness name, role, date, page count, examining solicitor/counsel
- **Witness profile**: Demeanor (cooperative/hostile/evasive/credible), preparation level (well-prepared/poorly prepared/over-coached)
- **Key takeaways**: Top 3 most significant testimony points
- **Helpful vs. harmful testimony**: Side-by-side with paragraph/page citations
- **Credibility**: Assessment with likely court appeal
- **Follow-up needed**: Further precognitions, documents to recover, experts to instruct, legal research

### Phase 2 - Testimony Index

Table: `Page/Paragraph | Topic | Summary | Importance (High/Med/Low) | Use (Liability/Damages/Credibility)`

Organise by: chronology, key events, witness knowledge, documents discussed, admissions, denials, credibility issues, damages.

### Phase 3 - Admission Compilation

Classify each admission by type:

| Type | Meaning |
|------|---------|
| Direct | Witness explicitly concedes a fact |
| Implied | Testimony logically supports the opposing position |
| Adoptive | Witness adopts document content or another's statement |
| Party binding | Admission by party to the litigation (not hearsay) |

For each admission record: factual proposition, citation (page/paragraph), exact quote, significance to claim/defence element. Group by liability, damages, and credibility.

**[SCOTS: Note]** Under Scots law, a party's informal admission (judicial admission) may be binding. Admissions in precognitions are privileged and not generally admissible, but admissions in affidavits or commission examinations may be used. Flag the source type for admissibility assessment.

### Phase 4 - Impeachment Index

Table: `Issue | Testimony | Contradicting Source | Citation | Use At (Summary Decree/Proof)`

Categories:

- **Internal inconsistencies** - contradictions within same statement or transcript (cite both refs)
- **Prior inconsistent statements** - conflicts with earlier precognition, affidavit, or correspondence
- **Document contradictions** - testimony vs. document/exhibit content
- **Implausibility** - memory gaps on events witness organised or should recall
- **Bias/interest** - financial stake, relationship, animosity, personal connection to party

**[SCOTS: Note]** Impeachment in Scots proof works differently from FRCP/FRE cross-examination:
- Prior inconsistent statements can be put to the witness under cross-examination (but precognitions are privileged, cannot be used to impeach without waiver)
- Affidavits and sworn statements are admissible for contradiction, Commission evidence is recorded and can be used at proof, There is no direct equivalent to FRE 613 (prior statement impeachment) - rely on common law principles and the Civil Procedure Rules in Scotland

### Phase 5 - Summary Decree & Proof Designations

**Summary decree** (equivalent of US summary judgment): Table with `Motion Topic | Page/Paragraph | Summary | Support/Oppose Summary Decree`

**[SCOTS: Note]** Summary decree is available under Chapter 21 of the Rules of the Court of Session 1994 or Sheriff Court Ordinary Cause Rules Chapter 15. It is more limited than US summary judgment, a party must show the other has no real prospect of success and no issue worthy of proof. Affidavit evidence is typically required.

**Proof designations** (trial designations): Table with `Purpose | Page/Paragraph | Content Summary | Est. Time`

**[SCOTS: Note]** In civil proofs in Scotland, parties lodge witness lists and statements may be exchanged pre-proof. There is no standard FRCP 32-style designation system, this template adapts the US model for Scottish use.

**Counter-designations**: For each expected opposing designation, identify context pages that qualify or contradict.

### Phase 6 - Credibility Assessment

Table: `Factor | Rating | Transcript Examples (p. refs)`

Factors: Consistency, Responsiveness (direct/evasive/argumentative), Memory (good/selective/poor), Bias indicators, Document support.

Note court appeal: likeability, believability, witness strengths and weaknesses.

### Phase 7 - Follow-Up Checklist

Table: `Action | Basis in Statement | Priority (High/Med/Low)`

Action types: recover documents (commission and diligence), precognose identified witnesses, amend pleadings, legal research on issues raised.

## Pitfalls

- **Always cite source** - page/paragraph number; no paraphrasing without citation
- **[SCOTS: Note] Precognition privilege** - precognitions (informal solicitor-witness interviews) are privileged and cannot be disclosed or used for impeachment without waiver. Distinguish carefully between precognitions, affidavits, and commission evidence
- **Distinguish party admissions** (binding) from third-party testimony
- **Flag any changes or corrections** - original testimony may still be usable for impeachment
- **Video evidence** - bracket demeanour observations as `[OBSERVATION]` to distinguish from testimony text
- **Context** - provide context without distorting meaning
- **[SCOTS: Note] Commission and diligence** - witness examination under commission is recorded in a transcript that may be lodged in process and used at proof. This is the closest Scottish equivalent to a US deposition
- **[SCOTS: Note] Simple Procedure** - in Simple Procedure (£5K or less), the sheriff may order written statements in advance or evidence to be given by affidavit rather than oral proof. Different rules apply
- **Check court rules** - Rules of the Court of Session, Sheriff Court Ordinary Cause Rules, or Simple Procedure Rules for exchange deadlines

## Key Authorities

- Rules of the Court of Session 1994 (RCS) - Commission and diligence (Chapter 18), Summary decree (Chapter 21)
- Sheriff Court Ordinary Cause Rules 1993 (OCR) - Commission and diligence (Chapter 15), Summary decree (Chapter 15)
- Simple Procedure Rules 2016 (as amended) - Written statements, Civil Evidence (Scotland) Act 1988 - Admissibility of evidence, hearsay provisions, Criminal Procedure (Scotland) Act 1995 - For criminal proceedings (different framework)
- Evidence (Proceedings in Other Jurisdictions) Act 1975 - For cross-border evidence requests

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced US depositions (FRCP 30) with Scottish equivalents: precognitions, affidavits, commission and diligence examinations, interrogatories, Replaced FRCP 32 (use of depositions at trial) with Scottish proof procedure and RCS/OCR rules, Replaced FRCP 56 (summary judgment) with Scottish summary decree under RCS Ch.21 / OCR Ch.15
- Replaced FRE 801(d)(2) (party-opponent admissions) with Scots law on judicial admissions, Replaced FRE 613 (prior inconsistent statements) with Scottish common law on cross-examination, Replaced FRE 106 (completeness) with Scottish rules on context, Replaced US District Court and federal practice with Court of Session and Sheriff Court practice, Added precognition privilege, unique to Scottish practice, no direct US equivalent, Added commission and diligence as the primary court-ordered evidence gathering mechanism, Added Simple Procedure written statement framework, Changed "plaintiff/defendant" to "pursuer/defender"
- Changed "trial" to "proof" (civil)
- Changed "summary judgment" to "summary decree"
- Added [SCOTS: Note] flags throughout

**Key Scottish/UK considerations:**
- Scotland has no US-style oral depositions as of right, precognitions (privileged) are the primary evidence-gathering tool, Commission and diligence is the court-ordered mechanism for document recovery and witness examination, Precognition privilege is absolute in civil proceedings, these notes cannot be disclosed without the party's waiver, Affidavits are used in summary decree and family proceedings; they are sworn and admissible, Summary decree is more limited than US summary judgment, Simple Procedure (£0 to £5K) has simplified rules for witness evidence, Civil Evidence (Scotland) Act 1988 governs admissibility, including hearsay, The Court of Session and Sheriff Court have their own procedural rules, Employment tribunals in Scotland have separate procedural rules, Cross-examination of adverse witnesses follows Scottish common law principles, not the US Federal Rules of Evidence

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
