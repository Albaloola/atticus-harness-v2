---
name: healthcare-services-agreement
language: en
description: Drafts professional services agreements for healthcare providers and clients in the UK/Scotland, covering UK GDPR/DPA 2018 compliance, Bribery Act 2010 guardrails, GMC registration warranties, medical indemnity/defence organisation membership requirements, HIS/CQC registration, and patient care continuity on termination. Use when drafting healthcare provider contracts, private medical services agreements, or independent practitioner agreements in Scotland. [Atticus UK/Scots refined]
tags:
- SCOTS healthcare, services, agreement, GMC, UK-GDPR, Bribery-Act, NHS, SCOTS, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Professional Services Agreement, Healthcare (UK/Scotland)

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

[SCOTS: Note] This skill adapts a US healthcare services agreement (HIPAA/Anti-Kickback/Stark-focused) for the UK/Scotland private healthcare sector. The regulatory landscape is fundamentally different: NHS Scotland dominates, private practice is smaller, and the legal framework relies on GMC registration, UK GDPR/DPA 2018, the Bribery Act 2010, and Health Profession Council regulation rather than HIPAA/Anti-Kickback/Stark.

Drafts a healthcare-specific professional services agreement balancing clinical autonomy with UK regulatory compliance and appropriate risk allocation.

## Prerequisites

1. **Party information** - legal names, entity types, company numbers, signing authority
2. **Provider credentials** - GMC registration number, professional registration body (NMC, HCPC, GPhC as applicable), practising privileges, Disclosure Scotland PVG scheme membership
3. **Service scope** - specialties, procedures, locations, volume expectations, on-call requirements
4. **Compensation terms** - rate structure, billing responsibility, expense policy
5. **Insurance/Indemnity details** - medical defence organisation (MDO) membership, MDDUS, MPS, MDU; clinical negligence cover; employer's liability; public liability
6. **Data protection role** - data controller / data processor / joint controller under UK GDPR
7. **Governing jurisdiction** - Scotland / England / Wales / NI

If any prerequisite is missing, pause and ask, do not assume or fill gaps.

## Quick Start

1. Gather all prerequisites and uploaded documents
2. Draft articles in order (parties → scope → compensation → term → data protection → warranties → indemnification → insurance → disputes → general)
3. Attach Data Processing Agreement (DPA) as exhibit if processor relationship exists
4. Flag all jurisdiction-specific rules with `[VERIFY]`
5. Confirm Bribery Act 2010 compliance on compensation structure
6. Verify provider GMC registration and fitness to practise status before finalising

## Governing Law

| Authority | Citation |
|---|---|
| Consumer Rights Act 2015 (unfair contract terms) | CRA 2015, Part 2 |
| Bribery Act 2010 | s 1 to 7 (commercial bribery; failure to prevent) |
| UK GDPR / Data Protection Act 2018 | Art 5 to 9, 28, 32 to 34 |
| Mental Health Act (Scotland) 2003 | asp 13 |
| Adults with Incapacity (Scotland) Act 2000 | asp 4 |
| National Health Service (Scotland) Act 1978 | c 29 |
| Employment Rights Act 1996 (worker status tests) | ERA 1996, s 230 |
| Competition Act 1998 (restrictive agreements) | CA 1998, Chapter I |

## Output Structure

### 1. Parties & Recitals

| Field | Provider | Client |
|---|---|---|
| Legal name & entity type | ✓ | ✓ |
| Principal address | ✓ | ✓ |
| Company number / Registered number (if Ltd/LLP) | ✓ | ✓ |
| GMC / professional registration number | ✓ | - |
| VAT registration | ✓ | ✓ |
| Capacity (individual / Ltd / LLP / sole trader) | ✓ | - |
| Signing authority & title | ✓ | ✓ |

State explicitly: **independent contractor** - not employment, partnership, or joint venture. Important for worker status and tax (HMRC IR35 considerations).

### 2. Scope of Services

- Enumerate services with clinical specificity; reference applicable **professional standard of care** (Bolam test / Bolitho gloss - *Bolam v Friern Hospital Management Committee*)
- State locations: private hospital, clinic, home visits, or NHS facilities under private practice agreement, Define scheduling, on-call obligations, response-time expectations, List **exclusions** - services NOT covered, Address emergency protocols and practising privileges (if hospital-based)
- Experimental/non-standard procedures require separate informed consent provisions, Telemedicine: confirm GMC guidance on remote consultations, NHS Near Me compliance for Scotland

