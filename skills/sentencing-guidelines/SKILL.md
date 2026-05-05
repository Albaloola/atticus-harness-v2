---
name: sentencing-guidelines
language: en
description: Calculates federal and state sentencing guideline ranges with precise USSG citations, including base offense levels. [Atticus UK/Scots refined]
tags:
- SCOTS, specific offense characteristics, Chapter 3 adjustments, criminal history categories, departures, variances, and § 3553(a) factors. Use when calculating sentencing ranges, preparing sentencing memoranda, analyzing presentence reports, or developing sentencing advocacy strategy.
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Sentencing Guideline Analysis

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

Produces a complete sentencing guideline calculation and strategic analysis for federal or state criminal matters.

## Prerequisites

Gather before starting:

- **Charging documents** - indictment/information with counts and statutes
- **PSR** - if available; note objections
- **Criminal history** - prior convictions, sentences, dates of offense/release
- **Plea agreement** - stipulated guidelines, § 5K1.1 provisions
- **Offense conduct** - factual basis, relevant conduct under § 1B1.3
- **Jurisdiction** - federal (district/circuit) or state (sentencing scheme)

## Quick Start

For a standard federal calculation:

1. Identify the offense guideline (USSG Ch. 2) for each count
2. Apply specific offense characteristics and cross-references
3. Apply Chapter 3 adjustments (victim, role, obstruction, acceptance)
4. Group multiple counts under §§ 3D1.1 to 3D1.5
5. Calculate criminal history category (§ 4A1.1)
6. Look up advisory range in Sentencing Table (Ch. 5, Pt. A)
7. Check statutory constraints (mandatory minimums/maximums)
8. Evaluate departures and § 3553(a) variance arguments

## Core Workflow

### Step 1: Executive Summary

Produce a summary table covering: defendant/case number, counts with statute citations, total offense level, criminal history category (I to VI), advisory range, statutory range, and recommended position (below/within/above with rationale).

### Step 2: Base Offense Level Calculation

For each count, calculate stepwise in a table:

| Step | USSG Section | Description | Level |
|---|---|---|---|
| Base Offense Level | § 2X#.# | Offense guideline | +## |
| SOC | § 2X#.#(b)(#) | Each specific offense characteristic | +/- ## |
| Cross-reference | § 2X#.#(c)(#) | If applicable | +/- ## |
| **Adjusted BOL** | | | **##** |

### Step 3: Chapter 3 Adjustments

| Adjustment | USSG Section | Level |
|---|---|---|
| Victim-related | §§ 3A1.1 to 3A1.4 | +/- ## |
| Role | §§ 3B1.1 to 3B1.4 | +/- ## |
| Obstruction | § 3C1.1 | +2 |
| Acceptance | § 3E1.1 | -2/-3 |

### Step 4: Multiple Counts

If multiple counts, apply §§ 3D1.1 to 3D1.5 grouping rules:

- Group counts under § 3D1.2(a) to (d)
- Take highest adjusted offense level per group, Apply units table (§ 3D1.4) to get combined adjusted offense level

### Step 5: Criminal History Category

Score each prior conviction per § 4A1.1(a)/(b)/(c). Note recency and revocations.

Flag enhancements if applicable:

- Career Offender - § 4B1.1
- Armed Career Criminal - 18 U.S.C. § 924(e) / § 4B1.4
- Criminal Livelihood - § 4B1.3
- Excluded sentences - § 4A1.2(c)

### Step 6: Sentencing Table

Report: final offense level, criminal history category, advisory range (months), and zone (A/B/C/D) determining probation eligibility per §§ 5B1.1, 5C1.1.

### Step 7: Statutory Constraints

Map each count's mandatory minimum and statutory maximum. Note § 5G1.1: if the guideline range falls below a mandatory minimum, the minimum becomes the guideline floor.

### Step 8: Departures and Variances

**Downward departures (Ch. 5K)** - evaluate each with supporting facts:

