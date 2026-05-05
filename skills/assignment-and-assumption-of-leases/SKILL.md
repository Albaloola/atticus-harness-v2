---
name: assignment-and-assumption-of-leases
language: en
description: Drafts an Assignment and Assumption of Leases transferring tenant leases from seller (Assignor) to buyer (Assignee) as a closing document to a commercial property PSA. Trigger when closing a commercial property sale with existing tenant leases or when a user needs lease assignment/assumption language for a real estate transaction. [Atticus UK/Scots refined]
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Assignment and Assumption of Leases

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

Drafts a closing-ready agreement transferring all landlord rights and obligations under existing tenant leases from Assignor (seller) to Assignee (buyer) in a commercial property sale.

## Prerequisites

Collect before drafting. Use `[INSERT]` placeholders for missing items and prepend a required-information checklist.

1. **PSA** - closing date, governing law, lease-specific provisions
2. **Lease schedule / rent roll** - tenant names, suites, dates, terms, rent, deposits
3. **Party details** - legal names, entity types, addresses for Assignor and Assignee
4. **Effective date** - typically the PSA closing date
5. **Security deposit total** - aggregate amount transferred at closing

## Quick Start

1. Gather prerequisites above
2. Draft document following the output structure below
3. Run through the pitfalls checklist before finalizing

## Output Structure

### Header, Title: `ASSIGNMENT AND ASSUMPTION OF LEASES`
- Dated: `as of [Month Day, Year]`
- Full legal entity names, types, and addresses

### Recitals (3 to 4 lettered paragraphs)

| Recital | Content |
|---------|---------|
| A | PSA reference, date, property address/legal description |
| B | Assignor is landlord under leases on Exhibit A |
| C | Intent to assign/assume all landlord rights per PSA |
| D *(if needed)* | Material facts: estoppels, modifications, known disputes |

### Operative Provisions

**1. Assignment** - Transfer all of Assignor's right, title, and interest in the Leases, including:
- Accrued and future rents, Security deposits, letters of credit, guaranties, TI allowances, options, renewal/expansion rights

**2. Assumption** - Assignee assumes all landlord obligations arising **on or after** Effective Date, including honoring deposits, TI obligations, and surviving tenant rights.

**3. Indemnification**

| Party | Scope |
|-------|-------|
| Assignor → Assignee | Claims from landlord obligations/defaults **before** Effective Date |
| Assignee → Assignor | Claims arising **on or after** Effective Date |

Both survive closing. Include notice, defense rights, and settlement approval mechanics.

**4. Security Deposit Transfer** - Assignor transfers all deposits (plus statutory interest if required) totaling `$[AMOUNT]`. Assignee acknowledges receipt and assumes return obligations. Assignor released from deposit liability after Effective Date.

**5. Rent Proration** - Assignor entitled to rents before Effective Date; Assignee on or after. Governed by PSA or closing statement.

**6. Relationship to PSA** - Assignment subject to PSA terms; PSA controls on conflict. Cross-reference PSA sections on lease assignment, estoppels, prorations.

### General Provisions, Governing law (property state or per PSA), successors/assigns, counterparts (including electronic), entire agreement, severability

### Signature Blocks
Entity name → Signatory name/title → Date (both parties)

### Exhibit A, Lease Schedule

| Tenant | Suite | Lease Date | Commencement | Expiration | Base Rent/Mo. | Security Deposit | Notes |
|--------|-------|------------|--------------|------------|---------------|-----------------|-------|
| [Name] | [#] | [Date] | [Date] | [Date] | $[Amount] | $[Amount] | Amendments, options, disputes |

## Pitfalls and Checks

- **Anti-assignment clauses**: Verify sale-of-property exception applies per each lease or obtain tenant consent
- **Ownership-change triggers**: Review co-tenancy, exclusive use, and recapture rights triggered by landlord change
- **Tenant notice**: Flag state-specific requirements for notifying tenants of assignment and new landlord contact `[VERIFY by state]`
- **Security deposit statutes**: Verify state rules on interest accrual, escrow, and transfer procedures `[VERIFY by state]`
- **Cross-document consistency**: Align effective date and defined terms with deed, bill of sale, closing statement, and estoppel certificates
- **Problem leases**: Add carve-outs for leases with active defaults, disputes, or open cure obligations
- **Defined terms**: Capitalize consistently, Assignor, Assignee, Leases, Property, Purchase Agreement, Effective Date

---

**Key changes made:**
- **Description**: Tightened and added explicit trigger guidance ("Trigger when...")
- **Added Quick Start** section for fast orientation
- **Consolidated prose**: Removed redundant heading-level overview (was restating the description), compressed operative provisions into single-line intros with sub-bullets
- **Renamed "Guidelines" → "Pitfalls and Checks"** for scannability
- **Compressed General Provisions** into a single bullet line instead of five separate bullets
- **Reduced token count** throughout while preserving all legal substance and domain accuracy

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
