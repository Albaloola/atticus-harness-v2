---
name: interrogatory-response-summaries
language: en
description: Atticus UK/Scots legal skill for interrogatory-response-summaries. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Interrogatory Response Summaries

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

[SCOTS] Structured analysis of written responses to formal questions in Scottish civil litigation, adapted from the US interrogatory model to Scottish procedure. Supports discovery strategy, precognition preparation, and motion practice.

## Required Inputs

1. **Written responses** - responses to formal written questions, specification of documents, or commission and diligence materials (PDF or text)
2. **Original questions / specification** - as propounded, if available separately
3. **Supplemental context** (optional) - prior precognitions, prior statements, or relevant court orders (Court of Session or Sheriff Court)

## Workflow

### Step 1: Per-Question Summary Table

For each question/interrogatory, produce a row:

| # | Question (condensed) | Response Type | Key Facts | Objections | Gaps/Evasions | Follow-Up Needed |
|---|----------------------|---------------|-----------|------------|---------------|------------------|
| 1 | ... | See types below | Names, dates, amounts, locations | Privilege / Relevance / Unduly burdensome / etc. | Deflections, non-answers | Yes/No + note |

**Response types:**
- **Substantive** - direct factual answer
- **Mixed** - objection + partial answer (summarise each independently; do not merge)
- **Referral** - directed to document production (note reference numbers if available)
- **No knowledge** - responding party disclaims knowledge
- **Objection only** - no substantive answer provided

### Step 2: Pattern Analysis

Identify recurring patterns across all responses:

- **Repeated objections** - same basis across multiple questions (e.g., boilerplate relevance, confidentiality issues)
- **Blanket no-knowledge claims** - systematic disclaimers on specific topics
- **Referral clusters** - redirections to document production without further answer
- **Detailed responses** - unexpectedly forthcoming areas (may signal strategic framing)
- **Discovery posture signals** - inferred strategy (e.g., obstructionist on quantum, cooperative on liability)

### Step 3: Inconsistency and Risk Flags

| Question # | Issue | Conflicting Source | Significance |
|------------|-------|--------------------|--------------|
| ... | Response conflicts with... | Prior precognition / produced document / public record | High / Medium / Low |

Flag:
- Internal inconsistencies between responses, Conflicts with produced documents or prior sworn statements (affidavits, precognitions)
- Potential court rule or procedural order violations, note as **motion practice candidate**

### Step 4: Follow-Up Discovery Checklist

- [ ] Questions warranting formal response challenge (by number)
- [ ] Precognition / witness preparation topics surfaced by responses
- [ ] Specification of documents / commission and diligence based on referrals or gaps
- [ ] Further written questions to be lodged
- [ ] Privilege log / confidentiality review triggers

## Pitfalls and Checks

- Preserve all source citations (document title, page reference) - solicitors and advocates must verify for motions and written submissions, Do not characterise objections as waived unless the record clearly supports it; flag for solicitor review, Flag responses to formal written questions under Court of Session or Sheriff Court rules separately, procedure differs between Ordinary Cause and Simple Procedure, Check for proper form and compliance with Chapter 4 (Court of Session) or Chapter 10 (Sheriff Court Ordinary Cause) rules [VERIFY applicable rules]
- Note: **Scottish civil procedure has no direct equivalent to US interrogatories** - the closest mechanisms are:
  - Written questions under commission and diligence (rare in practice; requires court approval)
  - Specification of documents (orders for recovery of documents under the Administration of Justice (Scotland) Act 1972)
  - Responses to formal notices calling for admissions
  - Ordered responses under Chapter 4.1 of the Court of Session rules (preliminary steps)
  - If this is a Simple Procedure case, the court actively manages the case without formal interrogatories, adjust accordingly

## Scotland/UK Adaptation

### Key Differences from US Practice

1. **No Interrogatories as of Right**: Scottish civil procedure does not have US-style interrogatories as a discovery mechanism available as of right. The closest equivalents are:
   - **Commission and diligence** (rare) - court-ordered recovery of documents and oral examination on oath
   - **Specification of documents** - court order requiring production of specific documents
   - **Formal calls to admit** - requests to admit facts under court rules
   - **Chapter 4.1 Court of Session** - preliminary step orders for pre-litigation investigation
   - In practice, most fact-gathering is done through precognitions (witness interviews not on oath), recovery of documents, and expert reports.

2. **No 25-Question Default Limit**: The US FRCP 33(a)(1) 25-interrogatory limit has no Scottish equivalent. However, court control over procedure means most written questions require court approval or agreement of parties.

3. **Court Systems**: Court of Session (Edinburgh) for high-value claims; Sheriff Court (local) for lower-value claims; Simple Procedure for claims up to £5,000.

4. **No FRCP**: There is no single equivalent to the US Federal Rules of Civil Procedure. Rules are in the Court of Session Rules 1994 (as amended) and Sheriff Court Ordinary Cause Rules 1993 (as amended). Simple Procedure has its own simplified rules.

5. **No US-Style Verifications**: Witness statements in Scottish procedure take the form of affidavits or precognitions. There is no equivalent of the US interrogatory verification requirement with jurat.

6. **Cost Consequences**: The general rule in Scotland is that each written step in the process attracts expenses (costs) that follow the event. Aggressive or unnecessary written questions may result in an adverse expenses award against the party propounding them.

### Flagged Concepts with No Direct Scottish Equivalent

- **US Interrogatories (FRCP 33)**: No direct equivalent. The closest mechanisms (commission and diligence, specification of documents) are more limited and typically require court supervision.
- **25-Question Limit (FRCP 33)**: No equivalent rule in Scotland.
- **Contention Interrogatories**: Not available as a standalone mechanism in Scottish procedure.
- **Meet-and-Confer Obligation (FRCP 26(f))**: No direct Scottish equivalent. Pre-trial case management conferences exist but have different scope.
- **Privilege Logs**: Scottish practice is less formalised, claims of confidentiality / legal professional privilege are typically made in correspondence or in the response itself without a standardised log format.
- **US Federal Rules of Civil Procedure**: Scottish rules are court-specific (Court of Session, Sheriff Court, Simple Procedure) and codified in statutory instruments, not a single federal code.
- **US Magistrate Judge Role**: Scottish procedure has no equivalent to US magistrate judges for discovery supervision. Commercial Court judges in the Court of Session exercise active case management.

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
