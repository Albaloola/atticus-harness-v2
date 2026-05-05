---
name: lien-foreclosure
language: en
description: Draughts a payment claim action for the Sheriff Court or Court of Session to enforce unpaid construction debts through adjudication, contractual remedies, or diligence against heritable property in Scotland. Covers adjudication under the Housing Grants Act, personal contract claims, and alternative remedies. Use when drafting payment claim actions, enforcement of adjudicators' decisions, or construction payment disputes in Scotland. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Payment Claim Action (Scotland/UK Adaptation)

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

Draughts a summary application or ordinary cause action to enforce payment for construction work in Scotland. [SCOTS: Note] The US mechanic's lien and lien foreclosure do not have a direct equivalent in Scots law. This skill adapts the concept to the Scottish construction remedy framework: adjudication under the Housing Grants, Construction and Regeneration Act 1996, personal contract claims, and diligence (including inhibition and adjudication against heritable property).

## Prerequisites

Before drafting, confirm availability of:

1. **Parties** - full legal names, entity types (Ltd/LLP/partnership/individual), registered addresses
2. **Contract** - original agreement or purchase order with payment terms; note whether in writing (preferred) or oral
3. **Payment records** - invoiced amounts, partial payments, outstanding balance
4. **Construction operations** - description of works, dates, location (heritable property address)
5. **Timeline** - commencement, completion/cessation, payment demand dates
6. **Statutory compliance** - whether payment notice/pay less notice regime applies (HGCRA 1996 ss.110A-110B); whether adjudication decision obtained
7. **Applicable law** - Scots law; contract governed by Scots law (presumed for Scottish property)

## Quick Start

1. Extract party, contract, and payment data from case documents
2. Determine remedy route:
   - If within 5 years and works are "construction operations" under HGCRA 1996 → consider adjudication first (mandatory right, 28-day process)
   - If adjudicator's decision obtained and unpaid → enforce via summary application to the Sheriff Court
   - If no adjudication → ordinary cause action for payment (breach of contract)
3. Draft the action with caption, craves (orders sought), condescendence (factual statement), and pleas-in-law
4. Attach contract, invoices, and payment notices as productions
5. Verify prescriptive period (5 years for breach of contract under Prescription and Limitation (Scotland) Act 1973)

## Information Extraction

Search case documents for:

| Data Point | Source |
|---|---|
| Pursuer entity name + type | Contract, business filings (Companies House) |
| Defender / property owner | Contract, Land Register entries |
| Contract price / payment terms | Contract or PO |
| Work performed / materials supplied | Invoices, delivery receipts, dayworks |
| Commencement and completion dates | Project records, daily logs |
| Payment applications / certificates | Architect/contract administrator certificates |
| Payment notices / pay less notices | Contract correspondence |
| Demand dates and responses | Correspondence, formal demand letters |
| Amount owed (principal + interest) | Payment ledger, contract |
| Adjudication decision (if any) | Adjudicator's decision |

## Action Structure (Scottish Sheriff Court / Court of Session)

### Caption

- Court: Sheriff Court for the sheriffdom where the property is situated (Ordinary Cause) or Court of Session (Outer House) for claims over £100,000 or complex matters, Pursuer with full entity type, Defender(s): property owner + any other parties with liability
- [SCOTS: Note] This is a personal action for payment, not an in rem proceeding. Scots law does not recognise a mechanic's lien on heritable property.

### Craves (Orders Sought)

1. For payment of £[X] (principal sum)
2. Interest at the judicial rate (currently 8% p.a.) or contractual rate from date of citation until payment
3. Expenses (legal costs) - [SCOTS: Note] "Expenses follow success" is the general rule in Scotland; decree for expenses will be sought
4. Further craves: decree for adjudication (diligence against heritable property) if applicable; interim payment (crave for interim decree)
5. Such further orders as the court thinks fit

### Condescendence (Statement of Facts)

Numbered paragraphs setting out:

1. **Parties and jurisdiction** - pursuer's business, defender's business; contract governed by Scots law; property location
2. **Contractual relationship** - parties, project, scope, price, payment terms; refer to annex productions
3. **Construction operations** - specific dates of works/labour/delivery; confirm these are "construction operations" within the meaning of HGCRA 1996 s.105
4. **Performance** - works executed, dates of completion or cessation; refer to invoices and third-party certificates
5. **Breach / non-payment** - failure to pay despite demand; exact amount owed; note any payment notice or pay less notice issued
6. **Adjudication (if applicable)** - adjudicator appointed, decision issued on [date], amount awarded; defender failed to pay
7. **Prescription** - confirm claim brought within 5-year prescriptive period (s.6 Prescription and Limitation (Scotland) Act 1973)

