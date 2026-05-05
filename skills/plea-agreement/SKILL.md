---
name: plea-agreement
language: en
description: Drafts criminal defense plea agreements formalizing negotiated resolutions between defendant and prosecution. Covers charge specifications, factual basis, sentencing recommendations, rights waivers, cooperation terms, and breach provisions. Use when drafting plea deals, guilty plea agreements, no contest pleas, or cooperation agreements in criminal matters. [Atticus UK/Scots refined]
tags:
- agreement, drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Plea Agreement

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

Drafts an enforceable plea agreement formalizing the negotiated resolution of criminal charges between defendant and prosecution, compliant with Fed. R. Crim. P. 11 or state equivalents.

## Prerequisites

Gather before drafting:

- **Case info** - case number, court, presiding judge, full caption
- **Charge sheet** - all original charges with statute citations and max penalties
- **Negotiated terms** - plea charges, dismissed charges, sentencing concessions
- **Factual basis** - agreed facts establishing each element of plea offense(s)
- **Defendant info** - full legal name, aliases, DOB
- **Cooperation terms** (if any) - debriefing, testimony, ongoing obligations

## Quick Start

1. Collect all prerequisites above
2. Identify agreement type (Rule 11(c)(1)(A), (B), or (C); or state equivalent)
3. Draft sections in order below
4. Run through the pitfalls checklist before finalizing

## Document Sections

Draft these sections in order:

### 1. Parties & Jurisdiction

| Field | Content |
|-------|---------|
| Defendant | Full name, aliases/AKAs, DOB, case number |
| Prosecution | Office (USAO / DA), assigned prosecutor |
| Court | Name, district/division, presiding judge |
| Jurisdictional basis | Statutory authority |

### 2. Charges & Plea Specification

- Table **all original charges**: count number, statute, offense, max penalty, Table **plea charges**: counts defendant pleads to (guilty or nolo contendere)
- List **dismissed/not-pursued charges**
- If charge reduction: state both original and reduced charge explicitly, Include voluntariness statement

### 3. Factual Basis

Stipulated facts establishing every element of each plea offense. Must cover:

- Date, time, location of offense, Defendant's conduct constituting the crime, Victims, co-conspirators, relevant parties, Mental state / intent as required by statute, Aggravating or mitigating circumstances relevant to sentencing

Write so defendant can acknowledge as true. This stipulation binds defendant and may be used in subsequent proceedings.

### 4. Sentencing Recommendations

Identify the agreement type:

| Type | Effect |
|------|--------|
| Rule 11(c)(1)(A) | Charge dismissal / non-prosecution agreement |
| Rule 11(c)(1)(B) | Non-binding recommendation, court may reject |
| Rule 11(c)(1)(C) | Binding sentence, defendant may withdraw if court rejects |

For state cases, cite the equivalent rule.

Include as applicable: incarceration/probation recommendation, fines, restitution and payment schedule, supervised release conditions, forfeiture terms, guideline calculations, departure/variance positions, government sentencing posture, defendant's right to request different sentence.

### 5. Rights Waived & Retained

**Waived:**
- Jury trial and confrontation of witnesses, Privilege against self-incrimination, Compulsory process for defense witnesses, Appeal (specify scope: sentence, conviction, or both)
- Post-conviction relief (specify exceptions: ineffective assistance, prosecutorial misconduct)
- Speedy Trial Act rights

**Retained:**
- Challenge illegal sentence, Challenge voluntariness of plea, Any other negotiated retained rights

Include confirmation defendant discussed waivers with counsel.

### 6. Additional Terms

Address as applicable:

- Cooperation obligations (testimony, debriefings, law enforcement cooperation)
- Related civil/administrative proceeding agreements, Media contact restrictions, Breach provisions, consequences for each party's breach, Government's right to reinstate dismissed charges upon defendant's breach

### 7. Acknowledgments

Defendant affirms:

- Plea is voluntary, no force, threats, or undisclosed promises, Reviewed agreement with counsel; understands all terms, Satisfied with counsel's representation, Understands charges and potential penalties, Mentally competent; not under influence of substances, Agreement constitutes entire understanding (integration clause)

### 8. Signature Blocks

Include signature lines with date fields for:

- **Defendant** - full name
- **Defense counsel** - name, bar number, certification that agreement was explained and plea is voluntary and knowing
- **Prosecutor** - name, title, office
- **Judge** - if required by local rules

## Pitfalls & Checks

- [ ] Use plain language; retain terms of art only where legally necessary
- [ ] Number all paragraphs for cross-reference at plea colloquy
- [ ] Verify internal consistency, dismissed charges, retained rights, and breach provisions must align
- [ ] Confirm compliance with Fed. R. Crim. P. 11 (federal) or state equivalent plus local rules
- [ ] For state cases, adapt all Rule 11 references to applicable state rule
- [ ] Never include terms beyond what the parties actually negotiated
- [ ] Flag ambiguous sentencing terms, courts scrutinize vagueness at plea hearings
- [ ] For cooperation agreements, ensure defendant protections (use immunity, safe harbor provisions)

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
