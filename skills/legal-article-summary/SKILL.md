---
name: legal-article-summary
language: en
description: Produces structured summaries of legal scholarship capturing thesis, methodology, key authorities, arguments, and significance. Use when summarizing law review articles, journal articles, case notes, or scholarship for research triage, case preparation, literature reviews, or CLE. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
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

Structured summary of legal scholarship preserving the article's analytical spine and practical significance. Default 500 to 800 words unless specified.

## Quick Start

Gather before writing:
- Full article text or excerpts with page/section markers, Citation data: author, title, journal, year, volume/issue, pages, DOI/URL, Reader goal, length target, jurisdiction or doctrinal focus

## Core Workflow

### 1. Extract

- Identify thesis and list article section headings, Capture methodology (doctrinal, empirical, comparative, theoretical, policy critique); note dataset/sample/timeframe if empirical, Extract foundational authorities (not mere examples)
- Flag modal language (may/might/could/suggests) and preserve it, Note explicit limitations or boundary conditions, Record proposed reforms or practice changes

### 2. Structure

Include only sections that exist in the article:

| Section | Content |
|---|---|
| Citation | Author, title, journal, year, vol/issue, pages; DOI/URL if provided |
| Thesis / Question | One-sentence central claim or research question |
| Methodology / Approach | Type and key details |
| Major Arguments | 3 to 6 points in author's sequence, 1 to 3 sentences each |
| Key Authorities | Statutes, cases, regulations, doctrines relied upon |
| Counterarguments / Limits | Acknowledged limitations, caveats, counterpoints |
| Conclusions / Recommendations | Findings separated from normative proposals |
| Significance / Implications | Contribution to scholarship and practical impact |
| Future Research | Only if author explicitly flags open questions |

### 3. Write

```
**Citation:** {Author}, "{Title}," {Journal} {Year}, {Vol}({Issue}) {Pages}. {DOI/URL}

**Thesis / Question:** {One sentence}

**Methodology / Approach:** {Type; key details}

**Major Arguments / Findings:**
1. {Point}
2. {Point}
3. {Point}

**Key Authorities:** {Cases/statutes/regulations/doctrines}

**Counterarguments / Limitations:** {If any}

**Conclusions / Recommendations:** {Findings vs. proposals}

**Significance / Implications:** {Why it matters}

**Future Research:** {If stated}
```

## Pitfalls and Checks

- Stay neutral; no critique unless requested, Preserve author's emphasis and sequencing, do not reorder, Quote sparingly; only when exact phrasing is decisive, Separate empirical results from normative recommendations, If jurisdiction is ambiguous, state it; default to U.S. only when clearly implied, For theoretical articles, specify framework and assumptions instead of empirical details, Summarize literature-review positioning in 1 to 2 sentences, Flag uncertain citations with `[VERIFY]`

---

**Key changes:**
- Removed `tags` (not part of the Agent Skills spec frontmatter)
- Tightened `description` - removed redundant keyword stuffing while keeping discovery triggers, Replaced "Prerequisites" with a compact "Quick Start" section, Merged the separate "Extraction checklist" and "Output Structure" into a single three-step "Core Workflow" (Extract → Structure → Write)
- Renamed "Guidelines" to "Pitfalls and Checks" per best-practice section naming, Removed prose preamble, overview is now two sentences, Cut ~30% of tokens while preserving all domain-specific legal guidance

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
