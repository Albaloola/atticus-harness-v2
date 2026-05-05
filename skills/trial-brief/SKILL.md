---
name: trial-brief
language: en
description: Drafts persuasive pre-trial briefs for commercial litigation in the Scottish courts. Triggers when the user needs a pre-trial brief (Note of Argument) to frame the case theory, secure favourable rulings, or establish evidentiary groundwork. Use during the pre-proof phase after procedural motions are resolved. [Atticus UK/Scots refined]
tags:
- SCOTS, brief, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Pre-Trial Brief / Note of Argument (Scots Law)

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

Produces the pre-proof brief or Note of Argument, often the court's first substantive engagement with the case and the primary vehicle for presenting a cohesive narrative before proof. Adapted for the Scottish civil courts (Sheriff Court, Court of Session, UK Supreme Court on appeal).

## Quick Start

Gather before drafting:

1. **Pleadings** - initial writ / summons, defences, counterclaims, adjustments, amendments, record (closed record in Court of Session or Sheriff Court)
2. **Commission and diligence record** - commission evidence, interrogatories, documents recovered, expert reports
3. **Prior rulings** - summary decree orders, procedural rulings, notes from preliminary hearings / procedural call
4. **Key exhibits** - documents, communications, photographs, business records supporting the theory
5. **Court rules** - Ordinary Cause Rules (OCR), Sheriff Court, or Court of Session Rules (RCS); formatting, length limits, citation practice (OSCOLA / Scottish citation), procedural deadlines, sheriff / judge preferences
6. **Remaining issues** - what survived summary decree and is left for proof

## Document Structure

### 1. Header and Preliminaries

- Full caption matching court records (court, case number, sheriffdom / division, sheriff / judge)
- Parties identified as **Pursuer** / **Defender** (or Third Party, Minuter, Claimant)
- Table of Contents with argumentative headings (advocacy tool, not neutral labels)
- Table of Authorities (UK statutes → Scottish statutory instruments → cases in hierarchy: Supreme Court → Inner House → Outer House → Sheriff Appeal Court → Sheriff Court → other persuasive)
- Procedural history from raising the action to current posture

### 2. Introduction and Theme

Open with:
- What this case is fundamentally about, not just legal labels, Party relationship, what went wrong, the harm or defence
- **Central theme** as narrative framework:
  - Good: "The defender's calculated abandonment of obligations after securing the bargain's benefits"
  - Bad: "Breach of contract"
- Roadmap of Note organisation

### 3. Statement of Facts

- Chronological, thematic, or hybrid narrative, Every assertion cited to record (commission page, exhibit number, production label)
- Quote favourable testimony and contemporaneous documents
- **Address unfavourable facts directly** - frame in context, never hide, Use subheadings for digestibility

### 4. Issues Presented

- Frame as precise questions suggesting favourable answers:
  - Good: "Whether the defender's failure to deliver conforming goods within the contractual timeframe, despite repeated demands and opportunities to purge default, constitutes material breach"
  - Bad: "Whether defender is liable for breach of contract"
- Sequence: preliminary pleas → merits issues, Each issue maps to an Argument heading

### 5. Legal Argument

Per issue, use headings stating conclusions:

1. **Governing standard** - controlling authority with citation
2. **Elements/factors** - parentheticals showing relevance
3. **Application** - connect evidence to legal requirements with record cites
4. **Analogical reasoning** - compare to favourable precedent
5. **Distinguish adverse authority** - address unfavourable cases directly
6. **Pre-emptive rebuttal** - "Counsel for the defender may argue… However…"
7. **Policy** - only where it supplements doctrinal analysis

Authority priority: UK Supreme Court → Inner House (First or Second Division) → Outer House → Sheriff Appeal Court → Sheriff Court (within same sheriffdom) → other Scottish courts → English / other UK persuasive cases (clearly identify as persuasive only).

### 6. Evidentiary Issues / Preliminary Pleas

**To admit / support:**
- Authentication foundation per Civil Evidence (Scotland) Act 1988
- Hearsay: Civil Evidence (Scotland) Act 1988, s 2 (civil hearsay generally admissible with notice)
- Expert evidence admissibility under common law (no Daubert in Scotland)

**To exclude or challenge:**
- Relevance deficiency (Scots evidence law, evidence must be relevant to facts in issue)
- Hearsay objection where Civil Evidence Act notice not given, Prejudice outweighing probative value (Scots fairness test)
- Character evidence limits (Scots common law restrictions)
- Expert methodology challenges (no Daubert/Frye; admissibility under common law)
- Confidentiality / privilege (legal professional privilege; without prejudice; privilege against self-incrimination)

Note: The Civil Evidence (Scotland) Act 1988 is the primary statute. FRE 401 to 404 do not apply. The common law of evidence governs matters not covered by statute. [VERIFY current admissibility rules for specific evidence types]

### 7. Relief Requested

