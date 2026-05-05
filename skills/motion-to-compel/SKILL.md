---
name: motion-to-compel
language: en
description: '[SCOTS] Drafts specification of documents motions and related applications for recovery of evidence in Scottish civil litigation. Covers commission and diligence procedure, specification of documents, motions for recovery of evidence from havers, orders under Administration of Justice (Scotland) Act 1972 s.1, opposition to recovery, and sanctions for non-compliance. Adapted for Court of Session (Rules Ch. 35) and Sheriff Court (Ordinary Cause Rules Ch. 28). Use when drafting a motion/appeal for recovery of documents, opposing fishing diligences, addressing haver non-compliance, or preparing evidence recovery briefing in Scottish civil proceedings. [Atticus UK/Scots refined]'
tags:
- analysis, drafting, litigation, motion, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Motion for Recovery of Evidence (Commission and Diligence) [SCOTS]

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

Draft a motion for commission and diligence with specification of documents, opposition note, submissions, and draft interlocutor. Defaults to Court of Session procedure (RCS Ch. 35); swap to Sheriff Court OCR Ch. 28 when sheriff court specified.

## Prerequisites

1. **Court + jurisdiction** - Court of Session (Outer House) or Sheriff Court (Ordinary Cause); local practice notes (e.g. Commercial Court, Personal Injury)
2. **Recovery at issue** - specification of documents (RCS 35.2 / OCR 28.2), commission to examine witnesses (RCS 35.11 / OCR 28.7), orders under AJA(S)A 1972 s.1 (pre-litigation recovery), inspection of documents, data subject access disputes
3. **Verbatim text** - specification of documents served and opposition received, quoted exactly
4. **Chronology** - service dates, opposition deadlines, interlocutors, court orders, adjustment periods, debate/proof timetables
5. **Pre-application correspondence record** - dates, correspondence, concessions offered, remaining disputes, analogous to US meet-and-confer but not a strict prerequisite
6. **Targeted relief** - specific documents/categories sought, ESI format, confidentiality regime, commission appointment, expenses sought
7. **Relevance** - specific articulation of why each document is relevant to the averments on record

Note on terminology: in Scots law, a **motion** is the procedural mechanism (same term as US), but the underlying application is for **commission and diligence** (recovery of evidence), not "discovery." The party holding documents is the **haver**. The person who chairs a commission hearing is the **commissioner**.

## Quick Start

1. Collect prerequisites above.
2. Draft specification of documents listing each document or category with a supporting **statement of relevance**.
3. Lodge motion for commission and diligence (with draft interlocutor / specification).
4. Intimate motion to all parties + havers; receive and consider any opposition.
5. If opposed: lodge written submissions; fix hearing for court to determine motion.
6. If granted: serve interlocutor and specification on haver; haver must produce within period specified (usually 7 to 14 days).
7. If haver fails to comply: fix a commission (hearing before commissioner to examine haver under oath) OR seek ordaining / sanctions.

Default posture: moving party has identified relevant documents held by haver; haver has provided inadequate or no response; one written request plus follow-up attempted; relief = order for recovery within 14 days + expenses occasioned by opposition.

## Phase 1: Rule Mapping & Deadlines

### Motion type selector

| Issue | Authority (Court of Session / Sheriff Court) | Traps |
|-------|-----|-------|
| Recovery of documents from party/third party | RCS 35.2 / OCR 28.2 + AJA(S)A 1972 s.1 | Must specify documents with reasonable precision - "fishing diligence" struck down |
| Confidentiality claimed over documents | RCS 35.8 / OCR 28.9 | Court may appoint commissioner to inspect; parties may claim legal professional privilege / without prejudice privilege |
| Pre-litigation recovery (before proceedings) | AJA(S)A 1972 s.1 | Requires prima facie case + proceedings likely + documents to assist pleadings; Court of Session or Sheriff Court |
| Commission to examine a witness (deposition equivalent) | RCS 35.11 to 35.12 / OCR 28.7 to 28.8 | Rare in Scottish practice, normally evidence given at proof; used for witnesses unable to attend / out of jurisdiction |
| Dawn raid / inspection of property (Anton Pillar order) | AJA(S)A 1972 s.1(1A) + common law | Requires risk of destruction/removal; declarator or interdict may be combined |
| Non-compliance with recovery order | Court's equitable power + expenses | Haver ordaining / commission to examine on failure to produce |
| ESI / electronic documents recovery | RCS 35.2 / OCR 28.2 (same rules apply) | Specify search terms, custodians, date ranges, metadata; data minimisation should be addressed |
| Interim interdict / protective measures | RCS Ch. 60 / OCR Ch. 23 | If risk that documents may be destroyed/spirited away |

