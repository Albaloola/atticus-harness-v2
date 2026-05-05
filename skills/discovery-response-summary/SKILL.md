---
name: '[SCOTS] discovery-response-summary'
language: en
description: '[SCOTS] Synthesises commission and diligence responses, specification of documents, written questions, and productions into a thematic, issue-based analytical memorandum with gap analysis and deficiency tracking under Scottish civil procedure. Trigger when the user asks to summarise commission and diligence responses, review recovered documents, analyse productions, plan further specification, prepare for summary decree or proof from commission and diligence materials, or cross-reference voluminous document recovery across multiple procedures. [Atticus UK/Scots refined]'
tags:
- analysis, litigation, summarization, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commission and Diligence / Disclosure Response Summary [SCOTS]

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

Reorganises recovered documents and responses from request-number order into legal-issue order, mapping what is established, disputed, or missing across all commission and diligence procedures, directly supporting motions for further specification, summary decree, settlement, and proof preparation.

## Key Scottish Framework

### Commission and Diligence (Scotland)

In Scottish civil procedure, there is **no general discovery** as in US federal practice. Documents and evidence are recovered through **Commission and Diligence** - a judicial process governed by the rules of the Court of Session or Sheriff Court.

| US Term | Scottish Equivalent |
|---|---|
| Discovery | Commission and Diligence |
| Request for Production (RFP) | Specification of Documents |
| Interrogatories | Written questions (rarely used; commission procedure preferred) |
| Deposition | Examination on Commission |
| Request for Admission (RFA) | No direct equivalent; formal admissions in pleadings |
| Motion to Compel | Enforce specification / Devolution issue |
| FRCP Rules | Rules of the Court of Session / Sheriff Court Ordinary Cause Rules / Simple Procedure Rules |

### Scottish Recovery Methods
1. **Specification of Documents** - formal court application to compel production of specified documents or categories from a party or third party
2. **Commission to Take Evidence** - appointment of a commissioner (often a solicitor or advocate) to examine a witness on oath before trial
3. **Diligence for Recovery of Documents** - court order to recover documents from a party (formerly "diligence against havers"; now governed by the Courts Reform (Scotland) Act 2014)
4. **Voluntary disclosure** - common pre-litigation or upon request; no formal procedure required
5. **Productions** - documents lodged with the court for use at proof (trial)

### Key Differences
- **No general discovery**: Scottish procedure is more focused; parties specify documents and must justify relevance
- **Recovery is court-supervised**: no inter partes discovery without court order
- **No FRCP 26(a)(1)** initial disclosure
- **No FRCP 30(b)(6)** corporate deponent rule
- **No Requests for Admission** - formal admissions are made in pleadings or by letter
- **Privilege**: Legal professional privilege (confidential communications with solicitor); litigation privilege similar to UK approach

## Quick Start

1. Gather intake inputs (Checkpoint A)
2. Produce executive summary
3. Build thematic cross-reference table (primary deliverable)
4. Organise responses by recovery method
5. Analyse privilege claims
6. Build deficiency tracker
7. Produce gap analysis and next steps
8. Validate with post-draft alignment (Checkpoint B)

## Checkpoint A: Pre-Draft Intake

Ask unless the user says "use defaults" or "just draft":

1. **Specification of documents / Commission orders** - with interlocutor/granting dates
2. **Recovered documents** - productions, opponents' recoveries, third-party havers responses
3. **Production logs** - lists of recovered documents with privilege claims
4. **Commission transcripts** - if oral examination was conducted on commission
5. **Operative pleadings** - initial writ/summons and defences (anchors thematic organisation)
6. **Case posture** - next milestone (summary decree, proof, mediation, appeal)

Defaults if no response: organise by claims/defences from pleadings; include all recovery types provided; Sheriff Court procedure; neutral tone.

> If operative pleadings are missing, organise by issue categories and flag issue-mapping as provisional.

## Step 1: Executive Summary

- Scope of recovery (methods, parties, date range)
- Top 3 to 5 favourable findings, Top 3 to 5 critical gaps or adverse admissions, Recommended immediate next steps

## Step 2: Thematic Cross-Reference Table

Group all recovered material by legal issue, not recovery request:

| Issue/Element | Specification of Docs | Commission Evidence | Productions | Pleadings Admission | Assessment |
|---|---|---|---|---|---|
| Liability, [element] | Spec. No. X: [summary] | Comm. No. X: [summary] | Prod. No. X | Admission/Denied | Established / Disputed / Gap |
| Damages | ... | ... | ... | ... | ... |
| Defences | ... | ... | ... | ... | ... |

This is the primary deliverable.

