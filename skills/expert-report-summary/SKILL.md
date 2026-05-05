---
name: expert-report-summary
language: en
description: Produces structured, citation-ready summaries of U.S. expert witness reports for litigation. Captures qualifications, assignment, methodology, materials, findings, opinions, assumptions, limitations, and quantitative results with pinpoint citations. Use when summarizing expert reports, preparing for depositions or trial, reviewing expert disclosures, or planning cross-examination. [Atticus UK/Scots refined]
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

Neutral, citation-ready summary preserving the expert's opinions, methodology, and limitations. Every opinion and material finding requires a pinpoint citation.

## Prerequisites

1. Full expert report with page/section numbers
2. Referenced exhibits/appendices or materials-reviewed list
3. Case caption, party names, retention side (if stated)

## Workflow

1. Extract expert identity, credentials, scope, and stated assignment
2. Inventory materials reviewed and methodology steps
3. Capture each opinion and finding with pinpoint citations
4. Record assumptions, limitations, exclusions, and alternative scenarios
5. Compile quantitative results with units, ranges, and margins
6. Note exhibits/appendices and testimony availability (if stated)

## Output Template

# Expert Witness Report Summary

## Expert Identity, Name / Role / Firm / Specialty (Report p. __)

## Qualifications, Education / Licenses / Certifications / Relevant Experience (Report p. __)

## Assignment and Scope, Retaining Party / Questions Addressed / Scope Limits (Report p. __)

## Materials Reviewed, Documents / Data / Inspections / Tests / Interviews / Standards (Report p. __)

## Methodology, Methods / Models / Protocols / Standards Applied (Report p. __)

## Findings
1. Finding (Report p. __)

## Opinions
1. Opinion (Report p. __)

## Assumptions, Assumption (Report p. __)

## Limitations / Exclusions, Limitation (Report p. __)

## Quantitative Results, Metric / Result / Range / Margin (Report p. __)

## Exhibits / Appendices, Exhibit / Appendix (Report p. __)

## Availability, Deposition / Trial availability (Report p. __)

## Checks

- Maintain neutrality, do not assess credibility or persuasiveness.
- Use the expert's terminology; define only when necessary.
- Pinpoint-cite every opinion and material finding.
- Flag missing materials or unclear scope explicitly.
- Separate multiple opinions by issue or claim.
- If non-U.S. jurisdiction or non-litigation context, state up front.
- Never add facts or legal conclusions absent from the report.

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
