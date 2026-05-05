---
name: plea-agreement-summary
language: en
description: Atticus UK/Scots legal skill for plea-agreement-summary. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Plea Agreement Summary

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

Produces a structured quick-reference summary of a criminal plea resolution for solicitors, advocates, and court personnel in the Scottish criminal justice system.

**Important:** [SCOTS: Note] Plea bargaining in Scotland is fundamentally different from US plea bargaining. There is no US-style plea agreement with detailed written terms. Scottish procedure uses: (a) plea of guilty tendered at Preliminary Hearing (Solemn) or at trial diet (Summary) - often after sentencing indication from the court; (b) "plea in bar of trial" for preliminary challenges; (c) sentence discount for early plea under s.196 Criminal Procedure (Scotland) Act 1995. Agreements between prosecution (COPFS) and defence are less formal, usually recorded in correspondence and minute of plea.

## Prerequisites

1. **Plea documentation** - minute of plea, written basis of plea, correspondence with COPFS
2. **Original charging document** - complaint or indictment (for charge comparison)
3. **Sentencing information** - any sentence indication from the court; relevant sentencing guidelines (Sentencing Council for Scotland)

## Quick Start

1. Collect the plea documentation and original charges.
2. Walk through each output section below, extracting relevant terms.
3. Use tables for charges and sentencing; omit sections with no corresponding content.
4. Run the checklist under Critical Checks before delivering.

## Output Sections

### 1. Case Identification

| Field | Value |
|-------|-------|
| Accused | Name, DOB, case number |
| Court | High Court of Justiciary / Sheriff Court (Solemn / Summary) |
| Crown | COPFS office and Procurator Fiscal |
| Defence | Solicitor name, firm, or counsel |
| Date of Plea | |

### 2. Charges Comparison

| # | Original Charge | Statute | Max Penalty | Plea Charge | Statute | Max Penalty | Disposition |
|---|----------------|---------|-------------|-------------|---------|-------------|-------------|
| 1 | | | | | | | Guilty / Not Guilty / S.196 discount applied |

Note charges deleted (no pro per saltem), reduced, or amended as part of the negotiated resolution. [SCOTS: Note] Scottish procedure: the Crown may accept a plea to a lesser charge (e.g., culpable homicide instead of murder) or delete certain charges. This is recorded in correspondence or stated in open court, not in a US-style written plea agreement.

### 3. Basis of Plea

Summarise the agreed factual basis for the plea (narrative of facts accepted by both parties). Flag any disputed facts or reservations. Note if the Crown accepts a restricted narrative.

### 4. Sentencing Terms

| Term | Details |
|------|---------|
| Custody | Duration, backdated to remand, release provisions |
| Community Payback Order | Hours, conditions, level |
| Fine | Amount, payment schedule |
| Compensation Order | Amount, recipients, schedule |
| Restriction of Liberty Order | Duration, conditions |
| Other Orders | Forfeiture, disqualification (driving, firearms), non-harassment order, sexual offences notification |

- Note whether sentence discount under s.196 CP(S)A 1995 has been indicated or agreed, Note any joint submission by Crown and Defence, State whether the court had indicated a sentencing "cap" (common in solemn procedure)

### 5. Waivers and Admissions

Mark each as included or not:

- [ ] Right to trial
- [ ] Right to lead evidence (in mitigation)
- [ ] Right to challenge admissibility
- [ ] Time bar / delay challenge
- [ ] Plea in bar of trial (abandoned)
- [ ] Other (specify)

Note preserved rights or conditional waivers.

### 6. Cooperation Provisions

If applicable:

- Scope (Section 5/6 of CP(S)A, witness citation, agreed evidence, joint minute of admissions)
- Crown obligations (concession on sentence, reduced charge, letter to court)
- Section 304 (witness anonymous status, special measures)
- Protection arrangements

### 7. Collateral Consequences

Flag consequences **explicitly addressed**:

