---
name: breach-purchase-complaint
language: en
description: Drafts a Scottish Initial Writ or Ordinary Cause Summons for breach of missives (real property purchase agreement). Triggers when the user needs to initiate court proceedings for breach of missives, a property purchase contract dispute, or buyer/seller missives dispute. Covers instance, jurisdiction/venue, parties, condescendence/articulate facts, pleas-in-law, craves, and prayer for remedy. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Initial Writ/Summons for Breach of Missives (Scotland/UK Adaptation)

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

Generates a filing-ready Initial Writ (Court of Session) or Ordinary Cause Summons (Sheriff Court) alleging breach of missives for the sale and purchase of heritable property, with pleading-elements-driven condescendence and appropriate pleas-in-law.

## Prerequisites

Collect before drafting:

- **Executed missives** - offer, acceptance, qualified acceptance, all missive letters, any supplemental missives
- **Party details** - full legal names, addresses, entity types, Companies House numbers (if corporate), registered office addresses
- **Breach documentation** - correspondence, emails, formal demands, missive-termination notices, notice to complete, performance timeline
- **Damages evidence** - market valuation evidence (surveyor report), consequential losses (bridging finance, storage, legal costs on sub-sale), mitigation expenses
- **Court/jurisdiction** - target court (Sheriff Court where property situated, or Court of Session), local rules, formatting requirements

## Workflow

### 1. Instance (Caption)

Include court name (Sheriff Court [locality]/Court of Session), blank case number, full party names with designation (heritable creditor, trustee, etc.), and title "INITIAL WRIT" (Court of Session) or "ORDINARY CAUSE SUMMONS" (Sheriff Court). Format per the Rules of the Court of Session 1994 / Ordinary Cause Rules 1993.

### 2. Jurisdiction & Venue

- State basis of court's jurisdiction (Civil Jurisdiction and Judgments etc. [EU] Regulations 2019 / common law domicile-based jurisdiction)
- Address any **jurisdiction** or **choice-of-law** clauses in the missives, Tie venue to: defender's domicile, place of performance (property location), or place of formation of missives, Cite relevant provisions of the Civil Jurisdiction and Judgments (Scotland) Order / Sheriff Court (Scotland) Act 1907 / Courts Reform (Scotland) Act 2014

### 3. Parties

Allege for each party: full legal name, address, entity type and Companies House number (if applicable), role in the missives (purchaser/seller), and any trading names. For corporate defenders, include registered office and Scotland address for service.

### 4. Condescendence (Factual Allegations)

Structure as numbered articles in chronological order:

1. **Formation of missives** - date of offer, acceptance, property (address, description, title number), price, date of entry
2. **Material terms** - conditions (survey, finance, etc.), date of entry, any special conditions, standard clauses (Solicitors Scotland standard missive clauses)
3. **Pursuer's performance** - obligations met, funds available, interest accrued, title deeds examined, searches obtained
4. **Defender's breach** - specific unperformed obligations, breach date, notice to complete if served, failure to meet date of entry
5. **Post-breach** - communications, failed attempts to settle, alternative buyer/loss evidence, mitigation steps

Quote exact missive language for breached provisions. Use specific dates, amounts, and document references. Refer to property by title number and description.

### 5. Pleas-in-Law

Plead each legal basis justifying the crave with cross-references to condescendence:

| Plea | Allegation |
|---|---|
| Relevancy and specification | Condescendence sufficiently sets forth a relevant case |
| Breach of contract | Missives constitute a binding contract; defender breached material terms |
| Loss and damage | Breach directly and foreseeably caused the pursuer's loss |
| Decree for payment | Sum craved is quantified and due |
| Specific performance (if sought) | Damages are inadequate remedy; property is unique |

### 6. Damages (in Crave)

| Category | Calculation |
|---|---|
| Direct/expectation loss | Contract price vs. open market value at date of breach |
| Consequential loss | Foreseeable losses at time of contracting (bridging finance, interest, survey/legal costs) |
| Incidental loss | Storage, interim housing, marketing costs |
| Mitigation costs | Actual and reasonable mitigation expenses |
| Additional interest | At the judicial rate (currently 8% per annum under the Act of Sederunt [Interest on Decree] 1975) |

