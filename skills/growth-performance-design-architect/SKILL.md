---
name: "growth-performance-design-architect"
version: "1.2.0"
owner: "growth-marketing-product-union"
status: "active"
domain_tags:
  - "performance-marketing"
  - "conversion-rate-optimization"
  - "product-design"
  - "copywriting"
  - "messaging"
  - "ab-testing"
  - "lifecycle-marketing"
  - "visual-systems"
  - "analytics"
risk_level: "medium"
intent: >
  Design and write high-performing acquisition, activation, and retention
  experiences. Bridge paid media and product experience through hypothesis-driven
  experimentation, message-match continuity, and compliance-safe claims.
when_to_use: >
  Use when CAC, CPA, activation, retention, or LTV needs improvement; or when
  launching a funnel that must remain coherent from ad click to first value moment.
when_not_to_use: >
  Do not use for core utility work without growth KPIs, or for awareness work
  where conversion measurement is undefined.
inputs:
  - name: "growth_hypothesis"
    type: "text/markdown"
    required: true
    description: "The strategic bet being tested."
  - name: "funnel_stage"
    type: "string"
    required: true
    description: "Acquisition, activation, retention, or full-funnel."
  - name: "performance_data_v1"
    type: "file/json"
    required: true
    description: "Baseline metrics, audience breakdowns, and prior experiment learnings."
  - name: "offer_definition_v1"
    type: "text/markdown"
    required: true
    description: "Offer, pricing, proof, constraints, and success definition."
  - name: "brand_constraints"
    type: "file/json"
    required: true
    description: "Design tokens, voice guardrails, and legal or compliance restrictions."
  - name: "compliance_claims_policy_v1"
    type: "file/markdown"
    required: true
    description: "Allowed and prohibited claims, disclaimers, and escalation triggers."
  - name: "telemetry_event_dictionary_v1"
    type: "file/json"
    required: false
    description: "Event names and definitions for funnel instrumentation."
  - name: "user_segments_v1"
    type: "file/json"
    required: false
    description: "Segments and the job each segment cares about most."
outputs:
  - name: "experiment_design_package"
    type: "file/zip"
    success_criteria: "Contains creative and copy variants across the funnel plus measurement plan and deployment-ready naming."
  - name: "copy_deck_v1"
    type: "file/markdown"
    success_criteria: "Ships variant copy with disclaimers and claim substantiation notes."
  - name: "claims_evidence_matrix_v1"
    type: "file/markdown"
    success_criteria: "Maps every meaningful claim to evidence, disclaimers, and safer rewrites."
  - name: "message_blocks_library_v1"
    type: "file/json"
    success_criteria: "Modular messaging blocks are tagged by stage, segment, and compliance risk."
  - name: "message_match_map_v1"
    type: "file/json"
    success_criteria: "Promise and proof stay aligned across ad, landing, and product moment."
  - name: "measurement_plan_v1"
    type: "file/markdown"
    success_criteria: "Defines metric, guardrails, segments, duration, and stop rules."
dependencies:
  tools:
    - "figma_variables"
    - "adobe_after_effects"
    - "email_builder_knak"
    - "analytics_dashboard"
    - "ad_platform_specs"
    - "doc_editor"
    - "grammar_readability_checker"
    - "session_replay_optional"
  knowledge:
    - "conversion_rate_optimization"
    - "behavioral_psychology_biases"
    - "ftc_truth_in_advertising"
    - "financial_compliance_finra"
    - "wcag_accessibility"
verification:
  required: true
  methods:
    - "compliance_scan"
    - "claims_evidence_matrix_check"
    - "message_match_check"
    - "readability_grade_check"
    - "accessibility_check"
    - "platform_specs_check"
    - "hypothesis_alignment_audit"
    - "promise_break_analysis_check"
policy:
  safety_notes: >
    Truth in advertising only. No dark patterns, fake urgency, or misleading
    omission. High-risk financial or regulated claims require compliant language
    and explicit disclaimers.
ports:
  provides:
    - "ad_creative_set_v1"
    - "landing_page_variant_v1"
    - "onboarding_variant_v1"
    - "lifecycle_email_set_v1"
    - "copy_deck_v1"
    - "claims_evidence_matrix_v1"
    - "message_blocks_library_v1"
    - "message_match_map_v1"
    - "promise_break_report_v1"
    - "measurement_plan_v1"
  consumes:
    - "user_research_insight_v1"
    - "performance_data_v1"
    - "design_system_tokens_v1"
    - "legal_disclaimer_library_v1"
    - "telemetry_event_dictionary_v1"
---

# Purpose

Operationalize design and copy as a growth lever.

The win condition is not “better creative.” The win condition is shipping
experiments that beat control on a defined KPI while maintaining compliance,
accessibility, and user trust.

# Invariants

- Ethical growth only: no deception, coercion, or trick flows.
- Message match must survive ad to landing to product first value moment.
- Claims must be substantiated, rewritten, or removed.
- Readability beats cleverness.
- Accessibility remains part of the performance bar, not separate from it.

# Core System

## Claims Engine

Every meaningful promise becomes a claim that must be:

- supported with evidence
- rewritten into safer framing
- or removed

## Message Blocks

Build from reusable blocks:

- hooks
- proof
- objections
- CTAs

Tag blocks by funnel stage, segment, tone, and compliance risk.

## Promise-Break Detection

Measure where the promise breaks across:

- ad click to landing bounce
- landing engagement to signup drop
- signup completion to activation failure
- activation to retention decay

# Execution Phases

## Phase 0: Intake

1. Confirm primary metric and guardrails.
2. Capture compliance triggers, brand rules, and platform constraints.
3. Identify control assets and baseline performance.

## Phase 1: Message Strategy

1. Produce three angles: safe, bold, and system.
2. Build the claims-evidence matrix.
3. Assemble message blocks for each variant.
4. Map promise and proof across the funnel.

## Phase 2: Production

1. Design paid media variants with aligned copy and proof.
2. Carry the promise into landing and onboarding.
3. Build lifecycle touchpoints that continue the same narrative.

## Phase 3: Instrumentation

1. Confirm event naming and funnel measurement.
2. Define guardrails and stop rules.
3. Prepare reporting outputs before launch.

## Phase 4: Review

1. Run compliance scan.
2. Run message-match audit.
3. Run readability and accessibility checks.
4. Publish the measurement plan and experiment packet.

# Decision Rules

- Acquisition: prioritize one promise, one proof cue, one CTA.
- Activation: prioritize friction removal and “what happens next” clarity.
- Retention: prioritize relevance, timing, and the unfinished user job.
- If creative fatigue appears, change the format before changing the thesis.
- If promise mismatch appears, realign the ad hero, landing hero, and onboarding first screen before scaling spend.
