---
name: traffic-enforcement-summary
language: en
description: Generates structured summaries of traffic law enforcement data covering DUI metrics, violation trends, enforcement outcomes, and resource allocation. Use when analyzing citation records, arrest statistics, violation reports, or preparing public safety strategic planning documents for law enforcement leadership. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Traffic Law Enforcement Summary

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

Synthesizes traffic enforcement data into an executive-ready analytical report with statistical trends, effectiveness metrics, and evidence-based policy recommendations.

## Prerequisites

1. **Enforcement data** - citation records, arrest statistics, case dispositions, violation counts
2. **Temporal scope** - defined reporting period for trend analysis
3. **Geographic scope** - jurisdiction(s) and sub-area breakdowns (precincts, corridors, hotspots)
4. **Comparative baselines** - prior-period data for year-over-year analysis (if available)

## Quick Start

1. Gather enforcement data for the reporting period and jurisdiction
2. Build the report following the six sections below
3. Flag any violation category with >15% year-over-year change
4. Tie every recommendation to a specific data finding
5. Review against the guardrails before delivery

## Report Sections

### 1. Executive Overview

| Element | Content |
|---|---|
| Key findings | Top 3 to 5 statistically significant trends |
| Critical alerts | Trends requiring immediate attention (spikes, emerging patterns) |
| Top recommendations | Prioritized policy/resource actions tied to findings |
| Reporting period | Date range, data sources, jurisdiction |

### 2. DUI Enforcement Metrics

Present in tables where possible:

- Arrest volume (total, YoY delta, monthly distribution)
- BAC distribution (tiers: 0.08 to 0.14, 0.15 to 0.19, 0.20+)
- Repeat offender rate and recidivism patterns, Case dispositions (conviction, plea, dismissal, diversion rates)
- Refusal-to-test rates and implied consent outcomes, Drug-impaired driving incidents (if data available)
- Seasonal/temporal patterns (holidays, weekends, time-of-day)

### 3. Traffic Violation Trends

Categorize by infraction type:

| Category | Metrics |
|---|---|
| Speeding | Volume, speed-over-limit distribution, school/construction zones |
| Reckless driving | Counts, accident correlation |
| Distracted driving | Cell phone, other distractions, YoY trend |
| License/registration | Suspended license, unregistered vehicles, uninsured motorist |
| Equipment failures | Lighting, brakes, tires |
| Seatbelt/child restraint | Compliance rates, citation trends |

### 4. Statistical Analysis

- YoY comparisons (raw counts + percentage change)
- Seasonal variation (monthly/quarterly breakdown)
- Peak enforcement periods (day-of-week, time-of-day)
- Geographic hotspot identification (top 10 corridors/intersections)
- Violation-to-accident correlation where data permits, Per-capita or per-VMT normalization if traffic volume data available

Trend table template:

| Metric | Prior Period | Current Period | Delta (%) | Trend |
|---|---|---|---|---|
| Total citations | | | | ↑/↓/→ |
| DUI arrests | | | | |
| Accident-related | | | | |

### 5. Enforcement Effectiveness

- Citation-to-conviction ratio, Court disposition patterns (continuances, plea rates, dismissal causes)
- Fine collection rates, Targeted campaign impact on recidivism, Officer deployment efficiency (citations per patrol hour, if available)

### 6. Recommendations

Each recommendation must: (1) cite the supporting data finding, (2) specify the action, (3) identify the responsible unit, (4) note resource implications.

| Area | Examples |
|---|---|
| Policy adjustments | Speed threshold changes, enforcement priorities |
| Resource reallocation | Shift scheduling, hotspot deployment |
| Training needs | Emerging violation types, SFST updates, body-cam protocols |
| Technology/equipment | Automated enforcement, data systems, testing equipment |
| Community engagement | Public awareness campaigns, compliance incentives |

## Guardrails

- **Tone**: Professional, suitable for law enforcement executives, elected officials, and public safety boards
- **Tables over prose**: Present statistics in tables; avoid dense narrative
- **Source attribution**: Cite specific data sources, case counts, and time periods throughout
- **Equity**: Flag demographic disparity patterns for leadership review without editorializing
- **National data**: If supplementing with NHTSA/FARS statistics, clearly distinguish from local data
- **Scope**: Stay within analytical and operational scope, do not editorialize on sentencing policy or legislative reform
- **Data quality**: Note limitations (incomplete records, reporting lag, system migration gaps)
- **Length**: Target 5 to 15 pages depending on data scope

---

Key changes from the original:
- Removed `tags` from frontmatter (not in the spec)
- Tightened the `description` for token efficiency while keeping trigger guidance, Added a **Quick Start** section for at-a-glance workflow, Converted checkbox lists (`- [ ]`) to plain bullet lists (checkboxes are for tracking mutable progress, not reference specs)
- Collapsed the verbose "Output Structure" heading into flatter **Report Sections**
- Condensed the recommendations requirements from a numbered list into a single inline sentence, Renamed "Guidelines" to **Guardrails** with bold-key format for scannability, Removed the code-fenced trend table template wrapper (kept the table itself inline)
- Removed the "Procedural/resource constraints affecting outcomes" bullet (redundant with recommendations section)
- Overall reduction from 118 lines to ~98 lines with better information density

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
