---
name: verdict-form
language: en
description: Drafts civil trial verdict forms for Scottish courts (Court of Session jury trial or Sheriff Court proof) with sequentially numbered questions covering liability, defences, damages, and comparative fault. Enforces plain-language phrasing, logical conditional flow, and jurisdiction-appropriate formatting. Use when preparing verdict forms, special verdict forms, jury interrogatories, or interlocutors after proof for Scottish civil proceedings. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Verdict Form / Interlocutor After Proof (Scotland)

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

Drafts a trial-ready verdict form (jury) or proposed interlocutor (sheriff/judge alone) guiding the decision-maker through structured questions on liability, defences, and damages for each cause of action in Scottish civil proceedings.

## Prerequisites

Gather before drafting:

- **Operative pleading** - initial writ / summons and all causes of action and elements
- **Defences / Notice of Intention to Defend** - complete defence list including any plea of contributory negligence
- **Jury issues (if applicable)** - approved issues for jury trial
- **Damages evidence summary** - categories supported by evidence
- **Local rules** - court-specific requirements (jury verdict requirements, interlocutor form)

## Quick Start

1. Mirror the instance/caption from the initial writ exactly
2. For jury trials: use the approved issues as the framework
3. For judge-alone proofs: draft proposed interlocutor with findings in fact and law
4. Draft sequentially numbered liability questions per cause of action
5. Insert conditional defence questions
6. Add damages questions conditioned on liability findings
7. Include contributory negligence allocation if at issue
8. Close with court-appropriate signature format

## Core Sections

### Instance/Caption

Copy verbatim from the initial writ / summons. Include court name (Sheriff Court or Court of Session), parties, case number, and title.

### For Jury Trials (Court of Session)

The Court of Session retains civil jury trials for certain actions (personal injury, defamation, etc.). The jury is composed of 12 jurors. Verdicts may be by majority.

Jury verdict form follows the approved issues. A typical approach:

- **Issue 1**: Whether the defender was negligent / in breach of duty
- **Issue 2**: Whether the pursuer was contributorily negligent
- **Issue 3**: Quantum of damages

### For Judge-Alone Proofs (Sheriff Court / Court of Session)

The judgment is expressed as an **interlocutor** (court order) with findings in fact and law. The verdict form concept translates to a proposed interlocutor:

- Proposed findings in fact (numbered)
- Proposed findings in law, Proposed order (decree for payment, decree of absolvitor, etc.)
- Award of expenses (judicial expenses follow success)

### Liability Questions

One sequentially numbered question per cause of action:

- **Plain language** - "Did the defender breach the duty of care owed to the pursuer?" not "Was the defender negligent per Donoghue v Stevenson"
- **State burden** - "proved on the balance of probabilities"
- **Answer format** - Yes ___ / No ___ with adequate white space
- **Order** - foundational claims first, then dependent claims

### Defence Questions

For each complete defence, insert a conditional question:

- Gate on the relevant liability "Yes" answer, Ask whether the defender proved the defence applies, If "Yes," direct to the next relevant question or findings

### Damages

Condition all damages questions on liability "Yes" + defence "No" findings. Otherwise direct to skip.

Draft separate GBP amount lines per category:

| Category | Include When |
|----------|-------------|
| Solatium (pain and suffering) | Personal injury cases, use the Judicial College Guidelines (Scottish adaptation) |
| Past wage loss (wage loss to date) | Provable past earnings loss |
| Future wage loss / loss of earning capacity | Supported by evidence; actuarial calculation |
| Services / personal care (Section 8 claims) | Claims under the Administration of Justice Act 1982 |
| Property damage | Items subject to delictual claim |
| Note: No punitive damages in Scots law | Omit entirely |

### Contributory Negligence (Scotland)

If at issue, add percentage allocation question. Under the Law Reform (Contributory Negligence) Act 1945, the court can apportion responsibility on a percentage basis.

### Proposed Interlocutor (Court-Award Cases)

For judge-alone decisions, the verdict is expressed through an interlocutor:

```
The Sheriff/Lord [Name], having [heard proof / considered the cause]:
Finds in fact: [numbered findings]
Finds in law: [numbered findings]
Therefore [grants decree / assoilzies / other disposal]
Finds the [pursuer/defender] entitled to expenses as taxed
[Other orders]
```

### Signature Block

- **Jury verdict**: "We, the jury, certify that this is our verdict." Include date line, foreperson signature and printed name. All 12 jurors may need to sign if the court requires.
- **Interlocutor**: Signed by the judge/sheriff.

## Pitfalls and Checks

- **Sequential numbering** - number continuously across all sections; never restart per section
- **Terminology alignment** - every question must mirror the pleadings and applicable law
- **Explicit skip instructions** - every conditional must state where to go
- **Completeness** - cover every claim + every complete defence so the court can enter decree from answers alone
- **No contradictions** - structure conditionals to prevent logically inconsistent answers
- **No punitive damages** - Scots law does not award punitive damages. Omit any reference.
- **Majority verdict** - Scottish civil jury verdicts may be by majority (8 out of 12). Include space for indicating majority.

## Scotland/UK Adaptation

- **Court system**: Scottish civil jury trials are only available in the Court of Session for specific actions (personal injury, defamation, etc.). Sheriff Court civil cases are judge-alone; no jury for ordinary cause proofs.
- **Terminology**: "Pursuer" (plaintiff), "Defender" (defendant), "Delict" (tort), "Proof" (trial), "Interlocutor" (judgment/order), "Decree" (order granting remedy), "Absolvitor" (dismissal), "Expenses" (costs/fees, follow success).
- **No federal rules**: Scottish civil procedure is governed by the Ordinary Cause Rules (Sheriff Court) and Rules of the Court of Session 1994. No Federal Rules of Civil Procedure.
- **Contributory negligence**: Law Reform (Contributory Negligence) Act 1945 applies (Scotland-specific provisions).
- **Damages**: Solatium (statutory: s. 9 Administration of Justice Act 1982). No distinction between "general" and "special" damages in the US sense. No punitive damages whatsoever.
- **Jury composition**: 12 jurors in civil cases (not 6 to 12 as in US federal courts). Majority verdicts allowed.
- **Expenses (costs)**: "Loser pays" rule (judicial expenses follow success). The verdict or interlocutor typically includes a finding on expenses.

[SCOTS: Note] The US civil verdict form methodology translates well conceptually but the Scottish system differs significantly: (a) limited availability of jury trials; (b) judge-alone proofs are the norm; (c) the "verdict" in judge-alone cases is an interlocutor with findings; (d) no punitive damages; (e) different damages categories (solatium, etc.); (f) expenses follow success. This skill preserves the logical conditional structure while replacing all US-specific content.

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
