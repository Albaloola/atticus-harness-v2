---
name: stock-purchase-agreement [SCOTS]
language: en
description: 'Drafts a Share Purchase Agreement (SPA) for 100% share acquisitions in UK middle-market M&A transactions under Scots law. Covers purchase price with working capital adjustments, escrow, earnouts, seller warranties and indemnities with disclosure letters, indemnification, restrictive covenants, and closing mechanics. Trigger keywords: "share purchase agreement", "SPA", "share acquisition", "definitive purchase agreement", "M&A closing document", "sale and purchase agreement". [Atticus UK/Scots refined]'
tags:
- SCOTS, agreement, corporate, drafting, transactional, scots-law, scottish-commercial, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Share Purchase Agreement (M&A) [SCOTS]

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

Draft a definitive SPA for acquiring 100% of a target company's issued share capital in a UK middle-market transaction under Scots law.

## Prerequisites

1. **Deal documents** - LOI, heads of terms, or preliminary agreement with negotiated commercial terms.
2. **Organisational docs** - memorandum and articles of association, shareholder agreements, register of members.
3. **Capitalisation details** - authorised/issued shares, classes, each seller's ownership percentage.
4. **Financial statements** - audited/reviewed for 2+ fiscal years plus most recent interim period (UK GAAP or IFRS).
5. **Due diligence materials** - material contracts, employment agreements, IP schedules, litigation history.
6. **Negotiated economics** - purchase price, working capital target, escrow percentage, earnout terms.

## Document Intelligence

Extract from uploaded materials before drafting:

| Data Point | Source Priority |
|---|---|
| Party names, entity types, registered numbers, jurisdictions | LOI → Org docs → Correspondence |
| Cap table (shares, classes, ownership %) | Register of members → Org docs → LOI |
| Purchase price and adjustments | Heads of terms → LOI |
| Working capital target | Financial statements → Heads of terms |
| Escrow/earnout terms | LOI → Heads of terms |
| Material contracts requiring consent | Due diligence schedule |
| Disclosed liabilities/contingencies | Financial statements → Disclosure letter |
| Key employees and compensation | Employment agreements → HR records |
| Balance sheet date (MAE baseline) | Most recent financial statements |

Cite source documents when incorporating extracted terms. Flag gaps requiring user input.

## Output Structure / Process

### 1) Document Skeleton
```text
SHARE PURCHASE AGREEMENT, Parties; Effective Date; Recitals
1. Definitions and Interpretation
2. Sale and Purchase of Shares
3. Consideration; Payment; Adjustments
4. Completion; Completion Deliveries
5. Warranties of Sellers
6. Warranties of Buyer
7. Covenants (Pre-Completion; Post-Completion)
8. Conditions to Completion
9. Indemnification / Tax Covenant
10. Termination
11. General Provisions
Signatures
Exhibits and Schedules / Disclosure Letter
```

### 2) Exhibit/Schedule Map
| Label | Purpose | Must Include |
|---|---|---|
| Part 1 of Disclosure Letter | Seller schedule | Name, address, registered number (if company), shareholding, class, ownership %, price allocation, must total 100% |
| Part x of Disclosure Letter | Escrow agreement (if any) | Escrow agent, deposit amount, release schedule, claim procedures |
| Disclosure Letter | Warranty exceptions | Numbered to match each seller warranty paragraph |

### 3) Core Drafting Checklists

**Sale and Purchase of Shares**
- Sale of 100% issued share capital, free from all encumbrances and with all rights attaching.
- Seller-by-seller allocation in Disclosure Letter.
- Confirm no other shares, options, warrants, or commitments exist (statutory register confirmation).
- Transfer mechanics: stock transfer form (UK prescribed form) and share certificate delivery (or CREST transfer if applicable).

**Purchase Price and Payment**
- State aggregate price in GBP; define fixed vs adjusted price.
- If adjusted: define Net Working Capital (current assets − current liabilities per UK GAAP/IFRS consistent with historical accounts).
- Working capital adjustment procedure: completion accounts delivery (completion + 60 days) → seller review (30 days) → dispute notice → good-faith negotiation (30 days) → independent accountant (binding; fees split proportionally) → true-up payment (5 business days).
- Wire transfer of immediately available funds; allocate per Disclosure Letter.
- Note: no direct US-style FIRPTA equivalent; [SCOTS: no US-like FIRPTA withholding, consider non-resident CGT position under TCGA 1992]

