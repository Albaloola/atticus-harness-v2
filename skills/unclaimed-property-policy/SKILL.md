---
name: unclaimed-property-policy
language: en
description: Atticus UK/Scots legal skill for unclaimed-property-policy. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bona Vacantia and Unclaimed Property Policy

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

Drafts a governance policy for systematic compliance with UK and Scottish law on bona vacantia (ownerless property), unclaimed assets, and escheat, from identification through remittance.

**Important:** [SCOTS: Note] The US concept of unclaimed property/escheat law has no direct UK equivalent. The UK system is based on the Crown's right to bona vacantia (ownerless property) under common law and statute. In Scotland, this is administered by the Queen's and Lord Treasurer's Remembrancer (QLTR). In England and Wales, by the Treasury Solicitor (Bona Vacantia Division). There is no unified 50-state reporting regime. This skill adapts the US framework for the UK/Scottish context.

## Prerequisites

1. **Organisational footprint** - countries of incorporation, operation, and property-holding (England & Wales, Scotland, Northern Ireland)
2. **Property type inventory** - all property categories held (deposits, uncashed cheques, securities, customer credits, gift cards, etc.)
3. **Existing compliance artefacts** - prior reports, correspondence with QLTR/Treasury Solicitor
4. **Designated policy owner** - CFO, General Counsel, or Compliance Officer
5. **Industry context** - financial services, insurance, utilities, or retail (drives property-type rules)

> **Research step**: Search uploaded org documents for existing policies, prior reports, and correspondence history before drafting. Supplement with current QLTR / Treasury Solicitor guidance.

## Quick Start

1. Gather prerequisites (footprint, property inventory, existing artefacts)
2. Build dormancy period matrix for each property type
3. Draft policy sections in order: governance → identification → dormancy → priority rules → due diligence → reporting → recordkeeping → audit preparedness
4. Validate all periods and thresholds against current QLTR/Treasury Solicitor guidance
5. Route for CFO/GC approval; schedule annual review cycle

## Core Workflow

### 1. Purpose and Governance

| Element | Content |
|---|---|
| Scope | All UK jurisdictions; all business units holding third-party property |
| Policy owner | Named role with authority to interpret, grant exceptions, coordinate QLTR matters |
| Stakeholders | Business units (identify), Accounting (report/remit), Legal (guidance), Internal Audit (verify) |
| Review cycle | Annual minimum; triggered updates on legislative changes |

### 2. Property Identification

| Property Type | Review Freq. | Dormancy Trigger | Notes |
|---|---|---|---|
| Current/Deposit accounts | Quarterly | Last owner-initiated contact | Interest credits, fee debits ≠ owner contact |
| Time deposits | Quarterly | Maturity date + dormancy period | - |
| Uncashed cheques (payroll) | Monthly | Date of issue | Often 1 to 3 yr dormancy |
| Uncashed cheques (vendor/refund) | Quarterly | Date of issue | - |
| Securities / dividends | Quarterly | Last owner activity or uncashed distribution | Includes nominee accounts, DRIP, fractional shares |
| Customer credits / overpayments | Quarterly | Date credit created | Includes utility deposits, insurance overpayments |
| Gift cards / stored value | Quarterly | Last redemption activity | CCA 1974 protections; varies |
| Insurance proceeds | Per policy terms | Date payable or last owner contact | - |
| Safe deposit box contents | Annually | Lease expiry + dormancy period | - |
| Deposit of tenants (rent deposits) | Quarterly | Tenancy end + unresolved | - |

- **Flag** items within 6 months of dormancy threshold for due diligence prep
- **Exclude** property below de minimis thresholds, property under valid liens, legally exempt instruments

### 3. Dormancy Period Matrix

Maintain a living matrix (update annually): rows = property types, columns = UK jurisdictions, cells = dormancy period (years) + notes.

