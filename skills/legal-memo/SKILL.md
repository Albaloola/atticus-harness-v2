---
name: legal-memo
language: en
description: Drafts U.S. internal legal memoranda using IRAC structure to analyze issues, synthesize authority, assess risks, and recommend strategy. Use when asked to draft a research memo, internal memo, issue analysis, case strategy memo, or any IRAC-based legal analysis. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Memorandum

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

Produces an objective, litigation-focused internal memo that answers a legal question and informs strategy. Uses IRAC (Issue, Rule, Application, Conclusion) throughout the Discussion section.

## Prerequisites

Gather before drafting:

1. **Issue statement** - single, answerable legal question with jurisdiction and party posture
2. **Jurisdiction** - controlling court/forum and choice-of-law constraints
3. **Key facts** - chronology; label disputed, undisputed, and unknown facts
4. **Record sources** - pleadings, contracts, statutes, evidence, prior research
5. **Audience/purpose** - partner review, motion strategy, risk assessment, or settlement posture

## Memo Structure

| Section | Requirements |
|---|---|
| Heading | To / From / Date / Re / Jurisdiction; confidentiality note if needed |
| Question Presented | One legally precise sentence; frame for yes/no or short answer |
| Brief Answer | 2 to 4 sentences: likely outcome + key drivers |
| Facts | Objective summary; label disputed and missing facts |
| Discussion | IRAC per issue: Rule → Application → Counterarguments → Conclusion |
| Risk & Strategy | Likelihood ranges, exposure, procedural constraints, next steps |
| Conclusion | Direct answer + actionable recommendation |
| Appendix (optional) | Authority table, issue tree, or research log |

## Core Workflow

### 1. Research and validate authority

- Identify controlling statutes, regulations, and binding precedent.
- Capture persuasive authority when binding law is thin or split.
- Verify current validity (overruled, superseded, amended).
- Note jurisdictional splits or unresolved conflicts.
- Cite in Bluebook format throughout.

### 2. Draft Discussion using IRAC

For each issue:

- **Rule** - synthesize holdings from binding authority; note majority/minority positions.
- **Application** - apply rules to case facts; address each element.
- **Counterarguments** - present opposing interpretations; distinguish unfavorable authority.
- **Conclusion** - state likely outcome for this issue.

### 3. Assess risk

Use a likelihood table in Risk & Strategy:

| Outcome | Likelihood | Drivers |
|---|---|---|
| Strong for client | __%  | Elements met, controlling precedent, factual support |
| Mixed | __% | Fact-dependent, split authority |
| Adverse | __% | Unfavorable holdings, statutory barriers |

### 4. Build authority table (Appendix, if complex)

| Authority | Court/Level | Holding/Rule | Favorable? | Distinguishable? |
|---|---|---|---|---|

## Pitfalls

- **Advocacy creep** - maintain neutrality; do not use persuasive rhetoric.
- **Ignoring bad authority** - address unfavorable holdings directly and explain impact.
- **Unverified citations** - confirm every authority is current and correctly cited.
- **Fact/opinion blur** - clearly separate undisputed facts, disputed facts, and unknowns.
- **Scope drift** - default to U.S. law; flag non-U.S. issues as out of scope unless instructed otherwise.

Key changes from the original:
- **Removed `tags`** - not part of the Agent Skills spec; discovery relies on `description` keywords.
- **Tightened `description`** - third-person, clear trigger guidance, under 1024 chars.
- **Eliminated the full text template** - the Memo Structure table already defines every section; the verbatim template was redundant.
- **Consolidated research checklist into workflow** - folded validation steps into "Research and validate authority" instead of a standalone checklist.
- **Simplified authority table** - dropped the "Notes" column to reduce clutter; kept the essential columns.
- **Renamed Guidelines → Pitfalls** - reframed as named anti-patterns for faster scanning.
- **Reduced from 114 to ~62 lines** - roughly 45% token savings while preserving all domain-accurate legal content.

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
