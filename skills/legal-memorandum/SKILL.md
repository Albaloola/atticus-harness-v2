---
name: legal-memorandum
language: en
description: Drafts objective internal legal memoranda using the CREAC method with structured header, questions presented, brief answers, statement of facts, analysis, and strategic recommendations. Use when drafting legal memos, research memoranda, pre-trial analysis, or any objective internal legal analysis document. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Memorandum

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

Drafts an objective, internally focused legal memorandum analyzing specific legal questions with reasoned conclusions and strategic recommendations.

## Prerequisites

Gather before drafting:

- **Legal question(s)** - specific issues requiring analysis
- **Relevant facts** - documents, depositions, evidence, or client narrative
- **Jurisdiction** - controlling state/federal law
- **Audience** - attorney (doctrinal depth) or client (practical emphasis)
- **Known authority** - statutes, regulations, key case law

## Quick Start

1. Draft header with DATE, TO, FROM, RE (RE must identify the legal issue, not just the case name)
2. Frame 1 to 3 questions in Under-Does-When format
3. Provide brief yes/no answers with controlling rule and key facts
4. State facts objectively in chronological or topical order
5. Analyze each issue using CREAC
6. Conclude with direct answers, strategic recommendations, and next steps

## Output Structure

### 1. Header

Standard memo header: DATE, TO, FROM, RE. The RE line must identify the specific legal issue (e.g., "Likelihood of Success on Summary Judgment, Causation in Doe v. Metro Transit"). Include matter/case reference number if available.

### 2. Questions Presented

Draft 1 to 3 questions using **Under-Does-When** format:

- **Under** - relevant law, statute, or rule
- **Does/Is/Can** - legal conclusion sought
- **When** - key facts driving the analysis

Frame for yes/no or short definitive answers. Prioritize by importance to client objectives. No conclusory or leading language.

### 3. Brief Answer

For each question:

- Open with **Yes**, **No**, or **Probably [yes/no]**
- 2 to 3 sentences of critical reasoning, Reference controlling rule and dispositive facts

### 4. Statement of Facts

- **Organization**: chronological (transactions/procedural) or topical (multiple theories)
- **Scope**: legally relevant facts + necessary background only
- **Tone**: objective, no editorial commentary
- **Sourcing**: cite specific documents, depositions, exhibits parenthetically
- **Disputed facts**: flag explicitly when contested or unclear

Include a disclaimer that analysis is based on facts as presented and may change if additional facts emerge.

### 5. Analysis (CREAC)

Apply CREAC for each issue:

1. **Conclusion** - state conclusion for this issue upfront
2. **Rule** - articulate the legal rule; cite primary authority; quote key language where precision matters
3. **Explanation** - show how courts have applied the rule using factually analogous cases; explain reasoning, not just holdings
4. **Application** - apply rule to client's facts; draw direct parallels to precedent; address counterarguments; acknowledge weaknesses
5. **Conclusion** - restate conclusion for the issue

For multi-part tests, break into sub-analyses with subheadings. Cross-reference related issues.

### 6. Conclusion

- Directly answer each question presented, Summarize key reasoning (no new arguments)
- **Strategic recommendations**: actions, risks, alternatives
- **Next steps**: deadlines, further research, litigation/negotiation strategy, information gaps

## Checks

- [ ] Use controlling jurisdiction's law; cite primary authority over secondary sources
- [ ] Distinguish unfavorable cases rather than ignoring them
- [ ] Address the strongest opposing position for each issue
- [ ] Mark any unverified citation with `[VERIFY]`
- [ ] Calibrate depth: doctrinal nuance for attorneys, practical consequences for clients
- [ ] Present both sides honestly, do not hide unfavorable facts or authority
- [ ] Recommendations are practical and actionable, not purely academic
- [ ] Note where additional research may be warranted

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
