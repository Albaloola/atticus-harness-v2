---
name: procedural-rule-summary
language: en
description: Generates structured, stage-organised summaries of Scottish/UK procedural rules with deadlines, responsibilities, and non-compliance consequences. Extracts rules from uploaded texts, Acts of Sederunt, court orders, and practice directions. Use when summarising Rules of the Court of Session, Ordinary Cause Rules, Simple Procedure Rules, Sheriff Appeal Court Rules, criminal procedure rules, or building procedural compliance checklists for Scottish litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, research, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Procedural Rule Summary, Scotland/UK

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

Produces a structured, stage-organised summary of procedural rules for quick-reference compliance during Scottish civil or criminal litigation, or administrative/regulatory proceedings.

## Prerequisites

1. **Rule set** - specific rules to summarise (e.g., Rules of the Court of Session 1994, Ordinary Cause Rules 1993, Simple Procedure Rules, Criminal Procedure (Scotland) Act 1995, Sheriff Appeal Court Rules, Acts of Sederunt)
2. **Jurisdiction** - Scotland (Court of Session, Sheriff Court, High Court of Justiciary, Sheriff Appeal Court, UK Supreme Court) or UK-wide tribunals (First-tier Tribunal, Upper Tribunal)
3. **Proceeding type** - civil, criminal, administrative, appellate
4. **Source documents** - uploaded rule texts, Acts of Sederunt, court orders, or practice notes (if any)

If any prerequisite is missing, ask, do not assume jurisdiction or rule version.

## Process

### 1. Verify Sources

- Confirm exact rule set, jurisdiction, court, and current version, Note recent amendments with effective dates (Acts of Sederunt are frequently updated)
- If user provides documents, extract procedural requirements from those first, Cross-reference multiple sources; flag conflicts, Mark unverifiable citations with `[VERIFY]`

### 2. Organize by Procedural Stage

Use only stages relevant to the requested rules:

| Stage | Coverage |
|-------|----------|
| **Initiation / Sist** | Initial Writ, Summons, Petition requirements; filing fees; service of process; citation |
| **Defences / Response** | Notice of Intention to Defend; Defences; caveats; time to pay directions |
| **Commission & Diligence** | Specification of documents; commission for examination; recovery and preservation of evidence (Administration of Justice (Scotland) Act 1972) |
| **Motions Practice** | Intimation requirements; lodging procedure; briefing; written submissions; opposed vs. unopposed motions; minute for recall |
| **Pre-Proof / Pre-Trial** | Options Hearing (OCR r. 9A); case management conferences; note of arguments; list of witnesses/exhibits; pre-trial meeting (ASPC rules); Record closing |
| **Proof / Trial** | Order of proof; submissions on evidence; special defences; preliminary pleas |
| **Post-Proof / Post-Trial** | Motion for new trial; decree in absence; summary decree; expenses; taxation of judicial accounts |
| **Appeal / Reclaiming** | Note of appeal (Sheriff Court); reclaiming motion (Court of Session); Sheriff Appeal Court rules; appeal to UK Supreme Court; time limits for marking appeals |

### 3. Capture Per-Rule Elements

For each rule or procedural requirement:

```
### [Rule Number] - [Short Title]

**Action required:** [What must be done]
**Responsible party:** [Who must act]
**Deadline:** [Timeframe + calculation method]
**Method/Format:** [Civil Online (e-filing), JPortal, personal service, recorded delivery, sheriff officer service]
**Mandatory vs. Discretionary:** [Whether court/party has discretion]
**Non-compliance consequence:** [Waiver, decree in absence, dismissal, sanctions, expenses]
**Extensions:** [Whether/how extendable + standard applied; note s. 50 Sheriff Courts (Scotland) Act 1907 for OCR extensions]
**Cross-references:** [Related rules, Acts of Sederunt, Practice Notes, Sheriffs' Practice Directions]
```

### 4. Deadline Calculations

For every timing requirement, specify:

- Calendar days vs. court days vs. "clear days" (under the Rules)
- Trigger event (signeting / service / intimation / entry of order / date of decree)
- Whether the date of the trigger event is included or excluded (clear days: the date of service or any step is excluded)
- How to count periods (e.g., OCR r. 15: 7 clear days for lodging defences from expiry of induciae; chapter and rule specific)
- Weekend/holiday extensions, Scottish rules rarely use automatic weekend extension; check the specific rule for court vacation periods, Service-method additions: if using postal service, allow additional time per the applicable Act of Sederunt

## Output Format

