---
name: trademark-clearance
language: en
description: Generates a trademark clearance search report evaluating mark availability and registrability across UK and international sources. Applies the UK Trade Marks Act 1994 likelihood-of-confusion test. Use when conducting trade mark clearance searches, pre-filing availability opinions, or infringement risk assessments for UK and Scottish businesses. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Trade Mark Clearance Search Report (UK)

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

Evaluates availability and registrability of a proposed mark across UK, EU (where relevant), and international sources, with conflict analysis and actionable filing recommendations for UK/Scottish businesses. [SCOTS: Note] UK trade mark law is governed by the Trade Marks Act 1994 (which implements the EU Trade Marks Directive) and registered through the UK Intellectual Property Office (IPO). Scotland is a single jurisdiction within the UK for trade mark purposes, there is no separate Scottish trade mark register. Scottish unregistered rights (passing off) exist under the common law of Scotland.

## Required Inputs

1. **Proposed mark** - exact mark as used (word, design, or combination)
2. **Goods/services** - description with UK/Nice Classification codes
3. **Geographic scope** - UK minimum; add EU (if post-Brexit protection needed), or other international jurisdictions
4. **Client context** - current markets, expansion plans, channels of trade; Scottish businesses should consider UK-wide and international protection
5. **Scope limitations** - any industry, geographic, or time constraints

## Quick Start

1. Gather inputs above
2. Search all applicable databases (UK IPO, EUIPO, common law, international)
3. Tabulate conflicts ranked by similarity
4. Apply UK Trade Marks Act 1994, s.5(2) likelihood-of-confusion test to each significant conflict
5. Rate risk (High / Moderate / Low) and issue recommendation

## Report Workflow

### Step 1: Mark Identification

Tabulate: proposed mark (type: word/design/combo), goods/services with Nice codes, geographic scope, and any search limitations.

### Step 2: Search Sources

| Source | Scope |
|--------|-------|
| **UK IPO** | Registered UK trade marks (national); also search UK IPO Image/Design search for device marks |
| **EUIPO** | EU trade marks (EUTMs) - still relevant post-Brexit for UK businesses trading in EU |
| **Common law** | Search engines, Companies House (company names), domain WHOIS, business directories, social media, trade publications |
| **International** | WIPO Global Brand Database (Madrid System), national offices (if applicable), designate UK via Madrid for international strategy |
| **Scottish-specific** | Scottish Register of Companies (Companies House Edinburgh), Scottish business directories, Scottish trades directories |

### Step 3: Document Findings

For each potentially conflicting mark, record:

- Reg./Application No. and status (Registered / Published for Opposition / Pending / Expired / Revoked / Cancelled)
- Mark description (including design elements), owner, filing/priority dates, International class(es) and full goods/services specification, Similarity assessment: visual, phonetic, conceptual, overall impression

Organise by degree of conflict (most similar first). Include expired/cancelled marks, the two-year "non-use grace period" before revocation under TMA 1994 s.46(1)(a) may mean rights persist.

**UK IPO:** Same fields plus note whether mark filed pre- or post-Brexit transition period (1 January 2021 - comparable marks created for UK).

**Common law uses (including Scotland):** Document business name, goods/services, evidence of use (URLs, directories), geographic scope, and duration indicators. In Scotland, passing off actions are governed by the common law, earlier unregistered use in Scotland can invalidate a later UK registration.

**International:** Flag Madrid registrations designating the UK, EU-wide EUTMs (with UK "clones"/comparable marks), and first-to-file jurisdictions requiring early registration (e.g., China, most of continental Europe).

### Step 4: Conflict Analysis

Apply the **Trade Marks Act 1994, s.5(2)(b)** likelihood-of-confusion test to each significant conflict, the UK test:

| Factor | Key Considerations |
|--------|--------------------|
| Mark similarity | Visual, aural, conceptual similarity, assessed globally (Sabel BV v Puma [1998] ETMR 1) |
| Goods/services similarity | Same description / complementary / competitive; also consider "similarity" in broader commercial context |
| Earlier mark's distinctiveness | Highly distinctive marks (invented words) get wider protection; descriptive marks narrower protection |
| Average consumer | Ordinary consumer of the goods: level of attention, degree of similarity needed for confusion |
| Global appreciation | Marks and goods/services are interdependent, lesser similarity in goods may be offset by greater mark similarity (Canon KK v Metro-Goldwyn-Mayer [1999] ETMR 1) |
| Actual confusion | Any evidence of confusion in the marketplace |
| Honest concurrent use | Possible defence under TMA 1994 s.7(2) - UK accepts this more readily than some EU states |
| Bad faith | Application in bad faith (TMA 1994 s.3(6)) - ground for invalidity |

**Risk ratings:**

- **High** - Likely opposition / infringement action; advise against adoption
- **Moderate** - Conflict exists; mitigation strategies available (limited specification, consent letter, co-existence agreement)
- **Low** - Minor concern; proceed with monitoring

### Step 5: Recommendation

Issue one of three outcomes:

