---
name: tax-clearance-request
language: en
description: 'Drafts formal request letters for HMRC clearance or confirmation on specific tax transactions within the UK tax system. Covers clearance applications for transactions in securities, share schemes, demergers, company distributions, and other HMRC advance clearance procedures. Use when seeking statutory or extra-statutory clearance from HMRC for corporate transactions, share schemes, or other transactions requiring advance assurance. Triggers: HMRC clearance, transaction in securities clearance, share scheme clearance, advance assurance, company distribution clearance, demerger relief. [Atticus UK/Scots refined]'
tags:
- corporate, drafting, letter, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Request for HMRC Clearance / Advance Assurance, UK/Scotland Adaptation

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

Draft a formal letter or online application requesting HMRC clearance or advance assurance on a proposed transaction, confirming that HMRC will not apply specified anti-avoidance provisions, or confirming the tax treatment of a proposed arrangement.

## Required Inputs

1. **Company formation documents** - Certificate of Incorporation, Memorandum and Articles of Association with exact legal name as registered at Companies House
2. **Tax identifiers** - Corporation Tax UTR, PAYE reference, VAT registration number, all applicable HMRC reference numbers
3. **Filed returns** - all periods within clearance scope, with HMRC filing confirmations
4. **Payment records** - bank statements confirming corporation tax, PAYE, VAT payments
5. **Transaction documents** - purchase agreement, share subscription, demerger proposals, share scheme rules, board minutes, shareholder resolutions
6. **Prior correspondence** - existing clearances, HMRC rulings, enquiries, payment plans, appeal decisions

## Preliminary, UK Clearance Context

The UK tax clearance system differs substantially from the US IRS blanket clearance approach. Several distinct clearance routes exist under UK tax law:

| Clearance Type | Governing Provision | Purpose | Method |
|---------------|-------------------|---------|--------|
| **Transactions in securities** | ITA 2007, Part 13, Chapter 1 (s.684-702) | Confirm anti-avoidance provisions will not apply | Written application within prescribed time limits |
| **Company distributions** | CTA 2010, Part 23, Ch 3A | Confirm distribution treatment for certain transactions | HMRC clearance application |
| **Share schemes** | ITEPA 2003, Sch. 4 (CSOP), Sch. 5 (SIP) / Schedule 2 (SAYE) | Approval of share incentive plan / SAYE option scheme / CSOP | HMRC application and statutory approval |
| **Enterprise Investment Scheme / SEIS** | ITA 2007, Part 5 (EIS) / Part 5A (SEIS) | Advance assurance of EIS/SEIS eligibility | HMRC Advance Assurance application (non-statutory) |
| **Demerger relief** | CTA 2010, s.1074-1099 | Clearance for demerger transactions | Written clearance application |
| **Stamp duty / SDRT** | FA 1999, Sch. 13 | Clearance for share transactions | HMRC Stamp Taxes clearance |
| **Non-statutory clearance** | HMRC extra-statutory practice | Advance assurance on any transaction | HMRC non-statutory clearance procedure (guidance currently suspended or limited) |

**Note**: HMRC does not issue a general "tax clearance certificate" equivalent to US state tax clearance. Clearance is transaction-specific. The nearest equivalent for company dissolution is the notice of intended dissolution under s.1003 / s.1012 Companies Act 2006 with HMRC objection period.

## Workflow

1. **Collect and verify** - Gather all inputs above; flag any gaps to the user before drafting
2. **Identify clearance type** - Determine which statutory provision or HMRC procedure applies; check time limits and prescribed forms
3. **Confirm requirements** - Some clearances must be submitted on prescribed forms or within specific time windows before the transaction
4. **Draft application** - Follow the output structure and template below
5. **Cross-reference** - Validate legal name against Companies House records; verify all tax references against HMRC correspondence
6. **Proactive disclosures** - Surface pending enquiries, open compliance checks, disputed assessments, closure notices, or tax avoidances disclosure under DOTAS

## Output Structure

Formal business letter on company letterhead or HMRC prescribed form. 2 to 5 pages. Single-spaced.

### Required Sections

| Section | Content |
|---|---|
| **Header** | Letterhead (legal name, registered office, company number, phone, email), date, recipient HMRC clearance division |
| **Subject Line** | "Application for Clearance under [ITA 2007 s.701 / CTA 2010 s.1096 / FA 1999 Sch.13] - [Company Legal Name] - [UTR]" |
| **Purpose Statement** | What clearance is sought, by whom, transaction description, proposed completion date |
| **Entity Identification** | Legal name (per Companies House), company number, UTR, VAT number, registered office, date of incorporation, prior names |
| **Full Transaction Details** | Complete factual description of the transaction: background, structure, parties, steps, consideration, related arrangements |
| **Statutory Basis** | Cite the specific statutory provision under which clearance is sought; explain why clearance conditions are met |
| **Supporting Arguments** | Analysis of why the anti-avoidance / tax provisions should not apply, with supporting authorities |
| **Statutory Declarations** | Confirm no tax avoidance purpose; confirm transaction is for genuine commercial reasons (if required by statute) |
| **Timeline & Expediting** | Transaction deadline; request for prompt response; willingness to provide further information |
| **Enclosures** | Numbered list: board minutes, transaction documents, accounts, prior clearance correspondence, HMRC enquiry records |
| **Proactive Disclosures** | Open compliance checks, DOTAS disclosures, litigation, APNs received, follower notices, accelerated payment notices |
| **Closing & Contact** | Primary contact (name, title, phone, email); agent/advisor contact with authorisation (agent code); authorised officer signature block |

### Template, Transactions in Securities Clearance

