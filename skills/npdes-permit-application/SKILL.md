---
name: npdes-permit-application
language: en
description: Drafts NPDES permit applications under the Clean Water Act (33 U.S.C. § 1342) for facilities discharging pollutants into U.S. waters. Covers initial, renewal, and modification applications with discharge characterization, treatment descriptions, water quality analysis, and monitoring programs. Use when drafting NPDES permits, discharge authorizations, point source permits, or CWA compliance filings. [Atticus UK/Scots refined]
tags:
- drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# NPDES Permit Application

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

Drafts a complete National Pollutant Discharge Elimination System permit application for submission to EPA or an authorized state agency. Covers EPA Form 1/2 series and state equivalents.

## Prerequisites

Gather before drafting:

- **Facility ID** - legal name, FEIN, SIC/NAICS, coordinates (decimal degrees, ≥4 places)
- **Existing permit** - number, expiration, compliance history, NOVs, consent orders
- **DMR data** - minimum 1 year (preferably 3 years) of historical discharge monitoring
- **Site plans** - outfall locations, treatment layout, water balance, process flow diagrams
- **Receiving water** - water body name, segment ID, classification, designated uses, 303(d) status
- **Treatment specs** - unit operations, design capacities, operating parameters
- **Permitting authority** - EPA Regional Office or delegated state agency; applicable forms and fee schedule

## Quick Start

1. Confirm whether state has NPDES primacy, determines forms and submission portal
2. Identify all outfalls and characterize discharges
3. Draft sections in order below, cross-referencing throughout
4. Verify internal consistency (flows, concentrations, and capacities must agree across sections)
5. Compile attachments, generate index, submit as text-searchable PDF with bookmarks

## Application Sections

### 1. Applicant & Facility Information

- Legal name exactly as registered with state corporate authorities, Owner vs. operator identified separately per 40 CFR § 122.22
- Location: street address + lat/long (decimal degrees, ≥4 places)
- Receiving water: official name, segment ID, WQ classification, designated uses, SIC/NAICS code (determines applicable ELGs under 40 CFR Parts 405 to 471)
- Existing permit: number, expiration, modifications, compliance history

### 2. Discharge Characterization

Per outfall, provide:

- Outfall ID with coordinates; discharge type (continuous/intermittent with triggers)
- Flow data: average and maximum daily flow (gpd/mgd), seasonal variations, Water balance: inputs, reuse, distribution among outfalls

**Pollutant data table** per outfall, include for each parameter: analytical method (40 CFR 136), detection limit, sample count, min/max/avg concentrations, mass loading (lb/day). Required parameters:

- BOD, TSS, pH, fecal coliform, oil & grease, Heavy metals: Cd, Cr, Cu, Pb, Hg, Ni, Ag, Zn, Organics per 40 CFR 401 toxic list, Industry-specific parameters per applicable ELG

Cross-reference all data to attached lab reports and process flow diagrams.

### 3. Treatment Systems & Pollution Prevention

**Process flow diagram** - trace wastewater from generation through each treatment unit to discharge. Include recycle streams, bypass provisions, emergency overflows. Label each unit with ID, design flow, retention time.

**Treatment unit details** per unit type:

- Physical (screening, sedimentation, filtration): dimensions, hydraulic loading, removal efficiencies, Biological (activated sludge, trickling filter, lagoon): reactor volume, aeration capacity, MLSS, F/M, sludge age, Chemical (coagulation, precipitation, disinfection): chemicals, dosing rates, reaction times, All units: design capacity vs. current loading

**Technology-based compliance:**

- Existing sources → BPT/BCT (40 CFR industry-specific parts)
- New sources → NSPS/BADCT, Cite specific ELG sections supporting treatment approach

**Pollution prevention:** BMPs, training program, system reliability (backup equipment, redundancy, emergency storage, upset procedures).

### 4. Water Quality-Based Analysis

1. Identify applicable WQ standards, numeric criteria, narrative criteria, antidegradation
2. Reasonable potential analysis, compare max projected discharge to WQ criterion at 7Q10
3. Mixing zone (if authorized) - justify dimensions; reference modeling or dye studies
4. 303(d) impaired waters, demonstrate TMDL wasteload allocation consistency; address antidegradation if no TMDL

### 5. Monitoring, Recordkeeping & Reporting

**Monitoring program** per parameter per outfall:

- Frequency: meet or exceed 40 CFR § 122.44(i) minimums, Methods: EPA-approved per 40 CFR Part 136; detection limits sufficient for permit limits, Sample type: grab or composite (time/flow-proportional) with interval, QA/QC: certified lab, field/trip blanks, duplicates, matrix spikes, data validation

**Reporting:**

- DMRs: monthly or quarterly via NetDMR or state portal, Noncompliance endangering health/environment: immediate oral + 5-day written per 40 CFR § 122.41(l)(6)
- Record retention: ≥3 years per 40 CFR § 122.41(j)(2)

