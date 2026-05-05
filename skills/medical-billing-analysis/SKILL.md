---
name: medical-billing-analysis
language: en
description: 'Produces a litigation-ready analysis of medical bills and supporting records for personal injury and clinical negligence cases under UK and Scottish law. Validates OPCS-4/ICD-10 codes against NHS and private medical documentation, applies a per-charge causation screen, runs a reasonableness review against NHS National Tariff / HRG4+ / PMI schedules, surfaces unbundling, upcoding, duplicate and phantom billing habits, flags Medical Reporting Organisation (MRO) patterns, identifies Social Security (Recovery of Benefits) Act 1997 and CRU certificate interfaces, and outputs a memo whose every finding cites document, page, and Bates. Trigger on: medical billing analysis under UK law, NHS/private medical bill audit, reasonableness review, OPCS-4/ICD-10 code review, HRG recovery, billed-vs-paid analysis, MRO/providers arrangement analysis, CRU certificate review, SOC Recovery of Benefits, causation chain analysis, IME rebuttal prep, schedule of damages medicals section, Protocol (PI)
  compliance. [Atticus UK/Scots refined]'
tags:
- litigation, analysis, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Medical Billing Analysis (UK/Scotland Adaptation)

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

A medical-billing analysis is simultaneously the spine of the damages case and a future exhibit at proof, mediation, and settlement negotiations. A defective analysis either understates the case or hands opposing counsel impeachment material. This skill produces a memo where every charge is reconciled, every code is checked against the chart, every finding cites document/page/Bates, every red flag carries a stable taxonomy ID, and every jurisdictional assumption is surfaced for counsel.

**IMPORTANT:** The UK healthcare funding system is fundamentally different from the US system. This skill adapts the analytical methodology (code validation, causation, reasonableness review, red flags) to the UK/Scottish context. [SCOTS: Note] boxes throughout flag key divergences where US concepts have no direct UK equivalent.

The skill is **billing-side**: it does not value the case, draft the schedule of damages, build the full chronology, or resolve CRU/SOC recovery issues. It hands those off to sibling skills.

---

## Related skills

- `medical-record-chronology` - full date-ordered treatment narrative; consume it, do not rebuild
- `medical-treatment-summary` - narrative course of treatment
- `damages-calculator` - valuation, multipliers, present value; this skill feeds it the billing-side line items
- `lien-resolution-summary` - CRU certificate / SOC recovery / private medical insurance contributions; identify here, resolve there (see SOC Recovery of Benefits below)
- `ime-report-analysis`, `expert-medical-record-omissions` - defence-side rebuttal prep
- `pi-demand-summary`, `demand-letter`, `mediation-statement` - downstream consumers
- `hipaa-release` - no direct UK equivalent; use GDPR-compliant medical authorisation (Access to Health Records Act 1990 / Data Protection Act 2018)

---

## Checkpoint A: Pre-Draft Intake (Mandatory)

Ask every time unless the user says "use defaults" or "just draft." Record gaps explicitly; do not silently proceed.

**Required**

1. **Incident facts** - date, mechanism, body parts claimed, jurisdiction (Scotland vs. England/Wales), liability posture
2. **Medical authorisation scope** - what records are authorised; GDPR / Access to Health Records Act compliance
3. **Medical records** - every provider (NHS hospital, GP, A&E, outpatient, private consultant, physiotherapy, mental health, pharmacy, DME/surgical appliances)
4. **Itemised bills** - NHS patient invoices (where applicable), private hospital invoices, consultant fee notes, MRO invoices, pharmacy receipts
5. **CRU certificate** - Certificate of Recoverable Benefits from Compensation Recovery Unit (DWP)
6. **Private medical insurance (PMI) schedules** - pre-existing PMI cover and any recovered benefits
7. **Pre-incident records** - same body parts, baseline function, pre-existing conditions

**As applicable**

