---
name: final-order-judgment
language: en
description: Atticus UK/Scots legal skill for final-order-judgment. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Final Order and Judgment (Scots Law)

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

Drafts a Final Order and Judgment that resolves all claims, establishes enforceable directives, and withstands appellate review in Scottish group proceedings and ordinary civil litigation.

## Prerequisites

Gather before drafting:

- **Caption details** - court (Court of Session or Sheriff Court), case number, named parties, group/class definition
- **Procedural history** - key pleadings, motions, hearing dates, proof (non-jury) or settlement/ summary decree posture
- **Evidentiary record** - transcripts, productions, commission and diligence materials, agreed (staged) facts
- **Legal authorities** - governing statutes (enactments of the Scottish Parliament or UK Parliament applicable to Scotland), controlling precedent (Inner House, UK Supreme Court)
- **Relief sought** - monetary amounts, interdict terms, expenses, fee petitions, distribution plan for group proceedings
- **Local rules** - formatting requirements (Chapter of the Rules of the Court of Session 1994 / Act of Sederunt for Sheriff Court), separate document practice, proposed order procedures

## Document Structure

### 1. Caption and Title

- Full court name (Court of Session, Outer House / Sheriff Court - [Sheriffdom])
- All named pursuers/defenders; group (class) definition reference, Case number (including consolidated numbers)
- Title: "INTERLOCUTOR AND DECREE" or "FINAL JUDGMENT" (as per Scots court practice)
- Conform to court rule formatting (margins, font, spacing)

### 2. Recitals and Procedural History

- Nature of action and averments asserted, Basis for decision: proof (judge alone), summary decree, or settlement approval, Chronological key events with specific procedural step dates, Settlement agreements or joint minute incorporated by reference

### 3. Findings of Fact

- Number sequentially; support each with record citations (transcript pages, production numbers)
- Organise chronologically or thematically, Distinguish contested vs. uncontested facts (admissions on record)
- State standard of proof applied (balance of probabilities)
- Include group/class treatment findings if applicable: ascertainability, common issues, suitability for group proceedings

### 4. Conclusions of Law

- Number sequentially; cite statutes, regulations, and case law in neutral citation format (e.g., [2025] CSIH 12, [2025] UKSC 8)
- Address every ground of action and defence, For each claim: state legal elements (under Scots law), apply facts, state conclusion, If group proceedings (RCS Chapter 26 / Sheriff Court equivalent), address certification requirements, opt-in treatment, representative party suitability, Note binding vs. persuasive authority (Inner House and UK Supreme Court binding; Outer House persuasive)

### 5. Relief and Remedies

| Relief Type | Required Specificity |
|---|---|
| Monetary damages | Exact amounts, interest (Judicial Rate: 8% per annum or current rate set by Act of Sederunt), expenses |
| Group distribution | Method, claims process, cy-près distribution to charity if applicable |
| Interdict (injunction) | Precise conduct, duration, compliance mechanisms |
| Expenses (costs) | Award of expenses (loser pays); specify taxation if not agreed |
| Dismissals | Assoilzie (absolvitor) or dismissal; specify grounds and parties |
| Reserved matters | Scope for enforcement, expenses, distribution |

- All claims and all parties must be resolved, no unresolved issues, Specify compliance deadlines and enforcement mechanisms (interdict, petition and complaint for breach)

### 6. Execution Block

```
THE LORD ORDINARY / THE SHERIFF, having heard parties
and considered the cause, HEREBY FINDS the following facts
admitted or proved:

[Findings of Fact numbered sequentially]

THEREFORE FINDS IN LAW:

[Conclusions of Law numbered sequentially]

ACCORDINGLY, sustains/repels the pleas-in-law for the Pursuer,
and grants decree in terms of the conclusions of the summons:

IT IS THEREFORE ADJUDGED AND DECREED: [relief]

DIRECTS: [further directions, expenses, etc.]

DATED: _______________

_________________________________
[Sheriff / Judge Name]
[Title]
[Court]
```

- Include intimation/service requirements per court rules, Note extraction and registration procedures

## Checks

- **Record support** - every factual finding cites the record; every legal conclusion cites authority
- **Unambiguous relief** - orders enforceable on their face without external documents (unless expressly incorporated by joint minute or agreement)
- **Group/class requirements** - address notice to class members, opt-in treatment, binding effect on members who have entered the group
- **Citation compliance** - all citations in neutral format; verify currency, reversal history, and Scottish/UK relevance
- **Cross-references** - findings of fact numbers align with conclusions of law references
- **Pleas-in-law** - ensure findings sustain/repel pleas-in-law as pled on record
- **Expenses** - specify expenses (loser pays) and any limitation (fixed expenses in Simple Procedure); taxation if not agreed
- **Settlement orders** - include approval requirements for group/class settlements; court must sanction as fair, reasonable, and in the interests of the group
- **Interest** - judicial interest at current rate (set by Act of Sederunt) unless specific contractual rate applies

## Scotland/UK Adaptation

This skill has been adapted from US federal class action practice (FRCP Rule 23, federal judgments under Fed. R. Civ. P. 58) to Scottish civil procedure.

### Key Adaptations

- **Court hierarchy**: Court of Session (Outer House for first instance; Inner House for appeal) and Sheriff Court (with Sheriff Appeal Court) replace US District Courts, Courts of Appeals, and state courts
- **Group proceedings**: Scotland introduced group proceedings under RCS Chapter 26 in 2018 (Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018). Opt-in, not opt-out (unlike US Rule 23(b)(3))
- **No jury trials in civil cases**: Scottish civil cases are judge alone (proof) - no US-style bench/jury election
- **No punitive damages**: Scots delict law does not recognise punitive or exemplary damages
- **Costs**: Scots law follows "loser pays" (expenses follow the event), not the US American Rule. Judicial expenses are taxed if not agreed
- **Pleadings**: Based on written pleadings (summons, defences, adjustments, record) with pleas-in-law; not US notice pleading under FRCP 8
- **Interim remedies**: Interdict (interim interdict) replaces TRO/preliminary injunction; diligence replaces attachment/garnishment
- **Commission and diligence**: Replaces US discovery, includes commission to take evidence, diligence for recovery of documents
- **Summary decree**: Replaces US summary judgment (Rule 56); available when no real issue of controversy
- **Citation format**: Neutral citation (e.g., [2025] CSOH 12) or session cases replaces Bluebook/ALWD format
- **Judgment document**: Interlocutor and decree replaces separate document under Rule 58; not all orders require a separate document
- **No cy-près class settlements**: Cy-près distribution to charity is available in group proceedings but less common than US practice
- **Costs in group proceedings**: Qualified one-way costs shifting (QOCS) may apply; loser pays with potential cap
- **Supreme Court**: UK Supreme Court (not US Supreme Court) is the final appellate court for devolution and civil appeals from Scotland
- **Interest**: Judicial rate set by Act of Sederunt (currently 8% per annum); not subject to US federal/state split

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
