---
name: eir-summary
language: en
description: Produces legally focused summaries of Environmental Impact Assessment Reports (EIAR) under Town and Country Planning (Environmental Impact Assessment) (Scotland) Regulations 2017, and other EIA regimes across the UK. Extracts impacts, mitigation, alternatives, and compliance vulnerabilities. Triggers on requests for EIAR/EIA summary, planning challenge prep, SEA review, habitat assessment review, or administrative record review under Scottish planning law. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, regulatory, summarization, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Environmental Impact Assessment Report Summary (Scotland/UK)

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

Condense EIAR (EIA Regulations) technical findings into a legally actionable summary with record citations.

---

## Authority status (read first)

EIA regimes in Scotland and the UK have distinct regulations. The summary must reflect the regime in effect when the document under review was prepared *and* note any subsequent change that affects litigation posture or follow-on administrative steps.

### EIA, Scotland

- **Primary Regulations:** The Town and Country Planning (Environmental Impact Assessment) (Scotland) Regulations 2017 (SSI 2017/102), as amended.
- **Applicable to:** Development within the meaning of the Town and Country Planning (Scotland) Act 1997, including s.26A (major developments), s.29 (national developments) and s.30 (local developments) under the Planning (Scotland) Act 2019.
- **Regulator:** Scottish Environment Protection Agency (SEPA); Scottish Ministers (for major/national developments); Planning and Environmental Appeals Division (DPEA).
- **Key post-2019 changes:** Planning (Scotland) Act 2019 introduced a new National Planning Framework (NPF4), a new Local Development Plan system, and strengthened climate/ biodiversity obligations.
- **Other Scottish EIA regulations:** The Electricity Works (Environmental Impact Assessment) (Scotland) Regulations 2017; The Marine Works (Environmental Impact Assessment) (Scotland) Regulations 2017; The Forestry (Environmental Impact Assessment) (Scotland) Regulations 2017.

### EIA, England & UK-wide

- **Regulations:** The Town and Country Planning (Environmental Impact Assessment) Regulations 2017 (SI 2017/571) - England.
- **Major Infrastructure:** The Planning Act 2008 (Nationally Significant Infrastructure Projects, NSIPs); the Infrastructure Planning (Environmental Impact Assessment) Regulations 2017.
- **Regulators:** Natural England; Environment Agency; Planning Inspectorate.

### Strategic Environmental Assessment (SEA)

- **Scotland:** The Environmental Assessment (Scotland) Act 2005.
- **UK-wide:** The Environmental Assessment of Plans and Programmes Regulations 2004.
- **Applies to:** Plans, programmes and strategies (NPF, LDPs, etc.).

### Habitats Regulations Assessment (HRA)

- **Scotland:** The Conservation (Natural Habitats, &c.) Regulations 1994 (as amended in Scotland); separate from England's Conservation of Habitats and Species Regulations 2017.
- Key case law: *Sweetman*, *People Over Wind*, *Dutch Nitrogen* - all relevant post-Brexit as retained EU case law under the European Union (Withdrawal) Act 2018.
- **Competent authority:** Scottish Ministers / SEPA / local planning authorities.

For verification dates and complete authority record, see `references/AUTHORITY-STATUS.md`.

---

## Related skills

- `environmental-impact-statement` - for drafting NEPA EISs (US counterpart).
- `environmental-regulation-summaries` - for governing-statute identification and cross-statute coordination.
- `phase-i-esa` - when affected-environment review references site-level Phase I findings.
- `due-diligence-summary` - when EIAR review feeds into a transactional diligence package.
- `litigation-case-strategy` - when the summary is preparation for a planning challenge.
- `mediation-statement` - for facilitated planning-consent or judicial review settlement discussions.

---

## Prerequisites

1. Full EIAR with appendices, technical studies, and modelling outputs.
2. Project description materials (maps, site plans, phasing, NPF4 alignment).
3. Planning authority, jurisdiction, and governing regulations.
4. Public consultation record and authority responses.
5. Thresholds of significance or regulatory standards applied.
6. Mitigation/enhancement schedule, if separate.
7. List of required consents, permits and approvals, if available.
8. **Date the document was prepared** - to determine which version of the regulations applied.

## Workflow

1. Classify document type (Scottish EIAR, English EIA, other) and review level (full EIA, Environmental Statement, screening opinion, scoping opinion).
2. **Note the operative regime** - identify whether the document was prepared under the 2017 Regulations, or if transitional provisions from earlier regulations apply.
3. Extract project snapshot, planning authority, and decision timeline into Executive Overview.
4. Map each topic area into the Environmental Impacts Matrix.
5. Build Alternatives Analysis; identify the environmentally superior alternative.
6. Isolate Significant Effects with proposed mitigation and residual effects.
7. Summarise mitigation measures and enforceability via planning conditions / legal agreements (s.75 Town and Country Planning (Scotland) Act 1997 agreements).
8. Extract consultation responses, planning authority's Report of Handling, and areas of controversy.
9. Complete the Compliance and Vulnerability Checklist.
10. Compile Source Map for all key findings.

