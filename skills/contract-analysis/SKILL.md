---
name: contract-analysis
language: en
description: Analyzes contracts to identify key terms, obligations, risks, and negotiation opportunities. Produces structured risk assessments with executive summary, provision review, risk matrix, and prioritized recommendations. Use when reviewing agreements before execution, during negotiation, at closing, or for compliance monitoring. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Analysis

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

Extracts and evaluates material provisions, risk allocations, and obligations across one or more contracts to support negotiation, execution, or remediation decisions.

## Prerequisites

Before starting, collect:

1. **Contract document(s)** - executed or draft; note which
2. **Client role** - which party the analysis favors (or neutral)
3. **Jurisdiction** - governing law if known; flag if absent
4. **Scope** - full review, specific provisions, or multi-contract comparison

## Workflow

### 1. Executive Summary

- Parties, effective date, term, governing law (1 to 2 sentences each)
- Top 3 to 5 critical risks requiring immediate attention, Overall favorability: favorable / balanced / unfavorable

### 2. Key Provisions Matrix

For each provision, record section number, summary, risk level (High/Med/Low), and notes.

Provisions to evaluate:
- **Term & Termination** - cure periods, notice, convenience rights
- **Payment Terms** - timing, late fees, set-off rights
- **Scope / Deliverables** - ambiguity, change-order mechanics
- **Indemnification** - mutual vs. one-sided, carve-outs
- **Limitation of Liability** - cap amount, excluded damages
- **Warranty / Disclaimer** - express vs. implied, remedy limits
- **Insurance** - required types, minimums
- **IP Ownership** - work-for-hire, license-back, background IP
- **Confidentiality** - term, carve-outs, residuals clause
- **Dispute Resolution** - arb vs. litigation, venue, fee-shifting
- **Auto-Renewal** - notice window, opt-out mechanics
- **Assignment / Change of Control** - consent requirements
- **Force Majeure** - scope, notice, extended FM termination right
- **Governing Law / Venue**

### 3. Risk Matrix

For each issue found, record section, severity, likelihood, and recommended action.

Risk categories:
- **Ambiguity** - language supporting multiple interpretations
- **Asymmetry** - one-sided obligations or liability allocation
- **Gaps** - material matters left unaddressed
- **Conflicts** - internal inconsistencies between sections
- **Unenforceability** - provisions likely void under applicable law

### 4. Comparative Analysis *(multi-contract only)*

Table comparing key terms across agreements; flag deviations from market standard.

### 5. Prioritized Recommendations

Rank issues by priority (Critical → High → Moderate) with provision reference, issue description, and proposed fix for each.

## Checks

- Cite exact section numbers and quote key language verbatim, Flag auto-renewal clauses with short opt-out windows as high-priority regardless of other factors, Note all cross-references to external documents, exhibits, or incorporated standards, treat as additional obligations, For ambiguous provisions, state the full range of plausible interpretations and implications, Mark `[VERIFY]` on any statutory or case citations, do not assess enforceability under specific state law without verifying current precedent, UCC Article 2 applies to goods; common law governs services, note if contract mixes both without specifying, Flag non-compete, non-solicit, and liquidated damages clauses for separate enforceability review under applicable state law

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