### Rule Reference [SCOTS]

| Topic | Authority |
|-------|-----------|
| Recovery of documents (party/third party) | RCS 35.2 to 35.6 / OCR 28.2 to 28.6 |
| Commission to examine witnesses | RCS 35.11 to 35.14 / OCR 28.7 to 28.10 |
| Pre-litigation recovery | Administration of Justice (Scotland) Act 1972 s.1 |
| Confidentiality claims | RCS 35.8 / OCR 28.9 |
| Inspection of recovered documents | RCS 35.7 / OCR 28.8 |
| Expenses of recovery | Court's equitable discretion; "loser pays" judicial expenses |
| Privilege (legal professional / without prejudice) | Common law + Civil Evidence (Scotland) Act 1988 |
| Motion procedure (general) | RCS Ch. 15 / OCR Ch. 6 (motion procedure) |
| Opposing motions | RCS 15.5 / OCR 6.5 |

### Deadline checklist

- [ ] Specification of documents served with motion; or, if motion granted, service of interlocutor on havers
- [ ] Oppositions lodged within 7 days of intimation (RCS) or 7 days (OCR) [VERIFY local practice note for shorter periods in Commercial Court]
- [ ] Commission (hearing before commissioner) - no set deadline; arrange promptly after order granted
- [ ] Proof timetable, confirm recovery can be completed before proof / debate hearing
- [ ] Sheriff's practice notes / Lord Ordinary's practice notes re: motions, email / Civil Online
- [ ] Civil Online, e-filing / e-motion requirements (Court of Session) or portal (Sheriff Court e-filing)
- [ ] Expenses submissions schedule if opposition found unreasonable

## Phase 2: Deficiency Analysis & Pre-Application Correspondence

### Specification of Documents (core deliverable)

Draft a specification identifying each document or category sought. Courts disfavour overly broad/unspecific categories, specify with reasonable precision.

| No. | Document/Category | Haver | Statement of Relevance (relate to averments in pleadings) | Opposition Received | Compromise Offered | Relief Sought |
|----:|-------------------|-------|----------------------------------------------------------|--------------------|--------------------|--------------|
| 1 | [Description] | [Party name] | [Relevant to which averment / issue] | [Form of opposition] | [Narrowing offered] | [Precise order sought] |

Group related categories by legal issue. For each, cite relevance to the pleadings and articulate proportionality (importance, relative access, burden vs. benefit). Note that Scottish courts do not apply the US proportionality standard in FRCP 26(b)(1); relevance to the pleaded case is the primary test, and fishing diligences are prohibited.

### Pre-application correspondence log

| Date | Method | Recipients | Issues Raised | Haver/Opponent Position | Result |
|------|--------|------------|---------------|-------------------------|--------|

## Phase 3: Draft Motion and Supporting Documents

### 3A, Motion

Structure: court caption (Court of Session / Sheriff Court) → motion narrative (prayer for commission and diligence / commission to examine / recovery order) → reference to specification of documents (lodged separately) → specification of documents annexed → date / solicitor signature with firm reference.

Note: In Scotland, a motion is lodged via **Civil Online** (Court of Session) or the sheriff court e-filing portal. See RCS 15 / OCR 6 for motion procedure.

### 3B, Note of Argument (Written Submissions)

Include only sections relevant to the recovery type at issue:

**I. Introduction** - One paragraph: what documents are sought, from whom, on what basis.

**II. Procedural Background** - From chronology and correspondence log.

**III. Legal Basis for Recovery**
- Commission and diligence is the ordinary method of recovering documents in Scotland: RCS 35.2 / OCR 28.2
- Documents sought must be relevant to the averments on record, not a fishing diligence (see *Moore v Greater Glasgow Health Board* 1983 SLT 92; *McBrearty v HM Advocate* 2001 SLT 1329)
- Pre-litigation orders: AJA(S)A 1972 s.1 - requires prima facie case, proceedings likely to be brought, documents assist in specifying pleadings, Commission to examine witnesses: RCS 35.11 - court may grant where it is "necessary or expedient" for the ends of justice

