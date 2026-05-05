---
name: jurisdictional-statement
language: en
description: Atticus UK/Scots legal skill for jurisdictional-statement. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Jurisdictional Statement (Scotland/UK Adaptation)

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

Drafts a note of appeal or reclaiming motion establishing appellate authority and procedural compliance to prevent dismissal where there is no right of appeal.

## Prerequisites

Gather before drafting:

- Final judgment, interlocutor, or appealable order with date of extract/interlocutor, Note of appeal or reclaiming motion with date lodged, Full process / court papers (first instance and appellate court)
- Adjustment / amendment and note of debate (if any) with filing and decision dates, Applicable court rules, Act of Sederunt, Rules of the Court of Session (RCS), Sheriff Appeal Court Rules, All parties with appellate designations

## Quick Start

1. Identify the right of appeal: final interlocutor, leave required, or statutory exception
2. Build a timeliness timeline from the date of the interlocutor being appealed through the date of marking the appeal
3. Verify deadline arithmetic: date of interlocutor + period = due date; date appeal marked ≤ due date
4. Check for special issues (cross-appeals, multiple parties, standing, permission requirements)
5. Format heading and citations per the specific court's rules

## Drafting Workflow

### 1. Heading

Format per the appellate court's rules. Include: full court name, all parties with appellate designations, both first instance and appellate case numbers, and document title per court rules.

### 2. Basis for Appeal

Identify the applicable basis for appeal:

| Basis | Authority | Scope |
|-------|-----------|-------|
| Final interlocutor | Court of Session Act 1988 s.27 / Sheriff Courts (Scotland) Act 1907 | All claims, all parties disposed |
| Interlocutory, leave required | Court of Session Act 1988 s.32 / OCR rules | Permission required; restricted grounds |
| By-pass appeal (direct to Inner House) | Court of Session Act 1988 s.27(b) | Certain interlocutors et separatim |
| Summary decree appeal | RCS / OCR rules | Against grant/refusal of summary decree |
| Sheriff Appeal Court | Courts Reform (Scotland) Act 2014 | Appeals from Sheriff Court (Ordinary Cause, Summary Cause, Simple Procedure) |

For UK Supreme Court appeals, cite the Constitutional Reform Act 2005 and the relevant access route (leapfrog or Inner House → UKSC).

Then explain why the interlocutor falls within the cited grant. For final interlocutors, address finality. For appeals requiring leave, demonstrate the leave was obtained or why leave is not required.

### 3. Timeliness

Build a chronological timeline:

```
[DATE] - Interlocutor / decree pronounced (Date of extract)
[DATE] - Note of appeal / reclaiming motion marked (if applicable)
[DATE] - Appeal filing deadline
```

**Scottish appellate deadlines**:

| Scenario | Deadline |
|----------|----------|
| Reclaiming motion (Court of Session) | 21 days from date of interlocutor (RCS 38.4) |
| Appeal to Sheriff Appeal Court (ordinary cause) | 14 days from date of interlocutor (Act of Sederunt, Sheriff Appeal Court Rules 2014) |
| Appeal to Sheriff Appeal Court (summary cause) | 14 days from date of interlocutor |
| Appeal to Sheriff Appeal Court (simple procedure) | 14 days from date of interlocutor |
| Appeal to Court of Session from Sheriff Appeal Court | 14 days from date of Sheriff Appeal Court interlocutor |
| Cross-appeal / incidental appeal | Within time limit for principal appeal or 7 days after opponent's appeal (whichever later) |
| Leave to appeal to UK Supreme Court | 28 days from date of Inner House interlocutor |

Address any interim/interlocutory appeals with the applicable leave requirements. If a note of appeal was timeously marked, confirm the exact rule.

### 4. Special Issues

Address if applicable:

- **Multiple parties** - appeal identifies all appellants and encompasses all claims on appeal
- **Cross-appeals / incidental appeals** - separate basis and timeliness for each
- **Amended appeals** - relation back under court rules
- **Procedural defects** - assess curability and cite relevant rules
- **Title and interest to sue (standing)** - confirm appellant has sufficient interest
- **Competency** - ensure the appeal is competent (not excluded by statute)

### 5. Record Citations

Every factual assertion must cite to the process / court papers per the court's format - (R. at ___) or specific page/interlocutor reference.

## Pitfalls

- **Finality traps** - unresolved craves, pending expenses determinations, or unadjudicated parties may prevent finality. Check if leave is required for partial final interlocutors.
- **Late vs. premature** - premature appeals (before interlocutor is extracted) may be curable; late is almost never curable, verify timing with extreme care
- **Leave requirements** - many interlocutory appeals require the leave of the first instance court or the appellate court. Verify before marking.
- **Citation verification** - confirm statutes and case law are current; mark uncertain citations with [VERIFY]
- **Format compliance** - minor formatting deviations can result in clerk rejection
- **Printing requirements** - Inner House and UKSC have specific formatting and binding rules for printed case papers

