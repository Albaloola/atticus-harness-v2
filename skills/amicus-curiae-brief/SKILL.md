---
name: amicus-curiae-brief
language: en
description: Drafts filing-ready U.S. amicus curiae briefs with rule-anchored compliance, additive thesis selection, record-safe fact handling, and verified authority control. Trigger when asked to draft an amicus or friend-of-the-court brief, prepare FRAP 29/32 or Supreme Court Rule 37 amicus filings, draft consent/leave or disclosure language, or handle amicus procedural requirements at any stage. [Atticus UK/Scots refined]
tags:
- brief, drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Amicus Curiae Brief

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

Produces a procedurally compliant, substantively additive amicus brief. The amicus must deliver a perspective the parties cannot, restating party arguments risks striking, sanctions, or credibility loss.

## Quick Start

1. Gather intake (forum, stage, party briefs, amicus profile, disclosure facts)
2. Build compliance map from governing rules
3. Select an additive thesis that fills a gap in party arguments
4. Draft brief with record-safe fact handling
5. Verify all authorities and run quality audit

## Intake (Mandatory)

Collect before drafting (skip only if user says "use defaults"):

- **Forum/stage** - court, caption, docket number, cert vs. merits, panel or en banc
- **Deadlines** - docket schedule, amicus-specific orders
- **Party briefs** - at minimum the supported party's principal brief
- **Record anchors** - record cites used by parties for adjudicative facts
- **Amicus profile** - entity, mission, expertise, relationship to parties
- **Position** - supports petitioner/respondent/neither; requested disposition
- **Consent/leave** - consent status, whether motion for leave is needed
- **Disclosure facts** - authorship and funding (Rule 29(a)(4)(E) / Rule 37.6)
- **Formatting** - word/page limits, font, cover color, copy counts
- **Sources** - primary sources for legislative facts or empirical claims

**Defaults if unspecified:** federal circuit FRAP 29; standard amicus word limits; hybrid expertise/systemic-consequences thesis.

## Step 1: Compliance Map

| Field | Details |
|---|---|
| Rule Set | FRAP 29/32, Supreme Court Rule 37, or state rule |
| Deadline | Date/time and trigger brief |
| Word/Page Limit | Rule section and numeric limit |
| Required Sections | Interest, disclosures, summary, argument, conclusion |
| Certificates | Compliance, service, corporate disclosure if required |
| Filing Format | ECF/PDF, paper copies, cover color `[VERIFY]` |
| Local Deviations | Circuit/state additions |
| Signature | Admitted counsel; Supreme Court Bar if applicable |

## Step 2: Select Additive Thesis

Extract party argument chain; identify the gap. Choose one primary thesis:

- **Expertise translation** - technical/industry knowledge parties lack
- **Systemic consequences** - how ruling affects non-parties and broader systems
- **Doctrinal harmonization** - fit with related precedent or statutory schemes
- **Historical/structural framing** - legislative history, original understanding, institutional design

State thesis in one sentence for the Summary of Argument.

### Record-Safety Rules

| Fact Type | Use | Support Required |
|---|---|---|
| Adjudicative | Only as in record | Record cite from briefs/record |
| Legislative | Context only | Primary sources, stable cites |
| Predictive | Cautious language | Empirical or governmental sources |

## Step 3: Draft Brief

Structure:

1. Cover Page
2. Table of Contents / Table of Authorities
3. Disclosure Statement (FRAP 29(a)(4)(E) or Rule 37.6)
4. Statement of Interest of Amicus Curiae
5. Summary of Argument
6. Argument, conclusion-style headings; each section ties to verified source or record cite; address counterarguments; translate technical content for judges
7. Conclusion
8. Certificate of Compliance / Certificate of Service / Signature Block

Use bracketed placeholders (`[VERIFY]`, `[X words]`, `[date]`) for any unconfirmed detail.

### Disclosure and Certificates (Verbatim Required)

- **Disclosure statement** (FRAP 29(a)(4)(E), Supreme Court Rule 37.6, or forum equivalent): copy current rule language verbatim after verification; do not paraphrase required rule text.
- **Certificate of Compliance**: include rule citation, exact word count, statement of typeface/style compliance if required, signer name, date, and signature line. Use verbatim rule language where mandated.
- **Certificate of Service**: include rule citation, service method(s), service date, recipient list (or filing-system service statement if permitted), declarant name, date, and signature line. Use verbatim rule language where mandated.

```text
Certificate of Compliance
Rule: [FRAP 32(g)(1) / controlling forum rule]
Word count: [X words]
Required rule text: [PASTE VERBATIM TEXT REQUIRED BY CONTROLLING RULE]
Date: [YYYY-MM-DD]
Signature: [Name /s/]

Certificate of Service
Rule: [FRAP 25(d) / FRAP 25(c) / controlling forum rule]
Service method: [ECF / email / mail / personal service]
Service date: [YYYY-MM-DD]
Served on: [Names or category of recipients as required]
Required rule text: [PASTE VERBATIM TEXT REQUIRED BY CONTROLLING RULE]
Date: [YYYY-MM-DD]
Signature: [Name /s/]
```

