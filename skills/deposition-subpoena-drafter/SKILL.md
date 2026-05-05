---
name: deposition-subpoena-drafter
language: en
description: Drafts U.S. federal deposition notices and subpoenas under FRCP 30(b)(1), 30(b)(6), and 45. Trigger when the user needs a deposition notice, 30(b)(6) topic list, Rule 45 subpoena, subpoena duces tecum, or discovery enforcement package. Also trigger on mentions of AO 88A/88B, witness fees, motion to compel, or deposition scheduling. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Notice & Subpoena Drafter

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

Drafts compliant FRCP 30(b)(1), 30(b)(6), and Rule 45 discovery instruments [US federal]. For Scottish equivalent procedure (commission and diligence, specification of documents, witness citation), see Scotland/UK Adaptation below.

## Quick Start (US Federal)

Collect before drafting:

1. **Case info** - caption, court/district, case number, assigned judge
2. **Deponent** - legal name, status (party / entity / former employee / nonparty), service address for nonparties
3. **Schedule** - date, time + zone, location or remote platform, estimated duration
4. **Recording** - stenographic, audiovisual, or both
5. **Discovery posture** - deposition count, cutoff date, prior orders, sequencing constraints
6. **Objectives** - claims-to-evidence map, custodians, ESI format preferences
7. **Rule 45 extras** - compliance place, nexus data, witness fee/mileage plan
8. **Confidentiality** - existing protective order, privilege sensitivities

Stop and ask the user if any required item is missing.

**For Scottish procedure: see Scotland/UK Adaptation section below. Different intake and documents are required.**

## Instrument Selection

| Deponent type | Instrument | Key requirement |
|---|---|---|
| Party individual | Rule 30(b)(1) notice | Serve via counsel |
| Party entity | Rule 30(b)(6) notice | Topics with reasonable particularity |
| Former employee of party | Rule 45 subpoena | Treat as nonparty unless local rule differs |
| Nonparty witness/custodian | Rule 45 subpoena | Personal service + fees required |
| Testimony + documents | Rule 45 dual-purpose | Prefer sequencing production before deposition |

If the deponent type is ambiguous, stop and clarify before proceeding.

## Intake Validation

Confirm each field before drafting. Fail if any condition is met:

| Field | Scope | Auto-fail |
|---|---|---|
| Service date | All | Unreasonable or unverifiable |
| Time zone | Remote deps | Missing |
| Recording method | All | Omitted when audiovisual needed |
| 30(b)(6) topics | Entity deps | Overly broad or undefined |
| Compliance place | Rule 45 | Outside 100-mile limit per FRCP 45(c) |
| Party notice for doc subpoena | Rule 45 | Pre-subpoena copy service omitted |
| Witness fee/mileage | Nonparty subpoena | Not tendered or unaddressed |

## Drafting Workflow

1. **Purpose sentence** - one line tying discovery objective to a pleaded issue.
2. **Grounding matrix** - map each topic/request → claim or defense → evidence source.
3. **Draft instrument** - use mechanism-specific language (templates below).
4. **Rule anchors** - insert FRCP citations and attorney-attestation fields.
5. **Enforcement packet** - generate proof-of-service artifacts.
6. **Stress test** - review through motion-to-quash lens for enforceability.

### Templates

**Rule 30(b)(1) notice**

> PLEASE TAKE NOTICE that pursuant to FRCP 30(b)(1), [party] will take the deposition upon oral examination of [NAME] on [DATE] at [TIME ZONE] at [LOCATION/Platform]. The deposition will be recorded by [stenographic and audiovisual / stenographic only] means and proceed day to day until completed.

**Rule 30(b)(6) topic format**