**Escrow**
- Typical range: 10 to 20% of aggregate purchase price.
- Release schedule: e.g., 50% at 1st anniversary, remainder at 2nd (subject to pending claims).
- Tax withholding: buyer entitled to withhold per applicable law; withheld amounts treated as paid.

**Completion Deliveries**
- Seller: share certificates with executed stock transfer forms, board/management resignations with releases, certificate of good standing (or equivalent from Companies House), compliance certificate, third-party consents, lender discharge letters and satisfactions of floating charges, non-resident CGT clearance (if applicable), key employee employment/restrictive covenant agreements.
- Buyer: purchase price payment (less escrow/holdbacks), compliance certificate, executed ancillary agreements, escrow deposit.

**Sellers' Warranties**
- Structure as joint and several (or several only per deal terms). All subject to disclosure letter.
- Fundamental warranties (extended survival): incorporation/good standing, authority/enforceability, share capital (authorised/issued, fully paid up, no options/warrants), title to shares (free from encumbrances).
- Business warranties (standard survival): accounts (prepared in accordance with UK GAAP/IFRS, true and fair view), no undisclosed liabilities, absence of material adverse change, compliance with laws, litigation, tax (returns filed and paid in full, no current audits, PAYE/NIC/VAT compliance), material contracts, IP (ownership, no infringement), real/personal property, employees/pensions (Pension Act 1995, auto-enrolment compliance, employer contributions), environmental, insurance, related party transactions, full disclosure.
- [SCOTS: Warranty language follows English/Scots law tradition - "warrants" not "represents and warrants"; full disclosure letter required, not disclosure schedules]

**Buyer's Warranties**
- Incorporation/good standing, authority/enforceability, no conflicts, financial capacity, investment representations (if unregistered securities).

**Pre-Completion Covenants**
- Operate in ordinary course consistent with past practice; preserve business organisation.
- Prohibited actions without buyer consent: amend articles of association, issue shares, declare dividends, acquire/dispose assets above threshold, incur debt, CapEx above threshold, modify material contracts, increase compensation/benefits (other than contractual), settle litigation, related party transactions.
- Buyer access: reasonable access during business hours to properties, books, records, personnel.

**Restrictive Covenants (Post-Completion)**
- Non-compete: specific activities and geography; duration (typically 1 to 3 years in UK, longer periods risk unenforceability as restraint of trade); passive ≤5% listed company exception.
- Employee/customer/supplier non-solicitation: matching or longer duration (commonly 12 to 24 months).
- Confidentiality: indefinite; publicly available info and legally compelled disclosure excepted.
- Include severability language; [SCOTS: Scottish courts may apply restraint of trade doctrine strictly, consider reasonable protection of legitimate business interest test (Norderfelt v Maxim Nordenfelt)]

**Additional Covenants**
- Reasonable endeavours to complete; mutual consent for public announcements; each party bears own expenses.
- Tax covenant: pre/post-completion allocation (interim closing of accounts or pro rata), apportionment for non-annual periods, HMRC filings and returns.

**Indemnification / Tax Covenant**
- Sellers indemnify for: warranty breaches, covenant breaches, undisclosed liabilities, unpaid transaction expenses, pre-completion tax liabilities.
- Buyer indemnifies for: warranty breaches, covenant breaches, post-completion liabilities.
- Survival: fundamental warranties 3 to 5 years or indefinite; tax warranties 6 to 7 years (HMRC enquiry window); general warranties 12 to 24 months; covenants until performed.
- Seller liability limits: de minimis £1,000 to £5,000; basket/excess 0.5 to 2% of consideration; cap 20 to 50%; carve-outs for fundamental warranties, tax covenant, fraud.
- Third-party claims: prompt notice → indemnifying party may assume defence (20 to 30 days) → no settlement without consent if admits liability or imposes restriction.
- Losses net of insurance proceeds, third-party recoveries, and tax benefits actually received; exclude consequential damages (except third-party awards); mitigation required.
- Escrow as sole recovery source during escrow period (if negotiated): claim notice → 30-day objection → release or hold.
- Exclusive remedy for warranty/covenant breaches (except fraud and equitable relief).

**Termination**
- Triggers: mutual consent, outside date (3 to 6 months), governmental prohibition, material uncured breach (30-day cure), MAE (if negotiated).
- Effects: all obligations terminate except confidentiality, expenses, and wilful breach liability.
- Consider break fee / reverse break fee provisions.

