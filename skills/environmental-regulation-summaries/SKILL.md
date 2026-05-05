---
name: environmental-regulation-summaries
language: en
description: Generates structured summaries of environmental laws, compliance obligations, and permitting requirements for specific industries or projects. [SCOTS] Covers UK statutes (Environmental Protection Act 1990, UK REACH, Water Environment Regulations, PPC Regulations), Scottish devolved legislation (Environmental Authorisations (Scotland) Regulations 2018, Wildlife and Natural Environment (Scotland) Act, Climate Change (Scotland) Act), and relevant reserved UK legislation. Maps regulations to business activities including permitting, reporting, monitoring, and penalties. Reflects SEPA regulatory framework, post-Brexit UK REACH, and Scottish-specific environmental regimes. Use when advising on environmental compliance, assessing regulatory exposure, onboarding to a regulated industry, or building compliance programmes for manufacturing, energy, construction, agriculture, mining, or waste management in Scotland/UK. [Atticus UK/Scots refined]
tags:
- regulatory, summary, analysis, summarization, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Environmental Regulation Summary [SCOTS]

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

Identifies applicable environmental laws, compliance obligations, and permitting requirements for a defined industry, activity, or project in Scotland (with UK-wide context where applicable). Produces a structured regulatory matrix, media-specific obligations, and a permitting roadmap.

> **[SCOTS: Note]** This skill has been adapted for Scottish and UK environmental law. The original skill was US-centric (EPA, CERCLA, CAA, CWA, RCRA). See the Scotland/UK Adaptation section at the end for the key differences and a cross-reference table.

---

## Related skills

- `phase-i-esa` - for contaminated land assessment (aligns with Part IIA of EPA 1990).
- `consent-decree-epa` - for SEPA enforcement undertakings / civil sanctions.
- `nov-response` - for responding to SEPA notices.
- `environmental-impact-statement` - for EIA under the Town and Country Planning (Environmental Impact Assessment) (Scotland) Regulations.
- `compliance-summaries` - for cross-sector compliance posture summaries.
- **Permit-specific skills**: `sepa-waste-permit`, `water-discharge-consent`, `ppc-permit`, `sepa-radioactive-substances`.
- **Contaminated land**: `brownfields-agreement`, `environmental-indemnity`, `conservation-easement`.

---

## Prerequisites

Gather before starting:

1. **Industry or activity** - manufacturing, energy, construction, agriculture, mining, waste management, or other.
2. **Jurisdiction** - Scotland only, UK-wide, or multi-jurisdictional (note devolved/reserved split).
3. **Environmental media** - air emissions, water discharge, waste, land use, wildlife, or combination.
4. **Project description** (if applicable) - type, scale, activities triggering regulatory review.
5. **Regulatory currency** - confirm currency of citations and re-verify any item older than 12 months.

## Quick Start

1. Collect prerequisites above.
2. Identify the relevant regulatory regime: Scottish devolved (SEPA) and/or UK-wide (EA, Defra, HSE).
3. Map compliance obligations by environmental media.
4. Draft permitting roadmap with timelines.
5. Run the compliance checklist.
6. Flag all uncertain citations with `[VERIFY]`; for penalty figures, cite current SEPA/UK penalty guidance rather than embedding stale amounts.

## Output Structure

### 1. Executive Overview

- Top 3 to 5 most critical applicable regulations.
- Imminent compliance deadlines or high-penalty areas.
- Recent or pending regulatory changes affecting operations.
- Authority date, note the verification date so the reader knows the freshness of the analysis.

### 2. Regulatory Matrix

Core UK / Scottish statutes for the regulatory matrix:

