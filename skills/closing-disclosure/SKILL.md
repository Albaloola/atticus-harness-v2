---
name: closing-disclosure
language: en
description: Drafts and reviews TRID-compliant U.S. residential Closing Disclosures, assembling all five pages of CFPB Form H-25, comparing to Loan Estimates, classifying tolerance buckets, flagging re-disclosure triggers, and producing a compliance review memo. Use when working with closing disclosures, CDs, TRID, Regulation Z, LE comparison, tolerance cures, cash-to-close reconciliation, settlement statements, or pre-consummation closing compliance review. Defers tolerance math to closing-disclosure-tolerance and timing math to closing-disclosure-timing-reference. [Atticus UK/Scots refined]
tags:
- SCOTS, transactional, regulatory, drafting, analysis, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Closing Disclosure

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

Produce a complete five-page Closing Disclosure per CFPB Form H-25 and a compliance review memo. The skill describes the *work*; specialized math and timing rules live in dedicated sibling skills.

---

## Related skills

- `closing-disclosure-tolerance` - full TRID tolerance bucket math (zero / 10% cumulative / unlimited), changed-circumstance gating, cure calculation. **Defer here for tolerance computations.**
- `closing-disclosure-timing-reference` - 3-business-day waiting period rules, deemed-receipt math, federal-holiday exclusion. **Defer here for timing computations.**
- `cd-tolerance-reference` and `trid-tolerance` - supporting reference material on tolerance edge cases.
- `alta-settlement-statement` - when the deal also produces an ALTA Settlement Statement (cash, commercial, certain assumptions); reconcile both.
- `closing-checklist` and `ma-closing-checklist` - broader pre-closing deliverables; the CD plugs into these.
- `loan-modification-agreement` - when the matter is a modification rather than a purchase or refinance.
- `seller-disclosure`, `title-commitment` - companion documents commonly in scope when reviewing the file.

---

## Checkpoint A: pre-draft intake (mandatory)

Confirm before drafting or reviewing:

1. **Role.** Lender, settlement agent, borrower's counsel, seller's counsel, the deliverable shape differs by role. Attorney roles produce an issue list and client summary, not a lender-signed CD.
2. **Deal type.** Purchase / refinance / construction-perm / assumption / modification. TRID coverage and CD requirements vary.
3. **State.** Pulls in state overlays (transfer taxes, attorney-closing rules, doc stamps). See `references/STATE-OVERLAYS.md`.
4. **Loan Estimate(s).** All LEs issued, with issue dates. The most recent valid LE is the comparison baseline.
5. **Closing timeline.** Rate-lock date and expiration, intended consummation date, CD issue/delivery dates.
6. **Source documents.** Title commitment, payoff letters, insurance binder, tax bill, HOA estoppel (if applicable), survey (if required).
7. **Jurisdiction-specific overlays.** State and county-level disclosures, fee structures, and attorney involvement rules.

If any of items 4 to 6 is unavailable, do not finalize, produce a partial draft with `MISSING` markers and surface the gaps in the review memo.

---

## The loop

**1. Page-by-page data intake.** Walk all five pages of Form H-25, populating each field from source documents. Flag missing fields as `MISSING`. The complete page-by-page checklist is in `references/CD-PAGES.md`.

**2. LE comparison.** The most recent valid LE is the baseline. For each fee on the CD, identify the corresponding LE line, classify into the appropriate tolerance bucket, and compute variance. **Defer all tolerance math to `closing-disclosure-tolerance`** - its workflow covers fee classification, zero/10%/unlimited testing, changed-circumstance gating, and cure calculation.

A one-paragraph orientation:

| Bucket | Rule | Typical items |
|---|---|---|
| Zero tolerance | No increase over LE without valid changed-circumstance reset | Lender/broker fees, transfer taxes, non-shoppable services, affiliate services |
| 10% cumulative | Aggregate increase ≤ 10% across the bucket | Recording fees; shoppable services from lender's list |
| Unlimited | May change if good faith | Prepaids, escrow, services from non-list providers, owner's title |

**3. Re-disclosure triggers.** A new 3-business-day waiting period before consummation is required if any of:

- APR increases > 0.125% (fixed-rate) or > 0.25% (ARM)
- Loan product changes (fixed/ARM, term, IO, neg-am)
- Prepayment penalty added

