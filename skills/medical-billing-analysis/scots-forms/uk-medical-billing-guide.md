# UK/Scotland Medical Billing Guide

## Overview

This guide provides the UK/Scottish equivalents for US medical billing concepts. The UK healthcare system is fundamentally different from the US system, NHS treatment is state-funded and free at the point of use, while private healthcare follows different billing models. Use alongside the main `medical-billing-analysis` skill, adapted for UK/Scottish personal injury and clinical negligence claims.

**Key principle:** There is no US-style medical billing system in the UK. NHS treatment generates no itemised bill for the patient. Private treatment generates invoices but these follow different coding and pricing frameworks. Personal injury medicals may be NHS-funded (no bill) or privately arranged via Medical Reporting Organisations (MROs) with specific fee scales.

---

## 1. Coding Systems

### UK Procedure Coding: OPCS-4

| US System | UK Equivalent |
|-----------|---------------|
| CPT (Current Procedural Terminology) | OPCS-4 (Classification of Interventions and Procedures, 4th revision) |
| HCPCS Level II | Included within OPCS-4 (no separate national codes) |
| ICD-10-CM | ICD-10 (same WHO standard, UK-specific tabular list) |
| DRG | HRG4+ (Healthcare Resource Groups) |
| NCCI/MUE edits | NHS Coding Standards (different framework) |

**OPCS-4 key features:**
- Maintained by NHS Classifications Service (part of NHS England)
- Updated annually (April)
- Alphanumeric codes: one letter followed by 3-4 digits, e.g., A02.1 (Excision of tonsil)
- Approximately 8,000 codes across 26 chapters (body-system based)
- Mandatory for all NHS inpatient and day-case episodes, Also used for some outpatient procedures and imaging

**ICD-10 in the UK:**
- UK National Clinical Coding Standards apply
- 4-character codes standard (3-character + 1 decimal)
- Specific coding rules differ from US ICD-10-CM, Seventh-character extensions are different from US

**HRG4+ (Healthcare Resource Groups):**
- NHS payment grouping system, Each HRG bundles clinically similar procedures with similar resource use, NHS National Tariff sets the base price per HRG, No equivalent of US DRG outlier payments, Updated annually

### Private Billing Codes

Private hospitals in the UK do not use CPT/HCPCS. Instead:
- **Private Medical Insurance (PMI) schedules** - each insurer has its own fee schedule
- **Consultant fee scales** - either fixed (per PMI agreement) or individually negotiated
- **Hospital charges** - based on per-day (hotel) charges + procedure-specific fees
- **Medical Reporting Organisations (MROs)** - charge per report type per the Civil Procedure Rules / Scottish PI Protocol fee scales

> [SCOTS: Note] Never attempt to map a private UK invoice to a CPT/HCPCS code, the coding framework is different. UK private hospitals use internal service codes, not a nationally standardised coding system.

---

## 2. NHS Payment / National Tariff

### NHS National Tariff Payment System

The NHS Payment Scheme (updated annually) sets the prices NHS providers receive.

**Key concepts:**

| Concept | Description |
|---------|-------------|
| HRG4+ | Payment grouping system |
| National tariff base price | Price per HRG for elective / non-elective care |
| MFF (Market Forces Factor) | Geographic adjustment for staff/capital costs |
| Top-up payments | For specialised services, high-cost devices |
| Best practice tariffs | Higher payment for clinically optimal pathways |
| Outpatient tariff | Fixed price per attendance |
| A&E tariff | Fixed price per attendance |
| Ambulance tariff | Fixed price per journey |

**HRG4+ structure:**
- Each episode assigned to an HRG based on OPCS-4 / ICD-10 codes, HRG codes: e.g., HB22C (Major Hip Procedures, Category 3, with Major CC)
- Base price multiplied by MFF = provider payment, Best practice tariffs override standard for certain pathways (e.g., hip/knee replacement, stroke)

**National tariff 2024/25 approximate base rates (illustrative, `[VERIFY current year]`):**
- Elective inpatient: £3,000-£15,000 depending on HRG, Outpatient attendance: £120-£250
- A&E attendance: £200-£450
- Critical care per day: £1,200-£2,500

