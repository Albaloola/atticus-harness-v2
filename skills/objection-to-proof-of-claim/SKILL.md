---
name: objection-to-proof-of-claim
language: en
description: Atticus UK/Scots legal skill for objection-to-proof-of-claim. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Objection to Claim (Scotland/UK) [SCOTS Adaptation]

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

Draft a formal objection challenging a creditor's claim in Scottish sequestration or corporate insolvency proceedings, targeting rejection, reduction, or reclassification under the Bankruptcy (Scotland) Act 2016 or the Insolvency Act 1986. **This version applies to Scotland and the UK.**

---

## Preliminary: Key Terminology [SCOTS]

| US Term | Scotland/UK Equivalent |
|---|---|
| Bankruptcy court | Sheriff Court (sequestration); Court of Session (complex sequestrations); Sheriff Court / Outer House (administration/liquidation) |
| Chapter 7 (liquidation) | Sequestration (personal); Liquidation (corporate) |
| Chapter 11 (reorganisation) | Administration (corporate); Protected trust deed (personal alternative) |
| Chapter 13 (wage earner) | Debt payment programme under the Debt Arrangement Scheme (Scotland) |
| Trustee in bankruptcy | Trustee in sequestration / Interim trustee / Permanent trustee / Accountant in Bankruptcy |
| Proof of claim (POC) | Claim / Oath of creditor / Statement of claim |
| Bar date | Last date for submitting claims / fixed date |
| 11 U.S.C. § 502 | Bankruptcy (Scotland) Act 2016, ss. 46 to 49 (sequestration); Insolvency Act 1986, ss. 124A to 131 (liquidation); Insolvency (Scotland) Rules |
| FRBP 3001 | Insolvency (Scotland) Rules / Insolvency Rules 2016 |
| Secured claim | Secured creditor (standard security over heritable property; floating charge for corporate; Section 48 Bankruptcy (Scotland) Act 2016) |
| Priority claim | Preferred debts (Schedule 6 Insolvency Act 1986; s. 129 Bankruptcy (Scotland) Act 2016) |

---

## Prerequisites [SCOTS]

Collect before drafting:

1. **Petition for sequestration or winding-up petition** - debtor name, case number, court (Sheriff Court or Court of Session)
2. **Claim documentation (Oath of creditor/statement of claim)** - claim number, lodgement date, creditor name, amount, stated basis, attachments
3. **Underlying documents** - contracts, invoices, payment history, correspondence; [SCOTS] Note: Scots law requirements for formal validity
4. **Statement of assets and liabilities / Statement of affairs** - debtor's characterisation and any discrepancies with claim
5. **[SCOTS] Court rules** - Insolvency (Scotland) Rules 2016; local Sheriff Court practice notes, page limits, format, verification requirements
6. **Fixed date order** - date for submitting claims (if sequestration) and timeliness of lodgement
7. **[SCOTS] Identity of the trustee/interim trustee** - name, contact; note whether Accountant in Bankruptcy is acting as trustee

---

## Output Structure

### 1. Heading / Caption [SCOTS]

Format per Insolvency (Scotland) Rules 2016. Include:

- Court name (Sheriff Court at [town] / Court of Session)
- Case reference number, Name of debtor (as on petition)
- Title: "NOTE OF OBJECTION TO CLAIM [NO. X]" (sequestration) or "APPLICATION TO ADMIT/REJECT CLAIM" (liquidation)
- [SCOTS] Naming: "In the sequestration of [Debtor Name], a [permanent trustee in sequestration / Accountant in Bankruptcy]" or "In the liquidation of [Company Name]"

### 2. Introduction

- State objector's standing (trustee in sequestration / Accountant in Bankruptcy / debtor / creditor)
- Identify claim number, creditor name, and asserted amount, Preview grounds for objection in one to two sentences, do not argue

### 3. Factual Background

Chronological narrative covering:

- Origin of alleged debt (contract, date, terms)
- Pre-sequestration/pre-liquidation payment history and disputes, Petition date, fixed date (for claims), and claim lodgement date relative to fixed date, Discrepancies between statement of affairs and claim, Documentation attached or missing from claim

Present facts neutrally. Distinguish disputed from undisputed. Every assertion must trace to a producible source document.

### 4. Grounds for Objection

