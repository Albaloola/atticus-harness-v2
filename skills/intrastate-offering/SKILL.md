---
name: intrastate-offering [SCOTS]
language: en
description: Produces a compliance memo and execution plan for UK/Scotland exemptions from the requirement to publish a prospectus under FSMA 2000, covering Section 85(5) and the Prospectus Regulation Rules exemptions, UK domestic offers, and alternative fundraising routes. Covers safe harbor selection, residence-based restrictions, advertising controls (FCA COBS rules), resale restrictions, integration analysis, and Companies Act filing obligations. Trigger when the user mentions a domestic-only offering, exempt securities offer, FSMA s.85 exemption, private placement, offers to the public threshold, minimum subscription/club deal, or says "we're only raising within the UK.". [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Intrastate Offering Compliance, UK/Scotland Alternative [SCOTS]

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

The US intrastate offering exemption (Rule 147/147A) has no direct UK equivalent because the UK does not operate a federal-state securities dual regulatory system. This skill adapts the methodology to equivalent UK exemption pathways under the Financial Services and Markets Act 2000 (FSMA) and the Prospectus Regulation Rules (PRR), with additional Scottish law considerations.

One breach of UK prospectus requirements can invalidate the exemption, expose the issuer to s.85 FSMA penalties, and create investor rights of rescission. Unlike the US regime, the UK regulator is the FCA (Financial Conduct Authority), and there is no "blue sky" state-level registration, instead, the FCA oversees admission to trading and prospectus approval.

## Intake (Mandatory)

Gather before drafting unless the user says "use defaults" or "just draft":

1. **Issuer details** - legal name, registered office, Companies House number, jurisdiction (Scotland/England/Wales/NI), date of incorporation
2. **Operations** - revenue by location, asset base, employee headcount, principal place of business
3. **Offering terms** - security type, total consideration, minimum subscription per investor, pricing, use of proceeds, escrow arrangements, commissions
4. **Draft materials** - term sheet, offering document, subscription agreement, marketing copy
5. **Distribution plan** - channels (introducer, online platform, professional adviser), any cross-border element
6. **Investor type** - retail, high-net-worth, sophisticated, certified high net worth, self-certified sophisticated, or restricted investors per COBS 4.12
7. **Prior and planned offerings** - types, dates, investor pools (12-month look-back/forward)
8. **FCA position** - has the issuer already discussed the proposal with the FCA? Is a formal approval route being considered?

**Defaults if no response:** s.85(5)(a) FSMA exemption; minimum consideration per investor of £100,000; standard certification for high net worth or self-certified sophisticated investors. Label all defaults.

## Step 1: Identify the Relevant UK Exemption

Under FSMA section 85(1), a prospectus is required when securities are offered to the public in the UK. The exemptions are found at section 85(5) and the PRR (FCA Handbook). The most common exemptions are:

| Exemption [VERIFY] | Key Condition | When to Use |
|---|---|---|
| s.85(5)(a) FSMA, Offer to qualified investors | Only to persons classified as "qualified investors" (per PRR 1.2.3) | Institutional/professional offers |
| s.85(5)(b) FSMA, Fewer than 150 persons per EEA state | Non-qualified investors limited to <150 per EEA state | Small targeted retail groups |
| s.85(5)(c) FSMA, Minimum consideration €100,000 | Minimum investment per investor ≥ €100,000 (or equivalent) | High-value placements |
| s.85(5)(d) FSMA, Denomination €100,000 | Securities with minimum denomination ≥ €100,000 | Large note/bond issues |
| s.85(5)(e) FSMA, Total consideration ≤ €8,000,000 | Aggregate consideration in UK and EEA ≤ €8,000,000 | Very small offers |
- Also: PRR 1.2.3 (qualified investors), PRR 1.2.4 (club deals, employees, mergers, takeovers) [VERIFY]

Verify current text: FSMA 2000, ss. 85 to 87; PRR 1.2; COBS 4.12; Financial Services Act 2012; UK Prospectus Regulation (as retained).

## Step 2: Analyse UK Issuer Tests and Location Requirements

Unlike the US doing-business tests (Rule 147/147A), the UK exemption framework is not based on where the issuer does business. Instead:

| Factor | UK/Scotland Position | Action Required |
|---|---|---|
| Issuer incorporation | Must be a body corporate under UK company law (or compliant equivalent) | Confirm Companies House registration |
| Principal place of business | Relevant for tax/NICs and applicable regulatory filings | Document registered office and POBO |
| Prospectus exemption triggers | Based on investor type, consideration, denomination, and number of persons | Test each category against the offer |
| Territorial scope | UK territorial scope; offers to persons in the UK are caught; "offers to the public" defined widely | Restrict marketing to within the UK |

**Scotland-specific:** If the issuer is registered in Scotland (Companies House prefix SC) or has its principal place of business in Scotland, additional Scottish Limited Partnership (SLP) or Scottish charitable incorporated organisation (SCIO) rules may apply.

## Step 3: Build Investor Verification Protocol (UK Equivalent)

| Investor Type | Standard [VERIFY] | Minimum Documentation |
|---|---|---|
| Qualified investor (professional client) | MiFID II categorisation per COBS 3 | Written confirmation of category + FCA register check |
| High net worth individual (Article 14, Financial Services and Markets Act 2000 (Financial Promotion) Order 2005) | Annual income ≥ £100,000 OR net assets ≥ £250,000 (excluding main residence) | Signed certificate + accountant confirmation or self-certification |
| Self-certified sophisticated investor | Professional experience or self-certification of one of six categories per FPO 2005 | Signed self-certification statement |
| Certified high net worth individual | Article 21 FPO 2005 certificate | Signed statement from accountant or employer |
| Restricted investor (COBS 4.12) | Confirms understanding restrictions | Signed acknowledgment |
| Corporate investor | The entity itself qualifies or its investment activity qualifies | Board resolution, constitutional documents, net asset statement |
| Look-through for collective investment vehicles | Entity formed to invest → beneficial owners must individually qualify | Investor-by-investor certification |

- Require documentary proof before subscription acceptance; retain in investor file.
- IP checks and online gating are supplemental only, not sufficient alone.
- Apply look-through for entities formed specifically to participate in the offer.

## Step 4: Advertising and Financial Promotion Controls (UK Framework)

Under FSMA s.21, a person may not in the course of business communicate an invitation or inducement to engage in investment activity unless authorised or the communication is exempt. This is the UK equivalent of general solicitation rules.

- All marketing materials must either be communicated by an FCA-authorised person (s.21(1)), or fall within a Financial Promotion Order (FPO 2005) exemption.
- Place FPO-compliant risk warnings and legend statements on all materials and landing pages.
- Gate access to offer materials: require investor status certification before disclosure.
- No paid advertisements targeted at non-qualifying persons.
- Train all personnel: no discussions with unqualified persons.
- Preserve copies of all advertisements, targeting settings, and certification records for at least 5 years.

**Legend template:**

> THIS DOCUMENT IS DIRECTED ONLY AT PERSONS WHO ARE (1) QUALIFIED INVESTORS WITHIN THE MEANING OF THE UK PROSPECTUS REGULATION, OR (2) PERSONS FALLING WITHIN ARTICLE 14 (HIGH NET WORTH INDIVIDUALS) OR ARTICLE 22 (SELF-CERTIFIED SOPHISTICATED INVESTORS) OF THE FINANCIAL SERVICES AND MARKETS ACT 2000 (FINANCIAL PROMOTION) ORDER 2005. INVESTMENT IN THE SECURITIES OFFERED HEREBY IS AVAILABLE ONLY TO SUCH PERSONS. THIS DOCUMENT MUST NOT BE RELIED UPON BY PERSONS WHO ARE NOT SUCH PERSONS.

**Subscription representation template:**

> The Subscriber represents that the Subscriber is (a) a Qualified Investor as defined in the UK Prospectus Regulation, or (b) a person falling within Article 14 or Article 22 of the Financial Promotion Order 2005, as applicable. The Subscriber agrees to provide such documentation as the Issuer may reasonably request to confirm applicable investor status. The Subscriber acknowledges that the securities have not been offered by means of a prospectus approved by the FCA.

## Step 5: Resale Restrictions and Transfer Controls

Unlike the US six-month restriction under Rule 147, UK exempt-securities resale restrictions depend on the exemption used and applicable PRR provisions.

- **Restricted period**: Generally, securities originally offered under a prospectus exemption are restricted and cannot be resold to the public without a prospectus or a further exemption (a "transfer restriction" or "lock-up" may be negotiated).
- **Restrictive legends** on share certificates or book-entry statements.
- **Stop-transfer instructions** to the registrar/transfer agent.
- **Pre-emption rights** under the Companies Act 2006, ss. 561 to 577: directors must seek shareholder authorisation to disapply pre-emption rights for cash consideration.
- Securities issued under an exemption are often structured as "unlisted" or traded via matched bargain facilities (e.g., JP Jenkins), not on AIM or Aquis.

## Step 6: Integration Risk and Companies Act Compliance

**Integration analysis:**

| Item | Risk | Mitigation |
|---|---|---|
| Recent offers (12 months) | Aggregation of consideration may breach the €8,000,000 threshold | Recalculate total over 12 months |
| Concurrent offers | Multiple investor pools | Maintain separate subscription materials and investor lists |
| FCA communication | Prior FCA guidance or classification of the offer | Separate approach for each security type |
| Pre-emption rights | Directors may lack authority to issue without rights offer | Obtain s.570 or s.571 special resolution |

**Companies Act 2006 filing obligations:**
- Form SH01 - return of allotment of shares (within 1 month)
- Registration of charges (within 21 days) if applicable, Board minutes and shareholder resolutions for disapplication of pre-emption rights, File at Companies House (Edinburgh for Scottish companies)

## Step 7: Deliverables

1. **Compliance memo** - exemption selection, basis for exclusion, investor verification controls, financial promotion compliance, resale restrictions, integration analysis
2. **Execution checklist** for issuer and legal advisers
3. **Legends and subscription representations**
4. **Companies House filing checklist** (SH01, charges register, special resolutions)
5. **Assumptions, open items, and risk flags**

Every output must begin with:
- **Assumptions** - exemption selected, investor categories targeted, financial promotion route
- **Open Items** - missing information, unresolved FCA requirements, [VERIFY] items

**Contingencies:** Reject non-qualifying subscriptions and document; if eligibility error discovered, consult legal counsel immediately; if controls cannot be enforced, recommend a full prospectus route.

## Post-Draft Alignment (Mandatory)

After delivering, ask:
1. Is the total aggregate consideration confirmed? Does it exceed €8,000,000?
2. Are there any concurrent or recent offers requiring integration analysis?
3. Could the securities be listed on AIM, Aquis, or another UK MTF post-issue?
4. Is FCA notification required or advisable for the offer structure?

## Checks and Pitfalls

**Quality gate, verify before finalising:**
- Exemption selection documented with rationale, Investor qualification route confirmed and certified, Financial promotion compliance route identified (s.21 FSMA)
- Legend language matches exemption and investor type, Integration analysis covers 12-month look-back and look-forward, Companies Act 2006 compliance confirmed (pre-emption, allotment, charges)
- All citations verified or flagged [VERIFY]
- Assumptions and open items listed prominently

**Rules:**
- Output is not legal advice; solicitor/advocate review required before use, Mark unverified rule text, thresholds, or dates with `[VERIFY]`
- If controls cannot be enforced, recommend a full prospectus, Maintain single source of truth across forms, disclosures, and marketing, Flag broker-dealer or finder compensation for separate FCA authorisation review, Do not fabricate regulatory thresholds, FCA rules, or filing procedures, every citation must be verified or flagged, Treat confidentiality and truthfulness as mandatory (Law Society of Scotland Practice Rules / SRA Standards and Regulations)

## Scotland/UK Adaptation

### Key Structural Differences

| US Concept | Scotland/UK Equivalent |
|---|---|
| SEC (Securities and Exchange Commission) | FCA (Financial Conduct Authority) |
| Rule 147 / Rule 147A (intrastate exemption) | No direct equivalent; use s.85(5) FSMA exemptions |
| State registration by qualification (blue sky) | No equivalent, UK has a single regulatory regime via the FCA |
| Blue sky laws (50-state review) | FCA Handbook, COBS, PRR, single UK-wide rulebook |
| SEC Form D filing | No direct equivalent; Companies House filings (SH01, charges) |
| Rule 152 integration | No equivalent provision; general FSMA integration analysis |
| Doing-business tests (revenue, assets, proceeds, employees) | Not required for FSMA prospectus exemptions |
| Residency verification (in-state) | Investor qualification tests replace residency |
| Class action under securities laws | Group proceedings (Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018) - limited |
| NSMIA pre-emption | N/A, UK is a single jurisdiction |
| IRS (tax on transfer/sale) | HMRC, stamp duty / SDRT on UK share transfers |
| FINRA | No equivalent, FCA regulates securities firms |

### Scottish Law Additions

- **Scottish company considerations**: If the issuer is a Scottish company (SCO prefix), separate rules apply to: floating charges under the Companies Act 1985 (as amended); registration at Companies House Edinburgh; service of documents; and execution of deeds under Scots law.
- **Execution of documents**: Under the Requirements of Writing (Scotland) Act 1995, subscription agreements and share certificates must be executed in the presence of a witness (subscribed with testing clause or attestation page).
- **Diligence**: If security is being granted (e.g., standard security over heritable property in Scotland, or floating charge), specific Scottish recording/registration formalities apply.
- **Prescription**: Claims under s.85 FSMA are subject to the Prescription and Limitation (Scotland) Act 1973 - 5-year short prescriptive period for delictual claims.
- **Judicial expenses**: In any litigation, expenses follow success (loser pays) under Scots law.

### Citation Check

Every reference to US statutes (Securities Act 1933, Rule 147/147A, state blue sky laws) has been replaced with UK/Scottish equivalents (FSMA 2000, PRR, FCA Handbook). Mark any unverified UK references with `[VERIFY]`. Flag any US concepts that cannot be cleanly adapted with `[SCOTS: Note]`.

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
