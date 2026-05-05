---
name: form-10-q
language: en
description: Atticus UK/Scots legal skill for form-10-q. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Half-Yearly Financial Report / Interim Report (UK DTR 4.2)

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

[SCOTS: Note] This skill adapts a US SEC Form 10-Q quarterly report template for the UK regulatory framework. There is no UK equivalent to Form 10-Q. Instead, UK-listed issuers file half-yearly financial reports (DTR 4.2) covering a six-month period, with condensed financial statements under IAS 34. Quarterly reporting is voluntary for most UK companies. AIM companies follow AIM Rule 18 (half-yearly). Scottish incorporated companies follow the same UK legislation (Companies Act 2006) with Companies House registration in Edinburgh.

Produce a DTR 4.2-compliant half-yearly / interim financial report with required financial and narrative disclosures.

## Prerequisites

1. **Issuer identity**: legal name, Companies House registration number, LEI, ticker/exchange, registered office, jurisdiction (Scotland/England/Wales/NI).
2. **Period end date**: half-year end date (e.g., 30 June) and comparative period (prior year half-year).
3. **Filer status**: Main Market / AIM / AQSE; UK Corporate Governance Code application; FCA regulated if applicable.
4. **Prior annual report and prior half-yearly report** for roll-forward disclosures and comparative figures.
5. **Condensed interim financial statements under IAS 34**: condensed statement of financial position, comprehensive income, changes in equity, cash flows; selected explanatory notes.
6. **Management commentary**: review of business performance and position since year-end, principal risks and uncertainties for the remaining half-year, related-party transaction updates.
7. **Directors' responsibilities statement**: confirmation that the condensed financial statements have been prepared in accordance with IAS 34, DTR 4.2, and the Companies Act 2006.
8. **Related-party transaction updates**: material related-party transactions during the interim period.
9. **Directors' interests updates**: changes in directors' shareholdings since year-end.
10. **Auditor review report**: if voluntarily reviewed, include IAS 34 auditor's review report (ISRE 2410).

## Output Structure / Process

### Front Cover / Title

Exact issuer name, half-year ended date, Companies House registration number, LEI, ticker/exchange, registered office address. Conform to DTR 4.2 format requirements. May include "Half-Yearly Financial Report" or "Interim Report [Period] [Year]".

### Management Commentary / Strategic Report

**Review of Operations** (equivalent to MD&A):

```text
Summary of Results
Review of Business Performance
Segment Analysis (if applicable)
Financial Position and Cash Flows
Post-Balance Sheet Events
Going Concern Assessment
```

Quantify material changes; explain volume, price, mix, and cost drivers in narrative form. The commentary must comply with Companies Act 2006 s 414A to D (Strategic Report) if combined; otherwise follow DTR 4.2.7R and FCA guidance.

**Principal Risks and Uncertainties** (DTR 4.2.7R(3)):

- Update to principal risks disclosed in the annual report, Risks facing the remaining half of the financial year, Emerging risks identified since year-end, Risk management actions taken

### Condensed Interim Financial Statements (IAS 34)

**Balance Sheet (Statement of Financial Position)**: half-year end and prior year end comparatives.

**Income Statement (Statement of Comprehensive Income)**: half-year and cumulative period with prior-year comparatives.

**Cash Flow Statement**: half-year and cumulative, with prior-year comparatives. IFRS format (indirect method typical).

**Statement of Changes in Equity**: half-year and prior-year comparatives.

**Selected Explanatory Notes** (IAS 34, para 16):
- Basis of preparation and accounting policies, Seasonality or cyclicality disclosure, Segment revenue and results (if applicable)
- Related-party transactions, Contingencies and commitments, Subsequent events, Changes in share capital and earnings per share, Impairment, restructuring, litigation updates, Business combinations, discontinued operations (if material)

### Directors' Responsibilities and Confirmation

Standard wording: "The directors confirm that to the best of their knowledge:

(a) the condensed interim financial statements have been prepared in accordance with IAS 34;
(b) the interim management report includes a fair review of the information required by DTR 4.2.7R."

### Other Information (if applicable)

| Item | Content | Key Rules |
|------|---------|-----------|
| Directors' interests | Shares and share options held; changes since year-end | DTR 3.1; UK MAR |
| Major shareholdings | Notifiable interests reported under DTR 5 | DTR 5.1 |
| Related party transactions | Material transactions in the half-year | IAS 24; DTR 4.2.8R |
| Share capital changes | Allotments, buybacks, treasury shares | Companies Act 2006, Part 17 |
| Dividend announcements | Interim dividend declared; previous year comparatives | Articles of association |
| Subsequent events | Material post-balance sheet events | IAS 10 |

### Signatures

- Board of directors' responsibility statement, Date of approval, Signature of director (or company secretary) authorised for this purpose

### Filing

