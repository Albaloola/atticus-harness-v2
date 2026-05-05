---
name: labeling-compliance-review [SCOTS]
language: en
description: Conducts UK/GB labeling compliance reviews for medicines, foods, food supplements, and medical devices. Analyzes labels against MHRA regulations, Food Standards Agency requirements, the Human Medicines Regulations 2012, FIC Regulation 1169/2011 (as retained), and associated UK guidance to identify misbranding risks, claims violations, and mandatory disclosure gaps. Use when reviewing product labels, auditing GB compliance, assessing labeling risk, or preparing for MHRA/FSA submissions. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK/GB Labeling Compliance Review [SCOTS]

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

Structured compliance assessment of GB-regulated product labeling. Identifies misbranding risks and regulatory gaps with cited corrective recommendations.

> **Scotland/UK Adaptation:** This skill has been converted from FDA/US law to UK/MHRA/FSA regulatory frameworks. References to FDA, FDCA, 21 CFR, FALCPA, and state-level requirements have been replaced with the Human Medicines Regulations 2012, FIC Regulation (EU) 1169/2011 (as retained in GB law), Food Safety Act 1990, and MHRA/FSA guidance. Scotland-specific enforcement is by Food Standards Scotland (FSS) and Trading Standards Scotland.

## Prerequisites

Gather before starting:

1. **Label files** - images or PDFs of all panels (principal display, information, back/side)
2. **Product classification** - medicine (POM/P/GSL), food, food supplement, medical device, or cosmetic
3. **Intended use statement** - as marketed and as labeled
4. **Claims substantiation** (if applicable) - scientific support for health, nutrient content, or structure/function claims
5. **Prior MHRA correspondence** (if any) - warning letters, PL/PIP authorisations, adverse reaction reports

## Quick Start

1. Classify the product and identify controlling UK/GBlaw
2. Review principal display panel for product name, quantitative ingredients declaration (QUID), and prohibited claims
3. Review information panel against product-specific checklist
4. Evaluate each claim for type, permissibility, and required disclaimers
5. Check mandatory warnings and statements
6. Produce findings table with severity, legal basis, and corrective action

## Core Workflow

### Step 1: Product Identification

| Field | Detail |
|---|---|
| Product name (as labeled) | Include trademarked elements |
| Product classification | Medicine (POM/P/GSL) / Food / Food Supplement / Medical Device / Cosmetic |
| Intended use | Conditions, target population, route/method |
| Applicable framework | Controlling legislation (e.g., FIC Reg 1169/2011 for food, Human Medicines Regulations 2012 for medicines) |

### Step 2: Principal Display Panel (PDP)

Evaluate each element against product-specific requirements:

| Element | Requirement | Citation |
|---|---|---|
| Product name | Legal name, customary name, or descriptive name | FIC Reg 1169/2011 Art 9(1)(a); Human Medicines Regs 2012 Sch 25 |
| Net quantity | On same field of vision; metric units mandatory | FIC Reg 1169/2011 Art 9(1)(e), Art 23 |
| Quantitative Ingredients Declaration (QUID) | % of characteristic ingredient in product name or pictogram | FIC Reg 1169/2011 Art 22 |
| Prohibited terms/imagery | No implied medicinal claims on foods/supplements | Human Medicines Regs 2012 §3(3); Food Safety Act 1990 §15 |
| Name & address of FBO | UK, Channel Islands or Isle of Man address required | FIC Reg 1169/2011 Art 9(1)(h) |

Mark each: Compliant / Non-Compliant / N/A. Add notes for any deficiency.

### Step 3: Information Panel

Apply the checklist matching the product classification:

**Foods, Nutrition Declaration:**
- [ ] Correct format per FIC Reg 1169/2011 Art 30-35
- [ ] Energy (kJ/kcal), fat, saturates, carbohydrate, sugars, protein, salt, mandatory fields
- [ ] Per 100g/ml (mandatory) + per serving (optional)
- [ ] Minimum type size (x-height ≥1.2mm for largest package sizes)
- [ ] Ingredients in descending order of weight (Art 18)
- [ ] Allergen declaration, bold/underline of 14 regulated allergens (Art 9(1)(c), Annex II)
- [ ] Net quantity, durability date ("use by" / "best before"), storage conditions

**Medicines, Product Information:**
- [ ] Labelling per Human Medicines Regulations 2012 Sch 25-27
- [ ] Product name, strength, pharmaceutical form
- [ ] Active ingredient(s) with quantity per dosage unit
- [ ] Excipients (declaration per Sch 25)
- [ ] Marketing Authorisation holder name and address
- [ ] PL number authorisation
- [ ] Product Literature (Patient Information Leaflet) - SmPC cross-reference
- [ ] GSL/ Pharmacy/ POM classification clearly marked
- [ ] Minimum type size - 8 point minimum for PIL; 5.5 point for blister labelling
- [ ] Braille on outer packaging where applicable

**Food Supplements, Supplement Labelling:**
- [ ] Format per Food Supplements (England) Regulations 2003 (and Scottish equivalent)
- [ ] Categories of nutrients with quantitative amounts and NRV/DRV percentages
- [ ] Recommended daily dose and warning not to exceed stated dose
- [ ] Statement: "Food supplements should not be used as a substitute for a varied and balanced diet"
- [ ] Statement: "Keep out of the reach of young children"
- [ ] Notification to FSA/FSS prior to marketing