**General Provisions**
- Governing law: Scots law; exclusive Scottish court jurisdiction (Court of Session, Edinburgh, or Sheriff Court); [SCOTS: Note English jurisdiction is common for UK SPAs even where Scots law applies, confirm party preference].
- Entire agreement; written amendments only; written notices (delivery, courier, email); no assignment without consent (buyer may assign to affiliates); severability; counterparts with electronic signatures; "including" means "without limitation"; no third-party beneficiaries; time is of the essence.
- [SCOTS: Execution, Scots law permits electronic signatures under the Electronic Communications Act 2000 and the Law of Scotland; holograph writings and attestation requirements differ from English practice]

## Guidelines

- Extract and cite specific terms from uploaded deal documents; flag gaps requiring user input.
- Balance buyer-protective structure with reasonable seller limitations (de minimis, baskets, caps, survival).
- Use defined terms consistently; capitalise when used as defined terms.
- Verify all cross-references, section numbers, and exhibit references for internal consistency.
- Address tax covenant and disclosure letter mechanics.
- Include non-resident CGT considerations (TCGA 1992) - no FIRPTA equivalent in UK/Scots law.
- Restrictive covenant scope must be reasonable and enforceable under Scots law restraint of trade doctrine, flag if jurisdiction disfavours non-competes.
- Match disclosure letter to each warranty paragraph and keep numbering consistent.
- Mark any uncertain statutory citations with [VERIFY].
- [SCOTS: Note stamp duty / SDRT, SDRT at 0.5% on share transfers; consider clearance services or CREST settlement]
- [SCOTS: Companies House filing, prescribed particulars delivered for registration within 14 days; Form SH01 for allotment, annual confirmation statement]

## Scotland/UK Adaptation

Key differences between US and Scottish/UK share purchase agreement practice:

| US Concept | Scottish/UK Equivalent |
|---|---|
| Stock Purchase Agreement | Share Purchase Agreement (SPA) / Sale and Purchase Agreement |
| "Represents and warrants" | "Warrants" - English/Scots law tradition does not duplicate representation and warranty |
| Disclosure Schedules | Disclosure Letter (single letter with numbered paragraphs matching warranties) |
| Dollars (USD) | Pounds Sterling (GBP £) |
| Delaware General Corporation Law | Companies Act 2006 (UK-wide); Scots law governs agreement interpretation |
| US federal securities laws / SEC | No direct equivalent, UK prospectus regime (FSMA 2000, MAR) for public offers |
| Articles of Incorporation / Bylaws | Memorandum and Articles of Association |
| FIRPTA certificates (non-US seller) | [SCOTS: No direct equivalent] - non-resident CGT under TCGA 1992; UK resident withholding tax considerations |
| UCC-3 termination statements | Satisfaction of floating charges, file Form MR04 with Companies House (Scotland has separate Register of Floating Charges) |
| Section 1060 allocation (tax) | No direct equivalent, HMRC does not use 1060 allocation; tax covenant typically governs apportionment |
| Form 8594 (Asset acquisition tax form) | [SCOTS: No direct equivalent] - HMRC filings for stamp duty / SDRT; no equivalent to IRC §1060/8594 |
| ERISA compliance | Pensions: Pensions Act 1995, auto-enrolment (Pensions Act 2008), PPF, completely different framework |
| Sellers' counsel typically delivers legal opinions | Legal opinions from Scottish solicitors less common in private M&A, more typical in English high-value transactions |
| US-style indemnity escrow | Escrow arrangements are used but less standardised; warranty and indemnity (W&I) insurance increasingly common in UK M&A |
| Delaware Court of Chancery / NY courts | Court of Session, Edinburgh (exclusive Scottish jurisdiction) |
| Supreme Court (conservatorship) | No US-style conservatorship, Scottish courts have nobile officium for extraordinary cases |
| Stock powers and certificates | Stock transfer form (UK prescribed form; see Stock Transfer Act 1963); CREST for electronic settlement |
| Non-compete (varies by state) | Restraint of trade doctrine (Norderfelt test); typically 1 to 3 years for UK SPAs |
| Jury trial waiver clauses | [SCOTS: No right to jury in civil commercial matters, waiver not needed] |
| Attorneys | Solicitors and (where instructed) advocates |
| Arbitration: AAA Commercial Rules | Arbitration: Scottish Arbitration Centre or LCIA; or court litigation |

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
