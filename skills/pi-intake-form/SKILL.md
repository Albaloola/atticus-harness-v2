---
name: pi-intake-form
language: en
description: 'Drafts a structured personal injury client intake form for initial consultations covering client identification, incident details, injury/treatment history, insurance, prior legal history, and authorizations. Supports conflict checking, case evaluation, and engagement setup. Use when onboarding a new PI client, creating intake questionnaires, or building pre-filing client records. Trigger keywords: personal injury intake, client onboarding, PI questionnaire, accident intake, injury claim intake. [Atticus UK/Scots refined]'
tags:
- SCOTS, checklist, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Personal Injury Client Intake Form

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

Drafts a fillable intake form for prospective personal injury clients that supports conflict checking, statute-of-limitations tracking, case evaluation, and engagement setup.

## Prerequisites

1. **Jurisdiction** - state/country of incident and client residence (determines SOL, comparative fault rules, damage caps, no-fault requirements).
2. **Firm details** - firm name, address, contact info, fee structure (contingency percentage, cost advancement policy).
3. **Documents already provided** - accident reports, medical records, photos, correspondence, to pre-populate fields and generate follow-up questions.

## Output Structure

Generate a fillable intake form with the following sections in order. Calculate and flag the statute-of-limitations deadline prominently at the top based on jurisdiction and incident type.

### 1) Client Identification

| Field | Notes |
|---|---|
| Full legal name | As on government ID |
| Former names / aliases | For conflict checking |
| Date of birth | |
| SSN (last 4 only) | Include privacy notice |
| Residential address | |
| Mailing address (if different) | |
| Marital status / spouse name | Loss-of-consortium relevance |
| Dependents (names, ages) | Wrongful death relevance |

### 2) Contact & Communication

| Field | Notes |
|---|---|
| Primary phone | Mobile / landline |
| Secondary phone | |
| Email (personal / work) | |
| Preferred contact method | Phone / email / text / portal |
| Do NOT contact at | Confidentiality concerns |
| Text/email consent | Security limitation warning |
| Authorized recipients | Others permitted case info |
| Interpreter / accommodation | Language or accessibility needs |

### 3) Incident Details

- **Date of incident** - flag SOL deadline (verify jurisdiction-specific period)
- **Location** - street address, city, county, state
- **Type** - motor vehicle, slip/fall, premises liability, product liability, medical malpractice, dog bite, workplace, other
- **Narrative** - client's own words, chronological
- **Conditions** - weather, road, environmental (if applicable)
- **Police / incident report** - report number, agency
- **Witnesses** - name, phone, relationship, observations
- **Photos / video** - scene, injuries, property damage

### 4) Parties Involved

For each opposing party and additional involved parties:

| Field | Details |
|---|---|
| Full name | |
| Role | At-fault driver, property owner, employer, manufacturer, etc. |
| Contact info / address | |
| Insurance carrier & policy # | If known |
| Attorney (if represented) | Name, firm, contact |
| Employer | If commercial vehicle / on-the-job |
| Relationship to client | Stranger, employer, landlord, etc. |

Ensure every named person/entity is captured for conflict-system intake.

### 5) Injuries & Medical Treatment

- **Injuries sustained** - body parts, diagnosis if known
- **Ambulance transport** - destination facility
- **ER / urgent care** - date, facility
- **Treating physicians** - name, specialty, facility, treatment dates
- **Ongoing treatment** - PT, scheduled surgery, pain management
- **Pre-existing conditions** - same body parts or related (critical for causation)
- **Lost work days** - dates, employer, wage rate
- **Current symptom status** - improving / stable / worsening
- **Medical records authorization** - HIPAA-compliant release attached

### 6) Insurance Information

| Type | Carrier | Policy # | Limits (if known) |
|---|---|---|---|
| Client auto | | | |
| Client health | | | |
| UM/UIM coverage | | | |
| MedPay / PIP | | | |
| At-fault liability | | | |
| Homeowner's / renter's | | | |
| Umbrella | | | |

- **Recorded statement given?** - to whom, when (flag as red flag)
- **Signed anything from opposing insurer?** - flag immediately

Note: no-fault states require adjusted insurance sections [VERIFY jurisdiction].

### 7) Property Damage

- Vehicle year/make/model, current location, Repair estimate or total loss determination, Rental car status, Personal property damaged

### 8) Prior Legal History

- **Prior attorneys on this matter** - name, firm, dates, reason ended
- **Pending / prior litigation** (past 10 years) - case, court, status
- **Prior PI claims** - critical for credibility and IME preparation
- **Criminal history** - may be discoverable
- **Bankruptcy filings** - affects claim ownership
- **Family members with matters at firm** - conflict check

### 9) Financial / Fee Discussion

- Employment status and occupation, Income range (bracketed: <£15K / £15-30K / £30-60K / £60K+)
- Contingency fee explanation, plain-language description, Cost advancement acknowledgment, Lien awareness, Medicare, Medicaid, ERISA, workers' comp, child support

