---
name: nonprofit-compliance-summary
language: en
description: Generates a structured regulatory compliance summary for Scottish charities (SCIO, trust, unincorporated association) and other UK nonprofit organisations covering OSCR registration, charity test compliance, annual reporting, fundraising regulation, and governance under the Charities and Trustee Investment (Scotland) Act 2005. Use when conducting compliance audits, preparing for OSCR examinations, onboarding to a charity matter, or producing board-level compliance reports. [Atticus UK/Scots refined]
tags:
- compliance, charity, nonprofit, OSCR, governance, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Scottish/UK Charity Compliance Summary

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

Produces a prioritised compliance assessment for charitable organisations across OSCR (Office of the Scottish Charity Regulator) registration, charity test compliance, annual reporting, fundraising regulation, and governance domains.

**⚠️ Scottish charity regulation is separate from England & Wales (Charity Commission). This template is specific to Scotland. If the charity operates across the UK, separate compliance for each jurisdiction is required.**

## Prerequisites

Gather before starting:

1. **Organisational docs** - SCIO constitution (OSCR model), trust deed, or unincorporated association rules; amendments history
2. **OSCR filings** - Annual Returns (prior 3 years); monitoring returns; notification of changes (trustees, purposes)
3. **HMRC filings** - Charity tax registration; Gift Aid claims; VAT returns if applicable
4. **Annual accounts** - Signed accounts and Trustees' Annual Report; external scrutiny report (audit or independent examination)
5. **Governance records** - Board/trustee meeting minutes, conflict-of-interest policy, trustee appointment records, risk register
6. **Correspondence** - OSCR inquiry letters, compliance warnings, HMRC enquiries, Fundraising Regulator complaints

Note any unavailable documents, qualify findings accordingly.

## Output Structure

### 1. Executive Overview

- Overall status: **Full Compliance / Minor Deficiencies / Significant Gaps**
- Critical issues requiring immediate action (e.g., overdue Annual Return, charity test failure risk)
- Filing deadlines within next 90 days (OSCR annual return, HMRC accounts, Gift Aid claims)

### 2. OSCR Charity Registration Status

| Area | Requirement | Status | Notes |
|------|-------------|--------|-------|
| Registration | Charity entered on Scottish Charity Register (OSCR) | | |
| Charity test compliance | Purposes must be charitable under s.7 to 8 Charities and Trustee Investment (Scotland) Act 2005 | | Flag any change in purposes |
| SCIO constitution | Must comply with Act; appropriate charitable purposes | | Review if not OSCR model form |
| Trustee appointment | Properly appointed; fit and proper persons | | |
| Changes notified | Changes to constitution, trustees, purposes, contact details within 3 months | | |

[SCOTS: Note] - The Scottish charity test (s.7 CTISA 2005) requires purposes to be charitable AND for public benefit (s.8). The "public benefit" test is an explicit statutory requirement in Scotland unlike the previous presumption approach.

### 3. OSCR Annual Reporting

| Area | Requirement | Status | Notes |
|------|-------------|--------|-------|
| Annual Return | Filed online via OSCR by due date (10 months from year-end) | | |
| Annual accounts | Filed annually per SORP (Charities SORP FRS 102) | | Size-dependent (large/medium/small/micro) |
| Trustees' Annual Report | Submitted with accounts | | |
| External scrutiny | Audit (gross income >£1m) or independent examination (>£250k) | | |
| OSCR monitoring questions | Answered accurately (changes in structure, activities, trustees) | | |
| Charity Trustee Declaration | Signed, confirms charity test still met and trustees understand duties | | |

### 4. HMRC / Tax Compliance

| Area | Requirement | Status | Notes |
|------|-------------|--------|-------|
| Charity registration | Registered with HMRC for charity tax reliefs | | |
| Gift Aid | Correctly claimed; donor declarations in place | | |
| Gift Aid audit trail | Sufficient records; correct rates | | HMRC may audit |
| Trading subsidiary | Separate company for non-primary-purpose trading | | Generally required where trading >£80k or significant |
| VAT | Partial exemption calculation if applicable | | |
| Payroll | PAYE and employer NIC for employees | | |
| Business rates relief | 80% mandatory relief (discretionary to 100%) | | Apply via local authority |

### 5. Fundraising Compliance

| Area | Requirement | Status | Notes |
|------|-------------|--------|-------|
| Fundraising Regulator | Registration (if fundraising in England/Wales) | | |
| Public collections | Section 6 Certificate for street/trade collections in Scotland | | Local authority permits |
| Gambling/Fundraising events | Compliance with Gambling Act 2005 (raffles, lotteries) | | |
| Commercial participators | Written agreement with fundraising agencies | | |
| Donor protection | Fair, transparent, not unduly pressurising | | Fundraising Regulator Code |
| Online fundraising | Website/social media fundraising, data protection, transparency | | |

### 6. Governance & Trustee Compliance

