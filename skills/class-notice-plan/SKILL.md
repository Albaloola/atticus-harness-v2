---
name: class-notice-plan
language: en
description: Drafts a group proceedings notice communication plan for Scotland/UK group litigation under the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018. Use after court permission for group proceedings or when seeking settlement approval. Trigger when user mentions group proceedings notice, notice plan, communication plan, claims administrator, or opt-in procedure. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, planning, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

[SCOTS] This skill has been adapted for Scotland/UK group proceedings practice. US class action terminology has been replaced with Scots equivalents. See "Scotland/UK Adaptation" at the end for key differences.

# Group Proceedings Notice Communication Plan (Scotland/UK)

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

Produces a court-ready plan for disseminating notice in group proceedings under the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 and associated court rules.

[SCOTS: Note] Scotland has no direct equivalent to US Rule 23 class actions. Instead, the Group Proceedings regime (2018 Act) uses an opt-in model, requires court permission at the outset, and applies only in the Court of Session (Outer House). There is no opt-out model, no CAFA equivalent, and the "best notice practicable" due process standard from US law (Mullane/Eisen) does not directly apply, the court directs the form and method of notice.

## Prerequisites

Collect before drafting:

- Court permission order for group proceedings (or proposed motion)
- Group definition and any sub-groups (verbatim from order)
- Claims, defences, and relief sought, Court-ordered deadlines (opt-in, objections, case management hearing, proof/settlement)
- Available group member data sources and quality assessment, Settlement terms affecting notice (if applicable)
- Proposed administrator or notice provider (if any)

## Quick Start

Generate each section below in order. Populate tables from user-supplied inputs. Mark unknowns with `[to be determined]`.

## Core Sections

### 1. Case Header

Table with: case name, court (Court of Session Outer House) and case number, Lord Ordinary, procedural posture, group proceedings permission order date, governing rules (Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018, ss. 18 to 24; RCS Chapter 47A), key deadlines.

### 2. Legal Standards

| Authority | Requirement |
|---|---|
| Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018, ss. 18 to 24 | Court-directed notice for group proceedings; opt-in only |
| Act of Sederunt (Rules of the Court of Session 1994) Chapter 47A | Procedure for group proceedings in Court of Session |
| [SCOTS: Note] Mullane v Central Hanover Bank (US) | Not Scottish law. No direct equivalent due process case law in Scotland for group proceedings. The court has discretion to direct appropriate notice. Flag this difference if a US practitioner expects Mullane/Eisen standards. |
| [SCOTS: Note] CAFA 28 U.S.C. § 1715 (US) | No equivalent in Scotland. Government notice requirements for class settlements do not apply. |

### 3. Group Definition and Identification

Table with: group definition (verbatim from court order), sub-groups (verbatim), estimated group size, geographic/temporal limits, data sources, data gaps and remediation plan.

[SCOTS: Note] Group proceedings in Scotland are **opt-in** only. Unlike US Rule 23(b)(3) opt-out classes, individuals must actively opt in to be bound by the proceedings. The notice must clearly communicate this and provide an opt-in mechanism. This is a fundamental structural difference.

### 4. Required Notice Content

Every notice should include (per 2018 Act and court direction):

- [ ] Nature of the proceedings and basis of claims
- [ ] Definition of the group
- [ ] Group claims and common issues (if ordered)
- [ ] Right to opt in and method for doing so
- [ ] Deadline for opting in
- [ ] Effect of opting in (being bound by judgment/settlement; liability for expenses)
- [ ] Effect of not opting in (not bound; individual proceedings remain possible)

### 5. Notice Form Specifications

- **Tone**: Neutral, informative
- **Readability**: Plain language; target accessible level for intended group
- **Languages**: Translations where material group segments are non-English speaking
- **Accessibility**: Comply with equality duties; mobile-responsive web

### 6. Delivery Methods

