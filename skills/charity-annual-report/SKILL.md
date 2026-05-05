---
name: charity-annual-report
language: en
description: Drafts filing-ready Annual Reports for State Charity Bureaus with certified financials, governance disclosures, and required attachments. Extracts organizational, financial, and programmatic data from uploaded documents, researches state-specific filing requirements, and produces a penalty-of-perjury-certified report. Use when drafting charity bureau annual reports, nonprofit compliance filings, charitable solicitation renewals, or state charity registration renewals. [Atticus UK/Scots refined]
tags:
- nonprofit, drafting, compliance, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Annual Report for State Charity Bureau

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

Produces a state-compliant charity annual report by extracting data from uploaded documents, researching jurisdiction-specific requirements, and assembling a certified filing package.

## Prerequisites

1. **Governing documents** - articles of incorporation, bylaws, board resolutions, minutes
2. **Prior filings** - previous annual reports, charity bureau correspondence, registration certificates
3. **Financial records** - IRS Form 990 (all schedules), audited/reviewed/compiled financials, general ledger summary
4. **Fundraising records** - gross/net by method, professional fundraiser/solicitor/co-venturer contracts
5. **Governance policies** - conflicts of interest, whistleblower, document retention

## Output Modes

| Mode | Description |
|---|---|
| **Full Compliance Package** (default) | Narrative report with tables, attachments index, signature blocks, certification, filing instructions |
| **Form-Field Mode** | Field-by-field answers keyed to state form/portal with source citations |
| **Executive Briefing** | 2 to 3 page summary of filing status, key financials, and compliance issues for board review |

## Workflow

### 1. Pre-Draft Intake

Confirm or apply defaults. Mark unconfirmed values `[ASSUMED]` and missing data `[TO BE CONFIRMED]`.

- Filing state (from registration docs)
- Reporting period (most recent completed fiscal year)
- Form requirement (narrative unless state form identified)
- Total revenue (determines audit/review tier)
- Professional fundraisers (none unless contracts found)
- Output mode (Full Compliance Package)

Maintain an **Open Items** tracker throughout; resolve or flag each before finalizing.

### 2. Source Extraction

Build an **Intake Normalization Table** reconciling across all uploads: legal name, DBA(s), EIN, state charity registration number, addresses, FYE, date of incorporation, tax-exempt status, current and prior year revenue.

Check for: short fiscal year, mid-year name/address changes, merged/successor entities.

### 3. State Requirements Research

Research rules from **official sources only** (charity bureau/AG website, statutes, admin code). Record source URL and publication date for every requirement.

Build a **Requirements Matrix** covering:

- Form number, deadline, extension rules, filing method, fee, Audit/review/compilation revenue thresholds, Required attachments (990, audit report, contracts, etc.)
- Professional fundraiser disclosure fields, Certification/oath language (verbatim if prescribed), signatories, notarization, Governance policy attestations, Special disclosures (related-party transactions, name changes, litigation)
- Multi-state notes (URS accepted?)

Mark conflicting sources `[CONFLICT, VERIFY WITH COUNSEL]`.

### 4. Draft Core Sections

**Organizational Identity:** Legal name, DBA(s), EIN, registration number, addresses, solicitation channels, reporting period, material mid-year changes, affiliated entities.

**Governance:** Board/officer roster with name, title, term dates, compensation, independence status. Confirm compliance with state minimums. Note mid-year changes, bylaw amendments, policy adoptions.

**Financials:** Comparative (current vs. prior year) revenue and expense table on identified accounting basis (accrual/cash). Categories: contributions/grants, program service revenue, investment income, special events, other revenue; program expenses, management/general, fundraising. Include change in net assets and balance sheet totals. Compute program expense ratio (target ≥75%), fundraising efficiency, months of operating reserves.

**Programs & Impact:** Per major program: charitable purpose, populations served, geography, quantifiable outcomes, program expenses, volunteer hours.

**Fundraising & Compliance:** Fundraising by method (gross/costs/net). Professional fundraiser table (entity, role, contract dates, amounts, state registration ID). Registration status, audit compliance, governance attestation. Format each requirement as: legal requirement → compliance status.

### 5. Attachments Index

Build exhibit list (990, audit report, fundraiser contracts, board resolution, articles/amendments). Cross-check every exhibit against the Requirements Matrix.

### 6. Execution Package

- **Certification:** Insert verbatim state-prescribed oath. If unavailable, use penalty-of-perjury placeholder flagged `[TO BE CONFIRMED]`
- **Signature blocks:** Per state requirements and bylaws (President/Chair, Treasurer/CFO typical). Notarization block only if required
- **Filing instructions:** Deadline, extension process, method, fee, signature requirements

### 7. Refinement

Offer: convert to Form-Field Mode, strengthen program narrative, adjust financial presentation, expand fundraiser disclosures, add multi-state appendix, produce Executive Briefing, generate cover letter.

## Quality Checklist

- [ ] All unconfirmed values labeled `[ASSUMED]` or `[TO BE CONFIRMED]`
- [ ] Requirements Matrix complete with official citations
- [ ] Filing deadline correctly calculated from FYE
- [ ] Audit/review tier matches organization's revenue
- [ ] Legal name, EIN, registration number consistent across all sections
- [ ] Revenue/expense totals reconcile to financials and Form 990
- [ ] Functional expense categories align with 990 Part IX
- [ ] Financial ratios arithmetically verified
- [ ] All required attachments indexed and cross-referenced
- [ ] Certification language is state-correct (verbatim where required)
- [ ] Correct signatories identified per state law and bylaws
- [ ] Notarization requirement confirmed or ruled out
- [ ] No unmarked placeholder text remains

## Critical Rules

