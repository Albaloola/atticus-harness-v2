---
name: epc-contract
language: en
description: Atticus UK/Scots legal skill for epc-contract. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# EPC Contract

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

[SCOTS] Drafts a turnkey EPC contract establishing rights, obligations, risk allocations, and technical requirements between a project owner and contractor for design, procurement, construction, testing, and commissioning of an industrial facility, adapted for Scottish/UK law.

## Prerequisites

Gather before drafting:

1. **Project description** - facility type, capacity, throughput specs, location
2. **Party details** - legal names, entity types, jurisdictions, addresses, authorised signatories
3. **Governing documents** - RFPs, term sheets, LOIs, precedent agreements
4. **Pricing structure** - lump-sum, GMP, cost-plus, or hybrid
5. **Schedule** - target milestones, NTP conditions, substantial/final completion dates
6. **Performance requirements** - output capacity, efficiency, emissions, availability guarantees
7. **Jurisdiction** - governing law (Scots law unless otherwise agreed), regulatory/permitting regime
8. **Insurance requirements** - owner's minimum coverage expectations
9. **Statutory compliance** - Housing Grants, Construction and Regeneration Act 1996 (payment, adjudication); Construction (Design and Management) Regulations 2015

## Contract Sections

Draft all 14 sections in order.

### 1. Recitals & Parties

- **Owner**: legal name, entity type, jurisdiction, address, tax/company reg. number, authorised rep
- **Contractor**: same; if JV/consortium, lead contractor, liability structure (joint & several or allocated)
- **Recitals**: owner's objectives, contractor qualifications, turnkey intent

### 2. Definitions

Define at minimum:

| Term | Criteria |
|---|---|
| Substantial Completion | Work complete except snagging/punch list; testing passed; performance met; regulatory approvals obtained; O&M docs delivered |
| Final Completion | Snagging list closed; all performance tests passed at guaranteed levels; reliability demonstration done; training complete; final documentation |
| Contract Price | Fixed amount, inclusions, adjustment mechanisms |
| Change Order | Written modification to scope, schedule, or price |
| Force Majeure | Natural disasters, war, epidemics, government action, non-party labour disputes |
| Defect | Non-conformance with specs, drawings, guarantees, or codes |
| Warranty Period | Commencement trigger and duration |

Include project-specific technical terms referencing industry standards (BS EN, ISO, IEC, Eurocodes).

### 3. Scope of Work

**A. Engineering** - All disciplines (civil/structural, mechanical, electrical, I&C, process, environmental, safety); conceptual through detailed. Comply with relevant Eurocodes and British Standards.

**B. Procurement** - Major equipment (turbines, generators, compressors, vessels, heat exchangers), bulk materials, spare parts, special tools. Identify owner-furnished items with interface requirements.

**C. Construction & Installation** - Site prep, civil, foundations, structural, mechanical/piping, electrical/instrumentation, insulation/painting/fireproofing. Reference applicable British Standards and Building Regulations (Scotland).

**D. Testing & Commissioning** - Factory acceptance → pre-commissioning → integrated systems → performance testing → reliability demonstration. Include owner witness rights and acceptance criteria.

**E. Ancillary** - Permitting (allocate owner vs. contractor), training (classroom + hands-on), documentation deliverables (design basis, as-builts, O&M manuals, specify format/schedule).

**F. Exclusions** - Land acquisition, off-site utilities to boundary, owner personnel, financing, owner-controlled insurance, owner permits.

### 4. Commercial Terms

**Contract Price**: Exact amount and currency (GBP unless otherwise agreed). Pricing type (lump-sum/GMP/cost-plus/hybrid). Confirm all E, P, C, testing, commissioning, training, documentation included. Adjustments limited to owner changes, differing site conditions, force majeure, change in law.

**Payment Schedule**:

