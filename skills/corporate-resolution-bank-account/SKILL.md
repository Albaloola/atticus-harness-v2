---
name: corporate-resolution-bank-account
language: en
description: Drafts a board resolution authorizing the opening and management of corporate bank accounts, including signatory designation, account types, borrowing authority, and secretary certification. Triggers when a financial institution requires formal board authorization to establish or manage accounts, when updating authorized signatories, or when documenting banking authority during entity formation or reorganization. [Atticus UK/Scots refined]
tags:
- corporate, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Corporate Resolution, Bank Account Authorization

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

Produces a board-level governance document that satisfies both internal corporate formality and bank due diligence for account opening, maintenance, and transaction authority.

## Required Inputs

1. **Corporation legal name** - must match articles of incorporation exactly
2. **State of incorporation**
3. **Adoption method** - board meeting or written consent of directors
4. **Financial institution(s)** - named institution or class (e.g., "any FDIC-insured institution")
5. **Authorized signatories** - names, titles, tiered authority thresholds
6. **Scope** - account types, transaction types, borrowing authority (yes/no), dollar limits
7. **Prior resolutions** - to supersede, if any
8. **Bylaws** - provisions on banking authority and consent requirements

## Quick Start

1. Collect all required inputs above.
2. Confirm bylaw authorization for board delegation of banking authority.
3. Confirm adoption-method validity under applicable state law.
4. Draft resolution sections in order: Header → Operative Resolutions → Certification.
5. Verify legal name, signatory tiers, and dollar thresholds before finalizing.

## Output Structure

### 1. Header & Recitals

| Field | Content |
|---|---|
| Title | RESOLUTIONS OF THE BOARD OF DIRECTORS OF [CORP NAME] |
| Date | Adoption date |
| Method | Board meeting (quorum + notice) OR written consent (check state unanimity requirement) |
| Bylaw reference | Cite specific provision authorizing banking resolutions |
| Purpose | Brief operational need (payments, payroll, receivables, etc.) |

### 2. Operative Resolutions

Draft each as a separate RESOLVED clause:

- **Account Authority** - Authorize named officers to open, maintain, modify, and close specified account types (checking, savings, money market, CD, other) at designated institution(s).
- **Signatory Designation** - Tiered structure:
  - Single signature: transactions up to $[threshold]
  - Dual signature: transactions exceeding $[threshold]
  - Covers: checks, wires, ACH, online banking, bank-required forms
- **Transaction Scope** - Deposits, withdrawals, standard transactions. If borrowing: specify dollar cap, permitted obligation types, whether collateral pledges need separate approval.
- **Document Execution** - Officers may execute all bank-required documents, signature cards, and agreements without further board action for routine forms.
- **Ratification** - Ratify prior banking acts if accounts/transactions predate formal authorization.
- **Supersession** - Supersedes all prior banking-authority resolutions, effective [date].
- **Continuing Authority** - Remains in effect until amended/revoked by board action. Corporation must notify institution of changes. Optionally: auto-terminate on signatory separation.

### 3. Secretary Certification

Must certify:
1. Resolutions were duly adopted on [date] per bylaws and state law
2. Resolutions have not been amended, modified, or revoked
3. Resolutions remain in full force and effect

Include: printed name, title (Secretary/Assistant Secretary), date, corporate seal if required.

## Pitfalls & Checks

- **Name mismatch** - Corporation name must match articles exactly; most common cause of bank rejection
- **Bylaw gap** - If bylaws don't authorize banking delegation, amend bylaws first
- **Consent threshold** - Most states require unanimous written consent unless bylaws provide otherwise; verify state statute
- **Quorum** - For meeting adoption, confirm quorum present throughout; document in minutes
- **Borrowing caps** - Always specify dollar limits; unlimited borrowing authority creates fiduciary exposure
- **Signatory changes** - Banks typically require re-certification of the resolution (not just new signature cards) when officers change
- **Stale certification** - Banks often require certification dated within 30 to 90 days; flag for recurring use
- **State law** - Procedural validity governed by state corporate code (e.g., Delaware § 141, California Corp. Code § 307) - verify applicable statute for client's jurisdiction

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
