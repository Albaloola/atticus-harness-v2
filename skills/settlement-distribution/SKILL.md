---
name: settlement-distribution
language: en
description: Drafts settlement distribution statements for personal injury cases with itemized accounting of gross proceeds, attorney fees, litigation costs, lien satisfactions, and net client payout. Enforces trust accounting compliance and reconciliation checks per Rules of Professional Conduct. Use when closing a PI matter, preparing disbursement sheets, or generating final case accounting. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Settlement Distribution Statement

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

Produces the final financial accounting of PI settlement proceeds, gross recovery through all deductions to net client payout, for client delivery, trust accounting compliance, and regulatory review.

## Prerequisites

Gather before drafting:

- Executed settlement agreement (gross amount, allocation terms)
- Fee agreement (contingency %, sliding scales, caps, cost-advancement terms)
- Litigation cost ledger (date, vendor, description, amount per item)
- Lien resolution summary (original claim, negotiated amount, payment instructions per lienholder)
- Trust account confirmation (funds cleared and available)
- Client payment instructions (delivery method, split directions)

## Distribution Table Template

```
SETTLEMENT DISTRIBUTION STATEMENT
Matter: [Client Name] v. [Defendant(s)]
Matter No.: [#]
Date of Settlement: [Date]
Date of Statement: [Date]

ITEM                                          AMOUNT
─────────────────────────────────────────────────────
Gross Settlement Proceeds                 $__________

DEDUCTIONS:
  Attorney's Fees ([__]% per Fee Agreement
    dated [Date], ¶[__])                 ($__________)
  Litigation Costs (see Exhibit A)       ($__________)

  Lien Satisfactions:
    [Provider 1] - [type]               ($__________)
    [Provider 2] - [type]               ($__________)
  Subtotal Liens                         ($__________)

  Other Deductions:
    [Co-counsel referral / case funding] ($__________)

TOTAL DEDUCTIONS                         ($__________)
                                          ───────────
NET TO CLIENT                             $__________
═════════════════════════════════════════════════════
```

### Exhibit A, Litigation Costs

| Date | Vendor/Payee | Description | Amount |
|------|-------------|-------------|--------|
| | | | |
| | | **Total Costs** | **$____** |

## Output Format

Formal letter on firm letterhead addressed to client (full legal name, current address).

| Section | Content |
|---|---|
| **Opening** | Acknowledge resolution, transition to financial accounting (2-3 sentences) |
| **Distribution Table** | Completed template above |
| **Payment Details** | Check number/wire confirmation, delivery method, expected date |
| **Attachments** | Cost breakdown, lien satisfaction letters, fee agreement excerpts |

## Workflow

```
- [ ] Extract gross amount, fee terms, all costs, and all liens from source documents
- [ ] Calculate attorney fees per fee agreement (verify %, base, caps, sliding scales)
- [ ] Sum all deductions; compute net to client
- [ ] Reconcile: Gross = Total Deductions + Net to Client (must balance to the penny)
- [ ] Draft statement using template
- [ ] Attach cost breakdown, lien satisfaction letters, fee agreement excerpts
- [ ] Include payment delivery details (check #, wire confirmation, dates)
- [ ] Verify no bracketed placeholders remain in final output
```

## Critical Checks

- **Reconciliation is mandatory** - flag any discrepancy before finalizing; every dollar must be accounted for
- **Lien completeness** - cross-check every lien from resolution summary appears in statement; a missing lien exposes client to future liability
- **Fee agreement fidelity** - apply the exact contracted percentage/rate; honor all caps, sliding scales, and special provisions
- **Plain language** - avoid jargon the client won't understand; add brief context for each line item
- **Ethical compliance** - satisfy Rules of Professional Conduct re: client property (Model Rule 1.15), trust accounting, and fee transparency
- **Tax awareness** - flag structured or allocated amounts the client should discuss with a tax professional; do not provide tax advice
- **Confidentiality** - if delivered electronically, note document should be encrypted with password communicated separately
- **Retention** - flag for archival per firm policy for applicable statute of limitations plus professional responsibility retention period

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
