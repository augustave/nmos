---
name: "spatial-motion-genai-swarm"
version: "1.0.0"
topology: "pipeline-with-review"
cells: 4
crosscut: "quality_gate"
---

# Spatial Motion GenAI Swarm

## Summary

This document describes the organizational and review structure for spatial-motion-genai-architect work. The swarm is a 4-cell pipeline with integrated quality gates: a **concept-director** (narrative and visual direction), a **motion-engineer** (node logic and reel production), an **xr-builder** (interaction implementation and testing), and a **brand-auditor** (aesthetic and governance review). Work flows through phases; each phase transition is gated by the quality-gate cell.

For solo founders (the primary user), all four roles may be enacted by one person in sequence, but the gates remain: review your own work at each transition.

---

## Operating Thesis

Prototype work is inherently collaborative, even in a one-person shop. The swarm structure formalizes handoffs, prevents single-person blindspots, and ensures that workflow logic, assumptions, and aesthetic choices are all documented and defensible.

Motion design is a communication discipline. Every decision should be traceable to a narrative need, a system requirement, or a brand constraint — not to novelty or personal taste.

---

## Topology: Pipeline with Review Gates

```
┌─────────────────────────────────────────────────────────────┐
│  PHASE 0: ORIENT (Concept Director)                         │
│  ├─ Ingest technical system                                 │
│  ├─ Extract narrative arc                                   │
│  ├─ Define spatial metaphor & motion thesis                 │
│  └─ Produce 3–5 visual directions                           │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  QUALITY GATE 0         │
        │  Narrative validated    │
        │  Direction approved     │
        └────────────┬────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│  PHASE 1: CONCEPTUALIZE (Motion Engineer)                   │
│  ├─ Generate style frames (GenAI)                           │
│  ├─ Curate aggressively                                     │
│  ├─ Animate concept reel                                    │
│  └─ Document prompt chain and edits                         │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  QUALITY GATE 1         │
        │  Brand aesthetic audit  │
        │  GenAI copyright check  │
        │  Motion narrative match │
        └────────────┬────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│  PHASE 2: MAP_LOGIC (Motion Engineer)                       │
│  ├─ Build node network (TouchDesigner)                      │
│  ├─ Bind data flows to behaviors                            │
│  ├─ Validate motion-to-system correspondence                │
│  └─ Document node structure and bindings                    │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  QUALITY GATE 2         │
        │  Logic traceability OK  │
        │  Node graph clean       │
        │  Consistency with reel  │
        └────────────┬────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│  PHASE 3: TRANSLATE (XR Builder)                            │
│  ├─ Implement XR interaction sandbox (Unity)                │
│  ├─ Validate ergonomics & input latency                     │
│  ├─ Tune spatial depth and scale                            │
│  └─ Document interaction testing results                    │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  QUALITY GATE 3         │
        │  Framerate stable       │
        │  Input latency <120ms   │
        │  No safety red flags    │
        │  Ergonomic validation   │
        └────────────┬────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│  PHASE 4: PACKAGE (XR Builder + Concept Director)           │
│  ├─ Assemble prototype bundle                               │
│  ├─ Complete workflow log & assumptions doc                 │
│  ├─ Prepare presentation deck                               │
│  └─ Run handoff test with second team member                │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  QUALITY GATE 4 (Final) │
        │  All files present      │
        │  Handoff test passed    │
        │  Simulation disclosure  │
        │  Ready for stake-holder │
        └────────────────────────┘
```

---

## File-Level Responsibilities

### Concept Director

**Primary Artifacts:**
- `system-narrative.md` — Extracted entities, state machine, feedback loops, narrative arc
- `spatial-metaphor-proposal.md` — Visual translation of abstract logic; rationale for spatial choices
- `visual-directions.pdf` — 3–5 direction options with mood boards, cinematic references
- `motion-language-recommendations.md` — Approved motion language (timing, pacing, feedback style)

