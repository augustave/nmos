---
name: "new-media-operating-system"
version: "0.1.0"
owner: "design-new-media"
status: "concept"
domain_tags:
  - "new-media"
  - "editorial-design"
  - "motion-systems"
  - "portfolio-storytelling"
  - "design-ops"
risk_level: "medium"
intent: >
  Turn dense partner, founder, thesis, and product material into a bespoke
  new-media operating system across motion, editorial, social, interactive, and stage formats.
when_to_use: >
  Use when the team needs to package complex company or thesis material into
  high-craft media that preserves strategic truth, visual distinction, and distribution fit.
when_not_to_use: >
  Do not use for isolated asset production without narrative intent, or for
  campaigns that can be handled by a single-format production workflow.
inputs:
  - name: "core_material"
    type: "text/markdown"
    required: true
    description: "Partner memo, founder interview, product launch notes, or thesis draft."
  - name: "distribution_goal"
    type: "string"
    required: true
    description: "Launch, editorial, social, keynote, event, or internal alignment."
  - name: "brand_context"
    type: "text/markdown"
    required: false
    description: "Visual references, constraints, tone, and audience."
outputs:
  - name: "new_media_operating_stack"
    type: "file/folder"
    success_criteria: "Includes story spine, visual direction, format plan, and review notes."
verification:
  required: true
  methods:
    - "narrative_fidelity_review"
    - "claim_accuracy_review"
    - "visual_coherence_review"
    - "format_distribution_review"
ports:
  provides:
    - "story_brief_v1"
    - "motion_direction_v1"
    - "asset_system_v1"
    - "review_gate_v1"
---

# Purpose

Encode how a design and new media team can turn complexity into signal without
flattening the idea, the founder, or the company.