| Area | Standard | Status | Finding |
|------|----------|--------|---------|
| Trustee body | Minimum 2 trustees (3 for SCIO) | | |
| Conflict of interest policy | Adopted and maintained; register of interests | | |
| Charitable purposes review | Charity test being met through activities | | |
| Risk management | Risk register; reviewed annually | | |
| Financial controls | Segregation of duties; reserves policy; investment policy | | |
| Safeguarding | Vulnerable persons / children policy if applicable | | |
| Insurance | Public liability; employer's liability (statutory); trustee indemnity | | |

### 7. Recommendations

| Priority | Issue | Action Required | Deadline | Citation |
|----------|-------|-----------------|----------|----------|
| **Critical** | | | | |
| **High** | | | | |
| **Routine** | | | | |

## Workflow

```
- [ ] Collect and inventory prerequisite documents
- [ ] Verify OSCR registration status and charity test compliance
- [ ] Assess annual reporting compliance (Section 3 table)
- [ ] Assess HMRC/tax compliance (Section 4 table)
- [ ] Assess fundraising compliance (Section 5 table)
- [ ] Assess governance and operations (Section 6 table)
- [ ] Draft executive overview with status rating
- [ ] Compile prioritised recommendations with deadlines and citations
- [ ] Mark uncertain citations with [VERIFY]
```

## Critical Checks

- **Annual Return delinquencies**: OSCR can issue compliance orders; failure to file for 2+ consecutive years can lead to removal from register (which means loss of charitable status)
- **Charity test failure**: If the charity's activities no longer meet the charity test (s.7/8 CTISA 2005), OSCR may direct changes or remove from register
- **Trustee duties**: Trustees are responsible for compliance; failure can lead to personal liability for breach of trust (common law and statute)
- **Gift Aid irregularities**: HMRC can impose penalties for incorrect Gift Aid claims
- **Fundraising public trust**: Fundraising Regulator can impose sanctions; reputational damage significant
- **Citations**: Reference specific forms (OSCR Annual Return reference number), dates of filings, and statutory provisions (CTISA 2005 sections, HMRC guidance)
- **Uncertain citations**: Mark `[VERIFY]` for any citation not confirmed against source documents
- **Audience**: Write so non-lawyer trustees understand their fiduciary obligations; flag legal conclusions for solicitor review

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced IRS 501(c)(3) determination with OSCR registration under the Charities and Trustee Investment (Scotland) Act 2005 (CTISA 2005)
- Replaced IRC §§ 501(c)(3), 4958, 6033 with CTISA 2005 (s.7, charity test, s.8, public benefit, s.66 to 70, SCIO regulation)
- Replaced IRS Forms 990/990-EZ/990-T with OSCR Annual Return and monitoring questions, Replaced state charitable registration (multi-state analysis) with OSCR single Scottish register; note separate Charity Commission for England/Wales if cross-border, Replaced state AG examinations with OSCR inquiries/orders, Replaced federal campaign intervention prohibition with Scottish charity test/duty to further charitable purposes only; political activity limited per OSCR guidance, Replaced IRC §501(h) lobbying election with Scottish limits on political campaigning (must be incidental)
- Replaced "private inurement" with "private benefit" prohibition (Scots charity law, no direct equivalent concept)
- Replaced state fundraising registration with Fundraising Regulator (UK-wide) and local authority permits (Scotland)
- Added SCIO (Scottish Charitable Incorporated Organisation) form, unique to Scotland, most common Scottish charity structure, Added Gift Aid (UK tax relief on charitable donations) - replaces US charitable contribution deduction, Added SORP (Charities Statement of Recommended Practice) accounting, replaces US GAAP with FRS 102
- Added OSCR charity test public benefit requirement (s.8 CTISA 2005) - no direct US equivalent, Changed board composition from US state requirements to Scottish SCIO minimum (3) / trust minimum (2)
- Replaced US "conflict of interest" with Scottish equivalent (charity law common law duty + OSCR guidance)
- Added Scottish business rates relief (80% mandatory) - replaces US property tax exemption, Replaced "solicitation state" with OSCR registration status; separate England/Wales if applicable, Added HMRC charity registration for Gift Aid and tax reliefs, replaces IRS tax-exempt determination, Replaced US state-law fundraising regulations with Scottish local authority permits and Fundraising Regulator

**Key Scottish/UK considerations:**
- Scottish charities are regulated by OSCR, not the Charity Commission (England & Wales) - different regulatory framework, Scottish charity test has an explicit public benefit requirement (s.8 CTISA 2005) - must be demonstrated, SCIO is the most common Scottish charity form, a corporate body that is not a company (separate from charitable company)
- Gift Aid is the main tax relief, not a deduction system, charities claim back basic-rate tax on donations, No US-style intermediate sanctions (s.4958) - Scottish charity law has fit-and-proper-person test for trustees and OSCR powers to remove trustees, Trading must be through a trading subsidiary if non-primary-purpose trading exceeds substantial level, Fundraising is regulated by Fundraising Regulator (UK-wide voluntary regulation) with Scottish local authority permits for public collections, Charities SORP (FRS 102) applies for accounting (different from US GAAP)
- OSCR Annual Return requires a trustee declaration confirming the charity test is still met, Cross-UK operation requires dual registration: OSCR (Scotland) and Charity Commission (England & Wales) if operating in both jurisdictions

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
