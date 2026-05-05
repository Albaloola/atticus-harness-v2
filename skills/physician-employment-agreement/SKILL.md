---
name: physician-employment-agreement
language: en
description: Atticus UK/Scots legal skill for physician-employment-agreement. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Physician Employment Agreement, NHS Scotland Adaptation

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

Drafts an employment agreement between a Scottish healthcare employer (Health Board, GP practice, or hospital) and a medical practitioner, adapted from the US model to the Scottish and UK regulatory environment.

## Scotland/UK Adaptation

The US physician employment agreement model is built around Stark Law and Anti-Kickback Statute compliance, private healthcare insurance billing, and fee-for-service productivity. The Scottish equivalent operates within a fundamentally different system:

**Key differences:**
- **NHS Scotland is the primary employer**: Most doctors are employed by an NHS Health Board (e.g., NHS Lothian, NHS Greater Glasgow & Clyde) under national terms and conditions, not by independent private practices.
- **Consultant Contract**: Scottish consultants are employed under the Consultant Contract (Scotland) 2004 (as amended), governed by NHS terms and conditions. There is no US-style individual negotiation of base salary, pay is determined by national pay scales (supplemented by discretionary points, clinical excellence awards, and merit awards).
- **GP contracts**: GPs in Scotland are independent contractors with the NHS, not employees of a practice in the US sense. Their terms are governed by the General Medical Services (GMS) Contract (Scotland) or the Scottish GP Provider Contract.
- **No Stark Law or Anti-Kickback Statute**: The UK has the Bribery Act 2010 and NHS counter-fraud regulations, but there is no direct equivalent to the US Stark Law (self-referral prohibitions) or Anti-Kickback Statute. Instead, the NHS has the "Standards of Conduct for NHS Staff" and the "NHS Code of Conduct and Accountability."
- **Private practice**: Private practice is permitted alongside NHS work (within the NHS, such as Category 2 services under the Consultant Contract), but is regulated differently and rarely the primary income source.
- **Medicolegal**: The Clinical Negligence and Other Risks Indemnity Scheme (CNORIS) or the NHS Central Register covers clinical negligence for NHS work. Private practice requires separate professional indemnity.
- **Currency**: All amounts in GBP (£).
- **Regulatory bodies**: General Medical Council (GMC), Scottish Government Health and Social Care Directorates, NHS Counter Fraud Services (Scotland).
- **Fixed-term contracts**: Many medical posts are fixed-term (training grades, research fellows). NHS redundancy terms apply for permanent posts.
- **Whistleblowing**: The Public Interest Disclosure Act 1998 and NHS Scotland whistleblowing policies apply.
- **Living Wage**: NHS Scotland is a Living Wage accredited employer.

## Prerequisites

1. **Employer** - NHS Health Board (legal name, e.g., "NHS Lothian Health Board"), GP Partnership, or hospital; registered address, Health Board area
2. **Medical practitioner** - full name, GMC registration number, licence to practise, specialty, PGY (postgraduate year) level
3. **Position** - FT/PT, specialty, practice location(s), on-call commitment
4. **Salary/remuneration** - NHS pay band (for consultants: Consultant Contract salary scale + discretionary points/CEAs). For GPs: GMS contract formula [VERIFY: current NHS Scotland pay scales]
5. **Benefits** - NHS Pension Scheme (Scotland), annual leave, sick pay, parental leave, study leave, relocation
6. **Restrictive covenants** - non-compete and non-solicitation clauses in Scotland. Note: NHS Scotland restrictive covenants are limited and usually only apply to private practice or specific competitive contexts. General employment non-competes are harder to enforce in Scotland post-Tillman v Egan [2019].
7. **Predecessor agreement** being superseded (if any)

## Output Structure

### 1. Parties & Recitals

| Element | Details |
|---|---|
| Employer | NHS Health Board / practice legal name, statutory basis (NHS (Scotland) Act 1978 area), principal address |
| Medical practitioner | Name, GMC reg. no., specialty, PGY level |
| Recitals | Specialty, practitioner qualifications, effective date, predecessor agreements superseded |

### 2. Position & Duties

