---
name: itar-technology-control-plan
language: en
description: Atticus UK/Scots legal skill for itar-technology-control-plan. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Technology Control Plan (UK Export Controls, Scotland/UK Adaptation)

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

Produces an organisation-specific, auditable Export Control Compliance Plan covering UK Military List scoping, strategic export controls, transfer of technology, deemed-export safeguards, cybersecurity, training, audits, and incident response under UK law.

## Prerequisites

Collect before drafting:

1. **Org profile** - entity names, UK establishment / registered address, export compliance officer, empowered senior official.
2. **Programs & scope** - contracts, UK Military List / Dual-Use List categories, items/technology/technical data, facility list.
3. **People & access** - personnel roster, foreign nationals (non-UK/non-EAA), visitor workflows, subcontractors.
4. **Systems & storage** - IT architecture, data repositories, collaboration tools, physical storage.
5. **Authorisations** - Open General Export Licences (OGELs), Standard Individual Export Licences (SIELs), Open Individual Export Licences (OIELs), trade control licences, prior disclosures.
6. **Existing policies** - security, HR screening, IT, visitor control, incident response, records retention.

## Quick Start

1. Gather all prerequisites; flag gaps early.
2. Draft each required section (see Section Outline below).
3. Populate the role matrix, inventory, and training tables with org-specific data.
4. Mark every regulatory citation with [VERIFY] for counsel review.
5. Attach appendices (forms, checklists, facility maps, access roster).
6. Route for compliance officer / empowered senior official approval and signature.

## Required Sections

| # | Section | Key Content |
|---|---------|-------------|
| 1 | Purpose & Authority | TCP applicability; cite Export Control Order 2008 (SI 2008/3231) [VERIFY]. |
| 2 | Definitions | Military goods, dual-use goods, software, technology, transfer of technology, export, deemed export, broker / trade, with citations [VERIFY]. |
| 3 | Scope | Programmes/contracts, UK Military List categories (ECJU), dual-use list (EU Reg 2021/821 retained), facilities, remote-work boundaries. |
| 4 | Roles & Governance | Compliance officer, empowered senior official, IT/security, HR, programme owners. |
| 5 | Classification & Inventory | UK Military List / Dual-Use List mapping, jurisdiction determination, marking, version control. |
| 6 | Access Controls | UK/EAA person verification, badge logic, visitor escorts, need-to-know, deemed export prevention. |
| 7 | IT & Cybersecurity | Segmentation, MFA, encryption, logging, device/media restrictions. |
| 8 | Handling & Transmission | Storage rules, secure transfer, travel, remote-access constraints. |
| 9 | Training | Initial + annual; role-based modules; completion records. |
| 10 | Audits & Monitoring | Annual audits, trigger-based reviews, corrective actions. |
| 11 | Incident Response | Containment, investigation, voluntary disclosure to HMRC / ECJU. |
| 12 | Records & Retention | 10-year retention (ECJU requirements) [VERIFY]; record types, custody. |
| 13 | Revision Control | Versioning, approvals, distribution, acknowledgment. |
| - | Appendices | Forms, checklists, logs, access roster, facility maps. |

## Role Responsibilities

| Role | Key TCP Duties |
|------|---------------|
| Empowered Senior Official / Compliance Officer | Oversees compliance; approves TCP; coordinates with ECJU; disclosures. |
| Export Control Compliance Officer (day-to-day) | Maintains TCP; coordinates audits/training; classification oversight; SPIRE licensing. |
| IT/Security | Implements segmentation, logging, encryption. |
| HR | UK/EAA person verification; onboarding/offboarding workflow; right to work checks. |
| Programme Manager | Enforces scope, need-to-know, reporting. |

## Core Controls

### Access

- Only verified UK / EAA persons (or those with applicable authorisation) may access controlled areas/systems without licence.
- Visitor pre-approval + escort required; sanitise workspaces before entry.
- Deemed export prevention: cover/remove technical data, restrict conversations near unapproved persons.

### Person Verification (appendix checklist)

