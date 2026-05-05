---
name: ma-transaction-summary
language: en
description: Generates structured M&A transaction summaries from deal documents. Triggers when the user needs to summarize a merger, acquisition, asset purchase, stock purchase, or divestiture, or when preparing board-level deal overviews from definitive agreements and due diligence materials. [Atticus UK/Scots refined]
tags:
- summarization, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# M&A Transaction Summary

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

Produces a stakeholder-ready reference summarizing a completed or pending M&A transaction for executives, board members, investors, and employees.

## Prerequisites

1. **Definitive agreement** - purchase agreement, merger agreement, or term sheet
2. **Due diligence reports** - financial, legal, IP, HR, environmental, tax
3. **Financial materials** - models, fairness opinions, pro forma projections
4. **Integration plan** - if available
5. **Board materials** - presentations, resolutions, approvals

## Quick Start

1. Collect definitive agreement and all available DD reports
2. Walk through each output section below, extracting from source documents
3. Cross-reference all figures, dates, and defined terms against the definitive agreement
4. Flag incomplete workstreams and open items with risk allocation
5. Apply confidentiality legends and version control before distribution

## Output Sections

### 1. Executive Overview (2 paragraphs max)

| Element | Detail |
|---|---|
| Parties | Buyer, seller, co-investors |
| Structure | Asset purchase / stock purchase / merger / other |
| Total consideration | Cash, stock, earnouts, deferred, with amounts |
| Expected closing | Date or timeline |
| Strategic rationale | One-sentence thesis |

### 2. Deal Structure & Terms

- Transaction form and rationale (tax, regulatory, liability)
- Purchase price breakdown:

| Component | Detail |
|---|---|
| Cash at close | Amount |
| Stock consideration | Exchange ratio, collar, valuation method |
| Earnouts | Metrics, measurement periods, caps |
| Escrow/holdbacks | Amount, release schedule, claims process |
| Working capital adjustment | Mechanism, target, true-up timeline |

- Assumed vs. excluded liabilities, Deferred or contingent payment mechanics

### 3. Due Diligence Findings

Per workstream, capture: (a) findings supporting thesis, (b) material concerns, (c) mitigation in deal docs.

Workstreams: Financial/Accounting, Legal/Regulatory, IP/Technology, Commercial/Contracts, HR/Benefits, Environmental/Real Estate, Tax.

Flag incomplete workstreams and note risk allocation for open items.

### 4. Reps, Warranties & Indemnification

| Element | Detail |
|---|---|
| R&W scope | Fundamental vs. general; materiality/knowledge qualifiers |
| Survival periods | By category |
| Indemnification basket | Type (deductible/tipping), amount |
| Liability cap | General vs. fundamental reps |
| Special indemnities | Identified risks with specific coverage |
| R&W insurance | Carrier, retention, policy limit, exclusions (if applicable) |
| Escrow | Amount, term, release conditions |

### 5. Closing Conditions

Track status for each:
- HSR / antitrust clearance, Foreign investment reviews (CFIUS, FDI)
- Industry-specific regulatory consents, Third-party consents (customers, landlords, lenders)
- Financing condition, commitment status, market flex, MAE provision, scope and carve-outs, Other conditions precedent

Assess likelihood of timely satisfaction for each.

### 6. Integration Plan

Cover by functional area (governance, finance, HR, sales, technology, supply chain):
- Approach, timeline, key milestones, Post-closing governance (standalone vs. integrated)
- Key employee retention mechanisms, Regulatory or consent constraints on integration timing

### 7. Strategic Rationale & Value Creation

- Investment thesis (market expansion, capability acquisition, synergies)
- Synergy quantification: cost savings and revenue enhancements with estimated values and realization timelines, Strategic fit within buyer's portfolio, Seller rationale (if applicable)

### 8. Stakeholder Impact

| Stakeholder | Impact |
|---|---|
| Shareholders | Consideration, tax implications, payment timing |
| Employees | Employment terms, benefits changes, org restructuring |
| Customers/suppliers | Contractual continuity, service levels |
| Creditors | Security interests, debt assumptions |

Flag uncertainties dependent on post-closing decisions.

### 9. Risk Factors & Mitigation

Categories: integration execution, regulatory, customer/employee attrition, financial performance, synergy realization, litigation.

For each material risk, identify the contractual protection, insurance, or operational strategy addressing it.

## Pitfalls & Checks

- **MNPI handling** - document contains material nonpublic information; apply confidentiality legends and comply with securities laws and NDA obligations
- **Forward-looking statements** - label all projections and pro forma figures with cautionary language
- **Cross-reference** - verify all figures, dates, and defined terms against the definitive agreement
- **Tone** - professional and objective; not advocacy or promotional
- **Audience versions** - if preparing multiple versions, note redaction scope (full board vs. employee communication)
- **Version control** - include date and version number if the summary will be updated through closing
- **Open items** - identify pending negotiation points or regulatory items with expected resolution timelines
- **Contact info** - conclude with deal team and counsel contacts for stakeholder questions

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
