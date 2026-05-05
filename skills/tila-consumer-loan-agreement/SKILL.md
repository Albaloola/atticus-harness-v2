---
name: tila-consumer-loan-agreement
language: en
description: 'Drafts consumer loan agreements with integrated UK Consumer Credit Act 1974 disclosures, including pre-contract credit information (SECCI), APR and total charge for credit calculations, payment schedule formatting, prepayment/default/enforcement clauses, guarantor notices, and FCA Consumer Credit sourcebook (CONC) overlays. Produces an execution-ready contract and disclosure package. Trigger keywords: consumer loan agreement, Consumer Credit Act 1974, FCA, CONC, APR disclosure, total charge for credit, loan contract drafting, regulated credit agreement, SECCI, pre-contract information. [Atticus UK/Scots refined]'
tags:
- SCOTS [SCOTS]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
metadata:
  author: casemark
  practice_areas:
  - Transactional
  document_types:
  - Agreement
  skill_modes:
  - Drafting
  - Regulatory
---

# Consumer Credit Act-Compliant Loan Agreement (UK/Scotland Adaptation)

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

Drafts a UK consumer credit contract with integrated CCA 1974 and FCA CONC disclosures, ready for borrower execution and enforcement review.

## Prerequisites

1. **Parties & jurisdiction** - borrower/lender legal names, addresses, FCA authorisation status (consumer credit permission), licensing requirements.
2. **Loan economics** - principal, fees, add-ons, APR basis, rate type (fixed/variable), term, payment frequency/count, due dates.
3. **Regulatory classification** - consumer status confirmed under CCA 1974 s.8; regulated credit agreement (not exempt business/commercial); FCA Consumer Credit sourcebook (CONC) rate/fee caps and required notices.
4. **Collateral** - unsecured vs. secured; if secured: collateral description, heritable security (standard security over land in Scotland), insurance requirements.
5. **Credit parties** - co-borrowers, guarantors (Consumer Credit Act s.105 requirements), Armed Forces status for applicable protections.
6. **Remedy terms** - acceleration triggers, default interest caps, cure rights, repossession method (Consumer Credit Act s.87 to 93 default notices, s.141 jurisdiction rules for Scotland).

## Output Structure / Process

### 1) Extract and validate inputs

Reject contradictions before drafting (e.g., finance charge inconsistent with APR or payment totals).

| Field | Format | Validation |
|---|---|---|
| Lender legal name | Entity name | Match FCA permissions / CONC register |
| Borrower legal name(s) | Full legal names | Match ID docs |
| Loan amount | Currency, 2-decimal | - |
| Rate type | APR %, fixed/variable | APR must reconcile to total charge for credit |
| Term | Months or schedule dates | Payments × cadence must align |
| Fees as total charge for credit | Currency | Include only CCA s.20-qualifying charges |
| Payment schedule | Table or formula | Sum = Total Amount Payable |
| Jurisdiction | Scotland/England/Wales/NI | Apply consumer credit jurisdiction rules (CCA s.141) |

### 2) Build CCA 1974 Pre-Contract Disclosure (SECCI)

Provide Standard European Consumer Credit Information (SECCI) **before** contract terms, as a separate document. Use the prescribed SECCI form (Consumer Credit (Information) Regulations 2010).

| SECCI Field | Value |
|---|---|
| Lender identity and contact | FCA FRN, registered address |
| Amount of Credit | Principal available to borrower, net of excluded items |
| Total Charge for Credit | Cost of credit per CCA s.20 `[VERIFY]` |
| APR | Computed per Consumer Credit (Total Charge for Credit) Regulations 2010 |
| Total Amount Payable | Amount of Credit + Total Charge for Credit + verified fees |
| Payment Schedule | Table showing dates, amounts, frequency |
| Rate of Interest (fixed/variable) | Specify type and reference rate |
| Other charges | Itemised fees not in TCC |
| Right of withdrawal | 14-day cooling-off period (CCA s.66A) |
| Early repayment rights | Compensation cap per CCA s.95A |
| Guarantor / Security | If applicable |

**Disclosure math rules:**
- Payment schedule must reconcile exactly to Total Amount Payable within tolerance, If early repayment, compensation limited to 1% of amount repaid (CCA s.95A)
- APR must be calculated using the EU-standardised formula per the 2010 Regulations `[VERIFY]`

### 3) Draft contract body

Draft in this sequence:

1. Intro / parties / recitals
2. Core promise, credit extended, repayment obligation, SECCI incorporation
3. Payment terms, schedule, frequency, amounts
4. Early repayment, compensation capped per CCA s.95A
5. Late charges, amount/method/cap, no compounding default, subject to CONC 6.7
6. Default, events (including CCA s.87 default notice requirements), cure period, notice method
7. Security clause (if secured: standard security in Scotland) or unsecured limitation statement

### 4) Apply conditional modules

| Module | Include when |
|---|---|
| Secured collateral package | Standard security (heritable) / other collateral granted |
| Unsecured limitation statement | No collateral |
| Guarantor provisions | Third-party guarantee (CCA s.105 formalities) |
| Force-placed insurance | Borrower must maintain coverage |
| Armed Forces protections | Where applicable under UK service law |
| CCA guarantor notice | Guarantor not receiving proceeds |

### 5) Generate execution package

- SECCI document (separate, signed by borrower, CCA s.61A requirement)
- Signed agreement copy (regulated agreement document per CCA s.61)
- Borrower acknowledgment confirming receipt of complete agreement and SECCI, Signature block for each borrower / co-borrower / guarantor, Lender authorised signatory block (name / title / date)

### 6) Final consistency pass

- Reconcile every pound and percentage across disclosure and operative clauses, Verify UK/Scottish overlays:

| Check | Detail |
|---|---|
| Interest/default late fee caps | CCA / CONC statutory limits |
| Early repayment compensation | CCA s.95A 1% cap |
| Default notice / repossession | CCA ss.87 to 93 (14-day cure) |
| Unfair relationships test | CCA s.140A to 140D (court discretion) |
| Time orders | CCA s.129 protection |
| Scotland jurisdiction | CCA s.141: sheriff court for regulated agreements |

- Confirm all prescribed notices present and conspicuous

## Guidelines

1. Keep SECCI and agreement wording consistent with the Consumer Credit (Agreements) Regulations 1983 - do not paraphrase statutory content.
2. Operative clauses must not override pre-contract disclosures; define priority order explicitly.
3. Never include hidden fees, non-itemised charges, or unilateral variation rights without disclosure.
4. Late fees must reflect CONC 6.7 lawful caps, never structure as penalties (unfair relationships risk).
5. Do not omit CCA-mandated default notice and cure periods.
6. Flag unverifiable jurisdictional assumptions; request confirmatory input before finalising.
7. Mark uncertain tolerances or wording with `[VERIFY]`.

---

**Key changes from the original (Scots adaptation):**
- US TILA/Reg Z replaced with UK Consumer Credit Act 1974 / FCA CONC sourcebook, SECCI pre-contract information replaces TILA disclosure box, SCRA notice replaced with UK Armed Forces protections where applicable, State-law overlays replaced with UK jurisdiction rules and Scottish sheriff court provisions, US dollar amounts and state jurisdictions replaced with GBP and UK/Scotland framework, Co-signer provisions updated to CCA s.105 guarantor formalities, Unfair relationships test (CCA ss.140A to 140D) added as key UK regulatory feature, SECCI form requirements under Consumer Credit (Information) Regulations 2010
- APR calculation methodology updated to EU-standardised formula

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
