---
name: merit-review
language: en
description: Atticus UK/Scots legal skill for merit-review. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# State Merit Review Analysis

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

Produces pre-filing risk analysis and examiner-ready comment responses for non-covered securities offerings subject to state merit review. Covers cheap stock, promoter equity investment, voting rights, and promoter compensation under NASAA Statements of Policy.

## Quick Start

1. Confirm offering is NOT a covered security under 15 U.S.C. Section 77r
2. Gather intake documents (offering doc, charter, cap table, state list)
3. Run analysis steps 1-6 below
4. Draft comment response package or pre-filing memo
5. Prepare negotiation fallback positions per issue area

## Intake (Mandatory)

Gather before analysis unless user says "use defaults" or "just draft":

1. **Offering document** - Form 1-A, prospectus, PPM, or offering circular
2. **Charter documents** - Articles/certificate of incorporation, bylaws, amendments
3. **Cap table** - All issuances with dates, prices, consideration type, vesting, holder identity (Promoter vs. Non-Promoter)
4. **Issuance chronology** - Board consents, subscription agreements, service agreements
5. **Promoter compensation schedule** - Cash, equity, consulting, related-party contracts, loans
6. **Selling compensation terms** - Underwriter/placement agent agreements, warrants
7. **Historical financials** - Balance sheets for promoter equity calculation
8. **Target state list** - Filing pathway per state
9. **Federal exemption** - Reg A Tier 1/2, Rule 504, intrastate, direct registration
10. **Prior examiner correspondence** - Deficiency/comment letters if any

**Defaults if user doesn't respond:** NASAA SOP standards applied; Rule 405 promoter definition; 10% promoter equity investment benchmark.

### Threshold Questions

- Are securities "covered securities" under 15 U.S.C. Section 77r? (If yes, stop, no merit review)
- Shares issued for nominal cash or services within 36 months of filing?
- Promoters received equity disproportionate to cash/tangible asset contributions?
- Voting or control rights deviate from economic ownership?
- Offering proceeds repay insiders?
- State informally flagged issues?

## Step 1: Confirm Merit Review Applicability

| Covered (No Merit Review) | Not Covered (Merit Review Applies) |
|---|---|
| Listed on national exchange (NYSE, NASDAQ) | Reg A Tier 1 & 2 in merit states |
| Rule 506(b) / 506(c) | Rule 504 |
| Sold only to "qualified purchasers" | Intrastate offerings |
| | Direct public offerings not on national exchange |

Produce short posture memo: pathway, why merit review applies, verified citations. Flag risks to covered status (general solicitation, bad actor, integration).

## Step 2: Map Jurisdictional Standards

For each target state, verify:

