---
name: collateral-valuation
language: en
description: '[SCOTS] Values collateral and allocates secured vs. unsecured claim portions under Scottish insolvency law (sequestration, winding up, receivership, trust deeds). Uses RICS Red Book valuations for heritable property, CAP/Glass''s Guide for vehicles, and UK market data. Apply when preparing statements of affairs, secured claim calculations, deficiency analyses, or valuation evidence for Sheriff Court or Court of Session. [Atticus UK/Scots refined]'
tags:
- SCOTS, analysis, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Collateral Valuation (Scottish Insolvency)

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

Values collateral and allocates secured vs. unsecured claim amounts under Scots insolvency law, applying relevant valuation standards for sequestration, corporate winding up, and receivership.

## Prerequisites

1. **Collateral inventory** - type, identifiers, condition, location
2. **Debt details** - principal, accrued interest, fees, contract rate, security type (standard security, floating charge, pledge, assignation)
3. **Insolvency context** - sequestration (Bankruptcy (Scotland) Act 2016), winding up (Insolvency Act 1986), receivership, or protected trust deed; date of insolvency event
4. **Evidence sources** - RICS Red Book valuations, CAP/Glass's Guide, auction data, estate agent assessments, photos

If any prerequisite is missing, pause and ask, do not assume or fill gaps.

## Output Structure

### Step 1: Classify Collateral and Select Valuation Sources

Use the first matching category. Sources ranked by reliability (highest first).

**Heritable Property (Land & Buildings)**

| Source | Reliability | Notes |
|---|---|---|
| RICS Red Book valuation | Highest | Mandatory for secured lending valuations; required for Court of Session / Sheriff Court |
| RICS market valuation | Medium-High | Residential, mid-value |
| Council tax band / Dwellings valuation | Low-Medium | Baseline only; not for contested proceedings |
| Online portals (Rightmove/Zoopla) | Low | Preliminary screening; not for court |

Required data: address, Title Sheet / folio number, property type, size, condition, valuation date, local sales data. For contested valuations: RICS-registered surveyor required.

**Motor Vehicles**

| Source | Reliability | Notes |
|---|---|---|
| CAP / Glass's Guide | High | Lender-standard in UK |
| Parkers valuation | Medium-High | Consumer-facing, commonly accepted |
| BCA auction data | High | Wholesale/auction focus |
| Dealer quote | Medium | Must be written |

Required data: registration / VIN, make/model/trim, mileage, condition, options, retail vs. trade basis. No UK equivalent to 910-day cramdown rule.

**Equipment & Machinery**

| Source | Reliability | Notes |
|---|---|---|
| RICS Red Book machinery/equipment valuation | Highest | Specialised or high-value; RICS-registered valuer |
| Industry guides | Medium | Sector-specific (e.g., agricultural machinery guides) |
| Auction comps | Medium | Recent comparable sales (e.g., Euro Auctions, Ritchie Bros) |
| Depreciated book value | Low | Accounting basis, not market |

Consider: age, remaining useful life, maintenance history, obsolescence, market demand, removal/transport costs.

**Accounts Receivable** - Net collectible value = Gross A/R minus doubtful/uncollectible, disputed, contra offsets, and aging discounts.

| Aging Bucket | Typical Collection Rate |
|---|---|
| 0 to 30 days | 95 to 100% |
| 31 to 60 days | 85 to 90% |
| 61 to 90 days | 70 to 80% |
| 91 to 120 days | 40 to 60% |
| 120+ days | 10 to 30% |

Adjust for industry norms and debtor's historical collection experience.

**Inventory**

| Type | Valuation Method |
|---|---|
| Raw materials | Lower of cost or market |
| Work in progress | % completion × expected finished value |
| Finished goods | Net realisable value (price minus costs to sell) |
| Obsolete / slow-moving | Liquidation value |

Consider FIFO/LIFO impact, seasonality, shelf life, and going-concern vs. piecemeal liquidation.

### Step 2: Apply Insolvency-Type Valuation Standard

