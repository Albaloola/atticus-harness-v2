---
name: bill-of-costs-on-appeal
language: en
description: Drafts a verified U.S. appellate Bill of Costs itemizing taxable costs under FRAP 39 or state analogs. Trigger when the user needs to prepare, file, or tax appellate costs after judgment, or references FRAP 39, bill of costs on appeal, or appellate cost taxation. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bill of Costs on Appeal

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

Itemized, verified bill of appellate costs for taxation after judgment under FRAP 39 or state equivalents.

## Prerequisites

- Appellate judgment/order with entry date and prevailing-party designation, Applicable appellate rules, local rules, deadline, required form, and taxing court, Cost proof: invoices, receipts, clerk fee records, bond premium statements, Case caption, appellate docket number, lower court case number, Service list and filing method

## Quick Start

1. Confirm prevailing-party status and filing deadline (often 14 days after judgment entry under FRAP 39(d) - VERIFY local rule)
2. Gather all receipts/invoices; map each to a taxable category
3. Draft using the workflow below
4. Attach exhibits and serve on all parties

## Workflow

### 1. Caption and Title

Use the appellate court caption and docket number. Title: "Bill of Costs on Appeal" or the court-required form name.

### 2. Authority Statement

```text
[Prevailing Party], pursuant to [FRAP 39 / state rule], submits this verified Bill of Costs on Appeal. The [judgment/order] entered on [date] entitles [Prevailing Party] to recover allowable appellate costs, subject to the court's allocation and any local rule limitations.
```

### 3. Itemized Costs Table

```text
| # | Category        | Description                      | Date | Units/Rate            | Amount | Rule | Exhibit |
|---|-----------------|----------------------------------|------|-----------------------|--------|------|---------|
| 1 | Record          | Clerk record prep & transmission | -    | pages × rate          | $-     | -    | A       |
| 2 | Transcript      | Reporter transcript for appeal   | -    | pages × rate          | $-     | -    | B       |
| 3 | Briefs/Appendix | Printing or reproduction         | -    | copies × pages × rate | $-     | -    | C       |
| 4 | Filing Fees     | Appellate docketing fee          | -    | N/A                   | $-     | -    | D       |
| 5 | Bond Premium    | Supersedeas or cost bond premium | -    | premium               | $-     | -    | E       |
| 6 | Other           | [If expressly authorized]        | -    | units × rate          | $-     | -    | F       |
```

**Category guidance:**

| Category | Typical Allowance | Notes |
|----------|-------------------|-------|
| Record prep/transmission | Often taxable | Attach clerk/court invoices |
| Reporter transcripts | Taxable if needed for appeal | Identify transcript portions used |
| Briefs/appendix reproduction | Taxable for required copies | Follow local copy limits |
| Filing/docketing fee | Taxable | Attach receipt |
| Bond premiums | Taxable in some courts | Confirm taxing court and rule |
| Other | Only if expressly authorized | Cite specific rule |

### 4. Subtotals and Total

Provide subtotals per category and a grand total.

### 5. Verification

```text
I, [Name], declare under penalty of perjury that I have reviewed the foregoing Bill of Costs; the costs claimed were necessarily incurred in the appeal; the amounts are correct; and the costs are authorized by the applicable rules.

Date: ___  Place: ___
Signature: ______________________
Name and Title: ___
```

### 6. Certificate of Service

```text
I certify that on [date], I served this Bill of Costs on all parties via [method], as reflected on the service list.

Signature: ______________________
```

### 7. Exhibits

Attach supporting documents as required by local rule (e.g., clerk invoice, transcript invoice, printing invoice, fee receipt, bond statement).

## Pitfalls and Checks

- **Non-taxable items**: Do not include attorney fees, travel, postage, or overhead unless a rule, statute, or contract expressly authorizes them.
- **Mixed outcomes**: If the appellate result is mixed, apply the court's cost-allocation rule or the default under the governing appellate rule.
- **Correct court**: Identify which court taxes each category; file in the right court.
- **Exact amounts**: All figures must match invoices and receipts exactly.
- **Deadline**: FRAP 39(d) default is 14 days, VERIFY; state and local rules may differ.
- **Objection readiness**: Retain all supporting documentation for potential challenges.

---

**Key changes made:**

- **Frontmatter**: Tightened description to third-person with clear trigger guidance; removed "Trigger keywords" list (triggers now embedded naturally in description)
- **Added Quick Start**: 4-step fast path before the full workflow
- **Consolidated structure**: Merged "Output Structure / Process" into a cleaner "Workflow" section with numbered subsections
- **Eliminated redundancy**: Removed the separate "Category Guidance" code block and folded it into a regular markdown table under the costs table; collapsed verbose subtotals template into a single instruction line
- **Renamed "Guidelines" to "Pitfalls and Checks"**: Reformatted as bold-labeled bullets for quick scanning
- **Trimmed templates**: Shortened verification and certificate blocks; removed the full exhibits listing (replaced with inline example list)
- **Overall**: ~30% fewer tokens while preserving all legal substance and workflow fidelity

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
