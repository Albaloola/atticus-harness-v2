---
name: jnov-motion
language: en
description: Drafts a Note of Challenge to Verdict / Motion for New Trial under the Court of Session Rules or Sheriff Court Rules, with alternative new-trial request. Builds element-by-element evidentiary insufficiency arguments using transcript citations and preserves the appellate record. Use when drafting post-trial challenges, reclaiming motions against jury verdicts, or challenging jury verdicts for insufficient evidence in Scottish civil jury trials. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, motion, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Note of Challenge to Verdict / Motion for New Trial (Scottish Civil)

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

Drafts a post-trial challenge showing no reasonable jury could have reached the verdict, with an alternative motion for new trial preserving appellate review.

> **Note:** JNOV (judgment notwithstanding the verdict) has no direct Scottish equivalent. Scottish civil procedure does not permit a judge to overrule a jury verdict of acquittal. Challenges to jury verdicts in civil cases (available only in the Court of Session for certain actions) proceed by way of a reclaiming motion or a motion for a new trial under the Rules of the Court of Session / Sheriff Court Rules.

## Prerequisites

Collect before drafting:

- **Court/case identifiers** - court, case number, parties (pursuer/defender)
- **Verdict details** - date, claims, special findings, damages awards
- **Prior direction to the jury** - confirmation that a submission was made to withdraw an issue from the jury or that there was no case to answer before the jury was charged (relevant to preservation)
- **Trial record** - transcript with page:line cites, exhibit numbers, witness list
- **Jury directions** - as given by the judge, proposed directions refused, objections preserved
- **Applicable rules** - Rules of the Court of Session (RCS) Chapter 41 / Sheriff Court Rules; filing deadlines
- **Identified deficiencies** - evidentiary gaps per element (missing expert testimony, speculative damages, causation failures)

## Document Structure

Caption, numbered paragraphs, OSCOLA or Greens citation format (unless court practice direction differs), signature block, proposed order.

| Section | Content |
|---|---|
| Caption | Title: "Note of Challenge to Verdict" or "Motion for New Trial" |
| Notice of Motion | Hearing date/manner per rules; governing procedural rule reference |
| Introduction | Moving party, verdict date, claims challenged, prior submission reference, 2-3 sentence thesis |
| Background | Case history → trial proceedings → evidence with transcript cites (e.g., "Tr. 145:12-18") → verdict → prior submissions to the judge |
| Legal Standard | Controlling Inner House / Sherriff Appeal Court authority; distinguish challenge-to-verdict from new-trial standard |
| Challenge to Verdict Argument | Element-by-element insufficiency (see template below) |
| New Trial Alternative | Trial errors + against-the-weight arguments (see template below) |
| Conclusion | Specific relief; alternative relief; expenses; sist of execution if appropriate |
| Proposed Order | Separate signature-ready order for verdict challenge or, alternatively, new trial |

## Core Workflow

### 1. Challenge to Verdict Argument, Per Element

For each element the non-movant (defender/pursuer) bore the burden to prove:

```
[Claim Name]: [Element]

Legal requirement: [Element definition + burden of proof]
Evidence presented: [Opponent's best evidence, viewed favourably, with Tr. cites]
Why insufficient:
- [Gap: e.g., no expert testimony on causation where required]
- [Gap: e.g., damages testimony speculative/conclusory]
- [Gap: e.g., no documentary support for alleged agreement]
Supporting authority: [Cases granting new trial or setting aside verdict on analogous records]
```

### 2. New Trial Argument, Per Ground

```
Alternative Ground [N]: [Error Type]

The error: [What happened, with Tr./Dkt. cites]
Preservation: [Objection at Tr. ___]
Prejudice: [Effect on verdict, not harmless because ___]
```

Organise by category:
- Erroneous jury directions (misstated law)
- Improper admission/exclusion of evidence, Counsel misconduct, Verdict against the great weight of evidence

## Critical Rules

- **View evidence favourably to opponent** - acknowledge their best evidence, then show why it is still legally insufficient
- **Cite the record for every factual assertion** - transcript page:line or exhibit number, no exceptions
- **Element-by-element, not narrative** - organise by each element, not as a story
- **Tone** - methodical, respectful of jury service, zero hyperbole; courts resist overturning verdicts
- **Draft for dual audience** - trial court now, appellate court later; this motion is often prerequisite for appellate sufficiency review
- **Scots civil jury trials** - only available in the Court of Session for certain actions (personal injury, defamation, etc.); Sheriff Court civil jury trials are limited

## Pitfalls

| Issue | Consequence |
|---|---|
| No prior submission at trial | Challenge to verdict may be unavailable, flag if preservation is uncertain |
| Missing deadline | Motion forfeited, check RCS/Sheriff Court Rules deadline prominently |
| Arguing credibility | Impermissible, focus on absence of evidence, not witness believability |
| Ignoring partial relief | Courts more likely to grant a new trial on specific claims or damage components than entire verdict |
| Conflating standards | Challenge to verdict = "no reasonable jury"; new trial = "great weight of evidence" (more lenient) - keep arguments distinct |

## Scotland/UK Adaptation

### Key Adaptations, Replaced JNOV / FRCP 50(b) → Note of Challenge to Verdict / Motion for New Trial under Scottish civil procedure, Replaced "directed verdict" / "Rule 50(a) motion" → submission to withdraw issue from jury / no case to answer submission, Replaced "plaintiff/defendant" → pursuer/defender, Replaced "federal" and "state" → Court of Session / Sheriff Court, Replaced "circuit/state authority" → Inner House / Sheriff Appeal Court authority, Replaced Bluebook citations → OSCOLA / Greens / Scottish citation practice, Replaced "FRCP" / "Rule" references → Rules of the Court of Session (RCS) / Sheriff Court Rules (Ordinary Cause Rules)
- Replaced 28-day federal deadline → check applicable RCS / Sheriff Court Rule deadline, Replaced USD amounts → GBP figures, Replaced "Judgment Notwithstanding the Verdict" → no direct Scottish equivalent; reframed entire concept

### [SCOTS] Notes, JNOV (judgment notwithstanding the verdict) does not exist in Scots law. A judge cannot substitute their own verdict for a jury's verdict on the facts.
- Scottish civil jury trials are available only in the Court of Session for certain categories of action (e.g., personal injury, defamation, reputation).
- The proper Scottish challenge route is a reclaiming motion (appeal to the Inner House) or a motion for a new trial before the same court.
- In practice, the most common post-jury-verdict challenge in Scotland is a motion for a new trial on grounds of the verdict being against the weight of evidence, misdirection by the judge, or improper admission of evidence.
- The reclaiming motion (appeal) lies to the Inner House of the Court of Session from the Outer House, and from the Sheriff Court to the Sheriff Appeal Court.

### [VERIFY] Items Before Use, Verify current RCS Chapter 41 rules on motions for new trial and reclaiming motions, Verify current Sheriff Court Ordinary Cause Rules on post-verdict challenges, Check applicable time limits (may differ from federal 28-day rule)
- Verify whether the action type permits a civil jury trial in the Court of Session, Confirm citation format required by the particular court (OSCOLA or Greens Practice Style)

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
