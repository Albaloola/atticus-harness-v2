---
name: commercial-promissory-note
language: en
description: Drafts UCC-compliant U.S. Commercial Promissory Notes for commercial real estate finance transactions. Produces negotiable instruments with principal, interest, payment, default, and enforcement provisions protecting lender interests. Use when drafting promissory notes secured by real property, deed of trust, or mortgage in commercial lending. [Atticus UK/Scots refined]
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commercial Promissory Note

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

Drafts a UCC Article 3 to compliant Commercial Promissory Note for U.S. commercial real estate finance, structured to protect Payee/lender at negotiation and closing.

## Prerequisites

Collect before drafting:

1. **Parties** - Full legal names, entity types, principal places of business for Maker (borrower) and Payee (lender)
2. **Loan economics** - Principal amount, interest rate (fixed or variable index + margin), day-count convention, maturity date
3. **Payment structure** - Installment amounts/frequency, interest-only period, balloon payment date
4. **Security** - Recording county/state, property address, legal description or reference to deed of trust/mortgage of even date
5. **Governing law** - Jurisdiction (required for usury and prepayment penalty compliance)
6. **Prepayment terms** - Permitted/prohibited, penalty schedule, exceptions (casualty, condemnation)

## Quick Start

1. Gather all prerequisites above
2. Draft header with title `PROMISSORY NOTE`, principal in numerals and written form, execution date, city, state
3. Build sections per the template below
4. Run the verification checklist before finalizing

## Sections

| Section | Required Elements | Drafting Rules |
|---|---|---|
| **Promise to Pay** | Maker, Payee, "for value received," "to the order of" | Unconditional language only, conditions destroy UCC negotiability |
| **Interest Rate** | Rate (% p.a.), simple/compound, day-count (360 or actual/365), accrual start | Variable: SOFR index + margin, caps/floors, adjustment frequency; include usury savings clause |
| **Payment Schedule** | Payment count, amount/method, due date, commencement, maturity | Specify payment address/account; grace period before late charge |
| **Application of Payments** | Priority: (1) fees → (2) accrued interest → (3) principal | Address partial payments; flag negative-amortization risk if interest-only |
| **Late Charges** | Grace period (10 to 15 days typical), charge (4 to 5% of overdue or flat fee) | Must not exceed state maximum; acceptance ≠ waiver of default |
| **Prepayment** | Permitted/prohibited; partial/whole; penalty schedule; exceptions | Step-down if used (e.g., 3%/2%/1%); address casualty/condemnation proceeds |
| **Events of Default** | Monetary (payment failure + cure); non-monetary (covenant breach, bankruptcy, misrepresentation); cross-default | Monetary cure: 10 days written notice; non-monetary: 30 days; use objective triggers |
| **Remedies / Acceleration** | Optional acceleration of full balance + accrued interest; cumulative remedies | Non-exercise ≠ waiver; default interest rate if permitted; attorneys' fees as secured obligation |
| **Security Reference** | Deed of trust/mortgage of even date; property address + county/state; recourse or non-recourse | Non-recourse carve-outs: fraud, environmental, waste, misapplication of rents |
| **Maker Waivers** | Presentment, demand, notice of dishonor, protest, notice of default/acceleration | Bold or ALL CAPS per state conspicuousness rules; waive right to require Payee to proceed against collateral first |
| **Attorneys' Fees** | Prevailing party: reasonable fees + costs (trial, appeal, bankruptcy, collection) | Fees = secured obligation; check state mandatory-mutuality rules |
| **General** | Governing law, severability, successors/assigns, written amendment only, notice provisions, time-is-of-the-essence, integration | No Maker setoff/counterclaim unless negotiated |
| **Signature Block** | Entity: legal name + "By:" + signatory name/title + date; Individual: signature + name + date | Confirm signatory authority; joint Makers = joint and several; counterparts clause |

## Verification Checklist

Run before finalizing:

- [ ] Promise is unconditional and payable "to the order of" (UCC Art. 3 negotiability)
- [ ] Interest rate ≤ governing state usury ceiling - [VERIFY state-specific limit]
- [ ] Usury savings clause included (excess interest → applied to principal or refunded)
- [ ] Day-count convention stated explicitly (360 or actual/365)
- [ ] Variable rate uses SOFR (not LIBOR) with publication source and fallback language
- [ ] Prepayment penalty complies with governing state rules - [VERIFY state restrictions]
- [ ] Non-recourse carve-outs (if applicable) are enumerated explicitly, not vague
- [ ] Terms align with related deed of trust/mortgage, loan agreement, and guaranty
- [ ] Cross-default provisions mirrored across all security documents
- [ ] If any Maker is an individual, confirmed TILA/Reg Z/state consumer statutes do not apply (skill targets commercial transactions only)

## Scotland/UK Adaptation

### Applicable law, Replace UCC Article 3 with **Scots law of negotiable instruments** (Bills of Exchange Act 1882, as modified for Scotland).
- Governing law should specify **Scots law**; jurisdiction in the **Sheriff Court** or **Court of Session** depending on amount.
- Replace US usury limits with the **Consumer Credit Act 1974** (if individual/partnership < 3 persons) or commercial freedom of contract for corporate borrowers.

### Structural equivalents

| US Concept | Scottish/UK Equivalent |
|---|---|
| UCC Article 3 (negotiable instruments) | Bills of Exchange Act 1882 - Scots law of promissory notes |
| SOFR index + margin | SONIA (Sterling Overnight Index Average) + margin, standard for GBP loans |
| Deed of trust / mortgage | Standard security (registered in the Land Register or sasines) |
| UCC-1 financing statement | Register of Charges at Companies House (for companies); Register of Inhibitions/Adjudications (for individuals) |
| Non-recourse carve-outs | Non-recourse provisions enforceable under Scots law; but carve-outs must be express and limited to: fraud, environmental contamination, misapplication of rents, breach of separate security |
| Prepayment penalty | Penalty rule applies, prepayment charges must be a genuine pre-estimate of loss; disproportionate penalties are unenforceable (Cavendish Square v Makdessi [2015]) |
| Acceleration clause | Valid under Scots law; must be express; standard security acceleration requires calling-up notice (Consolidated Written Statement 2002) |
| Late charges | Must not amount to a penalty; contractual interest runs at the specified rate or judicial rate of interest |
| Attorneys' fees | "Expenses follow success" rule applies; contractual provision for full indemnity costs may be limited by court discretion |

### Key differences for practitioners
1. **No UCC negotiability**: A Scottish promissory note is not a "negotiable instrument" in the same way; the Bills of Exchange Act 1882 applies mainly to bills and cheques, promissory notes are governed by common law principles in Scotland.
2. **Standard security**: The Scottish equivalent of a mortgage is a Standard Security, which requires a calling-up notice (2 months) before enforcing. The Loan Modification Agreement must be recorded in the Land Register to maintain priority.
3. **Usury**: No fixed usury ceiling for commercial loans in Scotland; penalty rule and Unfair Relationships under the Consumer Credit Act 1974 constrain consumer lending.
4. **Interest rates**: Use SONIA (not SOFR or LIBOR) for GBP-denominated loans; specify if Act/365 or 30/360 day count convention.
5. **Joint and several liability**: Recognised in Scots law; ensure clause expressly provides for it.
6. **GBP**: All amounts should be denominated in pounds sterling (£).

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