| Factor | Source |
|---|---|
| Denial standard ("unfair, unjust, or inequitable") | State securities act |
| Registration method and merit review intensity | State regulator website |
| NASAA SOP adoption (Cheap Stock, Promoter's Equity, Unequal Voting) | State admin code |
| Coordinated Review availability (e.g., CR-3(b) for Reg A) | NASAA website |

**Key divergences** `[VERIFY current status]`:
- **California**: Own standards; Cal. Code Regs. Tit. 10, Section 260.140 et seq.
- **Texas**: Strict merit; arm's-length required for affiliated transactions
- **Washington**: Heightened scrutiny for development-stage; may require proceeds impoundment
- **New York**: Generally notice-filing; Martin Act may affect certain types

All cited standards must include verified URLs or `[VERIFY]` flag.

## Step 3: Analyze Cheap Stock

**Scope**: All equity issued to Promoters below public offering price within 36-month look-back.

**Quantitative analysis:**
1. Identify all Promoters per merit review definition
2. Calculate effective price per share (including conversion, warrants, liquidation preferences)
3. Compute dilutive effect: promoter price vs. public offering price
4. Calculate post-money ownership percentages

**Qualitative justification:** Early-stage risk, documented services rendered, vesting/lock-up/repurchase rights, milestones.

**Common remedies:** Escrow until earnings milestones, lock-ups, cancellations/reverse splits, operational use-of-proceeds conditions, enhanced dilution disclosure.

## Step 4: Analyze Promoter's Equity Investment

NASAA benchmark: promoter equity >= 10% of total aggregate offering price.

**Calculation (NASAA methodology, not GAAP):**
- Count: cash, tangible assets at documented fair value, Exclude: imputed services value, goodwill, State-specific: verify whether personal guarantees count

**Shortfall strategy:** Document tangible asset contributions, personal guarantees if permitted. Note: cheap stock + inadequate promoter investment is the highest-risk combination.

## Step 5: Review Voting Rights and Governance

NASAA SOP: voting rights proportionate to equity unless compelling justification.

| Issue | Risk |
|---|---|
| Dual-class super-voting shares | High, most merit states reject for retail |
| Blank check preferred stock | High |
| Minority shareholder elects majority of board | High |
| No class vote on mergers/liquidations/asset sales | Medium |
| No sunset on control provisions | Medium |

**Mitigation:** Sunset provisions, independent directors, class votes on major transactions, plain-English disclosure.

Verify "Description of Securities" matches actual charter/bylaws exactly.

## Step 6: Review Promoter Compensation

Build schedule: cash comp, equity grants, consulting fees, bonuses, company loans, related-party leases, IP payments, reimbursements. Connect each to use of proceeds.

Flag if proceeds repay insiders. Promoter definition may be broader than expected, examiners may classify control persons, significant consultants, or paid finders as promoters.

## Drafting Comment Response Package

**Components:**
1. Cover letter, point-by-point response to each examiner comment
2. Redline of offering document
3. Supporting exhibits (revised charter, escrow/lock-up agreements, updated cap table)

**Per-comment structure:**
1. Quote examiner comment verbatim
2. Cite applicable NASAA SOP or state admin code
3. Explain compliance or justify deviation
4. Reference specific redline page/section for remedy

**Tone:** Respectful, solution-oriented, legally precise. Not a litigation brief.

**Consistency:** Every factual assertion cites the record. Every legal assertion has verified citation or `[VERIFY]`. Restrictions promised must appear in binding agreements AND offering document.

## Negotiation Strategy

| Issue | Primary Position | Fallback 1 | Fallback 2 |
|---|---|---|---|
| Cheap stock | Dilution disclosure + time-based lock-up | Lock-up + repurchase on bad acts | Milestone-based escrow |
| Promoter investment | Tangible assets + guarantees | Defer insider comp until minimum raise | Restructure founder equity |
| Voting rights | Sunset + independent directors | Reduce super-voting + class vote on majors | Eliminate dual-class |
| Promoter comp | Full disclosure + market comparables | Cap reimbursements + defer consulting | Escrow promotional shares |

Cross-state: concession in one state may require disclosure updates for all states. Don't concede early without knowing other states' positions.

## Post-Draft Alignment

After delivering initial analysis, confirm:
1. Cap table and issuance chronology reconciled to charter authority?
2. Examiner indicated priority concerns or informal guidance?
3. Pursue coordinated review (CR-3(b))?
4. Concessions client has already decided to accept or reject?

## Quality Checklist

- [ ] Preemption determination confirmed with verified citation
- [ ] NASAA methodology (not GAAP) for promoter equity
- [ ] Cap table reconciles to charter authority, matches "Principal Shareholders" and "Dilution" sections
- [ ] All promoters identified under merit review definition (broader than typical)
- [ ] Cheap stock covers all issuances within 36-month look-back
- [ ] Voting rights match actual charter/bylaws, not just offering document
- [ ] Every citation verified or flagged `[VERIFY]`
- [ ] Adversarial scrub: would examiner find inconsistencies?
- [ ] Negotiation fallbacks prepared per issue area
- [ ] Assumptions and open items listed prominently

## Pitfalls

- **Never fabricate citations.** All NASAA policy text, statutory sections, and case citations must be verified via research or flagged `[VERIFY]`.
- **Separate strategy from response.** Comment response letters become public records in many states; keep privileged analysis in internal memos.
- **Anti-fraud overlay.** Never obscure a merit issue, disclose cheap stock, promoter comp, and unequal voting plainly.
- **NASAA SOPs are not uniform.** Always verify state-specific adoption before citing.
- **Recommend CR-3(b) coordinated review** where available.
- **Cap table errors:** Excluding intangible-property shares, not reconciling to charter authority, omitting derivatives, conclusory justifications without documentation.
- **Ethics:** Model Rules 1.1 (competence), 1.3 (diligence), 1.4 (communicate concession impact), 3.3/4.1 (candor to examiners).
- **Attorney review required.** All output requires review by a licensed securities attorney before submission.

## Scotland/UK Adaptation

### No "Blue Sky" Merit Review in the UK

The US system of **state-level merit review** does not exist in the UK. Securities regulation is entirely **centralised** under the Financial Services and Markets Act 2000 (FSMA). This skill's core methodology (pre-filing analysis, examiner correspondence, NASAA SOP applications) does not transfer to UK practice.

However, the **analytical structure** - assessing offering exemptions, regulatory classification, and disclosure obligations, translates to UK securities work.

### Key Changes for Scotland/UK

| US Concept | UK Equivalent |
|---|---|
| SEC (Securities and Exchange Commission) | **FCA** (Financial Conduct Authority) |
| State securities regulator (Blue Sky) | No state-level equivalent - **FCA is the single UK regulator** |
| NASAA Statements of Policy | No equivalent, regulation via **FCA Handbook** (Conduct of Business, Prospectus Regulation Rules) |
| Merit review (fair/just/equitable standard) | No merit review, UK uses **disclosure-based** regulation |
| Form 1-A (Reg A) | **UK Prospectus** (under UK Prospectus Regulation) |
| Rule 506(b)/(c) private placement | **Article 4 exemption** (qualified investors) or **Financial Promotion Order** exemptions |
| Merit review "pre-clearance" | No pre-clearance, FCA reviews prospectus content (not merits) |
| Cheap stock / promoter equity analysis | No equivalent, disclosure of related-party transactions (CA 2006 s.188) + MAR disclosure |
| CR-3(b) coordinated review | No equivalent, single UK regime, no state coordination |

### UK Offering Framework

The closest equivalents are:

1. **Prospectus Regulation** - Required for public offers exceeding €8 million in 12 months
   - Prospectus must be approved by FCA
   - FCA reviews for completeness, clarity, and consistency, not "fairness" of terms

2. **Financial Promotion Order 2005** - Exemptions for communicating financial promotions
   - Art. 19: Investment professionals
   - Art. 48: High net worth individuals
   - Art. 49: High net worth companies
   - Art. 50: Sophisticated investors
   - Art. 50A: Self-certified sophisticated investors
   - Art. 20A: Restricted investor schemes

3. **Private placement** - Not directly analogous to US; relies on exemptions from prospectus requirement and financial promotion restrictions

### Cap Table / Share Structure Analysis (UK Adaptation)

While there is no "cheap stock" or "promoter equity" review:

- **FCA Listing Rules** - Related-party transactions require disclosure and independent advice
- **Pre-emption rights** - Statutory under CA 2006 s.561; disapplication requires special resolution
- **Director dealings** - Must be disclosed under UK Market Abuse Regulation (UK MAR)
- **Substantial shareholding** - Notification required at 3%, 5%, and 1% thresholds thereafter
- **Transparency Directive** - Major holdings notified to FCA

### Key UK/Scotland Statutes

- Financial Services and Markets Act 2000 (FSMA 2000)
- UK Prospectus Regulation (onshored EU Prospectus Regulation)
- FCA Handbook (Prospectus Regulation Rules, PRR)
- Market Abuse Regulation (UK MAR)
- Companies Act 2006
- Financial Promotion Order 2005 (SI 2005/1529)
- Financial Services Act 2021

### Practitioner Notes

- The US merit review skill's methodology (structured pre-filing analysis, regulatory gap identification, negotiation strategies) is **analytically transferable** but must be completely reframed for UK law.
- UK securities work focuses on: (i) whether a prospectus is required; (ii) which exemption applies; (iii) FCA disclosure requirements; (iv) financial promotion compliance.
- **Scotland-specific**: Scottish-incorporated companies follow the same FSMA framework as the rest of the UK. No separate Scottish securities regulator exists. The Scottish courts (Court of Session) would have jurisdiction for disputes.
- See the guidance note in `scots-forms/UK-financial-promotion-offers-guide.md` for detailed UK offering procedures.

### [SCOTS: Note]
This skill is fundamentally US-centric (state merit review is a uniquely American concept). The general approach, structured exemption/classification analysis, regulatory correspondence, and strategic negotiation, can be adapted for UK practice, but the substantive rules are entirely different. Keep the skill's analytical framework and replace all US securities references with FSMA/UK PR equivalents.

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
