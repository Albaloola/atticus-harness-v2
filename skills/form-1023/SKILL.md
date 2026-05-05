---
name: form-1023
language: en
description: Drafts OSCR (Office of the Scottish Charity Regulator) charity registration applications and related submissions for recognition as a Scottish charity under the Charities and Trustee Investment (Scotland) Act 2005. Analyzes constituational documents, finances, governance, and activities to produce a complete, internally consistent application. Use when forming a Scottish Charitable Incorporated Organisation (SCIO), applying for charitable status, registering with OSCR, or updating charity details. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, charity, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# OSCR Charity Registration, Scottish Charitable Status Application

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

Produces a submission-ready application for recognition as a Scottish charity under the Charities and Trustee Investment (Scotland) Act 2005, with all applicable supplementary information, ensuring internal consistency across narrative, financials, governance, and constituational documents.

## Prerequisites

Collect before drafting:

1. **Constitutional document** - SCIO constitution, trust deed, or governing document with charitable purpose and dissolution clauses compliant with the 2005 Act
2. **OSCR application form** - current version from www.oscr.org.uk [VERIFY form version]
3. **Proposed SCIO name or registered charity name** - available name check using OSCR name availability checker [VERIFY]
4. **Financial data** - actuals for prior period or proposed budgets for current year + 2 succeeding years if pre-operational
5. **Trustee roster** - names, addresses, dates of birth, occupations, any disqualifying matters
6. **Activity descriptions** - all current and planned charitable activities
7. **Conflict of interest policy** (recommended but not mandatory for micro-charities)
8. **Related entity information** - parent, subsidiary, affiliate, or predecessor charity details

## Workflow

```
- [ ] Step 1: Threshold check, verify constituational document meets OSCR requirements
- [ ] Step 2: Complete OSCR application form (online or paper)
- [ ] Step 3: Prepare supporting documents (constitution, trustee declarations, MOUs)
- [ ] Step 4: Cross-check internal consistency
- [ ] Step 5: Submit to OSCR and pay registration fee (if applicable) [VERIFY current fee structure]
```

## Part I, Organisation Identity

Extract and verify against constituational document:

| Field | Source |
|---|---|
| Proposed/Registered name | Constitutional document |
| OSCR number (if existing) | OSCR register |
| Legal form (SCIO / Trust / Unincorporated Association / Company Limited by Guarantee) | Constitutional document |
| Date of formation | Constitutional document / Companies House (if registered company) |
| Registered office / principal address | Application form |
| Contact person (e.g., secretary or lead trustee) | Application form |
| Accounting period end | Constitutional document / byelaws |

## Part II, Constitutional Document Threshold Check

**Flag failures before proceeding, these are blockers:**

- [ ] Purpose clause limits activities to charitable purposes under the Charities and Trustee Investment (Scotland) Act 2005, s.7 (poverty relief, education, religion, health, community development, arts, heritage, animal welfare, human rights, environmental protection, advancement of civic responsibility, etc.)
- [ ] Dissolution clause directs remaining assets to another charity with similar charitable purposes
- [ ] No express authorisation of non-charitable activities
- [ ] Trustees' powers are consistent with the 2005 Act (proper exercise of trustee duties, no improper benefit)

If deficient, draft amended constitutional clauses per OSCR guidance on model constitutions [VERIFY] before continuing.

## Part III, Activity Narrative

For each significant charitable activity (ordered by resource allocation, largest first):

| Element | Detail |
|---|---|
| Description | Nature, methods, frequency |
| Beneficiaries | Who benefits; how selected (must be public benefit, not private) |
| Charitable purpose | Which s.7 purpose(s) served |
| Resources | % of time, budget, staff |
| Revenue | Fees charged; sliding scale / financial assistance |
| Outcomes | Measurable results or planned metrics / KPIs |

**Public benefit screen per activity:**
- Identify the benefit, How the benefit is directed to the public or a sufficient section of the public, Any private benefit must be incidental and necessary, No undue restriction on access

For pre-operational organisations, include implementation timeline with milestones.

## Part IV, Financial Data

**Operational charities:** Statement of financial activities (SOFA) + balance sheet for current year and up to 3 preceding years.
**Pre-operational charities:** Proposed budgets for current year + 2 succeeding years.

| Income | Expenditure |
|---|---|
| Donations and legacies | Charitable activities |
| Charitable trading income | Governance costs |
| Investment income | Fundraising costs |
| Fundraising income | Other |
| Grants receivable | Capital expenditure |
| Other | Other |

