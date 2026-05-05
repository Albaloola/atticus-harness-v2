---
name: means-test-calculation
language: en
description: Calculates the bankruptcy means test from paystub data to determine annualized gross income and compare against state median income thresholds. Covers the 6-month look-back period, YTD subtraction method, pro-rata adjustments, and median income comparison. Use when evaluating Chapter 7 eligibility, performing pre-filing income assessment, or preparing Form 122A-1. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bankruptcy Means Test Calculation

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

Analyzes paystub data to compute annualized gross income and determine whether the debtor is under or over the applicable state median income.

## Prerequisites

Collect before starting:

- **Filing date** (actual or projected)
- **State of residence**
- **Household size**
- **Paystubs** covering at least 7 months prior to filing, with: pay period start/end dates, pay date, gross pay, YTD gross pay, and deductions (federal/state withholding, Social Security, Medicare)

## Workflow

### Step 1: Determine 6-Month Look-Back Period

Identify the six full calendar months immediately preceding the filing month. Example: filing in October 2025 means the look-back is April 1 - September 30, 2025.

### Step 2: Calculate Total Gross Income

**Primary method (YTD subtraction):**

1. Last paystub YTD before end of look-back period = `YTD_end`
2. Last paystub YTD before start of look-back period = `YTD_start`
3. `Total gross = YTD_end, YTD_start`

**Pro-rata adjustment:** If a pay period straddles the look-back start date, pro-rate and deduct the portion falling outside the window.

**Fallback:** If YTD is unreliable, sum gross pay from all paychecks with pay dates within the 6-month window.

### Step 3: Annualize

```
Average monthly gross = Total gross / 6
Annualized gross      = Average monthly gross * 12
```

### Step 4: Look Up State Median Income

- Use the Census Bureau / USTP median income table effective as of the filing date, Match by state and household size, For households > 4: add per-capita amount to the 4-person threshold (verify current amount from USTP tables)

### Step 5: Compare

| Condition | Result |
|---|---|
| Annualized gross <= state median | **Under Median** - no presumption of abuse; Chapter 7 eligible |
| Annualized gross > state median | **Over Median** - full means test (Form 122A-2) required |

## Required Output

```
6-Month Look-Back Period:    [start] - [end]
Total Gross Income (6 mo):   $XX,XXX.XX
Average Monthly Gross:       $XX,XXX.XX
Annualized Gross Income:     $XX,XXX.XX
State Median (HH size X):    $XX,XXX.XX
Result:                      Under Median / Over Median
```

## Pitfalls

- Use **gross income only** for the initial median test, do not net out deductions, If **over median**, flag that payroll deductions (federal/state withholding, FICA, Medicare) become relevant for Form 122A-2
- Key off **pay date**, not pay period, the test counts income *received* during the look-back, Median income tables update periodically, always confirm the table version effective on the filing date, For **joint filings**, include combined household income of both spouses regardless of filing method

---

Key changes from the original:
- **Removed `tags`** - not part of the Agent Skills spec
- **Tightened description** - kept third-person, trimmed to essentials while preserving all trigger keywords
- **Flattened prerequisites** into a compact list instead of nested sub-bullets
- **Removed redundant look-back example table** - one inline example suffices; Claude can compute dates
- **Renamed "Process" to "Workflow"** and "Guidelines" to "Pitfalls" for clarity
- **Removed the `[VERIFY]` inline annotation** about the $11,100 figure, replaced with a clear instruction to verify from USTP tables (avoids baking in a potentially stale dollar amount)
- **Cut ~25% of tokens** while preserving all domain-accurate calculation logic, pro-rata rules, fallback method, output template, and legal guardrails

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
