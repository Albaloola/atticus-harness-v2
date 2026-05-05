---
name: stay-relief-motion
language: en
description: Drafts a Motion for Relief from Automatic Stay under 11 U.S.C. § 362(d) [US federal bankruptcy] or, for UK/Scottish adaptation, an application to lift an administration moratorium or moratorium on diligence. Covers grounds including cause, no equity, and debtor non-compliance. Use when a creditor needs to lift moratorium to enforce security, repossess collateral, or continue litigation against a debtor in formal insolvency. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, motion, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Motion for Relief from Automatic Stay

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

Drafts a procedurally compliant motion under 11 U.S.C. § 362(d) to lift the automatic stay [US federal] or its equivalent in UK/Scottish insolvency. See Scotland/UK Adaptation below for the Scottish equivalent.

## Prerequisites

1. **Loan/security documents** - standard security (Scotland), bond and disposition in security, or debenture
2. **Perfection evidence** - registration at Companies House (Register of Charges) or Land Register (standard security)
3. **Payment history** - account ledger, defaults, arrearage calculation
4. **Valuation evidence** - professional valuation, market appraisal, or comparables
5. **Insolvency case info** - case number, insolvency type (administration, sequestration, liquidation), filing date, debtor name, court
6. **Post-insolvency facts** - moratorium details, condition of security subjects

## Quick Start

1. Gather all prerequisites; confirm statutory ground(s): § 362(d)(1), (d)(2), and/or (d)(3)
2. Draft caption with exact debtor name, case number, chapter, and movant capacity
3. Build chronological fact section from loan origination through post-petition default
4. Draft legal argument matching each ground to evidentiary support
5. Prepare supporting declaration with FRE 803(6) foundation and exhibit list
6. Verify service list and 21-day notice requirement under FRBP 4001

## Output Structure

### 1. Caption & Case Identification

| Element | Requirement |
|---------|-------------|
| Court | U.S. Bankruptcy Court, [District], [Division] |
| Debtor | Exact legal name from petition; entity type |
| Case No. | Jurisdiction-specific format |
| Chapter | 7, 11, 12, or 13 |
| Movant | Full legal name + capacity (e.g., "as holder of a first-priority deed of trust") |
| Title | "MOTION FOR RELIEF FROM AUTOMATIC STAY PURSUANT TO 11 U.S.C. § 362(d)" |

### 2. Introduction

- Movant identity, relationship to debtor, collateral description, Specific relief sought: termination / modification / annulment, Statutory basis and procedural context (filing date, stay duration, deadlines)

### 3. Factual Background

Present chronologically:

- **Pre-petition:** Transaction date, principal, rate, terms, maturity; guarantors/co-borrowers
- **Collateral:** Legal description (real property) or make/model/VIN (personal property); recording/UCC-1 data; perfection method and priority position
- **Default:** First missed payment, arrearage itemization (principal, interest, late charges, fees), pre-petition collection efforts, failed workout attempts
- **Post-petition impact:** How stay halted remedies; insurance lapses; waste/deterioration; missed adequate protection payments

### 4. Legal Argument

**§ 362(d)(1) - Cause / Lack of Adequate Protection**

- Define adequate protection under § 361 (cash payments, replacement liens, indubitable equivalent)
- Show declining collateral value with appraisal support (petition-date vs. current)
- Calculate equity cushion; cite circuit authority on minimum threshold (typically ≥ 20%)
- Show post-petition payments insufficient to cover accruing interest + depreciation, Additional cause if applicable: bad faith/serial filing, no reorganization prospect, violation of prior orders, Burden: under § 362(g)(2), debtor bears burden on adequate protection

**§ 362(d)(2) - No Equity + Not Necessary for Reorganization**

