---
name: bill-of-sale-personal-property
language: en
description: Drafts a commercial real estate personal property Bill of Sale transferring equipment, fixtures, FF&E, inventory, and other tangible assets. Handles inclusion/exclusion schedules, price allocation, tax responsibility, and risk of loss. Trigger when the user needs a bill of sale, asset schedule, equipment transfer document, or personal property conveyance tied to a property closing. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, drafting, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Personal Property Bill of Sale (CRE)

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

Transfers tangible personal property in a CRE transaction with price allocation, risk allocation, and closing mechanics aligned to the purchase agreement.

## Quick Start

Gather before drafting:

| Input | Detail |
|---|---|
| Parties | Legal names, entity type, formation state, addresses, signatory title |
| Asset schedule | Included items with identifiers (serial/VIN/model); excluded items list |
| Price | Total consideration, allocated personal property amount, payment method/timing |
| Taxes | Sales/use tax allocation and reporting responsibility |
| Risk & delivery | Risk-of-loss transfer point, removal location/deadline, transport costs |
| Reps/warranties | Title, authority, liens, condition model (AS IS or limited warranty) |
| PSA alignment | Defined terms, closing conditions, survival, remedies from purchase agreement |
| Jurisdiction | Governing law, notarization requirement |

## Drafting Workflow

1. **Mirror PSA terms.** Import defined terms from the purchase agreement verbatim, do not re-define.
2. **Insert parties.** Full legal names, entity types, formation states, authority language.
3. **Set effective date.** Align transfer trigger to closing date/time in PSA.
4. **Attach asset schedule (Exhibit A).** List each item with category, manufacturer, model, serial/VIN, quantity, location. Add explicit exclusions in Exhibit B.
5. **State consideration & allocation.** Purchase price, payment method, credits/deposits. Note tax filing obligations.
6. **Assign tax responsibility.** Specify which party handles sales/use/transfer taxes and filings.
7. **Choose condition model.** Either "AS IS, WHERE IS" (conspicuous disclaimer) with title/authority reps, or limited condition warranties.
8. **Allocate risk of loss & delivery.** Transfer point, removal deadline, transport costs on Buyer.
9. **Add conditions precedent.** Tie effectiveness to real property closing if applicable.
10. **Add indemnity/survival only if negotiated in PSA.** Otherwise omit for clean close.
11. **Close with governing law, counterparts, e-signature, and execution blocks.**

## Template

Adapt for jurisdiction and deal terms:

```text
BILL OF SALE (PERSONAL PROPERTY)

This Bill of Sale is made as of [DATE] by and between:
Seller: [LEGAL NAME], a [ENTITY TYPE] organized under [STATE/COUNTRY], at [ADDRESS] ("Seller").
Buyer: [LEGAL NAME], a [ENTITY TYPE] organized under [STATE/COUNTRY], at [ADDRESS] ("Buyer").

1. Transfer. Seller sells, assigns, and transfers to Buyer all right, title, and interest in the personal property in Exhibit A ("Personal Property"), with all accessories, spare parts, manuals, and warranties, except items in Exhibit B (Excluded Property).

2. Consideration. £[AMOUNT] ([WORDS]), payable by [METHOD] at [TIME]. Deposit/credit of £[AMOUNT] applied to purchase price.

3. Allocation. £[AMOUNT] allocated to Personal Property.

4. Taxes. [Seller/Buyer] responsible for VAT/sales/transfer taxes and required filings.

5. Title; Authority. Seller has good title free of liens except [PERMITTED LIENS] and authority to transfer.

6. Condition. [AS IS, WHERE IS, conspicuous format / OR limited condition warranties].

7. Risk of Loss; Delivery. Risk passes to Buyer [AT CLOSING/UPON PAYMENT]. Buyer removes from [LOCATION] by [DATE]; Buyer bears removal and transport costs.

8. Conditions Precedent. Effective only upon closing under [PSA NAME/DATE].

9. Governing Law. Governed by [Scots/English] law.

10. Counterparts; E-Signatures. May be executed in counterparts and by electronic signature.

SELLER: [ENTITY NAME]
By: __________________________ Name: [PRINT] Title: [TITLE]

BUYER: [ENTITY NAME]
By: __________________________ Name: [PRINT] Title: [TITLE]
```

**Exhibit A, Included Personal Property**

