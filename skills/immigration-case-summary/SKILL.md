---
name: immigration-case-summary
language: en
description: 'Produces structured UK immigration case summaries covering applicant background, legal basis, procedural history, posture, and outcomes. Use when preparing case summaries, intake briefs, supervision reviews, handoffs, or client consultations. Trigger keywords: immigration summary, asylum, ILR, leave to remain, removal defence, FLR, ILR, PBS, refusal letter, Home Office decision, First-tier Tribunal, Upper Tribunal, UKVI. [SCOTS]. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Immigration Case Summary

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

Summarises an immigration matter into a scan-ready brief of facts, law, posture, and outcome.

## Prerequisites

Before starting, confirm availability of:

- Complete case file (filings, notices, decisions, transcripts, correspondence)
- Benefit/relief type (asylum, family-based, work/study, removal defence, appeal)
- Forum(s) (UKVI, First-tier Tribunal (Immigration and Asylum), Upper Tribunal, Court of Session, or mixed)
- Key dates (filing, interview, biometrics, decisions, appeal deadlines)
- Confidentiality scope (redactions, sensitivity flags for trauma/medical/minors)

## Workflow

1. Identify immigration route and governing authority from the record
2. Extract applicant background and eligibility elements with cited evidence
3. Build chronological procedural timeline with Home Office/tribunal actions
4. State current posture and deadlines; note risks and open items
5. Flag missing records or conflicts

## Output Template

```
## Matter Snapshot

| Field | Value |
|---|---|
| Client/Applicant | |
| Country of Origin | |
| Home Office Ref / UKVI Receipt(s) | |
| Immigration Route Sought | |
| Forum(s) | |
| Representative of Record | |
| Current Posture | |
| Last Updated | |

## Applicant Background

- Immigration history (entries, status changes, overstays):
- Family relationships (sponsor/dependant):
- Employment/education:
- Relevant vulnerabilities or equities:
- Adverse factors (criminal, deception, removability grounds):

## Legal Basis

- Statute/Regulation/Policy: exact Immigration Act / HC 590 / Home Office policy citations from record, Eligibility elements: map each element to evidence, Discretionary factors (if applicable):

## Evidence Inventory

| Element / Issue | Key Evidence | Gaps |
|---|---|---|

## Procedural History

| Date | Event | Forum | Outcome / Notes |
|---|---|---|---|

## Decisions & Outcomes

- Decision(s): grants/refusals/curtailments/deportation/appeal outcomes with dates, Grounds for decision (quote or summarise from refusal letter)
- Appeal/permission status and deadlines

## Key Issues / Risks

- Inconsistencies or adverse evidence:
- Statutory bars (e.g. s.32 UK Borders Act 2007) or procedural defects:
- Credibility concerns or corroboration gaps:

## Next Steps

- Required applications and deadlines:
- Evidence to obtain:
- Strategy notes:
```

## Pitfalls

- **Never invent citations.** Mark uncertain legal citations as `[VERIFY]`.
- **Distinguish forum standards.** UKVI, First-tier Tribunal, Upper Tribunal, and Court of Session apply different standards, note which applies.
- **Capture refusal-letter details verbatim** when critical to posture.
- **Flag record conflicts** - cite both sources; do not resolve silently.
- **Maintain confidentiality** - omit sensitive details unless required for analysis.

## Scotland/UK Adaptation

This skill has been adapted from US immigration law to UK/Scottish practice.

### Key Terminology Changes

| US Term | UK/Scotland Equivalent |
|---|---|
| USCIS | UKVI (UK Visas and Immigration) |
| EOIR / Immigration Judge | First-tier Tribunal (Immigration and Asylum) |
| BIA (Board of Immigration Appeals) | Upper Tribunal (Immigration and Asylum) |
| Federal Circuit (immigration appeals) | Court of Session (Outer House/Inner House) or Sheriff Appeal Court |
| INA (Immigration and Nationality Act) | Immigration Act 1971; Nationality, Immigration and Asylum Act 2002; Immigration Rules (HC 590) |
| I-589 (Asylum Application) | Asylum claim (Home Office process, no statutory form number) |
| I-485 (Adjustment of Status) | ILR application (SET forms) or FLR (further leave to remain) |
| I-130 (Petition for Alien Relative) | Spouse/partner visa application (Appendix FM) |
| I-140 (Immigrant Petition for Worker) | Skilled Worker visa (PBS) |
| A-Number | Home Office Reference Number (format: 1234-5678) |
| NTA (Notice to Appear) | Notice of removal/deportation decision |
| RFE (Request for Evidence) | Home Office further information request |
| NOID (Notice of Intent to Deny) | Home Office notice of intention to refuse |
| USCIS Receipt Notice | UKVI acknowledgment letter |
| Green Card | Indefinite Leave to Remain (ILR) / Biometric Residence Permit |
| Naturalisation | British citizenship registration or naturalisation |
| Lawful Permanent Resident | Person with ILR / settled status |

### Jurisdictional Notes

- Immigration is a reserved matter in the UK, the same rules apply across Scotland, England, Wales, and Northern Ireland.
- Scotland-specific considerations: no separate Scottish immigration system; Scottish courts hear immigration judicial reviews in the Court of Session.
- Scottish legal aid may be available for immigration matters through the Scottish Legal Aid Board.
- Appeals from the First-tier Tribunal (Immigration and Asylum) lie to the Upper Tribunal, then to the Court of Session (Scotland) or Court of Appeal (England/Wales).

### Statutory References

Where this skill references US statutes, substitute the following UK primary legislation:

- **Immigration Act 1971** - main statute governing entry, leave, and removal
- **Nationality, Immigration and Asylum Act 2002** - appeal rights, asylum support
- **Immigration Rules (HC 590)** - Statement of Changes in Immigration Rules
- **UK Borders Act 2007** - automatic deportation provisions
- **Immigration and Asylum Act 1999** - support and enforcement
- **Borders, Citizenship and Immigration Act 2009** - citizenship provisions
- **Refugee Convention (1951)** - incorporated via s.2 Asylum and Immigration Appeals Act 1993 onward
- **European Convention on Human Rights** - Articles 3 and 8 frequently engaged

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
