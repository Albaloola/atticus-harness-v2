---
name: complaint-for-negligence
language: en
description: '[SCOTS] Drafts a court-ready Initial Writ (Court of Session) or Summons (Sheriff Court) for delictual claims of negligence, establishing duty, breach, causation, and damages under Scots law. Use when initiating a personal injury action, professional negligence claim, or delictual claim such as road traffic collisions, occupiers'' liability, or clinical negligence. Keywords: initial writ, summons, delict, negligence, personal injury, professional negligence, Court of Session, Sheriff Court, Scotland. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Complaint for Negligence, Scotland/UK Adaptation

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

Drafts a court-ready Initial Writ (Court of Session) or Summons (Sheriff Court) for delictual negligence claims under Scots law, positioned to meet Scottish pleading standards and survive preliminary debate (the Scottish equivalent of a motion to dismiss).

## Prerequisites

Gather before drafting:

- **Incident facts** - date, time, location, parties, sequence of events
- **Defender identification** - full legal name, entity type, registered address (Companies House)
- **Medical records** - diagnoses, treatment timeline, itemised expenses
- **Economic losses** - wage records, property damage, loss of earnings
- **Jurisdiction/forum** - Court of Session (personal injury actions >£5,000 plus solatium) or Sheriff Court (summary cause, ordinary cause, or personal injury procedure)
- **Governing authority** - Scots delict case law, applicable statutes (e.g., Occupiers' Liability (Scotland) Act 1960, Road Traffic Act 1988)

## Drafting Workflow

### 1. Instance/Caption

- Court name: COURT OF SESSION (SCOTLAND) or [SHERIFFDOM] SHERIFF COURT, All party names with designations (pursuer / defender); verify corporate names via Companies House, Case number field; title: `INITIAL WRIT` or `SUMMONS FOR NEGLIGENCE`

### 2. Jurisdiction and Forum

**Court of Session:** General jurisdiction over delict claims with value >£100,000 or personal injury >£5,000. Also claims where defender is domiciled in Scotland or delict occurred in Scotland.

**Sheriff Court:** Summary cause (<£3,000), ordinary cause (£3,000 to £100,000), or personal injury procedure (any value up to Court of Session threshold).

Include factual allegations supporting jurisdiction, address of defender, location of delict.

### 3. Parties

**Pursuer:** Full name, address, legal status. For a child: name legal representative (curator ad litem) or pursuer as an individual.

**Defender:** Full name, address, entity type. For employed defenders, allege acting in course of employment to establish vicarious liability.

### 4. Condescendence (Factual Allegations)

Draft numbered articles of condescendence with discrete, observable facts. No legal conclusions.

1. **Background** - party relationships, defender's role/control, pursuer's status
2. **Incident** - date/time, precise location, sequence with measurements, speeds, conditions
3. **Injuries** - fracture type/location, diagnoses, surgical interventions
4. **Treatment** - emergency transport, hospitalisation, surgery, rehab, future needs
5. **Economic losses** - itemised medical expenses, lost earnings, property damage, future costs
6. **Non-economic losses** - solatium (pain and suffering), loss of amenity, loss of society (Fatal Accidents)

> **Key standard:** Replace conclusions with concrete facts. Not "The Defender was negligent" but "The Defender drove through a steady red light at excessive speed without braking."

### 5. Pleas-in-Law (Legal Grounds)

State legal propositions supporting the claim:

| Plea | Content |
|---|---|
| **Duty** | The Defender owed the Pursuer a duty of care (neighbour principle / specific statutory duty) |
| **Breach** | The Defender breached that duty by the acts or omissions condescended upon |
| **Causation** | The Defender's breach caused or materially contributed to the Pursuer's loss |
| **Damages** | The Pursuer suffered loss, injury, and damage as a result; quantum to be assessed judicially |
| **Negligence per se** (if applicable) | Breach of statutory duty constituting negligence (specify statute) |
| **Respondeat superior** | Vicarious liability: the Defender's employee was acting in course of employment |

### 6. Crave (Prayer for Relief)

- Damages (solatium + patrimonial loss); quantum to be assessed, Past and future medical expenses, Past and future lost earnings / loss of earning capacity, Property damage, Solatium for pain and suffering, loss of amenity, Pre-judgment interest (Interest on Damages (Scotland) Act 1958 / Judicial Factors (Scotland) Act 1889)
- Post-judgment interest, Expenses (costs of suit)
- Catchall: "Grant such other and further relief as may be just and proper in the circumstances."
- **Jury crave** (if applicable): "Desire jury trial" - only available in Court of Session personal injury actions

### 7. Signature Block

- Solicitor name, firm, address, phone, email, Signing agent/partner for the firm, Date

## Pitfalls and Checks

- **Pleading standard** - Scottish pleading requires sufficient specification to allow the defender to know the case against them; no equivalent to Twombly/Iqbal plausibility standard
- **Legal conclusions in condescendence** - Keep duty/breach/causation labels in pleas-in-law only, not in factual condescendence
- **Unverified citations** - Mark any statutory citation you cannot independently confirm as `[VERIFY]`
- **Entity name errors** - Verify all corporate/LLC company names via Companies House before lodging
- **Settlement offer / tender rules** - Chapter 36 / Rule 29 tenders have cost consequences; be aware of their effect on expenses
- **Local formatting rules** - Confirm margins, font, spacing, page limits, and e-filing requirements for the specific court (Civil Online / CCAM)

## Scotland/UK Adaptation, Key Differences

### Delict vs Torts, Scots law uses the term **delict** (not tort), though the principles of negligence closely mirror English law.
- Primary sources: common law (neighbour principle from Donoghue v Stevenson [1932]), Occupiers' Liability (Scotland) Act 1960, Road Traffic Act 1988.

### Procedure
- **Court of Session:** Initial Writ followed by summons; pleading stage (adjustment) then procedure roll debate.
- **Sheriff Court:** Initial Writ (Ordinary Cause) or summons with statement of claim (Simple Procedure / Personal Injury).
- **No US-style discovery motions** - Scottish procedure uses specification of documents, commission and diligence for recovery.

### Damages terminology
| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| Personal injury suit | Delictual action for damages for personal injuries |
| Compensatory damages | Damages (solatium + patrimonial loss) |
| General damages | Solatium (pain and suffering) |
| Special damages | Patrimonial loss (wage loss, medical expenses) |
| Punitive / exemplary damages | Generally not available in Scottish delict |
| Pre-judgment interest | Interest prior to decree; awarded at judicial rate | 
| Motion to dismiss | Preliminary debate / procedure roll hearing |
| Discovery | Commission and diligence / specification of documents |
| Attorney's fees | Expenses (usually taxed if successful) |
| $ | £ (GBP) |
| Secretary of State | Companies House |
| Dollar amounts in complaints | Prohibited in Scotland; quantum usually left unpleaded |
| Twombly/Iqbal | No equivalent, Scottish pleading requires fair notice |

### Flagged: Concepts with no direct Scottish equivalent

- **Punitive / exemplary damages** - not available for delict in Scotland.
- **US-style discovery depositions** - no equivalent; precognition is informal.
- **FRCP 38 jury demand** - jury trials only available in Court of Session personal injury actions; Sheriff Court civil cases are judge-only.
- **No Twombly/Iqbal** - Scottish courts apply a fair notice test, not a plausibility standard.

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
