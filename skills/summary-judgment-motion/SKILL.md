---
name: summary-judgment-motion
language: en
description: Drafts a summary decree motion package for Scottish personal injury (delict) litigation under RCS Ch 21 (Court of Session) or OCR Ch 17 (Sheriff Court). Trigger when the user needs a summary decree motion, dispositive motion, no-defence-on-merits motion, or partial decree motion during pre-trial or commission-and-diligence phases. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, motion, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

[SCOTS] This skill has been adapted for Scotland/UK practice. US terminology has been replaced with Scots equivalents. See "Scotland/UK Adaptation" at the end for key differences.

# Summary Decree Motion (formerly Motion for Summary Judgment)

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

Produces a complete summary decree filing package showing no defence to all or part of the action and entitlement to decree as a matter of law under RCS Ch 21 (Court of Session) or OCR Ch 17 (Sheriff Court).

## Prerequisites

Collect before drafting:

1. **Initial Writ / Summons & Defences** - all claims/defences at issue
2. **Commission and diligence record** - examination on commission transcripts, written question responses, document productions
3. **Jurisdiction & local rules** - page limits, briefing schedule, formatting (RCS/OCR/Act of Sederunt)
4. **Contracts/policies** - if breach or coverage claims involved
5. **Expert reports** - if needed for causation, damages, or standard of care

## Filing Package Components

### 1. Caption & Notice of Motion

Include: full court name, case title (all parties per operative pleading), case number, document title ("Motion for Summary Decree" or "Partial Summary Decree"), exact claims/defences sought, RCS Ch 21 or OCR Ch 17 rule citation, hearing date if required, and list of supporting documents.

[SCOTS: Note] In the Court of Session, the motion is for summary decree under RCS Ch 21. In the Sheriff Court, use OCR Ch 17. The underlying test is whether the defender has "no defence to all or part of the action" - not the US "no genuine dispute of material fact" standard. Frame arguments around the Scottish formulation.

### 2. Memorandum of Points and Authorities

Draft in this order:

1. **Introduction** (1 to 2 paragraphs) - parties, claims, why summary decree is warranted
2. **Statement of the Case** - procedural history + factual background with record citations
3. **Legal Standard** - cite the Scottish test plus controlling authority:
   - *William Loudon & Son v Cusiter* - no defence to all or part of the action
   - *Jamieson v Jamieson* - test for no defence standard
   - *Gordon v Davidson* - summary decree procedure
   - [SCOTS: Note] The Scottish test differs materially from the US Celotex/Anderson/Matsushita trilogy. The focus is on whether the defender has a real prospect of successfully defending the claim, not whether there is a "genuine dispute of material fact." Do not cite US federal cases unless by analogy with clear warning.
4. **Argument** - per claim/defence: identify elements under governing law → map to undisputed evidence → show opponent lacks evidential basis for defence → address counterarguments → cite analogous summary decree grants with parentheticals
5. **Conclusion** - restate entitlement, request specific relief

### 3. Statement of Admissions and Evidence (replaces Statement of Undisputed Material Facts)

Numbered paragraphs. Each statement must be a single discrete assertion, material to an element, with pinpoint citation to admissible evidence. [SCOTS: Note] Scottish procedure does not use a formal "Statement of Undisputed Material Facts" equivalent. Instead, admissions on record and agreed minute of admissions serve a similar function. Frame within the pleadings where possible. For motions requiring an agreed factual basis, consider a Minute of Admissions.

Citation formats:

