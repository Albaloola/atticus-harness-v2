---
name: dischargeability-complaint
language: en
description: Drafts a sequestration (Scottish bankruptcy) application to oppose the discharge of a debtor or to challenge the non-dischargeability of a debt under the Bankruptcy (Scotland) Act 2016. Use when a creditor needs to object to discharge, challenge the automatic discharge of a sequestrated debtor, or resist the debtor's application for early discharge. Covers fraudulent dealings, failure to comply with obligations, and material misrepresentation. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Dischargeability Complaint (Sequestration, Scotland)

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

Drafts a creditor's opposition to discharge of a sequestrated debtor, or a challenge to non-discharge of a specific debt, under the Bankruptcy (Scotland) Act 2016. Adapts US §523 concepts to the Scottish sequestration framework.

## Scotland/UK Adaptation

There is no direct equivalent to a US "dischargeability complaint" under 11 U.S.C. §523 in Scots law. The Scottish sequestration regime (Bankruptcy (Scotland) Act 2016) handles discharge differently:

**Key differences:**
- **Automatic discharge**: Under s.137 of the 2016 Act, sequestrated debtors are typically discharged automatically after 12 months (subject to certain conditions). There is no separate discharge application in most routine cases.
- **Early discharge**: A debtor may apply for early discharge (s.138) - creditors may oppose this application.
- **Objection to automatic discharge**: Under s.137(5), the trustee or a creditor may apply to the court (sheriff) for an order deferring or refusing discharge if the debtor has failed to co-operate, has concealed assets, or has been guilty of fraud.
- **No §523-style non-dischargeability categories**: Scottish law does not categorically exempt certain debts (like fraud debts) from discharge in the same way. Instead, the court has discretion to refuse or defer discharge as a sanction for misconduct.
- **Debtor's application for discharge**: Under s.137(4), a debtor who fails to obtain automatic discharge may apply for it, creditors can object.
- **Bankruptcy Restricted Undertaking (BRU)**: For dishonest debtors, the court may impose restrictions akin to a bankruptcy restrictions order (England/Wales) - though Scotland has a different scheme under the 2016 Act.
- **Trustee's report**: The trustee's report on the debtor's conduct is critical. A creditor opposing discharge must engage with the trustee.
- **Currency**: All sums are in GBP (£).
- **Award of sequestration**: The process begins with an Award of Sequestration by the sheriff or the Accountant in Bankruptcy (AiB).
- **Accountant in Bankruptcy (AiB)**: The AiB is the Scottish public body overseeing sequestration, analogous in some functions to the US Trustee.
- **Debtor application vs creditor application**: Creditors can petition for sequestration (s.16-17) but the discharge regime applies regardless of who petitioned.

[SCOTS: No direct equivalent to US adversary proceedings under Rule 7001] - objections to discharge in Scotland are typically made by application to the sheriff in the sequestration process, not by separate plenary proceedings. However, a creditor may raise a separate action for repayment if the debt is secured or otherwise not discharged.

## Quick Start

Collect before drafting:

- **Standing**: Creditor's entitlement to object (must be a creditor in the sequestration)
- **Case data**: Sheriff Court / AiB, sequestration reference number, date of Award of Sequestration
- **Deadline posture**: Automatic discharge date (12 months from Award). Objections must be lodged **before** discharge. Check s.137(5) timing.
- **Evidence**: Contracts, account records, correspondence, payment history, admissions, evidence of debtor misconduct
- **Grounds for objection**: Failure to co-operate, concealment of assets, fraud, non-compliance with trustee's requests, material misrepresentation in the debtor application
- **Damages**: Principal debt, contractual interest, statutory interest (sheriff court), fees, judicial expenses
- **Local rules**: Sheriff Court Ordinary Cause Rules (or Summary Application Rules, depending on the application type)

## Core Workflow

### 1. Build application scaffold