## Scotland/UK Adaptation

### Key Differences from US Version

| US Concept | Scotland/UK Equivalent |
|---|---|
| Notice of Appeal | Note of Appeal / Reclaiming Motion |
| 28 U.S.C. § 1291 | Court of Session Act 1988 s.27 |
| 28 U.S.C. § 1292(a)(1) (injunctions) | Court of Session Act 1988 s.27(b) (certain interlocutors) |
| 28 U.S.C. § 1292(b) (certified) | Leave to appeal under Court of Session Act 1988 s.32 |
| FRAP Rule 4 | RCS Chapter 38 / Sheriff Appeal Court Rules 2014 |
| 30-day standard appeal period | 21 days (Court of Session reclamation) / 14 days (Sheriff Appeal Court) |
| Post-trial motions tolling (FRCP 50/52/59) | Adjustments and amendments are limited; no direct tolling equivalent |
| Collateral order doctrine (Cohen) | No direct equivalent; some interlocutors appealable with leave |
| FRCP 54(b) - partial final judgment | Interlocutors disposing of part of the case may be appealed with leave |
| Mandamus / All Writs Act | Nobile officium (Court of Session's supervisory power) - narrow scope |
| Article III standing | Title and interest to sue (proprietary/patrimonial interest) |
| US District Court → US Court of Appeals | Sheriff Court → Sheriff Appeal Court; Outer House → Inner House |
| US Supreme Court | UK Supreme Court (from Inner House or by leapfrog) |
| FRAP 4(a)(4)(B)(ii) - relation back | No direct equivalent; separate note of appeal may be needed |
| Cross-appeal (FRAP) | Incidental appeal / cross-appeal in Scottish procedure |
| Good law / bad law check | Westlaw / LexisNexis UK for case law; Scottish Court Reports |

### Scottish Appellate Court Hierarchy

| First Instance | Appeal Court | Deadline | Leave Required? |
|---|---|---|---|
| Sheriff Court (Simple Procedure) | Sheriff Appeal Court | 14 days | No (for most) |
| Sheriff Court (Summary Cause) | Sheriff Appeal Court | 14 days | No (for most) |
| Sheriff Court (Ordinary Cause) | Sheriff Appeal Court | 14 days | No (final interlocutor) |
| Sheriff Appeal Court | Court of Session (Inner House) | 14 days | Only for certain interlocutors |
| Court of Session (Outer House) | Court of Session (Inner House) - Reclaiming | 21 days | No (final); leave for some interlocutory |
| Court of Session (Inner House) | UK Supreme Court | 28 days | Leave required from Inner House |

### Key Statutes and Rules

| Rule / Statute | Application |
|---|---|
| Court of Session Act 1988 | Basis for appeal, reclamation, leave requirements |
| Sheriff Courts (Scotland) Act 1907 | Sheriff Court appellate provisions |
| Courts Reform (Scotland) Act 2014 | Creation of Sheriff Appeal Court |
| Rules of the Court of Session 1994, Ch. 38 | Reclaiming motions procedure |
| Act of Sederunt (Sheriff Appeal Court Rules) 2014 | Sheriff Appeal Court procedure |
| Act of Sederunt (Simple Procedure) 2016 | Simple procedure appeals |
| Constitutional Reform Act 2005 | UK Supreme Court jurisdiction |
| Civil Procedure Rules (UKSC) | UK Supreme Court practice direction |

### Time Limit Notes

- **Reclaiming motion** (Court of Session): 21 days from interlocutor (RCS 38.4)
- **Sheriff Appeal Court** (from Ordinary Cause): 14 days from interlocutor
- **UK Supreme Court**: 28 days from Inner House decision
- **Late appeals**: Very limited ability to extend time; must show exceptional circumstances
- **Premature appeals**: May be treated as timeous if marked before extract but after the decision
- **No FRAP 4(a)(4) tolling equivalent**: Scottish procedure does not toll appeal deadlines during adjustment/amendment, must appeal within the standard period

---

**Key changes from original:**

- **Title** updated for Scotland/UK adaptation
- **Description** updated with [SCOTS] tag and Scottish appellate references
- **All US-specific content** replaced with Scottish equivalents (reclaiming motion, Sheriff Appeal Court, Inner House)
- **Statutes** converted: 28 U.S.C. §§ 1291/1292 → Court of Session Act 1988
- **Deadlines** converted: 30-day appeal → 21 days (Court of Session) / 14 days (Sheriff Appeal Court)
- **Added Sheriff Appeal Court** - distinct Scottish appellate tier
- **Added nobile officium** as Scottish supervisory writ equivalent
- **Added printing requirements** for Inner House/UKSC
- **Added Scotland/UK Adaptation** section with full comparison table
- **Time limits** updated to Scottish procedural periods
- **UK Supreme Court** access route included

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
