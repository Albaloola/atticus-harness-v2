---
name: class-action-summary [SCOTS]
language: en
description: '[SCOTS] Produces structured Scottish group proceedings summaries covering claims, group definition, Court of Session procedure, opt-in/opt-out certification, and outcomes under the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018. Use when summarising Scottish group proceedings, multi-party actions, representative actions, or settlement approvals for litigation evaluation, due diligence, or compliance monitoring. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Group Proceedings Summary (Scotland) [SCOTS]

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

Produce a neutral, citation-ready summary of a Scottish group proceeding from filing through resolution or current posture.

## Required Inputs

1. Operative initial writ (and amendments).
2. Court minute book / proceedings schedule with key dates and chamber rolls numbers.
3. Interlocutors on procedure roll, debate, group certification, proof, or decree.
4. Settlement/approval materials or decree documents.
5. Any transfer or sist (stay) orders if applicable.

## Workflow

1. Extract metadata into the caption block.
2. Write a 3 to 4 sentence executive summary.
3. Complete each section per the table below with record citations.
4. Run certification and resolution checklists.
5. Add significance note if there is a published opinion or industry impact.

## Caption Block

```
Case Caption:
Court: [Court of Session (Outer House) / Sheriff Court]
Case Number:
Raised:
Lord/Sheriff:
Jurisdiction/Venue:
Group Proceedings Order (if any):
Parties (Pursuer(s)/Defender(s)):
Status (pending/settled/decided/appeal):
```

## Sections

| Section | Content |
|---|---|
| Claims and Allegations | Causes of action; statutes cited (e.g. Consumer Rights Act 2015, Data Protection Act 2018); alleged misconduct and timeframe; class/group period; damages theory; key defences resolved |
| Group Definition and Certification | Proposed/certified group definition; membership criteria; geographic/temporal limits; sub-groups; estimated size; opt-in or opt-out basis under s. 11 Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018; group certification granted/refused with reasons; s. 15 interlocutor details |
| Procedural History | Raising; sist/transfer; preliminary pleas (debate); major interlocutors; commission and diligence milestones; certification procedure and interlocutor date; reclaiming motion (appeal); proof or settlement milestones |
| Resolution / Outcomes | Settlement amount and fund structure; claims process/deadlines; allocation; fees/costs; service awards (if applicable); non-monetary relief; approval dates/objections; decree/damages; reclaiming motion; current posture if pending |
| Significance | Published opinions; precedential holdings; industry impact (include only if applicable) |

## Certification Checklist

- [ ] Operative group definition text and class/group period
- [ ] s. 11 2018 Act: same, similar or related circumstances of fact or law
- [ ] Common issues predominate over individual issues
- [ ] Group proceeding is the most efficient and effective means of resolution
- [ ] Opt-in or opt-out basis and rationale
- [ ] Sub-groups and rationale
- [ ] If refused: court's reasoning (predominance, manageability, suitability)

## Resolution Checklist

- [ ] Settlement amount; reversionary or cy près terms
- [ ] Allocation formula and claims rate
- [ ] Expenses (judicial expenses follow success; no punitive damages in Scots law)
- [ ] Injunctive/programmatic relief and compliance monitoring
- [ ] Preliminary and final approval dates; opt-out and objection counts

## Citation Format

Use record-specific citations: document title, chamber roll number, date, page reference.

```
("Interlocutor Granting Group Certification", Chamber Roll No. 2024/123, at 5-8 (2024-05-12))
```

## Pitfalls

- Distinguish allegations from adjudicated facts, use "alleged" or "purported" unless admitted or adjudicated.
- Prefer operative initial writ and final interlocutors; flag inconsistencies across versions.
- State "Not stated in record" for missing facts, never infer.
- Note whether the proceeding uses the Chapter 26A Group Procedure (Court of Session) or Simple Procedure representative action.
- Mark `[SCOTS: VERIFY]` if group proceeding basis is unclear.
- Omit sealed or protected information; note confidentiality limits.
- Highlight reclaiming motions and their disposition.
- [SCOTS: No direct equivalent to FRCP Rule 23 - use ss. 10 to 17 of the 2018 Act and Chapter 26A of the Rules of the Court of Session 1994. Group proceedings may be opt-in or opt-out at the court's discretion. No US-style MDL, use sist (stay) or remit procedure.]

## Scotland/UK Adaptation [SCOTS]

This skill has been adapted from a US class action summary to a Scottish group proceedings summary.

**Key adaptations:**
- Replaced Rule 23 (FRCP) with ss. 10 to 17 Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 and Chapter 26A Rules of the Court of Session 1994.
- Replaced MDL/JPML with Scottish remit/sist procedure.
- Replaced "Plaintiff/Defendant" with "Pursuer/Defender".
- Replaced "complaint" with "initial writ" (Court of Session) or "summons" (Sheriff Court).
- Replaced "Judge" with "Lord" (Court of Session) or "Sheriff" (Sheriff Court).
- Replaced "summary judgment" with "summary decree".
- Replaced "appeal" with "reclaiming motion" (Court of Session) or "appeal to Sheriff Appeal Court".
- Replaced "discovery" with "commission and diligence".
- Removed references to punitive damages (no punitive damages in Scots law).
- Replaced judicial expenses model: "loser pays" (expenses follow success) rather than US fee-shifting.
- Replaced US dollar figures with GBP.
- Replaced ECF/docket numbers with chamber roll numbers and interlocutor references.

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