## Output Tables

**Executive Overview**

| Item | Details | EIAR Cite |
|---|---|---|
| Project / Planning Authority / Jurisdiction / EIA Regime / Decision / Key Issues / Operative Regulations | | |

**Project Description**

| Component | Details | EIAR Cite |
|---|---|---|
| Location / Need / Scope / Phasing / Land Use / NPF4 Alignment | | |

**Environmental Impacts Matrix**

One row per topic area (Air Quality, Climate/GHG, Water/SEPA, Biodiversity/Habitats, Cultural Heritage/Archaeology, Geology/Soils, Population/Human Health, Noise/Vibration, Landscape/Visual, Traffic/Transport, Material Assets, Cumulative, Other).

| Topic Area | Baseline | Method/Model | Effect Finding | Significance Label | Mitigation | Residual Effect | EIAR Cite | Issues |
|---|---|---|---|---|---|---|---|---|

**Alternatives Analysis**

| Alternative | Key Features | Env. Superior? | Effect Comparison | Selection / Reject Rationale | EIAR Cite |
|---|---|---|---|---|---|

Rows: Proposed Development, No Development, each reasonable alternative.

**Significant Effects**

| Effect | Topic Area | Proposed Mitigation | Residual Significance | EIAR Cite |
|---|---|---|---|---|

For Scottish EIA, the Schedule 5 matters (mitigation commitments) must be incorporated into the consent.

**Mitigation and Enhancement**

| Measure | Enforceable Mechanism | Timing/Trigger | Monitor/Enforcer | Feasibility | EIAR Cite | Concerns |
|---|---|---|---|---|---|---|

**Consultation and Controversy**

| Topic | Consultee/Agency | Key Critique | Response Adequacy | Expert Split | Litigation Risk | EIAR Cite |
|---|---|---|---|---|---|---|

## Compliance and Vulnerability Checklist

- [ ] Operative regulations correctly identified (Scottish 2017 Regulations; pre-2017 transitional; English 2017 Regulations).
- [ ] Screening and scoping opinions on record; correct thresholds applied (Schedule 1 or Schedule 2 development).
- [ ] Baseline data adequate and supported by competent evidence.
- [ ] Alternatives range reasonable and feasible (including No Development).
- [ ] Cumulative effects analysed with defined geographic/temporal scope (reported or in-combination).
- [ ] Significance criteria disclosed and applied consistently (Schedule 3 selection criteria).
- [ ] Mitigation specific, enforceable through planning conditions or s.75 agreement; no improperly deferred mitigation.
- [ ] HRA (Habitats Regulations Assessment) completed for European/international sites where required.
- [ ] SEA obligations considered if plan/programme level.
- [ ] NPF4 policy alignment assessed (Scotland) / NPPF alignment (England).
- [ ] Consultation record shows proper public participation under 2017 Regs Sch. 4.
- [ ] Required consents/permits identified (Water Environment (Controlled Activities) (Scotland) Regulations 2011; CAR licences; Marine licences; listed building consent; etc.).
- [ ] Climate change and biodiversity obligations addressed (Climate Change (Scotland) Act 2009; Biodiversity Duty under Nature Conservation (Scotland) Act 2004).
- [ ] Flood risk assessment adequate (Flood Risk Management (Scotland) Act 2009).
- [ ] Planning authority's reasonableness in decision-making assessed for any Wednesbury challenge grounds.

## Closing Tables

**Open Questions** - Issue | Why It Matters | Needed Follow-Up

**Source Map** - Finding | EIAR Section | Page/Exhibit

---

## Key Scottish-specific EIA points

- **SEPA** is the key environmental regulator (water, flood risk, contaminated land, air quality, waste management).
- **Consultees** include: SEPA, NatureScot (formerly SNH), Historic Environment Scotland, Scottish Water, relevant community councils.
- **NPF4** (National Planning Framework 4, adopted Feb 2023) sets six spatial principles (sustainable places, liveable places, productive places) that inform EIA review.
- **Climate emergency** - NPF4 includes policies on climate mitigation/adaptation; Climate Change (Scotland) Act 2009 (as amended 2019) sets net-zero 2045 target.
- **Biodiversity** - NatureScot advises on European/international sites and protected species; Biodiversity duty in NPF4 requires 20% biodiversity net gain (policy 3b).
- **Trees and woodland** - Scottish Forestry regulates under Forestry (EIA) (Scotland) Regulations 2017.
- **Coastal/marine** - Marine Scotland licensing under Marine (Scotland) Act 2010; Marine Works (EIA) Regulations 2017.
- **Judicial review** - Planning decisions may be challenged by petition for judicial review in Court of Session (within 3 months); statutory appeals under s.239 Town and Country Planning (Scotland) Act 1997.
- **Post-Brexit divergence** - Scotland has devolved planning and environmental law; retained EU law (including EIA Directive principles) applies under the European Union (Withdrawal) Act 2018, but divergence is growing.