### 3. Compensation & Billing

- Rate structure: fee-for-service / hourly / per-consultation / sessional / hybrid, Billing cycle, invoice format (HMRC VAT-compliant if over threshold), payment terms (30 days common)
- Assign billing responsibility (patient-direct / private medical insurer / client)
- Reimbursable expenses with pre-approval process, Rate adjustment mechanism: notice period, CPI index if applicable

**Regulatory guardrail:** Compensation must not constitute a bribe under the Bribery Act 2010 s 1 to 2. Any referral fees or inducements must be fully transparent and documented. Commercial arrangements must not create conflicts of interest with patient care.

### 4. Term & Termination

| Provision | Standard |
|---|---|
| Initial term | Fixed dates or rolling |
| Auto-renewal | Opt-out notice 60 to 90 days |
| Without cause | 90 to 180 days' written notice |
| For cause (with cure) | 30-day notice and cure period |

**Immediate termination triggers** (no cure): GMC fitness to practise suspension, removal from Professional Register, criminal conviction, professional misconduct finding by MPTS (Medical Practitioners Tribunal Service), MDO indemnity lapse, material UK GDPR breach, failure to maintain PVG/Disclosure Scotland membership.

**Transition obligations:** continued service during notice period, patient care continuity plan and warm handoff, medical records transfer per DPA 2018 / NHS Scotland records management guidance, return of property/credentials/access, pro-rata compensation.

### 5. Data Protection & Confidentiality

1. Designate UK GDPR roles, Data Controller vs. Data Processor vs. Joint Controller
2. If processor relationship: attach **Data Processing Agreement (DPA)** as exhibit per Art 28 UK GDPR
3. DPA must address: permitted processing instructions, security measures (Art 32), personal data breach notification (Art 33 to 34), sub-processor engagement, audit/access rights, return/destruction of data on termination
4. Confidentiality, common law duty of confidentiality (healthcare setting) + contractual confidentiality. Survival: indefinite for personal data; 3 to 5 years for business information
5. NHS Scotland: comply with Intra-NHS Scotland Information Sharing Accord and Information Governance policies

### 6. Representations & Warranties

**Provider:** unrestricted GMC registration / professional registration, appropriate MDO membership (clinical negligence cover), no outstanding fitness to practise restrictions, Disclosure Scotland PVG scheme membership (if working with children/vulnerable adults), compliance with relevant professional codes, immediate notification if any warranty becomes untrue.

**Client:** authority to contract, appropriate regulatory registration (CQC / Healthcare Improvement Scotland as applicable), compliance with applicable healthcare regulations.

### 7. Indemnification

| Indemnifying Party | Covers |
|---|---|
| Provider | Clinical negligence (subject to MDO cover), breach of confidentiality, regulatory violations |
| Client | Client negligence, defective premises/equipment, data protection breaches, breach of obligations |

Scope: damages, settlements, judgments, legal costs. Procedure: prompt notice → cooperation → mutual consent for settlements. Note that in clinical negligence, the NHS Indemnity scheme covers NHS-employed practitioners; independent practitioners rely on MDO cover.

### 8. Insurance / Indemnity

| Coverage | Minimum Limits | Notes |
|---|---|---|
| Clinical negligence (MDO) | Per MDO member standard | MDDUS, MPS, or MDU membership. Claims-made: require run-off / extended reporting cover on termination |
| Public liability | £5M to £10M | Standard for independent practice |
| Employer's liability | £5M (if has employees) | Statutory minimum |
| Professional indemnity | Per contract requirements | Can be separate from clinical negligence for non-clinical acts |
| Cyber liability | Per risk profile | Recommended if handling ePHI |

Client named as additional insured by notification to MDO (most MDOs do not provide contractual rights to named insured status; use the "by arrangement" approach). Certificates due before services commence and at renewal. 30 days' notice of cancellation/material change.

### 9. Dispute Resolution

1. Good-faith negotiation - 30 days (Scottish good-faith pre-litigation protocol)
2. Mediation (healthcare-experienced mediator recognised by Law Society of Scotland)
3. Sheriff Court (claims up to £100,000) or Court of Session (larger claims)
   - **Arbitration** may be elected but is less common in Scottish healthcare contracts than in US

