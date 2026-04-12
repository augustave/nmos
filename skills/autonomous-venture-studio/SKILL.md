---
name: "autonomous-venture-studio"
version: "2.0.0"
owner: "venture-studio-executive-office"
status: "active"
domain_tags:
  - "venture-studio"
  - "agentic-workflows"
  - "product-design"
  - "b2b-saas"
  - "brand-systems"
  - "design-ops"
  - "executive-narrative"
  - "ai-governance"
risk_level: "critical"
intent: >
  Operate a startup-within-an-agent: validate an opportunity, design and
  prototype an enterprise-grade product, construct a differentiated brand
  system, produce executive-ready narrative, and govern autonomous workflows
  without waterfall latency.
when_to_use: >
  Use when the task requires 0-to-1 product creation across strategy, product,
  brand, operations, and go-to-market in one coordinated operating loop.
when_not_to_use: >
  Do not use for isolated single-discipline tasks such as simple logo work,
  standalone marketing copy, bug fixing without product strategy, or mature
  products that only need incremental optimization.
inputs:
  - name: "venture_brief"
    type: "text/markdown"
    required: true
    description: "Founder thesis, market hunch, or strategic opportunity."
  - name: "business_constraints"
    type: "json"
    required: true
    description: "Budget, timeline, compliance, org realities, and channel constraints."
  - name: "technical_constraints"
    type: "json"
    required: false
    description: "APIs, model limits, platform constraints, and legacy system realities."
  - name: "market_signals"
    type: "text/data"
    required: false
    description: "Interviews, pain points, competitor observations, and trend scans."
  - name: "brand_context"
    type: "file/folder"
    required: false
    description: "Existing identity, references, tone, audience context, and positioning."
outputs:
  - name: "validated_market_requirement_v1"
    type: "file/markdown"
    success_criteria: "Defines pain, target user, core utility, refusal boundaries, and launch hypothesis."
  - name: "system_architecture_packet_v1"
    type: "file/zip"
    success_criteria: "Includes schema, service boundaries, workflow state model, and UI logic."
  - name: "interactive_prototype_v1"
    type: "url"
    success_criteria: "Proves the core user loop and handles the product's defining complexity."
  - name: "brand_operating_system_v1"
    type: "file/zip"
    success_criteria: "Defines visual, verbal, motion, and campaign behavior as a coherent system."
  - name: "executive_narrative_v1"
    type: "file/pdf"
    success_criteria: "Translates product and brand truth into business impact and decision clarity."
  - name: "governance_evidence_vault_v1"
    type: "file/folder"
    success_criteria: "Captures assumptions, risks, overrides, approvals, and audit evidence."
dependencies:
  tools:
    - "figma_variables_engine"
    - "cursor_ai_code_gen"
    - "usability_testing_script"
    - "blender_3d_pipeline"
    - "spline_3d"
    - "unreal_motion_design"
    - "audience_insights_analyzer"
    - "presentation_design_ai"
    - "project_management_linear"
    - "data_visualization_d3"
    - "analytics_stack"
  knowledge:
    - "b2b_saas_patterns"
    - "domain_driven_design"
    - "dashboard_information_architecture"
    - "brand_systems"
    - "technical_storytelling"
    - "ai_governance_frameworks"
    - "accessibility_wcag_aa"
verification:
  required: true
  methods:
    - "market_truth_gate"
    - "systems_truth_gate"
    - "utility_gate"
    - "aesthetic_coherence_gate"
    - "narrative_truth_gate"
    - "governance_gate"
    - "launch_readiness_gate"
ports:
  provides:
    - "validated_market_requirement_v1"
    - "ui_component_library_v1"
    - "workflow_state_spec_v1"
    - "visual_identity_tokens_v1"
    - "campaign_assets_v1"
    - "executive_narrative_v1"
    - "governance_evidence_vault_v1"
  consumes:
    - "venture_brief"
    - "technical_constraints"
    - "market_signals"
    - "brand_context"
---

# Core Premise

This skill is a self-correcting creative agency and a startup within an agent.
It exists to collapse latency between strategy, product, brand, and executive
alignment.

# Global Doctrine

- Validation before build.
- System first, not one-off artifacts.
- Truth over polish.
- Complexity is not a bug in enterprise software.
- Reciprocal feedback beats waterfall.
- Governed autonomy beats fast but unaccountable automation.

# Operating Nodes

## Product Foundry Architect

Owns product utility, domain logic, workflow states, schema, and prototype.

## Brand Experience Sovereign

Owns the visual and verbal operating system, motion language, and go-to-market gravity.

## Strategic Narrative Operator

Owns executive clarity, cross-functional alignment, governance, and risk disclosure.

# Venture Loop

1. Define the market requirement from messy founder language and market signals.
2. Convert it into product architecture and an interactive prototype.
3. Build a brand system that makes the product legible and differentiated.
4. Convert product and brand truth into executive narrative.
5. Review for governance, risk, and readiness before launch.

# Failure Modes To Prevent

- building the wrong product with confidence
- beautiful brand language masking thin utility
- product UI and campaign creative feeling like different companies
- automation without evidence, overrides, or audit trail
- executive messaging disconnected from technical reality
