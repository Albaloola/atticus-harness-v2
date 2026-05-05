---
name: uk-cookie-consent-policy
language: en
description: Drafts publication-ready cookie policies, banner copy, and consent-flow language under UK GDPR, DPA 2018, and PECR 2003. Converts a verified cookie inventory into enforceable policy sections with lawful-basis mapping, granular opt-in controls, withdrawal mechanics, and user-rights handling. UK-specific, does not cover US state laws (CCPA/CPRA, Virginia, etc.). Use when asked for cookie policy, cookie banner, tracking notice, consent management, or privacy rights messaging for UK-facing websites. [Atticus UK/Scots refined]
tags:
- drafting, memo, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cookie Consent Banner and Policy (UK)

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

[SCOTS] UK-specific adaptation. Based on UK GDPR / DPA 2018 framework and Privacy and Electronic Communications Regulations (PECR) 2003. No US state-law coverage.

Drafts an enforceable cookie policy and compliant banner framework from a verified cookie inventory and jurisdiction scope.

## [SCOTS] Key Adaptations

| US/General EU Concept | UK Equivalent |
|---|---|
| GDPR (EU) | UK GDPR (retained EU law as amended, post-Brexit) |
| ePrivacy Directive 2002/58/EC Art. 5(3) | Privacy and Electronic Communications Regulations (PECR) 2003 (SI 2003/2426) |
| CCPA/CPRA (California) | Remove, not applicable in UK |
| Virginia, Colorado, Connecticut, Utah laws | Remove, not applicable in UK |
| DPA 2018 (already UK) | Retain, sits alongside UK GDPR |
| ICO (already correct UK regulator) | Information Commissioner's Office (retained post-Brexit) |
| UK GDPR Art. 6(1), Art. 13 | Retained as UK GDPR provisions (no substantive change post-Brexit) |

## Prerequisites

1. **Site inventory** - all domains, subdomains, in-app endpoints
2. **Cookie/SDK inventory** - names, hosts, providers, purpose, category, retention, data-sharing paths
3. **Jurisdiction scope** - UK residents only (or UK + EEA)
4. **Consent design** - banner UI behaviour, consent states, defaults, expiration/renewal, withdrawal path
5. **Contacts** - privacy contact, DPO (if required), external processors, complaint channels to ICO

## Step 1: Collect Inputs

Gather all inputs; apply and label defaults if user says "use defaults."

| Input | Required | Default if missing |
|---|---|---|
| Jurisdictions served | yes | UK only |
| Cookie inventory | yes | `[VERIFY]` - complete inventory required |
| Consent mechanism | yes | banner + preference centre |
| User rights contact | yes | privacy@ `[CLIENT TO SPECIFY]` |
| Update cadence | yes | 6 to 12 months + material-change notices |

## Step 2: Draft Policy Sections

Generate in this order:

| Section | Mandatory fields | Notes |
|---|---|---|
| Purpose & scope | organisation, websites, users affected, last-updated date | UK GDPR processing basis |
| What are cookies | definition + non-cookie trackers (pixels, web beacons, local storage) | examples required |
| Cookie categories | strict table by category (see Step 3) | essential cookies exempt from consent where PECR Reg. 6(4) applies |
| How we use cookies | purpose + legal basis + processors/recipients | map each non-essential use to explicit consent |
| Your choices | accept all / reject non-essential / customise | no bundling consent with account creation |
| Managing preferences | withdrawal and edits anytime | explain functional limits if opt-outs selected |
| Rights | UK GDPR rights (Art. 15 to 22) + complaints to ICO | include ICO contact + complaint route |
| Changes | versioning + notice method + effective date | material changes require renewed consent |
| Contact | email/portal/address + response SLA | UK contact required |

## Step 3: Render Cookie Inventory Table

Every cookie must appear in this format:

| Cookie | Type | Provider | Purpose | Legal Basis | Duration | Category | Third-Country Transfer | Retention | Opt-out Method |
|---|---|---|---|---|---|---|---|---|---|
| `[name]` | first/third-party | `[provider]` | `[specific]` | consent / legitimate interests / etc. | `[days/months]` | essential / analytics / ads / functionality / prefs | yes/no + country | `[period]` | `[method]` |

## Step 4: Draft Banner Copy

Separate from the policy. Requirements:

- **Required buttons**: Accept All, Reject Non-Essential, Cookie Settings/Customise
- **Length**: 150 to 200 words max
- **No passive consent** - scrolling or implicit behaviour is not valid consent under UK GDPR
- **Consent proof fields**: timestamp, choice state, source, policy version, user-agent/IP hash (minimal)

## Step 5: Validate

- [ ] Essential cookies listed and justified (PECR Reg. 6(4) - strictly necessary)
- [ ] Non-essential categories not preselected
- [ ] Granular toggles map to categories
- [ ] Withdrawal path equals same effort as consent
- [ ] Retention and third-party sharing disclosed per cookie
- [ ] Contact and rights pathways complete
- [ ] Change log / versioning included

## Step 6: Deliver Artifacts

1. **Cookie Policy** - publish-ready markdown/HTML
2. **Cookie Inventory Table** - machine-readable
3. **Banner Copy** - standalone text block
4. **Preference Centre FAQ** - user-facing explainer
5. **Change Log Entry** - version, date, summary of changes
6. **Open Items** - unresolved `[CLIENT TO SPECIFY]` details

## Guidelines

- Plain language first, legal precision in defined rights and consents, Do not invent cookie names, processors, retention periods, or legal claims; use `[CLIENT TO SPECIFY]` for unknowns, Non-essential cookies require affirmative, granular consent under UK GDPR, inaction is never opt-in, Reference UK GDPR Art. 6(1), Art. 13, and PECR 2003 Reg. 6 (revised consent requirements) [VERIFY]
- No US state-law references (remove CCPA/CPRA, Virginia, Colorado, Connecticut, Utah)
- For users outside UK/EEA, still disclose retention and opt-out paths, Never claim "all users automatically consent" or similar non-compliant language, Post-Brexit: UK GDPR is retained but can diverge, monitor ICO guidance for changes
- **Scotland-specific:** No separate Scottish cookie regime. UK GDPR + DPA 2018 + PECR 2003 apply UK-wide. ICO is UK regulator (based in Wilmslow; Scottish operations handled through same framework)

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
