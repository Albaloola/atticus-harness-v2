---
name: bill-of-sale
language: en
description: Atticus UK/Scots legal skill for bill-of-sale. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bill of Sale, UK/Scotland

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

Drafts a jurisdiction-aware Bill of Sale transferring moveable property ownership from seller to buyer, adapted for UK/Scottish legal requirements.

**[SCOTS: Note]** - In Scotland, there is no standard "Bill of Sale" equivalent to the U.S. form. Title to moveable property transfers by agreement (consensual transfer) and delivery (traditio) or equivalent. Writings may serve as evidence of transfer. For heritable (real) property, a **disposition** registered in the Land Register of Scotland is required.

## Prerequisites

Collect before drafting:

1. **Property** - type, make, model, year, serial/VIN/HIN, condition, mileage (vehicles)
2. **Parties** - full legal names, addresses, capacity (individual or entity)
3. **Terms** - purchase price, payment method, deposit, completion/delivery date
4. **Condition basis** - as-is or seller warranty (scope and duration)
5. **Jurisdiction** - Scotland or England & Wales (governs execution, witnesses)
6. **Security status** - existing charges, standard securities, or encumbrances

## Document Sections

Draft in this order:

| Section | Content |
|---|---|
| Recitals | Date, party names/addresses, property identification |
| Consideration | Price (numeral + written), payment method, receipt acknowledgment |
| Transfer of Ownership | Conveyance language, effective date, delivery terms |
| Condition | As-is disclaimer OR limited warranty with scope/duration |
| Title Warranty | Clear and marketable title, authority to sell |
| Security Release | Free of encumbrances, or disclosure of exceptions |
| Risk of Loss | When risk passes (typically delivery or execution); Sale of Goods Act 1979 s.20 |
| Indemnification | Seller indemnifies against pre-completion claims |
| Governing Law | Scots or English law; dispute resolution forum |
| Signatures | Seller + date, buyer + date, witness(es) if required |

## Property-Type Addenda

| Type | Additional Requirements |
|---|---|
| Motor Vehicle | VIN, mileage disclosure; DVLA V5C logbook (registration document) transfer; new keeper notification |
| Watercraft | HIN, UK Ship Register documentation if registered; Part I/III registration |
| Firearms | Note requirement for registered firearms dealer (RFD) involvement; never draft as private-transfer workaround |
| Business Equipment | Itemised asset schedule as Schedule 1; serial numbers; software licence assignments |
| Livestock | Ear tag/ID, health certificates, herd registration, movement documents |

## Workflow

```
- [ ] Collect all prerequisites from client
- [ ] Identify property type and select applicable addenda
- [ ] Draft document sections in order above
- [ ] Apply jurisdiction-specific execution requirements (witnesses required; Scottish witnesses for documents governed by Scots law)
- [ ] If as-is: ensure disclaimer is clear and brought to buyer's attention (Sale of Goods Act 1979 ss.12 to 15 implied terms cannot be excluded for consumers)
- [ ] If entity seller: confirm signatory authority (board resolution or articles of association)
- [ ] If multi-asset: attach itemised Schedule 1, incorporate by reference
- [ ] Flag VAT considerations (standard-rated, reduced, or TOGC)
- [ ] Review for scope creep, bill of sale should not double as security agreement
```

## Pitfalls

- **Vehicle registration**: DVLA V5C logbook must be sent to DVLA by seller; new keeper section completed. Not a substitute for bill of sale.
- **Witnesses**: In Scotland, a document relating to moveable property should be witnessed (Requirements of Writing (Scotland) Act 1995). For execution in Scotland, one witness is standard.
- **As-is and consumer rights**: For business-to-consumer sales, the Sale of Goods Act 1979 implies terms as to satisfactory quality, fitness for purpose, and description, these CANNOT be excluded by an as-is clause. As-is is only effective in business-to-business sales.
- **Firearms**: Never draft a bill of sale that bypasses legally required RFD dealer involvement for regulated transfers.
- **Scope**: Keep bills of sale clean, draft security agreements (standard securities / floating charges) separately.
- **VAT**: Determine if VAT applies (standard-rated supply, reduced rate, or TOGC). Flag to buyer as obligation to account.
- **Periodic payment / HP**: If payments are deferred, consider whether a consumer credit / hire purchase agreement is needed, bill of sale alone may not suffice.

---
## Scotland/UK Adaptation

This skill has been adapted from a U.S. Bill of Sale template for use under Scots/English law.

### Key Conversions
| U.S. Term | UK/Scottish Equivalent |
|---|---|
| UCC § 2-316 (as-is disclaimers) | Sale of Goods Act 1979 ss.12 to 15 (implied terms; not excludable for consumers) |
| UCC Article 6 (bulk sale) | TUPE (for asset transfers involving employees) |
| State DMV registration | DVLA (GB) / DVA (NI) - V5C logbook |
| Odometer disclosure (49 U.S.C. §32705) | Mileage record (no federal odometer statute; check MOT history) |
| Notarisation | Witness execution (Requirements of Writing (Scotland) Act 1995) |
| DMV title transfer | V5C registered keeper change; no "title" document in UK |
| Deed of trust / mortgage release | Discharge of standard security (Scotland) / charge (England) |
| Lien / security interest | Standard security / floating charge / fixed charge |
| UCC-1 financing statement | Registration of charge (Companies House, Form MR01) |
| Sales/use tax | VAT / LBTT (if heritable property included) |
| FIRPTA (IRC §1445) | Non-resident CGT (if property assets) |
| "State of sale" jurisdiction | Scotland / England & Wales |
| Title insurance | Searches (Land Register / property searches) |
| Escrow / closing | Stakeholder / completion |
| HUD-1 settlement statement | Completion statement |
| Personal property | Moveable property (Scots law) |
| Real property | Heritable property (Scots law) |

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
