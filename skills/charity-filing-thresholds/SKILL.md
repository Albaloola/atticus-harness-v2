---
name: charity-filing-thresholds
language: en
description: Researches charitable organisation filing requirements keyed to gross income, producing a citation-backed compliance matrix of audit thresholds, financial-statement tiers, filing fees, and due dates for OSCR-registered charities. Use when building charity compliance matrices, researching charity filing thresholds, charitable fundraising registration, annual returns, or comparing OSCR and Charity Commission filing requirements for charities operating across Scotland, England & Wales, and Northern Ireland. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Charity Filing Threshold Research (Scotland/UK)

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

Produces a citation-backed matrix of audit/review/compilation thresholds, fees, and deadlines for charities registered with the Office of the Scottish Charity Regulator (OSCR). UK-wide charities regulated by the Charity Commission for England & Wales and the Charity Commission for Northern Ireland have different requirements.

## Pre-Draft Intake

Gather before drafting (apply defaults if user says "use defaults" or "just draft"):

| Parameter | Default |
|---|---|
| Jurisdictions | All UK jurisdictions (Scotland: OSCR; England & Wales: Charity Commission; Northern Ireland: Charity Commission for NI) |
| Gross income (annual) | £1,000,000 |
| Accounting reference date | 31 March (Scottish common) or 31 December |
| Entity category | SCIO (Scottish Charitable Incorporated Organisation) / charitable trust / charitable company |
| Output format | Full compliance package (memo + matrix) |

**Scope:** Charity accounting, reporting, and audit requirements under the Charities and Trustee Investment (Scotland) Act 2005, the Charities Act 2011 (England & Wales), and the Charities Act (Northern Ireland) 2008. Excludes company law filing requirements (Companies House) and fundraising regulation unless requested.

## Core Workflow

### 1. Source Identification

For each jurisdiction, locate and record: regulator/agency, statute citation, regulation citation, filing forms with links, fee schedule, due date authority, and last-verified date.

**Primary-source-first rule:** Prefer statute/regulation text over OSCR/Charity Commission guidance summaries. Flag guidance-only sources.

### 2. Data Extraction

Extract per jurisdiction:

- **Audit** - threshold amount (≥ or >), income basis term (verbatim), exemptions
- **Independent Examination** - threshold range, income basis term (Scottish-specific: independent examination replaces "review" as the intermediate tier)
- **Accounts preparation** - basis (receipts and payments vs. accruals), whether below audit threshold
- **Fees** - OSCR registration fee schedule; late filing penalties
- **Due date** - rule (e.g., "9 months after accounting reference date"), extension availability and mechanism

**Critical, Threshold Definition Variance:**

| Jurisdiction | Governing Term | Typical Threshold Trigger | Applicable Legislation |
|---|---|---|---|
| Scotland | "gross income" | £500,000 audit; £250,000 independent examination | Charities and Trustee Investment (Scotland) Act 2005, ss.44 to 46 |
| England & Wales | "gross income" | £1m audit; £250,000 independent examination | Charities Act 2011, ss.144 to 146 |
| Northern Ireland | "gross income" | £500,000 audit | Charities Act (Northern Ireland) 2008, ss.62 to 65 |

**Extraction rules:**

- Statute/regulation controls over guidance, note conflicts, Capture legislation references explicitly, Label which programme a threshold applies to when multiple exist (e.g., registration vs. annual reporting)

### 3. Normalisation

Standardise into fields: `jurisdiction`, `audit_threshold_amount`, `audit_threshold_basis_raw`, `audit_threshold_legislation`, `independent_examination_threshold_amount`, `accounts_basis_below_examination`, `fee_schedule`, `due_date_rule_raw`, `due_months_after_ard`, `extension_available`, `extension_length`, `extension_mechanism`, `citations`, `last_verified_date`.

Maintain a **decision log** for ambiguities: issue, jurisdiction, sources consulted, decision taken, follow-up needed.

### 4. Assemble Deliverables

**Master matrix** - one row per jurisdiction with: audit threshold, income basis, independent examination threshold, accounts basis, fee summary, due date, extension info, primary sources, verified date.

