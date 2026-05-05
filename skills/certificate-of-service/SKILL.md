---
name: certificate-of-service
language: en
description: Atticus UK/Scots legal skill for certificate-of-service. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Certificate of Service / Execution of Service [SCOTS]

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

Generates a certificate of service (also known as execution of service) attesting that court documents were served on or intimated to all parties in accordance with the rules of the Scottish Courts (Sheriff Court, Court of Session, Simple Procedure).

> **[SCOTS: Note]** This skill has been adapted from the US FRCP Rule 5 model. Scottish civil procedure has different terminology and rules, see the Scotland/UK Adaptation section.

## Quick Start

Gather from the user:
1. Document title being served / intimated
2. Court and case reference number (Sheriff Court / Court of Session)
3. Service method (or infer from court type / procedure)
4. Names and addresses of all parties or their solicitors
5. Signing party details (solicitor, sheriff officer, or party litigant)

Then produce a certificate matching the output template below.

## Output Template

```
CERTIFICATE OF SERVICE / EXECUTION OF SERVICE

I, [NAME], [solicitor / sheriff officer / party litigant], certify that on
[DATE], I served / intimated a true and correct copy of the foregoing
[DOCUMENT TITLE] on the following in accordance with the [Sheriff Court Rules /
Court of Session Rules / Simple Procedure Rules]:

By [SERVICE METHOD]:

[PARTY/SOLICITOR LIST with addresses]

Signed:

Dated: [DATE]

[SOLICITOR NAME / SHERIFF OFFICER NAME]
[FIRM / BUSINESS NAME]
[ADDRESS]
[PHONE]
[EMAIL]
[SOLICITOR REFERENCE / SHERIFF OFFICER NUMBER]
```

## Service Methods (Scottish Civil Procedure)

### Sheriff Court (Ordinary Cause)

| Method | Certificate Language | Authority / Notes |
|--------|---------------------|-------------------|
| Sheriff Officer (formal service) | "by personal service by a sheriff officer on [DATE] at [ADDRESS] in accordance with the Act of Sederunt (Sheriff Court Ordinary Cause Rules) 1993" | Formal service for initial writs, decrees, and court orders. Sheriff Officer executes and returns the execution of service. |
| Recorded Delivery / Registered Post | "by posting a true and correct copy to [ADDRESS] by recorded delivery post (signed-for delivery)" | Permitted for certain steps where the address is the party's known address. |
| Ordinary Post (further procedure) | "by posting a true and correct copy to [ADDRESS] by first-class ordinary post" | For certain further procedure steps where not requiring formal service. |
| ECF / e-service | "via the Scottish Courts and Tribunals Service Civil Online / electronic case management system" | For parties registered on the electronic system. |
| Solicitor-to-solicitor service | "by email to [EMAIL] being the known email address of [PARTY/SOLICITOR]" | Permitted where solicitor has consented. |

### Sheriff Court (Simple Procedure)

Simple Procedure uses distinct forms and rules under the Act of Sederunt (Simple Procedure) 2016.

| Method | Certificate Language |
|--------|---------------------|
| Sheriff Officer | "by personal service by a sheriff officer in accordance with Simple Procedure Rules rule [__]" |
| Recorded Delivery | "by recorded delivery signed-for post to the party's address" |
| Ordinary Post (where permitted) | "by ordinary post in accordance with Simple Procedure Rules rule [__]" |
| Sheriff Officer (postal service) | "by sheriff officer posting a copy by recorded delivery" |
| E-service | "via the Simple Procedure online portal" |

### Court of Session

| Method | Certificate Language | Authority |
|--------|---------------------|-----------|
| Sheriff Officer | "by personal service or intimation by a sheriff officer" | RCS (Rules of the Court of Session) Chapter 16 |
| Recorded Delivery / Registered Post | "by recorded delivery post addressed to" | RCS 16.4 |
| Solicitor acceptance of service | "by intimation to [SOLICITOR] who accepted service on behalf of [PARTY]" | RCS 16.1 |
| Electronic (e-service) | "via the Civronics / Scottish Courts electronic system" | Where registered for electronic service |

