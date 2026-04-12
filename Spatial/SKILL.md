\---  
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
---

intent: \>  
  Designs experimental spatial and motion-based prototypes that translate complex  
  technical systems into immersive visual narratives. Combines generative AI,  
  real-time node-based compositing, and XR implementation to help teams  
  understand, evaluate, and de-risk novel interface concepts.

when\_to\_use: \>  
  Use when a complex product, platform, or technical architecture needs to be  
  made legible through motion, spatial UX, or immersive demonstration; when  
  executive or stakeholder buy-in depends on showing temporal behavior rather  
  than static diagrams; or when evaluating novel interaction paradigms such as  
  gaze, gesture, hand tracking, or embodied interface flows.

when\_not\_to\_use: \>  
  Do not use for static web/mobile wireframes, standard brand design, generic  
  marketing animation, or polished production-ready XR applications intended for  
  release. This skill is optimized for exploratory, high-fidelity R\&D and  
  concept validation, not final engineering hardening.

inputs:  
  \- name: technical\_system\_data  
    type: json/markdown  
    required: true  
    description: \>  
      Technical logic, architecture, system behavior, data models, workflows, or  
      engineering specifications that need narrative and visual translation.

  \- name: spatial\_interaction\_spec  
    type: text/markdown  
    required: true  
    description: \>  
      Proposed input model and spatial UX rules, such as gaze-to-select,  
      pinch-to-confirm, dwell-based targeting, hand-ray navigation, or room-scale  
      interactions.

  \- name: brand\_motion\_constraints  
    type: text/markdown  
    required: false  
    description: \>  
      Brand style, motion language, color rules, typography, cinematic references,  
      and quality thresholds that constrain the prototype’s aesthetic output.

  \- name: demo\_context  
    type: text/markdown  
    required: false  
    description: \>  
      Audience, presentation environment, target hardware, and success context,  
      such as executive review, internal concept test, investor demo, or design  
      sprint checkpoint.

outputs:  
  \- name: immersive\_prototype\_package  
    type: file/zip  
    success\_criteria: \>  
      Contains a coherent prototype bundle including a concept reel, a motion or  
      node-based logic graph, an XR interaction sandbox, and workflow  
      documentation sufficient for another designer or technical artist to  
      reproduce or extend the work.

dependencies:  
  tools:  
    \- touchdesigner\_api  
    \- generative\_video\_engine\_kling  
    \- unity\_xr\_bridge  
    \- houdini\_vfx  
    \- topaz\_upscaler  
    \- cinematic\_color\_pipeline  
  knowledge:  
    \- spatial\_ergonomics  
    \- motion\_language\_systems  
    \- color\_theory  
    \- genai\_prompt\_engineering  
    \- xR\_accessibility\_heuristics  
    \- embodied\_interaction\_patterns

verification:  
  required: true  
  methods:  
    \- narrative\_traceability\_check  
    \- input\_latency\_test  
    \- spatial\_ergonomics\_review  
    \- brand\_aesthetic\_audit  
    \- usability\_heuristic\_check  
    \- frame\_rate\_stability\_check  
    \- genai\_provenance\_review

policy:  
  safety\_notes: \>  
    All generative outputs must be reviewed for copyright artifacts, hallucinated  
    interfaces, unsafe spatial motion, misleading technical claims, and brand  
    inconsistency before inclusion in demos or executive-facing materials.  
  privacy\_notes: \>  
    Do not include sensitive production data, real customer information, or  
    proprietary internal diagrams in third-party generative workflows unless  
    those tools are approved for that data class.  
  presentation\_notes: \>  
    Clearly label speculative scenes, simulated behaviors, and fake data layers  
    so stakeholders do not confuse concept visualization with production  
    readiness.

ports:  
  provides:  
    \- xr\_interaction\_model\_v1  
    \- motion\_narrative\_deck\_v1  
    \- immersive\_demo\_spec\_v1  
    \- genai\_workflow\_log\_v1  
  consumes:  
    \- developer\_platform\_spec\_v1  
    \- technical\_architecture\_v1  
    \- brand\_system\_v1  
    \- presentation\_brief\_v1  
\---

\# Purpose

This skill acts as the spatial and temporal translation layer between raw technical  
systems and human understanding.

It exists to make abstract architecture, invisible system logic, and unfamiliar  
interaction patterns feel graspable through motion, depth, timing, and embodied  
feedback.

\# Success Criteria

A successful run of this skill produces:

\- A prototype that makes the underlying technical concept easier to understand.  
\- A motion/spatial language that feels intentional rather than decorative.  
\- A believable interaction model that can be tested, critiqued, and iterated.  
\- A reproducible workflow log so the team can extend the prototype without  
  re-inventing the process.  
