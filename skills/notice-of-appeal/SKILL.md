---
name: notice-of-appeal
language: en
description: Drafts a Notice of Appeal (Reclaiming Motion) to initiate appellate review of a sheriff court or Court of Session judgment or interlocutor in Scotland. Use when filing a reclaiming motion to the Inner House, appealing to the Sheriff Appeal Court, or otherwise invoking appellate review after an adverse ruling. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Reclaiming Motion / Note of Appeal (Scotland)

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

Drafts a competent appellate document that invokes appellate review and preserves the appellant's right to challenge a court ruling in the Scottish civil courts. The document contains no substantive arguments, it invokes jurisdiction only.

## Quick Start

Gather before drafting:

1. **Appealable interlocutor / judgment** - final interlocutor, partial interlocutor, or other appealable decision
2. **Exact date of interlocutor** - date of issue or extract (check the interlocutor sheet)
3. **Party names** - full legal names with original designations and appellate designations (appellant/respondent)
4. **Case numbers** - original court case number
5. **Court names** - original court and appellate court
6. **Filing deadline** - confirmed per deadline table below
7. **Solicitor / counsel info** - name, firm, address, phone, email, DX

## Filing Deadlines

### Court of Session, Reclaiming Motion

| Context | Deadline | Authority |
|---|---|---|
| General reclaiming (Inner House) | 21 days from date of interlocutor | RCS 38.4(1) |
| Automatic interest clause (certain commercial actions) | 14 days | Check commercial court rules |
| Jury trial verdict | 14 days (motion for new trial) | RCS 38.5 |
| Recall of decree by default | 14 days | RCS 19.2 |

### Sheriff Appeal Court

| Context | Deadline | Authority |
|---|---|---|
| Final judgment (Ordinary Cause) | 28 days from date of judgment | Sheriff Appeal Court Rules 2021 |
| Interlocutory decree | 14 days (with leave) | SACR 2021 |
| Summary Cause | 14 days | Summary Cause Rules |

**Warning**: Deadlines are statutory and may be subject to extension only with court permission. Confirm exact deadline from the interlocutor date before drafting.

## Document Types

### A. Reclaiming Motion (Court of Session)

A reclaiming motion is noted in the Inner House roll. No formal "Notice of Reclaiming Motion" document is filed, the motion is enrolled and a Note of Appeal (written submissions) follows. Check RCS Chapter 38 for current procedure.

### B. Note of Appeal (Sheriff Appeal Court)

For appeals from the Sheriff Court to the Sheriff Appeal Court, a formal Note of Appeal is lodged.

### Template: Note of Appeal to the Sheriff Appeal Court

```
SHERIFF APPEAL COURT

[APPEAL COURT ADDRESS]

Appeal No: [Number]

In the appeal by

[PARTY NAME(S)],
    Appellant(s),

against

[PARTY NAME(S)],
    Respondent(s),

from the Sheriff Court at [LOCATION].

                    NOTE OF APPEAL

The Appellant appeals against the [interlocutor / interlocutory decree / final judgment] of the Sheriff at [Location] dated [Date] in the case of [Party A] v [Party B].

The Appellant contends that the Sheriff erred in law in that:

1. [Ground of appeal 1]
2. [Ground of appeal 2]
...

The Appellant seeks [order sought, e.g., recall of the interlocutor and granting of decree in favour of the Appellant / new proof / other disposal].

The Appellant's address for service is:

[Solicitor / Party name]
[Address]
[Phone]
[Email]
[DX Number]

Date: [Date]

Signed: ______________________________
[Solicitor / Appellant]
```

### Completion Checklist

- [ ] Correct appellate court identified (Inner House or Sheriff Appeal Court)
- [ ] All party names with original and appellate designations
- [ ] Original case number referenced
- [ ] Specific identification of interlocutor/judgment appealed
- [ ] Exact date of interlocutor
- [ ] Grounds of appeal stated (Note of Appeal format)
- [ ] Signature block with full contact info
- [ ] Service on all parties and the original court

## Common Pitfalls

- **Wrong court** - civil appeals from Sheriff Court go to the Sheriff Appeal Court; from the Outer House to the Inner House; from the Inner House to the UK Supreme Court
- **Wrong date** - use the interlocutor date from the court's interlocutor sheet, not the date the judgment was issued in draft
- **Substantive arguments in reclaiming motion** - the reclaiming motion itself is procedural; grounds of appeal come in the Note of Argument
- **Service gaps** - serve all parties and the original court clerk per rules
- **Format noncompliance** - check RCS Chapter 38 / Sheriff Appeal Court Rules 2021 for formatting requirements
- **Appellant litigant in person** - include appellant's own address and contact info in signature block
- **Multiple appellants** - name each; a single document may cover all if rules permit

## Scotland/UK Adaptation

- **Terminology**: "Reclaiming motion" replaces "appeal" for Court of Session. "Note of Appeal" for Sheriff Appeal Court. "Appellant/Respondent" replaces "appellant/appellee."
- **No federal/state division**: Scottish civil courts have a single hierarchy: Sheriff Court → Sheriff Appeal Court → Court of Session (Inner House) → UK Supreme Court.
- **Interlocutor replaces "order/judgment"**: Scottish courts issue interlocutors (court orders) rather than federal-style judgments.
- **Time limits differ**: Scottish appeal time limits are generally shorter than the US federal 30-day rule. Verify against the specific court rules.
- **Leave to appeal**: Some interlocutory decisions require leave to appeal, check RCS 38.3 and Sheriff Appeal Court Rules 2021.
- **Sist (stay) pending appeal**: A sist (stay of execution) may be required while appeal is pending. This is a separate application.
- **UK Supreme Court appeals**: From the Inner House, appeals go to the UK Supreme Court with permission (see UK Supreme Court Rules).
- **Solemn procedure (criminal)**: Criminal appeals follow a separate procedure under the Criminal Procedure (Scotland) Act 1995 - not covered here.

[SCOTS: Note] The US Notice of Appeal format is replaced by Scottish procedures which differ significantly. Two main routes exist: (a) Reclaiming Motion to the Inner House (Court of Session) from the Outer House or certain tribunals; (b) Note of Appeal to the Sheriff Appeal Court from the Sheriff Court. Time limits, documents, and procedures are distinct. This skill preserves the underlying methodology (identifying the appealable decision, verifying deadlines, formatting the document) while replacing all US-specific content with Scottish equivalents.

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
