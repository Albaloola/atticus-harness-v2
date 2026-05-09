# Dillon / Legacy Act UKSC Benchmark

Benchmark matter: `dillon-legacy-act-uksc`

Run id: `ec22a4ac-2b53-4054-9e43-c9abba1d88a4`

Run date: 2026-05-09

Official sources:
- UK Supreme Court case page: https://www.supremecourt.uk/cases/uksc-2025-0013
- TNA judgment: https://caselaw.nationalarchives.gov.uk/uksc/2026/15

## Case Outcome

Known result: the Supreme Court unanimously allowed the Secretary of State's appeal on the Windsor Framework and ICRIR disclosure / next-of-kin grounds, and dismissed the applicants' Charter cross-appeal. The abandoned / unappealed Human Rights Act section 4 incompatibility declarations were not disturbed.

This nuance matters for scoring. One worker initially overclaimed that all incompatibility declarations were set aside; a later retry corrected the outcome.

## Source Packet

The raw official packet is stored under `benchmarks/dillon-legacy-act-uksc/raw/`.

The matter ingested 14 PDFs:
- `DIL-SRC-0001` Amnesty written case
- `DIL-SRC-0002` Department of Justice written case
- `DIL-SRC-0003` Dillon written case
- `DIL-SRC-0004` ECNI appeal written case
- `DIL-SRC-0005` ECNI written case
- `DIL-SRC-0006` ICRIR written case
- `DIL-SRC-0007` NIHRC written case
- `DIL-SRC-0008` NIHRC appeal written case
- `DIL-SRC-0009` Northern Ireland Victims Movement written case
- `DIL-SRC-0010` Police Ombudsman written case
- `DIL-SRC-0011` Statement of facts and issues
- `DIL-SRC-0012` Secretary of State written case
- `DIL-SRC-0013` Judgment
- `DIL-SRC-0014` Press summary

`DIL-SRC-0007` was the main image-heavy / OCR stress document. The visual OCR path indexed it where raw `pdftotext` gave only page markers.

## Harness Run

Command:

```bash
node dist/cli.js orchestrate dillon-legacy-act-uksc \
  --objective "Benchmark this large public UKSC record end to end..." \
  --max-depth 3 \
  --concurrency 2 \
  --background \
  --json
```

Final status:
- Matter status: `complete`
- Phase: `complete`
- Tasks: 42 total, 42 completed, 0 blocked, 0 failed
- Evidence count: 14
- Final orchestration summary: 10 / 10 phases completed, 138 findings, 43 risks
- Estimated total cost: 2.85
- Runtime log: `/home/alba/.atticus-harness/runtime/run-ec22a4ac-2b53-4054-9e43-c9abba1d88a4.log`

## Production Assessment

The harness selected the correct production universe for a retrospective appellate benchmark: all 14 official court documents. The final bundle worker grouped them as:
- 1 judgment
- 1 press summary
- 1 statement of facts and issues
- 3 core party written cases
- 8 intervener / related written cases

The harness correctly recognized that there was no live filing or service task and no Scotland-specific procedural route for this UKSC / Northern Ireland matter.

## What Worked

- End-to-end orchestration completed through all 10 stages.
- Tooling recovered from workers that returned `needs_followup`.
- OCR extraction handled the image-heavy NIHRC document well enough to index and search it.
- `matter_inventory` reduced schema guessing and gave workers a production-selection surface.
- The retry path corrected the key outcome nuance on the abandoned Human Rights Act appeal.

## Gaps Found And Fixed

Fixed in source after this run:
- `matter_inventory` now classifies document identity from evidence metadata / filenames instead of full local paths, so the matter name `dillon-legacy-act-uksc` no longer creates false `legacy` variants.
- `evidence_chunk_read` now exposes document chunk bounds, returned ranges, previous / next chunk indices, `endReached`, and continuation hints. Overshoot errors now include the valid range.
- `write_file` now supports append mode plus `expectedContentHash`, giving workers a safer way to build long artifacts section by section.
- Worker and system prompts now explicitly instruct agents to page through long reads and checkpoint long writes.
- Worker outputs and reducer prompts now require English JSON string values unless the operator asks otherwise.

## Remaining Risks

- Status telemetry stayed too generic during part of the live run and only became `complete` at the end.
- `candidateCount` and `artifactCount` remained 0 despite candidate transcripts and production analysis.
- Some workers still summarized tool/process chatter when structured final artifacts would be better.
- Citation verification can still fall back to brittle SQLite guesses when workers bypass `matter_inventory` schema guidance.
- Jurisdiction selection needs a stronger guard so Scotland procedure is not consulted for non-Scotland appellate records unless the matter actually has that nexus.
