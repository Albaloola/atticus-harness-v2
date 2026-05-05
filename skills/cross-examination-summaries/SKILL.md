---
name: cross-examination-summaries
language: en
description: Generates thematic cross-examination summaries from precognitions, sworn affidavits, commission evidence, and recovered documents with precise page-and-line citations. Highlights inconsistencies, impeachable admissions, and favourable concessions in a proof-ready format. Use when preparing witness cross-examination, building impeachment strategy, or synthesising testimony across multiple witnesses. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cross-Examination Summary (Proof Preparation)

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

Transforms raw witness testimony and recovered documents into a thematically organised impeachment reference with exact citations for courtroom use in Scottish civil or criminal proceedings.

## Prerequisites

1. **Precognition(s) or witness statements** - page numbers intact; note that formal precognitions under Scottish practice are not sworn but are the solicitor's record
2. **Prior sworn statements** - affidavits, commission evidence, sheriff court affidavits, earlier hearing testimony
3. **Informal statements** - emails, texts, recorded communications
4. **Relevant productions** - documents or other witness statements that contradict or corroborate
5. **Case theory summary** - pursuer's/claimant's narrative and key issues

## Output Structure

### 1. Witness Profile

| Field | Content |
|---|---|
| Name / Role | Relationship to parties, capacity (fact, expert, party) |
| Key Topics | Issues this witness covers |
| Credibility Flags | Bias, motive, prior convictions (Criminal Procedure (Scotland) Act 1995, s.266), interest in outcome |
| Examination Goal | Concessions to secure / narrative to establish / credibility to undermine |

### 2. Thematic Sections

Organise by **case issue**, not chronology of the precognition. Use this template per theme (typically 4 to 8):

```
## [Theme Name]

### Witness Position
[Concise paraphrase]

### Key Testimony
> "[Exact quote]"
> - [Source], p. [X], l. [Y]

### Inconsistencies / Contradictions, Prior statement: "[Quote]" - [Source], p. [X], l. [Y]
- Contradicting production: [Production No.], [relevant portion]
- Other witness: [Name], [Source], p. [X], l. [Y]

### Favourable Concessions
- [Admissible fact] - [Source], p. [X], l. [Y]

### Knowledge / Perception Gaps, Lacks personal knowledge of [X] - [Source], p. [X], l. [Y]

### Impeachment Approach
[1 to 2 sentence tactic: foundation, sequence, production to use]
```

### 3. Impeachment Priority Matrix

| Rank | Opportunity | Source Citation | Production | Impact (H/M/L) |
|---|---|---|---|---|
| 1 | [Description] | [Doc, p/l] | [Prod. No.] | H / M / L |

### 4. Concessions Checklist

Facts to lock in early, before confrontational impeachment:

- [ ] [Fact] - [Source], p. [X], l. [Y]

### 5. Productions Integration Map

| Production | Relevant Portion | Contradicts / Supports | Deploy During |
|---|---|---|---|
| Prod. [#] | [Description] | [Source], p. [X], l. [Y] | [Theme] |

### 6. Cross-Witness Impeachment

Include when multiple witnesses are involved:

| This Witness Says | Conflicts With | Other Witness Says | Citation |
|---|---|---|---|
| "[Quote]" - [Source] | | "[Quote]" - [Name], [Source] | |

### 7. Strategic Overview

- **Examination sequence**: Concessions first, then impeachment, close on [X]
- **Top 3 moments**: Highest-impact confrontations
- **Witness control risks**: Evasive, volatile, over-explains
- **Narrative thread**: One sentence connecting examination arc to case theory

## Scottish Evidence Law Notes

**Key distinctions from US practice:**

- No US-style depositions in Scottish civil procedure; witness evidence is gathered through precognitions (solicitor's notes, not sworn) and commissions to take evidence (sworn, before a commissioner)
- Recovery of documents is by specification of documents (not "discovery"); diligence is by commission and diligence, Prior convictions: Criminal Procedure (Scotland) Act 1995, s.266 governs admissibility of accused's previous convictions, Civil evidence: Civil Evidence (Scotland) Act 1988 - hearsay is generally admissible in civil proceedings (s.2), affecting impeachment strategy, FRE 609 equivalent: s.266 of the 1995 Act (criminal); common law (civil) - character and credibility rules differ from US approach
- "Impeachment" remains the correct term in Scottish practice, though "challenge to credibility and reliability" is the formal classification

## Pitfalls

- **Citation accuracy is paramount** - verify every page/line reference; the summary's credibility depends on it
- **Exact quotes only** for testimony intended for impeachment; no paraphrased citations
- **Stay non-argumentative** in the body, reserve advocacy for the Strategic Overview
- **Flag evasive or rehearsed answers** in theme section notes
- **One summary per witness** in multi-witness matters; use Section 6 for cross-witness linkage
- **Scots law of evidence** differs materially from US law, do not assume FRE applicability; verify under Criminal Procedure (Scotland) Act 1995, Civil Evidence (Scotland) Act 1988, and common law

## Scotland/UK Adaptation

**Court hierarchy:**
- Criminal trials: High Court of Justiciary (solemn) / Sheriff Court (solemn or summary)
- Civil proofs: Court of Session (Outer House) / Sheriff Court (ordinary cause or summary cause)

**Key terminology substitutions:**
- Plaintiff → Pursuer; Defendant → Defender, Deposition → Precognition (informal, not sworn) / Commission to take evidence (sworn)
- Discovery → Commission and diligence / Specification of documents, Trial (civil) → Proof, Trial (criminal) → Trial (retained)
- FRE (Federal Rules of Evidence) → Civil Evidence (Scotland) Act 1988 / Criminal Procedure (Scotland) Act 1995 / common law of evidence, Exhibit (discovery context) → Production (formal term in Scottish practice, numbered as 1/1, 2/3, etc.)
- Attorney → Solicitor (or Advocate, depending on court level)
- Summary Judgment → Summary Decree, Injunction → Interdict, Hearsay exceptions → Civil Evidence (Scotland) Act 1988, s.2 (hearsay generally admissible in civil); common law rules apply in criminal, Prior conviction impeachment → Criminal Procedure (Scotland) Act 1995, s.266 (accused) / common law (non-accused witnesses)

**Statutory framework:**
- Civil Evidence (Scotland) Act 1988 (c.32)
- Criminal Procedure (Scotland) Act 1995 (c.46)
- Law Reform (Miscellaneous Provisions) (Scotland) Act 1968 (c.70) - hearsay, Vulnerability: Vulnerable Witnesses (Scotland) Act 2004; s.271M of the 1995 Act (special measures)
- Clients' documents are recovered by specification of documents (Ordinary Cause Rules, Chapter 28; Court of Session Rules, Chapter 35)

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
