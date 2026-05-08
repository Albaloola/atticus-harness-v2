---
name: atticus-scotcourts-corpus
language: en
description: Uses the harness-owned ScotCourts corpus of Scotland court forms, procedure rules, and court guidance for scoped document selection, procedural lookup, drafting support, verification, and bundle preparation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, courts, forms, rules, procedure, source-verification
atticus_refined: true
jurisdiction_focus: Scotland / Scottish courts
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Atticus ScotCourts Corpus

## Purpose

Use the harness-owned ScotCourts corpus to find the Scotland court forms, rules,
and guidance documents that are relevant to the current task without loading the
whole corpus into model context.

Default harness corpus path:

`legal-corpora/scotcourts`

## Required Use

- Use this corpus for Scotland court forms, sheriff court procedure, Sheriff
  Appeal Court forms, criminal procedure forms/rules, Court of Session forms and
  rules, fee exemption forms, and SCTS guidance.
- Expect rules/procedure/guidance materials to be Markdown-normalized for easy
  retrieval. Expect court form originals to remain in their official file
  formats because those are needed for drafting and filing preparation.
- Search first, then open or extract only the specific files that match the
  current matter, forum, stage, document type, and procedural step.
- Do not paste or load the full corpus into a prompt. The search/context
  commands are designed to return a small ranked shortlist.
- Record source-log entries with title, local harness path, document kind,
  relevant court/category, access date, and the proposition or form purpose
  supported.
- Treat the corpus as a local snapshot. If currency matters, verify against the
  current SCTS/public source before filing, service, deadline reliance, or final
  procedural advice.

## Harness Commands

- List documents: `harness rules scotcourts list --json`
- Search documents: `harness rules scotcourts search "<issue, form, or procedural step>" --phase <phase_id> --json`
- Build scoped context: `harness rules scotcourts context "<objective>" --phase <phase_id>`
- Refresh metadata cache: `harness rules scotcourts index --json`
- Optional text cache: `harness rules scotcourts index --extract-text --max-text-docs <n> --json`
- Normalize non-form rules/procedure files to Markdown: `harness rules scotcourts normalize --json`

For Sheriff Court procedure-only questions, prefer the focused Sheriff Court
rules surface before the broad corpus:

- Search Sheriff Court rules: `harness rules sheriff-court search "<issue or procedural step>" --phase <phase_id> --json`
- Build Sheriff Court rule context: `harness rules sheriff-court context "<objective>" --phase <phase_id>`

For Court of Session procedure-only questions, prefer the focused Court of
Session rules surface before the broad corpus:

- Search Court of Session rules: `harness rules court-session search "<issue or procedural step>" --phase <phase_id> --json`
- Build Court of Session rule context: `harness rules court-session context "<objective>" --phase <phase_id>`

## Stage Mapping

- Intake/normalisation: fee exemptions, citations, notices, service/intimation,
  initiating writs, applications, summonses, petitions, and forum identifiers.
- Evidence/fact extraction: proof, witness, vulnerable witness, productions,
  haver, recovery, recording, and evidential procedure forms.
- Issue spotting and legal research: civil procedure rules, criminal procedure
  rules, guidance, appeal routes, special statutory forms, and forum-specific
  rules.
- Merits/risk: expenses, taxation, fee exemption, diligence, bankruptcy,
  sequestration, time-to-pay, summary decree, appeal, and competency materials.
- Procedural route planning: ordinary cause, simple procedure, summary cause,
  small claims, sheriff appeal, Court of Session, criminal procedure, and
  specialist statutory rules.
- Document production: forms, standard orders, petitions, minutes, notices,
  certificates, warrants, applications, draft orders, and sheriff/court-specific
  templates.
- Verification/hostile review: any procedural rule, form, service step, filing
  step, deadline, or court-specific requirement relied on in an output.
- Bundle/war-room assembly: inventories, lodging guidance, proof/jury materials,
  forms, orders, and filing checklists.

## Output Discipline

Every Scotland court document/form/rule proposition should be either:

- verified against a specific local ScotCourts corpus document;
- verified against a current official online source;
- marked as an assumption requiring source verification; or
- rejected as not supported.