**IV. Argument, applicable modules:**

| Module | Key Points |
|--------|-----------|
| Specification of documents (RCS 35.2 / OCR 28.2) | List documents with reasonable precision. State relevance to averments. Broad/fishing specifications will be refused. |
| Commission to examine (RCS 35.11 / OCR 28.7) | Necessary or expedient for justice. Witness unable to attend proof: infirmity, out of jurisdiction, recalcitrant. |
| Pre-litigation (AJA(S)A 1972 s.1) | Prima facie case + proceedings likely + documents needed to specify pleadings. *Caledonian Newspapers Ltd v Campbell* 2001 SCLR 269. |
| Confidentiality / Privilege (RCS 35.8 / OCR 28.9) | Court may appoint commissioner to adjudicate. Legal professional privilege (confidential communications with solicitor). Without prejudice privilege. Non-disclosure on public interest grounds. |
| ESI / electronic documents | Same principles apply; specify custodians, search terms, date ranges, metadata format. No dedicated Scottish ESI rules (contrast US FRCP 34(b)(2)(E) / Sedona Principles). |
| Dawn raid / inspection (AJA(S)A 1972 s.1(1A)) | Risk of destruction/removal of material. Without notice to respondent. Interim interdict may be combined. |
| Opposition, fishing diligence | A specification is a fishing diligence if it does not identify documents with sufficient precision or if documents are not relevant to the pleadings. *Lord Advocate v Lees* 2001 SC 28. |
| Opposition, confidentiality | Haver/opponent may claim privilege or confidentiality. Court may balance or appoint commissioner for inspection. |

**V. Expenses**
- General rule in Scotland: judicial expenses follow success - "loser pays"
- If motion granted and opposition unreasonable: moving party may seek expenses (including the costs of the motion + commission)
- Court has discretion - *O'Donnell v Cumming* 2014 SLT (Sh Ct) 51
- [SCOTS: No direct equivalent to FRCP 37(a)(5) sanctions regime, no automatic fee-shifting for discovery misconduct. Court may award expenses as part of its equitable discretion, and may find a party in contempt for failure to comply with a court order (contempt of court). See Civil Evidence (Scotland) Act 1988.]

**VI. Conclusion** - Summarise precise relief; propose draft interlocutor.

### 3C, Draft Interlocutor (Proposed Order)

Structure: title → numbered paragraphs: commission and diligence granted; specification of documents approved (annexed); period for production (e.g. 14 days); commissioner appointed (name/firm, if agreed); confidentiality regime; expenses of motion (reserved / expenses in cause / found in favour of mover) → date and blank signature block for judge/sheriff.

Note on terminology: Scottish courts issue **interlocutors** (not "orders"). A draft interlocutor is lodged with the motion.

### 3D, Exhibit/Production Checklist

Scottish procedure does not use the same exhibit numbering convention as US litigation. Productions are lodged as numbered items in process. However, for the motion for commission and diligence, the following supporting documents should be lodged/productioned:

- [ ] **1**: Specification of documents (usually annexed to motion)
- [ ] **2**: Correspondence with haver, pre-application letters
- [ ] **3**: Available correspondence log showing impasse / refusal
- [ ] **4**: Pleadings (condescendence / answers) - to demonstrate relevance
- [ ] **5**: Any prior interlocutors / procedural history
- [ ] **6**: List of proposed commissioner (if sought)
- [ ] **7**: Draft interrogatories (if commission to examine witness)
- [ ] **8**: Any relevant practice notes or Act of Sederunt

## Phase 4: Litigation Readiness

### Court & Practice Note Compliance

- [ ] Motion lodged via Civil Online (Court of Session) or e-filing portal (Sheriff Court)
- [ ] Specification of documents annexed to motion
- [ ] Intimation to all parties and havers (RCS 35.3 / OCR 28.3)
- [ ] Time limits for opposition observed (7 days after intimation - [VERIFY] practice note for shortened periods)
- [ ] Commercial Court / Personal Injury Court practice notes reviewed
- [ ] Page limits and formatting for Note of Argument (if hearing, no set limit but should be concise)
- [ ] Judge/Sheriff's individual practice notes checked
- [ ] Expenses submissions approach prepared
- [ ] Proposed interlocutor lodged in correct format