| Section | Content | Verify |
|---|---|---|
| Heading | Sheriff Court name, sequestration ref., parties | Correct court |
| Jurisdiction | Sheriff Court of the debtor's habitual residence or place of business | Explicitly alleged |
| Parties | Creditor name, debtor name, trustee (if known) | Standing as creditor established |
| Procedural posture | Award of Sequestration date, trustee appointment, discharge date | Within time for objection |
| Factual narrative | Chronological facts with dates and sources | Each allegation supported by productions |
| Grounds for objection | Specific statutory grounds under s.137(5) or s.138 (early discharge) | All elements included |
| Prayer | Refusal or deferral of discharge, expenses, intimation | Relief sought precisely stated |
| Documents / Productions | List of supporting documents | Complete |
| Service checklist | Filing-ready package | Complete |

### 2. Plead theory-specific grounds

| Ground | Elements | Style |
|---|---|---|
| Failure to co-operate with trustee (s.137(5)(a)) | Specific requests made, debtor failed to respond, material prejudice to sequestration | Fact-dense: what was requested, when, what was not provided, and why it matters |
| Concealment of assets (s.137(5)(b)) | Assets not disclosed, evidence of concealment, benefit to debtor | Show timing, method of concealment, and value |
| Fraud / false statement (s.137(5)(c)) | Material false statement in debtor application or during sequestration | Identify statement, when made, and why it was false to the debtor's knowledge |
| Non-compliance with obligations (s.138 for early discharge) | Failure to pay surplus income, failure to comply with debtor contribution order | Cross-reference trustee's report |
| Material misrepresentation on credit application | False financial information given to creditor prior to debt incurrence | Show reliance and loss (similar to US §523(a)(2)(B) but applied within Scottish framework) |

### 3. Apply pleading rules

- Number all paragraphs; keep short-to-medium length.
- Fraud allegations must be specifically pled, identify the statement, maker, medium, date, and why it was false.
- Incorporate prior paragraphs by reference at each ground's start.
- Use separate grounds per theory, prevents collapse if one fails.
- Cross-reference productions; do not repeat full blocks.
- Scottish pleadings in sheriff court follow Ordinary Cause Rules (OCR) or Summary Application Rules, verify which applies.

### 4. Produce mandatory sections

1. Application heading and title
2. Creditor's standing and interest
3. Factual background, debt history
4. Sequestration details
5. Grounds for objection / non-discharge
6. Prayer for relief
7. List of productions
8. Signature block (solicitor or party)
9. Service/filing checklist

## Legal Constraints

- **Bankruptcy (Scotland) Act 2016** - ss.137-139 govern discharge; ss.16-17 govern creditor petitions
- **Ordinary Cause Rules (Sch. 1 to the Sheriff Courts (Scotland) Act 1907)** or **Summary Application Rules** - depending on the application type [VERIFY: confirm correct rules for the specific application]
- **Debtors (Scotland) Act 1987** - supplemental sequestration provisions
- **Rules of the Court of Session 1994** - if the sequestration is in the Court of Session, Regulation of insolvency practitioners, the trustee must be a qualified insolvency practitioner or the AiB

## Pitfalls and Checks

- Reconcile all debt figures against productions.
- Confirm every ground has at least one direct fact anchor.
- No allegation may rest on speculation, separate facts from legal inference.
- Do not plead grounds without a statutory basis under the 2016 Act.
- Keep tone objective, factual allegations only, no inflammatory language.
- Include `[VERIFY]` placeholders for unresolved legal standards or local-rule citations.
- Confirm the trustee's position, the trustee may already be aware of misconduct and may themselves apply for deferral of discharge.
- If the automatic discharge has already occurred, the creditor's remedy is limited, the debt is discharged and cannot be revived. Act before the discharge date.
- Distinguish between deferral (postponement) and refusal (permanent denial) of discharge, the court may grant either.
- Confirm whether the debtor is also subject to a Bankruptcy Restricted Undertaking (BRU) or other post-sequestration restrictions.
- [SCOTS: No US-style FRBP 4007(c)] - Scottish objection periods are governed by s.137(5), which requires an application **before** the debtor's discharge.
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
