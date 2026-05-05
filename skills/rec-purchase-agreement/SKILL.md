---
name: rec-purchase-agreement
language: en
description: Draughts a REGO/ROC Purchase Agreement for the UK and Scottish energy market, covering product specifications, Ofgem's Renewable Energy Guarantees of Origin (REGO) and Renewables Obligation Certificates (ROCs), disclosure requirements, voluntary certification, title transfer, and regulatory change provisions. Use when drafting REGO purchase agreements, environmental attribute contracts, renewable energy certificate transactions, or Renewables Obligation compliance documentation in the UK. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, drafting, regulatory, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# REGO/ROC Purchase Agreement (UK/Scotland Adaptation)

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

Draughts an enforceable Renewable Energy Guarantees of Origin (REGO) or Renewables Obligation Certificate (ROC) purchase agreement for the UK energy market. [SCOTS: Note] UK energy regulation is reserved to Westminster but Scottish generators are major participants in REGO/ROC markets. The key regulatory bodies are Ofgem (UK-wide) and the Scottish Government's Energy and Climate Change Directorate.

## Prerequisites

1. **Transaction type** - Renewables Obligation compliance, REGO-backed green tariff disclosure, corporate RE100/PPA-backed attributes, or speculative resale
2. **Seller position** - facility owner, operator, PPA counterparty, or aggregator/trader
3. **Buyer intended use** - supplier disclosure (REGO-backed tariff), RO compliance (ROC), corporate reporting (RE100, CDP), or resale
4. **Facility details** - technology, location (Scotland/England/Wales), capacity, operational status, Ofgem accreditation reference
5. **Certificate type** - REGO (guarantees of origin under RED II as retained), ROC (Renewables Obligation), or both
6. **Certification/eligibility requirements** - Ofgem accreditation, eligibility for Renewables Obligation (Scotland) Order 2023, RE100 criteria
7. **Commercial terms** - quantity (MWh), price (£/MWh), delivery schedule, term length

## Output Structure

### 1. Preamble & Recitals

Include title + execution date, full party identification (legal name, entity type [Ltd/LLP/plc], registered office, company number), and recitals covering: seller's right to sell REGOs/ROCs from identified facility, facility technology + location (including Scottish-specific grid considerations), REGOs/ROCs as severed environmental attributes, buyer's stated purpose (disclosure/RO compliance/corporate reporting), mutual intent to be bound.

### 2. Product Specifications

| Element | Detail |
|---------|--------|
| Technology/fuel | Solar PV, onshore wind, offshore wind, hydro (run-of-river/reservoir), biomass, energy-from-waste, tidal, etc. |
| Vintage | Calendar year(s); single or multi-vintage; acceptable range |
| Geography | Facility location (Scotland specific, Scottish hydro/wind often command premium); confirm UK-wide eligibility |
| Certification | Ofgem accreditation (REGO scheme, RO scheme); RE100 compliance (if applicable); Fuel Mix Disclosure eligibility |
| Bundled vs. unbundled | State explicitly; all environmental attributes transfer (including embedded benefits if applicable); seller retains no claims post-sale |

### 3. Quantity & Delivery

| Term | Detail |
|------|--------|
| Quantity | Fixed MWh or periodic schedule (monthly/quarterly/annual) |
| Commitment | **Firm** (seller procures replacements if short) or **Output-based** (buyer accepts volume risk) |
| Delivery period | Start date, end date (aligned with RO obligation periods if applicable) |
| Shortfall | Cover damages (market differential), termination threshold, or liquidated damages |
| Excess | Buyer option to purchase; pricing mechanism |
| QA | Spec conformity; advance notice of issues; cure period before remedies |

### 4. Transfer Mechanics

- Registry, Ofgem REGO Register (REGO), Ofgem RO Registry (ROCs via e-Roc system)
- Account IDs for both parties in Ofgem Renewables and CHP Register, Seller initiates transfer within [X] business days after the month of generation, Buyer accepts within [X] business days after initiation, Documentation: Ofgem system-generated transfer confirmations + certificate statements, Fees: each party bears own registry account fees; transfer fees as determined by Ofgem, Failure protocol: notice → cure period → payment suspension → termination if uncured
- [SCOTS: Note] The Ofgem registry system is UK-wide; no separate Scottish registry exists

### 5. Price & Payment

