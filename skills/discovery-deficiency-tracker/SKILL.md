---
name: discovery-deficiency-tracker
language: en
description: Builds and maintains a litigation-grade discovery deficiency and correspondence tracker for commission and diligence motion practice. Use this skill when the user mentions deficient commission and diligence responses, motion for commission and diligence preparation, pre-litigation protocol tracking, Sheriff Court or Court of Session diligence rules, discovery dispute charts, joint discovery letters, deficiency logging, or specification of documents procedure. Also trigger when the user references boilerplate objections, privilege log deficiencies, incomplete productions, evasive answers, diligence conferral documentation, or asks for help organising disputes for court. Even if the user just says "track these discovery problems" or "help me build a diligence motion," use this skill. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, checklist, drafting, letter, litigation, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Discovery Deficiency and Correspondence Tracker (Scotland/UK Adaptation)

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

Discovery disputes are won or lost on organisation and documentation, not on the merits of any single objection. Without a structured, request-by-request tracker, deficiencies blur together, conferral history gets lost in email threads, deadlines slip, and the motion for commission and diligence becomes a credibility fight about who said what. Scottish courts increasingly require detailed dispute records and documented good-faith correspondence before entertaining any diligence motion.

This skill produces a tracker that serves as the factual backbone for commission and diligence motions, specification of documents orders, sanctions requests, joint minutes, and diligence dispute management, with every assertion grounded in verbatim quotations from primary sources.

> [SCOTS: This skill has been adapted from a US FRCP-based discovery tracker to the Scottish civil procedure framework. All references to FRCP have been replaced with Rules of the Court of Session (RCS) or Ordinary Cause Rules (OCR, Sheriff Court) equivalents. "Discovery" becomes "Commission and Diligence". "Motion to compel" becomes "Motion for Commission and Diligence" or "Specification of Documents". "Meet-and-confer" becomes "pre-litigation protocol / correspondence / minute of agreement." California Separate Statements are not applicable in Scotland.]

---

## Checkpoint A: Pre-Draft Intake (Mandatory)

Ask every time unless the user says "use defaults" or "just draft." Gather:

1. **Full commission and diligence requests** - complete text of each disputed specification of documents, interrogatories (if applicable), or request for recovery, including definitions, instructions, and identifiers
2. **Complete written responses** - exact response text as served, including all general and specific objections, and any reservations
3. **Production records** - copy numbers/inventory for documents produced, privilege logs served, and supplementation dates/descriptions
4. **All diligence correspondence** - emails, letters, call notes in chronological order; any court orders relating to commission and diligence
5. **Governing orders** - procedure order, specification of documents order, confidentiality agreement
6. **Scheduling deadlines** - commission and diligence cut-off, motion cut-off, and any forum-specific diligence deadlines
7. **Forum identity** - Court of Session / Sheriff Court, assigned judge/sheriff, local rules URL, and standing practice notes

**If the user doesn't respond**, apply and clearly label these defaults: Court of Session; RCS governing rules; all disputed requests included; court-facing chart format.

> If exact request/response text or applicable deadlines are missing, pause and prompt the user before generating a court-ready tracker. Label provisional entries **[SOLICITOR VERIFICATION NEEDED]**.

---

## Step 1: Build the Tracker Schema

Create one entry per disputed request number. Never combine multiple requests in a single row.

| Field | Content |
|---|---|
| **Entry ID** | Persistent slug, e.g., `OPT12-PRIVLOG`, `DIL7-SPEC` |
| **Request No. & Type** | Specification item / Commission call no. |
| **Request Text** | Verbatim, including temporal scope, defined terms |
| **Response Date & Method** | Date served, service method |
| **Response Text** | Verbatim, including all objections and conditional language |
| **Production / Inventory** | Document reference(s) or "None" |
| **Privilege Log** | Date served or "None" |
| **Supplementation** | Date(s) and description of each supplement |
| **Deficiency Type** | See taxonomy below |
| **Deficiency Statement** | Rule-grounded narrative, court-paste ready |
| **Proposed Cure** | Phrased as an order a judge/sheriff can sign |
| **Materiality** | Tie to claim element, damages, certification, expert, or impeachment |
| **Correspondence Log** | See format below |
| **Opposing Justification** | Verbatim or accurate paraphrase |
| **Agreed Narrowing** | Any scope reductions agreed |
| **Commitments & Deadlines** | What opposing party committed to produce/revise and by when |
| **Forum Requirement Satisfied?** | Yes / No / Partial + explanation |
| **Regulatory Constraint** | GDPR, Data Protection Act 2018, confidentiality obligations, if applicable |
| **External Deadline** | Commission and diligence deadline (forum-verified) |
| **Internal Deadline** | Next follow-up, letter draft, enrolment of motion |
| **Sanctions Flag** | Yes/No, basis under RCS or OCR rules |
| **Status** | See status taxonomy below |
| **Relief Sought** | Order language for motion or joint minute |

---

