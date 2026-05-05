---
name: climate-legislation-summary
language: en
description: Produces structured, citation-ready summaries of climate change legislation for compliance and policy analysis. Use when summarizing climate laws, carbon pricing (tax, cap-and-trade), emissions targets, renewable mandates, adaptation requirements, or international climate agreements. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Climate Legislation Summary

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

Generates a structured summary of climate change statutes, regulations, or treaties with section citations and compliance impact analysis.

## Quick Start

Gather before summarizing:

1. Final text or official versioned source of the law
2. Jurisdiction, enacting authority, effective date(s), current status
3. Implementing regulations or guidance (if any)
4. Target industry or client context (optional)

## Required Sections

Produce each section in order:

| Section | Content | Notes |
|---|---|---|
| Citation & Status | Full citation, instrument type, dates, amendments, status | Mark proposed vs enacted |
| Scope & Authority | Jurisdiction, regulator, covered entities, geographic scope | Federal/state/international |
| Executive Overview | 3 to 4 plain-language sentences: purpose, mechanisms, outcomes | - |
| Core Provisions | Key obligations, thresholds, timelines, exemptions | Cite specific sections |
| Compliance & Reporting | MRV, verification, registry, reporting cadence, deadlines | - |
| Enforcement | Oversight body, penalties, inspections, private rights | Include penalty ranges |
| Business Impacts | Affected sectors, costs, transition periods, incentives | Quantify where possible |
| Implementation Notes | Required permits, pending rulemaking, guidance gaps | Identify responsible agency |
| Legal Considerations | Preemption, litigation, constitutional issues, sunset/review | Cite docket if known |
| Forward Look | Proposed amendments, expected rulemakings, policy fit | Label speculation clearly |
| Glossary | Key technical terms, 1 to 2 lines each | Define once, use consistently |

## Core Provisions Checklist

When drafting Core Provisions, confirm coverage of:

- Covered entities (sector, size, emissions threshold)
- GHG scope (Scope 1/2/3 if applicable)
- Baseline year and reduction targets, Compliance deadlines and phase-in schedule, Compliance pathways (offsets, trading, credits)
- Exemptions and de minimis thresholds, Data collection and reporting requirements

## Conditional Addenda

Include the relevant addendum only when the legislation involves that mechanism.

### Carbon Pricing

- Mechanism type (tax, cap-and-trade, hybrid), rate/cap formula, escalation schedule, Covered sources, exemptions, revenue allocation, rebates, Border adjustments, leakage provisions, registry/market infrastructure, Price collar, floor, or ceiling rules

### International Agreement

- Binding vs voluntary commitments; NDCs or equivalent, Finance and technology transfer provisions, Transparency framework, review cycle, compliance/dispute mechanisms

### Renewable/Adaptation

- Renewable portfolio standards or mandates; procurement/credit trading rules, Adaptation planning requirements; infrastructure resilience standards

## Pitfalls

- Always use exact section citations. Mark uncertain references with `[VERIFY]`.
- Distinguish enacted law, proposed legislation, and guidance, label each clearly.
- If a detail is absent, state "Not specified in source."
- Avoid policy advocacy; focus on legal obligations and operational impacts.
- When comparing jurisdictions, normalize by mechanism type and stringency.
- Keep executive overview to 3 to 4 sentences; use tables for dense material.

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
