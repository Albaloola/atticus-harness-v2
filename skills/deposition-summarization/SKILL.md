---
name: deposition-summarization
language: en
description: Summarizes deposition transcripts with precise page:line citations. Supports sequential, topic-based, and strategic deep-analysis formats. Use when a user provides a deposition transcript and requests a summary, depo digest, testimony analysis, or impeachment identification. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Summarization

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

Produces citation-backed deposition summaries. Every summary statement must include a `pp. page:line` range. Default to Format A unless the user specifies otherwise.

## Quick Start

1. Receive transcript text or file.
2. Identify format: A (sequential), B (topic-based), or C (deep analysis).
3. Summarize with `pp. page:line-page:line` citations on every entry.
4. Note objections, stipulations, exhibit references, and confidentiality designations.

## Format A: Page-Line Summary

Sequential, transcript-order summary. Neutral language.

```
pp. 12:3-14:8 - Deponent described arriving at the facility at 8:30 AM
and meeting with [Name] in the conference room. [Ex. 3 marked and identified.]

pp. 14:9-16:22 - On cross-examination, deponent acknowledged signing the
memorandum (Ex. 4) but stated he did not read it before signing.
```

## Format B: Topic-Based Summary

Groups testimony by subject. Each topic: 2-3 sentence neutral summary with citations.

```
## Employment History
Deponent worked at [Company] from 2018-2022 as Senior VP of Operations
(pp. 8:12-9:4), reporting directly to the CEO (pp. 9:15-10:8).

## Knowledge of Transaction
Deponent first learned of the acquisition in January 2022 (pp. 22:3-22:18)
and attended three related board meetings (pp. 23:1-25:14, 31:8-33:2, 45:6-47:11).
```

## Format C: Deep Analysis

Includes Format A or B, plus these additional sections:

- **Admissions Against Interest** - Testimony harmful to deponent's party. Exact quotes with citations.
- **Inconsistencies** - Internal contradictions or conflicts with other testimony/documents.
- **Impeachment Opportunities** - Prior inconsistent statements, bias, lack of personal knowledge.
- **Key Exhibits** - Table format:

| Exhibit | Description | Pages Discussed | Authenticated? |
|---------|-------------|-----------------|----------------|
| Ex. 1 | [Description] | pp. 15:3-17:8 | Yes, pp. 15:10 |

- **Credibility Assessment** - Evasive answers, non-responsive testimony, "I don't recall" count with page ranges.

## Pitfalls

- Never summarize without a `pp. page:line` citation.
- Keep summary language neutral; reserve analysis for Format C sections only.
- Preserve exact quotes (in quotation marks) for admissions and key testimony.
- Note all objections and their basis inline.
- Flag confidentiality designations (Confidential, AEO) when present.
- If an exhibit is referenced but not provided, note: "[Exhibit not provided for review]".

---

**Key changes**: Removed `tags` from frontmatter (not in spec). Tightened the description. Added a Quick Start checklist for fast orientation. Consolidated the Guidelines section into a "Pitfalls" section. Trimmed redundant prose in format descriptions while keeping all three formats, their examples, and the exhibit table intact. Reduced from 76 lines to 62 lines with no domain content lost.

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
