---
name: adversary-proceeding-complaint
language: en
description: '[SCOTS] Drafts applications to the Sheriff Court or Court of Session in Scottish insolvency proceedings under the Bankruptcy (Scotland) Act 2016 and Insolvency Act 1986. Covers discharge disputes, gratuitous alienations (s. 98 B(A)S 2016), unfair preferences (s. 99 B(A)S 2016), and other insolvency challenges. Produces a pleading-ready application with instance, articles of condescendence, pleas-in-law, and crave. Triggers when a trustee in sequestration, liquidator, or creditor needs to initiate court proceedings within Scottish insolvency proceedings. [Atticus UK/Scots refined]'
tags:
- SCOTS, litigation, pleading, drafting, insolvency, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Insolvency Court Application (Scotland)

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

Drafts a court application to the Sheriff Court or Court of Session in connection with Scottish insolvency proceedings.

**Important note**: Scotland has no direct equivalent to US bankruptcy adversary proceedings under FRBP 7001. This skill adapts the concept to Scottish insolvency law, specifically challenges by the trustee in sequestration or liquidator under the Bankruptcy (Scotland) Act 2016 ("B(A)S 2016") and the Insolvency Act 1986 ("IA 1986").

## Prerequisites

Gather before drafting:

1. **Case info** - court, Sheriffdom, case number, type of insolvency (sequestration, liquidation, trust deed)
2. **Parties** - applicant name and capacity (trustee, liquidator, creditor); respondent name, address, relationship to estate
3. **Facts** - chronology of events, transactions, transfers with dates, amounts, and documentary evidence
4. **Claim types** - statutory basis for challenge (gratuitous alienation, unfair preference, etc.)
5. **Relief sought** - specific monetary amounts, reductions of deeds, or orders

## Quick Start

1. Collect all prerequisites; flag gaps with `[CONFIRM WITH AGENT/CLIENT]`
2. Build the instance from the existing insolvency proceedings
3. Draft jurisdiction and basis paragraphs
4. Write numbered articles of condescendence in chronological order
5. Structure each claim around every required statutory element
6. Draft crave for relief with specific amounts per claim
7. Append signature block

## Document Structure

### Instance (Court and Parties)

| Element | Format |
|---------|--------|
| Court | SHERIFFDOM OF [SHERIFFDOM] AT [LOCATION] - or COURT OF SESSION, OUTER HOUSE |
| Parties | Applicant (Trustee/Liquidator/Creditor) v. Respondent |
| Case No. | Main insolvency reference if applicable |
| Designation | Full name, address, and capacity for each party |

### Introductory Article

State the application is made in connection with the sequestration/liquidation of [Debtor/Company], identify the statutory basis, and provide a one-sentence summary of the dispute and primary relief sought.

### Jurisdiction and Basis

- **Court's jurisdiction**: Under the Bankruptcy (Scotland) Act 2016 / Insolvency Act 1986, the Sheriff Court of the Sheriffdom where the debtor resided/company was registered; or the Court of Session for complex matters
- [SCOTS: There is no separate "adversary proceeding"; the application proceeds as part of the existing insolvency proceedings or by separate initial writ. Sheriff Court has concurrent jurisdiction with the Court of Session for most P275-related challenges.]

### Parties

Numbered articles identifying each party: full name, capacity (appointed trustee/liquidator/creditor), relationship to estate, and address.

### Condescendence (Factual Allegations)

Numbered articles in chronological order covering: sequestration/liquidation date and procedural history, party relationships, each distinct event or transaction in its own article, and specific dates, monetary amounts, and document references.

### Claim-Specific Allegations

Tailor factual detail to the claim type:

| Claim | Statute | Key Allegations |
|-------|---------|-----------------|
| Gratuitous Alienation | B(A)S 2016, s. 98 / IA 1986, s. 242 (for companies) | Transfer details, consideration (or lack thereof), value, timing relative to insolvency, debtor's indebtedness at time [VERIFY section numbers] |
| Unfair Preference | B(A)S 2016, s. 99 / IA 1986, s. 243 (for companies) | Transfer details, date, beneficiary relationship, preference created, debtor's insolvency at time [VERIFY section numbers] |
| Extortionate Credit Transaction | IA 1986, s. 244 | Terms, grossly exorbitant, timing |
| Challenge to Discharge | B(A)S 2016, s. 137 | Failure to cooperate, undisclosed assets, misconduct |
| Challenge to Award of Sequestration | B(A)S 2016, s. 15 | Grounds for reduction |

