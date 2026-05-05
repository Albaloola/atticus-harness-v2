---
name: case-viability-report
language: en
description: Produces internal case viability and conflict check memos for personal injury litigation intake. Screens conflicts, assesses liability and damages, checks statute of limitations, and outputs an accept/decline recommendation. Use when evaluating new PI intake, running conflict checks, assessing case merit pre-filing, or preparing acceptance memos. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
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

Internal privileged memo evaluating a prospective PI matter for case acceptance, conflict clearance, and resource commitment.

## Prerequisites

- **Intake summary** - client name, adverse parties, incident date, injuries, objectives
- **Supporting documents** - police reports, medical records, photos, insurance info
- **Firm conflict database** - current/former clients, pending matters
- **Fee parameters** - contingency rates, cost-advance policy, minimum case value thresholds

## Quick Start

1. Gather intake summary and supporting documents
2. Run conflict screen against all parties and entities
3. Assess legal viability: claims, defenses, SOL, procedural bars
4. Project damages and calculate cost-benefit
5. Issue recommendation: ACCEPT / ACCEPT WITH CONDITIONS / DECLINE / DEFER
6. Draft executive summary with privilege designation

## Memo Sections

### 1. Factual Summary

- Chronological narrative of key events, All parties identified (client, adverse parties, insurers, witnesses, related entities)
- Client's stated objectives, Gap analysis:

| Missing Information | Impact (H/M/L) | Resolution Path |
|---|---|---|
| {item} | {level} | {method} |

### 2. Conflict of Interest Analysis

Screen every person/entity against firm databases.

**Check:** prospective client + affiliates, all adverse parties (named and anticipated), insurers/adjusters, key witnesses, subject matter overlap.

**For each conflict found:**

| Factor | Analysis |
|---|---|
| Type | Direct (Rule 1.7) / Former client (Rule 1.9) / Imputed (Rule 1.10) / Prospective (Rule 1.18) |
| Affected matter | {identify specifically} |
| Waivable? | Yes, informed written consent / No - {reason} |
| Proposed cure | Screening wall / Client consent / Decline |

If clear: state affirmatively with search date range and scope. Flag jurisdiction-specific RPC variations with [VERIFY].

### 3. Legal Viability

**A. Causes of Action** - For each claim, table elements vs. supporting/undermining facts and available evidence.

**B. Anticipated Defenses** - For each defense (comparative negligence, assumption of risk, etc.), assess likelihood, impact, and mitigation strategy.

**C. Statute of Limitations**

- Applicable statute with citation, Accrual date and basis, Tolling doctrines (discovery rule, minority, incapacity)
- **Filing deadline: {exact date}**
- Urgency: > 6 months / < 6 months / < 90 days / EXPIRED

**D. Procedural Requirements**

- [ ] Subject matter and personal jurisdiction
- [ ] Venue proper
- [ ] Administrative exhaustion (if applicable)
- [ ] Pre-suit notice requirements (e.g., government tort claims)
- [ ] Mandatory arbitration clauses
- [ ] Standing confirmed

**E. Red Flags**

- [ ] Client credibility concerns
- [ ] Prior claims / litigation history
- [ ] Social media contradicting injury claims
- [ ] Pre-existing conditions overlapping claimed injuries
- [ ] Adverse precedent in controlling jurisdiction
- [ ] Uncooperative or unreachable client
- [ ] Criminal exposure or parallel proceedings
- [ ] Gaps in medical treatment

### 4. Financial Viability

**Damages projection** - estimate low/mid/high for: past medical specials, future medical, lost wages, loss of earning capacity, pain & suffering, punitive (if applicable).

**Cost-benefit analysis** - projected attorney hours, fee arrangement, hard costs (filing, depositions, experts), total firm investment, expected recovery × probability of success, ROI ratio.

**Collectability** - assess insurance coverage, defendant assets, judgment-proofing concerns.

**Resource check:**

- [ ] Firm has subject-matter expertise
- [ ] Staffing capacity available
- [ ] Co-counsel needed? (if so, identified)
- [ ] Strategic value beyond fees (reputation, referral source, precedent)

### 5. Recommendation

One of:

- **ACCEPT** - conditions listed
- **ACCEPT WITH CONDITIONS** - specify prerequisites (waivers, retainer, investigation)
- **DECLINE** - specific reasons + referral suggestions
- **DEFER** - specify information needed + decision deadline

Rationale: synthesize conflict status, legal merit, financial viability, and strategic alignment in 2-3 paragraphs.

### 6. Executive Summary

- 3-5 bullet key findings, One-sentence recommendation, Report date, preparing attorney, contributors, Sources consulted and search scope, Time-sensitive deadlines flagged, Privilege designation: *Attorney-Client Privileged / Work Product*

## Pitfalls & Rules

- **Candor** - internal document; sugar-coating risks harms the firm
- **SOL precision** - calculate deadlines exactly; flag < 90 days as urgent
- **Collectability** - never assume; verify insurance and assets
- **Ethics rules** - apply Model Rules of Professional Conduct; mark jurisdiction-specific variations with [VERIFY]
- **Minimum case value** - for contingency fees, apply firm threshold before recommending acceptance
- **Citations** - mark any unverifiable legal citation with [VERIFY]
- **Privilege** - state "Attorney-Client Privileged / Work Product" explicitly in output

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
