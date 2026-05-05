---
name: deposition-impeachment-builder
language: en
description: Atticus UK/Scots legal skill for deposition-impeachment-builder. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cross-Examination Impeachment Builder (Scots Civil Proof)

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

## Why This Skill Exists

Impeachment at proof (the Scottish civil trial) is among the highest-skill questioning techniques, and the most commonly botched. Advocates either confront too early (before locking the witness in), skip the credit phase (weakening the contradiction's impact), or ask open-ended follow-ups after confrontation (giving the witness an escape). A poorly executed impeachment is worse than none at all, because it educates the witness and allows them to rehabilitate in re-examination.

This skill produces a controlled Commit to Credit-Confront script, a deployment memo with timing recommendations, and a checklist of missing information, grounded in the Civil Evidence (Scotland) Act 1988, ss. 2 to 3; the common law on prior inconsistent statements; and the rule in *Browne v Dunn* (6 R 67 (HL)) as received in Scots practice.

**Note:** If you are preparing for a criminal trial, the Criminal Procedure (Scotland) Act 1995 and the stricter common law hearsay rules apply. This skill primarily addresses civil proof practice.

---

## Checkpoint A: Pre-Draft Intake (Mandatory)

Ask every time unless the user says "use defaults" or "just draft." Gather:

1. **Current testimony** - verbatim transcript excerpt (Q&A with page/line) or exact anticipated answer from the witness's evidence in chief (or precognition); paraphrases require confirmation of precise phrasing
2. **Prior statement** - full text (not snippet), statement type, date, author/speaker, recipients, and precise reference (page:line for sworn evidence; paragraph/section for documents)
3. **Witness's connection** - how the witness authored, signed, verified, sent, or adopted the prior statement
4. **Case context** - forum (Court of Session / Sheriff Court), posture (proof / debate / summary decree), claims/defences, witness role (party, expert, percipient)
5. **Strategic intent** - impeachment only vs. substantive admission; jury trial (rare in civil) or proof before sheriff/judge alone

**If the user doesn't respond**, apply and clearly label these defaults: Court of Session; proof before judge alone; impeachment-only use; conservative confrontation variant.

> **If any required input is missing, pause and ask targeted follow-up questions. Never fabricate quotes, dates, page numbers, or document attributes.**

---

## Step 1: Assess Materiality

Before drafting, tie the contradiction to a claim element, defence element, damages component, or credibility theme in one sentence. If you cannot, flag the impeachment as a candidate for later use rather than cross-examination at proof.

---

## Step 2: Draft the Commit Phase

**Goal:** Eliminate every escape hatch before the witness knows a contradiction is coming.

Rules:
- Use the witness's own vocabulary from their evidence-in-chief, Single factual proposition per question, No compound questions, Define ambiguous terms neutrally before committing, Confirm certainty; fork hedged answers into a second committed proposition

**Template pattern:**
```
"Just so I understand: you [core proposition], correct?"
"You're not saying [narrowing qualifier]-you're saying [absolute proposition], right?"
"You're certain about that? No room for doubt?"
"And [close remaining escape route], correct?"
```

---

## Step 3: Draft the Credit Phase

Establish reliability and adoption of the prior statement. Tailor foundation to prior statement type:

| Statement Type | Credit Focus | Key Questions |
|---|---|---|
| **Prior sworn evidence (commission or affidavit)** | Oath/affirmation, legal adviser present, opportunity to review | "You were on oath [or affirmed]?" / "Your solicitor was present?" / "You reviewed and did not alter this evidence?" |
| **Signed precognition or witness statement** | Signature, review, confirmation of accuracy | "You read this before signing?" / "You confirmed the contents were accurate?" |
| **Email / letter authored by witness** | Account ownership, contemporaneity, recipients, intention to communicate | "That is your email address?" / "You sent this at the time?" / "You intended [recipient] to act on it?" |
| **Document drafted by others, adopted by witness** | Review, approval, authority | "You reviewed this before it was sent?" / "You authorised it?" |
| **Formal response / letter before action** | Witness's role in preparation, verification, accuracy | "Did you review the draft?" / "You confirmed its accuracy?" |
| **Minutes / board papers** | Attendance, approval, meeting records | "You were present?" / "The minutes record [fact] - you did not object?" |

**Credit containment:** If witness tries to devalue the prior statement mid-Credit ("I was confused at the time"):
> "You wouldn't have signed something that wasn't true just because you were [tired/confused], would you?"

---

## Step 4: Draft the Confront Phase

Disciplined rhythm, do not deviate:

1. **Re-commit** - immediately restate current testimony
2. **Mark and orient** - produce the document or refer to the transcript (number the production)
3. **Read verbatim** - quote exact language from the prior statement
4. **Obtain admission** - two variants:

| Variant | Language | Use When |
|---|---|---|
| Conservative | "So your evidence today is different from what you said [on oath / in your letter] on [DATE], correct?" | Preserving the record; avoiding overreach |
| Aggressive | "Which is correct, what you said in [document] on [DATE], or what you say today?" | Witness is a party; full contradiction is binary |

5. **Stop.** Do not ask "why," "how," or "could it be explained." No open-ended questions after confrontation.

**Containment follow-ups** (if witness evades):
- "What part is inaccurate?"
- "When did you first realise it was wrong?"
- "Who told you that?" / "What document did you review?"
- "Where is that reflected in any writing?"

---

## Step 5: Produce the Deployment Memo

Include:
- **What this impeachment accomplishes** (element/credibility theme it addresses)
- **Timing recommendation** - impeach now vs. bank for closing submission
- **Opposing responses to anticipate** and containment strategy
- **Substantive use assessment** - flag under s. 2 Civil Evidence (Scotland) Act 1988: the prior statement may be admissible as evidence of the facts stated (not just credibility)

**Timing decision table:**

| Objective | Timing | Rationale |
|---|---|---|
| Expose inconsistency early | Immediate cross | Forces witness to explain; surfaces further evidence |
| Closing submission impact | Bank for address | Contrast evidence-in-chief and cross starkly |
| Settlement signal | Mid-cross | Demonstrates narrative instability |
| Rapid credibility destruction | Series at end of cross | Effective for witnesses with multiple contradictions |

---

## Step 6: Produce Missing Information Checklist

List all `[placeholder to complete from evidence/instructionsS]` requiring completion before use:
- `[PAGE:LINE]` - pin-cite for prior statement or transcript
- `[PRODUCTION NO.]` - production number at proof
- `[DATE]` - any unconfirmed date, Any quotation labelled as a paraphrase requiring verbatim verification

---

## Checkpoint B: Post-Draft Alignment (Mandatory)

After delivering the initial impeachment package, ask:

1. Is the contradiction as framed accurate, does the current testimony and prior statement match what you have?
2. Should the confrontation use the conservative or aggressive variant?
3. Are there additional prior statements that could stack with this impeachment?
4. Should I draft the full sequence for proof cross-examination or adapt for precognition?

If the user doesn't answer, recommend the conservative variant and proceed if authorised.

---

## Quality Audit

Before finalising, verify:

- Materiality test completed, contradiction tied to a claim element, defence, or credibility theme, Commit phase uses single-proposition questions with no compound constructions, Credit phase tailored to the specific prior statement type, Confront phase uses verbatim quotation (or labelled placeholder)
- No open-ended questions after confrontation, Deployment memo includes timing recommendation, All placeholders clearly marked for completion, Evidentiary basis identified (Civil Evidence (Scotland) Act 1988; common law)
- No fabricated quotes, page numbers, dates, or document attributes
- *Browne v Dunn* compliance assessed, witness must have been given fair opportunity to address the inconsistency

---

## Guidelines

**Evidentiary basis, Scotland (civil proof):**
- **Civil Evidence (Scotland) Act 1988, s. 2(1):** Hearsay is generally admissible in civil proceedings. A prior inconsistent statement can be admitted as evidence of the facts stated, not merely to attack credibility.
- **Civil Evidence (Scotland) Act 1988, s. 3:** A witness's prior statement may be used to rebut an allegation of fabrication or to refresh memory.
- **Common law, prior inconsistent statements:** A witness may be cross-examined on a prior inconsistent statement. The impeaching party must put the statement to the witness and give them an opportunity to explain.
- **The rule in *Browne v Dunn* (1894) 6 R 67 (HL):** A cross-examiner must 'put the case' to the witness, confront them explicitly with the contradiction before relying on it in closing submissions.

**No strict requirement to show the document first** - unlike FRE 613(a), Scots practice allows cross-examination on a prior statement without first showing the document, but best practice is to have the production ready to mark.

**Completion (Scottish equivalent of FRE 106):** The court may require the full context of any excerpted prior statement to be read; review full text before use.

**Jury trials (civil) - rare; rules differ:**
- Personal injury actions in the Court of Session occasionally go to jury (*s. 9 Court of Session Act 1988*)
- Impeachment technique is similar, but the court (judge) exercises tighter control over evidence at jury trial, See also: Act of Sederunt (Civil Jury Trials) 2019

**Scotland-specific rules:**

| Topic | Rule |
|-------|------|
| Prior sworn statement, civil | Admissible as evidence of facts (s. 2 Civil Evidence (Scotland) Act 1988) |
| *Browne v Dunn* - scope | Must put inconsistent case to witness in cross, applies strictly in Scotland |
| Hearsay, civil | Admissible under s. 2 Civil Evidence (Scotland) Act 1988 (goes to weight, not admissibility) |
| Hearsay, criminal | Stricter, Criminal Procedure (Scotland) Act 1995, ss. 259 to 263 |
| Production of documents | Documents must be numbered as productions and lodged in process before proof |
| Witness statements | Precognition is not disclosed; sworn affidavits are lodged in certain procedures |

**Professional responsibility (Scotland):**
- Law Society of Scotland Practice Rules 2011 - Rule B1: Conduct of Professional Practice, Rule B1.2: Solicitors must not mislead the court, do not present an excerpt out of context that distorts the meaning, Rule B1.6: Solicitors must act with integrity and honesty, The Faculty of Advocates' Code of Conduct, advocates must not knowingly mislead the court, Unlike US ABA Model Rules, Scottish solicitors are officers of the court with a positive duty to ensure that evidence is not misleading

**Anti-hallucination (non-negotiable):**
- Never invent page/line numbers, quotation marks around fabricated text, dates, or document attributes, Every proposed quotation without a verbatim source must be labelled `[placeholder to complete from evidence/instructions, VERIFY BEFORE USE]`
- Every statutory citation or case reference must be verified or labelled `[VERIFY]`

**Solicitor/advocate review required before use in any proceeding. This skill is work product, not legal advice.**

---

## Scotland/UK Adaptation

This skill has been adapted from US deposition impeachment materials (FRE 613) for use in **Scots civil procedure**.

**Critical structural differences:**

| US Federal Practice | Scotland |
|---------------------|----------|
| Deposition (FRE 613 context) | Cross-examination at proof in Court of Session or Sheriff Court |
| FRE 613(a) - no need to show document first | Similar, may cross on prior statement without production, but production should be available |
| FRE 613(b) - opportunity to explain or deny | *Browne v Dunn* rule, must 'put the case' to the witness in cross |
| FRE 801(d)(1)(A) - prior inconsistent statement as non-hearsay | Civil Evidence (Scotland) Act 1988, s. 2 - hearsay admissible; prior statement = evidence of facts |
| FRE 106 - rule of completeness | No codified equivalent; court discretion to require full context |
| FRE 607 - impeachment by any party | Same, any party may impeach |
| FRE 611(b) - scope of cross | Same, cross limited to matters in chief and credibility |
| Deposition transcript (formal record) | Shorthand writer's notes / audio recording at proof |

**Terminology conversions:**
| US | Scotland/UK |
|----|------------|
| Plaintiff's / Defendant's attorney | Pursuer's / Defender's solicitor or advocate |
| Deposition | Cross-examination at proof / Evidence on commission |
| Deponent | Witness |
| Trial | Proof (civil) |
| Summary judgment | Summary decree |
| FRE | Civil Evidence (Scotland) Act 1988 / common law |
| FRCP | Rules of the Court of Session / Act of Sederunt |
| Impeachment | Challenge to credibility / Prior inconsistent statement |
| Bates number | Numbered production |
| Exhibit | Production |
| Errata sheet | No direct equivalent; transcript corrections at proof are by application |
| ABA Model Rules | Law Society of Scotland Practice Rules 2011 / Faculty of Advocates Code of Conduct |

**Key Scottish procedural notes:**

1. **No depositions for impeachment:** Impeachment by prior inconsistent statement occurs at proof (trial) during cross-examination, not at a deposition

2. **Prior statements can be substantive evidence:** Under s. 2 Civil Evidence (Scotland) Act 1988, the prior inconsistent statement is admissible as evidence of the facts stated, not merely to attack credibility. This is a significant difference from US federal practice

3. ***Browne v Dunn* applies strictly:** The Scottish courts apply the rule in *Browne v Dunn* rigorously, the witness must be confronted with the inconsistency in cross-examination before the advocate can rely on it in closing submissions (*cf. Browne v Dunn* (1894) 6 R 67)

4. **No 'speaking objections' rule (codified):** Unlike FRCP 30(c)(2), there is no codified prohibition on speaking objections in Scots practice; however, improper coaching by objecting counsel is a breach of professional conduct

5. **Production numbers:** All documents at proof must be lodged as productions and assigned a number; the impeaching document must be a lodged production or otherwise before the court

6. **No errata corrections:** Unlike US deposition practice, there is no formal errata process for correcting transcript errors, corrections are made by returning to the witness in re-examination or by application

7. **Criminal practice differs:** In criminal proceedings, prior inconsistent statements are governed by the Criminal Procedure (Scotland) Act 1995, ss. 259 to 263, with stricter hearsay rules, always verify the applicable procedural regime

8. **Bench trial (most civil proofs):** Most Scottish civil proofs are heard by a judge or sheriff alone (no jury). Credibility assessment is solely for the judge/sheriff; technique should be measured, as the decision-maker is experienced

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
