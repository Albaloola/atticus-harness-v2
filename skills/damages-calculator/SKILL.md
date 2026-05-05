---
name: damages-calculator
language: en
description: Builds auditable personal injury damages calculations separating special damages (medical, wage loss, out-of-pocket) from general damages (pain and suffering) using multiplier and per diem methods. Trigger when the user mentions PI damages calculation, personal injury valuation, demand package damages, special damages compilation, general damages multiplier, per diem pain and suffering, collateral source analysis, comparative fault adjustment, lien accounting, net-to-client modeling, billed vs. paid medical expenses, future care present value, or building a damages section for a demand letter or mediation statement. [Atticus UK/Scots refined]
tags:
- analysis, drafting, letter, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Personal Injury Damages Calculator

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

Produces a defensible, auditable PI damages model: every figure traced to a source document, billed and paid columns carried, general damages justified by methodology, and adjustments (comparative fault, liens, caps) applied transparently.

## Quick Start

1. Gather incident, billing, medical, wage, and future care documents (Intake below)
2. Structure the model with special damages, general damages, and adjustments sections
3. Calculate each category with source-traced line items
4. Apply jurisdictional adjustments and produce final demand summary
5. Verify with Quality Audit checklist before delivery

## Intake (Mandatory)

Ask every time unless user says "use defaults" or "just draft":

1. **Incident & liability** - date, mechanism, parties, comparative fault, prior injuries, jurisdiction
2. **Insurance** - BI limits, med-pay/PIP, UM/UIM, coverage disputes
3. **Medical billing** - itemized bills, EOBs (billed/paid/adjusted), lien statements (Medicare, Medicaid, ERISA), pharmacy, DME
4. **Medical records** - EMS, ER, imaging, operative reports, PT, pain management, discharge summaries
5. **Wage/employment** - employer verification, 13+ weeks pay stubs, W-2s/1099s (3 years), disability notes, FMLA/STD, used PTO/sick time
6. **Replacement services** - home care, childcare, cleaning, transport invoices
7. **General damages support** - pain journal, witness statements, injury photos, mental health records, functional limitations
8. **Future care** - life care plan, surgeon recommendations, PT plan, vocational evidence

**Defaults if user doesn't respond:** carry both billed and paid columns; present multiplier and per diem for general damages; flag comparative fault and liens for attorney resolution; flag jurisdictional rules `[VERIFY]`.

Pause for missing categories before finalizing numbers.

## Step 1: Model Structure

Line-item table format: date, provider/source, amount billed, amount paid, causation notes.

**Medical expense measure, critical decision:**

| Measure | When |
|---|---|
| Billed charges | Collateral source rule jurisdictions (e.g., NY) |
| Paid/incurred | *Howell v. Hamilton Meats*, 52 Cal. 4th 541 (2011) jurisdictions |
| Reasonable value | Reasonable value standard jurisdictions |

If counsel cannot specify, carry both columns and flag for attorney determination.

**Sections:** A. Special damages (past/future medical, past/future wages, out-of-pocket, replacement services) · B. General damages (pain/suffering, emotional distress, loss of enjoyment, disfigurement, consortium) · C. Adjustments (comparative fault, offsets, policy limits, liens, statutory caps)

## Step 2: Past Medical Specials

Extract per line item: service date, provider, CPT/DRG code, amount billed, amount paid/adjusted.

**Causation screen (all three required):**
- **Temporality** - treatment began promptly for complained-of body parts
- **Consistency** - records document injury complaints throughout
- **Medical necessity** - care related to diagnosis and mechanism

Flag items failing any criterion as "potentially contested."

**Columns:** gross billed → contractual adjustments → insurer payments → patient responsibility → outstanding balances/liens.

**Ancillary:** co-pays, Rx, OTC (if documented), DME, mileage, parking, childcare for visits.

## Step 3: Wage Loss Specials

1. Establish disability period from work notes/restrictions, flag gaps between incident and first visit
2. Calculate wage base:

| Type | Method |
|---|---|
| Hourly | Avg weekly hours × rate from pay stubs |
| Salaried | Annual ÷ 52 |
| Tipped/commission | Historical earnings documentation |
| Self-employed | Tax returns + P&L (gross ≠ earnings); flag for expert if large |

3. Add lost overtime, bonuses, used PTO/sick, lost employer benefits (retirement match, health premiums)
4. State gross vs. net methodology explicitly; flag tax treatment for jurisdictional review

## Step 4: Future Economic Damages

Only calculate with evidentiary foundation. Typically requires expert testimony for admissibility.

| Source | Approach |
|---|---|
| Life care plan | Use plan categories and totals directly |
| Specific recommendation | Unit cost × quantity; label assumption-based |
| Vague reference ("may need surgery") | Do NOT assign dollar figure; flag for medical opinion |

