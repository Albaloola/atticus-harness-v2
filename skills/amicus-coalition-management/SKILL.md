---
name: amicus-coalition-management
language: en
description: '[SCOTS] Manages amicus curiae briefs for Scottish and UK appellate courts, including multi-organisation co-ordination, single-pen drafting, sign-off procedures, and compliant disclosures. Scottish and UK courts recognise amicus briefs but do not use the US-style coalition management mechanism (FRAP 29 / Supreme Court Rule 37.6); practice is governed by court-specific procedural rules and the Lord President''s practice notes. Use when preparing an amicus brief for the Supreme Court of the United Kingdom, the Court of Session (Inner House), or significant appeals. Keywords: amicus curiae, amicus brief, intervention, Scottish appellate procedure, UK Supreme Court, Court of Session, Inner House. [Atticus UK/Scots refined]'
tags:
- SCOTS, drafting, appellate, regulatory, procedural, scots-law, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Amicus Brief Management, Scotland/UK Adaptation

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

Produces an amicus curiae brief for Scottish or UK appellate courts, with disclosure and procedural compliance under Scottish and UKSC rules.

## Prerequisites

Gather before starting:

1. Court, case number, caption, and all filing deadlines
2. Party written submissions and key orders (issues and timing)
3. Permission to intervene: obtain leave of the court (or invitation) except in UK Supreme Court where applications to intervene are made by motion
4. Disclosure inputs: authorship and funding sources
5. Filing logistics: counsel-of-record, e-filing system (Civil Online / UKSC e-filing), service and format rules
6. Known red lines and policy constraints per organisation (if a coalition)

## Required Artifacts

| Artifact | Purpose | Owner |
| --- | --- | --- |
| Workflow memo | Timeline, draft dates, comment windows, sign-off cutoff | Lead counsel |
| Alignment memo | Thesis, unique contribution, red lines | Lead counsel |
| Master roster | Names, display names, entity type, sources of funding | Coalition manager |
| Comment log | Single consolidated comments per organisation | Coalition manager |
| Issue log | Conflicts and resolutions | Lead counsel |
| Sign-off log | Written authorisations and timestamps | Coalition manager |
| Disclosure text | Authorship and funding statements (court rules) | Lead counsel |
| Filing checklist | Final compliance verification | Lead counsel |

## Core Workflow

Execute in order:

1. **Verify rules** - Court-specific amicus rules: powers of the court to receive amicus submissions, permission requirements, time limits, word limits, format, and disclosure requirements. Flag unconfirmed rules as `[VERIFY]`.
2. **Obtain permission / respond to invitation** - Except in UKSC (application by motion with written case), ensure proper procedural step is taken before the court.
3. **Establish single-pen authority** - Publish workflow memo with hard internal cutoffs.
4. **Align thesis** - Circulate alignment memo; collect red lines before drafting.
5. **Controlled circulation** - One official draft version at a time; strict naming; single comment channel.
6. **Triage conflicts** - Use issue log to resolve or narrow positions without misrepresenting consensus.
7. **Capture sign-offs** - Two-step authorisation; exclude any organisation missing written sign-off by cutoff.
8. **Assemble front matter** - Cover sheet, basis of intervention, interest statement, disclosure of funding, signature block.
9. **Final QC and file** - Confirm leave granted or application lodged; file within required window.

## Timeline (backward from filing deadline)

| Milestone | Timing | Notes |
| --- | --- | --- |
| Alignment memo sent | T-21 to T-14 | Earlier for UK Supreme Court |
| Draft 1 to coalition | T-14 to T-10 | Substantive comments only |
| Draft 2 (near-final) | T-7 to T-5 | Requires join authorisation |
| Final proof | T-3 to T-1 | Non-substantive edits only |
| Filing | T-0 | Confirm leave granted or motion made |

## Key Templates

**Workflow memo**

```text
Subject: Proposed Amicus/Intervention Submissions, Workflow and Deadlines

Please provide one consolidated set of comments by [DATE/TIME].
Please provide written authorisation to join the brief by [DATE/TIME].
Absent written authorisation by that time, your organisation will not be listed.
Only non-substantive edits after authorisation unless re-confirmed.
```

**Comment instructions** - Direct reviewers to: (1) factual accuracy and citations, (2) legal soundness and non-duplication of party arguments, (3) any language preventing sign-on. Stylistic preferences welcome but may be declined for clarity or word limits.

**Sign-off**

