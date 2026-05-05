---
name: api-license-agreement
language: en
description: Drafts a clickwrap-ready API Licence Agreement governed by Scots/English law for companies licensing proprietary APIs to third-party developers. Use when drafting API terms of service, developer agreements, API access agreements, or click-through licence terms for UK-based API providers. Produces full agreement, condensed terms, or developer quick-reference. Cross-references DPA, SLA, AUP, trademark guidelines, and privacy policy modules. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, drafting, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# API Licence Agreement (UK/Scotland)

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

Clickwrap-enforced agreement governing API provider to developer relationships. Covers licence grants, usage tiers, prohibited conduct, data rights, IP ownership, liability limitations, indemnification, and termination with clause election matrices and data mapping.

## Quick Start

1. Gather intake information (or apply defaults)
2. Set clause elections (Permissive / Balanced / Protective)
3. Complete data map
4. Draft agreement
5. Validate with quality audit
6. Deliver in requested output mode

## Output Modes

| Mode | Description |
|---|---|
| **Full Agreement** (default) | Complete agreement |
| **Condensed Terms** | 3 to 6 page short-form retaining key sections |
| **Quick Reference** | One-page developer table: use, tiers, restrictions, data, termination, caps, support, policy links |

## Step 1: Pre-Draft Intake

Gather unless user says "use defaults" or "just draft":

1. **Parties** - Provider legal name, jurisdiction (Scotland/England), entity type (Ltd/PLC/LLP), registered office
2. **API identification** - Name, Documentation URL, Developer Portal URL
3. **Acceptance mechanism** - Clickwrap (checkbox at key issuance) or browsewrap (riskier in UK)
4. **Business model** - Free/paid/tiered; rate limits, quotas, overages, billing
5. **Permitted use** - Commercial use? Developer charges end users? Revenue share?
6. **Data sensitivity** - Personal data? Special category data? UK GDPR DPA needed?
7. **Governing law** - Scots law or English law? Venue? Arbitration (Scottish Arbitration Centre / LCIA)?
8. **Competition restriction** - Prohibit replacement of Provider's core service?
9. **Branding** - Attribution required? Trade mark guidelines URL?
10. **Deprecation policy** - Breaking-change notice period; deprecation window

**Defaults** (apply and label when user does not specify):

| Item | Default | Placeholder |
|---|---|---|
| Acceptance | Clickwrap at API key issuance | [INSERT UX DETAILS] |
| Tiers / pricing | Free + paid tiers | [INSERT TIERS / RATES] |
| Commercial use | Allowed; no resale of API access | [INSERT LIMITS] |
| Data category | May include personal data; DPA required if personal data processed | [SPECIFY DATA TYPES] |
| Governing law | Scots law / Scottish courts | [CHANGE IF NEEDED] |
| Liability cap (paid) | Fees paid in prior 12 months | [INSERT CAP] |
| Liability cap (free) | £100 | [INSERT CAP] |
| Breaking-change notice | 30 days | [INSERT PERIOD] |
| Competition restriction | No replacement for core service | [DEFINE CORE SERVICE] |

## Step 2: Clause Elections

Apply **Balanced** for any unelected topic.

| Topic | Permissive | Balanced (Default) | Protective |
|---|---|---|---|
| Licence scope | Any lawful use | Interoperability with Provider services | Narrow field-of-use |
| Commercialisation | Unrestricted | Allowed; no resale of API access | Separate commercial licence required |
| Competition | Allowed | No replacement for core service | Strict non-compete |
| Rate limit breach | Soft limits / notice | Throttle → suspend → terminate | Immediate suspension + overages |
| Termination (free) | 30-day mutual | Provider at-will; Developer 30-day | Provider immediate at-will |
| Termination (paid) | 60-day mutual | 30-day mutual | Provider at-will; pro rata refund |
| Indemnity | Limited mutual | Developer indemnifies Provider | Expanded + IP cross-indemnity |
| Liability cap (paid) | 24-month fees | 12-month fees | 6-month fees + broad exclusions |

## Step 3: Data Map

| Data Type | Owner | Licence | Restrictions | Post-Termination |
|---|---|---|---|---|
| Developer Data (payloads) | Developer | Provider: process to deliver API only | Lawful; consented; UK GDPR compliant | Delete/return within 30 days |
| Provider Data (responses) | Provider | Developer: use in Developer App only | No scraping, caching beyond TTL, resale | Developer deletes per docs |
| End-User Data (PII) | End user / Developer | Per DPA and consents | UK GDPR / Data Protection Act 2018 compliance | Delete per law / DPA |
| Usage Analytics (logs) | Provider | Provider: aggregate/de-identified | De-identify where possible | Retained for security/ops |

