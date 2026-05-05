---
name: form-adv
language: en
description: 'Drafts SEC- or state-filed Form ADV Parts 1A/1B/2A/2B for investment adviser registration, producing IARD-ready responses, brochures, and supplements. Use when drafting or amending Form ADV, preparing RIA registration, building Part 2A brochures or Part 2B supplements, or compiling IARD filings. Trigger: "Form ADV", "RIA registration", "investment adviser brochure", "Part 1A", "Part 1B", "Part 2A", "Part 2B", "IARD", "SEC filing", "state registration". [Atticus UK/Scots refined]'
tags:
- SCOTS [SCOTS]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Form ADV Parts 1 and 2 - Scotland/UK Adaptation

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

This skill is adapted for the UK investment adviser regime. The FCA authorisation process under the Financial Services and Markets Act 2000 (FSMA) is the equivalent of SEC/IARD registration.

Produces a complete, internally consistent FCA authorisation pack (equivalent to Form ADV Parts 1A/1B/2A/2B) ready for compliance review and submission via FCA Connect.

## Prerequisites

Gather before drafting:

- Entity formation docs and ownership cap table, AUM calculations (discretionary / non-discretionary)
- Advisory agreements, fee schedules, billing policies, Compliance manual, code of ethics, custody and client money rules (CASS)
- Affiliations and related-person disclosures, Disciplinary history for firm and approved persons, Advisory services list and client types, Approved person / CF30 biographies, Prior FCA filings or variations of permission (if any)
- Target jurisdiction(s) - FCA solo-regulated vs. dual-regulated (PRA)

## Deliverables

- FCA authorisation application pack (Part 4A permission) - equivalent to Part 1A, Part 4A supplementary info (if FCA-only permissions)
- Client-facing brochure / disclosure document (plain-English, compliant with COBS rules)
- Approved person supplements (per CF30 / SMCR individual)
- Cover page with submission date, Open Issues list for missing or unverified data

## Workflow

### 1. Intake, Populate Data Table

| Data Point | Notes |
|---|---|
| Legal name / trading names | Match incorporation docs |
| FCA Firm Reference Number (FRN) | If existing authorisation |
| Principal office / mailing | Consistent across all documents |
| Compliance Oversight (CO) name / contact | Confirm SMF16 appointment |
| Ownership 25%+ | Supports controller/permission checks |
| RAUM (disc / non-disc) | Current FCA reporting instructions |
| Client types / counts | Match agreements |
| Services offered | Match marketing materials |
| Fees / billing | Match agreements |
| Affiliations | Related parties list |
| Client money / custody status | CASS audit requirement |
| Disciplinary events | Never infer absence, verify |

### 2. Draft FCA Application (Part 1 equivalent)

- Identifying info, legal form, accounting reference date, Controllers, close links, group structure, Advised services and business activities, AUM calculations and methodology, Client types and counts, Permitted business / limitations, Client money, custody, safeguarding arrangements, Financial industry affiliations and close links, Soft commissions, dealing commission, agency cross trades, All controllers and close links schedules

### 3. Draft Supplementary Information (FCA-Only)

- FCA-specific questions per permission type, Threshold conditions, financial resources, professional indemnity insurance, Additional FCA disclosures

### 4. Draft Client Disclosure Brochure

Required sections (equivalent to Part 2A Items 1 to 18):

Cover Page → Material Changes → Contents → Our Services → Fees and Costs → Performance-Based Fees → Client Types → Investment Approach / Risk → Disciplinary and Compliance → Other Business Activities → Code of Ethics / Personal Dealing → Execution and Best Execution → Review of Accounts → Introducer and Referral Arrangements → Client Money and Custody → Investment Discretion → Voting Client Securities → Financial Information

Content requirements:
- Plain-English narrative, consistent terminology, Conflicts disclosed with mitigation measures, Cost examples with tier structures and billing timing, Strategy-specific risk disclosures, Client money and safeguarding explanation, Introducer/referral arrangements, Voting policy availability

### 5. Draft Approved Person / SMCR Supplements

Per approved person:
- Name, title, business address, Relevant qualifications and experience (last 5 years)
- Professional designations and issuing bodies, Disciplinary history, Other directorships and business interests, FCA supervision and reporting structure

### 6. Cross-Document Consistency Checks

- [ ] AUM and client counts match across application and brochure
- [ ] Controllers and close links consistent across all schedules
- [ ] Fees and services match agreements and marketing materials
- [ ] Disciplinary disclosures consistent throughout
- [ ] Client money / custody status described consistently

### 7. Open Issues

- Tag unresolved items as `[to be determined, source needed, due: DATE]`
- Tag regulatory ambiguity as `[VERIFY]` for compliance officer review

## Pitfalls

- **Disciplinary history**: Never state "no disciplinary history" without verified FCA sources.
- **Legal conclusions**: Report facts and required disclosures only, avoid legal opinions.
- **Outdated instructions**: Always use current FCA Handbook and SUP rules.
- **Legalese in brochure**: Keep disclosure document client-facing and plain-English.
- **Inconsistent figures**: Cross-check all numbers and dates across every part.
- **Unclear thresholds**: If FCA permission thresholds or exclusions are ambiguous, flag `[VERIFY]` and request confirmation.

---

**Key changes from the original:**

- Adapted for FCA authorisation regime (FSMA 2000) replacing SEC/IARD registration, Terminology: SEC → FCA, IARD → FCA Connect, Form ADV → FCA authorisation pack, Part 1A → FCA application, CCO replaced with SMF16 Compliance Oversight, State registration replaced with FCA permission scope, Part 2A replaces SEC plain-English brochure with COBS-compliant disclosure document, Part 2B replaces supervised persons with approved persons / SMCR regime

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