| Statute | Regulator | Trigger | Key Obligations |
|---------|-----------|---------|-----------------|
| Environmental Protection Act 1990 (Part I, II, IIA) | SEPA / Local Authority | Industrial processes, contaminated land, statutory nuisance | Integrated pollution control; remediation notices; duty of care for waste |
| Environmental Authorisations (Scotland) Regulations 2018 (EASR) | SEPA | Water discharge, radioactive substances, waste operations, PPC | Single integrated authorisation framework (permit, registration, notification) |
| Pollution Prevention and Control (Scotland) Regulations 2012 | SEPA | Part A / Part B installations | Permit conditions; BAT; emissions monitoring |
| Water Environment and Water Services (Scotland) Act 2003 | SEPA | Water discharge, engineering works in water environment | Water Use Licence; CAR (Controlled Activities Regulations) |
| Waste (Scotland) Regulations 2012 | SEPA | Waste production, storage, transport, disposal | Duty of care; waste hierarchy; special waste notifications |
| UK REACH (REACH etc. (Amendment etc.) (EU Exit) Regulations 2019) | HSE / Defra | Manufacture/import of chemicals | Registration, evaluation, authorisation; post-Brexit UK REACH |
| Climate Change (Scotland) Act 2009 / 2020 Update | Scottish Government | GHG emissions (large emitters) | Net-zero target; reporting obligations |
| Wildlife and Natural Environment (Scotland) Act 2011 | NatureScot | Species/habitat impact | Protected species licensing; SNH consultation |
| Town and Country Planning (Scotland) Act 1997 | Planning Authority | Development requiring EIA or planning | EIA; planning conditions; S75 agreements |
| Conservation (Natural Habitats, &c.) Regulations 1994 (as amended) | NatureScot | European sites (SAC, SPA) | Appropriate assessment; mitigation |

### 3. Compliance Obligations by Media

**Air**: Emissions to air regulated under PPC (Scotland) Regulations / EASR. Industrial emissions directive (retained EU law). Local authority also regulates Part B installations.

**Water**: CAR (Controlled Activities Regulations) licences under the Water Environment (Controlled Activities) (Scotland) Regulations. Three tiers: General Binding Rules (GBR), Registration, Licence. Engineering works in water environment also regulated.

**Waste**: Waste (Scotland) Regulations 2012. Duty of care applies to all waste producers. SEPA waste management licences for treatment, transfer, disposal. Special waste (hazardous waste) notifications. Waste hierarchy mandatory.

**Land/Site**: Part IIA EPA 1990 - contaminated land regime. Local authority as enforcing authority; SEPA for "special sites". Remediation notices; liability attached to Class A (causer/permitters) and Class B (current owner/occupier). PFOA/PFOS being assessed under UK REACH and Drinking Water Inspectorate.

### 4. Permitting Roadmap

See SEPA guidance pages for permit-by-permit timelines: https://www.sepa.org.uk/regulations/authorisations-and-permits/

### 5. Compliance Checklist

```
- [ ] All applicable permits/registrations identified and obtained (EASR / PPC / CAR)
- [ ] Monitoring and recordkeeping systems operational
- [ ] Reporting schedule calendared (annual / quarterly)
- [ ] Waste duty of care documentation in place
- [ ] Employee environmental awareness training documented
- [ ] Regulatory change tracking process established
- [ ] PFAS / emerging contaminants evaluation (where industry implicates)
- [ ] Authority sources re-verified within last 12 months
```

## Recent regulatory developments (Scotland / UK, 2023 to 2026)

- **UK REACH (post-Brexit)** - Transitional registration deadlines extended; GB mandatory reporting dates under UK REACH framework.
- **Environmental Authorisations (Scotland) Regulations 2018** - SEPA's integrated framework now operational; phased transition from legacy permits to EASR.
- **PFAS regulation** - UK REACH restrictions proposed; Drinking Water Inspectorate monitoring; SEPA site-specific assessments.
- **Climate Change (Scotland) Act** - Net-zero 2045 target; annual reporting for large emitters.
- **Circular Economy (Scotland) Act 2024** - New waste reduction targets; extended producer responsibility.
- **Waste (Scotland) Regulations amendments** - Further restrictions on biodegradable waste to landfill.
- **Nutrient neutrality** - Scottish Government position on nutrient neutrality requirements for new developments (NatureScot guidance).

## Pitfalls

- **Devolved/reserved split**: Environment is largely devolved to Scottish Parliament, but some matters (chemicals regulation, product standards) remain reserved to UK Parliament. Always check which regime applies.
- **SEPA vs EA (England)**: SEPA is the principal environmental regulator in Scotland; the Environment Agency operates in England. Different permit frameworks, enforcement approaches, and fee structures.
- **Strict liability**: Part IIA EPA 1990 imposes liability regardless of fault, flag prominently.
- **Criminal sanctions**: Environmental offences in Scotland can result in prosecution by COPFS; penalties include unlimited fines and imprisonment.
- **Permit overlap**: EASR framework integrates multiple permit types (water, waste, PPC) into a single authorisation but some activities may still require separate planning or nature conservation consents.
- **Not legal advice**: Do not render opinions on ultimate compliance status; recommend environmental solicitor / counsel for high-risk matters.
- **[SCOTS: Note]** There is no direct Scottish equivalent of US citizen suits under CAA/CWA/RCRA. Third-party challenges in Scotland proceed via judicial review (public law) or common law delict (private nuisance, negligence).

