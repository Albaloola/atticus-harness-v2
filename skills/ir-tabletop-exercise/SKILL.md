---
name: ir-tabletop-exercise
language: en
description: Drafts a tabletop exercise script to stress-test an organisation's Incident Response Plan against cybersecurity threats and breach notification obligations (UK GDPR, NIS Regulations, FCA, PCI DSS, Ofcom, ICO). Produces scenario injects, participant role assignments, facilitation guides, and after-action report frameworks. Use when creating IR tabletop exercises, cybersecurity drills, breach response simulations, or incident preparedness assessments. [Atticus UK/Scots refined]
tags:
- checklist, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Tabletop Exercise Script for Incident Response Plan (Scotland/UK Adaptation)

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

Produces a ready-to-execute tabletop exercise that tests an organisation's IR Plan against realistic cyber threats and regulatory notification deadlines.

## Prerequisites

1. **IR Plan** - current incident response plan, escalation hierarchy, severity classification framework
2. **Regulatory profile** - applicable UK frameworks and notification deadlines
3. **Org context** - industry sector, data holdings (PII, PHI, classified, PCI), crisis roles, prior after-action reports
4. **Participant list** - attendees with titles and IR Plan roles

## Quick Start

1. Extract key elements from provided materials (deadlines, escalation paths, data types, prior gaps)
2. Select threat scenario matched to org risk profile
3. Assign participants to functional groups with role cards
4. Design 4 to 5 progressive injects testing IR phases and notification triggers
5. Draft facilitation guide with ground rules and timing
6. Build debrief agenda and after-action report framework

## Workflow

### Step 1 - Document Research

Extract from provided materials before drafting:

| Element | Source |
|---|---|
| Notification deadlines | ICO guidance, NIS Regulations, FCA Handbook, sector-specific |
| Escalation hierarchy | IR Plan org chart, decision authority matrix |
| Regulated data types | Data inventory (PII, special category data, classified, PCI) |
| Prior gaps | After-action reports, audit findings |
| Contractual obligations | Vendor agreements, cyber insurance, DPO/ICOs DPAs |

### Step 2 - Scenario Design

Select a threat scenario matched to org risk profile:

| Scenario | Regulatory Triggers | Key Complexity |
|---|---|---|
| Ransomware + exfiltration | ICO notification (72 hrs) + OFSI sanctions screening | Dual operational/legal pressure |
| Business email compromise | Wire fraud + personal data exposure; ICO notification | Financial + data exposure |
| Supply chain compromise | Multi-party notification, shared liability | Scope ambiguity, contractual triggers |
| Insider threat | Employee data, HR/legal coordination | Attribution, evidence preservation |
| APT campaign | IP theft, state-actor, law enforcement involvement | Prolonged timeline, classification |

Scenario brief must include:
- Date/time and operational context, First indicator of compromise (IDS alert, help desk ticket, third-party tip, customer complaint)
- Technical detail sufficient for discussion without requiring deep expertise
- 3 to 5 measurable objectives tied to IR Plan and regulatory compliance

### Step 3 - Participant Roles

| Group | Roles | Responsibilities |
|---|---|---|
| **Core IR** | IR Manager, Security Analysts, IT Ops, Forensics | Triage, containment, evidence preservation |
| **Legal & Compliance** | General Counsel, DPO, Solicitor/Advocate, Compliance Officer | Notification obligations (ICO/FCA), litigation hold, privilege, sanctions review |
| **Executive** | CEO/Crisis Authority, CISO, CFO, BU Leads | Strategic decisions, business continuity, materiality (MAR disclosure) |
| **Communications** | PR, Customer Service, HR, Investor Relations | Media, customer inquiries, regulatory notification |

Pre-exercise packet per participant: relevant IR Plan sections, role card with decision authority, notification templates, data holdings summary.

### Step 4 - Progressive Injects

Design 4 to 5 injects. Per inject include:
- **Timestamp** (T+elapsed), **new information**, and **discussion questions** testing IR procedures, notification triggers, and cross-functional coordination
- **Expected outputs** - decisions or actions participants should produce
- **Facilitator notes** - time allocation, key points that must emerge, red flags indicating gaps

Inject progression:

| # | Focus | Tests |
|---|---|---|
| 1: Detection | Initial alert, IR Plan activation | Severity classification, containment, evidence preservation, escalation |
| 2: Escalation | Scope wider than expected (lateral movement, exfiltration) | ICO notification threshold, external forensics, insurance notice, legal coordination |
| 3: External Pressure | Ransom demand / media leak / ICO inquiry | OFSI sanctions screening, public messaging, regulatory response, cross-team consistency |
| 4: Recovery | Forensic conclusions, restoration, notification to affected individuals | Notice content (UK GDPR Art. 34), individual notice method, credit monitoring |
| 5 (optional) | Cross-border data flows, law enforcement delay (Police Scotland / NCA), vendor coordination | Jurisdiction conflicts (UK vs EU data), notification timing tensions, multi-party coordination |