```
# Procedural Rule Summary: [Rule Set Name]

**Jurisdiction:** [Scotland / UK-wide]
**Proceeding type:** [Type]
**Rules version:** [Date/version + Act of Sederunt reference]
**Prepared:** [Date]

## Overview
[1-2 sentences identifying scope: e.g., "Summary of the Ordinary Cause Rules 1993
as amended by Act of Sederunt (Sheriff Court Civil Procedure) [year]"]

## [Stage Heading]
### [Rule X] - [Title]
[Per-rule elements from Step 3]

## Deadline Quick-Reference Table
| Action | Rule | Deadline | Calculated From | Days Type |
|--------|------|----------|-----------------|-----------|

## Common Pitfalls
- [Pitfall 1: e.g., confusing induciae for service with deadline for lodging defences]
- [Pitfall 2: e.g., missing the vacation rule for certain time periods]

## Cross-References
- [Related rule sets, Acts of Sederunt, Practice Notes, Sheriffs' Practice Directions]
```

## Troubleshooting

**Conflicting deadlines between general and local rules**: Local practice notes by individual Sheriffs may modify general rules. Present both layers and flag the conflict explicitly.

**Rule version uncertainty**: If unable to confirm currency, insert `[VERIFY: Confirm current version of [Rule] as of [date]; check latest Act of Sederunt [citation]]` and note the version used.

**Multi-layer jurisdictions**: When different procedural rules apply (e.g., Ordinary Cause in Sheriff Court + specific Simple Procedure for lower claims), address each layer separately and show interplay.

## Scotland/UK Adaptation

[SCOTS: Note] This skill was originally designed for US FRCP/FRCrP summarization. The core methodology (stage-organised, per-rule element capture, deadline calculations) transfers directly to Scottish civil procedure. Key structural differences are addressed in the guidance below.

**Scottish civil procedure stages, key differences from US:**
- No "discovery" as under FRCP; use Commission & Diligence (specification of documents, commission for examination, recovery under s. 1 Admin of Justice (Scotland) Act 1972)
- "Motions" exist (both oral at hearings and written) but are governed by different rules (RCS Chapter 23, OCR Chapter 15)
- "Proof" (Scottish term) ≈ "trial" in US
- "Decree" ≈ "judgment"
- "Reclaiming motion" ≈ "appeal" (Court of Session)
- "Summary Decree" ≈ "summary judgment" (OCR r. 19A)
- "Sist" = suspension of proceedings (no US equivalent)
- "Caveat" = advance notice of application (no US equivalent)

**Scottish courts hierarchy for procedural rules:**
1. **UK Supreme Court** - UKSC Practice Directions (final civil appeal)
2. **Court of Session (Inner House)** - RCS Chapters 38 to 40 (reclaiming motions, appeals)
3. **Court of Session (Outer House)** - RCS 1994 (all chapters)
4. **Sheriff Appeal Court** - Sheriff Appeal Court Rules 2021
5. **Sheriff Court (Ordinary Cause)** - Ordinary Cause Rules 1993 (OCR)
6. **Sheriff Court (Summary Cause)** - Summary Cause Rules 2002
7. **Sheriff Court (Simple Procedure)** - Simple Procedure Rules 2016
8. **All-Scotland Sheriff Personal Injury Court** - ASPIC rules (modified OCR)

**Criminal procedure rules:**
- Criminal Procedure (Scotland) Act 1995 (solemn & summary)
- Act of Adjournal (Criminal Procedure Rules) 1996
- Practice Notes from the Lord Justice General

**Key procedural legislation:**
- Sheriff Courts (Scotland) Act 1907 (as amended) - foundation of Ordinary Cause, Courts Reform (Scotland) Act 2014 - major procedural reforms, Administration of Justice (Scotland) Act 1972 - recovery of evidence, Prescription and Limitation (Scotland) Act 1973 - time bar, Tribunals (Scotland) Act 2014 - Scottish tribunals system, Civil Online (SCTS e-filing system) - governed by Acts of Sederunt, JPortal (criminal e-filing)

**Practitioner notes:**
- Scottish civil procedure does NOT have automatic initial disclosures (no FRCP 26(a) equivalent)
- Scottish deadline calculations use "clear days" (exclude date of trigger and date of event), not FRCP-style inclusive counting, Acts of Sederunt can change procedure rapidly, always check current version, Sheriffs may issue local Practice Directions that vary ordinary rules (e.g., specific requirements for motion enrolment)
- Civil Online e-filing is mandatory for solicitors in most Sheriff Court and Court of Session proceedings (JPortal for criminal)
- The Sheriff Appeal Court has its own distinct rules (not a streamlined version of OCR)

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
