---
name: shelf-registration-s3
language: en
description: Drafts SEC Form S-3 shelf registration statements for eligible U.S. public companies under the Securities Act of 1933. Verifies issuer eligibility (public float, investment grade, WKSI), structures all disclosure sections, and assembles exhibits for delayed or continuous offerings. Use when drafting Form S-3, shelf registration, securities registration, capital markets filings, or continuous offering documents. [Atticus UK/Scots refined]
tags:
- SCOTS, corporate, drafting, regulatory, analysis, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Shelf Registration Statement (Form S-3)

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

Drafts a Form S-3 shelf registration enabling eligible public companies to register securities for delayed or continuous offerings over a three-year period.

## Prerequisites

1. **Corporate documents** - charter, bylaws, board resolutions authorizing filing
2. **Recent SEC filings** - latest 10-K, subsequent 10-Qs, 8-Ks, prior registration statements
3. **Capital structure** - outstanding shares by class, debt instruments, credit agreements, warrant/option schedules
4. **Public float calculation** - aggregate market value of voting and non-voting common equity held by non-affiliates (within 60 days of filing)
5. **SEC identifiers** - CIK code, file number, reporting history
6. **Offering parameters** - security types, maximum aggregate offering amount, capital raising objectives

## Eligibility Verification

Confirm one pathway before drafting:

| Pathway | Requirements |
|---|---|
| **I.B.1 - Public Float** | US/Canadian org + Section 12(b)/12(g) registered + 12 months reporting + reports current + public float ≥ $75M |
| **I.B.2 - Investment Grade** | Same reporting requirements + non-convertible securities rated investment grade |
| **WKSI** | All I.B.1 + either (a) worldwide public float ≥ $700M or (b) ≥ $1B non-convertible securities issued in registered offerings in prior 3 years |

WKSI: automatic effectiveness upon filing under Rule 462(e).

## Output Structure

### 1. Cover Page

- [ ] Registrant legal name, jurisdiction of incorporation, IRS EIN
- [ ] Principal executive offices address and telephone
- [ ] Agent for service of process with contact details
- [ ] Each security class with precise title (e.g., "Common Stock, par value $0.01 per share")
- [ ] Maximum aggregate offering price (specific or "to be determined from time to time")
- [ ] Fee calculation per Rule 457(o) using current SEC rate
- [ ] Eligibility checkbox referencing applicable General Instruction
- [ ] WKSI checkbox if applicable
- [ ] Incorporation by reference list with titles, dates, file numbers

### 2. Prospectus Summary

1. **Business description** - from 10-K Business section: operations, markets, differentiation
2. **Shelf mechanism** - security types covered, aggregate amount, supplement-based takedowns
3. **Use of proceeds overview** - general capital allocation framework
4. **Key financials** - revenue, net income/loss, total assets, stockholders' equity, trends
5. **Risk factors roadmap** - preview of major categories

### 3. Risk Factors (Item 503(c) Reg S-K)

Organize by category, descending materiality within each:

| Category | Coverage |
|---|---|
| Business/Industry | Competition, concentration, technology obsolescence, key personnel |
| Financial | Cash flow, covenant compliance, interest rate/FX exposure, loss history |
| Legal/Regulatory | Pending litigation, regulatory changes, compliance costs |
| Securities | Market volatility, limited volume, analyst coverage |
| Shelf-Specific | Dilution, timing/pricing uncertainty, management discretion, subordination |

Format each: heading → circumstances → consequences → mitigating factors. Tailor to registrant facts, no generic boilerplate. [VERIFY: SEC routinely comments on generic risk factors]

### 4. Use of Proceeds

- General uses: working capital, capex, R&D, acquisitions, debt repayment, general corporate, Identified projects with estimated cost ranges and timelines where available, Debt repayment: identify obligations (principal, rate, maturity, prepayment terms)
- Allocation priority or management discretion statement, Pending-use policy: short-term, investment-grade instruments, Specific allocation deferred to prospectus supplements

### 5. Description of Securities

Draft framework descriptions per registered class:

**Common Stock** - voting rights, dividend rights/restrictions, liquidation priority, conversion/preemptive/anti-dilution features; incorporate by reference Section 12 description

**Preferred Stock** - board authority to issue series and fix terms; framework for dividends, liquidation preferences, voting, conversion, redemption, sinking fund; specific terms per supplement

**Debt Securities** - base indenture framework; term-setting: principal, maturity, rate, payment dates, ranking, redemption, covenants, events of default, modification; trustee identification; senior/subordinated, secured/unsecured, convertible/non-convertible per offering