\- A package that distinguishes clearly between concept simulation and production  
  implementation.

\# Assumptions

\#\# Scrappy R\&D Invariant  
Speed matters. It is acceptable to use GenAI, compositing tricks, simulated  
systems, and abstracted visuals to prove a concept quickly, provided that  
speculation is labeled and technical misrepresentation is avoided.

\#\# Input Shift  
The primary user is not assumed to be using mouse and keyboard. Interaction  
models must account for dwell time, gesture fatigue, reach envelopes, field of  
view limits, depth legibility, and head/eye coordination.

\#\# Prototype Honesty  
The prototype may simplify engineering complexity, but it must not fabricate  
capabilities that materially mislead decision-makers.

\# Input Contracts

\#\# technical\_system\_data  
Must include enough detail to identify:  
\- core entities  
\- states or transitions  
\- user/system triggers  
\- feedback loops  
\- latency-sensitive moments  
\- primary constraints or failure states

\#\# spatial\_interaction\_spec  
Must specify:  
\- primary input modality  
\- fallback interaction method  
\- target environment  
\- expected session duration  
\- precision tolerance  
\- confirmation model for risky actions

\#\# brand\_motion\_constraints  
If omitted, the skill should generate 3 to 5 distinct motion/visual directions  
before committing to a single prototype language.

\# Output Contracts

\#\# immersive\_prototype\_package  
The package should contain, at minimum:

