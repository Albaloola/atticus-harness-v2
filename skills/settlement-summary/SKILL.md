---
name: settlement-summary
language: en
description: Generates structured summaries of extra-judicial settlements and negotiated agreements in Scottish civil litigation. Use when summarising settlement negotiations, documenting tender and acceptance, analysing joint minute or minute of agreement terms, preparing implementation checklists, or reviewing judicial expenses provisions. [Atticus UK/Scots refined]
tags:
- drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Settlement Summary, Scotland/UK Adaptation

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

Summarises extra-judicial settlements, negotiated agreements, tenders, and final settlement terms from Scottish civil litigation files (Court of Session, Sheriff Court, Simple Procedure) into a structured format covering chronology, key terms, judicial expenses, strategic context, and implementation steps.

## Required Inputs

- **Settlement documents** - correspondence, offers and counter-offers, tenders, pursuer's offers (Calderbank offers in Scottish context), joint minute, minute of agreement
- **Mediation materials** - statements, mediator proposals (if any)
- **Correspondence** - emails/letters reflecting negotiation positions
- **Case context** - claims, parties, litigation posture at settlement time
- **Expenses** - judicial expenses rules applicable (Chapter II, Rules of the Court of Session / Sheriff Court Rules; General Regulations of the Law Society regarding instructions)

## Preliminary, Scottish Settlement Context

Settlement in Scotland is governed by the common law of extra-judicial settlement. Key distinction from US/English procedure:

| Concept | Scottish Equivalent |
|---------|-------------------|
| **Extra-judicial settlement** | Settlement negotiated and concluded without court decree, recorded in joint minute or minute of agreement |
| **Tender** | Formal offer lodged in process with expenses consequences; acceptance bars further pursuit |
| **Pursuer's offer** | Offer of settlement by pursuer with expenses consequences (Chapter on expenses) |
| **Joint minute** | Lodged in process to settle court proceedings; decree is extractable on expiry of days of charge |
| **Minute of agreement** | Formal contractual settlement outwith court process, recorded for preservation and execution if desired |
| **Judicial expenses (fees)** | "Judicial expenses" replaces US "costs and fees." Generally "loser pays" (expenses follow the event) per RCS Chapter II / Ordinary Cause Rules. |
| **No punitive damages** | Not available in Scots law, settlement reflects compensatory principle |
| **Speculative fee arrangements** | Permitted in Scotland (solicitor may agree to take case on speculative basis) but contingent fees (percentage of award) are not generally available; contingency fee arrangements (damages-based agreements) are regulated differently |
| **Tax indemnity** | Parties may settle with an indemnity in respect of tax liabilities; consideration under TCGA 1992 / ITTOIA 2005 |

## Output Structure

### 1. Executive Overview

| Field | Content |
|---|---|
| Parties | All settling parties and roles (pursuer, defender, third party) |
| Settlement date | Date of executed agreement / joint minute lodged |
| Total consideration | Amount and structure (lump sum, periodical payments, structured settlement) |
| Judicial expenses | Who pays; by whom certified; quantum if agreed or to be taxed |
| Key non-monetary terms | Ongoing obligations, confidentiality, admissions |
| Case disposition | Decree of dismissal or absolvitor, or joint minute |

### 2. Negotiation Chronology

Capture each significant event in date order:

| Date | Party | Action | Terms Proposed | Expenses Position | Conditions |
|---|---|---|---|---|---|
| _date_ | _party_ | Initial approach / Tender / Counter / Mediation | Amounts and terms | Expenses included or separate | Conditions attached |

Include mediator name/date for mediation sessions. Note case developments (procedure roll hearings, commission and diligence, debate) that influenced shifts. Note formal tenders and their expenses consequences.

### 3. Settlement Terms Analysis

**Monetary consideration** - total amount, payment structure (lump sum vs periodical payments / interim + final), allocation among claimants, tax treatment (structured settlement may have serial payments under damages rules), payment deadlines, default provisions (interest on late payment per Judicial Proceedings (Interest) Rates).

**Judicial expenses** - Who pays? Certified as payable by [party] to [party] in agreed amount (or to be taxed if not agreed). Whether expenses include outlays, VAT, counsel fees. Note any Rule sanction (Chapter II / OCR 22) applicable.

**Confidentiality** - What is confidential (terms, amount, existence of settlement), permitted disclosures, breach consequences. Enforceable under Scots common law of contract.

**Admission/denial of liability** - Quote the clause verbatim: "without admission of liability" or "under reservation of liability."

**Release provisions** - Scope (mutual/unilateral), claims covered and carve-outs, covered parties (successors, insurers). Note: full and final settlement of all claims (or limited scope).

**Ongoing obligations** - Compliance monitoring, cooperation requirements, performance obligations with deadlines, warranties.