**Present value:** Discount projected costs at appropriate rate; account for medical inflation. Flag methodology for jurisdictional verification.

**Future earning capacity:** BLS work-life expectancy tables. Without expert input, produce labeled "scenario analysis" (conservative/aggressive) with all assumptions marked.

## Step 5: General Damages

Build harm narrative from records before calculating: pain duration/intensity, objective findings, treatment invasiveness, daily life disruption, permanency/scarring.

### Multiplier Method

Total economic damages × severity factor:

| Severity | Range | Indicators |
|---|---|---|
| Mild/full recovery | 1.5 to 2× | Soft tissue, short treatment, full resolution |
| Moderate | 2 to 3× | Extended treatment, residual symptoms, functional limits |
| Severe | 3 to 5× | Surgery, permanent impairment, disfigurement, prolonged disability |

Never select a multiplier without articulating severity justification.

### Per Diem Method

Daily rate by recovery phase:

| Phase | Rate | Example |
|---|---|---|
| Acute | Higher | $200 to 400/day |
| Subacute | Moderate | $100 to 200/day |
| Residual/chronic | Lower | $50 to 100/day |

Benchmark: plaintiff's daily earnings (a day of pain ≥ a day of work).

**Present both methods.** Convergence strengthens demand; divergence requires reassessment. Flag per diem trial permissibility, some courts prohibit per diem arguments `[VERIFY]`.

## Step 6: Adjustments and Final Summary

**Double-counting check:**
- Wage loss not also counted as diminished earning capacity, No overlapping facility/global charges, Non-economic subcategories as single total with narrative components, not additive line items (unless jurisdiction requires)

**Comparative fault:**

| Regime | Rule |
|---|---|
| Pure comparative | Recovery reduced by plaintiff's % fault |
| 50%-bar modified | No recovery if plaintiff ≥ 50% at fault |
| 51%-bar modified | No recovery if plaintiff ≥ 51% at fault |

Present gross damages, then risk-adjusted range if fault disputed.

**Collateral source:** Show both billed and paid; flag recoverable measure for attorney.

**Liens:** Net-to-client sensitivity analysis when data available. Flag resolution steps (Medicare conditional payments, ERISA reimbursement).

**Statutory caps:** Uncapped value + capped maximum as separate lines. Flag med-mal caps, government entity limits `[VERIFY]`.

**Policy limits:** Present full case value separately; note how limits affect demand posture.

### Output Structure

1. Past medical (billed/paid)
2. Future medical (if supported)
3. Past wage loss
4. Future wages / diminished earning capacity (if supported)
5. Other out-of-pocket
6. Non-economic damages (method justified)
7. **Total demand**
8. Notes: liens, caps, jurisdictional issues

Every figure must trace to a document. Missing documents → label as estimate.

## Post-Draft Alignment (Mandatory)

Ask after delivering initial calculation:

1. Billed or paid as primary medical expense measure?
2. Is comparative fault estimate accurate?
3. Additional lien holders unaccounted for?
4. Does general damages result align with counsel's valuation?

If no response, recommend resolving billed-vs-paid (highest-impact variable) and proceed if authorized.

## Quality Audit

- [ ] Every dollar traces to source document (or labeled estimate)
- [ ] Both billed and paid columns carried until counsel selects
- [ ] Causation screen applied to each medical charge
- [ ] Wage loss methodology correct for employment type
- [ ] Future damages supported by evidence, not speculation
- [ ] General damages justified by both multiplier and per diem
- [ ] No double-counting between categories
- [ ] Comparative fault applied correctly for jurisdiction
- [ ] Lien accounting complete with net-to-client analysis
- [ ] Statutory caps identified and applied
- [ ] All legal rules verified or flagged `[VERIFY]`
- [ ] Assumptions documented prominently

## Jurisdiction Checklist

Flag and resolve before finalizing:

- [ ] Collateral source / billed vs. paid rule
- [ ] Comparative negligence regime and threshold
- [ ] Non-economic damages caps (by case type)
- [ ] No-fault/PIP serious injury threshold
- [ ] Per diem argument permissibility
- [ ] Present value discount requirements
- [ ] Joint and several liability rules
- [ ] Wrongful death framework (if applicable)
- [ ] Loss of consortium availability

## Pitfalls

- **No invented data.** Never fabricate citations, verdict data, or "average settlement values." Use `[VERIFY]` for any unconfirmed citation.
- **No speculative futures.** Do not assign future damages figures without medical support.
- **All legal rules verified or flagged.** Caps, collateral source, comparative negligence, verify or mark `[VERIFY]`.
- **Ethics:** ABA Model Rules 1.1, 3.1, 4.1, 3.3.
- **Scope notice:** "Attorney work product draft requiring review. Jurisdictional rules must be verified. Figures based on provided documentation and stated assumptions."

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
