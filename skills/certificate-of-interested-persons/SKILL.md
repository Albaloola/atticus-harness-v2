---
name: certificate-of-interested-persons
language: en
description: Drafts a FRAP 26.1-compliant Certificate of Interested Persons identifying all parties, entities, and affiliates with financial or legal interests in a federal appeal. Adapts to circuit-specific local rules. Use when filing appeals, corporate disclosure statements, or conflict-of-interest certificates in U.S. Courts of Appeals. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Certificate of Interested Persons

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

Discloses all persons and entities with a financial or legal interest in the outcome of a federal appeal per FRAP 26.1 and circuit local rules.

## Prerequisites

1. **Case caption** - appellate case number, full party names as on the notice of appeal
2. **Lower court filings** - complaints, answers, corporate disclosure statements, settlement agreements
3. **Corporate structure** - ownership charts, parent/subsidiary relationships, merger/acquisition records
4. **Representation details** - all law firms and attorneys of record per party
5. **Target circuit** - specific U.S. Court of Appeals (requirements vary)

## Process

### 1. Identify Circuit Requirements

[VERIFY] Research the destination circuit's local rules. Key variations:

| Requirement | Variation |
|---|---|
| Document title | "Certificate of Interested Persons" vs. "Corporate Disclosure Statement" vs. "Disclosure of Corporate Affiliations and Financial Interests" |
| Listing order | Alphabetical vs. categorical by party |
| Amici disclosure | Anticipated amici vs. only filed briefs |
| Negative statements | Some circuits require explicit "none" for empty categories |
| Formatting | Single- vs. double-spaced; page limits |

### 2. Extract Interested Persons

Search all uploaded documents for every disclosable person/entity:

| Category | Disclose |
|---|---|
| **Named parties** | All parties including dismissed/settled; complete legal names |
| **Counsel** | Law firms, office locations, individual attorneys of record |
| **Parent corporations** | Every layer to ultimate parent; note wholly-owned subsidiaries |
| **Subsidiaries** | Those affected by litigation outcome |
| **10%+ stockholders** | Publicly held companies owning ≥10% of a party's stock |
| **Insurers** | Companies covering claims at issue |
| **Litigation funders** | Third-party financiers with recovery interest |
| **Indemnitors/guarantors** | Entities obligated to satisfy judgment |
| **Bankruptcy parties** | Trustee, DIP, creditors' committee if applicable |
| **Amici curiae** | Orgs that have filed or indicated intent to file |

### 3. Draft the Certificate

**Caption:** Full court name, appellate case number, party names exactly as on notice of appeal, document title per local rule.

**Disclosure body:**
- Complete legal name for each person/entity, no abbreviations or trade names, Relationship descriptor (e.g., "Parent corporation of Defendant XYZ Corp.")
- Full corporate ownership chain for corporate parties

**Certification statement:**
- Reference FRAP 26.1 and applicable local rule by number, Attest completeness after reasonable inquiry, Acknowledge continuing duty to supplement, Include FRAP 32(g) certification

**Signature block:** Attorney name, signature (CM/ECF compliant), bar number, jurisdiction, firm name, address, phone, email, date.

### 4. Quality Checks

- [ ] All names spelled correctly; complete legal names used (no trade names)
- [ ] Every required category addressed, including negative statements where required
- [ ] Corporate ownership chains fully traced
- [ ] Consistent with prior trial-court disclosure statements
- [ ] Changes in corporate structure or representation since trial court flagged
- [ ] Formatting meets circuit specifications (margins, typeface, spacing, page limits)
- [ ] Properly dated and signed

## Guidelines

- **Completeness over brevity** - omitting an interested person risks recusal motions and procedural delays; when in doubt, disclose
- **Verify corporate structures with client** - public filings may be outdated; confirm current ownership before filing
- **Flag changes from trial court** - note any corporate structure or representation changes explicitly
- **Never abbreviate entity names** - courts use these for automated conflict checks
- **Supplement promptly** - file a supplemental certificate immediately upon discovering new interested persons
- **Circuit rules control** - FRAP 26.1 sets the floor, not the ceiling; always check local rules

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
