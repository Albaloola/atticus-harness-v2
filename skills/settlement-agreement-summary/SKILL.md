---
name: settlement-agreement-summary
language: en
description: Generates executive-ready summaries of multi-party U.S. commercial settlement agreements. Extracts payment structure, business conduct covenants, release and waiver provisions, tax obligations, and confidentiality terms into a structured legal memorandum. Use when summarizing fully executed settlement agreements, distilling multi-party commercial settlements for case management, or preparing client-facing settlement summaries for board or executive review. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Settlement Agreement Summary

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

Produces a structured, executive-ready memorandum from a fully executed multi-party commercial settlement agreement for internal case management and client communication.

## Prerequisites

1. **Fully executed settlement agreement** - final signed version (all counterparts)
2. **Ancillary agreements** - referenced exhibits, schedules, or side agreements
3. **Matter identification** - case/matter name and execution date

## Quick Start

Begin with the header block, then produce sections 1-7 in order:

```
SETTLEMENT AGREEMENT SUMMARY
Matter: [Case/Matter Name]
Agreement Date: [Execution Date]
Summary Prepared: [Today's Date]
CONFIDENTIAL, ATTORNEY-CLIENT PRIVILEGED
```

## Memorandum Sections

### 1. Executive Overview (write last; max 150 words)

Narrative: dispute nature, primary consideration, key obligations per party, organizational significance.

### 2. Payment Structure & Financial Terms

| Element | Detail |
|---|---|
| Amounts | Exact figures per party/tranche |
| Schedule | Dates, milestones, sequencing |
| Conditions precedent | Triggers, verification procedures |
| Contingencies | Earn-outs, clawbacks, adjustments |
| Non-cash consideration | Stock, property, services |
| Security/credit support | Escrow, LOCs, guarantees |

Flag obligations extending beyond 12 months with a forward-looking timeline.

### 3. Business Conduct Covenants

For each covenant (non-compete, non-solicitation, confidentiality, transition cooperation, operational mandates), specify:

- **What** - permitted, required, or prohibited conduct
- **Who** - bound parties and affiliates
- **Duration** - end date or triggering termination event
- **Geography/scope** - market, product, or territory limits
- **Breach consequences** - per the agreement
- **Affirmative duties** - compliance programs, certifications, audits, insurance

### 4. Release & Waiver Provisions

- **Scope** - general release (known/unknown) vs. claim-specific
- **Direction** - mutual or unilateral
- **Extended parties** - affiliates, subsidiaries, officers, directors, employees, agents
- **Carve-outs** - retained claims or rights (flag each individually)
- **Unknown claims** - note any Cal. Civ. Code 1542 waivers or equivalent; verify jurisdictional applicability
- **Statutory waivers** - consumer protection, employment, or regulatory rights (note enforceability implications)

### 5. Tax Implications & Reporting

| Item | Detail |
|---|---|
| Payment characterization | Compensatory / punitive / interest / fees / other |
| Tax treatment | Federal and state implications as stated |
| Gross-up clauses | Scope, caps, limitations |
| Withholding | Requirements and responsible party |
| Reporting | 1099s, informational returns, disclosures |
| Tax indemnification | Scope, cap, procedures, duration |
| Audit cooperation | Consistent position requirements, documentation |

### 6. Additional Material Terms

- **Confidentiality** - duration, permitted disclosures (advisors, regulators, legal proceedings)
- **Dispute resolution** - post-settlement mechanism, governing law, venue
- **Modification** - unanimous written consent vs. unilateral rights
- **Representations & warranties** - scope and survival period
- **Conditions precedent** - to settlement effectiveness
- **Integration clause** - complete expression confirmation
- **Survival provisions** - which obligations survive vs. terminate

### 7. Implementation Flags (if applicable)

Include when settlement involves complex sequencing or cross-functional obligations:

- **Immediate actions** - obligations due within 30 days of execution
- **Upcoming deadlines** - chronological list of material dates
- **Ongoing monitoring** - recurring compliance obligations by department (Finance, HR, Operations, Tax, Legal)
- **Ambiguities** - unresolved cross-references or provisions requiring further diligence

## Style Guidelines

- Use the agreement's defined terms verbatim; italicize on first use, Tables for financial schedules and parallel-structure comparisons; narrative prose for analysis, Active voice, present tense for ongoing obligations; past tense for completed actions, Target 3-7 pages depending on complexity, Flag ambiguous or conflicting provisions

## Required Footer

Include at document end:

> *This summary is prepared for informational purposes only, does not constitute legal advice, and is not a substitute for review of the complete settlement agreement.*

## Common Pitfalls

- Missing carve-outs in release provisions, always enumerate retained claims individually, Overlooking Cal. Civ. Code 1542 waiver applicability outside California, Failing to flag obligations with durations beyond 12 months, Omitting cross-functional implementation deadlines from the flags section, Inconsistent use of defined terms from the agreement

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
