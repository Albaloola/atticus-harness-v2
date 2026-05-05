---
name: discovery-dispute-letter
language: en
description: Atticus UK/Scots legal skill for discovery-dispute-letter. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Discovery Dispute Resolution Letter [SCOTS]

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

Drafts a court-ready letter that documents specification of documents efforts, memorialises agreements, and builds the record for potential commission and diligence or opposition to a specification.

## Required Inputs

1. **Case info** - court (Court of Session / Sheriff Court), case number, parties, judge/sheriff, procedural timetable
2. **Conference or correspondence details** - date(s), participants, outcomes (if any conference held)
3. **Disputed specifications** - exact specification of documents language, objections lodged, compromises discussed
4. **Court timetable** - options hearing date, preliminary hearing, proof or debate timetable

## Letter Structure

**Header:** Date, opposing solicitor's address, Re line with full court reference, case number, client name, court reference number. Include "By Email" with address.

**Body sections in order:**

1. **Opening** - Reference correspondence/conference dates/participants, acknowledge agreements, identify remaining disputes. Note that opposed motion or minute may follow.
2. **Agreements Reached** - Numbered list of compromises with compliance deadlines. Request written confirmation.
3. **Outstanding Disputes** - Organised by specification or diligence category (documents, commissions, step of procedure). Use the per-dispute format below.
4. **Deadlines** - Specific response date tied to court timetable. State intention to oppose or enroll motion for commission and diligence.
5. **Closing** - Invite further discussion, propose specific follow-up date/time. Include preservation reminder (duty to preserve relevant documents and electronic records).
6. **Signature Block** - Name, title, firm, DX / contact details, cc list, attachments (specification of documents, correspondence, court timetable).

## Per-Dispute Format

Each disputed item must include all four elements:

1. **Exact Specification Language** - quote the specification of documents call as served
2. **Opposing Objection** - quote or summarise the objection raised
3. **Why Objection Lacks Merit** - cite applicable court rules and authority
4. **Proposed Compromise** - narrowed alternative demonstrating reasonableness

## Letter Type Variations

- **Pre-options hearing agenda** - collaborative tone; outlines issues for discussion; sent before the Options Hearing or Preliminary Hearing
- **Post-conference follow-up** - precise, collaborative; memorialises agreements, narrows disputes; sent within 24 to 48 hours
- **Pre-commission motion** - firm, formal; final attempt before enrolling a motion for commission and diligence; allow response time before hearing date

## Guidelines

- **Write for the court** - every sentence may become a motion or hearing submission; make the client look reasonable
- **Quote exactly** - specification calls and objections must be verbatim
- **Characterise fairly** - describe opposing responses accurately even when inadequate
- **Cite authority** - RCS Chapter 35 (recovery of documents), OCR Chapter 28; relevant Common Law rules on specification and confidentiality
- **Demonstrate good faith** - show willingness to compromise on scope, format, or timing
- **Pin down follow-up** - always propose a specific callback or email date/time to prevent indefinite delay
- **Preservation language** - remind of ongoing duty to preserve relevant documents, digital records, email, and other electronic media

## Court-Specific Notes

- **Court of Session** - RCS 35.1 to 35.8; specification of documents calls; commission and diligence before Lord Ordinary; optional procedure under s.1 of the Administration of Justice (Scotland) Act 1972 for pre-action recovery
- **Sheriff Court (Ordinary Cause)** - OCR 28.1 to 28.12; specification of documents; commission and diligence
- **Simple Procedure** - no formal specification of documents procedure; use written request to sheriff; motion for recovery
- **Pre-action recovery** - s.1 of the Administration of Justice (Scotland) Act 1972; independent application lodged before the court; need prima facie case; court appoints a commissioner

## Checklist

- Local court rules on specification and diligence satisfied, Reasonable response deadline provided, All disputed specification calls identified with exact wording, Good faith compromise demonstrated for each dispute, Legal authority cited for contested positions, Firm but professional tone throughout, Preservation language included, Letter is suitable for lodging in process or referring to at hearing, Consider whether commission and diligence, opposed motion, or minute for recovery is the appropriate next step

## Scotland/UK Adaptation

This skill replaces US civil discovery (FRCP Rule 26, interrogatories, depositions, RFPs) with Scottish civil procedure for recovery of documents:

- FRCP meet-and-confer → Pre-options hearing correspondence / specification of documents diligence, Interrogatories / RFPs / Depositions → Specification of documents calls (lesser role; no US-style written discovery or depositions)
- Motion to compel → Enrolling motion for commission and diligence / opposed motion for recovery, FRCP 26(b)(1) proportionality → RCS 35 (relevance and specification principles), common law on confidentiality and burden, Magistrate judge → Lord Ordinary / Sheriff; commissioner appointed for diligence, The skill addresses recovery of documents as the primary Scottish mechanism; there is no direct equivalent of US interrogatories or notices of deposition in ordinary Scottish civil procedure.

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
