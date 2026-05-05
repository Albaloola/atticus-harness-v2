---
name: cognovit-promissory-note
language: en
description: 'Drafts a U.S. cognovit promissory note with confession of judgment clause, enforceability gate, and execution formalities. Use when preparing a commercial loan note with cognovit language, confession of judgment, warrant of attorney, or waiver of notice/hearing rights. Triggers: cognovit, confession of judgment, warrant of attorney, waiver of defenses. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cognovit Promissory Note

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

Draft an enforceable cognovit promissory note compliant with governing-state law. A cognovit clause lets a borrower authorize entry of judgment without prior notice or hearing, most states prohibit or heavily restrict this, so enforceability must be confirmed before drafting.

## Prerequisites

Collect before drafting:

- **Governing law / forum** - state and venue for enforcement
- **Parties** - legal names, entity types, formation states, addresses, authorized signers
- **Loan terms** - principal, rate, term, payment schedule, fees, prepayment
- **Transaction type** - commercial vs consumer classification; any statutory exemptions
- **Authority docs** - resolutions, incumbency certificates, consents (if entity borrower)
- **Collateral / guaranties** - summary of related security documents, if any

## Quick Start

1. Run the **Enforceability Gate** (below) - if cognovit is prohibited, stop and output a standard note + guaranty + security agreement instead.
2. Draft the note using the **Document Sections** outline.
3. Walk the **Checks** list before finalizing.

## Enforceability Gate (Do First)

| Check | Action | Output |
|---|---|---|
| Cognovit permitted? | Research governing-state statutes + recent case law | Allow / deny with citations or `[VERIFY]` |
| Consumer restriction? | Confirm borrower classification | If consumer or mixed-use, treat as **prohibited** unless clear statutory exception |
| Required warnings / format? | Identify mandatory warning text, font size, capitalization, separate acknowledgment | Insert exact statutory warning or `[VERIFY]` |
| Execution formalities? | Check witness / notary / affidavit / attorney requirements | Add required signature formalities |

**If prohibited or materially restricted:** output alternative structure (standard note + guaranty + security agreement) and stop.

## Document Sections

### 1. Preamble and Parties

- Date, principal (numeric and words)
- Lender and Borrower: legal name, entity type, formation state, address, signatory title, Authority evidence: resolution/consent, incumbency, power/authority certification

### 2. Economic Terms

| Term | Details |
|---|---|
| Principal | Amount; fees/points treatment |
| Interest | Fixed/variable; index, margin, caps/floors; accrual method; day-count |
| Payments | Amounts, dates, schedule type, grace period |
| Application | Order: fees → interest → principal (or specified) |
| Prepayment | Permitted? Penalty? Formula; usury compliance |

### 3. Confession of Judgment Clause

Include all of:

- **Authority grant** - borrower authorizes any attorney to confess judgment after default
- **Scope** - principal, interest, fees, costs, attorney fees
- **Timing** - upon default or after cure period
- **Forum** - permitted courts; must align with governing-law / venue clause
- **Waivers** - notice, hearing, defenses, discovery, jury trial (if allowed)
- **Statutory warning** - exact required text and formatting per governing state

### 4. Defaults and Remedies

- Monetary default (failure to pay; grace period)
- Cross-default (thresholds, if applicable)
- Insolvency events (bankruptcy, assignment for benefit of creditors)
- Misrepresentation (material statements)
- Collateral events (if secured: impairment, transfer, insurance failures)
- Remedies: acceleration, confession of judgment, collection costs

### 5. Governing Law, Jurisdiction, Venue

- Governing law with substantial relationship to transaction, Consent to jurisdiction and venue, Waiver of forum non conveniens (if allowed)
- **Jury trial waiver** - must be conspicuous

### 6. Execution and Acknowledgments

- Signature blocks with titles and entity capacity, Witness / notary blocks (if required by state)
- Separate cognovit acknowledgment (if required by state)

### 7. Exhibits (as needed)

- Amortization schedule, Authority documents, Collateral schedule

## Template Skeleton

```text
COGNOVIT PROMISSORY NOTE

Date: [Date]
Principal Amount: $[Amount] ([Words])

FOR VALUE RECEIVED, [Borrower] ("Borrower") promises to pay to the
order of [Lender] ("Lender") the Principal Amount plus interest:

1.  Interest.
2.  Payments.
3.  Application of Payments.
4.  Prepayment.
5.  Events of Default.
6.  Remedies; Acceleration.
7.  Confession of Judgment. [Full clause + statutory warning + waivers]
8.  Governing Law; Jurisdiction; Venue.
9.  Jury Trial Waiver. [CONSPICUOUS]
10. Notices.
11. Miscellaneous.

BORROWER:                         LENDER:
By: ______________                By: ______________
Name/Title:                       Name/Title:
Date:                             Date:

[Notary / Witness Blocks if required]
[Separate Cognovit Acknowledgment if required]
```

## Checks

- [ ] Enforceability gate passed, cognovit is permitted for this transaction type in the governing state
- [ ] Consumer / mixed-use classification confirmed; if consumer, cognovit clause omitted
- [ ] Statutory warning language is exact, conspicuous, and placed per statute
- [ ] Confession clause forum aligns with governing law and has substantial relationship to transaction
- [ ] Usury analysis complete, includes all fees/charges treated as interest; exemptions noted
- [ ] Waivers are conspicuous and not buried in boilerplate
- [ ] Execution formalities match governing-state requirements (witnesses, notary, acknowledgment)
- [ ] If enforceability is unclear, alternative structure (standard note + guaranty + security agreement) recommended instead

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
