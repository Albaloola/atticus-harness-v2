---
name: notice-to-perform-real-estate
language: en
description: Drafts jurisdiction-aware residential real-estate notices to perform (cure demands) for lease, purchase, or construction agreements where a counterparty has defaulted. Trigger when the user needs a notice to perform, notice to cure, cure notice, demand to perform, residential default notice, or pre-suit notice for a U.S. residential real-estate matter. [Atticus UK/Scots refined]
tags:
- drafting, letter, research, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notice to Perform, Residential Real Estate

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

Produces a litigation-defensible cure demand with breach chronology, statutory notice compliance, remedy mapping, and proof-of-service structure.

## Required Inputs

Collect before drafting. If any item is missing, return a "facts required" list, do not draft until resolved.

1. **Governing instruments** - executed agreement, riders, addenda, incorporated docs
2. **Party identifiers** - legal names, capacities, service addresses, entity IDs
3. **Contractual triggers** - notice clause, cure period, default definitions, remedy ladder, termination/fee provisions
4. **Evidence** - payment history, performance logs, communications, inspection reports, invoices, prior notices
5. **Jurisdiction** - governing law, performance location, mandatory notice form/period/method rules
6. **Sender's posture** - cure, escrow holdback, termination, specific performance, or damages sequencing

## Workflow

### 1. Intake Validation

Block drafting if missing:
- Amount due / due dates, Governing clause for notice method, Legal authority to sign, Delivery details for required recipients

### 2. Breach Matrix

| Date | Obligation | Required Performance | Actual Conduct | Evidence | Contract Section |
|------|-----------|---------------------|---------------|----------|-----------------|

- One row per missed/late payment or performance failure.
- Factual language only, no conclusory legal labels.

### 3. Jurisdiction Check

Confirm and record in a tracking table:

| Item | Status | Source |
|------|--------|--------|
| Cure period minimums | Confirmed / `[VERIFY]` | Agreement + statute |
| Service method sufficiency | Confirmed / `[VERIFY]` | Agreement + statute |
| Termination / acceleration prerequisites | Confirmed / `[VERIFY]` | Contract + law |
| Tenant-protective statutory overrides | Confirmed / `[VERIFY]` | State statute |

Mark any unconfirmed legal text with `[VERIFY]`.

### 4. Draft Structure

1. Header, title, date, sender, recipient
2. Agreement identification, name, date, section references
3. Non-performance chronology, objective facts, evidence-linked
4. Cure demand, measurable conditions
5. Cure deadline, exact date/time/zone; specify "commence by" vs "complete by"
6. Remedies escalation, contract → statutory → judicial
7. Rights preservation / anti-waiver
8. Signature and authority blocks
9. Certificate of service, method, date/time, recipient, tracking/receipt proof

### 5. Style Rules

- Numbered paragraphs for citation reference.
- Short, direct sentences.
- Mirror defined terms from the agreement exactly.

## Notice Template

```
Date:
To:
From:
Re: Notice to Perform, [Agreement Name/Date]
Agreement Date:
Governing Law:
Notice Clause References:
Default Date(s):
Obligations Breached:
Breach Chronology: (table)
Cure Demanded:
Deadline: (date/time + zone)
Cure Acceptance Method/Location:
Consequences of Non-Cure:
Rights Reserved:
Authorized Signatory:
Capacity / Authority:
Certificate of Service:
  - Method:
  - Date/Time:
  - Recipient:
  - Tracking/Receipt:
```

## Final Checklist

1. Every factual assertion traceable to a document.
2. Each cure item objectively measurable.
3. Cure window meets jurisdictional/statutory minimums and contract terms.
4. Delivery method satisfies contract and governing rules.
5. Reservation of rights covers contract, legal, and equitable remedies.
6. No new legal theory introduced without `[VERIFY]`.

## Pitfalls

- Never understate statutory notice requirements in residential contexts.
- Never assume payment totals, calculate from ledger components (principal, fees, interest).
- Do not assert anti-waiver language without addressing the specific legal posture.
- Avoid emotional or persuasive language, keep it enforceable and documentary.
- Use explicit remedy mapping: contract → statutory → litigation.
- Flag uncertain clauses or statutes with `[VERIFY]` and cite the verification source.

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