- **Filing deadline**: within 3 months of half-year end (DTR 4.2.3R)
- **Filing method**: FCA National Storage Mechanism (NSM) via an approved mechanism (e.g., Business Wire, PR Newswire, company website)
- **RNS announcement**: via a Primary Information Provider (PIP) - e.g., RNS, Business Wire
- **Company website**: must be made available on the issuer's website (DTR 4.2.10R)
- **Companies House**: half-yearly reports are not filed at Companies House (only annual accounts)
- **XBRL**: HMRC IXBRL tagging required for year-end only; half-yearly does not require XBRL unless voluntarily prepared
- **Scottish companies**: same filing obligations, Companies House Edinburgh for annual accounts

## Quality Checks

- Cross-foot all financial statements; reconcile to management commentary and notes, Verify cross-references, page numbers, and incorporation-by-reference, Confirm units and rounding consistency (typically £'000 or £m)
- Confirm principal risks and uncertainties are updated, not just copied from annual report, Confirm directors' responsibilities statement matches DTR 4.2.10R requirements [VERIFY]
- Confirm auditor review report (if included) is structured per ISRE 2410
- Validate RNS/regulatory announcement for regulatory news feed (PDF + headline + summary)
- For Scottish issuers: confirm registered office and Companies House reference are correct

## Guidelines

- Use company-specific, quantified explanations; avoid boilerplate management commentary, Mark uncertain rule citations with `[VERIFY]`
- If certain DTR 4.2 items have no material update, state "no material change since the 20XX annual report"
- Do not incorporate by reference unless explicitly permitted under DTR 4.2 - UK practice favours full disclosure within the document, Plain language per FCA guidance and good UK practice (no requirement equivalent to SEC Rule 421(d) plain English rules, but strongly recommended)
- Coordinate with finance team, auditors, legal counsel (solicitors/advocates in Scotland), and company secretary
- **Scotland-specific**: Scottish incorporated companies must meet all same DTR obligations, but registered office and filing reference differ (Companies House Edinburgh)
- For Court of Session / Sheriff Court jurisdiction disclosures (legal proceedings), include Scotland-specific court references where relevant
- **AIM companies**: follow AIM Rule 18 (half-yearly report) - no DTR 4.2 obligations, but similar substance; no auditor review required unless stated in articles

## Scotland/UK Adaptation

This skill has been adapted from a US SEC Form 10-Q quarterly report template.

### Key changes

| US (SEC Form 10-Q) | UK/Scotland |
|---|---|
| SEC / EDGAR filing | FCA National Storage Mechanism; PIP (RNS/PR Newswire) |
| Form 10-Q (quarterly) | DTR 4.2 Half-Yearly Financial Report (six-monthly) |
| US GAAP | IFRS / IAS 34 (condensed interim) |
| Regulation S-K Item 303 (MD&A) | DTR 4.2.7R (management commentary); Companies Act 2006 s 414A to D (Strategic Report) |
| SOX 302 / 906 certifications | Directors' Responsibilities Statement (DTR 4.2.10R) |
| EDGAR XBRL (Exhibit 101) | No XBRL required for half-yearly; HMRC IXBRL for annual |
| Large accelerated / accelerated / non-accelerated filer status | Main Market / AIM / AQSE; premium / standard listing |
| SEC File Number / EIN | Companies House number / LEI |
| Ticker / exchange | Ticker and exchange (same) |
| S-K Item 103 (legal proceedings) | DTR 4.2.7R (fair review); IFRS contingencies note |
| S-K Item 503(c) (risk factors) | Principal Risks and Uncertainties (DTR 4.2.7R(3)) |
| Item 2 - Equity transactions / repurchases | Companies Act 2006 (share buybacks, treasury shares) |
| 40/45 day filing deadline | 3 months from half-year end |
| SEC review and comment | FCA / UKLA may review; less routine |
| Report covers quarterly + YTD | Report covers single six-month period |
| Incorporates SOX internal control assessment | No equivalent public reporting on ICFR; only board responsibility |
| Section 404 ICFR | UK Corporate Governance Code (internal controls); separate process |

### Key UK/Scotland legislation

| Legislation | Role |
|---|---|
| Disclosure Guidance and Transparency Rules (DTR) | FCA rules for periodic financial reporting |
| UK MAR (Market Abuse Regulation) | Inside information; PDMR dealings |
| International Accounting Standards (IAS) 34 | Condensed interim financial reporting |
| Companies Act 2006 (c 46) | Accounts, strategic report, directors' duties |
| UK Corporate Governance Code | Board composition, risk, internal control reporting |
| AIM Rules for Companies | AIM-specific disclosure and reporting |
| FCA Listing Rules | Premium and standard listing requirements |

### Forms

Download relevant UK financial reporting guidance into `scots-forms/`:
- **FCA Handbook, DTR 4 (Periodic Financial Reporting)**: https://www.handbook.fca.org.uk/handbook/DTR/4/
- **IAS 34 - Interim Financial Reporting**: https://www.ifrs.org/issued-standards/list-of-standards/ias-34/
- **FCA National Storage Mechanism**: https://data.fca.org.uk/#/nsm/nationalstoragemechanism
- **UK Companies House**: https://www.gov.uk/government/organisations/companies-house
- **London Stock Exchange AIM Rule 18 (Half-Yearly Reports)**: https://www.londonstockexchange.com/
- **Financial Reporting Council (FRC) guidance**: https://www.frc.org.uk/

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
