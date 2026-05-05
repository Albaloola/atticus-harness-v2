---
name: article-summary
language: en
description: Generates structured 500-800 word summaries of legal articles distilling thesis, methodology, arguments, authorities, conclusions, and significance. Triggers when summarizing legal scholarship, reviewing law review articles, preparing literature reviews, or triaging articles for full reading. [Atticus UK/Scots refined]
tags:
- analysis, corporate, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Article Summary

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

Produces a structured summary (500 to 800 words) of a legal article that works as both a standalone reference and a read/skip triage tool.

## Prerequisites

- Full article text or sufficient excerpts covering thesis, methodology, arguments, and conclusions, Citation info: author(s), title, journal, volume, year, Target audience: academic, practitioner, or general (defaults to practitioner)

## Quick Start

1. Collect the article text and citation details
2. Classify the article type (doctrinal / empirical / policy / comparative / theoretical)
3. Produce the header block and six summary sections below
4. Verify summarized points against the original before delivering

## Output Format

### Header Block

| Field | Content |
|-------|---------|
| Citation | Bluebook or jurisdiction-appropriate format |
| Author(s) | Name(s) and affiliation if relevant |
| Publication | Journal/venue and date |
| Article Type | Doctrinal / Empirical / Policy / Comparative / Theoretical |

### Summary Sections (500 to 800 words total)

**1. Thesis & Research Question** - Central argument in 1-2 sentences. Identify the legal problem: doctrinal gap, policy critique, empirical question, or theoretical development.

**2. Methodology & Approach** - Method (case law analysis, statutory interpretation, comparative, empirical, theoretical). Note dataset, jurisdiction scope, or time period if applicable.

**3. Key Arguments & Findings** - Major points in logical sequence mirroring the author's reasoning. Use numbered list for distinct arguments. Preserve the author's emphasis; reflect counterarguments if substantially treated.

**4. Authorities & Precedents** - Key cases, statutes, regulations, or principles forming the analytical foundation. Note usage: supporting, distinguishing, or criticizing.

**5. Conclusions & Recommendations** - Separate analytical findings (evidence-supported) from normative proposals (reform/practice changes). Note stated limitations or areas for further research.

**6. Significance & Implications** - Relationship to existing scholarship (confirms, challenges, extends). Practical impact on practice, judicial decisions, legislation, or regulatory policy. Novel contributions.

## Pitfalls

- **Editorializing** - present arguments faithfully; no evaluative commentary unless requested
- **Flattening hedges** - preserve modal language ("may," "suggests," "could"); do not convert tentative conclusions into definitive statements
- **Over-quoting** - use direct quotes sparingly, only when phrasing is particularly significant
- **Oversimplifying** - preserve qualifications, conditions, and nuanced reasoning
- **Conflating arguments** - verify each summarized point maps to a distinct original argument
- **Terminology drift** - match the article's legal terms; briefly gloss highly specialized concepts essential to the core argument

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
