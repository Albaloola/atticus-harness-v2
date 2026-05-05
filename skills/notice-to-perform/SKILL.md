---
name: notice-to-perform
language: en
description: Drafts a U.S. residential real estate Notice to Perform (cure notice) identifying contractual defaults, demanding specific cure actions, and preserving remedies. Use when drafting a notice to perform, notice to cure, default notice, or breach-and-cure letter for a residential purchase agreement or lease. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notice to Perform

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

Draft a legally compliant cure demand that serves as an evidentiary record.

## Prerequisites

Collect before drafting:

1. Executed agreement with all addenda, schedules, and disclosures
2. Party names, roles, and service addresses exactly as in the agreement
3. Specific breaches with dates, amounts, and documentary support
4. Governing law, venue, and property location
5. Contract notice clause (method, address, timing, cure period)
6. Statutory notice requirements for the jurisdiction and contract type

## Required Inputs

| Field | Source |
|---|---|
| Sender and recipient legal names and roles | Agreement |
| Property address and APN | Agreement / records |
| Agreement title and execution date | Agreement |
| Notice clause section reference | Agreement |
| Breach description with dates and amounts | Records |
| Cure actions required | Agreement |
| Cure deadline | Contract / statute |
| Service method and address | Contract / statute |

## Workflow

### 1. Build the Timeline

| Date | Event | Evidence |
|---|---|---|
| YYYY-MM-DD | Obligation due | Invoice / email / section |
| YYYY-MM-DD | Nonperformance occurred | Record |
| YYYY-MM-DD | Prior notice or communication | Email / letter |

### 2. Determine Cure Period

| Basis | Rule | Deadline |
|---|---|---|
| Contract | Stated cure period and method | Service date + contract days |
| Statute | Minimum notice period applies | Service date + statutory days |
| Reasonableness | Only if no contract or statute governs | Fact-based, documented |

If statutory requirements are uncertain, mark with `[VERIFY]` and request confirmation.

### 3. Draft the Notice

Follow this checklist:

- [ ] Identify parties, roles, and agreement details
- [ ] Quote the exact breached provisions with section numbers
- [ ] State factual breach narrative with dates and amounts
- [ ] Specify cure actions in measurable terms
- [ ] Set deadline with date, time, and time zone
- [ ] State consequences tied to contract and law
- [ ] Include reservation of rights
- [ ] Include signature block and authority
- [ ] Add certificate of service with method details

### 4. Notice Template

​

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
