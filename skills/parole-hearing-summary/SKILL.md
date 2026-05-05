---
name: parole-hearing-summary
language: en
description: Summarizes parole hearing transcripts into structured analytical documents covering case identification, inmate testimony, victim impact, evidence review, board decision, and strategic analysis. Use when summarizing parole hearings, board decisions, parole denials, parole grant conditions, or preparing for future hearings and post-conviction strategy. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Parole Hearing Summary

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

Distills parole hearing transcripts and exhibits into a structured, standalone record for attorney reference and future hearing preparation.

## Prerequisites

- Hearing transcript(s) - full or partial, Exhibits, disciplinary records, psych evaluations, program certificates, parole plans, risk assessments, support letters, Victim impact statements (if available)
- Prior hearing records, previous decisions, denial reasons, conditions (if applicable)

## Quick Start

1. Gather all hearing materials listed above
2. Produce the summary following the output structure below
3. Review against the checks in Guidelines before finalizing

## Output Structure

### 1. Case Identification Header

| Field | Content |
|---|---|
| Inmate Name / ID | Full name, DOC or BOP number |
| Offense of Conviction | Charge(s), conviction date, case number |
| Current Sentence | Term, min/max, time served |
| Hearing Date & Location | Date, facility, hearing type (initial/subsequent) |
| Board Panel | Names and titles of board members |
| Participants | Inmate, counsel, victims/representatives, witnesses, officials |

### 2. Procedural Matters

- Opening statements or preliminary rulings, Continuances, objections, or procedural issues

### 3. Inmate Testimony

Summarize covering each area:

- [ ] Acceptance of responsibility and expressions of remorse
- [ ] Account of offense circumstances
- [ ] Institutional conduct and disciplinary history
- [ ] Rehabilitative programming (substance abuse, mental health, anger management)
- [ ] Educational / vocational achievements
- [ ] Post-release plan: housing, employment, family support, supervision
- [ ] Board Q&A, substance of board questions and inmate responses

### 4. Victim Impact

- Key points from victim or representative statements, Ongoing impact and public safety concerns raised, Position on parole suitability (support / oppose / neutral)

### 5. Witness Testimony

- Per witness: relationship to inmate, substance of testimony, Board reaction or questioning of witnesses

### 6. Documentary Evidence

| Exhibit | Type | Key Content | Board Response |
|---|---|---|---|
| Ex. A | Psych evaluation | Low recidivism risk per [instrument] | Questioned methodology |
| Ex. B | Program certificates | Completed X, Y, Z programs | Noted positively |

Cover: disciplinary records, risk assessments, parole plans, expert reports, support letters.

### 7. Board Decision

**If DENIED:** reasons cited, statutory/regulatory factors, next eligible hearing date, recommendations for inmate.

**If GRANTED:** proposed release date, conditions of parole, special supervision, reporting obligations.

**If CONTINUED/DEFERRED:** information or actions required, timeline for follow-up.

### 8. Strategic Analysis

- Key factors influencing the board's decision, Unresolved issues affecting future hearings, Recommendations for counsel preparing subsequent proceedings, Comparison to prior hearing outcomes (if applicable)

## Guidelines

- **Objectivity** - report without advocacy framing; distinguish direct testimony, documentary evidence, and board commentary
- **Quotations** - use direct quotes only when specific language is critical to board reasoning or inmate admissions
- **Length** - target 3 to 8 pages depending on hearing complexity
- **Factual basis** - every assertion must trace to the hearing record; flag inferences with `[INFERRED]`
- **Section headings** - keep all headings even if a section is "N/A" to preserve scanability
- **Confidentiality** - note sealed or redacted portions; never reconstruct sealed content

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
