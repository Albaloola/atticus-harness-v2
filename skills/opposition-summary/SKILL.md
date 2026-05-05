---
name: opposition-summary
language: en
description: Generates structured analytical summaries of trademark opposition proceedings before the TTAB. Use when summarizing opposition filings, analyzing TTAB dispute posture, evaluating settlement options, or assessing trademark conflict strength. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Trademark Opposition Summary

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

Produces a self-contained analytical summary of a TTAB opposition proceeding for case evaluation and strategic decision-making. The summary should stand alone, a reader should not need the underlying file.

## Prerequisites

- **Opposition file**: notice of opposition, answer, discovery materials, briefs, evidence, TTAB decisions/orders
- **Application details**: serial number, mark, goods/services, filing/priority dates
- **Party identification**: opposer and applicant names, counsel, marks at issue

## Quick Start

1. Gather all opposition file documents
2. Extract key data points (see extraction checklist below)
3. Produce the seven-section output structure
4. Apply guidelines and verify citations

## Extraction Checklist

Extract from uploaded documents:

- Application serial number, mark, goods/services, class(es) - from Notice of Opposition, application records, Filing, priority, and publication dates, from application records, Official Gazette, Opposer's mark(s), registration number(s), goods/services, from Notice of Opposition, registration certificates, Opposition grounds (each statutory basis) - from Notice of Opposition, Applicant's defenses, from Answer, Key evidence (declarations, surveys, sales figures) - from trial briefs, exhibits, Procedural dates (filing, answer, discovery close, trial) - from board orders, scheduling notices, Outcome or current posture, from final decision or latest board order

## Output Structure

### 1. Executive Overview

Parties, marks in conflict, application number. One paragraph on primary issues. Current status and outcome if concluded.

### 2. Opposition Grounds

For each ground asserted:

**Ground: [e.g., Likelihood of Confusion - §2(d)]**
- **Factual basis**: specific allegations
- **Legal theory**: statutory/precedential framework
- **Key evidence**: exhibits, declarations, survey data

Common grounds to check (mark `[VERIFY]` on statutory citations):
- Likelihood of confusion (Lanham Act §2(d))
- Dilution of famous mark (§43(c))
- Descriptiveness/genericness (§2(e)(1))
- Prior common law rights, False suggestion of connection (§2(a))
- Geographic descriptiveness (§2(e)(2))

### 3. Likelihood of Confusion Analysis

If §2(d) is at issue, analyze under the *DuPont* factors `[VERIFY]`. For each factor, present opposer's position, applicant's position, and a neutral assessment:

- Similarity of marks (appearance, sound, meaning, commercial impression)
- Relatedness of goods/services, Similarity of trade channels, Purchase conditions / buyer sophistication, Strength/fame of opposer's mark, Evidence of actual confusion, Number and nature of similar marks in use, Concurrent use without confusion

### 4. Applicant's Defenses

Document each asserted defense: standing challenges, mark dissimilarity, goods/services distinction, trade channel differences, crowded field, coexistence evidence, laches/acquiescence/estoppel.

### 5. Procedural History

Chronological table of key dates: application filed, published for opposition, notice filed, answer filed, discovery open/close, motions, trial periods, decision issued. Note extensions, suspensions, or consolidations.

### 6. Outcome / Current Posture

**If resolved**: sustained/dismissed, key holdings, registration conditions, appeal status.
**If ongoing**: current posture, upcoming deadlines, pending motions.

### 7. Strategic Assessment

- Strengths and weaknesses of each party's position, Evidentiary gaps or procedural vulnerabilities, Settlement considerations (consent agreements, coexistence terms)
- Impact on broader trademark portfolio

## Guidelines

- **Balanced analysis**: present both sides with equal rigor; do not opine on ultimate outcome
- **Citation precision**: cite specific exhibits, declarations, and filings by name and date; use exact quotations with attribution
- **Verification**: mark unverified legal citations with `[VERIFY]`
- **Audience**: accessible to business stakeholders while maintaining legal precision
- **Dilution claims**: separately address fame of the senior mark and likelihood of blurring/tarnishment
- **Settlement**: note any settlement discussions or consent proposals in the record

---

Key changes from the original:

- **Trimmed description** from 3 sentences to 2, keeping trigger keywords
- **Removed `tags`** from frontmatter (not in the spec)
- **Added Quick Start** section for immediate orientation
- **Collapsed the extraction table** into a flat list, same data, fewer tokens
- **Condensed DuPont analysis** from a 4-column table template to a factor list with inline instructions, preserves the analytical framework without empty table scaffolding
- **Compressed Defenses and Procedural History** into inline descriptions instead of verbose bullet/table templates
- **Merged Outcome section** into compact conditional format
- **Converted Guidelines** from flat bullets to labeled entries for scannability
- **Reduced from ~134 lines to ~95 lines** (~30% token savings) while preserving all legal substance

Want me to try writing the file again, or would you like any adjustments?

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
