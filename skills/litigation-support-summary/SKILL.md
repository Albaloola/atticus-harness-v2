---
name: litigation-support-summary
language: en
description: Generates structured management summaries of active commercial litigation matters. Covers case overview, procedural posture, strategy, deadlines, discovery status, budget, and risk analysis. Use when preparing case status reports, onboarding stakeholders to active litigation, or conducting periodic case reviews. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Litigation Support Summary

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

Synthesizes case materials into a structured management document (5-10 pages) for legal teams and clients to track progress on active litigation.

## Quick Start

1. Gather inputs: pleadings, docket sheet, court orders, discovery materials, scheduling orders
2. Follow the six-section output structure below
3. Apply the quality checks before delivering

## Required Inputs

- **Case file**: pleadings, court orders, docket sheet, case caption/number, presiding judge
- **Discovery materials**: requests, responses, production logs, deposition transcripts
- **Scheduling orders**: court-imposed deadlines, trial date, expert disclosure dates
- **Correspondence** (if available): strategic memos, client communications
- **Budget/staffing** (if available): litigation budget, team assignments

## Output Structure

### 1. Case Overview & Procedural Posture

| Field | Content |
|-------|---------|
| Caption & Docket | Full case caption, docket number |
| Court & Judge | Court, jurisdiction, presiding judge |
| Parties | All parties with roles |
| Claims & Defenses | Each cause of action/counterclaim with status |
| Procedural Stage | Pleadings / discovery / pre-trial / trial |
| Significant Rulings | Key motions, hearings, orders |

### 2. Strategy & Theory of Case

- Primary legal theories and key factual arguments, Desired outcome (damages, injunctive relief, dismissal, etc.)
- Strategy evolution based on discovery/rulings/new facts, Candid strengths/weaknesses for both sides:

| Factor | Our Position | Opposing Position |
|--------|-------------|-------------------|
| Strongest argument | | |
| Key vulnerability | | |
| Critical unresolved issue | | |

- ADR/settlement posture: demand/offer history, mediation prospects

### 3. Timeline & Critical Deadlines

Chronological table covering discovery cutoffs, expert disclosures, dispositive motion deadlines, pretrial conferences, trial date, and internal targets.

| Date | Event/Deadline | Status | Action Required |
|------|---------------|--------|-----------------|
| _past_ | Event | Complete | -- |
| _upcoming_ | Deadline | Pending | Owner + prep needed |

Flag deadlines requiring immediate attention.

### 4. Discovery Status & Key Evidence

**Written discovery** (interrogatories, doc requests, RFAs): track served, received, outstanding, disputes.

**Depositions**: witness, date, status (completed/scheduled/needed), key testimony.

**Critical evidence**: most significant documents/testimony and relevance to case theory.

**Open issues**: privilege disputes, protective orders, Daubert challenges, outstanding productions.

### 5. Resource Allocation & Budget

Track by category (attorney fees, experts, e-discovery, court reporters, travel): budget, spent, projected remaining. Include team assignments and resource constraints.

Omit if no budget data available; note the gap and recommend gathering it.

### 6. Risks, Opportunities & Recommendations

- **Risks**: adverse outcome exposure (liability + damages range), cost escalation triggers, reputational concerns
- **Opportunities**: favorable developments, settlement leverage, dispositive motion prospects
- **Recommendations**: numbered, actionable next steps with priority (High/Medium/Low) and owner

## Quality Checks

- Cite specific documents by name and page/paragraph when asserting facts, Distinguish established facts, disputed facts, and legal contentions, Provide candid assessments, not advocacy; flag information gaps, Use accessible language while maintaining legal precision; define terms of art on first use, Note the summary date; frame as a living document, Mark as attorney-client privileged / work product as appropriate

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
