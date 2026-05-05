---
name: equity-financing-term-sheet
language: en
description: 'Drafts a U.S. venture equity term sheet from deal facts into a negotiation-ready, investor-grade document. Use when counsel or founders need a structured term sheet covering pricing, capitalization, liquidation preferences, anti-dilution, governance, investor protections, transfer/registration rights, and closing mechanics. Trigger: term sheet, equity financing, venture capital, series preferred, pre-money valuation, liquidation preference, pro rata, ROFR, co-sale, registration rights. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Equity Financing Term Sheet

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

Produces a complete US venture equity term sheet with minimal placeholders and consistency controls for follow-on definitive agreements. Assumes US corporate law (typically Delaware) unless stated otherwise.

## Quick Start

Gather before drafting:

1. Company legal name and incorporation jurisdiction
2. Round metadata, series name, lead investor, raise amount, valuation inputs
3. Pre-financing cap table, common, preferred, options, warrants, convertibles, reserved pool
4. Governance baseline, board size, nominee rights, voting structure
5. Commercial boundaries, liquidation preference cap, anti-dilution type, board control limits
6. Existing charter, bylaws, and prior financing agreements

Mark anything unavailable as `{{placeholder to complete from evidence/instructions: field name}}`.

## Core Workflow

### 1. Intake Validation

Map each input to its output section and flag gaps:

| Input | Drives | If Missing |
|---|---|---|
| Company / jurisdiction | Header, governing law | `{{placeholder to complete from evidence/instructions}}` |
| Valuation / share price | Economics, ownership math | Flag, draft incomplete |
| Cap table | Dilution impact, conversion basis | Generate skeleton with placeholders |
| Rights matrix | Governance, protections | Insert defaults, mark for review |
| Closing preconditions | Conditions precedent, definitive docs list | List required docs by name |

### 2. Draft (Hard Section Order)

1. Header, non-binding notice, date, parties, round summary
2. Definitions, Binding Provisions, Major Investor, Fully Diluted Capitalization, Registrable Securities, Qualified IPO
3. Economics, security type, OIP, pre/post FD basis, price per share formula
4. Preferred stock rights, dividends, liquidation preference, conversion, anti-dilution
5. Governance, board allocation, observer rights, protective provisions
6. Investor rights, information, inspection, registration (demand/piggyback)
7. Transfer and liquidity, ROFR, co-sale, pro-rata, exceptions
8. Closing mechanics, diligence, required agreements, conditions, timeline
9. Binding provisions, confidentiality, exclusivity, expense reimbursement, governing law, forum
10. Signature block

### 3. Validation Pass

- [ ] Every defined term used consistently across clauses and tables
- [ ] All numeric variables resolve or carry explicit `{{placeholder to complete from evidence/instructions}}`
- [ ] Binding vs non-binding sections clearly separated under distinct headings
- [ ] Each economic right cross-referenced to its governance and transfer effects

## Key Formulas

```
Price Per Share = Pre-Money Valuation / Pre-Money Fully Diluted Shares

Ownership % (post-close) = Shares Held / Total Post-Financing FD Shares
```

**Liquidation preference:**
- Non-participating, greater of preference or as-converted value, Participating, preference + pro-rata on residuals (state cap if any)

**Weighted-average anti-dilution:**
```
Adjusted CP = Old CP × (A + B) / (A + C)
  A = FD shares pre-issuance (broad or narrow basis)
  B = consideration received / Old CP
  C = new shares issued at lower price
```

## Mandatory Clauses Checklist

| Category | Minimum Content |
|---|---|
| Deal Identity | Date, parties, round, amount, currency, pre-money basis |
| Economics | Valuation inputs, conversion ratio, price-per-share formula |
| Preferences | Dividends, liquidation preference, conversion trigger, anti-dilution |
| Governance | Board allocation, observer terms, protective provisions |
| Investor Rights | Information, inspection, registration demand/piggyback |
| Liquidity Controls | ROFR, co-sale, pro-rata, exceptions |
| Closing | Diligence standards, required agreements, conditions, timeline |
| Enforceability | Binding carve-out, non-binding statement, survival, governing law |

## Assembly Rules

- Isolate binding clauses (confidentiality, exclusivity, expenses, law/forum) in their own section.
- Use exact thresholds, specific day-counts and percentage figures, not approximations.
- Reference each protection in both its definition and operative clause.
- Include closing conditions and list required definitive documents by name.
- Add termination-and-survival paragraph aligned to transaction stage.
- Attach exhibit placeholders for cap table and schedule of rights.

## Pitfalls

- **Mixed anti-dilution bases** - never combine broad-based and narrow-based results without explicit branch language.
- **Incomplete economics** - every unresolved economic field must carry a `{{placeholder to complete from evidence/instructions}}` marker; never present partial math as final.
- **Prose-only math** - always provide formulas alongside any valuation or ownership narrative.
- **Registration promises** - never state filing timelines or outcomes without `[VERIFY]` flag for counsel confirmation.
- **Non-US assumptions** - default to US law; do not imply foreign corporate law applies unless specified.
- **Securities compliance** - flag Rule 144 / resale language and federal securities implications with `[VERIFY]` before release.
- **Confidentiality carve-outs** - ensure survival terms are compatible with legal and advisor carve-out requirements.

**Key changes from original:** Removed `tags` (not in spec), trimmed 10-item prerequisites into 6-item Quick Start, collapsed the verbose intake table and templates into streamlined workflow steps, merged Do/Don't/Jurisdiction sections into a single Pitfalls list, eliminated redundant template blocks (the section order itself serves as the template), and preserved all domain-critical formulas and clause requirements. Reduced from 160 lines to ~100 while retaining full legal coverage.

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