| Property Type | Typical Range | Notes |
|---|---|---|
| Bank accounts | 5 to 15 yrs | Some banks apply longer periods |
| Wages / payroll | 1 to 3 yrs | PAYE obligations apply |
| Uncashed cheques | 3 to 6 yrs | - |
| Securities | 6 to 12 yrs | Varies by company articles |
| Insurance proceeds | 3 to 6 yrs | - |
| Gift cards | Check CCA/regulations | 5 yrs common; many never escheat |
| Tenancy deposits | 3 months to 1 yr | Must comply with tenancy deposit schemes |

### 4. Jurisdictional Priority Rules

Apply the Crown rights framework:

1. **First priority**: Crown (bona vacantia) of the jurisdiction where the property or company is located:
   - **Scotland**: QLTR (Queen's and Lord Treasurer's Remembrancer)
   - **England & Wales**: Treasury Solicitor (Bona Vacantia Division)
   - **Northern Ireland**: Crown Solicitor
   - **Duchy of Lancaster / Duchy of Cornwall**: Special rules for bona vacantia in these territories

2. **Owner location**: Attempt to reunite with owner before reporting; if owner known to be in another jurisdiction, notify that jurisdiction

| Scenario | Rule |
|---|---|
| Wages | Report to jurisdiction where company incorporated/operates |
| Insurance proceeds | Report to jurisdiction of insurer's registration |
| Company dissolution | Assets of dissolved company pass to Crown as bona vacantia |
| Charitable property | Charity Commission (E&W) / OSCR (Scotland) |
| Multi-jurisdictional claims | Follow legal advice; document analysis; escalate |

### 5. Due Diligence

**Thresholds and approaches:**

- No specific statutory notice thresholds as in US state law; good practice based on QLTR/Treasury Solicitor guidance, All amounts where value > £25: attempt to reunite before reporting, Timing: 6 to 12 months before intended remittance to QLTR/TSol

**Notice should include**: statement of held property; property description (account, type, value); claim instructions; response deadline; org contact information; plain language tone.

**Retain**: copies of notices, mailing dates/addresses, returned mail, owner responses, reunification records.

**Returned mail**: Use address verification services, review other org records, search public databases. Document all attempts.

### 6. Reporting and Remittance

**Reporting framework:**

Scotland (QLTR):
- Voluntary reporting: can submit schedule of unclaimed assets, QLTR assesses whether to accept as bona vacantia, Regular and ad hoc reporting accepted, Retention period before remittance: typically min. 6 years (prescription period)

England & Wales (Treasury Solicitor):
- Bona Vacantia Division accepts assets of dissolved companies and other unclaimed property, Annual or ad hoc reporting, Different rules for company dissolution (Companies Act 2006)

**Compliance calendar:**

| Milestone | Timing |
|---|---|
| Property identification complete | 180 days before planned remittance |
| Due diligence notices sent | 6 to 12 months before remittance |
| Report compilation & reconciliation | 45 days before |
| Internal review & approval | 30 days before |
| Submission & remittance to QLTR/TSol | On completion of due diligence |

**Report checklist**: owner data complete (name, last known address, type of asset, last contact, value); reconciled to accounting records; CFO/GC sign-off obtained.

**Remittance**: BACS/CHAPS to QLTR/TSol (cash), physical delivery (tangible assets). Retain confirmations and acknowledgments.

**Amended reports**: Submit promptly on discovering material errors; document basis; obtain same approval as original.

**Voluntary disclosure**: If historic non-compliance identified, engage solicitor experienced with QLTR/TSol procedure to evaluate approach.

### 7. Recordkeeping

| Record Category | Retention | Notes |
|---|---|---|
| Property records | 6 yrs from report date | Prescription and Limitation (Scotland) Act 1973 - 5 year prescriptive period for delict; extend to 6+ for safety |
| Due diligence documentation | 6 yrs from report date | Notices, responses, reunifications |
| Filed reports & remittances | 6+ yrs from report date | Include QLTR/TSol acknowledgments |
| Audit correspondence & settlements | Permanent | - |

