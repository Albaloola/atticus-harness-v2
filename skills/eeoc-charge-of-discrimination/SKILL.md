---
name: eeoc-charge-of-discrimination
language: en
description: Drafts an Employment Tribunal claim (ET1 form) for unlawful discrimination under the Equality Act 2010. Verifies jurisdiction and timeliness under the Employment Tribunal Rules of Procedure, builds a prima facie narrative from uploaded documents, and structures the statement of claim. Use when preparing employment discrimination claims, harassment complaints, failure-to-accommodate claims, or ACAS Early Conciliation notices for the Employment Tribunal in Scotland. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Employment Tribunal Claim, Discrimination (ET1) - Scotland/UK

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

Drafts a jurisdictionally sufficient Employment Tribunal claim (ET1) that satisfies the Employment Tribunal Rules of Procedure and preserves the right to proceed to a final hearing.

## Prerequisites

Collect before drafting:

1. **Claimant** - name, address, phone, email, job title, start/termination dates, pay details
2. **Respondent** - legal entity name, address, employee count, HR/legal contact
3. **Timeline documents** - adverse action notices, performance reviews, disciplinary records, communications, written statement of employment particulars
4. **Protected characteristic basis** - age, disability, gender reassignment, marriage/civil partnership, pregnancy/maternity, race, religion/belief, sex, sexual orientation, with supporting facts
5. **Comparators/witnesses** - names, titles, treatment differentials
6. **ACAS Early Conciliation** - ACAS EC certificate number (mandatory before ET claim)
7. **Filing deadline** - date of last discriminatory act; normally 3 months less 1 day

## Quick Start

1. Run jurisdiction and timeliness check (including ACAS Early Conciliation impact on deadlines)
2. Complete claimant and respondent sections
3. Identify protected characteristics and adverse actions with exact dates
4. Draft chronological factual narrative (statement of claim)
5. Specify remedy requested with applicable compensation bands
6. Add ET1 verification

## Core Workflow

### 1. Jurisdiction & Timeliness

| Factor | Rule |
|--------|------|
| Equality Act 2010 | No minimum employee threshold (except unfair dismissal: 2 years continuous service) |
| Employment Tribunal jurisdiction | Scotland: Employment Tribunals (Glasgow, Edinburgh, Dundee, Aberdeen); online (HMCTS) |
| ACAS Early Conciliation | **Mandatory** before ET1 filing; time limit paused for EC period (up to 6 weeks) |
| Filing deadline, discrimination | **3 months less 1 day** from act of discrimination (Equality Act 2010, s. 123) |
| Filing deadline, unfair dismissal | **3 months less 1 day** from effective date of termination |
| Continuing act | For ongoing discrimination: treat as series; final incident date governs deadline |
| Extension for equal pay claims | From last day of employment if continuous series (EqA 2010, s. 129) |

Flag whether ACAS Early Conciliation notification was submitted in time; system automatically extends the deadline.

### 2. Claimant Section

- Full legal name, address, phone, email, Employment status (employee / worker / applicant), job title, department, line manager, start and separation dates, Protected characteristic(s) - stated as fact, not legal conclusion, Whether union member or other representative

### 3. Respondent Section

- Legal entity name (registered company name, not trading name), Companies House number, registered address/principal place of business, HR director or registered address for service, Employer size for remedy cap purposes

### 4. Protected Characteristics (Equality Act 2010)

| Section | Protected Characteristic |
|---------|------------------------|
| s. 10 | Age |
| s. 6 | Disability |
| s. 7 | Gender reassignment |
| s. 8 | Marriage and civil partnership |
| s. 17 | Pregnancy and maternity |
| s. 9 | Race (including colour, nationality, ethnic/national origins) |
| s. 10 | Religion or belief |
| s. 11 | Sex |
| s. 12 | Sexual orientation |
| s. 13 | Direct discrimination |
| s. 19 | Indirect discrimination |
| s. 15 | Discrimination arising from disability |
| s. 20 to 21 | Duty to make reasonable adjustments |
| s. 26 | Harassment (related to/relevant characteristic) |
| s. 27 | Victimisation |