**Defer to `closing-disclosure-timing-reference`** for the full business-day counting rules, deemed-receipt computation, and federal-holiday list.

**4. State overlays.** Apply the state-specific overlay items from `references/STATE-OVERLAYS.md`. Out-of-table states get a "local-counsel review recommended" note.

**5. Cross-document reconciliation.** Cash-to-close, payoffs, recording fees, escrows, and APR/TIP each must reconcile against another document in the file. See `references/CD-PAGES.md` "Cross-document reconciliation" for the specific pairings.

**6. Produce deliverables.**

- **Lender/settlement-agent role:** the finalized CD plus a short reviewer's note attaching the LE comparison, tolerance findings, re-disclosure analysis, and any state overlay flags.
- **Attorney role:** a compliance review memo (no lender-signed CD). The example in `assets/examples/cd-review-memo.md` shows the shape.

---

## Checkpoint B: post-draft alignment (mandatory)

Before delivering:

1. Tolerance violations: cured (with `closing-disclosure-tolerance` cure-amount methodology) or explicitly flagged as outstanding for the responsible party?
2. Re-disclosure window: required, and if so, honored? Earliest consummation date stated explicitly?
3. State overlays: applied; any out-of-table state flagged for local-counsel review?
4. Cash-to-close: reconciles against transaction summary, payoffs, and wire instructions?
5. APR/TIP: reconciles against truth-in-lending math?
6. Attorney review: required before signing where role is non-lender?

---

## What this skill does not do

- It does not value the deal or opine on loan terms. Tolerance and timing are mechanical; pricing is between borrower and lender.
- It does not resolve title issues. It identifies them on Page 3 / Page K and routes to `title-commitment`.
- It does not replace attorney review when the role is borrower's or seller's counsel. Always label the deliverable AI-generated and require sign-off.

---

## Quality checklist

- [ ] All five pages of Form H-25 populated; missing fields explicitly marked `MISSING`
- [ ] LE comparison baseline is the most recent **valid** LE
- [ ] Tolerance review run via `closing-disclosure-tolerance` methodology; cure amount stated where applicable
- [ ] Re-disclosure trigger analyzed; if triggered, earliest consummation date stated
- [ ] State overlay items applied (or out-of-table state flagged)
- [ ] Cash-to-close reconciles to transaction summary and payoffs
- [ ] APR / TIP reconcile to truth-in-lending math
- [ ] Memo labels itself AI-generated and requires attorney/closer review

---

## Troubleshooting

- **No prior LE in the file.** Cannot complete the LE-CD comparison. Surface as a Critical flag; do not proceed past Step 2 without the LE or a valid changed-circumstance record establishing why no LE exists.
- **Multiple LEs and the agent is unsure which is the baseline.** The baseline is the most recent LE that was either (a) the original LE for an unchanged product or (b) a revised LE issued under a valid changed-circumstance trigger within the timing window. See `closing-disclosure-tolerance` for the changed-circumstance gate; if unresolvable from the record, treat the earliest LE as baseline and flag the ambiguity.
- **Tolerance violation discovered post-consummation.** Cure deadline is 60 calendar days after consummation per 12 CFR 1026.19(f)(2)(v) `[VERIFY]`. Produce a corrected CD or itemized cure disclosure; document the cure method (refund / escrow application / principal reduction).
- **State overlay item references a fee not in the file.** Two cases: (a) the fee was waived or doesn't apply, note "N/A" with reason; (b) the fee should appear and doesn't, flag as a Critical-tier missing line and route to settlement agent.
- **APR computation in the file does not match recomputation.** Most common cause is missing or extra finance charges. Reconcile finance-charge inclusions against 12 CFR 1026.4 `[VERIFY]`; treat divergence > 0.125% (fixed) or > 0.25% (ARM) as a redisclosure trigger.
- **Form H-25 layout differs from a state addendum.** Use Form H-25 structure as the federal floor; do not rewrite statutory disclosure text. Append the state addendum without altering H-25 layout. See `references/STATE-OVERLAYS.md`.

---

## Citations

- 12 CFR 1026.38 - CD form requirements (Form H-25) `[VERIFY]`
- 12 CFR 1026.19(e)(3) - LE good-faith determination `[VERIFY]`
- 12 CFR 1026.19(f) - CD timing and delivery `[VERIFY]`
- 12 CFR 1026.19(f)(2)(v) - Excess refund / cure deadline `[VERIFY]`
- TILA, RESPA, underlying authority

