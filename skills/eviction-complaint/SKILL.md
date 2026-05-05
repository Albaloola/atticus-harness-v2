---
name: eviction-complaint
language: en
description: Atticus UK/Scots legal skill for eviction-complaint. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Ejection and Removing Action, Scotland

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

Drafts a court-ready Summary Cause or Ordinary Cause summons for recovery of possession of heritable property (ejection/removing) that establishes grounds for possession recovery and withstands preliminary pleas.

**[SCOTS: Note]** - There is no "unlawful detainer" in Scots law. The equivalent actions are **Ejection** (removal of a tenant/occupier with no right to remain) and **Removing** (termination of a lease at its ish/term). The procedure depends on tenancy type (private residential tenancy, Scottish secure tenancy, short assured tenancy, commercial lease) and the court track (Summary Cause for simpler cases; Ordinary Cause for complex or high-value).

## Prerequisites

Gather before starting:

1. **Tenancy type** - private residential tenancy (PRT under Private Housing (Tenancies) (Scotland) Act 2016), Scottish secure tenancy (SST), short Scottish secure tenancy (SSST), assured tenancy, commercial lease, or common law tenancy
2. **Lease/written agreement** - or agreed terms (rent amount, due date, duration, material provisions)
3. **Notice documents** - notice to quit, AT6 notice, s.19 notice, or other statutory notice with proof of service
4. **Rent arrears schedule** - payment history with arrears amounts and dates
5. **Property ID** - postal address, unit number, title number (Land Register)
6. **Parties** - full legal names of all pursuers (as title is held) and all defender-tenants
7. **Sheriff Court** - which Sheriffdom and Sheriff Court (property location determines venue)

## Workflow

### 1. Assess Case

Extract facts from documents and build a chronology:

| Event | Date | Source |
|---|---|---|
| Lease execution | | |
| Missed rent / breach dates | | |
| Notice served | | |
| Service method | | |
| Notice expiry / ish | | |
| Current occupancy | | |

Verify notice compliance for the tenancy type:

- **Private Residential Tenancy** - must use prescribed s.19 notice (Private Housing (Tenancies) (Scotland) Act 2016); minimum 28 to 84 days notice depending on ground; First-tier Tribunal (Housing and Property Chamber) for most PRT cases, then Sheriff Court for enforcement
- **Scottish Secure Tenancy** - notice of proceedings (Form AT6) with prescribed period (minimum 28 days); specify ground for eviction (Schedule 2, Housing (Scotland) Act 2001); sheriff must be satisfied it is reasonable to grant decree
- **Short Scottish Secure Tenancy** - notice of proceedings (Form AT6) with minimum 28 days; if fixed-term, serve notice at least 2 months before ish (term-end)
- **Assured Tenancy** - notice to quit + s.19 notice under Housing (Scotland) Act 1988; grounds under Schedule 5
- **Commercial Lease** - irritancy notice (conventional or legal) or clause re-entry; notice to quit for tacit relocation
- **Common Law / Grazing / Mineral Leases** - 40 days' notice before Whitsunday/Martinmas term days

**If notice is defective, stop and advise re-service before raising proceedings.** Improper/invalid notice is the #1 defence.

### 2. Draft Summons

**Instance:**
- Court's full name with Sheriffdom and Sheriff Court, Pursuer name exactly as title is held, All named tenants as defenders; include "and any other occupiers"
- Title: "SUMMONS FOR EJECTION AND REMOVING" (Summary Cause) / "SUMMONS FOR REMOVING" (Ordinary Cause)

**Jurisdictional allegations:**
- Court jurisdiction based on property location (address, postcode, Sheriffdom)
- Basis under Sheriff Courts (Scotland) Act 1907 / Summary Cause Rules / Ordinary Cause Rules

**Factual allegations checklist:**

- [ ] Tenancy formation (date, parties, written/oral, material terms)
- [ ] Property description (address, postcode, Land Register title number)
- [ ] Rent terms (amount, due date, payment method)
- [ ] Ground for recovery:
  - *Non-payment*: each missed date + amount; total arrears through raising
  - *Tenancy breach*: provision breached, dates, conduct
  - *Holdover/tacit relocation*: ish (term-end) date, continuation, refusal to remove
  - *Landlord's own occupation/renovation*: ground specified by tenancy type
- [ ] Notice: type, date served, method, statutory authority, expiry
- [ ] Attach notice + proof of service as Nos (productions)
- [ ] Defender failed to comply/remove within notice period
- [ ] Defender remains in possession without legal right
- [ ] It is reasonable to grant decree (SST/SSST, mandatory test)

**Causes of action, map elements to applicable statute:**