**Warrants / Purchase Contracts / Units** - exercise terms framework, anti-dilution adjustments; specifics per warrant agreements filed with supplements

### 6. Incorporation by Reference

- [ ] Most recent Form 10-K (Sections 13(a) or 15(d))
- [ ] All subsequent Form 10-Qs
- [ ] All subsequent Form 8-Ks (exclude Items 2.02 and 7.01 furnished information)
- [ ] Section 12 registration statement description of common stock

Include forward-incorporation language: future filings under Sections 13(a), 13(c), 14, or 15(d) automatically incorporated from filing date. Later statements supersede earlier ones.

Provide copy-request instructions: investor relations contact, EDGAR URL, company website with non-incorporation disclaimer.

### 7. Undertakings (Item 512 Reg S-K)

Include verbatim regulatory language:

| Item | Substance |
|---|---|
| 512(a)(1) | Post-effective amendments for 10(a)(3) compliance, fundamental changes, material distribution plan changes |
| 512(a)(2) | Each amendment deemed new registration; offering deemed initial bona fide offering |
| 512(a)(3) | Removal of unsold securities at termination |
| 512(a)(5) | (WKSI only) Rule 424(b) prospectus filing and incorporation |
| 512(a)(6) | SEC indemnification policy, indemnification against Securities Act liability unenforceable |
| 512(h) | Respond to incorporation-by-reference requests within one business day |

### 8. Signature Page

- [ ] Registrant signature by authorized officer
- [ ] Principal executive officer, financial officer, controller/accounting officer
- [ ] Majority of board of directors
- [ ] Power of attorney if used, file as Exhibit 24

WKSI automatic shelf: signature date = filing date (effective immediately).

### 9. Exhibits Index (Item 601 Reg S-K)

| Exhibit | Description | Status |
|---|---|---|
| 1 | Underwriting agreement | Filed or to be filed via 8-K per takedown |
| 3.1 | Certificate of incorporation | Filed or incorporated by reference |
| 3.2 | Bylaws | Filed or incorporated by reference |
| 4.x | Security holder rights instruments | Filed herewith or by amendment |
| 5 | Opinion of counsel, legality | Filed herewith |
| 23.1 | Auditor consent | Filed herewith |
| 23.x | Other expert consents | As applicable |
| 24 | Powers of attorney | If applicable |
| 25 | Form T-1 - trustee eligibility | If debt securities |
| 107 | Filing fee table | Filed herewith |

For each: indicate filed herewith, incorporated by reference (cite file number, type, date, exhibit), or to be filed by amendment.

## Checks

- Cross-check all financial data against incorporated filings; verify internal cross-references, Forward-looking statements must include PSLRA safe harbor language, EDGAR compliance: HTML tagging, file formats, size limits per Filer Manual
- [VERIFY: current SEC fee rate at filing date]; show computation clearly, Every risk factor must tie to registrant-specific facts, Use of proceeds must align with MD&A priorities in incorporated filings, Verify all exhibit hyperlinks resolve correctly, Structure aggregate amount and security types for full three-year shelf life, Base prospectus establishes frameworks only, do not over-specify terms belonging in supplements

---

**Key changes from the original:**

- **Frontmatter**: Dropped `research` tag (not a primary mode), tightened description with trigger keywords
- **Description of Securities**: Collapsed from verbose sub-sections with bullet lists into dense single-paragraph-per-class format, same content, ~40% fewer tokens
- **Signature Page**: Merged officer roles into one checklist item instead of four separate lines
- **Exhibits Index**: Shortened descriptions (e.g., "Auditor consent" vs "Consent of independent registered public accounting firm")
- **Guidelines → Checks**: Renamed to match codebase convention; added `[VERIFY]` markers for attorney-review checkpoints
- **Overall**: Reduced from 175 lines to ~135 lines while preserving all legally substantive content, eligibility thresholds, regulatory citations, and checklist items

---

## Scotland/UK Adaptation

### No Direct Equivalent to Form S-3

The US SEC Form S-3 shelf registration statement has **no direct equivalent** in UK/Scottish securities law. The UK regime is fundamentally different.

| US Concept | UK/Scottish Equivalent |
|---|---|
| SEC Form S-3 | **Prospectus Regulation** - UK Prospectus Regulation (retained EU law) / FCA Prospectus Rules |
| Securities Act 1933 | **Financial Services and Markets Act 2000** (FSMA) Part VI, Official Listing and Prospectus |
| SEC (Securities and Exchange Commission) | **FCA** (Financial Conduct Authority) - UK Listing Authority (UKLA) |
| EDGAR filing | **FCA Electronic Submission System** (ESS) / National Storage Mechanism (NSM) |
| WKSI (Well-Known Seasoned Issuer) | No equivalent; listed companies follow the FCA Listing Rules / Prospectus Regulation |
| Public float test ($75M) | Market capitalisation test; no exact corresponding threshold |
| Shelf registration (3 years) | **Base prospectus** - valid for 12 months (not 3 years); supplements required for material changes |

