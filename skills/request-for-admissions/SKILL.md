---
name: request-for-admissions
language: en
description: Drafts Notices to Admit under Scottish Court of Session Rules or Sheriff Court Ordinary Cause Rules for personal injury and general civil litigation. Extracts facts from case documents to produce numbered admission requests covering factual matters, document authenticity, and law-to-fact application. Use when issuing Notices to Admit, narrowing issues for proof, authenticating productions, or preparing for debate/hearing in Scottish civil litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notice to Admit (Scotland)

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

Drafts Notices to Admit under the Court of Session Rules or Sheriff Court Ordinary Cause Rules that narrow issues for proof, establish uncontroverted facts, and authenticate productions (documentary evidence).

## Prerequisites

Collect before drafting:

- **Pleadings** - initial writ (pursuer) or defences (defender), party names as capitioned, court reference number, court, sheriffdom
- **Case documents** - contracts, correspondence, medical records, invoices, photographs for authentication
- **Prior procedure** - completed specification of documents and commission; productions lodged; adjustments minute
- **Jurisdiction** - Court of Session (RCS General Rules) or Sheriff Court (OCR Chapter 14 / Chapter 18 rules on notices to admit)
- **Local practice notes** - Practice Notes of the relevant sheriffdom (Glasgow, Edinburgh, etc.) or Court of Session Practice Notes

## Quick Start

1. Extract key facts from uploaded documents (names, dates, amounts, exhibits)
2. Draft numbered requests in logical order: foundational facts → event facts → communications → damages → document authenticity
3. Include response instructions with deemed-admitted warning
4. Add caption, signature block, and certificate of service (intimation)

## Document Extraction

Before drafting, extract from uploaded documents:

| Extract | Examples |
|---|---|
| Party names & roles | Full legal names as capitioned |
| Key dates & timeline | Incident, intimation, treatment dates |
| Monetary amounts | Medical bills, lost earnings, valuations |
| Documents to authenticate | Contracts, letters, emails, medical records |
| Admitted allegations | Facts already admitted in defences |
| Communications | Emails, texts, letters with dates and participants |

## Output Structure

### Caption & Header

```
IN THE COURT OF SESSION (or SHERIFFDOM OF [NAME] AT [PLACE])

[FULL NAMES AND DESIGNATIONS OF PARTIES]

[DOCKET NUMBER]

NOTICE TO ADMIT

for the [Pursuer / Defender]

[Date]
```

### Introduction

- Identify parties by full legal name and designation, Cite governing rule (RCS rule or OCR rule for notices to admit)
- State purpose: narrow issues for proof, establish facts, authenticate productions

### Definitions

Include only when specialised terms appear repeatedly. Skip for straightforward cases.

### Numbered Requests

Organise in logical progression:

| Category | Order | Example |
|---|---|---|
| Foundational facts | First | Relationships, residence, employment, contractual terms |
| Event-specific facts | Second | Incident details, dates, locations, actions |
| Communications | Third | Sending/receipt of documents on specific dates |
| Damages | Fourth | Treatment, amounts claimed, liability basis |
| Document authenticity | Last | Genuineness of productions (see OCR Ch. 14 / RCS rules on productions) |

**Drafting rules:**

- One fact per request, never compound, Frame affirmatively ("Admit that X occurred"), not negatively, Use exact dates, names, amounts from case documents, No ultimate legal conclusions ("Admit you were negligent")
- No double negatives or trick phrasing, Attach documents as productions (or reference already lodged productions) for authenticity requests

**Bad:** "Admit that you received the notice on 15 March and failed to respond within thirty days."
**Good:** Two separate requests, one for receipt, one for response timing.

### Response Instructions

Include all of:

- **Response options:** admit, deny, or state in detail why party cannot truthfully admit or deny
- **Deadline:** periods specified by the relevant rule (typically 14 to 21 days after intimation; check specific RCS/OCR rule)
- **Deemed-admitted warning:** failure to respond within the specified time = matter deemed admitted
- **Reasonable inquiry obligation:** lack of knowledge invalid unless reasonable enquiries made
- **Objection requirements:** must state with specificity; objection does not excuse answering non-objected portions