**Clear path:** Mark appears available for registration in UK. Recommend filing strategy (standard UK application; consider EU or Madrid international if wider protection needed), watch service, and consistent use protocols.

**Moderate conflicts:** Narrow goods/services specification, modify mark for distinctiveness (add distinctive element, stylised device), pursue letter of consent from earlier mark owner, or proceed with monitoring and reservations.

**Substantial conflicts:** Advise against adoption. Recommend alternative marks, new clearance searches, or acquisition of conflicting rights.

**Scotland-specific:** Scottish small/medium enterprises (SMEs) should be advised to register UK trade marks as a priority, passing off claims are more difficult and expensive to prove than a registered right. Scottish Enterprise and Business Gateway provide free IP audit services.

### Step 6: Next Steps Checklist

```
- [ ] File UK trade mark application (standard / fast-track with IPO Right Start)
- [ ] Consider EUIPO application if trading or planning to trade in EU
- [ ] Implement trade mark watch service for relevant classes
- [ ] Establish consistent use protocols (TM marking, style guide)
- [ ] Consider domain name registrations to match mark
- [ ] Register at UK Companies House (company name protection)
- [ ] Consider register of .scot / .uk / .co.uk domains
- [ ] Note path to invalidity challenge (5 years non-use grounds at any time post-registration)
- [ ] Retain proof of use records for non-use attacks
- [ ] Scotland: document earliest use in Scotland for potential passing off claim
```

## Pitfalls and Checks

- Marks need not be identical to create confusion, evaluate global impression (Sabel v Puma)
- Common law passing off rights in Scotland can block UK registration and create infringement liability, never ignore unregistered rights, Abandoned/expired UK registrations may retain residual rights (non-use period: 5 years of non-use before revocation)
- Post-Brexit: UK is a separate jurisdiction, EUTMs registered before 1 Jan 2021 were cloned as comparable UK marks with same filing date; EUTMs filed after require separate UK application, First-to-file (most non-UK jurisdictions) vs. first-to-use (UK recognises both, but registered rights are stronger)
- UK IPO Right Start service: pre-application examiner check, reduces risk of rejection, Use of ® symbol: only for registered UK/EU marks; unregistered use may be a criminal offence under TMA 1994 s.94
- Use of ™ symbol: no restriction in UK, indicates claim to common law rights, Faster registration: UK IPO can register in 3-4 months with pre-application check, Opposition period: 2 months from publication in UK Trade Marks Journal, Mark all uncertain legal citations with `[VERIFY]`
- **Never guarantee absolute clearance** - always caveat that new conflicts may emerge post-search; UK IPO searches are not exhaustive (particularly for unregistered rights)

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- USPTO TESS → UK IPO (Intellectual Property Office) search tools, Lanham Act → Trade Marks Act 1994 (UK), implementing retained EU Trade Marks Directive, Lanham Act § 43(a) likelihood-of-confusion test → TMA 1994 s.5(2)(b) likelihood-of-confusion test (Sabel v Puma / Canon KK / Lloyd Schuhfabrik test)
- US state registries → No separate Scottish register; UK-wide register at UK IPO, Common law → Passing off (UK common law, including Scottish passing off under the common law of Scotland)
- WIPO Global Brand Database → Same (international regime, with UK/Madrid designation)
- EUIPO → EU Trade Marks (UK's continued participation limited post-Brexit; comparable marks for pre-2021 registrations)
- State-specific considerations → Scottish-specific: passing off, Companies House Edinburgh, Scottish Enterprise IP audit, First-to-use (US) → First-to-file (UK primary basis, but unregistered rights recognised via passing off)
- Incontestability (US 5-year continuous use) → UK: after 5 years, mark may become immune from non-use attack but can still be challenged on other grounds (invalidity)
- US state registrations → Scottish company name protection (Companies House) / Business name registration, Federal registration advantages → UK registration advantages: prima facie validity, right to use ®, right to bring infringement action, claim to passing off enhanced, Filing recommendation: standard UK application → added UK IPO Right Start (fast-track pre-examination) reference, Added post-Brexit transition guidance (comparable/ clone marks, separate UK registration needed for new EUTMs)
- Added Scottish Enterprise / Business Gateway IP audit services for Scottish SMEs, Added .scot domain names, Added Scottish passing off law guidance

**Key Scottish/UK considerations:**
- No separate Scottish trade mark register, UK IPO registers rights for entire UK, Passing off claims in Scotland follow Scottish common law (Erven Warnink v Townend, the Advocat case, applies throughout UK)
- Scottish businesses should consider both UK and EUIPO protection, Use of ® limited to registered marks (UK or EU); misuse is criminal offence, UK IPO Right Start fast track: reduced filing fee and pre-examination check, Opposition period: 2 months from UK Trade Marks Journal publication, Post-Brexit: UK owns its own register; separate filing needed for EU protection, Scottish Enterprise / Business Gateway provide free IP audits for Scottish SMEs
- .scot domain suffix available, register to prevent third-party cybersquatting, Company names at Companies House (Edinburgh for Scottish companies) provide additional brand protection route

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
