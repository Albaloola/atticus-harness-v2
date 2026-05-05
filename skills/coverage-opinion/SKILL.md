---
name: coverage-opinion
language: en
description: Drafts structured insurance coverage opinions analyzing duty to defend and duty to indemnify for carriers. Applies eight corners rule, policy exclusion analysis, and state-specific law. Use when a carrier receives a claim or lawsuit, needs a coverage determination, reservation of rights analysis, or defense obligation assessment. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Insurance Coverage Opinion

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

Analyzes policy language, complaint allegations, and state law to produce a definitive coverage opinion on defense, indemnification, and reservation of rights for carriers.

## Prerequisites

Gather before starting:

1. **Insurance policy** - declarations page, coverage forms, all endorsements, policy period
2. **Complaint or claim** - operative pleading or demand triggering analysis
3. **Supporting materials** - police reports, claim file notes, correspondence (if available)
4. **Controlling jurisdiction** - state whose insurance law governs

## Quick Start

Write from the carrier's perspective. Be definitive, carriers need actionable guidance, not hedging. When genuinely uncertain, recommend defend-under-reservation.

## Core Workflow

Draft each section in order (except Executive Summary, write last, place first):

### 1. Executive Summary

> "Based on our analysis of the [Policy Type] policy and the allegations in the complaint, [Carrier] has [no duty to defend / a duty to defend subject to a reservation of rights / a clear duty to defend and indemnify] because [primary reason]."

Be definitive. Avoid "probably" or "might."

### 2. Factual Background

- Recite only facts from complaint or claim file, no speculation, Coverage-relevant facts only; neutral tone

### 3. Policy Analysis

Three sub-sections, always quoting exact policy language (never paraphrase):

| Sub-Section | Focus |
|---|---|
| **Coverage Provisions** | Quote exact language; identify specific section (CGL Coverage A, etc.) |
| **Exclusions** | List every applicable exclusion with exact quoted language, typically where coverage is defeated |
| **Conditions** | Notice requirements, cooperation clauses, late-notice defenses, consent-to-settle |

### 4. Legal Analysis

**Duty to Defend** - Apply the Eight Corners Rule (unless state permits extrinsic evidence):

- [ ] Compare four corners of complaint against four corners of policy
- [ ] Assess whether allegations could trigger coverage element-by-element
- [ ] Analyze each exclusion for clear and unambiguous applicability
- [ ] Apply "any possibility of coverage" standard, duty to defend is broad

Research whether jurisdiction follows strict eight corners or permits extrinsic evidence.

**Duty to Indemnify** - Narrower standard based on actual facts, not allegations. Usually cannot be determined until case resolution. Default: "The duty to indemnify cannot be determined at this time."

### 5. State Law Considerations

Research and cite controlling jurisdiction on:

- Eight corners vs. extrinsic evidence standard, Ambiguity interpretation (most states construe pro-insured)
- State-specific exclusion construction rules, Current case law, mark uncertain citations with [VERIFY]

### 6. Conclusion & Recommendations

Use definitive language matching one of three outcomes:

- **No coverage**: "[Carrier] has no duty to defend or indemnify because [exclusion] unambiguously bars coverage."
- **Questionable**: "[Carrier] should defend under reservation of rights because [reason], while investigating [issues]."
- **Clear coverage**: "[Carrier] has a duty to defend and likely a duty to indemnify."

Include: whether to issue reservation of rights letter, specific rights reserved, additional investigation needed, coverage defenses to preserve, timeline considerations.

### 7. Reservation of Rights

When coverage is questionable, default to recommending reservation. Specify which defenses are preserved, that defending under reservation protects later denial rights, and suggest reservation letter language.

## Pitfalls

- **Never paraphrase policy language** - always quote exact text
- **Duty to defend != duty to indemnify** - analyze separately with distinct standards
- **No added facts** - never assume facts not alleged in the complaint
- **Bad faith exposure** - analysis must be objective even representing the carrier; wrongful denial creates liability
- **Stale citations** - insurance law evolves rapidly; verify all cited authority is current
- **Timing** - flag delays immediately; coverage decisions affect litigation strategy
- **Updateability** - note opinion may require revision as facts develop

---

**Key changes from original:**

- Removed `tags` (not part of the spec's required frontmatter)
- Trimmed description while preserving trigger guidance and keywords, Collapsed redundant prose, overview is now 1 sentence, Renamed "Output Structure" to "Core Workflow" with a quick-start section above it, Consolidated Guidelines into a "Pitfalls" section with tighter bullet points, Eliminated the duplicate "Why It Matters" table in State Law (replaced with a flat list)
- Removed the separate Conclusion recommendation templates' checkbox format where a sentence suffices, Reduced from ~117 lines to ~85 lines (~27% token reduction) while preserving all domain-critical content

Want me to try the write again, or would you prefer to copy this manually?

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