## Step 4: Draft Agreement

Begin with clickwrap header (bold/caps):

> IMPORTANT, PLEASE READ CAREFULLY. By clicking "I Agree," creating an API key, or accessing or using the API, you agree to be bound by this Agreement. If you do not agree, do not access or use the API.

### Agreement Outline

| § | Title | Key Notes |
|---|---|---|
| 1 | Definitions | API, Documentation, Developer Application, Developer Data, Provider Data, Usage Limits, Confidential Information |
| 2 | Licence Grant; Reservation of Rights | Non-exclusive, non-transferable, non-sublicensable, revocable; scope per election; Provider retains all IP |
| 3 | Accounts & Credentials | Registration; Developer responsible for credential security and all activity |
| 4 | Usage Limits; Tiers; Fees | Tier schedule via [PRICING URL]; overages; auto-upgrade or suspension; free-tier fee notice (30 days) |
| 5 | Acceptable Use; Prohibited Conduct | Full prohibited conduct list (see checklist below) |
| 6 | API Changes; Versioning; Availability | Breaking-change notice per election; emergency exception; no uptime guarantee unless SLA addendum |
| 7 | Support | No obligation unless separate plan; optional status page |
| 8 | Data, Privacy & Security | UK GDPR/DPA 2018 compliance; DPA required if personal data processed; security baseline; 72-hour breach notice to ICO; 30-day post-termination deletion |
| 9 | IP; Feedback; Branding | Provider owns API/docs/Provider Data; Developer owns App; Feedback: perpetual royalty-free licence to Provider |
| 10 | Term & Termination | Commences on first use; convenience termination per election; immediate suspension for cause; survival |
| 11 | Confidentiality | Mutual; standard exclusions; compelled-disclosure carve-out |
| 12 | Representations; Disclaimers | Developer: authority, compliance, data rights; Provider: AS IS / AS AVAILABLE (caps); note exclusion of implied terms under CRA 2015 s.31 (business-to-business) |
| 13 | Limitation of Liability | Consequential/exemplary/punitive damages excluded (no punitive damages in Scots law in any event); cap per election; basis-of-bargain acknowledgment |
| 14 | Indemnification | Developer indemnifies Provider; prompt notice, sole control, settlement consent |
| 15 | Export Controls & Sanctions | UK Export Control Order 2008 / OFSI compliance; not on UK sanctions list; not in sanctioned territory |
| 16 | General Terms | Governing law (Scots/English); venue; modification; no assignment by Developer; severability; force majeure; entire agreement; order of precedence |
| 17 | Acceptance | Clickwrap/browsewrap block; entity authority representation |

### Prohibited Conduct Checklist (§ 5)

- No reverse engineering, decompiling, or disassembly, No circumvention of rate limits, auth, access controls, or metering, No interference with API infrastructure or other users, No malware transmission or unauthorised load testing, No unlawful use or third-party rights violations, No scraping, bulk-download, or caching beyond TTL to build competing dataset, No resale, sublicensing, or API intermediary/aggregator activity, No credential sharing with unauthorised parties, No building replacement for Provider's core service (if elected)
- No misrepresentation of affiliation with Provider, Incorporate AUP at [AUP URL] by reference

### Liability & Indemnity Matrix (§§ 13 to 14)

| Feature | Provider | Developer |
|---|---|---|
| Warranty | AS IS / AS AVAILABLE; no uptime guarantee | Acknowledge and accept risk |
| Cap (paid) | 12-month fees | Full indemnity for breach, unlawful use, third-party claims |
| Cap (free) | £100 | Full indemnity for breach, unlawful use, third-party claims |
| Consequential damages | Excluded (subject to reasonableness under UK law) | Excluded |
| Indemnity triggers | N/A | Developer App; Developer Data; breach; IP infringement; unlawful use |

## Step 5: Clickwrap & Policy Cross-References

**Recommended checkbox text:**
> ☐ I have read and agree to the [API Licence Agreement](link), [Acceptable Use Policy](link), and [Privacy Policy](link).

**Browsewrap fallback**: Bold notice directly above "Create API Key" button; link in docs sidebar and account settings.

