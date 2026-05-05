---
name: pi-demand-summary
language: en
description: Generates structured personal injury demand summaries covering liability analysis, chronological injury documentation, itemized damages, and settlement positioning. Covers MVA, premises liability, product defect, and medical malpractice claims. Use when preparing settlement packages, demand letters, pre-trial evaluations, or insurance adjuster negotiations for plaintiff-side PI matters. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Personal Injury Demand Summary

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

Synthesizes case materials into a persuasive demand summary for settlement negotiations or internal case evaluation.

## Prerequisites

Gather before starting:

- **Case file**: police/incident reports, witness statements, photos, correspondence
- **Medical records**: ER through current treatment, imaging, surgical notes, discharge summaries
- **Billing records**: itemized medical bills from all providers
- **Wage records**: pay stubs, tax returns, employer verification letters
- **Expert reports** (if available): life care plans, vocational assessments, accident reconstruction
- **Insurance info**: known policy limits, prior adjuster correspondence

## Quick Start

Structure the demand summary in five sections:

1. **Executive Overview** - incident snapshot and demand amount
2. **Liability Analysis** - duty, breach, evidence, comparative fault
3. **Injury Documentation** - chronological treatment narrative
4. **Damages Itemization** - economic + non-economic breakdown
5. **Settlement Positioning** - verdicts, risk assessment, terms

## Core Workflow

### 1. Executive Overview

Include: incident date/location, parties, case type (MVA / premises / product defect / med mal), one-sentence liability theory, total demand amount.

### 2. Liability Analysis

- [ ] Identify defendant's specific acts/omissions constituting breach
- [ ] Cite supporting evidence: police reports, eyewitness accounts, expert opinions
- [ ] Reference applicable legal standards (traffic laws, building codes, statutes)
- [ ] Address and rebut comparative fault arguments
- [ ] State liability apportionment conclusion

### 3. Injury Documentation (Chronological)

Organize by treatment phase:

- **Emergency/acute**: date, facility, complaints, diagnoses, imaging
- **Surgical**: procedures, dates, operative findings, hardware
- **Post-op/rehab**: PT/OT frequency/duration, progress, functional benchmarks
- **Ongoing/maintenance**: current treatment, medications, remaining complaints
- **Prognosis**: MMI status, permanent impairments, future treatment needs

Distinguish **objective findings** (imaging, labs, surgical notes) from **subjective complaints**. For pre-existing conditions, delineate aggravation vs. new injury causation.

### 4. Damages Itemization

**Economic damages** - itemize each with source and amount:

- Past medical expenses (by provider, date, amount)
- Future medical expenses (life care plan or physician projection)
- Past lost wages (employment records, pay period, rate)
- Future lost earning capacity (vocational expert or wage analysis)
- Out-of-pocket (transportation, home mods, Rx, assistive devices)

**Non-economic damages** - support each with specific evidence:

- Pain and suffering (treatment intensity, duration, medication)
- Emotional distress (mental health treatment, documented impact)
- Loss of enjoyment of life (activities curtailed, before/after)
- Permanent disfigurement/disability (functional limitations, rating)
- Loss of consortium if applicable (spousal testimony, relationship impact)

Present totals: economic subtotal + non-economic subtotal = total demand.

### 5. Settlement Positioning

- [ ] Cite comparable jury verdicts in the jurisdiction
- [ ] Note policy limits considerations
- [ ] Assess litigation risk (strengths and vulnerabilities)
- [ ] Evaluate causation strength
- [ ] Estimate comparative fault exposure percentage
- [ ] Set response deadline and conditions (confidentiality, structured settlement, liens)

## Pitfalls and Checks

- **Every factual assertion must trace to a specific document** - cite by document name/date
- **Flag documentation gaps** needing additional discovery
- **Do not fabricate medical causation** - rely on treating physician opinions only
- **Note jurisdiction-specific damage caps** (e.g., non-economic caps) if applicable, Mark unverified legal citations with `[VERIFY]`
- Maintain persuasive but professional tone, specific human impact, not emotional appeals, Present damages credibly with negotiation room

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