8. **Medical Reporting Organisation (MRO) arrangements** - flag every report obtained via an MRO; check for referral patterns, standardised reports, and independence
9. **IME or independent medical reports** - commissioned by the defence or joint instruction
10. **Life care plan / future medical costs report** - if future care at issue

**Defaults if user does not respond** (label every default in the output):
- Analyse chronologically; carry billed and paid as separate columns, Flag treatment gaps > 30 days, Apply three-prong causation screen per charge (temporality, consistency, medical necessity)
- Flag every jurisdictional rule `[VERIFY]`
- Apply NHS National Tariff as the primary reasonableness benchmark for NHS treatment; use PMI schedules for private treatment

**Missing-material policy.** Proceed with what's available. List missing categories in Section 4 (Open Items) of the output. Do not produce reasonableness or causation conclusions on a provider whose itemised bill is absent, name the gap and stop.

---

## Workflow

### Step 1 - Build Document Inventory & Bates-Map

Classify each document, assign a short stable `doc-label`, record Bates range and OCR status. Use the categories listed in `references/OUTPUT-TEMPLATE.md` Section 5. The `doc-label` carries through every citation in the memo.

### Step 2 - Reconcile Billing Arithmetic

For each provider, verify: **billed = paid + write-offs/adjustments + outstanding balance**. Record the per-provider reconciliation row (Section 7 of the output). Any failure to reconcile is itself a flag, identify the underlying cause and record it. Do not paper over a delta; show it.

[SCOTS: Note] NHS treatment is normally free at point of use under the National Health Service (Scotland) Act 1978. Patients may pay for:
- NHS prescription charges (Scotland: free since 2011)
- Dental treatment (NHS charges)
- Optical services, Private treatment (full private patient invoices)
- Personal injury medicals arranged via MROs (often privately billed, not NHS)
MRO-instructed reports are billed in accordance with the Civil Procedure Rules / Scottish PI Protocol fee scales. There is no equivalent of UB-04/CMS-1500 forms, NHS billing uses e-claims, private hospitals use their own invoice formats.

### Step 3 - Validate Codes (OPCS-4 / ICD-10)

Per charge, check that:
- The procedure code is valid for the date of service (OPCS-4 edition).
- The code descriptor matches what the medical records document (procedure verb, anatomy, components).
- The diagnosis (ICD-10) on the claim supports the procedure billed.
- Any private billing codes are cross-referenced to the medical notes.

[SCOTS: Note] Coding systems are fundamentally different:
- **US CPT/HCPCS** → **UK OPCS-4** (Office of Population Censuses and Surveys Classification of Interventions and Procedures, 4th revision) - used in NHS for procedure coding
- **US ICD-10-CM** → **ICD-10** (same WHO standard, but UK-specific tabular list)
- **US DRG** → **HRG4+** (Healthcare Resource Groups, NHS payment grouping system)
- **NHS National Tariff**: The NHS Payment Scheme sets the price NHS providers receive for each HRG. Not all procedures have a tariff.
- **Private billing**: Private hospitals use their own internal fee schedules, not CPT/HCPCS. PMI schedules are insurer-specific.
- **No NCCI edits** in the UK. NHS uses its own coding standards and audit processes.

Detailed mechanics: see [references/CODE-VALIDATION.md] - note that UK/Scottish coding rules differ. Never assert a code-text mapping from memory; cite the NHS Classifications Service OPCS-4 reference or the ICD-10 tabular list, or label `[VERIFY: clinical coding specialist]`.

### Step 4 - Apply Causation Screen (per charge)

Three prongs, all required, applied to every billed line item:
- **Temporality** - treatment began promptly for the complained-of body parts
- **Consistency** - complaints documented throughout the course of care
- **Medical necessity** - care relates to the diagnosis and the mechanism of injury

Failures get tagged "potentially contested, counsel review" in Section 7's Notes column and surface as red flags (RF-23 through RF-28 as applicable). The causation screen is the same screen used by `damages-calculator` Step 2 - keep terminology aligned.

