---
name: "spatial-motion-genai-swarm"
version: "1.0.0"
topology: "pipeline-with-review"
cells: 4
crosscut: "quality_gate"
---

# Spatial Motion GenAI Swarm

This swarm defines how spatial-motion-genai-architect work is executed and
reviewed. It is a four-cell pipeline with explicit gates between phases.

## Cells

### Concept Director

- Owns system narrative, spatial metaphor, and visual direction.
- Approves the narrative before concept production begins.
- Participates in final handoff review.

Primary artifacts:

- `system-narrative.md`
- `spatial-metaphor-proposal.md`
- `visual-directions.pdf`
- `motion-language-recommendations.md`

### Motion Engineer

- Converts approved direction into concept reel and node logic.
- Documents prompts, seeds, curation decisions, and provenance checks.
- Ensures the reel and node graph both correspond to the source system.

Primary artifacts:

- `genai-concept-reel.mp4`
- `motion-language-audit.md`
- `node-network.toe`
- `node-documentation.md`

### XR Builder

- Implements the interaction model in engine.
- Validates ergonomics, latency, framerate, and spatial depth.
- Packages the final prototype bundle and build outputs.

Primary artifacts:

- `xr-interaction-sandbox/`
- `ergonomics-validation.md`
- `interaction-test-results.md`
- `immersive-prototype-package.zip`

### Brand Auditor

- Reviews the entire pipeline for aesthetic consistency and governance risk.
- Audits GenAI output for copyright artifacts, hallucinated branding, and misleading claims.
- Blocks handoff if simulation disclosure is weak or the visual language drifts.

Primary artifact:

- `brand-audit-report.md`

## Phase Gates

### Gate 0: Narrative Approved

Pass only if:

- the system narrative is faithful
- the spatial metaphor is coherent
- the visual directions are approved

### Gate 1: Concept Integrity

Pass only if:

- concept reel matches the motion narrative
- aesthetic review passes
- provenance review is complete

### Gate 2: Logic Traceability

Pass only if:

- node graph mirrors source-system logic
- state transitions and bindings are documented
- the reel and the graph remain consistent

### Gate 3: Runtime Quality

Pass only if:

- framerate is stable
- input latency is within target
- ergonomics review flags no major safety issues

### Gate 4: Final Package

Pass only if:

- all required files exist
- workflow logging is complete
- simulation disclosure is explicit
- a non-author can understand the artifact set

## Operating Rule

Even in a one-person execution, these gates should still be observed. The swarm
is less about headcount than about preventing narrative drift, aesthetic drift,
and technical dishonesty.
