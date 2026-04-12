import { useState, useEffect, useRef, useCallback } from "react";
import {
  firmContext,
  repoTree,
  scenarios,
  skillModules,
  swarmNodes,
  skillLibrary,
  simulationOutputs,
  navSections,
} from "./data";

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ className, id, children }) {
  const ref = useScrollReveal();
  return (
    <section className={`section reveal-target ${className || ""}`} id={id} ref={ref}>
      {children}
    </section>
  );
}

function SwarmConnector() {
  return (
    <div className="swarm-connector">
      <svg viewBox="0 0 80 24" className="connector-svg">
        <path
          d="M 4 12 L 76 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <polygon points="72,8 80,12 72,16" fill="currentColor" />
      </svg>
      <span>Swarm pass</span>
      <svg viewBox="0 0 80 24" className="connector-svg">
        <path
          d="M 4 12 L 76 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <polygon points="72,8 80,12 72,16" fill="currentColor" />
      </svg>
    </div>
  );
}

function App() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const [activeSkill, setActiveSkill] = useState(skillLibrary[0].id);
  const [simRunning, setSimRunning] = useState(false);
  const [simStep, setSimStep] = useState(-1);
  const [simInput, setSimInput] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const currentScenario =
    scenarios.find((s) => s.id === activeScenario) ?? scenarios[0];
  const currentSkill =
    skillLibrary.find((s) => s.id === activeSkill) ?? skillLibrary[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const runSimulation = useCallback(() => {
    if (simRunning) return;
    setSimRunning(true);
    setSimStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= swarmNodes.length) {
        clearInterval(interval);
        setSimRunning(false);
      } else {
        setSimStep(step);
      }
    }, 1400);
  }, [simRunning]);

  const resetSimulation = () => {
    setSimRunning(false);
    setSimStep(-1);
  };

  return (
    <div className="app-shell">
      <nav className={`site-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-brand">NMOS</span>
          <div className="nav-links">
            {navSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="nav-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Design Operating System</div>
          <div className="hero-file-title">SKILL.MD</div>
          <h1>{firmContext.title}</h1>
          <p className="hero-subtitle">{firmContext.subtitle}</p>
          <p className="hero-thesis">{firmContext.thesis}</p>
          <div className="hero-actions">
            <a href="#simulate" className="button button-primary">
              Run Simulation
            </a>
            <a href="#flow" className="button button-secondary">
              View System
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-label">Capabilities</div>
          <ul>
            <li>Turns complex portfolio stories into clear, premium media.</li>
            <li>Encodes taste and review gates instead of vague process.</li>
            <li>Proves you can design both the artifact and the workflow.</li>
          </ul>
        </div>
      </header>

      <main>
        <RevealSection className="section-grid" id="flow">
          <div className="section-heading">
            <span>Swarm Logic</span>
            <h2>The team model, encoded.</h2>
            <p>
              A bespoke operating model for new media work at the firm: thesis,
              system, production, and creative review.
            </p>
          </div>

          <div className="node-grid">
            {swarmNodes.map((node, index) => (
              <article className="node-card" key={node.id}>
                <div>
                  <div className="node-index">0{index + 1}</div>
                  <h3>{node.name}</h3>
                  <p>{node.role}</p>
                </div>
                <ul>
                  {node.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="scenario-section" id="scenarios">
          <div className="section-heading">
            <span>Flagship Workflow</span>
            <h2>How the system would actually work inside the department.</h2>
            <p>
              Each scenario starts from actual firm-shaped material and routes it
              through the same operating model into a tailored media stack.
            </p>
          </div>

          <div className="scenario-layout">
            <div className="scenario-tabs">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  className={scenario.id === activeScenario ? "tab active" : "tab"}
                  onClick={() => setActiveScenario(scenario.id)}
                  type="button"
                >
                  {scenario.title}
                </button>
              ))}
            </div>

            <div className="scenario-view">
              <div className="scenario-block">
                <div className="scenario-label">Input</div>
                <h3>{currentScenario.title}</h3>
                <p>{currentScenario.prompt}</p>
                <div className="token-row">
                  {currentScenario.input.map((item) => (
                    <span className="token" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="scenario-meta">
                  <strong>Audience:</strong> {currentScenario.audience}
                </p>
              </div>

              <SwarmConnector />

              <div className="scenario-block output">
                <div className="scenario-label">Output</div>
                <ul className="output-list">
                  {currentScenario.output.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="scenario-meta">
                  <strong>Creative director note:</strong> {currentScenario.review}
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="section-grid" id="skills">
          <div className="section-heading">
            <span>Skill Library</span>
            <h2>Four encoded operating models.</h2>
            <p>
              Each skill package is a self-contained operating system with defined
              inputs, outputs, swarm topology, and review gates.
            </p>
          </div>

          <div className="skill-browser">
            <div className="skill-tabs">
              {skillLibrary.map((skill) => (
                <button
                  key={skill.id}
                  className={skill.id === activeSkill ? "skill-tab active" : "skill-tab"}
                  onClick={() => setActiveSkill(skill.id)}
                  type="button"
                >
                  <span className="skill-tab-name">{skill.name}</span>
                  <span className="skill-tab-version">v{skill.version}</span>
                </button>
              ))}
            </div>

            <div className="skill-detail">
              <div className="skill-detail-header">
                <h3>{currentSkill.name}</h3>
                <div className="skill-meta-row">
                  <span className="skill-badge">{currentSkill.status}</span>
                  <span className="skill-badge">{currentSkill.owner}</span>
                </div>
              </div>
              <p className="skill-intent">{currentSkill.intent}</p>
              <div className="skill-columns">
                <div>
                  <h4>Inputs</h4>
                  <ul>
                    {currentSkill.inputs.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Outputs</h4>
                  <ul>
                    {currentSkill.outputs.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Swarm Nodes</h4>
                  <ul>
                    {currentSkill.swarm.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="skill-tags">
                {currentSkill.tags.map((tag) => (
                  <span className="token" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="section-grid simulate-section" id="simulate">
          <div className="section-heading">
            <span>Interactive</span>
            <h2>Watch the swarm run.</h2>
            <p>
              Click "Run" to see each node process material sequentially. Paste
              your own input to see what the system would produce.
            </p>
          </div>

          <div className="sim-layout">
            <div className="sim-input-panel">
              <label className="sim-label" htmlFor="sim-textarea">
                Paste a founder memo, thesis note, or launch brief:
              </label>
              <textarea
                id="sim-textarea"
                className="sim-textarea"
                placeholder="e.g. Our portfolio company just shipped a new inference engine that cuts cost by 4x while maintaining quality parity with GPT-4..."
                value={simInput}
                onChange={(e) => setSimInput(e.target.value)}
                rows={5}
              />
              <div className="sim-actions">
                <button
                  className="button button-primary"
                  onClick={runSimulation}
                  disabled={simRunning}
                  type="button"
                >
                  {simRunning ? "Processing..." : "Run Swarm"}
                </button>
                {simStep >= 0 && !simRunning && (
                  <button
                    className="button button-secondary"
                    onClick={resetSimulation}
                    type="button"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div className="sim-pipeline">
              {swarmNodes.map((node, index) => {
                const isActive = simStep === index;
                const isComplete = simStep > index;
                const output = simulationOutputs[node.id];
                return (
                  <div
                    key={node.id}
                    className={`sim-node ${isActive ? "sim-node-active" : ""} ${isComplete ? "sim-node-complete" : ""}`}
                  >
                    <div className="sim-node-header">
                      <span className="sim-node-index">0{index + 1}</span>
                      <span className="sim-node-name">{node.name}</span>
                      {isActive && <span className="sim-node-status pulse">Processing</span>}
                      {isComplete && <span className="sim-node-status done">Complete</span>}
                    </div>
                    {(isActive || isComplete) && (
                      <div className="sim-node-output">
                        <strong>{output.label}:</strong> {output.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="section-grid">
          <div className="section-heading narrow">
            <span>Proof</span>
            <h2>Show the structure, not just the taste.</h2>
            <p>
              The system is legible at two levels: the output surface and the
              operating logic behind it. <code>SKILL.md</code> and <code>SWARM.md</code> make the
              workflow reusable, reviewable, and bespoke.
            </p>
          </div>

          <div className="module-grid">
            {skillModules.map((module) => (
              <article className="module-card" key={module.title}>
                <div className="module-badge">{module.badge}</div>
                <h3>{module.title}</h3>
                <pre>{module.lines.join("\n")}</pre>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="repo-section" id="repo">
          <div className="section-heading">
            <span>Reference Repository</span>
            <h2>The repository is part of the demonstration.</h2>
            <p>
              The implementation is meant to be inspectable: one working web app,
              one operating-system skill package, one sample run.
            </p>
          </div>

          <div className="repo-panel">
            <div className="repo-head">
              <div>
                <div className="repo-name">new-media-operating-system-demo</div>
                <div className="repo-caption">
                  Working app and structured operating-system package for thesis translation, design systems, and new media production.
                </div>
              </div>
              <a
                href="https://github.com/augustave/new-media-operating-system-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="repo-pill"
              >
                View on GitHub
              </a>
            </div>
            <pre className="repo-tree">{repoTree.join("\n")}</pre>
            <div className="repo-demo-note">
              This is a demo application. View the full source, skill packages, and
              deployment configuration on GitHub.
            </div>
          </div>
        </RevealSection>

        <RevealSection className="outro">
          <div className="outro-card">
            <span>Why This Matters</span>
            <h2>A strong design team should be able to encode its own taste, review logic, and production flow.</h2>
            <p>
              The value is not generic automation. The value is a repeatable,
              taste-preserving system for turning portfolio ideas, founder stories,
              and partner narratives into polished media outputs without losing truth,
              specificity, or strategic signal.
            </p>
          </div>
        </RevealSection>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-label">Demo Application</span>
          <a
            href="https://github.com/augustave/new-media-operating-system-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            github.com/augustave/new-media-operating-system-demo
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
