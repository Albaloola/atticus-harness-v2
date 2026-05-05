---
name: heritable-security-enforcement-summary
language: en
description: Generates structured chronological summaries of Scottish/UK heritable security enforcement proceedings from case documents. Extracts parties, property, loan information, procedural timeline, court decisions, deadlines, and current status. Flags Mortgage Rights (Scotland) Act 2001 applications, bankruptcy sequestration, homeowner pre-action requirements, Consumer Credit Act issues, and procedural irregularities. Adapts to the Scottish standard security enforcement framework (calling-up, default procedure, and court application under s.24 of the Conveyancing and Feudal Reform (Scotland) Act 1970). Use when summarising standard security enforcement case posture for creditor representation, debtor defence, or property transactions affected by pending enforcement. [Atticus UK/Scots refined]
tags:
- SCOTS [scots, scotland, uk, heritable-security, standard-security, repossession]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Heritable Security Enforcement Summary (Scotland/UK)

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

Produces a structured case summary from standard security enforcement documents for rapid legal review of procedural posture, deadlines, and next steps within the Scottish legal system.

## Required Inputs

1. **Court documents** - Initial Writ, Summary Application, Answers, Defences, motions, court orders
2. **Notices** - Calling-up notice (Form A, Schedule 6, 1970 Act), Notice of Default (Form B, Schedule 6 / Schedule 3), Notice to Occupier (Form BB and Form F), Section 24 notice
3. **Loan documents** - Standard Security, personal bond, payment history, standard conditions
4. **Orders and judgments** - Interlocutors, Summary Decree, decree of declarator, sale confirmation
5. **Bankruptcy / sequestration filings** or protected trust deed correspondence, if applicable

## Quick Start

1. Identify enforcement type, calling-up (non-judicial sale) vs. default procedure vs. court application under s.24 of the 1970 Act
2. Extract case overview fields into the Case Overview table
3. Build chronological procedural timeline from documents
4. Catalog all court decisions (interlocutors) with reasoning and impact
5. Compile critical deadlines with current status
6. Assess current posture, immediate actions, and projected timeline
7. Run the Flags & Issues checklist

> [SCOTS: Note] Scotland does not have a "judicial vs. non-judicial" foreclosure distinction in the US sense. The Scottish system operates under the Conveyancing and Feudal Reform (Scotland) Act 1970. A creditor may exercise a standard security through:
> - **Calling-up notice (s.19):** Non-judicial procedure requiring 2 months notice (Form A, Schedule 6). The debtor must pay the full debt within the notice period. If they fail, the creditor may sell the property without court proceedings, but for residential property, in practice, court proceedings are still needed to obtain vacant possession.
> - **Default notice (s.21):** For remediable defaults, 1 month notice (Form B, Schedule 6, referencing Schedule 3 remedies).
> - **Court application (s.24):** Summary Application to the Sheriff Court by Initial Writ, required for residential property repossession. The debtor receives a s.24 notice with 21 days to respond.
> - The Mortgage Rights (Scotland) Act 2001 allows the debtor, spouse/partner, or occupier to apply to the court to suspend or delay enforcement.

## Output Structure

### 1. Case Overview

| Field | Detail |
|---|---|
| Court & Case No. | |
| Creditor / Lender | |
| Debtor / Borrower | |
| Property Owner (if different) | |
| Property Description | Legal description + postal address |
| Original Loan Amount & Date | |
| Amount in Default | |
| Enforcement Type | Calling-up (s.19) / Default procedure (s.21) / Court application (s.24) |

### 2. Procedural Timeline

Chronological table of all significant events:

| Date | Event | Legal Significance |
|---|---|---|
| | Initial arrears / default | |
| | Calling-up notice served (Form A, Schedule 6) | Two-month notice period triggered |
| | Notice of Default served (Form B, Schedule 6) | One-month remediable default period |
| | Mortgage Rights (Scotland) Act application | Court may suspend enforcement |
| | Summary Application lodged / Initial Writ | Court proceedings commenced |
| | Section 24 notice served | 21-day response period for debtor |
| | Answers / Defences lodged | |
| | Interlocutor hearings / procedural | |
| | Motions / Summary Decree application | |
| | Decree / Court order granted | |
| | Sale arranged / concluded | |