\- \`genai\_concept\_reel.mp4\`  
  \- A short motion piece showing the intended feel, atmosphere, timing, and  
    narrative framing of the system.

\- \`node\_network.toe\`  
  \- The node-based motion/data logic environment used to represent technical  
    behavior, abstract data flow, or dynamic scene control.

\- \`xr\_interaction\_sandbox/\`  
  \- A Unity-based or equivalent sandbox implementing the proposed interaction  
    model at a prototype level.

\- \`workflow\_log.md\`  
  \- A reproducible log of prompts, tools, exports, cleanup steps, and manual  
    corrections.

\- \`assumptions\_and\_simulations.md\`  
  \- Explicit record of what was real, what was mocked, and what remains unproven.

\# Operating Protocol

\#\# Invariants  
These must always hold:

\- Brand taste must dominate over model artifacts or AI novelty.  
\- Spatial behavior must remain readable, not merely spectacular.  
\- Motion should explain system logic, not distract from it.  
\- Every prototype must leave behind a repeatable process trail.  
\- Stakeholder-facing outputs must separate simulated effect from validated capability.

\#\# Decision Rules

\#\#\# Visual Strategy  
\- If the system is highly abstract, convert logic into spatial metaphor before  
  choosing a visual style.  
\- If the architecture contains flows, queues, weights, or probabilities, favor  
  animated systems and node logic over static diagrams.

\#\#\# Tooling Strategy  
\- If real-time responsiveness matters, prefer TouchDesigner, Unity, or other  
  node/runtime-based systems over purely offline rendered video.  
\- If GenAI output fails brand fidelity or geometric discipline, replace it with  
  deterministic 3D or manual compositing.

\#\#\# Interaction Strategy  
\- If the primary input is eye tracking, require dwell-based confirmation and  
  visible focus states.  
\- If the primary input is hand tracking, minimize repeated elevated-arm actions  
  and keep targets within comfortable reach zones.  
\- If the environment is underdefined, generate multiple visual directions before  
  building the interaction rig.

\#\#\# Demo Integrity  
\- If the prototype includes non-functional simulation, label it clearly in both  
  the package and the deck.  
\- If a behavior has not been tested in engine, it cannot be presented as validated UX.

\# Execution Steps

\#\# Phase 1 — Orient  
1\. Ingest \`technical\_system\_data\`.  
2\. Extract core entities, triggers, feedback loops, and time-based behaviors.  
3\. Translate system logic into a narrative arc:  
   \- what appears  
   \- what reacts  
   \- what changes over time  
   \- what the viewer/user should understand  
4\. Ingest \`spatial\_interaction\_spec\`.  
5\. Define the spatial metaphor and motion thesis.  
6\. Produce 3 to 5 visual directions or mood boards if no motion language exists.

\#\# Phase 2 — Motion Conceptualization  
1\. Generate style frames using approved GenAI tools or manual direction.  
2\. Curate aggressively for geometry, lighting, typography, and brand fitness.  
3\. Animate a concept reel showing:  
   \- interaction framing  
   \- temporal transitions  
   \- feedback states  
   \- emotional tone  
4\. Document the prompt chain, cleanup steps, and edits.

\#\# Phase 3 — System Logic Mapping  
1\. Convert technical logic into dynamic motion structures in TouchDesigner or  
   equivalent node-based tools.  
2\. Bind data relationships, state transitions, and temporal triggers to visible  
   behaviors.  
3\. Validate that motion correspondences are structurally faithful to the source system.

\#\# Phase 4 — Spatial Product Translation  
1\. Import assets and logic into Unity or equivalent XR runtime.  
2\. Build an interaction sandbox for the target input model.  
3\. Tune scale, depth, legibility, and rest-zone placement.  
4\. Add feedback states for hover, dwell, confirm, cancel, and error.  
5\. Test for fatigue, precision issues, and timing clarity.

\#\# Phase 5 — Package and Handoff  
1\. Assemble the prototype bundle.  
2\. Add workflow and assumptions logs.  
3\. Add presentation-safe exports.  
4\. Annotate what is:  
   \- validated  
   \- simulated  
   \- speculative  
   \- not yet implemented

\# Verification (CoVe)

\#\# 1\. Narrative Traceability  
\*\*Claim:\*\* The prototype explains the system accurately.    
\*\*Evidence:\*\* Motion states and scene transitions map back to defined entities,  
events, or flows in \`technical\_system\_data\`.

\#\# 2\. Interaction Ergonomics  
\*\*Claim:\*\* The XR inputs are usable and physically reasonable.    
\*\*Evidence:\*\* Target placement, dwell timing, and gesture zones fall within basic  
spatial ergonomics heuristics and avoid repetitive strain patterns.

\#\# 3\. Aesthetic Consistency  
\*\*Claim:\*\* The concept reel, node logic visuals, and XR sandbox belong to the same system.    
\*\*Evidence:\*\* Shared motion language, color behavior, visual rhythm, typography,  
and material treatment across all artifacts.

\#\# 4\. Runtime Stability  
\*\*Claim:\*\* The prototype is viable enough for demonstration.    
\*\*Evidence:\*\* Stable framerate, acceptable input latency, no major interaction  
breakage, and no visually disruptive artifacting.

\#\# 5\. GenAI Governance  
\*\*Claim:\*\* The prototype is safe to show internally.    
\*\*Evidence:\*\* Review confirms no obvious copyright fragments, hallucinated logos,  
unapproved data exposure, or unmarked speculative claims.

\# Failure Modes and Escalation

\#\# Failure: GenAI output is visually impressive but structurally wrong  
\*\*Fix:\*\* Rebuild the motion system from architecture-first diagrams and constrain  
GenAI to texture, lighting, or atmospheric augmentation only.

\#\# Failure: XR targets are too small or cognitively noisy  
\*\*Fix:\*\* Increase target area, add gaze assist or magnetic snapping, reduce  
simultaneous stimuli, and simplify confirmation states.

\#\# Failure: Prototype looks high-end but teaches nothing  
\*\*Fix:\*\* Rewrite the narrative arc around one core concept and reduce purely  
decorative motion.

\#\# Failure: Spatial scene causes discomfort or motion strain  
\*\*Fix:\*\* Reduce camera motion, stabilize horizon references, slow acceleration  
changes, and simplify depth changes.

\#\# Failure: Workflow cannot be reproduced by the team  
\*\*Fix:\*\* Expand \`workflow\_log.md\`, save intermediate assets, and document prompt,  
node, and export settings.

\# Artifacts & Templates

\#\# Output Schema: xr\_interaction\_model\_v1  
\`\`\`json  
{  
  "prototype\_id": "SPATIAL-FLOW-09A",  
  "narrative\_theme": "Data as a Fluid Medium",  
  "prototype\_scope": "Executive concept validation",  
  "interaction\_params": {  
    "primary\_input": "Gaze \+ Hand\_Pinch",  
    "secondary\_input": "Controller fallback",  
    "feedback\_state": "Color shift \+ scale pulse \+ dwell ring",  
    "ui\_scale\_factor": 1.2,  
    "dwell\_time\_ms": 200  
  },  
  "runtime\_targets": {  
    "min\_frame\_rate\_fps": 72,  
    "max\_interaction\_latency\_ms": 120  
  },  
  "simulation\_disclosure": {  
    "contains\_mocked\_data": true,  
    "contains\_speculative\_motion": true,  
    "validated\_in\_engine": \["selection flow", "feedback timing"\],  
    "not\_validated\_in\_engine": \["multi-user sync", "production asset loading"\]  
  },  
  "genai\_workflow\_log": "Generated direction frames via Midjourney v6, refined manually, upscaled, animated via Kling, composited into spatial proxy scenes, then translated into Unity interaction tests."  
}  
