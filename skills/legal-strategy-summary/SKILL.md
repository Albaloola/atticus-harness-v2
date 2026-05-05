---
name: legal-strategy-summary
language: en
description: Generates structured litigation strategy summaries synthesizing case facts, legal arguments, procedural tactics, and risk assessments into a unified roadmap. Use when aligning legal teams on case direction, preparing for strategy meetings, or onboarding stakeholders to litigation matters. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Strategy Summary

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

Produces an internal strategic roadmap covering case posture, motion and discovery planning, settlement analysis, and prioritized action items.

## Prerequisites

- **Case materials** - complaints, answers, correspondence, prior orders, key exhibits
- **Client objectives** - desired outcome, risk tolerance, budget constraints
- **Jurisdictional context** - forum, governing law, pending procedural deadlines
- **Party roles** - plaintiff/defendant/third-party posture and relationships

## Quick Start

1. Gather case materials and client objectives
2. Draft executive overview accessible to non-lawyer stakeholders
3. Build legal framework per cause of action/defense
4. Map motion and discovery strategy to case schedule
5. Assess settlement posture and risks
6. Produce prioritized action items with owners and deadlines

## Output Sections

### 1. Executive Overview

| Element | Content |
|---|---|
| Case nature | Dispute type, parties, forum |
| Client position | Plaintiff/defendant posture summary |
| Strategic goal | Primary objective, one sentence |
| Key risk flag | Single biggest threat to success |

No legal jargon without parenthetical explanation.

### 2. Factual Background

- Organize chronologically or thematically, whichever better supports the strategy, Cite specific documents/exhibits for each material fact, Flag disputed vs. undisputed facts, Omit facts that don't drive legal analysis

### 3. Legal Framework

Per cause of action or defense:

| Component | Detail |
|---|---|
| Claim/defense | Name and statutory/common law basis |
| Elements | Numbered required elements |
| Burden | Who bears it; standard (preponderance, clear & convincing, etc.) |
| Controlling authority | Key statutes, lead cases |
| Strengths | Favorable facts and law |
| Weaknesses | Gaps, adverse facts, unfavorable precedent |
| Counterarguments | Anticipated opposition arguments and rebuttals |

### 4. Motion Strategy

Per anticipated motion:

- **Motion** - type
- **Legal basis** - rule/statute
- **Strategic purpose** - dispositive, narrow issues, force disclosure, etc.
- **Timing** - when to file relative to case schedule
- **Success likelihood** - High/Medium/Low with one-line rationale

### 5. Discovery Strategy

| Category | Plan |
|---|---|
| Must obtain | Key documents/testimony needed; from whom |
| Must protect | Privilege, work product, trade secrets |
| Offensive use | How discovery strengthens affirmative case |
| Defensive use | Limiting opponent's discovery leverage |
| ESI considerations | Preservation obligations, custodians, date ranges |

### 6. Settlement & ADR Assessment

- Settlement posture and recommended range (if assessable)
- Optimal timing for discussions, ADR suitability, mediation, arbitration, early neutral evaluation, BATNA, best/worst/likely trial outcomes vs. settlement value

### 7. Risk Assessment

| Risk Factor | Rating | Impact | Mitigation |
|---|---|---|---|
| Liability exposure | H/M/L | $ range or outcome | Reduction strategy |
| Adverse ruling on key motion | H/M/L | Effect on case | Fallback approach |
| Witness credibility | H/M/L | Claims affected | Corroboration plan |
| Cost trajectory | H/M/L | Estimated burn rate | Cost controls |

### 8. Action Items

Per item: **Action**, **Owner** (if identifiable), **Deadline** (date or trigger), **Priority** (Critical / High / Standard).

## Pitfalls & Checks

- Assess strengths and weaknesses candidly, this is internal strategy, not advocacy, Cite specific evidence and authority for every recommendation; no unsupported assertions, Flag critical deadlines (SOL, response deadlines, scheduling order dates) prominently, Mark unverified governing law or jurisdiction-specific rules with `[VERIFY]`
- Adapt section depth to case complexity, early-stage summaries may have lighter discovery/motion sections, Reference privileged communications by date and subject only; never quote verbatim

---

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