[SCOTS: Note] In Scotland, the Prescription and Limitation (Scotland) Act 1973 provides a 3-year limitation period for personal injury (from date of injury or date of knowledge), with a 20-year long-stop. Causation analysis must consider whether pre-existing conditions are related (thin skull rule applies: *Smith v Leech Brain & Co Ltd* [1962] 2 QB 405 - but *McGhee v National Coal Board* [1973] 1 WLR 1 is a Scottish case on material contribution to risk).

### Step 5 - Run Reasonableness Review

Produce a benchmark **range**, not a single "reasonable amount." Use:

- **NHS National Tariff Payment System (HRG4+)** for NHS treatment, this is the primary benchmark for NHS-delivered care in personal injury claims
- **PMI (Private Medical Insurance) schedule rates** for private treatment, check insurer-published schedules
- **MRO fee scales** - per the relevant PI Protocol / CPR / SCOTS PI Protocol
- **Invoices paid and allowed amounts** from the payment records

[SCOTS: Note] Key differences from the US framework:
- **No FAIR Health**: There is no equivalent US-style database of private medical charges. NHS charges are set by government tariff.
- **No MPFS**: The UK does not use a Medicare Physician Fee Schedule. NHS National Tariff and HRG4+ are the equivalents.
- **No Medicare Secondary Payer**: There is no direct UK equivalent. The Social Security (Recovery of Benefits) Act 1997 gives DWP the right to recover certain benefits paid to a claimant from the compensator.
- **No No Surprises Act**: No UK equivalent. Balance billing is rare in the NHS. Private providers must give cost estimates.
- **No letters of protection**: No standard UK equivalent. In personal injury, solicitors may arrange treatment via MROs that invoice on a deferred or periodic basis. These are not LOPs in the US sense.

Methodology, source list, percentile presentation, billed-vs-paid integration, and "when to recommend a billing expert" thresholds: see [references/REASONABLENESS-METHODOLOGY.md]. Never quote a benchmark figure that was not actually retrieved; if no benchmark was run, say so and recommend a clinical costing or medical billing expert.

### Step 6 - Flag Red Flags (taxonomy IDs)

Use the stable IDs in [references/RED-FLAGS-CATALOG.md](references/RED-FLAGS-CATALOG.md). Categories: billing integrity (RF-01 to RF-10), reasonableness (RF-11 to RF-14), referral patterns (RF-15 to RF-17), documentation (RF-18 to RF-22), causation (RF-23 to RF-28), IME/peer-review (RF-29 to RF-31), liens/collateral source (RF-32 to RF-35).

[SCOTS: Note] UK-specific red flags to consider:
- **MRO-driven treatment**: Treatment arranged through a Medical Reporting Organisation that may lack independence
- **NHS Right to Choose pathway**: Private treatment obtained via NHS Right to Choose (private provider paid at NHS rates)
- **Solicitor-recommended providers**: Treatment arranged by the solicitor rather than GP, flag for independence
- **Conditional fee arrangement treatment**: Treatment funded on a no-win-no-fee basis with deferred billing
- **Private treatment when NHS treatment available**: Whether private treatment was reasonably necessary
- **Discharge against medical advice**: May affect causation chain
- **Gap between NHS discharge and private treatment**: May break causation

Each row in Section 11 of the output: ID | Name | Detail | Source | Suggested Counsel Action | Severity (H/M/L). Sort H → M → L. If a finding doesn't match any ID, mark it `[NEW PATTERN, review needed]` rather than inventing a permanent ID.

### Step 7 - Identify CRU / SOC Recovery Interfaces

Identify whether the claimant received any of the following recoverable benefits under the Social Security (Recovery of Benefits) Act 1997:
- Compensation for loss of earnings (including statutory sick pay)
- Disability benefit (PIP / DLA)
- Incapacity benefit / Employment and Support Allowance, Carer's allowance, etc.

Record the CRU certificate amount and recoverable period. **Hand off** to `lien-resolution-summary` for detailed analysis. The compensator must pay the SOC amount to DWP and deduct from the claimant's damages.