### What This Means for Personal Injury

- **NHS treatment**: The NHS provides treatment free at point of use. There is no itemised bill for the claimant. The damages claim is for the treatment's value as a "gratuitous service" or, in Scotland, under the principle of recovery of reasonable necessary expenses.
- **NHS continuing care**: NHS continuing healthcare (fully funded by NHS) - no damages claim
- **NHS prescription charges**: Scotland abolished NHS prescription charges in 2011. England still charges £9.90 per item.
- **Private treatment**: Claimant may claim cost of private treatment if reasonable and necessary

> [SCOTS: Note] In Scotland, the Damages (Scotland) Act 2011, s.12(1) provides the court shall have regard to the state-funded nature of NHS care when assessing damages. This means the value of NHS treatment is **not** recovered as damages. Only private treatment costs and any out-of-pocket expenses are recoverable. This is a fundamental difference from the US system.

---

## 3. Private Medical Insurance (PMI) Billing

### PMI in the UK Context

- PMI is regulated by the FCA (not state equivalent of US insurance regulation)
- No equivalent of ERISA self-funded plans, Most PMI covers acute private hospital treatment only, Pre-existing conditions are generally excluded, Cash plans (e.g., Bupa Cash Plan) provide fixed benefits per treatment, PMI is typically individual or employer-paid

**PMI claims process:**
1. Policyholder receives private treatment
2. Provider invoices the insurer directly (or bills patient, patient claims)
3. Insurer pays per agreed schedule
4. Excess/co-pay may apply

**PMI fee schedules:**
- Each insurer negotiates its own fee schedule with hospitals and consultants, BUPA: BUPA Schedule of Fees, AXA PPP: Fee per procedure per agreed rate, WPA, Simplyhealth, Aviva: Similar individual schedules, No standardised fee schedule equivalent to FAIR Health or MPFS

**For personal injury analysis:**
- If claimant has PMI, check whether PI treatment was under PMI or NHS, If PMI-funded, the insurer may have a contractual right to recover (subrogation)
- PMI pre-approval often required for hospital treatment, Compare PMI fees with NHS tariff for reasonableness assessment

---

## 4. Medical Reporting Organisations (MROs)

### Role in Personal Injury Litigation

MROs arrange medical reports for personal injury claims. They are a key interface between the claimant/solicitor and medical experts.

**Types of MRO arrangement:**
- **Panel MROs** - Law firm's approved panel
- **Direct MROs** - Claimant/solicitor arranges direct with expert
- **Joint instruction** - Both parties agree on expert, MRO handles logistics

**Billing:**
- Fees set per the Civil Procedure Rules (CPR) practice direction for pre-action protocols, Scottish PI Protocol specifies fee scales for medical reports, Typical fees: £200-£600 for basic report, £600-£2,000 for complex report, MRO may charge arrangement/administration fee

**Red flags for independence:**
- Same expert used repeatedly for same firm, MRO owned by or linked to the law firm, Standardised report templates, Reports with boilerplate language that appear mass-produced, History of findings in favour of instructing party, Fee dependent on trial/appearance, not just report

---

## 5. Social Security (Recovery of Benefits) Act 1997

### CRU Certificate Process

The CRU certificate is the UK equivalent of a Medicare/Medicaid/ERISA lien.

**Recoverable benefits (prescribed list):**
- Compensation for loss of earnings (statutory sick pay)
- Disability benefit (PIP, Personal Independence Payment)
- Employment and Support Allowance (ESA)
- Incapacity Benefit, Severe Disablement Allowance, Carer's Allowance, Industrial Injuries Disablement Benefit

**Process:**
1. Compensator (insurer) applies to the CRU for a certificate
2. CRU issues certificate showing recoverable benefits paid in the relevant period
3. Compensator must pay this amount to DWP (Department for Work and Pensions)
4. Compensator deducts the amount from the compensation payment to the claimant
5. The deduction is limited to the amount of compensation for each head of loss

