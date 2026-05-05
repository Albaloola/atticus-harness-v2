---
name: fraudulent-conveyance-complaint
language: en
description: Drafts a Scottish Initial Writ / Summons to challenge gratuitous alienations and unfair preferences under the Bankruptcy (Scotland) Act 2016 and common law. Covers gratuitous alienation, unfair preference, badges of fraud, interim remedies, and full crave for relief. Use when a creditor or trustee needs to challenge a debtor's asset transfer made to hinder, delay, or defraud creditors, including sequestration-related actions. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Fraudulent Conveyance Complaint

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

Drafts a litigation-ready complaint to avoid a debtor's fraudulent asset transfer and recover value for creditors under UFTA, UVTA, or state equivalents.

## Quick Start

Gather from the user:

1. **Creditor's claim** - nature of debt, date incurred, amount, judgment status
2. **Transfer details** - asset description (legal description if real property), date, transferee, stated vs. actual consideration
3. **Debtor financial condition** - insolvency evidence (balance sheet, cash-flow, or unreasonably small capital)
4. **Badges of fraud** - insider relationship, retention of control, concealment, timing, consideration adequacy
5. **Jurisdiction** - governing statute (UFTA, UVTA, or state-specific); federal vs. state court; bankruptcy adversary proceeding

Then produce the complaint following the workflow below.

## Core Workflow

### 1. Caption

```
[COURT NAME]
[DISTRICT/COUNTY]

[PLAINTIFF],
    Plaintiff,
v.
[DEBTOR-TRANSFEROR] and [TRANSFEREE],
    Defendants.

Case No. [________]
COMPLAINT FOR FRAUDULENT CONVEYANCE
```

Apply FRCP 10 (federal) or local rules (state).

### 2. Parties

| Party | Required Allegations |
|---|---|
| Plaintiff-creditor | Legal name, entity type, standing basis, nature and amount of debt |
| Debtor-transferor | Identity, entity type, insider status if applicable |
| Transferee | Identity, consideration paid, knowledge of debtor's intent |
| Subsequent transferees | Downstream recipients; good-faith purchaser status if asserted |

### 3. Jurisdiction & Venue

| Basis | Requirements |
|---|---|
| Federal diversity | 28 U.S.C. § 1332 - citizenship of each party, amount > $75,000 |
| Federal bankruptcy | 28 U.S.C. §§ 157, 1334 - adversary proceeding under FRBP 7001 |
| State court | Jurisdictional statute + amount-in-controversy threshold |
| Personal jurisdiction | Residence, principal place of business, property situs, or where transfer executed |
| Venue | Defendant's residence, where cause arose, or where property located |

### 4. Factual Allegations

Plead in numbered paragraphs, chronologically:

1. Origin, nature, and amount of claim; date debt incurred; judgment status
2. Whether claim is pre-transfer or post-transfer (determines available theories)
3. Debtor's financial condition at time of transfer, plead all that apply:
   - Liabilities exceeded assets at fair valuation (balance sheet insolvency)
   - Unable to pay debts as due (cash-flow insolvency)
   - Transfer left debtor with unreasonably small capital
4. Transfer description: asset, date, transferee, stated consideration, fair market value
5. Badges of fraud:

| Badge | Allegation |
|---|---|
| Insider transfer | Relationship: family member, officer, affiliate, controlled entity |
| Retention of control | Debtor continued to use, possess, or control asset post-transfer |
| Concealment | Transfer not recorded, disclosed, or reported to creditors |
| Substantially all assets | Scope of asset depletion relative to debtor's total estate |
| Inadequate consideration | FMV vs. consideration actually received |
| Timing | Transfer occurred [X days] before/after debt incurred or suit filed |
| Prior pattern | History of transfers or asset-shifting |

6. Transferee's actual or constructive knowledge of debtor's fraudulent intent (if applicable)

### 5. Causes of Action

**Count I, Actual Fraudulent Transfer**
- UVTA § 4(a)(1) [VERIFY state codification]
- Elements: (1) transfer by debtor; (2) actual intent to hinder, delay, or defraud any creditor, Incorporate badges of fraud and direct evidence of intent, Available to present and future creditors

**Count II, Constructive Fraud (Insolvency)**
- UVTA § 4(a)(2) [VERIFY state codification]
- Elements: (1) transfer without reasonably equivalent value; (2) debtor insolvent at time or became insolvent as result, Plead in the alternative to Count I

**Count III, Constructive Fraud (Insider Antecedent Debt)** *(if applicable)*
- UVTA § 5(b) [VERIFY state codification]
- Elements: (1) transfer to insider; (2) for antecedent debt; (3) debtor insolvent; (4) insider had reasonable cause to believe debtor insolvent

**Additional claims** *(as applicable)*: conspiracy to defraud creditors, aiding and abetting, successor liability, lis pendens (real property, file with complaint)

### 6. Prayer for Relief

```
- [ ] Avoidance of the transfer to extent necessary to satisfy plaintiff's claim
- [ ] Recovery of transferred property or its value from transferee
- [ ] Money judgment against debtor for underlying debt (if not already obtained)
- [ ] Money judgment against transferee to extent of asset value received
- [ ] Attachment, garnishment, or receiver to preserve assets pending judgment
- [ ] Preliminary injunction against further dissipation (if imminent risk)
- [ ] Pre- and post-judgment interest at statutory rate
- [ ] Costs of suit
- [ ] Attorney's fees (if permitted by statute, verify jurisdiction)
- [ ] Such other relief as the court deems just and proper
```