**Responsibilities:**
1. Understand the technical system deeply; ask clarifying questions until the logic is clear.
2. Define the spatial metaphor and emotional tone before any visual design.
3. Produce visual directions that candidates for the motion language; avoid committing to one too early.
4. Review all concept reel work to ensure narrative fidelity.
5. Lead the handoff test; ensure a second person can understand the system's intended behavior from the prototype.

**Gating:**
- Must approve visual direction before Phase 2 begins.
- Must review concept reel draft and sign off on narrative accuracy.
- Must participate in final handoff review.

---

### Motion Engineer

**Primary Artifacts:**
- `genai-concept-reel.mp4` — Polished 90–180 second animation demonstrating interaction and motion language
- `motion-language-audit.md` — Traceability from visual behavior to system logic
- `node-network.toe` — TouchDesigner file with data bindings, state machines, and behavioral logic
- `node-documentation.md` — Annotation of node structure, data flow, and customization points

**Responsibilities:**
1. Translate visual direction into GenAI prompts; iterate aggressively on curation.
2. Build the concept reel with a motion language that directly corresponds to system behavior.
3. Construct a TouchDesigner network that mirrors the technical system's state and transitions.
4. Document every GenAI run (model, prompt, seed, curation decisions, copyright review).
5. Flag any GenAI output that fails brand fidelity or geometric integrity early.

**Gating:**
- Must pass brand audit before final reel export.
- Must ensure copyright review completed for all GenAI assets.
- Node network must pass logic traceability check before Phase 3 begins.

---

### XR Builder

**Primary Artifacts:**
- `xr-interaction-sandbox/` — Unity project with scene, input handling, feedback states, and build exports
- `ergonomics-validation.md` — Test results for target placement, input latency, spatial legibility, fatigue analysis
- `interaction-test-results.md` — Framerate, latency, and usability feedback
- `immersive-prototype-package.zip` — Final assembled bundle with all artifacts

**Responsibilities:**
1. Implement the interaction model from the spatial-interaction-spec in Unity.
2. Validate that input latency is <120ms and framerate is stable (target fps).
3. Test spatial ergonomics against heuristics; flag unsafe reach zones or visual discomfort.
4. Iterate on feedback states (hover, dwell, confirm, error) until intuitive.
5. Prepare build exports for demo environments (VR headset, tablet, AR glasses).
6. Assemble the final prototype package and coordinate with Concept Director on handoff test.

**Gating:**
- Must achieve target framerate and input latency before package assembly.
- Ergonomics validation must flag zero safety red flags.
- Handoff test must confirm that a non-author can operate the sandbox without explanation.

---

### Brand Auditor (Quality Gate Cell)

**Primary Artifacts:**
- `brand-audit-report.md` — Pass/fail review of all outputs against motion constraints, visual language, and governance rules

**Responsibilities:**
1. Review concept reel against brand motion constraints (color palette, motion timing, typography, cinematic style).
2. Audit all GenAI outputs for copyright artifacts, hallucinated logos, and off-brand geometry.
3. Ensure prototype clearly distinguishes simulated from validated behavior.
4. Flag any safety concerns (motion sickness triggers, misleading technical claims, unsafe interactions).
5. Review presentation deck for accurate simulation disclosure.

**Gating:**
- Concept reel cannot advance without passing aesthetic and governance audit.
- Final package cannot be handed off without audit sign-off.
- Brand audit is a crosscut; it applies at Gates 1 and 4.

---

## Artifact Handoffs Between Phases

### After Phase 0 (Orient) → Phase 1 (Conceptualize)

**Handoff from Concept Director to Motion Engineer:**
- ✓ `system-narrative.md` (narrative arc, core entities, state machine)
- ✓ `spatial-metaphor-proposal.md` (visual translation rationale)
- ✓ `visual-directions.pdf` (stakeholder-approved direction)
- ✓ `motion-language-recommendations.md` (approved motion language)

