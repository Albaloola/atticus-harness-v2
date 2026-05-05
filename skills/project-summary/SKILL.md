---
name: project-summary
language: en
description: Generates structured legal project management summaries with RAG status indicators, budget variance analysis, and prioritized action items. Use when creating matter status reports, project updates, portfolio reviews, or resource allocation summaries for litigation, transactional, or regulatory matters. [Atticus UK/Scots refined]
tags:
- corporate, litigation, regulatory, summarization, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Project Management Summary

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

Produces a stakeholder-ready project status summary from matter files, task lists, budgets, and correspondence.

## Prerequisites

1. **Matter files** - pleadings, contracts, filings, or deal documents defining scope
2. **Task/milestone data** - completed and upcoming deliverables with dates
3. **Budget information** - original budget, current spend, projections
4. **Team roster** - attorneys, paralegals, experts, co-counsel with role assignments
5. **Correspondence/status notes** - emails, memos, or prior status reports

## Output Structure

### 1. Executive Overview

Two to three sentences covering current project status, phase, and any critical issues requiring immediate attention.

### 2. Project Objectives

| Element | Detail |
|---|---|
| Overarching goal | Strategic outcome aligned to client business objective |
| Specific deliverables | Enumerated list with target dates |
| Success criteria | Measurable outcomes or legal benchmarks |
| Governing constraints | Contractual obligations, regulatory deadlines, court orders |

### 3. Resources

**Team Composition:**

| Name/Role | Allocation % | Primary Responsibilities | Notes |
|---|---|---|---|

Include lead counsel, associates, paralegals, and external experts.

**Budget Summary:**

| Metric | Amount |
|---|---|
| Original budget | |
| Spent to date | |
| Projected total | |
| Variance | |
| Key cost drivers | |

If over budget, include mitigation strategy.

### 4. Timeline

**Completed Milestones:**

| Milestone | Target Date | Actual Date | Status |
|---|---|---|---|

**Upcoming Deliverables:**

| Deliverable | Target Date | Owner | Dependencies | Risk Level |
|---|---|---|---|---|

Flag timeline risks (pending rulings, third-party delays, resource constraints) and note contingency plans for critical-path items.

### 5. Status Assessment

Rate each dimension **R/Y/G** (Red/Yellow/Green):

| Dimension | Rating | Notes |
|---|---|---|
| Schedule adherence | | |
| Budget compliance | | |
| Work product quality | | |
| Team capacity | | |
| Client satisfaction | | |
| Risk exposure | | |

For any Yellow or Red: state root cause, corrective action, assigned owner, and remediation deadline.

### 6. Risk Register

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|

Rate likelihood and impact as H/M/L. Flag matter-type-specific risks:

- **Litigation** - adverse rulings, emerging legal theories, discovery issues
- **Transactional** - regulatory changes, counterparty issues, market conditions
- **Regulatory** - enforcement trends, compliance gaps, agency communications

### 7. Action Items

Prioritize by urgency: Immediate / This Week / This Month / Strategic.

| # | Action | Owner | Due Date | Priority |
|---|---|---|---|---|

Include process improvement recommendations where supported by project performance data.

## Guidelines

- **Privilege protection** - Mark litigation strategy or attorney mental impressions as `[PRIVILEGED]`. Review before external distribution.
- **Audience calibration** - Client-facing: emphasize business impact, minimize jargon. Internal: include granular task detail and legal analysis.
- **Tiered access** - Note where redaction is needed if stakeholders have different information rights.
- **Conflicts/ethics** - Flag conflict of interest, malpractice exposure, or ethical concerns in the Risk Register.
- **Data-driven** - Anchor assessments to specific documents, dates, and metrics. Do not speculate without supporting evidence.

---

**Key changes made:**

- **Description** - trimmed from 50+ words to a tighter statement while preserving trigger guidance
- **Removed empty placeholder rows** in Team Composition table (replaced with inline instruction)
- **Consolidated Budget table** - dropped the "Mitigation (if over)" row into a one-line note below the table
- **Action Items table** - dropped `Resources Needed` and `Success Criteria` columns to reduce noise; kept the essential tracking fields
- **Risk Register** - merged the three separate matter-type paragraphs into a compact bulleted list
- **Guidelines** - cut the `Formatting` bullet (redundant with table structure already shown) and tightened each remaining bullet to one line
- **Overall** - ~35% fewer tokens while preserving all seven output sections and legal domain accuracy

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
