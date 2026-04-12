export const firmContext = {
  title: "New Media Operating System",
  subtitle:
    "A bespoke operating model for how a16z’s design and new media team could turn portfolio complexity, thesis material, and founder signal into clear, high-craft media systems.",
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
