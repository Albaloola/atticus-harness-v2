---
name: employee-complaint-summaries
language: en
description: Generates structured solicitor-review memos from employee complaints in Scotland/UK, extracting parties, timeline, claims, evidence, defences, and risk flags. Covers Equality Act 2010, Employment Rights Act 1996, and UK GDPR considerations. Use when summarising initial complaints, Employment Tribunal (ET1) claims, investigation reports, or personnel files to assess litigation risk and develop response strategy. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Employee Complaint Summary, Scotland/UK

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

Distils employee complaint materials into a structured memo covering parties, chronology, legal claims, evidence, employer defences, and risk assessment for solicitor review.

## Quick Start

1. Gather inputs: complaint/ET1 claim, investigation file, personnel records, relevant correspondence
2. Extract key parties and build chronological timeline
3. Map allegations to legal claims with statutory bases (Equality Act 2010 / ERA 1996)
4. Inventory evidence by party alignment
5. Document employer defences and internal investigation findings
6. Assess risk and flag investigation gaps

## Output Structure

### 1. Key Parties

| Role | Name | Title / Dept | Relevance |
|------|------|--------------|-----------|
| Claimant/Complainant | | | |
| Respondent/Accused | | | |
| Witnesses | | | |
| Line Managers | | | |
| HR Personnel | | | |

### 2. Chronological Timeline

| Date | Event | Parties Involved | Source |
|------|-------|------------------|--------|
| | | | |

Mark approximate dates `[est.]`. Note record gaps explicitly.

### 3. Allegations & Legal Claims

Per claim, capture:
- **Claim type**: discrimination / harassment / victimisation / unfair dismissal / wrongful dismissal / whistleblowing / breach of contract / unlawful deduction from wages / other
- **Protected characteristic** (if discrimination): age, disability, gender reassignment, marriage/civil partnership, pregnancy/maternity, race, religion/belief, sex, sexual orientation, Equality Act 2010
- **Key quoted language** with document/page citation
- **Alleged harm**: dismissal, detriment, failure to make reasonable adjustments, harassment, financial loss, injury to feelings

### 4. Evidence Inventory

| Item | Type | Supports | Source |
|------|------|----------|--------|
| | Email / witness statement / record / photo / document | Claimant / Respondent / Neutral | |

### 5. Employer Defences

- Legitimate non-discriminatory/material reason (performance, redundancy, conduct, SOSR)
- Contrary witness statements or documentation, Disciplinary/grievance history, prior warnings, documented performance issues, Response to grievance: whether internal procedure followed, findings, outcome, Whether ACAS Code of Practice was followed, impact on compensation

### 6. Legal Framework Checklist

- [ ] **Equality Act 2010** - discrimination/harassment/victimisation (ss. 4 to 27, 39, 120 to 124); Employment Tribunal; 3 months less 1 day
- [ ] **Employment Rights Act 1996** - unfair dismissal (Part X); written particulars (Part I); itemised pay statements (Part II); guarantee payments (Part III); suspension on medical grounds (Part VII); flexible working (Part VIIIA)
- [ ] **ERA 1996 - whistleblowing** (ss. 43A to 43L/103A) - disclosure of qualifying information in the public interest (PIDA 1998); no qualifying service period; unlimited compensation
- [ ] **Working Time Regulations 1998** - holiday pay, working time, rest breaks
- [ ] **National Minimum Wage Act 1998** - unlawful deduction from wages
- [ ] **UK GDPR / DPA 2018** - data subject access requests; processing of employee data
- [ ] **ACAS Code of Practice** - disciplinary and grievance procedures
- [ ] **Constructive dismissal** - breach of mutual trust and confidence (implied term)
- [ ] **Contractual claims** - breach of employment contract; notice periods; PILON

### 7. Risk Assessment

| Factor | Assessment |
|--------|-----------|
| Claim strength (evidence quality) | Strong / Mixed / Weak |
| Key factual disputes | |
| Credibility issues | |
| Injury to feelings exposure (Vento band) | None / Lower / Middle / Upper |
| Unfair dismissal, compensatory award risk | Under cap / Over cap |
| Pre-termination negotiation risk | Protected conversations / without prejudice |
| Settlement potential | |
| Investigation gaps | |

### 8. Investigation Priorities

List outstanding needs: missing documents (GDPR subject access response), uninterviewed witnesses, ESI preservation, grievance outcome letter gaps.