```
[COMPANY LETTERHEAD]

[Date]

HM Revenue and Customs
Clearance Section (Transactions in Securities)
[Address / Online submission portal reference]

Dear Sir/Madam,

Application for Clearance under Section 701, Income Tax Act 2007
(Transactions in Securities)

[Company Legal Name] (the "Company"), of [registered office], registered
number [CRN], Corporation Tax UTR [XXXXX], hereby applies for clearance
under section 701 of the Income Tax Act 2007.

1. FACTUAL CIRCUMSTANCES

1.1 The Company was incorporated on [date] and its principal activity is
[description].

1.2 The current issued share capital is [number] ordinary shares of £[X]
each, held by [shareholders].

1.3 The proposed transaction is [full description].

2. THE PROPOSED TRANSACTION

[Step-by-step description of each step of the transaction.]

3. CLEARANCE SOUGHT

The Company seeks clearance under section 701 ITA 2007 that the Income
Tax treatment under sections 682-684 shall not be applied to the
proceeds arising from the transaction described above.

4. REASONS FOR CLEARANCE

4.1 The transaction is for genuine commercial reasons: [explain].

4.2 The main purpose of the transaction is not to obtain a tax advantage:
[explain].

4.3 The clearance conditions of section 685(2) are satisfied: [explain].

4.4 No arrangements exist under which a person will obtain a tax
advantage: [state].

5. ADDITIONAL INFORMATION

[Any further relevant information, authorities, or representations.]

6. STATUTORY DECLARATION

[Required statutory declaration for certain clearances.]

The following documents are enclosed in support of this application:
1. [Document list]

Please direct any correspondence to [contact name], [position], at
[phone] or [email]. [If represented: [Firm name] is authorised to
communicate with HMRC regarding this application, agent code [XXXX].]

Thank you for your prompt attention to this matter.

Yours faithfully,

[Name]
[Title]
[Company Name]

Enclosures: [count]
```

## Pitfalls and Checks

- **Legal name mismatch** - Mismatches against Companies House records cause rejection
- **Never estimate tax references** - Cross-reference every UTR/VAT number against HMRC correspondence
- **Time limits** - Most clearances must be applied for before the transaction occurs; some have specific sub-time windows
- **Transaction in securities** - Clearance must be applied for within prescribed period; HMRC response expected within 30 days
- **EIS/SEIS Advance Assurance** - HMRC aims to respond within 30 days for straightforward applications; all shares must be fully subscribed before the relevant filing
- **Demerger clearance** - Must accompany a written application with full working; HMRC practice is to respond within 28 days
- **Open enquiries** - Any open compliance check must be disclosed; unresolved issues may delay clearance
- **Disclosure of Tax Avoidance Schemes (DOTAS)** - If the arrangement involves a notifiable scheme, DOTAS reference must be provided
- **Tax Avoidance** - HMRC's clearance approach has tightened; ensure transactions do not fall within the General Anti-Abuse Rule (GAAR) under FA 2013, Part 5
- **No US-style blanket clearance** - UK system is transaction-specific; clarify with client that dissolution/pre-sale clearance differs materially from US model
- **Processing times** - Typically 28-30 days for most clearances; factor into transaction timeline
- **Missing information** - If critical data is unavailable, identify gaps explicitly and request from user before finalising

## Scotland/UK Adaptation

This skill has been adapted from US originals for use under UK/Scottish tax law.

**Key adaptations:**
- **Legal framework**: Entirely replaced US IRS clearance with UK HMRC clearance procedures under ITA 2007, CTA 2010, ITEPA 2003, FA 1999, FA 2013 (GAAR). There is no UK equivalent to US state-level dissolution tax clearance certificates.
- **Regulator**: HMRC replaces IRS and US state tax authorities. Scotland does not have a separate devolved tax authority for corporation tax; taxes are reserved to the UK Parliament under the Scotland Act 1998.
- **Clearance types**: Transactions in securities (ITA 2007 s.684-702), demergers (CTA 2010 s.1074-1099), share scheme approval (ITEPA 2003, Schedule 2-5), EIS/SEIS Advance Assurance, all replace US private letter rulings and state clearance certificates.
- **Entity numbers**: Corporation Tax UTR (10 digits), Company Registration Number (CRN at Companies House), VAT number, replace FEIN and state tax IDs.
- **Taxpayer identifiers**: UTR (Unique Taxpayer Reference) replaces FEIN. Companies House registered number replaces SOS ID.
- **No blanket clearance**: UK has no general tax clearance certificate for dissolution or licence renewal equivalent to US state practice. Company dissolution proceeds by CA 2006 s.1003 et seq. with HMRC objection period.
- **Currency**: All amounts in GBP.
- **GDPR**: UK GDPR governs data handling in clearance correspondence.
- **Scotland-specific**: Scottish companies registered at Companies House Edinburgh. Devolved taxes (Scottish income tax, LBTT) are separate from reserved taxes (corporation tax, VAT); clearance applications would be to HMRC for reserved taxes, Revenue Scotland for devolved taxes.
- **Statutory declarations**: Some clearances require statutory declarations (may be sworn before a notary public or solicitor) - no direct US equivalent.
- **GAAR**: General Anti-Abuse Rule (FA 2013, Part 5) applies to all clearance applications; HMRC may refuse clearance if the transaction is not genuine.
- **DOTAS**: Disclosure of Tax Avoidance Schemes regime applies; relevant scheme reference numbers must be disclosed.
- **Company dissolution**: The nearest equivalent to US pre-dissolution tax clearance is the CA 2006 s.1003 notice, HMRC has 3 months to object to striking-off if taxes are outstanding.
- **No separate Scottish corporate tax authority**: Corporation tax is fully reserved. Devolved taxes administered by Revenue Scotland (LBTT, SLfT) may require separate clearance for those specific taxes.

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