| Type | Format |
|------|--------|
| Examination on commission (deposition) | [Name] Exam. [page]:[line] to [line] |
| Written questions (interrogatories) | [Party] Resp. to Written Questions No. [#], at [page] |
| Document | [Description], production no. [range] or No. [number] of process |
| Admissions (RFA equivalent) | [Party] Resp. to Admission No. [#] |
| Affidavit / witness statement | [Name] Aff. [¶] / [Name] Witness Statement [¶] |

Cross-check every statement against source documents for accuracy of quotes, dates, and figures.

### 4. Supporting Affidavits

Each affidavit must: open with personal-knowledge/competency statement; contain only direct-knowledge facts (no conclusions, speculation); authenticate productions by reference; close with swearing/affirmation declaration per Scottish requirements.

Draft for: moving party, percipient witnesses, expert witnesses (if applicable), custodian of records.

[SCOTS: Note] Scottish affidavits are sworn before a notary public, justice of the peace, or other competent authority. They use the Scottish form: "Sworn/Affirmed at [place] on [date] before [name], [qualification]." Do not use US-style "under penalty of perjury" without a commissioner for oaths. Modern Scottish practice increasingly accepts witness statements on oath in commercial actions.

### 5. Proposed Order (Interlocutor)

1 to 2 pages: grants summary decree on specified claims/defences, states no-defence-on-merits finding, directs extraction of decree or identifies remaining claims (if partial), includes signature line per court rules.

[SCOTS: Note] In Scottish courts, the document is called an **Interlocutor**, not a Proposed Order. It records the court's decision and is signed by the Lord Ordinary/Sheriff. For motions, the interlocutor is normally pronounced at the hearing and then extracted.

### 6. Signature Block & Certifications

Solicitor identification (name, firm, address, phone, email), certificate of service, compliance with court rules on format.

[SCOTS: Note] Scottish solicitors use their firm and practising certificate details, not US bar numbers. Certificate of service is required, confirm service on all parties. There is no word-count certification requirement equivalent to US practice, but comply with page limits in RCS/OCR practice notes.

## Critical Checks

- **Viewing standard**: consider the evidence in the light most favourable to the respondent, then show no defence to all or part of the action
- **Admissibility gate**: every cited item must be admissible, authenticate documents, verify personal-knowledge basis, apply Scottish rules of evidence
- **Pinpoint citations**: never cite examinations or documents generally; always include page, line, or production number
- **OSCOLA format**: use OSCOLA for citation unless local practice notes specify otherwise
- **Local rule compliance**: verify page limits, font/margins, and jurisdiction-specific summary decree procedures before finalising
- **Partial decree**: clearly delineate which claims are addressed vs. which remain for proof
- **Delict claim element mapping**: for personal injury (delict) claims, map evidence to duty, breach, causation, and damages, causation and damages are the most common battlegrounds for opposition

## Scotland/UK Adaptation

This skill has been adapted from a US Motion for Summary Judgment (FRCP 56) model to a Scottish Summary Decree motion framework.

### Key Differences

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| FRCP 56 | RCS Ch 21 (Court of Session) / OCR Ch 17 (Sheriff Court) |
| Summary judgment/ MSJ | Summary decree |
| Complaint | Initial Writ / Summons |
| Answer | Defences |
| Discovery | Commission and Diligence |
| Interrogatories | Written questions |
| Deposition | Examination on commission |
| Personal injury (PI) | Delict claims |
| No genuine dispute of material fact | No defence to all or part of the action |
| Statement of Undisputed Facts | Not used; framed within pleadings or Minute of Admissions |
| Bluebook citation | OSCOLA (Oxford Standard for Citation of Legal Authorities) |
| Federal court | Court of Session Outer House / Sheriff Court |
| FRE / FRCP | RCS / OCR / Act of Sederunt |
| Summary judgment trilogy (Celotex/Anderson/Matsushita) | Scottish authorities: *Loudon v Cusiter*, *Jamieson v Jamieson*, *Gordon v Davidson* |
| Proposed Order | Interlocutor |
| Relief / judgment | Decree / Extract decree |
| Motion for summary judgment | Motion for summary decree |
| Attorney bar number | Solicitor practising certificate / firm details |

### Statutory Framework

- **Court of Session**: RCS Chapter 21 (Summary Decree)
- **Sheriff Court**: OCR Chapter 17 (Summary Decree)
- **Differences**: RCS 21.2 allows summary decree for part of a claim; the test is "no defence to all or part of the action." OCR 17.1 to 17.3 is substantially similar. In personal injury actions, additional safeguards may apply.

### Relevant Forms (scots-forms/)

Documents in the companion `scots-forms/` directory:

- `summary-decree-motion-template.md` - motion for summary decree (Court of Session style)
- `summary-decree-motion-sheriff-court-template.md` - motion for summary decree (Sheriff Court style)
- `interlocutor-summary-decree-granted-template.md` - proposed interlocutor granting summary decree
- `interlocutor-summary-decree-partial-template.md` - proposed interlocutor for partial decree
- `affidavit-template-scots.md` - Scottish affidavit template
- `summary-decree-note-of-argument-template.md` - note of argument in support of summary decree (Court of Session commercial actions)
- `minute-of-admissions-template.md` - agreed minute of admissions as alternative to Statement of Undisputed Facts

### Practitioner Notes

1. **No formal separate statement**: Scottish practice does not require a separate "Statement of Undisputed Material Facts." Instead, rely on admissions in pleadings, agreed minutes of admissions, and the note of argument.
2. **Page limits**: RCS practice notes and sheriff court practice notes may impose page limits on notes of argument. Always verify current practice note.
3. **OSCOLA over Bluebook**: All citations should use OSCOLA (4th edn). No US-style parallel citations.
4. **No word-count certification**: Unlike US federal appellate practice, Scottish summary decree motions do not require word-count certifications.
5. **Summary decree is harder to obtain**: Scottish courts take a more restrictive approach than US federal courts. The test is not simply "no genuine dispute" but a high threshold of "no defence to all or part of the action." Practitioners should carefully assess whether the respondent's pleadings disclose a real prospect of success.
6. **Personal injury/clinical negligence**: In PI actions, clinical negligence, and other discretionary areas, summary decree is rarely granted on causation or quantum alone. Focus on liability where pleadings disclose no defence.
7. **Procedure**: Summary decree is sought by motion. In the Court of Session, the motion is enrolled and heard on the Procedure Roll or in chambers. In the Sheriff Court, it proceeds under OCR Ch 17. If opposed, the court may order a hearing before deciding.

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
