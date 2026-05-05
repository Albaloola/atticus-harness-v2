---
name: incident-report-summary
language: en
description: 'Generates structured, litigation-ready summaries from police reports, crash reports, workplace incident reports, or investigative documents. Extracts parties, narratives, citations, witnesses, contributing factors, and visual documentation into a standardized format. Use when summarizing an incident report for case assessment, discovery planning, or liability evaluation; trigger keywords: police report, accident report, crash report, incident summary, report summary, investigative report. [Atticus UK/Scots refined]'
tags:
- litigation, summarization, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Incident Report Summary

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

Extracts a structured, self-sufficient summary from a police or incident report so an attorney can assess facts, parties, and issues without the original document.

## Prerequisites

1. Source report (police, crash, workplace, or investigative document).
2. All attachments, supplements, witness forms, diagrams, photos.
3. Matter identifier, case name or number.

## Quick Start

1. Identify report type and adapt extraction fields accordingly (e.g., skip vehicle info for workplace incidents).
2. Extract each section below in order.
3. Flag every gap, contradiction, or ambiguity.
4. Verify every fact traces to specific source language, no inference.

## Output Sections

Produce sections in the order listed.

### 1. Header

| Field | Extract |
|---|---|
| Report/Case Number | Official identifier |
| Incident Date/Time | Include time zone if available |
| Report Filed Date | If different from incident date |
| Location | Full address, intersection, or mile marker |
| Agency | Name, officer/investigator, badge number |
| Report Type | Collision, criminal, workplace, etc. |

### 2. Parties Involved

Per party, extract:

- **Role** - Driver / Passenger / Pedestrian / Victim / Suspect / Reporting Party / Employee
- **Name** - full legal name
- **DOB / Age**
- **Address**, **Contact** (phone, email)
- **ID** - license number + state, or employee ID
- **Vehicle** (if applicable) - year, make, model, color, VIN, plate
- **Insurance** (if applicable) - carrier, policy number
- **Injuries noted** - as described in report

### 3. Narrative Summary

Provide two versions:

- **Complete narrative** - preserve the officer/investigator's full account.
- **Key facts extract** - legally significant facts only:
  - Fault admissions
  - Impairment / recklessness / distraction observations
  - Physical evidence (skid marks, distances, measurements)
  - Injury descriptions
  - Safety equipment use or non-use
  - Environmental conditions

Flag ambiguities, contradictions, and temporal gaps.

### 4. Citations / Charges

| Person Cited | Statute/Code | Description | Issued At Scene? | Court Date | Penalty |
|---|---|---|---|---|---|

### 5. Witnesses

Per witness:

| Field | Detail |
|---|---|
| Name | Full name |
| Contact | Phone, address, email |
| Relationship | Independent or party-related |
| Location at incident | Position and facing direction |
| Statement summary | Key observations in their words |

- Preserve direct quotes verbatim (excited utterances / hearsay exceptions).
- Flag witnesses identified but not interviewed.
- Flag references to unidentified potential witnesses.

### 6. Contributing Factors

| Category | Examples | Evidence Source |
|---|---|---|
| Environmental | Weather, lighting, road surface, visibility | Physical evidence / narrative |
| Human | Speed, inattention, impairment, fatigue | Witness / admission / observation |
| Equipment | Mechanical failure, defects | Inspection / narrative |
| Systemic | Training gaps, hazardous conditions | Report findings |

Flag factors suggesting:
- **Third-party liability** - road design defects, product defects, employer violations
- **Affirmative defenses** - comparative negligence, assumption of risk, intervening cause

### 7. Visual Documentation

Describe each diagram, sketch, or photo:

- **Collision diagrams** - road layout, lanes, traffic controls, vehicle positions (pre/during/post), point of impact, final rest, measurements.
- **Photos** - subject, perspective, visible damage/injuries, evidence markers.
- Note information in visuals absent from the narrative.

### 8. Gaps and Follow-Up

- [ ] Missing party contact information
- [ ] Uninterviewed or unidentified witnesses
- [ ] Narrative contradictions needing deposition clarification
- [ ] Missing supplemental reports referenced but not attached
- [ ] Unclear measurements or diagram elements
- [ ] Pending lab results, toxicology, or reconstruction reports

## Checks

- Every fact must trace to specific source language, no inference or speculation.
- Distinguish officer's direct observations from relayed information.
- Use consistent date (MM/DD/YYYY) and time format throughout.
- Adapt fields to report type, omit inapplicable sections.
- Protect PII not relevant to liability or damages.
- Use [VERIFY] on any uncertain extraction.

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
