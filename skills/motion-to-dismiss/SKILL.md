---
name: motion-to-dismiss
language: en
description: Drafts a plea to the relevancy / plea of no jurisdiction in Scottish civil procedure. Triggers on requests to draft preliminary pleas, pleas to the relevancy, jurisdictional challenges, or pleas attacking the legal sufficiency of an initial writ during the pleadings phase. Covers Court of Session and Sheriff Court practice. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, motion, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Plea to the Relevancy / Plea of No Jurisdiction (Scottish Civil)

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

Draft a preliminary plea attacking the legal sufficiency of an initial writ or the court's authority, structured for lodging in the Court of Session or Sheriff Court.

> **Note:** The US FRCP 12(b) motion to dismiss has no exact Scottish equivalent. Scots civil procedure uses **pleas to the relevancy** (challenging whether the pursuer has stated a relevant case) and **pleas of no jurisdiction** (challenging the court's authority). These are stated in the defender's defences (Notice of Intention to Defend and defences) and heard as a preliminary proof or debate. The standard is "relevant vs irrelevant" pleadings, not the US "plausibility" standard under Twombly/Iqbal.

## Prerequisites

Collect before drafting:

1. **Initial Writ / Summons** - full text, all craves (heads of claim) identified
2. **Jurisdiction** - Court of Session / Sheriff Court, sheriffdom, local practice notes, page/formatting limits
3. **Case info** - court name, case number, party names as captioned
4. **Grounds** - which preliminary plea(s) apply
5. **Referenced documents** - contracts or documents incorporated by reference in the initial writ

## Drafting Workflow

### Step 1: Caption

Format per court practice. Include court (full name, sheriffdom if Sheriff Court), parties (as captioned), case number, and title appropriate to the plea.

### Step 2: Introduction / Statement of Plea

- Identify the defender and specific plea(s) being stated, State whether seeking dismissal of entire initial writ or specific craves, Provide a one-paragraph argument roadmap

**Pleas reference, Scottish equivalents to US 12(b) grounds:**

| Scottish Plea | Equivalent US Ground | Notes |
|---|---|---|
| Plea of no jurisdiction | 12(b)(1) / 12(b)(2) | Jurisdiction under Civil Jurisdiction and Judgments Act 1982 / Brussels regime |
| Forum non conveniens | 12(b)(3) | Scottish courts have inherent power to sist (stay) proceedings |
| Plea to the relevancy | 12(b)(6) | Challenge on basis that pleadings are irrelevant, no relevant case stated |
| Plea of no title to sue | - | Pursuer lacks standing (ius standi) |
| Plea of time bar | - | Prescription / limitation period expired |
| Plea of res judicata | - | Matter already decided |
| Plea of personal bar | - | Waiver, acquiescence, mora and taciturnity |

### Step 3: Statement of Facts

- Recite facts from the initial writ, neutral tone, strategic emphasis, For relevancy challenge: confine to the four corners of the initial writ plus documents incorporated by reference, Highlight gaps, conclusory averments, and omissions, Organise chronologically or thematically to expose deficiencies, No argumentative characterisation

### Step 4: Legal Standard

Tailor to the plea(s) asserted:

- **Plea to the relevancy:** Scottish standard, pleadings must be "specific" and "relevant", not the US "plausibility" standard. The court considers whether, if the pursuer's averments are proved, they would entitle the pursuer to the remedy sought. Legal conclusions and bare assertions are insufficient; the pursuer must aver specific facts supporting each element of the claim. The rule is that pleadings must give fair notice of the case to be met. See *Jamieson v Stewart* 1982 SLT 361 and subsequent Inner House authority.
- **Plea of no jurisdiction:** Analyse under the Civil Jurisdiction and Judgments Act 1982 (CJJA 1982) and the Brussels regime (including post-Brexit Lugano Convention position). The defender bears the initial burden of challenging jurisdiction; the pursuer must then establish jurisdiction.
- **Forum non conveniens:** Scottish courts have inherent power to sist proceedings on forum non conveniens grounds. Test: is there another competent forum which is clearly more appropriate?

### Step 5: Argument / Note of Arguments

Use numbered headings, one per plea or deficient element. For each:

- Quote the initial writ's specific deficient averments, Identify the legal element not relevantly pled, Cite controlling Inner House / Sheriff Appeal Court authority with analogous dismissals on relevancy, Distinguish anticipated contrary authority, For element-based claims: track each element systematically

### Step 6: Conclusion & Prayer for Relief

Synthesise without repeating arguments. Specify relief:

| Relief | When appropriate |
|---|---|
| Dismissal (sustaining the plea) | Plea is well-founded; amendment would be futile |
| Sist (stay) for amendment | Curable pleading defects (leave to amend) |
| Time to lodge revised defences | Where deficiencies are identified but curable |

Include request for expenses (costs) if appropriate, plus "any other relief the court deems fit."

### Step 7: Signature Block & Details of Solicitor

- **Signature:** Solicitor name, firm, address, phone, email, reference. For party litigant: name, address.
- **Service:** Method (SCTS e-filing / civil online portal, registered post, etc.), date, all parties served.

## Pitfalls & Checks

- **Relevancy constraint:** Never rely on facts outside the initial writ, incorporated documents, or public records in a relevancy challenge
- **Formatting:** Verify local practice notes for font, margins, spacing, page limits before finalising
- **Citations:** OSCOLA or Greens Practice Style; verify every case citation is current and has a neutral citation
- **Strategy:** Lead with strongest plea; jurisdictional pleas precede merits (relevancy) pleas
- **E-filing:** Ensure use of Scottish Courts and Tribunals Service (SCTS) civil online portal where applicable
- **Precognition/production:** If the challenge requires consideration of evidence (factual attack on jurisdiction), a preliminary proof may be needed rather than a debate on relevancy alone
- **Expenses:** Note that expenses follow success in Scottish litigation, include plea for expenses if successful

## Scotland/UK Adaptation

### Key Adaptations, Replaced FRCP 12(b) → Scottish pleas (plea to the relevancy, plea of no jurisdiction, forum non conveniens, time bar, etc.)
- Replaced 12(b)(1)/(2) (subject matter / personal jurisdiction) → CJJA 1982 / Brussels regime / plea of no jurisdiction, Replaced 12(b)(3) (venue) → Forum non conveniens, Replaced 12(b)(6) (failure to state a claim) → Plea to the relevancy / irrelevant pleadings, Replaced Twombly/Iqbal plausibility standard → Scottish relevancy standard (specific + relevant; fair notice; *Jamieson v Stewart*)
- Replaced Daimler AG v Bauman → CJJA 1982 / Scottish jurisdictional rules, Replaced "plaintiff/defendant" → pursuer/defender, Replaced "complaint" → initial writ / summons, Replaced Bluebook → OSCOLA / Greens / Scottish citation practice, Replaced CM/ECF → SCTS e-filing / civil online portal, Replaced "federal/state courts" → Court of Session / Sheriff Court, Replaced "TOC/TOA" requirements → check specific court practice notes, Replaced "motion" → plea / preliminary plea (pleas are stated in defences, not by standalone motion except in certain procedural contexts)
- Replaced USD → GBP amounts, Replaced "proof" requirement on jurisdiction → preliminary proof may be required where jurisdiction facts are in dispute

### [SCOTS] Notes, The US motion-to-dismiss is a standalone pre-answer motion. In Scotland, preliminary pleas are stated within the defences (Notice of Intention to Defend and defences document) and determined at debate or, where facts are disputed, at a preliminary proof.
- The Scottish standard for relevancy is whether the pursuer's averments, if proved, would entitle them to the remedy sought. The test is not "plausibility" but whether the pleadings give fair notice and contain specific factual averments supporting each element.
- Jurisdiction challenges are governed primarily by the Civil Jurisdiction and Judgments Act 1982, which implements the Brussels regime. Post-Brexit, the UK's participation in the Lugano Convention remains relevant.
- A plea of no jurisdiction must be stated timeously, usually within the period for lodging defences. Late challenges may be treated as acceptance of jurisdiction.
- In the Sheriff Court, Simple Procedure has its own distinct rules for challenging claims (more informal).
- Standing to sue ("title to sue") is a distinct Scottish plea, there is no exact US equivalent as a standalone 12(b) ground.

### [VERIFY] Items Before Use, Verify current Rules of the Court of Session (RCS) Chapter 13 (preliminary pleas) and Sheriff Court Ordinary Cause Rules (OCR)
- Confirm current test for relevancy (check latest Inner House / Sheriff Appeal Court authority)
- Verify current CJJA 1982 jurisdictional provisions and post-Brexit position (Lugano Convention status)
- Check applicable practice notes for formatting and e-filing requirements in the particular court/sheriffdom, Verify whether the plea should be stated in the defences (standard route) or as a standalone application (unusual)
- Confirm OSCOLA / Greens citation requirements for the specific court, For Simple Procedure cases, check Simple Procedure Rules instead of Ordinary Cause Rules

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