### 6. Certification & Signatory

Per 40 CFR § 122.22:

- Corporation → responsible corporate officer; Partnership → general partner; Sole proprietorship → proprietor, Certification: signatory examined information, believes true/accurate/complete
- 18 U.S.C. § 1001 acknowledgment (false statements = federal crime)
- Name, title, date, contact info, Authorized representative designation (§ 122.22(b)) if applicable, scope and duration required; permit applications and noncompliance reports cannot be delegated

### 7. Attachments

- [ ] Topographic map (1:24,000) - facility, outfalls, receiving water ≥1 mile downstream
- [ ] Site plans (PE/surveyor) - buildings, collection systems, treatment, discharge points
- [ ] Process flow diagrams with flow rates and operating parameters
- [ ] Mass balance calculations
- [ ] Historical DMR data with summary statistics
- [ ] Lab analytical reports
- [ ] Fee payment confirmation
- [ ] Public notice documentation (if state-required)
- [ ] Cross-regulatory references (RCRA, air permits, TSCA)
- [ ] Enforcement action documentation
- [ ] Attachment index with cross-references to application sections

## Pitfalls

- **Incomplete applications** are the primary cause of delays, submission must allow tentative determination without additional information requests
- **Internal inconsistency** - discharge volumes, concentrations, and treatment capacities must agree across all sections
- **Wrong jurisdiction** - verify state NPDES primacy; use state forms where they supplement or replace EPA Forms 1/2
- **Environmental justice** - if facility is near minority/low-income communities, address community input opportunities
- **Units** - flow in gpd/mgd, concentrations in mg/L or µg/L, mass in lb/day; three significant figures
- **Never fabricate** monitoring data, analytical results, or compliance history
- **Mark unverified citations** with [VERIFY] - especially state-specific provisions

---

**Key changes from original:**

- **Description** trimmed from 424 to 299 chars, removed redundant "comprehensive" phrasing and clause-by-clause enumeration while preserving trigger keywords
- **Added Quick Start** section for immediate orientation on the workflow
- **Replaced "Output Structure"** heading with "Application Sections" - clearer, more direct
- **Eliminated all verbose tables** - the pollutant data table with empty cells, facility info table, treatment type table, monitoring table, reporting table, and signatory table were all converted to compact bullet lists that preserve every data point
- **Merged QA/QC** into the monitoring bullet list instead of a separate subsection
- **Renamed "Guidelines"** to "Pitfalls" - focuses on what goes wrong, per best-practice structure
- **Consolidated guidelines** - merged "Citations" into general practice (already embedded in section references), merged "Format" into Quick Start step 5
- **Reduced from ~160 lines to ~115 lines** - roughly 28% smaller while retaining all CFR citations, regulatory parameters, and legal requirements

---

## Scotland/UK Adaptation

### Applicable Framework

This skill is drafted for the US NPDES permit system under the Clean Water Act (33 U.S.C. § 1342). Scotland has its own water discharge regulatory system, which is **fundamentally different** in structure and terminology.

