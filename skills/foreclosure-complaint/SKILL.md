---
name: foreclosure-complaint
language: en
description: Drafts U.S. judicial foreclosure complaints pleading standing, chain of title, default, and amounts due with jurisdiction-specific compliance and exhibit control. Triggered when the user needs a foreclosure complaint, mortgage foreclosure pleading, note-and-mortgage enforcement action, or default-based real estate litigation involving acceleration, standing, or lost-note issues. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Foreclosure Complaint

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

Draft a court-ready judicial foreclosure complaint with verified standing, default allegations, and itemized relief.

## Prerequisites

Collect before drafting:

1. **Loan documents** - note, mortgage/deed of trust, riders, endorsements/allonges
2. **Assignment chain** - each note/mortgage transfer with dates and recording data
3. **Payment history** - last paid installment, default date, arrearage breakdown
4. **Pre-suit notices** - breach/acceleration/right-to-cure letters with proof of service
5. **Property data** - legal description, parcel ID, address, recording info
6. **Jurisdiction rules** - venue statute, foreclosure statute, verification/affidavit requirements
7. **Interested parties** - borrower(s), guarantors, junior lienholders, HOA/condo, tenants

## Inputs

| Field | Required | Notes |
|---|---|---|
| Court/County | Yes | Must match property location and venue statute |
| Plaintiff identity | Yes | Entity type, state of formation, capacity (holder/servicer) |
| Defendant list | Yes | All parties with record or claimed interests |
| Note terms | Yes | Date, principal, rate, payment schedule, maturity |
| Mortgage terms | Yes | Date, recording book/page or instrument no. |
| Property legal description | Yes | Exact as recorded; include street address |
| Default date | Yes | First missed payment date |
| Amounts due | Yes | Principal, interest, fees, advances, per diem |
| Notices | Yes | Dates, method, content compliance |
| Standing facts | Yes | Chain of assignments and note possession |
| Modifications | If any | Dates, material terms, recalculated amounts |

## Workflow

### 1. Build Pleading Structure

Follow this section order:

- [ ] Caption, court, parties, case type, case no. placeholder
- [ ] Jurisdiction and venue
- [ ] Parties and interest allegations
- [ ] Loan transaction (note + mortgage)
- [ ] Recording and lien priority
- [ ] Standing and chain of title
- [ ] Conditions precedent and notice compliance
- [ ] Default and acceleration
- [ ] Amounts due with per diem interest
- [ ] Causes of action
- [ ] Prayer for relief
- [ ] Verification/affidavit (if jurisdiction requires)
- [ ] Signature block and certificates
- [ ] Exhibits list

### 2. Plead Required Allegations

| Topic | Must Allege | Notes |
|---|---|---|
| Standing | Holder or authorized agent; note possession; assignments | Address lost note if applicable |
| Mortgage validity | Execution, consideration, recording | Provide recording data |
| Default | Date and nature of breach | Include last payment date |
| Notice compliance | Statutory and contractual notices | Include dates/methods |
| Acceleration | Date and method | Cite clause if needed |
| Amount due | Itemized totals | Include per diem rate |
| Priority | Lien priority vs. junior interests | Identify subordinate liens |
| Venue | Property located in county | Cite venue statute |
| Conditions precedent | Compliance pleaded with specificity | Attach notices as exhibits |

### 3. Itemize Amounts Due

Use this format:

```
Unpaid principal balance (as of [DATE]): $[AMOUNT]
Accrued interest through [DATE] at [RATE]%: $[AMOUNT]
Late charges / default interest: $[AMOUNT]
Advances (taxes/insurance/preservation): $[AMOUNT]
Other fees/costs authorized by loan docs: $[AMOUNT]
Total due as of [DATE]: $[AMOUNT]
Per diem interest: $[AMOUNT]/day
```

### 4. Draft Causes of Action

Include as applicable:

1. Foreclosure of mortgage/deed of trust
2. Breach of promissory note
3. Deficiency judgment (if permitted by state law)
4. Possession/writ of assistance (if needed)
5. Priority and extinguishment of junior interests

### 5. Draft Prayer for Relief

- [ ] Money judgment for total indebtedness with per diem interest
- [ ] Foreclosure judgment and order of sale
- [ ] Application of sale proceeds per statute
- [ ] Deficiency judgment (if allowed)
- [ ] Extinguishment of junior interests, subject to redemption rights
- [ ] Attorneys' fees and costs (if authorized)
- [ ] Other relief deemed just and proper

### 6. Compile Exhibits

- [ ] Note (with endorsements/allonges)
- [ ] Mortgage/deed of trust
- [ ] Assignments (each link in chain)
- [ ] Payment history/accounting
- [ ] Default/breach and acceleration notices with proof of service
- [ ] Loan modification/forbearance agreements (if any)
- [ ] Affidavit of amounts due (if required)
- [ ] Lost note affidavit (if applicable)

## Pitfalls and Checks

- **Party names**: Use exact names from loan docs and land records; keep consistent throughout.
- **Standing**: Plead note possession plus assignment chain. If note is lost, attach lost-note affidavit.
- **Notice compliance**: Include dates and service methods for every required notice and condition precedent.
- **Deficiency**: Do not request if barred or limited by state law.
- **Jurisdiction specifics**: Confirm verification, mediation, and pre-suit certification requirements.
- **Unverified citations**: Flag state-specific statutory citations you cannot confirm with `[VERIFY]`.
- **Factual pleading**: Avoid conclusory allegations; tie every allegation to an exhibit.
- **Interested parties**: Name all parties with recorded or claimed interests to clear title post-sale.

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