## Step 2: Classify Deficiencies

Apply the deficiency taxonomy to each entry:

| Code | Deficiency | Governing Standard |
|---|---|---|
| `BOILERPLATE` | General objections without specificity | RCS 35.2 / OCR Rule 21.1; [VERIFY: Sheriff Court practice note] |
| `WITHHOLD-STATUS` | Fails to state whether docs withheld on objection | RCS 35.1 / OCR 28.1; common law duty of candour |
| `PARTIAL-RESPONSE` | Objects in part, produces in part, no specification | RCS 35.2 |
| `PROPORTIONALITY` | Conclusory burden claim without factor analysis | RCS 1A.2 (proportionality principle, Court of Session); Sheriff Court rules |
| `PRIVLOG` | Privilege claimed without adequate log | Common law legal professional privilege; RCS 35.1 |
| `LEGALPROFPRIV` | Legal professional privilege claimed without distinguishing solicitor-client from litigation privilege | Common law / rule of law |
| `CONDITIONAL` | Ambiguous reservation of rights - "under reservation of objections" without specificity | Common law practice |
| `INCOMPLETE-SEARCH` | Insufficient custodians, date range, or data sources | RCS 35.1; common law obligations |
| `ESI-FORMAT` | Production format non-compliant with order | RCS / OCR practice |
| `VERIFICATION` | Missing verification (where required by order or rule) | RCS / OCR rules |
| `SUPPLEMENT` | Failure to supplement timely | Common law; continuing duty under RCS 35.1 |
| `EVASIVE` | Non-responsive or evasive answer | Common law; diligence rules |

### Deficiency Statement Format

```
Deficiency [Entry ID]: [DEFICIENCY TYPE]
Rule: [RCS/OCR X] requires [specific obligation] / Common law of recovery requires [specific obligation].
Deficiency: [Exact objection language] fails to [specific requirement] because [precise legal reason].
Proposed Cure: Serve a revised response that (1) [concrete step], (2) [concrete step], (3) [concrete step] by [date].
Relief Sought: Order granting commission and diligence for [specific categories/sources/date range] and amended inventory confirming search methodology.
```

---

## Step 3: Document Correspondence and Conferral History

Log each correspondence event per entry using this format:

```
[DATE] [MODE: letter/email/phone/meeting] | Participants: [Solicitor A / Solicitor B]
Summary: Opponent stated [X]. We stated [Y]. Agreed: [Z]. Commitments: Opponent to produce [X] by [date]; we to defer [Y] pending [Z].
Confirmation letter/email sent: [yes/no, date]
Issues resolved this session: [list or "none"]
Issues remaining: [list]
Next follow-up: [date / action]
```

> After each substantive correspondence, send a written confirmation to the opposing party summarising agreements, commitments, and dates. Attach that letter/email to the tracker entry. [SCOTS: In Scottish practice, this aligns with the pre-litigation protocol and minutes of agreement. Formal correspondence should be on headed paper and reference court rules where engaged.]

---

## Step 4: Assign Status and Flag Sanctions Exposure

### Status Taxonomy

| Status | Meaning |
|---|---|
| `Open, awaiting supplement by [date]` | Opponent committed; deadline pending |
| `Partially Cured, reviewing production` | Some production received; deficiency may persist |
| `Narrowed, privilege log only` | Core deficiency resolved; sub-issue remains |
| `Impasse, ready for motion/enrolment` | Good-faith correspondence exhausted |
| `Escalated, joint minute due [date]` | Forum process initiated |
| `Resolved, no further action` | Deficiency cured |

Flag entries where the same deficiency persists across ≥ 2 correspondence cycles for sanctions/fee analysis. Document the number of correspondence events per entry.

---

## Step 5: Generate Output Views

**Client-facing report:** Plain-language summary of each dispute, litigation value, cost-benefit of escalation, and timeline. Omit internal strategy notes. No bad faith labels without evidentiary basis and deliberate strategy.

**Court-facing document:** Strictly factual, request-by-request, impasse items only. Format per forum:

| Forum | Required Format |
|---|---|
| Court of Session | Note of argument / motion for commission and diligence; confirm Practice Note and Lord Ordinary's individual rules |
| Sheriff Court | Specification of documents / Commission and diligence motion under OCR |
| Sheriff Appeal Court | Appeal note; procedural correspondence record |

---

## Checkpoint B: Post-Draft Alignment (Mandatory)

After delivering the initial tracker, ask:

1. Does the tracker capture the correct set of disputed requests, any to add or remove?
2. Are the deficiency classifications and severity flags accurate for your motion strategy?
3. Which output view should be generated first, client-facing report or court-facing document?
4. Are there any correspondence events or opponent commitments not yet reflected in the log?

If the user doesn't answer, recommend generating the court-facing document for impasse items and proceed if authorised.

---

## Quality Audit

Before finalising, verify:

