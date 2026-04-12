# New Media Operating System

This repository is a web app and structured skill package demonstrating how a
bespoke swarm could support an a16z-style design and new media team.

The app presents a firm-specific operating model for turning portfolio
complexity, thesis material, and founder signal into high-craft media systems
without losing taste, truth, or strategic clarity.

<img width="1714" height="962" alt="Screenshot 2026-04-12 at 7 25 29 PM 1" src="https://github.com/user-attachments/assets/7f79076c-d82e-4f9f-a903-5f4699566a52" />

## Goal

Build a viewer-facing demonstration of how a new media team could encode its
own operating logic as reusable `SKILL.md` and `SWARM.md` artifacts, while still
producing premium creative work.

## Intention

- Show that the workflow can be encoded, not just described.
- Make the swarm feel native to a design and creative-director audience.
- Demonstrate how narrative judgment, visual systems, production, and review
  can work together as one operating model.
- Keep the output inspectable through a real repository and deployable web app.

## Live URLs

- Local: `http://localhost:5173/`
- Network: `http://192.168.1.157:5173/`
- GitHub: `https://github.com/augustave/new-media-operating-system-demo`
- GitHub Pages: `https://augustave.github.io/new-media-operating-system-demo/`

These local URLs reflect the most recent verified dev-server run on
April 12, 2026. The GitHub Pages URL will go live after the first Actions deploy completes.

## Build History

1. Structured the workspace as a canonical skill library with cataloged skill
   packages and validation.
2. Added a React/Vite web app to demonstrate the operating model as a real
   product surface instead of a static note.
3. Removed self-referential interview language so the experience reads as a
   viewer-facing system demonstration.
4. Renamed and refined the concept into `new-media-operating-system`.
5. Reworked the swarm to feel more bespoke with the nodes:
   `Thesis Editor`, `Visual Systems Lead`, `New Media Producer`, and
   `Creative Director Review`.
6. Expanded the flagship scenario into an AI infrastructure launch workflow
   with explicit inputs, outputs, audience, and review note.
7. Added GitHub Pages deployment support through Vite base configuration and a
   GitHub Actions workflow.

## Knowledge Base

The repo is grounded in a small internal knowledge base of structured skills:

- `skills/new-media-operating-system/`
  The bespoke new-media operating model shown in the demo.
- `skills/spatial-motion-genai-architect/`
  A higher-fidelity spatial and motion prototyping system.
- `skills/growth-performance-design-architect/`
  A structured growth, copy, and performance design system.
- `skills/autonomous-venture-studio/`
  A larger venture-studio orchestration model spanning product, brand, and narrative.

Supporting infrastructure:

- `catalog.yaml`
  Source of truth for skill discovery and package expectations.
- `scripts/validate_library.py`
  Validator for package existence, YAML integrity, and `SKILL.md` front matter.

## App Structure

```text
src/
  App.jsx
  data.js
  styles.css

skills/new-media-operating-system/
  SKILL.md
  PRD.yaml
  SWARM.md
  examples/portfolio-launch.md
```

## Swarm Shape

The demo encodes the workflow as:

1. `Thesis Editor`
2. `Visual Systems Lead`
3. `New Media Producer`
4. `Creative Director Review`

The point is not generic automation. The point is a repeatable, taste-aware,
reviewable system for producing narrative media outputs.

## Run Locally

```bash
npm install
npm run dev
```

## Validate

```bash
python3 scripts/validate_library.py
npm run build
```

## GitHub Pages

Deployment is configured through `.github/workflows/deploy-pages.yml`.

The Vite base path is set dynamically for GitHub Actions so the app can be
served correctly from a repository-scoped Pages URL.
