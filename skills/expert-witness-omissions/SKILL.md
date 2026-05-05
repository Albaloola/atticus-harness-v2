---
name: expert-witness-omissions
language: en
description: Identifies medical records an expert witness failed to review, cite, or address by cross-referencing the expert's materials-reviewed list against the full case record set. Produces a tiered omissions register, methodology critique, bias analysis, and strategic recommendations for cross-examination and exclusion motions. Use in personal injury or medical malpractice litigation when challenging or defending expert credibility during disclosure, pre-proof, or trial preparation. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, evidence, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Witness Medical Records Omissions Analysis

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

Surfaces gaps in an expert's medical record review to support impeachment, exclusion motions, and rebuttal strategy.

## Prerequisites

1. **Expert materials** - reports, precognition or deposition transcripts, disclosed materials-reviewed list
2. **Complete medical record set** - clinical notes, labs, imaging, operative reports, pharmacy records, consult notes
3. **Case context** - expert's stated opinions and the claims or defences they support

## Output Structure

### 1. Materials Reconciliation Table

| Record / Document | Date | In Case File | Cited by Expert | Gap |
|---|---|---|---|---|
| {Record name / provider} | {Date} | ✓ | ✗ | Omitted |

List every record in the case file. Flag all not cited or addressed by the expert.

### 2. Omissions Register

For each omitted record:

| Field | Detail |
|---|---|
| **Record** | Name, date, provider, page cite |
| **Expert's assertion** | Verbatim quote + transcript/report cite |
| **Omitted content** | Key findings, values, diagnoses, clinical events |
| **Significance tier** | Critical / High / Moderate / Low |
| **Inadvertent or strategic** | Assessment with reasoning |

**Significance tiers:**

| Tier | Meaning |
|---|---|
| **Critical** | Directly contradicts expert's core opinion or key factual assertion |
| **High** | Documents pre-existing conditions, alternative causation, or ignored treatment decisions |
| **Moderate** | Fills timeline gaps or undermines methodology without negating the opinion |
| **Low** | Minor oversight unlikely to affect substantive conclusions |

### 3. Methodology Critique

- [ ] Expert provided a complete, dated materials-reviewed list
- [ ] Expert's chronology aligns with actual medical timeline
- [ ] Expert acknowledged or explained record gaps
- [ ] No factual assertions contradicted by records expert claims to have reviewed

### 4. Bias / Pattern Analysis

Characterise each pattern as confirmation bias, selective review, or inadvertent oversight:

| Pattern | Records Involved | Characterisation |
|---|---|---|
| Systematic exclusion of pre-incident records | | |
| Selective citation of favourable results, omission of contradictory values | | |
| Treating physician notes omitted where they conflict with expert | | |
| Single-provider reliance ignoring other treating sources | | |

### 5. Strategic Recommendations

**Cross-examination**
- Targeted questions for each Critical and High omission, Sequence: establish foundation (expert claims thorough review) → confront with omitted record → force acknowledgment

**Exclusion motion (Daubert / Frye / *GA Miller*)**
- [SCOTS: Use Scots law tests below]
- Assess whether selective review supports **exclusion** vs. **weight-only** argument, Note if opinion rests on incomplete facts sufficient for a reliability challenge

**Rebuttal expert focus areas**
- Records the opposing expert omitted that rebuttal must address, Timeline corrections required, Alternative causation or diagnosis pathways to develop

## Guidelines

- Maintain objectivity, not every omission is bad faith; distinguish credibility threats from minor oversights, In Scotland: expert witness duties are governed by the **rules of court** (RCS Chap. 36A / Sheriff Ordinary Cause Rules Chap. 27C) and the **expert's duty to the court** - this duty is paramount and overrides instructing party interests, Flag records that are themselves incomplete, illegible, or missing pages, Label output as solicitor work product (litigation privilege)
- Applies equally to pursuer-side and defender-side expert scrutiny

---

## Scotland/UK Adaptation