| Channel | When Used | Key Notes |
|---|---|---|
| Direct mail | Identifiable addresses | First-class; NCOA update if Scotland-based tracking available |
| Email | Reliable email addresses | SPF/DKIM compliance; bounce tracking |
| Publication | Non-identifiable members | Targeted print/digital; Scotland-specific publications |
| Digital ads | Broad or niche reach | Geo/demo targeting aligned with group |
| Group proceedings website | All cases | Notice, opt-in form, FAQs, key dates, solicitor contact |
| Toll-free line | All cases | Live + automated; multilingual if needed |

### 7. Data Hygiene

- [ ] Run address updates before initial mailing
- [ ] Track returns; pursue alternatives for undeliverables
- [ ] Opt-in registration audit trail
- [ ] Data protection (UK GDPR) compliance for all personal data processing

### 8. Timeline

Milestones: court approval of plan → data extraction → website/hotline live → mail/email launch → publication run → **opt-in deadline** → case management hearing → proof or settlement.

[SCOTS: Note] Timeline depends on court direction. Opt-in periods are typically 3 to 6 months but vary. Unlike US practice, there is no CAFA 90-day government notice period. Coordinate with the Lord Ordinary's case management directions.

### 9. Budget

Categories: administrator fees, data processing, printing/mail (using copies), publication (newspaper), website/hosting (service), hotline, translation, contingency (10-20% reserve). Include basis and estimate for each.

[SCOTS: Note] In Scottish group proceedings, the court may make directions on how expenses (costs) of notice are to be borne. Unlike US practice where class counsel typically advances notice costs, the Scottish court may order that expenses of intimation and notice form part of the expenses of the proceedings or be paid by a particular party. The budget must be ready for court scrutiny.

### 10. Court Approval Package

- [ ] Proposed notice plan
- [ ] Proposed notice forms
- [ ] Declaration from administrator or notice provider (if any)
- [ ] Compliance statement re 2018 Act and RCS Chapter 47A
- [ ] Data protection impact assessment (if processing significant personal data)

### 11. Monitoring and Reporting

| Metric | Source | Use |
|---|---|---|
| Mail sent/returned/re-mailed | Mail logs | Due diligence for court |
| Email delivered/bounced | ESP reports | Effectiveness metrics |
| Publication insertions | Media affidavits | Compliance proof |
| Website traffic | Analytics | Reach assessment |
| Hotline volume | Call logs | Issue tracking |
| Opt-in registrations | Administrator tracking | Group size monitoring; court reporting |

### 12. Exhibits

List: (A) long-form notice, (B) postcard/short-form notice, (C) publication notice, (D) opt-in form, (E) media plan and rate cards, (F) due diligence report template.

## Pitfalls and Checks

- Never disseminate notice before court approval, Use verbatim group definitions from the court's permission order, Align all deadlines with court orders; never invent dates, No CAFA equivalent, no government notice requirement
- **Opt-in, not opt-out**: the Scottish regime is opt-in, this fundamentally changes notice objectives, strategy, and key messaging, Avoid legalese; clarity and neutrality are required, UK GDPR compliance: notice involves processing personal data; ensure lawful basis and transparency, Flag that US due process case law (Mullane, Eisen) is not Scottish law; any plan should reference the 2018 Act and court direction as the governing standard, Add `[VERIFY]` to any uncertain citation or rule, Expenses risk: the court may require notice costs to be borne by the party advancing the proceedings; factor this into the budget

## Scotland/UK Adaptation

This skill has been adapted from a US Rule 23 class notice plan model to a Scottish group proceedings framework.

