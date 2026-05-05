---
name: amicus-coalition
language: en
description: Manages end-to-end workflow for multi-organisation intervener coalition submissions in Scottish and UK appellate courts. Covers single-pen drafting governance, position alignment, conflict resolution, documented sign-offs, UK Supreme Court Rules 23-25 / Practice Direction 7 declarations, Practice Direction 8 interest disclosures, cover formatting for multiple interveners, and compliant filing. Use when coordinating coalition intervener submissions, managing sign-offs, drafting joint third-party submissions, handling multi-intervener filing, or resolving inter-organisation conflicts. Triggers on phrases like "coalition brief," "12 orgs joining this intervention," or "coordinate the third-party submissions." [SCOTS ADAPTED]. [Atticus UK/Scots refined]
tags:
- SCOTS [SCOTS]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Intervener Coalition Management [SCOTS]

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

Coordinates multi-organisation intervener submissions from intake through filing. Prevents the most common coalition failures: unauthorised organisation listings, missed sign-off deadlines, incomplete disclosures, version proliferation, and unresolved policy disagreements.

## Quick Start [SCOTS]

1. Gather intake (Checkpoint A below)
2. Establish governance and backward timeline from filing deadline
3. Align positions via Issue-Framing Note
4. Draft under single-pen authority with controlled circulation
5. Resolve conflicts; escalate if needed
6. Execute two-step sign-off protocol
7. Verify disclosures, format cover/caption, file

**Defaults** (when user says "use defaults" or "just draft"): forum-agnostic draft with `[VERIFY FORUM]` markers; single-pen authority with lead counsel; sign-off cutoff 48 hours before filing deadline.

## Checkpoint A: Pre-Draft Intake

Gather before drafting. Do not proceed until collected or gaps flagged.

1. **Docket** - court, case number, caption, all deadlines
2. **Parties' submissions** - for the pursuer (appellant), defender (respondent), and reply (as available); key orders and interlocutors
3. **Forum rules** - word/page limits, disclosure requirements, permission/leave rules, cover formatting, e-filing specs `[VERIFY per forum]`
4. **Coalition roster** - full legal names, registered office or jurisdiction of incorporation, display names, entity types
5. **Approval pathways** - authorised signatory per organisation, internal review chain, lead time
6. **Red lines** - positions each organisation cannot support or endorse
7. **Counsel-of-record** - names, Faculty of Advocates / Law Society of Scotland registration numbers, addresses; rights of audience needs
8. **Disclosure inputs** - per UK Supreme Court PD 7: who authored written case, who funded the intervention; per PD 8: any direct interest in outcome
9. **Posture** - supporting which party (or neither); consent status or need for leave petition

## Core Workflow

### 1. Governance and Timeline [SCOTS]

| Element | Action |
|---|---|
| Single-pen authority | Lead counsel controls narrative; coalition provides input, not co-drafting |
| Authority map | Per organisation: who commits to join, who approves final text, who speaks publicly |
| Backward timeline | Filing deadline → sign-off cutoff → final proof → near-final draft → outline |
| Hard cutoff | No sign-off by cutoff = excluded. No "pending approval" listings |

Send Workflow Memo at kickoff requiring: (1) one consolidated comment set by deadline, (2) written authorisation by cutoff. State that absent authorisation, the organisation will not be listed.

### 2. Position Alignment

1. Gather each organisation's desired emphasis (economic, technical, historical, policy)
2. Cross-check against parties' submissions to eliminate duplication
3. Produce **Issue-Framing Note** (1-2 pages): proposed argument headings, key factual propositions with citations, empirical/technical materials, posture
4. Solicit red lines in writing before full draft

### 3. Draft Management

| Rule | Rationale |
|---|---|
| One official draft, one sender | Prevents version proliferation |
| Naming: `IntervenerCoalition_WrittenCase_Draft[N]_YYYYMMDD` | Version integrity |
| One point person per organisation, one consolidated comment set | Avoids conflicting markups |
| Triage: (a) legal/argument, (b) factual/citation, (c) policy/branding | Legal clarity governs over branding |
| All markup confidential (Scottish Code of Conduct / Faculty Code) | No forwarding outside coalition |
| Late new sections require equal-length cut | Word-limit discipline |

### 4. Conflict Resolution

**Conflict types:**
- **Core** (organisation cannot be associated with the position) - narrow the position, modularise language, or allow withdrawal
- **Expressive** (emphasis/phrasing disagreement) - favour legal clarity and court credibility

**Compromise patterns:**
- Statutory avoidance: resolve on statutory grounds; address constitutional only if reached, Narrow consensus: "The interveners take no position on the outer bounds of [test], but under any formulation, [party] prevails"
- Procedural framing: reframe around procedural deficiency vs. substantive policy