- [ ] Immigration (deportation, residence)
- [ ] Sex offender notification (duration, tier)
- [ ] Firearm prohibition (s.6 Firearms Act 1968)
- [ ] Professional licensing impact (PVG scheme, GTCS, SSSC etc.)
- [ ] Confiscation (Proceeds of Crime Act 2002, Part 3 - Scottish provisions)
- [ ] Disqualification (company director, driving)
- [ ] Other civil disabilities

### 8. Breach Provisions

**Crown options:**
- If accused fails to appear for sentencing: bench warrant, If basis of plea disputed: Crown may withdraw acceptance, If fresh charges: Crown may withdraw concession on sentence

### 9. Special Provisions

Capture non-standard terms: deferred sentence (s.202 CP(S)A), restriction of liberty order, drug treatment and testing order, bail pending sentence, co-accused coordination, agreed evidence by joint minute.

### 10. Key Dates & Deadlines

| Event | Date/Deadline |
|-------|---------------|
| Sentence diet | |
| Compensation payments begin | |
| CPO start date | |
| RLO start date | |
| Confiscation order deadline | |

## Critical Checks

- **Sentence discount** - s.196 CP(S)A 1995: court must state discount applied (1/3 for early plea; smaller for late). Always document the discount stage.
- **Crown concessions** - document any Crown agreement to delete charges or accept restricted narrative.
- **Exact figures** - monetary amounts, dates, and statutory citations must be verbatim; never round or paraphrase.
- **Flag ambiguities** - mark unclear or inconsistent provisions with `[AMBIGUOUS, verify with minute of plea]`.
- **Immigration silence** - if the accused may be subject to immigration control and immigration consequences are not addressed, flag: `[WARNING: Immigration consequences not addressed, reportable for advice]`.
- **No editorialising** - summarise what the plea documentation says, not whether terms are favourable.
- **Plain language** - define legal terms parenthetically on first use; keep precise enough for practitioners.

## Scotland/UK Adaptation

The following adaptations apply when this skill is used for Scottish proceedings:

**Fundamental differences:** Scottish criminal procedure does not have US-style written plea agreements. The process is governed by Criminal Procedure (Scotland) Act 1995. Key differences:

**Plea in bar of trial:** Scottish preliminary challenges (plea in bar of trial for oppression, delay, insanity) are different from US motions (suppress evidence, dismiss indictment). These are argued before the trial judge.

**COPFS:** The Crown Office and Procurator Fiscal Service prosecutes crimes in Scotland. No elected District Attorneys. COPFS issues guidelines on when to accept pleas.

**Sentencing discount:** s.196 CP(S)A 1995 mandates that courts state the discount applied for an early plea. Typical discount: up to 1/3 for early plea (First Diet / Preliminary Hearing), reducing for later pleas.

**Sentence indications:** In Solemn procedure, the defence may request a sentence indication before tendering a plea. The judge may give an indication of the maximum sentence if a plea is tendered.

**Joint minute:** Formal agreement on facts or evidence between Crown and Defence, signed by both, accepted by the court, without need for formal proof.

**Basis of plea:** Where the plea is to a lesser charge, the Crown may accept a restricted basis (narrative of facts). If the basis is disputed, the court may hold a proof of facts (Newton-type hearing).

**Compensation:** Courts may make compensation orders (CP(S)A ss.249-253). Proceeds of crime confiscation under POCA 2002 (Part 3 - Scottish specific provisions).

**No writ of certiorari/habeas corpus:** Use nobile officium (Court of Session) for certain remedies or Bill of suspension / Bill of advocation for appeals.

**Appeals:** Summary: stated case to High Court of Justiciary. Solemn: appeal against conviction and/or sentence to High Court of Justiciary (SCCRC for possible referral after unsuccessful appeal).

**Gender-neutral language:** Use "accused," "Crown," "defence solicitor/advocate," "judge" or "sheriff."

[VERIFY: Confirm current sentencing guidelines, COPFS plea policy, and s.196 discount practice before finalising.]

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