**Implicit Contract:**
- Motion Engineer will use these directions to generate GenAI style frames and animate the concept reel.
- If GenAI output diverges from approved direction, escalate to Concept Director before finalizing.

---

### After Phase 1 (Conceptualize) → Phase 2 (Map Logic)

**Handoff from Motion Engineer to Motion Engineer (same role, new phase):**
- ✓ `genai-concept-reel.mp4` (finalized reel)
- ✓ `motion-language-audit.md` (traceability from visual to system behavior)
- ✓ GenAI workflow log (prompts, seeds, curation decisions; embedded in workflow-log.md)

**Implicit Contract:**
- Motion Engineer will now build a TouchDesigner network that manifests the same motion language and behavioral logic as the reel.
- Node network should make explicit what the reel shows implicitly.

---

### After Phase 2 (Map Logic) → Phase 3 (Translate)

**Handoff from Motion Engineer to XR Builder:**
- ✓ `node-network.toe` (TouchDesigner file with logic bindings)
- ✓ `node-documentation.md` (annotation of node structure, customization points)
- ✓ `motion-narrative-audit.md` (system-to-motion traceability)

**Implicit Contract:**
- XR Builder will implement the interaction model and import node logic (or recreate it in Unity) to drive visual behavior.
- XR Builder is not responsible for re-validating node logic; assumes Motion Engineer has already confirmed correspondence to system.

---

### After Phase 3 (Translate) → Phase 4 (Package)

**Handoff from XR Builder to XR Builder + Concept Director:**
- ✓ `xr-interaction-sandbox/` (Unity project, build-ready)
- ✓ `ergonomics-validation.md` (test results, framerate, latency, spatial legibility)
- ✓ `interaction-test-results.md` (usability feedback, iteration notes)

**Implicit Contract:**
- Concept Director will review sandbox and confirm interaction behavior matches intended system narrative.
- If gap exists, flag for minor iteration or document as speculative in assumptions doc.

---

### After Phase 4 (Package) → Stakeholder Handoff

**Final Package Contents:**
- ✓ `immersive-prototype-package.zip` containing:
  - `genai-concept-reel.mp4`
  - `node-network.toe`
  - `xr-interaction-sandbox/`
  - `workflow-log.md`
  - `assumptions-and-simulations.md`
  - `motion-narrative-audit.md`
  - `ergonomics-validation.md`
  - `presentation-deck.pdf`

**Implicit Contract:**
- Prototype is demo-ready and handing off to stakeholder or another team.
- Workflow log and assumptions doc are complete enough that a second team member can extend or iterate without reinvention.
- Simulation disclosure is explicit and unambiguous.

---

## Review Gates

### Gate 0: Narrative Validation

**Trigger:** End of Phase 0 (Orient)

**Checklist:**
- [ ] System narrative accurately extracts core entities and state transitions from technical-system-data.
- [ ] Spatial metaphor is coherent and applicable to the system logic.
- [ ] Visual directions are aligned with stakeholder feedback and motion thesis.
- [ ] No premature lock-in to a single visual style.

**Owner:** Concept Director + Technical System Author (if available)

**Pass Criteria:**
- Narrative arc is traceable to source system.
- Visual directions are approved by stakeholder or decision-maker.
- Motion thesis (timing, pacing, feedback style) is documented and agreed.

**Failure Path:**
- Return to Phase 0. Clarify system logic or visual direction.

---

### Gate 1: Brand Aesthetic & Narrative Fidelity

**Trigger:** End of Phase 1 (Conceptualize)

**Checklist:**
- [ ] Concept reel passes brand motion audit (color, timing, typography, cinematic style).
- [ ] GenAI outputs pass copyright review; no hallucinated logos or obvious artifacts.
- [ ] Motion narrative is directly traceable to system behavior (not just pretty).
- [ ] Prompt chain and curation decisions are fully documented.
- [ ] Reel length is 90–180 seconds; pacing is steady.

**Owner:** Brand Auditor + Motion Engineer

