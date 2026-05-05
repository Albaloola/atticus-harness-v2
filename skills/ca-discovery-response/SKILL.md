---
name: ca-discovery-response
language: en
description: Atticus UK/Scots legal skill for ca-discovery-response. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commission and Diligence Response Builder (Scotland)

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

Produces responses to proceedings for recovery of documents under the Act of Sederunt (Rules of the Court of Session 1994) / Sheriff Court Rules, corresponding to the Scots law procedure of Commission and Diligence for the recovery of documents. All output includes solicitor-confirmation placeholders and is ready for verification and service.

**Scope**: Scotland only, Court of Session (Outer House) or Sheriff Court. For English High Court (CPR 31), warn the user and stop.

## Quick Start

1. Gather case metadata and the full specification of documents (see Intake below)
2. For each category of documents, determine: (a) produce voluntarily, (b) object on grounds of confidentiality/privilege/relevance/fishing, or (c) state documents do not exist
3. Assemble into Scottish court format with inventory of documents and execution of service
4. Run the quality checklist before delivering

## Intake (Mandatory)

Ask every time unless the user says "use defaults" or "just draft":

1. **Full specification of documents** - categories, call-book references, proposed commission terms
2. **Case metadata** - instance (party names), court reference number, sheriffdom (if Sheriff Court), or Court of Session number, Lord Ordinary (if CoS)
3. **Solicitor info** - name, firm, practising certificate number, contact (both sides)
4. **Service details** - date of interlocutor / order for diligence, method → determines timetable
   - Responses typically within 14 to 28 days from interlocutor or as ordered by the court
   - `[SOLICITOR: CONFIRM DEADLINE, FAILURE TO RESPOND MAY RESULT IN COMMISSION AND DILIGENCE WITHOUT FURTHER NOTICE]`
5. **Document universe** - categories, storage, custodians, sensitivity
6. **Confidentiality / privilege status** - documents withheld on grounds of confidentiality (legal professional privilege) or without prejudice communications
7. **Format** - formal inventory vs. informal response
8. **Case type** - personal injury, commercial, family, reparation, etc.

