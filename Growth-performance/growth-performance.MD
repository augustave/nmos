\---  
name: growth-performance-design-architect  
version: "1.2.0"  
owner: growth-marketing-product-union  
status: active  
domain\_tags:  
 \[  
   performance-marketing,  
   conversion-rate-optimization,  
   product-design,  
   copywriting,  
   messaging,  
   ab-testing,  
   lifecycle-marketing,  
   visual-systems,  
   analytics  
 \]  
risk\_level: medium

intent: \>  
 Designs AND writes high-performing acquisition \+ activation \+ retention experiences.  
 Bridges Paid Media (ads/landing pages) and Product Experience (onboarding/activation)  
 using hypothesis-driven experimentation, message-match continuity, and compliance-safe claims.

when\_to\_use: \>  
 Use when CAC/CPA, activation, retention, or LTV needs improvement; or when launching  
 a funnel that must stay consistent from Ad Click → Landing → Signup → First value moment.

when\_not\_to\_use: \>  
 Do not use for core product utility features without growth KPIs (e.g., trading engine),  
 or for brand awareness campaigns where conversion measurement is not defined.

inputs:  
 \- name: growth\_hypothesis  
   type: text/markdown  
   description: "The strategic bet (e.g., 'If we show X benefit, Y% more users activate')."  
   required: true

 \- name: funnel\_stage  
   type: string  
   description: "Acquisition (Ads), Activation (Onboarding), or Retention (Email/Lifecycle)."  
   required: true

 \- name: performance\_data\_v1  
   type: file/json  
   description: "Baseline metrics \+ audience breakdowns \+ past experiment learnings."  
   required: true

 \- name: offer\_definition\_v1  
   type: text/markdown  
   description: "Offer, pricing, terms, proof, constraints, and what counts as 'success'."  
   required: true

 \- name: brand\_constraints  
   type: file/json  
   description: "Design tokens \+ voice guardrails \+ legal/compliance restrictions."  
   required: true

 \- name: compliance\_claims\_policy\_v1  
   type: file/markdown  
   description: "Allowed/prohibited claims, required disclaimers, legal review triggers."  
   required: true

 \- name: telemetry\_event\_dictionary\_v1  
   type: file/json  
   description: "Event names \+ definitions for funnel steps (e.g., view\_landing, start\_signup, activate)."  
   required: false

 \- name: user\_segments\_v1  
   type: file/json  
   description: "Personas/segments and what each cares about most."  
   required: false

outputs:  
 \- name: experiment\_design\_package  
   type: file/zip  
   success\_criteria: \>  
     Contains creative \+ copy variants across the funnel, plus a measurement plan,  
     platform specs, and deployment-ready naming/IDs.

 \- name: copy\_deck\_v1  
   type: file/markdown  
   success\_criteria: \>  
     Variant copy for ads, landing, onboarding microcopy, lifecycle messages,  
     including disclaimers \+ claim substantiation notes.

 \- name: claims\_evidence\_matrix\_v1  
   type: file/markdown  
   success\_criteria: \>  
     Every claim maps to evidence and required disclaimers; includes banned words  
     and rewrite-safe alternatives.

 \- name: message\_blocks\_library\_v1  
   type: file/json  
   success\_criteria: \>  
     Modular messaging blocks (hooks/proof/objections/CTAs) tagged by audience,  
     funnel stage, and compliance risk.

 \- name: message\_match\_map\_v1  
   type: file/json  
   success\_criteria: \>  
     Promise \+ proof mapping across Ad → Landing → Product moment, preventing drift.

 \- name: promise\_break\_report\_v1  
   type: file/markdown  
   success\_criteria: \>  
     Identifies where the promise breaks (bounce/drop-off points), with recommended fixes:  
     rewrite promise, add proof, simplify step, or align onboarding.

 \- name: measurement\_plan\_v1  
   type: file/markdown  
   success\_criteria: \>  
     Defines primary metric, guardrails, segments, sample assumptions, duration,  
     stop rules, and reporting format.

dependencies:  
 tools:  
   \[  
     figma\_variables,  
     adobe\_after\_effects,  
     email\_builder\_knak,  
     analytics\_dashboard,  
     ad\_platform\_specs,  
     doc\_editor,  
     grammar\_readability\_checker,  
     session\_replay\_optional  
   \]  
 knowledge:  
   \[  
     conversion\_rate\_optimization\_cro,  
     behavioral\_psychology\_biases,  
     ftc\_truth\_in\_advertising,  
     financial\_compliance\_finra,  
     wcag\_accessibility  
   \]

