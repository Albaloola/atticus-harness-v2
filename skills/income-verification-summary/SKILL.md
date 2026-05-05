---
name: income-verification-summary
language: en
description: 'Produces court-ready income verification reports from tax returns, W-2s, 1099s, and paystubs for loss-of-income claims, wage and hour disputes, and employment discrimination matters. Generates traceable multi-year wage histories, trend analysis, anomaly flags, and damage-ready financial narratives. Use during discovery or pre-trial to prove damages, establish baseline earning capacity, or support FLSA overtime calculations. Trigger keywords: income verification, wage history, W-2 analysis, earning capacity, FLSA overtime, lost wages, income loss, paystub review, tax return summary. [Atticus UK/Scots refined]'
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Income Verification Summary

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

Convert raw financial documents into a court-ready income verification report with traceable figures, trend analysis, and damage-relevant conclusions.

## Prerequisites

1. Tax returns, at least 2-4 years; note filing status changes across years
2. W-2s / 1099s, all employers and income sources for each year
3. Paystubs, full period preferred; flag if incomplete
4. Schedule C / business returns, for self-employed subjects
5. Case context, claim type (personal injury, wrongful termination, FLSA, discrimination), relevant dates, claimant role

## Output Structure / Process

### 1) Executive Summary

Narrative paragraph covering: subject's occupation, employment structure, income trajectory, and headline financial impact. Include specific dollar figures and connect income changes to documented events.

### 2) Multi-Year Income Table

| Tax Year | Filing Status | AGI | W-2 Wages | Self-Emp. Net | Other Income | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| YYYY | | | | | | |

Follow with narrative explaining inflection points and year-over-year growth rates.

### 3) Employment and Income Source Analysis

**W-2 employees:**

| Element | Detail |
| --- | --- |
| Employer / title / dates | Per W-2 and paystubs |
| Compensation breakdown | Base wage, overtime, bonuses, commissions, shift differentials |
| Hourly calculation | Rate x hours from paystubs |
| Lost non-wage benefits | Health insurance, retirement contributions |

**Self-employed:**

| Element | Detail |
| --- | --- |
| Business type | Schedule C gross receipts vs. net profit by year |
| Margin trend | Net profit margin year-over-year |
| Subcontractor costs | Flag spikes post-injury (suggests inability to self-perform) |
| Cash receipts | If no 1099 corroboration, flag for bank deposit analysis |

**All sources:** Distinguish earned income (wages, self-employment) from passive (investment, rental, disability, Social Security). Earned income drives earning-capacity damages.

### 4) Compensation Component Table (W-2 cases)

| Period | Base Wages | OT Hours/Wk | OT Pay | Bonuses | Total |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Flag if overtime or bonus payments cease at a legally significant date.

### 5) Income Trend and Pattern Analysis

- Calculate year-over-year growth rates; compare to CPI if relevant.
- Identify inflection points; correlate with documented events (injury date, termination, demotion, medical leave).
- For pre/post comparisons: state baseline period, post-event period, annual delta, and methodology.

### 6) Discrepancy and Gap Log

| Issue | Source A | Source B | Delta | Action Needed |
| --- | --- | --- | --- | --- |
| W-2 vs. paystub mismatch | $X | $Y | $Z | Obtain full-year paystubs |
| Unreported cash income | Schedule C | No 1099s | -- | Bank deposit records |

### 7) Legal Analysis (by claim type)

**Loss-of-income / personal injury:**
- State baseline earning capacity (range + methodology)
- Project forward at conservative growth rate (e.g., 3% CPI)
- Calculate annual income loss = projected minus actual; note duration

**FLSA / wage and hour:**
- Identify weeks with hours > 40 lacking OT premium, Calculate: OT hours/wk x OT premium x weeks in limitations period, Cite applicable limitations period; 29 U.S.C. section 207 [VERIFY jurisdiction-specific period]

**Employment discrimination:**
- Compare claimant raise history and salary to comparable employees, Quantify wage gap as dollar amount and percentage, Note tenure, title, and responsibility comparators used

### 8) Missing Documentation Checklist

- [ ] Paystubs for complete relevant period
- [ ] All Schedule K-1s if pass-through entity
- [ ] Benefits statements (health, retirement)
- [ ] Bank records to corroborate cash income
- [ ] Comparable employee compensation data (discrimination claims)

