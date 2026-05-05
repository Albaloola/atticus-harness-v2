---
name: itar-tcp
language: en
description: Drafts ITAR Technology Control Plans (TCPs) for managing USML defense articles and technical data under 22 CFR Parts 120-130 [US federal]. For UK/Scottish equivalent see Scotland/UK Adaptation below. Covers export controls, classification, access controls, deemed export prevention, secure handling, training, audits, and incident response. Use when creating or updating export control compliance plans, technology control plans, or compliance submission documents. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# ITAR Technology Control Plan (TCP)

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

Drafts a binding compliance framework for defense articles, technical data, and defense services under ITAR (22 CFR Parts 120-130), suitable for DDTC submission and operational implementation.

## Prerequisites

Gather before drafting:

1. **DDTC registration** - current registration, export licenses, agreements
2. **USML categories** - applicable categories under 22 CFR §121.1
3. **Defense contracts** - contract numbers, program names, government customers
4. **Empowered official** - designee identity per 22 CFR §120.25
5. **Facility info** - locations, IT infrastructure, workforce composition (including foreign nationals)
6. **Compliance history** - prior audit findings, violations, voluntary disclosures

Also extract: facility layouts, foreign national employee records (triggers deemed export analysis), existing policies, CJ determinations from contract SOWs.

## Quick Start

1. Collect prerequisites above from organizational records
2. Draft the TCP following the 10-section output structure below
3. Mark uncertain regulatory citations with `[VERIFY]`
4. Flag information gaps with placeholder language

## Output Structure

Draft these 10 sections in order:

### 1. Executive Summary & Legal Foundation

- State TCP as binding ITAR compliance instrument, Cite key definitions: **Export** (§120.10, includes release to foreign persons in U.S.), **Defense article** (§120.17), **Technical data** (§120.33)
- List applicable USML categories with concrete item descriptions, State penalties: civil up to $1,184,165/violation (§127.1) `[VERIFY current amount]`, criminal imprisonment under AECA, debarment, Declare applicability to all employees, contractors, consultants, visitors

### 2. Scope & Jurisdictional Boundaries

- [ ] Defense programs, contracts, product lines (with contract numbers)
- [ ] Physical locations: facilities, labs, storage, remote/field sites, WFH
- [ ] Personnel categories: routine access, project-specific, contractors, visitors
- [ ] Collaborative arrangements: teaming agreements, JVs, TAAs, MLAs
- [ ] Exclusions: public domain (§120.11), EAR-controlled items, CJ determinations

### 3. Classification & Inventory

**Classification process:**
1. Evaluate against USML category descriptions (§121.1)
2. Uncertain items → CJ request to DDTC (§120.4); apply interim controls pending determination
3. Assign qualified personnel with review process

**Inventory tracks:** hardware (components, assemblies, USML class), technical documents (drawings, specs, version-controlled), software/source code, manufacturing processes, test data.

**Marking:** All controlled items must bear: "ITAR CONTROLLED, Export of this information to foreign persons is prohibited without prior approval from the U.S. Department of State."

### 4. Access Controls & Deemed Export Prevention

**U.S. Person (§120.62):** U.S. citizens, lawful permanent residents (I-551), persons granted asylum/refugee/TPS. Excludes all other foreign nationals regardless of visa. Verify original documentation before granting access.

**Physical controls:** badge-restricted areas for verified U.S. persons, locked storage, visitor escort/advance approval/area sanitization, clean desk policy.

**Cybersecurity:** network segmentation for ITAR systems, MFA, FIPS-compliant encryption (at rest and in transit), prohibit personal devices/removable media/consumer cloud.

**Deemed export (§120.54):** Release to foreign person in U.S. = export to their nationality country. Sanitize workspaces when foreign persons present. Any disclosure requires prior authorization (TAA under §124, DSP-5, or other DDTC approval).

### 5. Secure Handling, Storage & Transmission

- **Physical:** locked cabinets/cages, alarmed rooms, check-in/check-out system
- **Electronic:** AES-256 encryption, no commercial email, approved secure file transfer only, verify recipient U.S. person status + need-to-know
- **Retention:** 5 years per §122.5
- **Destruction:** shredding, degaussing, approved sanitization
- **Travel:** DSP-73 temporary export license required, ATA Carnets for defense articles, no remote access from foreign countries without authorization, encrypted VPN required

### 6. Training Program

**Initial** - required before any controlled material access. **Refresher** - annually minimum.

**Core topics (all personnel):** ITAR fundamentals, defense article/data identification, deemed export rules, TCP responsibilities, violation consequences, reporting procedures.

**Role-specific additions:** empowered official (§120.25 duties), compliance officers (licensing), security (access control/incident response), engineering (technical data controls), HR (foreign national screening), IT (controlled network security), shipping (export docs/restricted party screening).

Document: attendance records, signed acknowledgments, competency assessments.

### 7. Monitoring & Audit

