---
name: deposition-notice
language: en
description: Atticus UK/Scots legal skill for deposition-notice. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Notice Package (Scotland/UK Adaptation)

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

Draft compliant commissions to take evidence, witness citations, letters of request, and commission and diligence for recovery of documents under Scottish civil procedure.

## Quick Start

1. Gather inputs via the intake table below.
2. Match procedure to court and evidence type.
3. Apply court rules (RCS for Court of Session, OCR for Sheriff Court Ordinary Cause, SP rules for Simple Procedure).
4. Generate documents from templates.
5. Run the pre-service checklist; calendar all deadlines.

## Intake

| Field | Notes |
|---|---|
| Court / Case No. | Include case heading and parties |
| Type of commission | Commission to take evidence (examination of witness), Commission and diligence (recovery of documents) |
| Witness name / address | Plus agent if represented |
| Documents sought | Subject matter and date ranges |
| Hearing date / time / location | Or date for commissioner's examination |
| Recording method | Stenographic, video, audio, or hybrid |
| Letter of request (foreign) | For witnesses outwith Scotland / UK |

## Document Selection

| Type | Documents |
|---|---|
| Witness in Scotland, Commission to take evidence | Minute for Commission, Proposed interrogatories, Citation for witness, Commissioner's oath, Extracted commission |
| Witness outwith Scotland / UK | Letter of Request (to foreign court), Interrogatories (optional), Proposed commissioner |
| Recovery of documents, Commission and Diligence | Specification of Documents, Commission and Diligence (incidental step), Enforceable order for production, Execution of diligence |
| Party witness, personal attendance | Witness citation (Form of Service for Witnesses) |

## Baseline Checks

Adjust for court and local rules. Items marked [VERIFY] require confirmation.

| Rule | Requirement |
|---|---|
| RCS 33.33 to 33.35 (Court of Session) | Commission to take evidence on interrogatories or cross-interrogatories |
| RCS 31.1 (Court of Session, Diligence) | Specification of documents; commission granted on motion |
| OCR 1993 rr. 28 to 29 (Ordinary Cause) | Commission and diligence; specification of documents |
| SP Rule 25 (Simple Procedure) | No automatic commission; court may order recovery on application |
| Act of Sederunt rules | Form of commissions, witness expenses, and commissioner's fees |
| Evidence Convention (Hague) | Letter of Request to foreign court [VERIFY whether HCCH 1970 ratified by destination] |
| CPR 34 (England & Wales) | Letter of Request to English court for witnesses in England |
| Witness expenses | Statutory witness expenses must be tendered with citation |
| Privacy / Data Protection | GDPR / Data Protection Act 2018 considerations for document recovery |

## Templates

Adapt all templates to court and local rules.

### Minute for Commission (Court of Session)

```
[HEADING, COURT OF SESSION]

MINUTE FOR THE PURSUER
FOR COMMISSION TO TAKE EVIDENCE

The Pursuer craves the court to grant a Commission to take the evidence of
[WITNESS NAME], residing at [ADDRESS], on interrogatories and cross-interrogatories.

The reason for this application is [e.g. witness is aged, infirm, or
resident outwith Scotland / unable to attend proof]. [VERIFY grounds
must meet court requirements.]

Dated: [DATE]

[SIGNATURE, COUNSEL OR SOLICITOR]
```

### Specification of Documents (for Commission and Diligence)

```
[HEADING]

SPECIFICATION OF DOCUMENTS
FOR THE PURSUER

The Pursuer craves the court to ordain [DEFENDER / THIRD PARTY NAME]
to produce and emit the documents specified below.

1. All documents relating to [subject] from [date range].
2. All correspondence between [person] and [person] regarding [subject].
3. All records of [specific category] for [date range].

Dated: [DATE]

[SIGNATURE]
```

### Citation for Witness (Form of Service)

```
[HEADING]

CITATION FOR [WITNESS NAME]

TO: [WITNESS NAME AND ADDRESS]

You are required to attend as a witness at [COURT / LOCATION] on [DATE]
at [TIME] to give evidence in the cause between [PURSUER] and [DEFENDER].

Statutory witness expenses are enclosed.

FAILURE TO ATTEND without reasonable excuse may result in a warrant for
your apprehension and a penalty.

Dated: [DATE]

[SHERIFF OFFICER / MESSENGER-AT-ARMS SIGNATURE]
```

### Letter of Request (Foreign Court)

```
[HEADING]

LETTER OF REQUEST

The Court of Session respectfully requests the judicial authority of
[COUNTRY] to take or cause to be taken the evidence of [WITNESS NAME]
residing at [ADDRESS] for use in the above-captioned cause now pending
before this Court.

The evidence is required because [reason].

[Optional: Enclosed interrogatories / cross-interrogatories.]

Dated: [DATE]

[COURT CLERK / DEPUTY CLERK]
```

### Proof of Service / Certificate of Citation

```
CERTIFICATE OF CITATION

I certify that on [DATE] I duly cited [WITNESS NAME] to attend at
[COURT / LOCATION] on [DATE] at [TIME] by serving [METHOD] at
[ADDRESS] and I tendered the statutory witness expenses of £[AMOUNT].

[SHERIFF OFFICER / MESSENGER-AT-ARMS]
[OFFICER NUMBER]
[DATE]
```

### Scheduling Letter (to Opposing Agent)

```
[DATE]

[OPPOSING SOLICITOR]

Re: Commission to take evidence of [WITNESS]

Please provide available dates over the next [TIME PERIOD]. I would like to
complete the commission by [TARGET DATE] given the proof diet of [DATE].

Proposed dates: [DATE 1], [DATE 2], [DATE 3].
```

## Pre-Service Checklist