> Topic [#]: [Defined subject], limited to [time period] and [scope].
> Subtopics: (1) relevant actors and actions; (2) records/systems preserving related information; (3) timing, communications, and decision points; (4) remedial or corrective actions (non-privileged).

**Rule 45 subpoena**

> Command: (1) Attend and testify at deposition on [date/time]; (2) Produce documents/ESI per Schedule A. Compliance place: [lawful location within Rule 45 limits]. Notice to all parties attached. Witness fee and mileage tendered.

### Output Package

- Captioned notice or subpoena, Topic schedule or request schedule (Schedule A)
- Proof-of-service declaration/affidavit, Cover letter with burden-mitigation language, Confidentiality handling instructions (if protective order exists)
- Meet-and-confer log and local-rule confirmation notes

## Guardrails

**Federal-only scope.** If state court is detected (US), stop. Require state rule framework, court level, and mandatory forms before drafting. **If Scottish/UK jurisdiction detected, stop and refer to Scotland/UK Adaptation.**

**Do:**
- Map every 30(b)(6) topic and subpoena request to a pleaded issue, never use "all facts"
- Include date ranges, defined terms, and geographic/product/party scope, Confirm Rule 45(c) compliance location and Rule 45(d) burden-reduction steps, Include party notice when subpoena commands document production, Treat former employees as nonparty subpoena targets unless authority states otherwise, Verify AO 88A/88B form requirements (district-specific) [VERIFY]
- Verify local minimum-notice and witness-conference requirements [VERIFY]

## Scotland/UK Adaptation

This skill is drafted for US federal civil procedure (FRCP 30, 45). Scotland does not use depositions, subpoenas, or interrogatories in the US sense.

- **No depositions**: Scottish civil procedure does not include pre-trial oral examination of witnesses (depositions). Evidence is given by affidavit or oral testimony at proof.
- **Witness citation**: formal citation to attend court as a witness. Failure to attend may lead to warrant for apprehension (second diligence).
- **Commission and diligence**: for recovery of documents or taking evidence on oath before a commissioner (rare; used for witnesses unable to attend court). Most similar to US deposition but requires court order.
- **Specification of documents**: detailed written list of documents to be produced, equivalent to a document subpoena duces tecum. Requires court approval; must specify items with particularity.
- **Administration of Justice (Scotland) Act 1972 s.1**: court may order recovery of documents, inspection of property, pre- or post-litigation.
- **Commission for examination**: court-appointed commissioner takes sworn evidence from a witness; similar to a deposition but only by court order (not as of right).
- **No 30(b)(6) equivalent**: entities are not deposed; officer/employee may be examined on commission.
- **No equivalents to AO 88A/88B forms**.
- **Court Rules**: Ordinary Cause Rules (OCR) for Sheriff Court; Rules of the Court of Session 1994 (RCS). Simple Procedure has its own rules.
- **Witness expenses**: must be tendered with citation; recoverable from losing party.
- **Evidence**: Civil Evidence (Scotland) Act 1988 - hearsay largely abolished in civil proceedings; affidavit evidence may be used where court permits.
- **Key guidance**: the skill's methodology (structuring requests, enforceability analysis, stress-testing) transfers; the specific instruments (deposition notice, subpoena) do not.

For a full reference, see `scots-forms/Scottish-Witness-Citation-Commission-Guidance.md`.

**Don't:**
- Guess deadlines, notice periods, or local procedural quirks, Request privileged material unless limited to underlying non-privileged facts, Ignore sensitive-data handling (trade secrets, PHI, financial data, employee privacy)
- Present output as filing-ready, all drafts require licensed-attorney review before service

---

Key changes from the original:
- **Description** trimmed from a long keyword-stuffed block to a focused two-sentence trigger guide
- **Prerequisites** condensed into 8 numbered items (from 10) under "Quick Start" with tighter phrasing
- **Instrument selection table** preserved intact (high-value reference)
- **Intake validation table** kept but column headers simplified
- **Drafting workflow** consolidated from lettered subsections (A to E) into a single numbered flow
- **Templates** switched from code blocks to blockquotes, with 30(b)(6) subtopics inlined
- **Output package** kept as a flat list
- **Federal guardrail** moved into Guardrails section as a one-liner instead of a separate subsection
- **Guidelines** merged into a single Do/Don't list under Guardrails, eliminating the numbered prose format

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
