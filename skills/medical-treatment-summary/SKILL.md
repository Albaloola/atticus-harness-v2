---
name: medical-treatment-summary
language: en
description: Generates litigation-ready narrative medical treatment summaries for personal injury cases. Triggers when summarizing medical records, preparing demand packages, drafting treatment narratives, or building medical damages presentations for settlement or trial. [Atticus UK/Scots refined]
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Medical Treatment Summary

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

Transforms medical records into persuasive, clinically accurate narratives that establish a damages foundation for personal injury litigation.

## Prerequisites

- **Medical records** - ER reports, physician notes, imaging, operative reports, therapy/pharmacy records
- **Pre-incident history** - prior treatment records, PCP notes establishing baseline
- **Incident documentation** - accident/police reports, engineering analyses
- **Employment/vocational records** - personnel files, vocational assessments
- **Mental health records** - psychiatric evaluations, therapy notes (if applicable)
- **Expert reports** - IMEs, FCEs, life care plans (if available)

## Quick Start

1. Gather all available records from the prerequisite categories.
2. Establish the pre-incident baseline with specifics (duties, hobbies, hours, capacity).
3. Map the incident mechanism to specific diagnoses.
4. Organize the treatment course thematically by intervention type and escalation.
5. Translate clinical findings into real-world functional impact.
6. Build the causation chain: incident → injury → treatment → impairment.
7. Synthesize damages foundation with cited evidence.

## Output Structure

Target length: 8 to 20 pages depending on treatment complexity.

### Sections

| Section | Purpose | Key Sources |
|---|---|---|
| Pre-Incident Baseline | Establish prior functional capacity | Historical records, employment, activity docs |
| Incident & Immediate Presentation | Link mechanism to injuries | Accident reports, ER records, initial imaging |
| Treatment Course | Show logical care progression | All treatment records, pharmacy records |
| Functional Impact | Translate findings to life disruption | Therapy notes, FCEs, ADL assessments, vocational reports |
| Current Status & Prognosis | Establish permanence and future needs | Recent evaluations, IMEs, treating physician opinions |
| Causation | Connect incident to impairment | Causation statements, imaging comparisons |
| Damages Foundation | Synthesize for economic/non-economic recovery | Billing records, life care plans, expert reports |

## Section Guidance

### Pre-Incident Baseline, Quantify: specific occupational duties, recreational activities, family roles, hours worked, physical demands, Acknowledge pre-existing conditions transparently; contrast pre/post-incident utilization patterns

### Incident Mechanism & Immediate Presentation, Detail forces, direction, body mechanics → connect to specific diagnoses, For delayed presentation: cite provider notes linking symptoms to trauma with medical basis for delayed onset

### Treatment Course
Organize thematically by escalation, not just chronologically:

1. **Conservative care** - PT, chiropractic, activity modification
2. **Pharmaceutical management** - document escalation pathway (OTC → Rx NSAID → opioid → nerve pain meds), side effects, effectiveness
3. **Interventional procedures** - injections, nerve blocks; session count, response duration
4. **Surgical intervention** - document decision pathway: conservative failures → diagnostic confirmation → procedure details → post-op outcomes

For each intervention: state clinical rationale, objective effectiveness measures, and why escalation was necessary.

### Functional Impact, Convert clinical measurements to real-world consequences (e.g., "30° cervical rotation vs. normal 80°" → cannot check blind spots driving)
- Document ADL limitations with specifics from therapy/OT records, Vocational impact: lost time, job modifications, reduced earnings, career trajectory changes, Psychological consequences: diagnoses, severity scores, connection to physical injuries

### Current Status & Prognosis, MMI status and basis for determination, Ongoing treatment frequency, projected annual and lifetime costs, Synthesize provider opinions; address divergent IME opinions against objective evidence, Future deterioration risk (e.g., adjacent segment disease post-fusion)

### Causation Framework, Cite provider language: "consistent with," "caused by," "directly related to"
- Establish temporal relationship: no prior complaints → immediate post-incident symptoms, Pre-existing condition strategy: compare pre/post imaging, distinguish degenerative from traumatic pathology, apply aggravation doctrine, Preemptively address alternative causation using treatment continuity

### Damages Foundation, Past medical expenses documented, Future treatment needs quantified, Lost earning capacity via vocational evidence, Non-economic damages supported by specific documented examples, not hyperbole

## Citation Format

Integrate citations into prose with provider name, date of service, and document type:

> "Dr. Sarah Martinez's orthopedic evaluation on March 15, 2024, documented severe cervical spine tenderness, muscle spasm, and restricted range of motion limited to thirty degrees of rotation."

## Pitfalls and Checks

- **Tone**: Advocate credibly, let documented facts speak; no inflammatory language or exaggeration
- **Medical necessity**: Justify every significant intervention against clinical guidelines and standard of care
- **Treatment gaps**: Address proactively, explain whether medically appropriate, logistically necessary, or caused by access barriers
- **Pre-existing conditions**: Never conceal; frame as manageable baseline vs. post-incident debilitation using eggshell plaintiff / aggravation doctrine
- **No legal conclusions**: Establish factual foundation without crossing into legal argument
- **Expert alignment**: Ensure narrative supports opinions your experts will offer
- **Defense scrutiny**: Every causal assertion must be supportable by cited medical evidence
- **Expense reasonableness**: Connect costs to procedure complexity, specialist expertise, facility type, geographic market rates

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