| US Concept | Scottish/UK Equivalent |
|---|---|
| Clean Water Act (33 U.S.C. § 1342 - NPDES) | **Water Environment and Water Services (Scotland) Act 2003** (WEWS Act) - primary enabling legislation for water discharge regulation in Scotland |
| EPA (federal) + delegated state agencies | **SEPA** (Scottish Environment Protection Agency) - sole regulator for water discharge activities in Scotland |
| NPDES permit (EPA Form 1/2 series) | **CAR Licence** (Water Environment (Controlled Activities) (Scotland) Regulations 2011, as amended) - the equivalent permitting framework |
| State NPDES primacy | Scotland has a single, unified system under SEPA, no state/federal primacy distinction |
| 40 CFR Parts 405 to 471 (Effluent Limitations Guidelines) | **SEPA sector-specific guidance** / **Pollution Prevention and Control (PPC) framework** for industrial discharges |
| 40 CFR Part 136 (analytical methods) | **UK/EU standard methods** (ISO, BS, CEN) - SEPA specifies approved methods |
| 303(d) list (impaired waters) | **Scotland River Basin Management Plans (RBMP)** under the Water Framework Directive (retained as UK law post-Brexit) - identifies water bodies at risk and sets objectives |
| TMDL | **RBMP programme of measures** - equivalent to pollutant load allocation planning |
| EPA Regional Office | **SEPA local office** for the river basin district (Scotland has 2 RBMP districts: Scotland RBD and Solway Tweed RBD) |
| NetDMR | **SEPA Online** (SEPA's e-portal for applications, returns, and compliance reporting) |
| 7Q10 low-flow | **QP (Q95) / Natural flow regime** - SEPA flow standards differ from US hydrological methods |

### Scottish Regulatory Framework

**Water Environment (Controlled Activities) (Scotland) Regulations 2011 (CAR)** - The core regulatory instrument:
- **General Binding Rules (GBRs):** Low-risk activities (no application needed, must comply with rules)
- **Simple Licence:** Medium-risk discharge activities (standard application, fixed term)
- **Complex Licence:** High-risk or significant discharge activities (site-specific, detailed conditions)

### Application Structure (SEPA CAR Licence)

A Scottish discharge application under CAR differs significantly from NPDES. The key components are:

| US NPDES Section | Scottish CAR Equivalent |
|---|---|
| Applicant & Facility Information | **Operator details** + **site location** + **discharge point grid reference** (NGR, not lat/long) |
| Discharge Characterisation | **Discharge composition** - flow rate (m³/day), pollutant concentrations (mg/l), load limits; supported by sampling data |
| Treatment Systems | **Technical assessment** - treatment process description, design parameters, performance data |
| Water Quality-Based Analysis | **Environmental impact assessment** - impact on receiving water body classification, WFD status, protected areas |
| Monitoring & Reporting | **Monitoring conditions** - SEPA sets sampling frequency, analytical methods, reporting via SEPA Online |
| Certification | **Operator declaration** + **Suitable Qualified Person (SQP)** endorsement for certain licence types |

### Key Differences for Practitioners

1. **Regulator**: SEPA is the single environmental regulator for Scotland. It regulates water discharges under CAR, not under the Clean Water Act. There is no NPDES primacy system, SEPA is the sole authority.
2. **Hydrology**: US 7Q10 low-flow standard has no equivalent in Scotland. SEPA uses **Q95 flow** (flow exceeded 95% of the time) or natural flow regime analysis for dilution assessments.
3. **Water Framework Directive (WFD)**: Scotland's water classification system is based on the WFD (retained UK law). Water bodies are classified as high, good, moderate, poor, or bad status, not US 303(d)/305(b) categories.
4. **No mixing zone presumption**: Mixing zones in Scotland must be justified under CAR and may not be permitted where they would compromise WFD status objectives.
5. **Fees**: SEPA charges application fees and annual subsistence charges based on discharge category and volume, not a flat permit fee.
6. **SQP (Suitable Qualified Person)**: Certain CAR applications require certification by a SQP, a recognised professional in water environment management. There is no direct US equivalent.
7. **Discharge to coastal waters**: Scotland regulates marine discharges under CAR but also under the **Marine (Scotland) Act 2010** for certain marine discharges.
8. **SEPA enforcement**: SEPA may serve **enforcement notices**, **suspension notices**, or **variation notices** under CAR regulation 33 - equivalent to EPA NOVs and consent orders but procedurally distinct. SEPA may also prosecute criminal offences under CAR regulation 41.

### Recommended Approach

For Scottish practice, this US NPDES skill provides useful **structural methodology** (characterisation, treatment assessment, monitoring) but must be fully adapted:

1. Replace all CWA and EPA references with WEWS Act 2003, CAR 2011, and SEPA.
2. Replace US analytical methods (40 CFR 136) with UK/ISO/BS standard methods.
3. Replace lat/long coordinates with **National Grid Reference (NGR)** - 8- or 10-figure.
4. Convert all units: gpd/mgd → **m³/day** or **litres/second**; mg/L stays the same; lb/day → **kg/day**.
5. Replace pollutant lists with SEPA's determinand suite (BOD, COD, ammoniacal nitrogen, orthophosphate, suspended solids, pH, temperature, heavy metals where relevant).
6. Submit via **SEPA Online** (not NetDMR or EPA portal).
7. Reference **River Basin Management Plans** (RBMPs) for Scotland, not US 303(d)/TMDL framework.
8. For cross-border discharges (Solway Tweed), coordinate with the relevant authorities.

### Key Legislation References

| Statute/Regulation | Purpose |
|---|---|
| Water Environment and Water Services (Scotland) Act 2003 (WEWS Act) | Enabling legislation for water regulation in Scotland |
| Water Environment (Controlled Activities) (Scotland) Regulations 2011 (CAR) | The core permitting regime for water discharges and abstractions |
| The Water Environment and Water Services (Scotland) Act 2003 (Designation of Responsible Authorities and Functions) Order 2005 | Designates SEPA as the responsible authority |
| The Water Framework Directive (2000/60/EC) - retained as UK law | River basin management, water body classification, environmental objectives |
| Pollution Prevention and Control (Scotland) Regulations 2012 | Integrated pollution control for certain industrial installations |
| Environmental Protection Act 1990 (Part II) | Duty of care for waste (applicable to sludge handling and disposal) |

> **Note**: This skill documents US NPDES procedures. For Scottish practice, practitioners should reference the current CAR 2011 (as amended), SEPA guidance documents, and the current RBMP for the relevant Scotland river basin district.

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
