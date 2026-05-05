---
name: employee-dispute-summary
language: en
description: Produces a structured, source-cited summary of UK employment disputes for HR and litigation review. Trigger when asked to summarise an employment dispute, employment tribunal claim, HR investigation, ACAS/Employment Tribunal matter, discrimination, harassment, whistleblowing, unfair dismissal, wrongful dismissal, wage-hour dispute, trade union grievance, or ACAS early conciliation file. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Employee Dispute Summary (UK)

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

Produce an objective, source-cited summary of an employee dispute for HR and legal decision-making.

## Quick Start

Collect before drafting:
- **Source corpus** - complaints, witness statements, investigation reports, correspondence, disciplinary records, employment contracts, staff handbooks/policies, performance reviews, ACAS correspondence, Employment Tribunal pleadings (ET1/ET3), settlement documents
- **Parties** - all individuals/entities with roles and relationships
- **Timeline anchors** - key dates, deadlines, hearings, milestones (including ACAS early conciliation dates)
- **Forum** - internal process, ACAS early conciliation, Employment Tribunal, trade union grievance, court
- **Resolution docs** - settlement agreement, COT3, Employment Tribunal judgment, or decision documents (if any)

## Output Sections

### 1. Executive Overview
2 to 3 sentences: nature of dispute, core claims, current status, immediate next step.

### 2. Parties and Roles
| Party | Role | Relationship | Representative | Source |
|---|---|---|---|---|

### 3. Allegations Matrix
| Allegation | Claim Type | Alleged Conduct | Dates/Locations | Witnesses | Policy/Statute | Status | Source |
|---|---|---|---|---|---|---|---|

### 4. Responses and Defences
| Party | Position | Admissions | Denials | Affirmative Defences | Disputed Facts | Source |
|---|---|---|---|---|---|---|

### 5. Procedural History
| Date | Event | Forum/Process | Outcome/Status | Next Deadline | Source |
|---|---|---|---|---|---|

### 6. Resolution / Outcome
| Type | Date | Monetary Terms | Non-Monetary Terms | Confidentiality | Appeal Status | Source |
|---|---|---|---|---|---|---|

Skip if no resolution exists.

### 7. Findings / Determinations
| Decision-Maker | Finding | Standard Applied | Scope | Effective Date | Source |
|---|---|---|---|---|---|

### 8. Outstanding Issues and Next Steps
- [ ] Open factual disputes
- [ ] Pending procedural steps
- [ ] Required notices/approvals
- [ ] Evidence gaps to close
- [ ] Decision points for HR/Legal

### 9. Risk and Policy Impact
| Risk Area | Exposure Level | Rationale | Potential Remedies | Policy Impact | Source |
|---|---|---|---|---|---|

### 10. Source Map
| Fact/Assertion | Source Doc ID | Page/Section | Confidence |
|---|---|---|---|

### 11. Gaps / Additional Information Needed
List missing documents, unclear facts, or unverified assertions.

## Source Handling

- Tag every factual assertion with a marker: `[Doc-12]`.
- Use quotation marks for direct quotes; cite document and page/section.
- If a fact is disputed, state both positions and label **Disputed**.

## Pitfalls and Checks

- **Neutrality** - never assess credibility or intent; state legal conclusions only if formally determined by an Employment Tribunal, court, or ACAS.
- **Policy versions** - identify the governing policy version and effective date when cited.
- **Privilege** - note confidentiality restrictions; do not reproduce sensitive material beyond necessity.
- **Jurisdiction** - if unclear or non-UK, flag explicitly and adjust labels; mark uncertain citations `[VERIFY]`.
- **Protected disclosure / whistleblowing** - highlight whistleblowing (Employment Rights Act 1996, Part IVA) obligations and statutory protection from detriment.
- **Vicarious liability** - UK/Scottish employers are vicariously liable for employee acts in the course of employment (Majrowski v. Guy's and St Thomas' NHS Trust [2006] UKHL 34).
- **Length** - target 2 to 5 pages for complex matters; keep scannable.
- **ACAS early conciliation** - note whether EC certificate obtained and dates; mandatory before Employment Tribunal claim.
- **Employment Tribunal time limits** - typically 3 months minus 1 day for most claims; flag if claim may be out of time.

## Scotland/UK Adaptation

This skill has been converted from a US employment dispute summary skill to UK/Scottish employment law. Key differences:

- **EEOC → ACAS:** US Equal Employment Opportunity Commission replaced by ACAS (Advisory, Conciliation and Arbitration Service). ACAS early conciliation is mandatory before bringing most Employment Tribunal claims (s 18A Employment Tribunals Act 1996).
- **Employment Tribunal:** The primary forum is the Employment Tribunal (Scotland), not US federal/state courts. Employment judges sit alone or with lay members.
- **No EEOC charge:** UK claims are brought by ET1 claim form, not an EEOC charge. ACAS issues an Early Conciliation Certificate, not a right-to-sue letter.
- **Key UK statutes:** Employment Rights Act 1996 (unfair dismissal), Equality Act 2010 (discrimination), Part IVA ERA 1996 (whistleblowing), Trade Union and Labour Relations (Consolidation) Act 1992.
- **No at-will employment:** UK employment is governed by contract law and statutory rights; no US-style at-will doctrine. Unfair dismissal requires 2 years' continuous service (with exceptions).
- **No punitive damages:** UK Employment Tribunals can award compensation (loss of earnings, injury to feelings) but not punitive damages. No jury trials in Employment Tribunal.
- **No class/collective actions:** UK has no US-style class actions for employment claims; group litigation orders exist but are rare.
- **Protected disclosures:** Whistleblowing protection under ERA 1996 Part IVA is distinct from US Sarbanes-Oxley or Dodd-Frank regimes.
- **Vicarious liability:** UK/Scottish law makes employers vicariously liable for employee acts; statutory defences exist under the Equality Act 2010 (s 109(4)).
- **ACAS Code of Practice:** Disciplinary and grievance procedures follow the ACAS Code of Practice, with up to 25% adjustment for unreasonable non-compliance.
- **Trade union role:** UK trade unions have a more significant statutory role (statutory recognition, collective bargaining, workplace representatives) than under US labour law.
- **Settlement agreements:** UK settlements typically use formal settlement agreements (s 203 ERA 1996 compliant), with independent legal advice requirement.
- **COT3:** ACAS-conciliated settlements are recorded on a COT3 form; legally binding without needing a deed.
- **Employment status:** UK law distinguishes between employee, worker, and self-employed, a key preliminary issue not present in US law.

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
