---
name: deposition-analysis
language: en
description: Produces litigation-grade U.S. deposition summaries with exact page-line citations, topical organization, and strategic analysis of admissions, inconsistencies, objections, and exhibits. Use when asked for deposition summaries, page-line or P&L citations, depo analysis, impeachment review, cross-exam prep, or motion-support summaries. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Analysis

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

Generates citation-accurate, topic-organized deposition summaries with strategic analysis for discovery and trial preparation. Assumes U.S. deposition conventions unless another jurisdiction is specified.

## Quick Start

1. Obtain transcript with page/line numbering, witness metadata, and any exhibit list.
2. Validate completeness, confirm pagination, line numbering, witness identity, date, errata; flag gaps.
3. Extract testimony, objections, exhibit references, and procedural notations with exact cites.
4. Organize by case issues and produce the required sections below.

## Citation Format

All citations use: `Page X, Lines Y-Z`

Every substantive statement, objection, and exhibit reference must carry a cite. If uncertain about a cite, acknowledge uncertainty, never guess.

## Required Sections

| Section | Content |
|---|---|
| Case Overview | Witness role, subject matter, key issues |
| Chronology | Dates, sequences, timeline conflicts with cites |
| Topical Summaries | Testimony organized by issue with cites |
| Admissions | Claim/defense-supporting statements with cites |
| Inconsistencies/Evasions | Conflicts, shifts, non-responsive answers with cites |
| Objections Log | Topic, ground, response/ruling, page-line |
| Exhibits Log | Exhibit ID, description, related testimony, page-line |
| Open Follow-Ups | Missing docs, unclear testimony, recommended next steps |

## Core Workflow

```
- [ ] Validate transcript completeness and metadata
- [ ] Extract and index all substantive testimony with page-line cites
- [ ] Build topical sections aligned to pleadings and case themes
- [ ] Identify admissions, inconsistencies, evasions, and credibility issues
- [ ] Cross-reference timeline statements for internal conflicts
- [ ] Compile objections and exhibits logs
- [ ] Verify every citation against source transcript
- [ ] Flag open follow-ups and investigation gaps
```

## Post-Delivery Response Modes

| Request | Output | Rule |
|---|---|---|
| Factual retrieval | Quote/paraphrase with cites | Include all locations if testimony repeated |
| Comparative | Side-by-side statements with cites | Explain evolution or contradiction |
| Evaluative | Evidence inventory with cites | No legal conclusions; note ambiguity |

## Pitfalls

- **Omitting unfavorable testimony.** Include both helpful and harmful statements, never filter by side.
- **Meaning-altering paraphrase.** Preserve qualifying language; do not strip hedges or conditions.
- **Fabricated citations.** Verify every cite. State what is missing rather than approximating.
- **Legal conclusions.** Provide evidence and cite it, do not offer strategic advice or legal opinions.
- **Confidentiality.** Respect protective-order constraints and confidentiality designations.
- **Editorializing.** Keep tone formal and litigation-ready throughout.

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
