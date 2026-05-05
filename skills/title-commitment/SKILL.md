---
name: title-commitment
language: en
description: Drafts ALTA-compliant Title Commitment documents for commercial real estate transactions including Schedule A, Schedule B Parts I and II. Use when preparing title commitments, preliminary title reports, title insurance policies, or pre-closing title documents. [Atticus UK/Scots refined]
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Title Commitment and Policy

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

Drafts an ALTA-standard Title Commitment identifying state of title, requirements for policy issuance, and exceptions to coverage.

## Prerequisites

Collect before drafting:

- **Property** - legal description, APN, county, state
- **Transaction** - purchase price or loan amount, policy type (Owner's/Loan/Leasehold), closing date
- **Vesting** - current owner(s) of record with recording reference
- **Title search** - all encumbrances, liens, easements, CC&Rs, judgments from examination
- **Parties** - proposed insured(s), full legal names with entity designations
- **Encumbrances** - mortgages, deeds of trust, tax status, assessments to address at closing

## Document Structure

### Header

- Title: "COMMITMENT FOR TITLE INSURANCE"
- Issuing company: full legal name, jurisdiction-licensed, Commitment number: `[YEAR]-[OFFICE CODE]-[SEQ]`
- Effective date: date through which title search was conducted

### Schedule A, Transaction Details

Draft in order:

1. **Policy type** - ALTA Owner's (2006), Loan, or Leasehold; specify form version
2. **Policy amount** - purchase price (owner's) or loan amount (lender's); format `$X,XXX,XXX.00`
3. **Proposed insured** - full legal names with entity designations; specify ownership percentages if multiple
4. **Current vesting** - owner(s) per most recent deed with recording reference (instrument number or book/page)
5. **Legal description** - verbatim from deed or survey; jurisdiction-appropriate format (metes and bounds, lot/block, government survey); include plat references; separate multiple parcels

### Schedule B, Part I, Requirements

List all conditions for policy issuance in closing-timeline order:

1. Premium and fees payment
2. Purchase price / loan funding confirmation via settlement statement
3. Conveyance instrument, deed executed, acknowledged, recorded
4. Existing lien releases, payoff statements + recorded satisfactions for all non-surviving mortgages, DOTs, judgment liens, tax liens
5. Owner's affidavit, possession, mechanic's liens, unrecorded interests, recent improvements
6. Entity authority, good standing, resolutions, incumbency certificates (if entity parties)
7. Survey, current ALTA/NSPS if needed to remove standard survey exception
8. Gap coverage, gap indemnity or bring-down search if effective-to-closing gap exists

Distinguish requirements due **before**, **at**, and **after** closing.

### Schedule B, Part II, Exceptions

Open with: policy will not insure against loss from the following unless removed or modified prior to closing.

**Standard exceptions** (removable by endorsement, note applicable ALTA endorsement form number):

- Rights/claims of parties in possession not in public records, Easements not shown by public records, Encroachments, boundary issues discoverable by survey/inspection, Mechanic's/materialmen's liens not yet of record, Taxes/assessments not yet shown as liens

**Specific exceptions** - each must include full detail:

| Type | Required Detail |
|------|----------------|
| Real property taxes | Current year status; prior year confirmation |
| CC&Rs | Recording reference; subdivision/HOA designation |
| Easements | Holder, purpose, location, recording ref; appurtenant vs. servient |
| Surviving mortgages/DOTs | Lender, original principal, recording ref, estimated balance |
| Judgments/liens | Creditor, amount, recording ref; property vs. owner's interest |
| Lis pendens | Case number, court, nature of action |
| Special assessments/CDD | Authority, purpose, amount, payment status |
| Mineral/subsurface rights | Scope of severance, recording reference |

## Pitfalls and Checks

- Every recorded-document reference needs jurisdiction-appropriate locator info (instrument number OR book/page OR official record number)
- Maintain exact consistency in party names, legal descriptions, and recording references throughout, If assuming existing financing, except the surviving lien in Part II, do **not** list it as a requirement to release, Do not draft endorsements inline; reference applicable ALTA endorsement form numbers only, Spell out months in dates; use `$X,XXX,XXX.00` for dollar amounts, Mark any unverifiable citation or statutory reference as `[VERIFY]`

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