### 3. Key Judicial Decisions

For each interlocutor or order: date, ruling, court's reasoning, and practical impact.

### 4. Critical Dates & Deadlines

| Date | Deadline / Event | Status |
|---|---|---|
| | Calling-up notice expiry (2 months from service) | |
| | Default notice expiry (1 month from service) | |
| | Response deadline (21 days from s.24 notice) | |
| | Hearing / debate dates | |
| | Statutory timescales (Home Owner and Debtor Protection (Scotland) Act 2010 pre-action requirements) | |

### 5. Current Status & Next Steps

- **Current procedural posture** - where the matter stands in the enforcement process
- **Immediate actions required** - by which party, by when
- **Projected timeline** to resolution or sale

### 6. Flags & Issues

Check all that apply and note specifics:

- [ ] **Bankruptcy / Sequestration** - protected trust deed in place? Moratorium on enforcement?
- [ ] **Loss mitigation / Pre-action requirements** - Home Owner and Debtor Protection (Scotland) Act 2010 pre-action requirements complied with? FCA MCOB 13 rules on arrears handling?
- [ ] **Standing challenge** - assignation of standard security properly recorded? Creditor entitled to enforce?
- [ ] **Consumer Credit Act 1974** - s.126 enforcement of land mortgages: regulated agreement requires court order
- [ ] **Mortgage Rights (Scotland) Act 2001** - application to suspend/postpone enforcement; debtor/occupier applied?
- [ ] **Notice defects** - calling-up notice or default notice properly served (post, personal, or sheriff officer)? Correct forms used (Form A/B/BB/E/F)?
- [ ] **Procedural irregularities** - missed statutory deadlines, defective service, incorrect forms
- [ ] **Deficiency / shortfall** - right to pursue shortfall after sale under standard security personal covenant
- [ ] **Right to occupy / tenancy rights** - occupiers' rights, tenancy protections, entitled residents

> [SCOTS: Note] Pre-action requirements under the Home Owner and Debtor Protection (Scotland) Act 2010 apply to residential properties. The creditor must have regard to guidance issued by the Scottish Ministers before commencing proceedings. The FCA's MCOB 13 sourcebook also imposes requirements on regulated mortgage lenders regarding arrears handling and repossession, which apply in Scotland.

## Pitfalls & Checks

- **Enforcement mechanism**: Always identify whether the creditor proceeded by calling-up (s.19), default notice (s.21), or court application (s.24). Distinguish non-judicial sale from the requirement for court proceedings for residential possession.
- **Jurisdiction**: Scotland only for this summary. England/Wales has a separate mortgage possession framework under CPR 55. NI has separate procedures. [VERIFY applicable statute, Conveyancing and Feudal Reform (Scotland) Act 1970 is primary]
- **Monetary figures**: State amounts exactly as in source documents; never round or estimate. Convert to GBP if originally in other currency.
- **Citations**: Reference specific document names and page numbers for key facts and dates.
- **Objectivity**: Use neutral language suitable for creditor or debtor representation.
- **UK regulatory overlays**: Note FCA MCOB 13 arrears and repossession rules, Consumer Credit Act 1974 s.126 (regulated agreements), Mortgage Rights (Scotland) Act 2001, Home Owner and Debtor Protection (Scotland) Act 2010. [VERIFY current FCA Handbook provisions]

## Scotland/UK Adaptation

### Key Differences from US Foreclosure Framework

