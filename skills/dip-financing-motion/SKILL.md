---
name: dip-financing-motion
language: en
description: Drafts U.S. bankruptcy DIP financing motions under 11 U.S.C. §§ 361-364, including superpriority claims, priming liens, and adequate protection. [SCOTS] For equivalent UK/Scottish procedures, see Scotland/UK Adaptation section below. Use when preparing a DIP financing motion, Section 364(c)/(d) motion, priming lien motion, or emergency post-petition financing request. [Atticus UK/Scots refined]
tags:
- SCOTS, motion, litigation, bankruptcy, insolvency, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# DIP Financing Motion

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

Drafts a court-ready motion seeking approval of post-petition financing under the Bankruptcy Code.

[SCOTS: Note] This skill is specific to US Chapter 11 debtor-in-possession financing under the US Bankruptcy Code. Scots/UK insolvency law does not have an exact equivalent. UK administration is the closest procedure but uses IP-led financing rather than DIP financing. See the Scotland/UK Adaptation section for guidance.

## Prerequisites

Gather before drafting:

1. **Caption**: court, district, case number, debtor name(s), chapter, judge, hearing date/time
2. **Facility terms**: lender, size, pricing, maturity, draw conditions, covenants, milestones, defaults
3. **Budget**: 13-week cash flow forecast and sources/uses
4. **Capital structure**: existing secured debt, lien priorities, collateral description, cash collateral status
5. **Adequate protection**: proposed replacement liens, cash payments, equity cushion, reporting
6. **Financing process**: marketing efforts, alternatives considered, why unsecured credit is unavailable
7. **Exhibits**: term sheet or credit agreement, budget, declaration(s), proposed order
8. **Local rules**: judge-specific procedures for emergency relief, notice, and service

## Motion Structure

```
I.    Preliminary Statement / Relief Sought
II.   Jurisdiction, Venue, and Statutory Authority
III.  Background and Need for Financing
IV.   Terms of Proposed DIP Facility
V.    Adequate Protection for Prepetition Secured Parties
VI.   Legal Standard and Argument
VII.  Notice and Hearing
VIII. Conclusion
```

## Relief Sought Matrix

| Relief | Statute | Required Showing | Evidence |
|---|---|---|---|
| Superpriority admin expense | § 364(c)(1) | Unsecured credit unavailable under § 503(b)(1); reasonable terms | Process declaration; term sheet |
| Lien on unencumbered property | § 364(c)(2) | Same + identify unencumbered collateral | Collateral schedule; lien analysis |
| Junior lien on encumbered property | § 364(c)(3) | Same + priority structure | UCC/lien summary; intercreditor terms |
| Priming lien | § 364(d) | Cannot obtain credit otherwise; adequate protection of existing lienholders | Adequate protection package; valuation |

## Required Findings

- [ ] Debtor cannot obtain unsecured credit under § 503(b)(1)
- [ ] DIP terms are fair, reasonable, arm's-length, and in the estate's best interests
- [ ] Adequate protection for existing secured creditors (if primed or subordinated)
- [ ] Financing necessary to preserve going-concern value

## Adequate Protection Tools

| Tool | When Used | Data Needed |
|---|---|---|
| Replacement liens | Collateral base stability | Collateral description; lien order |
| Periodic cash payments | Cash collateral use or priming | Budget items; payment schedule |
| Equity cushion | Oversecured collateral | Valuation support |
| Reporting package | Ongoing monitoring | KPI and variance format |
| Carve-out | Professional fees | Amount; beneficiaries |

## Exhibits

- DIP credit agreement or term sheet
- 13-week cash flow forecast, CFO/CRO/financial advisor declaration(s)
- Proposed order, Lien and capital structure summary

## Proposed Order Checklist

- [ ] Facility size and use of proceeds
- [ ] Authorized liens and priorities
- [ ] Adequate protection terms
- [ ] Reporting, milestones, and default remedies
- [ ] Final hearing scheduling / interim relief
- [ ] Service and notice findings

## Pitfalls

- **Priming liens**: do not request unless adequate protection record is concrete and documented.
- **Roll-ups / cross-collateralization**: flag explicitly; provide statutory and case authority. Mark uncertain citations `[VERIFY]`.
- **Statutory references**: cite precisely for every relief request. Mark uncertain citations `[VERIFY]`.
- **Factual assertions**: tie every claim to a declaration or exhibit.
- **Local rules**: verify judge-specific emergency relief standards and notice requirements before filing.

## Scotland/UK Adaptation

**Status**: Partial, US Bankruptcy Code specific; general methodology transfers.

### UK Equivalent Procedure

DIP financing does not exist as such under UK/Scots insolvency law. The closest equivalent is **administration** (Schedule B1, Insolvency Act 1986), where an administrator (licensed insolvency practitioner) manages the company. Key differences:

| US Chapter 11 | UK Administration |
|---|---|
| Debtor remains in possession (DIP) | Administrator takes control from directors |
| DIP financing with superpriority | Administrator arranges funding from existing lenders or new lenders as expense of administration |
| Court approves DIP facility | Administrator may borrow without court approval if within powers |
| Priming liens under § 364(d) | No direct equivalent, administrator's borrowing ranks as administration expense |
| Adequate protection required | No formal adequate protection regime |

### UK Superpriority / Rescue Financing

- In a **Company Voluntary Arrangement (CVA)**: financing terms are part of the proposal approved by creditors.
- In **administration**: the administrator's borrowings rank ahead of pre-administration creditors as an expense of the administration (Rule 3.52, Insolvency (England and Wales) Rules 2016; and equivalent Scottish Rules).
- **Scottish administration** differs in procedure (Act of Sederunt etc.) but the financing principles are similar.

### Statutory References (UK/Scotland)

| US Statute | UK Equivalent |
|---|---|
| 11 U.S.C. § 361-364 | Schedule B1, Insolvency Act 1986 (administration); Insolvency (Scotland) Rules |
| 11 U.S.C. § 503(b)(1) | Administration expenses, IR 2016 r.3.51-3.52 (or Scottish equivalent) |
| UCC Article 9 | Register of Charges (Companies House) |
| No direct DIP equivalent | Rescue finance through administration / CVA |

### Forms

- See `scots-forms/` directory for UK insolvency forms (statutory demand SD1, administration guidance)
- [SCOTS: Note] No Scottish-specific DIP financing form exists; the skill's methodology for structuring a financing request and supporting evidence transfers to an administrator's funding application

### Changes for UK/Scottish Use

1. Replace "Bankruptcy Code" with "Insolvency Act 1986" / "Schedule B1"
2. Replace "debtor-in-possession" with "administrator"
3. Replace "superpriority administrative expense" with "administration expense" or "expense of the administration"
4. Remove priming lien framework (no direct equivalent)
5. Replace UCC references with Companies House Register of Charges (s.859A Companies Act 2006)
6. Replace federal court caption with Sheriff Court / Court of Session format
7. Add reference to Statement of Insolvency Practice (SIPs) where relevant
8. Replace adequate protection analysis with analysis of administrators' borrowing powers and lender risk

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