**Escalation:** Written issue log (contested text, positions, proposed resolution, deadline) → lead advocate → supported party's counsel if needed. Treat log as privileged work product.

Never draft language suggesting consensus where none exists (Scottish Code of Conduct / Faculty of Advocates Code of Conduct).

### 5. Sign-Off Protocol

**Two-step authorisation:**

1. **Join authorisation** on near-final draft, written confirmation from authorised person that organisation joins the written case substantially as circulated, with counsel authorised for non-substantive edits
2. **Final confirmation** on filing version (if time permits)

| Rule | Detail |
|---|---|
| Written only | No verbal approvals |
| Verify signatory authority | Policy staff enthusiasm ≠ institutional authorisation |
| Track entity names precisely | Distinguish association from its foundation |
| Re-confirm after substantive changes | Post-sign-off changes require new authorisation |
| Default to exclusion | Missed cutoff = not listed |

### 6. Filing [SCOTS]

**Cover format** `[VERIFY per forum]` [SCOTS]:

**UK Supreme Court (per PD 16):**
```
WRITTEN CASE OF [LEAD INTERVENER] AND [N] OTHER ORGANISATIONS
INTERVENING IN SUPPORT OF [PARTY]
```
Cover colour: buff (greyish-yellow) for intervener written case.

**Court of Session (Scotland):**
```
NOTE OF ARGUMENT FOR [LEAD INTERVENER] AND [N] OTHER ORGANISATIONS
INTERVENING IN SUPPORT OF [PARTY]
```

**Disclosures checklist** [SCOTS]:
- [ ] PD 7 authorship and funding source declaration, every member (replaces FRAP 37.6)
- [ ] PD 8 direct interest in outcome declaration, every intervening organisation (replaces FRAP 26.1)
- [ ] Consent of parties stated, or petition for leave attached

**Filing checklist** [SCOTS]:
- [ ] Permission/leave requirements verified `[VERIFY]`
- [ ] Service requirements confirmed (all parties, method, paper copies)
- [ ] Final cite-check, every citation verified
- [ ] All listed interveners have timely written authorisation
- [ ] Counsel info complete; rights of audience satisfy forum requirements
- [ ] PDF requirements met (bookmarks, fonts, OCR, colour covers where applicable)
- [ ] Word/page count within limits
- [ ] Intervener list consistent across cover, interest statement, signature block, disclosures

**Internal filing certification** - record: authorisations received, organisations removed for missed cutoff, final word/page count, disclosure verification, filing method.

## Checkpoint B: Post-Draft Review [SCOTS]

After delivering initial draft, confirm:

1. All organisations confirmed sign-off authority and review timeline?
2. Remaining red-line conflicts needing escalation?
3. Cover/caption format matches forum requirements?
4. All disclosure inputs (authorship, funding, direct interest) collected from every member?

## Jurisdiction Notes [SCOTS]

| Forum | Key Requirements |
|---|---|
| **UK Supreme Court** | Rules 23-25, Practice Direction 7 (intervention), PD 8 (interest disclosure), PD 16 (cover colours, buff for interveners); permission or consent required; strict time limits per PD 7 para 7.2; Digital Case Portal for e-filing |
| **Court of Session, Outer House** | Rules of the Court of Session 1994, Chapter 58 (third-party intervention); petition for leave by minute; declaration of interest required; Civil Online Portal for e-filing |
| **Court of Session, Inner House** | Act of Sederunt (Rules of the Court of Session) 1994, Chapter 58; reclaiming motions; intervention by petition to the Inner House Bill Chamber |
| **Sheriff Appeal Court (Scotland)** | Sheriff Appeal Court Rules; written submissions (note of argument) with supporting argument; permission required |
| **Sheriff Court (Ordinary Cause / Simple Procedure)** | Ordinary Cause Rules 1993, rule 15.1 (motion for leave); Simple Procedure Rules, rule 3.4 (third-party notice); varying local practice `[VERIFY]` |
| **Upper Tribunal (UK)** | Tribunal Procedure (Upper Tribunal) Rules 2008, Rule 5(3)(e); discretionary intervention; must show sufficient interest |
| **Scottish Lands Tribunal** | Lands Tribunal for Scotland Rules 2003; intimation to respondents; minute of appearance |

Always retrieve and cite current official rules for the specific forum. Flag all unverifiable procedural statements with `[VERIFY]`.

## Common Pitfalls [SCOTS]