**Solicitor review memo** (1 to 3 pages) addressing:

- Definitional variances across Scotland, England & Wales, Northern Ireland, Guidance-only items not backed by statute, Statute-vs-guidance conflicts, Lowest thresholds and strictest deadlines, Recommended re-verification cadence, Cross-border considerations (charities operating in multiple UK jurisdictions)

## Post-Draft Alignment

After delivering initial matrix, confirm:

1. Does the jurisdiction list match actual registration footprint?
2. Is the income figure correct for the applicable UK legislation?
3. Expand scope to fundraising registration requirements (Fundraising Regulator, local authority)?
4. Different output format needed (CSV, JSON, spreadsheet)?

## Quality Checklist

- [ ] Every threshold has a statutory citation (or is marked [VERIFY])
- [ ] Income basis term captured verbatim per jurisdiction, not normalised away
- [ ] Legislation mapping provided for each income definition
- [ ] Fee schedules sourced from OSCR / Charity Commission official pages
- [ ] Extension mechanisms specified (not just Yes/No)
- [ ] Decision log maintained for all ambiguities
- [ ] Statute-vs-guidance conflicts noted and resolved
- [ ] Last-verified date recorded per jurisdiction
- [ ] No fabricated thresholds, fees, or deadlines

## Pitfalls

- **OCSR fees are set administratively** - always check the OSCR website for current fee schedules
- **Gross income vs. total income** - the definitional difference can shift which tier applies; OSCR uses "gross income" (total incoming resources in SORP terms)
- **Staleness** - mark any source not verified within 90 days for re-verification
- **Organisation governing documents** may impose lower thresholds than statutory minimums (check SCIO constitution or trust deed)
- **Cross-border charities** - a charity registered with OSCR that also operates in England & Wales may have dual filing obligations, Mark all uncertain citations with [VERIFY]

**Required disclaimer on every output:**

> THIS RESEARCH REQUIRES INDEPENDENT VERIFICATION OF ALL THRESHOLDS, DEADLINES, AND STATUTORY CITATIONS BY A QUALIFIED SOLICITOR OR ACCOUNTANT BEFORE RELIANCE, AND DOES NOT CONSTITUTE LEGAL ADVICE.

## Scotland/UK Adaptation

**Regulatory framework:**

| Element | Scotland | UK Equivalent |
|---|---|---|
| Regulator | OSCR (Office of the Scottish Charity Regulator) | Charity Commission for England & Wales |
| Registration | Charities and Trustee Investment (Scotland) Act 2005 | Charities Act 2011 |
| Annual return | OSCR online annual return | Charity Commission annual return |
| Accounts format | SCIO accounts (SORP-based) | Charitable company accounts (SORP-based) |
| Audit threshold | Gross income >£500,000 | Gross income >£1m (E&W) |
| Intermediate tier | Independent examination (>£250,000) | Independent examination (>£250,000) |
| Tax authority | HMRC (for Gift Aid, tax repayments) | HMRC |

**Key terminology substitutions:**
- 501(c)(3) → Charity registered with OSCR (or any of the UK charity registers)
- IRS → HMRC (for tax matters); OSCR (for charity regulation)
- Form 990 → OSCR annual return + SCIO annual accounts (filed with OSCR)
- State charity bureaus → OSCR (Scotland) / Charity Commission (E&W) / Charity Commission NI, USD → GBP (sterling)
- US state-specific variations → UK jurisdiction-specific variations (Scotland / E&W / NI differ in thresholds and statutory basis)
- CPA/Attorney → Chartered accountant / Solicitor

**Statutory framework:**
- Charities and Trustee Investment (Scotland) Act 2005 (asp 10)
- Charities Accounts (Scotland) Regulations 2006 (SSI 2006/218)
- Charities (Applications for Registration) (Scotland) Regulations 2006 (SSI 2006/239)
- Charities Act 2011 (c.25) - England & Wales, Charities Act (Northern Ireland) 2008 (c.12)
- Statement of Recommended Practice (SORP) - FRS 102 version for charities, Fundraising: Fundraising Regulator (self-regulatory for England, Wales, Scotland)

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