**Flag and explain:** Trading income > 15% of total income (consider trading subsidiary), related-party transactions, significant year-over-year changes, fundraising costs > 35% of income.

[SCOTS: Note] SCIOs must file annual accounts with OSCR within 9 months of year-end. The accounts must follow the Charities Accounts (Scotland) Regulations. Audit thresholds apply: income > £500,000 requires external audit; income £250k to £500k requires independent examination.

## Part V, Governance & Trustee Information

For each trustee: name, address, date of birth, occupation, relationships to other trustees, any disqualifying matters (unspent convictions for dishonesty, disqualification as a company director, insolvency, or removal as a charity trustee).

**Trustee eligibility under 2005 Act s.69:**
- Must be at least 16
- Not disqualified under s.69 (certain criminal convictions, sequestration (bankruptcy), removal as charity trustee)

**Conflicts of interest:**
- Disclose any trustee or connected person with a material interest in any contract with the charity, State how this will be managed (declaration, no participation in decision)

**Related-party transactions:** State charitable purpose, fair market value basis, and OSCR approval process for each.

## Part VI, Membership Structure

If a membership organisation (unincorporated association or SCIO): describe categories, voting rights, subscription fees, and how structure serves charitable (not private) purposes.

## Part VII, Organisational Relationships

For each related entity (predecessor, parent, subsidiary, affiliate, or other charity sharing trustees):

| Field | Detail |
|---|---|
| Name + OSCR/charity number | Identification |
| Relationship type | Control, support, shared governance |
| Asset transfers | Date, nature, value |
| Shared resources | Facilities, employees, cost allocation |

## Part VIII, Restricted Activities

| Activity | Requirement |
|---|---|
| Political campaign intervention | Must be non-party political; charity can advocate but not support specific political parties |
| Lobbying | Permissible if related to charitable purposes; must not be the sole or dominant activity |
| Grants to individuals | Selection criteria, application process, monitoring |
| Grants to organisations | Verify recipient's charitable status (OSCR / Charity Commission / HMRC recognition) |
| Fundraising | Must comply with Fundraising Regulator (Scotland) code; public collections need licences |
| Trading | Non-primary purpose trading requires a separate trading subsidiary to avoid UBI |

[SCOTS: Note] Political activity by Scottish charities is permitted where it supports the charitable purpose, provided it is non-partisan. There is no direct equivalent to the US IRC §501(h) lobbying election. Charity campaigning must comply with the Electoral Commission rules.

## Part IX, Supplementary Schedules

Complete only applicable supplementary information (OSCR will request specific clarifications depending on activities):

| Schedule | Trigger |
|---|---|
| Public benefit statement | All applications require a public benefit statement under the 2005 Act |
| Religious charity | Religious worship/advancement of religion |
| Educational charity | Advance education |
| Grant-making charity | Making grants to individuals or organisations |
| Housing charity | Providing housing or accommodation |
| Community asset transfer | If transferring public sector assets |
| Cross-border charity | Operating in England/Wales/NI as well as Scotland |

[SCOTS: Note] OSCR registration is required for charities operating in Scotland. Charities operating across Scotland and England/Wales may need dual registration with OSCR and the Charity Commission for England & Wales. There is no equivalent to the IRS Form 1023 schedules A to H; OSCR uses a simpler classification.

## Part X, Application Fee & Execution

- Check OSCR fee schedule for current registration fee (may be £0 for small charities) [VERIFY current fee]
- Include fee payment or fee exemption evidence, Signed by authorised trustee or office-bearer under the constitution, All trustees must confirm eligibility and consent to appointment

## Deliverables

1. **Complete OSCR registration application** - OSCR application form (online or paper), all constitutional documents and supporting materials
2. **Cover memorandum:**
   - Key application positions
   - Items requiring trustee action (constitutional amendments, policy adoptions)
   - Potential OSCR inquiry areas with recommended responses
   - Next steps and timeline
3. **Model resolution template** for board approval of the application

## Critical Rules

- Present concrete facts, never conclusory statements, do not write "operates exclusively for charitable purposes" without supporting specifics, Ensure absolute internal consistency across all sections, Constitutional document deficiencies are threshold blockers, resolve before proceeding, All related-party transactions require affirmative justification, OSCR registration is required before operating as a charity; there is a lead time of 8 to 12 weeks, Charity Test under the 2005 Act: must have charitable purposes AND provide public benefit (no presumption of public benefit)
- Mark uncertain statutory or regulatory citations with [VERIFY]
- Political party support is absolutely prohibited, do not include under any framing, SCIO status: if forming as a SCIO, the OSCR application includes both constitution approval and registration in one step

