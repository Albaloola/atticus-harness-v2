---
name: expert-witness-impeachment
language: en
description: Analyses expert witness materials (reports, precognitions/skel documents, CVs, publications) to identify inconsistencies, opinion drift, and methodological failures for challenge. Produces a prioritised inconsistency register, cross-examination questions, and admissibility challenge assessment under Scots law of evidence. Use when challenging expert reliability or credibility during commission and diligence, pre-trial, or proof/hearing in commercial litigation under Scottish civil procedure. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Witness Impeachment Analysis (Scotland/UK Adaptation)

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

Systematically compares expert materials to surface contradictions and methodological failures that support cross-examination, motions to restrict evidence, or weight challenges under Scots law of evidence.

## Quick Start

1. Collect: current report, supplemental/rebuttal reports, deposition/hearing transcripts (or precognitions), CV, published works (incl. academic journals), prior case testimony (if available)
2. Confirm procedural posture: phase (commission and diligence / pre-proof / proof) and applicable evidence rules
3. Run analysis across all five dimensions below
4. Produce outputs in order: Register → Patterns → Cross-Exam → Admissibility → Summary

## Analysis Dimensions

| Category | What to Find |
|---|---|
| **Opinion Changes** | Modified, reversed, or newly qualified conclusions across documents |
| **Methodological Inconsistencies** | Different approaches, data sets, or protocols without explanation |
| **Factual Contradictions** | Inconsistent statements about underlying facts or reviewed evidence |
| **Credential Discrepancies** | Qualifications or publications stated differently across documents |
| **Unsupported Conclusions** | Testimony exceeding the disclosed scope or lacking methodological basis |

## Output Structure

### 1. Inconsistency Register

For each finding:

- **ID**: sequential number
- **Category**: from table above
- **Materiality**: High / Medium / Low (effect on ultimate opinion)
- **Source A**: [document, page, line] - verbatim quote
- **Source B**: [document, page, line] - verbatim quote
- **Delta**: one-sentence contradiction description
- **Expert explanation offered**: yes/no (summarise if yes)

### 2. Pattern Assessment

- Group related inconsistencies to distinguish systemic unreliability from isolated error, Flag temporal patterns: opinions strengthening/weakening without new data, or shifting after opposing party challenges, Separate bias indicators (e.g., professional relationship with instructing party) from legitimate opinion evolution

### 3. Cross-Examination Blueprint

For each High/Medium finding:

- 2 to 4 sequenced questions using the expert's own words, Explicit target admission or concession, Exhibit reference for confrontation

### 4. Admissibility Challenge Assessment

Evaluate whether findings support:

- **Scots law of evidence**: expert evidence is admissible if it is relevant and would provide assistance to the court (common law test - *Davie v Magistrates of Edinburgh* 1953 SC 34; *Dingley v Chief Constable of Strathclyde Police* 1998 SC 548). No formal Daubert/Frye framework
- **Weight-only**: inconsistencies affect credibility and weight but not threshold admissibility, the more common outcome under Scots law
- **Scope limitation**: flag where expert opinion exceeds disclosed area of expertise or is not within the expert's field, independent ground for restriction under the common law
- **Bias indicators**: financial/professional relationship with the party instructing, disproportionate fee arrangement, contingent fee, or personal involvement
- **Rule against delegation**: expert must have personally performed the analysis, flag if the report appears to have been prepared by junior staff or AI tools

### 5. Summary for Court

One paragraph per significant inconsistency cluster, formatted for direct use in a submission or minute of debate, with embedded references to the record and expert materials.

## Pitfalls and Checks

- **Cite exactly**: every finding needs document name, page, line or paragraph. Quote verbatim alongside any paraphrase
- **Materiality conservatism**: peripheral credential minutiae = Low; opinion reversals on dispositive issues = High
- **Scots evidence law**: there is no codified admissibility standard (no Daubert, no Frye). Admissibility turns on relevance and assistance. The primary venue for challenge is on weight, not admissibility, unless the expert is clearly not qualified or has strayed beyond their field
- **Expert's duty**: in Scotland, the expert's duty to the court is recognised at common law (following the principles adopted in England under Part 35, though not codified). Refer to *Kennedy v Cordia (Services) LLP* 2016 SC (UKSC) 59 - the leading modern authority on expert evidence in Scotland
- **Precognition vs. deposition**: precognition (solicitor-prepared statement of evidence) is not equivalent to a US deposition. Cross-examination should test the precognition against the formal report. Commission and diligence may have been used to recover documents or take evidence on oath
- **Disclosure rules**: Scottish civil procedure does not have automatic expert disclosure equivalent to FRCP 26(a)(2). Check if a joint expert report or concurrent evidence (hot-tubbing) has been ordered under the Commercial Court or Simple Procedure rules
- **No advocacy**: present findings neutrally. Characterisation is counsel's role
- **Privilege flag**: if correspondence appears to be solicitors' work product or communicates legal advice, flag for review, do not quote

## Scotland/UK Adaptation

This skill has been adapted from US expert witness impeachment practice for use under Scottish civil procedure.

**Key changes:**
- **Admissibility standard**: replaced Daubert (federal/Daubert states) and Frye (Frye states) with the Scottish common law of evidence. There is no codified admissibility framework in Scotland, admissibility turns on relevance and whether the evidence would assist the court. The expert's evidence is almost always admissible unless wholly irrelevant; challenges go to weight, not gatekeeping
- **Key authority**: replaced US case law (*Daubert v Merrell Dow*, *Frye v United States*) with Scottish authorities: *Kennedy v Cordia (Services) LLP* 2016 SC (UKSC) 59 - expert evidence must be necessary, relevant, and the expert must have a recognised body of knowledge; *Davie v Magistrates of Edinburgh* 1953 SC 34 - expert opinion must be based on proven facts
- **Disclosure**: replaced FRCP 26(a)(2) expert report disclosure with Scottish practice: precognitions (which are privileged), commission and diligence for recovery of documents, and any court-ordered reports for joint experts
- **Discovery**: replaced US discovery/depositions with Scottish commission and diligence procedures. No automatic deposition rights, expert oral evidence is given at proof unless commission and diligence is granted
- **Deposition**: replaced deposition inconsistency comparison with comparison between formal expert report, precognition, and hearing/commission testimony
- **Terminology**: replaced 'testimony' with 'evidence' where appropriate, 'trial' with 'proof/diet of proof', 'FRCP' with 'Rules of the Court of Session / Sheriff Court Rules'
- **Bias indicators**: replaced US Daubert factors with common law indicators: contingency fee arrangements, relationship with party, degree of personal involvement in facts, departure from standard practice in the field
- **Hot-tubbing**: noted concurrent evidence (hot-tubbing) is used in the Scottish Commercial Court and Simple Procedure
- **Joint experts**: added that Scottish courts may order a single joint expert (SJE) in certain cases, the SJE's report has particular status and may be more difficult to impeach
- **Objectivity**: the Scottish common law recognises the expert's overriding duty to the court, consistent with the *Ikarian Reefer* / *Kennedy v Cordia* principle, though not codified as in Part 35 CPR

**Status:** Matter-of-law conversions verified against Scottish common law of evidence and relevant authorities. Application to specific facts requires counsel's assessment of evidential rules in the particular court.

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
