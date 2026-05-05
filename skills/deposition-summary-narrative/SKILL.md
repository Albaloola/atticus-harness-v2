---
name: deposition-summary-narrative
language: en
description: Atticus UK/Scots legal skill for deposition-summary-narrative. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Witness Evidence Summary, Narrative (Scotland)

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

Synthesises witness evidence (precognitions, witness statements, affidavits, or examination transcripts) into a strategic narrative memorandum with embedded citations, flagged admissions, and credibility analysis, adapted for Scottish legal practice.

**[SCOTS: Note]** - There is no deposition procedure in Scots civil proceedings. The equivalent forms of pre-proof witness evidence are **precognitions** (narrative summaries of what a witness would say, prepared by a solicitor) and **witness statements** (signed statements admissible under the Civil Evidence (Scotland) Act 1988). In criminal proceedings, **precognitions** are the standard method. This skill adapts deposition summary methodology for these Scottish evidence formats.

## Prerequisites

1. **Witness evidence source** - precognition, signed witness statement, affidavit, or transcript of examination/commission on oath
2. **Case reference** - style of cause, court reference number
3. **Witness role** - pursuer/witness, defender/witness, expert, or haver
4. **Attendee list** - solicitors, advocates, parties present (if examination)

## Quick Start

1. Collect witness evidence and case identifiers
2. Identify witness role and key topics from evidence
3. Generate output sections in order: Header → Executive Overview → Narrative Body → Exhibit/Document Log → Notes on Evidence Quality
4. Embed citations to paragraph numbers or page/line references after every material assertion
5. Flag admissions, contradictions, and memory gaps throughout

## Output Sections

### 1. Header Block

- Case instance (style of cause, court, reference number)
- Witness name and litigation role, Date and location (if examination); solicitor/advocate present, Privilege notice: "Prepared at the direction of counsel. Privileged Legal Work Product, Confidential."

### 2. Executive Overview (1 to 2 paragraphs)

Cover key topics, most significant admissions, credibility concerns, and impact on case theory.

### 3. Narrative Body

Organise by **topic, not Q&A order** (if transcript/commission). Typical sections: Background & Qualifications, Events Leading to Incident, The Incident, Damages & Injuries, Medical Treatment, Employment & Financial Impact. Adjust to fit case type.

Per section:
- Write flowing prose, never reproduce Q&A format, Cite immediately after each assertion: `(precognition para 12 to 15)` or `(transcript p.78:3 to 15)`
- Flag admissions: *"Significantly, the witness acknowledged..."*
- Flag contradictions: *"This conflicts with the earlier precognition stating..."*
- Flag memory gaps: *"Witness professed no recollection of X despite prior specificity about Y (precog para 167 to 168)."*
- Note credibility concerns: inconsistency, evasiveness, exaggerated or minimised answers, Note demeanour if observed (commission/examination context only)

**Precognition-specific handling:**
- Precognitions are summaries prepared by a solicitor, not verbatim transcripts, Cite specific paragraphs; note where paraphrase may differ from the witness's likely oral testimony, Mark any matters where the precognition conflicts with other precognitions, pleadings, or productions, Precognitions are not generally admissible in evidence (Civil Evidence (Scotland) Act 1988 s.9) - flag witness statement vs precognition distinction

**Witness statement-specific handling (Civil Evidence (Scotland) Act 1988):**
- Signed witness statements may be admissible as evidence in civil proceedings, Treat as the witness's evidence in chief, Note any qualifications, caveats, or reservations in the statement, Cross-reference to productions and documentary evidence

**Affidavit-specific handling:**
- Affidavits are sworn evidence admissible without attendance (subject to cross-order)
- Flag any departures from formal requirements (swearing/affirmation, exhibits)
- Treat as the witness's evidence in chief

**Commission/Examination handling:**
- If evidence was taken on commission (e.g., expert or vulnerable witness), treat as Q&A, Note the commissioner, any objections or rulings, Flag any irregularities in the examination process

### 4. Exhibit/Document Log

| Reference | Description | Witness Response |
|---|---|---|
| Prod. 1 | Document type / date | Authenticated / Denied / No recognition / Contradicted |

### 5. Notes on Evidence Quality

- Credibility issues (consistency, plausibility, motive to fabricate)
- Reliability (memory quality, contemporaneous notes, independent corroboration)
- Legal competence (expert qualifications, hearsay, personal knowledge)
- Gaps or matters not addressed, Cross-examination vulnerabilities

## Pitfalls and Checks

- **Always cite**: never paraphrase a critical admission without reference
- **Length target**: ~25 to 33% of source length; completeness over brevity
- **Accuracy**: do not characterise beyond what the evidence supports; summary must be defensible to opposing counsel
- **Precognition limitation**: remember that precognitions are not themselves admissible, do not treat as equivalent to sworn evidence
- **Privilege header**: repeat on every page with case name and witness
- **Follow-up queries**: cite both summary location and underlying evidence reference
- **Confidentiality**: treat as privileged legal work product; do not share with opposing party
- **Jurisdiction**: follows Scottish civil/criminal evidence conventions

---
## Scotland/UK Adaptation

This skill has been adapted from a U.S. deposition summary template for use in Scottish litigation.

### Key Conversions
| U.S. Term | Scottish Equivalent |
|---|---|
| Deposition | No direct equivalent; use precognition / witness statement / commission on oath |
| 30(b)(6) deposition (entity representative) | Commission to examine nominated representative |
| Deposition transcript | Precognition (narrative) / witness statement (signed) / transcript of examination |
| Deponent | Witness / haver |
| Court reporter / stenographer | Commissioner / solicitor / clerk |
| Deposition errata | Correction of precognition / statement (limited) |
| FRE / FRCP rules of evidence | Civil Evidence (Scotland) Act 1988 / Criminal Procedure (Scotland) Act 1995 |
| Discovery (US scope) | Commission and diligence (more limited) |
| Exhibit (at deposition) | Production (for discovery) / Production (for proof) |
| Notice of deposition | Citation / intimation of commission |
| Privilege (work product) | Legal professional privilege (advice/litigation) |
| Pre-trial | Pre-proof |
| Trial | Proof (civil) / Trial (criminal) |
| Verdict | Verdict (civil jury) / Judgment (civil) |
| Settlement privilege | Without prejudice privilege |
| Expert report (discoverable) | Expert report (disclosable under rules) |
| Admissibility of deposition testimony | Precognition not generally admissible (s.9 Civil Evidence (Scotland) Act 1988) |
| Protective order / confidentiality | Confidentiality ring / sealed inspection |

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