- *No equity (movant's burden, § 362(g)(1)):* Current FMV, all liens in priority order, total encumbrances > FMV
- *Not necessary for reorganization:*
  - **Liquidation**: no moratorium; applies to administration/sequestration only
  - **Administration**: administrator not progressing proposals / no realistic plan
  - **Sequestration**: debtor not co-operating / no dividend payable, Cite authority: court weighs balance of interests between rehabilitation prospects and creditor enforcement rights

**§ 362(d)(3) - Single Asset Real Estate (if applicable)**

- Debtor qualifies as SARE under § 101(51B)
- Failed to file plan or begin interest payments within 90 days

### 5. Prayer for Relief

- Relief from stay to exercise non-bankruptcy remedies (specify: foreclose, repossess, litigate)
- Address FRBP 4001(a)(3) 14-day stay: request waiver if emergency, Without prejudice to seek further relief, Attorney's fees and costs (cite contractual or statutory basis)

### 6. Supporting Declaration

Declarant must have personal knowledge (loan servicer, asset manager, corporate representative).

- Position, responsibilities, familiarity with account, Business records foundation under FRE 803(6)
- Factual narrative supporting all motion allegations, Post-petition communications and adequate protection history, Current collateral condition and value

### 7. Exhibits

| Exhibit | Description |
|---------|-------------|
| A | Promissory note / lease agreement |
| B | Deed of trust / security agreement |
| C | Proof of perfection (recorded docs / UCC filings) |
| D | Payment history / account ledger |
| E | Default notices / demand letters |
| F | Appraisal / valuation evidence |
| G | Property condition photos (if applicable) |
| H | Post-petition correspondence re: adequate protection |

Each exhibit referenced in declaration with FRE 803(6) authentication.

### 8. Service & Certificate

**Service list:** Debtor, debtor's counsel, U.S. Trustee, Ch. 7/13 Trustee (if appointed), special notice parties (Rule 2002), corporate debtors per Rule 7004.

**Timing:** Serve ≥ 21 days before hearing. File motion to shorten time if emergency.

**Certificate:** Party name, address, method (CM/ECF or mail), date served.

## Checks

- Use persuasive headings stating conclusions, not neutral labels, Cite specific numbers, dates, and exhibits, avoid conclusory statements, For US: prioritize binding circuit/district authority with parentheticals; verify Bluebook citations, For Scotland: cite Court of Session or Sheriff Court authority; follow Act of Sederunt formatting rules, Local formatting (Scotland): Arial 12pt, 1" margins, double-spaced; 4cm left margin for Court of Session, Signature block: solicitor name, firm, address, DX/email, Emergency relief: separate application with note of urgency, Tone: professional, forceful, respectful

## Scotland/UK Adaptation

This skill is drafted for US federal bankruptcy law (11 U.S.C. §362, FRBP 4001). For Scottish/UK use:

- **No automatic stay**: UK/Scotland does not have a universal automatic stay equivalent to §362. Instead:
  - **Administration moratorium**: Schedule B1 Insolvency Act 1986 - moratorium on creditor action while administrator works. Court may lift on application.
  - **Scottish sequestration moratorium**: Bankruptcy (Scotland) Act 2016 ss.195 to 198 - moratorium on diligence for 6 weeks (extendable) pending DPP, trust deed, or sequestration.
  - **IVA moratorium**: interim order under Insolvency Act 1986.
- **Relief application**: by motion to Court of Session (complex matters) or Sheriff Court. No equivalent of §362(d)(1)/(d)(2) separate grounds, court considers balance of interests between rehabilitation and creditor enforcement.
- **Adequate protection**: no direct equivalent to §361. Court may impose terms on continuation of moratorium.
- **Secured creditor rights in Scotland**: enforcement via standard security (calling-up notice, notice of default), not US foreclosure.
- **Register of Charges**: at Companies House (not UCC filings). Standard securities registered in Land Register of Scotland.
- **Procedure**: Act of Sederunt (Scottish court rules) governs applications; not FRBP 4001.
- **Court hierarchy**: Sheriff Court (simpler claims, lower value); Court of Session (Outer House for complex/high value; Inner House for appeals).
- **Costs**: "loser pays" judicial expenses in Scotland.
- **Key statutes**: Bankruptcy (Scotland) Act 2016; Insolvency Act 1986; Companies Act 2006.
- **Time limits**: moratorium on diligence = 6 weeks standard; court may extend. Administration moratorium lasts as long as administration continues.

For a full reference, see `scots-forms/UK-Bankruptcy-Administration-Moratorium-Guidance.md`.

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
