---
name: form-8k
language: en
description: Drafts SEC Form 8-K current reports with item-accurate narratives, exhibit indexing, and EDGAR-ready formatting. Use when a public company must disclose a reportable event (material agreement, acquisition, personnel change, Reg FD disclosure) or file a current report within four business days. Trigger on "Form 8-K", "current report", "8-K filing", "EDGAR", "Item 1.01", "Item 2.01", "Item 5.02", "Reg FD". [Atticus UK/Scots refined]
tags:
- SCOTS, corporate, securities, drafting, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Form 8-K Current Report

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

Drafts an EDGAR-ready Form 8-K from verified source documents. Requires triggering event facts (dates, parties, terms), registrant identifiers from the latest 10-K/10-Q, item selection with rationale, and source documents (agreements, resolutions, press releases, employment/separation docs).

## Quick Start

1. Collect registrant identifiers: exact legal name, Commission File No., CIK, IRS EIN, state of incorporation, fiscal year end, address, phone, trading symbols.
2. Identify triggered items using the Item Selection Matrix below.
3. Gather source documents for each triggered item.
4. Draft cover page, item narratives, exhibit index, and signature block.
5. Run quality checks before finalizing.

## Cover Page Fields

All sourced from latest 10-K/10-Q cover unless noted:

- Registrant exact legal name, Commission File No., CIK, IRS EIN, State of incorporation (charter or 10-K/10-Q)
- Fiscal year end, principal executive offices address and phone, Trading symbol(s) and exchange(s) [VERIFY]
- Reporting item checkboxes and Rule 425/14a-12/14d-2/13e-4 communication checkboxes [VERIFY]
- If 8-K/A, indicate amendment

## Item Selection Matrix

| Item | Trigger | Required Narrative | Typical Exhibits |
|---|---|---|---|
| 1.01 | Material definitive agreement entered | Date, parties, purpose, key terms, duration, termination, conditions | Agreement (10.x) |
| 1.02 | Material definitive agreement terminated | Date, parties, reason, fees/obligations | Termination notice (10.x) |
| 2.01 | Acquisition/disposition completed | Date, assets/business, consideration, structure, significance | Purchase agreement (10.x), pro forma (99.x) |
| 2.02 | Results of operations/financial condition | Reference press release/presentation; note furnished status | Press release (99.x) |
| 2.03 | Direct financial or off-balance-sheet obligation created | Date, amount, terms, maturity, covenants, default events | Credit agreement (10.x) |
| 2.05 | Exit/disposal costs | Plan nature, expected charges, timing | Board materials (99.x) |
| 2.06 | Material impairment | Nature, amount, timing | Press release (99.x) |
| 3.02 | Unregistered equity sales | Date, securities, exemption, consideration | Subscription/SPA (10.x) |
| 5.02 | Director/officer appointment, departure, or compensation | Name, title, effective date, background, compensation | Offer/separation letter (10.x) |
| 5.03 | Charter/bylaws amendment or fiscal year change | Amendment description, effective date | Charter/bylaws (3.1/3.2) |
| 7.01 | Regulation FD disclosure | Description of furnished information | Presentation (99.x) |
| 8.01 | Other events | Factual description, materiality context | Press release (99.x) |
| 9.01 | Financial statements and exhibits | Identify financials, list all exhibits | FS/pro forma (99.x), agreements (10.x) |

## Narrative Drafting

Use objective, non-promotional language. Cite only verifiable facts. State event date and any different effective date. Use exact legal names and titles. Quantify all material dollar amounts. Align narratives with press releases and exhibits.

**Item 1.01 - Material Definitive Agreement:**

```text
On [Date], [Registrant] entered into [Agreement Title] with [Counterparty].
The agreement relates to [Purpose/Transaction].
Material terms: [Consideration], [Duration], [Termination Rights], [Key Conditions], [Material Covenants].
Effective [Effective Date]; terminable upon [Conditions].
```

**Item 5.02 - Personnel Change:**

```text
Effective [Date], [Name] was [appointed/resigned/terminated] as [Title].
Background: [Prior roles, relevant experience].
Compensation: [Base salary], [Bonus], [Equity], [Severance], [Other material terms].
No family relationships or related-party transactions with directors/officers, except [if any].
```

## Item 2.01 / 9.01 Financials

- Apply Reg S-X Rule 3-05 and Article 11 significance tests [VERIFY].
- Determine if audited target financials and pro forma financials are required.
- If unavailable, state they will be filed by amendment within 71 calendar days of the 8-K due date (Item 9.01 safe harbor) [VERIFY].

## Exhibit Index (Item 9.01(d))

| Exhibit No. | Description | Status |
|---|---|---|
| 2.1 | Purchase agreement for [Transaction] | Filed |
| 3.1 | Amended and Restated Certificate of Incorporation | Filed |
| 10.1 | Material definitive agreement | Filed |
| 99.1 | Press release dated [Date] | Furnished |
| 99.2 | Investor presentation dated [Date] | Furnished |