Carve-out: emergency interim interdict for confidentiality breaches or irreparable harm. Governing law: Scots law. Jurisdiction: Scottish courts exlusively.

### 10. General Provisions

Severability, written amendments only, notice methods and deemed-receipt rules, assignment restrictions (carve-out for successors/affiliates, caution: personal service contracts are generally not assignable in healthcare). Entire agreement, no implied waiver, force majeure (**patient care obligations not excused**), survival (confidentiality, indemnification, payment, insurance run-off), counterparts and e-signatures (per Requirements of Writing (Scotland) Act 1995).

### Signature Block

Each party: signature line, printed name, title, date. Confirm signatory has binding authority. Under Requirements of Writing (Scotland) Act 1995, a document relating to a gratuitous obligation requires writing for validity; onerous healthcare service agreements are generally valid without writing but are strongly recommended in writing for evidential purposes.

## Pitfalls & Checks

- **Bribery Act 2010 compliance is non-negotiable** - any financial or other advantage offered to influence clinical referrals is potentially criminal. Full transparency required.
- **Confirm GMC registration and fitness to practise** before finalising, check https://www.gmc-uk.org/registration-and-licensing/registration-status
- **DPI is mandatory** if processor relationship exists under Art 28 UK GDPR, omission creates regulatory exposure for both parties
- **MDO membership vs insurance:** Medical defence organisations provide discretionary indemnity, not contractual insurance. Check whether the agreement requires "insurance" or "indemnity cover" - wording matters.
- **Worker/employee status:** HMRC IR35 and employment law distinguish between employees, workers, and independent contractors. Incorrect classification creates tax liability and employment rights exposure.
- **Telemedicine services** require compliance with GMC guidance on remote consultations and NHS Near Me (Scotland's video consulting platform).
- **Patient care continuity** is both an ethical obligation (GMC Good Medical Practice) and a contractual duty, non-negotiable on termination.
- **Non-compete clauses** in healthcare contracts are subject to the common law restraint of trade doctrine and are rarely enforceable against NHS practitioners in Scotland.

## Scotland/UK Adaptation

This skill has been adapted from a US healthcare services agreement.

### Key changes

| US | UK/Scotland |
|---|---|
| HIPAA / HITECH | UK GDPR / Data Protection Act 2018 |
| Anti-Kickback Statute / Stark Law | Bribery Act 2010 / GMC guidance on conflicts of interest |
| OIG exclusion check | GMC fitness to practise check / Disclosure Scotland PVG |
| NPI / DEA | GMC number / professional registration |
| Malpractice insurance | MDO membership (MDDUS, MPS, MDU) |
| State medical board | GMC / MPTS / professional regulator |
| CQC (England) | Healthcare Improvement Scotland (Scotland) |
| State scope-of-practice | Professional standards (GMC, NMC, HCPC) |
| US state law | Scots law |
| Federal false claims | Criminal Justice and Licensing (Scotland) Act 2010 (fraud) |
| Fee-for-service (Medicare) | Private patient fee / PMI billing |

### Scottish regulatory bodies

| Organisation | Role |
|---|---|
| GMC | Medical registration and fitness to practise |
| Healthcare Improvement Scotland (HIS) | Regulation of independent healthcare services |
| NHS Scotland | Public healthcare provider; independent practitioners often hold honorary contracts |
| Disclosure Scotland | PVG scheme for working with children/vulnerable adults |
| MPTS | Medical Practitioners Tribunal Service (fitness to practise hearings) |
| Scottish Public Services Ombudsman | Complaints about NHS Scotland |
| Care Inspectorate | Social care services regulation |
| Mental Welfare Commission for Scotland | Safeguarding rights of those with mental illness/learning disability |

### Forms
Download relevant UK/Scotland health service agreement forms into `scots-forms/`:
- **GMC registration check** - https://www.gmc-uk.org/registration-and-licensing/registration-status
- **Healthcare Improvement Scotland** - https://www.healthcareimprovementscotland.org/
- **Disclosure Scotland PVG** - https://www.mygov.scot/pvg-scheme
- **MDDUS** - https://www.mddus.com/
- **Law Society of Scotland model agreements** - https://www.lawscot.org.uk/

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