**Pass Criteria:**
- Reel demonstrates core system behavior in alignment with approved motion language.
- Visual quality meets brand standards.
- No copyright or governance issues.
- Workflow is reproducible from documentation.

**Failure Path:**
- GenAI output failed brand audit: replace section with manual 3D or deterministic compositing.
- Motion doesn't match narrative: return to Phase 1 with revised direction.

---

### Gate 2: Logic Traceability & Node Integrity

**Trigger:** End of Phase 2 (Map Logic)

**Checklist:**
- [ ] Node network structure mirrors technical system entities and state transitions.
- [ ] All data bindings are documented; node graph is annotated.
- [ ] Motion outputs from nodes correspond to motion in approved concept reel.
- [ ] Node network is export-ready and can be imported or referenced in Unity.
- [ ] No dead nodes or broken connections.

**Owner:** Motion Engineer + Concept Director

**Pass Criteria:**
- Each system entity is represented as a node or subnetwork.
- Each state transition is implemented as a deterministic motion or feedback trigger.
- Node behavior can be traced back to narrative arc.

**Failure Path:**
- Node logic doesn't match concept reel: iterate Phase 2 or revise reel.
- Logic is incomplete or underspecified: escalate to Concept Director to clarify system narrative.

---

### Gate 3: Ergonomics, Performance & Safety

**Trigger:** End of Phase 3 (Translate)

**Checklist:**
- [ ] Framerate is stable at target (72 fps VR / 60 fps AR-tablet).
- [ ] Input latency is <120 ms from user action to visual feedback.
- [ ] Target placement and reach zones follow spatial ergonomics heuristics.
- [ ] Dwell timing is comfortable (200–400 ms typical).
- [ ] No major visual discomfort (motion sickness triggers, jittery motion, disruptive artifacts).
- [ ] Feedback states (hover, dwell, confirm, error) are intuitive.
- [ ] No safety red flags in interaction model.

**Owner:** XR Builder + Brand Auditor (safety check)

**Pass Criteria:**
- XR sandbox is playable and interactive without crashes or major lag.
- Ergonomics validation report confirms heuristic compliance.
- Second-person tester (not original builder) can operate sandbox without explanation.

**Failure Path:**
- Framerate drops below target: optimize scene, reduce particle density, or simplify visuals.
- Input latency exceeds 120 ms: check input polling, reduce compute per frame.
- Reach zones are unsafe: adjust target placement, add gaze assist, or simplify interaction model.

---

### Gate 4 (Final): Package Completeness & Handoff Readiness

**Trigger:** End of Phase 4 (Package)

**Checklist:**
- [ ] All artifacts present and non-empty (reel, node network, XR sandbox, logs, assumptions, presentation).
- [ ] Workflow log is detailed enough to reproduce motion behavior and exports in <20% additional effort.
- [ ] Assumptions document explicitly lists all mocked and speculative items.
- [ ] Simulation disclosure is prominent in presentation deck.
- [ ] Handoff test passed: second person can navigate sandbox and understand core behavior.
- [ ] Prototype bundle is correctly named and zipped.
- [ ] No untracked or partial assets.

**Owner:** XR Builder + Concept Director

**Pass Criteria:**
- All files are present, readable, and internally linked.
- Workflow is reproducible from logs.
- Stakeholder/investor can view and understand prototype without live presentation.
- Team member can extend or iterate based on package contents alone.

**Failure Path:**
- Missing or incomplete artifact: return to Phase 4 and complete.
- Handoff test failure: expand workflow log, add annotated screenshots, or record walkthrough video.

---

## Founder Rules (Solo Execution)

If you are a solo founder enacting all four roles, follow this sequence:

1. **Phase 0 (You as Concept Director):**
   - Spend 3–4 hours extracting narrative arc and defining spatial metaphor.
   - Produce 3–5 visual direction sketches or mood boards.
   - Decide which direction resonates. Document your reasoning.
   - **Gate 0 Review:** Walk away for a day. Come back and ask: "Does this narrative faithfully represent the system? Am I biased toward novelty?" If not, iterate.