### 7. Signature Block & Verification

- Attorney: name, bar number, firm, address, phone, email; FRCP 11 or state-equivalent certification
- **Verification**: many jurisdictions require verification for fraudulent conveyance complaints, especially when seeking provisional remedies, confirm local rules; some require notarization, others accept unsworn declaration under penalty of perjury

## Pitfalls

- **UFTA vs. UVTA** - Most states adopted UVTA (2014) but effective dates vary. [VERIFY] current state codification before citing section numbers.
- **Statute of limitations** - UVTA § 9: 4 years from transfer (actual fraud); 4 years or 1 year after discovery, whichever is later (constructive fraud). [VERIFY state equivalent.]
- **Bankruptcy intersection** - 11 U.S.C. § 548 reaches transfers within 2 years of petition; trustee may also invoke state UFTA/UVTA via § 544(b) for longer state limitations periods.
- **Good-faith defense** - Transferee who took for value and in good faith may retain the transfer. Plead facts negating good faith where known; affects remedy (avoidance vs. money judgment).
- **Reasonably equivalent value** - Distinct from fair market value; courts apply totality-of-circumstances. Inadequate price alone is not constructive fraud without insolvency.
- **Provisional remedies** - If dissipation risk is imminent, prepare TRO/preliminary injunction for concurrent filing; allege irreparable harm and likelihood of success.
- **Insider definition** - UVTA § 1(8) defines insiders broadly: relatives, general partners, directors, officers, affiliates. [VERIFY state definition.]

## Scotland/UK Adaptation

This skill is adapted for Scottish gratuitous alienation and unfair preference challenges. The following conversions apply:

### Primary Legislation
- **UFTA / UVTA** → **Bankruptcy (Scotland) Act 2016** (Part 7 - Gratuitous Alienations and Unfair Preferences) + **common law** challenge by creditors
- **UFTA § 4(a)(1) - Actual fraud** → **Gratuitous alienation** (s.98 of the 2016 Act) - challengeable if made within **5 years** before sequestration (or winding up for companies) - for no consideration or inadequate consideration
- **UFTA § 4(a)(2) - Constructive fraud** → **Unfair preference** (s.99 of the 2016 Act) - challengeable if made within **6 months** before sequestration, giving a creditor a preference over others
- **UVTA § 9 - Statute of limitations (4 years from transfer)** → **5 years** for gratuitous alienations; **6 months** for unfair preferences (from date of sequestration / winding up)
- **Bankruptcy intersection (11 U.S.C. § 548 - 2 years)** → **2016 Act** provides for trustee's challenge of pre-sequestration transactions within statutory periods
- **FRBP 7001 (adversary proceeding)** → **Petition for revocation of alienation** or **action for reduction** in the Court of Session or Sheriff Court

### Scottish-Specific Context
- **Gratuitous Alienation**: A transfer by a debtor of property for no consideration or inadequate consideration, challengeable by the trustee in sequestration or by a creditor (under common law) within 5 years before the date of sequestration / winding up
- **Unfair Preference**: A transaction that gives a particular creditor a preference over others in the event of insolvency, challengeable within 6 months before sequestration
- **Common Law Challenge**: Creditors can also challenge gratuitous alienations under the common law (the 2016 Act does not abolish common law rights, s.98(2) preserves them) - the limitation is 20 years (long negative prescription)
- **Court**: Challenges are brought in the **Sheriff Court** or **Court of Session** (depending on value)
- **Procedure**: By **Initial Writ** (Sheriff Court) or **Summons** (Court of Session) - not an adversary complaint
- **Interim remedies**: **Interim interdict** (not TRO/preliminary injunction) to preserve assets pending determination; **arrestment** to freeze assets; **inhibition** against heritable property
- **Expenses**: Loser pays principle applies (judicial expenses follow success)
- **Accountant in Bankruptcy (AiB)**: The Scottish Government agency that oversees sequestration; individual trustees also administer sequestrations
- **Insolvency Act 1986**: For company insolvencies, s.242-243 apply (gratuitous alienations and unfair preferences) in Scotland; the 2016 Act is for individual debtors

### Forms & Documents (see `scots-forms/`)
- `initial-writ-gratuitous-alienation-template.md` - template Initial Writ for challenging a gratuitous alienation
- `petition-for-reduction-template.md` - template petition to reduce (set aside) a transfer
- `interim-interdict-application-template.md` - template for interim interdict to preserve assets
- `minute-for-arrestment-template.md` - template for arrestment of assets

### Key Terminology Changes
| US Term | Scottish Equivalent |
|---------|-------------------|
| Fraudulent conveyance/complaint | Gratuitous alienation / Unfair preference |
| UFTA/UVTA | Bankruptcy (Scotland) Act 2016 Part 7 |
| Avoidance | Reduction (setting aside the transfer) |
| FRCP / FRBP | RCS / Sheriff Court Ordinary Cause Rules |
| Plaintiff | Pursuer |
| Defendant | Defender |
| Complaint | Initial Writ / Summons |
| Prayer for relief | Crave |
| TRO / Preliminary injunction | Interim interdict / Interim suspension |
| Diversity jurisdiction | Not applicable |
| Good-faith purchaser defence | Bona fide purchaser for value without notice |
| Insolvency | Sequestration (individual) / Liquidation (company) |
| Trustee (bankruptcy) | Trustee

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
