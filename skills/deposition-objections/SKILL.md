---
name: deposition-objections
language: en
description: Atticus UK/Scots legal skill for deposition-objections. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Evidence Objections (Scots Civil Procedure)

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

Quick reference for making, defending, and responding to objections during the taking of evidence in Scots civil litigation. Applies to Court of Session, Sheriff Court, and evidence on commission. Verify applicable Act of Sederunt for specific procedures.

**Important note:** Scots civil procedure does not have depositions as understood in US federal practice. Evidence is obtained by:
- **Precognition** - informal pre-proof witness interview (not sworn; not used as evidence)
- **Affidavit** - sworn written statement (may be lodged as evidence in certain procedures)
- **Commission to take evidence** - sworn examination before a commissioner (or the court) for witnesses unable to attend proof
- **Proof** - oral evidence led at trial (equivalent to US trial testimony)
- **Commission and diligence for recovery of documents** - akin to US discovery of documents

## Prerequisites

1. Identify the procedural context: commission to take evidence (RCS 37A), proof, affidavit in support of motion, or precognition
2. Review any interlocutor or court order setting scope and conduct of examination
3. Confirm applicable privileges (legal professional privilege, privilege against self-incrimination, without prejudice)
4. Have the relevant Act of Sederunt or rule ready for citation

## Core Rules (Scots Civil Evidence)

- **Most objections preserve, not block** - witness answers; competency and admissibility are ruled on by the court
- **Form objections** - generally made at time of hearing; failure to object may constitute acquiescence
- **Leading questions in chief** - generally not permitted except on formal/undisputed matters; permitted in cross-examination
- **Hostile witness** - may be cross-examined by own side only with leave of the court
- **Objections should be concise** - State the ground (e.g., "Objection: leading," "Objection: hearsay") without argument

Proper: `"Objection, leading."` / `"Objection, hearsay."` / `"Objection, irrelevant."`
Improper (speaking): `"Objection, the witness hasn't established the foundation for that question and it assumes facts not in evidence."`
Improper (coaching): `"Objection, the witness already told us he doesn't remember that meeting."`

## Objection Reference Table

### Form/Objection Grounds

| Objection | Phrasing | Notes |
|-----------|----------|-------|
| Leading (in chief) | `"Objection, leading."` | Permitted for introductory/formal matters; not for substantive evidence |
| Compound | `"Objection, compound."` | Two distinct questions in one |
| Vague / Ambiguous | `"Objection, vague."` | Question lacks clarity |
| Assumes facts not proved | `"Objection, assumes facts."` | Question premised on unproven assertion |
| Calls for speculation | `"Objection, speculation."` | Witness asked to guess |
| Calls for narrative | `"Objection, narrative."` | Invites a story rather than specific answers |
| Mischaracterises evidence | `"Objection, mischaracterises."` | Counsel's summary distorts prior testimony |
| Argumentative | `"Objection, argumentative."` | Question is an argument, not an inquiry |
| Asked and answered | `"Objection, asked and answered."` | Repetitive questioning |
| Lacks foundation | `"Objection, foundation."` | Witness's competence to answer not established |
| Irrelevant | `"Objection, irrelevant."` | Question lacks sufficient relevance to a fact in issue |

### Substantive Objections

| Objection | Phrasing | Notes |
|-----------|----------|-------|
| Hearsay | `"Objection, hearsay."` | Civil Evidence (Scotland) Act 1988, s. 2 - hearsay is generally admissible in civil proceedings (subject to weight) |
| Privilege | `"Objection, legal professional privilege."` | Specify: legal advice privilege / litigation privilege / without prejudice |
| Beyond scope of commission | `"Objection, beyond the scope of the commission."` | Examination limited by the court's interlocutor |
| Oppression / harassment | `"Objection, oppressive."` | Question is designed to harass or embarrass; may seek court protection |

