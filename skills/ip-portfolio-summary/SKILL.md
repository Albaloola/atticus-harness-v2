---
name: ip-portfolio-summary
language: en
description: Summarizes and analyzes a U.S. corporate IP portfolio covering patents, trademarks, copyrights, and trade secrets. Use when conducting an IP audit, due diligence review, M&A assessment, licensing strategy, executive briefing, or portfolio optimization. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# IP Portfolio Summary

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

Produces a structured IP portfolio summary with inventory, status tracking, strategic analysis, and action items for executive and legal decision-making.

## Prerequisites

Gather before starting:

- **Source materials** - patent docket, trademark docket, copyright records, trade secret inventories, licensing agreements, prior IP audits
- **Business context** - current products/services, planned markets, strategic priorities
- **Jurisdiction scope** - confirm U.S.-only or whether to include foreign portfolios

## Quick Start

1. Collect and validate source documents
2. Build the portfolio inventory tables (section 2 below)
3. Populate the deadline tracker
4. Draft strategic analysis and risk assessment
5. Produce prioritized action items
6. Mark report **Privileged & Confidential / Attorney Work Product** when applicable

## Output Structure

### 1. Executive Summary

- Total counts by asset type and status, Top 5 strategically critical assets, Key deadlines in next 6 to 12 months, Immediate risks and opportunities

### 2. Portfolio Inventory

**Patents**

| Asset ID | Title | Jurisdiction | Filing / Grant / Expiration | Status | Inventors | Tech Area | Product Link | Strategic Value |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

**Trademarks**

| Mark | Type | Jurisdiction | App/Reg No. | Filing / Reg / Renewal | Classes | Status | Brand Importance | Enforcement Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

**Copyrights**

| Work | Type | Reg No. / Date | Author/Owner | Term | Status | Commercial Use | Registration Gap |
| --- | --- | --- | --- | --- | --- | --- | --- |

**Trade Secrets**

| Asset | Description | Business Owner | Protection Measures | Access Controls | Risk Level | Core Product Link |
| --- | --- | --- | --- | --- | --- | --- |

### 3. Deadline Tracker

- Patent maintenance fees, Trademark renewals and declarations of use, Office action response deadlines, Upcoming expirations

### 4. Strategic Analysis

- Coverage vs. current and planned markets, Portfolio age distribution and cliff risks, Gaps by product line or technology, Defensive vs. offensive value, Licensing and monetization opportunities, Competitive positioning

### 5. Risks, Disputes, and Encumbrances

- Litigation, oppositions, cancellations, Joint ownership, licenses granted, security interests, Invalidity or non-use risks

### 6. Action Items

- Filings or registrations to close gaps, Assets to abandon or consolidate, Enforcement or watch actions, Portfolio management improvements

## Pitfalls and Checks

- Verify all status and dates against the most current source documents, Separate facts from assessments, label any assumptions explicitly, Do not generalize beyond the stated jurisdictional scope, Flag missing source data and request it before proceeding, Do not opine on validity or infringement without supporting evidence, Use consistent status labels: `pending`, `granted/registered`, `abandoned`, `expired`, `lapsed`

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
