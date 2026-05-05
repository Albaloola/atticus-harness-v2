---
name: royalty-report
language: en
description: Drafts auditable royalty report forms for IP licensing agreements, calculating tiered royalties, minimum guarantees, and advance recoupments from governing license terms. Use when preparing licensee royalty reports, royalty payment calculations, license compliance filings, or periodic royalty submissions. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Royalty Report Form

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

Drafts a certification-ready royalty report satisfying licensee reporting obligations under an IP license agreement. Functions as both an accounting instrument and a legally binding compliance document.

## Quick Start

1. Obtain the governing license agreement (including amendments)
2. Extract key terms into the extraction checklist below
3. Collect sales data for the reporting period (or confirm template-only output)
4. Draft report following the output structure
5. If prior reports exist, carry forward advance recoupment balances and cumulative tier thresholds

If multiple license agreements exist in uploaded documents, ask which governs before proceeding.

## Key Extraction Checklist

Extract from the license before drafting:

| Field | Source |
|---|---|
| Licensor / Licensee legal names | Signature blocks (exact match required) |
| Agreement date + amendments | Preamble / amendment headers |
| Reporting period / frequency | Reporting provisions |
| Royalty rate(s) and tiered thresholds | Royalty calculation section |
| Minimum royalty guarantee | Payment terms |
| Allowable deductions | Definitions / calculation provisions |
| Advance recoupment terms | Payment terms |
| Required accounting standard | Reporting provisions (GAAP or other) |
| Submission format / method | Reporting provisions |
| Confidentiality marking | Confidentiality section |
| Concurrent payment required? | Payment terms |
| Audit period | Audit rights section |

## Output Structure

### 1. Document Header

```
                        ROYALTY REPORT

[Licensee Legal Name]

For the [Quarter/Period] Ending [Date] / From [Start Date] through [End Date]

Pursuant to License Agreement dated [Date] between [Licensor Legal Name]
and [Licensee Legal Name] [, as amended by Amendment No. [X] dated [Date]]

Report No.: [If required]
```

### 2. Sales Data Table

| Product SKU | Product Description | Qty Sold | Unit Price | Gross Sales |
|---|---|---:|---:|---:|
| [SKU] | [Match licensed product definitions] | [X] | $[X.XX] | $[X.XX] |

- Organize by product line, territory, or license type if different rates apply, Include subtotals per category before grand total, If no sales data provided, use placeholder: **"[INSERT ACTUAL SALES DATA FROM ACCOUNTING RECORDS]"**

### 3. Royalty Calculation

```
Total Gross Sales                                    $[________]

Less Allowable Deductions:
  Returns & allowances                              ($[________])
  Freight & shipping (third-party)                  ($[________])
  Sales taxes & governmental charges                ($[________])
  Trade discounts                                   ($[________])
  [Other per agreement]                             ($[________])
Total Deductions                                    ($[________])

Net Sales Subject to Royalty                         $[________]

Royalty Calculation:
  [Rate]% on first $[threshold]                      $[________]
  [Rate]% on excess over $[threshold]                $[________]
Calculated Royalty                                   $[________]

Minimum Royalty Guarantee (if applicable)             $[________]
Royalty Due (greater of calculated or minimum)        $[________]

Less: Advance Recoupment                            ($[________])
Plus: Marketing Fund Contribution ([X]%)              $[________]
Plus: [Other fees per agreement]                      $[________]

TOTAL AMOUNT DUE                                     $[________]
```

- Show each deduction category separately, never aggregate, Show each tier calculation independently, Show advance recoupment as a separate line item from royalty earned

### 4. Certification & Signature Block

Certification must attest:
- Signer is authorized officer with authority to bind licensee, Report prepared in accordance with the license agreement, All information true, complete, and accurate after reasonable inquiry, Data derived from books/records per the required accounting standard, Payment represents full amount owed

> If the agreement prescribes specific certification language, incorporate it **verbatim**.

```
CERTIFICATION

The undersigned, a duly authorized officer of [Licensee], hereby certifies
that this Royalty Report has been prepared in accordance with the License
Agreement dated [Date], that all information is true, complete, and accurate
to the best of the undersigned's knowledge and belief after reasonable inquiry,
and that the sales data and calculations are derived from books and records
maintained in the ordinary course of business in accordance with
[GAAP/specified standard].

Signature: ___________________________
Name:      ___________________________
Title:     ___________________________
Date:      ___________________________
```

### 5. Payment Instructions

Include if concurrent payment required: amount due, payment method, payee name (exact per agreement), wire/mailing details, due date.

## Critical Checks

- **Entity names** - must exactly match signature block names; any variance may invalidate submission
- **Deductions** - include only those explicitly authorized; when uncertain, flag: `[VERIFY DEDUCTION ELIGIBILITY UNDER SECTION [X]]`
- **Audit exposure** - every figure must reconcile to source documents; reports typically auditable 2-3 years
- **Missing info** - use bracketed placeholders referencing the specific section: `[INSERT ROYALTY RATE FROM SECTION 4.2]`
- **Tiered calculations** - if cumulative annual thresholds apply, account for sales in prior periods of the same contract year
- **Supporting documents** - check whether agreement requires attachments (invoices, territory breakdowns, accountant certifications)
- **Misrepresentation risk** - report creates binding contractual representations; emphasize accuracy over speed

---

**Key changes made:**

- **Frontmatter**: Removed `tags` (not in spec), tightened description to be third-person with clear trigger guidance
- **Structure**: Replaced "Prerequisites" with a "Quick Start" workflow, renamed "Key Extraction from License Agreement" to shorter "Key Extraction Checklist", consolidated "Formatting Requirements" and "Guidelines" into a single "Critical Checks" section
- **Extraction table**: Merged licensor/licensee name rows; merged royalty rate/tier rows, fewer rows, same info
- **Templates preserved**: Header, sales table, royalty calculation, and certification blocks kept intact as essential domain content
- **Trimmed**: Removed Email/Phone from signature block (non-essential), removed Reference No. from header, removed "Currency per agreement; right-align all numerical columns" (obvious formatting), removed checkbox-style certification list (replaced with bullet attestation list), cut "Formatting Requirements" section entirely (standard knowledge)
- **Line count**: ~159 → ~127 lines of content (well under the 500-line limit)

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
