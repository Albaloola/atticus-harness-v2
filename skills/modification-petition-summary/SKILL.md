---
name: modification-petition-summary
language: en
description: Produces structured summaries of U.S. family law modification petitions for attorney review. Captures existing order terms, requested changes, alleged material change in circumstances, supporting facts, evidence inventory, and procedural posture. Use when summarizing petitions to modify custody, visitation, child support, spousal support, or other post-judgment orders. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Modification Petition Summary

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

Condense a family law modification petition into a decision-ready, neutral summary using the template below.

## Quick Start

Gather before summarizing:

- [ ] Modification petition and referenced exhibits
- [ ] Current order/judgment (or its date and terms)
- [ ] Docket metadata (court, case number, filing date)
- [ ] Jurisdiction/state and party roles
- [ ] Cited statutes/case law from the petition

## Output Template

Fill all fields present in the petition. Mark missing items "Not provided".

### Case Snapshot

| Field | Details |
| --- | --- |
| Court / County | |
| Case No. | |
| Parties | |
| Petitioner / Respondent | |
| Filing Date | |
| Order at Issue (type/date) | |
| Requested Hearing Date | |
| Emergency/Temporary Relief Sought | Yes/No; details |

### Order Comparison

| Topic | Current Order | Requested Modification |
| --- | --- | --- |
| Custody (legal/physical) | | |
| Parenting time / visitation | | |
| Child support | | |
| Spousal support | | |
| Other provisions | | |

### Grounds for Modification

- Material change in circumstances alleged: Yes/No, Nature of change: relocation, income change, child needs, health, safety, cohabitation/remarriage, school issues, other, Best interests factors invoked: Yes/No; specify, Statutory standard cited: Yes/No; cite if provided, Retroactive modification requested: Yes/No; scope

### Factual Allegations

Bulleted chronology:

- Date/period: event/fact alleged, Link to requested change: how petitioner connects fact to relief, Allegations of noncompliance with prior order

### Evidence Inventory

| Evidence Type | Attached? | Description / Purpose |
| --- | --- | --- |
| Financial declaration | | |
| Party declaration(s) | | |
| Witness declaration(s) | | |
| Expert report(s) | | |
| School records | | |
| Medical records | | |
| Other exhibits | | |

### Legal Framework

- Statutes cited, Case law cited, Local rules/procedural standards cited

### Procedural Posture

| Item | Details |
| --- | --- |
| Service/Notice described | |
| Prior modification history | |
| Related proceedings (contempt, enforcement, DV) | |
| Requested fees/costs | |
| Mediation/ADR requested or required | |

### Relief Requested

- Primary modification(s)
- Temporary/emergency orders, Ancillary relief (fees, costs, transportation, exchanges, supervised visits, etc.)

### Gaps / Flags

- Missing: current order text/date, financial data, parenting plan, jurisdiction facts, service info, Jurisdiction/venue issue: flag if facts suggest multi-state custody or relocation, Procedural defect: missing verification, required forms, untimely filing, lack of notice

## Pitfalls

- **Neutral tone only** - do not argue merits or recharacterize allegations.
- **Mirror petition terminology** - preserve the petitioner's language for accuracy.
- **Attached vs. referenced** - distinguish evidence actually attached from documents merely cited.
- **No inferred standards** - jurisdiction-specific rules vary by state; only state what the petition states.
- **Unverifiable citations** - tag with `[VERIFY]` if you cannot confirm a legal citation.

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
