---
name: labor-violation-summary
language: en
description: Produces structured summaries of employment law and health and safety violation investigations in Scotland/UK with categorised findings, evidence citations, affected worker counts, and remedial recommendations. Covers wages/hours (Employment Rights Act, National Minimum Wage), workplace safety (HSWA), and worker rights/union access (TULRCA, Equality Act). Use when summarising employment tribunal claims, HSE investigations, HMRC National Minimum Wage enforcement, compliance audits, or workplace disciplinary/grievance findings in a Scottish or UK context. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Employment Violation Summary, Scotland/UK

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

Distils inspection reports, payroll records, witness statements, and regulatory findings into a categorised violation analysis with evidence citations and remedial actions. This skill adapts the US labour law violation model for the Scottish/UK context.

[SCOTS: Note] This skill adapts US-style FLSA/OSHA/NLRA violation analysis for the UK. The core methodology (evidence-led, categorised, quantified findings) transfers directly. However, the statutory frameworks, enforcement agencies, time limits, and remedies are entirely different. Employment law in Scotland is largely reserved to the UK Parliament (Employment Tribunals are a GB-wide system). Key differences: (1) no FLSA liquidated damages, UK awards are compensatory, not punitive; (2) no OSHA private right of action, HSE is the sole enforcer; (3) employment tribunal time limits are tight (3 months less 1 day); (4) no at-will employment, unfair dismissal requires 2 years' continuous service (with exceptions).

## Prerequisites

Gather before starting:

- HSE inspection reports, improvement/prohibition notices, prosecution files, HMRC National Minimum Wage enforcement notices, compliance reports, ACAS Early Conciliation certificates, Employment Tribunal ET1 claim forms and responses, Payroll and timekeeping records (for wage quantification)
- Employment contracts, staff handbooks, disciplinary/grievance records, Witness statements, whistleblowing reports, interview transcripts, Equality Act 2010 discrimination complaints and investigation reports, Settlement agreements, COT3 agreements (ACAS), or tribunal judgments

## Quick Start

1. Identify all violation categories present (wages/hours, health & safety, worker rights, discrimination)
2. Build the Executive Overview table
3. Document each violation using the category-specific fields below
4. Assess culpability indicators
5. Compile remedial actions with deadlines and status
6. Flag open items and unresolved disputes

## Output Structure

### 1. Executive Overview

| Field | Content |
|-------|---------|
| Employer/Entity | Name, location(s), industry, Companies House number |
| Investigation Period | Date range |
| Investigating Body | HMRC, HSE, Employment Tribunal, ACAS, EHRC, or internal |
| Violation Categories | Wages/hours, health & safety, worker rights, discrimination |
| Workers Affected | Total count, by category |
| Status | Alleged, preliminary, confirmed, or ongoing |

### 2. Violation Findings

One section per category. For each violation found, capture these fields:

**A. Wages and Hours** - Violation type (NMW underpayment, unpaid overtime, unlawful deductions, failure to provide written particulars, holiday pay shortfall, SSP non-payment) · Applicable law (National Minimum Wage Act 1998 s. __, Employment Rights Act 1996 s. __, Working Time Regulations 1998 reg. __ [VERIFY against current rates]) · Workers affected (count) · Time period · Arrears owed (amount + calculation basis) · Evidence (payslips, HRMC notice, tribunal judgment) · Willfulness (negligent vs deliberate, affects penalty: HMRC can issue Notice of Underpayment + penalty up to 200% of arrears)

**B. Health and Safety** - Hazard/condition · HSWA 1974 section violated (s. 2 (employer duty), s. 3 (third party), regs under HSWA) · Enforcement type (improvement notice, prohibition notice, prosecution, fine) · Injuries/illnesses (RIDDOR-reportable? - Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013) · Prior employer knowledge · Missing controls (risk assessment, PPE, training, supervision) · Penalty assessed (fine amount + sentencing guidelines category)

**C. Worker Rights and Employment Status** - Violation type (unfair dismissal, wrongful dismissal, whistleblowing detriment, TUPE failure, zero-hours abuse, collective consultation failure) · Applicable law (Employment Rights Act 1996, TULRCA 1992, TUPE 2006, PIDA 1998) · Targeted workers (who, how many) · Adverse actions (dismissal, detriment, demotion, unfavourable treatment) · Evidence (temporal proximity, documented statements, pattern evidence)

**D. Discrimination / Equality Act** - Protected characteristic (age, disability, race, religion/belief, sex, sexual orientation, marriage/civil partnership, pregnancy/maternity, gender reassignment) · Type (direct, indirect, harassment, victimisation, failure to make reasonable adjustments) · Applicable law (Equality Act 2010 ss. __) · Targeted workers (who, how many) · Evidence (comparator analysis, policy text, witness statements)

### 3. Culpability Assessment

Check all that apply:

- [ ] Negligence / lack of knowledge
- [ ] Deliberate / willful disregard
- [ ] Concealment or record destruction
- [ ] Worker intimidation or investigation interference
- [ ] Prior violations or warnings on record
- [ ] Repeat or pattern of non-compliance

### 4. Remedial Actions

| Action | Details | Deadline | Status |
|--------|---------|----------|--------|
| Wage arrears / NMW underpayment | Amount, recipients, penalties | | |
| Tribunal compensation / settlement | Amount, terms | | |
| Policy changes | Specific policies (handbook, equality policy, H&S policy) | | |
| Safety improvements | Risk assessment updates, equipment, training | | |
| Worker reinstatement / re-engagement | Names, positions | | |
| ACAS monitoring / internal audit | Frequency, duration | | |
| HSE/HMRC improvement notice compliance | Specific steps | | |

