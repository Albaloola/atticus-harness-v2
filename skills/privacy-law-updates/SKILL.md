---
name: privacy-law-updates
language: en
description: Generates structured privacy and data protection law briefings across UK, EU, and other jurisdictions, with a focus on UK GDPR / DPA 2018. Organises by jurisdiction with compliance deadlines, ICO enforcement actions, and legislative changes. Use when preparing privacy law briefings, compliance updates, regulatory change summaries, or data protection landscape reviews for Scottish/UK organisations. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, compliance, privacy, data-protection, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Privacy Law Updates (UK / Scotland Focus)

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

Produces a structured briefing on recent privacy and data protection developments, oriented toward compliance planning and executive decision-making for Scottish and UK organisations.

> **Note:** Scotland follows UK GDPR and the Data Protection Act 2018. Data protection is a reserved matter (Westminster competence), not devolved to the Scottish Parliament. The Information Commissioner's Office (ICO) is the lead regulator for the UK post-Brexit. This briefing covers the UK regime as primary jurisdiction, with cross-references to EU GDPR for relevant divergence points.

## Quick Start

Confirm before generating:

1. **Reporting period** - default: past 12 to 18 months
2. **Jurisdictions** - default: UK (UK GDPR / DPA 2018), EU (EU GDPR), other relevant jurisdictions
3. **Industry context** - platform type, data categories, special category data, cross-border transfers
4. **Audience** - legal/compliance, executive, or both

## Output Workflow

### Step 1: Executive Overview

| Element | Content |
|---|---|
| Critical deadlines | Compliance dates requiring immediate action |
| Major enforcement | ICO fines/orders and FCA enforcement signalling regulatory priorities |
| New obligations | Requirements not previously in effect |
| Strategic flags | Developments affecting product roadmap, vendors, or cross-border transfers |

### Step 2: Jurisdiction Developments

For each jurisdiction, use this entry template:

```
### [Jurisdiction]

#### [Development Title]
- **Type**: Legislation | ICO Guidance | Enforcement | Court Decision
- **Effective date**: [date or timeline]
- **Scope**: [entities, data types, activities covered]
- **Key requirements/holdings**: [bullet list]
- **Delta from prior law**: [what changed]
- **Operational impact**: [systems, processes, documentation affected]
- **Penalties**: [non-compliance consequences]
- **Exemptions/safe harbours**: [if any]
```

**Key UK data protection regulations to track:**

| Regulation | Scope | Regulator |
|---|---|---|
| UK GDPR (as retained EU law) | General data protection, processing of personal data | ICO |
| Data Protection Act 2018 | UK implementing legislation; exemptions, derogations, law enforcement processing | ICO |
| PECR (Privacy and Electronic Communications Regulations) | Electronic marketing, cookies, communications privacy | ICO |
| Children's code (Age Appropriate Design Code) | Online services likely to be accessed by children | ICO |
| Data Reform Bill (proposed) | Potential amendments to UK GDPR / DPA 2018 framework | - |

### Step 3: Cross-Cutting Topics

Cover only topics with material developments:

| Topic | Capture |
|---|---|
| Cross-border transfers | UK adequacy decisions (EU→UK, third countries), International Data Transfer Agreement (IDTA), Addendum to EU SCCs |
| Consent & notice | Changed standards, cookie consent enforcement, dark-pattern enforcement by ICO |
| Data subject rights | Access (SARs), deletion (right to erasure), portability changes under UK GDPR |
| Breach notification | 72-hour ICO notification requirement, Ransomware and cyber incident reporting under NIS Regulations |
| AI governance | ICO guidance on AI and data protection, UK AI Safety Institute, automated decision-making rules |
| Children's privacy | Age-appropriate design code (Children's code), age verification requirements |
| Biometric data | ICO guidance, special category data requirements, surveillance and facial recognition |
| Direct marketing | PECR rules on electronic marketing, soft opt-in, ICO enforcement priorities |
| International transfers | UK adequacy decisions, IDTA, SCCs, EU adequacy decision re UK |

### Step 4: Forward-Looking

- Proposed Data Reform Bill and expected timelines, ICO regulatory consultations and published priorities, UK AI regulation developments, International transfer mechanism developments (post-Brexit adequacy)
- EU to UK data adequacy renewal/divergence monitoring, Areas of legal uncertainty warranting monitoring

## Checks and Pitfalls