### 4. Special Provisions

Flag if present:

- [ ] Court approval required (child/incapable adult/pupil, Court of Session or Sheriff Court approval needed under AWI Act / common law)
- [ ] Structured settlement requiring periodical payments order under Damages Act 1996 or s.101 Courts Reform (Scotland) Act 2014
- [ ] Third-party funding or ATE insurance allocation
- [ ] Reservation of rights
- [ ] Enforcement dispute resolution (arbitration or court proceedings)
- [ ] VAT / IR35 considerations
- [ ] Non-standard or unusual terms for the practice area

### 5. Strategic Assessment

| Factor | Analysis |
|---|---|
| Settlement vs. judicial determination exposure | Compare to realistic quantum range (judicial discretion) |
| Litigation expenses avoided | Estimated remaining expenses including solicitor, counsel, expert fees |
| Risk factors driving settlement | Key vulnerabilities per party, including witness credibility, commission and diligence outcomes |
| Insurance implications | Indemnity cover, policy limits, reservation of rights, contribution |
| Expenses risk | Liability for defender's or pursuer's judicial expenses if not settled |

### 6. Implementation Checklist

- [ ] Prepare and lodge joint minute (Court of Session / Sheriff Court as appropriate)
- [ ] Extract decree; register for execution if needed (sheriff court extract decree)
- [ ] Initial payment due, date: ___
- [ ] Second/periodical payment due, dates: ___
- [ ] Execute formal minute of agreement if settlement is extra-judicial
- [ ] Procure discharge or renunciation
- [ ] Provide notice to insurers / third parties
- [ ] Return/destroy confidential materials
- [ ] Calendar ongoing obligation deadlines
- [ ] Record in Legal Aid agency records (if applicable)

## Pitfalls

- **Never infer missing terms** - flag gaps explicitly when documents are incomplete
- **Quote exactly** for admission/denial, expenses, and confidentiality provisions, always cite clause numbers
- **Chronology is date-ordered** - do not group by party
- **Judicial expenses** - address separately from monetary consideration; specify who is responsible and whether agreed or to be taxed (audited)
- **Tender consequences** - where formal tender has been lodged, the expenses consequences are governed by rule (RCS 29 / OCR 22)
- **Conditions precedent** - note all conditions that must be satisfied before settlement is effective (e.g., board approval, funding, exchange of missives)
- **Plain language** for client-facing sections; preserve legal precision for technical provisions
- **Tax treatment** - consider CGT (TCGA 1992) on capital sums, income tax on earnings-related settlement payments; note HMRC settlement tax indemnity requirements

## Scotland/UK Adaptation

This skill has been adapted from US originals for use under Scots civil procedure.

**Key adaptations:**
- **Legal framework**: Scots common law of extra-judicial settlement replaces US settlement practice. Formal tender (RCS 29 / OCR 22) has no US equivalent.
- **Terminology**: Pursuer/Defender replace Plaintiff/Defendant. Joint minute / minute of agreement replace settlement agreement/stipulation of dismissal. Decree of absolvitor (dismissal on merits) / decree of dismissal (procedural).
- **Expenses**: Scottish "judicial expenses" (loser pays, taxed by Auditor of Court) replace US "costs and fees" (American rule). No US-style bill of costs.
- **Punitive damages**: Not available in Scots law, settlements are entirely compensatory.
- **Contingency fees**: Not generally permitted; speculative fee arrangements (no win no fee in modified form) and damages-based agreements available, replace US contingency percentage model.
- **Court approval**: Required for settlements involving children, incapable adults (Adults with Incapacity (Scotland) Act 2000), and pupils, procedure before Lord Ordinary or Sheriff. No US class action approval parallel but similar protective nature.
- **Structured settlements**: Governed by Damages Act 1996 and Courts Reform (Scotland) Act 2014 periodical payments provisions, replace US structured settlement rules.
- **Data protection**: UK GDPR / Data Protection Act 2018 applies to settlement confidentiality.
- **Tax**: UK tax treatment (TCGA 1992, ITTOIA 2005, HMRC clearance for certain settlement payments) replaces US IRC.
- **Currency**: All amounts in GBP.
- **No FRE 408**: Scots law on without-prejudice privilege under common law; statutory foundation in s.7 Evidence (Scotland) Act 1842 and common law, not FRCP/FRCP equivalents.
- **No discovery**: Commission and diligence for recovery of documents replaces US discovery; settlement negotiation privilege rules differ.
- **Settlement documents not filed**: Extra-judicial settlements (minute of agreement) are not generally court records, only the joint minute is lodged in process.
- **No discovery**: Commission and diligence for recovery of documents replaces US discovery.
- **Speculative fee**: Scottish speculative fee arrangement (regulated by Law Society of Scotland) replaces US contingency fee structure.

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
