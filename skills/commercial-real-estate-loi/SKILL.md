---
name: commercial-real-estate-loi
language: en
description: Drafts a U.S. commercial real estate purchase letter of intent (LOI) framing core deal terms as non-binding while isolating binding provisions (confidentiality, exclusivity). Triggers on LOI/term-sheet requests for commercial property acquisition, PSA pre-wire, exclusivity, or due-diligence entry. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commercial Real Estate Purchase LOI

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

Proposes deal terms and a negotiation framework for commercial property acquisition while limiting binding effect to specified provisions only.

## Gather Before Drafting

1. **Parties** - legal names, entity types, authority, notice addresses.
2. **Property** - street address, county/state, APN(s), included/excluded assets.
3. **Economics** - price, consideration type, deposit amount and timing, financing posture.
4. **Timeline** - due-diligence period, PSA target, closing target.
5. **Binding scope** - confidentiality terms, exclusivity window, expense allocation, governing law.

## Document Structure

### Header & Intro

- Date, seller name/address, subject line: "Letter of Intent, [Property Address/Name]".
- Identify buyer, seller, property, and intended transaction.
- State non-binding nature except specified sections.

### Core Terms

| Term | Instruction | Placeholder |
|---|---|---|
| Buyer | Full legal name; allow assignment to affiliate/SPE if intended | `[Buyer Legal Name]` |
| Seller | Full legal name; confirm record title holder(s) | `[Seller Legal Name]` |
| Property | Address, county, state, APN(s), improvements, fixtures | `[Property Description]` |
| Purchase Price | Fixed or adjustable; state adjustment method | `[Price]` |
| Consideration | Cash, debt assumption, seller financing, or mix | `[Consideration]` |
| Earnest Money | Amount, timing after PSA, escrow holder, refundability triggers | `[Deposit Terms]` |
| Due Diligence | Days from PSA; scope; buyer discretion; termination right | `[DD Period/Scope]` |
| Financing | Contingent or cash; proof of funds/commitment | `[Financing Terms]` |
| Closing | Target date or days after contingencies; extensions | `[Closing Date]` |
| Closing Costs | Allocation of title, escrow, taxes, surveys, fees | `[Cost Allocation]` |

### Due-Diligence Scope Checklist

- Physical inspections and access rules, Environmental review and reports, Title commitment, exceptions, survey, Leases, rent roll, tenant files, estoppels, Operating statements and expense history, Zoning, permitted use, compliance records, Service contracts and vendor agreements

### Binding Provisions Block

Create a discrete section titled "Binding Provisions" expressly stating these terms bind while all others do not.

| Item | Required Elements |
|---|---|
| Confidentiality | Scope, permitted disclosures, duration, exclusions, remedies |
| Exclusivity | Start, duration, prohibited activities, breach consequences |
| Expenses | Each side bears own costs (or seller reimburses on breach) |
| Governing Law | State law and venue for binding provisions only |

### Acceptance Block

- Acceptance deadline (date/time, delivery method).
- Buyer signature block (name/title/date).
- Seller block labeled "Agreed and Accepted" (name/title/date).

### Optional Clauses (include only if provided)

| Clause | When |
|---|---|
| Tenant Estoppels / SNDA | Multi-tenant or credit-sensitive deals |
| PSA Milestones | Staged diligence or deposit increases |
| Risk Allocation | Casualty/condemnation between LOI and closing |
| Broker Commission | Broker involved or allocation disputes anticipated |

## Pitfalls & Checks

- Restate non-binding status both in the intro and immediately before signature blocks.
- Isolate binding sections; add a severability sentence for those sections only.
- Avoid "agreement to agree" language unless expressly intended.
- Do not include good-faith negotiation obligations unless the client accepts that exposure.
- Use specific dates and dollar amounts; bracket unknowns with `[placeholder]`.
- Verify compliance with local transfer-tax and escrow customs.
- If seller is not the record owner, require evidence of authority to sell.

---

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