Filed = binding obligation or governance document. Furnished = Items 2.02 and 7.01 press releases and presentations (not subject to Section 18 liability).

## Signature Block

```text
Pursuant to the requirements of the Securities Exchange Act of 1934, the registrant has duly caused this report to be signed on its behalf by the undersigned hereunto duly authorized.

Date: [Filing Date]

[Registrant Name]

By: __________________________
Name: [Officer Name]
Title: [Officer Title]
```

## Quality Checks

- [ ] All dates, names, and amounts match source documents
- [ ] Item numbers match described events
- [ ] Exhibits referenced are attached and correctly numbered
- [ ] Items 2.02 and 7.01 materials are furnished (not filed)
- [ ] Narratives consistent with press releases and exhibits
- [ ] Signature authority documented or customary
- [ ] Filing deadline confirmed from triggering event date

## Pitfalls

- **No projections or opinions** unless required by the item or in furnished materials.
- **Forward-looking statements**: If an exhibit contains them, include cautionary language in that exhibit.
- **8-K/A**: Use for material corrections or delayed financials under Item 9.01.
- **Confidential treatment**: Flag Rule 24b-2 and prepare a separate application [VERIFY].
- **EDGAR formatting**: Maintain compatible formatting; avoid typographical inconsistencies.

---

## Scotland/UK Adaptation

### Core Concept Conversion

Form 8-K is a US-specific SEC filing. In the UK, equivalent disclosure obligations arise under different regulatory frameworks depending on the company's listing status.

| US Concept | UK/Scottish Equivalent |
|---|---|
| SEC (Securities and Exchange Commission) | **FCA** (Financial Conduct Authority) / UKLA |
| EDGAR filing system | **RNS** (Regulatory News Service) / **Companies House** electronic filing |
| Form 8-K, Current Report | **RNS notification** - requires immediate disclosure of inside information under UK MAR |
| 4 business day filing deadline | **As soon as possible** under UK MAR (Article 17(1)) |
| Form 8-K items mapped to Regulation S-K | **DTR** (Disclosure Guidance and Transparency Rules) and **UK MAR** |
| FD Regulation | **UK MAR** - prohibits selective disclosure of inside information |
| 10-K / 10-Q | **Annual report** (Companies Act 2006 s. 447) / **Half-yearly report** (DTR 4.2) |

### UK Disclosure Triggers Equivalent to 8-K Items

| 8-K Item | UK Equivalent |
|---|---|
| 1.01 Material definitive agreement | Inside information (UK MAR Art. 17) |
| 1.02 Termination of material agreement | Inside information disclosure (UK MAR Art. 17) |
| 2.01 Acquisition/disposition | Class 1 / Class 2 transaction (LR 10 and LR 11) |
| 2.02 Results of operations | Half-year / preliminary results, DTR 4 / LR 9 |
| 2.03 Financial obligation | Inside information / Listing Rules notification |
| 5.02 Director changes | LR 9.6.11 / DTR 3.1 - immediate notification |
| 5.03 Articles amendment | LR 9.6.1 / Companies House, file within 15 days |
| 7.01 Reg FD | UK MAR controls inside information; no "furnished" concept |
| 8.01 Other events | Inside information / voluntary disclosure |

### Key UK/Scottish Regulatory Framework

1. **UK Market Abuse Regulation (UK MAR)** - Article 17 requires disclosure of inside information "as soon as possible".
2. **FCA Disclosure Guidance and Transparency Rules (DTR)** - Ongoing disclosure obligations for listed companies.
3. **UK Listing Rules (LR)** - Class 1 and Class 2 transaction disclosure rules.
4. **Companies Act 2006** - Filing obligations at Companies House for charges, director changes, share capital changes, annual accounts.
5. **AIM Rules** - For companies traded on AIM (different disclosure thresholds, filing via RNS).

### Key Differences for Practitioners

1. **No Form 8-K, use RNS** - UK companies disclose via Regulatory Information Service (RNS), not EDGAR.
2. **"As soon as possible" vs. 4 business days** - UK MAR requires immediate disclosure, not a fixed window.
3. **Inside information** - narrower concept than many 8-K items. Not every material agreement triggers disclosure, only price-sensitive information.
4. **FCA not SEC** - Different rulebooks and enforcement structure.
5. **Companies House** - Many events must be filed at Companies House (e.g., 14 days for director changes).
6. **LBTT** - Scottish property transactions have Land and Buildings Transaction Tax returns, not IRS forms.
7. **SPA alignment** - In UK M&A, RNS announcement wording is often negotiated pre-completion.

### Recommended Approach

- Use this skill's **structural methodology** (item identification, narrative drafting, exhibit indexing) but convert every reference to UK MAR / FCA / DTR / LR / Companies Act equivalents.
- Replace all EDGAR references with RNS / Company Announcements Office (CAO) requirements.
- Replace all US securities law citations with UK MAR, FSMA 2000, Companies Act 2006, and FCA Handbook references.
- Mark all citations as `[VERIFY]` - UK MAR and FCA rules evolve post-Brexit.

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
