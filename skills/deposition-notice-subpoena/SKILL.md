---
name: deposition-notice-subpoena
language: en
description: '[SCOTS] Drafts U.S. federal civil deposition notices (FRCP 30(b)(1), 30(b)(6)) and Rule 45 subpoenas for testimony and/or documents. Adapted for Scotland: use for Commission and Diligence applications, citations to attend, and evidence on commission. Trigger keywords: commission, diligence, citation, precognition, recovery of documents, witness citation, evidence on commission, AO 88A/88B (U.S. forms retained for U.S. cross-border work), subpoena. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Notice and Subpoena (Scotland/UK Adaptation)

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

Produces enforceable federal deposition notices and Rule 45 subpoenas with defensible scope, proper timing, and a complete service packet. **[SCOTS: Note]** - In Scottish civil procedure, US-style depositions do not exist. The closest equivalents are:

- **Commission and Diligence** (RCS 36 / Sheriff Court Ordinary Cause Rules Chapter 28) - formal court-ordered recovery of documents
- **Evidence on Commission** (RCS 37) - taking of evidence from a witness before the proof (trial), typically for witnesses unable to attend court
- **Citation to attend** - formal summons for a witness to appear at proof or commission
- **Precognition** - informal preparatory witness interview (not under oath; no US-style deposition)
- **Letters of Request** - for foreign evidence (RCS 37A / Evidence (Proceedings in Other Jurisdictions) Act 1975)

**Cross-border note**: If the case involves US federal court proceedings (cross-border litigation), the US sections below apply directly. For purely Scottish proceedings, use the Scottish-equivalent sections.

## Quick Start

1. Gather intake (Checkpoint A below)
2. Select instrument based on deponent/witness status
3. Build timeline accounting for diligence period or court timetable
4. Draft notice, citation, or commission application
5. Assemble service packet
6. Run post-draft alignment (Checkpoint B) and quality audit

## Checkpoint A: Pre-Draft Intake

Ask every time unless the user says "use defaults" or "just draft."

