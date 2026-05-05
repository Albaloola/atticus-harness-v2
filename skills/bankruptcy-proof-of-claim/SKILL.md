---
name: bankruptcy-proof-of-claim
language: en
description: Drafts filing-ready proofs of claim for U.S. bankruptcy proceedings using Official Form B 410 under FRBP 3001. Handles secured, unsecured priority, and general unsecured claims with proper valuation, documentation, and bar date compliance. Use when a creditor needs to file or amend a proof of claim in a bankruptcy case. [Atticus UK/Scots refined]
tags:
- drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Proof of Claim (Bankruptcy)

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

Prepares a complete proof of claim for filing with the U.S. Bankruptcy Court, compliant with FRBP 3001 and Official Form B 410.

## Prerequisites

1. **Case information** - debtor name, case number, court, chapter, bar date
2. **Creditor information** - legal name, address, authorized agent
3. **Claim basis** - contract, promissory note, invoice, judgment, statutory, tort
4. **Claim amount** - principal, interest (rate and calculation), fees, costs
5. **Security interest** (if secured) - collateral description, lien perfection documents, valuation
6. **Priority status** (if priority) - statutory basis under § 507(a)
7. **Supporting documents** - contracts, invoices, account statements, UCC filings, judgments

## Quick Start

1. Confirm bar date and calculate days remaining, this is jurisdictional
2. Gather all prerequisites above; request missing items before drafting
3. Calculate total claim as of petition date using the claim calculation table below
4. Draft Form B 410 Parts 1 to 4 per the output structure
5. Attach all supporting documentation per FRBP 3001(c)
6. Include signature block with penalty-of-perjury declaration

## Output Structure

### Part 1: Claim Information

| Field | Value |
|---|---|
| Debtor name and case number | [From case info] |
| Creditor name and mailing address | [From creditor info] |
| Claim amount as of petition date | [Calculated total] |
| Basis for claim | [Category and description] |
| Post-petition interest/charges | [Yes/No, note separately] |
| Subject to setoff | [Yes/No, describe if yes] |

### Part 2: Secured Claim

Complete only if claim is secured:

- **Collateral value** - real property, personal property, or other (state valuation basis)
- **Perfection basis** - mortgage, deed of trust, UCC filing, or judicial lien
- **Secured amount** - lesser of claim amount or collateral value per § 506(a)
- **Unsecured deficiency** - difference if undersecured, Attach evidence of perfection

### Part 3: Priority Claim

Complete only if claiming priority under § 507(a):

| Priority Category | Statutory Basis |
|---|---|
| Domestic support obligations | § 507(a)(1) |
| Wages/salaries (180-day window, statutory cap) | § 507(a)(4) |
| Employee benefit plan contributions | § 507(a)(5) |
| Tax claims | § 507(a)(8) |

State the amount entitled to priority.

### Part 4: Supporting Documentation

Attach per FRBP 3001(c):

| Claim Type | Required Attachment |
|---|---|
| Based on a writing | The writing itself (contract, note, invoice) |
| Secured | Evidence of perfection (recorded mortgage, UCC filing) |
| Open-end / revolving credit | Account statement |
| Filed by assignee | Documentation of full assignment chain |

### Signature and Declaration

- Penalty-of-perjury declaration, Authorized representative name and capacity, Filing agent information (if applicable)

## Claim Calculation

All amounts calculated as of the petition date:

| Component | Amount | Basis |
|---|---|---|
| Principal | $ | Contract/invoice amount |
| Pre-petition interest | $ | Rate × period (cite contractual or statutory rate) |
| Late fees/charges | $ | Per contract terms |
| Attorney's fees | $ | If contractually authorized |
| **Total claim** | **$** | **Sum as of petition date** |

Post-petition amounts are noted separately, not included in the filed claim amount but may be recoverable for oversecured creditors under § 506(b).

## Guidelines

- **Bar date is jurisdictional** - a missed bar date typically results in claim disallowance
- **File even if disputed** - protect the creditor's position; amount can be resolved later
- **Petition date controls** - calculate all amounts as of that date, not the filing date
- **Secured claim bifurcation** - § 506(a) splits into secured (up to collateral value) and unsecured deficiency
- **Documentation is mandatory** - courts can reduce or disallow undocumented claims
- **Agent filings** - include power of attorney or written authorization
- **Amended claims** - permitted before distribution, but monitor all deadlines
- **Local rules** - check CM/ECF requirements for the specific court

## Troubleshooting

| Issue | Resolution |
|---|---|
| Bar date has passed | Check if cause exists for late filing (excusable neglect under FRBP 9006(b)(1)); file motion for leave immediately |
| Missing supporting documents | File claim with available documentation and supplement before objection deadline; note incomplete attachments |
| Uncertain claim amount | File with best estimate and mark as "estimated" on Form B 410; amend when exact figure is available |
| Secured claim without perfection evidence | File as general unsecured unless perfection can be documented; obtain and attach evidence before objection hearing |
| Claim objection received | Review objection basis, gather responsive evidence, and file response within the court's deadline |

---

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