### Key Differences

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| Rule 23 | Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018, ss. 18 to 24 |
| Class action | Group proceedings |
| Opt-out class | Opt-in only (no opt-out model in Scotland) |
| "Best notice practicable" (Rule 23(c)(2)(B)) | Court-directed notice under the 2018 Act; no "best practicable" standard |
| Mullane v Central Hanover / Eisen v Carlisle & Jacquelin | No direct Scottish equivalent due process case law, court has statutory discretion |
| CAFA 28 U.S.C. § 1715 (government notice) | No equivalent in Scotland |
| Federal court | Court of Session (Outer House) only, group proceedings are not available in the Sheriff Court |
| Class certification | Court permission for group proceedings |
| Fairness hearing | Case management hearing / approval hearing |
| Claims administrator | Group proceedings administrator / notice provider |
| Objection / opt-out | Opt-in only; no formal objection procedure like US class actions |
| Class counsel | Solicitor for the group (or nominated lead solicitor) |
| Attorney's fees / costs | Expenses, subject to Scottish expenses rules (judicial discretion, no US-style lodestar/percentage) |
| Due process clause (US Constitution) | Article 6 ECHR / common law fair hearing rights |

### Statutory Framework

- **Primary statute**: Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018, ss. 18 to 24
- **Court rules**: Act of Sederunt (Rules of the Court of Session 1994) Chapter 47A
- **Key features**: opt-in model; court permission required; only in Court of Session Outer House; group register maintained by the court; representative party may be appointed

### Important Structural Differences

1. **Opt-in vs opt-out**: The Scottish regime is opt-in only. There is no opt-out model. The notice must clearly communicate that individuals must actively join the proceedings and that they are not bound unless they do so.
2. **No CAFA**: There is no government notice requirement equivalent to CAFA 28 U.S.C. § 1715.
3. **No Mullane/Eisen standard**: The US due process standard requiring "best notice practicable" does not apply. The court directs the form, content, and method of notice under the 2018 Act. The discretion is broader.
4. **Court of Session only**: Group proceedings are only available in the Court of Session Outer House. The Sheriff Court cannot grant group proceedings orders.
5. **Permission required**: Unlike US Rule 23 which follows certification, Scottish group proceedings require court permission at an early stage. The notice plan is part of that permission process.
6. **Expenses**: Scottish courts apply the general rule that expenses follow success, with judicial discretion. There is no US-style common fund doctrine or percentage fee basis for group proceedings costs.
7. **Data protection**: UK GDPR applies to the processing of personal data of group members. A data protection impact assessment may be required where notice involves significant processing.

### Relevant Forms (scots-forms/)

Documents in the companion `scots-forms/` directory:

- `group-proceedings-notice-plan-template.md` - full group proceedings notice plan (Scotland)
- `notice-of-group-proceedings-template.md` - formal notice to potential group members
- `opt-in-form-template.md` - opt-in registration form (Scotland)
- `section-22-application-template.md` - application for court directions on notice under s. 22 of the 2018 Act
- `group-proceedings-website-notice-template.md` - website notice content
- `publication-notice-scots.md` - newspaper/publication notice (Scotland)
- `group-register-template.md` - group register template (maintained per RCS Ch 47A)

### Practitioner Notes

1. **Opt-in communication strategy**: The notice must actively encourage opt-in to build group size, unlike US opt-out notices which are neutral on participation.
2. **Court direction is paramount**: The Lord Ordinary will direct the exact form, content, and method of notice. Tailor the plan to the court's directions, do not assume standard US notice formats are acceptable.
3. **UK GDPR compliance**: Notice and opt-in processes involve collecting and processing personal data. Ensure lawful basis (consent or legitimate interest), transparency, and data minimisation.
4. **Expenses risk**: The court may order that the party seeking group proceedings bears the expenses of notice, at least initially. Factor this into the budget and discuss with the client.
5. **No automatic right to appeal**: The decision to grant or refuse group proceedings permission is subject to the ordinary rules on reclaiming (appeal). Notice plans dependent on permission should include contingencies.
6. **Media buy**: If publication notice is ordered, target Scotland-specific publications (The Herald, The Scotsman, local press relevant to the group). National UK publications may be required for UK-wide groups.

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
