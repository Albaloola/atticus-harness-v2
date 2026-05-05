---
name: motion-to-avoid-lien
language: en
description: Drafts an application to challenge or reduce a standard security or lien in Scottish sequestration or UK insolvency proceedings. Produces a litigation-ready application with caption, impairment calculations, legal argument, and crave. Use when challenging standard securities, floating charges, or retention rights that impair debtor's rights in sequestration, winding up, or administration. [Atticus UK/Scots refined]
tags:
- insolvency, sequestration, lien, security, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Application to Challenge Lien/Standard Security, Scotland/UK Adaptation

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

Drafts an application to challenge, reduce, or avoid a lien, standard security, or floating charge impairing a debtor's rights in Scottish sequestration or UK insolvency, with statutory analysis and impairment calculation.

[SCOTS: Note] Scots law does not have a direct equivalent to 11 U.S.C. § 522(f) lien avoidance. The closest mechanisms are:
- Reduction of unfair preferences or gratuitous alienations under Bankruptcy (Scotland) Act 2016
- Challenge to floating charges or standard securities under Insolvency Act 1986
- Protected trust deed composition or sequestration diligence rules, Extortionate credit transaction challenges

This skill is adapted for Scottish and UK insolvency contexts and should be read with these differences in mind.

## Prerequisites

Gather before drafting:

1. **Case info** - sequestration/winding up number, case type (sequestration/MVL/CVL/administration), date of insolvency event, court (Sheriff Court / Court of Session)
2. **Property** - description (legal description or address), type (heritable/moveable), current FMV, valuations/appraisals
3. **Security** - security holder name, type (standard security, floating charge, fixed charge, lien, arrestment), originating document, recording date, amount
4. **Senior encumbrances** - all securities senior to challenged security with amounts
5. **Statutory basis** - identify the specific provision (Bankruptcy (Scotland) Act 2016, Insolvency Act 1986)
6. **Local rules** - formatting, notice periods, hearing requirements (Sheriff Court Ordinary Cause / Court of Session)

## Output Structure

### 1. Caption

Include: full court name, case number, type of proceedings, debtor name, applicant name, crave/motion title, judge (if local rules require). Format per local rules.

### 2. Introduction (Crave)

One to two paragraphs identifying: applicant, specific security/standard security and holder, property subject to security, statutory basis, and core premise.

### 3. Factual Background

Present chronologically: date of sequestration/insolvency, property description and FMV, security origin and registration, applicable statutory provisions. For impairment calculation:

```
  Security to be challenged:              £________
+ All other securities on property:       £________
+ Debtor's statutory protection:          £________
= Total:                                  £________
- Fair market value of property:          £________
= Impairment amount:                      £________
```

### 4. Legal Argument

**Unfair Preferences (s. 98, Bankruptcy (Scotland) Act 2016):** Challenge grant of security within 6 months before sequestration where debtor was insolvent.

**Gratuitous Alienations (s. 97, Bankruptcy (Scotland) Act 2016):** Challenge transaction at undervalue within 5 years.

**Extortionate Credit (s. 100, Bankruptcy (Scotland) Act 2016):** Challenge terms of credit to be exorbitant.

**Floating charges (Insolvency Act 1986, s. 245):** Challenge floating charge granted within 12 months (or 2 years for connected persons) of winding up.

**Standard securities:** Challenge on basis of defective registration, erroneous valuation, or statutory grounds under the Bankruptcy (Scotland) Act 2016.

Cite relevant Court of Session and Sheriff Court precedent. Address likely counterarguments on valuation, security classification, or timeliness.

### 5. Crave for Relief (Prayer for Remedy)

Request: (1) reduce the standard security/lien entirely or to extent of impairment, (2) declare the security void or restricted, (3) other just relief, (4) interim orders if appropriate.

### 6. Exhibits

- [ ] Standard security, floating charge, or other security document
- [ ] Registration evidence (Registers of Scotland / Companies House)
- [ ] List of assets and valuations
- [ ] Schedule of recoverable property
- [ ] Affidavit/declaration of applicant (if applicable)

### 7. Service/Motion

Serve on security holder, trustee/AiB, and all parties in interest per local rules. Specify method, date, and addresses.

## Pitfalls

- **No direct US-style "lien avoidance" in Scotland** - the concept exists only by analogy through reduction/preference actions
- **Math errors** - courts reject applications with incorrect calculations; double-check arithmetic
- **Statute of limitations** - preference actions have strict time limits (6 months for unfair preferences; 5 years for gratuitous alienations)
- **Time bar** - check the prescriptive period for any action
- **Citations** - cite Scottish statutes properly; mark unverified citations with [VERIFY]
- **Local rules** - formatting (margins, font, spacing, page limits) and notice periods vary by court
- **Trustee involvement** - in sequestration, the permanent trustee is the proper party to raise such actions
- **Periodic payments** - Scottish diligence rules differ from US automatic stay provisions

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- 11 U.S.C. § 522(f) (US Bankruptcy Code) → Bankruptcy (Scotland) Act 2016 (ss. 97 to 101); Insolvency Act 1986
- Motion → Application/Petition (Scotland); Application (England/Wales)
- Judicial lien / NPMSI → Standard security, floating charge, fixed charge, arrestment, inhibition, Exemption (Schedule C) → Statutory protection for debtor's dwellinghouse (s. 38 to 41, Bankruptcy (Scotland) Act 2016)
- Chapter 7/11/13 → Sequestration, MVL, CVL, Administration, FMV appraisals → Professional valuation (often by trustee)
- FRBP 7004/9014 → Sheriff Court Rules / Court of Session Rules, Bluebook citations → OSCOLA / Scottish court citation conventions, Opt-out states (state vs. federal exemptions) → N/A, Scotland applies one statutory framework

**Key Scottish/UK considerations:**
- No direct US § 522(f) motion to avoid lien in Scots law, closest is reduction of unfair preferences or gratuitous alienations, In Scotland, reduction actions are raised by the permanent trustee (sequestration) or liquidator (winding up)
- Time limits: 6 months for unfair preferences; 5 years for gratuitous alienations; 20-year long-stop for reduction, Standard securities are the Scottish equivalent of mortgages; floating charges are a distinct Scottish/UK creation, AIB (Accountant in Bankruptcy) oversees sequestration in Scotland, Challenge to securities must be raised in the appropriate court (Sheriff Court for sequestration; Court of Session for complex matters)
- No US-style exemption planning, Scottish sequestration has defined protected assets, The Bankruptcy and Diligence etc. (Scotland) Act 2007 reformed diligence and abolished certain heritable securities

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
