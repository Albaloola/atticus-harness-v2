---
name: closing-disclosure-tolerance
language: en
description: Applies U.S. TRID tolerance rules to compare a residential mortgage Closing Disclosure (CD) against the controlling Loan Estimate (LE). Classifies fees by tolerance bucket, validates changed-circumstance resets, computes violations, and calculates cure amounts. Use when reviewing LE-CD variance, 10% tolerance, revised LE validity, changed circumstances, tolerance cure, or pre-closing compliance QA. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Closing Disclosure Tolerance

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

Structured TRID tolerance review for U.S. residential mortgage closings under 12 CFR Part 1026. Covers fee classification, zero/10%/unlimited tolerance testing, changed-circumstance gating, and cure calculation.

## Prerequisites

- Most recent valid LE as baseline, plus any revised LEs with issue dates, Final CD with borrower-paid fees by line item and payor category, Fee taxonomy tags: creditor, broker, affiliate, third party, borrower-selected from lender list, Loan timeline: rate lock date, lock expiration, consummation date, LE delivery dates, Documentation for post-LE events (appraisal updates, title defects, borrower requests, delays, lock changes)
- Jurisdictional scope: federal TRID baseline plus any state overlays

## Core Workflow

### 1. Normalize baseline

Use the most recent valid LE as of CD generation. Ignore invalid prior LEs unless a valid revised LE was triggered.

### 2. Classify each CD fee

| Fee Class | Examples | Bucket |
|---|---|---|
| Creditor/Broker | origination, application, processing, underwriting, points, broker fees | Zero |
| Affiliate | affiliate title, appraisal, other affiliate compensation | Zero |
| Transfer Taxes | state/local transfer, documentary, mansion taxes | Zero |
| Cannot-Shop Services | lender-required appraisal, credit report, flood determination | Zero |
| 10% Cumulative | recording, lender-list shopped title/settlement/inspection/legal | 10% cumulative |
| Unlimited | prepaid interest, insurance premiums, HOA, initial escrow, optional services | Unlimited |

### 3. Zero-tolerance test

Test each zero-tolerance fee at the line-item level:

- Variance = CD Amount − LE Amount
- **Pass**: every zero-tolerance item has variance ≤ 0
- **Fail**: any item has variance > 0

### 4. Ten-percent cumulative test

Aggregate all 10%-bucket items:

- LE Total = Σ(LE amounts)
- CD Total = Σ(CD amounts)
- Limit = LE Total × 1.10
- **Pass**: CD Total ≤ Limit

Do not test 10% items individually, this is a category-total test.

### 5. Unlimited-tolerance review

Verify items are correctly categorized as unlimited. Do not auto-pass if disclosures are missing or fees are mis-tagged.

### 6. Changed-circumstance gate

| Trigger | Allows Revised LE? |
|---|---|
| Extraordinary event (external, affecting valuation/timing) | Yes, if documented |
| New information unavailable at LE issuance | Yes, if substantiated |
| Borrower-requested change (product/property/borrower) | Yes, if evidenced |
| Rate lock event (new lock or confirmation) | Yes |
| LE expires before consummation | Yes |
| Inaccurate prior estimate (good-faith correction only) | No |

**Revised LE rules:**
- Only affected fees may be revised, Must be issued within required timing windows with evidence, Recompute tolerance against revised LE for affected categories only, Flag pretext where revised LE appears to repair errors [VERIFY]

### 7. Cure calculation

Per 12 CFR 1026.19(f)(2)(v):

- Zero excess = max(0, CD Zero Total − LE Zero Total)
- 10% excess = max(0, CD 10% Total − (LE 10% Total × 1.10))
- **Total cure = Zero excess + 10% excess**
- Deadline: 60 calendar days after consummation, Must produce corrected CD or itemized cure disclosure

### 8. Final deliverable

- Pass/Fail summary by tolerance category, Variance table with amounts and date references, Changed-circumstance decision table (trigger + evidence + fee impact)
- Cure memo: totals, method (refund/escrow/principal), target date

## Common Pitfalls

| Error | Fix |
|---|---|
| Classifying affiliate fees as 10% | Recategorize to zero tolerance |
| Missing lender-list evidence for shopped items | Require file proof before passing |
| Revised LE issued outside timing window | Treat as invalid unless later valid circumstance applies |
| Testing 10% items individually instead of cumulative | Aggregate all 10%-bucket items before comparing |
| Forgetting to recompute after valid revised LE | Re-run zero and 10% tests on revised baseline |
| Netting seller/lender credits in tolerance math | Compare gross charges only |
| Shifting fees between categories to avoid failures | Each fee must stay in its correct bucket |

## Special Situations

| Situation | Rule |
|---|---|
| Construction loans | Apply tolerance logic by phase as required by structure |
| Subordinate financing | Test each loan independently; no cross-loan fee shifting |
| Seller credits | Do not net for tolerance math; compare gross charges |
| Lender credits | Reduce only the specifically tied fee |