### Step 5 - Facilitation Guide

Include at top of script:
- **Ground rules** - learning environment, no-fault, Chatham House Rule if desired
- **Timing** - total duration (2 to 4 hrs), time per inject, break schedule
- **Facilitator role** - present injects, probe follow-ups, ensure all groups participate, document observations without correcting in real-time
- **Materials** - printed inject cards, IR Plan copies, regulatory quick-reference card, shared doc for decisions

### Step 6 - Debrief & After-Action Report

**Debrief agenda (30 to 45 min):**

1. What worked, effective procedures, coordination, decisions
2. Gaps identified:
   - [ ] Unclear roles or decision authority
   - [ ] Missed or late notification triggers (ICO 72hr clock)
   - [ ] Communication breakdowns (technical / legal / executive)
   - [ ] Evidence preservation failures
   - [ ] Unrealistic IR Plan assumptions
   - [ ] Resource or capability gaps
3. Root cause per gap
4. Remediation actions with owner + target date

**After-action report sections:**

| Section | Content |
|---|---|
| Executive Summary | Scenario, objectives, overall assessment |
| Participants | Name, title, exercise role |
| Observations by Phase | Detection → Containment → Eradication → Recovery → Notification |
| Gap Analysis | Description, risk rating (H/M/L), root cause |
| Remediation Plan | Action, owner, deadline, success criteria |
| Recommendations | Future exercises, training needs, capability investments |

Distribution: participants, executive leadership, board/audit committee, CISO office.

## Notification Deadline Reference (UK/Scotland)

Build a quick-reference card for participants:

| Regime | Deadline | Authority |
|---|---|---|
| UK GDPR Art. 33 | 72 hours to ICO | ICO |
| UK GDPR Art. 34 | Without undue delay to affected individuals | ICO |
| NIS Regulations 2018 | ASAP (sector-specific guidance) | ICO + Sector Competent Authority |
| FCA (regulated firms) | Immediately on awareness | FCA |
| Ofcom (telecoms breach) | 24 hours | Ofcom |
| PCI DSS (UK) | Per card brand rules, typically 24 to 72 hrs | Card brands + acquiring bank |
| OFSI (sanctions) | Immediately on suspicion | OFSI |
| PSN (Public Sector Network) | Per PSN contract terms | Cabinet Office |

## Pitfalls

- At least one inject must force a **notification deadline decision with incomplete information**
- Test **OFSI/sanctions compliance** if ransomware scenario involves payment demands, Ensure the exercise tests **legal professional privilege** preservation during IR, Tailor scenario complexity to participant experience, avoid overwhelming first-time groups, Do not script "correct" answers, the exercise tests the org's plan, not a model plan, Flag if the org lacks a severity classification framework, the exercise cannot function without one, Mark any citation or deadline you cannot confirm with `[VERIFY]`
- Consider NCSC's free **Exercise in a Box** resources as a supplement

## Troubleshooting

| Issue | Resolution |
|---|---|
| No existing IR Plan | Exercise cannot proceed; recommend IR Plan development first |
| Missing severity classification | Create simplified framework (Critical/High/Medium/Low) for exercise use; flag as gap |
| Participants unfamiliar with notification deadlines | Distribute the quick-reference card in pre-exercise packets |
| Scenario too complex for audience | Drop optional inject 5; simplify technical details; focus on decision-making |
| Cross-border jurisdiction conflicts (UK/EU) | Identify controlling jurisdiction per data subject location; flag irreconcilable conflicts for legal review |

---

## Scotland/UK Adaptation

This skill has been adapted from the US-original Incident Response Tabletop Exercise. Key changes:

- **Notification regimes**: HIPAA → UK GDPR; CCPA → UK GDPR Art. 34; SEC 8-K → FCA MAR/DTR; NERC CIP → NIS Regulations; OFAC → OFSI
- **Regulators**: HHS OCR → ICO; SEC → FCA; FCC → Ofcom; NERC → Ofgem (OES); DOJ → NCA/COPFS
- **Ransomware**: OFAC advisory → OFSI sanctions reporting; NCSC guidance against paying
- **Cyber body**: CISA/NSA → NCSC (National Cyber Security Centre); NCSC Exercise in a Box free resources available
- **Sanctions**: OFAC → OFSI (Office of Financial Sanctions Implementation)
- **Scotland-specific factors**: Police Scotland Cyber Crime Unit; COPFS criminal prosecution; SEPA for environmental data incidents; Scottish Courts for data breach civil claims; Prescription period: 6 years for delict
- **Data Protection**: single UK GDPR/DPA 2018 regime (no state-by-state variation)
- **Law enforcement**: NCA (national) + Police Scotland (Scottish jurisdiction)
- **No SEC Form 8-K**: replaced with FCA MAR inside information disclosure

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
