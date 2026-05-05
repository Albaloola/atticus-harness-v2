---
name: ca-privilege-log
language: en
description: Generates California-compliant privilege logs for withheld or redacted discovery materials under CCP 2031.240. Use when the user mentions privilege log drafting, California privilege log, CCP 2031.240, attorney-client privilege logging, work product designation, Evid. Code 952/954, CCP 2018.030, redaction logging, meet-and-confer privilege disputes, waiver analysis, common interest doctrine, or asks for help documenting withheld documents. Also trigger on references to Hernandez v. Superior Court, Costco Wholesale, or Wellpoint. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, disclosure, evidence, procedure, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# California Privilege Log

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

Produces defensible privilege logs meeting *Hernandez v. Superior Court* (2003) 112 Cal.App.4th 285 [VERIFY] specificity requirements, descriptions sufficient to assess the privilege without revealing privileged substance. Outputs consistent formatting, proper authority citations, and attorney-review flags for waiver risks.

## Quick Start

1. Gather intake inputs (Checkpoint A below)
2. Confirm forum and any court-ordered format
3. Normalize metadata and classify privilege basis per item
4. Draft log entries using standard columns and safe description templates
5. Flag waiver risks in a separate attorney-only section
6. Run quality audit before delivery

## Checkpoint A: Pre-Draft Intake

Ask every time unless user says "use defaults" or "just draft":

1. **Discovery context** - RFP set, request text, objections, ESI protocol/CMO/stipulation on format
2. **Document population** - withheld and redacted items with stable IDs/Bates, family links, production status
3. **Metadata** - date, author, recipients (TO/CC/BCC), doc type, subject/file name, custodian
4. **Roles list** - name-to-role map (client, in-house, outside counsel, consultants, third parties)
5. **Privilege basis** - ACP, WPD absolute, WPD qualified, common interest/joint defense (with proof)
6. **Litigation timeline** - trigger facts for "anticipation of litigation" (work product)
7. **Waiver risks** - third-party dissemination, mixed business/legal comms, forwarded chains

**Defaults** (if no response): California state court; attorney-client privilege basis; withheld (not redacted); standard column format. Label defaults clearly.

## Step 1: Confirm Forum and Governing Standard

California state court vs. federal, adapt only if an order or stipulation controls. Identify any court-specific or CMO-mandated format requirements. If federal, adapt to FRCP 26(b)(5)(A) while keeping California privilege elements.

## Step 2: Normalize Metadata

Ensure consistent names, roles, dates, and family relationships across all entries. Split attachments as separate entries unless the protocol allows categorical treatment.

## Step 3: Classify Privilege Basis

| Label | Use When | Authority |
|---|---|---|
| Attorney-Client Privilege | Confidential client-lawyer communication for legal advice | Evid. Code §§ 952, 954 |
| Work Product, Absolute | Attorney impressions, opinions, legal research, theories | CCP § 2018.030(a) |
| Work Product, Qualified | Other attorney work product | CCP § 2018.030(b) |
| Joint Defense / Common Interest | Shared legal strategy with aligned parties | Require agreement [VERIFY] |

Do not over-assert both ACP and WPD without factual support for each.

## Step 4: Draft Log Entries

### Required Columns

| Column | Required | Notes |
|---|---|---|
| Entry ID / Bates | Yes | Unique per document or family item |
| Date | Yes | "Undated" if unknown |
| Document Type | Yes | Email, memo, draft, notes, etc. |
| Author (Name + Role) | Yes | Use role mapping |
| Recipients TO (Name + Role) | Yes | Separate TO/CC/BCC |
| Recipients CC/BCC | If any | Include third parties explicitly |
| Description | Yes | Functional, non-substantive |
| Privilege Basis | Yes | ACP, WPD-Abs, WPD-Qual, or combined |
| Legal Authority | Yes | Cite relevant statutes |
| Production Status | Yes | Withheld or Redacted |
| RFP / Request No. | If tracked | Link to request |
| Notes | Optional | Family/attachment links, redaction note |

### Safe Description Templates

```text
Confidential email between [Client Role] and [Counsel Role] requesting or providing legal advice regarding [high-level issue]; withheld under attorney-client privilege (Evid. Code §§ 952, 954).

Internal memorandum prepared by [Counsel Role] at counsel's direction in anticipation of litigation regarding [high-level issue], reflecting counsel's impressions and legal theories; withheld as work product-absolute (CCP § 2018.030(a)).

Draft [document type] prepared for attorney review and legal advice concerning [high-level issue]; produced with redactions for privileged portions; redactions based on attorney-client privilege (Evid. Code §§ 952, 954).
```

### Description Checklist

- [ ] Identify document type and general purpose
- [ ] Identify roles of participants (client, in-house, outside counsel)
- [ ] State legal purpose at high level (request/provision of legal advice; prepared for litigation)
- [ ] Avoid quoting privileged subject lines or legal theories
- [ ] Specify redacted vs. withheld

## Step 5: Flag Waiver and Risk Issues

Generate a separate **attorney-only** review section (non-produced):

- Third-party recipient present → confirm necessity under Evid. Code § 952
- Forwarded to non-legal distribution list → assess waiver under Evid. Code § 912
- Mixed business/legal purpose → confirm dominant purpose (*Costco Wholesale Corp. v. Superior Court* (2009) 47 Cal.4th 725 [VERIFY])
- Work product claimed before litigation trigger → confirm timeline, Expert involvement → confirm designation and potential waiver

## Checkpoint B: Post-Draft Review

