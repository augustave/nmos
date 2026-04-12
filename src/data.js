export const firmContext = {
  title: "New Media Operating System",
  subtitle:
    "A bespoke operating model for how a16z's design and new media team could turn portfolio complexity, thesis material, and founder signal into clear, high-craft media systems.",
  thesis:
    "The point is not to automate taste. The point is to encode narrative judgment, visual rigor, and production flow so the team can move faster without flattening the idea.",
};

export const swarmNodes = [
  {
    id: "thesis-editor",
    name: "Thesis Editor",
    role: "Turns partner memos, founder nuance, market logic, and product complexity into a story spine worth packaging.",
    outputs: [
      "story brief",
      "editorial thesis",
      "signal hierarchy",
      "story framing",
    ],
    color: "var(--chart-1)",
  },
  {
    id: "visual-systems-lead",
    name: "Visual Systems Lead",
    role: "Establishes the visual language across editorial, motion, social, stage, and product-adjacent surfaces.",
    outputs: [
      "visual direction",
      "system rules",
      "motion rules",
      "surface behavior",
    ],
    color: "var(--chart-2)",
  },
  {
    id: "new-media-producer",
    name: "New Media Producer",
    role: "Translates the system into actual artifacts: motion cuts, launch packages, interactive explainers, event media.",
    outputs: [
      "motion cuts",
      "launch package",
      "interactive explainer",
      "event media",
    ],
    color: "var(--chart-3)",
  },
  {
    id: "creative-director-review",
    name: "Creative Director Review",
    role: "Checks whether the work is sharp enough, truthful enough, and distinctive enough to represent the platform.",
    outputs: [
      "claim review",
      "taste review",
      "distribution fit",
      "final greenlight",
    ],
    color: "var(--chart-4)",
  },
];

export const scenarios = [
  {
    id: "ai-infra-launch-system",
    title: "Flagship: AI Infrastructure Launch System",
    prompt:
      "Take a dense founder update, a partner thesis angle, and a product release with real technical depth, then turn it into a launch system that works across editorial, motion, social, and stage.",
    input: [
      "founder memo",
      "partner thesis note",
      "technical demo capture",
      "product screenshots",
      "launch objective",
      "brand constraints",
    ],
    output: [
      "90-sec launch film treatment",
      "editorial launch page concept",
      "social cutdown system",
      "stage visual toolkit",
      "internal partner talking points",
    ],
    audience: "Portfolio company launch with internal and external distribution.",
    review:
      "Do not let the media imply product maturity beyond what the release actually proves. Keep the tone ambitious, but the claim structure disciplined.",
  },
  {
    id: "sector-thesis-editorial",
    title: "Thesis Editorial Package",
    prompt:
      "Turn a sector thesis into an editorial package that can travel across keynote visuals, social fragments, and long-form design language.",
    input: [
      "research memo",
      "market map",
      "quotes",
      "data visuals",
    ],
    output: [
      "editorial system",
      "motion narrative",
      "event keynote frames",
      "newsletter assets",
    ],
    audience: "Thesis communication across platform, social, and live moments.",
    review:
      "The work should feel intellectually sharp rather than trend-chasing. Distinction matters more than decorative complexity.",
  },
  {
    id: "founder-story-system",
    title: "Founder Storytelling System",
    prompt:
      "Package a founder conversation into a short-form media stack that preserves nuance while making the strongest signals travel cleanly.",
    input: [
      "interview transcript",
      "brand references",
      "key moments",
      "distribution goals",
    ],
    output: [
      "clip map",
      "episode identity",
      "thumbnail system",
      "promo sequence",
    ],
    audience: "Founder-led storytelling for social, editorial, and recap surfaces.",
    review:
      "Do not over-edit the founder into generic startup confidence. Keep specificity, rhythm, and actual voice.",
  },
];

export const skillModules = [
  {
    title: "SKILL.md",
    badge: "System Logic",
    lines: [
      "name: new-media-operating-system",
      "intent: turn dense portfolio and thesis material into a narrative media system",
      "inputs: partner memo, founder update, launch objective, brand context",
      "outputs: story spine, visual system, launch package, review gate",
      "verification: narrative integrity, claim discipline, visual distinction",
    ],
  },
  {
    title: "SWARM.md",
    badge: "Operating Model",
    lines: [
      "topology: thesis editor -> visual systems lead -> producer -> creative director review",
      "feedback_mode: reciprocal review",
      "failure_mode: style outruns substance",
      "success_metric: clarity, distinction, distribution fit, taste",
    ],
  },
  {
    title: "Repo",
    badge: "Implementation",
    lines: [
      "/skills/new-media-operating-system/SKILL.md",
      "/skills/new-media-operating-system/SWARM.md",
      "/skills/new-media-operating-system/examples/portfolio-launch.md",
      "/src/data.js",
      "/README.md",
    ],
  },
];

