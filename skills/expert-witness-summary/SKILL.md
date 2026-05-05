---
name: expert-witness-summary
language: en
description: Generates structured, citation-anchored summaries of expert witness reports for depositions, hearings, and trial preparation. Distills qualifications, methodology, opinions, assumptions, and quantitative findings into a navigable reference. Use when summarizing expert witness reports, retained expert disclosures, or rebuttal expert reports in US litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Witness Report Summary

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

Produces a structured summary of an expert witness report with page/section citations for rapid lookup during depositions, hearings, and trial.

## Quick Start

Provide the full expert report (PDF or text). Optionally include:
- **Case context** - claims, defenses, or theories the testimony supports/rebuts
- **Intended use** - deposition prep, trial brief, or team reference

## Output Sections

### 1. Expert Identification

Tabulate: name, credentials/title, education, relevant experience, certifications/licenses, prior testimony (if disclosed).

### 2. Assignment and Scope

- Questions the retaining party asked the expert to address, Questions explicitly outside scope

### 3. Methodology and Materials

Structured list covering:
- Documents reviewed (contracts, records, pleadings)
- Tests/analyses conducted (lab work, modeling, inspections)
- Site inspections (date, location, conditions)
- Standards consulted (industry codes, regulatory guidance)
- Interviews conducted (parties, whether recorded)

### 4. Key Opinions

For each distinct opinion:

> **Opinion [#]** *(Report § ___, p. ___)* - [Statement using expert's own terminology]
> - Supporting basis: [key data/reasoning]
> - Confidence level: [if stated]

Order by importance to the matter, not report order.

### 5. Assumptions and Limitations

- Each factual assumption an opinion depends on, Opinions conditioned on unavailable information, Areas where the expert declined to opine, Margins of error, alternative scenarios, sensitivity ranges

### 6. Quantitative Findings

If applicable, tabulate: metric, value, range/margin, source page.

### 7. Claim/Defense Mapping

Map each opinion to the litigation theory it supports or undermines:
- **Supports [Claim/Defense]**: Opinion #, p. ___
- **Rebuts [Opposing Argument]**: Opinion #, p. ___

### 8. Recommendations and Availability

Note expert recommendations (if any) and stated availability for deposition/trial.

### 9. Exhibits Inventory

Tabulate: exhibit ID, description, location in report.

## Critical Rules

- **Cite page/section numbers** for every key opinion, enables rapid source lookup
- **Use the expert's own terminology** for technical concepts; parenthetically define only terms unfamiliar to non-specialist attorneys
- **Maintain strict neutrality** - never characterize opinions as strong, weak, or persuasive; that assessment belongs to counsel
- **Flag assumptions prominently** - these are primary cross-examination targets

## Pitfalls

- Omitting page citations makes the summary unusable at deposition, always cite, Reordering opinions without noting original report location causes confusion, include both the priority order and the source reference, Editorializing on opinion strength crosses the line from summarization into advocacy, If the report is a formal Fed. R. Civ. P. 26(a)(2) disclosure, verify compliance with disclosure requirements for the applicable court

## Defaults

- Target length: 2 to 5 pages depending on report complexity; default shorter unless quantitative analysis is extensive, Jurisdiction: US litigation unless otherwise specified

---

**Key changes from the original:**

- **Frontmatter**: Removed non-spec `tags` field; tightened `description` to stay within 1024 chars with clear trigger guidance in third person
- **Structure**: Reorganized into overview → quick start → core workflow → rules → pitfalls → defaults pattern
- **Token savings**: Replaced empty template tables (Expert ID, Quantitative Findings, Exhibits) with concise inline instructions, saves ~150 tokens while conveying the same output expectations
- **Removed redundancy**: Collapsed the Prerequisites and Guidelines sections into the more direct Quick Start and Critical Rules sections
- **Separated pitfalls**: Extracted common failure modes into a dedicated Pitfalls section for scanability
- **Preserved domain accuracy**: All legal content (Rule 26(a)(2), neutrality requirement, cross-examination targeting of assumptions, opinion citation format) retained intact

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