- **Never guess** - report is certified under penalty of perjury; flag every data gap
- **Official sources only** - AG/charity bureau websites, statutes, admin code for state requirements
- **Reconcile across documents** - name, EIN, financials must match between 990, audit, and narrative
- **State-specific** - never assume one state's rules apply to another
- **Professional fundraiser scrutiny** - primary enforcement focus; verify contract compliance
- **Multi-state awareness** - if evidence suggests solicitation in other states, note registration obligations

## Scotland/UK Adaptation

This skill is written for US charity annual reports filed with state charity bureaus. Scotland has a different regulatory framework under the **Charities and Trustee Investment (Scotland) Act 2005**, regulated by **OSCR (Office of the Scottish Charity Regulator)**. Use the following adaptations.

### Key Changes for Scotland

| US Concept | Scottish Equivalent |
|---|---|
| State Attorney General / Charity Bureau | **OSCR** (Office of the Scottish Charity Regulator) - single national regulator |
| IRS Form 990 | **OSCR Annual Return** (online filing) + **Trustees' Annual Report** + **Annual Accounts** |
| EIN (Employer Identification Number) | **Scottish Charity Number** (SC0xxxxx) |
| 501(c)(3) tax exemption | Charitable status, recognised by HMRC (Charity Tax); OSCR registration determines eligibility |
| State registration (multi-state) | Charities registered in Scotland file only with OSCR (single regulator) |
| Penalty of perjury certification | **Trustees' declaration** - signed by at least two trustees |
| Professional fundraiser registration | OSCR oversight of fundraising; **Fundraising Regulator** (self-regulatory body) |
| Audit thresholds (state-dependent) | OSCR thresholds: independent exam (≥£25K); audit (≥£500K income or assets ≥£3.26M + income ≥£500K) |

### OSCR Annual Filing Requirements

Scottish charities must submit to OSCR within **9 months** of financial year-end:

1. **Online Annual Return** - Via OSCR's online portal
2. **Annual Accounts** - Receipts & Payments (income <£250K) or Accruals (income ≥£250K)
3. **Trustees' Annual Report** - Narrative report on activities, governance, achievements
4. **External Scrutiny Report** - Independent examination (≥£25K) or audit (≥£500K)

### Trustees' Annual Report Content (Scotland)

| Section | Content |
|---|---|
| Reference and admin details | Charity name, SC number, principal office, trustees, secretary |
| Structure, governance and management | Governing document, trustee recruitment, risk management |
| Objectives and activities | Charitable purposes, public benefit statement |
| Achievements and performance | Key activities, outcomes, impact |
| Financial review | Income, expenditure, reserves policy, investment policy |
| Plans for future periods | Strategic objectives for next year |
| Public benefit statement | How activities benefit the public (mandatory under the 2005 Act) |

### Accounts Format (Scotland)

**Receipts and Payments** (income <£250K):
- Receipts: donations, grants, fundraising, trading, investments, Payments: charitable activities, governance costs, fundraising, Cash at bank/in hand at year-end, Notes (optional for small charities)

**Accruals** (income ≥£250K OR required by governing document):
- SOFA (Statement of Financial Activities)
- Balance sheet, Notes to accounts, Comparable prior-year figures

### Financial Thresholds

| Gross Income (or Total Assets) | Scrutiny Required |
|---|---|
| Under £25,000 | None (accounts still required) |
| £25,000, £500,000 | Independent examination |
| ≥ £500,000 OR assets >£3.26M + income >£500K | Full audit |

### Governance Requirements (Scotland)

- At least **3 trustees** (minimum), usually more, Trustees must be natural persons
- **Conflict of interest policy** required, Trustee eligibility: over 16, not disqualified, not bankrupt, not convicted of certain offences, Trustees act as charity trustees with duties under the 2005 Act

### Fundraising Regulation (Scotland)

- **Fundraising Regulator** - Self-regulatory body for charitable fundraising
- **Scottish Fundraising Working Group** - Specific guidance for Scotland
- **OSCR scrutiny** - Can investigate fundraising misconduct, No separate "professional fundraiser" registration (unlike many US states) - but contracts with professional fundraisers must be disclosed

### Skill Adaptation: Output Modes (Scotland)

| US Mode | Scottish Adaptation |
|---|---|
| Full Compliance Package | OSCR annual return + trustees' annual report + accounts + scrutiny report |
| Form-Field Mode | OSCR online portal fields mapped from intake data |
| Executive Briefing | Same, summary for board/trustees |

### National Similarities

The skill's core methodology, data extraction, requirements research, structured reporting, attachments index, and quality check, transfers well. Scottish charity reporting is **more standardised** (single regulator, single format) than the US multi-state system, so the "state-specific research" workflow is simpler.

### Key Statutes (Scotland)

- Charities and Trustee Investment (Scotland) Act 2005
- Charities Accounts (Scotland) Regulations 2006 (SSI 2006/218)
- Charities Re-registration Regulations 2023
- Charities (Disclosure of Information) (Scotland) Regulations 2023

### Practitioner Notes

- Replace all references to "IRS Form 990" with "OSCR Annual Return + Trustees' Annual Report + Accounts"
- The US "professional fundraiser" disclosure (contracts, registration) maps to OSCR's fundraising oversight but without a separate registration requirement, There is no penalty-of-perjury tradition in Scottish charity filings, instead, trustees sign a declaration (at least two trustees)
- Scottish charities do NOT register with a state Attorney General, OSCR is the sole regulator, Cross-border charities (operating in both Scotland and England/Wales) must file with both OSCR and the Charity Commission, note dual obligations, See the guidance note in `scots-forms/Scotland-OSCR-charity-reporting-guide.md` for detailed Scottish charity filing procedures

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
