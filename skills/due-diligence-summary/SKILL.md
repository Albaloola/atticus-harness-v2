---
name: due-diligence-summary
language: en
description: Produces structured UK transactional due diligence summaries with risk ratings, document citations, and follow-up actions. Triggers when the user requests a due diligence summary, diligence report, red-flag memo, or data room analysis for M&A, investment, or partnership transactions in the UK/Scotland. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, corporate, summarization, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Due Diligence Summary (UK/Scotland Adaptation)

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

Decision-ready diligence summary with risk ratings, evidence citations, and next-step actions for UK transactional matters.

---

## Related skills

- **Environmental subset** - `phase-i-esa` for RICS environmental due diligence; `environmental-regulation-summaries` for UK governing statutes; `environmental-indemnity` and `environmental-covenant-and-easement` for risk-allocation drafting.
- **Real estate subset** - `real-estate-transaction-summary` for property-transaction memos; `title-register-review` for Land Register title sheets (Scotland, Register of Sasines/Land Register).
- **Corporate subset** - `articles-of-association`, `company-confirmation-statement`, `pro-forma-cap-table` for governance review.
- **Compliance subset** - `compliance-summaries` for cross-sector regulatory posture; `uk-gdpr-adequacy` and related skills for UK data protection review.
- **Outputs** - `legal-memo` for substantive opinions arising from diligence findings; `engagement-letter-review` for scope confirmation upstream.

## Quick Start

Gather before beginning:

1. **Transaction snapshot** - type, parties, structure, timeline, target entities
2. **Scope definition** - in/out-of-scope categories, materiality threshold, jurisdictions (England/Wales, Scotland, NI, cross-border)
3. **Data room index** - document list with stable IDs and dates
4. **Substantive materials** - governance docs, financials, contracts, IP schedules, litigation files, HR/benefits, real estate, tax, environmental records
5. **Privilege/confidentiality designation** and allowed audience
6. **Scottish-specific docs** - Disposition, Standard Security, Land Register Title Sheet (if property assets in Scotland)

## Workflow

1. **Map scope to inventory** - mark each category Complete / Partial / Missing using the coverage checklist.
2. **Extract findings** - facts, obligations, restrictions, change-of-control and consent triggers.
3. **Classify** each finding as Fact, Representation, or Open Issue.
4. **Rate risk and materiality** - quantify exposure where possible.
5. **Flag conflicts** across sources; resolve by authority and date.
6. **Produce summary** using the deliverable template; cite every material finding as `[Doc ID or Title, date, page/section]`.

### Risk Scale

| Rating | Meaning | Action |
|--------|---------|--------|
| High | Likely deal impact or material exposure | Escalate; require resolution/mitigation |
| Medium | Manageable; needs diligence or contractual protection | Track; address in docs/price |
| Low | Informational or minor exposure | Note; monitor if cumulative |

### Coverage Checklist

| Category | Expected Core Docs (UK) |
|----------|------------------------|
| Corporate/Governance | Certificate of Incorporation, Articles of Association, Register of Members, PSC Register, Directors' service contracts, board minutes |
| Financials/Debt | Audited/unaudited FS (FRS 101/102/105), debt docs, debentures, fixed/floating charges |
| Contracts | Top customer/vendor, assignment/consent, exclusivity, key commercial agreements |
| IP/Tech | IP register, licences, SaaS agreements, OSS use, employee invention assignments |
| Litigation/Reg | Claims history, FCA/regulatory correspondence, HMRC enquiries, SFO investigation letters |
| HR/Benefits | Payroll, employment contracts, share schemes (EMI/CSOP), TUPE implications, auto-enrolment pension, employment tribunal history |
| Real Estate/Assets | Leases (contracted out/LTA 1954), Land Register / Sasine titles (Scotland), Standard Securities, Dispositions, title insurance, searches, mining reports |
| Tax | Corporation Tax returns, HMRC clearance letters, NOLs, R&D credits, VAT registration, SDLT/LBTT |
| Environmental | Phase I Desktop Study (RICS), Phase II sampling, environmental permits (SEPA/EA/NRW), contaminated land (Part IIA, EPA 1990), waste licences, PFAS, climate reporting (SECR), energy/carbon compliance |
| Regulatory | FCA/PRA permissions (if regulated), FCA Handbook compliance, OFSI sanctions screening, Bribery Act 2010 procedures, Modern Slavery Act statement, UK GDPR/DPA 2018, CMA competition law, sector-specific regulation (CQC, Ofgem, Ofcom, SEPA) |

## Deliverable Template

### Executive Summary, Deal snapshot (type, parties, target, valuation if known)
- Top 5 red flags with risk rating and cited evidence, Missing critical items

### Scope & Coverage, In-scope categories and jurisdictions, Coverage checklist with gaps and rationale

### Key Findings by Category

One table per category (Corporate/Governance, Financials/Debt, Contracts, IP/Tech, Litigation/Regulatory, HR/Benefits, Real Estate/Assets, Tax, Environmental, Regulatory/Compliance):

| Issue | Evidence | Risk | Materiality | Follow-up |
|-------|----------|------|-------------|-----------|

