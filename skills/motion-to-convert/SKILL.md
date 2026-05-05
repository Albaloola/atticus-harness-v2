---
name: motion-to-convert
language: en
description: Drafts a Motion to Convert Case for bankruptcy proceedings under 11 U.S.C. §§ 706, 1112, or 1307. Builds caption, factual background, statutory arguments, and prayer for relief from case documents. Use when the user needs a bankruptcy conversion motion between chapters (e.g., Chapter 7 to 13 or vice versa). [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, motion, insolvency, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Motion to Convert Case

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

Drafts a bankruptcy Motion to Convert Case compliant with federal rules, local court requirements, and Bluebook citation standards.

## Prerequisites

Gather before drafting:

1. **Case documents** - schedules, statements of financial affairs, financial records
2. **Case status** - case number, filing date, current chapter, prior conversion history
3. **Target chapter** - which chapter debtor seeks
4. **Jurisdiction** - bankruptcy court, district, local rules
5. **Changed circumstances** - income changes, employment shifts, asset or debt composition changes since filing

## Quick Start

1. Identify current chapter and target chapter
2. Select controlling statute: § 706 (Ch. 7 debtor-initiated), § 1307 (Ch. 13), § 1112 (Ch. 11)
3. Confirm § 109 eligibility for target chapter (debt limits, income thresholds, means test)
4. Extract factual support from uploaded documents
5. Draft sections in order below

## Output Structure

### 1. Caption & Header

| Element | Requirement |
|---|---|
| Court name | Full name with jurisdiction |
| Case number | Complete case number |
| Parties | Debtor, trustee, relevant creditors |
| Title | "Motion to Convert Case Under 11 U.S.C. § [706/1112/1307]" |
| Formatting | Per local rules (font, margins, spacing) |

### 2. Introduction

- Identify movant and relief sought, State current chapter → target chapter, Cite controlling statute, State filing date, current status, prior conversion history

### 3. Factual Background

Build objective narrative with record references:

- Circumstances of original filing, Material changes since filing (specific dollar amounts and dates)
- Reasons necessitating conversion, Citations to specific schedules and exhibits

### 4. Legal Argument

Layer arguments:

1. **Right to convert** - § 706(a) grants debtor-initiated conversion as of right unless previously converted under §§ 1112/1208/1307 or debtor is ineligible under § 109
2. **Eligibility** - demonstrate § 109 compliance for target chapter (e.g., § 109(e) debt limits for Ch. 13)
3. **Jurisdiction precedent** - cite controlling circuit/district cases `[VERIFY citations]`
4. **Equitable factors** - good faith, full disclosure, changed circumstances, creditor benefit

**Rebut anticipated objections:**

| Objection | Strategy |
|---|---|
| Bad faith | Full disclosure, circumstances beyond debtor's control |
| Abuse of process | Legitimate changed circumstances |
| Creditor prejudice | Equal or better recovery under target chapter |
| Serial filing | Distinguish prior history or explain gaps |

### 5. Prayer for Relief

- Order converting from current chapter to target chapter, Effective date of conversion, Hearing date (if local rules require)
- Deadlines for new chapter compliance (plan filing, amended schedules)
- Fee waiver or time extensions if applicable

### 6. Signature Block & Certificate of Service

**Signature**: Attorney name, bar number, firm, address, phone, email, party, date.

**Service list**: case trustee, U.S. Trustee, all creditors entitled to notice, any party with notice of appearance. Comply with local rules on method and timing.

## Pitfalls & Checks

- Mark any citation not verified against primary source with `[VERIFY]`
- Verify exact statutory text of §§ 706, 1307, 1112, 109 before citing, For Ch. 13 → 7: address § 1307(b) (absolute right) vs. § 1307(c) (cause-based)
- Never assume eligibility, confirm debt limits, income thresholds, means test for target chapter, Every factual assertion must have a record reference, All citations in Bluebook format, Check local court rules for formatting and service requirements

## Scotland/UK Adaptation

### Core Concept Conversion

The US Bankruptcy Code has NO direct equivalent in Scots/UK insolvency law. The entire Chapter 7/11/13 structure does not exist. Key equivalents:

| US Bankruptcy Concept | Scotland/UK Equivalent |
|---|---|
| Chapter 7 (Liquidation) | **Liquidation** (company) / **Sequestration** (individual) |
| Chapter 11 (Reorganisation) | **Administration** (company) - moratorium + restructuring / **Company Voluntary Arrangement (CVA)** |
| Chapter 13 (Individual Reorganisation) | **Protected Trust Deed (PTD)** (Scotland) / **Individual Voluntary Arrangement (IVA)** (rest of UK) |
| Chapter 12 (Family Farmer) | No specific equivalent, use Administration / CVA for farming businesses |
| § 706 - Convert Ch. 7 → 13 | **No direct equivalent** - different insolvency routes, not convertible between regimes |
| § 1112 - Convert Ch. 11 → 7 | **Administration → Liquidation** - administrator may apply to convert or move to liquidation |
| § 1307 - Convert Ch. 13 | No equivalent, PTD/IVA may fail and lead to sequestration |
| Automatic stay (11 USC § 362) | **Moratorium** (Administration) / **Interim order** (IVA) / **Protected status** (PTD) |
| US Trustee / Bankruptcy Administrator | **Accountant in Bankruptcy (AiB)** (Scotland) / **Insolvency Service** (England/Wales) |
| Trustee | **Trustee** (sequestration) / **Liquidator** / **Administrator** / **Trustee** (PTD/IVA) |
| Debtor-in-possession (Ch. 11) | **Administrator** takes control (UK) - no DIP concept; directors remain but administrator manages |
| Proof of claim | **Statement of claim** / **Submit claim** form |
| 341 meeting of creditors | **Statutory meeting** (creditors' meeting / AiB determination) |
| Discharge | **Discharge** - generally 1 year for sequestration (Award of Bankruptcy / Moratorium) |

### Scottish Insolvency Framework

**Personal Insolvency (Scotland)**

| Type | Description | Key Statute |
|---|---|---|
| **Sequestration** | Bankruptcy, assets vest in trustee for distribution; debtor discharged after approx. 12 months | Bankruptcy (Scotland) Act 2016 |
| **Protected Trust Deed (PTD)** | Voluntary trust arrangement, debtor transfers assets to trustee; protected from creditors if majority approve | Bankruptcy (Scotland) Act 2016 Pt. 4 |
| **Debt Arrangement Scheme (DAS)** | Formal debt management plan with court protection | Debt Arrangement and Attachment (Scotland) Act 2002 |
| **Minimal Assets Process (MAP)** | Simplified sequestration for low-income, low-asset debtors | Bankruptcy (Scotland) Act 2016 |

**Corporate Insolvency (UK)**

| Type | Description | Key Statute |
|---|---|---|
| **Liquidation (CVL / MVL / Compulsory)** | Company wound up; assets distributed to creditors | Insolvency Act 1986 |
| **Administration** | Moratorium + statutory purpose: rescue company as going concern | Insolvency Act 1986, Sch. B1 |
| **Company Voluntary Arrangement (CVA)** | Composition with creditors; debt restructuring | Insolvency Act 1986, Pt. I |
| **Administrative Receivership** | Pre-2002 floating charge holder appointment (rare post-2002) | Insolvency Act 1986 |

### Key Differences for Practitioners

1. **No Chapter system** - UK insolvency does not have numbered chapters. The different processes are individual statutory regimes under the Insolvency Act 1986 or Bankruptcy (Scotland) Act 2016.
2. **No conversion motion** - A debtor cannot file a "motion to convert" from one insolvency type to another. If a PTD fails, a separate sequestration application may be required. From administration to liquidation, the administrator applies to court or holds a creditors' decision.
3. **Accountant in Bankruptcy (AiB)** - Scotland's public insolvency authority (replaces the US Trustee concept). For simpler cases, the AiB can act as trustee.
4. **No automatic conversion of Chapter 13 to Chapter 7** - If a PTD fails, no automatic conversion. Creditors may petition for sequestration.
5. **Trustee in sequestration** - The trustee takes control of the debtor's estate. The debtor does not remain in possession (unlike US Chapter 13).
6. **Corporate rescue** - Administration is the main rescue mechanism. The administrator manages the company, not the directors (unlike DIP in Chapter 11).
7. **Prescription** - Debt is not automatically discharged by insolvency unless the debt is prescribed under the Prescription and Limitation (Scotland) Act 1973.

### Recommended Approach

- This skill has **limited direct application** to Scottish/UK practice, the US Bankruptcy Code framework is fundamentally different.
- Use the skill's **drafting methodology** (caption, factual background, legal argument, prayer for relief) as a template for **insolvency applications** generally.
- Replace all US Bankruptcy Code citations with Insolvency Act 1986 / Bankruptcy (Scotland) Act 2016 references.
- For a Scottish insolvency application, use the appropriate forms: sequestration application (Form 1), administration application (Form 2.1B), etc.
- If the user needs a motion to convert insolvency type, the approach is: (1) identify the current procedure, (2) identify the desired new procedure, (3) draft a new application (not a conversion of the existing case), (4) address the effects of termination of the first procedure.
- Flag that the Scottish insolvency regime is creditor-influenced but AiB/court-controlled, not debtor-driven.
- Mark all statutory citations as `[VERIFY]` - insolvency law is complex and forum-dependent.

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