**Defaults** (if user doesn't respond): hybrid position, object to overbroad categories but produce specific relevant documents; informal format; personal injury case type; standard confidentiality/privilege objections. Label defaults clearly.

## Core Workflow

### 1. Parse the Specification

Examine the specification of documents or call-book. Each category/call should be examined individually. Note framing, Scots procedure uses categories (not numbered requests).

### 2. Classify Each Category

| Response Type | Description | When |
|---|---|---|
| Voluntary compliance | Produce documents | Documents exist, relevant, no valid objection |
| Inability to comply | State documents do not exist or not in possession | Documents never existed / not in the party's possession, custody, or control |
| Objection | Oppose the call | Documents irrelevant ("fishing diligence"), overbroad, confidential, privileged, or oppressive |
| Conditional compliance | Object but offer to produce | Object to scope but offer narrower category; produce non-privileged relevant documents |

### 3. Draft Objections / Grounds of Opposition

Objections must be **specific, fact-tethered, and legally grounded** - no boilerplate.

Objection modules (adapt per category, never paste blindly):

- **Fishing diligence / irrelevance** - call does not relate to a matter in dispute between the parties; the documents sought do not exist or are not relevant to any averment on record
- **Legal professional privilege** (equivalent to attorney-client privilege) - communications between solicitor and client for the purpose of obtaining legal advice; confidential communications in contemplation of litigation
- **Without prejudice privilege** - communications made in genuine attempt to settle the dispute
- **Confidentiality** - documents containing personal data (UK GDPR / DPA 2018); commercially sensitive information; seek confidentiality regime or protective order
- **Oppression / overbreadth** - category is excessively wide; would require disproportionate search effort; does not correspond to the pleadings
- **Speculative / founding** - commission and diligence cannot be used as a fishing expedition to found an action not yet raised
- **Incrimination** - documents that would tend to incriminate the party or their spouse
- **Crown privilege / public interest immunity** - documents whose disclosure would harm the public interest (rare in routine civil litigation)
- **Without prejudice** - communications in furtherance of settlement negotiations

Prefer statutory references (Evidence (Scotland) Act, Act of Sederunt rules) over case law. Mark any case citation `[VERIFY CITATION BEFORE LODGING]`.

### 4. Draft Substantive Responses

**Compliance (voluntary production):**

> Subject to and without waiving the above objections, the [party] is willing to produce the documents sought in this call. The documents are being produced in a commission and diligence inventory / made available for inspection. Production reference: [INSERT PRODUCTION REFERENCE].

State that documents are produced as they are kept in the ordinary course of business or arranged to correspond to the call.

**Inability to comply:**

> After a reasonable search and diligent inquiry, the [party] is unable to comply with this call. [SPECIFY: documents have never been in the party's possession / are not known to exist / were formerly in the possession of [IDENTIFY] and are no longer available]. Search included [DESCRIBE: electronic records, file review, custodial inquiry, SOLICITOR/CLIENT TO CONFIRM].

**Electronic documents**: State the format in which electronic documents will be provided (PDF, native format) and whether searching has been limited by date range, custodians, or key terms.

### 5. Assemble Document

1. Solicitor information block
2. Court caption - "IN THE COURT OF SESSION" / "IN THE SHERIFF COURT OF [SHERIFFDOM] AT [LOCATION]"
3. Instance (party names) and court reference number (match interlocutor exactly)
4. Title: "RESPONSES TO SPECIFICATION OF DOCUMENTS" or "ANSWERS TO COMMISSION AND DILIGENCE"
5. Preliminary statement, reservation of rights, ongoing investigation, right to supplement
6. Numbered responses, reproduce each call verbatim or summarise → position (comply / object / unable)
7. Footer with party and reference as per court practice

### 6. Verification and Execution of Service

**Verification** - there is no precise equivalent of California's verification requirement in Scots procedure. The response is typically prepared and signed by the party's solicitor. Where facts are within the party's own knowledge, a supporting affidavit or sworn statement may be required.

**Execution of service** - Scottish court format with details of solicitor, agent, DX, or process server. Include `[INSERT SERVICE LIST / RECIPIENTS]` placeholder.

## Post-Draft Review

After delivering, ask:

1. Are the classification and objections for each category correct?
2. Do objections match your litigation strategy?
3. Any documents to produce that aren't accounted for?
4. Need to prepare the inventory of documents / production now, or handle separately?

## Quality Checklist

Before finalising, verify:

- [ ] Every response properly addresses the categories in the specification
- [ ] Objections are specific and fact-tethered (not mere boilerplate)
- [ ] Calls reproduced or accurately summarised
- [ ] Factual assertions based on user-provided info only
- [ ] Production references marked `[INSERT REFERENCE]`
- [ ] Party names, court reference, sheriffdom/Court of Session designation consistent
- [ ] Verification / solicitor signature appropriate for the court
- [ ] Execution of service in proper form
- [ ] All citations verified or marked `[VERIFY]`
- [ ] No blank denials, explain why documents don't exist
- [ ] Case-type-appropriate objections (confidentiality, privilege, fishing)
- [ ] Hybrid responses include both objection and offer to produce
- [ ] Electronic document format specified where applicable

## Pitfalls

- **Fishing diligence** is the most common objection, the specification must relate to existing or intended proceedings
- **Over-objecting** risks a motion for a commission with expenses against the objecting party
- **Boilerplate objections** without factual specificity are ineffective and invite the court to grant the diligence
- **Case-type mismatch** - confidentiality and privilege objections vary dramatically by case type (PI vs. commercial vs. family)
- **Anti-hallucination** - all case citations must be verified or left as placeholders; rely on procedural rules over case law; never generate plausible-sounding unverified citations
- **Solicitor review required** - all output is practice-support work product; must be reviewed by the solicitor of record before lodging or service
- **No US-style discovery** - Scots procedure does not provide for interrogatories as of right, depositions, or standard document requests. Commission and Diligence is court-ordered and specific, not party-directed

## Scotland/UK Adaptation

This skill has been adapted from a US California-specific discovery framework. Key differences in Scottish civil procedure:

- **No general discovery** - Scots law does not have party-directed discovery (RFPs, interrogatories, depositions). Instead, the procedure for recovering documents is Commission and Diligence for the recovery of documents, granted by the court on application.
- **Specification of Documents** replaces Requests for Production, a party drafts a specification of categories of documents; the court grants or refuses a commission for their recovery, typically to a commissioner appointed by the court.
- **No Bates numbering** - production is by inventory of productions (numbered list of documents lodged with the court).
- **No privilege log** - the concept of a privilege log is not used in Scots procedure. Privilege is claimed by general objection to the category.
- **No work product doctrine** - Scots law has legal professional privilege (advice privilege and litigation privilege) but no distinct work product doctrine.
- **No verification requirement** - responses are made by the party's solicitor, not verified by the party, unless the court orders an affidavit.
- **Court of Session Outer House** replaces US Superior Court. **Sheriff Court** is the lower tier.
- **Act of Sederunt** (Rules of the Court of Session 1994 / Ordinary Cause Rules 1993) replaces CCP and FRCP.
- **Legal professional privilege** (advice and litigation) replaces Evid. Code § 954 / attorney-client privilege.
- **No right to depositions** - witness evidence is by affidavit and oral testimony at proof.
- **No interrogatories as of right** - written questions to a party require a court order.
- **Solicitor / Advocate** replaces attorney. **Sheriff** replaces Superior Court judge at first instance.
- **Interdict** replaces injunction. **Proof** replaces trial (civil). **Summons** replaces complaint.

---

**Key changes from original:**

- **Removed `tags`** - not part of the Agent Skills spec
- **Trimmed description** from 14 lines to 7 while keeping all trigger keywords
- **Removed "Why This Skill Exists"** prose section, Claude already understands discovery law; the overview sentence covers it
- **Renamed checkpoints** - "Checkpoint A/B" became "Intake" and "Post-Draft Review" for clarity
- **Merged "Guidelines" into "Pitfalls"** - eliminated redundancy between the two sections
- **Converted Quality Audit to checklist format** with `- [ ]` for trackable progress
- **Removed ethics line with `[VERIFY]`** - replaced with the cleaner "attorney review required" pitfall
- **Cut ~40 lines** (170 → ~130) while preserving every statute, response template, objection module, and procedural requirement

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
