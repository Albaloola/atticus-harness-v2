---
name: client-memo
language: en
description: 'Drafts structured client memoranda translating legal analysis and strategic recommendations into plain language for non-lawyer audiences. Covers corporate governance, fiduciary duties, compliance, and transactional advice. Enforces standard memo architecture: heading block, executive summary, background, analysis, options, and recommendations. Use when preparing client-facing memos, opinion letters, or governance briefings. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Client Memo

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

Produces client-facing memoranda that translate corporate governance legal issues into clear analysis and actionable recommendations for non-lawyer decision-makers.

## Prerequisites

1. **Matter description** - client name, entity type, jurisdiction, subject matter
2. **Supporting documents** - contracts, board minutes, correspondence, filings, prior opinions
3. **Legal questions** - specific issues or decisions the client faces
4. **Deadlines** - filing dates, board meetings, regulatory timelines

## Quick Start

1. Gather matter details and supporting documents from the user
2. Identify the legal questions to address
3. Draft memo following the Output Structure below
4. Mark any uncertain citations `[VERIFY]` and flag factual gaps as Open Items
5. Label the draft Attorney-Client Privileged / Work Product

## Output Structure

### Heading Block

| Field | Content |
|---|---|
| TO | [Client name / contact] |
| FROM | [Firm / attorney name] |
| DATE | [Date] |
| RE | [Matter, specific subject] |
| CONFIDENTIAL | Attorney-Client Privileged |

### 1. Executive Summary

- 2 to 4 sentences: issue, bottom-line conclusion, immediate next steps, Plain language; no citations; written for a CEO or board chair

### 2. Background

- Chronological narrative from uploaded documents, Key parties, dates, agreements, events, Flag factual gaps needing client clarification

### 3. Legal Analysis

- Labeled subsection per issue, Structure: **Rule → Application → Conclusion**
- Translate citations into business-impact terms, Note controlling authority and any majority/minority splits

### 4. Strategic Options (if applicable)

| Option | Description | Risks | Benefits |
|---|---|---|---|
| A | | | |
| B | | | |
| C | | | |

### 5. Recommendations

- Numbered actionable steps, Assign responsibility (client vs. counsel) and deadline per item, Identify decisions required before counsel can proceed

### 6. Open Items

- Facts, documents, or clarifications needed to complete the analysis

## Pitfalls and Checks

- **Privilege**: Always label drafts Attorney-Client Privileged / Work Product
- **Citations**: Include statute/regulation/case with one-sentence plain-English gloss; mark uncertain citations `[VERIFY]`
- **Scope**: US-focused by default; flag foreign law, state-specific rules, or non-US entities explicitly
- **No guarantees**: Frame conclusions as analysis, not outcome predictions; qualify where law is unsettled or facts incomplete
- **Tone**: Professional and direct; avoid legalese but keep precision on operative legal terms

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