| US Concept | Scotland/UK Equivalent |
|---|---|
| Foreclosure | Heritable security enforcement / Standard security calling-up |
| Mortgage / Deed of Trust | Standard Security (Conveyancing and Feudal Reform (Scotland) Act 1970, Schedule 2, Forms A/B) |
| Judicial vs. Non-Judicial | Scotland: Calling-up (non-judicial sale right, s.19) + court application for residential possession (s.24). No binary judicial/non-judicial distinction. |
| Plaintiff / Lender | Creditor / Lender |
| Defendant / Borrower | Debtor / Borrower |
| Complaint / Petition | Initial Writ (Summary Application) |
| Notice of Default | Calling-up notice (Form A, Schedule 6) / Notice of Default (Form B, Schedule 6, referencing Schedule 3 remedies) |
| Summary Judgment | Summary Decree |
| TILA / RESPA | Consumer Credit Act 1974 (s.126 - land mortgage enforcement requires court order); Mortgage Rights (Scotland) Act 2001; FCA MCOB 13 |
| CFPB | FCA (Financial Conduct Authority) - MCOB 13 for arrears and repossessions |
| State law variations | Scottish statute is uniform across Scotland. England/Wales has separate CPR 55 possession procedure. |
| USD amounts | GBP (£) amounts |
| Bankruptcy stay (US Chapter 13) | Sequestration / Protected Trust Deed, moratorium on enforcement under Bankruptcy (Scotland) Act 2016 |
| Deficiency judgment | Personal covenant in standard security, creditor may pursue shortfall; no separate "deficiency judgment" action needed |

### Statutory Framework

1. **Conveyancing and Feudal Reform (Scotland) Act 1970** - governs creation and enforcement of standard securities; Schedules 2 (forms of security), 3 (standard conditions and remedies on default), 6 (calling-up and default notice forms)
2. **Mortgage Rights (Scotland) Act 2001** - allows debtor, spouse/partner, or occupier to apply to court to suspend or postpone enforcement; amends Schedule 6 to add Forms E and F (notices for s.24 applications)
3. **Home Owner and Debtor Protection (Scotland) Act 2010** - pre-action requirements before residential enforcement proceedings; powers of court to set aside calling-up notices and default notices
4. **Consumer Credit Act 1974, s.126** - land mortgage securing a regulated agreement is enforceable only on court order
5. **FCA Handbook, MCOB 13** - arrears, repossessions, sale shortfalls for regulated mortgage contracts and home purchase plans (applies UK-wide, including Scotland)
6. **Homelessness etc. (Scotland) Act 2003, s.11** - creditor must notify local authority when initiating proceeding for repossession of residential property
7. **Bankruptcy (Scotland) Act 2016** - sequestration and protected trust deed moratorium on enforcement

### Key Forms (Schedule 6, 1970 Act as amended)

| Form | Purpose |
|---|---|
| Form A (Schedule 6) | Calling-up notice - 2 months to pay entire debt |
| Form B (Schedule 6) | Notice of default - 1 month to remedy remediable default |
| Form BB (Schedule 6) | Notice to Occupier (served with calling-up or default notice) - informs occupiers of rights under Mortgage Rights (Scotland) Act 2001 |
| Form C (Schedule 6) | Acknowledgment of receipt of notice |
| Form D (Schedule 6) | Certificate of service of notice |
| Form E (Schedule 6) | Notice to debtor/proprietor of court application under s.24 - served with Initial Writ |
| Form F (Schedule 6) | Notice to occupier of court application under s.24 |
| Form 11D (Act of Sederunt) | Notice to entitled residents in application for enforcement of security over residential property |
| Form 11E (Act of Sederunt) | Response form for entitled residents |

> [SCOTS: Note] The "judicial vs. non-judicial" distinction used in US foreclosure analysis does not apply directly to Scotland. A creditor with a standard security over non-residential property can sell without court proceedings after serving a valid calling-up notice (s.19) or default notice (s.21). For residential property, the creditor must in practice apply to court under s.24 for warrant to enter into possession and sell. The Mortgage Rights (Scotland) Act 2001 gives occupants a statutory right to apply for suspension of enforcement regardless. Where a standard security secures a Consumer Credit Act regulated agreement, s.126 CCA 1974 requires a court order for enforcement.

### Court Procedure (Sheriff Court)

1. **Initial Writ** - commences summary application; sets out grounds, amounts, security details
2. **Section 24 notice** - served on debtor and occupiers alongside Initial Writ; 21 days to respond
3. **Answers / Defences** - debtor's response within 21 days
4. **Hearing / Debate** - procedural hearing on opposed applications
5. **Interlocutor / Decree** - court's decision granting or refusing warrant to sell
6. **Sale** - creditor sells property; surplus returned to debtor; shortfall pursued under personal covenant

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
