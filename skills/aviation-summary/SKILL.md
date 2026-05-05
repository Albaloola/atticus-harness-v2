---
name: aviation-summary
language: en
description: Atticus UK/Scots legal skill for aviation-summary. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Aviation Law Summary

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

Produces a structured, defensible aviation-law summary for counsel, aviation operators, regulators, and legal teams.

## Prerequisites

Gather before starting:

1. **Issue statement** - legal question, party posture, desired depth, decision use (advisory, compliance memo, litigation prep).
2. **Jurisdiction** - UK/Scottish at minimum; add foreign states when international carriage is involved.
3. **Sources** - uploaded documents + whether fresh legal research is permitted.
4. **Audience** - client-facing vs internal counsel tone.
5. **Constraints** - confidentiality limits, preferred citation standards.

## Quick Start

1. Triage sources (uploaded files → primary law → secondary → gap list).
2. Build authority table with citations, pinpoints, and confidence levels.
3. Draft summary sections (see below).
4. Run the analytical checklist.
5. Mark every unconfirmed authority with `[VERIFY]`.

## Core Workflow

### 1. Source Triage

| Priority | Source | Action |
|---|---|---|
| 1 | Uploaded matter files | Extract facts, governing instruments, cited authorities, dates, procedural posture |
| 2 | Primary law | Pull statutes/regulations/treaties/cases; capture exact text and effective dates |
| 3 | Secondary sources | Context/trend analysis only; never sole basis for a legal rule |
| 4 | Gap assessment | Flag missing facts/authority; list what is needed to complete |

### 2. Authority Capture

| Type | Citation | Pinpoint | Jurisdiction | Core Holding/Rule | Relevance | Confidence |
|---|---|---|---|---|---|---|
| Statute/Regulation | | | UK/Scottish/EU/Foreign | | | |
| Treaty/Convention | | | | | | |
| Case Law | | | | | | |
| Agency Rule/Order | | | | | | |

Add `[VERIFY]` to any citation, version, or quote not independently confirmed.

### 3. Required Summary Sections

| Section | Minimum Content |
|---|---|
| Executive Overview | Core issue, controlling framework, top 5 takeaways, immediate risks |
| Regulatory Stack | CAA regime, DfT/EASA overlays, retained EU law interactions, treaty intersections |
| Jurisdictional Map | Domestic vs international application; country-of-treatment analysis |
| Case Law Matrix | Case, citation, facts, holding, reasoning, practical effect, splits |
| Liability & Exposure | Accident/cargo/passenger exposure; limitation defences; insurance/indemnity |
| Operations & Compliance | Certification, training, maintenance, reporting, record-retention, remedial controls |
| Enforcement & Proceedings | Civil/administrative pathways, penalties, certificate actions, appeals, criminal thresholds |
| Emerging Issues | UAS, advanced air mobility, commercial space overlaps, open regulatory questions |
| Table of Authorities | OSCOLA-formatted citations with pinpoints |
| Recommendations | Priority actions, documentation plan, escalation points, monitoring triggers |

### 4. Analytical Checklist

- Distinguish regime by claim type:
  - Passenger/cargo claims: international carriage framework vs domestic.
  - Operational compliance: routes, slots, code-sharing.
  - Incident/accident: regulatory reporting vs civil exposure.
- Determine if treaty regime pre-empts or coexists with UK law.
- Confirm whether liability caps/defences apply and when lost.
- Separate regulatory violation from delictual exposure (no automatic civil shield).
- Track retroactivity and effective-date impacts.

## Pitfalls

- **No fabricated citations** - never invent holdings, citations, or amendment dates.
- **Thin sources** - state "insufficient authority" and list exact missing items.
- **Jurisdictional uncertainty** - flag explicitly (Scots law overlay, treaty ratification timelines, forum clauses).
- **Scope caveat** - note when external search was used vs document-only analysis.
- **UK/CAA first** - escalate to foreign-source harmonisation only when the fact pattern requires it.
- **Neutral tone** - evidence-first wording; avoid overbroad conclusions.

## Scotland/UK Adaptation

The following adaptations apply when this skill is used for Scottish or UK proceedings:

**Regulatory framework:** Replace FAA with CAA (Civil Aviation Authority, UK). Replace DOT with DfT (Department for Transport). Replace TSA with DfT/Home Office aviation security.

**Legislation:** Replace 14 CFR with UK Air Navigation Order (ANO) 2016 (SI 2016/765), retained EU Regulation (EU) 2018/1139 (EASA Basic Regulation, retained), and related UK statutory instruments.

**Parts/Operations:** Part 121, 125, 135 → UK equivalents under ANO (Part CAT, Part NCC, Part NCO, etc., via retained EU EASA regulatory structure; some diverging post-Brexit).

**Treaties:** Montreal Convention 1999 and Warsaw Convention apply in UK (Carriage by Air Acts). UK ratified Montreal Convention independently post-Brexit.

**Accident investigation:** AAIB (Air Accidents Investigation Branch) replaces NTSB.

**Liability:** Carriage by Air Act 1961 (Warsaw) and Carriage by Air Act (Application of Provisions) Order 1967; EU Regulation 261/2004 retained as UK law (with amendments) for denied boarding/delay/cancellation.

**Insurance:** EC Regulation 785/2004 (retained) on insurance requirements for air carriers.

**Economic regulation:** DfT handles route allocation, ATI (air transport licensing), and slot allocation (Airports Slot Allocation Regulations, retained).

**Environmental:** CAA handles environmental regulation; UK ETS for aviation emissions; airports subject to planning consent under Scottish planning law.

**Competition:** CMA (Competition and Markets Authority) handles aviation competition matters, not DOT.

**Security:** Aviation Security Act 1982 (UK), not TSA regulations.

**Case citations:** Use OSCOLA citation format, not Bluebook.

**Courts:** In Scotland, aviation disputes may be heard in Court of Session or Sheriff Court. Admiralty/aviation jurisdiction may overlap.

[VERIFY: Confirm post-Brexit retained EU law status for specific regulations, and Scottish Aviation and Marine (Scotland) Act provisions where applicable.]

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