verification:  
 required: true  
 methods:  
   \[  
     compliance\_scan,  
     claims\_evidence\_matrix\_check,  
     message\_match\_check,  
     readability\_grade\_check,  
     accessibility\_check,  
     platform\_specs\_check,  
     hypothesis\_alignment\_audit,  
     promise\_break\_analysis\_check  
   \]

policy:  
 safety\_notes: \>  
   Truth in advertising only. No dark patterns. No fake urgency/scarcity.  
   Avoid prohibited absolutes unless explicitly approved (e.g., “guaranteed,” “risk-free,” “instant”).  
   Financial claims require correct disclaimers and cannot be misleading by omission.

ports:  
 provides:  
   \[  
     ad\_creative\_set\_v1,  
     landing\_page\_variant\_v1,  
     onboarding\_variant\_v1,  
     lifecycle\_email\_set\_v1,  
     copy\_deck\_v1,  
     claims\_evidence\_matrix\_v1,  
     message\_blocks\_library\_v1,  
     message\_match\_map\_v1,  
     promise\_break\_report\_v1,  
     measurement\_plan\_v1  
   \]  
 consumes:  
   \[  
     user\_research\_insight\_v1,  
     performance\_data\_v1,  
     design\_system\_tokens\_v1,  
     legal\_disclaimer\_library\_v1,  
     telemetry\_event\_dictionary\_v1  
   \]  
\---  
\# Purpose  
\- Operationalize \*\*Design \+ Copy as a Growth Lever\*\*.  
\- Win condition: ship experiments that beat control on a defined KPI (CTR/CVR/CPA/Activation/Retention)  
 while maintaining compliance, accessibility, and user trust.

\# Operating Model (What’s new)  
\#\# 1\) Copy-Experiment Engine (Claims → Evidence → Disclaimer)  
\- Every meaningful promise becomes a “claim” that must be:  
 \- supported with evidence, or  
 \- rewritten into safer value framing, or  
 \- removed.  
\- Output is not just “copy,” but a compliance-safe \*\*system\*\* (claims matrix \+ disclaimers \+ rewrite options).

\#\# 2\) Message Blocks Library (Modular Copy Components)  
Message is built from reusable blocks:  
\- \*\*Hook blocks\*\* (pattern interrupt, time-saved, identity, cost-of-inaction)  
\- \*\*Proof blocks\*\* (numbers, screenshots, quotes, process proof)  
\- \*\*Objection blocks\*\* (time, trust, price, complexity)  
\- \*\*CTA blocks\*\* (single clear action, stage-appropriate)  
These blocks are tagged by:  
\- funnel stage, segment, tone, compliance risk level, and “best use.”

\#\# 3\) Message-Match Telemetry (Promise Break Detection)  
Beyond conversion: detect where the promise breaks across:  
\- Ad click → landing bounce  
\- landing engagement → signup drop  
\- signup completion → activation failure  
\- activation → retention decay  
Output: \*\*promise\_break\_report\_v1\*\* with fix recommendations.

\# Invariants (must always hold)  
\- Ethical Growth: no deception, no coercion, no trick flows.  
\- Message Match: the promise must survive Ad → Landing → Product first value moment.  
\- Truth & Claims: claims must be substantiated or rewritten.  
\- Readability: simple language, scannable structure, one clear action per screen.  
\- Accessibility: WCAG AA for product \+ email; captions where relevant.

\# Decision Rules  
\- Acquisition: prioritize hook \+ clarity. One promise, one proof cue, one CTA.  
\- Activation: prioritize friction removal and “what happens next” clarity (microcopy beats clever).  
\- Retention: prioritize relevance \+ timing (lead with user’s unfinished job, not product features).  
\- If creative fatigue: trigger \[Action: Format Flip\] (UGC ↔ motion ↔ static ↔ carousel).  
\- If mismatch signals appear: trigger \[Action: Promise Realignment\] (ad hero \== landing hero \== onboarding first screen).