| Insolvency Type | Standard | Authority | Practical Effect |
|---|---|---|---|
| Sequestration (individual) | Realisable value | Bankruptcy (Scotland) Act 2016 | Trustee realisation; lower value → larger unsecured deficiency |
| Winding up (company) | Break-up / forced sale value | Insolvency Act 1986 | Liquidation by liquidator; similar to forced sale |
| Receivership | Market value (on-going concern if applicable) | Insolvency Act 1986 | Receiver may be able to sell as going concern |
| Protected trust deed | Realisable value | Bankruptcy (Scotland) Act 2016 | Trustee realisation of assets for creditors |
| Debt Arrangement Scheme (DAS) | Ongoing concern | Debt Arrangement and Attachment (Scotland) Act 2002 | DAS is a payment plan; valuation matters for debt quantum more than distribution |

**Note**: The US *Rash* replacement value standard and § 506 bifurcation have no direct equivalent in Scottish insolvency. Security rights in Scotland operate differently: standard securities over heritable property, and floating charges / fixed charges over moveables. There is no cramdown mechanism equivalent to US bankruptcy.

### Step 3: Calculate Secured vs. Unsecured Split (Scottish Insolvency)

In Scottish insolvency, the secured creditor's claim is calculated based on the realised value of the security. The principles differ from US § 506 bifurcation:

- **Standard security** (heritable property): The secured creditor claims the amount due. If the realised value is insufficient, the shortfall ranks as an unsecured claim in the sequestration/winding up (not an automatic bifurcation, depends on trustee/liquidator admitting the shortfall)
- **Floating charge**: The holder has a claim up to the realised value of the charged assets; deficiency ranks as unsecured
- **No statutory valuation formula**: Scottish courts do not apply a uniform valuation standard. The realisable/market value determines what the security covers

```
Total Debt:        £__________
Collateral Value:  £__________

Secured Claim (realised): £__________ (amount recovered from security)
Unsecured Shortfall:      £__________ (debt minus realised value, subject to admission by trustee/liquidator)
```

**Important**: Unlike US § 506(a), there is no statutory formula bifurcation. The security covers the debt up to the value of the collateral, with the balance ranking as an unsecured claim subject to the rules of ranking in the insolvency.

### Step 4: Apply Scottish Insolvency Specific Rules

Check each rule before finalising the split:

| Rule | Effect | Authority |
|---|---|---|
| **Standard security over heritable property** | Secured creditor entitled to interest and expenses from the realised proceeds before distribution | Conveyancing and Feudal Reform (Scotland) Act 1970; Insolvency Act 1986 |
| **Floating charge crystallisation** | Floating charge attaches to assets on winding-up/receivership; assets subject to preferred debts ranking | Insolvency Act 1986, ss. 175, 176A |
| **Prescribed Part (s. 176A)** | A portion of floating charge realisations set aside for unsecured creditors | Insolvency Act 1986, s. 176A |
| **Fixed vs floating charge distinction** | Fixed charge assets are not subject to prescribed part; floating charge assets are | Insolvency Act 1986 |
| **No cramdown** | No equivalent to US Chapter 13 cramdown. Scottish insolvency does not restructure secured debt in the same way | Not applicable |
| **No 910-day rule** | No equivalent to US special vehicle rule | Not applicable |
| **Post-insolvency interest** | Secured creditors may be entitled to post-insolvency interest from security proceeds if sufficient equity | Common law / contractual terms |

### Step 5: Assemble Documentation Package

Every valuation submission for Scottish insolvency proceedings should include:

1. **Source** - preparer identity and qualifications (RICS-registered for property)
2. **Date** - reasonably current relative to the insolvency event date or hearing
3. **Method** - market, cost, or income approach (identify which)
4. **Assumptions** - all material assumptions disclosed
5. **Comparables** - supporting sales, listings, or auction data
6. **Condition** - photos and narrative assessment

### Step 6: Dispute Preparation (If Contested)

1. Obtain or update RICS Red Book valuation (for heritable property)
2. Compile comparable sales and auction evidence from UK sources
3. Photograph collateral; document condition in writing
4. Identify title defects, heritable securities, or other encumbrances affecting value (check Land Register)
5. Analyse opposing party's methodology and identify weaknesses

## Guidelines

- Use realisable / forced-sale value in sequestration and winding up; market value may apply in receivership, No US-style replacement value (*Rash*) or cramdown in Scots law, adjust expectations for UK practitioners, Never rely on automated estimates (Rightmove, Zoopla) for court or trustee submissions, use as preliminary screening only, RICS Red Book valuation is mandatory for heritable property in contested insolvency proceedings, Keep valuation evidence current; stale valuations are vulnerable to challenge, Mark uncertain statutory citations with `[VERIFY]` before filing, Do not fabricate valuation data, comparable sales, or appraisal conclusions, Output is solicitor work product, requires Scottish insolvency practitioner or solicitor review

