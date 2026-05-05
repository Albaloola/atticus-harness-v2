---
name: discovery-plan
language: en
description: Drafts a Joint Commission and Diligence plan and Proposed Procedural Order for Scottish civil litigation under the Rules of the Court of Session 1994 or Ordinary Cause Rules 1993. Analyses pleadings, court requirements, and case complexity to produce the specification of documents, recovery schedules, privilege procedures, and procedural deadlines. Use when preparing for Commission and Diligence, specification of documents, options hearings, case management discussions, or procedural orders in Scottish litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Proposed Specification of Documents & Procedural Timetable [SCOTS]

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

Produces a court-ready specification of documents and proposed procedural timetable reflecting the options hearing / case management discussion outcomes while protecting client interests.

## Required Inputs

1. **Initial writ/summons, defences, adjustments, open records** - all claims, defences, counterclaims
2. **Options hearing / CMD details** - date, participating solicitors/advocates
3. **Court information** - court (Court of Session / Sheriff Court), case number, judge/sheriff, local rules, practice notes
4. **Existing court orders** - interlocutors, practice directions, model timetables
5. **Initial disclosures** - if any voluntary disclosure exchanged

## Workflow

### 1. Analyse Recovery Scope

For each claim/defence, identify:
- Elements requiring proof and key disputed facts, Document types, categories, and witness categories, Proportionality: importance of issues, value of cause, relative access, party resources

[SCOTS: No general duty of disclosure, parties only disclose documents they intend to rely upon. Recovery from opposing parties and third-party havers requires Commission and Diligence via a Specification of Documents.]

### 2. Draft Document Sections

| Section | Contents |
|---|---|
| Caption & Introduction | Court/division, case number, parties, cite to RCS Ch. 37 or OCR Ch. 4, options hearing/CMD date and counsel |
| Specification of Documents | Numbered categories of documents sought, tied to specific averments |
| Recovery Schedule | Timing for lodging specification, diligence, and production |
| Privilege Framework | Confidentiality clawback, privilege log requirements |
| Limitation of Documents | Number of categories, custodian limits, time/geographic limits |
| Phased Recovery | If warranted: threshold issues, liability/damages bifurcation |
| Proposed Procedural Timetable | All milestone deadlines in tabular format |
| Signature Blocks | All solicitors/advocates of record with firm, address, reference, email |

### 3. Set Specification of Documents

[SCOTS: Commission and Diligence is the Scottish equivalent of discovery. The process:

1. Lodge a Specification of Documents (numbered paragraphs listing categories of documents sought)
2. Obtain interlocutor granting Commission and Diligence
3. Serve on havers with letter of inquiry
4. Havers produce documents voluntarily or by court order
]

- **Format**: Numbered paragraphs, each specifying: (a) document type; (b) date range; (c) parties/custodians; (d) connection to specific averments
- **Email/Electronic**: Include specific provisions for ESI (email archives, databases, cloud storage, mobile devices)
- **Search**: Agree search terms and custodians; specify TAR/predictive coding if used
- **Preservation**: Custodians, data sources (email, drives, cloud, mobile, social), time period
- **Cost allocation**: The party seeking recovery typically bears the cost; court may order sharing for disproportionate burden
- **Havers**: Identify third-parties known to hold relevant documents, obligation to cite them as havers in the specification

### 4. Define Privilege Framework

| Element | Provision |
|---|---|
| Clawback | Inadvertent production does not waive privilege, specify contractual clawback mechanism [SCOTS: No FRE 502(d) equivalent] |
| Clawback procedure | Written notice with specificity + privilege basis → return/destroy within 5 to 10 business days |
| Privilege log fields | Date, author, recipients, document type, subject description |
| Log timing | Reasonable period after each production |
| Categorical exclusions | Consider post-litigation solicitor-client communications and pure legal advice |
| Common interest | Address if applicable |

[SCOTS: Scottish privilege types:
- **Legal advice privilege**: Communications between solicitor and client for legal advice
- **Litigation privilege**: Communications with third parties for dominant purpose of litigation
- **Without prejudice privilege**: Communications genuinely aimed at settlement, No equivalent to US work product doctrine or FRE 502(d)]

### 5. Set Recovery Limitations

[SCOTS: No presumptive numeric limits as under FRCP. Court has discretion to limit scope based on proportionality.]

| Type | Guidance |
|---|---|
| Specification paragraphs | Keep focused, each paragraph tied to specific averment |
| Document categories | Limit to relevant and material categories |
| Third-party havers | Identify by name, general citation of "any other persons" usually refused |
| Commission hearing | Not normally required for document recovery; scheduled for oral evidence if needed |

Include format (physical inspection, digital copy), location protocols, and cost allocation.

### 6. Build Proposed Procedural Timetable

Work backward from anticipated proof (trial) date:

