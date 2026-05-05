---
name: ucc-financing-statement
language: en
description: Drafts UCC-1 Financing Statements and UCC-3 Amendments to perfect security interests under Article 9 of the Uniform Commercial Code. Handles debtor identification, collateral descriptions, filing jurisdiction, continuations, terminations, and assignments. Use when drafting UCC-1 filings, UCC-3 amendments, continuation statements, or any secured transaction perfection document. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UCC Financing Statement and Amendments

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

Produces filing-ready UCC-1 or UCC-3 documents that comply with Article 9 and state-specific filing office requirements.

## Prerequisites

Gather before drafting:

1. **Security agreement** - executed, identifying debtor, secured party, collateral
2. **Entity verification** - certificate of formation/incorporation, org ID, or individual's driver's license name
3. **Transaction documents** - loan agreement, promissory note, guaranty, subordination
4. **Collateral details** - serial numbers, account numbers, registration numbers for specific assets
5. **Filing jurisdiction** - state of organization (registered entities) or principal residence (individuals) per § 9-307

## Quick Start

1. Extract exact debtor/secured party names from organizational records or government ID
2. Determine filing office (generally Secretary of State for debtor's jurisdiction)
3. Draft collateral description using Article 9 categories
4. Assemble UCC-1 or UCC-3 with all mandatory fields
5. Run quality control checklist before filing

## Core Workflow

### 1. Extract Party Information

| Field | Individual Debtor | Organization Debtor |
|-------|-------------------|---------------------|
| Name | Exact name per driver's license / govt ID | Exact registered name per state records |
| Address | Mailing address | Mailing address |
| Jurisdiction | Principal residence state | State of organization |
| Org ID | N/A | Organizational ID number |

Cross-check debtor name against organizational documents, minor variations can render filing "seriously misleading" under § 9-506.

### 2. Determine Filing Jurisdiction

**Default**: Secretary of State for debtor's jurisdiction of organization/residence.

**Exceptions**:
- **Fixture filings** - county real estate records where fixtures located
- **As-extracted collateral** (minerals/timber) - county real estate records
- **Transmitting utilities** - state-specific procedures may apply

Confirm state-specific form requirements, e-filing availability, and current fees.

### 3. Draft Collateral Description

Use Article 9 categories: accounts, chattel paper, deposit accounts, equipment, general intangibles, instruments, inventory, investment property, letter-of-credit rights, commercial tort claims.

**Rules**:
- Must "reasonably identify" collateral per § 9-108
- Methods: specific listing, category, UCC type, quantity, formula, or other objective method
- "All assets" / "all personal property" supergeneric descriptions permitted **only in financing statements** (not security agreements) - confirm jurisdiction allows, Specific equipment/vehicles: include make, model, year, serial/VIN, IP: include registration numbers, application numbers, Commercial tort claims: **must be specifically described** - category-only filing is insufficient, Add proceeds clause if intended: "together with all proceeds and products thereof"

### 4. Assemble UCC-1

```
UCC FINANCING STATEMENT (UCC-1)

1. DEBTOR
   Name: [exact legal name]
   Address: [mailing address]
   Jurisdiction of Organization: [state]    Org ID: [number]

2. SECURED PARTY
   Name: [exact legal name]
   Address: [mailing address]

3. COLLATERAL DESCRIPTION
   [Per Step 3]

4. ADDITIONAL INFORMATION (if applicable)
   [ ] Proceeds  [ ] Products  [ ] After-acquired property
   [ ] Fixture filing (include real estate description + record owner)
   [ ] Transmitting utility
   [ ] Public-finance transaction
   [ ] Manufactured-home transaction
```

### 5. Assemble UCC-3 Amendment

Reference original filing: file number, filing date, filing office.

| Amendment Type | Requirements |
|----------------|-------------|
| **Continuation** | File within 6-month window before 5-year lapse date |
| **Termination** | Secured party must file within 20 days of demand if obligation satisfied (§ 9-513) |
| **Assignment** | Full assignee name, address; authority documentation |
| **Amendment** | Specify exactly what is added, deleted, or changed |

- Collateral amendments: state precisely what is added or released, Party name changes: include both old and new information, Debtor must authorize amendments that add collateral or add a debtor

## Quality Control

- [ ] Debtor name matches organizational records / government ID exactly
- [ ] Organizational ID included for registered organizations
- [ ] Collateral description covers all intended property per security agreement
- [ ] Collateral description consistent with (but need not mirror) security agreement
- [ ] Correct filing office for debtor's jurisdiction
- [ ] For UCC-3: original file number and filing date verified
- [ ] For continuations: filing within 6-month pre-lapse window confirmed
- [ ] Authorization exists (security agreement or separate authorization)
- [ ] State-specific form requirements satisfied
- [ ] Filing fee confirmed
- [ ] No common rejection triggers: wrong name, missing org ID, wrong office, incomplete fields

## Output

Produce two deliverables:

1. **Filing-ready UCC-1 or UCC-3** - formatted per the jurisdiction's accepted form, all mandatory fields completed
2. **Filing guidance memo** - filing office/method, fees, statutory citations, any state non-uniform provisions, and lapse/continuation calendar dates (5-year lapse + 6-month continuation window)

## Pitfalls

- Never assume debtor name, always verify against organizational records or government-issued ID, Flag jurisdictions with non-uniform Article 9 amendments (e.g., states requiring tax ID, additional certifications)
- Consumer-goods transactions have additional requirements under § 9-625(c)-(d)
- When in doubt about supergeneric descriptions, use specific categories as the safer approach, Mark any state-specific rule you cannot fully verify with `[VERIFY]`

---

**Key changes from original**:
- Removed non-spec `tags` from frontmatter, Tightened description to stay focused on triggers, Added **Quick Start** section for at-a-glance workflow, Collapsed the 10-row collateral categories table into an inline list (the agent already knows what these categories mean, no need to re-explain each one)
- Removed the Tax ID row from party table (already covered by jurisdiction-specific checks)
- Renamed "Process" → "Core Workflow" and "Guidelines" → "Pitfalls" for clearer section intent, Eliminated redundant prose throughout (e.g., "For secured party, capture full legal name..." was obvious context)
- Reduced from ~143 lines to ~113 lines while preserving every statutory citation, legal rule, and compliance requirement

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