## References

- Bankruptcy (Scotland) Act 2016
- Insolvency Act 1986 (ss. 175, 176A for prescribed part; winding up provisions)
- Conveyancing and Feudal Reform (Scotland) Act 1970 (standard securities)
- Debt Arrangement and Attachment (Scotland) Act 2002
- Title Conditions (Scotland) Act 2003 (if heritable securities involved)
- RICS Valuation, Global Standards (Red Book) - mandatory for UK secured lending valuations, CAP / Glass's Guide, UK standard motor vehicle valuation guides

---

**Key changes from the original:**

- **Frontmatter**: Added `[SCOTS]` tag, updated description to reflect Scottish insolvency framework. Removed US-specific `metadata` (casemark practice areas not relevant).
- **Structure**: Replaced US bankruptcy chapter-specific steps with Scottish insolvency equivalents.
- **Step 1**: Changed Real Property → Heritable Property with RICS Red Book as highest standard; vehicles → CAP/Glass's Guide/Parkers; removed US-specific NADA/KBB.
- **Step 2**: Replaced Chapter 7/13 standards with sequestration, winding up, receivership, trust deeds, DAS.
- **Step 3**: Replaced § 506 bifurcation formula with Scottish security realisation approach; no statutory bifurcation.
- **Step 4**: Replaced 910-day rule, cramdown, *Timbers of Inwood Forest* with prescribed part, floating/fixed charge rules, and no-cramdown note.
- **Guidelines**: Updated for Scottish insolvency practice; added mandatory RICS Red Book requirement.
- **References**: Replaced all US Bankruptcy Code with Scottish/UK insolvency legislation.

## Scotland/UK Adaptation

### Key Structural Differences

Scottish insolvency law is fundamentally different from US bankruptcy. Key distinctions:

1. **No § 506 bifurcation**: US statutory formula for secured/unsecured split has no equivalent. Security rights in Scotland operate through standard securities (heritable), fixed charges, and floating charges
2. **No cramdown**: US Chapter 13 cramdown doesn't exist. Scottish Debt Arrangement Scheme (DAS) and protected trust deeds are payment arrangements, not debt restructuring of secured claims
3. **No 910-day vehicle rule**: The special US vehicle cramdown exception has no UK equivalent
4. **Different insolvency pathways**: Sequestration (Bankruptcy (Scotland) Act 2016) for individuals; winding up (Insolvency Act 1986) for companies; receivership for secured creditors

### Insolvency Types (Scotland)

| Insolvency Type | Applies To | Statute |
|---|---|---|
| Sequestration | Individuals (equivalent to US Ch. 7) | Bankruptcy (Scotland) Act 2016 |
| Protected Trust Deed | Individuals (voluntary alternative to sequestration) | Bankruptcy (Scotland) Act 2016 |
| Debt Arrangement Scheme (DAS) | Individuals (payment plan) | Debt Arrangement and Attachment (Scotland) Act 2002 |
| Winding up (Liquidation) | Companies | Insolvency Act 1986 |
| Receivership | Companies (secured creditor enforcement) | Insolvency Act 1986 |
| Administration | Companies (rescue purpose) | Insolvency Act 1986 (Schedule B1) |

### Valuation Standards (UK)

- **Heritable property**: RICS Red Book valuation is the recognised standard for secured lending and insolvency proceedings
- **Motor vehicles**: CAP / Glass's Guide / Parkers / BCA auction data are UK market standards
- **Equipment**: RICS machinery valuation / industry-specific guides / UK auction results (Euro Auctions, Ritchie Bros UK, BidSpotter)
- **Inventory**: Net realisable value per UK accounting standards / industry practice
- **Accounts receivable**: UK collection rate norms; no standardised US-style aging table applies

### Court Procedure for Valuation Disputes

- **Sheriff Court**: Summary application or ordinary cause for valuation disputes in sequestration
- **Court of Session**: Outer House for corporate insolvency matters
- **Valuation evidence**: Expert witness evidence under RICS rules; court may appoint a reporter
- **No FRBP 3012 equivalent**: No standardised motion procedure for determining secured status; governed by general civil procedure rules and Insolvency (Scotland) Rules

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
