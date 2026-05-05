---
name: deposition-summary
language: en
description: Generates topic-based deposition summaries for commercial litigation with exhibit cross-referencing. Produces a two-column table (page:line | neutral summary) with embedded exhibit citations. Use when summarizing depositions, creating deposition digests, indexing exhibits, or preparing witness testimony summaries during discovery. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Summary with Key Document Index

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

Transforms a deposition transcript into a topic-based summary table with integrated exhibit cross-references for rapid navigation between testimony and documentary evidence.

## Prerequisites

- Complete deposition transcript with page and line numbering, Exhibit list and files referenced or marked during deposition, Case context: party names, key contract sections, claims at issue

## Workflow

### 1. Review Transcript

Read the full transcript and identify:
- Natural topic breaks (explicit subject changes and thematic shifts)
- Every exhibit reference, formal ("Exhibit 3") and informal ("the email we just reviewed")
- Key admissions, contradictions, evasive answers, and authentication testimony

### 2. Extract Topics

For each topic, capture:

| Element | Requirement |
|---|---|
| Topic heading | Specific - "Witness Knowledge of Payment Default Under §4.2" not "Payment Issues" |
| Page:line range | Start and end of testimony on that topic |
| Summary | 2-3 sentences, neutral, no legal conclusions |
| Exhibits referenced | Exhibit number + how witness characterized/authenticated it |
| Notable moments | Admissions, contradictions, refusals to answer |

### 3. Build Exhibit Index

Create a master exhibit cross-reference table:

| Exhibit | Description | Transcript Refs (pg:ln) | Witness Characterization |
|---|---|---|---|
| Ex. 1 | [doc type] | 45:3-47:12, 102:8-103:1 | [how witness described it] |

### 4. Assemble Summary Table

Primary deliverable, two-column table:

```
| Transcript Cite | Topic & Summary |
|-----------------|-----------------|
| pp. 12:4-18:22  | **Formation of the Supply Agreement**
|                 | [2-3 sentence neutral summary]. See Ex. 3
|                 | (Supply Agreement, discussed at 14:8-15:2).
|                 | Notable: Witness admitted not reading §4.2
|                 | before signing (15:18-22). |
```

Within each summary cell:
- Embed exhibit references discussed during that testimony, Cite specific page:line for key admissions, Use hierarchical headings for major topics vs. subtopics

### 5. Output

Produce both:
- **DOCX** - formatted table with hyperlinks to exhibits and transcript locations
- **PDF** - preserved hyperlinks, full-text searchable, locked for filing

## Key Rules

- **Neutral tone only** - summarize what the witness said, not what it means for the case
- **Specificity over brevity** - "Witness denied receiving the October 14 demand letter" not "Witness denied receiving correspondence"
- **Organize by substance, not questioner** - consolidate redirect and direct testimony on the same topic under one heading
- **Capture authentication testimony** - note when witness identifies, authenticates, or disputes a document
- **Flag evasive responses** - mark non-responsive answers, memory claims, and qualified answers

## Quality Checklist

- [ ] Every exhibit mentioned in testimony appears in summary and exhibit index
- [ ] No exhibits referenced that weren't actually discussed
- [ ] All page:line citations verified against transcript
- [ ] Summaries reflect actual testimony, no interpretation or legal conclusions
- [ ] Topic headings specific enough for at-a-glance navigation
- [ ] No privileged communications or work product included
- [ ] Hyperlinks resolve to correct targets

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