## Troubleshooting

- **Matrix has more statutes than the project triggers.** Tailor the matrix to the project, every entry should be either applicable, conditionally applicable, or explicitly noted as "not triggered, identified for awareness."
- **Regulator unclear (SEPA vs Local Authority vs NatureScot).** Identify the lead regulator by activity: SEPA for most pollution control; Local Authority for statutory nuisance, Part B PPC; NatureScot for wildlife/habitats; Planning Authority for development consent.
- **Penalty figures used for client illustration purposes.** Do not embed specific amounts. Reference SEPA Enforcement Policy or current UK sentencing guidelines for environmental offences.
- **Project pre-dates a major regulatory change.** Frame the analysis using the regime in effect at the relevant time. Cite both historical and current regime where the matter spans the change.
- **Cross-border (Scotland/England) operations.** If the matter spans both jurisdictions, treat separately, SEPA and EA are different regulators with different frameworks.
- **Post-Brexit UK REACH vs EU REACH.** If the client also places goods on the EU market, separate analysis for UK REACH and EU REACH is needed.

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from a US-centric environmental regulatory summary (covering EPA, CERCLA, CAA, CWA, RCRA, NEPA, TSCA, ESA) to the Scottish and UK environmental regulatory framework.

### Key Differences from the US Original

| US Concept | Scotland/UK Equivalent |
|------------|----------------------|
| EPA (federal) | SEPA (Scotland) / Environment Agency (England) |
| CERCLA (Superfund) | Part IIA Environmental Protection Act 1990 (contaminated land) |
| Clean Air Act | PPC (Scotland) Regulations 2012 / Environmental Protection Act 1990 Part I |
| Clean Water Act / NPDES | Controlled Activities Regulations (CAR) / Water Environment (Controlled Activities) (Scotland) Regulations |
| RCRA | Waste (Scotland) Regulations 2012 / Environmental Protection Act 1990 Part II |
| NEPA / EIS | Town and Country Planning (Environmental Impact Assessment) (Scotland) Regulations |
| TSCA | UK REACH (Registration, Evaluation, Authorisation & Restriction of Chemicals) |
| ESA (Endangered Species Act) | Wildlife and Natural Environment (Scotland) Act 2011 / Habitats Regulations |
| State environmental agencies | SEPA (Scotland-wide), but also Local Authority environmental health |
| 40 CFR penalty tables | SEPA Enforcement Policy / UK sentencing guidelines for environmental offences |
| Federal/state split | Devolved (Scottish Parliament) / Reserved (UK Parliament) split |
| EPA Form 8700-12 | SEPA waste transfer notes / SEPA online applications via EASR |
| RCRA manifest | SEPA waste consignment notes (special waste) |
| SPCC Plan | Oil Storage Regulations (Scotland) / SEPA pollution prevention guidelines |

### Regulatory Bodies
- **SEPA** (Scottish Environment Protection Agency) - Principal environmental regulator in Scotland
- **NatureScot** (formerly Scottish Natural Heritage) - Nature conservation and biodiversity
- **HSE** (Health and Safety Executive) - Chemical regulation (UK REACH), workplace environment
- **Scottish Government** - Climate change policy, circular economy, planning policy
- **Local Authorities** - Statutory nuisance, Part B PPC, contaminated land (non-special sites)
- **COPFS** (Crown Office and Procurator Fiscal Service) - Environmental prosecutions

### Key Statutory Provisions, Environmental Protection Act 1990 (Parts I, II, IIA)
- Pollution Prevention and Control (Scotland) Regulations 2012
- Environmental Authorisations (Scotland) Regulations 2018
- Water Environment and Water Services (Scotland) Act 2003
- Water Environment (Controlled Activities) (Scotland) Regulations 2011
- Waste (Scotland) Regulations 2012
- Climate Change (Scotland) Act 2009 (as amended)
- Wildlife and Natural Environment (Scotland) Act 2011
- Town and Country Planning (Scotland) Act 1997
- UK REACH (REACH etc. Amendment) Regulations 2019
- Circular Economy (Scotland) Act 2024

### Forms and Guidance
For current Scottish environmental forms and guidance, refer to:
- SEPA application forms: https://www.sepa.org.uk/regulations/authorisations-and-permits/ (currently transitioning to beta.sepa.scot)
- SEPA waste documentation: https://www.sepa.org.uk/regulations/waste/
- Scottish Government planning and EIA guidance: https://www.gov.scot/policies/planning/

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
