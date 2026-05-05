---
name: energy-regulation-summaries
language: en
description: Generates structured summaries of U.S. energy sector regulations. [Atticus UK/Scots refined]
tags:
- SCOTS and landmark cases with compliance-focused analysis. Use when summarizing FERC orders, state PUC decisions, renewable energy incentives, NEPA compliance, environmental review requirements, or energy case law for legal professionals, policymakers, or industry stakeholders.
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Energy Regulation Summary

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

Produces structured regulatory intelligence covering U.S. energy regulations and case law, organized by utility regulation, renewable incentives, environmental compliance, and federal/state interactions.

## Quick Start

Gather before drafting:

1. **Scope** - time period, jurisdiction(s), topic focus (utility, renewables, environmental, or all)
2. **Sources** - specific regulations, orders, or case citations; if none provided, generate from general knowledge with `[VERIFY]` flags
3. **Audience** - legal/technical specialist or non-specialist stakeholder

## Output Structure

### 1. Executive Overview
- 3 to 5 most consequential developments in the period, Key regulatory trends and directional signals

### 2. Utility Regulation

For each regulation, capture:

| Field | Content |
|-------|---------|
| Authority | Issuing agency (FERC, state PUC, etc.) |
| Effective Date | Precise date |
| Core Requirements | Rate-making, service obligations, grid modernization |
| Affected Parties | Regulated entities |
| Compliance Deadlines | Specific dates, never use "soon" |
| Pending Challenges | Litigation or rehearing status |

Topics: rate-making, service territory obligations, grid modernization, commission decisions, consumer protection.

### 3. Renewable Energy Incentives

| Mechanism | Status | Key Terms |
|-----------|--------|-----------|
| Federal tax credits (ITC/PTC) | | |
| Renewable Portfolio Standards | | |
| Feed-in tariffs / net metering | | |
| State incentive programs | | |

### 4. Environmental Compliance
- **NEPA** - EA vs. EIS triggers, applicable thresholds, recent guidance
- **State review** - analogous processes, coordination requirements
- **GHG regulations** - emission caps, reporting, intersection with siting
- **Permitting conflicts** - where environmental mandates constrain energy infrastructure

### 5. Significant Cases

Per case:
```
Court / Parties / Citation [VERIFY if uncertain]
Key Facts / Legal Issues / Holding / Reasoning
Industry Implications
```

### 6. Federal/State Interaction, Preemption issues and jurisdictional conflicts, Regulatory gaps or inconsistencies, Cooperative federalism mechanisms

### 7. Compliance Action Items, Required actions by entity type, Documentation and reporting obligations, Enforcement mechanisms and penalty exposure

### 8. Forward Look, Pending rulemakings and proposed legislation, Cases under appeal, Emerging technology gaps (distributed generation, storage, hydrogen)

## Pitfalls and Checks

- Cite with CFR/USC references and reporter citations; flag uncertain citations with `[VERIFY]`
- Distinguish final rules from proposed rules and interim guidance, Flag federal/state conflicts explicitly, do not gloss over them, For non-specialist audiences, define technical terms (RPS, PURPA, FERC jurisdiction)
- Maintain neutral analytical framing, no policy preferences, Scope is U.S. federal and state; note when analysis is limited to specific states

## Scotland/UK Adaptation

### Applicable law, Replace FERC/US energy agencies with **Ofgem** (Office of Gas and Electricity Markets) for GB energy regulation; **Scottish Energy Strategy** for devolved matters.
- Replace state PUCs with the **Utility Regulator** (Northern Ireland) and **Scottish Government Energy Directorate** for devolved policy.
- UK energy regulation is reserved to Westminster, but Scottish Ministers have devolved powers over energy efficiency, heat networks, and onshore renewables consenting.

### Agency equivalents

| US Agency | UK/Scottish Equivalent |
|---|---|
| FERC (transmission/interstate) | Ofgem, regulates electricity and gas networks in GB |
| DOE (Department of Energy) | DESNZ (Department for Energy Security and Net Zero) |
| EPA (environmental review) | SEPA (Scottish Environment Protection Agency) / NatureScot |
| FERC hydro licensing | Marine Scotland Licensing / Scottish Government |
| State PUC | Ofgem (single GB regulator); Scottish Government for onshore consent |
| NEPA (environmental impact) | EIA (Environmental Impact Assessment) Regulations (Scotland) |
| IRS (renewable tax credits) | HMRC, Contracts for Difference (CfD) / Renewables Obligation (RO) |

### Key statutes and policies

| US | UK/Scottish Equivalent |
|---|---|
| PURPA | Electricity Act 1989 (licensing regime) |
| FPA / NGA | Gas Act 1986; Electricity Act 1989; Energy Act 2013 |
| ITC / PTC tax credits | CfD (Contracts for Difference); Renewable Obligation (RO); Smart Export Guarantee (SEG) |
| Renewable Portfolio Standards | Renewable Obligation (RO) / CfD (GB-wide); Scottish Government energy targets |
| NEPA (environmental review) | Environmental Impact Assessment (Scotland) Regulations 2017; Habitats Regulations Appraisal |
| Clean Air Act / Clean Water Act | Environmental Protection Act 1990; Water Environment and Water Services (Scotland) Act 2003 |
| GHG reporting | UK Emissions Trading Scheme (UK ETS); Climate Change (Scotland) Act 2009 (net-zero 2045 target) |

### Key differences for practitioners
1. **Ofgem vs. PUC**: Ofgem is a single GB-wide regulator (not state-level). The Scottish Government has no equivalent of a state PUC; its role is limited to consenting, planning, and devolved energy policy.
2. **Net zero target**: Scotland has a statutory net-zero target of **2045** (earlier than UK 2050) under the Climate Change (Scotland) Act 2009 (amended 2019).
3. **Solar and onshore wind consenting**: Planning permission in Scotland is granted by local authorities (or Energy Consents Unit for >50MW onshore wind), not by Ofgem.
4. **Contracts for Difference**: The UK's primary renewable energy support mechanism is the CfD scheme (not tax credits). The RO is closed to new generation.
5. **Hydro licensing**: Marine Scotland grants seabed leases; Ofgem issues generation licences. No equivalent of FERC Part I licensing.
6. **Heat networks**: The Heat Networks (Scotland) Act 2021 is unique to Scotland; no UK-wide equivalent.
7. **Carbon pricing**: UK ETS applies across GB (including Scottish power sector); carbon price floor (Carbon Price Support) replaces the US Clean Power Plan.
8. **Brexit**: Retained EU energy law (REMIT, TEN-E) is being reviewed; divergence between GB and EU carbon pricing is likely.
9. **GBP**: All financial values should be in pounds sterling (£).

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
