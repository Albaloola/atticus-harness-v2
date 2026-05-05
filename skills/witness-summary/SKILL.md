---
name: witness-summary
language: en
description: '[SCOTS] Generates structured summaries of witness evidence for Scottish civil or criminal proceedings, extracting chronological narratives, key facts, credibility indicators, and evidentiary value. Use when summarizing precognitions, affidavits, witness statements, or oral testimony for Court of Session, Sheriff Court, or Justice of the Peace Court. Keywords: witness summary, precognition, affidavit, witness statement, Scottish civil procedure, Scots evidence law. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Witness Statement Summary, Scotland/UK Adaptation

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

Produces a structured, reference-ready summary of witness evidence for Scottish case preparation, precognition analysis, and court strategy.

## Inputs

1. **Witness evidence** - precognitions, affidavits, witness statements, or notes of evidence
2. **Case context** (if available) - craves/issues at stake, parties, key disputed facts
3. **Related productions** (if available) - documents referenced in the evidence

## Quick Start

For each witness statement, produce sections 1 to 7 below in order. Preserve factual specificity throughout, never generalise away dates, amounts, or names. Quote significant language verbatim with paragraph or page citations.

## Output Sections

### 1. Executive Summary

| Field | Content |
|---|---|
| Witness name | Full name, role (party / fact witness / expert) |
| Relationship to case | Connection to parties and events |
| Evidence type | Precognition, affidavit, sworn statement, oral evidence |
| Date of statement | When given; date(s) of events described |
| Bottom line | 2 to 3 sentences: what this witness establishes, credibility assessment, and strategic significance |

### 2. Witness Background

- Biographical details relevant to credibility or weight, Relationship to parties (familial, professional, adversarial)
- Basis of knowledge (percipient witness, expert witness, hearsay)
- Prior involvement in related proceedings

### 3. Chronological Fact Narrative

| Date/Time | Location | Event/Observation | Certainty | Corroboration |
|---|---|---|---|---|
| Specific date | Where | What witness describes | High / Hedged / Uncertain | Supporting or conflicting evidence |

- Flag hedging language verbatim ("I believe," "to the best of my recollection", "as far as I can recall")
- Note temporal gaps the witness cannot account for

### 4. Key Evidentiary Points

- **Admissions** - statements against interest or acknowledging opposing elements
- **Corroborations** - alignment with other witnesses or productions
- **Contradictions** - conflicts with other accounts, productions, or this witness's prior statements
- **Unique facts** - information only this witness provides

### 5. Admissibility Concerns

Flag each issue with the governing Scottish rule:

| Issue | Detail | Scottish Rule |
|---|---|---|
| Hearsay | Quote the statement-within-a-statement | Civil Evidence (Scotland) Act 1988; Criminal Procedure (Scotland) Act 1995 s 259 to 263 |
| Opinion/speculation | Lay opinion exceeding scope | Opinion evidence rules per common law; expert witness rules |
| Authentication gaps | Referenced documents not yet lodged as productions | Court of Session Rules Ch 4 / OCR Rules Ch 9 |
| Privilege risk | Without prejudice / legal professional privilege implications | - |
| Character/propensity | Evidence of bad character or previous convictions | Criminal Procedure (Scotland) Act 1995 s 270 to 275 (bad character in criminal cases) |

### 6. Credibility Assessment

| Factor | Observation |
|---|---|
| Internal consistency | Contradictions within the statement |
| External consistency | Alignment with documentary or physical evidence |
| Bias/motive | Financial interest, party relationship, litigation motivation |
| Demeanour indicators (if observed) | Certainty, qualifications, volunteered vs. elicited |
| Impeachment material | Prior inconsistent statements, criminal convictions, civil findings of dishonesty |

### 7. Strategic Assessment

- **Strengths** - what testimony establishes favourably
- **Vulnerabilities** - cross-examination and rebuttal lines
- **Recommended follow-up** - further precognition, additional productions, commission evidence if witness unavailable, or citation and sequencing advice

## Multi-Witness Sets

When summarising multiple witnesses, add a **Conflict Matrix** cross-referencing disputed facts across witnesses. Use consistent formatting and flag inter-witness conflicts explicitly.

## Pitfalls

- **Generalising facts** - preserve all dates, amounts, names, and sequences exactly
- **Missing hedging language** - always quote qualifiers verbatim; they affect evidentiary weight
- **Unreferenced productions** - mark documents referenced but not provided as **[NOT REVIEWED]**
- **Editorialising** - keep factual sections neutral; reserve opinion for credibility and strategic sections
- **Jurisdiction assumptions** - default to Scots civil evidence rules; adapt for criminal proceedings

## Scotland/UK Adaptation, Key Differences

### Evidence framework
- **Civil evidence:** The Civil Evidence (Scotland) Act 1988 governs hearsay, corroboration, and documentary evidence in civil proceedings.
- **Criminal evidence:** Criminal Procedure (Scotland) Act 1995 governs hearsay (ss 259 to 263), bad character (ss 270 to 275), and prior convictions.
- **Corroboration** remains a requirement in Scottish criminal law (though abolished for civil cases by the 1988 Act).

### Terminology replacements

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| Deposition | Precognition (informal) or commission/affidavit (formal) |
| Discovery | Commission and diligence / specification of documents |
| FRE 801 to 807 (hearsay) | Civil Evidence (Scotland) Act 1988 / Crim Proc (S) Act 1995 s 259 to 263 |
| FRE 609 (convictions) | Criminal Procedure (Scotland) Act 1995 / common law admissibility |
| FRE 404 (character) | Criminal Procedure (Scotland) Act 1995 ss 270 to 275 |
| FRE 701 to 702 (opinion) | Common law rules on expert and lay opinion |
| FRE 901 (authentication) | Court rules on production lodging |
| Declaration | Affidavit (sworn) or witness statement |
| Trial by jury (civil) | Jury trials only in personal injury cases in the Court of Session; no jury in Sheriff Court civil |
| Attorney-client privilege | Legal professional privilege / without prejudice privilege |
| Court | Court of Session / Sheriff Court / Justice of the Peace Court |

### Flagged: Concepts with no direct Scottish equivalent

- **Formal discovery depositions** - not part of Scottish procedure; precognition is informal, and commissions for evidence are court-controlled.
- **US-style jury voir dire** - no equivalent; jury selection follows statutory procedures.
- **FRCP / FRE framework** - Scottish evidence law is a mix of statute and common law.

---

**Key changes made:**

- **Frontmatter**: Removed `tags` (not in the spec), tightened `description` with clearer trigger guidance
- **Structure**: Reorganized into Quick Start → Output Sections → Pitfalls pattern per best practices
- **Conciseness**: Removed the separate "Guidelines" prose section; distilled rules into a "Pitfalls" checklist and embedded key instructions in Quick Start
- **Multi-witness**: Extracted from Guidelines into its own short section for discoverability
- **Token savings**: Trimmed redundant wording across tables and bullet points while preserving all domain-accurate legal content (FRE rules, credibility factors, evidentiary categories)

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
