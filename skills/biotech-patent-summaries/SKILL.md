---
name: biotech-patent-summaries
language: en
description: Summarizes biotech patent families and disputes into litigation-ready intelligence briefs. Trigger when the user provides patent applications, issued patents, PTAB filings, prosecution histories, licensing materials, or litigation documents in biotechnology domains and requests a summary, risk assessment, or FTO analysis. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Biotechnology Patent Summaries

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

Produce a source-grounded intelligence brief on biotech patents and disputes for litigation, portfolio, and executive decisions.

## Quick Start

1. Collect inputs: patent corpus, dispute materials, parties/products map, jurisdiction scope, and clear objective (litigation exposure, licensing, design-around, or FTO).
2. Run the core workflow below.
3. Deliver the output template with uncertainty tags on every analytical assertion.

## Core Workflow

1. **Ingest & normalize** - Gather patent identity, claim sets, prosecution history, and dispute metadata. Normalize dates to ISO format. Define technical terms on first use.
2. **Extract & map claims** - Identify independent claims first, quote critical language verbatim, then map dependents and fallback embodiments.
3. **Analyze validity/infringement** - Test enforceability vectors:
   - §101 eligibility (methods, diagnostics, natural products)
   - §102/103 novelty and obviousness
   - §112 enablement/written description (especially genus claims over biological matter)
4. **Assess procedural & business impact** - Quantify litigation risk (timeline, injunction exposure, claim-construction volatility), cross-jurisdiction differences, and commercial consequences.
5. **Compile deliverable** - Fill the output template; tag every item as confirmed fact, party argument, or analytical assessment.

## Input Capture

| Bucket | Key Fields |
|---|---|
| Patent identity | Patent/app no., family ID, filing/priority/grant dates, assignee |
| Technical scope | Mechanism, target, platform, key molecules/processes |
| Claim set | Independent/dependent claims, types, limitations, embodiments |
| Status | Pending/granted/abandoned, IPR/opposition posture, deadlines |
| Dispute metadata | Court/tribunal, parties, accused products, allegations |
| Procedural calendar | Hearings, motions, claim construction, trial dates (with certainty rating) |
| Strategic posture | Commercial significance, exclusivity, competitor landscape, remedies sought |

## Output Template

```
# [Matter Title]
Current through: [DATE]

## 1) Executive Summary
Three short paragraphs: patent landscape, key legal issues, action recommendations.

## 2) Patent/Dispute Snapshot
| Field | Value |
|---|---|
| Identifier | |
| Jurisdiction(s) | |
| Parties | |
| Status | |
| Urgency | |

## 3) Claim & Scope Analysis
| Claim # | Text excerpt | Breadth | FTO relevance | Risk flags |
|---|---|---|---|---|

## 4) Validity & Prior-Art Assessment
| Ground | Basis | Record support | Counterargument strength | Probability |
|---|---|---|---|---|

## 5) Infringement Analysis
| Accused product/method | Claim-mapped match | Defense argument space | Exposure |
|---|---|---|---|

## 6) Dispute Timeline
| Date | Event | Forum | Strategic effect |
|---|---|---|---|

## 7) Strategic Recommendations
- [ ] Litigation strategy
- [ ] Licensing / settlement
- [ ] Design-around / alternative pathway
- [ ] Portfolio filing or challenge
- [ ] Regulatory and exclusivity coordination

## 8) Uncertainty Register
Confirmed facts | Documented allegations | Analytical assumptions | Open gaps
```

## Deliverable Rules

- **Citation discipline** - Cite patent numbers, claim/paragraph refs, docket entries; no uncited assertions.
- **Scope discipline** - Label each statement as fact, party argument, or analysis.
- **Technical precision** - Keep scientific language exact; do not oversimplify in ways that change meaning.
- **Jurisdiction tags** - Label every legal standard by jurisdiction and confidence level.
- **Currency** - State explicit "current through" date and stop-line assumptions.

## Pitfalls & Checks

- No legal advice; provide neutral counsel-grade analysis only.
- Default to US jurisdiction unless explicitly labeled otherwise.
- Do not overstate claim scope where specification support is thin.
- Flag missing records as "needs confirmation" - never infer.
- [VERIFY] Confirm current case law before finalizing eligibility/invalidation analysis, especially for biotech diagnostic and sequence-related claims.
- [VERIFY] Cross-check AIA first-inventor-to-file effects, PGR/IPR timing windows, and equitable doctrines for US patents.
- For biologics, evaluate regulatory exclusivities (orphan, pediatric, biologics data exclusivity) alongside patent rights.

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
