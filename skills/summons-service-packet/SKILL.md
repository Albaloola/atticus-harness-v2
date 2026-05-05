---
name: summons-service-packet
language: en
description: Atticus UK/Scots legal skill for summons-service-packet. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Summons and Service Packet (Scotland/UK Adaptation)

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

Drafts a complete initial filing package to commence a civil action in the Scottish courts and effectuate valid service on all defenders.

## Prerequisites

Gather before drafting:

- **Claim/allegations** - factual basis, parties, claims, value
- **Party identification** - full legal names, addresses, entity types, domicile
- **Jurisdictional facts** - basis (domicile, place of delict, place of performance of contract), value, appropriate forum
- **Target court** - Sheriff Court (simple/ordinary procedure) or Court of Session; local rules reviewed for procedural requirements

## Packet Components

Draft all components in filing order with identical headings across every document.

### 1. Initial Writ (for Sheriff Court) / Summons (for Court of Session)

The principal document commencing proceedings.

**Initial Writ (Sheriff Court, Ordinary Cause):**

1. **Heading** - Sheriffdom and Sheriff Court, parties (Pursuer / Defender) with full names and addresses
2. **Conclusion** - what the Pursuer asks the court to grant (decree for payment, implement, interdict, etc.)
3. **Condescendence** - numbered paragraphs stating the facts constituting the cause of action
4. **Pleas-in-Law** - legal propositions the Pursuer relies on (e.g. "The Defender, having negligently caused loss to the Pursuer, is bound to make reparation therefor")
5. **Statement of Valuation** - for personal injury claims: type and value of claims (Schedule of Past and Future Loss)
6. **Signature** - solicitor or party
7. **Service** - warrant for citation added by the court

**Summons (Court of Session):**

1. **Heading** - Court of Session, parties (Pursuer / Defender)
2. **Conclusion/Instance** - identical structure to Initial Writ with Court of Session format
3. **Condescendence** - numbered factual statements
4. **Pleas-in-Law** - legal propositions
5. **Signature** - counsel or solicitor
6. **Service** - signeted summons with warrant for service

### 2. Service / Citation

**Who serves**: Sheriff Officers (Sheriff Court) or Messengers-at-Arms (Court of Session). The court issues a warrant for service; service is executed by the officer.

**Methods by Defender Type**:

| Defender Type | Primary | Alternatives |
|---|---|---|
| Individual (within Scotland) | Personal service by Sheriff Officer | Postal service (recorded delivery) if instructed; service at dwelling |
| Individual (outwith Scotland) | Service in terms of the rules | Hague Convention (foreign); service by post if permitted |
| Company (registered in Scotland) | Service at registered office by Sheriff Officer | Postal service at registered office |
| Company (registered elsewhere UK) | Service at UK registered address | Service at principal place of business |
| Out-of-UK company | Service as directed by the court | Hague Convention; EC Service Regulation (EU, transitional) |
| The Crown / Government | Service on the appropriate solicitor (Scottish Government) | Strict compliance with Crown Proceedings Act 1947 |

**Service in Simple Procedure** (value ≤ £5,000): Claim form (Form S1) served by Sheriff Officer or postal service.

### 3. Supporting Documents

- **Inventory of Productions** - list of documents being lodged with the initial writ
- **Statement of Valuation** (personal injury claims) - annex with schedule of damages
- **Medical report** (personal injury claims) - if available at lodging
- **Receipt for court fee** - payable on lodging

### 4. Proof of Service

Provided by the Sheriff Officer / Messenger-at-Arms as a certificate of service in the prescribed form, including:

- Person served (identity, address, relationship to defender)
- Date/time/location of service, Method (personal / postal / EDPS)
- Documents served, Executor details (name, business address, court appointment number)
- Signed under oath

### 5. Supplementary Documents (if applicable)

- Caveat, if Defender has lodged a caveat, Pursuer must give intimation before service, Application for interdict, additional documents required for interim interdict, Application for commission and diligence, for early recovery of documents, Application for arrestment on the dependence, to freeze defender's assets (requires court order and caution)
- Edictal citation, when Defender's whereabouts are unknown (court order required)

## Filing Checklist

- [ ] Initial Writ / Summons with correct heading, conclusions, condescendence, pleas-in-law
- [ ] Inventory of Productions
- [ ] Statement of Valuation (personal injury)
- [ ] Copy for each Defender + court copy + pursuer copy
- [ ] Court fee (check current Sheriff Court / Court of Session fee; see SCTS website)
- [ ] Lodge via Civil Online (Sheriff Court) or e-filing (Court of Session) - or paper at court office
- [ ] Warrant for citation, ensure court grants before instructing service
- [ ] Check if Defender has lodged a caveat