- Every request and response quoted verbatim, no paraphrasing, One entry per request number, no combined rows, Each deficiency statement cites a specific RCS/OCR rule or common law obligation and identifies the precise failure, Correspondence log entries include date, mode, participants, and commitments, All deadlines computed and labelled verified or unverified, Sanctions flags documented with correspondence cycle count, Status taxonomy applied consistently, Materiality tied to specific claims, defences, or issues, Forum-specific format requirements confirmed, Every factual assertion traceable to a document or labelled as assumption, No invented case citations

---

## Guidelines

- **Verbatim only** - quote requests and responses exactly; even minor paraphrase creates opposition ammunition
- **Citations** - provide URL or book reference to authoritative source for every rule and statute cited, or mark `[VERIFY]`; never generate unverified case citations
- **Deadlines are mandatory** - commission and diligence deadlines are set by court order or procedural timetable; missing them forfeits the right to enforce production; label all deadlines unverified until confirmed via court rules and practice notes
- **Forum confirmation required** - ask for court, sheriffdom, and local rules at intake; treat all escalation procedures as unverified until checked against court website and practice notes
- **Legal professional privilege** - tracker contains solicitor mental impressions and strategy; treat as privileged under Scottish common law (solicitor-client privilege and litigation privilege are distinct); segregate strategy commentary from factual content before any sharing; confirm common interest basis before sharing with co-counsel
- **Regulatory constraints** - when withholding is justified by GDPR, Data Protection Act 2018, or confidentiality obligations, note the specific statute and confirm applicability before asserting as a bar
- **Anti-hallucination** - all case citations must be verified via web search and URL-cited, or left as explicit solicitor-fill placeholders; no plausible-sounding but unverified citations
- **Solicitor review required** - all tracker output is practice-support work product; it is not legal advice and must be reviewed by supervising solicitor before use in any external communication or court filing

---

## Scotland/UK Adaptation

This skill adapts a US FRCP-based discovery deficiency tracker for Scottish civil procedure.

### Key Adaptations

| US Concept | Scotland/UK Equivalent |
|---|---|
| FRCP (Federal Rules of Civil Procedure) | Rules of the Court of Session (RCS) / Ordinary Cause Rules (OCR, Sheriff Court) |
| Discovery (general civil discovery) | Commission and Diligence / Specification of Documents / Recovery of Documents |
| Motion to compel | Motion for Commission and Diligence / Enrolment for Specification of Documents |
| Meet-and-confer / Informal discovery conference | Pre-litigation protocol correspondence / Minute of Agreement / formal letters |
| FRCP 26(b)(1) proportionality | RCS 1A.2 / OCR, overriding objective / proportionality principle |
| FRCP 26(b)(5)(A) privilege log | Common law, legal professional privilege log; no statutory codification equivalent to FRCP |
| FRCP 26(b)(3) work-product protection | Legal professional privilege (solicitor-client privilege / litigation privilege under Scottish common law) - litigation privilege is narrower in Scotland than US work-product doctrine |
| FRCP 26(g)(1) certification | RCS / OCR certification obligations |
| FRCP 34(b)(2)(B) to (C) (objection specificity) | RCS 35.2 / OCR diligence rules |
| FRCP 33 (interrogatories) | Limited, interrogatories are not routine in Scottish civil procedure; commission and diligence is the primary recovery mechanism |
| FRCP 37 (sanctions / failure to disclose) | RCS / OCR diligence enforcement; court's inherent power to sanction |
| California Separate Statement (CRC 3.1345) | Not applicable in Scotland |
| SDNY / N.D. Cal. / D. Del. individual rules | Court of Session / Sheriff Court practice notes, check specific sheriffdom |
| Work-product doctrine (codified FRCP rule) | Part of legal professional privilege (common law); litigation privilege covers documents created dominantly for litigation |

### Specific Scottish Procedural Notes

[SCOTS: Commission and Diligence is governed by the Administration of Justice (Scotland) Act 1972 s.1 for Commission and Diligence for recovery of documents. For Sheriff Court, see OCR Chapters 28 to 29. For Court of Session, see RCS Chapter 35.]

[SCOTS: The scope of legal professional privilege in Scotland differs from the US work-product doctrine. Litigation privilege in Scotland requires that the document was brought into existence *for the dominant purpose of litigation*. There is no "anticipation of litigation" standard as broad as the US federal rule.]

[SCOTS: Pre-action protocols in Scotland are governed by the pursuer's duty to lodge a pre-litigation protocol letter under the Commercial Actions procedure or the general mandatory pre-action protocol for personal injury and certain other claims. For commercial cases, see RCS Chapter 47.]

[SCOTS: There is no direct equivalent to FRCP 26(f) conference or mandatory initial disclosures in Scottish procedure. Recovery is typically initiated by specification of documents or commission and diligence after proceedings have commenced.]

[VERIFY: Check current RCS and OCR practice notes for your specific sheriffdom (Edinburgh, Glasgow, Aberdeen, etc.) as procedures may vary slightly by sheriffdom.]

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
