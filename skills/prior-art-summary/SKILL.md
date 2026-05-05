---
name: prior-art-summary
language: en
description: Generates structured summaries of prior art references for patent prosecution, validity analysis, and freedom-to-operate assessments. Maps disclosures to claim elements with precise citations. Use when summarizing prior art, analyzing patent landscapes, mapping references to claims, or preparing office action responses. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Prior Art Summary

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

Synthesizes prior art references into structured summaries mapping disclosures to claim elements for rapid landscape assessment.

## Prerequisites

- **Prior art references** - patents, applications, publications, product docs, or public disclosures
- **Invention description** - claims or specification under analysis
- **Scope directive** - prosecution, validity/invalidity, or FTO

## Workflow

### 1. Executive Overview

Produce a table covering:

- Total references reviewed (count)
- Most material references (top 3-5 with one-line rationale)
- Key gaps (claim elements with no or weak coverage)
- Art type breakdown (patents / applications / publications / other)

### 2. Individual Reference Summaries

For each reference:

| Field | Content |
|-------|---------|
| Document ID | Patent/pub number, DOI, or identifier |
| Title | Full title |
| Date | Pub/issue date; note effective prior art date if different |
| Inventor(s)/Author(s) | Names |
| Technical field | CPC/IPC classes or subject domain |
| Assignee/Publisher | Entity |

Then include:

- **Disclosure summary** - 2-4 sentences on core technical contribution
- **Key features** - bulleted list with exact quoted language and precise citation (¶, col:line, page, figure)
- **Gaps** - what the reference does NOT disclose relative to the invention

### 3. Claim-Element Mapping

| Claim Element | Ref. 1 | Ref. 2 | Ref. 3 |
|--------------|--------|--------|--------|
| Element A | ¶[0032], Fig. 3 | - | p. 12 |
| Element B | - | Col. 4:15-22 | - |

Legend: `✓` full disclosure, `~` partial, `-` absent. Always include citation location.

### 4. Combination Analysis

For each potentially obvious combination:

- **References combined** - which refs
- **Motivation to combine** - analogous art rationale, explicit suggestions, design incentives
- **Missing elements** - what remains undisclosed even in combination

### 5. Timeline

Chronological list by effective date, noting critical date boundaries (priority, filing, publication dates).

## Guardrails

- **Cite precisely** - every factual assertion needs ¶, col:line, page, or figure number
- **No legal conclusions** - organize facts for attorney judgment; never state claims are anticipated or obvious
- **Analogous art** - flag references outside the immediate field with rationale for qualification
- **Prior art status** - note references whose qualification depends on date analysis (pre-AIA vs. AIA § 102) [VERIFY]
- **Foreign-language refs** - flag language, provide translated key passages, note if machine-translated
- **Figures** - describe depicted features with enough detail to be useful without viewing the original
- **Terminology** - define specialized terms on first use in brackets
- **Order by relevance** to claim elements; use chronological only if requested or analytically significant

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