## Workflow

1. **Identify the court and procedure**: Sheriff Court Ordinary Cause / Sheriff Court Simple Procedure / Court of Session / Sheriff Appeal Court.
2. **Identify the document**: a claim initiating document (initial writ or summons) requires formal service by sheriff officer; further procedure documents may be served by post.
3. **Formal service (initial steps)**: Use sheriff officer service for initial writs, appeals, and orders. The sheriff officer completes an execution of service form, which is lodged with the court.
4. **Further procedure (post-initial steps)**: Once a party has entered appearance / lodged defences, further documents may be served by:
   - Post (recorded delivery)
   - Solicitor acceptance (solicitor signs receipt)
   - Hand delivery to solicitor's office
5. **Date alignment**: Service date = date of delivery. In postal service, the date of posting (for time calculation purposes).
6. **Multiple documents**: List all in one certificate - "the foregoing DEFENCES, COUNTERCLAIM, and LIST OF DOCUMENTS."
7. **Pro se / party litigants**: May serve documents by recorded delivery or ordinary post, but cannot use sheriff officer procedure directly without instruction.

## Key Rules

- **Ordinary Cause Rules 1993** (O.C.R. 1993, SSI 1993/1956): Rule 5.2 to 5.6 (service, intimation).
- **Simple Procedure Rules 2016** (SSI 2016/200): Rules 5.1 to 5.10 (service methods).
- **Rules of the Court of Session 1994** (SI 1994/1443): Chapter 16 (service and intimation).
- **Sheriff Appeal Court Rules**: Service follows similar methods.
- **Act of Sederunt (Service of Documents) 2021**: Updates to electronic service provisions.
- **Citation**: Scottish service of initiation documents (citation of defender) follows specific procedural rules, different from US summons practice.

## Examples

### Sheriff Court Ordinary Cause, Initial Writ (Sheriff Officer Service)

```
EXECUTION OF SERVICE / CERTIFICATE OF SERVICE

I, [SHERIFF OFFICER NAME], a sheriff officer duly appointed, certify that on
[DATE] at [TIME], I duly served upon [DEFENDER NAME] at [ADDRESS] a true and
correct copy of the INITIAL WRIT AND STATEMENT OF CLAIM in respect of the
above-captioned cause, together with Form OC1 (Notice of Intention to Defend)
and a copy of the timetable for the case.

Method of service: Personal service in accordance with Rule 5.2 of the Ordinary
Cause Rules 1993.

Witness: [WITNESS NAME]

Dated: [DATE]

____________________________
[SHERIFF OFFICER NAME]
[SHERIFF OFFICER FIRM]
[ADDRESS]
[PHONE]
[SHERIFF OFFICER REFERENCE / REGISTRATION NUMBER]
```

### Court of Session, Further Procedure (Solicitor Service)

```
CERTIFICATE OF SERVICE / INTIMATION

I certify that on [DATE], I intimated a true and correct copy of the foregoing
DEFENCES AND COUNTERCLAIM to the following:

By email to the solicitors who accepted service:
  [SOLICITOR FIRM] for [PARTY]
  [EMAIL ADDRESS]

Dated: [DATE]

____________________________
[SOLICITOR NAME]
[FIRM]
[ADDRESS]
[PHONE]
[EMAIL]
[REFERENCE]
```

### Simple Procedure, Postal Service

```
CERTIFICATE OF SERVICE

I certify that on [DATE], I served the foregoing CLAIM FORM (Form SP1) by posting
a true and correct copy by recorded delivery, first-class post, addressed to:

[DEFENDER NAME]
[DEFENDER ADDRESS]

in accordance with Rule 5.2 of the Simple Procedure Rules 2016.

Dated: [DATE]

____________________________
[PURSUER NAME/ SOLICITOR]
[CONTACT DETAILS]
```

## Pitfalls

