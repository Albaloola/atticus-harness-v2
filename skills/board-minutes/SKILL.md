---
name: board-minutes
language: en
description: Drafts corporate board of directors meeting minutes. Triggers on "board minutes", "minutes of board meeting", "board of directors meeting minutes", "corporate minutes", "board resolutions", or "bylaws compliance". [Atticus UK/Scots refined]
tags:
- corporate, drafting, memo, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Board of Directors Meeting Minutes

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

Draft a complete, defensible record of board actions, votes, and governance compliance.

## Gather Before Drafting

1. Corporation legal name and jurisdiction of incorporation.
2. Meeting date, time, location/virtual platform, and type (regular/special/emergency).
3. Attendance: directors, officers, guests; arrivals/departures with times.
4. Bylaws or board resolutions with notice and quorum rules.
5. Agenda, reports, resolutions, and materials provided to the board.
6. Prior meeting minutes and any corrections.

## Document Header

```
[Corporation Legal Name]
Minutes of the Board of Directors Meeting
Date: [Month DD, YYYY]
Time: [Start Time] to [Adjournment Time]
Location: [Full Address] / Virtual: [Platform + access method]
Meeting Type: [Regular / Special / Emergency]
Authority: [Bylaw section or board resolution]
```

## Required Sections

| # | Section | Key Fields |
|---|---------|------------|
| 1 | Call to Order | Presiding officer; time called; notice confirmation or waiver; meeting type |
| 2 | Attendance | Directors present (name, title, method); absent; officers; guests (role, agenda item); arrival/departure times |
| 3 | Quorum | Bylaw quorum rule; number present; confirmation quorum maintained |
| 4 | Prior Minutes Approval | Date of prior meeting; approved as presented or amended; motion/second; vote count |
| 5 | Officer Reports | Name/title; key metrics or material updates; written reports referenced |
| 6 | Committee Reports | Committee; chair; findings/recommendations; actions requested |
| 7 | Business Items | Per item: context, discussion summary, motion/second, vote, resolution text |
| 8 | Conflicts / Recusals | Director; nature of conflict; recusal and return times |
| 9 | Executive Session | Purpose; attendees; start/end times; any formal actions |
| 10 | Adjournment | Time; motion/consent; next meeting date if set |
| 11 | Authentication | Secretary signature block; approval line for next meeting |

## Business Item Format

```
Item: [Title]
Summary: [Material facts and considerations; no verbatim debate]
Motion: [Director] moved to [action]; seconded by [Director].
Vote: [Unanimous / X for, Y against, Z abstain].
Resolution: [Full text or concise, unambiguous summary].
```

## Resolution Checklist

- Authority cited (bylaws, prior resolution, or statute).
- Parties, instruments, and amounts identified where material.
- Delegation language clear (who executes, scope of discretion).
- Required voting threshold met (simple majority / supermajority / unanimous).
- Recusals tied to the resolution recorded.

## Verification

- Legal name matches formation documents.
- Notice and quorum statements match bylaws.
- Dates, times, and vote counts verified against source materials.
- Attachments/exhibits referenced and labeled.

## Pitfalls

- **Tone**: Objective and factual only, no subjective characterizations or verbatim debate.
- **Privilege**: Never include attorney-client communications or legal advice.
- **Attribution**: Attribute individual statements only when legally required or material to conflicts.
- **Conflicts**: Record every conflict and recusal explicitly with departure/return times.
- **Remote meetings**: Note compliance with bylaws and applicable state law.
- **Jurisdiction-specific rules** (interested-party transactions, fundamental changes): Confirm compliance; mark uncertain citations as [VERIFY].

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
