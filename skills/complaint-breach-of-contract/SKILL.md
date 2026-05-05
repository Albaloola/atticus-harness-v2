---
name: complaint-breach-of-contract
language: en
description: Drafts a Scottish pursuer-side breach of contract initial writ / summons with court details, jurisdiction/venue, four-element cause of action, and crave for relief. [SCOTS] Trigger when user needs to draft a breach of contract initial writ for the Sheriff Court or Court of Session. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Initial Writ / Summons for Breach of Contract (Scotland)

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

Generates a pleading-ready pursuer-side document structured around the four breach-of-contract elements with jurisdiction-appropriate procedural compliance.

## Prerequisites

Collect before drafting:

1. **Governing contract** - executed agreement with amendments, exhibits, attachments
2. **Correspondence** - emails, letters, formal cure/notice communications (chronological)
3. **Performance evidence** - invoices, delivery records, payment confirmations
4. **Breach evidence** - documentation of defender's failure, formal cure notices, responses
5. **Damage calculation** - itemised losses with supporting documentation
6. **Filing court** - Sheriff Court (Simple Procedure ≤£5,000; Ordinary Cause >£5,000) or Court of Session (value >£100,000 or complex matters)

## Quick Start

1. Identify filing court, Sheriff Court (Ordinary Cause or Simple Procedure) or Court of Session, and confirm jurisdiction
2. Extract party details, contract terms, and breach facts from documents
3. Draft the initial writ or summons in order: instance, jurisdiction/venue, condescendence, pleas-in-law, crave for relief
4. Verify procedural requirements (crave, pleadings, signature, warrant for service) against applicable rules

## Initial Writ / Summons Sections

### 1. Instance (Parties and Court)

- Full court name with Sheriffdom / Division, Case number (if assigned)
- Complete legal names and designations of all parties, Jurisdiction-specific formatting per Sheriff Court or Court of Session rules

### 2. Jurisdiction & Venue

| Element | Sheriff Court | Court of Session |
|---|---|---|
| Subject matter | Simple Procedure: value ≤£5,000; Ordinary Cause: >£5,000 | Exclusive for certain matters; value >£100,000 may justify |
| Venue | Defender's domicile or place of business; contract performance location | Defender's domicile in Scotland; or Lord Ordinary's discretion |
| Basis | Civil Jurisdiction and Judgments (Scotland) Order 2014; Civil Jurisdiction and Judgments Act 1982 | Court of Session Act 1988 |

State amount in controversy where jurisdictionally required.

### 3. Party Identification

- **Individuals**: full name, address, occupation/designation
- **Entities**: legal form (Ltd/PLC/LLP), registered number, registered office, principal place of business
- **Representative parties**: capacity and source of authority

### 4. Condescendence (Factual Background)

Numbered articles in chronological narrative covering:

- **Formation** - date, place, parties, consideration, essential terms (refer to contract article numbers)
- **Pursuer's performance** - dates, amounts, deliverables
- **Defender's breach** - obligations unperformed, breach date, formal intimation, cure notice status
- **Defender's response** - acknowledgment, dispute, or silence
- **Resulting loss** - causal link from breach to damages

Ground all articles in documents with specific dates, amounts, and quoted contract language. Number each article consecutively.

### 5. Pleas-in-Law

State each legal basis as a separate plea:

1. **Relevancy plea**: The pursuer's averments being relevant and material, ought to be admitted to proof
2. **Merits plea**: The defender having breached the contract, is liable to the pursuer in damages (or as craved)
3. **Quantum plea**: The amount of damages should be assessed by the Court
4. **Interest plea**: The defender should be liable for judicial interest on sums found due
5. **Expenses plea**: The defender should be found liable in the expenses of the process

[SCOTS: Note, Pleas-in-law are unique to Scottish civil procedure. Each plea must be a single sentence of law + remedy.]

### 6. Crave for Relief (Prayer)

- **Principal crave**: Decree for payment of [amount] with interest
- **Alternative craves**: Specific implement (where appropriate), declarator, interdict
- **Interest**: At the judicial rate (currently 8% p.a. - verify current rate with SCTS guidance) from the date of citation or breach
- **Expenses**: Find the defender liable in the expenses of process
- **Further relief**: Such other and further relief as may seem to the Court to be just and proper
- **Punitive damages**: [SCOTS: Not available in Scotland. Scotland has no equivalent of punitive or exemplary damages in contract. Aggravated damages are limited to delict and only in specific circumstances.]

### 7. Procedural Requirements