| Milestone | Typical % | Conditions |
|---|---|---|
| Advance payment | 5 to 10% | Advance payment guarantee required |
| Engineering milestones | Per deliverable | Basic/detailed design completion |
| Equipment delivery | Per item value | Delivery receipts |
| Construction progress | Monthly | Joint measurement/verification |
| Substantial Completion | Major tranche | Less retention |
| Final Completion | Balance + retention | All guarantees satisfied |

- **Retention**: 5 to 10%; partial release at Substantial Completion, balance at Final Completion; contractor may substitute bond/LC
- **Invoicing**: Submit within [X] days; owner review 15 to 30 days; payment within 30 days of approval; interest on late undisputed amounts. **Note**: Housing Grants, Construction and Regeneration Act 1996 implies statutory payment terms and adjudication rights, verify contractual opt-out or compliance.
- **Taxes**: Allocate VAT, customs duties, import taxes
- **CIS (Construction Industry Scheme)**: Contractor to comply with HMRC CIS deductions if applicable

### 5. Schedule

- **Commencement**: NTP conditions precedent (site access, permits, financing)
- **Duration**: Calendar days/months from NTP to Final Completion
- **Key milestones**: Design → PO awards → long-lead delivery → construction start → mechanical completion → commissioning → Substantial Completion → performance testing → Final Completion
- **Certification**: Contractor notice → owner inspection → completion certificate

**Delay Management**:

| Delay Type | Time Extension | Cost Recovery |
|---|---|---|
| Force majeure | Yes | No |
| Change in law | Yes | No |
| Government permit delays | Yes | No |
| Owner-caused delays | Yes | Yes |
| Owner scope changes | Yes | Yes |
| Differing site conditions | Yes | Yes |

- Notice: prompt written notice + cause + critical path impact + time request
- **Delay LDs**: Daily/weekly rate for late Substantial Completion; cap 5 to 15% of contract price. [VERIFY] LDs must be a genuine pre-estimate of loss to be enforceable under Scots law (not punitive).
- **Early completion bonus** (optional): per day/week ahead of schedule

### 6. Performance Guarantees

**Guaranteed Parameters** (select applicable):

| Parameter | Value | Reference Conditions | Test Standard |
|---|---|---|---|
| Output capacity | [kW/units] | ISO or site ambient | BS EN / ASME PTC |
| Efficiency/heat rate | [%/BTU/kWh] | Fuel spec, ambient | BS EN / ASME PTC |
| Emissions | [g/unit] per pollutant | Operating conditions | SEPA/EA regulatory limits |
| Availability | [%] | Defined period | Contract formula |

- Include correction curves for reference conditions, Test protocol: timing, duration, valid runs, stability criteria, instrumentation, data recording, Retest rights: optimisation period; max retests specified

**Performance LDs**:

| Shortfall | LD Formula | Cap |
|---|---|---|
| Capacity | £/unit below guarantee | [X]% of contract price |
| Efficiency | PV of increased operating costs | [X]% of contract price |
| Emissions | Cost of additional controls | [X]% of contract price |

- Rejection threshold: shortfall exceeding [X]% → owner may reject facility

### 7. Change Management

- Formal written change order required before work begins (emergency exception with retroactive approval)
- Contractor proposal within 10 to 20 business days: scope, cost breakdown, markup (10 to 20% OH&P), schedule/CPM impact, effect on guarantees, Pricing: lump-sum, unit price, T&M, or cost-plus, Owner review: 15 to 30 days, Disputed changes: contractor proceeds under directed change order; pricing resolved via dispute resolution. **Adjudication under the Housing Grants, Construction and Regeneration Act 1996 applies to any valuation dispute during the works.**
- Cumulative changes exceeding [X]% trigger renegotiation or termination-for-convenience rights

### 8. Indemnification & Liability

**Contractor indemnifies Owner** for: bodily injury/death, property damage, regulatory violations, IP infringement, environmental contamination, breach.

**Owner indemnifies Contractor** for: owner negligence/wilful misconduct/breach; defects in owner-furnished items.

