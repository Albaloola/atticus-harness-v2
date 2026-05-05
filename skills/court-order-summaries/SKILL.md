---
name: court-order-summaries
language: en
description: Generates structured summaries of court orders and decisions, extracting obligations, deadlines, monetary awards, injunctive relief, and procedural requirements into an action-oriented reference. Flags ambiguities for attorney review. Converts relative timeframes to calendar dates. Use when summarizing court orders, judgments, injunctions, consent decrees, or compliance orders. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Court Order Summaries

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

Transforms a court order into a structured reference covering who must do what, by when, and with what consequences. Scoped to U.S. federal and state courts.

## Prerequisites

- Full text of the court order with entry date visible, Identification of all named parties and roles, Applicable court rules for computing time

## Quick Start

1. Identify the entry date and all named parties
2. Extract obligations, deadlines, and monetary awards into the output sections below
3. Convert every relative timeframe ("within 30 days") to a specific calendar date
4. Flag ambiguities, never resolve or gap-fill

## Output Structure

### 1. Executive Overview (2 to 3 sentences)

Core holding, most urgent deadline, primary obligated party. Flag anything requiring immediate action (TROs, preliminary injunctions, sub-10-day deadlines) here.

### 2. Parties & Roles

| Party | Role | Obligations Under This Order |
|-------|------|------------------------------|
| [Name] | Plaintiff / Defendant / Third Party | Brief description |

### 3. Deadlines & Required Actions

| Party | Action Required | Deadline (Date) | Order Ref. | Consequence if Missed |
|-------|----------------|-----------------|------------|----------------------|

- Convert relative timeframes to calendar dates from the entry date, Account for weekends, court holidays, and time-computation rules, Note stays or deadline suspensions pending appeal

### 4. Monetary Obligations

| Obligor | Obligee | Amount | Type | Due Date | Order Ref. |
|---------|---------|--------|------|----------|------------|

Type: judgment / sanction / fee / bond.

### 5. Injunctive & Equitable Relief

| Type | Party Bound | Conduct Required or Prohibited | Duration / Conditions | Order Ref. |
|------|------------|-------------------------------|----------------------|------------|

Types: mandatory injunction, prohibitory injunction.

### 6. Procedural & Ongoing Requirements

- Reporting obligations (frequency, recipient, format)
- Notice provisions, Compliance certifications, Court supervision or monitoring requirements

### 7. Findings & Future Proceedings

- Findings of fact or conclusions of law with precedential or preclusive effect, Rights preserved or limited (appeal, modification, enforcement)
- Conditions precedent or contingent obligations

### 8. Ambiguities & Attorney Review Items

List provisions that are unclear, internally inconsistent, or require legal interpretation. Do not resolve ambiguities, flag them for attorney review.

## Pitfalls & Checks

- **Fidelity**: Reproduce deadlines and obligations verbatim or in direct paraphrase; never alter scope
- **No gap-filling**: If the order is silent on a consequence or procedure, state that explicitly, do not infer
- **Cite everything**: Every obligation, deadline, and finding must reference its ¶, page, or § number
- **Immediate flags first**: Anything actionable within 7 days must appear in the Executive Overview
- **Plain language**: Use accessible terms; retain legal terms of art with brief parenthetical context
- **Jurisdiction header**: Note the specific court and jurisdiction at the top of every summary

---

**Key changes made:**

- **Removed `tags`** - not part of the Agent Skills spec; discovery relies on `description` keywords
- **Tightened description** - same trigger guidance, fewer tokens
- **Added Quick Start** - gives the agent an immediate action sequence before the full output template
- **Removed decorative `---` dividers** between output subsections, unnecessary token cost
- **Removed emoji** (⚠) - per codebase convention
- **Compressed table annotations** - e.g., monetary type values moved to a single inline note instead of a verbose column header
- **Renamed "Guidelines" to "Pitfalls & Checks"** - aligns with best-practice body structure and signals actionable guardrails
- **Reduced from 96 lines to 72 lines** - well under the 500-line budget

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