- Title, specialty, primary location (hospital site / GP practice)
- FT/PT definition (programmed activities for consultants, standard 10 PAs per week for full-time)
- Clinical scope: patient types, procedures, on-call cover, clinical sessions, NHS duties: clinical governance, audit, QI committees, teaching, research, Reporting structure: Clinical Director / GP Partner / Medical Director, Registration maintenance: GMC licence to practise, revalidation, appraisal (Medical Appraisal Scotland)
- Private practice (Category 2 services): permitted under the Consultant Contract within defined limits; must not interfere with NHS duties, Moonlighting: generally not applicable as all medical work must comply with the Working Time Regulations (Scotland) 1998 and the European Working Time Directive

### 3. Remuneration & Allowances

- **Base salary**: NHS Scotland pay scale for the relevant grade and seniority (Consultant: national salary range + discretionary points / CEA). For GPs: GMS contract global sum / practice income formula [VERIFY: current rates].
- **Clinical excellence awards / discretionary points**: Scottish Consultants may receive CEAs (national or local) based on contribution beyond contractual duties.
- **On-call / out-of-hours**: Additional programmed activities or allowance payments per contract terms.
- **Expenses**: Relocation allowance (subject to NHS Scotland scheme), travel expenses for off-site duties, study leave expenses.
- **Salary review**: Annual pay review per NHS Scotland/DDRB (Doctors' and Dentists' Review Body) recommendations.

### 4. Benefits

| Benefit | Specify |
|---|---|
| NHS Pension Scheme | Scotland scheme (pensionable earnings, contribution rate, retirement age). Opt-out permitted. |
| Annual leave | Standard NHS entitlement: 27 days (rising to 32 with service) + 8 public holidays for full-time consultants. |
| Sick pay | NHS occupational sick pay scheme (full pay 6 months, half pay 6 months) per NHS terms. |
| Parental leave | NHS maternity/paternity/adoption leave per NHS Scotland policy; statutory minimum + NHS enhancement. |
| Study / CPD leave | Standard entitlement: 30 days over 3 years for consultants, with budget. |
| Professional fees | GMC registration, medical defence organisation subscription (for private work), specialty society fees, check employer policy. |
| Clinical negligence indemnity | NHS work covered by CNORIS or NHS Central Register. Private practice requires separate MDO cover (MDDUS, MPS, MDU). |

### 5. Term & Notice

- **Term**: Permanent (open-ended) or fixed-term (training posts, research, locum cover). NHS consultants typically hold permanent contracts.
- **Probation period**: Typically 6 months for NHS appointments (confirm current policy).
- **NHS notice period**: For consultants - 3 months' notice by either party (confirm current NHS terms). Shorter for training grades.
- **Health Board reorganisation**: If the Health Board is restructured or dissolved, the contract transfers under TUPE (Transfer of Undertakings (Protection of Employment) Regulations 2006).
- **Medical capability / health**: NHS capability procedure for ill health or performance concerns.
- **Disciplinary**: NHS Scotland disciplinary policy; GMC referral for fitness to practise concerns.

### 6. Restrictive Covenants

> [SCOTS: Scottish courts apply the common law restraint of trade doctrine. Post-employment non-competes must protect a legitimate business interest and be no wider than reasonably necessary. *Tillman v Egan* [2019] UKSC 57 confirmed the severance principle: courts can blue-pencil unenforceable restrictions (subject to limits).]

- **Non-compete**: For NHS consultants, rarely applicable to NHS work (competition between Health Boards is not a legitimate interest). May apply to private practice competition within a geographical area. Typical scope: 3 to 6 months post-termination, limited to private practice.
- **Non-solicitation**: Patients (for private practice), staff, typical 6 to 12 months.
- **Confidentiality**: Patient data (GDPR/Data Protection Act 2018, NHS Scotland Information Governance), business strategy, financials, survives indefinitely. Must extend beyond NHS standard confidentiality obligations.
- **Blue-pencil severance**: If a restrictive covenant is too broad, a Scottish court may sever the offending element rather than invalidate the entire clause. However, the court cannot rewrite the covenant.

### 7. Intellectual Property & Records

