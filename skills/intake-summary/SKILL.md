---
name: intake-summary
language: en
description: 'Produces a structured U.S. corporate client intake summary from intake forms, consultation notes, and initial communications. Outputs an executive overview, client profile, matter description, timeline, legal considerations, financials, risks, and follow-up questions with source mapping. Use for corporate governance intake, new matter onboarding, and client management summaries. Trigger keywords: client intake summary, intake form, consultation notes, corporate governance, new matter overview. [Atticus UK/Scots refined]'
tags:
- corporate, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Client Intake Summary (Corporate)

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

Convert raw intake materials into a structured, source-cited matter overview for initial attorney review.

## Prerequisites

1. Intake materials: forms, notes, emails, attachments, and any provided documents
2. Client identifiers: legal name and entity type (if available)
3. Matter scope: corporate governance or related client management issue
4. Jurisdiction signals: state(s) of formation, operations, or dispute nexus

## Output Structure / Process

Use the template below and populate with extracted facts. Every factual statement should include a source tag in the form `(Source: {doc id/page/line or email date})`. If missing, mark as `Unknown`.

```
# Executive Overview (2 to 3 sentences)
- [Summary of issue, client objective, and urgency with source tags.]

# Client Profile
| Field | Details | Source |
|---|---|---|
| Legal name |  |  |
| Entity type |  |  |
| Formation state |  |  |
| Primary contacts |  |  |
| Preferred communication |  |  |
| Language/access needs |  |  |
| Key stakeholders |  |  |

# Matter Description
| Topic | Details | Source |
|---|---|---|
| Issue summary |  |  |
| Key parties |  |  |
| Client objectives |  |  |
| Business context |  |  |
| Prior actions taken |  |  |
| Documents referenced |  |  |

# Timeline of Key Events
| Date | Event | Source |
|---|---|---|
|  |  |  |

# Preliminary Legal Considerations, Area(s) implicated: 
- Jurisdiction questions:
- Governance instruments involved (bylaws, charter, operating agreement):
- Potential deadlines or time sensitivity:
- Conflicts check status:

# Financial Discussions
| Item | Details | Source |
|---|---|---|
| Fee structure discussed |  |  |
| Retainer amount |  |  |
| Budget constraints |  |  |
| Billing preferences |  |  |

# Risks / Red Flags, Inconsistencies or credibility issues:
- Unclear authority or standing:
- Complexity indicators:
- Unrealistic expectations:

# Follow-Up Questions
- 
- 
- 

# Immediate Next Steps
- 
- 
- 

# Source Map (if multiple materials)
| Source ID | Description | Date | Notes |
|---|---|---|---|
|  |  |  |  |
```

## Guidelines

- Use clear, neutral legal tone; avoid advocacy or conclusions not supported by sources.
- Cite the exact intake source for each fact; avoid unsourced paraphrase.
- Flag missing facts with `Unknown` and surface as follow-up questions.
- Call out potential conflicts and urgency without assuming outcomes.
- Keep dates in `YYYY-MM-DD` format and verify entity spellings against source documents.
- Scope to U.S. corporate governance intake; if non-U.S. issues appear, label as jurisdictional uncertainty.

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