## Cross-References

- @draft-closing-disclosure-cd-residential-real-estate
- @closing-disclosure-timing-reference
- @loan-estimate-residential
- @trid-changed-circumstances

## References

- 12 CFR 1026.19(e)(3) - Good faith determination and tolerance [VERIFY]
- 12 CFR 1026.19(e)(3)(iv) - Changed circumstances [VERIFY]
- 12 CFR 1026.19(f)(2)(v) - Excess refund requirements [VERIFY]
- CFPB Official Interpretations 19(e)(3)(i) to (vi) [VERIFY]
- CFPB TRID Small Entity Compliance Guide, Tolerance section [VERIFY]

---

**Key changes from the original:**

- **Removed `tags`** - not part of the Agent Skills spec; discovery relies on `description` keywords
- **Tightened description** - third-person, keyword-rich, within 1024 chars
- **Cut ~40% token weight** - eliminated verbose text-block worksheets, redundant prose in Guidelines/Do-Don't table, and duplicated content between sections
- **Merged Guidelines + Common Errors → Common Pitfalls** - single table, no duplication with Special Situations
- **Restructured body** - Prerequisites → Core Workflow (8 numbered steps) → Pitfalls → Special Situations → References, following the quick-start / core-patterns / pitfalls progression
- **Preserved all domain accuracy** - tolerance formulas, fee classifications, changed-circumstance triggers, cure mechanics, CFR references, and [VERIFY] markers all intact

---

## Scotland/UK Adaptation

### No US TRID Tolerance Equivalent in Scotland

The US TRID tolerance regime (zero/10%/unlimited buckets, changed-circumstance resets, 60-day cure) has **no direct equivalent** in Scottish mortgage regulation.

| US Concept | Scottish/UK Equivalent |
|---|---|
| 12 CFR 1026.19(e)(3) - good faith determination | **FCA MCOB 5** - mortgage disclosure rules; not based on tolerance buckets |
| 12 CFR 1026.19(f)(2)(v) - cure | No equivalent; complaints handled under FCA DISP (Dispute Resolution) rules |
| TRID tolerance (zero/10%/unlimited) | Mortgage offer terms; changes require lender re-approval |
| Changed circumstances (gated reset) | No equivalent; lender may withdraw/reissue offer in limited circumstances |
| CFPB Official Interpretations | **FCA Handbook** (PERG, MCOB, DISP) - regulatory guidance |

### Scottish Mortgage Lending: Fee Control

| Aspect | Scottish Position |
|---|---|
| Mortgage offer | Binding terms set out in lender's mortgage offer; changes require fresh offer |
| Interest rate | Fixed for period or variable per terms; no LE-CD disclosure sequence |
| Fees | Set out in mortgage offer and lender's tariff; reviewed by FCA for fairness |
| Early repayment charges | Regulated under MCOB 10 |
| Redress | FCA complaints procedure / Financial Ombudsman Service (FOS) |

### What to Draft Instead

For Scottish mortgage compliance review:
1. **MCOB Disclosure Compliance Check** - verify mortgage offer meets FCA conduct of business rules
2. **Completion Statement Review** - check solicitor-prepared completion statement for accuracy
3. **Fee Analysis** - compare fees in mortgage offer vs completion statement; flag discrepancies
4. **Annual Percentage Rate of Charge (APRC)** - the UK metric; not APR as defined under TILA
5. **European Standardised Information Sheet (ESIS)** - pre-MCOB disclosure (still used for some regulated mortgages)

### Key Differences for Practitioners

1. **No tolerance bucket system**: The US zero/10%/unlimited system does not exist in Scotland. Fees are either in the mortgage offer or they are not.
2. **FCA regulation**: Mortgage lending is regulated by the FCA under the Financial Services and Markets Act 2000 (FSMA). The FCA Handbook (MCOB) governs disclosure.
3. **No changed-circumstance gate**: The lender may withdraw or vary a mortgage offer in limited circumstance (e.g., property value change, borrower change) but there is no formalised changed-circumstance gate.
4. **Financial Ombudsman**: Consumer disputes go to the Financial Ombudsman Service (FOS), not to the FCA directly.
5. **Regulated Mortgage Contract (FSMA)**: Under FSMA (Regulated Activities) Order 2001, Art. 61 - definitions differ slightly from US mortgage classifications.
6. **Pre-contract disclosure**: Key Facts Illustration (KFI) / European Standardised Information Sheet (ESIS) - not Loan Estimates and Closing Disclosures.

[SCOTS: This US TRID tolerance skill has limited direct application in Scotland. The analytical approach to fee checking and variance analysis transfers, but every regulatory reference (CFR, CFPB, TRID), classification system (zero/10%/unlimited), and cure mechanism must be replaced with the FCA/MCOB framework. The skill's greatest value is the systematic methodology for fee comparison, the substance is entirely different.]

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
