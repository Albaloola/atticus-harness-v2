---
name: customs-protest-form19
language: en
description: Drafts HMRC customs review requests and appeals challenging tariff classification, valuation, origin, and trade preference decisions. Covers HMRC reviews, Binding Tariff Information (BTI) disputes, and First-tier Tribunal (Tax) appeals. Use when challenging HMRC customs decisions, contesting tariff classification rulings, disputing valuation determinations, or pursuing post-clearance recovery appeals. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, pleading, regulatory, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# HMRC Customs Review Request / Appeal, UK Equivalent of CBP Protest

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

Draft a review request or appeal preserving rights under the Customs and Excise Management Act 1979 (CEMA), Finance Act 1994, and the UK's post-Brexit customs framework. The US CBP Form 19 protest has no direct UK equivalent; this skill adapts the methodology for the UK's review and tribunal system.

[SCOTS: Note] This skill adapts the US CBP Form 19 protest procedure for the UK/Scottish context. There is no single UK form equivalent to CBP Form 19. Instead, UK customs challenges proceed through: (1) HMRC internal review (review by HMRC's Tariff Classification Service or another specialist team), (2) appeal to the First-tier Tribunal (Tax Chamber), and (3) onward to the Upper Tribunal and Court of Session or Court of Appeal. The core drafting methodology (factual preparation, legal argument, evidence assembly) transfers directly.

## Prerequisites

Gather before drafting:

1. **Entry docs** - C88 (SAD) customs declarations, invoices, bills of lading, packing lists with CHIEF/CDS references
2. **HMRC decision docs** - C18 post-clearance demand notes, C19 quota preference refusal notices, BTI decision letters, amendment/error notices with exact dates
3. **Merchandise specs** - technical data sheets, material composition, UK Global Tariff (UKGT) commodity codes (assigned and claimed)
4. **Deadline check** -
   - BTI appeals: 30 days from notification to request HMRC review (HMRC usually offers 30 days to request review from the date of the decision)
   - C18 post-clearance demands: 30 days from notice to request review (subject to 4-year recovery limit under CEMA s. 159A)
   - Appeal to First-tier Tribunal: within 30 days of HMRC review conclusion (or 45 days if out-of-time permission sought)
5. **Standing proof** - declarant/importer of record status, indirect representative authority, or direct agent authorisation

## Quick Start

1. Extract entry data and HMRC decision details from uploaded documents
2. Verify deadline, flag any timeliness risk before proceeding
3. Identify dispute type (classification, valuation, origin, preference, AD)
4. Draft review request
5. Attach evidentiary exhibits with descriptions
6. Mark unverified citations with [VERIFY]

## Document Extraction

Search uploads for:

| Data Point | Source |
|---|---|
| CHIEF/CDS entry reference | C88 (SAD), HMRC correspondence |
| Port code + name (UK customs office) | Entry documents |
| Entry date, decision date | HMRC notice, C18/C19 |
| HMRC-assigned UKGT commodity code | HMRC ruling/notice, BTI |
| Declared vs. assessed value | C88 entry, C18 demand |
| HMRC-determined country of origin | HMRC decision |
| Verbatim HMRC decision language | Decision letters |

## Output Structure

### 1. Appellant Identification

- Full legal name (including trading name), UK registered address with postcode, Entity type + company registration number (if incorporated) / UTR, Standing basis: importer of record / declarant / indirect representative

### 2. Entry Identification

Per contested entry:
- CHIEF/CDS entry reference, Port of importation, Date of entry (DD/MM/YYYY), date of HMRC decision, All HMRC correspondence by document type, date, reference number

### 3. Contested Decision

Specify the exact determination challenged:

| Dispute Type | Required Detail |
|---|---|
| **Classification** | HMRC-assigned UKGT commodity code + duty rate (preferential or MFN) |
| **Valuation** | Declared Customs Value, HMRC-adjusted value, transfer pricing adjustments |
| **Country of origin** | HMRC-determined origin, rules of origin under UK FTAs |
| **Trade preference** | Programme (UK Developing Countries Trading Scheme, UK-EU TCA, other FTA), denial basis |
| **Post-clearance recovery** | C18 amount claimed, time period, legal basis |

State when/how HMRC communicated the decision to establish timeliness.

### 4. Grounds for Review / Appeal

Frame as affirmative legal assertion:

- **Classification**: Correct UKGT commodity code (10-digit Taric code) + duty rate, applying GIRs 1 to 6 in order
- **Valuation**: Correct method per CEMA s. 39 / The Customs (Import Declaration and Export Declaration) Regulations 2018
- **Origin**: Correct country + UK preferential trade arrangement rules
- **Preference**: Programme and qualification basis

### 5. Legal and Factual Argument

**Merchandise description** - material composition (percentages), manufacturing method, physical characteristics, functional capabilities, end use, industry standards. If the goods have changed, flag any difference from what was described at import.

**Classification disputes:**
1. Apply the Interpretative Rules (GIRs) in sequence
2. Refer to the Harmonised System Explanatory Notes (HSENs) - persuasive, not binding
3. Cite UK BTI rulings from the HMRC BTI database, distinguish adverse rulings on facts
4. Cite Upper Tribunal / Court of Session / Court of Appeal precedent with pinpoint citations

**Valuation disputes:**
1. Establish transaction value eligibility (sale for export, no restricted end-use, no indeterminate conditions)
2. Address adjustments: commissions, assists, royalties, licence fees, proceeds of resale
3. If transaction value fails, demonstrate the next statutory method in the hierarchy

**All disputes:**
- Distinguish HMRC's cited authority, Reference documentary evidence (technical literature, expert opinions, lab results, manufacturing docs)

### 6. Evidentiary Exhibits

List each with description: data sheets, expert reports/affidavits, prior HMRC BTI rulings on identical/similar goods, tribunal decisions, industry publications, manufacturing documentation.

### 7. Signature Block

Include name, title, entity, date, contact information. If representative: identify principal and professional status (solicitor, barrister, or authorised agent under The Customs (Import Declaration and Export Declaration) Regulations 2018).

## Scottish Courts Note

Customs is a reserved matter (UK Parliament). Appeals from the First-tier Tribunal (Tax) go to the Upper Tribunal (Tax and Chancery Chamber), then to the Court of Appeal (England & Wales) or the Court of Session (Scotland) - depending on where the appellant is based. An appellant based in Scotland may pursue onward appeals to the Inner House of the Court of Session. The UK Supreme Court is the final appeal on customs matters.

## Critical Checks

- **BTI validity**: BTI is valid for 3 years from issue date; revocable by HMRC only in limited circumstances (Regulation (EU) No 952/2013, as retained, arts. 34 to 35). Can be relied on only by the holder and only for goods meeting the description
- **Deadlines are short**: 30 days from decision to request review; 30 days from review conclusion to FTT appeal. Missing them requires out-of-time permission, which is discretionary
- **HMRC review first**: internal review by HMRC is mandatory before tribunal appeal (unless HMRC has already considered it and informed the taxpayer of the decision)
- **Post-clearance recovery**: HMRC generally has 4 years from the customs debt arising to issue a post-clearance demand (CEMA s. 159A)
- **Related-party transactions**: address transfer pricing and Customs Valuation methodology proactively, UK courts apply similar but distinct tests
- **Preserve all arguments**: do not concede unnecessarily; FTT considers the decision afresh (not a judicial review)
- **Criminal liability risk**: incorrect declarations can attract penalties and criminal investigation (CEMA s. 50, s. 167; Finance Act 2003 Schedules 24 to 24A). Separate legal advice recommended where deliberate wrongdoing is alleged
- **VAT implications**: customs decisions also affect import VAT treatment, preserve the VAT point even if primarily customs-focussed, Mark any unverified legal citation with [VERIFY]

## Scotland/UK Adaptation

**Statutory framework:**
- Customs and Excise Management Act 1979 (CEMA)
- Finance Act 1994 ss. 13 to 16 (appeals)
- The Customs (Import Declaration and Export Declaration) Regulations 2018 (SI 2018/1248)
- The Customs (Export) (EU Exit) Regulations 2019
- The Customs (Criminal Investigations, etc.) Regulations 2018
- Taxation (Cross-border Trade) Act 2018 (post-Brexit framework)
- The Customs Tariff (Establishment) (EU Exit) Regulations 2020 (UK Global Tariff)
- The Customs (Origin of Chargeable Goods) (EU Exit) Regulations 2020
- The Customs (Miscellaneous Provisions) (EU Exit) Regulations 2019
- Tribunals, Courts and Enforcement Act 2007 (First-tier Tribunal and Upper Tribunal)

**Post-Brexit context:**
- UK Global Tariff (UKGT) replaced EU Common Customs Tariff from 1 January 2021
- UK operates its own tariff preference schemes (UK Developing Countries Trading Scheme, UK FTAs)
- Retained EU case law on customs matters applies with modifications via the European Union (Withdrawal) Act 2018
- HMRC publishes BTI decisions publicly (unlike US confidential ruling system)

**Key differences from US CBP protest:**
- No single form equivalent to CBP Form 19; UK uses HMRC review request by correspondence followed by FTT appeal, No 180-day "protest" window; UK has shorter 30-day review windows but longer 4-year recovery limits, UK system does not use bond-based merchandise release; different pre-clearance and post-clearance framework, The First-tier Tribunal (Tax) is independent of HMRC and hears evidence de novo, BTI holders have stronger reliance rights than comparable US ruling systems, Scottish customs appeals follow the Scottish appellate route (Court of Session, not E&W Court of Appeal)

**Regulatory bodies:**
- HMRC, customs authority and revenue collection, First-tier Tribunal (Tax Chamber) - independent appeals body, Upper Tribunal (Tax and Chancery Chamber) - onward appeal, Court of Session (Inner House) - Scottish appeal route, UK Supreme Court, final appeal for customs matters

**Forms and resources (download to scots-forms/):**
- C88 (SAD) Single Administrative Document, the main customs declaration form (CDS electronic equivalent)
- C18 Post-clearance Demand Note, C19 Quota Preference Refusal Notice, BTI Decision template (HMRC)
- HMRC Customs Review Request pro-forma, First-tier Tribunal (Tax) appeal form (TXC200 series)

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