| Element | Article |
|---|---|
| Landlord-tenant relationship | Article __ |
| Obligation (rent/lease term) | Article __ |
| Breach (non-payment/breach/holdover) | Article __ |
| Proper notice served | Article __ |
| Failure to comply/remove within notice period | Article __ |
| Continued unlawful possession | Article __ |

Cite specific statutory grounds (Private Housing (Tenancies) (Scotland) Act 2016 Schedule 3; Housing (Scotland) Act 2001 Schedule 2; Housing (Scotland) Act 1988 Schedule 5). [VERIFY applicable grounds.]

Additional conclusions if applicable: monetary conclusions for arrears of rent, damages for breach, violent profits (occupation without right), expenses.

**Crave / Conclusions (Prayer for Relief)** - include:
1. Decree for ejection and removing of defenders from the subjects
2. Warrant for ejection by sheriff officers if decree not complied with
3. Payment of arrears of rent (itemised through date of raising)
4. Violent profits / damages for continued occupation
5. Interest on sums due
6. Expenses of process (judicial expenses)
7. Such further and other relief as the court may think fit

### 3. Format and Attach Productions

- Apply Sheriff Court formatting rules (Act of Sederunt / Summary Cause Rules / Ordinary Cause Rules)
- Use Summary Cause form if applicable (simplified form)
- Label productions:
  - No. 1: Notice + proof of service
  - No. 2: Lease agreement (relevant pages)
  - No. 3: Rent arrears schedule (if non-payment)

## Critical Checks

- **Notice is dispositive** - defective notice defeats the action; verify before drafting
- **Name matching** - pursuer must match title holder; defenders must match tenants named in lease
- **Itemise sums** - courts require itemisation of arrears (not lump-sum allegations)
- **Residential tenancy grounds** - mandatory (landlord guaranteed) vs discretionary (sheriff decides reasonableness) - identify correctly
- **Reasonableness test (SST)** - sheriff must be satisfied it is reasonable to grant decree, having regard to all circumstances
- **PRT special rules** - First-tier Tribunal has jurisdiction for most PRT cases; Sheriff Court for enforcement of tribunal orders
- **Tenancy deposit scheme** - confirm compliance; non-compliance may bar possession action
- **Anti-retaliation** - if tenant raised disrepair/complaints, may be retaliatory eviction (s.33 Housing (Scotland) Act 2006 for SSTs)
- **Repairing standard** - if property does not meet Scottish repairing standard, may be tenancy impediment
- **Human Rights Act 1998** - Art. 8 (right to respect for private/family life) applies to possession actions; sheriff must consider proportionality
- **Pre-action protocols** - check if applicable (social landlord pre-action requirements; Financial Health Check for rent arrears)
- **All statutory citations must be verified** against current legislation

---
## Scotland/UK Adaptation

This skill has been adapted from a U.S. Unlawful Detainer complaint template for use under Scots landlord-tenant law.

### Key Conversions
| U.S. Term | Scottish Equivalent |
|---|---|
| Unlawful detainer | Ejection / Removing |
| Eviction complaint | Summons for ejection and removing |
| Plaintiff | Pursuer |
| Defendant | Defender |
| Landlord-tenant (general) | Same terms; different statutory regimes |
| Notice to pay or quit / cure or quit | AT6 notice (SST/SSST) / s.19 notice (PRT) / notice to quit (assured/commercial) |
| Holdover tenancy | Tacit relocation (continuation of lease beyond ish) |
| Rent control ordinances | Rent pressure zone (RPZ) / Scottish Rent Adjudication |
| Summary eviction | Summary Cause procedure (simplified Sheriff Court) |
| Demurrer (motion to dismiss) | Preliminary pleas (relevancy, competency) |
| DOES defendants (unknown occupants) | "and any other occupiers" |
| FED (forcible entry and detainer) | Ejection (peaceful removal via sheriff officers) |
| Eviction moratoria (COVID-era) | COVID-19 restrictions on evictions (lapsed; check current situation) |
| Just cause eviction (US cities) | Grounds-based regime (Scotland: statutory grounds only) |
| Tenant right to cure | Some statutory grounds allow remedy/preventative action |
| Rent control / rent-stabilised | PRT rent cap / rent pressure zones |
| Attorney's fees (statutory) | Expenses of process (judicial discretion) |
| Possession writ / enforcement | Extract decree / warrant for ejection by sheriff officers |
| Habitability defence | Repairing standard / disrepair as potential defence for SSTs |
| Security deposit | Tenancy deposit scheme (Scotland, mandatory registration) |
| Jury trial | Not available for ejection/removing (Sheriff Court only) |
| Discovery (eviction context) | Commission and diligence / specification of documents |
| Substituted service (US) | Service by sheriff officer / post-and-sheriff-officer/posting |
| Automatic stay | Extract decree enforcement, no automatic stay (sheriff officer diligence) |

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
