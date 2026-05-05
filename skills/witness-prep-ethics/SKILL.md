---
name: witness-prep-ethics
language: en
description: 'Evaluates witness preparation activities for ethical compliance under ABA Formal Opinion 508 and Model Rules 3.3, 3.4, 8.4. Distinguishes permissible preparation from prohibited coaching. Use when planning deposition or trial prep, reviewing proposed prep activities, or checking witness coaching ethics. Triggers: witness prep, deposition prep, coaching ethics, ABA 508, testimony preparation. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Witness Preparation Ethics Boundaries

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

Defines lawful witness preparation boundaries and compliance workflow under ABA guidance and Model Rules. Core principle: preparation is expected, but truth is the touchstone-genuine recollection must be preserved.

## Prerequisites

1. Jurisdiction and governing ethics rules (state bar, local court orders).
2. Witness type and setting (fact or expert; deposition, hearing, trial).
3. Core materials: pleadings, key documents, prior statements, discovery responses.
4. Any in-court communication limits (Geders, Perry).

## Authority Baseline

| Source | Constraint |
|---|---|
| Model Rule 3.3 | No false evidence or testimony (candor to tribunal) |
| Model Rule 3.4 | No falsifying evidence or counseling false testimony |
| Model Rule 8.4 | No dishonesty, fraud, deceit, misrepresentation |
| ABA Formal Op. 508 (2023) | Preparation expected but must preserve genuine recollection |
| Restatement (Third) Law Governing Lawyers §116 | Preparation allowed; no coaching to fabricate or alter |
| Local ethics opinions | Follow stricter local rule when applicable |

## Permissible vs. Prohibited

| Area | Permissible | Prohibited |
|---|---|---|
| Procedure | Explain mechanics, oath, objections, transcript | - |
| Documents | Review to refresh recollection | Use documents to override memory |
| Recollection | Ask what witness remembers; test basis and confidence | Supply facts or fill gaps |
| Legal relevance | Explain claims and why topics matter | Instruct how to shape testimony |
| Anticipated topics | Identify likely areas; practice Q&A | Provide preferred answers |
| Expression | Suggest clearer wording; avoid jargon | Change substance by rephrasing |
| Demeanor | Advise calm, listen fully, ask for clarification | - |
| Coordination | Prepare witnesses separately | Align stories across witnesses |

## Session Workflow

1. State purpose: truthful, complete testimony is required.
2. Cover procedure and demeanor guidance.
3. Review documents to refresh memory, then test recollection.
4. Elicit narrative in witness's own words.
5. Practice anticipated topics with neutral prompts.
6. Correct clarity issues without changing substance.
7. Run ethics checklist; obtain witness confirmation.

## Unfavorable Recollection Protocol

**Required:** Accept recollection as stated. Advise truthful testimony. Adjust case strategy.

**Allowed:** Explore basis and confidence level. Check for question misunderstanding. Review documents to test memory without pressure.

**Forbidden:** Pressure to change truthful recollection. Suggest recollection is wrong because harmful. Coach to minimize or hide unfavorable facts.

## Gray-Area Tests

- After document review, does witness have present recollection or only adoption of the document?
- Are you clarifying expression without changing substance?
- Are you explaining legal relevance without instructing how to answer?
- Would you be comfortable with the prep transcript before a disciplinary committee?

## Ethics Checklist

Permissible:
- [ ] Explain procedure and roles
- [ ] Review documents to refresh memory
- [ ] Ask witness to describe recollection
- [ ] Explain legal significance of topics
- [ ] Identify anticipated topics and practice questions
- [ ] Suggest clearer expression of witness's own recollection
- [ ] Advise on demeanor and non-substantive behavior

Prohibited:
- [ ] Suggest facts the witness does not recall
- [ ] Tell the witness what happened
- [ ] Coach false or misleading testimony
- [ ] Share other witnesses' testimony to align stories
- [ ] Pressure witness to change truthful testimony
- [ ] Use documents to override genuine recollection

## Neutral Prompt Templates

```text
"Tell me what you remember about [event]."
"What is the basis for that memory?"
"Does this document refresh your recollection, or are you relying only on what it says?"
"Please answer in your own words, even if the answer is not helpful to our case."
"If you do not know or do not recall, say so."
```

## Guidelines

- Apply the stricter rule when state or local guidance is more restrictive.
- Never show or summarize other witnesses' testimony to a witness.
- If you know testimony is false, follow Model Rule 3.3 remediation duties.
- Document preparation steps to show compliance if challenged.

## Cross-References

- `deposition-witness-prep-session`
- `deposition-deponent-coaching`
- `deposition-preparation`

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
