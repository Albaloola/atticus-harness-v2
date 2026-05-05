---
name: shareholders-meeting-minutes
language: en
description: 'Drafts minute-book-ready U.S. corporate shareholders meeting minutes covering notice, record date, quorum, attendance, reports, votes, and resolutions. Use for annual or special shareholders meetings, director elections, auditor ratification, and shareholder proposals. Triggers: "shareholders meeting minutes", "annual meeting minutes", "special meeting minutes", "quorum", "record date", "proxy", "election of directors", "ratify auditors". [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Shareholders Meeting Minutes

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

Drafts formal minutes recording shareholders meeting proceedings and vote outcomes, suitable for the corporate minute book.

## Required Inputs

Collect before drafting:

- Corporation legal name, state of incorporation, principal office address, Meeting type (annual/special), date, time, location or virtual platform, Record date, notice method, date sent, Bylaws/charter quorum and voting thresholds, Shareholder list and proxy data as of record date, Agenda, reports, proposals, resolutions, vote tabulations, Prior meeting minutes for approval (if any)
- Presiding officer and secretary names/titles, Vote results per item (for/against/abstain/withheld)

## Workflow

1. **Validate meeting** - Confirm notice compliance, record date, quorum met, shareholder list available
2. **Record attendance** - In person, by proxy, key officers present
3. **Summarize reports** - High-level only; no editorializing or privileged commentary
4. **Document each action** - Exact vote tallies per item; note any supermajority requirements
5. **Close** - Adjournment time, motion, secretary certification

## Template

```text
MINUTES OF [ANNUAL/SPECIAL] MEETING OF SHAREHOLDERS
OF [CORPORATION LEGAL NAME]
Date: [Month DD, YYYY]
Time: [HH:MM a.m./p.m. Time Zone]
Location: [Address or Virtual Platform + Access Method]

1. Call to Order
The [annual/special] meeting of shareholders of [Corporation Legal Name] (the "Corporation") was called to order at [time] by [Name, Title], who acted as Chair. [Name, Title] acted as Secretary and recorded the minutes.

2. Notice and Record Date
The Chair reported that notice of the meeting was [given/waived] in accordance with the Corporation's bylaws and applicable state law. The record date for determining shareholders entitled to notice and vote was [Record Date]. A list of shareholders entitled to vote was made available for inspection during the meeting.

3. Quorum
The Secretary reported that [#] shares, representing [#/%] of the [#] shares outstanding, were present in person or by proxy. A quorum was declared present in accordance with the bylaws and applicable law.

4. Approval of Prior Minutes
The minutes of the shareholders meeting held on [Prior Meeting Date] were [approved as presented/approved as amended].

5. Reports
- [Officer Title/Name] presented a report on [operations/financials/other].
- [Additional reports as applicable.]

6. Election of Directors (if applicable)
Nominations:
- [Nominee Name] (nominated by [Name])
Nominations were [closed by motion/duly closed].
Results:
- [Nominee Name]: [#] FOR, [#] WITHHELD, [#] ABSTAIN
Elected to serve until [term/meeting]: [Names].

7. Ratification of Independent Auditors (if applicable)
Upon motion duly made and seconded, the shareholders voted to ratify the appointment of [Firm Name] as independent auditors for the fiscal year ending [Date].
Vote: [#] FOR, [#] AGAINST, [#] ABSTAIN. [Approved/Not approved].

8. Other Proposals/Resolutions (each separately)
Proposal: [Description and resolution text reference]
Vote: [#] FOR, [#] AGAINST, [#] ABSTAIN. [Approved/Rejected].
[If supermajority required: "The required [__]% threshold was [met/not met]."]

9. Adjournment
There being no further business, the meeting was adjourned at [time] upon [motion duly made and seconded/mutual consent].

CERTIFICATION
I hereby certify that the foregoing minutes are a true and accurate record of the proceedings of the [annual/special] meeting of shareholders of [Corporation Legal Name].

____________________________________
[Name], Secretary
Date: [Month DD, YYYY]
```

## Pitfalls and Checks

- **Never invent facts.** If data is missing, insert `[NEEDED]` and list all gaps at the end of the document.
- Use past tense, neutral tone, and consistent defined terms ("the Corporation").
- Verify quorum and voting thresholds against bylaws/charter and state statute before stating compliance.
- For virtual/hybrid meetings, state the platform and confirm governing-document compliance.
- Reflect proxy voting and inspector of elections when provided.
- Flag any inconsistency between vote results and required thresholds.

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