### UK Listing Regime Overview

| Category | Description |
|---|---|
| **Premium Listing** | Highest standard; super-equivalent to EU standards; FCA Listing Rules (LR) |
| **Standard Listing** | Basic EU minimum (being phased out under UK listing reform) |
| **High Growth Segment** | For growth companies; lower disclosure requirements |
| **Specialist Funds / Secondary Markets** | Specialised segments |

FCA consulted on significant listing regime reform in 2023-2024 (simplifying rules, replacing premium/standard with single segment).

### Key UK Documents vs US Forms

| US Document | UK Equivalent |
|---|---|
| Form S-1 (IPO) | **Registration Document** + Securities Note + Summary (Prospectus Regulation) |
| Form S-3 (shelf) | **Base prospectus** under UK Prospectus Regulation (Article 8) |
| Form 10-K (annual) | **Annual Report** (Companies Act 2006 s.415 + DTR 4.1 / FCA Disclosure Guidance) |
| Form 8-K (current report) | **RNS announcement** (MAR Article 17 - inside information) |
| Proxy statement | **Circular** (FCA Listing Rule 13 / Companies Act) |

### Base Prospectus (Scottish/UK Equivalent of Shelf Registration)

Under UK Prospectus Regulation (as retained), a base prospectus:
- Can be used for multiple offers over a **12-month period** (not 3 years)
- Must include all information necessary for investors to assess the securities, Securities-specific terms go in **final terms** document (similar to US prospectus supplement)
- Must be filed with FCA and published on the National Storage Mechanism, Supplements required if material change occurs

### Key Differences for Practitioners

1. **No shelf registration**: UK law uses base prospectuses with 12-month validity, not 3-year shelf registration.
2. **FCA vs SEC**: The FCA acts as UK Listing Authority (UKLA). Filing is via the FCA's Electronic Submission System, not EDGAR.
3. **Prospectus Regulation (retained)**: The UK Prospectus Regulation is retained EU law, amended post-Brexit. HM Treasury and FCA have proposed significant reforms (reducing regulatory burden, new public offers regime).
4. **Disclosure requirements**: UK prospectuses are longer and more narrative than US S-3 registrations; require a summary and risk factors in prescribed order.
5. **WKSI**: No equivalent concept in UK law. All listed companies follow the same prospectus approval process.
6. **UK Market Abuse Regulation (UK MAR)**: Prospectus disclosure interacts with UK MAR (inside information, RNS announcements) - no US counterpart.
7. **London Stock Exchange**: Main Market and AIM (Alternative Investment Market) - different disclosure regimes.
8. **Financial promotion**: FSMA s.21 - restrictions on financial promotions (no US equivalent).

### What to Draft Instead

For UK/Scottish capital markets work, produce:
1. **Base Prospectus** - for debt / equity programmes (under UK Prospectus Regulation)
2. **Registration Document** - standalone company disclosure document
3. **Securities Note** - terms of the specific securities offered
4. **Final Terms** - supplements base prospectus for each drawdown (similar to US supplement)
5. **Annex / Summary** - required under retained EU law; investor-facing summary

### Key Differences for Practitioners

1. **FCA approval**: UK prospectuses must be approved by FCA before publication (unlike US S-3 which may be effective upon filing for WKSIs).
2. **12-month validity**: Base prospectus expires after 12 months; requires update.
3. **Liability regime**: Prospectus liability under FSMA s.90 and s.90A, different from US Securities Act liability.
4. **Scotland-specific**: While securities regulation is reserved (UK-wide), Scottish-incorporated companies follow the same FCA/UK regime. The terminology is the same as rest of UK.
5. **FCA Handbook**: The relevant rules are found in the FCA Handbook: Prospectus Rules (PR), Listing Rules (LR), Disclosure Guidance and Transparency Rules (DTR), and Market Conduct (MAR).

[SCOTS: This US Form S-3 skill is largely inapplicable to UK/Scottish securities practice. The structural approach (registrant info → risk factors → securities description → undertakings → signatures) has some transferable value for prospectus drafting, but every legal reference, eligibility test, disclosure requirement, and regulatory process must be entirely rewritten for the UK regime under FSMA and the UK Prospectus Regulation.]

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