**Medical Devices (GB):**
- [ ] UKCA/CE marking and UK approved body with NB number
- [ ] Adequate directions for use per Medical Devices Regulations 2002 (SI 2002/618)
- [ ] Intended purpose and indications
- [ ] Contraindications, warnings, precautions
- [ ] UDI compliance per MHRA roadmap
- [ ] Manufacturer name and registered address

### Step 4: Claims Compliance

For each claim on the label:

| Claim Text | Claim Type | Permissible? | Required Disclaimer | Substantiation | Citation |
|---|---|---|---|---|---|
| | Nutrition / Health / Reduction of Disease Risk / Medicinal / Structure-Function | Y/N | Disclaimer text | Adequate / Insufficient / Missing | |

**Key claim rules (UK):**
- **Nutrition claims** - Must meet the GB Nutrition Profiles criteria (retained EU Reg 1924/2006). Permitted claims listed in the GB Nutrition Claims Register
- **Health claims** - Must be authorised under retained EU Reg 1924/2006 and on the GB authorised health claims list; "general, non-specific health claims" must be accompanied by a specific authorised health claim
- **Disease risk reduction claims** - Strictly regulated under UK law; must be authorised
- **Medicinal claims** on food/food supplement → triggers unlicensed medicine classification under Human Medicines Regulations 2012
- **Structure-function claims** (supplements) - Must not imply disease treatment; CAP Code oversight by ASA for advertising

### Step 5: Warnings & Mandatory Statements

| Required Statement | Citation |
|---|---|
| Allergen declaration (14 regulated allergens) | FIC Reg 1169/2011 Annex II |
| Pregnancy/nursing warnings (where applicable) | Human Medicines Regulations 2012 |
| Children's dosing/warning | Product-specific (SmPC/PIL) |
| Tamper-evident packaging (medicines) | Human Medicines Regulations 2012 Sch 25 |
| Storage conditions | FIC Reg 1169/2011 Art 9(1)(g) |
| Manufacturer/FBO name & UK address | Human Medicines Regs Sch 25 / FIC Reg Art 9(1)(h) |
| [SCOTS: No direct equivalent to Prop 65] | No direct UK equivalent; note GB REACH and UK CLP for chemical labelling obligations |

Mark each: Present / Absent, and Correct Format / Deficient.

### Step 6: Compliance Conclusion

**Overall status:** Compliant / Non-Compliant / Conditionally Compliant

**Findings table:**

| # | Finding | Severity | Regulatory Basis | Recommended Correction | Priority |
|---|---|---|---|---|---|
| | | Critical / Major / Minor | Legislation citation | Specific fix | Immediate / 30-day / Next revision |

**Severity levels:**
- **Critical** - product is misbranded/misdescribed; enforcement exposure (MHRA enforcement action, FSA hygiene emergency prohibition, Trading Standards prosecution)
- **Major** - significant gap; likely flagged in MHRA/FSA inspection
- **Minor** - technical deficiency; low enforcement risk

Include: risk assessment (enforcement exposure summary), and reviewer name, date, and label version examined.

## Common Pitfalls

- Always cite specific UK legislation, never use generic "MHRA requires" or "FSA requires" language without section references, Flag ambiguous classification (e.g., food supplement vs. medicine boundary; see the MHRA's "bordering lines" guidance) and note regulatory consequences of each, If product is marketed with medicinal claims but classified as food/supplement, flag unlicensed medicine risk explicitly, Mark unverifiable citations with `[VERIFY]`
- Do not assume UK-wide compliance, Scotland has separate food enforcement (Food Standards Scotland) and separate regulations (e.g., Food Supplements (Scotland) Regulations 2003)
- For medical devices or novel foods, recommend pre-market MHRA consultation, If label was subject to a prior MHRA warning letter, cross-check all cited deficiencies against current label, Note: no direct equivalent to California Prop 65; refer to GB REACH, UK CLP Regulation, and the Control of Substances Hazardous to Health Regulations 2002

---

**Scotland/UK Adaptation notes:**
- FDA → MHRA (medicines/devices primary regulator) / FSA & Food Standards Scotland (food/supplements) / Trading Standards Scotland (enforcement)
- 21 CFR → Human Medicines Regulations 2012 (SI 2012/1916), FIC Reg (EU) 1169/2011 (as retained), Food Safety Act 1990, Food Supplements Regulations 2003/2010 (with Scottish equivalents)
- FDCA §403(a)/§502(a) → Food Safety Act 1990 §15, Human Medicines Regulations §3(3)
- FALCPA → FIC Reg Annex II (14 recognised allergens: cereals containing gluten, crustaceans, eggs, fish, peanuts, soybeans, milk, nuts, celery, mustard, sesame, sulphur dioxide, lupin, molluscs)
- Drug Facts → Patient Information Leaflet / SmPC format, Nutrition Facts → Nutrition Declaration per FIC Reg 1169/2011
- Supplement Facts → Food Supplements Regulations 2003 format, Prop 65 → no direct UK equivalent (see [SCOTS: No direct equivalent] note above)
- $ → £ (GBP)

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