1. **Case caption** - court (Sheriff / Court of Session), cause number, sheriff / judge
2. **Deponent/witness status** - party (pursuer/defender), party entity, non-party, former employee, expert
3. **Procedural timetable** - options hearing, proof (trial) date, procedural deadlines
4. **Logistics** - date, time, time zone, location (court or commissioner's chambers) or remote platform
5. **Recording method** - stenographic only, stenographic + audiovisual, or commissioner's notes
6. **For US 30(b)(6)** - topics with defined terms and time ranges (entity depositions only)
7. **Document requests (Schedule A)** - and desired production format
8. **Confidentiality** - existing protective order or confidentiality agreement
9. **Witness / citation details** - service address, compliance location, witness fees (Scottish regulations or 28 U.S.C. § 1821 for US)
10. **Prior recovery** - relevant pleadings, lists of documents, key productions

**Defaults** (label clearly if applied): party individual; rule 30(b)(1) notice (US); stenographic; no document requests; 7-hour limit (US). For Scotland: commission application for documents only; witness precognition in advance.

## Step 1: Select Instrument

### For US Federal Practice (cross-border / federal litigation)

| Deponent | Instrument | Service | Key Rules |
|---|---|---|---|
| Party individual | 30(b)(1) notice | Counsel (Rule 5) | 30(b)(3) recording; 30(d)(1) 7-hour limit; 30(a)(2)(A)(i) limits |
| Party entity | 30(b)(6) notice | Counsel (Rule 5) | Topics reasonably particular; entity designates and prepares |
| Non-party | Rule 45 subpoena | Personal + fees | 45(b)(1) fees; 45(c) location; 45(a)(4) pre-service notice |
| Former employee | Rule 45 subpoena | Personal + fees | Treat as non-party |

### For Scottish Practice (Scots civil procedure)

| Witness / Source | Instrument | Service | Key Rules / Procedure |
|---|---|---|---|
| Party witness (pursuer/defender) | Precognition (informal; no oath) | Arranged by solicitor | No formal "deposition"; solicitor-led preparatory interview |
| Non-party witness (proof) | Citation to attend (Form O6 / O7 or equivalent) | Personal service + fees | Ordinary Cause Rules 29-30 / RCS 38; witness expenses payable |
| Documents (party) | Specification of documents / Diligence | Motion / commission | RCS 36 / Ordinary Cause Rules 28; apply by motion or crave |
| Documents (non-party) | Commission and Diligence (including from haver) | Court order; sheriff officer service | RCS 36.4 / Sheriff Court OCR 28; decree of commission |
| Evidence from witness unable to attend proof | Evidence on Commission | By order of court | RCS 37; commissioner appointed; witness cited to attend |
| Foreign evidence | Letters of Request | Court of Session / Secretary of State | RCS 37A; Evidence Act 1975 |

**[VERIFY]** - Sheriff Court witness citation forms vary by sheriffdom. Check local rules.

## Step 2: Build Timeline

### US Federal
- **Documents with notice**: serve 30+ days before deposition (Rule 34 response period)
- **Subpoenaed documents**: allow 14 days for objections (Rule 45(d)(2)(B))
- **Buffer**: reserve time for meet-and-confer and motion practice before discovery cutoff

### Scottish
- **Specification of documents**: apply by motion; court fixes period for recovery (typically 14-28 days)
- **Commission and Diligence**: court order obtained; sheriff officer serves; production period fixed by court
- **Citation to attend witness**: minimum 7 days' notice (or as directed by sheriff / judge)
- **Evidence on Commission**: motion lodged; commissioner appointed; date fixed by court; 14-28 days' notice typical
- **Buffer**: reserve time for opposition or caution of expenses before proof / hearing

## Step 3: Draft Notice or Subpoena

### 30(b)(1) Notice (US Federal)

```
[Caption]

NOTICE OF DEPOSITION OF [NAME]

PLEASE TAKE NOTICE that, pursuant to Fed. R. Civ. P. 30(b)(1), [Noticing Party]
will take the deposition upon oral examination of [Deponent], on [Date], at
[Time] [Time Zone], at [Address] or via [Remote Platform] (access details to
follow). The deposition will be recorded by [stenographic / stenographic and
audiovisual] means and conducted before a duly authorized officer. The deposition
will proceed from day to day until completed.
```

### 30(b)(6) Topics (US Federal)

Use a topic table. Tie each topic to a claim or defence. Define key terms. Add time ranges.

| Topic No. | Subject | Time Range | Definitions | Source Anchors |
|---|---|---|---|---|
| 1 | [Business function] | [Start-End] | [Define key terms] | [Pleadings, RFP] |

Rules for topics:
- No "all facts" or "entire complaint" language, No "including but not limited to" scope expansion, Target prepared testimony from documents, not legal conclusions

### Rule 45 Subpoena (US Federal)

Use AO 88A (testimony) or AO 88B (documents). Include Rule 45(d)/(e) text per Rule 45(a)(1)(A)(iv). Issuing court = court where action is pending (Rule 45(a)(2)).

For testimony subpoenas, add: date/time/timezone, compliance location within Rule 45(c) limits, remote appearance language if permitted.

### Scottish Equivalents

**Citation to Attend** (form depends on forum, use court-issued form):
```
[Court name and case reference]

CITATION TO ATTEND

To [Witness Name]
You are required to attend at [Court / Commission Address] on [Date] at
[Time] to give evidence in the above cause. If you fail to attend without
reasonable excuse, you may be subject to [fine / warrant for apprehension,
per applicable rules].
```

**Specification of Documents** (application / motion):
```
Pursuer / Defender craves a commission and diligence for the recovery
of the documents and articles specified in the annexed schedule, and
that from the possession of [Haver / Party].
```

**[SCOTS]**: No standard statutory AO-equivalent form exists. Use court-specific forms.

## Step 4: Schedule A Document Requests (US) / Schedule of Documents (Scotland)

### US Form
```
Schedule A, Document Requests

1. Documents sufficient to show [specific fact], limited to [date range].
2. Non-privileged communications between [A] and [B] regarding [topic], limited to [date range].
3. Records of [transactions] for [Project], limited to [date range].
```

**ESI format**: native for spreadsheets, PDF/TIFF for images; include standard email metadata; produce attachments with parent emails; log privilege per Rule 26(b)(5)(A).

### Scottish Form
```
SCHEDULE OF DOCUMENTS

First. All invoices, statements, and correspondence between [A] and [B]
relating to [matter], from [date] to [date].

Second. All records, documents, and communications relating to [specific
fact], from [date] to [date].
```

**[SCOTS]**: ESI is increasingly addressed in Scottish recovery. Use standard data format requests (PDF, native, CSV). Consider limiting to "any record held in electronic form" and specifying search terms and date ranges. **[VERIFY]** latest practice note from Court of Session on ESI recovery.

## Step 5: Assemble Service Packet

### US Federal
- [ ] AO 88A/88B subpoena with Schedule A
- [ ] Notice of deposition (if testimony)
- [ ] Pre-service notice to parties for document subpoenas (Rule 45(a)(4))
- [ ] Witness fee and mileage tender (28 U.S.C. § 1821)
- [ ] Proof of service form
- [ ] Cover letter with burden-reduction and confidentiality terms

### Scottish
- [ ] Certified copy of interlocutor / court order authorising commission
- [ ] Specification / Schedule of Documents (annexed to commission)
- [ ] Citation to attend (for witness commissions)
- [ ] Witness expenses (if applicable, rates per Scottish Courts & Tribunals Service guidance) [VERIFY]
- [ ] Sheriff officer's certificate of service
- [ ] Cover letter with confidentiality terms

## Checkpoint B: Post-Draft Alignment

Ask after delivering the draft:

1. Does instrument type match deponent/witness status?
2. Are 30(b)(6) topics (or Scottish equivalent specification) sufficiently specific?
3. Is compliance location within applicable limits (US Rule 45(c) / Scottish court jurisdiction)?
4. Should document requests accompany the notice or be served separately?

Default recommendation if no response: review 30(b)(6) topics or specification for specificity, then proceed.

## Quality Audit

### US Federal
- [ ] Caption, court, case number match docket
- [ ] Recording method stated ("audiovisual" if video intended)
- [ ] Compliance location within Rule 45(c) 100-mile limit
- [ ] Document requests tied to claims/defences with time limits
- [ ] Rule 30 deposition limits met or leave obtained
- [ ] Rule 45(d)(1) undue burden considered
- [ ] Protective order referenced or flagged
- [ ] Timeline accounts for Rule 34 (30-day) and Rule 45(d)(2)(B) (14-day) periods
- [ ] 30(b)(6) topics free of overbroad language
- [ ] Service packet complete
- [ ] Witness fees included for non-party subpoenas

### Scottish
- [ ] Court, cause number, sheriff/judge match court roll
- [ ] Commission authorised by interlocutor or motion granted
- [ ] Specification / schedule within court-authorised scope
- [ ] Witness citation served with correct form
- [ ] Reasonable notice period met (or dispensed with by court)
- [ ] Undue burden / oppression considered (specification challenge possible)
- [ ] Confidentiality addressed (sealed list option for sensitive docs)
- [ ] Timeline accounts for court-ordered periods
- [ ] Service packet complete including sheriff officer certificate

## Pitfalls and Checks

- **Never** notice nonparties under Rule 30 - use Rule 45
- **Never** subpoena represented parties directly, serve counsel
- **Never** guess local-rule notice periods, flag for solicitor verification
- **In Scotland**: do not use "deposition" language with Scottish courts, use "precognition," "commission," or "citation" as appropriate
- **Specification of documents**: must be specific enough to identify documents; "fishing" specifications will be refused
- **Oppression**: Scottish courts will limit recovery if it is oppressive, too wide, or burdensome (North Glengarry v Scottish Ministers [2004])
- **Expenses**: witness fees and caution (security for expenses) may be ordered in commission proceedings
- **Anti-hallucination**: all citations and local rules must be verified or flagged `[VERIFY]`
- **Solicitor review required**: confirm local rules, sheriffdom-specific procedures, and form requirements before service
- **Ethics**: comply with practising certificate obligations and Law Society of Scotland rules
- **Cross-border**: if the case involves both US and Scottish procedures, state which rules apply at the outset

## Scotland/UK Adaptation

This skill has been adapted for Scottish and UK civil procedure from its original US FRCP 30 / 45 focus.

### Key Adaptations

| US Term | Scotland/UK Equivalent |
|---|---|
| FRCP 30 (deposition) | No direct equivalent; precognition (informal) |
| FRCP 30(b)(6) (entity) | No direct equivalent; commission for production |
| FRCP 45 (subpoena) | Citation to attend / Commission and Diligence |
| Rule 45 subpoena duces tecum | Specification of documents + commission |
| AO 88A/88B forms | No standard Scottish forms; use court-issued citation forms |
| Service (personal + fees) | Sheriff officer service + witness expenses |
| 100-mile location limit | Court's territorial jurisdiction |
| 7-hour deposition limit | No statutory limit; court may impose time limits |
| Meet-and-confer | Procedure roll / options hearing |
| Attorney | Solicitor / Advocate |
| Judge | Sheriff (Sheriff Court) / Judge (Court of Session) / Lord Ordinary |
| Party (plaintiff / defendant) | Party (pursuer / defender) |
| Deponent | Witness / haver (for documents) |
| Discovery | Commission and Diligence / Recovery of documents |
| Protective order | Confidentiality agreement / sealed list order |
| Privilege log | List of documents with confidential/non-confidential categories |
| FRE 801(d)(2) admissions | Party admissions as evidence; hearsay rules differ (Civil Evidence (Scotland) Act 1988) |

### Scottish Court Hierarchy
- **Sheriff Court** (Simple Procedure <=5k; Ordinary Cause >5k)
- **Sheriff Appeal Court**
- **Court of Session** (Outer House -> Inner House)
- **UK Supreme Court**

### Prescription and Time Bars, Delict (tort): 5-year prescriptive period (Prescription and Limitation (Scotland) Act 1973)
- Personal injury: 3-year limitation, Contract (simple): 5-year prescriptive period, Contract (formal deed): 20-year long-stop

### GBP and Cost Rules
- "Loser pays" (judicial expenses follow the event)
- Contingency fees prohibited in Scotland, DBAs (damages-based agreements) and CFAs available, Sheriff Court: expenses regulated by statute and court discretion, Witness fees: prescribed daily rates (check current SCTS guidance)

### [VERIFY] Items, Current witness expense rates (Scottish Courts & Tribunals Service)
- Sheriffdom-specific citation forms, Court of Session practice notes on ESI recovery, Latest RCS amendments re electronic documents, Applicable rules for remote witness appearances post-COVID

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
