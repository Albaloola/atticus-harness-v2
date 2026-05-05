---
name: trade-law-summary
language: en
description: Produces structured U.S.-focused international trade law summaries covering tariffs, customs, export controls, sanctions, trade remedies, and trade agreements. Triggers when asked for international trade law summaries, tariff/customs analysis, export controls, sanctions guidance, WTO/GATT, USMCA, ITAR, EAR, OFAC, or import/export compliance updates. [Atticus UK/Scots refined]
tags:
- regulatory, research, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# International Trade Law Summary

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

Structured, topic-organized trade law reference with compliance impact and case holdings.

## Quick Start

1. Confirm scope: jurisdictions (default US), industries, business activities (import/export/manufacturing/logistics).
2. Set time window (default last 24 months).
3. Identify audience: in-house counsel, compliance, or executive.
4. Note constraints: length limits, must-cover topics, citation format.

## Output Structure

### Cover Block

Title, date, scope, time window, audience. Include disclaimer: not legal advice; confirm jurisdiction.

### Executive Snapshot (1 page max)

5 to 10 bullets: highest-impact changes, enforcement trends, action items.

### Topic Sections

| Topic | Must Include | Practical Output |
|---|---|---|
| Tariffs & Classification | HTSUS framework, classification disputes, binding rulings | Classification checklist, escalation triggers |
| Customs Valuation & Origin | Transaction value, assists, origin rules | Valuation pitfalls, origin substantiation |
| Trade Agreements | USMCA, WTO/GATT, bilateral FTAs | Eligibility steps, rules of origin tests |
| Export Controls | EAR, ITAR, licensing, ECCNs/USML | Licensing flow, red flags |
| Sanctions | OFAC programs, SDN, 50% rule | Screening controls, escalation playbook |
| Trade Remedies | AD/CVD, safeguards, Section 201/232/301 | Exposure map, duty mitigation options |
| Enforcement | CBP, BIS, DDTC, OFAC, DOJ | Penalty ranges, disclosure considerations |
| Supply Chain & Compliance | Recordkeeping, audits, brokers | Minimum control set |

For each topic's key regulations, provide:

    Regime:
    Agency:
    Applicability Trigger:
    Core Obligations:
    Common Pitfalls:
    Recent Updates (date + source):
    Compliance Actions:

### Landmark and Recent Cases (6 to 15)

    Case:
    Court/Tribunal:
    Citation:
    Issue:
    Holding:
    Practical Impact:
    Compliance Takeaway:

Mark uncertain citations with `[VERIFY]`.

### Cross-Regime Interplay

Bullet conflicts/overrides:
- Export controls vs. foreign import rules, FTA preferences vs. tariff schedules, Sanctions vs. otherwise lawful trade, Customs valuation vs. transfer pricing

### Enforcement Trends

5 to 10 bullets: agency focus areas, audit targets, penalty posture.

### Compliance Checklist

- Classification governance, Origin substantiation, Denied-party screening, Licensing and exceptions management, Recordkeeping retention periods, Broker oversight, Voluntary disclosure triggers

### Emerging Issues

Digital trade, climate/labor FTA conditions, national security controls, supply chain traceability. Identify open questions and monitoring triggers.

## Pitfalls and Checks

- Cite primary sources only (statutes, regulations, agency guidance, tribunal decisions). Mark unsure citations `[VERIFY]`.
- State dates explicitly, never use "recent" without a date.
- Keep US focus unless otherwise scoped; clearly label non-US regimes.
- Use neutral, practical language; avoid advocacy.
- Flag where specialized counsel is required (ITAR, sanctions, AD/CVD).
- Add table of contents if output exceeds 6 sections.

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