State that a separate written contingency fee agreement will follow if the firm accepts the matter. Do not include a fee agreement in the intake form.

### 10) Authorizations & Disclosures

Include with signature lines:

- [ ] No solicitor-client relationship disclaimer, intake does not create representation
- [ ] Medical records authorization (GDPR / DPA 2018 compliant)
- [ ] Employment records authorization
- [ ] Insurance records authorization
- [ ] Third-party communication consent
- [ ] Data privacy notice
- [ ] Text/email communication consent (with security warnings)
- [ ] Accuracy acknowledgment

Signature blocks: prospective client, intake solicitor, date.

## Guidelines

- Flag SOL deadline at top of completed form; verify jurisdiction-specific periods.
- Use plain language throughout, clients are often injured and stressed.
- Pre-populate from uploaded documents; generate specific follow-up questions for gaps.
- Capture all named persons/entities in conflict-check-compatible format.
- Note jurisdiction-specific variations [VERIFY].
- Flag red flags early: prior recorded statements, signed releases, pre-existing conditions in same body part, approaching SOL.
- Formatting: minimum 11pt body, adequate white space, section headers, fillable fields.
- Use [VERIFY] for all jurisdiction-specific rules before finalizing.

## Cross-references

- @demand-letter-personal-injury
- @medical-records-summary
- @contingency-fee-agreement
- @hipaa-authorization

## Scotland/UK Adaptation

### Core Concept Conversion

| US Term | Scotland/UK Equivalent |
|---|---|
| State jurisdiction (e.g., California) | **Scotland (Scots law)** - delictual claims governed by Scots common law and Prescription and Limitation (Scotland) Act 1973 |
| Statute of Limitations | **Prescription** - Prescription and Limitation (Scotland) Act 1973 |
| Personal injury SOL (2-3 years typical for US states) | **3 years** from date of injury (or date of knowledge) for personal injury delict claims; **20 year long-stop** |
| Comparative fault | **Contributory negligence** - damages reduced proportionally (*Smith v. Lord Advocate* [1994]) |
| Contingency fee | **Speculative fee / No-win no-fee** (solicitor can agree to be paid only if successful, but contingency fee as % of damages is prohibited in Scotland) |
| Punitive damages | **No punitive damages** in Scottish delict law; limited aggravated/exemplary damages |
| No-fault insurance (PIP) | **No PIP system** - Scotland is fault-based; use MIB (Motor Insurers' Bureau) for uninsured drivers |
| HIPAA | **GDPR / Data Protection Act 2018** - medical records authorization requires explicit consent |
| SSN (last 4) | **NI number** (National Insurance) - collect with appropriate privacy notice |
| Pre-existing condition | Same concept, critical for causation analysis |
| Loss of consortium | **Loss of society** - Damages (Scotland) Act 2011 s. 4 |

### Scottish Personal Injury Procedure

1. **Court hierarchy** - Sheriff Court (most PI claims) or Court of Session (high-value/complex claims)
2. **Simple Procedure** (up to £5,000) - streamlined, no pre-trial hearing on evidence
3. **Ordinary Cause** (over £5,000 - typical for PI) - pre-trial options hearing, affidavit evidence
4. **Compulsory Pre-Action Protocol** - pre-litigation correspondence and disclosure required before raising proceedings
5. **Judicial expenses** - "loser pays" rule applies; fees follow success
6. **Qualified One-way Costs Shifting (QOCS)** - in certain PI cases, pursuer's costs liability limited
7. **Periodical payments** - Court can order structured settlements for future care costs

### Key Differences for Practitioners

1. **Prescription period** - Personal injury claims: 3 years from injury / knowledge, with an absolute 20-year long-stop. No "discovery rule" extension beyond these limits.
2. **No punitive damages** - Only compensatory damages available (solatium for pain and suffering, past/future wage loss, medical expenses).
3. **Speculative fee** - Scottish solicitors can act on a "no win, no fee" basis but cannot charge a percentage of damages. Fees must be reasonable and agreed in writing.
4. **Pre-action protocol** - Scottish PI has a formal pre-action protocol requiring early notification, document exchange, and negotiation before litigation.
5. **Medical records** - Subject to GDPR / DPA 2018; client consent required. Third-party records require court order or the client's written mandate.
6. **MIB** - The Motor Insurers' Bureau provides compensation for uninsured / untraced drivers (no UM/UIM insurance product).
7. **General damages (solatium)** - Guided by the Judicial College Guidelines (but Scottish adaptation), not US-style per diem or multiplier methods.

### Recommended Approach

- Replace all US state-specific references (SSN, HIPAA, state SOL, state comparative fault rules) with Scottish equivalents.
- Convert dollar figures to GBP (£).
- Replace HIPAA authorization with GDPR-compliant data processing consent.
- Replace contingency fee section with Scottish speculative fee / no-win no-fee arrangement.
- Update SOL flag to Prescription and Limitation (Scotland) Act 1973.

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
