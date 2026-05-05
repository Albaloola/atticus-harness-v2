---
name: client-intake-summary
language: en
description: Produces a structured corporate-client intake brief from intake forms, consultation notes, and initial communications. Use when onboarding a new corporate matter, processing an intake packet, summarizing consult notes, running a conflict check, or triaging deadlines for a corporate governance matter. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Client Intake Summary

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

Converts raw intake materials into an evidence-tagged, team-ready brief for attorney review and matter activation.

## Prerequisites

Gather before starting:

- **Intake packet**: forms, engagement data, identity/contact details, entity structure
- **Communications**: emails, call/meeting notes, preliminary documents
- **Jurisdiction cues**: governing state, filing location, corporate governing documents
- **Conflict inputs**: firm CRM/conflict database or prior-representation list (or note that none was available)
- **Fee framework**: hourly/flat expectations, retainer status, billing constraints, payor source
- **Time-sensitive facts**: deadlines, hearings, board dates, contract expirations
- **Scope notes**: permission and confidentiality scope for each source document

## Quick Start

1. Collect and tag all source documents.
2. Run conflict/ethics check (or note gap).
3. Draft the brief using the section order and template below.
4. Mark every unknown field `Unknown` and every unverified legal point `[VERIFY]`.
5. Route to assigning attorney with urgency classification.

## Output Sections

Produce in this fixed order:

| Section | Content | Format |
|---|---|---|
| Executive Overview | 2 to 3 sentences: matter, client objective, urgency | Plain text |
| Client Profile | Names, roles, contacts, communication prefs, confidentiality sensitivity | Bulleted fields |
| Matter Snapshot | Type, legal issue, key parties, factual timeline, status, governing entities | Chronological table |
| Preliminary Legal Considerations | Governing law cues, implied claims, jurisdiction questions, privilege/authority risks, SOL flags | Checklist |
| Financial Notes | Fee discussion, retainer, budget constraints, funding source, billing risk | Bullets; standardize dollar amounts |
| Risks and Red Flags | Inconsistencies, credibility issues, unrealistic outcomes, complexity indicators | Risk table (Low/Med/High) |
| Conflicts and Ethics | Conflict search status, adverse-party overlap, confidentiality conflicts, privilege boundaries | Status table |
| Follow-Up Queue | Missing facts, documents, and answers needed | Numbered action list |
| Immediate Next Steps | 24h actions, 7-day actions, owner, dependency | Prioritized checklist |

### Header Template

```text
Client:
Matter ID:
Matter Type:
Jurisdiction:
Intake Sources:
Date Received:
Status: New / Pending / Urgent
```

## Core Drafting Rules

1. **Facts vs. inferences** - every `Fact` row must cite at least one source.
2. **Dates** - use `YYYY-MM-DD` throughout.
3. **Client quotes** - preserve only when materially relevant.
4. **Names** - verify spellings against source materials; do not over-edit.
5. **Uncertainty** - flag with `[VERIFY]` and list what must be checked.
6. **Order** - address conflict/confidentiality posture before legal merits.

## Pitfalls and Checks

- **No legal advice.** Tone is internal and professional; no counseling recommendations.
- **Urgency required.** Every brief must classify as `Immediate`, `This Week`, or `Routine`.
- **SOL / filing deadlines.** If mentioned, include the governing trigger rule + `[VERIFY]` for jurisdiction-specific requirements.
- **No fabricated timelines.** Missing dates go in the Follow-Up Queue, not invented.
- **Confidentiality.** Avoid unnecessary sensitive disclosures in shared summaries.
- **Corporate governance.** Capture entity authority limits, board/committee roles, and document governance references.
- **Closing line.** End with: recommended assignment owner, recommended first task, and estimated start date.

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
