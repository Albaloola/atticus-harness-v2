---
name: human-rights-case-summary
language: en
description: Produces structured, citation-ready summaries of human rights decisions. Trigger when the user requests a human rights case summary, tribunal decision summary, or analysis involving ICCPR, ICESCR, ICERD, CAT, CRC, ACHR, ECHR, African Charter, UN treaty body views, or regional human rights court rulings. [Atticus UK/Scots refined]
tags:
- analysis, litigation, research, summarization, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Human Rights Case Summary

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

Structured summary of a human rights decision covering identification, reasoning, remedies, compliance, and impact.

## Prerequisites

Before drafting, confirm you have:

1. Primary decision text (judgment, opinion, order, or treaty body views)
2. Procedural posture and outcome stage (trial, appeal, enforcement, compliance)
3. Parties, forum, decision date, and citation
4. Relevant human rights instruments or provisions

If any material is missing, list required sources before drafting.

## Quick Start

1. Gather primary decision and procedural context.
2. Fill each template section; keep entries concise.
3. Run quality checks.
4. Flag gaps with `[VERIFY]` or `Unknown, source needed`.

## Output Template

```text
Case Identification, Case name:
- Forum/Court/Tribunal:
- Decision date (Month Day, Year):
- Citation:
- Jurisdiction(s):
- Parties and roles:
- Procedural posture:
- Instruments/provisions at issue:

Executive Summary (3 to 6 sentences)
- Outcome:
- Core holding:
- Key principle clarified or expanded:
- Practical consequence:

Facts, Chronology of key events:
- Alleged violations and affected groups:
- Government/actor conduct:

Claims and Defenses, Petitioner/applicant claims:
- Respondent defenses:
- Admissibility/jurisdiction issues:

Legal Issues, Issue 1:
- Issue 2:
- Issue 3:

Holdings, Holding per issue:

Reasoning, Interpretive method (textual, purposive, proportionality, margin of appreciation):
- Precedent or comparative law:
- Evidence and burden of proof:
- Balancing of competing rights:

Separate Opinions, Concurrences:
- Dissents:
- Key divergence points:

Remedies and Orders, Relief ordered:
- Compliance deadlines:
- Monitoring/enforcement mechanism:

Implementation Status, Government response:
- Compliance actions:
- Follow-on litigation:

Precedential Value, Binding scope:
- Persuasive influence:
- Doctrinal shift or novelty:

Social and Policy Impact, Effects on affected communities:
- Institutional or legislative changes:
- Unintended consequences:

Open Questions, Doctrinal gaps:
- Unresolved issues:

Sources, Primary decision:
- Key filings:
- Secondary sources:
```

## Quality Checks

Run before finalizing:

- All facts tied to a source or marked `Unknown, source needed`
- Instruments and provisions cited accurately; use `[VERIFY]` if unsure, Holdings and reasoning not conflated, Remedies distinct from compliance status, Dates in Month Day, Year format

## Pitfalls

- **Blurring analysis and advocacy** - maintain neutral tone; separate legal reasoning from policy impact
- **Omitting admissibility thresholds** - always address jurisdiction and admissibility explicitly
- **Ignoring enforcement limits** - for international/regional forums, specify compliance mechanisms and enforcement constraints
- **Missing posture details** - for U.S.-jurisdictional cases, note federal/state posture and standard of review
- **Drafting without sources** - if information is missing, request sources before writing the affected section

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