### Pleas-in-Law (Legal Submissions)

Standard pleas for a construction payment action:

1. The Defender being duly bound to make payment in terms of the contract, the Pursuer is entitled to decree as craved.
2. The Defender having failed to make payment, the Pursuer is entitled to decree for the sum sued for with interest and expenses.
3. [If adjudication] The Adjudicator's Decision being binding on the parties pending final determination by arbitration, legal proceedings or agreement, the Defender is bound to make payment in accordance therewith.
4. Separation, the pursuer's claims not being prescribed or otherwise time-barred, decree should be granted.

### Productions (Exhibits)

1. Contract or purchase order (with annexes)
2. Invoices / payment applications
3. Payment notices
4. Adjudicator's decision (if any)
5. Formal demand letters
6. Correspondence re non-payment
7. Any expert report on quantum / valuation

## Critical Checks

- **Prescription**: Claims for breach of a construction contract prescribe 5 years from the date the obligation became enforceable (s.6 Prescription and Limitation (Scotland) Act 1973). Confirm the date of breach / demand / completion.
- **Adjudication**: No link needed, adjudication is a statutory right under HGCRA 1996 for any construction operation contract in Scotland. 28-day process. Adjudicator's decision is binding interimally.
- **No mechanic's lien**: Scots law does not provide a direct equivalent. The closest is: (a) retention of title clauses in the supply contract, (b) diligence (adjudication against heritable property after decree), (c) standard security if granted by the defender.
- **Legal description**: Refer to heritable property by its registered title number (Land Register) or description (Sasines).
- **Monetary precision**: Use exact figures; no rounding or estimates.
- **One allegation per paragraph**: Number consecutively (Scots pleading rules).
- **Local rules**: Sheriff Court Ordinary Cause Rules / Court of Session Rules 1994 - check for specific formatting, page limits, and timetable requirements.
- **For adjudication enforcement**: Use summary application procedure in the Sheriff Court; standard of proof is whether a valid adjudicator's decision exists and has not been complied with.
- **Uncertain citations**: Mark any unverified statutory citation with [VERIFY].

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law

**Changes made:**
- Replaced entire mechanic's lien foreclosure concept with Scottish construction payment remedy framework (adjudication + personal action for payment)
- Replaced US superior/circuit court with Sheriff Court (Ordinary Cause) and Court of Session (Outer House)
- Replaced Plaintiff/Pursuer, Defendant/Defender terminology, Replaced complaint structure with Scottish initial writ/condescendence/craves/pleas-in-law structure, Replaced US statutory lien regime with HGCRA 1996 adjudication regime, Replaced US statute of limitations with 5-year prescriptive period (Prescription and Limitation (Scotland) Act 1973)
- Replaced jury trial references (none for these actions) with Sheriff summary/ordinary cause procedure, Replaced US attorney's fees references with "expenses follow success" rule (Scottish judicial expenses)
- Replaced in rem proceeding concept with personal action + post-decree diligence, Replaced exhibits with productions (Scots terminology)
- Added adjudication as primary remedy route

**Key Scottish/UK considerations:**
- [SCOTS: Note] There is no direct equivalent to the US mechanic's lien in Scots law. Construction payment disputes are resolved through: (1) contractual payment terms; (2) adjudication under HGCRA 1996; (3) personal action for payment in the Sheriff Court or Court of Session; (4) post-decree diligence (adjudication against heritable property, arrestment of funds, inhibition)
- Retention of title clauses may provide a possessory remedy for unpaid suppliers but do not create a charge on land, Standard securities (mortgages) on the property are available only if separately granted, they are not implied by construction work, Adjudication is mandatory (HGCRA 1996 s.108) - either party may refer a dispute at any time, Adjudicator's decisions are binding interimally; enforcement is via summary application in the Sheriff Court, Judicial expenses (costs) follow success, loser pays, but amounts are taxed (assessed) by the Auditor of Court, No punitive or exemplary damages in Scots law for breach of contract

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
