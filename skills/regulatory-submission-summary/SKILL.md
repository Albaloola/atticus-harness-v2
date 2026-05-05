---
name: regulatory-submission-summary
language: en
description: 'Produces structured summaries of regulatory submission packages (MHRA Marketing Authorisation Applications, SEPA environmental permits, Ofcom/Ofgem applications, FCA approvals) for UK/Scotland government approval processes. Distills clinical data, manufacturing information, compliance evidence, and supporting documentation into standardised overviews for regulatory reviewers, compliance teams, and executives. Use when summarising submission packages, preparing regulatory filing overviews, or creating executive briefings on approval applications; trigger keywords: regulatory submission, MAA summary, marketing authorisation, filing overview, approval application, regulatory briefing, submission package. [Atticus UK/Scots refined]'
tags:
- regulatory, summarisation, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Regulatory Submission Summary (UK/Scotland Adaptation)

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

Produces a structured summary of a UK or Scottish regulatory submission package, enabling reviewers to quickly assess purpose, scope, supporting evidence, and compliance posture.

## [SCOTS: Note] Regulatory Body Guide

This skill supports UK and Scottish agencies. Map the regulatory body before use:

| Sector | US Agency | UK/Scotland Equivalent |
|--------|-----------|----------------------|
| Medicines | FDA | MHRA (Medicines & Healthcare products Regulatory Agency) |
| Medical Devices | FDA/CDRH | MHRA + UK Approved Bodies |
| Environment | EPA | SEPA (Scotland) / EA (England/Wales) |
| Telecoms | FCC | Ofcom |
| Energy | FERC | Ofgem |
| Financial | SEC | FCA |
| Food safety | FDA/CFSAN | Food Standards Agency / Food Standards Scotland |
| Health & Safety | OSHA | HSE (Health & Safety Executive) |
| Chemicals | EPA/TSCA | HSE (UK REACH) |

## Prerequisites

1. Primary submission documents, application form, cover letter, filing type identification.
2. Supporting technical data, clinical trials or equivalent, safety/efficacy studies, engineering analyses, environmental or economic assessments.
3. Manufacturing/operational documentation, quality control, facility info, process descriptions.
4. Labelling or public-facing materials, proposed labels, consumer disclosures, service descriptions.
5. Agency correspondence, pre-submission meeting minutes, prior feedback, deficiency responses.
6. Regulatory pathway identification, MAA, UKCA conformity assessment, SEPA permit application, Ofcom approval, etc.

## Output Structure / Process

### 1. Executive Overview

| Field | Content |
| --- | --- |
| Submitting Entity | Name, address, contact |
| Regulatory Body | MHRA, SEPA, Ofcom, Ofgem, FCA, etc. |
| Submission Type | MAA, UKCA assessment, EASR permit, licence application |
| Submission Date | Date filed or to be filed |
| Requested Action | Approval, authorisation, permit, licence |
| Regulatory Framework | Statutory/regulatory basis with specific UK/Scottish citations |
| Expedited Pathways | ILAP, IRP, fast-track designations, waivers (if any) |

### 2. Subject Matter Description

- Product/device/substance/service identification (names, classifications, compositions)
- Intended use, target population, or scope of authorised operations, Key identifiers (MA number, UKCA registration, SEPA permit reference as applicable)

### 3. Supporting Evidence Summary

Map each regulatory criterion to the evidence submitted:

| Approval Criterion | Evidence Submitted | Key Findings |
| --- | --- | --- |
| Safety | Study type, N= | Primary endpoints, results |
| Efficacy / Performance | Study type, N= | Primary endpoints, results |
| Manufacturing Quality | CMC data, GMP compliance | Key controls, validation status |
| Environmental / Public Impact | Assessment type | Conclusions, mitigation measures |

- Report statistical results with effect sizes, confidence intervals, and p-values, Flag novel aspects, first-in-class designations, or areas lacking established pathways

### 4. Compliance Strategy

- Applicable statutes and regulations (cite specific UK Acts or Scottish Regulations)
- Guidance documents relied upon, Pre-submission interactions and how agency feedback was incorporated, Basis for any waiver, exemption, or special designation requests

### 5. Review Timeline

| Milestone | Expected Date/Timeframe |
| --- | --- |
| Filing/acceptance review | |
| Substantive review period (e.g. MHRA 210 days) | |
| Information request window | |
| Advisory committee (if applicable) | |
| Public consultation (SEPA, Ofcom, etc.) | |
| Target action date | |

### 6. Submission Package Inventory

Number and briefly describe each major attachment/appendix:

1. **Module/Volume X** - Description
2. **Appendix A** - Description

### 7. Compliance Assessment

- [ ] Submission completeness relative to regulatory checklist
- [ ] Gaps or areas likely to trigger information requests
- [ ] Conditions or limitations that may attach to approval
- [ ] Post-approval commitments (RMP, Phase IV, monitoring, reporting)
- [ ] Ongoing compliance obligations (pharmacovigilance, permit renewal)

## Guidelines

- Use precise regulatory terminology; cite specific UK legislation, SI numbers, or agency guidance by name and number, Mark any citation that cannot be verified from source materials with `[VERIFY]`
- Distinguish statistically significant from clinically meaningful results, Label interpretive conclusions vs. factual statements from the submission, Maintain jurisdiction awareness, MHRA, SEPA, Ofcom, and FCA have distinct frameworks; do not conflate, For MHRA submissions, follow ICH CTD module structure where applicable, For SEPA submissions, refer to Environmental Authorisations (Scotland) Regulations 2018 (EASR)
- Flag regulatory risk areas transparently; do not minimise uncertainties

## Troubleshooting

- **Missing pathway identification**: If the submission type is unclear, check the cover letter and application form first; flag ambiguity in the executive overview and mark `[VERIFY]`
- **Incomplete evidence tables**: When study data is partial or not provided, note the gap explicitly rather than omitting the criterion row
- **Multi-agency submissions**: If a product requires approval from multiple agencies (e.g., MHRA + SEPA), create separate executive overview and compliance strategy sections per agency
- **Expedited pathway uncertainty**: If ILAP or other designation status is claimed but not confirmed, note as "requested" vs. "granted" and mark `[VERIFY]`
- **Post-Brexit considerations**: Confirm whether EU mutual recognition decisions remain relevant; note where UK divergence from EU regulation applies

---

## Scotland/UK Adaptation

This skill has been adapted from the US Regulatory Submission Summary (FDA-centric). Key changes:

- **Medicines**: FDA NDA/510(k)/BLA/ANDA → MHRA MAA, UKCA, IRP, ILAP
- **Environment**: EPA → SEPA (Scotland) / EA (England/Wales); EASR regulations for Scotland
- **Telecoms**: FCC → Ofcom
- **Energy**: FERC → Ofgem
- **Financial**: SEC → FCA
- **Food safety**: FDA → FSA / Food Standards Scotland
- **Chemicals**: TSCA → UK REACH (HSE)
- **Expedited pathways**: Breakthrough → ILAP (Innovative Licensing and Access Pathway)
- **Submission format**: CTD (ICH) same for MHRA as FDA, with UK-specific Module 1
- **Review timeline**: FDA 10 to 12 months typical → MHRA 210 days (national), 2 to 4 months (IRP)
- **Scotland-specific**: SEPA for environmental; Food Standards Scotland for food; COPFS for enforcement; Scottish Regulations cited separately
- **Post-Brexit**: UK now operates independent regulatory framework; IRP references certain "reference regulators" including FDA

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