| Milestone | Guideline |
|---|---|
| Close of pleadings (adjustment) | By order of court (4 to 8 weeks from options hearing) |
| Specification of Documents lodged | +4 to 6 weeks from close of pleadings |
| Commission and Diligence granted | +2 to 4 weeks from lodging |
| Documents produced | +8 to 12 weeks from interlocutor |
| Commission for oral evidence (if any) | +12 to 16 weeks |
| Record closed | +4 to 6 weeks after production |
| Pre-proof hearing / by order | +4 to 8 weeks before proof |
| Motions for summary decree | +8 to 12 weeks before proof |
| Lodge list of witnesses / productions | +4 to 6 weeks before proof |
| Proof (trial) | ~12 to 18 months from initial writ (simple) or 18 to 24 months (complex) |
| Submission of written submissions | +4 to 8 weeks after proof |
| Judgment issued | +4 to 12 weeks after submissions |
| Reclaiming motion (appeal) period | 21 days (Sheriff Court) or 28 days (Court of Session) |

Adjust for party count, document volume, expert count, jurisdictional constraints, court availability.

### 7. Add Modification Provisions

- Extension of procedural steps: by motion with consent unless it affects proof date, Proof date changes: court approval, good cause required, Correspondence required before any modification motion, Optional by-order reviews at key intervals

### 8. Assess Phased Recovery

Consider phasing when:
- Jurisdictional or prescriptive period issues are threshold, Liability and damages are naturally bifurcated, Multi-defendant cases have distinct factual tracks, Sampling custodians can inform broader recovery scope

Specify clear phase triggers, transition procedures, and right to modify if phasing proves unworkable.

## Pitfalls & Checks

- [SCOTS: Cite RCS Chapter 37 (Court of Session) or OCR Chapter 4 (Sheriff Court) for Commission and Diligence]
- [SCOTS: Specification must tie each document category to specific averments in the pleadings, no "fishing expeditions"]
- [SCOTS: No general discovery obligation, parties produce only what they rely on; Commission and Diligence is the recovery mechanism]
- [SCOTS: Havers must be specifically identified where known]
- Use court-adoptable format (interlocutor style)
- Number all paragraphs for easy reference, Verify all deadlines are internally consistent and comply with court rules, Check for model timetables or practice notes required by the specific court/sheriff, Include the correct style of cause and court-required formatting, Tone: cooperative where appropriate, protective of client interests where necessary

## Procedural Notes by Court Level

| Court Level | Rules | Recovery Mechanism |
|---|---|---|
| Court of Session (Outer House) | RCS Ch. 37 (documents), Ch. 38 (witnesses) | Commission and Diligence by specification |
| Sheriff Court (Ordinary Cause) | OCR Ch. 4 (documents) | Commission and Diligence by specification |
| Sheriff Court (Simple Procedure) | Simple Procedure Rules | Simplified recovery procedures |
| Employment Tribunal (Scotland) | ET Rules 2013 (Sch. 1) | Standard disclosure orders (different regime) |

## Scottish / UK Form References

See `scots-forms/` directory for:
- Specification of Documents, Court of Session style, Specification of Documents, Sheriff Court Ordinary Cause style, Form of interlocutor granting Commission and Diligence, Letter of inquiry to haver, Form of undertaking by haver, Proposed procedural timetable template (Court of Session)
- Proposed procedural timetable template (Sheriff Court)

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Completely restructured from "Joint Discovery Plan" to "Specification of Documents & Procedural Timetable"
- Replaced "FRCP 26(f)" with RCS Chapter 37 (Court of Session) / OCR Chapter 4 (Sheriff Court)
- Replaced "discovery" with "Commission and Diligence / specification of documents"
- Replaced "initial writ/summons" for complaint, Replaced "defences" for answer, Replaced "meet-and-confer" with "options hearing / case management discussion"
- Replaced "FRCP" rules throughout with RCS/OCR equivalents, Replaced "deposition" with "commission for oral evidence" (Scottish equivalent)
- Replaced "interrogatories" with "specification of documents" (no direct interrogatory equivalent)
- Replaced "RFAs" with "motion for summary decree" (no form of admission in Scottish procedure)
- Replaced "dispositive motions" with "motion for summary decree / preliminary pleas"
- Replaced "trial" with "proof"
- Replaced "appeal" with "reclaiming motion" (21-28 day period)
- Replaced FRE 502(d) with Scottish common law privilege and contractual clawback, Replaced work product doctrine with litigation privilege (dominant purpose test)
- Added "haver" concept as third-party document holder, Replaced FRCP limits (10 depositions, 25 interrogatories) with Scottish court discretion, Replaced "certificate of service" with Scottish style of cause / lodging requirements, Added key concept that Scotland has NO general duty of disclosure

**Key Scottish/UK considerations:**
- [SCOTS: No US-style discovery, Scotland has no general duty of disclosure. Parties only produce documents they rely on. Commission and Diligence is the court-ordered mechanism to recover documents from opponents and third-party havers.]
- [SCOTS: Specification of Documents must be specific and tied to pleadings, no "fishing expeditions" permitted]
- [SCOTS: Havers (third-party holders) are a unique feature, parties cite havers in their specification]
- [SCOTS: Privilege, legal advice privilege, litigation privilege (dominant purpose), without prejudice; no equivalent to US work product or FRE 502(d)]
- [SCOTS: Summary decree (equivalent to summary judgment) is available where defender has no defence or pursuer has no case]
- [SCOTS: Prescription (limitations) - delict claims generally 5 years (3 years for PI), 20-year long-stop]
- [SCOTS: Judicial expenses (costs) follow the event unless otherwise ordered, loser pays]

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