2. **Phase 1 (You as Motion Engineer):**
   - Generate GenAI style frames and animate the concept reel.
   - Curate aggressively; replace anything that doesn't fit the brand or narrative.
   - Document every prompt and curation step.
   - **Gate 1 Review (You as Brand Auditor):** Check color, timing, motion language. Ask: "Does a non-expert understand the system behavior from this reel alone?" If not, simplify or clarify.

3. **Phase 2 (You as Motion Engineer, again):**
   - Build the TouchDesigner network. Make the logic visible, not just beautiful.
   - Annotate every node and connection.
   - **Gate 2 Review (You as Concept Director):** Trace each node back to the narrative. Ask: "Could someone else understand what this network does from my annotations?" If not, expand documentation.

4. **Phase 3 (You as XR Builder):**
   - Build the XR interaction sandbox in Unity.
   - Test latency, framerate, and ergonomics. If you find discomfort, fix it before packaging.
   - **Gate 3 Review (You as XR Builder + Brand Auditor):** Test the sandbox yourself. Now ask a trusted colleague or friend to test it without explanation. Watch them struggle. Fix the pain points. Document what they found.

5. **Phase 4 (You as XR Builder + Concept Director):**
   - Assemble the prototype bundle.
   - Complete the workflow log with ruthless detail.
   - Write the assumptions document. This is your insurance against misinterpretation.
   - **Gate 4 Review (You + Trusted Reviewer):** Hand the package to someone unfamiliar with the project. Give them 30 minutes. Can they understand what the system does? Can they identify what is mocked? If not, revise the workflow log or assumptions doc.

**Time Estimates (Solo):**
- Phase 0–1: 2–3 days
- Phase 2: 1–2 days
- Phase 3: 1–2 days
- Phase 4: 0.5 days

**Total:** 5–7 working days for a complete prototype bundle.

---

## What I Should Remember

### On Narrative and Motion

- Every motion decision should trace back to a narrative need, not novelty or tool capability.
- If a motion is beautiful but doesn't explain the system, remove it.
- Spatial metaphor must be consistent across reel, node network, and XR sandbox. Consistency is credibility.

### On GenAI and Curation

- GenAI is fast. Use it for direction exploration and texture. Never trust it for geometric integrity or brand fidelity.
- Aggressive curation is not waste; it is the essential arbiter between speed and credibility.
- If GenAI output fails any audit, replace it with deterministic 3D or manual compositing. The extra day is worth the trust.

### On Handoff and Reproducibility

- The workflow log is your most valuable artifact. Spend time on it.
- If you can't reproduce your own work in 6 months, your team can't either.
- Intermediate assets (style frames, node exports, interaction test videos) are not clutter; they are breadcrumbs.

### On Stakeholder Integrity

- Clearly label what is mocked and what is validated. Stakeholders cannot tell the difference without your help.
- A 60 fps sketch is more credible than a beautiful 30 fps demo.
- If the prototype looks better than your actual product will be, you are misleading your audience.

### On Spatial Ergonomics

- Elevated-arm fatigue is real. Minimize reaching gestures.
- Dwell confirmation is safer than gesture recognition. Use it unless there is a strong reason not to.
- Depth legibility is more important than visual novelty. If stakeholders can't read the depth relationships, the prototype fails.

### On Solo Execution

- The review gates are not bureaucracy; they are your safeguard against blind spots.
- Spend 1 hour reviewing your own work at each gate. The friction you feel is signal that something needs clarification.
- Ask a trusted colleague to review your package before handing to stakeholders. A second pair of eyes catches what you can't see.

### On De-risking

- Prototype work is about removing uncertainty, not creating certainty.
- Your job is to say "this system is understandable via spatial interaction" or "this interaction model is not going to work."
- If you can answer that question in 5 days instead of 5 weeks, you have succeeded.
