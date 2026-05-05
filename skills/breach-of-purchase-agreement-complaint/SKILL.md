---
name: breach-of-purchase-agreement-complaint
language: en
description: Drafts a filing-ready U.S. complaint for breach of a purchase agreement. Trigger when the user requests a breach-of-contract complaint, forum-selection analysis, or remedy package for a real-estate or asset purchase dispute. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Complaint for Breach of Purchase Agreement

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

Produces a court-ready complaint with jurisdiction, liability elements, and damages precision for purchase-agreement disputes.

## Prerequisites

Gather before drafting:

1. **Executed agreement** - including amendments, riders, addenda, notices, cure letters, and payment records.
2. **Party data** - legal names, entity types/formation states, addresses, registered agents.
3. **Transaction timeline** - negotiation, execution, performance milestones, breach event, notice, and mitigation efforts with supporting evidence.
4. **Jurisdictional directives** - target court, forum-selection and choice-of-law terms, arbitration scope, local filing requirements.
5. **Damages inputs** - direct, consequential, incidental amounts; interest expectations; attorney-fee basis.

## Workflow

### 1. Filing Scaffold

Generate caption, court heading, case-number placeholder, title of action, attorney block, and party designation blocks in court-compliant order.

### 2. Jurisdiction and Venue

Plead each ground with paragraph-supported facts:

- **Subject-matter jurisdiction** - diversity, federal question, or state-law basis.
- **Personal jurisdiction** - defendant presence, contacts, or minimum contacts.
- **Venue** - contract formation/performance/breach location; defendant residence.
- **Forum-selection / choice of law** - enforce contractual forum and governing-law clauses; note arbitration scope.

### 3. Parties

For each party: legal name, capacity/status, role in transaction, full address. Include aliases, registered agent (defendant), and guarantors/assignees/successors as needed.

### 4. Factual Chronology

Numbered paragraphs in strict temporal order. Attach exhibit references to each key event.

### 5. Breach of Contract Cause of Action

Map each element to specific facts and exhibits:

- **Formation** - valid agreement, authority, consideration, essential terms.
- **Duty** - exact breached provision and expected performance.
- **Breach** - specific act/omission, date, breach-notice timeline.
- **Plaintiff performance** - performance completed or valid excuse.
- **Causation and damages** - direct link between breach and resulting harm.

### 6. Damages Ledger

Itemize by category with calculation method and supporting evidence:

- **Expectancy/direct** - contract-differential or replacement-cost.
- **Consequential** - foreseeable losses tied to breach.
- **Incidental** - re-listing, storage, administrative costs.
- **Fees/costs** - only if contract or statute authorizes.

### 7. Prayer for Relief

State each relief bucket explicitly: damages (sum or proof at trial), specific performance (if unique subject matter), pre/post-judgment interest, costs, attorney fees (if authorized), injunctive relief (if warranted).

### 8. Closing Blocks

- Jury demand and filing-status labels.
- Liquidated-damages interpretation or damages-cap caveats.
- Verification block, unsworn declaration or notarized statement per jurisdiction; penalty-of-perjury wording if required.
- Attorney signature block, name, bar number, firm, address, phone, email, date.

### 9. Compliance Checklist

Append to the draft:

- [ ] Jurisdiction and venue internally consistent and sufficient
- [ ] Party descriptors complete and uniformly styled
- [ ] Each breach element has paragraph-level fact support
- [ ] Remedy requests match contractual/statutory authority
- [ ] Court formatting and signature standards met

### 10. Verification Markers

Insert `[VERIFY]` on any assertion of statute, rule, interest rate, filing prerequisite, or remedy authorization not directly supplied by user materials.

## Pitfalls

- Keep factual allegations separate from legal conclusions in each paragraph.
- Quote contract language directly for breach-trigger allegations, do not paraphrase.
- Never invent forum, amount-in-controversy, or statutory authority.
- Preserve forum-selection, arbitration, and liquidated-damage clauses as written.
- Do not embed settlement posture or demand-letter language in the pleading.
- Flag all unverified legal assertions with `[VERIFY]` and confirm with user before finalizing.

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