## Pitfalls & Checks

- Cite source document and page/section for every factual assertion, Flag `[GAP]` where the record is incomplete, Flag `[VERIFY]` on statutory citations where jurisdiction-specific variation may apply, Do not apply legal conclusions to facts, flag issues for solicitor analysis, Note Employment Tribunal filing deadlines (3 months less 1 day) where dates are known, Maintain neutral framing; represent each party's position accurately, Check the qualifying period for unfair dismissal claims (generally 2 years continuous service subject to exceptions)
- Flag any early conciliation / ACAS EC number status

---

## Scotland/UK Adaptation

This skill has been adapted from its original US-focused version (US employment statutes / EEOC) for use under Scottish and UK employment law.

### Key US-to-UK/Scottish Conversions

| US Term | Scottish/UK Equivalent |
|---------|----------------------|
| Title VII (42 U.S.C. § 2000e) | Equality Act 2010, Parts 5 and 6 |
| ADA (42 U.S.C. § 12101) | Equality Act 2010, ss. 6, 15, 20 to 22 (disability discrimination and duty to make reasonable adjustments) |
| ADEA (29 U.S.C. § 621) | Equality Act 2010, s. 5 (age discrimination) |
| FMLA (29 U.S.C. § 2601) | Employment Rights Act 1996 - maternity/parental/adoption leave; Shared Parental Leave Regulations 2014 |
| FLSA (29 U.S.C. § 201) | National Minimum Wage Act 1998; Working Time Regulations 1998; ERA 1996 Part II (itemised pay) |
| EEOC charge | ACAS Early Conciliation / ET1 Claim Form |
| State FEP statute (Fair Employment Practices) | Devolved, Scotland-specific employment law is limited (workplace: reserved to Westminster except for certain aspects; tribunals use UK-wide law) |
| State/local analogs | Scottish Parliament has limited employment competence (mainly reserved to UK Parliament) |
| Complainant/Respondent (EEOC) | Claimant/Respondent (Employment Tribunal) |
| Punitive damages | Not available in Employment Tribunal; aggravated damages in exceptional discrimination cases |
| Compensatory/Punitive damage caps | Vento bands (injury to feelings) - no cap on financial losses in discrimination; unfair dismissal: cap of £120,972 (2025/26) or 12 months' gross pay |
| Class action | Group Litigation Order (CPR) / Multiple claimants in Employment Tribunal, no US-style class action |
| Arbitration agreements (employment) | Rare in UK employment, ACAS arbitration agreement for unfair dismissal is voluntary, not mandatory |
| "At-will" employment | Contractual notice periods; unfair dismissal protection after 2 years continuous employment |
| Prejudgment interest | Employment Tribunals (Interest) Order 1990 - 8% per annum |

### Regulatory Framework

- **Primary legislation**: Equality Act 2010; Employment Rights Act 1996; Trade Union and Labour Relations (Consolidation) Act 1992
- **Scottish-specific**: Employment tribunals in Scotland sit in Glasgow, Edinburgh, Dundee, and Aberdeen; apply the same Employment Tribunal Rules of Procedure as England/Wales
- **Employment law split**: Most workplace rights are reserved to Westminster (UK Parliament); Scottish Parliament has competence over some aspects of agricultural wages, its own public sector equality duty (The Equality Act 2010 (Specific Duties) (Scotland) Regulations 2012), and aspects of fair work
- **No at-will employment**: UK employment is based on contractual notice periods and statutory dismissal protection
- **Tribunal composition**: Employment Judge (legally qualified in Scotland, solicitor or advocate) with lay members
- **Costs regime**: More limited than US litigation, costs only awarded where a party has acted vexatiously, abusively, or unreasonably

### Practitioner Notes

- Scottish solicitors can appear in the Employment Tribunal in Scotland without additional rights of audience, The Employment Appeal Tribunal (EAT) sits in both London and Edinburgh (EAT in Scotland hears Scottish appeals)
- The Vento bands for injury to feelings are updated annually; always check the current Presidential Guidance, No US-style punitive damages, the maximum remedy in UK discrimination claims is a declaration, compensation for financial loss, injury to feelings, and a wider recommendation, ACAS Early Conciliation is mandatory before ET1 claim, this is the equivalent of the US EEOC charge exhaustion requirement, Scottish employment law is largely harmonised with England/Wales, but the Scottish Courts (Employment Tribunals) follow separate practice directions

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