- **Unauthorised listing** - never list an organisation without timely written authorisation from a verified signatory
- **Disclosure gaps** - collect authorship/funding info and interest declarations from every member, not just lead organisation
- **Name mismatches** - verify entity names character-by-character across all written case sections
- **Fabricated consensus** - do not attribute positions to organisations that have not approved them (Scottish Code of Conduct / Faculty of Advocates Code of Conduct)
- **Restating party submissions** - written case must deliver unique contribution the parties' submissions do not
- **Hallucinated rules** - never fabricate forum rules or filing requirements; use `[VERIFY]` for unconfirmed details
- **Wrong cover colour** - UK Supreme Court PD 16 specifies buff for interveners; non-compliance risks rejection

## Guidelines [SCOTS]

- **Ethics**: Treat each intervener as client for conflicts (Scottish Code of Conduct for Solicitors, rules on confidentiality and conflict of interest) and confidentiality; check conflicts before accepting any organisation
- **Citations**: Every non-record factual claim needs a pinpoint citation; flag unverifiable with `[VERIFY]`
- **Adversarial lens**: Before filing, ask whether opponent could move to strike based on misstatements, undisclosed funding, or non-compliance
- **Anti-hallucination**: Use `[VERIFY]` for all unconfirmed procedural details
- **Solicitor/advocate review required**: All outputs require qualified Scottish solicitor or Faculty of Advocates review before filing

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law

**Changes made:**
- "amicus curiae" → "third-party intervener" / "intervener" (UK terminology)
- "brief" → "written case" (UK Supreme Court) or "note of argument" (Scotland) or "skeleton argument" (England)
- "motion for leave" → "petition for leave to intervene" (Scotland); "application for permission to intervene" (UK Supreme Court / England)
- "plaintiff" → "pursuer"; "defendant" → "defender"
- "appeal" → "reclaiming motion" (Scotland specific)
- "injunction" → "interdict"; "tort" → "delict"
- "class action" → "group proceedings"
- "certiorari" → "permission to appeal" / "leave to appeal"
- "e-filing" → "Digital Case Portal" (UK Supreme Court) / "Civil Online Portal" (Court of Session)
- "FRAP 29" → UK Supreme Court Rules 23-25, Practice Direction 7
- "FRAP 26.1 corporate disclosure" → replaced with UK Supreme Court Practice Direction 8 (direct interest disclosure, no direct corporate disclosure equivalent exists in UK courts)
- "FRAP 37.6 authorship/funding disclosure" → replaced with UK Supreme Court Practice Direction 7 (declaration of funding source and authorship)
- "Model Rules of Professional Conduct" → Scottish Code of Conduct for Solicitors / Faculty of Advocates Code of Conduct
- "Federal circuits" → replaced with UK Supreme Court, Court of Session (Outer/Inner House), Sheriff Appeal Court
- "State appellate courts" → Sheriff Appeal Court, Court of Session Inner House
- "Admin tribunals" → UK Upper Tribunal, Scottish Lands Tribunal
- "US Supreme Court" → UK Supreme Court (different rules: Rule 37 → Rules 23-25; green cover → buff cover)
- Cover colours: green cover for merits amicus (US) → buff cover for intervener written case (UKSC PD 16)
- "Consent/leave rules" → most Scottish/UK interventions require leave (not consent-based like US federal circuits)

**Key Scottish/UK considerations:**
- Permission to intervene is generally required in the UK; few forums allow intervention solely by consent (unlike US federal appellate courts)
- The UK Supreme Court's Rules 23-25 provide for intervention either with party consent (Rule 23) or by application (Rule 24); timing constraints are strict, Court of Session practice: third-party interventions are governed by Chapter 58 of the Rules of the Court of Session 1994
- Scotland-specific: the Sheriff Appeal Court deals with appeals from sheriff court decisions, while the Court of Session Inner House deals with appeals from the Outer House, No direct FRAP 26.1 equivalent: UK Supreme Court PD 8 requires each intervener to disclose any direct financial or other interest in the outcome, Funding disclosure (UKSC PD 7) is mandatory and must identify the source of funding for the intervention, this catches the same concerns as US FRAP 37.6
- Professional conduct: governed by the Scottish Code of Conduct for Solicitors (2023) or the Faculty of Advocates Code of Conduct (2024) in Scotland; both impose duties of confidentiality and candour to the court, Rights of audience: only solicitors with extended rights, advocates, or solicitor-advocates may appear in Scottish superior courts; English solicitors/barristers must instruct Scottish agents, Citation practice: UK courts use neutral citation (e.g. [2024] UKSC 1), official session cases (e.g. 2024 SC 1), and law reports (e.g. SLT, SCLR, WLR)
- The term "amicus curiae" is understood in academic and historical contexts in the UK but the correct procedural term is "intervener" or "third-party intervener"

**Form references:** See `scots-forms/README.md` for specific forms, practice directions, and procedural documents for each forum.

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
