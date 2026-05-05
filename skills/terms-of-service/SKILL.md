---
name: terms-of-service
language: en
description: Atticus UK/Scots legal skill for terms-of-service. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Terms of Service Agreement (UK/Scots Law)

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

Drafts an enforceable TOS tailored to the service model, data flows, and jurisdictional compliance needs under UK law (governed by Scots or English law).

## Quick Start

Gather before drafting:

| Item | Required | Notes |
|---|---|---|
| Company legal name, registered address, contact email | Yes | Contracting entity (check Companies House) |
| Service name and URL/app identifiers | Yes | Defines "Service" |
| Eligibility/age minimum | Yes | Age Appropriate Design Code (Children's code) if under 18 [VERIFY] |
| Countries/territories served | Yes | Triggers UK GDPR / other |
| Payment terms | If paid | Auto-renew, cancellation, refunds |
| IP assets | Yes | Trademarks, content ownership |
| UGC + moderation approach | If UGC | CDPA 1988 takedown procedure |
| APIs/integrations | If any | Third-party terms |

## Core Workflow

### 1. Clause Selection

| Clause | Include When | Key Points |
|---|---|---|
| Acceptance mechanism | Always | Clickwrap preferred; continued-use fallback |
| Accounts & security | Accounts exist | Credentials, 2FA, responsibility |
| Acceptable use | Always | Prohibited conduct list |
| UGC licence | UGC exists | Scope, duration, takedown |
| IP ownership | Always | Service IP, limited licence |
| Payments | Paid tiers | Billing, VAT, refunds |
| Termination | Always | For cause/at will, effects |
| Disclaimers | Always | AS IS / AS AVAILABLE (subject to Consumer Rights Act 2015) |
| Liability cap | Always | Cap amount, exclusions, carve-outs |
| Indemnity | B2B or UGC | IP claims, violations |
| Dispute resolution | Always | Governing law, jurisdiction/arbitration |

### 2. Drafting Sequence

1. **Definitions & acceptance** - clickwrap + versioning/effective date
2. **Eligibility & authority** - age (13+ with parental consent scrutiny under Children's code), entity authority
3. **Account rules** - registration, security, accuracy
4. **Acceptable use** - law compliance + prohibited conduct
5. **UGC & IP** - ownership, licence grant, feedback assignment
6. **Third-party services** - links, integrations, no endorsement
7. **Payment terms** - if applicable; indicate VAT treatment
8. **Termination & suspension** - rights, effect, survival
9. **Disclaimers & limitation of liability** - subject to Consumer Rights Act 2015 for consumers
10. **Indemnification** - if applicable (more limited for consumers)
11. **Dispute resolution** - governing law, jurisdiction, arbitration
12. **Boilerplate** - severability, assignment, notices

### 3. Prohibited Conduct (always include)

- Illegal activity, fraud, misrepresentation, Malware, phishing, security bypass, Unauthorised access, scraping, rate-limit evasion, IP infringement or circumvention of protections, Harassment, hate, abusive conduct, Interference with service availability

### 4. Dispute Resolution Selection

| Option | Use When | Notes |
|---|---|---|
| Court litigation | Default or consumer-facing | Specify Scottish court (Sheriff Court/Court of Session) or English court; no jury waiver needed (no civil jury in Scotland) |
| Arbitration + no class/group proceedings waiver | B2B | LCIA / Scottish Arbitration Centre; note group proceedings opt-in nature under Scots law |
| EU consumer carve-out | Serving EU/EEA | Mandatory local rights preserved; post-Brexit, separate EU terms may be needed |

## Templates

### UGC Licence (edit scope as needed)

```
User Content Licence. You retain ownership of Your Content. You grant Company a worldwide, non-exclusive, royalty-free, sub-licensable, transferable licence to host, store, use, display, reproduce, modify for technical purposes, distribute, and create derivative works of Your Content solely to operate, improve, and promote the Service. Licence ends upon deletion except for content already shared or cached in ordinary operation.
```

### Liability & Warranty (edit cap as needed)

```
Disclaimer. THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW. NOTHING IN THESE TERMS EXCLUDES OR LIMITS LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE, FRAUD, OR ANY OTHER LIABILITY WHICH CANNOT BE LAWFULLY EXCLUDED OR LIMITED UNDER APPLICABLE LAW (INCLUDING THE CONSUMER RIGHTS ACT 2015).

Limitation. TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANY SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF DATA, PROFITS, OR REVENUE. TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO COMPANY IN THE 12 MONTHS BEFORE THE CLAIM (OR £100 IF NONE). EXCEPTIONS: LIABILITY FOR DEATH/PERSONAL INJURY, FRAUD, OR WILFUL MISCONDUCT WHERE PROHIBITED.
```

## Privacy & Data Hooks

- Incorporate Privacy Policy by reference, Specify data processing roles (controller/processor)
- Reference security measures at high level only, do not promise beyond actual controls, Address international transfers (UK International Data Transfer Agreement or Addendum for non-adequate jurisdictions)
- Data Subject Access Requests (DSARs) under UK GDPR Article 15

## Final QC Checklist

- [ ] Definitions consistent, capitalisation standardised
- [ ] Effective date + version history included
- [ ] Notice method and update mechanism defined
- [ ] Survival clauses listed
- [ ] Hyperlinks to all incorporated policies working

## Pitfalls

- **Browsewrap is weak** - prefer clickwrap acceptance; browsewrap risks unenforceability under UK contract law.
- **UK/EU users** - include UK GDPR-consistent rights hooks and consumer protections; avoid overbroad waivers. Consumer Rights Act 2015 implies statutory rights that cannot be excluded. [VERIFY]
- **Children's code** - the Age Appropriate Design Code (Children's code / ICO) applies to services likely to be accessed by under-18s; replaces US COPPA (which focused on under-13s). [VERIFY]
- **UGC services** - must include CDPA 1988-compliant takedown procedure; no DMCA safe harbour (UK has separate hosting defence under Electronic Commerce Directive/UK Regulations). [VERIFY]
- **Unfair Contract Terms** - Unfair Contract Terms Act 1977 (B2B) and Consumer Rights Act 2015 (B2C) apply; liability caps and indemnities must pass reasonableness/fairness tests.
- **Punitive damages** - not available in Scots law; caps should reflect this.
- **Group/class proceedings** - Scotland permits opt-in group proceedings (RCS Chapter 26, 2018); arbitration clauses should explicitly address group proceedings opt-in (rather than US-style class action waiver).
- **No jury waiver needed** - civil cases in Scotland have no jury, so no jury waiver clause is required.
- **Regulated industries** (health, finance, telecom) - flag for additional statutory modules (FCA, MHRA, Ofcom regulations).

## Scotland/UK Adaptation

This skill has been adapted from US consumer and commercial contract practice (CCPA, COPPA, DMCA, US state law framework) to UK/Scots law.

### Key Adaptations

- **Consumer protection**: Consumer Rights Act 2015 replaces US state consumer protection laws; statutory implied terms (satisfactory quality, fitness for purpose) cannot be excluded
- **Data protection**: UK GDPR / Data Protection Act 2018 replaces CCPA/CPRA/state privacy laws; UK Information Commissioner's Office (ICO) replaces state Attorneys General and FTC enforcement
- **Children's code**: Age Appropriate Design Code (ICO) replaces COPPA; applies to under-18s (not just under-13s) and is broader in scope
- **Content takedown**: CDPA 1988 and Electronic Commerce (EC Directive) Regulations 2002 hosting defence replace DMCA safe harbour; different notice-and-takedown mechanics
- **Privacy Policy**: Must include ICO-registered Data Protection Officer/Representative (if required); no US state-specific privacy right categories
- **International data transfers**: UK International Data Transfer Agreement (IDTA) or Addendum replaces EU SCCs for UK transfers; separate EU terms needed for EEA
- **No punitive damages**: If a liability cap references exemplary/punitive damages, those are not available under Scots law
- **Group proceedings**: Scotland allows opt-in group (class) proceedings; no US-style opt-out class actions. Arbitration clauses should reflect this
- **Unfair contract terms**: UCTA 1977 (B2B) and CRA 2015 (B2C) replace US unconscionability doctrine; reasonableness and fairness tests apply
- **Governing law**: Scots law (or English law) replaces US state law; jurisdiction in Scottish courts (Court of Session for high value, Sheriff Court for lower value)
- **No jury trial waiver**: Civil cases in Scotland have no jury, no clause needed
- **Currency**: All amounts in GBP (£), not USD ($)
- **VAT**: UK VAT treatment replaces US sales tax; VAT registration number needed if above threshold
- **Electronic signatures**: Electronic Communications Act 2000 / eIDAS (UK) replaces ESIGN Act
- **Late payment**: Late Payment of Commercial Debts (Interest) Act 1998 provides statutory interest (8% over Bank of England base rate)
- **Contracting entity**: Company registered at Companies House with registered address; Scottish Limited Partnership or Scottish Charitable Incorporated Organisation for specific structures
- **Court hierarchy**: Sheriff Court (up to £100k) or Court of Session (unlimited) replaces US state/federal court split

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