### Hearing Preparation

- [ ] 1 to 2 page summary of key documents/categories sought (top 3 to 5 most important categories)
- [ ] Relevance points, link each category to specific averments in the pleadings
- [ ] Compromise position ready (narrower categories, extended time, confidentiality caveat, inspection by commissioner)
- [ ] Opposition rebuttal, address fishing diligence, confidentiality, privilege, burden on haver arguments
- [ ] Expenses submissions with authority; anticipate argument that motion was unnecessary / premature / overbroad

## Output Modes

| Mode | Contents |
|------|----------|
| **Full Package** (default) | Motion + Note of Argument + Specification of Documents + Draft Interlocutor + Production Checklist |
| **Specification + Interlocutor** | Specification of Documents + Draft Interlocutor + Correspondence Log |
| **Compliance Checklist** | Deadline + Correspondence + Court Compliance checklists (no drafted text) |

## Refinement Options

| Option | Description |
|--------|-------------|
| **Pre-litigation (AJA(S)A 1972)** | Focused application under AJA(S)A 1972 s.1 - requires prima facie case, proceedings likely, documents to assist pleadings |
| **Commission to examine** | Focused on commission to examine a witness (RCS 35.11 / OCR 28.7) - include draft interrogatories |
| **Confidentiality dispute** | Detailed sections addressing confidentiality claims, commissioner appointment, sealed inspection, redaction regime |
| **ESI recovery** | Custodians, data sources, search terms, metadata, native format, clawback / confidentiality provisions |
| **Dawn raid / Anton Pillar** | Without notice application, risk of destruction, interim interdict combined, undertakings on damages, timetables for return |
| **Non-compliance / Commission** | Focused on fixing a commission to examine a haver who has failed to produce documents |

## Guidelines

- Specify all documents/categories with **reasonable precision** - courts strike down fishing diligences, Relevance must be **grounded in the pleadings** - identify specific averments for each category, Legal professional privilege belongs to the client, not the solicitor, cannot be waived by opponent, No US-style proportionality balancing in FRCP 26(b)(1) sense; relevance to pleaded case is the touchstone, Proposed interlocutor should be lodged with the motion, standard practice in Scottish civil procedure, Expenses: judicial expenses follow success; consider whether to seek expenses for opposition, For Sheriff Court, confirm whether **summary cause**, **ordinary cause**, or **simple procedure** applies, only Ordinary Cause Rules (Ch. 28) provide for commission and diligence
- [SCOTS: No direct equivalent to US meet-and-confer requirement, however, written pre-application correspondence is strongly advisable and courts look unfavourably on motions where no attempt was made to agree terms]
- No placeholder text in lodged documents; redact confidential / third-party personal data per UK GDPR / Data Protection Act 2018

---

## Scotland/UK Adaptation

### Key differences from US Motion to Compel Discovery

| US Concept | Scottish Equivalent |
|---|---|
| FRCP 26(b)(1) - Scope of Discovery | No equivalent, no general discovery/disclosure obligation in Scotland. Parties produce documents they rely on. |
| FRCP 33 - Interrogatories | No equivalent; written questions are rare in Scottish civil procedure; use commission to examine or specification of documents |
| FRCP 34 - Requests for Production | Specification of documents (RCS 35.2 / OCR 28.2); requires motion + court order, not a self-executing request |
| FRCP 36 - Requests for Admission | Notices to admit (more limited; not a standalone mechanism; prescribed in Civil Evidence (Scotland) Act 1988) |
| FRCP 37(a) - Motion to Compel / Sanctions | No direct equivalent. Commission to examine is the remedy for non-production (RCS 35.15 / OCR 28.11). Contempt of court for order breach. |
| FRCP 37(a)(5) - Expenses on Motion | No automatic fee-shifting for discovery. Judicial expenses (loser pays) apply to motions generally. |
| FRCP 26(b)(5) - Privilege Log | Common law privilege rules; no formal "privilege log" requirement. Confidentiality claims dealt with via RCS 35.8 / OCR 28.9 (commissioner inspects sealed documents). |
| FRCP 34(b)(2)(E) - ESI Format | No Scottish equivalent rule. ESI recovered under same specification procedure. |
| Meet-and-confer requirement | No formal requirement, but pre-application correspondence expected. |
| Motion to Compel (single filing) | Two-step process: (1) motion for commission and diligence with specification; (2) if haver fails to produce, fix a commission to examine. |