## Critical Rules

- **Heading consistency** - identical party names, spelling, and order across all documents; mismatches cause rejection
- **Service window** - Initial Writ must include warrant for service; service must be executed timeously (Sheriff Court Ordinary Cause: defender must enter appearance within 21 days of service)
- **Caveats** - always search the caveat register before serving; failure to intimate to a caveator renders service null
- **Edictal citation** - requires court order on motion; supporting affidavit of diligent search needed
- **Personal injury actions** - pre-action protocol (voluntary but encouraged); prescriptive period is 3 years
- **Time limits** - prescriptive period (5 years for delict; 3 years for personal injury) and triennium (3 years from date of injury/date of knowledge for PI)

## Scotland/UK Adaptation

### Key Differences from US Version

| US Concept | Scotland/UK Equivalent |
|---|---|
| Plaintiff | Pursuer |
| Defendant | Defender |
| Complaint | Initial Writ (Sheriff Court) / Summons (Court of Session) |
| Summons (FRCP form) | Initial Writ / Court of Session Summons |
| Civil Cover Sheet | No direct equivalent; court identifies case type on registration |
| FRCP 4(c)(2) - who may serve | Sheriff Officer (Sheriff Court) / Messenger-at-Arms (Court of Session) |
| Personal service by process server | Service by Sheriff Officer (licensed court officer) - no equivalent to private process server |
| Service by plaintiff prohibited | Pursuer cannot serve personally; same rule applies |
| Substituted service | Service at dwelling; court may authorise other methods |
| Default judgment (no response) | Decree in absence (Sheriff Court) / Decree by default (Court of Session) - after expiry of induciae |
| FRCP 4(m) - 90-day service window | No fixed statutory service window; service must be instructed promptly; induciae (response period) set by court |
| Corporate disclosure (FRCP 7.1) | No equivalent in Scottish procedure |
| Diversity jurisdiction | No equivalent; jurisdiction based on domicile, place of delict, place of performance |
| $75,000 amount in controversy | No minimum value for Sheriff Court; value determines procedure tier |
| Long-arm statute | Jurisdiction under Civil Jurisdiction and Judgments Act 1982 / domicile rules |
| Hague Convention service | Same rules apply for service outside the UK |
| Jury demand | Civil jury available in Court of Session (personal injury) and Sheriff Court (certain actions); not assumed |

### Key Statutes / Rules

| Rule / Statute | Application |
|---|---|
| Act of Sederunt (Sheriff Court Ordinary Cause Rules) 1993 | Ordinary cause procedure |
| Act of Sederunt (Simple Procedure) 2016 | Claims ≤ £5,000 |
| Rules of the Court of Session 1994 | Court of Session procedure |
| Civil Jurisdiction and Judgments Act 1982 | Jurisdiction within UK and EU |
| Prescription and Limitation (Scotland) Act 1973 | Time limits for bringing claims |
| Crown Proceedings Act 1947 | Claims against the Crown |
| Sheriff Officers and Messenger-at-Arms Fees Orders | Service fees |

### Court Hierarchy for Civil Claims

| Claim Value | Court | Procedure |
|---|---|---|
| ≤ £5,000 | Sheriff Court | Simple Procedure |
| £5,000, £100,000 | Sheriff Court | Ordinary Cause |
| Over £100,000 | Sheriff Court or Court of Session | Ordinary Cause |
| High value / complex | Court of Session | Ordinary Action |
| Appeals | Sheriff Appeal Court / Inner House / UKSC | Varies |

### Prescribed Forms

- **Simple Procedure**: Form S1 (Claim), Form S2 (Response)
- **Ordinary Cause**: Initial Writ (no prescribed form; follows OCR 1993 format)
- **Court of Session**: Summons (follows RCS 1994 format)
- **Personal injury**: Additional schedule of valuation and medical reports

---

**Key changes from original:**

- **Title** updated for Scotland/UK adaptation
- **Description** updated with [SCOTS] tag and Scottish court references
- **All US-specific content** replaced with Scots equivalents (Pursuer/Defender, Initial Writ, Sheriff Officers, etc.)
- **Civil Cover Sheet, FRCP 7.1, diversity jurisdiction** removed, no Scottish equivalents
- **Service rules** converted to Scottish Sheriff Officer / Messenger-at-Arms system
- **Added caveat, arrestment, edictal citation** - Scottish procedural features
- **Added court hierarchy and procedure tiers** for Scotland
- **Added Scotland/UK Adaptation** section with full comparison table
- **Jurisdiction** updated to Civil Jurisdiction and Judgments Act 1982
- **Prescription** updated to Prescription and Limitation (Scotland) Act 1973

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
