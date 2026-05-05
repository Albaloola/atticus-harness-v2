---
name: bill-summary
language: en
description: Atticus UK/Scots legal skill for bill-summary. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bill Summary (Scotland/UK)

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

Neutral, plain-language summary of a bill before the Scottish Parliament or UK Parliament with section pinpoints, fiscal data, stakeholder impacts, and "as of" status dating.

## Quick Start

Gather before drafting:

- **Bill text** - full or latest introduced version (as passed/amended)
- **Metadata** - number, title, Member in charge / Lead member, chamber (Scottish Parliament or UK Parliament committee), status, amendments
- **Supporting docs** - Financial Memorandum (FM), Policy Memorandum, Delegated Powers Memorandum, committee reports, Scottish Parliament Information Centre (SPICe) briefings
- **Current law** - Acts of the Scottish Parliament, UK Acts, or Scottish Statutory Instruments (SSIs) / Statutory Instruments (SIs) being amended
- **Jurisdiction** - devolved or reserved matter; parliamentary session/term
- **Competence** - legislative competence statement (Scottish Parliament) or devolution issues

## Workflow

1. Confirm latest bill version and amendment history
2. Record official legislative stage with "as of" date
3. Identify current-law baseline for each amended enactment
4. Extract fiscal/appropriation figures from Financial Memorandum and agency impacts
5. Note documented opposition/support positions and legislative competence concerns
6. Draft summary using the section order and provision format below

## Section Order

Produce all sections in this order:

| Section | Contents |
|---|---|
| Identifiers | Bill number, title, parliamentary term, chamber (Scottish Parliament / UK Parliament), Member in charge / Lead member, supporting members, introduction date, legislative stage (as of DATE), last action, commencement date(s) |
| Intent / Problem | Problem statement, policy objectives, triggering events, Government consultation or case law |
| Major Provisions | Per provision: current law → change → effect; affected parties; enforcement; regulatory authority |
| Fiscal / Budget / Financial Memorandum | One-off costs, ongoing costs, revenue impacts, funding sources (e.g. Scottish Consolidated Fund), agency burden as per FM |
| Stakeholder Impact | Individuals, businesses, third sector, public bodies; rights expanded/restricted; compliance obligations |
| Implementation | Subordinate legislation authority (SSI/SI), commencement orders, phase-in, reporting, evaluation, sunset clauses |
| Controversies / Risks / Competence | Opposition points, devolution competence issues, compatibility with Convention rights, Sewel Convention implications, financial implications for Scottish Consolidated Fund |
| Comparative / Trends | Alignment or divergence from other UK jurisdictions (England & Wales, Northern Ireland) or recent legislative trends |
| Open Questions | Missing data, unclear definitions, unresolved operational details, outstanding delegated powers concerns |

## Provision Format

Repeat per provision:

```
[Section cite, e.g., s. 4(2)]
- Current law: (one sentence)
- Change: (one sentence)
- Effect: (1 to 3 sentences)
- Affected: (groups or agencies)
- Enforcement: (entity and mechanism)
```

## Pitfalls and Checks

- Always use precise section pinpoints (e.g., "s. 4(2)", "sch. 1 para. 3").
- Stay neutral, do not advocate or predict outcomes.
- Missing fiscal data → state "No Financial Memorandum located at time of writing."
- Flag devolution competence, legislative competence, or Sewel Convention issues; append `[VERIFY]` when uncertain.
- Translate jargon to plain language but preserve defined terms of art.
- State disagreement among sources explicitly.
- Never infer intent beyond documented statements, Policy Memorandum, or committee materials.
- Every stage reference must carry an "as of" date.
- Distinguish between devolved matters (competent for Scottish Parliament) and reserved matters (competent for UK Parliament).

## Scotland/UK Adaptation

### Key Adaptations, Converted from US Congress bill summary to Scottish Parliament / UK Parliament bill summary, Replaced sponsor → Member in charge / Lead member, Replaced fiscal notes → Financial Memorandum (FM)
- Replaced constitutional/preemption issues → devolution competence / legislative competence / Sewel Convention, Replaced federal/state → devolved/reserved matters, Replaced House/Senate → Scottish Parliament / UK Parliament chambers, Replaced session/legislature → parliamentary term/session

### [SCOTS] Notes, Scottish Parliament bills are subject to legislative competence review by the Presiding Officer, Attorney General (for UK govt), and the UK Supreme Court, Financial Memoranda are mandatory for Scottish Parliament bills that incur public expenditure, Sewel Convention (legislative consent) applies where UK Parliament legislates on devolved matters, SPICe briefings provide impartial analysis equivalent to Congressional Research Service

### [VERIFY] Items Before Use, Current legislative stage and latest amendment date, Whether any legislative competence reference has been lodged, Whether a Sewel motion / legislative consent memorandum has been tabled, Commencement provisions, may be staggered by SSI or SI, Most recent committee report status and any Stage 1 or Stage 3 amendments

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