- Verify right to work and nationality / immigration status (Home Office / UKVI evidence).
- Record verifier, date, document type, expiry, re-verification schedule.
- Flag non-UK / non-EAA nationals, deemed export may apply.
- Deny access until verification is completed and logged.

### Cybersecurity Baseline

- Segmented network for controlled goods/technology data, no routing to general networks.
- MFA + least-privilege for all access.
- Encryption at rest and in transit (AES-256 or equivalent) [VERIFY].
- Prohibit personal devices, removable media, consumer cloud storage.

### Transmission

- No standard email for controlled technical data.
- Approved secure transfer only; verify recipient authorisation and need-to-know.
- Confirm export authorisation before any foreign disclosure (including intra-group).

### International Travel

- Pre-approval and licensing (SIEL / OGEL) for temporary exports, including laptops containing controlled software/technology.
- No access to controlled data abroad without specific authorisation.

## Training Matrix

| Audience | Frequency | Topics |
|----------|-----------|--------|
| All with access | Initial + annual | Export control basics, deemed export, TCP rules, reporting |
| Compliance Officer | Annual + updates | Licensing (SPIRE), disclosures, penalties |
| IT/Security | Annual + updates | Segmentation, logging, incident response |
| HR | Annual + updates | Right to work, nationality verification, onboarding/offboarding |

## Audit Plan

- Annual full TCP audit, sample access logs, training records, inventories.
- Trigger audits after org changes, new programmes, incidents, or regulatory updates.
- Document findings, corrective actions, closure dates.

## Incident Response

1. Contain exposure; revoke access.
2. Preserve evidence and logs.
3. Identify data/items, UK Military List / Dual-Use category, persons involved, duration.
4. Assess authorisation gap and potential unlawful export.
5. Escalate to empowered official, legal counsel, and notify ECJU / HMRC if appropriate.
6. Voluntary disclosure, notify HMRC / ECJU under ECJU guidance (no fixed statutory period, best practice is prompt disclosure).
7. Implement corrective actions; update TCP.

## Records Retention

| Record Type | Retention | Owner |
|-------------|-----------|-------|
| Licences / SIELs / OGELs | 10 years from expiry / revocation [VERIFY] | Compliance |
| Classification decisions | 10 years [VERIFY] | Compliance |
| Access logs / visitor logs | 10 years [VERIFY] | Security |
| Training records | 10 years [VERIFY] | HR/Compliance |

## Inventory Schema

| Asset ID | Type | UKML / Dual-Use Category | Location/System | Owner | Classification Date | Marking Applied |
|----------|------|--------------------------|-----------------|-------|---------------------|-----------------|

**Standard marking:** `UK CONTROLLED, Export of this information to foreign persons is prohibited without authorisation from the Export Control Joint Unit.`

## Pitfalls & Checks

- Use exact programme names, contract numbers, facilities, and system identifiers, no placeholders in final output.
- Explicitly mark publicly available technology or dual-use items subject to different controls and exclude them from military controls.
- When classification or jurisdiction is unclear, apply interim UK military controls pending an ECJU classification determination.
- Never permit foreign-person (non-UK/EAA) access without applicable authorisation and documented approval.
- Maintain a single source of truth for inventory and access lists; reconcile quarterly.
- Tag every unconfirmed regulatory citation with [VERIFY] for counsel review.
- Note distinction between UK export controls and EU controls (post-Brexit). UK has its own independent control list and regime.
- Deemed export under UK law applies when technology is transmitted to a non-UK/non-EAA national within the UK.

## Scotland/UK Adaptation

### Key Differences from US Version