### Articles / Counts

Each claim in a separate section titled ARTICLE [N] - [DESCRIPTIVE TITLE WITH STATUTORY CITE]. Begin with an incorporating article referencing prior condescendence, then address every statutory element with supporting factual references.

### Pleas-in-Law

Draft appropriate pleas-in-law:

1. **Relevancy**: The applicant's averments being relevant and material, ought to be admitted to proof
2. **Statutory plea**: The transaction/transfer being a gratuitous alienation [unfair preference] under [statute], falls to be reduced/reduced
3. **Quantum**: The loss to the estate is [amount] as condescended upon
4. **Interest**: Judicial interest at [rate] per annum from [date] should be applied
5. **Expenses**: The respondent should be found liable in the expenses of the application

### Crave for Relief

- **Principal crave**: Reduction of the deed/transfer dated [date] between [parties]
- **Declarator**: That the transfer is a gratuitous alienation/unfair preference
- **Payment**: For payment of [sum] to the applicant on behalf of the estate
- **Interest**: At the judicial rate from the date of intimation
- **Expenses**: Find the respondent liable in the expenses of process
- **Further**: Such other and further relief as may seem to the Court to be just and proper

### Signature Block

Solicitor signature with firm, address, and agent details.

## Drafting Rules

- Number all articles of condescendence, one fact per article, Maintain consistent defined terms throughout, Cite statutes in Scots style (Act of Parliament, section, year)
- Maintain neutral pleading tone, no argumentative language, Flag assumed facts with `[CONFIRM WITH AGENT/CLIENT]`

## Claim-Specific Information

- **Gratuitous alienations**: Look-back period is 5 years (B(A)S 2016, s. 98), or 2 years for certain alienations; challenge is against the recipient
- **Unfair preferences**: Look-back period is 6 months (B(A)S 2016, s. 99); challenge is against the preferred creditor
- **Discharge**: Sequestration typically lasts 12 months; early discharge or extension is at the Accountant in Bankruptcy's or court's discretion
- **Local rules**: Verify Sheriff Court Ordinary Cause Rules or Simple Procedure Rules for formatting

## Troubleshooting

- **Missing case number** - use the main sequestration/liquidation reference
- **Multiple claim types** - draft each as a separate article with its own element-by-element allegations
- **Mixed Scots/English entities** - ensure correct statutory basis: B(A)S 2016 for individuals; IA 1986 (as applied in Scotland) for companies, company voluntary arrangements and administrations under the IA 1986 apply in Scotland but are UK-wide statutes

## Scotland/UK Adaptation

### Terminology Changes

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| Bankruptcy Court | Sheriff Court (competent for insolvency matters); Court of Session (Outer House) |
| FRBP 7001 (Adversary Proceeding) | No direct equivalent, uses initial writ/application within existing sequestration/liquidation |
| Chapter 7/11/13 | Sequestration (individuals); Liquidation/Administration (companies) |
| Debtor (bankruptcy) | Debtor (individual sequestration) / Company (corporate insolvency) |
| Trustee (Chapter 7) | Trustee in Sequestration (individuals); Liquidator / Administrator (companies) |
| § 523 (dischargeability) | B(A)S 2016, Part 6 (discharge from sequestration) - no direct equivalent to non-dischargeable debts in US sense |
| § 547 (preference) | B(A)S 2016, s. 99 (unfair preferences) / IA 1986, s. 243 (companies) |
| § 548 (fraudulent transfer) | B(A)S 2016, s. 98 (gratuitous alienations) / IA 1986, s. 242 (companies) |
| § 362 (stay) | B(A)S 2016, ss. 37-39 (moratorium on diligence); Administration moratorium (Sch. B1, para. 43) |
| 28 U.S.C. § 1334 / § 157 | No direct equivalent, Sheriff Court has statutory jurisdiction under B(A)S 2016 / IA 1986 |
| Twombly/Iqbal plausibility | No equivalent, Scottish pleading requires fair notice of the case to be met and relevant averments |
| Bluebook citation | Scottish citation: "section [N], Bankruptcy (Scotland) Act 2016" |
| ECF (electronic filing) | Scottish Courts and Tribunals Service (SCTS) - Civil Online Portal for certain procedures |
| Certificate of Service | No direct equivalent; warrant for service and execution of service are used |