### Core Concept Conversion

| US Term | Scotland/UK Equivalent |
|---|---|
| Daubert / Frye standard | **No Daubert or Frye** - Scottish courts apply the *GA Miller* test (*Miller v. British Railways Board* 1968 SC 639) and common law rules on expert evidence admissibility |
| FRE 702 (expert testimony) | **No codified equivalent** - expert evidence admitted if relevant and the witness has the requisite skill/knowledge; the expert owes a duty to the court |
| Daubert motion to exclude | **Motion to exclude expert evidence** - based on *GA Miller*: the expert must be qualified in the relevant field and their opinion must be within the field of expertise |
| Discovery / disclosure of expert materials | **Scottish procedure**: expert reports are disclosed pre-proof; precognition and solicitor-expert communications are privileged (litigation privilege) |
| FRE 703 (bases of opinion) | Expert can rely on hearsay and materials they would reasonably rely upon in their professional practice, similar to UK practice |
| Impeachment | **Cross-examination on omissions** - standard Scottish practice |
| Work product protection | **Litigation privilege** - protects solicitor-expert communications and intermediate drafts |

### Expert Evidence in Scottish Civil Procedure

1. **Rules of the Court of Session (RCS) Chap. 36A** / **Sheriff Ordinary Cause Rules Chap. 27C** - Governs expert evidence in civil cases.
2. **Single joint expert (SJE)** - Common in Scottish civil litigation; the court may appoint an SJE or the parties may agree one.
3. **Expert's duty to the court** - The expert's paramount duty is to the court, not the instructing party. This is stated in the rules and the expert's report must include a declaration to this effect.
4. **Pre-proof disclosure** - Experts must disclose reports within a timetable set by the court. Reports must include: qualifications, material relied upon, summary of opinions, and a statement of duty to the court.
5. **No automatic right to exclude** - Scottish courts rarely exclude expert evidence. Omissions and selective review typically go to **weight**, not admissibility, unless the expert is clearly not qualified or the opinion is entirely unsupported.

### The GA Miller Test for Expert Evidence

In Scotland, expert evidence is admissible if:

1. The witness has **special skill or knowledge** in the relevant field
2. The opinion is **within the field** of the witness's expertise
3. The opinion would help the court **resolve a disputed issue**

This is a lower threshold than Daubert. The court focuses on **weight** rather than **admissibility** - meaning omissions analysis is primarily for **cross-examination** and **closing submissions**, not exclusion motions.

### Key Differences for Practitioners

1. **No Daubert** - Scottish courts do not use the Daubert reliability analysis. Omissions go to weight, not admissibility (except in extreme cases).
2. **Expert's duty to the court** - The Scottish expert must declare that they understand their overriding duty to the court. Selective omission is a breach of this duty, powerful cross-examination point.
3. **Pre-proof disclosure** - Expert reports must be disclosed under court timetable. Omissions can be raised at the pre-proof hearing.
4. **Privilege** - Solicitor-expert communications are protected by litigation privilege, but the *material relied upon* must be disclosed in the expert's report.
5. **Single Joint Expert** - If an SJE is appointed, the omission analysis is used to challenge the SJE's methodology (not to exclude them).
6. **Criminal proceedings** - Different rules apply (Criminal Procedure (Scotland) Act 1995, s. 280 et seq.).

### Recommended Approach

- Replace all Daubert/Frye references with *GA Miller* and the Scottish rules of court (RCS 36A / OCR 27C).
- Replace FRE references with the Scottish procedural rules.
- Mark all case citations as `[VERIFY]` - Scottish case law on expert evidence includes *GA Miller v. BRB* 1968 SC 639 and *McTear v. Imperial Tobacco Ltd* 2005 2 SC 1.
- Focus cross-examination strategy on **breach of duty to the court** rather than **Daubert reliability**.
- Flag that exclusion motions are rare in Scotland, the skill is best used for impeachment and rebuttal expert preparation.

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