### Conflicts & Discrepancies

| Topic | Conflicting Sources | Assessment | Action |
|-------|---------------------|------------|--------|

### Open Items / Follow-Up Requests

| Item | Rationale | Requested From | Priority |
|------|-----------|----------------|----------|

### Recommended Actions, Contractual protections (warranty, indemnity, tax covenant, disclosure letter)
- Price or structure adjustments, Pre-closing conditions or consents

## Pitfalls & Checks

- Separate confirmed facts from representations and open issues, never conflate.
- Flag missing expected documents as findings with risk and impact.
- Use exact dates, parties, GBP amounts, and governing law when available.
- Label unsigned drafts as non-authoritative.
- For regulated industries, add a compliance subsection (FCA, PRA, OFSI, HMRC, ICO, CMA, SEPA); mark statutes `[VERIFY]` if uncertain.
- Stay neutral and evidence-driven, do not advocate for or against the deal.
- Preserve privilege and confidentiality; limit distribution as instructed.
- [SCOTS: Note distinction between England/Wales and Scotland, heritable property in Scotland uses Land Register and Sasines; differs from registered land in E&W]
- [SCOTS: Note Scottish-specific legal concepts: Disposition, Standard Security, missives, LBTT/ADS in place of SDLT]
- [SCOTS: Note Scottish procurement rules if public sector target]

---

## Troubleshooting

- **Data room incomplete or actively being populated.** Mark each missing-document line as a finding (Risk: Medium-High depending on category) with a follow-up request. A summary built on a partial data room is signed only with explicit scope limitation in the Executive Summary.
- **Source documents conflict (e.g., cap table vs. board minutes).** Show both readings side-by-side with citations; flag for resolution by counsel. Do not silently reconcile by date, older documents may control where amendments aren't on file.
- **Regulated-industry target without familiar compliance lens.** Engage industry-specific counsel; flag and rate Unknown-but-material rather than guessing. Examples: FCA-authorised firm, Ofgem-licensed utility, CQC-registered healthcare provider.
- **Environmental concerns surfaced but no Phase I in the data room.** Risk is Medium-to-High depending on industrial use history. Recommend a RICS-compliant environmental desktop study as a closing condition or pre-LOI step, and an environmental indemnity / warranty in the SPA.
- **Privilege risk on shared diligence.** When buyer's counsel and seller's counsel share substantive analysis, common-interest privilege is the usual mechanism, but note it is narrower in UK than US common-interest doctrine. Note any unprivileged exchanges in the deliverable.

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced US corporate documents (Charter, Bylaws, Cap Table) with UK equivalents (Articles of Association, Register of Members, PSC Register, Confirmation Statement, Directors' service contracts)
- Replaced US regulatory agencies (SEC, EPA, OSHA, OFAC, FTC, FCC, HIPAA) with UK equivalents (FCA/PRA, SEPA/EA/NRW, HSE, OFSI, CMA, Ofcom, ICO/UK GDPR)
- Replaced FCPA with Bribery Act 2010 (broader scope, includes commercial bribery, failure to prevent)
- Replaced CERCLA/RCRA/NPDES/TITLE V with UK EPA 1990 Part IIA / Environmental Permitting Regs 2016
- Replaced ASTM E1527-21 Phase I ESA with RICS environmental due diligence / desktop study, Replaced HIPAA with UK GDPR / Data Protection Act 2018
- Replaced state-specific laws with UK jurisdiction-specific notes (Scotland vs E&W vs NI)
- Replaced state licensing with FCA/PRA permissions / HMRC registration / sector regulation, Added PSC Register (beneficial ownership, UK has since 2016, earlier than US BOI Registry)
- Added TUPE (employee transfer rights, no US equivalent)
- Added LBTT/ADS (Scottish land transaction tax) replacing SDLT for Scotland, Added Fixed/Floating Charges (UK debenture concept, no direct US equivalent)
- Replaced "Section 8(b)(6) all allegations denied" with UK statement of case conventions, Added Scottish-specific property forms (Disposition, Standard Security, Land Register Title Sheet)
- Added UK-specific share schemes (EMI, CSOP, Enterprise Management Incentives)

**Key Scottish/UK considerations:**
- England/Wales and Scotland have separate legal systems; property, trust, and contract law differ, Scotland: heritable property registered in Land Register (or Register of Sasines for older titles)
- UK: statutory registers held at Companies House (publicly accessible)
- PSC register required for all UK companies (discloses beneficial ownership)
- Bribery Act 2010 has strict liability corporate offence ("failure to prevent" - no US equivalent)
- UK GDPR/DPA 2018 - separate UK regime post-Brexit (but largely aligned with EU GDPR)
- TUPE applies automatically on business transfers (union consultation obligations)
- FCA/PRA dual regulatory model (banking) / FCA-only (most other financial services)
- Environmental: SEPA (Scotland), EA (England), NRW (Wales), NIEA (NI) - separate agencies, LBTT (Land and Buildings Transaction Tax) in Scotland; SDLT in E&W; LTT in Wales; Stamp Duty in NI

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
