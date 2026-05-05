---
name: customs-power-of-attorney
language: en
description: Atticus UK/Scots legal skill for customs-power-of-attorney. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Customs Agency Agreement (UK, Indirect Representation)

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

Draft an HMRC-compliant Customs Agency Agreement authorising a customs broker or agent to act as indirect representative for an importer or exporter under UK customs law, primarily under the Customs and Excise Management Act 1979 (CEMA 1979), the UK Trade Tariff, and the Customs (Import and Export) Regulations.

## IMPORTANT: UK customs territory, read first

The United Kingdom is a **separate customs territory** after leaving the EU (31 January 2020, transition period ended 31 December 2020). There is **no automatic equivalence** between UK and US customs regimes. Scotland is part of the UK customs territory.

**Key differences from US customs:**

| US Concept | UK Equivalent |
|---|---|
| U.S. Customs and Border Protection (CBP) | **HMRC** (His Majesty's Revenue & Customs) - the UK customs authority |
| 19 CFR Part 141 | **CEMA 1979** / **UK Trade Tariff** / **Customs (Import/Export) Regulations** - governing legislation |
| CBP broker license (19 CFR Part 111) | **Indirect representative** / **Customs broker** - no single HMRC licence equivalent; Authorised Economic Operator (AEO) status available, but not mandatory for customs representation |
| Customs Power of Attorney (formal POA) | **Customs agency agreement** or **indirect representation appointment** - HMRC accepts an agency agreement, not a formal power of attorney in the US sense |
| EIN (Employer ID Number) | **UK VAT Registration Number** for VAT-registered traders; **EORI number** (Economic Operator Registration and Identification) - required to make customs declarations |
| SSN (for individuals) | **National Insurance number (NINO)** for individual identification |
| ACE (Automated Commercial Environment) | **CDS** (Customs Declaration Service) - the UK system for electronic customs declarations; **CHIEF** (legacy system, transitioning fully to CDS) |
| USMCA certificates | **UK trade agreements** - UK-Australia FTA, UK-NZ FTA, UK-EU TCA, developing agreements (incl. UK-US if concluded); separate rules of origin per agreement |

---

## Prerequisites

1. **Principal identity** - legal name (as in formation documents), entity type, jurisdiction, **UK VAT Registration Number** (if VAT-registered), **EORI number** (starting with GB), business address.
2. **Agent identity** - legal name, business address, **EORI number** (if acting as indirect representative), AEO certificate (if held).
3. **Scope** - continuing (unlimited) or limited (specific commodities, customs procedure codes [CPCs], date range, countries of origin).
4. **Delegation policy** - whether sub-delegation is permitted and under what conditions.
5. **Extended authorities** - confirm include/exclude for: customs review and appeals (C18/C19 responses), voluntary disclosures (penalty mitigation), advance tariff rulings (ATR/BTI), duty drawback claims, AEO customs simplifications.

## Output Structure

### 1) Document Skeleton

```text
CUSTOMS AGENCY AGREEMENT (INDIRECT REPRESENTATION)
- Effective Date; Continuing or Limited (with expiration/conditions)
1. Party Identification
2. Appointment and Grant of Authority
3. Scope of Representation
4. Extended Authorities
5. Limitations and Conditions
6. Revocation and Termination
7. Indemnification and Confidentiality
8. Recordkeeping and Compliance
9. Governing Law and Jurisdiction
10. Execution Block
```

### 2) Party Identification

| Field | Principal (Trader) | Agent (Customs Representative) |
|---|---|---|
| Legal name | Exact corporate/LLC/individual name | Agent entity name |
| Address | Full street, city, county, postcode | Business address |
| ID numbers | UK VAT Reg No. / EORI (GBXXXXXXXXX) / NINO (if individual) | EORI (GBXXXXXXXXX) / AEO No. (if held) |
| Entity type | Company registered in UK / Sole trader / Partnership | Company / Sole trader / Partnership |

### 3) Appointment and Grant of Authority

Appoint the Agent as **indirect representative** to transact customs business with HMRC, meaning the Agent makes declarations in their own name **on behalf of** the Principal (indirect representation under UK Customs).

**Entry and Declaration**
- Make, sign, and submit all customs declarations via **CDS** (Customs Declaration Service) including:
  - Import declarations (H1, H4, H5, H6, H7)
  - Export declarations (B1, B2, B4)
  - Supplementary declarations (S1, S2)
  - Entry in declarant's records (EIDR)
  - Customs warehouse, inward processing, outward processing declarations, Submit declarations using Principal's EORI number and agent's EORI (as indirect representative)
- Execute customs declarations (including valuation, classification, origin) on behalf of the Principal

**Financial**
- Pay customs duties, VAT, excise duties, and other charges to HMRC on the Principal's account, Utilise the Principal's customs duty deferment account (if applicable)
- Post customs guarantees on behalf of the Principal (with prior written authority)
- Process duty drawback and repayment claims

**HMRC Communications**
- Receive and respond to **HMRC C18** (post-clearance demand notes) and **C19** (amendment notices)
- Represent the Principal in HMRC enquiries and verification visits, Handle **Port Health Authority** and **DEFRA** notifications (for SPS checks on agri-food imports)

### 4) Extended Authorities

Include or exclude each explicitly, silence defaults to **not authorised**:

| Authority | Include / Exclude |
|---|---|
| Customs review/ appeal (to HMRC review officer) | State yes or require separate written auth |
| Appeal to First-tier Tax Tribunal | State yes or require separate written auth |
| Voluntary disclosure to HMRC (penalty mitigation) | State yes or require separate written auth |
| Advance Tariff Ruling (ATR) / BTI applications | Yes / No |
| Duty drawback / remission claims | Yes / No |
| AEO customs simplifications | Yes / No |
| Customs special procedures (IP, OP, end-use) | Yes / No |

### 5) Limitations and Conditions

- If limited agreement: define scope precisely (Commodity Codes / CPCs / countries of origin / date range / specific consignments).
- Sub-delegation: permitted or prohibited; if permitted, Agent remains responsible for sub-agent acts.
- Principal must provide timely, accurate invoices, packing lists, BOLs/AWBs, certificates of origin, and agency certifications.
- Agent may rely in good faith on Principal-supplied information; Principal bears accuracy liability and must indemnify Agent for resulting duties, penalties, and costs.
- Mandatory consultation triggers (e.g., before submitting voluntary disclosures, lodging appeals, or accepting C18 demands above a threshold value).
- VAT implications: Confirm whether the Principal or Agent accounts for import VAT under postponement (PVA) or direct payment.

### 6) Revocation and Termination

- Requires **written notice** to both Agent and HMRC.
- Effective upon Agent's **actual receipt** of written notice.
- Pre-revocation declarations and actions remain valid and binding.
- Specify whether Agent authority continues for pending C18/C19 responses, appeals, and disclosure proceedings on pre-revocation entries.
- Principal remains liable for customs duties and fees incurred prior to revocation.
- Termination notice period (typically 30 to 90 days for continuing agreements).

### 7) Indemnification and Confidentiality

- Principal indemnifies Agent for duties, penalties, interest, and costs arising from inaccurate information or non-compliance by the Principal.
- Agent maintains confidentiality of pricing, commercial data, and business information; disclosure only as required by law or HMRC request.
- Limitation of Agent's liability (subject to reasonableness / Unfair Contract Terms Act 1977).

### 8) Recordkeeping and Compliance

Both parties retain records per **UK customs recordkeeping rules**:

- **Minimum retention period**: 4 years (for import/export records) or **6 years** for VAT-related customs records. The Customs (Import and Export) Regulations require retention for **4 years** from the end of the accounting period to which they relate.
- HMRC has power to request records within a reasonable time.
- Records must be accessible (in English) and available for HMRC inspection.

_Note: This is governed by UK legislation, not 19 CFR Part 163. The UK retention period differs._

### 9) Governing Law and Jurisdiction

- **Governing law**: The laws of Scotland (or England and Wales, as agreed between parties).
- **Jurisdiction**: The Scottish courts (Court of Session / Sheriff Court) for disputes arising under the agreement.

### 10) Execution Block

Certification (above signature): signatory certifies they hold authority to bind the Principal.

| Entity Type | Required Signatory |
|---|---|
| Company registered in UK | Director, Company Secretary, or authorised signatory per company's articles |
| LLP | Designated member or authorised signatory |
| Partnership | Partner with binding authority per partnership agreement |
| Sole trader | Individual personally |

Signature block: Signature / Printed Name / Title / Date.

The agreement should be executed in duplicate (one for each party). HMRC does not require notarisation or a company seal, but witness execution is recommended for Scottish parties.

## Guidelines

- **Indirect vs direct representation**: HMRC distinguishes between direct representation (agent acts in the principal's name) and indirect representation (agent acts in their own name on the principal's behalf). An indirect representative is jointly and severally liable for the customs debt.
- **EORI number**: The Principal must have a valid UK EORI number (GB prefix) to import or export goods from the UK customs territory. The Agent needs their own EORI for indirect representation.
- **CDS migration**: CHIEF (the legacy system) has been fully replaced by CDS for most declaration types. Confirm the Principal is on CDS.
- **Postponed VAT Accounting (PVA)**: Most businesses account for import VAT through postponement. The agreement should state whether the Agent handles PVA or direct payment of VAT.
- **UK trade agreements**: Verify rules of origin and preference levels under applicable UK FTAs (UK-Australia, UK-NZ, UK-EU TCA, developing agreements). These are separate from USMCA.
- **C18 / C19 responses**: HMRC issues C18 (post-clearance demand) and C19 (correction/amendment) notices. The Agent should have clear authority to respond to these.
- **Voluntary disclosures**: HMRC's penalty regime permits penalty mitigation for voluntary disclosure. The Agent should have authority to make disclosures on the Principal's behalf.
- **BTI**: Binding Tariff Information (BTI) is issued by HMRC for tariff classification rulings. A BTI is valid for 3 years and binding across the UK.
- **Safety and Security Declarations**: Entry Summary Declarations (ENS) and Exit Summary Declarations (EXS) may be required. The Agent should be authorised to submit these.
- `[VERIFY]` current HMRC requirements for customs representation, CDS status, and port-specific procedures.

---

## Scotland/UK Adaptation

### Key legislative framework

| US Concept | Scotland/UK Equivalent |
|---|---|
| U.S. Customs and Border Protection (CBP) | **HMRC** (His Majesty's Revenue & Customs) - the UK customs authority |
| 19 CFR Part 141 (customs POA) | **CEMA 1979** / **UK Trade Tariff** / **Customs (Import/Export) Regulations** |
| CBP broker license (19 CFR Part 111) | **Customs broker / Indirect representative** - no single HMRC licence requirement; **Authorised Economic Operator (AEO)** available but not mandatory for representation |
| Customs Power of Attorney (formal POA) | **Customs agency agreement / Indirect representation appointment** - different legal form; approved by HMRC but not a formal POA instrument |
| EIN (Employer ID Number) | **UK VAT Registration Number** + **EORI number** (GBXXXXXXXXX prefix) |
| SSN (Social Security Number) | **National Insurance Number (NINO)** |
| CBP Entry types (consumption, warehouse, TIB, FTZ) | **CDS Customs Declarations** - H1 (import), B1 (export), H7 (warehouse), IP/OP (processing procedures), EIDR |
| ACE (Automated Commercial Environment) | **CDS** (Customs Declaration Service) - replacing CHIEF (legacy); Scotland uses CDS as part of UK customs |
| USMCA / Rules of origin | **UK trade agreements** - UK-Australia FTA, UK-NZ FTA, UK-EU TCA, developing UK-US agreement; separate rules of origin per agreement |
| FDA / USDA | **Port Health Authorities** (SPS checks) / **DEFRA** (Department for Environment, Food & Rural Affairs) |
| CF-28, CF-29 (CBP notices) | **C18** (post-clearance demand) / **C19** (amendment notice) - HMRC equivalents |
| Drawback (19 USC 1313) | **Customs duty drawback** - similar concept under UK Customs regulations |
| C-TPAT (Customs-Trade Partnership Against Terrorism) | **AEO** (Authorised Economic Operator) / **UK Trusted Trader scheme** - similar security and compliance benefits |
| Protests (19 USC 1514) | **Customs review** (HMRC internal review) / **Appeal to First-tier Tax Tribunal** (Tax Chamber) |
| Prior disclosure (19 USC 1592) | **Voluntary disclosure to HMRC** - penalty mitigation available under HMRC penalty regime |
| Binding ruling (19 USC 1625) | **Advance Tariff Rulings (ATR)** / **Binding Tariff Information (BTI)** - issued by HMRC; valid for 3 years |
| 19 CFR Part 163 (recordkeeping) | **TULR** / **4 to 6 years retention** under UK customs regulations (not 5 years as under US rules) |

### Jurisdictional notes

- **Scotland is part of the UK customs territory**: There is no separate Scottish customs regime. All customs matters are administered by HMRC UK-wide.
- **Post-Brexit**: The UK is a separate customs territory after leaving the EU customs union. Customs declarations on goods moving between UK and EU are now required. Northern Ireland operates under a separate protocol arrangement (Windsor Framework) - this agreement covers GB ↔ NI movements but this skill is designed for GB customs territory.
- **Indirect vs direct representation**: The distinction is important under UK customs law. Indirect representation means the agent is jointly and severally liable for the customs debt. Direct representation means the principal retains full liability.
- **Scottish law**: This agreement is governed by Scots law where the parties agree Scottish jurisdiction. Dispute resolution falls to the Scottish courts. English law remains an alternative governing law (most customs brokerage agreements use English law).
- **Registration**: No prior notification to HMRC is required for the agency agreement, unlike the US formal filing of a CBP power of attorney. The agreement should be kept on file for HMRC inspection.
- **GBP amounts**: All financial values in the agreement should be expressed in £ GBP.

### Derivation

The UK customs regime is based on retained EU customs law (the Union Customs Code as adopted into UK law), CEMA 1979, and the Customs (Import and Export) Regulations. After Brexit, the UK established an independent customs tariff and trade policy. The UK's CDS is a different technical system from the US's ACE. There is no direct equivalence between the US "customs power of attorney" and the UK "customs agency agreement," though they serve a similar commercial function.

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
