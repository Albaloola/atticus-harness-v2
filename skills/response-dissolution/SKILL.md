---
name: response-dissolution
language: en
description: Drafts a Response to Petition for Dissolution of Marriage addressing each allegation with admit/deny/lack-of-information responses and stating positions on custody, support, property, and fees. Triggers when user needs to respond to a divorce petition, file an answer to dissolution, or avoid default judgment in family law proceedings. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Response to Petition for Dissolution of Marriage

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

Drafts the respondent's formal answer to a divorce petition, addressing every allegation and establishing positions on all contested issues to prevent default.

## Prerequisites

- **Filed petition** - case number, court, all allegations
- **Client instructions** - positions on custody, support, property; factual disputes (especially separation date)
- **Financial records** - income, assets, debts, retirement, business interests
- **Children's information** - names, DOBs, living/school arrangements, parenting history
- **Service date** - confirms response deadline (typically 30 days)

## Quick Start

1. Gather the petition and client instructions
2. Mirror the petition's caption exactly (court, case number, party names)
3. Respond to every allegation paragraph-by-paragraph using the response framework
4. State positions on each contested issue in order
5. Include verification and signature block
6. Confirm filing deadline from service date

## Response Framework

Every petition allegation must receive one response, an unaddressed allegation may be deemed admitted.

| Response | Use When |
|---|---|
| **Admit** | Allegation is true |
| **Deny** | Allegation is false, state correct fact |
| **Admit in part, deny in part** | Partially true, specify each portion |
| **Lack of information** | Respondent genuinely cannot confirm or deny |

## Required Sections (in order)

1. **Jurisdiction & Residency** - Admit or correct residency/domicile allegations
2. **Statistical Facts** - Marriage date, separation date, marriage length, minor children. Flag any disputed separation date with respondent's asserted date and basis.
3. **Child Custody & Visitation** - Legal custody (sole/joint), physical custody (sole/joint/primary-to-respondent), proposed visitation if not seeking primary, factual basis (parenting history, routines, involvement)
4. **Child Support** - Agrees to pay / seeks from petitioner / requests guideline deviation with justification
5. **Spousal Support** - Seeks / opposes / agrees to pay; cite income disparity, earning capacity, marital standard of living, marriage length
6. **Property Division** - Characterize community vs. separate property for: residence, other real property, retirement/pension, accounts, vehicles, business interests. Include separate property tracing and debt allocation.
7. **Attorney Fees & Costs** - Request contribution based on income/access disparity, or state no request
8. **Affirmative Requests for Relief** - Any additional relief respondent seeks

## Verification Block

Include declaration under penalty of perjury with respondent name, state, date, and signature line. If represented, add attorney name, bar number, firm, address, and contact.

## Formatting

- Numbered paragraphs matching petition structure, Document title + page number in footer, Court-compliant margins, spacing, pagination

## Pitfalls

- **Deadline-critical** - File within 30 days of service; verify local rule for exact deadline
- **No concession by omission** - every allegation must receive a response
- **No legal argument** - stick to factual admissions/denials and requests for relief; save advocacy for declarations and briefs
- **Separation date disputes** - state respondent's date clearly; affects community property cutoff and support duration
- **Jurisdiction-specific forms** - some states (e.g., California FL-120) require mandatory court forms; flag and adapt content to form fields
- **Tone** - formal, non-inflammatory; deny inaccuracies without argument

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
