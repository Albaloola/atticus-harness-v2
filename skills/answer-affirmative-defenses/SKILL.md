---
name: answer-affirmative-defenses
language: en
description: Drafts U.S. civil litigation Answers with paragraph-by-paragraph admissions/denials, affirmative defenses, and counterclaim triage. Trigger when user needs a responsive pleading to a complaint, mentions affirmative defenses, admit/deny responses, Rule 8, or insufficient knowledge responses. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Answer and Affirmative Defenses

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

Drafts a rule-compliant Answer with strategic admissions/denials and preserved affirmative defenses to avoid waiver.

## Prerequisites

Collect before drafting:

1. **Complaint** - filed version with numbered paragraphs and caption
2. **Service data** - date, method, proof of service
3. **Client facts** - timeline, documents, communications, witnesses
4. **Governing instruments** - contracts, policies, statutes
5. **Jurisdiction rules** - local rules on format, verification, deadlines

## Workflow

### 1. Caption + Appearance

- Match court, parties, case number exactly from complaint.
- Note general vs special appearance (if contesting jurisdiction/venue).

### 2. Response Matrix

Build a response table before drafting the pleading body.

| ¶ | Allegation | Response | Qualification | Source |
|---|---|---|---|---|
| 1 | Party identity | Admit | Name/status only | Client docs |
| 2 | Jurisdiction | Deny | - | Investigate |
| 3 | Contract exists | Qualified | Admit execution; deny breach | Contract |

Response types: **Admit** · **Deny** · **Lack knowledge** (deny on that basis) · **Qualified admit/deny**

### 3. Paragraph-by-Paragraph Responses

Response templates:

- **Admit**: "Defendant admits the allegations in Paragraph __ of the Complaint."
- **Deny**: "Defendant denies the allegations in Paragraph __ of the Complaint."
- **Lack knowledge**: "Defendant lacks knowledge or information sufficient to form a belief as to the truth of the allegations in Paragraph __ and on that basis denies them."
- **Qualified**: "Defendant admits [specific fact] as alleged in Paragraph __, but denies the remaining allegations in that paragraph."

Rules: Address every paragraph. Separate factual admissions from legal conclusions. Do not overuse lack-knowledge where defendant should reasonably know.

### 4. Affirmative Defenses

Number each defense separately. Include brief factual grounding without overcommitting.

**Procedural**: lack of subject-matter jurisdiction, lack of personal jurisdiction, improper venue, insufficient service, failure to join indispensable party, lack of standing.

**Substantive**: failure to state a claim, statute of limitations, statute of frauds, waiver, estoppel, laches, release, accord and satisfaction, payment, arbitration/award, unclean hands, illegality, comparative/contributory negligence, failure to mitigate.

Template: "[Defense Name]. Plaintiff's claims are barred because [factual basis]. The allegations show [timing/conduct/term], and the claim fails as a matter of law."

End with reservation clause: "Defendant reserves the right to assert additional defenses as they become known through discovery or further investigation."

### 5. Counterclaim Triage

- Compulsory counterclaim from same transaction?
- Permissive counterclaim worth asserting now?
- Cross-claim vs co-defendant (indemnity/contribution)?
- Third-party claim to shift liability?

If included, structure as: parties/jurisdiction → numbered factual allegations → cause of action with elements → damages and relief.

### 6. Prayer for Relief

Minimum: dismissal with prejudice, judgment for defendant, costs, attorney fees (if contractual/statutory basis), pre/post-judgment interest, catch-all "other relief as just and proper." Add specific relief tied to defenses or counterclaims.

### 7. Signature + Service

Attorney signature block with bar number. Verification if jurisdiction requires. Certificate of service with method and date.

## Quality Checklist

- [ ] Every complaint paragraph addressed, no admissions by omission
- [ ] Defenses tailored to facts and jurisdiction
- [ ] Counterclaims labeled compulsory/permissive
- [ ] Caption matches complaint exactly
- [ ] Deadline confirmed and calendared
- [ ] No defenses asserted without plausible factual basis
- [ ] Jurisdiction-specific pleading standard noted (notice vs fact)

## Pitfalls

- **Omitted paragraphs** may be deemed admitted, address every one.
- **Bare legal conclusions** should be denied, not admitted.
- **One-word defenses** risk being stricken, always include factual grounding.
- **Timing defenses** (limitations, laches) - verify periods before filing; flag if uncertain.
- **Verified answers** - check if jurisdiction or claim type requires defendant verification.

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