| Issue | Resolution |
|-------|------------|
| Defender's address unknown | Apply to court for alternative service (sheriff court / Court of Session has power to grant warrant for alternative service) |
| Defender is outside Scotland | Service may be permitted by a method specified in the court's warrant; intimation may be required to the Secretary of State for Foreign, Commonwealth & Development Affairs |
| Company service | Serve at registered office address (Companies House) or Head Office. For Scottish companies, service follows section 1113 of the Companies Act 2006 |
| Sheriff officer not available | A solicitor may serve certain documents personally (but cannot execute formal citation/initial writ service without sheriff officer) |
| Pro se party without address | Use address of record from court file; if none, apply to court for directions |
| Time limits (postal service) | Ordinary post: date of posting may be treated as date of service for counting time limits; recorded delivery: date of delivery is date of service |
| English cross-border service (Civil Jurisdiction and Judgments Act 1982) | Service on a party in England may proceed under the relevant cross-border provisions |

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from the US FRCP Rule 5 model of certificates of service. Scottish civil procedure uses different terminology and procedures.

### Key Differences from the US Original

| US Concept | Scottish Equivalent |
|------------|-------------------|
| FRCP Rule 5 (service) | Ordinary Cause Rules 1993 / Court of Session Rules Chapter 16 / Simple Procedure Rules 2016 |
| Service by ECF/CM/ECF | Service via Scottish Courts Civil Online / Simple Procedure e-portal (limited) |
| FRCP 6(d) +3 days for mail | No automatic +3 days in Scotland; time calculations follow specific rules |
| US Mail (first class) | Recorded delivery or ordinary post (specific rules per procedure) |
| Certificate of Service | Execution of Service / Certificate of Service / Certificate of Intimation |
| Attorney signature + bar number | Solicitor signature + firm reference (no bar number in Scotland) |
| Pro se self-represented | Party litigant (not "pro se") |
| State court service variations | Scotland has a unified system: Sheriff Court (Ordinary Cause / Simple Procedure) and Court of Session |
| Process Server / Private server | Sheriff Officer (messenger-at-arms for Court of Session; sheriff officer for Sheriff Court) |
| FRCP 4(i) - government service | Service on Scottish Ministers / UK Government in Scotland follows specific rules |
| Federal / State split | Scotland has a single civil justice system; no federal/state distinction |

### Key Scottish Civil Procedure Rules
- **Ordinary Cause Rules 1993** (SSI 1993/1956) - Sheriff Court
- **Simple Procedure Rules 2016** (SSI 2016/200) - Small claims / simplified process
- **Rules of the Court of Session 1994** (SI 1994/1443) - Court of Session
- **Sheriff Appeal Court Rules** - appeals from Sheriff Court
- **Act of Sederunt (Service of Documents) 2021** - electronic service provisions

### Forms, Execution of Service (sheriff officer form, completed by sheriff officer)
- Form OC1 (Notice of Intention to Defend) - Ordinary Cause, Form SP1 (Claim Form) - Simple Procedure, Various Court of Session forms available at: https://www.scotcourts.gov.uk/rules-and-practice/forms

### Key Service Actors
- **Sheriff Officer** - independent officer of court who serves documents and executes diligence in Sheriff Court
- **Messenger-at-Arms** - equivalent to sheriff officer but for Court of Session service
- **Solicitor** - may serve certain further-procedure documents (not initial writs without officer)
- **Party litigant** - may serve further-procedure documents by post

### References, Scottish Courts and Tribunals Service forms: https://www.scotcourts.gov.uk/rules-and-practice/forms, Simple Procedure forms: https://www.scotcourts.gov.uk/rules-and-practice/forms/simple-procedure-forms, Sheriff Court forms: https://www.scotcourts.gov.uk/rules-and-practice/forms/sheriff-court-forms, Court of Session forms: https://www.scotcourts.gov.uk/rules-and-practice/forms/court-of-session-forms, Sheriff Officer rules, Debtors (Scotland) Act 1987; Sheriff Officers (Scotland) Rules

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