- **NHS right of ownership**: Under the NHS (Scotland) Act 1978 and the Patents Act 1977 (ss.39-43), inventions made by NHS employees in the course of their duties belong to the Health Board.
- **Medical records**: NHS property; practitioner retains access for care continuity and GMC revalidation.
- **Publications**: Scholarly publications, presentations by the practitioner, typically permitted, with acknowledgment of NHS affiliation.
- **Revenue sharing**: NHS Research Scotland (NRS) has IP policies for commercialised inventions. Check Board-specific policy and the Scottish Health Innovations Ltd (SHIL) framework.

### 8. Regulatory Compliance

- **General Medical Council**: Good Medical Practice, confidentiality, prescribing, consent, all apply as mandatory professional standards.
- **NHS Counter Fraud**: The Bribery Act 2010 and NHS Scotland Counter Fraud policies apply.
- **Information governance**: UK GDPR, Data Protection Act 2018, NHS Scotland Information Governance policies, and the Data Security and Protection Toolkit.
- **Health & safety**: Health and Safety at Work etc. Act 1974; NHS Scotland H&S policies.
- **Equality**: Equality Act 2010 applies to all NHS employment.

### 9. Governing Law & Dispute Resolution

- Governing law: Scots law.
- Dispute sequence: NHS Scotland Grievance Procedure → ACAS / NHS Scotland mediation → Employment Tribunal (Scotland)
- Employment Tribunals (Scotland) have jurisdiction over unfair dismissal, discrimination, and breach of contract.
- Private practice disputes may proceed to Sheriff Court or Court of Session.
- Injunctive relief carve-out for restrictive covenants and confidentiality (Court of Session).

### 10. General Provisions & Signatures

- Severability (with judicial modification per *Tillman*), entire agreement, amendment (written, both parties), waiver, assignation (practitioner non-assignable; Board may assign to successor Health Board), notices, counterparts, survival clause.
- **Employer signature**: Health Board Chief Executive / Medical Director, date; note if Board approval required.
- **Practitioner signature**: printed name, date.
- Evidence of pre-employment checks: PVG (Protecting Vulnerable Groups) scheme membership, occupational health clearance, right to work in the UK.

## Guidelines

- **NHS Terms and Conditions**: Always check the current NHS Scotland terms and conditions for the relevant grade. The Consultant Contract (Scotland) is distinct from the English version.
- **GMC registration**: Must be current and unrestricted. Conditional registration imposes practice limitations that must be reflected in the contract.
- **GP partnership vs employment**: Distinguish between salaried GP employment (under the GMS contract) and GP partnership (which is a business relationship, not employment).
- **Restrictive covenants**: Enforceability in Scotland is governed by common law, the covenant must protect a legitimate interest and be reasonable in scope, geography, and duration. *Tillman v Egan* provides the current framework.
- **Tail coverage**: Not a concept in NHS Scotland (NHS indemnity covers NHS work). For private practice, the practitioner is responsible for their own MDO cover and run-off cover.
- **Private practice clauses**: If the consultant does private work, include clear provisions on facilities, fees, and the boundary with NHS duties.
- **Working Time Regulations**: Average 48-hour working week (opt-out available for doctors in training). Consultants routinely opt out.
- **Visa sponsorship**: For non-UK/Ireland practitioners, the Health Board must hold a sponsor licence under the Points-Based Immigration System.

## Troubleshooting

- **GMC action**: If the practitioner is under GMC investigation, the contract should permit suspension per NHS Scotland capability/conduct procedures.
- **Revalidation failure**: Failure to revalidate results in loss of licence to practise, likely a material change requiring contract review.
- **Health Board merger**: TUPE transfers the contract automatically. Review restrictive covenants for ongoing effect.
- **Non-compete unenforceable**: If a post-employment restriction is too wide, the court may sever (blue-pencil) the offending part, but will not rewrite. Draft conservatively with geographic/temporal limits.
- **IMT contracting**: Scotland uses an Integrated Joint Board (IJB) / Health and Social Care Partnership model in some areas, confirm the correct employing entity.
- **Cadet / Foundation doctors**: Distinct fixed-term contracts with specific terms, do not use the consultant template.

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