## Step 3: Recovery Methods by Type

**Specification of Documents / Category** - for each:
- **No. [X]**: [Category description]
  - *Recovered*: [Docket/date range] · *Withheld*: [Privilege/ground] · *Deficiency*: [Yes/No, describe]

**Commission Evidence (Oral)** - for each witness:
- **[Name]** ([date])
  - Key evidence: [topic] - [page:line if transcript available]
  - Contradictions with competing productions: [describe]
  - Documents identified: [Production No. or description]

**Productions (Lodged Documents)**:
| Production No. | Document | Party | Supporting/Contradicting Issue | Notes |

**Pleadings Admissions**:
| Allegation | Response | Admitted/Denied/Explained | Proof Impact |
|---|---|---|---|

## Step 4: Privilege Analysis

| Entry | Privilege Claimed | Basis Adequate? | Challenge Viable? |
|---|---|---|---|
| [Doc/date] | Legal advice / Litigation privilege | Yes / No | Yes / No, reason |

Flag: over-claiming, missing privilege details, waiver arguments. Scottish privilege law differs from UK-wide approach in certain respects; litigation privilege is similar but may require dominant purpose test [VERIFY].

## Step 5: Deficiency Tracker

| Request | Deficiency | Further Recovery Basis | Priority |
|---|---|---|---|
| Spec. No. X | Incomplete production; inadequate description | Further specification / Court rules | High |
| Spec. No. X | Privilege claimed without detail | RCR 35A (Court of Session) / OCR (Sheriff Court) [VERIFY] | Medium |

## Step 6: Gap Analysis and Next Steps

- **Further specification needed**: [Topic, reason gap exists]
- **Further commission evidence**: [Witness, identified in recovery, not yet examined on commission]
- **Third party recovery**: [Haver not yet cited]
- **Enforcement candidates**: [Deficient response, proposed enforcement by court]

## Checkpoint B: Post-Draft Alignment

Ask after delivering the initial summary:

1. Does the thematic organisation match your case theory?
2. Are the established/disputed/gap assessments calibrated to your posture?
3. Which follow-up actions to prioritise first?
4. Generate standalone deficiency tracker or enforcement analysis from flagged items?

Default if no response: prioritise gap analysis and deficiency tracker for nearest procedural deadline.

## Quality Checks

- Every finding cites a specific specification number, production number, or commission evidence reference, Thematic table covers all claims, defences, and disputed elements, No recovery method omitted from cross-reference, Favourable and adverse findings separately labelled, Privilege analyses do not reveal protected content, Deficiency tracker includes rule basis and priority, Contradictions in evidence flagged for cross-examination, All rule citations verified or marked `[VERIFY]`
- Neutral analytical tone throughout

## Rules

- Mark court-specific rules `[VERIFY]` - distinguish Court of Session from Sheriff Court procedure, For Simple Procedure, confirm the simpler recovery rules apply
- **Anti-hallucination**: all citations must be verified or left as explicit placeholders
- **Solicitor review required**: all output is practice-support work product requiring supervising solicitor review before use in court submissions or correspondence

---

## Scotland/UK Adaptation

**Legal framework:**
- Administration of Justice (Scotland) Act 1972, s. 1 - recovery of documents before proceedings (inspection and preservation)
- Rules of the Court of Session (RCS) - Chapter 35 (commission and diligence for recovery of documents, recovery of evidence)
- Sheriff Court Ordinary Cause Rules (OCR) - Chapter 28 (commission and diligence)
- Simple Procedure Rules, limited recovery provisions, Courts Reform (Scotland) Act 2014 - procedural reforms including recovery procedure

**Key differences from US discovery model:**
- **[SCOTS: No general discovery]** - Commission and diligence is court-supervised; parties do not exchange broad discovery categories
- **[SCOTS: No FRCP 26(a)(1) initial disclosure]** - no automatic disclosure obligation
- **[SCOTS: No equivalent to Interrogatories / RFAs]** - written questions are rare in Scottish practice; formal admissions in pleadings
- **[SCOTS: No FRCP 30(b)(6)]** - no rule for organisation-level witness depositions, No deposition practice as of right, examination on commission requires court order and a commissioner is appointed, Privilege: Legal advice privilege (communications with solicitor for legal advice); litigation privilege (documents created for litigation purpose, dominant purpose test may apply)
- Motions for further specification / enforcement of diligence serve the function of motions to compel, Costs (judicial expenses) follow success, applicant seeking to enforce compliance bears own costs unless otherwise ordered, Time bars and limitation under Prescription and Limitation (Scotland) Act 1973 - separate from procedural discovery deadlines

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