After delivering the initial log, ask:

1. Are role assignments accurate for all participants?
2. Any entries needing privilege basis reconsideration (e.g., mixed business/legal)?
3. Should any withheld documents be redacted instead of fully withheld?
4. Does the format match any court order or stipulation?

If no response, recommend reviewing waiver-risk flags first and proceed if authorized.

## Quality Audit

Before finalizing, verify:

- [ ] Every entry has a unique ID/Bates number
- [ ] All participants mapped to roles consistently
- [ ] Descriptions specific enough under *Hernandez* [VERIFY] without revealing substance
- [ ] Privilege basis supported by facts, not boilerplate
- [ ] Redacted vs. withheld correctly designated per entry
- [ ] Attachments treated as separate entries (unless protocol allows grouping)
- [ ] No privileged subject lines, legal theories, or settlement positions exposed
- [ ] Waiver risks flagged in attorney-only section
- [ ] All statutory citations verified or marked `[VERIFY]`
- [ ] Format matches any applicable court order or ESI protocol

## Pitfalls

- **Never invent** metadata, roles, or privilege bases, stop and request missing inputs
- **Never expose** privileged substance, legal strategy, or settlement positions
- **Prefer redactions** over complete withholding when only part is privileged
- **Consistency matters** - inconsistent naming/formatting signals weakness to opposing counsel
- **Burden framework** - apply *Wellpoint Health Networks v. Superior Court* (1997) 59 Cal.App.4th 110 [VERIFY]
- **Anti-hallucination** - all case citations must be verified or flagged `[VERIFY]`; never generate unverified case law
- **Attorney review required** - all output must be reviewed by supervising counsel before service; comply with Cal. Rules of Prof. Conduct 1.1, 1.6, 3.3 [VERIFY]

## Scotland/UK Adaptation

### Core Concept Conversion

| US Term | Scotland/UK Equivalent |
|---|---|
| California CCP 2031.240 (privilege log) | No direct Scottish equivalent. Use **specification of documents** with privilege claims asserted in the form of answers / objections. |
| Attorney-Client Privilege | **Legal advice privilege** (confidential communications between solicitor and client for legal advice) - *Three Rivers (No. 6)* [2004] UKHL 48 |
| Work Product Doctrine | **Litigation privilege** (documents created for the dominant purpose of litigation once proceedings are in contemplation) |
| Evid. Code §§ 952, 954 | Common law privilege / Solicitors (Scotland) Act 1980 - solicitor-client confidentiality |
| CCP § 2018.030 | Scots common law, litigation privilege / *Walkers v. Clyde* [2023] |
| Common Interest / Joint Defence | **Common interest privilege** - recognised in Scots/UK law (*Buttes Gas & Oil Co v. Hammer (No. 3)* [1981] QB 223) |
| Hernandez waiver standard | Waiver assessed under common law: voluntary disclosure to a third party waives privilege |
| *Costco* dominant purpose test | Dominant purpose test applies for litigation privilege - *Waugh v. British Railways Board* [1980] AC 521 |
| California state court | **Court of Session** (Outer House) or **Sheriff Court** - no formal privilege log requirement |

### Scottish Procedure for Withheld Documents

Scottish civil procedure does not require a separate privilege log equivalent to CCP 2031.240. Instead:

1. **Specification of documents** - the party seeking disclosure serves a specification listing the documents or categories sought
2. **Answers to the specification** - the responding party answers each item, stating whether it is recovered, not held, or privileged
3. **Privilege is asserted by description** - the answer must provide enough information to assess the claim (document type, author, recipient, purpose) without revealing privileged content
4. **No set column format** - there is no statutory template; the court may order a schedule if disputes arise

### Preparing a Scottish Privilege Schedule

If a formal schedule is required (e.g., by court order or for complex disclosure), adapt the US template:

| Column | Adaptation |
|---|---|
| Entry ID | Unique reference (e.g., DOC-001) |
| Document Type | Email, memo, file note, draft |
| Date | Date of creation |
| Author | Name + role (solicitor, client, third party) |
| Recipients | Name + role (identify if third party) |
| Brief Description | "Correspondence between solicitor and client seeking legal advice re [high-level issue]" |
| Privilege Basis | Legal advice privilege / Litigation privilege / Common interest privilege |
| Status | Withheld / Redacted |

### Key Differences for Practitioners

1. **No statutory privilege log** - Scottish courts do not mandate a California-style privilege log. A statement in answers to specification suffices.
2. **Legal advice privilege** - Only covers communications between solicitor and client (not third-party experts) for the purpose of legal advice.
3. **Litigation privilege** - Covers communications with third parties if the dominant purpose is litigation reasonably in contemplation.
4. **Waiver by inadvertence** - Less formalised than US law; disclosure to a third party generally waives privilege.
5. **No Attorney Work Product label** - Scots law uses "litigation privilege" and does not distinguish absolute/qualified tiers.
6. **GDPR/DPA 2018** - Personal data in privileged documents must still be handled under UK data protection law.

### Recommended Approach

- Use this skill's column structure and safe description templates as a drafting guide, but convert citations to Scots/UK authority.
- Replace California Evid. Code / CCP citations with: *Three Rivers* [2004] UKHL 48 (legal advice privilege), *Waugh v. BRB* [1980] AC 521 (dominant purpose), *Buttes Gas* [1981] QB 223 (common interest).
- Flag that Scottish procedure does not require a formal log, the schedule format is a best practice for complex disclosure.
- Mark all case citations as `[VERIFY]` against current UK authority.

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
