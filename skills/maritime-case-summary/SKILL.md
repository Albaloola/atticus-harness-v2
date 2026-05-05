---
name: maritime-case-summary
language: en
description: Atticus UK/Scots legal skill for maritime-case-summary. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Maritime Case Summary

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

Generates structured analytical summaries of maritime law cases from uploaded judicial opinions, pleadings, or briefs under UK/Scottish maritime law.

## Quick Start

1. Receive case materials (opinion, pleadings, or briefs)
2. Identify case type: collision/allision, cargo damage, personal injury, charter party, lien enforcement, salvage, limitation of liability, or jurisdictional challenge
3. Produce summary following the section order below

## Summary Sections

### 1. Case Caption & Citation

| Field | Content |
|-------|---------|
| Case name | Full caption |
| Citation | OSCOLA format [VERIFY all citations] |
| Court | Scottish Court of Session (Outer/Inner House), Admiralty Court (part of Court of Session), Sheriff Court with admiralty jurisdiction, UK Supreme Court, or Commercial Court (London) |
| Date | Date of decision |
| Maritime subject | Primary area (e.g., collision, cargo, personal injury) |

### 2. Procedural Posture

- Litigation stage and specific motion/appeal, Admiralty jurisdiction basis (Court of Session Admiralty jurisdiction / Sheriff Court with admiralty jurisdiction) - note significance

### 3. Factual Background

- Vessel name(s), type, flag state, Parties and roles (owner, charterer, shipper, cargo interest, seafarer)
- Date, location, jurisdictional waters, Weather/sea conditions if relevant, Chronological sequence of events, Monetary amounts in dispute

### 4. Legal Issues

Frame each issue using UK/Scottish maritime doctrine. Common categories:

| Domain | Key Questions |
|--------|--------------|
| Jurisdiction | Admiralty jurisdiction in Scotland under Administration of Justice Act 1956, Sheriff Court (Scotland) Act 1907; Court of Session Act 1988 |
| Choice of law | General maritime law as part of Scots law vs. foreign law; foreign-flag analysis |
| Collision/allision | Fault allocation under International Regulations for Preventing Collisions at Sea (COLREGS); Scottish approach to apportionment (Law Reform (Contributory Negligence) Act 1945) |
| Liability limits | Merchant Shipping Act 1995, Part IX (limitation of liability); London Convention 1976 |
| Contract | Charter party/bill of lading; Hague-Visby Rules (Carriage of Goods by Sea Act 1971, 1992), Hamburg Rules, Rotterdam Rules |
| Personal injury | Merchant Shipping Act 1995; Protection of Seafarers legislation; PI claims under Scots delict |
| Maritime liens | Admiralty jurisdiction; Ranking of maritime creditors |
| Salvage | Merchant Shipping Act 1995, Part XI; International Convention on Salvage 1989 |
| Economic loss | Scots law approach (Roman-Dutch heritage; different from US Robins Dry Dock rule) |
| Environmental | Merchant Shipping Act 1995 (oil pollution); OPA 90 is US-specific, use UK equivalents; MARPOL incorporated through UK law |
| International | UNCLOS (part of UK maritime law by treaty and custom) |

Summarise each party's position. Note unsettled questions or novel points.

### 5. Holding & Reasoning

- Resolution of each identified issue, Maritime doctrines applied (name each doctrine)
- Statutory/regulatory provisions cited, Treatment of international conventions, Dissents signalling future challenges

### 6. Practical Implications

- Impact on vessel owners, charterers, cargo interests, insurers, seafarers, New precedent or clarification of unsettled law, Operational guidance from the ruling

## Terminology & Style Checks

- Use "vessel" not "boat"; "collision" (two moving vessels) vs. "allision" (vessel strikes fixed object)
- Distinguish "charterer" vs. "shipper"; use "seaman"/"mariner" or "seafarer"
- Distinguish property damage, personal injury, economic loss, and environmental damages, For technical terms (general average, demurrage, deviation, salvage), include a one-line definition for non-specialist readers, OSCOLA citations; mark unverified citations with [VERIFY]
- Always note whether admiralty jurisdiction was contested and how resolved

## Scotland/UK Adaptation

The following adaptations apply when this skill is used for Scottish/UK proceedings:

**Legislative framework:** Merchant Shipping Act 1995 is the primary UK maritime statute (replaces scattered US maritime statutes). Admiralty jurisdiction in Scotland is governed by Administration of Justice Act 1956 (Part I), Court of Session Act 1988, and Sheriff Court (Scotland) Act 1907.

**Admiralty Court in Scotland:** The Court of Session exercises admiralty jurisdiction through its Outer House (no separate Admiralty Court building). Certain Sheriff Courts also have admiralty jurisdiction depending on geographical location.

**Carriage of goods:** Hague-Visby Rules applied through Carriage of Goods by Sea Act 1971. Carriage of Goods by Sea Act 1992 (bills of lading). No US Harter Act or COGSA equivalent.

**Personal injury:** Seafarers' claims under Merchant Shipping Act 1995 and Scots delict (replaces Jones Act/LHWCA). No direct equivalent to US Jones Act. Claims may be brought under Protection of Seafarers legislation and employer's liability.

**Limitation of liability:** Merchant Shipping Act 1995, Part IX, implementing LLMC 1976. Different limits from US Limitation of Liability Act.

**Liens:** Maritime liens apply under UK admiralty law. Ranking differs from US. Ship mortgages registered under Merchant Shipping Act.

**Collision:** International Regulations for Preventing Collisions at Sea (COLREGS) apply. Apportionment under Law Reform (Contributory Negligence) Act 1945 rather than US Reliable Transfer rule.

**Economic loss:** Scots law does not follow the US Robins Dry Dock rule. Scots delict has different tests for pure economic loss (Roman-Dutch heritage, broader in some respects, more constrained in others).

**Salvage:** International Convention on Salvage 1989 and Merchant Shipping Act 1995, Part XI.

**Environmental:** MSA 1995 oil pollution provisions, MARPOL (through UK law). No OPA 90 equivalent.

**Insurance:** Marine Insurance Act 1906 (UK legislation, distinct from US).

**Court structure:** Scottish admiralty cases: Sheriff Court (lower value) → Sheriff Appeal Court → Court of Session (Outer House → Inner House) → UK Supreme Court (final appeal).

**Citations:** Use OSCOLA format, not Bluebook.

[VERIFY: Confirm current Merchant Shipping Act 1995 provisions, MARPOL implementation, and LLMC limits before finalising.]

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
