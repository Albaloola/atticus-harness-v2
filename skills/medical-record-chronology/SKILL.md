---
name: medical-record-chronology
language: en
description: Creates chronological summaries of medical records for litigation. Extracts treatment timelines, provider details, diagnoses, medications, and causation evidence. Identifies gaps, inconsistencies, and missing records. Use when analyzing medical records in personal injury, medical malpractice, workers' compensation, or disability cases. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Medical Record Chronology

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

Produces a structured, date-ordered summary of medical records for litigation, interleaving all providers chronologically. Extracts treatment details, causation evidence, and strategic insights.

## Quick Start

1. Gather case context: patient name, DOB, incident date, case type, claimed injuries, known pre-existing conditions
2. Build provider index listing each provider/facility, type, date range, and records-obtained status (Yes/Partial/No)
3. Summarize pre-incident history for same body parts, prior injuries, baseline function, and medications at time of incident
4. Create chronological entries for every encounter (see format below)
5. Compile diagnostic summary, medication history, and damages
6. Write strategic analysis covering favorable/adverse findings, gaps, and inconsistencies

## Encounter Entry Format

For each encounter, strictly ordered by date across all providers:

**[Date] - [Provider Name] - [Facility] - [Visit Type]**

- **Chief complaint**: Patient's stated reason
- **History**: Mechanism of injury, symptom onset
- **Examination findings**: Objective findings (vitals, physical exam, neurological)
- **Diagnostic studies**: Imaging, labs, EMG/NCV results
- **Diagnosis/Assessment**: ICD codes and narrative diagnoses
- **Treatment**: Procedures, medications prescribed, referrals
- **Restrictions/Limitations**: Work restrictions, activity limitations
- **Follow-up**: Next appointment, recommended further care
- **Causation language**: Provider statements linking injuries to incident - **flag prominently**
- **Source**: Bates number or provider record page reference

## Output Sections

### Case Header

Patient name, DOB, incident date, case type (PI / Med Mal / Workers Comp / Disability), pre-existing conditions, claimed injuries.

### Provider Index

Table: #, Provider/Facility, Type (ER/PCP/Specialist/PT), Date Range, Records Obtained (Yes/Partial/No).

### Pre-Incident Medical History

Chronological summary of: same body parts/conditions, prior injuries/accidents, medications at incident, baseline functional status.

### Treatment Timeline

Visual arrow diagram from incident through MMI:

```
[Incident] → ER → PCP → Ortho → MRI → PT (12x) → IME → Surgery → PT (24x) → MMI
```

### Diagnostic Summary

Table: Date, Study, Facility, Findings, Significance.

### Medication History

Table: Medication, Prescribed By, Start Date, End Date, Purpose.

### Damages Summary

- Total medical expenses by provider, Lost work time with dates and documentation, Functional limitations documented, Permanency/MMI status, Future treatment recommendations

## Strategic Analysis

- **Favorable findings**: Evidence supporting causation and damages
- **Adverse findings**: Pre-existing conditions, treatment gaps, inconsistent histories, non-compliance
- **Gaps in records**: Missing providers, unexplained treatment gaps, records to request
- **Inconsistencies**: Conflicting histories across providers, discrepancies between records
- **Follow-up needed**: Records to request, depositions to schedule, IME considerations

## Critical Rules

- Strict chronological order, interleave all providers by date, Quote exact provider causation language in quotation marks with Bates/page citation, Flag every mention of pre-existing conditions or prior treatment to same body part, Note all treatment gaps, opposing counsel argues gap = no injury, Track medication changes, escalation suggests worsening, discontinuation suggests resolution, Distinguish objective findings (imaging, measurements) from subjective complaints, Note every mechanism-of-injury description, inconsistencies are impeachment material, Include both favorable and unfavorable entries, the attorney needs the complete picture

---

**Key changes made:**

- **Removed `tags`** - not part of the Agent Skills spec (only `name` and `description` in frontmatter)
- **Tightened description** - kept third-person, added workers' comp trigger, stayed under 1024 chars
- **Added Quick Start workflow** - 6 numbered steps giving the agent a clear execution path
- **Eliminated empty template tables** - replaced with concise field-list descriptions (Claude knows how to render tables)
- **Collapsed Output Structure into Output Sections** - each section described in 1-2 lines instead of full empty-row tables
- **Renamed Guidelines → Critical Rules** - stronger framing, same content condensed
- **Reduced from ~105 lines to ~85 lines** - well under 500-line budget while preserving all domain-specific legal knowledge

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
