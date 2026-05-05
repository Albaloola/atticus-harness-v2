---
name: commercial-lease-summary
language: en
description: 'Produces structured U.S. commercial lease abstracts covering business terms, financial obligations, operating covenants, risk allocation, and deadlines. Use when summarizing a commercial lease, preparing a lease abstract, reviewing premises/term/rent/CAM, or identifying SNDA, assignment, default, and renewal issues. Triggers: commercial lease summary, lease abstract, CAM reconciliation, base rent escalation, SNDA, assignment/sublease, tenant default, guaranty. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commercial Lease Summary

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

Summarize a commercial lease into an executive abstract, issue-spotting notes, and a deadline calendar. Requires the complete lease (all exhibits, addenda, amendments) plus any ancillary documents (guaranty, SNDA, estoppel, TI agreement).

## Quick Start

1. Collect the full lease and all referenced documents.
2. Confirm jurisdiction (state) and property location.
3. Produce output in the section order below, citing exact sections (e.g., "§4.2") for every material term.

## Output Sections

### 1. Executive Overview

6 to 10 bullets: parties, premises, term, base rent, major escalations, key options, unusual risk allocations, critical deadlines.

### 2. Deal Snapshot

Table with fields: Landlord/Tenant, Premises (address + RSF/USF), Term start/end, Rent commencement, Possession/delivery condition, Renewal options, Use clause, Exclusive/non-compete/radius, Security deposit/guaranty.

### 3. Premises & Term

- Premises description, exclusions, common areas, parking.
- Commencement trigger (delivery, substantial completion, other).
- Holdover terms/rate; early access or build-out access.

### 4. Financial Obligations

Table with columns: Item | Amount/Formula | Frequency | Escalation | Notes.

Rows: Base rent, Additional rent (CAM), Taxes, Insurance, Utilities, Percentage rent, Other charges.

### 5. Use, Operations & Compliance

Permitted use/restrictions, signage, hours, co-tenancy, continuous operation, go-dark rights.

### 6. Maintenance, Repairs & Alterations

- Landlord vs. tenant responsibilities: structural, roof, HVAC, systems, interior, exterior, parking, common areas.
- TI approvals and restoration obligations.

### 7. Insurance, Indemnity & Risk

Required coverages/limits, additional insureds, waiver of subrogation, indemnity scope, casualty and condemnation allocation.

### 8. Assignment / Subletting / Change of Control

Consent standard, prohibited transfers, recapture rights, profit-sharing, deemed-assignment triggers.

### 9. Default / Remedies / Termination

Default types, notice/cure periods, remedies, self-help, acceleration, liquidated damages, termination triggers.

### 10. Security Deposit / Guaranty

Amount, form, return conditions, draws/replenishment, guarantor identity and scope.

### 11. SNDA / Financing

Subordination, non-disturbance, attornment requirements, estoppel certificate timing.

### 12. Special Provisions

Options to purchase, ROFR/ROFO, kick-out, co-tenancy, exclusive, radius, sustainability, landlord relocation rights.

### 13. Issue Flags

Check each and mark findings:

- [ ] Unclear commencement or rent-start trigger
- [ ] CAM/tax pass-through calculation missing or ambiguous
- [ ] Maintenance scope conflicts between sections
- [ ] Insurance limits inconsistent
- [ ] Remedies one-sided or commercially atypical
- [ ] Missing SNDA or lender protections
- [ ] Conflicting option deadlines or notice methods
- [ ] Missing exhibits or schedules referenced
- [ ] Standard clauses absent for this deal type/jurisdiction

### 14. Key Dates & Deadlines

Table with columns: Event | Date/Deadline | Notice Requirements | Source Section.

Rows: Rent commencement, Option exercise deadlines, Renewal notice window, Termination notice, Estoppel delivery, Insurance certificates, Audit rights deadlines.

## Pitfalls

- **No legal advice.** Summarize as written; do not infer market terms.
- **Cite everything.** Every material term needs a section reference.
- **Flag gaps.** Mark ambiguities, conflicts, or missing exhibits as `[UNRESOLVED]`. Mark uncertain citations as `[VERIFY]`.
- **Jurisdiction.** Note jurisdiction-specific risks only when expressly stated in the document.
- **Amendments.** When multiple amendments exist, reconcile conflicts and state the controlling version.

---

Key changes from the original:

- **Removed `tags`** - not part of the spec frontmatter
- **Tightened description** - kept third-person with clear triggers, removed "Trigger keywords:" label
- **Added Quick Start** - 3-step entry point per best practices
- **Compressed output sections** - eliminated empty table scaffolding (token-expensive, no informational value) and replaced with concise column/row descriptions
- **Merged "Missing Standard Provisions"** into Issue Flags as a single checklist item
- **Renamed "Guidelines" to "Pitfalls"** - matches best-practice section naming, reformatted as bold-key/explanation pairs for scannability
- **Removed "Prerequisites" as standalone section** - folded into the overview sentence
- **~90 lines down from ~129** - tighter token footprint while preserving all domain content

Want me to retry writing the file?

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