### 5. Prohibited Conduct

List each discrete act with exact date: dismissal, detriment, failure to promote/transfer/train, refusal of reasonable adjustments, harassment, victimisation.

### 6. Factual Narrative (Statement of Claim)

Structure chronologically in the ET1 statement of claim field:

1. **Background** - start date, role, performance baseline
2. **Protected characteristic / activity** - how and when respondent had knowledge
3. **Discriminatory conduct** - specific acts, direct quotes, dates, actor names
4. **Comparators** - name, title, protected characteristics, treatment differential
5. **Employer knowledge** - complaints/grievances made, to whom, date, outcome
6. **Adverse action** - decision-maker, stated reason, alleged discriminatory reason
7. **Harm** - financial losses, injury to feelings, details

**Claim-specific elements:**
- **Harassment** - unwanted conduct related to protected characteristic; purpose/effect violating dignity or creating intimidating environment (EqA s. 26)
- **Reasonable adjustments** - provision, criterion or practice (PCP); substantial disadvantage; knowledge; duty to take reasonable steps (EqA ss. 20 to 21, Schedule 8)
- **Victimisation** - protected act (EqA s. 27) → employer knowledge → detriment with causal connection

### 7. Remedy

- **Financial losses**: loss of earnings (past and future), pension loss, loss of statutory rights
- **Injury to feelings**: Vento bands (updated annually by the Presidential Guidance):

| Band | 2025/26 Guideline Amount | Category |
|------|--------------------------|----------|
| Lower | £1,200, £12,600 | Minor/one-off act (no psychiatric injury) |
| Middle | £12,600, £37,000* | Serious but not exceptional cases |
| Upper | £37,000, £61,500* | Most serious cases (long campaign of harassment) |
| (*Subject to annual adjustment, verify current Vento bands at time of claim) |

- **Aggravated damages**: in exceptional cases with oppressive/high-handed conduct
- **Declaration of rights** (EqA s. 124(2)(a))
- **Recommendation** (EqA s. 124(2)(c)) - wider than rec in EqA 2006: respondent to take specified practical steps
- **Interest** on past losses (Employment Tribunals (Interest) Order 1990) and injury to feelings
- **No punitive damages** in UK employment tribunals

### 8. Verification (ET1)

ET1 form includes an online declaration:

> "I believe that the facts stated in this claim are true."

The claimant (or representative) must tick the declaration box. Representative details (name, firm, address, reference) included if applicable.

## Pitfalls & Checks

- **ACAS EC number mandatory** - ET1 cannot be accepted without an ACAS Early Conciliation certificate number (or exemption)
- **Preserve all claims** - omitted claims may require amendment with tribunal permission
- **Limit the statement of claim** - ET1 form has a character limit for the statement of claim field; use attached schedule for longer narratives
- **Continuing act** - expressly argue if some acts fall outside the 3-month window via EqA s. 123(3)
- **ACAS notification of claim** - respondent notified by ET; claimant serves only the ET1
- **Witness safety** - address for service may be withheld if there is a risk of harassment
- **Unfair dismissal served concurrently** - include claim even if under 2 years (automatically unfair grounds, whistleblowing, discrimination)
- **Remedy cap** - unfair dismissal basic award: max £21,560 (2025/26 - verify current); compensatory award: lower of 12 months' gross pay or £120,972 (2025/26 - verify current); discrimination claims: uncapped but subject to Vento bands for injury to feelings
- **File via ET1 online portal** - retain acknowledgment email

---

## Scotland/UK Adaptation

This skill has been adapted from its original US-focused version (EEOC Charge of Discrimination / Form 5) for use under Scottish and UK employment law.

### Key US-to-UK/Scottish Conversions