- Specific relief (decree for payment of damages, interdict, specific implement, declarator, reduction)
- Pre-proof rulings requested (preliminary pleas, scope limitations, commission evidence)
- Expenses (costs in Scottish courts: expenses follow the event; specify certified for counsel, measurement of expenses)
- Interest (judicial interest under the Courts Reform (Scotland) Act 2014 (ss 9 to 14) or common law; Judicial Factors Acts)
- Every item linked to arguments in the Note

### 8. Signature and Certificates

- Solicitor / advocate signature with firm/stable details and Practice Number, Word count certification if required by court rules, Certificate of service / intimation

## Pitfalls and Checks

- **Tone**: Write for the sheriff / judge, firm and professional, not rhetorical or arrogant
- **Consistency**: Facts, issues, and arguments must align throughout
- **Citations**: Verify every citation for accuracy and current validity (use Scottish Current Law or Westlaw UK)
- **Local compliance**: Margins, font, spacing, page/word limits per OCR / RCS
- **IRAC**: Use for complex multi-step analyses (adapted to Scottish syllogistic reasoning)
- **Theme coherence**: The central narrative must thread through every section
- **Citation style**: Use OSCOLA with Scottish adaptations, not Bluebook
- **Terminology**: Use pursuer/defender, not plaintiff/defendant; proof, not trial; decree, not judgment (in Sheriff Court); interlocutor, not order (in Court of Session)

## Scotland/UK Adaptation

### Key Adaptations, FRE (Federal Rules of Evidence) replaced with Civil Evidence (Scotland) Act 1988 and Scots common law of evidence, Daubert/Frye admissibility tests replaced with Scots common law rules on expert evidence (no Daubert in Scotland)
- FRE 401/402 (relevance) replaced with Scots evidence law relevance principles, FRE 403 (prejudice vs probative value) replaced with Scots fairness test at common law, FRE 404 (character evidence) replaced with Scots character evidence common law restrictions, Binding jurisdiction hierarchy changed to: UK Supreme Court → Inner House → Outer House → Sheriff Appeal Court → Sheriff Court, Bluebook citation replaced with OSCOLA and Scottish citation practice
- "Trial" replaced with "Proof"; "Plaintiff/Defendant" replaced with "Pursuer/Defender"
- "Motion" retained (same term but different rules: enrolled motions in Scottish courts)
- "Complaint" replaced with "Initial Writ" (Sheriff Court) or "Summons" (Court of Session)
- "Discovery" replaced with "Commission and diligence" / "diligence for recovery of documents"
- "Summary Judgment" replaced with "Summary Decree" (Chap 19 OCR / Chap 21 RCS)
- "Injunction" replaced with "Interdict"
- Expert evidence admissibility governed by common law, not Daubert/Frye
- "Judgment" replaced with "Decree" (Sheriff Court) or "Interlocutor" (Court of Session)
- "Attorney's fees/costs" replaced with "Expenses" (expenses follow the event in Scots civil litigation)
- US federal/state court system replaced with Scottish courts structure

### [SCOTS] Notes, Sheriff Court proof: Simple Procedure (≤£5,000 pro se/non-lawyer-friendly), Ordinary Cause (>£5,000)
- Court of Session: Outer House first instance; Inner House (First/Second Division) appeals; reclaiming motions (appeals)
- UK Supreme Court hears Scottish civil appeals only on devolution issues or from Inner House, Scottish civil procedure does not have a strict motion in limine practice; preliminary pleas (pleas to the relevancy, jurisdiction, etc.) are lodged with defences, Hearsay is generally admissible in civil proceedings under Civil Evidence (Scotland) Act 1988 s 2, with notice requirements, Expenses follow the event; judicial discretion to modify; certified for counsel may increase recoverable expenses, Judicial interest: Courts Reform (Scotland) Act 2014 ss 9 to 14; Judicial Factors Acts; interest runs from date of decree, No punitive damages in Scots law; aggravated damages are available in delict actions but are compensatory, not punitive, No class actions; multi-party action (group proceedings) available under Rules of Court 26A (Court of Session)
- Legal professional privilege is recognised; advice privilege and litigation privilege are distinct
- "Without prejudice" privilege is recognised for settlement communications

### [VERIFY] Items Before Use
- [VERIFY] Current monetary limits for Sheriff Court / Court of Session jurisdiction (subject to periodic change)
- [VERIFY] Applicable procedural rules: Ordinary Cause Rules (OCR) or Simple Procedure Rules, depends on court and value
- [VERIFY] Whether the case involves a devolution issue (UK Supreme Court jurisdiction)
- [VERIFY] Current citation practice, check the sheriff / judge's stated preferences
- [VERIFY] Whether any recent Scottish statutory instruments have amended relevant procedural rules
- [VERIFY] Expert evidence admissibility, confirm admissibility under common law for the specific expert field
- [VERIFY] Whether the Evidence (Scotland) Act 2020 or any later amendments affect the specific evidentiary question
- [VERIFY] Whether judicial interest rates have been updated by Act of Sederunt

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
