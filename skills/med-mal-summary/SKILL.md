---
name: med-mal-summary
language: en
description: Produces structured medical malpractice case summaries from medical records for personal injury litigation. Extracts chronological care narratives, identifies potential standard-of-care breaches, traces causation, assesses damages, and flags expert needs and statute of limitations issues. Use when evaluating medical negligence claims, onboarding med-mal matters, or assessing case merits during pre-filing or discovery. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Medical Malpractice Summary

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

Produces a structured med-mal case summary from medical records for attorney case evaluation and litigation planning.

## Prerequisites

1. **Medical records** - hospital charts, physician notes, nursing notes, discharge summaries
2. **Diagnostic materials** - lab results, imaging/radiology reports, pathology reports
3. **Procedure documentation** - operative reports, anesthesia records, consent forms
4. **Pharmacy records** - medication administration records, prescription history
5. **Patient intake** - chief complaint, date of incident, treating providers, patient demographics

## Output Structure

### 1. Case Overview Table

| Field | Content |
|---|---|
| Patient | Name, DOB, relevant medical history |
| Date(s) of alleged negligence | Specific dates |
| Facility/Provider(s) | Names, specialties, roles |
| Chief complaint / Presenting condition | Initial presentation |
| Alleged injury/outcome | Summary of harm |
| SOL flag | Statute date + discovery rule considerations |

### 2. Chronological Care Narrative

For each treatment episode:

| Date | Provider (Specialty) | Clinical Findings | Diagnosis | Treatment/Orders | Outcome/Notes |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

Flag entries with `⚠` where potential standard-of-care issues exist.

### 3. Standard of Care Analysis

For each identified deviation:

- **Provider**: Name and specialty
- **Action/Omission**: What was done or not done
- **Expected standard**: What a reasonably competent provider in that specialty would have done
- **Supporting basis**: Clinical guidelines, protocols, or accepted practice (cite where identifiable)
- **Severity**: Critical / Significant / Minor

Breach categories to evaluate:

- [ ] Diagnostic errors, missed, delayed, or wrong diagnosis
- [ ] Failure to order appropriate tests
- [ ] Misinterpretation of test results
- [ ] Treatment selection errors
- [ ] Surgical/procedural errors
- [ ] Medication errors (wrong drug, dose, interaction)
- [ ] Failure to obtain informed consent
- [ ] Monitoring failures (post-op, medication, vitals)
- [ ] Premature discharge
- [ ] Failure to refer to specialist
- [ ] Communication failures between providers
- [ ] Documentation gaps or alterations

### 4. Causation Analysis

For each breach, trace: **Breach → Mechanism of Harm → Injury/Outcome**

Classify each harm:

| Category | Description |
|---|---|
| Attributable to negligence | Would not have occurred but for the breach |
| Underlying condition | Natural disease progression |
| Unavoidable complication | Known risk of necessary treatment |
| Concurrent/intervening cause | Other contributing factors |

### 5. Damages Assessment

| Category | Details | Documentation Source |
|---|---|---|
| Additional medical treatment | Surgeries, hospitalizations, rehab, future care | Page/record refs |
| Physical impairment | Permanent injury, disability, functional limitations | Page/record refs |
| Pain and suffering | Duration, severity, ongoing nature | Page/record refs |
| Lost wages / Earning capacity | Work restrictions, vocational impact | Page/record refs |
| Life expectancy impact | If applicable | Page/record refs |

### 6. Legal & Evidentiary Flags

- **Expert specialties needed** - list by specialty based on providers and issues involved
- **Statute of limitations** - calculate from treatment dates; note discovery rule triggers
- **Record red flags** - gaps, late entries, alterations, inconsistencies between providers
- **Provider admissions** - documented apologies, acknowledgments of error, incident reports
- **Applicable guidelines** - cite specific clinical practice guidelines or hospital protocols implicated
- **Strengths** - strongest facts supporting liability and damages
- **Weaknesses** - defenses, contributory factors, documentation gaps undermining the claim

## Guidelines

- Cite every factual assertion to specific page numbers, dates, and document sources, Use medical terminology with parenthetical plain-language explanations on first use, Present balanced analysis, identify both strengths and weaknesses of the claim, Do not render legal conclusions on ultimate liability; frame as "potential" breaches for attorney evaluation, Flag any records that appear incomplete or were not provided, If standard-of-care analysis requires subspecialty knowledge beyond the records, note that expert consultation is needed, Mark any cited clinical guidelines or statistics with `[VERIFY]` unless directly quoted from provided records

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
