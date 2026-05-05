---
name: form-d-notice
language: en
description: Atticus UK/Scots legal skill for form-d-notice. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notification of Exempt Offering (UK/FCA)

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

Produces a complete notification data set for exempt offerings under UK securities law and the retained Prospectus Regulation (EU) No 2017/1129.

**Important:** [SCOTS: Note] There is no direct equivalent to SEC Form D in the UK. This skill adapts the Form D concept for UK private placements and exempt offers. UK reporting obligations differ substantially, there is no central EDGAR-style filing for exempt offers unless Article 1(4) notifications apply.

**Filing context:** Under the UK Prospectus Regulation (retained), an issuer may need to file a notification with the FCA when relying on certain exemptions. The scope depends on whether securities are offered to the public (requiring a prospectus) or qualify for an exemption under Article 1(4) of the UK PR (qualified investors, fewer than 150 persons per EEA state, minimum denomination, etc.).

## Prerequisites

Collect before drafting:

- **Notification status**: new offering or update; date of first offer
- **Issuer identifiers**: legal name, company number (Companies House), LEI (if available), jurisdiction of incorporation, year formed, SIC code, registered office, phone, website
- **Related persons**: executive directors, non-executive directors, company secretary with registered addresses
- **Offering terms**: security type(s) (shares, bonds, convertibles), amount offered/placed, price or valuation method, minimum investment per investor
- **Exemption basis**: Article 1(4) UK PR thresholds; Nomad (AIM); private placement regime
- **Sales compensation**: placing agents/brokers, FCA registration numbers, compensation structure
- **Use of proceeds**: primary uses, escrow arrangements if any
- **Signatory**: name, title, confirmation of authority
- **Prior notifications** (amendments only)

Flag any missing items explicitly, never guess.

## Quick Start

1. Confirm filing type (initial/update) and first offer date
2. Populate issuer information from constitutional documents and Companies House
3. List all relevant directors and persons acting in concert
4. Detail offering terms per class/series
5. State exemption claimed with matching eligibility facts
6. Document sales compensation and use of proceeds
7. Prepare signature block
8. Run validation checklist

## Core Workflow

### 1. Notification Header

- Type: Initial notification or Update, Date of first offer, Company registration number

### 2. Issuer Information

| Field | Req | Notes |
|---|---|---|
| Legal name | Yes | Must match Companies House records |
| Jurisdiction | Yes | Country/state of incorporation |
| Org form | Yes | PLC / Ltd / LLP / etc. |
| Year formed | Yes | YYYY |
| SIC code | Yes | Primary line of business |
| Registered office | Yes | As per Companies House |
| Phone | Yes | |
| Website | No | If maintained |
| LEI | Yes | If required |

### 3. Related Persons

List every director and person acting in concert:

| Name | Role(s) | Registered Address |

Role definitions:
- **Executive director** - any executive board member
- **Non-executive director** - board member not in management
- **Company secretary** - statutory officer
- **Person acting in concert** - under the Takeover Code (if relevant)

### 4. Offering Details

Provide per class/series if multiple securities:

- Type of security (ordinary shares, preference shares, loan notes, convertible instruments)
- Total amount offered, Amount placed to date, Price per unit or valuation method, Minimum investment, Anticipated offer duration

### 5. Exemption Basis

| Exemption | Eligibility | Investor Limits |
|---|---|---|
| Article 1(4)(a) - Qualified investors only | Qualified investor definition under UK PR | Unlimited qualified investors |
| Article 1(4)(b) - < 150 persons | No general solicitation | Fewer than 150 persons per EEA state |
| Article 1(4)(c) - Minimum denomination | Minimum €100,000 (or equivalent) denomination per unit | Per the threshold |
| Article 1(4)(d) - Total consideration | Total offer ≤ €8,000,000 (or equivalent) | No additional limits |
| AIM/Nomad exemption | Offer through AIM with nominated adviser | Admitted to AIM |
| Private placement regime | Per FCA rules for professional clients | Professional clients only |

If also relying on FSMA s.86(1) (prospectus requirement exemptions), note basis.

### 6. Sales Compensation

- Placing agents/brokers used: Yes / No, Names and FCA registration numbers, Cash commissions, Non-cash compensation (warrants, options, etc.)

### 7. Use of Proceeds / Escrow

- Primary use(s) of proceeds, Material debt repayment (identify)
- Escrow details: agent, conditions, Minimum offer amount and close conditions

### 8. Signature Block

```
By: [Name]
Title: [Director / Company Secretary]
Date: [YYYY-MM-DD]
Authority: Duly authorised to sign on behalf of the issuer
```

## Amendment Triggers

File an amendment/update when:
- Material change to offering terms or issuer information, Correction of a material error, Change in directors or significant events [VERIFY]

## Validation Checklist

```
- [ ] Exemption conditions match actual offering conduct
- [ ] All addresses complete and consistent with Companies House
- [ ] Amounts and dates reconcile across offering documents
- [ ] FCA notification or Article 1(4) filing completed where required
- [ ] Nomad/AIM rules followed if applicable
- [ ] Relevant FSMA exemptions documented
```

## Pitfalls

- **Article 1(4)**: carefully check thresholds, smallest error can require a prospectus
- **FSMA s.85**: general prohibition on offers to the public unless prospectus or exemption applies
- **General solicitation**: UK law has different rules on marketing/mass communication than US Rule 506(c)
- **PEAP / PEMM**: Professional Securities Market rules may apply for listed debt
- **Alignment**: documents must align with subscription agreement, placing agreement, and constitutional documents, Mark uncertain legal citations with `[VERIFY]`

## Scotland/UK Adaptation

The following adaptations apply when this skill is used for Scottish/UK proceedings:

**Legislative framework:** FSMA 2000 (Financial Services and Markets Act 2000) is the primary statute. Retained UK Prospectus Regulation (EU) No 2017/1129. There is no direct EDGAR/Form D equivalent.

**Regulator:** FCA (Financial Conduct Authority) replaces SEC. PRA (Prudential Regulation Authority) for certain regulated entities. No standalone Scottish securities regulator, these are UK reserved matters.

**Filing:** No Form D. Instead, issuers may need to file: (a) Article 1(4) notification with the FCA; (b) admission document with AIM/LSE; (c) notification of major holdings under DTR 5 where applicable; (d) short-form filing for certain exemptions.

**Exemptions:** UK Prospectus Regulation Article 1(4) replaces US Reg D. The concepts of accredited/non-accredited do not directly translate, UK uses "qualified investor" (as defined in UK PR), "retail client," "professional client," and "eligible counterparty."

**Sales compensation:** Placing agents must be FCA-authorised. CRD numbers replaced by FCA registration numbers.

**Companies House:** Replaces SEC EDGAR for company filings. Annual accounts, confirmation statements, and changes in directors are filed at Companies House.

**Scotland-specific:** Scottish companies are registered at Companies House (Edinburgh or Cardiff). The Takeover Code applies equally. Scottish limited partnerships have specific rules.

**Tax:** HMRC treatment; no IRS equivalent.

**Limited offerings:** UK has no state-level "blue sky" filing equivalent. Scottish limited partnership offers follow UK FSMA requirements.

**Currency:** Use GBP (£) throughout.

[VERIFY: Confirm current UK PR thresholds, FCA notification requirements, and Article 1(4) exemption conditions before filing.]

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