### 5. Open Items

- Ongoing investigation areas and pending steps, Parallel Employment Tribunal claims and their relationship to regulatory findings, Unresolved factual disputes (state each side's evidence)
- Potential appeals (HSE notices, HMRC penalty notices, tribunal judgments)

## Scotland/UK Adaptation

**Statutory framework:**

*Wages and hours:*
- Employment Rights Act 1996 - unlawful deductions (s. 13), written particulars (s. 1), guarantee payments, suspension from work, National Minimum Wage Act 1998 - NMW/NLW rates, enforcement, Working Time Regulations 1998 - 48-hour week, rest breaks, paid annual leave (5.6 weeks)
- The Employment Rights (Increase of Limits) Order, annual limits updates, Deduction from Wages (Limitation) Regulations 2014 - 2-year backstop for unlawful deduction claims

*Health and safety:*
- Health and Safety at Work etc. Act 1974 (HSWA) - employer duty (s. 2), self-employed duty (s. 3), enforcement (s. 18 to 26)
- Management of Health and Safety at Work Regulations 1999 - risk assessment, competent persons, Workplace (Health, Safety and Welfare) Regulations 1992
- Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 (RIDDOR)
- Health and Safety (Offences) Act 2008 - sentencing powers

*Worker rights and union access:*
- Trade Union and Labour Relations (Consolidation) Act 1992 (TULRCA) - collective consultation, union recognition, industrial action, Employment Rights Act 1996 Part X, unfair dismissal, Employment Rights Act 1996 Part IVA, protected disclosures (whistleblowing)
- Transfer of Undertakings (Protection of Employment) Regulations 2006 (TUPE)
- The Employment Relations Act 1999 - family-friendly rights, The Agency Workers Regulations 2010

*Discrimination:*
- Equality Act 2010 - all protected characteristics (9 total), enforcement by Employment Tribunal, Equality Act 2010 (Specific Duties) (Scotland) Regulations 2012 - Scottish public sector duties

**Key differences from US framework:**

| US | Scotland/UK |
|---|---|
| FLSA - $7.25 federal minimum wage | National Living Wage (25+) / National Minimum Wage (21-24, 18-20, under 18, apprentice) - set annually by UK Gov |
| FLSA overtime: 1.5× after 40 hrs/week | No statutory overtime premium in UK (Working Time Regulations cover rest, not premium pay) |
| FLSA SOL: 2 yr (negligent) / 3 yr (willful) | Employment Tribunal: 3 months less 1 day; unlawful deductions: 2-year backstop |
| OSHA, H&S enforcement | HSE / local authority environmental health officers |
| General duty clause (OSH Act s. 5(a)(1)) | HSWA s. 2(1) - "so far as is reasonably practicable" |
| OSHA fines: up to $145k (willful) | HSE fines: unlimited in Crown Court; based on turnover/culpability per Sentencing Council guidelines |
| No OSHA private right of action | No private right of action for H&S breaches alone (can claim personal injury damages in delict) |
| NLRA s. 7 - right to organise | TULRCA 1992 - trade union recognition, consultation, industrial action ballots |
| NLRB, union recognition disputes | CAC (Central Arbitration Committee) / Certification Officer |
| Title VII, discrimination | Equality Act 2010 - 9 protected characteristics (wider than US Title VII + ADEA + ADA + GINA) |
| EEOC charge: 180/300 days | ACAS EC + ET1: 3 months less 1 day |
| Punitive damages available in some states | No punitive damages / penal damages; injury to feelings awards (Vento bands) + financial losses |
| At-will employment | Notice periods required (statutory minimum: 1 week per year of service, max 12 weeks); unfair dismissal after 2 years continuous service |
| FLSA collective action (opt-in) | No direct equivalent, group proceedings (opt-in, limited) or multiple single claims |
| DOL WHD investigation | HMRC NMW enforcement / Employment Agency Standards Inspectorate |
| OSHA whistleblower protection | PIDA 1998 / ERA 1996 Part IVA, wider whistleblower protection than OSHA |

**Scottish-specific context:**
- Employment Tribunals in Scotland sit in Glasgow, Edinburgh, Dundee, and Aberdeen, Scottish Employment Tribunal procedure is the same as England & Wales under the Employment Tribunals (Constitution and Rules of Procedure) Regulations 2013
- HSE operates in Scotland under the same HSWA framework as England & Wales, Scottish criminal courts handle prosecutions for H&S offences committed in Scotland (prosecuted by COPFS)
- The EHRC (Equality and Human Rights Commission) has a Scottish committee, Scottish agricultural workers have specific additional protections (Scottish Agricultural Wages Board abolished 2022; Agricultural Wages (Scotland) Order 2022)

**Regulatory bodies:**
- HMRC, National Minimum Wage enforcement, working time records, Employment Agency Standards, HSE, health and safety enforcement, ACAS, early conciliation, COT3 settlements, codes of practice, Employment Tribunal, claims for unfair dismissal, discrimination, wages, whistleblowing, Employment Appeal Tribunal (EAT) - appeals (sits in Edinburgh for Scottish appeals)
- EHRC, equality enforcement, public sector duties, CAC, union recognition, collective bargaining disputes, Certification Officer, trade union regulation, members' rights, COPFS, H&S prosecutions in Scotland

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