| US Concept | Scotland/UK Equivalent |
|---|---|
| ITAR (22 CFR 120-130) | UK Export Control Order 2008 (SI 2008/3231) |
| DDTC (Directorate of Defense Trade Controls) | Export Control Joint Unit (ECJU) - DIT / FCDO / MOD |
| USML (United States Munitions List, 22 CFR 121.1) | UK Military List (Schedule 2, SI 2008/3231) |
| DSP-5 (export licence) | Standard Individual Export Licence (SIEL) |
| DSP-73 (temporary export) | SIEL for temporary export / OGEL (Open General Export Licence) |
| TAA (Technical Assistance Agreement) | Individual Trade Control Licence / Technology Transfer Licence |
| 22 CFR 120.4 (commodity jurisdiction) | Classification determination by ECJU (no formal CJ process; advisory ruling) |
| 22 CFR 127.12 (voluntary disclosure) | Voluntary disclosure to HMRC / ECJU (HMRC prosecution model; no fixed statutory period) |
| 22 CFR 122.5 (5-year records) | 10-year record retention [VERIFY ECJU guidance] |
| U.S. person (citizen/GC/asylee/refugee) | UK person / EEA national; right to work under Immigration Act |
| Deemed export (to foreign person in US) | Deemed export (to non-UK/non-EAA national in UK) |
| ITAR registration with DDTC | No direct UK equivalent; registration with ECJU for certain licences |
| EAR (dual-use) | UK Dual-Use Items (Export Control) Regulations 2008 / Annex I |
| State Department oversight | DIT / FCDO / MOD jointly via ECJU |
| 5-year licence retention | 10-year retention required [VERIFY] |
| HTS / Schedule B classification | UK Trade Tariff / Harmonised System codes |
| Empowered Official (EO) | Empowered Senior Official / Export Compliance Officer |
| ITAR training records (5 yrs) | Compliance training records (10 yrs) [VERIFY] |

### Key UK Export Control Statutes

| Statute / Order | Application |
|---|---|
| Export Control Order 2008 (SI 2008/3231) | Main UK export control legislation |
| Export Control Act 2002 | Primary enabling legislation |
| UK Dual-Use Items (Export Control) Regulations 2008 | Dual-use goods and technology |
| Customs & Excise Management Act 1979 | HMRC enforcement powers |
| Policing and Crime Act 2017 | Trade sanctions (trafficking and brokering) |
| Sanctions and Anti-Money Laundering Act 2018 | Sanctions regimes |
| Retained EU Regulation 2021/821 | Dual-use export controls (post-Brexit) |

### Key Regulatory Bodies

| Body | Role |
|---|---|
| ECJU (Export Control Joint Unit) | Licensing and policy (DIT, FCDO, MOD joint) |
| HMRC (HM Revenue & Customs) | Enforcement, investigations, prosecutions |
| CMA (Competition & Markets Authority) | Limited role in strategic export controls |
| Home Office | Immigration enforcement (right to work) |
| OFSI (Office of Financial Sanctions Implementation) | Financial sanctions compliance |

### Penalties

| Offence | Penalty |
|---|---|
| Exporting without licence | Criminal, unlimited fine and/or up to 10 years' imprisonment |
| Unauthorised transfer of technology | Criminal, as above |
| Breach of licence conditions | Criminal, as above |
| Failure to keep records | Criminal, fine |
| Failure to disclose knowledge of breach | Limited, regulatory action |

### Currency

- No USD amounts in UK export controls, Licensing fees: free for most OGELs; SIELs generally free; trade control licences may have fees [VERIFY current ECJU fee schedule]

---

**Key changes from original:**

- **Title** updated for UK adaptation
- **Description** updated with [SCOTS] tag and UK statutory references
- **All US-specific content** replaced with UK equivalents (ECJU, UK Military List, Export Control Order 2008)
- **DDTC → ECJU, USML → UK Military List, 22 CFR → SI 2008/3231**
- **DSP-5/DSP-73/TAA → SIEL/OGEL/OIEL**
- **U.S. person → UK/EAA person; visa type changed to right to work / immigration status**
- **5-year retention → 10-year retention**
- **Voluntary disclosure** → HMRC / ECJU (no fixed period)
- **Penalties** → UK criminal penalties (unlimited fine, up to 10 years)
- **Added post-Brexit** dual-use regime distinction
- **Added Scotland/UK Adaptation** section with full comparison table
- **No USD amounts** - UK licensing is generally free
- **SPIRE** (UK export licensing system) referenced

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
