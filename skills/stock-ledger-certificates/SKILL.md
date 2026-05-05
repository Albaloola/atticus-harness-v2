---
name: stock-ledger-certificates
language: en
description: Drafts stock ledger and certificate packages for U.S. corporations, including master equity ledger, certificate templates, transfer procedures, and officer certification. Extracts capitalization data from formation documents. Use when forming a corporation, issuing initial shares, or establishing equity ownership records. [Atticus UK/Scots refined]
tags:
- corporate, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Stock Ledger and Certificates

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

Drafts the official equity ownership package: master stock ledger, individual certificate templates, transfer procedure block, and officer certification.

## Prerequisites

1. **Articles of Incorporation** - legal name, state, authorized shares, par value, share classes
2. **Bylaws or Organizational Minutes** - authorized officers, transfer restrictions
3. **Shareholders' Agreement** (if any) - ROFR provisions, transfer restrictions
4. **Existing stock records** (if any) - prior issuances, certificate numbers

## Quick Start

Extract from uploaded formation documents: (1) authorized capital by class, (2) par value per class, (3) initial issuances and consideration, (4) officer names for signature blocks. Draft all six sections below in sequence.

## Output Structure

### 1. Document Header

| Field | Content |
|---|---|
| Corporation Name | Full legal name |
| State of Incorporation | From articles |
| Date of Incorporation | From articles |
| Document Title | Stock Ledger and Stock Certificates |
| Prepared As Of | Current date |

### 2. Authorized Capital Structure

| Class | Shares Authorized | Par Value | Authorizing Document |
|---|---|---|---|
| Common | [#] | $[X] / No par | Articles of Incorporation, §[X] |
| Preferred | [#] | $[X] / No par | Articles of Incorporation, §[X] |

### 3. Stock Ledger Table

| Cert. No. | Date Issued | Shareholder | Shares | Class | Consideration | Transfer / Notes |
|---|---|---|---|---|---|---|
| 001 | [Date] | [Full legal name] | [#] | Common | $[X] cash / [desc] | - |

- Number certificates sequentially from **001**
- Flag gaps or inconsistencies in uploaded records, Cancelled certificates: "CANCELLED - [date], replaced by Cert. No. [X]"

### 4. Stock Certificate Template

Each certificate must include:

- [ ] Certificate number matching ledger
- [ ] Corporation legal name and state of incorporation
- [ ] Shareholder legal name and address
- [ ] Share count in **numerals and words** ("100 - One Hundred shares")
- [ ] Class of stock and date of issuance
- [ ] Statement: *"Subject to the Corporation's Bylaws and any applicable Shareholder Agreement"*
- [ ] Corporate seal space or "Corporate Seal" notation
- [ ] Signature lines: **President/CEO** + **Secretary** with printed name and title

### 5. Transfer Procedure Block

> **To transfer shares:** (1) Surrendering shareholder endorses original certificate or executes a stock power/assignment, (2) delivers endorsed certificate and documentation to corporation, (3) corporation cancels old certificate, issues new, and updates ledger. Transfer restrictions in any shareholders' agreement or bylaws must be satisfied before recording.

### 6. Officer Certification

> *"The undersigned officers of [Corporation Name] hereby certify that the foregoing Stock Ledger accurately reflects all issuances and transfers of the corporation's capital stock as of [date]."*

Signature lines: President/CEO and Secretary, with printed name, title, and date.

## Checks and Pitfalls

- **State variance**: Certificate and ledger requirements vary by state, confirm state of incorporation and compliance with applicable Business Corporation Act
- **Securities legend**: Add restricted securities legend if applicable (e.g., §4(a)(2) exemption): *"These securities have not been registered under the Securities Act of 1933..."* - mark `[VERIFY]` for counsel review
- **S-corp**: Flag S-corp status; only eligible shareholders may hold shares, with restrictions on number and type
- **Multiple classes**: Distinguish classes in both ledger and certificates; reflect rights and preferences from articles
- **Inspection rights**: Shareholders have statutory inspection rights in most states, exclude confidential side letters from main ledger
- **Records location**: Ledger must be maintained at principal office or registered agent per state business corporation act

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
