---
name: aviation-law-summary
language: en
description: Produces structured aviation law summaries with Bluebook citations covering U.S. and international regulatory frameworks, treaties, and case law. Use when drafting an aviation law summary, FAA/DOT/TSA compliance overview, Montreal/Warsaw Convention liability analysis, air service agreement review, accident liability synopsis, or aviation regulatory research memo. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Aviation Law Summary

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

Structured, citation-ready summary of aviation law authorities and operational impacts for a specified topic.

## Prerequisites

Gather before starting:

1. **Topic scope** - precise issue (e.g., accident liability, slot allocation, UAS operations, air service agreements)
2. **Jurisdiction** - U.S. federal, international, or mixed; list relevant countries
3. **Sources** - uploaded materials, known cases, regulations, treaties, agency actions
4. **Time horizon** - whether current updates or pending rules must be covered
5. **Citation standard** - Bluebook required; mark uncertain citations `[VERIFY]`

## Quick Start

1. Extract and summarize authorities from provided materials first.
2. Supplement with external sources only for currentness or gap-filling.
3. Verify each authority for jurisdiction, holding, and citation accuracy.
4. Populate sections per the output structure below.
5. Produce a complete Table of Authorities.

## Output Structure

Deliver sections in this order:

| Section | Contents |
|---|---|
| Executive Overview | Core issue, governing regimes, 3 to 5 key takeaways |
| Regulatory Framework | Statutes/regulations, agency authority, jurisdictional reach, conflicts |
| Treaty & International Regime | Conventions, bilateral agreements, preemption/interaction with domestic law |
| Case Law Analysis | Landmark and recent cases, holdings, reasoning, circuit splits, open questions |
| Liability & Remedies | Caps, defenses, notice requirements, damages, preemption |
| Enforcement & Procedure | Agency tools, penalty ranges, certificate actions, appeals |
| Operational Implications | Compliance duties, documentation, reporting, risk controls |
| Emerging/Unsettled Issues | Novel tech, pending rules, legislative initiatives |
| Practical Recommendations | Action items, monitoring items, counsel-review flags |
| Table of Authorities | All citations in Bluebook format |

## Checklists

### Regulatory Analysis

- [ ] Identify governing agencies and delegated authority
- [ ] Distinguish domestic vs. international applicability
- [ ] Note preemption or conflict points
- [ ] Identify operational requirements (licensing, certification, maintenance, safety)
- [ ] Flag reporting or recordkeeping obligations
- [ ] Include recent amendments or proposed rules if in scope

### Liability Regime Coverage

- [ ] Warsaw Convention applicability and limits
- [ ] Montreal Convention applicability and limits
- [ ] Domestic statutory regimes (e.g., GARA) and scope
- [ ] Circumstances negating liability caps
- [ ] Interaction between regulatory compliance and tort standards

### Case Analysis Template

| Case | Citation | Court | Key Facts | Issue | Holding | Reasoning | Impact |
|---|---|---|---|---|---|---|---|

### Table of Authorities Format

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
