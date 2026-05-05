---
name: lis-pendens
language: en
description: 'Drafts a U.S. Lis Pendens (Notice of Pending Action) for recording against real property. Covers intake, statutory authority mapping, legal description, verification, and proof of service. Use when preparing a lis pendens, notice of pending action, or recording notice tied to title or possession claims. Trigger: lis pendens, notice of pending action, quiet title, specific performance, foreclosure, partition, lien enforcement, expungement. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Lis Pendens (Notice of Pending Action)

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

Drafts a recordable notice providing constructive notice of pending litigation affecting title or right to possession of real property.

## Prerequisites

1. **Jurisdiction + county recorder** - state, county, local recorder formatting rules.
2. **Filed pleading** - operative complaint asserting a qualifying real property claim.
3. **Case metadata** - court name, division, case number, filing date, party names.
4. **Property records** - deed/title report with full legal description and APN/tax ID.

## Quick Start

Complete the intake table before drafting. Every field is required.

| Field | Value | Source |
|---|---|---|
| State + County | | |
| Court (full name) | | |
| Division/Dept | | |
| Case Number | | |
| Filing Date | | |
| Plaintiff(s) (exact) | | |
| Defendant(s) (exact) | | |
| Property Address | | |
| Legal Description | | |
| APN / Tax ID | | |
| Recorder Formatting Rules | | |
| Service Requirements | | |

## Core Workflow

### 1. Map Statutes and Rules

Fill each row, then cite in the document. Mark unverified entries `[VERIFY]`.

| Topic | Requirement | Citation |
|---|---|---|
| Statutory authority | | [VERIFY] |
| Real property claim definition | | [VERIFY] |
| Mandatory warning language | | [VERIFY] |
| Verification format | | [VERIFY] |
| Attorney certification | | [VERIFY] |
| Service timing/method | | [VERIFY] |
| Recorder formatting | | [VERIFY] |

### 2. Draft the Document

Adapt the template below to local format.

```text
[Recording Requested By:]
[When Recorded Mail To:]
[Space for Recorder's Stamp per county rules]

Attorney Name (Bar No.)
Law Firm
Address
Phone | Email | Fax (if required)
Attorney for [Plaintiff/Party]

[COURT CAPTION EXACTLY AS FILED]

NOTICE OF PENDING ACTION (LIS PENDENS)

1. Parties. [Plaintiff(s)] filed this action against [Defendant(s)].
2. Court and Case. This action is pending in [Court], Case No. [###], filed [Date].
3. Property.
   a. Street Address: [Address]
   b. Legal Description: [Full legal description]
   c. APN/Tax ID: [APN]
4. Real Property Claim. The action includes claims for [quiet title / specific performance / foreclosure / partition / lien enforcement / other], affecting title to or right to possession of the Property.
5. Relief Affecting Property. Plaintiff seeks [specific relief].
6. Statutory Authority. This Notice is recorded pursuant to [citation] [VERIFY].
7. Mandatory Notice. [Statutory warning language verbatim] [VERIFY].

Dated: [Date]                    __________________________
                                 [Attorney Name]
                                 Attorney for [Party]

VERIFICATION / DECLARATION
I, [Name], declare under penalty of perjury under the laws of [State] that the facts stated in the foregoing Notice of Pending Action are true and correct of my own knowledge, except as to matters stated on information and belief, and as to those matters I believe them to be true.

Executed on [Date] at [City, State].
__________________________
[Signature / Printed Name / Title]

[ATTORNEY CERTIFICATION (if required)]
I certify that the real property claim has probable validity under [statute] [VERIFY].
__________________________
[Attorney Signature]

[PROOF OF SERVICE (if required)]
Served on parties as follows: [method, date, address/service list].
__________________________
[Server Signature]
```

### 3. Verify Before Finalizing

```
- [ ] Caption matches court's required format
- [ ] Party names match operative complaint exactly
- [ ] Case number and filing date accurate
- [ ] Legal description + APN from deed/title report (not street address alone)
- [ ] Multiple parcels each have own legal description + APN
- [ ] Claim summary ties relief directly to title/possession
- [ ] Statutory authority cited
- [ ] Mandatory warning language included verbatim
- [ ] Verification/declaration properly completed
- [ ] Attorney certification included if required
- [ ] Proof of service prepared if required
- [ ] Recorder margins, font size, stamp-space rules met
```

### 4. Attorney Attention Notes

Append to every draft:

- Missing source data: [list]
- Unverified statutes/rules: [list with `[VERIFY]`]
- Potential issues: [e.g., non-qualifying claim, inadequate property description, service deadline risk]
- Recorder formatting risks: [list]

## Common Pitfalls

- **Non-qualifying claim** - only record for claims affecting title or possession; purely monetary claims do not support lis pendens.
- **Street address only** - always use verbatim legal description from deed/title report.
- **Party name mismatch** - names must match the operative complaint exactly.
- **Missing statutory warnings** - some states require verbatim warning language; omission risks expungement.
- **Service deadlines** - late or missing service can void the notice; confirm statutory timeframes.
- **Recorder formatting** - county-specific margin, font, and stamp-space rules vary; confirm before recording.
- **Expungement exposure** - flag jurisdiction-specific probable validity requirements early.

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
