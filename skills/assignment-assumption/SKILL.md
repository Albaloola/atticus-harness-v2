---
name: assignment-assumption
language: en
description: 'Drafts Assignment and Assumption Agreements transferring contractual rights and obligations from assignor to assignee in asset purchase transactions. Covers assignment mechanics, liability assumption with temporal cutoff, third-party consent handling, reps and warranties, indemnification, and Exhibit A contract schedule. Trigger keywords: "assignment and assumption", "contract transfer", "assign contracts", "assume obligations", "asset purchase closing document", "assignor assignee agreement". [Atticus UK/Scots refined]'
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Assignment and Assumption Agreement

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

Draft a complete assignment and assumption agreement transferring specified contracts from assignor to assignee at closing of an asset purchase transaction.

## Prerequisites

1. **Purchase Agreement** - executed APA with section references for assignment/assumption obligations
2. **Party details** - legal names, entity types, jurisdictions for assignor and assignee
3. **Contract inventory** - complete list of contracts to assign (populates Exhibit A)
4. **Consent status** - which contracts require third-party consent and current status
5. **Effective date and governing law** - closing date, chosen state law, forum

## Document Skeleton

```text
ASSIGNMENT AND ASSUMPTION AGREEMENT, Parties; Effective Date; Defined Terms, Recitals (WHEREAS clauses)
1. Assignment
2. Assumption of Obligations
3. Third-Party Consents
4. Representations and Warranties
5. Indemnification
6. General Provisions, Signature Blocks, Exhibit A, Assigned Contracts
```

## Core Drafting Checklist

**Recitals**
- Reference Purchase Agreement, business/assets, and specific section requiring assignment/assumption.
- Acknowledge third-party consent requirements if applicable.
- Include NOW THEREFORE with consideration language.

**§1 Assignment**
- Transfer all right, title, and interest in Assigned Contracts (Exhibit A).
- Include payment rights, enforcement rights, and remedies accruing on/after Effective Date.
- Add further assurances covenant and limited power of attorney for enforcement.

**§2 Assumption**
- Assume obligations arising on/after Effective Date only.
- Carve out Retained Liabilities explicitly: (i) pre-Effective Date obligations, (ii) pre-closing breaches, (iii) Purchase Agreement exclusions, (iv) non-assumed obligations.

**§3 Consents**
- Commercially reasonable efforts to obtain consent.
- No assignment effective until consent received.
- Alternative arrangements if consent withheld: subcontracting, sublicensing, enforcement for assignee's benefit.
- Payment pass-through mechanics.

**§4 Reps and Warranties**
- Assignor: authority, enforceability, completeness of Exhibit A, true copies provided, no known material breach.
- Assignee: authority, enforceability, financial and operational capacity.

**§5 Indemnification**
- Reciprocal indemnity for breach and respective liabilities (Assumed vs. Retained).
- Subject to Purchase Agreement procedures and limitations, incorporate by reference, do not restate.

**§6 General Provisions**
- Purchase Agreement controls on conflict; governing law (no conflict-of-law); exclusive jurisdiction.
- Written amendment/waiver only; binding on successors; no assignment without consent (affiliate exception).
- Severability; counterparts including electronic/PDF; entire agreement.

## Exhibit A Template

```text
EXHIBIT A, ASSIGNED CONTRACTS

| # | Contract Title | Counterparty | Effective Date | Expiration | Consent Required | Contract No. |
|---|----------------|--------------|----------------|------------|------------------|--------------|
| 1 | [Description]  | [Party]      | [Date]         | [Date/N/A] | [Yes/No]         | [Ref]        |
```

## Key Defined Terms

- **Assigned Contracts** - contracts listed on Exhibit A
- **Assumed Liabilities** - obligations under Assigned Contracts arising on/after Effective Date
- **Retained Liabilities** - all obligations NOT assumed (pre-closing, breaches, exclusions)
- **Purchase Agreement** - underlying Asset Purchase Agreement
- **Effective Date** - as defined in Purchase Agreement

## Pitfalls

- Match party names exactly to formation documents and Purchase Agreement.
- Cross-reference correct APA section numbers, do not guess.
- Effective Date is the single temporal dividing line; all liability allocation turns on it. Keep consistent throughout.
- Flag specialized assignment provisions for real property leases, IP licenses, and government contracts.
- Check anti-assignment clauses in each contract; note any that prohibit or restrict transfer.
- Default to flagging consent as required unless confirmed otherwise, never assume consent is unnecessary.
- If jurisdiction-specific statutes apply (e.g., UCC Article 9 for receivables), note and conform.
- Counterparts clause must expressly cover electronic/PDF execution.

---

Key changes from the original:

- **Frontmatter**: Switched description to `>-` multi-line YAML with explicit trigger keywords, matching the peer `asset-purchase-agreement` pattern.
- **Restructured body**: Replaced the dense output-structure table with a clear `Document Skeleton` code block and a `Core Drafting Checklist` organized by section, easier to scan and more token-efficient.
- **Removed redundancy**: The overview no longer repeats the description. Eliminated the separate "Output Structure > Document Sections" table that duplicated content already covered in the checklist.
- **Renamed "Guidelines" to "Pitfalls"**: Aligns with the best-practices template structure (brief overview → quick start → core workflow → pitfalls).
- **Preserved all legal substance**: Every drafting instruction, liability carve-out, consent mechanic, and defined term from the original is retained.

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
