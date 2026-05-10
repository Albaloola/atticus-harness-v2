import { LegalArtifactType } from './artifact-types.js';

export const TEMPLATES: Partial<Record<LegalArtifactType, string>> = {
  [LegalArtifactType.chronology]: `# Chronology

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Jurisdiction**: [JURISDICTION]
- **Date of Compilation**: [DATE]

## Key Dates

| Date | Event | Source | Relevance |
|------|-------|--------|-----------|
| [DATE] | [EVENT] | [SOURCE_ID] | [RELEVANCE] |

## Narrative Timeline

[CHRONOLOGICAL_NARRATIVE]

## Gaps

- [GAP_DESCRIPTION]
`,

  [LegalArtifactType.issue_map]: `# Issue Map

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Jurisdiction**: [JURISDICTION]
- **Date**: [DATE]

## Factual Issues

| Issue | Burden | Evidence | Strength |
|-------|--------|----------|----------|
| [ISSUE] | [PARTY] | [SOURCE_ID] | [Strong \| Moderate \| Weak \| Uncertain] |

## Legal Issues

| Issue | Burden | Authority | Strength |
|-------|--------|-----------|----------|
| [ISSUE] | [PARTY] | [AUTHORITY] | [Strong \| Moderate \| Weak \| Uncertain] |

## Procedural Issues

| Issue | Assessment |
|-------|-----------|
| [ISSUE] | [ASSESSMENT] |

## Remedy Issues

| Remedy Sought | Disputed? | Assessment |
|--------------|-----------|------------|
| [REMEDY] | [Yes \| No] | [ASSESSMENT] |

## Research Gaps

- [GAP_DESCRIPTION]
`,

  [LegalArtifactType.evidence_matrix]: `# Evidence Matrix

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Date**: [DATE]

## Evidence Inventory

| ID | Description | Source | Date | Type | Admissibility | Weight |
|----|-------------|--------|------|------|---------------|--------|
| [EVIDENCE_ID] | [DESCRIPTION] | [SOURCE_ID] | [DATE] | [Document \| Witness \| Expert \| Physical \| Digital] | [Admissible \| Conditional \| Questionable] | [High \| Medium \| Low] |

## Chain of Custody

| Evidence ID | Custody Event | Date | By |
|-------------|---------------|------|-----|
| [EVIDENCE_ID] | [EVENT] | [DATE] | [PERSON] |

## Evidence Gaps

- [GAP_DESCRIPTION]
`,

  [LegalArtifactType.legal_memo]: `# Legal Memorandum

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Jurisdiction**: [JURISDICTION]
- **Date**: [DATE]
- **Privileged**: [Yes \| No]

## Questions Presented

1. [QUESTION]

## Brief Answer

[BRIEF_ANSWER]

## Statement of Facts

[STATEMENT_OF_FACTS]

## Legal Analysis

### Applicable Law

[APPLICABLE_LAW]

### Application to Facts

[APPLICATION]

### Counter-Arguments

[COUNTER_ARGUMENTS]

## Conclusion

[CONCLUSION]

## Authorities Cited

| Authority | Proposition | Jurisdiction | Date | Relevance |
|-----------|------------|-------------|------|-----------|
| [AUTHORITY] | [PROPOSITION] | [JURISDICTION] | [DATE] | [RELEVANCE] |
`,

  [LegalArtifactType.procedure_plan]: `# Procedure Plan

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Jurisdiction**: [JURISDICTION]
- **Forum**: [FORUM]
- **Date**: [DATE]

## Procedural Posture

[PROCEDURAL_POSTURE]

## Available Pathways

| Pathway | Description | Pros | Cons | Risk | Cost Estimate |
|---------|-------------|------|------|------|---------------|
| [PATHWAY] | [DESCRIPTION] | [PROS] | [CONS] | [RISK] | [COST] |

## Limitation Periods

| Claim | Limitation Period | Expiry Date | Status |
|-------|-------------------|-------------|--------|
| [CLAIM] | [PERIOD] | [EXPIRY] | [Active \| Expired \| Critical] |

## Recommended Strategy

[RECOMMENDED_STRATEGY]

## Fallback Strategy

[FALLBACK_STRATEGY]

## Readiness Checklist

- [ ] [ITEM] - [STATUS]
`,

  [LegalArtifactType.risk_register]: `# Risk Register

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Date**: [DATE]

## Risk Entries

| Risk ID | Description | Category | Severity (1-5) | Likelihood (1-5) | Score | Level | Owner | Mitigations | Status | Review Date |
|---------|-------------|----------|----------------|------------------|-------|-------|-------|-------------|--------|-------------|
| [ID] | [DESCRIPTION] | [Contract \| Regulatory \| Litigation \| IP \| Data Privacy \| Employment \| Corporate \| Other] | [1-5] | [1-5] | [SCORE] | [GREEN \| YELLOW \| ORANGE \| RED] | [OWNER] | [MITIGATIONS] | [Open \| Mitigated \| Accepted \| Closed] | [DATE] |

## Summary

- **Total Risks**: [COUNT]
- **Critical (RED)**: [COUNT]
- **High (ORANGE)**: [COUNT]
- **Medium (YELLOW)**: [COUNT]
- **Low (GREEN)**: [COUNT]

## Escalation Recommendations

- [RECOMMENDATION]
`,

  [LegalArtifactType.pre_action_letter]: `# Pre-Action Letter

**Date**: [DATE]
**From**: [SENDER_NAME]
**To**: [RECIPIENT_NAME]

**Re**: [MATTER_REFERENCE]

Dear [RECIPIENT],

[LETTER_BODY]

Yours [FAITHFULLY/SINCERELY],

[SENDER_SIGNATURE_BLOCK]

## Annexes

1. [ANNEX_DESCRIPTION]
`,

  [LegalArtifactType.claim_draft]: `# Claim Draft

## Court
- **Court**: [COURT_NAME]
- **Case Number**: [CASE_NUMBER]
- **Claimant**: [CLAIMANT]
- **Defendant**: [DEFENDANT]
- **Date**: [DATE]

## Particulars of Claim

1. [PARAGRAPH_1]

## Relief Sought

1. [RELIEF_ITEM]

## Statement of Truth

[STATEMENT_OF_TRUTH]

## Annexes

1. [ANNEX_DESCRIPTION]
`,

  [LegalArtifactType.witness_statement]: `# Witness Statement

**Witness**: [WITNESS_NAME]
**Date**: [DATE]
**Matter**: [MATTER_SCOPE]

## Statement

1. I, [WITNESS_NAME], of [ADDRESS], [OCCUPATION], state as follows.

2. [PARAGRAPH_2]

## Statement of Truth

I believe that the facts stated in this witness statement are true. I understand that proceedings for contempt of court may be brought against anyone who makes, or causes to be made, a false statement in a document verified by a statement of truth without an honest belief in its truth.

Signed: [WITNESS_NAME]
Date: [DATE]

## Exhibits

| Exhibit ID | Description | Reference |
|------------|-------------|-----------|
| [EXHIBIT_ID] | [DESCRIPTION] | [REFERENCE] |
`,

  [LegalArtifactType.schedule_of_loss]: `# Schedule of Loss

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Claimant**: [CLAIMANT]
- **Date**: [DATE]

## Heads of Loss

### General Damages
| Item | Description | Amount | Basis |
|------|-------------|--------|-------|
| [ITEM] | [DESCRIPTION] | [AMOUNT] | [BASIS] |

### Special Damages
| Item | Description | Amount | Basis |
|------|-------------|--------|-------|
| [ITEM] | [DESCRIPTION] | [AMOUNT] | [BASIS] |

### Future Losses
| Item | Description | Amount | Basis |
|------|-------------|--------|-------|
| [ITEM] | [DESCRIPTION] | [AMOUNT] | [BASIS] |

## Totals

| Category | Amount |
|----------|--------|
| General Damages | [AMOUNT] |
| Special Damages | [AMOUNT] |
| Future Losses | [AMOUNT] |
| Interest | [AMOUNT] |
| **Grand Total** | [AMOUNT] |

## Interest Calculations

[INTEREST_METHODOLOGY]

## Annexes

1. [ANNEX_DESCRIPTION]
`,

  [LegalArtifactType.draft_order]: `# Draft Order

**Court**: [COURT_NAME]
**Case Number**: [CASE_NUMBER]
**Date**: [DATE]

## Order

UPON [RECITAL_1]

IT IS ORDERED THAT:

1. [ORDER_ITEM_1]

## Costs

[COSTS_PROVISION]

## Liberty to Apply

[LIBERTY_TO_APPLY]

Dated [DATE]
`,

  [LegalArtifactType.bundle_index]: `# Bundle Index

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Court**: [COURT_NAME]
- **Date**: [DATE]

## Bundle Contents

| Tab | Document ID | Description | Pages | Category |
|-----|-------------|-------------|-------|-----------|
| [TAB] | [DOC_ID] | [DESCRIPTION] | [PAGES] | [Pleadings \| Evidence \| Authorities \| Correspondence \| Other] |

## Cross-Reference Index

| Document ID | Related Documents | Related Issues |
|-------------|-------------------|----------------|
| [DOC_ID] | [RELATED_DOCS] | [RELATED_ISSUES] |

## Filing Requirements Checklist

- [ ] [REQUIREMENT] - [STATUS]
`,

  [LegalArtifactType.filing_checklist]: `# Filing Checklist

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Court**: [COURT_NAME]
- **Filing Deadline**: [DEADLINE]
- **Date**: [DATE]

## Documents to File

| Document | Status | Version | Signed? | Filed? | Notes |
|----------|--------|---------|---------|--------|-------|
| [DOCUMENT] | [Ready \| Draft \| Not Started] | [VERSION] | [Yes \| No] | [Yes \| No] | [NOTES] |

## Filing Requirements

| Requirement | Met? | Notes |
|-------------|------|-------|
| [REQUIREMENT] | [Yes \| No] | [NOTES] |

## Court Fees

| Item | Amount | Paid? |
|------|--------|-------|
| [FEE_ITEM] | [AMOUNT] | [Yes \| No] |

## Service Requirements

| Recipient | Document | Method | Deadline | Served? |
|-----------|----------|--------|----------|---------|
| [RECIPIENT] | [DOCUMENT] | [METHOD] | [DEADLINE] | [Yes \| No] |
`,

  [LegalArtifactType.operator_handoff_report]: `# Operator Handoff Report

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Jurisdiction**: [JURISDICTION]
- **Date of Handoff**: [DATE]

## Executive Summary

[EXECUTIVE_SUMMARY]

## Work Products Delivered

| Artifact ID | Type | Description | Status | Location |
|-------------|------|-------------|--------|----------|
| [ARTIFACT_ID] | [TYPE] | [DESCRIPTION] | [Complete \| Draft \| Pending Review] | [LOCATION] |

## Key Findings

1. [FINDING]

## Outstanding Gaps

1. [GAP] - [RECOMMENDED_ACTION]

## Decisions Required from Operator

1. [DECISION_REQUIRED]

## Risk Summary

- **Overall Risk Level**: [GREEN \| YELLOW \| ORANGE \| RED]
- **Critical Risks**: [COUNT]
- **Key Risk**: [DESCRIPTION]

## Review Recommendations

1. [RECOMMENDATION]

## Next Steps

1. [STEP] - [OWNER] - [DEADLINE]
`,

  [LegalArtifactType.document_output_bundle]: `# Document Output Bundle

## Matter
- **Matter Scope**: [MATTER_SCOPE]
- **Output Directory**: [OUTPUT_DIRECTORY]
- **Date Produced**: [DATE]

## Produced Documents

| File | Source Artifact | Format | Notes |
|------|-----------------|--------|-------|
| [FILE_NAME] | [ARTIFACT_ID] | [FORMAT] | [NOTES] |

## Archived Superseded Outputs

1. [ARCHIVED_FILE]

## Operator Summary

[SUMMARY]
`,
};

export function getArtifactTemplate(type: LegalArtifactType): string | undefined {
  return TEMPLATES[type];
}