**Note on hearsay in Scottish civil proceedings:** Under the Civil Evidence (Scotland) Act 1988, s. 2(1), hearsay is generally admissible in civil actions. Weight is a matter for the court. Hearsay objections in civil proofs are rarely sustained; focus on weight at submission rather than exclusion.

**Note on criminal proceedings:** Criminal evidence is governed by the Criminal Procedure (Scotland) Act 1995 and common law. Hearsay rules are stricter. This skill primarily addresses civil procedure.

## Commission to Take Evidence

### Grounds for Commission (RCS 37A / OCR 43A)

The court may grant commission to take evidence where the witness:
- Is resident outside Scotland, Is unable or unwilling to attend proof due to age, illness, or infirmity, Is abroad and cannot be compelled to attend the foreign court, Evidence on commission is also used to preserve testimony of a witness at risk of death

### Conduct of Commission

- Commissioner may be the court itself, a solicitor, or an advocate, Examination-in-chief, cross-examination, re-examination proceed as at proof, The commissioner makes notes and reports; recording may be directed, Objections are noted but the witness answers; the court rules on competency and admissibility at proof (or if the witness is unavailable, the commissioner's ruling may stand)

### Objections on Commission

| Ground | Approach |
|--------|----------|
| Leading in chief | Object; witness answers; commissioner notes objection |
| Privilege | Object, instruct witness not to answer, state basis; apply to court if contested |
| Beyond scope | Object; refer to the court's interlocutor granting commission |
| Oppression | Object; if continuing, apply to the court for directions or terminate |

## Privilege in Scots Law

### Legal Professional Privilege (LPP)

| Branch | Scope |
|--------|-------|
| Legal advice privilege | Communications between client and solicitor/advocate for the purpose of giving or receiving legal advice |
| Litigation privilege | Communications between client, solicitor, and third parties for the dominant purpose of existing or contemplated litigation |
| Without prejudice privilege | Communications genuinely aimed at settling a dispute |

**Waiver:** Privilege is lost if the communication is disclosed to a third party not within the protected circle. Partial waiver (e.g., deploying part of the advice in pleadings) may waive privilege in the whole communication.

### Privilege Against Self-Incrimination

- Applies in civil proceedings where a person may incriminate themselves or expose themselves to a criminal penalty, Does not protect against civil liability alone, The Civil Evidence (Scotland) Act 1988, s. 4 provides limited protections

### Privilege Log

Not a formal requirement under Scots law, but good practice in commission or recovery of documents: list each document withheld, date, author, recipients, basis for privilege.

## Strategy

### Taking Evidence (Conducting Examination)

| Situation | Action |
|-----------|--------|
| Meritorious form objection | Rephrase for a cleaner record |
| Meritless objection | "I put it to you that..." - proceed (to the witness, not opposing counsel) |
| Coaching through objections | Note on record; raise with the court if persistent |
| Improper instruction not to answer | Apply to the court for a ruling on the objection; if commission, note for the court's later determination |

### Defending Evidence (Objecting)

- **Don't over-object** - signals importance to witness, appears obstructionist to the court
- **Do object** for leading (in chief), privilege, oppression, or genuine irrelevance
- **No speaking objections** - adding rationale or context is improper and may prejudice the court
- **Prepare witness** - objections do not signal how to answer; they answer from their own knowledge
- **In commission proceedings**, note the objection and allow the witness to answer; the court rules later

## Pre-Hearing Checklist (Objections)

```
- [ ] Identify form objection triggers (leading, compound, vague, assumes facts)
- [ ] Map all legally privileged communications at issue (advice privilege / litigation privilege)
- [ ] Identify other privileges (without prejudice, self-incrimination)
- [ ] Pull operative interlocutor; note specific scope limitations for commission
- [ ] Identify any confidentiality or protective orders
- [ ] Set escalation threshold for application to the court
- [ ] Draft minute or note if harassment anticipated
```

## Key Authorities

| Citation | Subject |
|----------|---------|
| Civil Evidence (Scotland) Act 1988, ss. 1 to 2 | Competency and admissibility; hearsay in civil proceedings |
| Criminal Procedure (Scotland) Act 1995, ss. 259 to 263 | Hearsay in criminal proceedings (stricter) |
| Rules of the Court of Session 1994 (RCS), Ch. 37A | Commission to take evidence (Outer House) |
| Ordinary Cause Rules (OCR), Ch. 43A, Sheriff Court Rules 1993 | Commission to take evidence (Sheriff Court) |
| RCS Ch. 36 / OCR Ch. 34 | Commission and diligence for recovery of documents |
| Act of Sederunt (Rules of the Court of Session 1994) 1994/1443 (as amended) | Current Court of Session rules |
| Law Reform (Miscellaneous Provisions) (Scotland) Act 1985, s. 33 | Evidence on commission |
| *Three Rivers District Council v Bank of England (No 6)* [2004] UKHL 48 | Legal advice privilege scope (persuasive, not binding, but influential in Scots law) |

---

## Scotland/UK Adaptation

This skill has been adapted from US FRCP deposition materials for use in **Scots civil procedure**.

**Critical structural differences:**

| US Federal Practice | Scots Civil Procedure |
|---------------------|----------------------|
| Depositions (FRCP 30) | No direct equivalent; evidence taken by commission (RCS 37A), affidavit, or at proof |
| Deposition objections (FRCP 30(c)(2)) | Objections at examination on commission or at proof |
| Discovery depositions (FRCP 26) | Commission and diligence for recovery of documents; precognition for interviews |
| 30(b)(6) corporate deposition | No equivalent; commission to take evidence of a party's representative is possible by court order |
| FRCP 32(d)(3) waiver | No codified waiver rule; failure to object may be relevant to competency |
| FRE 801/802 hearsay | Civil Evidence (Scotland) Act 1988, s. 2 - hearsay generally admissible in civil proceedings |
| Attorney-client privilege | Legal professional privilege (LPP) - broader common law protection |

**Terminology conversions:**
| US | Scotland/UK |
|----|------------|
| Deposition | Commission to take evidence / Precognition / Affidavit |
| Deponent | Witness / Party examined |
| Taking deposition | Examining on commission / Taking precognition |
| Plaintiff's/Defendant's counsel | Pursuer's / Defender's solicitor (or advocate/solicitor-advocate) |
| Federal district court | Court of Session (Outer House) or Sheriff Court |
| Protective order | Interlocutor restricting scope |
| Privilege log | Schedule of documents / list of withheld documents (no formal requirement) |
| Motion to terminate | Application or minute to the court |
| Contempt | Contempt of court (common law, statutory) |

**Key Scottish procedural notes:**

1. **No discovery depositions:** Scots civil procedure does not have a pre-trial deposition mechanism. Fact-gathering relies on precognition (informal, unsworn interviews) and commission and diligence for document recovery. Evidence is led at proof.

2. **Commission and diligence for documents** (RCS Ch. 36 / OCR Ch. 34) - the primary method for obtaining pre-proof information, plus specification of documents procedure (RCS 35 / OCR 28).

3. **Commission to take evidence** (RCS 37A / OCR 43A) - used for witnesses unable or unwilling to attend proof; procedural safeguards differ from US depositions.

4. **Hearsay in civil proceedings:** The Civil Evidence (Scotland) Act 1988 abolished most hearsay exclusionary rules in civil cases; hearsay goes to weight, not admissibility.

5. **Judges control the procedure:** In the Scottish system, the court (judge/sheriff) exercises far greater control over the examination of witnesses than in US adversarial practice. Objections should be measured.

6. **No punitive damages** for abusive conduct in evidence-taking; remedies are judicial expenses (costs orders) or contempt.

7. **Legal professional privilege** is a fundamental right at common law, recognised as such, stronger protection than US attorney-client privilege in some respects (no 'crime-fraud' exception at the same level of codification).

8. **[VERIFY]** Applicable Act of Sederunt and rule numbers before reliance, rules are periodically updated by the Scottish Civil Justice Council.

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