- Check for **penalty clause** rules under Scots law, liquidated damages clauses are enforceable if genuine pre-estimate; penalty clauses are unenforceable (Cavendish Square v Makdessi [2015] UKSC 67 applies across UK)
- If deposit at issue, state amount and current holder (typically retained by solicitors as stakeholders)
- Use specific amounts or "quantum as shall be ascertained at the proof" per Scottish pleading practice

### 7. Crave (Prayer for Remedy)

Request each applicable remedy:

- Sum of [£amount] with interest at the judicial rate from [date] until payment, Alternatively or additionally: decree for specific performance (implement of missives)
- Expenses, crave expenses in the cause, Further orders as the court deems appropriate, Note: statutory interest runs on decrees at the judicial rate

Crave should be set out as numbered paragraphs. In an Ordinary Cause Summons, use precise sums. In an Initial Writ, the craves form part of the instance.

### 8. Signature & Service Details

- Signature: solicitor name, firm, address for service (including DX or email for e-service)
- Article 2 (in Sheriff Court Ordinary Cause): date, name and address of sheriff clerk, Sign in accordance with relevant court rules (no requirement for verification by pursuer in ordinary Scottish practice, but may be instructed)

## Pitfalls

- **Fraud creep** - do NOT allege fraud or fraudulent misrepresentation unless specifically instructed; keep the pleadings in breach of contract/personal bar
- **Settlement references** - do NOT include settlement communications or without-prejudice protected material
- **Corporate defenders** - verify active status with Companies House before naming
- **Prescription** - check the prescriptive period (5 years for contractual obligations under Prescription and Limitation (Scotland) Act 1973, s. 6). Flag if the breach is more than 5 years old
- **Notice to complete** - confirm whether notice to complete was served and properly complied with; failure may affect ability to treat the contract as at an end
- **Missive status** - distinguish between qualified/conditional missives and concluded missives. Only concluded missives give rise to the full obligations
- **E-filing** - confirm portal requirements (Civil Online / eDLS) for the target court
- **Expenses risk** - Scottish legal expenses rule favours the successful party; assess exposure before litigating
- **Simple Procedure**: claims under £5,000 in the Sheriff Court use Simple Procedure, not Ordinary Cause, use different pleading format

## Scotland/UK Adaptation

This skill has been adapted from US state-court complaint practice for use under Scottish civil procedure.

**Key changes:**
- **Pleading document**: replaced US 'Complaint' with Scottish Initial Writ (Court of Session) / Ordinary Cause Summons (Sheriff Court)
- **Terminology**: replaced 'plaintiff' with 'pursuer', 'defendant' with 'defender', 'cause of action' with 'pleas-in-law', 'factual allegations' with 'condescendence', 'prayer for relief' with 'crave'
- **Contract law**: replaced US real property purchase agreement with Scottish missives (offer and acceptance through solicitors). Scots law of contract is distinct, consideration doctrine differs
- **Property terminology**: replaced APN/parcel with Scottish land register title number. Heritable property not real property
- **Jurisdiction**: replaced US state court diversity/subject-matter jurisdiction with Scottish rules under the Courts Reform (Scotland) Act 2014 (Sheriff Court exclusive competence up to £100k for personal injury, ordinary cause for most property claims)
- **Doe defendants**: not applicable under Scots law, all parties must be named and designed
- **Verification**: US verification under penalty of perjury replaced by Scottish ordinary practice where no verification is generally required for initial writs/summonses
- **Prescription**: added statutory limitation under the Prescription and Limitation (Scotland) Act 1973 - 5 years for contractual claims (s. 6)
- **Interest**: replaced US statutory pre/post-judgment interest with Scottish judicial rate (currently 8% p.a.)
- **Expenses**: Scottish legal expenses system (loser ordinarily pays) is a significant strategic factor
- **Damages**: no punitive/exemplary damages in contract under Scots law
- **Simple Procedure**: flagged Simple Procedure £5k threshold as alternative route for lower-value claims
- **Currency**: converted from USD ($) to GBP (£)

**Status:** Matter-of-law conversions verified against Rules of the Court of Session 1994 and Ordinary Cause Rules 1993. Specific pleading formats require confirmation against current practice notes.

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
