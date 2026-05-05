---
name: letter-of-intent-loi
language: en
description: 'Drafts U.S. corporate transaction Letters of Intent (LOI) for mergers, acquisitions, investments, and strategic alliances. Separates non-binding intent from enforceable obligations and defines deal structure, key economics, and closing path. Use when converting deal terms into a preliminary transaction document. Trigger keywords: "LOI", "letter of intent", "M&A LOI", "merger term sheet", "no-shop", "exclusivity", "deal letter". [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Letter of Intent (LOI)

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

Drafts a transaction LOI that advances execution while preserving negotiating flexibility. Default posture: non-binding except explicitly designated provisions.

## Prerequisites

1. Party identities, entity forms, and governing jurisdictions.
2. Transaction type and structure (asset sale, stock sale, merger, investment, JV, option).
3. Agreed economics: price, payment schedule, earn-outs, escrows, caps.
4. Timeline: signing target, exclusivity window, diligence period, closing date.
5. Conditions precedent and responsibility allocation (regulatory, financing, consents).
6. Binding vs non-binding designation for each term set.
7. Known constraints: antitrust, sector regulations, board/lender approvals.

## Output Structure / Process

Produce an audit-ready LOI in business-letter format using this sequence.

### 1) Intake Validation

- [ ] Party names and addresses complete.
- [ ] Transaction purpose stated in one unambiguous sentence.
- [ ] Economic terms fully defined and internally consistent.
- [ ] Timeline mapped to conditions precedent.
- [ ] Definitive documents identified (SPA, merger agreement, ancillaries).
- [ ] Binding clause set explicitly chosen by user.
- [ ] Governing law and jurisdictional basis confirmed.

### 2) Clause Matrix

| Section | Required? | Binding? |
|---|---|---|
| Date / Parties / Purpose | Yes | Non-binding |
| Transaction Overview | Yes | Non-binding |
| Principal Terms (price, structure, adjustments) | Yes | Non-binding unless stated |
| Conditions Precedent | Yes | Non-binding |
| Definitive Agreement Process | Yes | Mixed |
| Exclusivity / No-Shop | Optional | Usually binding |
| Confidentiality | Optional/Yes | Usually binding |
| Expenses / Costs | Optional | Usually binding |
| Liability Limitation / No-Action | Optional | Usually binding |
| Governing Law / Disputes | Yes | Binding |
| Signatures / Counterparts | Yes | Binding |

### 3) Drafting Rules

- Always include a plain-language binding-effect section with an enumerated list of binding carve-outs.
- Include no-liability clause for failure to close and good-faith negotiation language for definitive agreements.
- Keep conditions precedent objective, verifiable, and assigned to a responsible party.
- Do not embed tax opinions; use a placeholder for tax allocations.
- Definitive agreement controls if conflict with LOI.

### 4) Template Skeleton

```text
[Date]
[Party A Name]
[Party B Name]

RE: Letter of Intent, Proposed [Transaction Type]

[Opening: parties + transaction purpose]

1. Transaction Overview
2. Transaction Structure
3. Principal Terms
4. Conditions Precedent
5. Binding Commitments (Confidentiality / Exclusivity / Costs / Governing Law)
6. Definitive Agreements and Timeline
7. Termination and Liability
8. Miscellaneous (integration, notices, counsel, no assignment)
9. Signature Blocks
```

### 5) Quality Gate

- [ ] Defined terms consistent throughout (Transaction, Closing Date, Effective Date, CPs).
- [ ] All amounts specify currency, basis, and payment schedule.
- [ ] Non-compete references included only if jurisdictionally supportable and requested.
- [ ] Public-company-sensitive language flagged with compliance review placeholder.

## Guidelines

- Use clean drafting style; avoid overcommitment language in non-binding portions.
- Do not omit remedies for breach of expressly binding clauses.
- If existing NDA is signed, state LOI is supplemental and preserve NDA hierarchy.
- For regulated sectors, add counsel review notes on approvals and filing requirements.
- For cross-border transactions, flag foreign-law and conflict-of-laws risk.
- If anti-circumvention concern exists, add carve-outs and enforcement language for exclusivity.

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