| Element | Detail |
|---------|--------|
| Price | £/MWh, fixed or adjustable (sterling) |
| Payment trigger | Within [X] days of transfer acceptance, or upon invoice with transfer confirmation |
| Method | BACS / CHAPS / wire transfer |
| Disputes | Notice → pay undisputed portion → resolve via dispute mechanism |
| Late payment | Interest at Bank of England base rate + [X]% |
| Adjustments | Periodic review, published REGO/ROC index (e.g., Argus, ICIS), renegotiation triggers for material law changes |
| VAT | State whether VAT applies (supply of REGOs/ROCs may be exempt or standard-rated; confirm with tax adviser) |

### 6. Seller Representations & Warranties

- [ ] Valid existence (Ltd/LLP/plc), good standing, authority; no conflicts
- [ ] Full title to REGOs/ROCs, free of liens, encumbrances, or adverse claims
- [ ] REGOs/ROCs not previously sold, transferred, retired, or declared to another party
- [ ] Facility registered with Ofgem (REGO scheme, RO scheme if applicable), holds all permits and environmental consents
- [ ] Accredited/eligible under specified Ofgem schemes; all certificate information accurate
- [ ] Forward covenant: maintain accreditation and eligibility throughout delivery
- [ ] Prompt notice of events affecting accreditation, registration, or eligibility
- [ ] Compliance with environmental, planning, and health & safety requirements
- [ ] Compliance with relevant Scottish-specific regulations if facility is in Scotland (e.g., SEPA, planning conditions)

### 7. Buyer Representations & Obligations

- [ ] Valid existence, authority, no conflicts; financial capacity
- [ ] Intended use lawful and Ofgem-compliant (disclosure, RO, or corporate reporting)
- [ ] Maintain active Ofgem registry account; accept transfers timely
- [ ] Confidentiality of pricing/commercial terms (carve-out for securities/regulatory or statutory disclosure)

### 8. Title Transfer & Risk