Identify all applicable grounds under Scots law:

| Ground | Authority | Showing Required |
|---|---|---|
| Insufficient documentation | Bankruptcy (Scotland) Act 2016, s. 46; Insolvency (Scotland) Rules 2016, r. 5.10 | Missing contracts, invoices, or statements; insufficient oath of creditor |
| Calculation errors | Bankruptcy (Scotland) Act 2016, s. 46(3); Insolvency Act 1986, s. 124A | Incorrect interest, unauthorised fees, principal errors |
| Barred by prescription | Prescription and Limitation (Scotland) Act 1973, ss. 6, 7 | Quintennial prescription (5 years for most debts); triennial for some; long negative prescription (20 years) |
| Improper ranking as preferred debt | Bankruptcy (Scotland) Act 2016, s. 129; Insolvency Act 1986, Sch. 6 | Does not meet preferred debt criteria |
| Improper status as secured creditor | Bankruptcy (Scotland) Act 2016, s. 48; Companies Act 2006 (charges) | No valid standard security, floating charge, or fixed charge; charge unregistered |
| Not a real creditor / no standing | Bankruptcy (Scotland) Act 2016, s. 46(1) | No legal obligation; disputed debt; third-party claim without title |
| Duplicative claim | Bankruptcy (Scotland) Act 2016, s. 46 | Duplicates another lodged claim |
| Post-sequestration / post-liquidation debt | Bankruptcy (Scotland) Act 2016, s. 23; Insolvency Act 1986, s. 86 | Arose after sequestration/liquidation without proper basis |
| Debt not constituted by decree or document of debt | General Scots contract law | Debt not evidenced by writing sufficient to constitute legal obligation |

For each ground: cite the statutory provision, state the legal standard, apply facts showing how claim fails.

### 5. Legal Argument

For each argument:

1. State governing standard (statute + relevant Scottish case law, cite Court of Session, Sheriff Principal, or UK Supreme Court authority)
2. Apply burden framework, creditor must establish claim; trustee may challenge
3. Connect specific facts to legal standard
4. Anticipate creditor counterarguments

Cite controlling Scottish authority using OSCOLA format with pinpoint citations. Mark unverified citations with [VERIFY].

### 6. Prayer [SCOTS]

In order of preference:

1. Sustain the objection and reject the claim in whole
2. Reduce the claim to £[amount] with basis stated
3. Reclassify the claim from [current] to [requested] ranking (e.g. ordinary to postponed debt, secured to unsecured)
4. Expenses as statutory entitlement or as court orders
5. General relief clause

### 7. Signature Block

Per Insolvency (Scotland) Rules 2016: name, firm, address, reference, email, phone. Include solicitor's name and designation if represented.

---

## Checks [SCOTS]

- **Tone**: Professional, measured, no inflammatory language
- **Format**: Follow Sheriff Court or Court of Session rules (type size, margins, number of copies). Insolvency Rules 2016 may specify specific forms.
- **Citations**: OSCOLA format with pinpoint cites throughout. Scottish case citations: [2024] CSIH 1, [2024] CSOH 20, [2024] SLT 100, [2024] SC (UKSC) 1
- **Evidence**: Every fact must be traceable to an admissible source document (Scots rules of evidence apply: Civil Evidence (Scotland) Act 1988)
- **[SCOTS] Prescription check**: Always check whether the debt is prescribed (Prescription and Limitation (Scotland) Act 1973). Most debts prescribe after 5 years from the date the obligation became enforceable.
- **Fresh start**: For individual debtors (sequestration), frame objection within the rehabilitative purpose of sequestration where appropriate.
- **Never** assume secured status, priority (preferred), or standing, require creditor to prove each element.
- **Never** concede facts favourable to the objector when characterising disputed matters.

---

## Key Statutory Provisions (Scotland/UK)

| Provision | Application |
|---|---|
| Bankruptcy (Scotland) Act 2016, ss. 46 to 49 | Claims in sequestration: admission, rejection, ranking, appeal |
| Bankruptcy (Scotland) Act 2016, s. 48 | Secured creditors: valuation of security, election |
| Bankruptcy (Scotland) Act 2016, s. 129 | Preferred debts ranking |
| Insolvency Act 1986, ss. 124A to 131 | Proof of debts in winding up (extended to Scotland by s. 120) |
| Insolvency Act 1986, Sch. 6 | Categories of preferred debts (extended to Scotland) |
| Insolvency (Scotland) Rules 2016 (SSI 2016/191) | Procedure for submission and adjudication of claims |
| Prescription and Limitation (Scotland) Act 1973, ss. 6, 7, 17A | Quintennial (5 year) and triennial prescription; long negative (20 year) prescription |
| Requirements of Writing (Scotland) Act 1995 | Formal validity of documents of debt |