export const repoTree = [
  "README.md",
  "skills/",
  "skills/new-media-operating-system/",
  "skills/new-media-operating-system/SKILL.md",
  "skills/new-media-operating-system/SWARM.md",
  "skills/new-media-operating-system/examples/portfolio-launch.md",
  "src/App.jsx",
  "src/data.js",
  "src/styles.css",
];

export const skillLibrary = [
  {
    id: "new-media-operating-system",
    name: "New Media Operating System",
    version: "0.1.0",
    status: "active",
    owner: "design-new-media",
    intent:
      "Turn dense partner, founder, thesis, and product material into a bespoke new-media operating system across motion, editorial, social, interactive, and stage formats.",
    tags: ["new-media", "editorial-design", "motion-systems", "portfolio-storytelling"],
    inputs: ["core material", "distribution goal", "brand context"],
    outputs: ["story spine", "visual direction", "format plan", "review notes"],
    swarm: ["Thesis Editor", "Visual Systems Lead", "New Media Producer", "Creative Director Review"],
  },
  {
    id: "spatial-motion-genai-architect",
    name: "Spatial & Motion GenAI Architect",
    version: "1.1.0",
    status: "active",
    owner: "advanced-interfaces-rnd",
    intent:
      "Design experimental spatial and motion-based prototypes that translate complex technical systems into immersive visual narratives using generative AI, real-time compositing, and XR.",
    tags: ["motion-design", "xr-prototyping", "generative-ai", "spatial-computing"],
    inputs: ["technical system data", "spatial interaction spec", "brand motion constraints", "demo context"],
    outputs: ["concept reel", "node logic graph", "XR interaction sandbox", "workflow docs"],
    swarm: ["System Translator", "Motion Architect", "XR Prototyper", "Demo Director"],
  },
  {
    id: "growth-performance-design-architect",
    name: "Growth & Performance Design Architect",
    version: "1.2.0",
    status: "active",
    owner: "growth-marketing-product-union",
    intent:
      "Design and write high-performing acquisition, activation, and retention experiences with hypothesis-driven experimentation and message-match continuity.",
    tags: ["performance-marketing", "conversion-optimization", "copywriting", "ab-testing"],
    inputs: ["growth hypothesis", "funnel stage", "performance data", "offer definition", "brand constraints"],
    outputs: ["experiment design", "landing pages", "ad creative system", "funnel analytics"],
    swarm: ["Hypothesis Architect", "Copy Strategist", "Visual Performance Lead", "Analytics Reviewer"],
  },
  {
    id: "autonomous-venture-studio",
    name: "Autonomous Venture Studio",
    version: "2.0.0",
    status: "active",
    owner: "venture-studio-executive-office",
    intent:
      "Operate a startup-within-an-agent: validate opportunity, design enterprise-grade product, construct brand system, produce executive narrative, and govern autonomous workflows.",
    tags: ["venture-studio", "product-design", "brand-systems", "executive-narrative"],
    inputs: ["venture brief", "business constraints", "technical constraints", "market signals"],
    outputs: ["market requirement", "system architecture", "brand system", "executive narrative"],
    swarm: ["Market Validator", "Product Architect", "Brand Director", "Executive Narrator"],
  },
];

export const simulationOutputs = {
  "thesis-editor": {
    label: "Story Brief",
    content:
      "The founder has built the first inference-cost optimizer that makes frontier models 4x cheaper at scale. The narrative spine: cost used to be a moat — now it's a vulnerability. Frame around the moment a Series B company can outperform incumbents on cost without sacrificing quality.",
  },
  "visual-systems-lead": {
    label: "Visual Direction",
    content:
      "Dark minimal system. Typography-forward with monospace data callouts. Accent: electric teal on matte black. Motion language: precise, mechanical transitions — no organic flourishes. The system should feel like infrastructure, not a consumer product.",
  },
  "new-media-producer": {
    label: "Launch Package",
    content:
      "90-sec hero film: split-screen showing cost curves collapsing in real time. Social cutdowns: 3 vertical clips (problem, mechanism, proof). Stage toolkit: animated data viz for partner keynote. Editorial: long-form technical walkthrough with inline demos.",
  },
  "creative-director-review": {
    label: "Review Gate",
    content:
      "Approved with notes: The cost narrative is strong but needs a human anchor — add a 15-sec founder segment showing conviction, not just metrics. Ensure the social cuts don't oversimplify the technical mechanism into generic 'AI is cheaper' territory.",
  },
};

export const navSections = [
  { id: "flow", label: "Swarm" },
  { id: "scenarios", label: "Workflows" },
  { id: "skills", label: "Skills" },
  { id: "simulate", label: "Simulate" },
  { id: "repo", label: "Repo" },
];