- Substantial assistance (§ 5K1.1, gov't motion required)
- Diminished capacity (§ 5K2.13)
- Aberrant behavior (§ 5K2.20)
- Family ties (§ 5H1.6)
- Over-representation of criminal history (§ 4A1.3(b))

**§ 3553(a) variance arguments** - identify specific facts for each factor:

1. Nature/circumstances of offense - § 3553(a)(1)
2. History/characteristics of defendant - § 3553(a)(1)
3. Seriousness / just punishment - § 3553(a)(2)(A)
4. Deterrence - § 3553(a)(2)(B)
5. Public protection - § 3553(a)(2)(C)
6. Rehabilitation / treatment - § 3553(a)(2)(D)
7. Guidelines range - § 3553(a)(4)
8. Avoid unwarranted disparities - § 3553(a)(6)

Cite circuit-specific case law for each variance argument.

### Step 9: Strategic Recommendations

- Recommended sentencing position with range, Key arguments ranked by persuasiveness, Weaknesses to address preemptively, Restitution, forfeiture, supervised release considerations (§§ 5D1.1 to 5D1.3, 5E1.1)

## Critical Rules

- **Always cite USSG sections** - never state a level without a provision
- **PSR objections** - identify all objections with specificity when PSR is available
- **State cases** - substitute the applicable state sentencing grid and cite state provisions
- **Relevant conduct disputes** - flag under § 1B1.3; preponderance standard applies
- **Career offender / ACCA** - calculate both enhanced and non-enhanced ranges
- **Case citations** - mark as `[VERIFY]` unless sourced from provided documents
- **Missing information** - identify explicitly; incomplete criminal history or unresolved relevant conduct shifts ranges significantly
- **Booker framework** - note whether advisory framework or mandatory scheme applies
- **Drug cases** - address safety valve eligibility under 18 U.S.C. § 3553(f) / § 5C1.2
- **Circuit splits** - note recent amendments or splits affecting the analysis

## Scotland/UK Adaptation

### Applicable law, Replace USSG/US Code with **Scottish sentencing guidelines** issued by the **Scottish Sentencing Council** (established by Criminal Justice and Licensing (Scotland) Act 2010).
- Replace federal/state criminal jurisdiction with **Scottish criminal courts**: Justice of the Peace Court, Sheriff Court (summary/solemn), High Court of Justiciary.
- UK Supreme Court has limited criminal appeals on devolution/human rights points; criminal appeals from Scotland end in the **High Court of Justiciary** (no appeal to UKSC for most criminal matters).

### Structural equivalents

| US Concept | Scottish/UK Equivalent |
|---|---|
| USSG / Federal Sentencing Guidelines | Scottish Sentencing Council Guidelines (guideline, not mandatory) |
| USSG Ch. 2 (Offense Conduct) | No equivalent grid; statutory sentencing ranges set by Parliament (e.g., Sexual Offences (Scotland) Act 2009) |
| Criminal History Category (I to VI) | Not scored by grid; court considers previous convictions qualitatively |
| § 3553(a) factors | Sentencing principles in s. 203 to 204 Criminal Justice and Licensing (Scotland) Act 2010 |
| Federal district / circuit | Sheriffdom (6 sheriffdoms: Grampian, Tayside Central Fife, Lothian & Borders, Glasgow & Strathkelvin, North Strathclyde, South Strathclyde) |
| USSG departure / variance | Court's exercise of discretion within statutory range; appeal by note of appeal |
| Mandatory minimum | Mandatory minimum sentences exist for certain offences (e.g., firearms, certain drug offences) |
| Plea agreement / § 5K1.1 | Plea discount available (up to 1/3 discount); no equivalent of substantial assistance motion |
| PSR (Presentence Report) | Criminal Justice Social Work Report (CJSWR) - prepared by local authority social work |
| Mandatory Guidelines (Booker advisory) | Scottish guidelines are advisory only; courts are not bound but must have regard to them |
| ACCA / Career Offender | Dangerousness provisions under the Criminal Procedure (Scotland) Act 1995 (Order for Lifelong Restriction) |

### Key differences for practitioners
1. **No sentencing grid**: Scotland does not use a point-based grid system. Sentences are within statutory ranges, guided by Council guidelines and precedent. There is no "total offense level + criminal history category → range" table.
2. **Consecutive/concurrent**: Scottish courts have broad discretion to order sentences to run consecutively or concurrently; cumulative impact is considered at common law.
3. **No federal system**: Scottish criminal law is unitary (not federal). The High Court of Justiciary has nationwide jurisdiction for serious crime; Sheriff Courts handle the remainder.
4. **Prescription**: There is no limitation period for prosecution of most serious crimes in Scotland (indictable offences). Summary offences have a 6-month time bar.
5. **Appeals**: Criminal appeals go to the High Court of Justiciary (Court of Criminal Appeal). The UK Supreme Court only hears appeals on compatibility issues or devolution matters.
6. **Sentencing powers**: Sheriff Court (summary): up to 12 months; Sheriff Court (solemn): up to 5 years; High Court: up to life imprisonment.
7. **Parole / release**: Managed by the Parole Board for Scotland under the Prisoners and Criminal Proceedings (Scotland) Act 1993.
8. **GBP**: All court-ordered financial penalties (fines, compensation orders) should be in pounds sterling (£).

- **Removed `tags`** - not part of the Agent Skills spec
- **Tightened description** - kept third-person, added clear trigger guidance, stayed under 1024 chars
- **Added Quick Start** - 8-step overview so the agent can orient immediately
- **Collapsed Output Structure into Core Workflow** - converted 9 subsections from template-heavy format into concise step instructions with only the essential tables retained
- **Merged duplicate tables** - Ch. 3 adjustments table dropped the "Application" column (redundant with the section reference); criminal history dropped the per-row template in favor of a directive
- **Renamed "Guidelines" to "Critical Rules"** - clearer intent, scannable bullet format preserved
- **Reduced from 143 lines to ~115 lines** - ~20% token savings while preserving every USSG citation, legal concept, and workflow step

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