[SCOTS: Note] Key differences from US collateral source:
- **SS(RB)A 1997** applies UK-wide including Scotland, The compensator must apply for a CRU certificate before settlement, The CRU certificate shows the recoverable benefit amount for the relevant period, The compensator pays this amount to DWP and deducts it from the damages, No equivalent of Medicare Secondary Payer or ERISA plan reimbursement, In Scotland, the Damages (Scotland) Act 2011 governs damages for personal injury, Private medical insurance recoveries are handled separately (not via CRU)
- There is no US-style "collateral source rule" - the UK approach is statutory deduction

**Do not negotiate, reduce, or resolve the CRU certificate.** Surface the recoverable benefit amount and the applicable deduction rules for counsel.

### Step 8 - Produce Final Report

Follow [references/OUTPUT-TEMPLATE.md](references/OUTPUT-TEMPLATE.md) section by section, adapted for UK/Scottish conventions. Run the Pre-Delivery Checks below before declaring the draft complete. The privilege header, citation format (`[doc-label, p. N, Bates XXXXXX]`), and the `[F]`/`[A]`/`[O]` tagging convention are non-negotiable.

---

## Checkpoint B: Post-Draft Alignment (Mandatory)

After delivering the draft, ask:

1. Additional providers or itemised bills still outstanding?
2. Client explanation for any treatment gap > 30 days, or for pre-existing same-body-part care?
3. Was any treatment NHS or private? - primary benchmark to apply
4. Specific causation disputes (defence IME opinions) requiring deeper analysis?

If no response: recommend obtaining the missing provider's itemised bills (highest-value gap) and flag the NHS vs. private benchmark question as the next decision. Proceed with the draft as authorised.

---

## Quality Audit

- [ ] Every finding cites document, page, and Bates (or is explicitly labelled unbated and listed in Open Items)
- [ ] Per-provider billing arithmetic reconciled in Section 7; deltas shown, not hidden
- [ ] OPCS-4/ICD-10 codes validated against medical records; check for edition year
- [ ] Causation screen applied to every charge; failures flagged with the appropriate RF-23 to RF-28 ID
- [ ] Reasonableness benchmark source named (NHS National Tariff, HRG4+, PMI schedule, MRO fee scale) and tagged `[VERIFY]`
- [ ] Billed and paid carried as separate columns until counsel selects the primary measure
- [ ] MRO-billed treatment flagged; independence questioned if solicitor-recommended
- [ ] Red flags use stable IDs from [references/RED-FLAGS-CATALOG.md](references/RED-FLAGS-CATALOG.md), sorted H → M → L
- [ ] Pre-existing same-body-part treatment distinguished from incident-related; RF-26 surfaced if not addressed
- [ ] IME / independent medical reports catalogued separately from treating clinician findings
- [ ] CRU certificate amount and recoverable period recorded in Section 12 only; not resolved (handed to `lien-resolution-summary`)
- [ ] Jurisdictional rules flagged `[VERIFY]` (SS(RB)A 1997, CRU process, Damages (Scotland) Act 2011)
- [ ] Missing records listed in Section 4 (Open Items); no findings made on absent records
- [ ] No invented OPCS-4 codes, HRG groupers, PMI schedule rates, or NHS tariff figures
- [ ] `[SCOTS: Note]` boxes retained throughout where US/UK divergence exists but analysis framework is preserved
- [ ] Privilege header present; Section 15 counsel-review boilerplate present verbatim

---

## Jurisdictional Flags

A short reference for the agent or paralegal to surface in Section 14. Not a substitute for counsel research. Every entry tagged `[VERIFY]`.

