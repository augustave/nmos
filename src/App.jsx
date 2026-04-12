import { useState } from "react";
import { firmContext, repoTree, scenarios, skillModules, swarmNodes } from "./data";

function App() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const currentScenario =
    scenarios.find((scenario) => scenario.id === activeScenario) ?? scenarios[0];

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Design Operating System</div>
          <h1>{firmContext.title}</h1>
          <p className="hero-subtitle">{firmContext.subtitle}</p>
          <p className="hero-thesis">{firmContext.thesis}</p>
          <div className="hero-actions">
            <a href="#flow" className="button button-primary">
              See The Swarm
            </a>
            <a href="#repo" className="button button-secondary">
              View Repo Shape
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-label">What This Enables</div>
          <ul>
            <li>Turns complex portfolio stories into clear, premium media.</li>
            <li>Encodes taste and review gates instead of vague process.</li>
            <li>Proves you can design both the artifact and the workflow.</li>
          </ul>
        </div>
      </header>

      <main>
        <section className="section section-grid" id="flow">
          <div className="section-heading">
            <span>Swarm Logic</span>
            <h2>The team model, encoded.</h2>
            <p>
              This is framed as a bespoke operating model for new media work at the
              firm: thesis, system, production, and creative review.
            </p>
          </div>

          <div className="node-grid">
            {swarmNodes.map((node, index) => (
              <article
                className="node-card"
                key={node.id}
                style={{ "--accent": node.color, animationDelay: `${index * 110}ms` }}
              >
                <div className="node-index">0{index + 1}</div>
                <h3>{node.name}</h3>
                <p>{node.role}</p>
                <ul>
                  {node.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section scenario-section">
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

              <div className="scenario-arrow">Swarm pass</div>

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
        </section>

        <section className="section section-grid">
          <div className="section-heading narrow">
            <span>Proof</span>
            <h2>Show the structure, not just the taste.</h2>
            <p>
              The system is legible at two levels: the output surface and the
              operating logic behind it. `SKILL.md` and `SWARM.md` make the
              workflow reusable, reviewable, and bespoke to the team’s actual work.
            </p>
          </div>

          <div className="module-grid">
            {skillModules.map((module, index) => (
              <article className="module-card" key={module.title} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="module-badge">{module.badge}</div>
                <h3>{module.title}</h3>
                <pre>{module.lines.join("\n")}</pre>
              </article>
            ))}
          </div>
        </section>

        <section className="section repo-section" id="repo">
          <div className="section-heading">
            <span>Reference Repository</span>
            <h2>The repository is part of the demonstration.</h2>
            <p>
              The implementation is meant to be inspectable: one working web app,
              one operating-system skill package, one sample run, and a readable project structure.
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
              <div className="repo-pill">Inspectable</div>
            </div>
            <pre className="repo-tree">{repoTree.join("\n")}</pre>
          </div>
        </section>

        <section className="section outro">
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
        </section>
      </main>
    </div>
  );
}

export default App;