Ensure electronic records remain accessible through system migrations with backup copies and audit trails.

### 8. Audit Preparedness

| Role | Responsibility |
|---|---|
| Audit Coordinator | Primary QLTR/TSol contact; document coordination; strategy |
| Legal Counsel | Privilege review; assessment challenges; settlement negotiation |
| Business Unit Managers | Produce records on request |
| Senior Management | Approve settlement positions |

### 9. Continuous Improvement

- Annual compliance review: error rates, reunification rates, potential liabilities, Monitor proposed legislative changes in UK jurisdictions, Train personnel on policy updates within 30 days of material changes, Update dormancy matrix and compliance calendar annually

## Pitfalls and Checks

- **UK framework is not US escheat**: Bona vacantia is governed by common law and the Crown's prerogative. No 50-state reporting regime.
- **Scotland (QLTR) is a separate jurisdiction**: QLTR is the Crown's representative in Scotland, completely separate from Treasury Solicitor (E&W). Different rules, forms, and procedures.
- **Prescription**: Scots law has 5-year prescriptive period for delict (positive prescription: 10/20 years for heritable property). This affects when the Crown can assert rights.
- **Company dissolution**: Assets of dissolved companies pass to the Crown as bona vacantia under Companies Act 2006. Directors have personal liability risks.
- **Owner contact counts**: Unsolicited credits, statements, and automated letters do not reset dormancy.
- **Professional advice**: Always obtain advice from a Scottish solicitor for QLTR matters.
- **Data protection**: Reunification attempts must comply with UK GDPR.
- **[VERIFY]**: Confirm all guidance and procedures against current QLTR and Treasury Solicitor publications.

## Scotland/UK Adaptation

The following adaptations apply when this skill is used for Scottish/UK proceedings:

**Fundamentally different system:** The US escheat/unclaimed property regime (50-state reporting, NAUPA format, uniform acts) does not apply in the UK. The UK system is based on:

**Bona vacantia:** The Crown (or Duchy of Lancaster/Duchy of Cornwall) is entitled to ownerless property as bona vacantia. This includes:
- Assets of dissolved companies (Companies Act 2006)
- Property of deceased persons with no known heirs (intestacy)
- Unclaimed funds held by financial institutions, Other ownerless property

**Scotland:** QLTR (Queen's and Lord Treasurer's Remembrancer) administers bona vacantia in Scotland. QLTR is part of the Scottish Government. QLTR publishes guidance on its website.

**England & Wales:** Treasury Solicitor (Bona Vacantia Division). Different rules and contact points.

**Company dissolution:** Under Companies Act 2006, s.1012-1033, the Crown acquires dissolved company assets as bona vacantia. Directors should handle properly before dissolution.

**Prescription:** Scots law's positive prescription (10 years for registered land; 20 years for unregistered) and negative prescription (5 years for delict; 20 year long-stop). The Crown's claim to bona vacantia may be affected by prescriptive periods.

**No state-level escheat:** No equivalent to individual US state escheat laws. Scotland is a single jurisdiction; no sub-national escheat regimes.

**No NAUPA format:** No standardised reporting format. Report by correspondence with QLTR/TSol.

**Data protection:** UK GDPR applies to customer data. Reunification attempts must be consistent with data protection principles.

**Whistleblowing:** Protected disclosures under Public Interest Disclosure Act 1998.

**Banking:** FCA regulates consumer credit, banking, and payment services. The FCA Handbook CONC (Consumer Credit) contains relevant rules on dormant accounts.

**Insurance:** FCA Handbook ICOBS (Insurance: Conduct of Business) rules on unclaimed policy proceeds.

**Gift cards:** Regulated by Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013; CCA 1974 protections may apply.

[VERIFY: Confirm current QLTR guidance, Treasury Solicitor procedures, and Companies Act 2006 s.1012 provisions before finalising.]

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