- **Scotland (personal injury)** - Prescription and Limitation (Scotland) Act 1973: 3-year limitation (date of injury / date of knowledge), 20-year long-stop; Damages (Scotland) Act 2011 for solatium and loss of society awards; Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 for expenses rules
- **Social Security (Recovery of Benefits) Act 1997** - CRU certificate required before settlement; compensator pays DWP and deducts from damages `[VERIFY current CRU form and process]`
- **NHS National Tariff** - NHS Payment Scheme (updated annually); HRG4+ grouper for inpatient procedures; outpatient tariff for follow-up `[VERIFY current tariff year]`
- **Private Medical Insurance (PMI)** - FCA-regulated; insurer-specific schedules; no standardised fee schedule `[VERIFY insurer policy]`
- **NHS Right to Choose** - Patients can choose a private/NHS provider under GMS contract; private provider paid at NHS tariff `[VERIFY current pathway]`
- **Clinical coding** - OPCS-4 (procedures) and ICD-10 (diagnoses) are NHS mandatory standards; HRG assignment uses these codes `[VERIFY coding guidance]`
- **Legal expenses in Scotland** - "Loser pays" rule (judicial expenses follow success); certified by Auditor of Court; Legal Aid (Scotland) for qualifying claims; no US-style contingency fees; damages-based agreements available (limited)
- **Group proceedings (Scotland)** - Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 - opt-in, limited scope `[VERIFY current rules]`
- **Jury trials in Scotland** - Available in Court of Session for personal injury if both parties consent or the action is for defamation; otherwise proof alone `[VERIFY current practice]`

---

## Anti-Hallucination Rules

- Never invent OPCS-4/ICD-10 codes, HRG grouper codes, or NHS National Tariff rates, Never quote an NHS tariff rate, HRG4+ grouper, or PMI schedule rate not actually retrieved (cite source file/URL/date or label "benchmark not obtained")
- Never quote a causation statement that is not in the cited record, Tag every legal citation `[VERIFY]` unless it appears verbatim in a sibling skill in this repo, Distinguish fact (`[F]`), assumption (`[A]`), and opinion (`[O]`) in Sections 9 to 11 of the output

---

## What This Skill Does NOT Do

- Does not value the case (use `damages-calculator`)
- Does not resolve, negotiate, or handle CRU/SOC recovery (use `lien-resolution-summary`)
- Does not produce expert testimony, clinical coders (ACC/CCKS), clinical costing specialists, and medical experts are required for admissibility on contested issues, Does not opine on ultimate legal conclusions (liability, damages amount, causation in law)
- Does not draft the demand letter, schedule of damages, or proof exhibit list (use the named sibling skills)
- Does not replace counsel review of the final memo

---

## Scotland/UK Adaptation Summary

This skill adapts the US-originated medical billing analysis methodology to the UK/Scottish legal context. The core analytical framework (catalogue, validate, reconcile, causation-screen, reasonableness-review, flag) is preserved. The key adaptations are:

| US Concept | UK/Scottish Equivalent |
|---|---|
| CPT/HCPCS codes | OPCS-4 (procedures) / ICD-10 (diagnoses) |
| FAIR Health / MPFS | NHS National Tariff / HRG4+ / PMI schedules |
| UB-04 / CMS-1500 | NHS e-claims / private patient invoices / consultant fee notes |
| Medicare / Medicaid | NHS (state-funded healthcare) |
| Medicare Secondary Payer | No direct equivalent; SS(RB)A 1997 covers benefit recovery |
| ERISA plan | No direct equivalent; PMI (FCA-regulated) |
| No Surprises Act | No UK equivalent |
| Letters of protection | No standard UK equivalent; MRO deferred billing arrangements |
| Workers' comp | UK industrial injuries scheme, different system entirely |
| Collateral source rule | SS(RB)A 1997 statutory deduction system |
| NCCI edits (unbundling) | NHS coding standards and audit; different unbundling rules |
| DRG | HRG4+ (Healthcare Resource Groups) |
| Chargemaster | No equivalent; NHS pricing is tariff-based |

**Amounts**: All figures in GBP (£).

---

## Counsel Review Required

This skill produces counsel work product. The memo derives entirely from documentation listed in its Section 2 and assumptions stated in its Section 3. Jurisdictional rules flagged `[VERIFY]` must be confirmed by counsel before reliance. No output of this skill may be sent outside the legal team without counsel review and approval.

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