- [ ] Court rules for commissions verified (RCS / OCR)
- [ ] Grounds for commission meet court requirements (witness age, health, residence, necessity)
- [ ] Specification of documents drafted with reasonable particularity
- [ ] Interrogatories / cross-interrogatories drafted (if commission on interrogatories)
- [ ] Witness expenses calculated and tendered
- [ ] Letter of Request drafted with translation requirements (if foreign witness)
- [ ] Privacy / data protection assessed (relevance and proportionality)
- [ ] Parties served with minute and specification; proof of service retained
- [ ] Commissioner appointed (usually a solicitor or advocate) - confirm no conflict

## Special Situations

- **Commission on interrogatories**: Draft proposed interrogatories and cross-interrogatories; commissioner examines on these; no oral cross-examination unless ordered.
- **Commission for oral examination**: Court orders oral evidence taken before a commissioner; parties may attend and cross-examine.
- **Commission and diligence for recovery**: Specification must be timeous and focused; avoid overbroad requests ("fishing diligence" is not permitted).
- **Witness outwith the UK**: Letter of Request (Hague Evidence Convention 1970 or bilateral arrangement); translation and local legalisation may be required.
- **Emergency / urgent commission**: Obtain motion for abbreviated procedure [VERIFY local practice].
- **Remote/video-link commission**: Court may order a virtual commission under RCS / OCR; include platform details and recording method.
- **Expert witness commission**: Schedule after expert reports are exchanged per court timetable.

## Common Pitfalls

- Commission cannot be used for a mere "fishing expedition" - must specify documents with reasonable precision.
- Over-broad specifications of documents invite opposition and court restriction.
- Witness expenses must be tendered with citation; failure renders citation invalid.
- Letter of Request to foreign courts may take 6 to 12 months, plan accordingly.
- Commission on interrogatories is limited; oral examination is the default in most modern practice.
- Always apply court timetables, procedural orders, and local rules over general defaults.
- Privacy and confidentiality: consider confidentiality clauses, data protection, and closed hearings for sensitive documents.

## Scotland/UK Adaptation

### Key Differences from US Version

| US Concept | Scotland/UK Equivalent |
|---|---|
| Deposition notice | Minute for Commission / Witness Citation |
| Deposition (oral examination) | Commission to take evidence (oral or on interrogatories) |
| Subpoena (non-party) | Citation for witness / Commission and diligence order |
| FRCP 30(b)(1) - notice of deposition | Minute for Commission (RCS 33.33 / OCR r. 28) |
| FRCP 30(b)(6) - corporate representative | No direct equivalent; can cite an officer of a company to appear |
| FRCP 45(a) - subpoena | Witness citation by Sheriff Officer / Messenger-at-Arms |
| FRCP 45(b)(1) - witness fee tender | Statutory witness expenses tendered with citation |
| FRCP 45(c)(1) - 100-mile limit | No distance limit; witness must attend anywhere in Scotland |
| FRCP 26(d) - discovery timing | Disclosure is automatic (RCS Ch. 26); commission requires separate order |
| AO 88A subpoena form | No official prescribed form; follows court rules |
| Document requests (subpoena duces tecum) | Specification of Documents (Commission and Diligence) |
| Proof of Service (process server) | Certificate of Citation (Sheriff Officer / Messenger-at-Arms) |
| Objections within 14 days (FRCP 45) | No fixed objection period; opposition by motion before commission |
| Scheduling letter | Optional, professional courtesy between solicitors |
| Remote deposition | Virtual commission (by court order) |
| Apex witness doctrine | No direct Scottish equivalent; court controls who must attend |

### Key Statutes / Rules

| Rule | Application |
|---|---|
| RCS 33.33 to 33.35 | Commission to take evidence (Court of Session) |
| RCS 31.1 | Commission and diligence for recovery of documents (Court of Session) |
| OCR 1993 rr. 28 to 29 | Commission and diligence (Sheriff Court Ordinary Cause) |
| Act of Sederunt (Sheriff Court Rules) | Form of commissions and citations |
| Administration of Justice (Scotland) Act 1972 s.1 | Pre-action recovery of documents |
| Data Protection Act 2018 / UK GDPR | Privacy and proportionality in recovery |
| Hague Evidence Convention 1970 | Taking evidence abroad |
| Civil Jurisdiction and Judgments Act 1982 | Intra-UK evidence and enforcement |

### Procedure Comparison

| Step | FRCP (US) | Scotland |
|---|---|---|
| Initiate | Serve notice of deposition | Lodge minute for commission; obtain court order |
| Service | Process server or any non-party age 18+ | Sheriff Officer / Messenger-at-Arms |
| Government witness | Strict compliance with FRCP | Crown proceedings rules |
| Compel documents | Subpoena duces tecum | Commission and diligence with specification |
| Foreign witness | Letter rogatory | Letter of Request (Hague Convention or bilateral) |
| Time limit | Before discovery cut-off | Before proof diet; court controls timetable |
| Record | Stenographer / video | Commissioner's report and transcript |

---

**Key changes from original:**

- **Title** updated for Scotland/UK adaptation
- **Description** updated with [SCOTS] tag and Scottish procedure references
- **All US-specific content** replaced with Scottish equivalents (Commissions, Citations, Sheriff Officers)
- **FRCP 30/45** replaced with RCS 33.33/31.1 and OCR r. 28-29
- **Subpoena** replaced with Witness Citation / Commission and Diligence
- **30(b)(6) corporate representative** - noted as having no direct Scottish equivalent
- **AO 88A, process server, witness fee** - replaced with Scottish equivalents
- **Added Letter of Request** for foreign witnesses
- **Added data protection / privacy** considerations
- **Added Scotland/UK Adaptation** section with full comparison table
- **Templates** converted to Scottish documents (Minute for Commission, Specification of Documents, Citation, Letter of Request)

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