- **Jurisdiction-first organisation** - cross-reference in cross-cutting section; never repeat the same development twice
- **Cite primary sources** - UK GDPR articles, DPA 2018 sections, PECR regulations, ICO decisions, case names
- **Mark unverified citations** with `[VERIFY]`
- **Distinguish enacted law from proposals** - clearly label pending/proposed items (Data Reform Bill, etc.)
- **Flag UK to EU divergence** where UK GDPR and EU GDPR requirements create operational tension
- **Include enforcement amounts** - ICO monetary penalties contextualise regulatory seriousness
- **No editorialising** on political likelihood; state procedural status only
- **Note sector carve-outs** (common law confidentiality, NHS DSP Toolkit, FCA rules, PECR) where they interact with UK GDPR
- **Dual-audience tone** - precise for compliance implementation, clear for executive briefing
- **Reserved vs devolved competence** - data protection is reserved to Westminster; Scottish Parliament has no separate data protection legislative competence. However, Scottish public bodies and organisations must comply with UK GDPR / DPA 2018
- **Special category data** - use UK GDPR Article 9 conditions; note that UK GDPR retains substantially the same conditions as EU GDPR

## Scotland/UK Adaptation

### Key Adaptations, Replaced primary focus on US federal + state law → UK GDPR / DPA 2018 / PECR as primary regime, with Scotland as the jurisdictional reference point, Replaced CCPA, CPRA, state privacy laws → UK GDPR + DPA 2018 (single UK regime) and EU GDPR for cross-reference, Replaced HIPAA → Common law confidentiality (no direct health privacy statute), NHS DSP Toolkit for NHS organisations, and UK GDPR special category data provisions, Replaced GLBA → FCA rules on financial services data protection (FCA Handbook, SYSC, COBS, ICOCC)
- Replaced FTC → ICO (Information Commissioner's Office) as lead UK data protection regulator, Replaced FCRA → DPA 2018 / UK GDPR; credit reference agency regulation under FCA and ICO, Replaced COPPA → Age-appropriate design code (Children's code) under DPA 2018; PECR for online services, Replaced ePrivacy Directive → PECR (Privacy and Electronic Communications Regulations)
- Replaced state Attorneys General enforcement → ICO enforcement (monetary penalties, enforcement notices, undertakings)
- Replaced SEC → FCA, Replaced IRS → HMRC (relevance to tax data processing)
- Replaced EPA → SEPA (Scottish Environment Protection Agency) / EA (Environment Agency)
- Replaced DOJ → COPFS (Crown Office and Procurator Fiscal Service) for Scottish criminal data processing, Replaced FCC → Ofcom (concurrent role on communications data)
- Replaced CFPB → FCA, Replaced OSHA → HSE (Health and Safety Executive)
- Replaced USPTO / Copyright Office → UK IPO (Intellectual Property Office)
- Replaced EU adequacy decisions re US (e.g., Privacy Shield, Data Privacy Framework) → UK adequacy decisions for international transfers, Replaced US dollar amounts → GBP amounts (ICO maximum fine: £17.5 million or 4% of global turnover, whichever higher, equivalent to UK GDPR Article 83)
- Replaced "cross-border transfers" (US→EU focus) → IDTA (International Data Transfer Agreement) and UK Addendum to EU SCCs

### [SCOTS] Notes, Scotland follows UK GDPR and the Data Protection Act 2018; data protection is a reserved matter and Scottish Parliament has no separate legislative competence.
- The ICO (Information Commissioner's Office) based in Wilmslow and Edinburgh is the lead regulator for the UK post-Brexit.
- Scottish public bodies must comply with UK GDPR / DPA 2018; the Scottish Public Sector Ombudsman (SPSO) deals with complaints about information handling by Scottish public bodies.
- For Scottish organisations: note that Scottish courts have jurisdiction for data protection claims brought in Scotland under UK GDPR / DPA 2018. The Sheriff Court and Court of Session both handle data protection claims.
- The UK GDPR is the retained EU version (as amended by SI 2019/419 etc.), not the EU GDPR, though they are broadly similar. Post-Brexit divergence is possible.
- The EU has granted the UK an adequacy decision under Article 45 of the EU GDPR, allowing continued data flows from the EEA to the UK (subject to periodic review).
- The International Data Transfer Agreement (IDTA) and UK Addendum to the EU SCCs are the primary transfer mechanisms for restricted transfers from the UK.
- Scottish-specific data processing contexts include Scottish Government public sector data, NHS Scotland, and Scottish local authority processing.

### [VERIFY] Items Before Use, Verify current status of the Data Reform Bill (potentially amending UK GDPR / DPA 2018)
- Verify current ICO regulatory priorities and published enforcement actions, Confirm current UK to EU adequacy decision status (subject to periodic renewal/review)
- Check latest ICO guidance on AI and data protection, automated decision-making, Verify current PECR rules on cookie consent and electronic marketing (ICO is actively enforcing)
- Check Scottish courts' approach to data protection claims if jurisdiction is relevant, Confirm IDTA and UK SCC Addendum current versions and status, Verify any sector-specific guidance for Scottish public sector or NHS Scotland data processing

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