| Event | Rule |
|-------|------|
| Title passes | Upon confirmed transfer in Ofgem registry (REGOs/ROCs in buyer's account) |
| Alternative | Condition on transfer + payment receipt (seller retains security interest until paid) |
| Pre-transfer risk | Seller bears (value loss, eligibility changes, law changes, technical issues) |
| Post-transfer risk | Buyer bears all risk |
| Latent defects | Seller liability survives for title/conformity defects existing at transfer |
| Buyer rights | Exclusive use, retire, declare (Fuel Mix Disclosure), sell; exclusive environmental claims |
| Retirement | Seller provides attestations/docs; schedule allows buyer to retire before RO compliance deadlines (31 August following obligation period) |

### 9. Regulatory & Change of Law

Both parties comply with all applicable UK and devolved Scottish regulations governing REGO/ROC generation, accreditation, sale, transfer, and use.

Change of law provisions:
- Illegality/impracticability → termination right, Material value impact from RO banding changes, RO closure, CfD changes, or tax → price renegotiation, RO eligibility loss (e.g., Renewables Obligation (Scotland) Order amendment) → replacement certificates or price adjustment (firm) OR buyer bears risk (output-based)
- CfD or ROC banding changes impacting wholesale value → price adjustment triggers
- [SCOTS: Note] Scotland operates its own Renewables Obligations (Scotland) Orders (the Order follows the same structure as England & Wales but with separate banding levels). Changes to RO Scotland directly impact Scottish generators.

### 10. Indemnification & Liability

Mutual indemnification for breach of reps/warranties/covenants, negligence, wilful misconduct.

| Party | Specific Indemnities |
|-------|---------------------|
| Seller | Invalid REGOs/ROCs, prior sale/retirement, spec non-conformity, facility operations, loss of accreditation due to seller's fault |
| Buyer | Post-transfer use/retirement claims, false environmental marketing, payment/confidentiality breach |

Procedures: prompt notice → indemnifier assumes defence → no settlement without consent.

Liability:
- Exclude consequential/indirect (except fraud, wilful misconduct, confidentiality breach, death/personal injury)
- Cap at [X] × contract price, excluding indemnification, title warranty, surviving obligations, Insurance: public liability, professional indemnity (where appropriate); specify minimum cover; require certificates
- [SCOTS: Note] No punitive damages available in Scots law, exclude any reference to punitive damages

### 11. Term & Termination

| Provision | Detail |
|-----------|--------|
| Term | Effective date → termination date or completion of obligations |
| Renewal | Auto-renew [X]-year periods unless [X] days' notice |
| Breach | Written notice → [15 to 30] day cure → terminate if uncured |
| Material breach | Delivery/acceptance failure, payment default, fundamental rep breach, material law/regulatory violation |
| Force majeure | Excuses non-performance (not payment); extended FM [90 to 180 days] → either party may terminate |
| Convenience | [X] days' notice; termination fee if applicable |
| Survival | Indemnification, confidentiality, payment for pre-termination deliveries |

### 12. Dispute Resolution

- Tier 1: Senior executive negotiation - 30 days, Tier 2: Arbitration (Scottish Arbitration Centre / LCIA Rules) OR litigation (exclusive jurisdiction in the Scottish courts, Court of Session, Edinburgh)
- Governing law: Scots law, without application of any contrary conflicts-of-law rules
- [SCOTS: Note] The Scottish Arbitration Centre (Edinburgh) provides specialist energy arbitration; LCIA also available, Exclude any US governing law or venue references

### 13. General Provisions & Exhibits

General: merger/integration, written amendments, written waiver (instance-specific), assignment restrictions (consent required; corporate reorganisation exception), notice provisions, severability, counterparts + electronic signature (valid under Scots law, Electronic Communications Act 2000), no partnership/agency disclaimer.

Exhibits:
- **A:** Facility description (technology, location [including Scottish local authority area], capacity, commissioning date, Ofgem accreditation ref.)
- **B:** Delivery schedule (period, quantity, cumulative)
- **C:** Bank transfer instructions
- **D:** Form of delivery certificate / transfer confirmation

## Guidelines

- Confirm seller's value-chain position before drafting title warranties, aggregators cannot warrant same scope as facility owners, Verify Ofgem accreditation for both REGO and RO schemes each has distinct registration and transfer protocols, For RO compliance, confirm that ROCs match the correct Obligation Period and banding level, Scotland has separate Orders from England & Wales, For corporate RE100 transactions, ensure REGOs meet the RE100 technical criteria (matched to consumption period; purchased within 12 months)
- For Fuel Mix Disclosure, ensure REGOs are transferred before the annual disclosure deadline (typically summer following the calendar year)
- Tax provisions (VAT, corporation tax treatment of REGO sales) require deal-specific analysis, flag for specialist review, Ensure delivery timeline provides buffer for buyer to retire/declare before compliance deadlines, Mark statutory citations or Ofgem scheme details with `[VERIFY]` if current rules cannot be confirmed
- [SCOTS: Note] Scottish renewable energy is significant (over 90% of electricity from renewables in some years). Scottish hydro and wind assets often have different environmental consent conditions, flag for due diligence

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK energy law

**Changes made:**
- Replaced entire US REC system (WREGIS, PJM-GATS, M-RETS, NEPOOL-GIS) with UK REGO and ROC systems (Ofgem)
- Replaced Green-e certification with Ofgem REGO scheme / RE100 criteria, Replaced state RPS programs with Renewables Obligation (UK and Scotland-specific orders)
- Replaced US state law citations with UK statutes (Energy Act, Electricity Act) and Scottish-specific Renewables Obligation (Scotland) Orders, Replaced US $ amounts with £ GBP, Replaced US dispute resolution (AAA Commercial Rules) with Scottish Arbitration Centre / LCIA, Replaced US governing law with Scots law, Replaced SEC, FERC, IRS references with Ofgem, BEIS (now DESNZ), HMRC, Replaced ITC/PTC (US tax credits) with RO banding, CfD (Contracts for Difference) references, Removed US-specific tax equity structures (not applicable in UK)
- Added Scottish-specific provisions (Scottish RO Orders, SEPA, planning consent differences)
- Added VAT treatment note, Removed punitive damages references (not available in Scots law)
- Separated REGO (guarantees of origin) and ROC (compliance certificates) treatment, Replaced US RPS compliance deadlines with RO obligation period deadlines (31 August)

**Key Scottish/UK considerations:**
- UK energy regulation is reserved (Ofgem administered from London/Glasgow) but Scotland operates separate Renewables Obligation Orders, A significant proportion of UK renewable generation capacity is in Scotland, Scottish generators have distinct CfD allocation and connection agreements, SEPA issues environmental consents for Scottish generators (not EA/Natural England)
- Planning permission for Scottish renewables is under the Town and Country Planning (Scotland) Act 1997 and related Acts, REGOs are issued under the Renewable Energy Guarantees of Origin (Scotland) Regulations 2022 (under retained RED II)
- ROCs in Scotland are banded differently from England & Wales (separate RO Orders)
- The RO scheme closed to new capacity in 2017 but existing accredited stations continue receiving ROCs until the end of their allocated period (up to 2037)
- No punitive damages in Scots law, Scottish Arbitration Centre (Edinburgh) is a specialist venue for energy disputes in Scotland

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