| US Term | Scottish/UK Equivalent |
|---------|----------------------|
| EEOC (Equal Employment Opportunity Commission) | ACAS, Employment Tribunal system |
| EEOC Form 5 (Charge of Discrimination) | ET1 Claim Form (Employment Tribunal) |
| Title VII (Civil Rights Act 1964) | Equality Act 2010, Parts 5 (Work) and 6 (Education etc.) |
| ADEA (Age Discrimination in Employment Act) | Equality Act 2010, s. 5 (Age) |
| ADA (Americans with Disabilities Act) | Equality Act 2010, Part 2 (Disability); ss. 15, 20 to 22 (Reasonable Adjustments) |
| GINA (Genetic Information Nondiscrimination Act) | Covered under UK GDPR / DPA 2018 - not a protected characteristic in EqA 2010 |
| EPA (Equal Pay Act of 1963) | Equality Act 2010, s. 64 to 80 (Equal pay) enforced in Employment Tribunal |
| FEPA (Fair Employment Practices Agencies, state) | ACAS (independent public body) |
| 180-day filing (non-deferral) / 300-day (deferral) | 3 months less 1 day (EqA 2010, s. 123) - extended by ACAS Early Conciliation |
| 15 employees minimum (Title VII) | No minimum employee threshold for EqA 2010 discrimination claims |
| 20 employees minimum (ADEA) | N/A, EqA applies to all employers |
| "protected class" | "Protected characteristic" (EqA 2010, s. 4) |
| Adverse action (termination/demotion) | Detriment (s. 39 EqA) / Dismissal |
| Punitive damages | Not available in UK employment tribunals |
| Compensatory damages caps ($50k-$300k) | Vento bands for injury to feelings; losses uncapped |
| Front pay | Future loss of earnings (periodic or actuarial) |
| Back pay | Past loss of earnings subject to duty to mitigate |
| Prejudgment interest | Interest under Employment Tribunals (Interest) Order 1990 |
| Retaliation | Victimisation (EqA 2010, s. 27) |
| Hostile work environment | Harassment (EqA 2010, s. 26) |
| State workers' compensation | No Scottish equivalent, separate benefits system (PIP, JSA, UC) |

### Regulatory Framework

- **Primary legislation**: Equality Act 2010 (applies across GB, Scotland, England, Wales)
- **Scottish jurisdiction**: Employment Tribunals in Scotland apply the same EqA 2010 as England/Wales but have separate Rules of Procedure (Employment Tribunals (Constitution and Rules of Procedure) Regulations 2013 - Scotland)
- **Key procedural differences**: ACAS Early Conciliation is mandatory for all jurisdictional complaints
- **Grievance procedure (non-statutory)**: ACAS Code of Practice on Disciplinary and Grievance Procedures applies; failure to follow may impact compensation by up to 25%
- **No jury trials**: Employment Tribunals consist of an Employment Judge (legally qualified) and two lay members (one employer-side, one employee-side)
- **Legal representation**: Solicitors' fees are recoverable in discrimination claims (costs regime less common than in civil courts)
- **Time limits**: Employment Tribunal has a "just and equitable" discretion to extend time in discrimination cases (EqA s. 123(3)(b)) - broader than US 180/300-day hard cutoff

### Practitioner Notes

- Pre-claim ACAS Early Conciliation is mandatory, the clock stops during the conciliation period, The Equality Act 2010 creates 9 protected characteristics, with specific provisions for pregnancy/maternity (not a "protected class" in the US sense)
- No punitive damages in ET; injury to feelings is compensatory, not exemplary, Unlike US practice, there is no requirement to first file with an administrative agency before the ET, after ACAS Early Conciliation, the ET1 is filed directly with the tribunal, Whistleblowing claims (Employment Rights Act 1996, s. 43A-43L / Public Interest Disclosure Act 1998) are often run concurrently with discrimination, The Scottish solicitor's role: preparing the ET1 and particulars of claim, representation at Preliminary Hearings (case management and jurisdiction), and Full Merits Hearings

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
