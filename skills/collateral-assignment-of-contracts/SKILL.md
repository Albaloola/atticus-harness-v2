---
name: collateral-assignment-of-contracts
language: en
description: Drafts a Collateral Assignment of Contracts assigning a borrower's contractual rights as security for debt under UCC Article 9. Triggers when securing lender interests in contract rights, drafting pre-closing security documents, or structuring collateral packages for U.S. commercial credit facilities. [Atticus UK/Scots refined]
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Collateral Assignment of Contracts

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

UCC Article 9-compliant security instrument assigning a borrower's contractual rights to a lender as collateral for a debt obligation.

## Prerequisites

Gather before drafting:

1. **Loan/credit agreement** - principal, date, parties, default provisions
2. **Assigned contracts** - name, date, counterparties, subject matter, ID numbers, payment terms
3. **Party details** - legal names, jurisdiction of organization, principal place of business (Assignor and Assignee)
4. **Consent posture** - whether counterparty consent is required or obtained
5. **Governing law** - typically Assignee's jurisdiction or UCC Article 9 choice-of-law location
6. **Filing intent** - separate UCC-1 filing or authorization language in the instrument

## Document Sections

### 1. Parties

- **Assignor** (Borrower/debtor) - legal name, state of org, principal office
- **Assignee** (Lender/secured party) - same; note capacity as secured party
- **Obligors** (Contract counterparties) - include if notice/consent is relevant

### 2. Recitals

- Identify underlying debt with specificity (date, principal, parties)
- Identify each assigned contract (date, parties, subject matter, contract number)
- State assignment is **as security**, not absolute transfer

### 3. Assignment Clause

Grant Assignee a **security interest** in Assignor's right, title, and interest in:
- Each identified contract, All payment rights, proceeds, and benefits thereunder, All proceeds (insurance, condemnation awards, substitute collateral)

Address explicitly:
- **Present vs. future rights** - affects perfection under UCC § 9-204 [VERIFY state enactment]
- **Pre-default enforcement** - whether Assignee may collect before default or rights reserved to Assignor
- **Proceeds direction** - ordinary-course collection by Assignor vs. lockbox/direct remittance

### 4. Representations and Warranties

- **Authority** - full right and power to grant security interest
- **Ownership** - sole owner; free of liens except as disclosed
- **Contract validity** - assigned contracts valid, binding, enforceable
- **No defaults** - no existing defaults under assigned contracts
- **No prior assignments** - no prior security interests in same contracts
- **Consents** - all required counterparty consents obtained (or none required)

### 5. Covenants

**Affirmative:** perform contract obligations; maintain contracts in force; provide counterparty notice if required; deliver periodic status reports; notify Assignee of defaults, disputes, or material adverse changes.

**Negative:** no amendment/termination of assigned contracts without Assignee consent; no additional security interests in same collateral.

### 6. Default and Remedies

**Triggers:** payment failure; breach of rep/warranty/covenant; Assignor bankruptcy/insolvency; default under assigned contract.

**Assignee remedies (UCC Article 9):** notify counterparties; collect payments directly; enforce contracts in Assignee's or Assignor's name; apply proceeds to debt with surplus accounting.

Align notice-and-cure periods with underlying loan agreement.

### 7. Boilerplate

Governing law, entire agreement, severability, amendment (written consent), non-waiver, notices, successors/assigns (no Assignor assignment without consent), further assurances, UCC-1 filing authorization (if applicable), counterparts.

### 8. Signature Blocks

Authorized representative for each party (name, title, date). Add notarization if jurisdiction requires. Add corporate secretary attestation if entity governance requires.

## Pitfalls and Checks

- **Perfection**: Contract rights are general intangibles, perfect by UCC-1 filing. Confirm jurisdiction under UCC § 9-307 (Assignor's location) [VERIFY]
- **Anti-assignment clauses**: Review each assigned contract for transfer restrictions; obtain consent/waiver pre-closing
- **Future rights**: Assignment of unexecuted contracts requires UCC § 9-204 drafting and may have delayed attachment [VERIFY]
- **Obligor notice**: Under UCC § 9-406, notified counterparties must pay Assignee, coordinate timing with Assignor's operations
- **Proceeds scope**: Define broadly (insurance, condemnation, substitute collateral)
- **Loan agreement alignment**: Default definitions, cure periods, and remedy triggers must match the underlying credit agreement

---

**Key changes made:**
- Tightened the `description` frontmatter, shorter, third-person, with explicit trigger guidance, Replaced verbose tables (Parties, Reps & Warranties) with compact bullet lists, Collapsed Covenants into inline semicolon-delimited lists (affirmative/negative)
- Condensed Default/Remedies and Boilerplate into terse formats, Renamed "Guidelines" → "Pitfalls and Checks" for clarity, Renamed "Output Structure" → "Document Sections" 
- Removed redundant prose throughout while preserving all legal substance and [VERIFY] markers

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
