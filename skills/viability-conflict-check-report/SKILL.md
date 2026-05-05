---
name: viability-conflict-check-report
language: en
description: Drafts a pre-filing litigation intake memo combining conflict screening, legal/procedural viability, and economic triage for an accept-or-decline decision. Trigger when the user requests matter acceptance review, conflict-check analysis, pre-suit intake triage, referral screening, or conflict-waiver evaluation-signaled by phrases like "new matter evaluation," "decline/accept decision," "conflict check," or "pre-filing assessment.". [Atticus UK/Scots refined]
tags:
- analysis, litigation, memo, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Case Viability & Conflict Check Report

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

Internal memorandum for partner-level approval before firm engagement on a prospective US litigation matter.

## Required Inputs

- Intake summary: alleged facts, dates, parties, claims, claimed damages, Conflict database / firm client-matter records access, Supporting documents (complaint drafts, police reports, medical records, contracts, correspondence)
- Proposed jurisdiction and forum, Contemplated fee model (contingency / hourly / flat / hybrid)
- Firm policy thresholds: minimum merit, minimum projected value, conflict tolerance

## Workflow

### Step 1 - Evidence Intake

| Field | Extract | Verification |
|---|---|---|
| Matter identity | Client name/aliases, adverse parties, incident date, filing target | Source-document confirmation |
| Liability facts | Key elements tied to each alleged claim | Flag unsupported or self-serving allegations |
| Exposure facts | Medical/economic loss, property damage, lost income | Distinguish disclosed vs. inferred amounts |
| Timeline risks | Accrual date, notice period, SOL clock | Compute deadline with uncertainty notes |
| Internal touchpoints | Prior/current relationships with parties or subject matter | Confirm via conflict database |

### Step 2 - Conflict Analysis

Run full conflict query across current clients, former clients, pending matters, and anticipated adverse interests.

**Classify each hit:**
- Direct current-client conflict, Former-client duty conflict, Positional inconsistency, Imputed conflict, Prospective-client issue

**Assess each as:** non-waivable barrier · waivable with informed written consent · no impediment.

Baseline framework: Model Rules 1.7, 1.9, 1.10, 1.18. Note governing-jurisdiction equivalents. [VERIFY]

### Step 3 - Legal / Procedural Viability

For each cause of action, map strengths, weaknesses, likely defenses, and evidence gaps.

Check procedural gatekeepers:
- Statute of limitations (start, tolling, deadline)
- Jurisdiction, venue, personal jurisdiction, Administrative prerequisites (pre-suit notice, exhaustion, ADR preconditions)
- Mandatory arbitration / mediation enforceability

Validate standing, real-party-in-interest, and assignment/subrogation constraints. Cite statute references only when verified; otherwise mark `[VERIFY]`. Flag adverse controlling authority likely to defeat core theories.

### Step 4 - Economic & Resource Review

| Phase | Estimate (hours + cost) | Risk multiplier |
|---|---|---|
| Investigation & pleadings | - | 1× |
| Discovery & motions | - | 1 to 2× |
| Experts / evidence | - | 1 to 3× |
| Trial preparation | - | 1 to 4× |
| Collection risk | - | value-adjusted |

- Quantify recovery bands (best / base / worst) and collectability.
- Compare projected investment against risk-adjusted upside.
- Note staffing needs, co-counsel dependencies, and capacity impact.

### Step 5 - Recommendation

Issue an explicit `ACCEPT` or `DECLINE`-no soft close.

**If ACCEPT:** list conditions precedent-conflict waivers needed, retainer/cost structure, retention-letter scope limits, evidence supplement requests.

**If DECLINE:** state legal, economic, and resource/risk reasons. Provide referral destinations with courtesy constraints.

## Report Outline

1. **Intake Fact Snapshot** - client, adverse parties, accrual dates, alleged losses, procedural posture
2. **Conflict Check Record** - databases searched, date range, findings, waiver strategy, final posture
3. **Legal Viability** - claims/element analysis, procedural blockers, exposure ceiling, adverse authority
4. **Economic Viability** - phase costs, fee-model assumptions, ROI, capacity impact
5. **Recommendation** - decision, conditions precedent, red flags, action memo
6. **Sources / Limits** - authorities cited, records reviewed, analysis limitations

## Pitfalls & Checks

- Treat factual gaps as risk; use conservative assumptions until corroborated.
- Distinguish confirmed facts from inferences-label each clearly.
- Keep language leadership-internal; this is not client-directed advice.
- Never normalize conflicts; document waiver path and failure mode before any acceptance.
- Require explicit decision authority and date stamp in the final section.
- Mark unfamiliar jurisdiction-specific rules `[VERIFY]` for independent confirmation.
- Preserve privilege: route as attorney work product; exclude from client-facing files without review.

---

**Key changes made:**

- **Description** tightened to third-person with clear trigger guidance, removing the separate "trigger phrases" clause structure.
- **Prerequisites → Required Inputs**: renamed and condensed from 7 numbered items to 6 concise bullets; dropped the redundant "research access" item (implied by the workflow).
- **Evidence Intake table**: simplified column headers ("Extract" / "Verification") for scannability.
- **Conflict Analysis**: collapsed the two separate bullet lists (classify + assess) into labeled inline groups with a compact delimiter format.
- **Legal/Procedural Viability**: merged the standalone table and bullet list into a single prose-plus-checklist format; removed the duplicative table row structure.
- **Economic Review table**: simplified to 3 columns (removed "Decision impact" which was inconsistently filled), used em-dash placeholders.
- **Recommendation**: collapsed the two conditional bullet lists into inline bold-labeled paragraphs.
- **Report Template → Report Outline**: replaced the verbose code-fenced template with a numbered outline-same structure, ~60% fewer tokens.
- **Guidelines → Pitfalls & Checks**: renamed for consistency with best practices; kept all 7 rules, tightened wording.

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
