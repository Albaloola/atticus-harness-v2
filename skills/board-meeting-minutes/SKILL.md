---
name: board-meeting-minutes
language: en
description: Drafts U.S. corporate board-of-directors meeting minutes into formal, defensible records documenting valid corporate action and governance process. Triggers on board minutes, directors meeting record, board resolutions, quorum validation, motion and vote capture, corporate secretary records, governance drafting. Requires source materials such as agenda, attendance, bylaws, notices, reports, prior minutes, and resolutions. [Atticus UK/Scots refined]
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

Produces legally structured minutes documenting valid corporate action, governance process, and an evidentiary timeline.

## Quick Start

1. Collect: corporation name, governing docs (bylaws, charter), meeting materials (agenda, notice, attendance, reports, prior minutes), director roster, and state of incorporation.
2. Map each source to the intake fields below.
3. Draft sections in the required sequence.
4. Log every motion using the standard block format.
5. Run final compliance checks; tag gaps with `[VERIFY]`.

## Prerequisites

- Corporation legal name and governing documents (charter/articles, bylaws, delegation policies)
- Meeting materials: agenda, notices, attendance logs, venue/platform details, resolutions, reports, prior draft minutes, Director roster with titles and in-office counts, Committee charter names and membership (if committees report)
- Known conflicts, recusals, and written waivers, Corporate secretary or preparer identity, State of incorporation and any local governance rules (notice periods, virtual attendance, record retention)

## Workflow

### Step 1 - Intake Mapping

Extract these fields from source materials before drafting:

| Field | Source | Extract |
|---|---|---|
| Corporation legal name | Charter, prior minutes | Exact entity name |
| Meeting type | Notice/resolution | Regular / special / emergency + authority |
| Date/time | Notice/calendar | Start, end, timezone |
| Venue/platform | Calendar/link | Physical address or virtual platform |
| Notice method | Bylaws + distribution log | Required period/method + compliance |
| Attendance | Roll call/sheet | Present/absent directors, officers, guests |
| Quorum | Bylaws + attendance | Rule + actual count |
| Agenda items | Agenda/package | Ordered summaries |
| Motions/resolutions | Motion text/notes | Maker, seconder, text, vote, result |
| Conflicts/recusals | Disclosures | Nature + effect on discussion/vote |
| Attachments | Report packets | Exhibit references |
| Authentication | Signature requirements | Preparer + board approval language |

### Step 2 - Draft Sections (required order)

1. **Meeting header** - Corporation name, meeting type, date/time, location/platform, confirmation meeting was properly called.
2. **Notice and calling authority** - Who called the meeting, bylaw authority, notice period/method, waivers or attendance-based notice cure.
3. **Attendance and quorum** - Directors with titles and participation mode (in-person/remote). Non-director attendees listed by role. Quorum requirement and actual count.
4. **Procedural matters** - Call to order, presiding officer, agenda adoption, executive sessions, participant time-in/time-out affecting votes.
5. **Prior minutes approval** - Prior meeting date, motion maker, seconder, amendments, vote outcome.
6. **Reports and committee items** - Material points by presenter and committee. Reference distributed materials and exhibit attachments.
7. **Deliberations, motions, and resolutions** - Per agenda item: issue summary, discussion themes, decisions, conflicts/recusals, motion outcome (use motion log block).
8. **Adjournment and next steps** - Adjournment time; next-meeting date or note that board will set per bylaws.
9. **Authentication and approval** - Preparer signature block and board approval language.

### Step 3 - Motion Log Block

Use this format for each motion or resolution:

```
Item:
Motion/Resolution:
Maker:
Seconder:
Conflict/Recusal Disclosure:
Vote (For / Against / Abstain / Absent):
Result:
Conditions/required filings:
```

For material acts (interested-party transactions, mergers, repurchases, charter/bylaw amendments, indemnification, major debt/equity actions, officer appointments/removals), include per-director vote records.

### Step 4 - Compliance Checks

- [ ] Notice compliance and waiver mechanics accurate
- [ ] Quorum present for each action requiring it
- [ ] Vote tallies consistent with materials per item
- [ ] Conflict handling and recital language complete and neutral
- [ ] No attorney-client or work-product content unless expressly requested
- [ ] State-specific requirements on retention, inspection rights, and formalities acknowledged
- [ ] State-law assumptions not tied to provided docs marked `[VERIFY]`

## Guidelines

- Objective, record-oriented tone, no legal opinions or motive language.
- Present tense for actions and decisions.
- Precise numbers, dates, and names over narrative summaries.
- Document only material, board-relevant deliberation, omit exploratory discussion.
- Do not paraphrase confidential legal advice beyond governance record needs.
- Replace all bracketed placeholders with confirmed facts before finalizing.
- If a heightened legal threshold applies, log the threshold and whether met; if uncertain, mark `[VERIFY]`.

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Missing quorum data | Attendance sheet not provided | Ask user for roll call or attendance log; flag quorum section `[VERIFY]` |
| Unclear meeting authority | No notice or bylaw provision cited | Request bylaw section governing meeting calls; mark notice section `[VERIFY]` |
| Conflict of interest gaps | Disclosure records incomplete | Note known conflicts, flag others `[VERIFY]`, ensure recused directors excluded from vote counts |
| State-specific rules unknown | State of incorporation not confirmed | Ask user; apply DGCL defaults for Delaware, flag non-Delaware assumptions `[VERIFY]` |

---

Key changes from the original:

- **Added Quick Start** section for at-a-glance workflow overview
- **Added Troubleshooting** table (required by SKILL-SPEC)
- **Tightened description** - third-person throughout, trigger keywords preserved
- **Converted compliance checks** to checkbox list for actionable use
- **Consolidated "Output Structure / Process"** into a cleaner "Workflow" heading
- **Trimmed redundant prose** in section descriptions (e.g., collapsed verbose explanations into dash-delimited summaries)
- **Reduced from 112 to ~97 lines** while preserving all legal substance

It looks like the file write is waiting for your permission, would you like me to try writing it again?

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