## Step 4: Deliverables

Prefix every output with:

1. **Assumptions** - forum, posture, consent status, thesis, governing rules
2. **Open Items** - missing briefs, unconfirmed rules, outstanding disclosure facts

## Post-Draft Check (Mandatory)

Ask after delivering initial draft:

1. Does the thesis add a perspective the party briefs do not?
2. Are disclosure facts (authorship, funding) confirmed?
3. Should additional authorities or empirical sources be added?
4. Is the tone correct for this court and amicus role?

## Quality Audit

Verify before finalizing:

- [ ] Rule text confirmed against current forum rules
- [ ] Consent/leave requirements satisfied
- [ ] Disclosure statement matches rule text and confirmed facts
- [ ] Thesis is additive, no duplication of party arguments
- [ ] All adjudicative facts tied to record cites
- [ ] All legislative facts sourced and context-framed
- [ ] Unverified authorities flagged `[VERIFY]`
- [ ] TOC/TOA accurate; word count within limits
- [ ] Assumptions and open items listed prominently

## Critical Rules

- Never restate party arguments, thesis must be additive, Never introduce adjudicative facts outside the record, Never fabricate citations, rule text, or empirical data, flag `[VERIFY]` if unconfirmed, Do not assume FRAP applies, confirm state appellate rules when applicable, Supreme Court briefs: Rule 37.6 disclosures + Supreme Court Bar signature `[VERIFY]`
- State rules (CA 8.200(c), NY 500.23) must be independently confirmed `[VERIFY]`
- All output requires attorney review before filing

## Scotland/UK Adaptation

The "amicus curiae" (friend of the court) concept exists in Scotland and the wider UK but is much less formalised and rarely used in civil proceedings compared to the US. This skill requires significant adaptation for Scottish practice.

### Scottish / UK Position on Amicus Briefs

| US Concept | Scotland / UK Equivalent |
|---|---|
| FRAP 29 (federal amicus rules) | **No equivalent formal rule** in the Court of Session or Sheriff Court. The court has inherent power to appoint or permit an amicus in exceptional cases. |
| Supreme Court of the US Rule 37 | **UK Supreme Court Rule 35** - the UK Supreme Court may permit written submissions by non-parties (including amicus briefs). Practice Direction 8 provides guidance. |
| Motion for leave to file amicus | UKSC: apply in writing, showing why submissions would be of assistance. No formal consent/leave distinction as in FRAP. |
| Disclosure of authorship/funding (Rule 37.6) | UKSC Practice Direction 8 requires the nature of the intervener's/amicus's interest and funding source to be stated. |
| Binding nature of party arguments | No risk of "striking" amicus briefs in Scotland; the court simply gives submissions such weight as it sees fit. |

### Key Scottish / UK Forums

| Forum | Amicus Procedure |
|---|---|
| **UK Supreme Court** | Rule 35 and Practice Direction 8: any non-party may apply to intervene or make written submissions. The Court has discretion. Oral submissions require permission. |
| **Court of Session (Inner House)** | Inherent power to permit submissions from non-parties. No formal rule. Rare, typically used in public law matters (e.g., child welfare, extradition) or cases raising significant constitutional points. The court may ask the **Advocate General for Scotland** or **Lord Advocate** to appear as amicus. |
| **Court of Session (Outer House)** | Extremely rare. Court may seek submissions from the Lord Advocate on devolution issues. |
| **Sheriff Court** | Virtually unknown in ordinary civil litigation. Crown Office (COPFS) may appear as amicus in criminal matters. |

### Drafting Adjustments for Scotland/UK

1. **Format**: No prescribed cover colours, word limits, or certificate requirements. Use standard court format per the Rules of the Court of Session (RCS) or applicable rules.
2. **Title**: "Written Submissions on behalf of [Intervener/Amicus]" rather than a formal "brief."
3. **Content focus**: Scottish courts are receptive to empirical, comparative, and policy-based submissions, particularly in public law and human rights cases.
4. **Certificate of service**: No formal certificate required; standard court practice for lodging written submissions applies.
5. **Disclosure**: State funding source and the amicus's interest. No equivalent of FRAP 29(a)(4)(E) - but best practice is to disclose fully.

### Key Practitioner Differences
1. The amicus curiae role is **not well-established** in Scottish civil litigation. The court's inherent power is exercised sparingly. Consider whether formal **intervention** or **representation by the Advocate General/Lord Advocate** is more appropriate.
2. For UK Supreme Court cases originating from Scotland, Rule 35 provides a clear path for amicus submissions and is the most likely practical use case.
3. Scottish solicitors should note that the **Lord Advocate** appears as amicus to the Court of Session on devolution and public interest matters, this is the closest institutional parallel to a regulary-appearing amicus.
4. No formal word count or cover colour rules apply in Scottish courts; content substance and relevance are paramount.
5. For criminal matters, different rules apply, the High Court of Justiciary may exceptionally permit amicus submissions, and the Crown Office (COPFS) may play an amicus-like role.

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