| Category | Manufacturer | Model | Serial/VIN | Qty | Location | Notes |
|---|---|---|---|---|---|---|

**Exhibit B, Excluded Property**

| Item | Reason | Owner/Disposition |
|---|---|---|

## Pitfalls & Checks

- **Exclusions required.** Every on-site item that does not convey must appear in Exhibit B.
- **AS IS conspicuousness.** If disclaiming condition, format the clause in bold/caps per UCTA 1977 guidance.
- **Titled property.** Vehicles, vessels, or aircraft need separate title-transfer mechanics and may require DVLA / registration agency filings.
- **PSA alignment.** Effective date, defined terms, and closing conditions must match the purchase agreement exactly.
- **Deferred payment.** If Seller retains a security interest, Register a standard security (heritable) or floating charge (moveable) at Companies House / Register of Inhibitions.
- **Tax compliance.** Confirm VAT responsibility and reporting for the governing UK jurisdiction.
- **No extras.** Do not add inspection rights or indemnity unless negotiated in the PSA.

## Scotland/UK Adaptation

### Core Concept Conversion

| US Term | Scotland/UK Equivalent |
|---|---|
| UCC Article 2 (Sale of Goods) | **Sale of Goods Act 1979** - governs contracts for the sale of goods in the UK |
| UCC § 2-316 (AS IS disclaimers) | **Unfair Contract Terms Act 1977** (UCTA) - limits exclusion of implied terms in consumer and B2B contracts |
| UCC-1 Financing Statement | **Companies House, Register of Charges** / **Register of Inhibitions** (Scotland) |
| IRS Form 8594 | **No direct equivalent** - HMRC capital allowances / CGT reporting on asset allocations |
| Sales/use tax | **VAT** (Value Added Tax) at UK standard rate (currently 20%) |
| State/governing law (Delaware, NY) | **Scots law** or **English law** |
| Notarization | Not generally required in Scotland for bills of sale; witnessed signature sufficient |
| Title insurance | **No direct equivalent** - rely on searches (Land Register / Register of Inhibitions / Companies House) |

### Transfer of Goods in Scotland

1. **Sale of Goods Act 1979** - Applies across the UK (including Scotland). Property passes when parties intend it to pass (s. 17).
2. **Requirements of Writing (Scotland) Act 1995** - A bill of sale should be in writing and subscribed by the granter; formal validity may require a witness.
3. **Standard security** - Scottish equivalent of a mortgage / UCC-1 for heritable property.
4. **Floating charge** - For corporate debt over moveable assets, register at Companies House.
5. **VAT** - The supply of goods is subject to VAT. Invoice must show VAT number and VAT amount. Transfer of a business as a going concern (TOGC) may be outside the scope of VAT.

### Key Differences for Practitioners

1. **No UCC** - The UK does not have a Uniform Commercial Code. Sale of goods is governed by the Sale of Goods Act 1979, which implies different terms (e.g., satisfactory quality, fitness for purpose).
2. **VAT** - Always consider VAT. If the seller is VAT-registered, VAT is chargeable on the sale unless an exception applies (e.g., TOGC).
3. **UCTA 1977** - Any "AS IS" disclaimer must survive scrutiny under UCTA. The Act prohibits exclusion of liability for death/injury and requires reasonableness for other exclusions.
4. **Not notarised** - A bill of sale in Scotland is generally signed by the parties and witnessed. Notarisation is not standard.
5. **Register of Inhibitions** - For enforcement, a creditor can inhibit the debtor (prevent disposal of heritable property) rather than file a UCC-1.
6. **Titled vehicles** - DVLA (Driver and Vehicle Licensing Agency) registration must be updated; not notarised.
7. **No IRS Form 8594** - Allocate consideration for HMRC capital allowances and capital gains purposes; no prescribed form.

### Recommended Approach

- Replace all UCC references with Sale of Goods Act 1979.
- Replace USD with GBP.
- Replace sales/use tax provisions with VAT provisions. Include VAT invoice requirements.
- Remove notarisation references unless dealing with a specific regulated asset class (ships, aircraft).
- Remove IRS Form 8594 reference; replace with note on HMRC capital allowance allocation.
- Add scrutiny note under UCTA 1977 for AS IS disclaimers.
- Ensure template uses UK/Scots legal terminology (e.g., "subscribed" not "executed", "standard security" not "mortgage" if heritable assets).

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