---

## References

- `references/CD-PAGES.md` - page-by-page intake checklist
- `references/STATE-OVERLAYS.md` - state-specific overlay items

## Assets

- `assets/examples/cd-review-memo.md` - finished compliance review memo for a synthetic purchase-money first-lien deal

---

## Scotland/UK Adaptation

### No Direct US Equivalent

The US Closing Disclosure (CFPB Form H-25 / TRID / TILA-RESPA) has **no direct equivalent** in Scottish residential conveyancing. The Scottish property purchase process is fundamentally different.

| US Concept | Scottish Equivalent |
|---|---|
| Closing Disclosure (CD) | **Settlement Statement** / Completion Statement (prepared by solicitor or conveyancer) |
| Loan Estimate (LE) | **Mortgage Offer** (issued by lender, prescribed format) |
| CFPB (Consumer Financial Protection Bureau) | **FCA** (Financial Conduct Authority) - mortgage conduct regulation |
| TRID (TILA-RESPA Integrated Disclosures) | **MCOB** (Mortgage Conduct of Business) rules, FCA Handbook |
| Form H-25 | No prescribed form; completion statement prepared by solicitor |
| 3-day waiting period | No statutory waiting period; missives are binding on conclusion |
| Escrow / title company | **Solicitor** acts as both conveyancer and settlement agent |

### How Scottish Property Settlement Works

1. **Missives**: Exchange of qualified acceptance letters between buyer's and seller's solicitors constitutes the binding contract. No closing date in the US sense.
2. **Settlement Date**: The date agreed in missives for completion (entry date).
3. **Completion Statement**: Prepared by buyer's solicitor setting out:
   - Purchase price
   - Loan advance from lender
   - Prior securities to be discharged
   - Stamp Duty Land Tax (SDLT) / Land and Buildings Transaction Tax (LBTT) - Scottish tax since 2015
   - Professional fees and outlays
   - Balance due or net proceeds
4. **Land Registration**: Following completion, the buyer's solicitor registers title with **Registers of Scotland** (the Land Register).

### Key Differences for Practitioners

| Feature | US TRID/CD | Scottish Equivalent |
|---|---|---|
| Disclosure regime | Pre-consummation (3 days) | Post-missives; pre-settlement |
| Standard form | CFPB Form H-25 (prescribed) | Solicitor's letter (no prescribed format) |
| Tolerance rules | Zero/10%/unlimited buckets | No direct equivalent; lender controls mortgage offer terms |
| Changed circumstances | Yes, formalised | No equivalent; renegotiation may occur prior to conclusion of missives |
| Re-disclosure triggers | Yes, APR, product, prepayment | Mortgage offer must be re-issued if terms change |
| Cure provisions | 60 days post-consummation | No equivalent; errors corrected via solicitors |
| Enforcement | CFPB / state regulators | FCA (lender), Law Society of Scotland (solicitor conduct) |

### What to Draft Instead

For Scottish residential transactions, produce:
1. **Completion Statement** - itemised settlement figures (purchase price, loan, adjustments, fees, LBTT)
2. **LBTT Return** - tax calculation and submission (Revenue Scotland)
3. **FCA Mortgage Disclosure** - MCOB-compliant disclosure (if lender-facing)
4. **Solicitor's Certificate of Title** - confirming title and pre-settlement checks

### Key Differences for Practitioners

1. **No TRID regime**: Scottish conveyancing is not governed by TILA/RESPA. The FCA's MCOB rules cover mortgage disclosure (less prescriptive).
2. **Solicitor-driven**: The solicitor handles settlement, not a title company or escrow agent.
3. **Missives are binding**: Once concluded, there is no cooling-off or rescission right (unlike the US 3-day waiting period).
4. **LBTT vs transfer taxes**: Scotland imposes Land and Buildings Transaction Tax (devolved; administered by Revenue Scotland). SDLT applies in England.
5. **No tolerance rules**: There is no US-style tolerance bucket system. Mortgage offers contain fixed terms; changes require a fresh offer.
6. **UK GDPR / data protection**: Applies to borrower data disclosure (not US state-level privacy laws).

[SCOTS: This TRID/CD skill is not directly transferable. Use only the analytical framework (itemised fee checking, source document reconciliation) for preparing Scottish completion statements. The legal disclosure regime is entirely different.]

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