```text
On behalf of [Organisation], I confirm I am authorised to approve participation.
[Organisation] joins the amicus submission in [Case Name], substantially in the form circulated on [DATE].
Counsel may make non-substantive edits (formatting, citations, typos) before lodging.
```

**Disclosure statement (Scotland/UK)**

Disclosure requirements vary by court. Common elements:

```text
1. The [name of Applicant] is a [registered charity / company limited by guarantee / other] established for the purpose of [...].
2. The [Applicant] is a non-party to this appeal.
3. No party has contributed to the costs of preparing this application/submission.
4. The [Applicant's] funding is derived from [...] [specify sources].
5. No person other than the Applicant or its counsel has contributed to the preparation of this application/submission.
```

> **Important:** Do not assume standard disclosure text. Check the specific court's practice note or UK Supreme Court Practice Direction.

## Conflict Resolution

| Situation | Resolution |
| --- | --- |
| Disagreement on legal test | Statutory-first framing, constitutional fallback |
| Remedy scope conflict | Narrow proposition or avoid remedy specifics |
| Messaging conflict | Prioritise legal clarity over promotional language |

## Cover and Interest Section

- Single coalition descriptor on cover; full roster on inside page or appendix if long.
- Clearly state basis for intervention (e.g., expertise, public interest remit, relevant legal perspective).
- Keep amicus list consistent across cover, interest statement, and signature block.

## Filing Checklist

- [ ] Permission to intervene obtained (or application lodged) [VERIFY]
- [ ] All listed interveners have written authorisation in sign-off log
- [ ] Disclosure statements complete and verified with court rules
- [ ] Word/page limits, format, and e-filing requirements satisfied
- [ ] Consent or no objection from parties (check if required per court rules)
- [ ] Copies served on all parties

## Pitfalls

- **Never list an organisation** without written authorisation from an authorised signatory.
- **Never allow parallel drafts** or uncontrolled markup distribution.
- **Never introduce late arguments** without removing equivalent length and re-confirming sign-offs.
- **Never guess citations** - flag unverified sources as `[VERIFY]` for counsel review.
- **Treat all drafts and comments as confidential** - obtain permission before sharing beyond coalition.
- **Require counsel review** of all procedural rules and final submissions.

## Scotland/UK Adaptation, Key Differences

### Amicus practice in Scotland

- **Court of Session (Inner House):** The court has an inherent power to receive amicus curiae submissions, exercised sparingly. Usually at the invitation of the court or by application with cause shown.
- **UK Supreme Court:** Rule 15 Practice Direction governs interventions. Applications made by motion; written case required. Amici can be individual or organisational.
- **No FRAP 29** - Scottish and UK courts do not use the US federal appellate rules for amicus practice.

### Key procedural differences

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| FRAP 29 | UK Supreme Court Rule 15 / Court of Session practice notes |
| Supreme Court Rule 37.6 | No equivalent single rule; disclosure per court practice direction |
| FRAP 26.1 corporate disclosure | No equivalent rule; funding disclosure may still be required |
| Motion for leave to file | Application by motion / petition to intervene (UKSC) or letter seeking court's permission |
| Party consent requirement | Not always required; depends on court rules |
| Word limit (FRAP 29: ½ party's limit) | UK Supreme Court: up to 5,000 words (intervener's case); Court of Session: check practice note |
| Amicus cover (colour by side) | No colour coding system |

### Terminology replacements

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| Amicus brief | Submissions of the amicus curiae / intervener's case |
| FRAP 29(a)(4)(E) disclosure | Per court practice direction, authorship and funding |
| Corporate disclosure (FRAP 26.1) | No equivalent; funding transparency may still be required |
| Lead counsel | Counsel for the intervener |
| E-filing (PACER/CM/ECF) | Civil Online (Scotland) / UKSC e-filing |

### Flagged: Concepts with no direct Scottish/UK equivalent

- **No FRAP 29 rule structure** - Scottish and UKSC amicus practice is governed by case-by-case court direction and practice notes, not a single comprehensive appellate rule.
- **No FRAP 26.1 corporate disclosure statement** - no equivalent; however, the UKSC may request or require similar details.
- **No coalition filing as of right** - UK practice tends toward fewer, more selective interventions by established bodies (e.g., Liberty, JUSTICE, EHRC, Law Societies).
- **No colour-coded cover system** - no side-contingent cover colour requirements.
- **No requirement for separate consent or no-consent notation** - consent process varies and may not be required at all.
- **Single-pen drafting** - recommended but less formalised than US appellate practice; Scottish practice tends toward concise written submissions rather than lengthy briefs.

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
