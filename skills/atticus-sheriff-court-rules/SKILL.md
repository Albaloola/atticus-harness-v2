---
name: atticus-sheriff-court-rules
language: en
description: Uses the Sheriff Court civil procedure rules within the harness-owned ScotCourts corpus for ordinary cause, simple procedure, summary cause, small claims, summary applications, specialist statutory applications, proof, expenses, appeals, and filing/bundle checks. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, Sheriff Court, ordinary cause, simple procedure, summary cause, rules, procedure, source-verification
atticus_refined: true
jurisdiction_focus: Scotland / Sheriff Court
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Atticus Sheriff Court Rules

## Purpose

Use the Sheriff Court civil procedure rules inside the harness-owned ScotCourts
corpus as the first procedural source for Sheriff Court work.

Default harness corpus category:

`legal-corpora/scotcourts/sheriff-court-civil-procedure-rules`

## Required Use

- When the forum is, may be, or should be checked as Sheriff Court, search this
  focused rules surface before finalising procedure advice, pleadings,
  applications, service/intimation steps, proof preparation, evidence recovery,
  expenses/taxation, appeals, or bundle/filing checklists.
- Use the focused Sheriff Court command surface before the broad ScotCourts
  surface when the issue is rule/procedure rather than form selection.
- Open or extract only the specific Markdown rule files needed for the matter.
  Do not load the entire Sheriff Court rules category into prompt context.
- Record source-log entries with rule document title, local path, rule category,
  access date, and the exact proposition supported.
- Treat the corpus as a local official-source snapshot. If currency matters,
  verify against the current SCTS/public source before filing, service, deadline
  reliance, or final procedural advice.

## Harness Commands

- List Sheriff Court rule documents: `harness rules sheriff-court list --json`
- Search Sheriff Court rules: `harness rules sheriff-court search "<issue or procedural step>" --phase <phase_id> --json`
- Build focused rule context: `harness rules sheriff-court context "<objective>" --phase <phase_id>`

For Sheriff Court forms and broader Scotland court guidance, use the broad
ScotCourts corpus:

- Search forms/guidance: `harness rules scotcourts search "<form or procedural step>" --phase <phase_id> --json`
- Build scoped corpus context: `harness rules scotcourts context "<objective>" --phase <phase_id>`

## Stage Mapping

- Intake/normalisation: forum, cause type, initiating writ/claim route,
  citations, notices, warrants, service, intimation, and competency checks.
- Evidence/fact extraction: proof, witness, productions, recovery, havers,
  child/vulnerable witness procedure, and evidential applications.
- Issue spotting and legal research: ordinary cause, simple procedure, summary
  cause, small claims, summary applications, bankruptcy, FAI, adoption, child
  support, childcare/maintenance, lay representation, taxation, and specialist
  statutory procedure.
- Merits/risk: expenses, taxation, diligence, bankruptcy, sequestration,
  summary decree, sist, appeal, competency, and time-limit-sensitive steps.
- Procedural route planning: cause type selection, claim value/forum routing,
  motions, amendments, counterclaims, appeals, proof, summary applications, and
  statutory applications.
- Document production: writs, claims, applications, minutes, notices,
  certificates, warrants, draft orders, service checklists, and lodging packs.
- Verification/hostile review: every Sheriff Court procedural step, rule,
  deadline, filing, service, intimation, proof, expenses, appeal, or form
  proposition relied on in an output.
- Bundle/war-room assembly: process, productions, proof materials, inventories,
  lodging requirements, expenses/taxation materials, appeal packs, and filing
  checklists.

## Output Discipline

Every Sheriff Court procedural proposition should be either:

- verified against a specific local Sheriff Court rule document;
- verified against a current official online source;
- marked as an assumption requiring source verification; or
- rejected as not supported.
