---
name: "spatial-motion-genai-architect"
version: "1.1.0"
owner: "advanced-interfaces-rnd"
status: "active"
domain_tags:
  - "motion-design"
  - "xr-prototyping"
  - "generative-ai"
  - "touchdesigner"
  - "unity"
  - "spatial-computing"
  - "immersive-storytelling"
risk_level: "medium"
intent: >
  Design experimental spatial and motion-based prototypes that translate complex
  technical systems into immersive visual narratives. Combine generative AI,
  real-time node-based compositing, and XR implementation to make invisible
  system behavior understandable, critiqueable, and demoable.
when_to_use: >
  Use when a complex product, platform, or technical architecture needs to be
  made legible through motion, spatial UX, or immersive demonstration; when
  stakeholder buy-in depends on temporal behavior rather than static diagrams;
  or when evaluating gaze, gesture, hand-tracking, or embodied interaction.
when_not_to_use: >
  Do not use for static web/mobile wireframes, standard brand design, generic
  marketing animation, or production-ready XR applications intended for release.
inputs:
  - name: "technical_system_data"
    type: "json/markdown"
    required: true
    description: "Technical logic, architecture, workflows, data models, states, and constraints."
  - name: "spatial_interaction_spec"
    type: "text/markdown"
    required: true
    description: "Primary and fallback input model, environment, session expectations, and safety rules."
  - name: "brand_motion_constraints"
    type: "text/markdown"
    required: false
    description: "Brand style, cinematic references, motion language, typography, and quality thresholds."
  - name: "demo_context"
    type: "text/markdown"
    required: false
    description: "Audience, presentation setting, target hardware, and success conditions."
outputs:
  - name: "immersive_prototype_package"
    type: "file/zip"
    success_criteria: >
      Contains a coherent prototype bundle including a concept reel, node logic
      graph, XR interaction sandbox, and workflow documentation sufficient for
      another builder to reproduce or extend the work.
dependencies:
  tools:
    - "touchdesigner_api"
    - "generative_video_engine_kling"
    - "unity_xr_bridge"
    - "houdini_vfx"
    - "topaz_upscaler"
    - "cinematic_color_pipeline"
  knowledge:
    - "spatial_ergonomics"
    - "motion_language_systems"
    - "color_theory"
    - "genai_prompt_engineering"
    - "xr_accessibility_heuristics"
    - "embodied_interaction_patterns"
verification:
  required: true
  methods:
    - "narrative_traceability_check"
    - "input_latency_test"
    - "spatial_ergonomics_review"
    - "brand_aesthetic_audit"
    - "usability_heuristic_check"
    - "frame_rate_stability_check"
    - "genai_provenance_review"
policy:
  safety_notes: >
    Review all generative outputs for copyright artifacts, hallucinated
    interfaces, unsafe spatial motion, misleading technical claims, and brand
    inconsistency before inclusion in demos or executive-facing materials.
  privacy_notes: >
    Do not include sensitive production data, customer information, or
    proprietary internal diagrams in third-party generative workflows unless
    approved for that data class.
  presentation_notes: >
    Clearly label speculative scenes, simulated behaviors, and fake data layers
    so stakeholders do not confuse concept visualization with production readiness.
ports:
  provides:
    - "xr_interaction_model_v1"
    - "motion_narrative_deck_v1"
    - "immersive_demo_spec_v1"
    - "genai_workflow_log_v1"
  consumes:
    - "developer_platform_spec_v1"
    - "technical_architecture_v1"
    - "brand_system_v1"
    - "presentation_brief_v1"
---

# Purpose

This skill is the spatial and temporal translation layer between raw technical
systems and human understanding.

It exists to make abstract architecture, invisible system logic, and unfamiliar
interaction patterns feel graspable through motion, depth, timing, and embodied
feedback.

# Invariants

- Brand taste must dominate over model artifacts or AI novelty.
- Spatial behavior must remain readable, not merely spectacular.
- Motion should explain system logic, not distract from it.
- Every prototype must leave behind a repeatable process trail.
- Stakeholder-facing outputs must separate simulated effect from validated capability.

# Input Contract

`technical_system_data` must include:

- core entities
- states or transitions
- user/system triggers
- feedback loops
- latency-sensitive moments
- primary constraints or failure states

`spatial_interaction_spec` must include:

- primary input modality
- fallback interaction method
- target environment
- expected session duration
- precision tolerance
- confirmation model for risky actions

# Output Contract

The package should contain at minimum:

- `genai-concept-reel.mp4`
- `node-network.toe`
- `xr-interaction-sandbox/`
- `workflow-log.md`
- `assumptions-and-simulations.md`

# Decision Rules

- If the system is highly abstract, convert logic into spatial metaphor before choosing visual style.
- If the architecture contains flows, queues, weights, or probabilities, favor animated systems and node logic over static diagrams.
- If real-time responsiveness matters, prefer TouchDesigner, Unity, or equivalent runtime systems over offline video alone.
- If GenAI output fails brand fidelity or geometric discipline, replace it with deterministic 3D or manual compositing.
- If the prototype includes non-functional simulation, label it clearly in both the package and the deck.

# Execution Phases

## Phase 1: Orient

1. Ingest `technical_system_data`.
2. Extract entities, triggers, feedback loops, and time-based behaviors.
3. Translate system logic into a narrative arc.
4. Define the spatial metaphor before art direction.

## Phase 2: Conceptualize

1. Generate three to five visual directions.
2. Curate aggressively for geometry, lighting, and technical honesty.
3. Build a short concept reel that demonstrates the target feel and feedback language.

## Phase 3: Map Logic

1. Build the node-based motion/data logic graph.
2. Bind state and timing to visible behavior.
3. Annotate the graph so another builder can extend it without reverse engineering.

## Phase 4: Translate

1. Implement an XR interaction sandbox in Unity or equivalent.
2. Validate latency, framerate, and ergonomic comfort.
3. Tune hover, dwell, confirm, cancel, and error feedback states.

## Phase 5: Package

1. Assemble the final prototype bundle.
2. Complete the workflow log.
3. Document assumptions, mock behavior, and speculative elements.
4. Run a handoff review with a non-author if possible.

# Quality Bar

A good run produces a prototype that teaches the underlying system faster than
an architecture diagram, remains honest about what is simulated, and leaves
behind enough documentation that someone else can continue the work.
