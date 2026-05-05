---
name: ime-report-analysis
language: en
description: 'Analyzes defense Independent Medical Examination (IME) reports for personal injury litigation, producing a plaintiff-side strategic memorandum with findings summary, treating-physician comparison, bias indicators, and cross-examination roadmap. Use when reviewing defense IME reports during discovery or pre-trial, preparing to depose or cross-examine a defense medical expert, or evaluating IME impact on case valuation. Trigger keywords: IME, independent medical examination, defense expert, medical examination report, cross-examination, bias indicators, impairment rating. [Atticus UK/Scots refined]'
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# IME Report Critical Analysis

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

Produces a plaintiff-side memorandum dissecting a defense IME report: findings summary, treating-physician comparison, bias indicators, and cross-examination priorities.

## Prerequisites

1. **IME report** - complete defense expert report (PDF or text)
2. **Treating physician records** - office notes, operative reports, discharge summaries
3. **Diagnostic records** - imaging (MRI, X-ray, CT), EMG/NCS, lab results
4. **Therapy records** - PT, OT, chiropractic notes with functional progress
5. **Prior medical records** - pre-incident history relevant to claimed injuries

## Output Structure

### 1. IME Report Header

| Field | Detail |
|---|---|
| Examiner name & credentials | |
| Referring party (defense counsel / carrier) | |
| Examination date & location | |
| Questions posed to examiner | |
| Records examiner claims to have reviewed | |

### 2. Records Gap Analysis

- List every record the examiner reviewed, Cross-reference against the complete medical file
- **Flag omissions** - records not reviewed are a primary bias indicator

### 3. Examinee Profile

- Demographics, incident mechanism, chief complaints at IME, Treatment timeline and providers, Functional limitations: treating doctor notes vs. IME history section

### 4. IME Findings Summary

Summarize the examiner's opinions on:
- Diagnoses and causation, MMI determination, Permanent impairment rating (note AMA Guides edition - 5th vs. 6th produces materially different ratings)
- Future care recommendations, Work restrictions / disability

### 5. Treating Physician Comparison

| Issue | IME Opinion | Treating Physician(s) | Source |
|---|---|---|---|
| Primary diagnosis | | | |
| Causation | | | |
| MMI status | | | |
| Impairment rating | | | |
| Future medical needs | | | |
| Work restrictions | | | |

Flag every divergence. Extract direct quotes for contradictions.

### 6. Bias & Impeachment Indicators

Check each applicable red flag:

- [ ] Minimizes subjective complaints without objective basis
- [ ] Selectively cites records favoring defense; ignores contrary evidence
- [ ] Uses outdated or non-standard diagnostic criteria
- [ ] Causation opinions exceed examiner's stated specialty
- [ ] Examination cursory relative to treating exam scope
- [ ] IME history contradicts treating notes on same complaints
- [ ] Substantial income from defense medical-legal work
- [ ] High defense-to-plaintiff testimony ratio
- [ ] Disciplinary actions or published methodology criticisms
- [ ] Financial or referral relationship with referring carrier

### 7. Medical Authority Analysis

Where IME deviates from treating physicians, cite:
- AMA Guides to the Evaluation of Permanent Impairment (note edition)
- Specialty-specific guidelines (AAOS, AAN, ACOEM)
- Peer-reviewed literature contradicting examiner's methodology

Mark unverified citations as `[VERIFY]`.

### 8. Cross-Examination Priorities

Identify **3 to 5 highest-value vulnerabilities**:

| Vulnerability | Supporting Evidence | Suggested Question Areas |
|---|---|---|
| | | |

Focus on:
- Record omissions the examiner cannot explain, Internal inconsistencies (exam findings ≠ written conclusions)
- Opinions lacking foundation in the examination itself, Credential or specialty gaps for opinions rendered

### 9. Strategic Recommendations

- **Rebuttal experts** - specialties needed to counter IME opinions
- **Supplemental discovery** - prior testimony, financial disclosure, examiner publications
- **Case valuation impact** - whether IME materially shifts settlement leverage
- **Motion practice** - Daubert/Frye challenge grounds if methodology is non-standard

## Guidelines

- Cite page/paragraph references from IME and medical records for every assertion, Do not characterize examiner as biased without documentary support, let the record speak, Flag jurisdiction-specific IME rules (scope and obligations vary between state tort and workers' comp)
- Note whether IME was under a compulsory exam order with scope limitations, Label output as attorney work product

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
