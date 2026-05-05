---
name: contract-portfolio-intelligence
language: en
description: Analyzes an entire portfolio of contracts at scale, extracting key terms, obligations, renewal dates, risk provisions, and financial commitments across hundreds or thousands of agreements simultaneously. Produces structured reports, obligation trackers, renewal calendars, and risk matrices. Also supports playbook-based redlining where contracts are compared against preferred positions and automatically marked up. Use when an in-house legal team, GC, legal ops, procurement, or finance team needs portfolio-wide visibility into contract terms, upcoming renewals, obligation compliance, or batch contract review against organizational standards. [Atticus UK/Scots refined]
tags:
- transactional, corporate, analysis, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Portfolio Intelligence

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

Performs portfolio-scale contract analysis: batch extraction of terms, obligations, and risks across a large set of agreements, plus playbook-based redlining against organizational standards.

## Prerequisites

Before starting, gather:

1. **Contract corpus** - uploaded documents (PDF, DOCX) or a vault/folder reference containing the agreements
2. **Analysis scope** - what to extract (renewals, indemnities, payment terms, liability caps, termination rights, or custom fields)
3. **Playbook** (if redlining) - the organization's preferred positions, fallback clauses, and non-negotiable terms
4. **Output format** - table/spreadsheet, narrative report, or both
5. **Audience** - who receives the output (GC, board, finance, procurement)

## Workflow

### Phase 1: Ingest and Classify

1. Process each contract through OCR if scanned; extract full text from native PDFs and DOCX files
2. Identify contract type (NDA, MSA, SaaS agreement, employment, vendor, lease, SOW, amendment, etc.)
3. Detect parent-child relationships (master agreements → amendments → SOWs → change orders)
4. De-duplicate, flag identical or near-identical documents
5. Tag metadata: parties, effective date, governing law, contract type

Output a contract inventory table:

| # | Document | Type | Parties | Effective Date | Governing Law | Parent Doc |
|---|----------|------|---------|----------------|---------------|------------|
| 1 | Example  | MSA  | A ↔ B   | 2024-01-15     | Delaware      | -          |

### Phase 2: Term Extraction

For each contract, extract the following structured fields (skip fields that don't apply to the contract type):

**Dates & Term**
- Effective date, expiration date, term length, Auto-renewal (yes/no), renewal notice period, notice deadline, Termination for convenience (yes/no), notice period, cure period

**Financial Terms**
- Contract value / total commitment, Payment terms (Net 30, Net 60, etc.)
- Price escalation / adjustment mechanisms, Minimum commitments or volume thresholds, Late payment penalties

**Risk Provisions**
- Indemnification, mutual vs. one-sided, carve-outs, cap, Limitation of liability, aggregate cap, per-incident cap, excluded damages, Insurance requirements, types, minimum coverage amounts, Warranty, scope, duration, remedy limitations, Governing law and dispute resolution (litigation vs. arbitration, venue)

**Obligations**
- Deliverables and milestones with deadlines, Reporting or audit rights, Data protection / security obligations, Non-compete or exclusivity restrictions, Confidentiality term and surviving obligations

**IP & Data**
- IP ownership and license-back provisions, Data handling, return, and destruction requirements, Usage rights post-termination

Store extracted data in a structured format (one row per contract, one column per field).

### Phase 3: Portfolio Reports

Generate the reports requested by the user. Common report types:

**Renewal Calendar**
- All contracts with renewal/expiration dates within a specified window, Sorted by urgency (nearest deadline first)
- Flag auto-renewals where notice deadline is approaching, Include counterparty, contract value, and required action

**Risk Matrix**
- Each contract scored on risk dimensions: indemnification exposure, liability cap adequacy, insurance gaps, unfavorable termination terms, Risk level per dimension: High / Medium / Low, Aggregate portfolio risk summary, Prioritized list of contracts requiring renegotiation

**Obligation Tracker**
- Active obligations by contract with deadlines, Grouped by responsible team (legal, finance, ops, IT)
- Status: upcoming / due / overdue / completed, Escalation flags for overdue items

**Financial Summary**
- Total portfolio commitment by period (quarterly/annual)
- Breakdown by contract type, counterparty, or business unit, Contracts approaching minimum commitment thresholds, Payment term distribution

**Custom Extraction**
- User specifies any data point via natural language prompt, Agent extracts that field across all contracts, Returns structured table with contract reference, extracted value, and confidence

### Phase 4: Playbook Redlining

When the user provides a playbook of preferred positions:

1. **Parse the playbook** - extract each preferred clause, its fallback positions, and non-negotiable terms
2. **Compare each contract** against the playbook provision-by-provision:
   - ✅ Matches preferred position → no action
   - ⚠️ Deviates but within fallback range → flag with suggested language
   - ❌ Violates non-negotiable → flag as critical, provide replacement language
3. **Generate a redline summary** per contract:
   - Section reference, current language, preferred language, risk level, recommended action
4. **Produce a portfolio deviation report**:
   - Which contracts deviate most from standards
   - Most common deviations across the portfolio
   - Priority queue for renegotiation based on risk × contract value

### Playbook Structure

A playbook should define positions for key provisions. Example structure:

```
Provision: Limitation of Liability
  Preferred: Mutual cap at 12 months of fees; carve-outs for IP infringement and confidentiality breach
  Fallback: Mutual cap at 24 months of fees
  Non-negotiable: Must have mutual cap; unlimited liability is rejected

Provision: Indemnification
  Preferred: Mutual indemnification for third-party IP claims and confidentiality breach
  Fallback: One-sided indemnification acceptable if capped
  Non-negotiable: Must include IP infringement indemnity

Provision: Termination for Convenience
  Preferred: Either party, 30 days written notice
  Fallback: 60-90 days notice acceptable
  Non-negotiable: Must have termination for convenience right
```

## Quality Checks

After generating any output:

- [ ] Every contract in the corpus appears in the inventory, none skipped
- [ ] Extracted dates are validated (no future effective dates on executed contracts, expiration after effective)
- [ ] Parent-child relationships are logically consistent
- [ ] Risk scores are justified with specific clause references
- [ ] Renewal deadlines account for notice periods (deadline = expiration minus notice period)
- [ ] Financial figures are in consistent currency and units
- [ ] Playbook deviations cite the specific section and language from both the contract and the playbook

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Scanned PDFs with poor OCR quality | Re-process with enhanced OCR; flag low-confidence extractions for manual review |
| Contract is an amendment with no standalone terms | Link to parent agreement; extract only the modified terms and note inherited provisions |
| Ambiguous or missing provisions | Mark as "Not Found" or "Ambiguous" - never guess; flag for human review |
| Conflicting terms between parent and amendment | The amendment controls unless it explicitly preserves the original; flag the conflict |
| Very large corpus (10,000+) | Process in batches by contract type or counterparty; produce interim reports |
| Playbook doesn't cover a provision found in contracts | Note the gap; suggest adding the provision to the playbook |

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