**Key rules:**
- Certificate lasts 28 days, If settlement happens without a certificate, the compensator remains liable to DWP, The CRU process is mandatory for all personal injury settlements, Certificate must be obtained before or on the settlement date, The deduction cannot exceed the compensation for the relevant head of loss

**What this means for billing analysis:**
- Identify whether the claimant received any recoverable benefits, Obtain the CRU certificate (or note that it hasn't been obtained)
- Record the recoverable amount and period, Hand off to `lien-resolution-summary` for detailed analysis, Do not attempt to resolve, reduce, or negotiate the CRU amount

> [SCOTS: Note] There is no equivalent of:
> - Medicare Secondary Payer (42 U.S.C. § 1395y(b))
> - ERISA plan reimbursement
> - State hospital lien statutes
> - No Surprises Act
>
> The SS(RB)A 1997 is the primary statutory mechanism for benefit recovery in personal injury claims across the UK.

---

## 6. Scottish Personal Injury Protocol

### Pre-Action Protocol for Personal Injury Claims in Scotland

**Key features:**
- Steps before litigation are governed by the PI Protocol (part of the Courts Reform framework)
- Claimant must send a letter of claim with supporting documents, Defender has defined period to respond, Medical records must be disclosed early, Medical reports must be commissioned within specific timeframes

**Medical reporting under the Protocol:**
- Claimant obtains a medical report, Report must be from a suitably qualified expert, Report must be disclosed to the defender, Defender may request a joint examination or instruction, Single joint expert may be preferred where issues are uncontentious

**Fee scales (Scottish PI Protocol):**
- Consultant orthopaedic surgeon: £800-£1,500 per report (illustrative)
- GP report: £150-£300 per report, Psychiatrist: £1,000-£2,000 per report, Physiotherapist/occupational therapist: £500-£1,000
- Radiology interpretation: £200-£500

**Cost management:**
- Expenses (costs) in personal injury cases are subject to judicial scrutiny, The Auditor of Court may tax expenses if disputed, The Protocol encourages proportionality

---

## 7. Comparison Tables

### US vs UK Billing Framework

| Aspect | US | UK |
|--------|----|----|
| Primary payer | Private insurance / Medicare / Medicaid | NHS (state-funded, free at point of use) |
| Private insurance | ERISA regulated / state regulated | FCA regulated, PMI / cash plans |
| Procedure codes | CPT/HCPCS | OPCS-4 |
| Diagnosis codes | ICD-10-CM | ICD-10 (UK tabular list) |
| Payment grouping | DRG / MS-DRG | HRG4+ |
| Facility billing | UB-04 | NHS e-claims / private invoice |
| Professional billing | CMS-1500 | Consultant fee note |
| Fee benchmark | FAIR Health, MPFS | NHS National Tariff, PMI schedules |
| Workers' comp | State fee schedules | UK Industrial Injuries Scheme |
| Injury damages | Compensatory + punitive | Solatium (pain/suffering) + patrimonial loss (no punitive) |
| Benefit recovery | Medicare Secondary Payer, ERISA LOP | SS(RB)A 1997 / CRU certificate |
| Collateral source rule | Admissible or excluded per state | Statutory deduction per SS(RB)A 1997 |
| Limitation period | State-specific (1-6 years) | 3 years PI (Scotland) / 5 years delict / 20-year long-stop |
| Contingency fees | Standard in PI | Prohibited; DBAs and SFAs available (limited) |
| Jury trials | Common in PI | Rare; Court of Session only with consent |

### Red Flags, UK Specific

| Flag | Description | Severity |
|------|-------------|----------|
| MRO-linked treatment | Treatment arranged through MRO with solicitor referral pattern | H |
| Private without necessity | Private treatment when NHS was available and clinically appropriate | H |
| Conditional fee treatment | Treatment funded on deferred basis with no-win-no-fee | M |
| Solicitor-recommended provider | Provider recommended by solicitor rather than GP | M |
| Recovered benefits ignored | Claimant received benefits not reflected in CRU certificate | H |
| Pre-existing condition gap | Gap between fixed-price NHS treatment and more expensive private | M |
| Treatment gap | Unexplained gap in treatment > 30 days | M |
| Excessive private charges | Private charges significantly above PMI schedule rates | H |
| Discharge against advice | AMA discharge that may break causation chain | M |
| NHS Right to Choose private | Private treatment obtained via RTC pathway at NHS tariff | L |

---

## 8. Other UK-Specific Considerations

### NHS Prescription Charges
- **Scotland**: Abolished 2011 - no prescription charges
- **England**: £9.90 per item (2024)
- **Wales**: Abolished 2007
- **Northern Ireland**: Currently free, For personal injury: if the claimant paid for prescriptions in England, those costs are recoverable

### NHS Dental Charges, England: 3 bands (£26.80 / £73.50 / £319.10 for 2024/25)
- Scotland: 3 bands (£15.00 / £51.50 / £230.00 for 2024/25)
- Dental charges may be relevant in PI if dental injury

### Private Ambulance Services, NHS ambulances: free, Private ambulances: charged per call-out (£200-£500 typical)
- May be relevant for emergency response PI claims

### Counselling / Psychological Therapy, NHS: free via IAPT (Improving Access to Psychological Therapies)
- Private: £50-£100 per session (typical)
- Recovery claim: number of sessions × session rate

### Physiotherapy / Occupational Therapy, NHS: free via referral, Private: £40-£80 per session (typical)
- Recovery claim: number of sessions × session rate

### Care / Personal Assistance, NHS continuing care: free, Local authority care: means-tested, Private care: £15-£30 per hour (Scotland illustrative)
- Recovery claim: hours per week × rate × multiplier

### Equipment / DME, NHS: free issue (e.g., wheelchairs, walking aids)
- Private: cost of purchase or rental, Recovery claim: cost if private purchase was reasonably necessary

### Travel, NHS: free transport for treatment in some circumstances, Private: mileage, parking costs, Recovery claim: reasonable travel expenses for treatment

---

## 9. Damages (Scotland) Act 2011

**Key provisions for medical billing / injury analysis:**

- **Sections 4-6**: Solatium for pain and suffering (lump sum for non-patrimonial loss)
- **Section 12**: Court to have regard to state-funded NHS care
- **Section 13**: Loss of earnings
- **Section 14**: Services rendered by relative (gratuitous care)
- **Schedule 1**: Table for calculating loss of society awards
- **Ogilvie tables**: Used for calculating future loss multipliers

**Solatium (non-patrimonial loss) - illustrative scale:**
- Minor soft tissue injury (resolves <6 months): £1,000-£3,000
- Moderate soft tissue (6-18 months): £3,000-£8,000
- Significant injury (permanent, moderate): £10,000-£30,000
- Severe injury: £30,000-£100,000+
- Catastrophic injury: £100,000-£400,000+

**Patrimonial loss:**
- Past loss of earnings (net of tax, benefits)
- Future loss of earnings (multiplicand × multiplier per Ogilvie tables)
- Medical expenses (private treatment costs, equipment)
- Care costs (gratuitous care by relative)
- Travel costs, Adaptations to home/vehicle

---

## 10. Practice Checklist

- [ ] Identify whether treatment was NHS or private
- [ ] If NHS: note that no itemised bill exists; focus on gratuitous services / out-of-pocket expenses
- [ ] If private: obtain itemised invoice and identify the payment/payer (PMI, MRO, self-pay)
- [ ] Check whether coding is OPCS-4 (NHS) or internal codes (private)
- [ ] Apply causation screen (temporality, consistency, medical necessity)
- [ ] Check for MRO / solicitor-recommended provider patterns
- [ ] Obtain and review CRU certificate for recoverable benefits
- [ ] Confirm no CRU certificate = compensator must obtain before settlement
- [ ] Check Damages (Scotland) Act 2011 s.12 - court considers NHS state-funded care
- [ ] All damages in GBP (£)
- [ ] Flag `[VERIFY]` for any tariff rate, PMI schedule, or fee scale not confirmed