- **Warrant for service**: Seek warrant for service upon the defender
- **Jury trial**: Civil jury trial is available in the Court of Session for certain cases (personal injury, defamation) - generally not for breach of contract
- **Verification**: No equivalent to sworn verification in Scottish procedure, pleadings are signed by solicitor, not sworn
- **Signature block**: Solicitor name, firm, address, and agent details

## Pitfalls & Checks

- Number all articles of condescendence consecutively for cross-reference, Keep factual, objective tone, no inflammatory language, Ensure condescendence preemptively addresses likely defences: denial of contract, extrication (rescission), waiver, personal bar, force majeure, All averments must be capable of being supported by evidence at proof, Verify Sheriff Court rules (Ordinary Cause Rules or Simple Procedure Rules) or Court of Session Rules for formatting, margins, font, and page limits before finalising

## Scotland/UK Adaptation

### Terminology Changes

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| Plaintiff | Pursuer |
| Defendant | Defender |
| Complaint | Initial Writ (Sheriff Court) or Summons (Court of Session) |
| Caption | Instance |
| Cause of Action | Averments in Condescendence + Pleas-in-Law |
| Prayer for Relief | Crave |
| Discovery | Commission and Diligence (including commission to take evidence, inspection, and recovery of documents) |
| Summary Judgment | Summary Decree (available in Sheriff Court and Court of Session) |
| Attorney | Solicitor (or Advocate) |
| Trial (civil) | Proof (Sheriff Court) / Proof before Answer (wider issues) |
| Rule 11/Signature | No direct equivalent, solicitor signs; no certification of factual basis |
| Jury demand | Civil jury trial only available in Court of Session (limited categories) |
| Federal Diversity / $75K threshold | N/A, Scottish courts have territorial jurisdiction based on defender's domicile or place of business |
| Statute of Frauds | Requirements of Writing (Scotland) Act 1995 - certain contracts require written probative document |
| Punitive damages | Not available in Scotland |

### Court System

| Threshold | Court | Procedure |
|-----------|-------|-----------|
| ≤£5,000 | Sheriff Court | Simple Procedure (simplified rules, sheriff as case manager) |
| >£5,000 | Sheriff Court | Ordinary Cause (full written pleadings, procedural hearings) |
| >£100,000 or complex | Court of Session (Outer House) | Written pleadings, procedure roll, proof |
| Appeal from Sheriff | Sheriff Appeal Court | |
| Appeal from Court of Session | Inner House → UK Supreme Court (with permission) | |

### Prescription and Limitation

- **Contract claims**: Prescription and Limitation (Scotland) Act 1973 - generally **5 years** for obligations to pay sums due under a contract (from when payment was due); **20-year long-stop** for obligations not relating to sums
- **Breach of contract resulting in personal injury**: 3 years from injury date or date of knowledge
- **Loss discovered later**: 5 years from when the loss was discovered or ought to have been discovered

### Expenses (Costs)

- **"Loser pays"** principle: judicial expenses follow the event, the unsuccessful party typically pays the successful party's expenses
- **Simple Procedure**: Fixed expenses tables
- **Ordinary Cause**: Expenses taxed on the Sheriff Court scale
- **Court of Session**: Expenses taxed on the Court of Session scale
- **No contingency fees**: Conditional Fee Agreements (CFAs) and speculative fee arrangements are permitted but regulated; damages-based agreements (DBAs) limited
- **Legal aid**: Available via the Scottish Legal Aid Board for eligible parties

### Key Scottish Differences

- **Pleas-in-law**: Mandatory in all Scottish civil pleadings, state the legal proposition justifying the crave
- **No cross-border jurisdiction**: Scottish courts have jurisdiction where the defender is domiciled in Scotland, where the obligation was performed in Scotland, or by prorogation
- **Interest**: Judicial interest runs from the date of citation (or another date specified by the court) at the judicial rate set by SCTS
- **Third party rights**: Title and interest to sue must be established; no US-style standing requirement, Scottish law requires a real interest in the matter
- [VERIFY: If the contract contains a jurisdiction clause, check whether it prorogates the jurisdiction of a Scottish court or a foreign court. The Civil Jurisdiction and Judgments Act 1982 governs intra-UK jurisdiction.]

### GBP Guidance

Court fees for initial writs vary: Sheriff Court Ordinary Cause filing fee approximately £200-£300 (subject to annual SCTS fee increases). Simple Procedure fees are lower. Legal costs for a straightforward Sheriff Court contract claim typically £3,000-£8,000; Court of Session significantly more. Use [AMOUNT] placeholders where figures are unknown.

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