### Key Scottish Differences

- **No Bankruptcy Court as a separate court**: Insolvency matters in Scotland proceed in the Sheriff Court or Court of Session, there is no specialist bankruptcy court. The Accountant in Bankruptcy (AiB) is the non-judicial regulator.
- **Accountant in Bankruptcy (AiB)**: Scotland has a public official who administers sequestrations and supervises trustees. AiB can award sequestration without court involvement (the "AiB route").
- **Look-back periods**:

| Challenge | Look-back (Individuals) | Look-back (Companies) |
|-----------|------------------------|----------------------|
| Gratuitous alienation (challengeable transaction) | 5 years (B(A)S 2016, s. 98) | 5 years / 2 years (IA 1986, s. 242) |
| Unfair preference | 6 months (B(A)S 2016, s. 99) | 6 months / 2 years (IA 1986, s. 243) |
| Extortionate credit | Any time (IA 1986, s. 244) | Any time (IA 1986, s. 244) |

- **Prescription**: Insolvency challenges are subject to the limitation periods in the statutes themselves, not general prescription. [VERIFY whether the Prescription and Limitation (Scotland) Act 1973 applies subsidiarily.]
- **No punitive damages**: Aggravated damages are not available in insolvency challenges, the claim is for reduction, restitution, or payment of sums abstracted from the estate.
- **Insolvency Act 1986 in Scotland**: The IA 1986 applies to companies registered throughout Great Britain, but has separate provisions for Scotland (Parts I-VII apply with modifications; specific sections 242-245 apply only in Scotland).

### Court Scheme

| Level | Court | Competence |
|-------|-------|------------|
| First instance | Sheriff Court | All sequestration/company matters (most common) |
| First instance | Court of Session (Outer House) | Larger or complex matters |
| First appeal | Sheriff Appeal Court | Appeals from Sheriff Court |
| Second appeal | Court of Session (Inner House) | Leave required |
| Final appeal | UK Supreme Court | On matters of general public importance |

### Available Remedies

- **Reduction** (to set aside a transfer or deed)
- **Declarator** (judicial declaration of legal position)
- **Decree for payment** of sums to the estate
- **Interim interdict** to preserve assets pending determination

### Statute References

| Subject | Statute | Notes |
|---------|---------|-------|
| Individual sequestration | Bankruptcy (Scotland) Act 2016 | Primary Scottish statute |
| Company liquidation (Scotland) | Insolvency Act 1986, Part IV, Chapter VIII (ss. 138-155) | Applies to Scotland-specific winding-up |
| Company administration | IA 1986, Sch. B1 | UK-wide with Scottish modifications |
| Gratuitous alienations (individuals) | B(A)S 2016, s. 98 | |
| Unfair preferences (individuals) | B(A)S 2016, s. 99 | |
| Gratuitous alienations (companies) | IA 1986, s. 242 | Scotland-only provision |
| Unfair preferences (companies) | IA 1986, s. 243 | Scotland-only provision |
| Extortionate credit (companies) | IA 1986, s. 244 | UK-wide |
| Discharge from sequestration | B(A)S 2016, ss. 136-148 | |

[SCOTS: Note, This is a substantial adaptation of a US bankruptcy adversary-proceeding template into Scottish insolvency procedure. The two systems are structurally different: the US Bankruptcy Court is a specialised federal court; Scotland uses the ordinary court system for insolvency matters with the Accountant in Bankruptcy as administrator. [VERIFY] section numbers for B(A)S 2016 and IA 1986 before filing, the current section numbers should be checked against the latest versions of these Acts (particularly post-2024 amendments).]

### GBP Guidance

Sheriff Court application filing fees for insolvency matters are approximately £150-£300 (SCTS, check current scale). Trustee/liquidator legal costs vary significantly. The estate's funds will bear the cost of the challenge, consider the likely value recovery before proceeding. For low-value challenges, the AiB route (individual sequestration) may be more cost-effective than court proceedings.

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
