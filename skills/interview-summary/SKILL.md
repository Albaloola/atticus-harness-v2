---
name: interview-summary
language: en
description: Generates structured summaries of witness or subject interviews for criminal defense investigations. Distills key facts, verbatim statements, credibility indicators, and follow-up leads. Use when summarizing defense interviews, witness debriefs, subject interrogations, or investigative interview notes. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Interview Summary

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

Produces a structured memorandum distilling a witness or subject interview into actionable intelligence for defense teams and investigators.

## Prerequisites

1. **Interview materials** - transcript, audio transcription, investigator notes, or preliminary report
2. **Matter reference** - case name/number and investigation context
3. **Related evidence** - prior witness statements, documents shown during interview, or known inconsistencies

## Quick Start

Collect interview materials, then generate each section below in order. Mark the document `ATTORNEY WORK PRODUCT, PRIVILEGED AND CONFIDENTIAL`.

## Output Sections

### 1. Header Block

| Field | Content |
|-------|---------|
| Date/Time | Interview date, start/end time |
| Location | Interview site |
| Interviewee | Name, role, relationship to matter |
| Interviewer(s) | Names, titles |
| Counsel Present | Defense counsel, interviewee's counsel if any |
| Observers | Anyone else present |
| Matter Reference | Case name/number |
| Privilege Marking | `ATTORNEY WORK PRODUCT, PRIVILEGED AND CONFIDENTIAL` |

### 2. Executive Summary

3 to 5 sentences covering:
- Most significant factual revelations, Key admissions or denials, Overall credibility assessment, Impact on defense theory

### 3. Substantive Summary

Organize **thematically, not chronologically**:
- **Background & Relationship** - connection to events, relevant history
- **Key Events** - who, what, when, where, why, how per incident
- **Knowledge of Other Parties** - interactions with co-defendants, witnesses, complainants
- **Documents & Communications** - documents shown, recognized, referenced; reactions to exhibits

Per theme:
- [ ] Lead with concise factual summary
- [ ] Embed verbatim quotes for significant statements (quotation marks + context)
- [ ] Note gaps where interviewee lacked knowledge or memory

### 4. Credibility & Demeanor

| Indicator | Observation |
|-----------|-------------|
| Consistency | Internal contradictions within interview |
| External conflicts | Contradictions with other evidence or witnesses |
| Demeanor | Evasiveness, reluctance, confidence on specific topics |
| Motive/Bias | Relationship factors affecting reliability |
| Corroboration | Statements supported by independent evidence |

### 5. Exculpatory / Inculpatory Assessment

| Category | Statement/Fact | Significance |
|----------|---------------|--------------|
| Exculpatory | ... | ... |
| Inculpatory | ... | ... |
| Ambiguous | ... | ... |

### 6. Follow-Up & Recommendations

- [ ] Additional witnesses identified (name, contact, expected knowledge)
- [ ] Documents to obtain
- [ ] Topics requiring re-interview or clarification
- [ ] Investigative leads generated
- [ ] Areas needing corroboration

## Pitfalls & Checks

- **Objectivity** - Distinguish interviewee statements, interviewer observations, and analytical assessments. Label each.
- **Discoverability** - Assume the summary may be disclosed. No speculation, no strategy, no mental impressions beyond factual observations.
- **Privilege** - Mark header with work-product designation. Do not embed legal strategy.
- **Precision** - Use exact names, dates, amounts. Flag approximations with `[approx.]`.
- **Verbatim quotes** - Use for admissions, denials, key characterizations, and potential impeachment material. Include surrounding context.
- **Neutral tone** - Factual language only. Label legal conclusions as analysis.

---

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
