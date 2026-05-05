---
name: contract-summarization
language: en
description: Generates structured summaries of U.S. contracts capturing parties, business terms, legal provisions, termination, and dispute resolution. Flags one-sided, ambiguous, or missing standard provisions. Use when summarizing agreements for due diligence, contract review, compliance monitoring, or transaction management, including multi-document sets with exhibits, schedules, and amendments. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Summarization

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

Produces a structured summary of all material terms, obligations, rights, and risks in a contract, enabling informed decisions without a full read.

## Quick Start

1. Gather contract document(s) - main agreement plus exhibits, schedules, amendments, SOWs
2. Identify reviewing party's role (buyer/seller, licensor/licensee) if provided, calibrates risk flags
3. Produce summary using the output structure below, citing section numbers for every extracted term

## Output Structure

### 1. Contract Overview

| Field | Detail |
|---|---|
| Parties | Full legal names + roles |
| Effective Date | |
| Term / Expiration | Duration + auto-renewal trigger |
| Subject Matter | One-line purpose |
| Governing Law / Venue | |

### 2. Core Business Terms

- **Scope / Deliverables** - what each party must do or provide
- **Pricing & Payment** - amounts, timing, invoicing, late fees (quote exactly)
- **Performance Obligations** - milestones, SLAs, acceptance criteria

### 3. Legal Provisions

- **Reps & Warranties** - by each party; survival period
- **Indemnification** - scope, carve-outs, procedures (notice, control of defense)
- **Liability Cap** - amounts/multiples, excluded damages, exclusions to cap
- **IP Ownership & Licensing** - work-for-hire, license grants, residuals
- **Confidentiality** - scope, duration, exceptions, return/destroy
- **Non-Compete / Non-Solicit** - duration, geographic scope, covered activities (if present)

### 4. Termination & Renewal

- For cause, triggering events, cure period, notice, For convenience, availability, notice period, payment on exit, Effects, wind-down, surviving obligations, return of materials, Auto-renewal, terms and opt-out deadlines

### 5. Dispute Resolution

- Governing law and jurisdiction, Arbitration / mediation (rules, seat, language)
- Jury trial waiver, Fee-shifting provisions

### 6. Risk Flags

- Unusual or one-sided terms, Missing standard provisions for this contract type, Inconsistencies between main agreement and exhibits, Ambiguous language requiring clarification

## Checks

- **Quote precisely** - monetary amounts, dates, notice periods, defined terms as written
- **Cite sections** - every extracted term references contract section or page
- **Objective tone** - summarize as written; flag concerns without inserting legal opinion
- **Multi-document sets** - capture terms from all related documents; note which governs on conflicts
- **U.S. jurisdiction** - optimized for U.S. agreements; flag if non-U.S. law governs

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