## Scotland/UK Adaptation

### Governing Framework

This skill is adapted from US IRS Form 1023 (501(c)(3) recognition) to Scottish charity registration under the Charities and Trustee Investment (Scotland) Act 2005.

- **Governing legislation:** Charities and Trustee Investment (Scotland) Act 2005 (asp 10)
- **Regulator:** OSCR (Office of the Scottish Charity Regulator)
- **Equivalent application:** OSCR online application form and supplementary information (not a single IRS-style form)
- **Legal structures:** SCIO, Trust, Unincorporated Association, Company Limited by Guarantee registered as charity
- **No 501(c)(3) categories:** Scottish charitable purposes are defined by s.7 of the 2005 Act (13 categories including advancement of environmental protection, human rights, citizenship, etc.)

### Terminology Conversion

| US Term | Scots/UK Equivalent |
|---|---|
| IRS (Internal Revenue Service) | HMRC / OSCR (charity registration) |
| Form 1023 | OSCR application for charitable status |
| 501(c)(3) exemption | Scottish charitable status under 2005 Act |
| EIN (Employer Identification Number) | OSCR charity number (SC######) / Companies House number (if SCIO) |
| Articles of incorporation | SCIO constitution / Trust deed / Governing document |
| Byelaws | Byelaws / Rules |
| Conflict of interest policy | Conflict of interest policy (recommended) |
| EO (Exempt Organization) | Scottish charity |
| UBI (Unrelated Business Income) | Non-primary purpose trading (may need trading subsidiary) |
| Rev. Proc. 82-2 amendment language | OSCR model clauses / OSCR model constitution for SCIOs |
| CP 575 (EIN confirmation) | OSCR confirmation of registration letter |
| Schedule A/B/C etc. | OSCR supplementary information requests |
| User fee (IRS Form 8718) | OSCR registration fee [VERIFY current fee] |
| §501(h) election | No direct equivalent; campaigning regulated by Electoral Commission |

### Key Differences

- **No single application form:** OSCR requires an online application with supporting documents; no equivalent to the structured IRS Form 1023 parts
- **Public benefit test:** The 2005 Act requires charities to pass a "charity test" including both purposes and public benefit; there is no presumption of public benefit (unlike English law)
- **Registration threshold:** Charities with income ≤ £50,000 and no SCIO requirement may claim exemption from registration but must still operate charitably
- **No 27-month deadline:** OSCR registration is expected before operations commence; there is no equivalent to the retroactive exemption rules in US law
- **Trading:** Charities may trade in furtherance of charitable purposes; non-primary purpose trading (in excess of £50,000 or charitable purpose) should be undertaken via a trading subsidiary
- **Accounts:** OSCR requires annual accounts with specific reporting formats; no IRS Form 990 equivalent
- **Remuneration:** Scottish charity trustees may not benefit from their position (unlike US practice where trustees can be paid). Independent committee approval required for any paid trustee roles.
- **Fundraising regulation:** Scotland has separate fundraising regulation (Scottish Fundraising Regulator code of practice - 2024)
- **Cross-border:** Charities operating in both Scotland and England/Wales may need dual registration

### Citation Guidance

For Scottish charity practice, cite:
- **Charities and Trustee Investment (Scotland) Act 2005** - ss.1-10 (charity test and purposes), s.7 (charitable purposes), ss.69-70 (trustee disqualification and duties), ss.45-48 (OSCR investigative powers)
- **OSCR Guidance** - Meeting the Charity Test, Managing Conflicts of Interest, Charity Accounts, Public Benefit
- **Charities Accounts (Scotland) Regulations**
- **Scottish Parliament codes of guidance** on charity regulation
- **Court of Session** decisions on charity appeals (OSCR decisions appealable to the Scottish Charity Appeals Panel, then Court of Session)

[SCOTS: Note] HM Revenue & Customs (HMRC) recognises Scottish charities for tax purposes (Gift Aid, business rates relief, corporation tax exemptions) separately from OSCR registration. A Scottish charity must be registered with OSCR and then apply to HMRC for tax recognition. This is not a single-step process as with IRS Form 1023.

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