### 9) Conclusions

Bullet-point summary of: baseline income, income loss figure, supporting documents, and litigation readiness. State whether figures are sufficient to support expert testimony.

## Guidelines

- Cite every figure to a specific source document (e.g., "2021 Form W-2, Box 1").
- Flag all discrepancies explicitly; never reconcile silently.
- Disclose assumptions and limitations; incomplete records must appear in conclusions.
- Distinguish earned vs. passive income; passive income is typically excluded from earning-capacity damages.
- Use `[VERIFY]` for any statute, limitations period, or jurisdiction-specific rule not confirmed.
- Present financial facts objectively; no advocacy.
- U.S. jurisdiction only; note state-specific variations where material.

## Scotland/UK Adaptation

### Applicable law and documents, Replace W-2, 1099, and tax return equivalents with **UK/Scottish equivalents**: P60, P45, P11D, self-assessment tax returns, HMRC Real-Time Information (RTI) data, and payslips.
- Replace US specific statutes (FLSA, Title VII etc.) with **UK equivalent legislation**: Employment Rights Act 1996, Equality Act 2010, National Minimum Wage Act 1998, Working Time Regulations 1998.
- Governing law: **Scots law** (employment tribunal claims in Scotland apply Scottish employment law where different from England).

### Document equivalents

| US Document | UK/Scottish Equivalent |
|---|---|
| W-2 (wage and tax statement) | P60 (annual earnings and tax summary from employer) |
| 1099-NEC / 1099-MISC (self-employed) | Self Assessment tax return (SA302 / tax year overview from HMRC) |
| Paystub / payslip | Payslip (mandatory under Employment Rights Act 1996 s. 8; itemised pay statement) |
| 1040 / Schedule C | Self Assessment tax return (SA100 + SA103S/F for self-employment) |
| 1095-A (health insurance) | No direct equivalent (NHS, no health insurance linkage) |
| Social Security Statement | DWP / HMRC National Insurance contribution record |
| Unemployment benefits | DWP / Jobcentre Plus benefit letters (Universal Credit, JSA) |
| Bank statements | Bank statements (same format; GBP instead of USD) |

### Legal framework equivalents

| US Claim Type | UK/Scottish Equivalent |
|---|---|
| FLSA (Fair Labor Standards Act) overtime | Working Time Regulations 1998 (WTR - 48-hour week); National Minimum Wage Act 1998 |
| Employment discrimination (Title VII) | Equality Act 2010 (protected characteristics, see s. 4) |
| Wrongful termination | Unfair dismissal (Employment Rights Act 1996 s. 94) / wrongful dismissal (breach of contract) |
| Personal injury → lost earnings | Damages for personal injury (lost earnings reflected in solatium, pain and suffering, and patrimonial loss) |
| Loss of earning capacity | Smith v Manchester awards (loss of earning capacity) |

### Key differences for practitioners
1. **Employment Tribunal structure**: Scottish employment tribunal claims are heard by the Employment Tribunal Scotland (Glasgow, Edinburgh, Aberdeen). Appeals go to the Employment Appeal Tribunal (EAT).
2. **No federal/state distinction**: Scotland has a single employment legal framework (Scots law). There are no state-level wage/hour variations like US states.
3. **Tax year**: UK tax year runs 6 April to 5 April (not calendar year). Tax return forms (P60, Self Assessment) follow this period.
4. **Statutory benefits**: UK claimants may receive Statutory Sick Pay (SSP), Statutory Maternity Pay (SMP), Universal Credit, and Personal Independence Payment (PIP) - these may be deducted from damages (recoupment rules for benefits).
5. **Time limits**: Employment Tribunal claims must be brought within 3 months less one day of the act complained of (Employment Rights Act 1996). Personal injury claims: 3 years from injury date (Prescription and Limitation (Scotland) Act 1973).
6. **No punitive damages**: Scots law does not award punitive damages in employment or personal injury cases. Claims are for compensatory damages only (patrimonial loss + solatium).
7. **Interest rate**: The judicial rate of interest in Scotland is 8% p.a. on damages (or such other rate as set by the Court of Session).
8. **GBP**: All financial calculations in pounds sterling (£). USD/GBP conversion may be needed for cross-border cases.

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