### Courts and Procedure

- **Court of Session (Outer House)** - High-value/complex claims (over £100,000 or in either court). Rules: RCS Ch. 35. Judge = Lord Ordinary.
- **Sheriff Court (Ordinary Cause)** - Claims up to £100,000. Rules: OCR Ch. 28. Judge = Sheriff.
- **Scottish Civil Online** - electronic case management system for Court of Session motions; Sheriff Court e-filing portal.
- **No federal/state distinction** - Scotland is a single jurisdiction within the UK. Some matters are devolved (Scottish Parliament) and some reserved (UK Parliament).

### Terminology

| US Term | Scots Equivalent |
|---|---|
| Plaintiff | Pursuer |
| Defendant | Defender |
| Motion | Motion (same term, Scottish procedure) |
| Discovery | Commission and Diligence / Recovery of Evidence |
| Request for Production | Specification of Documents |
| Opposing Party | Respondent / Opponent (to the motion) |
| Deposition | Commission to Examine / Examination on Oath |
| Judge | Lord Ordinary (Court of Session) / Sheriff (Sheriff Court) |
| Court Order | Interlocutor |
| Exhibit | Production |
| Sanctions | Expenses / Contempt of Court |
| Court Filing | Lodging in Process |
| Meet-and-Confer | Pre-Application Correspondence |
| Standing Order | Practice Note / Act of Sederunt |

### Currency

All monetary thresholds in GBP (£). Sheriff Court jurisdiction cap: £100,000 (Courts Reform (Scotland) Act 2014). For motions, expenses (costs) are awarded in GBP.

### Statutes and Authorities

- **Court of Session Rules (RCS)** - https://www.scotcourts.gov.uk/rules-and-practice/rules-of-court/court-of-session-rules (Ch. 35 - Recovery of Evidence)
- **Ordinary Cause Rules (OCR)** - Sheriff Court Rules (Ch. 28 - Recovery of Evidence)
- **Administration of Justice (Scotland) Act 1972 s.1** - pre-litigation recovery
- **Civil Evidence (Scotland) Act 1988** - evidence, notices to admit, privilege
- **Courts Reform (Scotland) Act 2014** - jurisdiction, court structure, procedural reforms
- **Data Protection Act 2018 / UK GDPR** - data subject rights and disclosure of personal data
- **Human Rights Act 1998** - compatibility with ECHR Art. 6 (fair trial) and Art. 8 (privacy)

### Key cases

- *Moore v Greater Glasgow Health Board* 1983 SLT 92 - relevance and fishing diligence
- *Lord Advocate v Lees* 2001 SC 28 - fishing diligence principles
- *Caledonian Newspapers Ltd v Campbell* 2001 SCLR 269 - AJA(S)A 1972 s.1
- *Grampian University Hospitals NHS Trust v Procurator Fiscal* 2006 SLT 495 - privilege
- *O'Donnell v Cumming* 2014 SLT (Sh Ct) 51 - expenses in recovery motions

### Practice Notes

Practice notes vary by Sheriffdom and by the Lord Ordinary sitting. Always [VERIFY] current practice note for the specific court before lodging.

### Scotland-specific traps

1. **No automatic discovery** - Scottish procedure has no US-style FRCP 26 disclosure. If you need opponent's documents, you must apply by motion.
2. **Fishing diligence prohibition** - a specification that is too broad or does not specify documents with reasonable precision will be refused.
3. **"Subject to confidentiality" caveat** - if confidentiality is claimed, the court may appoint a commissioner to inspect documents before deciding whether to disclose.
4. **Commission to examine is rare** - most evidence is given at proof; commissions are for exceptional circumstances (witness infirm, out of jurisdiction, etc.).
5. **No US sanctions culture** - Scottish courts do not award automatic sanctions for discovery misconduct. Sanctions are limited to expenses (costs) for unreasonable opposition or contempt for breach of court orders.
6. **Expenses follow success** - in Scotland the "loser pays" principle applies generally (unlike the US default of each party bearing its own costs). This includes motion expenses.

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
