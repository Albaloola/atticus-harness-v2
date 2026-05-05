---
name: opinion-summary
language: en
description: Summarizes U.S. transactional legal opinions into executive-ready briefs preserving issues, analysis, conclusions, qualifications, and key authorities. Triggers when asked to summarize a legal opinion, opinion memorandum, legal analysis memo, or produce an executive opinion recap. [Atticus UK/Scots refined]
tags:
- summarization, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Opinion Summary

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

Condense a full legal opinion into a professional summary that preserves substance and qualifications. Target 20 to 30% of original length unless instructed otherwise.

## Quick Start

Before summarizing, confirm:
- Full opinion text (including relied-upon exhibits/appendices)
- Governing jurisdiction(s) and transaction context, Privilege/confidentiality marking requirements, Target audience and desired length

## Required Sections

| Section | Content |
|---|---|
| Issues Presented | Plain-language statement of each legal question; number if multiple |
| Factual Background | Material facts only; omit narrative detail |
| Legal Analysis | Per issue: controlling standard, key reasoning, decisive facts |
| Conclusion / Recommendation | Outcome, recommendation, reliance conditions |
| Qualifications / Assumptions | Material limits, open questions, reliance assumptions |
| Risk / Alternatives | If addressed: risks, likelihoods, alternatives |
| Authorities | Controlling statutes, regs, or cases; short cites only |

## Issue Analysis Table

For each issue, populate:

| Issue | Standard | Key Facts | Reasoning | Conclusion |
|---|---|---|---|---|

## Compression Rules

- Include every legal question and final conclusion.
- Preserve all material qualifiers, uncertainties, and counterarguments.
- Retain controlling statutory language or contract excerpts when central to analysis.
- Remove string citations and non-controlling authorities.
- Use short citations sufficient for lookup.

## Pitfalls

- Never introduce theories or arguments absent from the original opinion.
- Never overstate certainty, mirror all caveats, limits, and contingencies exactly.
- Preserve privilege/work-product sensitivity; apply required markings.
- Mark uncertain citations with `[VERIFY]`.
- Maintain professional memorandum tone throughout.

---

Key changes: consolidated the description into a tighter trigger-focused sentence, removed the verbose template (the Required Sections table + Issue Analysis Table serve the same purpose more concisely), merged the guidelines into a "Pitfalls" section, eliminated the redundant "Compression Checklist" heading in favor of "Compression Rules", and cut ~30% of tokens while preserving all legal substance. Please grant write permission so I can save the file, or copy the content above directly.

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