**Exceptions**: Claims from sole negligence of indemnified party. Joint negligence: comparative fault.

**Procedure**: Prompt notice → indemnifying party controls defence → cooperation → settlement limits.

**Liability caps**:
- Consequential damages mutually excluded (exceptions: gross negligence, wilful misconduct, confidentiality, IP, environmental)
- Aggregate cap: contract price (or [X]x); uncapped: indemnity, IP, wilful misconduct, fraud

### 9. Insurance

| Coverage | Minimum Limit | Requirements |
|---|---|---|
| Employers' Liability (Compulsory) | £5M (statutory minimum) | Per UK law; employer's liability certificate displayed |
| Public/Products Liability | £10 to 50M per occurrence/aggregate | Additional insured; primary & non-contributory |
| Motor/Auto Liability | £1M CSL | All owned/hired/non-owned |
| Professional Indemnity (E&O) | £5 to 25M per claim/aggregate | Claims-made with 3 to 5 year run-off cover |
| Contractor's All Risk / CAR | Full replacement value | Specify owner vs. contractor placement; equivalent to Builder's Risk |
| Marine Cargo | Full shipment value | If international; origin to site |
| Environmental/Pollution Liability | Project-appropriate | If environmental risk |
| Umbrella/Excess | Project-appropriate | Above primary policies |

All policies: owner as additional insured, waiver of subrogation, 30-day cancellation notice, certificates before work starts. Policies must be placed with A-rated or Lloyd's underwriters.

### 10. Warranties

- **Scope**: All work free from defects in materials, workmanship, and design
- **Period**: 12 to 24 months from Substantial Completion; restarts for repaired/replaced items
- **Materials**: New unless specified; suitable for intended purpose
- **Pass-through**: Assign all manufacturer/supplier warranties to owner
- **Defect correction**: Written notice → repair within 24 hours (urgent) to 10 business days (non-urgent) → costs on contractor
- **Self-help**: If contractor fails to correct, owner may correct and charge contractor
- **Security**: Bond or LC, 5 to 10% of contract price; released on warranty expiration

### 11. Termination

| Trigger | By | Notice/Cure | Contractor Gets |
|---|---|---|---|
| Cause (abandonment, schedule failure, insolvency) | Owner | Written + 10 to 30 day cure | Work performed only; liable for excess costs |
| Convenience | Owner | Written notice | Work + materials + demobilisation + OH (no profit on unperformed) |
| Owner default (non-payment, suspension, breach) | Contractor | Written + cure period | Work + costs + anticipated profit on full contract |
| Extended force majeure (>6 months) | Either | Written notice | Work + costs (no anticipated profit) |

### 12. Dispute Resolution

Tiered process:
1. **Negotiation** - Senior executives, 30 days
2. **Adjudication** - Statutory right under Housing Grants, Construction and Regeneration Act 1996; 28-day process; binding until final determination
3. **Mediation** - Mutually acceptable mediator, 60 days
4. **Binding** - Arbitration (Arbitration (Scotland) Act 2010; 1 or 3 arbitrators; specify seat Edinburgh/Glasgow, language) OR litigation (Court of Session or Sheriff Court, Scotland)

- **Governing law**: Scots law, excluding conflicts-of-law rules. Exclude CISG if international.
- **Fees**: Each party bears own OR prevailing party recovers
- **Adjudication**: Must comply with Scheme for Construction Contracts (Scotland) Regulations 1998 (or contractual adjudication rules)

### 13. Administrative Provisions

- **Notices**: Written; delivery/courier/recorded delivery/email; effective on receipt
- **Assignment**: Contractor needs owner consent; owner assigns freely to affiliates/lenders
- **Boilerplate**: Entire agreement, amendments in writing, severability, non-waiver, mutual confidentiality, force majeure (notice + mitigation)

### 14. Execution

