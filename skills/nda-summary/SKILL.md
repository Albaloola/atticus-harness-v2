---
name: nda-summary
language: en
description: Generates structured summaries of Non-Disclosure Agreements, extracting parties, confidential information scope, permitted disclosures, term/survival, breach remedies, and risk flags. Use when summarizing NDAs, reviewing confidentiality agreements, distilling NDA obligations, or onboarding stakeholders to NDA terms. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# NDA Summary

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

Distills an NDA into a structured, scannable reference covering material terms, obligations, and risk areas.

## Prerequisites

- Complete NDA (executed or near-final draft)
- Any amendments or side letters modifying original terms

## Quick Start

1. Read the full NDA and any amendments
2. Extract terms into each section below, citing section numbers
3. Flag gaps, ambiguities, and non-market terms in Risk Flags
4. Mark silent topics as **[NOT ADDRESSED]** and uncertain citations as **[VERIFY]**

## Output Sections

### 1. Overview

Extract: parties (full legal names, Disclosing/Receiving/Mutual roles), effective date, purpose/context, agreement type (unilateral/mutual), governing law and venue.

### 2. Confidential Information

Extract:
- **Definition** - quote or paraphrase with scope
- **Categories** - listed categories from agreement
- **Exclusions** - publicly available, independently developed, prior knowledge, authorized disclosure
- **Standard of care** - same-as-own / reasonable care / heightened
- **Marking requirements** - written marking, oral designation follow-up

### 3. Disclosure Parameters

Extract:
- **Permitted recipients** - employees, contractors, advisors, affiliates; note need-to-know or binding requirements
- **Permitted uses** - evaluation, due diligence, project scope
- **Prohibited uses** - reverse engineering, competitive use, etc.
- **Compelled disclosure** - legal process / regulatory; note advance-notice and protective-order rights

### 4. Term and Survival

Extract: agreement duration, survival period post-termination, return/destruction requirements and certification obligations.

### 5. Breach Remedies

For each, note whether present (Y/N) and details:
- **Injunctive relief** - bond waiver?
- **Liquidated damages** - amount/formula
- **Indemnification** - scope, legal fees
- **Liability cap** - amount, exclusions (consequential, punitive)
- **Dispute resolution** - arbitration, mediation, forum

### 6. Additional Terms

Extract if present: non-solicitation/non-compete, IP ownership or licensing, representations re authority to disclose, assignment restrictions, third-party beneficiary provisions.

### 7. Risk Flags

- [ ] **Unusual terms** - deviations from market-standard NDAs
- [ ] **Onerous obligations** - asymmetric burdens, broad definitions, long survival
- [ ] **Ambiguities** - vague definitions, internal inconsistencies
- [ ] **Gaps** - missing standard of care, survival period, return/destruction, compelled-disclosure carve-out
- [ ] **Enforceability concerns** - overbroad scope, unreasonable duration

## Pitfalls

- **Silent topics**: Always flag missing standard of care, survival period, and return/destruction, these are the most commonly omitted
- **Quoting vs. paraphrasing**: Quote definitions and key obligations exactly; paraphrase elsewhere for brevity
- **No legal advice**: Flag issues for attorney review, do not opine on enforceability
- **Section citations**: Every extracted term must reference a section number or page
- **Length**: Target 1 to 3 pages depending on NDA complexity

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
