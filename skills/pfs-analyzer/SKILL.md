---
name: pfs-analyzer
language: en
description: Extracts and reconciles medical provider, wage-loss, and insurance/lien data from personal injury pursuer fact sheets and initial disclosures against builder draft responses. Use when the user mentions PFS analysis, medical provider reconciliation, wage loss audit, insurance lien tracking, commission and diligence recovery reconciliation, builder response validation, Scottish PI data extraction, treatment chronologies, or specials spreadsheets. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# PFS Analyzer

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

Extracts structured data from PI plaintiff fact sheets and initial disclosures, reconciles against draft builder responses, and produces an issues memo with variance flags and full source traceability.

All output requires attorney review before service or filing.

## Quick Start

1. Gather source documents (PFS, provider lists, wage docs, insurance disclosures, builder draft)
2. Extract providers, employers, and insurance/lien entities with source citations
3. Reconcile extractions against builder draft, flag all variances
4. Deliver builder-ready output + lawyer-facing issues memo

## Intake Checklist

Ask every time unless user says "use defaults" or "just draft":

1. **PFS / Initial Disclosures** - executed PFS, FRCP 26(a)(1) packet, or MDL CMO form
2. **Medical provider list** - specials spreadsheet, treatment chronology, HIPAA auth list
3. **Wage loss package** - employer verification, pay stubs, W-2s, tax returns
4. **Insurance disclosures** - EOBs, PIP/MedPay, lien letters, subrogation notices, Medicare/Medicaid status
5. **Client intake notes** - internal questionnaires with details possibly omitted from PFS
6. **Draft builder responses** - discovery responses to validate
7. **Forum/jurisdiction** - federal vs. state court
8. **Key context** - DOI, prior injury history, date range, cash-pay/LOP/workers' comp, pharmacy list, employment gaps >6 months