---

## Pitfalls

- Use the document's exact significance labels; do not normalise or reword.
- Cite every material finding to section and page/exhibit.
- Write "Not found in EIAR" for missing data; never fill gaps.
- Separate fact from inference; label inference explicitly.
- Flag unclear jurisdiction or governing regulations for clarification.
- Mark uncertain citations or regulatory triggers with `[VERIFY]`.
- Maintain neutral, analytical tone; no advocacy or conclusions of law.
- **Document date sensitivity.** A document prepared under the 2011 Regulations (now revoked) may use different terminology and thresholds than the 2017 Regulations.
- **NPF4 transition.** Planning decisions must be read in the context of the transitioning development plan system (NPF4 + LDPs).
- **No direct CEQA/NEPA equivalent.** Scotland/UK use European-derived EIA regimes; do not cite NEPA or CEQA authority.

## Scotland/UK Adaptation

This skill has been adapted from the US California CEQA/NEPA original for Scottish and UK EIA law.

| US Concept | Scotland/UK Equivalent |
|---|---|
| CEQA (California Environmental Quality Act) | Town and Country Planning (Environmental Impact Assessment) (Scotland) Regulations 2017 |
| NEPA (National Environmental Policy Act) | UK EIA Regulations (different for each jurisdiction: Scotland, England, Wales, NI) |
| Environmental Impact Report (EIR) | Environmental Impact Assessment Report (EIAR) / Environmental Statement (ES) |
| Environmental Impact Statement (EIS) | Environmental Statement (ES) under UK/EU-derived EIA regimes |
| CEQ (Council on Environmental Quality) | No direct UK equivalent; Scottish Ministers / DPEA oversee EIA in Scotland |
| EPA (Environmental Protection Agency) | SEPA (Scottish Environment Protection Agency) |
| FRA 2023 (NEPA amendments) | No direct US equivalent; UK EIA derived from EU Directive 2011/92/EU (retained) |
| AB 130 / SB 131 (CEQA reforms) | No California-style exemption regime; Scotland's EIA thresholds set by 2017 Regulations |
| Mitigated Negative Declaration | Screening opinion under Reg 7 of Scottish 2017 Regulations |
| CEQA statute of limitations (30/35/180 days) | Judicial review: 3 months (Court of Session); statutory appeals: 6 weeks (s.239 TCPA 1997) |
| Pub. Resources Code § 21000 et seq. | Town and Country Planning (Scotland) Act 1997; Planning (Scotland) Act 2019 |
| CWA § 404 (Clean Water Act) | Water Environment (Controlled Activities) (Scotland) Regulations 2011 (CAR) |
| ESA § 7 (Endangered Species Act) | Conservation (Natural Habitats, &c.) Regulations 1994 (HRA) |
| NHPA § 106 (historic preservation) | Historic Environment Scotland (listed buildings and scheduled monuments) |
| CAA (Clean Air Act) | Environmental Protection Act 1990; SEPA air quality regulation |
| Environmental Justice (US) | Fairer Scotland Duty; Equality Act 2010 considerations |
| NEPA lead/cooperating agency | Planning Authority (LPA) / Scottish Ministers / Marine Scotland |
| CEQA Guidelines | Scottish Planning Circulars (e.g. Circular 1/2017); PAN series |
| Significant and Unavoidable Impacts (CEQA) | Significant residual effects (EIA Regs Schedule 5) |
| Statement of Overriding Considerations | No direct equivalent; planning balance under s.25 TCPA 1997 / NPF4 policies |
| US dollar amounts | GBP (roughly £0.80 per USD) |
| NEPA interim final rule (CEQ rescission) 2025 | Not applicable; Scotland's EIA continues under its own 2017 Regulations |

**Required disclaimer on every output:**
> THIS IS A DRAFTING AID FOR SCOTTISH/UK EIA PRACTICE AND REQUIRES REVIEW BY A QUALIFIED ENVIRONMENTAL PLANNING SOLICITOR. IT DOES NOT CONSTITUTE LEGAL ADVICE.

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
