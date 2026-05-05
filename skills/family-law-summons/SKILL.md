---
name: family-law-summons
language: en
description: Drafts procedurally compliant Initial Writs or applications for family law proceedings in Scotland covering dissolution of marriage/civil partnership, contact/residence, financial provision, and other domestic proceedings. Covers court-specific formatting, mandatory statutory warnings, response deadlines adjusted by service method, service of process instructions, and certificate of service. Use when initiating family law litigation in Scottish courts, preparing Initial Writs for service, or drafting notice documents for family law cases. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Family Law Initial Writ (Scotland)

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

Drafts a family law Initial Writ (Sheriff Court) or Summons (Court of Session) that establishes court jurisdiction and provides valid notice to the other party. All party names, case type, and relief must match the accompanying application exactly.

[SCOTS: Note: In Scotland, family law proceedings are initiated by Initial Writ (Sheriff Court) or Summons (Court of Session). The term "Summons" in this context refers to Court of Session practice, not a US-style summons. For dissolution of marriage, the action is raised under the Family Law (Scotland) Act 2006. US-style "ATROs" do not exist; Scots law has interim interdict and interim orders for financial provision.]

## Prerequisites

1. **Party names** - full legal names of pursuer and defender
2. **Filing jurisdiction** - sheriffdom and Sheriff Court district (or Court of Session)
3. **Case type** - dissolution of marriage / civil partnership, contact, residence (custody/access), financial provision, protection order
4. **Accompanying application** - must align on parties, case type, and relief sought
5. **Court rules** - Ordinary Cause Rules (Family Actions) / Court of Session Rules

## Output Structure

### 1. Court Header and Instance

| Element | Requirement |
|---|---|
| Court name | Sheriff Court (full sheriffdom and court name) or Court of Session |
| Court address | Physical address of filing courthouse |
| Sheriffdom / Division | Jurisdiction identifiers |
| Instance | Pursuer first, Defender second; names match exactly |
| Case number | Blank field for sheriff clerk assignment |
| Title | "INITIAL WRIT" or "SUMMONS" as appropriate |

[SCOTS: Note: Use Form F1 (Family Actions in the Sheriff Court) per the Act of Sederunt (Family Actions in the Sheriff Court). Check current rules on whether minor children are named in the instance or only in the condescendence.]

### 2. Notice to Defender

- [ ] Statement that an Initial Writ/Summons has been filed
- [ ] Obligation to lodge Notice of Intention to Defend (Form 7) with the court
- [ ] **Response deadline** adjusted for service method:
  - Personal service: 21 days (Sheriff Court Ordinary Cause)
  - Service by sheriff officer: as per Act of Sederunt
  - Service by post: check extended period
- [ ] Filing instructions (sheriff clerk address, hours)
- [ ] Requirement to serve copy on pursuer or pursuer's solicitor
- [ ] Acceptable response service methods (sheriff officer, recorded delivery)
- [ ] Court-specific response forms

### 3. Default Consequences

- [ ] Warning that failure to respond may result in decree by default
- [ ] Relief grantable by default: dissolution, financial provision, residence/contact orders, expenses

### 4. Mandatory Statutory Warnings

Include as required by the Act of Sederunt:

- [ ] **Dissolution of marriage/civil partnership** - ground of irretrievable breakdown (s. 1, Family Law (Scotland) Act 2006)
- [ ] **Financial provision** - obligation to lodge full financial statement (Form F9 or equivalent)
- [ ] **Children** - welfare principle (s. 11, Children (Scotland) Act 1995); child welfare report may be ordered
- [ ] **Interim orders** - court may make interim interdict, residence, contact, or financial orders

> **Critical**: Use exact statutory wording. Do not paraphrase. If uncertain, omit and flag with [VERIFY].

### 5. Service of Process Instructions

| Method | Requirements |
|---|---|
| Personal | Sheriff officer; officer must be 18+ and not a party |
| Substituted / postal | To home or business address (if sheriff court rules permit) |
| By post (recorded delivery) | Only if sheriffdom practice note permits for family actions |
| By newspaper advertisement | Requires court order + showing of diligent search |
| Edinburgh Gazette | For certain family proceedings if address unknown |

Include geographic limitations, completion deadlines, and filing location for response.

### 6. Certificate of Service

- [ ] Server's full name, address, and declaration (sheriff officer or solicitor)
- [ ] Method of service, date, time, and location
- [ ] Description of person served (personal) or substitute's name and relationship (substituted)
- [ ] Mailing confirmation (substituted/postal service)
- [ ] Declaration with signature line

### 7. Authentication Block

- Sheriff clerk signature line with date field and space for court seal, Ceremonial language if required, Verify wet signature vs. electronic signature rules for the court

## Guidelines

- **Cross-reference**: party names, case type, and relief must match the petition exactly
- **Response deadlines**: verify calculation against current Act of Sederunt for the specific service method
- **Formatting**: follow Ordinary Cause Rules precisely, A4, margins, font, line spacing
- **Plain language**: write notice sections accessibly for litigants in person
- **Statutory citations**: verify all code references are current; mark uncertain citations with [VERIFY]
- **Verbatim warnings**: never paraphrase mandatory statutory language, include exactly or omit and flag
- **Sheriffdom variations**: check for local practice notes that supersede the default rules
- **Family Law (Scotland) Act 2006** governs dissolution; Children (Scotland) Act 1995 governs children matters

## Scotland/UK Adaptation

This skill has been adapted from a US family law summons to the Scottish family law system.

### Key Differences

| US Concept | Scottish Equivalent |
|---|---|
| Summons (Family Law) | Initial Writ (Sheriff Court) / Summons (Court of Session) |
| Petitioner / Respondent | Pursuer / Defender |
| Divorce | Dissolution of marriage (Family Law (Scotland) Act 2006) |
| Custody / Visitation | Residence / Contact (Children (Scotland) Act 1995) |
| Child support | Child maintenance (Child Maintenance Service) |
| ATROs (Automatic Temporary Restraining Orders) | No direct equivalent; seek interim interdict |
| Superior Court / Family Court | Sheriff Court / Court of Session |
| Personal service (process server) | Sheriff officer service |
| E-filing (CM/ECF) | Civil Online (limited family coverage) |
| Marital property division | Financial provision on divorce (s. 8-14, 2006 Act) |
| Spousal support (alimony) | Periodical allowance (limited circumstances) |

### Applicable Legislation, Family Law (Scotland) Act 2006
- Children (Scotland) Act 1995
- Civil Partnership (Scotland) Act 2020
- Courts Reform (Scotland) Act 2014
- Act of Sederunt (Family Actions in the Sheriff Court) [VERIFY current version]

### Forms
Scottish family law actions use prescribed forms from the Scottish Courts and Tribunals Service (www.scotcourts.gov.uk):
- Form F1 - Initial Writ (Family Actions)
- Form F9 - Financial Statement, Form F11 - Minute for interdict, Other forms per specific action type

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