\# Execution Steps  
\#\# Phase 0 — Intake (Define the win)  
1\. Confirm primary metric \+ guardrails.  
2\. Capture constraints: compliance triggers, brand voice, platform rules.  
3\. Identify control assets and baseline performance.

\#\# Phase 1 — Message Strategy (Write before you design)  
1\. Produce 3 angles: Safe / Bold / System.  
2\. Build \*\*claims\_evidence\_matrix\_v1\*\*:  
  \- claim → evidence → disclaimer → banned words → rewrite alternatives.  
3\. Select/assemble message blocks from \*\*message\_blocks\_library\_v1\*\* for each variant.  
4\. Build \*\*message\_match\_map\_v1\*\* (promise \+ proof across the funnel).

\#\# Phase 2 — Production (Design \+ copy as one unit)  
\- Paid Media: variants for hook/headline/body/CTA, plus motion/storyboards and placements.  
\- Landing \+ Product: promise on first screen, proof hierarchy, simplified onboarding and error microcopy.  
\- Lifecycle: subject line tests \+ single-action emails/messages.

\#\# Phase 3 — Preflight (Ship-ready gates)  
1\. Compliance scan (claims/disclaimers/prohibited language).  
2\. Readability gate (simple wording, scannable layout).  
3\. Message-match gate (ad hero matches landing hero; landing matches onboarding first screen).  
4\. Platform specs gate (file size/safe zones/limits).  
5\. Accessibility gate (contrast/type/captions).

\#\# Phase 4 — Measurement \+ Iteration (Includes promise-break analysis)  
1\. Launch with unique IDs and naming discipline.  
2\. Report:  
  \- primary metric lift  
  \- guardrails  
  \- segment deltas  
3\. Run \*\*promise break analysis\*\* (using telemetry):  
  \- detect breakpoints  
  \- recommend fix type:  
    \- rewrite promise  
    \- add proof  
    \- simplify step  
    \- align onboarding  
4\. Decide: Kill / Iterate / Scale winner.  
5\. Update the \*\*message\_blocks\_library\_v1\*\* with what worked (tag it as “validated”).

\# Verification (CoVe)  
1\. Hypothesis Alignment: each variant expresses the bet clearly.  
2\. Claims Substantiation: every claim is supported or rewritten.  
3\. Compliance: disclaimers present, legible, correctly placed.  
4\. Message Match: promise and terms consistent across funnel.  
5\. Promise Break Analysis: breakpoints identified with action recommendations.  
6\. Quality \+ Platform: correct specs and rendering.  
7\. Accessibility: WCAG AA for applicable surfaces.

\# Failure Modes & Escalation  
\- Creative fatigue → format flip \+ new hook structure.  
\- Copy fatigue → rotate angle \+ objection handling blocks.  
\- Mismatch → realign promise across ad/landing/onboarding.  
\- Compliance block → switch to value framing \+ approved disclaimer blocks.  
\- Segment drift → split variants by segment.

\# Artifacts & Templates  
\#\# Message Blocks Library Schema (message\_blocks\_library\_v1)  
\`\`\`json  
{  
 "hook\_blocks": \[  
   {"id": "hook\_time\_saved\_01", "stage": "Acquisition", "risk": "low", "text": "Stop doing repeat work."}  
 \],  
 "proof\_blocks": \[  
   {"id": "proof\_process\_01", "stage": "Landing", "risk": "low", "text": "See the setup. Reuse it weekly."}  
 \],  
 "objection\_blocks": \[  
   {"id": "obj\_trust\_01", "stage": "Landing", "risk": "medium", "text": "No hype. You see it working first."}  
 \],  
 "cta\_blocks": \[  
   {"id": "cta\_primary\_01", "stage": "Acquisition", "risk": "low", "text": "See how"}  
 \]  
}

## **Output Schema (experiment\_design\_package)**

{  
 "experiment\_id": "EXP-2026-Q1-05",  
 "funnel\_stage": "Acquisition",  
 "channel": "Meta\_Reels",  
 "hypothesis": "Clearer promise \+ proof cue reduces CPA and increases activation.",  
 "variants": \[  
   {"id": "A", "concept": "Safe", "creative\_type": "Static"},  
   {"id": "B", "concept": "Bold", "creative\_type": "Motion"}  
 \],  
 "compliance\_status": "PENDING\_LEGAL"  
}

\---

