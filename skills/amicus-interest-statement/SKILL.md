---
name: amicus-interest-statement
language: en
description: 'Drafts the "Interest of Amicus Curiae" section of an amicus brief. Establishes institutional credibility, tethers the amicus''s interest to the specific legal question, articulates non-party impacts, and embeds disclosure guardrails under Court of Session Rules, Sheriff Court Rules, and UK Supreme Court Rules. Trigger when drafting amicus briefs, friend-of-the-court filings, interest statements, amicus disclosures, or when the user asks why an organisation belongs in a case. Note: amicus practice is more restricted in Scotland than in the US. [Atticus UK/Scots refined]'
tags:
- SCOTS, brief, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Amicus Interest Statement

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

The Interest of Amicus Curiae section is the credibility gateway. Courts scrutinise amicus filings for "me-too" redundancy, a weak interest statement signals the brief wastes the court's time. This skill produces a statement that passes the court test: can someone explain in one sentence why this amicus belongs in this case?

## Pre-Draft Intake

Gather before drafting (skip only if user says "use defaults" or "just draft"):

1. **Case context** - caption, court, case number, stage, questions presented, decision below
2. **Amicus identity** - legal name, entity type, founding year, membership size/scope, coalition status
3. **Mission & expertise** - mission statement, core programmes, publications, prior amicus interventions, domain expertise
4. **Concrete stake** - who is affected, through what mechanisms (compliance costs, enforcement changes, chilling effects)
5. **Parties' written submissions** (if available) - to identify the amicus's unique perspective
6. **Disclosure facts** - (a) who authored the brief, (b) party/solicitor funding, (c) other monetary contributors
7. **Governing rules** - Court of Session Rules, Sheriff Court Rules, UK Supreme Court Rules, or relevant rules; flag if unknown

**Defaults when user doesn't respond:** stakeholder advocate posture; Court of Session Rules; disclosure withheld pending confirmation. Label all defaults. Request missing disclosure facts before finalising.

## Core Workflow

### 1. Anchor to the Legal Issue

Open by connecting the amicus to the specific question presented. Mirror the language of the questions presented.

> Amicus curiae [Organisation] submits this brief to assist the Court in resolving whether [legal issue]. Because [Organisation] [work tied to issue], the Court's resolution will have significant consequences for [constituency] and for [system/market/programme].

- Name the specific statute/provision at issue, not generic values, Distinguish amicus perspective from parties' arguments, Show why *this* amicus in *this* case on *this* question

### 2. Describe the Organisation with Verifiable Specifics

> [Organisation] is a [entity type] founded in [year] that represents [members/constituency] across [scope]. Its work includes [2-4 activities], including [activity relevant to the issue].

- Use verifiable facts (membership numbers, founding year, programmes) - no superlatives ("leading," "premier")
- Be candid about advocacy posture; disclose coalition composition when filing jointly, Omit programmes unconnected to the case

### 3. Establish Expertise Mapped to the Doctrinal Choice

Select 2-3 expertise pillars from: operational experience with the statutory scheme, technical knowledge of the regulated subject, published research or data, professional standards, litigation pattern awareness.

> Amicus has particular expertise relevant to the Court's analysis of [issue], including (1) [pillar], which informs how [rule] functions in practice; and (2) [pillar], which bears on [consequences] of adopting [proposed standard].

### 4. Articulate Concrete Non-Party Impact

Translate doctrine into real-world effects via causal chains, not conjecture.

> If the Court holds that [rule], then [mechanism], which would [consequence]. Because [Organisation] works directly with [group], it has a concrete perspective on how [standard] will shape [behaviour].

- Define affected populations specifically, not "all Scots" or "everyone"
- Describe mechanisms, not speculation, Do not argue the merits here

### 5. Calibrate Tone and Harmonise Disclosures

**Neutral expertise posture:**
> Amicus does not file to support any party as such, but to assist the Court by providing [technical/historical/industry] context relevant to [provision].

**Stakeholder advocate posture:**
> Amicus supports [party position] because the decision below threatens to [consequence] for [constituency], whom amicus serves through [programmes].

Draft as though every sentence will be excerpted by opposing counsel.

**Disclosure:** Include only when user affirmatively confirms facts. Mark unconfirmed elements `[VERIFY]`.

