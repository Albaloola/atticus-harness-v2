---
name: guaranty-unlimited
language: en
description: Drafts a U.S. Unlimited Guaranty for commercial lending transactions. Triggers when user needs an uncapped personal or entity guaranty, credit enhancement, or unlimited recourse instrument for a loan closing. Produces an absolute guaranty of payment (not collection) with comprehensive waivers, subrogation subordination, and continuing-guaranty coverage. [Atticus UK/Scots refined]
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Unlimited Guaranty

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

Generates a complete Unlimited Guaranty giving the Lender direct, uncapped recourse against a Guarantor for all present and future Borrower obligations.

## Quick Start

Collect before drafting:

1. **Credit documents** - loan agreement, note, or facility defining the guaranteed Obligations
2. **Parties** - full legal names of Guarantor, Borrower, and Lender
3. **Guarantor type** - individual or entity (drives signature block and authority recitals)
4. **Financial reporting** - whether Lender requires ongoing financials from Guarantor

## Document Sections

| # | Section | Key Content |
|---|---------|-------------|
| 1 | Definitions | Obligations (all present/future amounts), Credit Documents, parties |
| 2 | Guaranty of Payment | Absolute, unconditional; payment not collection, Lender may proceed directly against Guarantor |
| 3 | Unlimited Liability | No cap; covers principal, interest, fees, costs, expenses, indemnities |
| 4 | Waivers | Full checklist below |
| 5 | Subrogation & Reimbursement | Subordinated/waived until indefeasible payment in full |
| 6 | Continuing Guaranty | Survives modifications, renewals, extensions; covers post-execution obligations |
| 7 | Financial Covenants *(if required)* | Annual financials, MAC notice, other reporting |
| 8 | Governing Law & Jurisdiction | Match underlying loan documents |
| 9 | Jury Trial Waiver | Standard commercial waiver |
| 10 | Signature Block | Individual: name + date; Entity: officer title + authority recital |

### Required Waivers (Section 4)

Guarantor must waive all of the following:

- Presentment, demand for payment, protest, notice of dishonor, Notice of acceptance of Guaranty, Notice of creation or incurrence of new Obligations, Notice of any Borrower or Lender action or inaction, Right to require Lender to proceed first against Borrower or exhaust collateral, Defense based on modification, extension, renewal, or amendment of Obligations, All suretyship defenses (collateral impairment, co-guarantor release, etc.)
- Right to require marshaling of assets

### Subrogation Language (Section 5)

> Until all Obligations are indefeasibly paid in full and all Lender commitments are terminated, Guarantor waives and subordinates: (i) any subrogation right to Lender's claims against Borrower; (ii) any reimbursement or indemnity right from Borrower; and (iii) any right to participate in Lender-held security.

## Pitfalls & Checks

- **Payment not collection** - Section 2 must expressly allow Lender to proceed against Guarantor without exhausting Borrower remedies or collateral
- **"Indefeasibly paid in full"** - always use this phrase, not merely "paid in full," to protect against bankruptcy preference/clawback
- **Governing law** - must match the underlying loan documents' choice of law and forum
- **Entity authority** - for entity Guarantors, include officer certificate or board resolution recital if Lender requires
- **Continuing guaranty** - confirm language covers obligations arising after execution
- **[VERIFY]** US jurisdiction only; state suretyship statutes may impose additional requirements
- **[VERIFY]** Anti-deficiency statutes (CA, AZ, others) may limit enforceability of certain waivers, flag for attorney review

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
