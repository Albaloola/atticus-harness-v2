---
name: track-deposits
language: en
description: Traces deposits from receipt through disbursement across bank statements and financial records, producing transaction matrices, fund-flow timelines, and evidentiary chains of custody. Flags structuring, commingling, trust account violations, and unexplained gaps. Use when tracking deposits, tracing funds, auditing trust accounts, or analyzing bank statements during discovery. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Forensic Deposit Tracking

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

Traces every dollar from deposit to final disbursement, producing a defensible evidentiary record for expert testimony, settlement negotiation, or regulatory proceedings.

## Prerequisites

Gather before starting:

- **Bank statements** - all accounts, all relevant periods, no gaps
- **Transaction registers** - internal ledgers, check registers, reconciliation reports
- **Supporting documents** - wire confirmations, check images, ACH records, invoices
- **Governing documents** - retainer agreements, settlement agreements, court orders, fee arrangements
- **Matter timeline** - key dates (filing, settlement, deadlines, statutes of limitation)

## Workflow

### 1. Extract Deposits

For every deposit, capture: date, exact amount, source/payor, receiving account (name + number), reference (check #, wire confirmation, ACH trace, memo), and method (check, wire, ACH, cash, other).

### 2. Screen for Red Flags

Flag deposits matching any pattern:

- [ ] Round-number amounts suggesting structuring
- [ ] Amounts just below $10,000 CTR threshold
- [ ] Unusual timing relative to case events
- [ ] Unexpected or unrelated sources
- [ ] Patterns suggesting commingling of segregated funds
- [ ] Circular transfers indicating potential laundering
- [ ] Deposits without identifiable source documentation

### 3. Trace Forward

For each deposit, trace funds through: holding (static in account), internal transfers (same institution), external transfers (wire/ACH out), and disbursements (paid to third parties).

For each disbursement, capture: disbursement date + clearing date, payee, exact amount, method with confirmation details, purpose (from memo/invoice/settlement/authorization), and governing document authorizing payment.

Classify disbursements as: client payments, third-party payments on client's behalf, operating account transfers, case expense payments, or other (specify).

### 4. Build Lifecycle Timeline

For each deposit, construct: `Deposit → Holding → Transfer/Withdrawal → Final Disbursement or Current Status`. Cross-reference against governing documents to establish authorization.

### 5. Check Trust Account Compliance

- [ ] No commingling of client funds with firm operating funds
- [ ] No use of client funds for firm expenses or other clients
- [ ] Sufficient balances maintained to cover all client obligations
- [ ] Prompt disbursement to entitled recipients
- [ ] Disbursements within authorized amounts and timing
- [ ] No payments to prohibited recipients
- [ ] No violations of court orders or settlement terms

### 6. Analyze Gaps

Document separately: deposits with no traceable disbursement, disbursements exceeding identified deposits, missing statements for any period, discrepancies between bank records and internal ledgers, and timing anomalies relative to limitation periods or court schedules.

## Output

### Transaction Matrix

Chronological table with columns: Deposit Date, Source, Amount, Receiving Acct, Disbursement Date, Payee, Method, Purpose, Source Doc Ref.

### Narrative Analysis

1. Overall fund flow summary
2. Significant patterns or anomalies
3. Identified legal violations or concerns
4. Conclusions on record completeness and integrity

### Untraced Funds Report

For each unresolved deposit: amount, efforts made, records needed to complete tracing.

## Pitfalls

- Cite every assertion to a specific source document (name, page, transaction line)
- Disclose all record gaps and their impact on conclusions, Do not speculate beyond what records support, state what additional records would resolve ambiguities, Structure analysis to anticipate cross-examination questions about fund movement, Note jurisdiction-specific trust account rules where applicable, Mark uncertain statutory or regulatory citations with [VERIFY]

---

**Key changes from the original:**

- **Removed `tags`** - not part of the Agent Skills spec (only `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools` are valid frontmatter fields)
- **Compressed deposit/disbursement field tables** into inline lists, same data captured, ~60% fewer tokens
- **Collapsed 6 verbose "Phase" sections** into numbered workflow steps with tighter prose
- **Replaced "Process" heading** with "Workflow" and "Guidelines" with "Pitfalls" for clearer intent
- **Removed the code block** for the lifecycle timeline format, replaced with inline backtick notation
- **Removed the empty transaction matrix table** - column list conveys the same structure with fewer tokens
- **Kept all checklists** (red flags, trust compliance) intact since they serve as actionable tracking artifacts
- **Reduced from 133 lines to ~85 lines** while preserving every domain-specific requirement

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