> Pursuant to [Rule], amicus curiae states that no counsel for a party authored this brief in whole or in part, and no person or entity other than amicus curiae or its counsel made a monetary contribution intended to fund the preparation or submission of this brief.

### 6. Produce Deliverable

Prefix every output with:
1. **Assumptions Used** - court, posture, tone, governing rules
2. **Open Items** - missing disclosures, unverified facts, rule uncertainties

Keep the Interest Statement to 1-3 paragraphs.

## Rules Reference

| Forum | Rule | Key Requirement |
|---|---|---|
| UK Supreme Court | UKSC Rules (SI 2009/1603) | Must bring matter not already presented by parties |
| Court of Session | RCS Chapter 58 or relevant practice note | Limited amicus interventions; leave normally required |
| Sheriff Court | Sheriff Court Rules | No direct amicus provision; seek guidance |
| Scottish Law Commission intervention | Statutory remit | Intervention by invitation or statutory authority |
| Representative bodies | Common law / statutory | May intervene if interest directly affected |

All rule citations require verification against current text before filing. `[VERIFY]` Amicus curiae practice in Scotland is more restricted than in the US, leave to intervene is not routinely granted and is typically limited to public bodies, the Scottish Law Commission, or organisations with a direct statutory interest.

## Post-Draft Checklist

Ask after delivering the draft:

1. Are all organisational facts verified and current?
2. Does the statement distinguish this amicus's perspective from the parties'?
3. Are disclosure facts confirmed for inclusion?
4. Should tone shift, more neutral or more advocacy?

## Quality Checks

- **Court test**: One-sentence explanation of why this amicus belongs in this case
- **Issue tethering**: Names the specific legal question at stake
- **Non-redundancy**: Articulates what amicus uniquely provides beyond the parties
- **Mission alignment**: Stated interest consistent with the organisation's mission
- **Factual support**: Every claim traceable to user input or flagged `[VERIFY]`
- **Disclosure consistency**: No contradictions between interest statement and disclosures
- **Adversarial resilience**: No sentence exploitable out of context
- **Procedural compliance**: Required disclosures present and correctly placed
- **Length**: 1-3 paragraphs, this is not the argument section

## Guardrails

- Flag all organisational facts for solicitor/advocate verification, Mark unverified citations `[VERIFY]`
- Do not resolve conflicts of interest, flag for legal review, Do not draft disclosures without user confirmation of underlying facts, Do not invent organisational facts, membership numbers, or programme descriptions, All output requires licensed solicitor or advocate review before submission

## Scotland/UK Adaptation

### Key Adaptations, Replaced all US federal/state court references with Scottish courts (Court of Session, Sheriff Court, UK Supreme Court)
- Replaced FRAP 29 → Court of Session Rules / Sheriff Court Rules / UK Supreme Court Rules, Replaced Supreme Court Rule 37 → UK Supreme Court Rules (SI 2009/1603)
- Removed California Rule 8.520(f) and all state-specific references, Replaced "attorney" → "solicitor or advocate"
- Replaced "licensed attorney review" → "licensed solicitor or advocate review"
- Replaced "clerk test" → "court test"
- Replaced US spelling (organization, program, behavior) with UK spelling throughout, Added note that amicus practice is restricted in Scotland

### [SCOTS] Notes, No direct Scottish equivalent of amicus curiae in most ordinary civil proceedings, Scottish Law Commission may intervene by invitation; representative bodies may intervene where a statutory interest is directly affected, The UK Supreme Court has its own rules for intervention (UKSC Rules, SI 2009/1603)
- In the Court of Session, amicus interventions are limited and normally require leave; practice varies by Division, Sheriff Court rules do not provide directly for amicus curiae; practitioners should seek guidance from the sheriff, Not suitable for routine civil litigation without confirmation that the relevant court permits amicus practice in the specific context

### [VERIFY] Items Before Use, Verify current Court of Session Rules (RCS) on third-party interventions, Verify current Sheriff Court practice on amicus-style submissions, Verify UK Supreme Court Rules on interventions (SI 2009/1603 as amended)
- Confirm with instructing solicitor or advocate that the target court permits amicus curiae in the specific proceedings, Verify any disclosure or funding requirements with the relevant court rules

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
