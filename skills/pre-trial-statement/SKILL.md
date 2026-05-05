---
name: pre-trial-statement
language: en
description: 'Drafts U.S. civil/commercial pre-trial statements that narrow issues, fix trial assumptions, and prevent evidentiary surprises. Converts pleadings, discovery, and deposition materials into a court-compliant filing with undisputed facts, contested issues, witness and exhibit summaries, trial logistics, and settlement posture. Use when preparing for pretrial conferences, final pretrial orders, or trial. Trigger keywords: pre-trial statement, pretrial statement, trial roadmap, witness list, exhibit list, disputed issues of fact, disputed issues of law. [Atticus UK/Scots refined]'
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
metadata:
  author: casemark
  practice_areas:
  - Litigation
  document_types:
  - Pleading
  skill_modes:
  - Drafting
---

# Pre-Trial Statement

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

Draft a court-ready pre-trial statement that narrows issues, fixes trial assumptions, and prevents evidentiary surprises.

## Prerequisites

Pause and gather before drafting. If any item is missing, ask.

1. **Jurisdiction & local rules** - filing templates, exhibit-labeling conventions, page/style limits, e-filing requirements
2. **Core case file** - complaint, answer/counterclaim, motions/orders, case management orders, discovery responses, deposition excerpts, stipulations, admissions
3. **Party & claims info** - identities, roles, claims, defenses, relief requested, key deadlines (discovery cutoff, expert disclosure, trial date)
4. **Confidentiality** - sealing requirements for addresses, medical records, trade secrets, sensitive personal data
5. **Witnesses** - availability, live vs. stipulation vs. deposition designation
6. **Exhibits** - produced, pre-marked, contested (authenticity/admissibility), redactions
7. **Settlement/ADR** - whether obligations are satisfied per case plan or court order

## Output Structure

### 1) Source Matrix

Build before drafting to map inputs to output sections.

| Section | Required Inputs | Statement Output |
|---|---|---|
| Caption | Court, case number, parties, judge | Exact caption block |
| Procedural history | Filings/orders log | Chronological timeline |
| Undisputed facts | Stipulations, admissions | Numbered facts |
| Contested issues | Pleading/deposition conflicts | Fact + law dispute sections |
| Witnesses | Notes, designations, party lists | Party-organized witness table |
| Exhibits | Document lists, custodians | Exhibit index + objections |
| Trial posture | Motions, scheduling orders | Trial requirements |

### 2) Drafting Sequence

1. **Caption & cover block** - court, case number, parties, judge, trial date
2. **Procedural posture** - chronological, neutral tone
3. **Undisputed facts** - numbered declarative paragraphs; no legal conclusions
4. **Contested issues of fact** - issue title + why material
5. **Contested legal issues** - each side's position and basis for disagreement
6. **Witness summaries** - organized by party:

| Witness | Party | Type | Core Testimony | Live/Designation | Objection Risks |
|---|---|---|---|---|---|

7. **Exhibit index**:

| Exhibit ID | Description | Custodian | Evidentiary Dispute | Intended Use | Foundation Need |
|---|---|---|---|---|---|

8. **Trial logistics & ancillary matters** - motions in limine, evidentiary fights, expert challenges
9. **Settlement/ADR status** - without privileged detail
10. **Quality pass** - verify against jurisdictional formatting, paginate, sign

### 3) Templates

```text
COURT:
CASE NO.:
JUDGE:
PLAINTIFF / DEFENDANT:
NATURE OF ACTION:
HEARING / TRIAL DATE:
PARTY RESPONSIBLE FOR FILING:
```

```text
DISPUTED ISSUE TABLE
Issue | Governing Rule/Authority | Party A Position | Party B Position | Why Material | Proposed Relief
```

## Guidelines

- **Mandatory sections** - caption, procedural history, undisputed facts, disputed facts/law, witnesses, exhibits, trial logistics, ADR posture
- **Source grounding** - every disputed matter must cite case-file sources; never restate hearsay as fact
- **Undisputed facts** - each paragraph must be unequivocally non-controversial
- **Neutral tone** - no argumentative rhetoric
- **Privilege guard** - preserve litigation positions but never reveal settlement demands, mediation positions, or privileged strategy
- **Local rules govern** - if local rules conflict with this template, defer to local rules
- **Admissibility citations** - cite only authority you can verify in case materials and governing law [VERIFY]

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