| Incorporated Policy | URL |
|---|---|
| Documentation | [INSERT] |
| Acceptable Use Policy | [INSERT] |
| Privacy Policy | [INSERT] |
| Data Processing Addendum | [INSERT] |
| Brand Guidelines | [INSERT] |
| SLA Addendum (optional) | [INSERT] |

## Post-Draft Checkpoint

After delivering the draft, confirm:

1. Do clause elections match commercial intent?
2. Are regulated data types present that need additional addenda?
3. Should additional output modes be produced?
4. Has UX/product confirmed the clickwrap mechanism?

## Quality Audit

- All sections addressed, Clause elections consistent throughout (no matrix/text contradictions)
- Data map reflected in §§ 8 to 9
- Prohibited conduct list complete in § 5
- Liability caps match tier elections in matrix and text, Clickwrap header present and conspicuous, All [BRACKETED] placeholders marked for solicitor/attorney completion, DPA trigger clause present (required under UK GDPR Art. 28)
- Export controls (§ 15) included, Order of precedence in § 16
- No invented legal standards; uncertain claims marked [VERIFY]
- Cross-reference table complete

## Pitfalls

- **Clickwrap enforceability under UK law**: Requires conspicuous presentation + affirmative act + full-terms link + timestamp/IP logging; governed by common law contract principles and the Consumer Rights Act 2015 for B2C
- **Browsewrap risk**: Courts treat strictly; use conspicuous notice adjacent to every CTA if no checkbox
- **DPA required**: UK GDPR Art. 28 requires a Data Processing Agreement if the API transmits personal data; include conditional clause
- **Regulated data**: Special category data under UK GDPR in scope → flag for compliance review
- **Export controls**: Never remove § 15; encryption APIs may need UK Export Control Order 2008 classification review
- **Modification mechanics**: Posting + continued use = acceptance is enforceable with advance notice; 15-day minimum recommended
- **Change log**: Maintain public version archive at stable URL
- **UTCCR/Consumer Rights Act 2015**: If agreement is B2C, certain terms may be subject to fairness test (s.62 CRA 2015)

**Required disclaimer on every output:**

> THIS AGREEMENT IS A DRAFTING AID AND REQUIRES REVIEW BY A QUALIFIED SOLICITOR BEFORE USE. IT DOES NOT CONSTITUTE LEGAL ADVICE.

## Scotland/UK Adaptation

This skill has been adapted from the US original for Scots/UK law.

| US Concept | Scotland/UK Equivalent |
|---|---|
| Delaware governing law | Scots law or English law (party choice) |
| State courts | Court of Session / Sheriff Court (Scotland) or High Court (England) |
| AAA/JAMS arbitration | Scottish Arbitration Centre; LCIA; ICC; SIAC |
| HIPAA (health data) | UK GDPR / Data Protection Act 2018; Common Law Duty of Confidentiality |
| GLBA (financial data) | UK GDPR / Financial Conduct Authority rules; Privacy and Electronic Communications Regulations (PECR) |
| FERPA (education data) | UK GDPR (no direct US-style FERPA equivalent) |
| COPPA (children's data) | UK GDPR Art. 8 (children's consent); Age Appropriate Design Code (Children's Code) |
| BIS/OFAC (export/sanctions) | UK Export Control Organisation; OFSI (financial sanctions); Export Control Order 2008 |
| USD amounts | GBP (roughly £0.80 per USD) |
| US Copyright Act | Copyright, Designs and Patents Act 1988 (CDPA) |
| US trade secret law | Trade Secrets (Enforcement, etc.) Regulations 2018 |
| Class action waiver | No US-style class actions in UK; Group Litigation Orders available |
| Punitive damages | Not available in Scots law; compensatory damages only |
| Discovery (US) | No US-style discovery; commission and diligence procedure |
| Legal fees | Scots law: judicial expenses follow success (loser pays) |
| Implied warranty disclaimers | Consumer Rights Act 2015 (B2C) / Sale of Goods Act 1979 / Supply of Goods and Services Act 1982 |
| Force majeure | Common law frustration of contract; express FM clause recommended |
| Contract formation | English/Scots common law; postal rule does not apply to instantaneous communication |

**Required disclaimer on every output:**
> THIS AGREEMENT IS A DRAFTING AID AND REQUIRES REVIEW BY A QUALIFIED SOLICITOR BEFORE USE. IT DOES NOT CONSTITUTE LEGAL ADVICE.

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