**Defaults** (if user doesn't respond): federal court, FRCP 26(a)(1) framework, all available docs, partial output if incomplete.

If any source is missing, label output **"Partial"** and identify what is absent.

## Core Workflow

### 1. Build Extraction Map

Every extracted data point must include:

| Field | Format |
|---|---|
| Source document | "Doc 1, p. 4" or Bates range |
| Verbatim text | Exact wording from source |
| Confidence | **High** (explicit with address + dates) / **Medium** (listed, missing details) / **Low** (inferred, needs verification) |

Rules:
- Untraceable facts must not be presented as extracted data, Preserve spelling in `verbatim_name`; create separate `normalized_name`
- Never silently correct spelling, expand abbreviations, or merge duplicate-looking entities, Distinguish treatment facility from billing entity

### 2. Extract Medical Providers

Per provider, capture: name (verbatim + normalized), type (hospital/clinic/physician/PT/imaging/pharmacy/lab/ambulance), address/phone/fax, service dates, NPI, records/bills status, category (injury-related / pre-existing / billing-lien), source citation.

Rules:
- Pre-DOI treatment → "Prior/Pre-existing" (never omit)
- Separate radiology reads, pathology, facility fees as distinct billing entities, Referrals are not treatment encounters, Do not collapse multiple locations of a provider network, Flag potential non-retained treating experts, Include pharmacies, PTs, imaging, labs, not only physicians

### 3. Extract Employment & Wage Loss

Per employer, capture: legal name (+ DBA), address/contacts, job title/schedule/pay rate (exact phrasing), start/end dates, wage documentation, injury impact (first missed date, total days, PTO, return status), benefits applied for (STD/LTD/SSDI/workers' comp).

Rules:
- Preserve vague references as "reported estimate per disclosure"
- Distinguish employer from worksite (staffing agencies)
- Capture self-employment separately, Flag mitigation issues and employment gaps

### 4. Extract Insurance, Liens & Prior Claims

Per entity, capture: insurer/lienholder name (verbatim), plan type, member/group/claim/policy IDs (distinguish each), named insured, contact info, lien status (asserted/pending/final + amount), source citation.

Rules:
- Extract only what documents contain, never guess limits, coverage, or validity, Letter of protection is not an insurance lien, Silent on Medicare → flag: "Confirm Medicare beneficiary status and SSDI; may trigger MSP reporting"
- Capture prior accidents/claims/settlements; flag for builder consistency

### 5. Reconcile Against Builder Draft

Three-dimension diff:

| Dimension | Check | Flag |
|---|---|---|
| Completeness | Entity-by-entity | "Missing in builder" / "New, confirm supplementation" |
| Consistency | Names, dates, amounts | "Spelling mismatch" / "Date conflict" / "Amount discrepancy" |
| Characterization | Builder vs. disclosure | "Overstates" / "Understates" |

Priority levels:
- **RED ALERT** - Document contradictions (e.g., PFS says not working but records reference work). Requires attorney intervention before service.
- **HIGH** - Undisclosed prior accidents, missing providers, inconsistent injury mechanism
- **MEDIUM** - Spelling variations, missing addresses, incomplete date ranges
- **LOW** - Formatting issues, optional fields unpopulated

Rules:
- Never silently overwrite builder data, Distinguish "disclosed but not produced" from "entirely undisclosed"
- Do not override intentional attorney scope narrowing, flag and defer, Note FRCP 26(e) supplementation timing (state analogs may be stricter)

### 6. Deliver Output

**A. Builder-Ready Output**: Separate `verbatim_name`/`normalized_name`, include `source_citation` and `confidence` per record, match builder schema, include reservation language.

**B. Issues Memo** (label: DRAFT, Attorney Work Product / For Counsel Review Only):
1. Client follow-up questions
2. Supplementation needs with timing
3. Defense focus areas and impeachment vectors
4. Red flags with recommended action
5. Entity verification results (NPI checks)
6. Privilege flags, exclude attorney-client communications from extraction

## Post-Draft Check

Ask after delivering initial output:
1. Are RED ALERT/HIGH flags accurate, known explanations to incorporate?
2. Providers/employers client mentioned but absent from disclosures?
3. Generate supplementation timeline from identified gaps?
4. Builder schema match confirmed?

Default: address RED ALERT items first.

## Quality Checklist

- [ ] Every field has source citation or labeled "client to confirm"
- [ ] Forum-specific law references match actual jurisdiction
- [ ] Provider names checked against CMS NPI Registry; unverifiable names flagged
- [ ] Treatment dates consistent with DOI; pre-DOI marked "Prior"
- [ ] Date formats consistent; no false precision from estimates
- [ ] Identifiers transcribed accurately; OCR-sourced values flagged
- [ ] All provider types included (pharmacies, PTs, imaging, labs)
- [ ] No omission construable as concealment (adversarial review)
- [ ] Builder output matches schema constraints
- [ ] All variances shown, nothing silently overwritten

## Compliance Guardrails

- **ABA 1.1/1.3**: Attorney must verify; LLM extraction does not satisfy competence/diligence
- **Model Rule 1.6**: Mask identifiers in memo (last four only); full values in secure builder fields
- **Model Rules 3.3/3.4/4.1**: Distinguish documented facts from reported estimates; never assert completeness if record is incomplete
- **FRCP 37**: Incomplete provider lists are common sanctions targets
- **HIPAA**: All extracted data is PHI; handle per firm protocols
- **Conflicts**: Multiple potential claimants → flag for Model Rule 1.7 screening
- **Anti-hallucination**: Every data point traceable to source; never invent names, dates, identifiers; unverified citations must be flagged

## Jurisdiction Notes

- **Federal MDL**: Follow CMO-mandated PFS headers exactly; non-compliance risks dismissal
- **California**: CCP governs; plaintiff verification form required
- **Florida**: Align with Form 1.977 interrogatories (10-year history) [VERIFY]
- **Texas**: Map to Rule 194 Required Disclosure categories [VERIFY]
- **State auth forms**: Flag "state-specific medical authorization, attorney to confirm"

## Scotland/UK Adaptation

This skill is adapted for Scottish personal injury claims. The following conversions apply:

### Primary Legislation & Court Rules
- **FRCP 26(a)(1) initial disclosures** → **Specification of Documents** under **Rules of the Court of Session (RCS) Chapter 36** or **Sheriff Court PI Rules (Chapter 36 of OCR)** - Pursuers must lodge a specification of documents with summons/initial writ
- **FRCP 26(e) supplementation** → No equivalent automatic duty; **Commission and Diligence** for recovery of documents is a court-ordered process
- **MDL (Multi-District Litigation)** → **Group proceedings** under the **Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018** (if applicable)
- **HIPAA authorisation** → **UK GDPR / DPA 2018** consent for special category data + **data subject access request** under Article 15 UK GDPR to obtain medical records
- **FRCP 37 sanctions** → **Failure to comply** may result in decree by default or expenses sanctions under RCS / Sheriff Court rules

### Scottish-Specific Context
- **New Terminology**:
  - Plaintiff → **Pursuer**
  - Defendant → **Defender**
  - Complaint (civil) → **Initial Writ** (Sheriff Court) / **Summons** (Court of Session)
  - Discovery → **Commission and Diligence** for recovery of documents
  - Interrogatories → Not used in Scotland; **specification of documents** / **minute for recovery** is the equivalent
  - Deposition → **Commission to take evidence**
  - Special damages → **Special damages** (same term; itemed in the schedule of past and future loss)
  - General damages → **Solatium** (pain and suffering)
  - Punitive damages → Not available
- **Court tracks**:
  - Personal Injury claims under £5,000: **Simple Procedure** (Sheriff Court)
  - Claims £5,000 to £100,000: **Sheriff Court Personal Injury Court** (National PI Court)
  - Claims over £100,000: **Court of Session (Outer House)** - Personal Injury Actions
- **Time bar**: **Prescription and Limitation (Scotland) Act 1973** - 3-year limitation for PI claims (1 year for defamation)
- **Pre-action protocol**: Voluntary pre-action protocol for PI claims in Scotland; pursuer should send **Letter of Claim** before raising proceedings
- **Medical records**: Obtain via **data subject access request** under UK GDPR (no fee, 1-month response) or via **Commission and Diligence** if court proceedings have started
- **Wage loss proof**: Pay slips, P60, HMRC employment history, employer letter, not W-2 forms
- **Benefits clawback**: **CRU (Compensation Recovery Unit)** - DWP may recover certain benefits from damages; similar to US Medicare/Medicaid MSP
- **Insurance**: No PIP/MedPay in Scotland; **private medical insurance** or **NHS treatment costs** may be recoverable

### Forms & Documents (see `scots-forms/`)
- `specification-of-documents-template.md` - template specification for recovery of medical records and wage loss evidence
- `pi-claim-letter-template.md` - letter of claim under Scottish PI pre-action protocol
- `schedule-of-past-and-future-loss-template.md` - template schedule of special damages

### Key Changes to Workflow
1. **Intake Checklist**: Replace FRCP 26(a)(1) packet with **specification of documents and initial writ**; replace HIPAA auth with **DSAR form** and **mandatory medical authority (Form PI2)**; replace W-2 with **P60/Payslips**; replace Medicare/Medicaid with **CRU certificate**
2. **Medical Provider Extraction**: Use **GMC number** or **NMC pin** instead of NPI; **CHI number** for patient identifier
3. **Defaults**: Sheriff Court PI procedure (not federal court)
4. **Quality Checklist**: Replace CMS NPI Registry with **GMC Online Register** / **NMC Register**
5. **Compliance Guardrails**: Replace ABA Model Rules with **Law Society of Scotland Practice Rules** and **Faculty of Advocates Code of Conduct**; replace FRCP 37 with **RCS / Sheriff Court Rules** on expenses and sanctions; replace HIPAA with **UK GDPR**

### Provider Check
- [ ] PI track confirmed (Simple Procedure / Sheriff PI Court / Court of Session)
- [ ] Limitation date checked against Prescription and Limitation (Scotland) Act 1973
- [ ] Specification of documents drafted and lodged (or DSAR sent pre-action)
- [ ] CRU certificate obtained (if benefits clawback relevant)
- [ ] All USD amounts converted to GBP (multiply by ~0.8)
- [ ] Medical practitioners identified via GMC/NMC register (not NPI)
- [ ] Law Society of Scotland rules confirmed for conflict and confidentiality obligations

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
