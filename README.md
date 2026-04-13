# SKILL.MD — New Media Operating System

A working demo and structured skill package showing how a bespoke swarm could support an a16z-style design and new media team.

The app encodes an operating model for turning portfolio complexity, thesis material, and founder signal into high-craft media systems — without losing taste, truth, or strategic clarity.

<img width="1719" height="952" alt="Group 21" src="https://github.com/user-attachments/assets/eb3f9715-637a-4479-b06c-291a527fa173" />

## Live

- **GitHub Pages:** https://augustave.github.io/nmos/
- **Repository:** https://github.com/augustave/new-media-operating-system-demo

## Art Direction](https://github.com/augustave/nmos)

**Chronological Tectonics** — Japanese Modernism × Swiss International Typographic Style.

- Museum substrate palette with categorical color blocks (crimson, cobalt, ochre)
- Gantt-chart layout with 1px structural rules
- Zero border-radius throughout
- Inter 900 for display, monospace for file-level branding
- Ghost watermark typography as section anchors
- Light and dark mode with full contrast

## Stack

- React 19 + Vite 7
- CSS custom properties (no framework)
- GitHub Actions → GitHub Pages
- Vitest + Testing Library

## Run Locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Test & Build

```bash
npm test
npm run build
python3 scripts/validate_library.py
```

## Swarm Shape

The demo encodes a four-node creative workflow:

1. **Thesis Editor** — Turns partner memos and founder nuance into a story spine
2. **Visual Systems Lead** — Builds the visual language from the narrative
3. **New Media Producer** — Assembles final deliverables across formats
4. **Creative Director Review** — Applies taste, tone, and strategic review

## Skill Library

The repo is grounded in a structured knowledge base of reusable skill packages:

| Skill | Purpose |
|-------|---------|
| `new-media-operating-system` | The bespoke operating model shown in the demo |
| `spatial-motion-genai-architect` | Spatial and motion prototyping system |
| `growth-performance-design-architect` | Growth, copy, and performance design system |
| `autonomous-venture-studio` | Venture-studio orchestration (product, brand, narrative) |

Each skill contains `SKILL.md`, `PRD.yaml`, `SWARM.md`, and example workflows. The library is validated by `scripts/validate_library.py` against `catalog.yaml`.

## Project Structure

```
src/
  App.jsx          # Full app — nav, hero, swarm, simulation, skill browser
  data.js          # All content and configuration
  styles.css       # Chronological Tectonics art direction

skills/
  new-media-operating-system/
    SKILL.md
    PRD.yaml
    SWARM.md
    examples/

.github/workflows/
  deploy-pages.yml  # Build + validate + deploy to GitHub Pages
```

## Deployment

GitHub Pages deployment runs automatically on push to `main` via `.github/workflows/deploy-pages.yml`. The workflow validates the skill library with Python, then builds and deploys the Vite app.