---

## Procedural Notes [SCOTS]

### Sequestration (Personal) - Scotland, The **Accountant in Bankruptcy (AiB)** may act as trustee in certain cases (low asset sequestrations). The AiB may also supervise petitions for sequestration.
- Claims must be submitted to the trustee by the **fixed date** (set by the trustee or prescribed).
- The trustee admits or rejects claims and issues a **list of claims**. Objections to the list may be made to the Sheriff Court.
- **Appeal**: A decision on a claim can be appealed to the Sheriff Court (or, for initial decisions, the Accountant in Bankruptcy).

### Liquidation (Corporate) - Scotland, The **liquidator** (in solvent/creditors' voluntary liquidation) or **interim liquidator** (winding up by the court) adjudicates claims.
- The Insolvency (Scotland) Rules 2016 govern the procedure for submitting and challenging claims.
- The court (Sheriff Court or Court of Session) may be asked to determine disputes.

### Administration, Scotland, The administrator adjudicates claims. Disputes may be referred to the court.

### Important Differences from US Bankruptcy
| US Feature | Scotland Equivalent |
|---|---|
| Bar date controlled by BNC notice | Fixed date set by trustee / AiB |
| Adversary proceeding | Application to Sheriff Court / Court of Session |
| Proof of claim under penalty of perjury | Oath of creditor / statement of claim |
| FRBP 3001 prima facie validity | Creditor must establish claim; trustee may require evidence |
| Automatic stay | Moratorium on diligence (sequestration) |
| Reaffirmation agreements | Not recognised in Scottish sequestration |
| Section 341 meeting of creditors | Meeting of creditors (often dispensed with in low asset cases) |

---

## Scotland/UK Adaptation

This section documents the key adaptations from the original US-focused version.

### Legal Framework Differences

| US Element | Scotland/UK Equivalent |
|---|---|
| 11 U.S.C. § 502 | Bankruptcy (Scotland) Act 2016, ss. 46 to 49; Insolvency Act 1986, ss. 124A to 131 |
| Bankruptcy court | Sheriff Court (principal court for sequestration); Court of Session (complex cases) |
| Chapter 7 (liquidation) / 11 / 13 | Sequestration / Administration / Liquidation; DAS Debt Payment Programme |
| FRBP 3001 (proof of claim) | Insolvency (Scotland) Rules 2016 |
| Bar date (BNC notice) | Fixed date / final date for claims set by trustee |
| Secured claim (UCC Article 9) | Standard security (heritable); Floating charge / Fixed charge (corporate) |
| Priority claim | Preferred debts (IA 1986 Sch. 6; B(A)S 2016 s. 129) |
| Avoidance powers (preferences, fraudulent transfers) | Gratuitous alienations (B(A)S 2016 ss. 98 to 99); Unfair preferences (s. 99A); IA 1986 ss. 239 to 245 applied to Scotland |
| Exempt property (bankruptcy exemptions) | Arresteable/non-arresteable income; debtor's home provisions (B(A)S 2016 Sch. 3) |
| Discharge | Automatic discharge (sequestration: 1 year) |
| IRS claims | HMRC claims (preferred for certain taxes, but status reduced since 2002/2003) |
| Bluebook / US citation | OSCOLA / Scots legal citation |
| Federal Rules of Bankruptcy Procedure | Insolvency (Scotland) Rules 2016 (SSI 2016/191) |
| Trustee in bankruptcy | Trustee in sequestration / Permanent trustee |
| Standing (party in interest) | Creditor, debtor, trustee, AiB, any person with interest |

### Related Scottish Forms
See `scots-forms/` directory for references to:
- Oath of creditor forms, List of claims and objections, Sheriff Court applications in sequestration, Accountant in Bankruptcy forms, Insolvency (Scotland) Rules prescribed forms

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