**Annual audit scope:**
- [ ] Access control systems and logs
- [ ] Training records and personnel screening
- [ ] Export authorizations and licensing
- [ ] Technical data transfer records
- [ ] Foreign visitor logs and escort procedures
- [ ] IT security controls

**Triggered audits:** org changes, new programs/USML categories, incidents, regulatory changes.

**KPIs:** incident count/severity trends, finding closure timeliness, training completion rates, verification currency, license renewal timeliness.

### 8. Incident Response & Violation Management

**Reportable:** unauthorized foreign person access, inadvertent exports/deemed exports, missing controlled items, ITAR system breaches, unmarked data in unrestricted areas.

**Response sequence:**
1. **Contain** - revoke access, secure materials, isolate systems
2. **Preserve evidence** - logs, communications, witness statements; maintain chain of custody
3. **Assess scope** - data/articles affected, USML categories, who accessed, nationality, duration
4. **Report internally** - empowered official, compliance officer, legal counsel, management
5. **Voluntary self-disclosure** - consider §127.12 notification to DDTC for mitigation credit
6. **Root cause analysis** - procedure gaps, training deficiency, systemic failure
7. **Corrective action** - update TCP, revise training, address deficiencies

Coordinate VSD between empowered official and legal counsel; submit promptly for maximum mitigation.

### 9. Governance & Continuous Improvement

- **Oversight:** empowered official (§120.25), day-to-day by compliance officer
- **Annual review:** regulatory changes, USML amendments, incident trends, audit findings, org changes
- **Interim triggers:** new programs, restructuring/M&A, key personnel changes, new IT systems, government audit findings
- **Version control:** all revisions documented, approved by management and empowered official, communicated to affected personnel

### 10. Document Format

- Numbered TOC, appendices (forms, checklists), signature blocks (empowered official, CEO)
- Effective date, distribution/acknowledgment process, professional formatting with regulatory citations, Flag information gaps with placeholders and recommendations

## Pitfalls

- **Penalty amounts change** - always verify current civil maximums under §127.1
- **Mark uncertain citations** with `[VERIFY]` against current CFR
- **Avoid generic boilerplate** - tailor to specific USML categories, programs, and facilities
- **Foreign national workforce** drives deemed export scope, assess thoroughly
- **Cover both physical and cyber controls** - modern TCPs must robustly address cybersecurity
- **Privilege protections** - coordinate with legal counsel during incident investigations
- **Triple audience** - TCP must work for DDTC submission, management review, and operational use

## Scotland/UK Adaptation

This skill is drafted for US ITAR (22 CFR Parts 120-130). For UK/Scottish export control use:

- **UK regime**: governed by the Export Control Order 2008 (SI 2008/3231), Export Control Act 2002, and retained EU Dual-Use Regulation (Regulation 2021/821).
- **UK Military List (UKML)**: equivalent to USML; items classified under UKML entries rather than USML categories.
- **Technology Security Plan (TSP)**: UK government guidance from the Export Control Joint Unit (ECJU) recommends TSPs as good practice for controlled technology.
- **ECJU**: UK's Export Control Joint Unit (part of Department for Business and Trade) replaces DDTC for UK licensing.
- **Deemed export**: same concept applies, release of controlled technology to foreign nationals = export. UK regime uses "intended end-user" analysis.
- **Licence types**: SIEL (Standard Individual Export Licence), OGEL (Open General Export Licence), OIEL (Open Individual Export Licence) - equivalent to DSP-5, TAA, etc.
- **Empowered official**: no direct UK equivalent. Organisations appoint a responsible person for export compliance.
- **Penalties**: up to 10 years imprisonment and/or unlimited fine under Export Control Act 2002; enforced by HMRC.
- **Scottish context**: export controls are reserved matters (UK Parliament). Enforcement in Scotland by COPFS. Key sectors: defence, oil & gas, marine, electronics, universities.
- **Training**: similar structure recommended, ITAR/UK export control fundamentals, classification, deemed exports, licensing, reporting.
- **Incident response**: voluntary disclosure to ECJU encouraged for mitigation credit (no formal §127.12 equivalent).
- **Record keeping**: 5 years minimum retention under UK regulations.

**Note**: if a UK entity is subject to ITAR (because it receives US-origin defence articles/technical data), it must still comply with ITAR. The UK TSP supplements, not replaces, ITAR compliance obligations.

For a full reference, see `scots-forms/UK-Export-Control-TCP-Guidance.md`.

**Key changes from the original:**

- Removed `tags` from frontmatter (not part of the spec's required fields)
- Tightened description to stay focused on triggers, Added **Quick Start** section for immediate orientation, Collapsed the Research Phase table into the Prerequisites section (eliminated redundancy)
- Consolidated training curriculum from two separate tables into inline lists (saved ~30 lines)
- Compressed Section 4 by merging U.S. Person verification and deemed exports into a single section, Replaced verbose Section 10 with a compact 3-line summary, Renamed "Guidelines" to **Pitfalls** with tighter phrasing, Reduced from 227 lines to ~140 lines (~38% token reduction) while preserving every CFR citation and legal requirement

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