### Signature Block

```
Signed: _______________

[Solicitor Name]
[Firm Name]
[Address]
[Phone] | [Email]
Solicitor for [Pursuer / Defender]
```

### Certificate of Service (Intimation)

- Date and method of intimation (by post, by facsimile, by email in accordance with relevant practice note, electronic intimation rules apply in many sheriffdoms)
- Each party/solicitor served with address or email, Signature of certifying solicitor

## Pitfalls & Checks

- **One fact per request** - compound requests invite partial denials
- **No legal conclusions** - "Admit you were negligent" is improper; stick to factual predicates
- **Number limits** - no strict statutory limit in Scottish rules, but court can control scope if oppressive
- **Judicial admissions** - admissions in a Notice to Admit are binding judicial admissions (stronger than pleading admissions)
- **Avoid fishing** - skip matters within the requesting party's own knowledge; requests should be based on known facts
- **Verify productions** - all referenced productions must be properly lodged with the court and intimated
- **Check practice notes** - some sheriffdoms have additional requirements for notices to admit
- **Tone** - neutral, professional, firm; never argumentative

## Scotland/UK Adaptation

This skill has been adapted from the US original for Scottish civil procedure.

| US Concept | Scotland/UK Equivalent |
|---|---|
| FRCP 36 (Requests for Admissions) | Notices to Admit under Scottish rules (RCS / OCR / Simple Procedure) |
| FRCP 36(a)(3) (30-day response) | Period specified by applicable court rule (typically 14 to 21 days; verify rule) |
| Deemed admission (failure to respond) | Deemed admission under Scottish rule (same effect, matter admitted) |
| Plaintiff | Pursuer |
| Defendant | Defender |
| Complaint (civil) | Initial Writ / Summons |
| Answer (pleading) | Defences / Defences stated |
| Discovery (general) | Commission and Diligence / Specification of Documents |
| Abbreviations | Scottish designation of parties used in capition (e.g. "AB" initials) |
| Caption styling | Court of Session or [Sheriffdom] at [Place] format; full designations |
| Exhibits | Productions (lodged with the court and open to inspection) |
| Certificate of Service | Certificate of Intimation (how, when, to whom the notice was intimated) |
| ECF (Electronic Case Filing) | Scottish Courts Online Portal / Civil Online / e-Intimation |
| Bar number / attorney registration | Practice number / Scottish solicitors roll number |
| FRCP (Federal Rules of Civil Procedure) | Court of Session Rules (RCS) / Sheriff Court Ordinary Cause Rules (OCR) / Simple Procedure Rules |
| State court rules | Sheriff Court rules vary by sheriffdom (Glasgow, Edinburgh, etc.) |
| Applicable statute of limitations | Prescription and Limitation (Scotland) Act 1973 |
| FRCP 26(b)(1) proportionality | Scots law: relevant and material to the action; oppression grounds |
| Judicial admission (pleading) | Judicial admission (Scottish pleadings: admitted on record) |
| US style discovery set labels | Scottish: notice intimated with reference to specific rule; set numbering less common |
| Personal injury (PI) | Personal injury - 3-year prescriptive period under s.17, Prescription and Limitation (Scotland) Act 1973 |

**Key differences from US practice:**

- Notices to Admit exist but are less common than US RFAs; Scottish practice relies more on record admissions and specification of documents, Parties must give enough specification to avoid oppressive or unspecified requests, The court controls the process more actively (judge/interlocutor may restrict scope)
- No formal equivalents of US "set numbering" and "first set, second set" conventions, Productions are lodged with the court and intimated to the other side; no formal request-for-production step required, Personal injury: 3-year triennium (Prescription and Limitation (Scotland) Act 1973 s.17)
- Simple Procedure has its own notice provisions (Part 11 of the Simple Procedure Rules)

**Required disclaimer on every output:**
> THIS IS A DRAFTING AID FOR SCOTTISH CIVIL PROCEDURE AND REQUIRES REVIEW BY A QUALIFIED SCOTTISH SOLICITOR BEFORE USE. IT DOES NOT CONSTITUTE LEGAL ADVICE.

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