Signature blocks: entity name, signature, printed name, title, date. Execution in counterparts permitted. For Scottish heritable property interests, execution must comply with Requirements of Writing (Scotland) Act 1995 (witnessed signature, or electronic signature meeting e-IDAS/Scottish requirements).

## Pitfalls

- Confirm pricing structure before drafting commercial terms, Mark uncertain statutory/regulatory citations with [VERIFY] for the specific jurisdiction, Scale insurance minimums to project size and risk profile, LD rates must reflect reasonable pre-estimates of actual damages to be enforceable under Scots law, penalties clauses are unenforceable, The Housing Grants, Construction and Regeneration Act 1996 implies adjudication rights for any construction contract, ensure drafting does not inadvertently exclude or conflict, Performance guarantees and test protocols are project-specific, confirm with user before finalising, For JV/consortium contractors, explicitly address lead designation and liability allocation, Flag gaps in provided information, never assume critical business terms, Verify internal consistency of cross-references, defined terms, and exhibit/schedule references, For international projects: address currency, CISG exclusion, arbitration seat, language, import/export compliance
- [VERIFY] CDM 2015 regulations applicability, dutyholders and health & safety file requirements, Consider NEC4 or FIDIC forms as alternatives; this skill drafts from scratch, compare against standard forms for deviations

## Scotland/UK Adaptation

### Key Differences from US Practice

1. **Standard Forms**: NEC4 (New Engineering Contract) and FIDIC are the dominant standard forms in UK/Scotland, unlike the bespoke US EPC model. This skill drafts from scratch, consider whether NEC4 Option A (lump-sum) or FIDIC Silver Book (turnkey) would be more appropriate and cost-effective.

2. **Statutory Adjudication**: The Housing Grants, Construction and Regeneration Act 1996 gives any party to a construction contract the right to refer disputes to adjudication at any time. This is a statutory right that cannot be contracted out. The adjudicator's decision is binding until final determination by court or arbitration. All construction contracts must also comply with the payment provisions (instalments, final account, notice of intention to withhold payment).

3. **CDM Regulations 2015**: The Construction (Design and Management) Regulations impose statutory duties on clients, designers, and contractors regarding health and safety. The client (owner) retains statutory duties that cannot be delegated entirely to the principal contractor.

4. **Insolvency**: UK/Scottish insolvency procedures (administration, liquidation, administrative receivership) differ from US Chapter 11. Cross-border insolvency governed by the Insolvency Act 1986 and EU (retained) regulations.

5. **Insurance Market**: UK construction insurance is typically placed through Lloyd's or A-rated London market insurers. Employer's Liability (Compulsory) Insurance is a statutory requirement.

6. **Standards**: British Standards (BS), European Standards (BS EN), Eurocodes, and ISO standards replace ASTM/ASME/IEEE as default references, though international projects may specify US standards by agreement.

7. **Legal System**: Cases heard in the Outer House of the Court of Session (high-value), Sheriff Court (lower-value), or via arbitration under the Arbitration (Scotland) Act 2010. The UK Supreme Court is the final appeal court for civil matters.

8. **Language**: Drafting conventions align with UK legal English. Consider using "snagging list" instead of "punch list", and "employer" instead of "owner" in NEC/FIDIC contexts.

### Flagged Concepts with No Direct Scottish Equivalent

- **US-style GMP (Guaranteed Maximum Price)**: Less common in UK/Scottish construction; target-cost contracts (NEC4 Option C/D) are more typical for cost-control
- **AAA (American Arbitration Association) construction rules**: Replaced by CIArb (Chartered Institute of Arbitrators) or Scottish Arbitration Centre rules
- **US state-level contractor licensing boards**: No equivalent in Scotland, building standards are regulated through local authority Building Warrants and NHBC/Warranty providers
- **US Davis-Bacon prevailing wage requirements**: No equivalent in Scotland, pay governed by National Minimum Wage Act 1998 and industry-level bargaining (CSCS/JIB)

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
