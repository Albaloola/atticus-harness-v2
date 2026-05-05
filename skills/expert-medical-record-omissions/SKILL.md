---
name: expert-medical-record-omissions
language: en
description: Analyzes expert witness reports, depositions, and testimony to identify gaps in medical record review, map conflicts to the full record set, and produce impeachment and admissibility analysis with pinpoint citations. Use when reviewing expert reports for missing medical records, selective review patterns, Daubert/Frye challenges, cross-examination prep, motions to exclude or limit, or rebuttal expert focus in personal injury or medical malpractice litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Medical Record Omissions

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

Identify material omissions in expert medical record review and translate them into litigation-ready challenges with pinpoint citations.

## Prerequisites

1. Complete medical record set with Bates labels and index
2. Expert materials: report(s), disclosure, materials-reviewed list, CV, deposition/testimony transcripts, exhibits
3. Case theory summary (claims, defenses, causation or standard-of-care theory)
4. Jurisdiction admissibility standard (Daubert, Frye, or hybrid)
5. Medical chronology or timeline (if available)

## Workflow

1. Build record inventory and expert review map
2. Detect omissions and contradictions
3. Rate materiality and litigation impact
4. Flag patterns suggesting selective review or bias
5. Deliver structured report with pinpoint citations

## Record Inventory

For each medical record, capture:

| Field | Entry |
|---|---|
| Record date | Encounter or service date |
| Provider/facility | Name and specialty |
| Record type | Note, imaging, lab, operative, billing, etc. |
| Bates range | Start to end |
| Key facts | Diagnosis, findings, causation cues |
| Causation relevance | Supports / Contradicts / Alternative / Neutral |

## Expert Review Map

Extract from the expert's own materials:

| Item | Source | Citation |
|---|---|---|
| Materials-reviewed list | Report or disclosure | Page/paragraph |
| Records cited in opinions | Report | Page/paragraph |
| Deposition admissions about records | Transcript | Page/line |
| Stated limitations or exclusions | Report or deposition | Page/line |

## Omission Matrix

One row per omitted record:

| Omitted record | Date | Provider | Bates | Expert statement that should have addressed it | Conflict or gap | Significance |
|---|---|---|---|---|---|---|
| _Record name_ | _Date_ | _Provider_ | _Bates_ | _Report/Depo cite_ | Contradiction / Alternative / Context | High / Med / Low |

**Significance scale:**
- **High** - Directly undermines key opinion or reliability. Use for admissibility challenges, motion practice.
- **Medium** - Alters weight but not core opinion. Use for cross-examination, rebuttal focus.
- **Low** - Peripheral or cumulative. Use for background impeachment.

## Inconsistency Log

| Expert assertion | Claimed source | Contradicting record | Citation (Bates + page/line) | Impact |
|---|---|---|---|---|
| _Assertion_ | _Cite_ | _Record_ | _Bates + page/line_ | Material / Moderate / Minor |

## Pattern Flags

Check for these indicators of selective review or bias:

- [ ] Repeated omission of pre-existing conditions
- [ ] Omission of alternative causation records
- [ ] Omission of treating provider notes conflicting with opinion
- [ ] Omission of diagnostic imaging or labs central to timeline
- [ ] Chronology inconsistencies versus record dates
- [ ] Mischaracterization of records listed as reviewed
- [ ] Selective inclusion of favorable records only

## Strategic Outputs

### Cross-Examination Seeds

| Theme | Anchor omission | Objective |
|---|---|---|
| Record completeness | _Record_ | Establish incomplete review |
| Methodology | _Omitted category_ | Show unreliable process |
| Alternative causation | _Record_ | Expose unaddressed cause |
| Timeline accuracy | _Record_ | Undermine chronology |

### Motion Triggers

Flag for Daubert/Frye challenge or motion to exclude when:
- Expert failed to consider key facts relevant to causation or standard of care, Methodology not reliably applied to the full record set, Opinions based on inaccurate timeline or mischaracterized records, Expert did not review materials they claim to have reviewed

## Report Structure

Organize final output as:

1. **Scope and Materials** - Record set scope, expert materials reviewed, admissibility standard
2. **Omission Summary** - Count and list by significance (High / Medium / Low)
3. **Omission Matrix** - Full table
4. **Inconsistency Log** - Full table
5. **Pattern Analysis** - Indicators observed, alternative explanations for omissions
6. **Strategic Recommendations** - Cross-examination themes, motion practice targets, rebuttal expert focus areas

## Pitfalls

- **Omission vs. disagreement**: Only flag omissions where the record exists and was not addressed. Disagreement with a reviewed record is not an omission.
- **Record completeness**: Confirm the record set is complete before concluding a gap is material. Flag missing record categories that could change the analysis.
- **Citation rigor**: Every omission and contradiction requires a pinpoint citation (Bates + page/line).
- **Weight vs. admissibility**: Separate weight attacks from admissibility challenges. Note the jurisdiction's standard.
- **Neutrality**: Avoid advocacy language in the analysis itself.
- **PHI**: Protect PHI and comply with applicable confidentiality rules.

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
